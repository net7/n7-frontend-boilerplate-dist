import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import helpers from '../../../common/helpers';
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
                        // scroll top
                        window.scrollTo(0, 0);
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
            this.facetsChange$.next(); // scroll to ref element
            if (!this.scrollRefElement) {
                this.scrollRefElement = document.querySelector('.scroll-ref');
            }
            else if (!helpers.isElementInViewport(this.scrollRefElement)) {
                this.scrollRefElement.scrollIntoView();
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFDTCxZQUFZLEVBQUUsU0FBUyxFQUN4QixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBQzlDLE9BQU8saUJBQWlCLE1BQU0sa0NBQWtDLENBQUM7QUFFakUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFBbEQ7O1FBQ1MsYUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBRTdCLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUlqRCxzREFBc0Q7UUFDOUMsa0JBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVwRDtvREFDNEM7UUFDcEMsNEJBQXVCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFOUQsK0RBQStEO1FBQ3ZELGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRTFCLGtFQUFrRTtRQUMxRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQTBLakMsQ0FBQztJQXRLUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxPQUFPO29CQUFFO3dCQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFL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SUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7YUFDL0U7WUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQzNEO1lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QztZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSx3QkFBd0I7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDL0Q7aUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDOUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbFxyXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgZW50aXR5TGlua3NIZWxwZXIgZnJvbSAnLi4vLi4vc2VhcmNoL2VudGl0eS1saW5rcy5oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsYXlvdXRJZCA9ICdhdy1zZWFyY2gtbGF5b3V0JztcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHJvdXRlOiBhbnk7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIGFueSBvZiB0aGUgc2VhcmNoLWZhY2V0cyBhcmUgY2hhbmdlZCAqL1xyXG4gIHByaXZhdGUgZmFjZXRzQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHBhZ2luYXRpb24gZWxlbWVudFxyXG4gICAqIG9yIHRoZSBzZWxlY3Qtc29ydCBlbGVtZW50IGFyZSBjaGFuZ2VkICovXHJcbiAgcHJpdmF0ZSBhZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgLyoqIExhc3QgcXVlcmllZCB0ZXh0LCB1c2VkIHRvIGNoZWNrIGlmIHRoZSB0ZXh0IGhhcyBjaGFuZ2VkICovXHJcbiAgcHJpdmF0ZSBwcmV2aW91c1RleHQgPSAnJztcclxuXHJcbiAgLyoqIElzIHRydWUgd2hlbiB0aGUgc2VhcmNoIGlzIHRyaWdnZXJlZCB3aXRoIGEgbmV3IHRleHQtc3RyaW5nICovXHJcbiAgcHJpdmF0ZSB0ZXh0SGFzQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHNjcm9sbFJlZkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIGAke3RoaXMubGF5b3V0SWR9LmluaXRgOiB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpO1xyXG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9BZGRpdGlvbmFsUGFyYW1zQ2hhbmdlKCk7XHJcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKTtcclxuICAgICAgICAgIHRoaXMuX2xpc3RlblRvSW50ZXJuYWxGaWx0ZXJzKCk7XHJcbiAgICAgICAgICBjb25zdCB7IHZhbHVlOiB0ZXh0SW5wdXQgfSA9IHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKCdxdWVyeScpWzBdO1xyXG4gICAgICAgICAgaWYgKCh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmlzU2VhcmNoaW5nVGV4dC5uZXh0KHRydWUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKCdfc2NvcmVfREVTQycpO1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpOyAvLyBlbWl0IGZyb20gb2JzZXJ2YWJsZSBzdHJlYW1cclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICB9IGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIGAke3RoaXMubGF5b3V0SWR9LmRlc3Ryb3lgOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xyXG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIGAke3RoaXMubGF5b3V0SWR9Lm9yZGVyYnljaGFuZ2VgOlxyXG4gICAgICAgICAgLy8gaGFuZGxlIHRoZSBjaGFuZ2Ugb2YgcmVzdWx0LW9yZGVyXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7IC8vIGVtaXQgZnJvbSBvYnNlcnZhYmxlIHN0cmVhbVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5sYXlvdXRJZH0uc2VhcmNocmVzZXRgOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0QnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmNsZWFyKCk7XHJcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCcoc2VhcmNoKSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRzY2hhbmdlJzoge1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0UGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgY29uc3QgeyB2YWx1ZTogdGV4dElucHV0IH0gPSB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgncXVlcnknKVswXTtcclxuICAgICAgICAgIC8vIENoZWNrcyBpZiA8aW5wdXQgdHlwZT10ZXh0PidzIHZhbHVlIGhhcyBjaGFuZ2VkXHJcbiAgICAgICAgICB0aGlzLnRleHRIYXNDaGFuZ2VkID0gISEodGV4dElucHV0ICYmICh0ZXh0SW5wdXQgIT09IHRoaXMucHJldmlvdXNUZXh0KSk7XHJcbiAgICAgICAgICB0aGlzLnByZXZpb3VzVGV4dCA9IHRleHRJbnB1dDtcclxuICAgICAgICAgIGNvbnN0IGFjdGl2ZU9yZGVyID0gdGhpcy5kYXRhU291cmNlLm9yZGVyQnlPcHRpb25zLmZpbHRlcigoZCkgPT4gZC5zZWxlY3RlZClbMF0udmFsdWU7XHJcbiAgICAgICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCAmJiAodGV4dElucHV0IHx8ICcnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBzb3J0IGJ5IHNjb3JlIG9wdGlvblxyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQodHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA9PT0gMCAmJiAvc2NvcmUvaS50ZXN0KGFjdGl2ZU9yZGVyKSkge1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgc29ydCBieSBzY29yZSBvcHRpb25cclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmlzU2VhcmNoaW5nVGV4dC5uZXh0KGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZSgnbGFiZWxfc29ydF9BU0MnKTtcclxuICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTsgLy8gZW1pdCBmcm9tIG9ic2VydmFibGUgc3RyZWFtXHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbjctc21hcnQtcGFnaW5hdGlvbi5jaGFuZ2UnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUmVzdWx0c0xpbWl0Q2hhbmdlKHBheWxvYWQudmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgY2hhbmdlcyB0byBhbnkgb2YgdGhlIHNlYXJjaC1mYWNldHNcclxuICAgKi9cclxuICBwcml2YXRlIF9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpIHtcclxuICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMudGV4dEhhc0NoYW5nZWQpIHtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZG9TZWFyY2hSZXF1ZXN0JCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblNlYXJjaFJlc3BvbnNlKCk7XHJcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ3NlYXJjaHJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldFNlYXJjaE1vZGVsSWQoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBlbnRpdHkgbGlua3MgcGFnaW5hdGlvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2xpc3RlblRvSW50ZXJuYWxGaWx0ZXJzKCkge1xyXG4gICAgZW50aXR5TGlua3NIZWxwZXIubGlzdGVuVG9DaGFuZ2VzKHRoaXMuZGF0YVNvdXJjZSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCdzZWFyY2hyZXNwb25zZScsIHRoaXMuZGF0YVNvdXJjZS5nZXRTZWFyY2hNb2RlbElkKCkpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgY2hhbmdlcyBoYXBwZW5pbmcgb24gcGFnaW5hdGlvbiBhbmQgc2VsZWN0IGVsZW1lbnRzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2xpc3RlblRvQWRkaXRpb25hbFBhcmFtc0NoYW5nZSgpIHtcclxuICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgeyBzZWFyY2hNb2RlbCB9ID0gdGhpcy5kYXRhU291cmNlO1xyXG4gICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xyXG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlYXJjaE1vZGVsLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKHJlcXVlc3RQYXJhbXMuZmlsdGVycyk7XHJcblxyXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xyXG5cclxuICAgICAgLy8gYWRpdGlvbmFsIHBhcmFtc1xyXG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gdGhpcy5kYXRhU291cmNlLm9yZGVyQnk7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyZGlyZWN0aW9uID0gdGhpcy5kYXRhU291cmNlLm9yZGVyRGlyZWN0aW9uO1xyXG4gICAgICBxdWVyeVBhcmFtcy5wYWdlID0gdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlO1xyXG4gICAgICBxdWVyeVBhcmFtcy5saW1pdCA9IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZTtcclxuXHJcbiAgICAgIC8vIElmIHRoZSBzZWFyY2hlZCB0ZXh0IHdhcyB1cGRhdGVkLCBvdmVyd3JpdGUgdGhlIHF1ZXJ5IHBhcmFtcyBhbmQgZm9yY2Ugc29ydGluZyBieSBcInNjb3JlXCIuXHJcbiAgICAgIGlmICh0aGlzLnRleHRIYXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgcXVlcnlQYXJhbXMub3JkZXJieSA9ICdfc2NvcmUnO1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyZGlyZWN0aW9uID0gJ0RFU0MnO1xyXG4gICAgICAgIHRoaXMudGV4dEhhc0NoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcclxuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICBwYXRoOiBbXSxcclxuICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmZhY2V0c0NoYW5nZSQubmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogVVJMIGNoYW5nZXMgKi9cclxuICBwcml2YXRlIF9saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxyXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICB0aGlzLmVtaXRPdXRlcigncXVlcnlwYXJhbXNjaGFuZ2UnLCBwYXJhbXMpO1xyXG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zIGNvbnRyb2xcclxuICAgICAgaWYgKHBhcmFtcy5vcmRlcmJ5ICYmIHBhcmFtcy5vcmRlcmRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoYCR7cGFyYW1zLm9yZGVyYnl9XyR7cGFyYW1zLm9yZGVyZGlyZWN0aW9ufWApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXJhbXMucGFnZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblBhZ2luYXRpb25DaGFuZ2UoYHBhZ2UtJHtwYXJhbXMucGFnZX1gKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGFyYW1zLmxpbWl0KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldExpbWl0KCtwYXJhbXMubGltaXQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7Ly8gc2Nyb2xsIHRvIHJlZiBlbGVtZW50XHJcbiAgICAgIGlmICghdGhpcy5zY3JvbGxSZWZFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxSZWZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1yZWYnKTtcclxuICAgICAgfSBlbHNlIGlmICghaGVscGVycy5pc0VsZW1lbnRJblZpZXdwb3J0KHRoaXMuc2Nyb2xsUmVmRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbFJlZkVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==