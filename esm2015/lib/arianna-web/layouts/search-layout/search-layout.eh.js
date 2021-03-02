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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQ0wsWUFBWSxFQUFFLFNBQVMsRUFDeEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLGlCQUFpQixNQUFNLGtDQUFrQyxDQUFDO0FBRWpFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBQWxEOztRQUNTLGFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUU3QixlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFJakQsc0RBQXNEO1FBQzlDLGtCQUFhLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFcEQ7b0RBQzRDO1FBQ3BDLDRCQUF1QixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTlELCtEQUErRDtRQUN2RCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUUxQixrRUFBa0U7UUFDMUQsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFpS2pDLENBQUM7SUEvSlEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsT0FBTztvQkFBRTt3QkFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FB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Qy9FO1lBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMzRDtZQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLCB0YWtlVW50aWxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IGVudGl0eUxpbmtzSGVscGVyIGZyb20gJy4uLy4uL3NlYXJjaC9lbnRpdHktbGlua3MuaGVscGVyJztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgbGF5b3V0SWQgPSAnYXctc2VhcmNoLWxheW91dCc7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICAvKiogRW1pdHMgd2hlbiBhbnkgb2YgdGhlIHNlYXJjaC1mYWNldHMgYXJlIGNoYW5nZWQgKi9cbiAgcHJpdmF0ZSBmYWNldHNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBwYWdpbmF0aW9uIGVsZW1lbnRcbiAgICogb3IgdGhlIHNlbGVjdC1zb3J0IGVsZW1lbnQgYXJlIGNoYW5nZWQgKi9cbiAgcHJpdmF0ZSBhZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKiogTGFzdCBxdWVyaWVkIHRleHQsIHVzZWQgdG8gY2hlY2sgaWYgdGhlIHRleHQgaGFzIGNoYW5nZWQgKi9cbiAgcHJpdmF0ZSBwcmV2aW91c1RleHQgPSAnJztcblxuICAvKiogSXMgdHJ1ZSB3aGVuIHRoZSBzZWFyY2ggaXMgdHJpZ2dlcmVkIHdpdGggYSBuZXcgdGV4dC1zdHJpbmcgKi9cbiAgcHJpdmF0ZSB0ZXh0SGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgYCR7dGhpcy5sYXlvdXRJZH0uaW5pdGA6IHtcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvRmFjZXRzQ2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9BZGRpdGlvbmFsUGFyYW1zQ2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9JbnRlcm5hbEZpbHRlcnMoKTtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlOiB0ZXh0SW5wdXQgfSA9IHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKCdxdWVyeScpWzBdO1xuICAgICAgICAgIGlmICgodGV4dElucHV0IHx8ICcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQodHJ1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZSgnX3Njb3JlX0RFU0MnKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7IC8vIGVtaXQgZnJvbSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgY2FzZSBgJHt0aGlzLmxheW91dElkfS5kZXN0cm95YDpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGAke3RoaXMubGF5b3V0SWR9Lm9yZGVyYnljaGFuZ2VgOlxuICAgICAgICAgIC8vIGhhbmRsZSB0aGUgY2hhbmdlIG9mIHJlc3VsdC1vcmRlclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7IC8vIGVtaXQgZnJvbSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgYCR7dGhpcy5sYXlvdXRJZH0uc2VhcmNocmVzZXRgOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXNldEJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKHNlYXJjaCkgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldHNjaGFuZ2UnOiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHRleHRJbnB1dCB9ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoJ3F1ZXJ5JylbMF07XG4gICAgICAgICAgLy8gQ2hlY2tzIGlmIDxpbnB1dCB0eXBlPXRleHQ+J3MgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICB0aGlzLnRleHRIYXNDaGFuZ2VkID0gISEodGV4dElucHV0ICYmICh0ZXh0SW5wdXQgIT09IHRoaXMucHJldmlvdXNUZXh0KSk7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c1RleHQgPSB0ZXh0SW5wdXQ7XG4gICAgICAgICAgY29uc3QgYWN0aXZlT3JkZXIgPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJCeU9wdGlvbnMuZmlsdGVyKChkKSA9PiBkLnNlbGVjdGVkKVswXS52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCAmJiAodGV4dElucHV0IHx8ICcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgc29ydCBieSBzY29yZSBvcHRpb25cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pc1NlYXJjaGluZ1RleHQubmV4dCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA9PT0gMCAmJiAvc2NvcmUvaS50ZXN0KGFjdGl2ZU9yZGVyKSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHNvcnQgYnkgc2NvcmUgb3B0aW9uXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoJ2xhYmVsX3NvcnRfQVNDJyk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpOyAvLyBlbWl0IGZyb20gb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgdG8gYW55IG9mIHRoZSBzZWFyY2gtZmFjZXRzXG4gICAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kb1NlYXJjaFJlcXVlc3QkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25TZWFyY2hSZXNwb25zZSgpO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnc2VhcmNocmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0U2VhcmNoTW9kZWxJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBlbnRpdHkgbGlua3MgcGFnaW5hdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9JbnRlcm5hbEZpbHRlcnMoKSB7XG4gICAgZW50aXR5TGlua3NIZWxwZXIubGlzdGVuVG9DaGFuZ2VzKHRoaXMuZGF0YVNvdXJjZSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ3NlYXJjaHJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldFNlYXJjaE1vZGVsSWQoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgaGFwcGVuaW5nIG9uIHBhZ2luYXRpb24gYW5kIHNlbGVjdCBlbGVtZW50cy5cbiAgICovXG4gIHByaXZhdGUgX2xpc3RlblRvQWRkaXRpb25hbFBhcmFtc0NoYW5nZSgpIHtcbiAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IHNlYXJjaE1vZGVsIH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xuXG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zXG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gdGhpcy5kYXRhU291cmNlLm9yZGVyQnk7XG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmRpcmVjdGlvbiA9IHRoaXMuZGF0YVNvdXJjZS5vcmRlckRpcmVjdGlvbjtcbiAgICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2U7XG4gICAgICBxdWVyeVBhcmFtcy5saW1pdCA9IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZTtcblxuICAgICAgLy8gSWYgdGhlIHNlYXJjaGVkIHRleHQgd2FzIHVwZGF0ZWQsIG92ZXJ3cml0ZSB0aGUgcXVlcnkgcGFyYW1zIGFuZCBmb3JjZSBzb3J0aW5nIGJ5IFwic2NvcmVcIi5cbiAgICAgIGlmICh0aGlzLnRleHRIYXNDaGFuZ2VkKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyYnkgPSAnX3Njb3JlJztcbiAgICAgICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSAnREVTQyc7XG4gICAgICAgIHRoaXMudGV4dEhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgIHBhdGg6IFtdLFxuICAgICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFVSTCBjaGFuZ2VzICovXG4gIHByaXZhdGUgX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICApLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLmVtaXRPdXRlcigncXVlcnlwYXJhbXNjaGFuZ2UnLCBwYXJhbXMpO1xuICAgICAgLy8gYWRpdGlvbmFsIHBhcmFtcyBjb250cm9sXG4gICAgICBpZiAocGFyYW1zLm9yZGVyYnkgJiYgcGFyYW1zLm9yZGVyZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoYCR7cGFyYW1zLm9yZGVyYnl9XyR7cGFyYW1zLm9yZGVyZGlyZWN0aW9ufWApO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5wYWdlKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblBhZ2luYXRpb25DaGFuZ2UoYHBhZ2UtJHtwYXJhbXMucGFnZX1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMubGltaXQpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldExpbWl0KCtwYXJhbXMubGltaXQpO1xuICAgICAgfVxuICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19