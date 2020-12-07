import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import entityLinksHelper from '../../search/entity-links.helper';
export class AwSearchLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.layoutId = 'aw-search-layout';
        this.destroyed$ = new Subject();
        /** Emits when any of the search-facets are changed */
        this.facetsChange$ = new Subject();
        /** Emits when the pagination element
         * or the select-sort element are changed */
        this.additionalParamsChange$ = new Subject();
        /** Last queried text, used to check if the text has changed */
        this.previousText = '';
        /** Is true when the search is triggered with a new text-string */
        this.textHasChanged = false;
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.layoutId}.init`:
                    {
                        this.route = payload.route;
                        this.dataSource.onInit(payload);
                        this._listenToFacetsChange();
                        this._listenToAdditionalParamsChange();
                        this._listenToRouterChanges();
                        this._listenToInternalFilters();
                        const { value: textInput } = this.dataSource.searchModel.getFiltersByFacetId('query')[0];
                        if ((textInput || '').length > 0) {
                            this.dataSource.isSearchingText.next(true);
                            setTimeout(() => {
                                this.dataSource.onOrderByChange('_score_DESC');
                                this.additionalParamsChange$.next(); // emit from observable stream
                            }, 100);
                        }
                    }
                    break;
                case `${this.layoutId}.destroy`:
                    this.dataSource.onDestroy();
                    this.destroyed$.next();
                    break;
                case `${this.layoutId}.orderbychange`:
                    // handle the change of result-order
                    this.dataSource.onOrderByChange(payload);
                    this.additionalParamsChange$.next(); // emit from observable stream
                    break;
                case `${this.layoutId}.searchreset`:
                    this.dataSource.resetButtonEnabled = false;
                    this.dataSource.searchModel.clear();
                    this.additionalParamsChange$.next();
                    break;
                default:
                    console.warn('(search) unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'facets-wrapper.facetschange':
                    {
                        this.dataSource.resetPagination();
                        const { value: textInput } = this.dataSource.searchModel.getFiltersByFacetId('query')[0];
                        // Checks if <input type=text>'s value has changed
                        this.textHasChanged = !!(textInput && (textInput !== this.previousText));
                        this.previousText = textInput;
                        const activeOrder = this.dataSource.orderByOptions.filter((d) => d.selected)[0].value;
                        if (this.textHasChanged && (textInput || '').length > 0) {
                            // Add sort by score option
                            this.dataSource.isSearchingText.next(true);
                        }
                        else if ((textInput || '').length === 0 && /score/i.test(activeOrder)) {
                            // Remove sort by score option
                            this.dataSource.isSearchingText.next(false);
                            setTimeout(() => {
                                this.dataSource.onOrderByChange('label_sort_ASC');
                                this.additionalParamsChange$.next(); // emit from observable stream
                            }, 100);
                        }
                    }
                    break;
                case 'n7-smart-pagination.change':
                    this.dataSource.onResultsLimitChange(payload.value);
                    this.additionalParamsChange$.next();
                    break;
                default:
                    break;
            }
        });
    }
    /**
     * Handles changes to any of the search-facets
     */
    _listenToFacetsChange() {
        this.facetsChange$.pipe(debounceTime(500)).subscribe(() => {
            this.dataSource.resultsLoading = true;
            if (this.textHasChanged) {
                this.additionalParamsChange$.next();
            }
            else {
                this.dataSource.doSearchRequest$().subscribe(() => {
                    this.dataSource.resultsLoading = false;
                    this.dataSource.onSearchResponse();
                    this.emitGlobal('searchresponse', this.dataSource.getSearchModelId());
                });
            }
        });
    }
    /**
     * Handles entity links pagination
     */
    _listenToInternalFilters() {
        entityLinksHelper.listenToChanges(this.dataSource)
            .subscribe(() => {
            this.emitGlobal('searchresponse', this.dataSource.getSearchModelId());
        });
    }
    /**
     * Handles changes happening on pagination and select elements.
     */
    _listenToAdditionalParamsChange() {
        this.additionalParamsChange$.subscribe(() => {
            const { searchModel } = this.dataSource;
            const requestParams = searchModel.getRequestParams();
            const queryParams = searchModel.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((key) => { queryParams[key] = queryParams[key] || null; });
            // aditional params
            queryParams.orderby = this.dataSource.orderBy;
            queryParams.orderdirection = this.dataSource.orderDirection;
            queryParams.page = this.dataSource.currentPage;
            queryParams.limit = this.dataSource.pageSize;
            // If the searched text was updated, overwrite the query params and force sorting by "score".
            if (this.textHasChanged) {
                queryParams.orderby = '_score';
                queryParams.orderdirection = 'DESC';
                this.textHasChanged = false;
            }
            this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams,
            });
            this.facetsChange$.next();
        });
    }
    /** URL changes */
    _listenToRouterChanges() {
        this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
            this.emitOuter('queryparamschange', params);
            // aditional params control
            if (params.orderby && params.orderdirection) {
                this.dataSource.onOrderByChange(`${params.orderby}_${params.orderdirection}`);
            }
            if (params.page) {
                this.dataSource.onPaginationChange(`page-${params.page}`);
            }
            if (params.limit) {
                this.dataSource.setLimit(+params.limit);
            }
            this.facetsChange$.next();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQ0wsWUFBWSxFQUFFLFNBQVMsRUFDeEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLGlCQUFpQixNQUFNLGtDQUFrQyxDQUFDO0FBRWpFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBQWxEOztRQUNTLGFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUU3QixlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFJakQsc0RBQXNEO1FBQzlDLGtCQUFhLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFcEQ7b0RBQzRDO1FBQ3BDLDRCQUF1QixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTlELCtEQUErRDtRQUN2RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUUxQixrRUFBa0U7UUFDMUQsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFpS2pDLENBQUM7SUEvSlEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsT0FBTztvQkFBRTt3QkFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FB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Qy9FO1lBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMzRDtZQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgZGVib3VuY2VUaW1lLCB0YWtlVW50aWxcclxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBlbnRpdHlMaW5rc0hlbHBlciBmcm9tICcuLi8uLi9zZWFyY2gvZW50aXR5LWxpbmtzLmhlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxheW91dElkID0gJ2F3LXNlYXJjaC1sYXlvdXQnO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgcm91dGU6IGFueTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gYW55IG9mIHRoZSBzZWFyY2gtZmFjZXRzIGFyZSBjaGFuZ2VkICovXHJcbiAgcHJpdmF0ZSBmYWNldHNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgcGFnaW5hdGlvbiBlbGVtZW50XHJcbiAgICogb3IgdGhlIHNlbGVjdC1zb3J0IGVsZW1lbnQgYXJlIGNoYW5nZWQgKi9cclxuICBwcml2YXRlIGFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAvKiogTGFzdCBxdWVyaWVkIHRleHQsIHVzZWQgdG8gY2hlY2sgaWYgdGhlIHRleHQgaGFzIGNoYW5nZWQgKi9cclxuICBwcml2YXRlIHByZXZpb3VzVGV4dCA9ICcnO1xyXG5cclxuICAvKiogSXMgdHJ1ZSB3aGVuIHRoZSBzZWFyY2ggaXMgdHJpZ2dlcmVkIHdpdGggYSBuZXcgdGV4dC1zdHJpbmcgKi9cclxuICBwcml2YXRlIHRleHRIYXNDaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5sYXlvdXRJZH0uaW5pdGA6IHtcclxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuX2xpc3RlblRvRmFjZXRzQ2hhbmdlKCk7XHJcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0FkZGl0aW9uYWxQYXJhbXNDaGFuZ2UoKTtcclxuICAgICAgICAgIHRoaXMuX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpO1xyXG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9JbnRlcm5hbEZpbHRlcnMoKTtcclxuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHRleHRJbnB1dCB9ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoJ3F1ZXJ5JylbMF07XHJcbiAgICAgICAgICBpZiAoKHRleHRJbnB1dCB8fCAnJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoJ19zY29yZV9ERVNDJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7IC8vIGVtaXQgZnJvbSBvYnNlcnZhYmxlIHN0cmVhbVxyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5sYXlvdXRJZH0uZGVzdHJveWA6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5sYXlvdXRJZH0ub3JkZXJieWNoYW5nZWA6XHJcbiAgICAgICAgICAvLyBoYW5kbGUgdGhlIGNoYW5nZSBvZiByZXN1bHQtb3JkZXJcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTsgLy8gZW1pdCBmcm9tIG9ic2VydmFibGUgc3RyZWFtXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBgJHt0aGlzLmxheW91dElkfS5zZWFyY2hyZXNldGA6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzZXRCdXR0b25FbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuY2xlYXIoKTtcclxuICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyhzZWFyY2gpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldHNjaGFuZ2UnOiB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzZXRQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICBjb25zdCB7IHZhbHVlOiB0ZXh0SW5wdXQgfSA9IHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKCdxdWVyeScpWzBdO1xyXG4gICAgICAgICAgLy8gQ2hlY2tzIGlmIDxpbnB1dCB0eXBlPXRleHQ+J3MgdmFsdWUgaGFzIGNoYW5nZWRcclxuICAgICAgICAgIHRoaXMudGV4dEhhc0NoYW5nZWQgPSAhISh0ZXh0SW5wdXQgJiYgKHRleHRJbnB1dCAhPT0gdGhpcy5wcmV2aW91c1RleHQpKTtcclxuICAgICAgICAgIHRoaXMucHJldmlvdXNUZXh0ID0gdGV4dElucHV0O1xyXG4gICAgICAgICAgY29uc3QgYWN0aXZlT3JkZXIgPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJCeU9wdGlvbnMuZmlsdGVyKChkKSA9PiBkLnNlbGVjdGVkKVswXS52YWx1ZTtcclxuICAgICAgICAgIGlmICh0aGlzLnRleHRIYXNDaGFuZ2VkICYmICh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gQWRkIHNvcnQgYnkgc2NvcmUgb3B0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pc1NlYXJjaGluZ1RleHQubmV4dCh0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoKHRleHRJbnB1dCB8fCAnJykubGVuZ3RoID09PSAwICYmIC9zY29yZS9pLnRlc3QoYWN0aXZlT3JkZXIpKSB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBzb3J0IGJ5IHNjb3JlIG9wdGlvblxyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKCdsYWJlbF9zb3J0X0FTQycpO1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpOyAvLyBlbWl0IGZyb20gb2JzZXJ2YWJsZSBzdHJlYW1cclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBjaGFuZ2VzIHRvIGFueSBvZiB0aGUgc2VhcmNoLWZhY2V0c1xyXG4gICAqL1xyXG4gIHByaXZhdGUgX2xpc3RlblRvRmFjZXRzQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5mYWNldHNDaGFuZ2UkLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCkge1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kb1NlYXJjaFJlcXVlc3QkKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uU2VhcmNoUmVzcG9uc2UoKTtcclxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnc2VhcmNocmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0U2VhcmNoTW9kZWxJZCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGVudGl0eSBsaW5rcyBwYWdpbmF0aW9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbGlzdGVuVG9JbnRlcm5hbEZpbHRlcnMoKSB7XHJcbiAgICBlbnRpdHlMaW5rc0hlbHBlci5saXN0ZW5Ub0NoYW5nZXModGhpcy5kYXRhU291cmNlKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ3NlYXJjaHJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldFNlYXJjaE1vZGVsSWQoKSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBjaGFuZ2VzIGhhcHBlbmluZyBvbiBwYWdpbmF0aW9uIGFuZCBzZWxlY3QgZWxlbWVudHMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbGlzdGVuVG9BZGRpdGlvbmFsUGFyYW1zQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHNlYXJjaE1vZGVsIH0gPSB0aGlzLmRhdGFTb3VyY2U7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSBzZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcclxuXHJcbiAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHsgcXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV0gfHwgbnVsbDsgfSk7XHJcblxyXG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zXHJcbiAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyYnkgPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJCeTtcclxuICAgICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJEaXJlY3Rpb247XHJcbiAgICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2U7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0ID0gdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplO1xyXG5cclxuICAgICAgLy8gSWYgdGhlIHNlYXJjaGVkIHRleHQgd2FzIHVwZGF0ZWQsIG92ZXJ3cml0ZSB0aGUgcXVlcnkgcGFyYW1zIGFuZCBmb3JjZSBzb3J0aW5nIGJ5IFwic2NvcmVcIi5cclxuICAgICAgaWYgKHRoaXMudGV4dEhhc0NoYW5nZWQpIHtcclxuICAgICAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gJ19zY29yZSc7XHJcbiAgICAgICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSAnREVTQyc7XHJcbiAgICAgICAgdGhpcy50ZXh0SGFzQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xyXG4gICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxyXG4gICAgICAgIHBhdGg6IFtdLFxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBVUkwgY2hhbmdlcyAqL1xyXG4gIHByaXZhdGUgX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpIHtcclxuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXHJcbiAgICApLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdxdWVyeXBhcmFtc2NoYW5nZScsIHBhcmFtcyk7XHJcbiAgICAgIC8vIGFkaXRpb25hbCBwYXJhbXMgY29udHJvbFxyXG4gICAgICBpZiAocGFyYW1zLm9yZGVyYnkgJiYgcGFyYW1zLm9yZGVyZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZShgJHtwYXJhbXMub3JkZXJieX1fJHtwYXJhbXMub3JkZXJkaXJlY3Rpb259YCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhcmFtcy5wYWdlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUGFnaW5hdGlvbkNoYW5nZShgcGFnZS0ke3BhcmFtcy5wYWdlfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXJhbXMubGltaXQpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0TGltaXQoK3BhcmFtcy5saW1pdCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=