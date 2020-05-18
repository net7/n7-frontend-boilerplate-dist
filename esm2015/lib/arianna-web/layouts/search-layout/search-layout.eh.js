/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
export class AwSearchLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        /**
         * Emits when any of the search-facets are changed
         */
        this.facetsChange$ = new Subject();
        /**
         * Emits when the pagination element
         * or the select-sort element are changed
         */
        this.additionalParamsChange$ = new Subject();
        /**
         * Last queried text, used to check if the text has changed
         */
        this.previousText = '';
        /**
         * Is true when the search is triggered with a new text-string
         */
        this.textHasChanged = false;
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-search-layout.init':
                    {
                        this.route = payload.route;
                        this.configuration = payload.configuration;
                        this.dataSource.onInit(payload);
                        this._listenToFacetsChange();
                        this._listenToAdditionalParamsChange();
                        this._listenToRouterChanges();
                        const { value: textInput } = this.dataSource.searchModel.getFiltersByFacetId('query')[0];
                        if ((textInput || '').length > 0) {
                            this.dataSource.isSearchingText.next(true);
                            setTimeout((/**
                             * @return {?}
                             */
                            () => {
                                this.dataSource.onOrderByChange('_score_DESC');
                                this.additionalParamsChange$.next(); // emit from observable stream
                            }), 100);
                        }
                    }
                    break;
                case 'aw-search-layout.destroy':
                    this.dataSource.onDestroy();
                    this.destroyed$.next();
                    break;
                case 'aw-search-layout.orderbychange':
                    // handle the change of result-order
                    this.dataSource.onOrderByChange(payload);
                    this.additionalParamsChange$.next(); // emit from observable stream
                    break;
                case 'aw-search-layout.searchreset':
                    this.dataSource.resetButtonEnabled = false;
                    this.dataSource.searchModel.clear();
                    this.additionalParamsChange$.next();
                    break;
                default:
                    console.warn('(search) unhandled inner event of type', type);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'facets-wrapper.facetschange':
                    {
                        this.dataSource.resetPagination();
                        const { value: textInput } = this.dataSource.searchModel.getFiltersByFacetId('query')[0];
                        // Checks if <input type=text>'s value has changed
                        this.textHasChanged = !!(textInput && (textInput !== this.previousText));
                        this.previousText = textInput;
                        if (this.textHasChanged && (textInput || '').length > 0) {
                            // Add sort by score option
                            this.dataSource.isSearchingText.next(true);
                        }
                        else if ((textInput || '').length === 0) {
                            // Remove sort by score option
                            this.dataSource.isSearchingText.next(false);
                            setTimeout((/**
                             * @return {?}
                             */
                            () => {
                                this.dataSource.onOrderByChange('label_sort_DESC');
                                this.additionalParamsChange$.next(); // emit from observable stream
                            }), 100);
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
        }));
    }
    /**
     * Handles changes to any of the search-facets
     * @private
     * @return {?}
     */
    _listenToFacetsChange() {
        this.facetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        () => {
            this.dataSource.resultsLoading = true;
            if (this.textHasChanged) {
                this.additionalParamsChange$.next();
                this.textHasChanged = false; // reset
            }
            else {
                this.dataSource.doSearchRequest$().subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.dataSource.resultsLoading = false;
                    this.dataSource.onSearchResponse();
                    this.emitGlobal('searchresponse', this.dataSource.getSearchModelId());
                }));
            }
        }));
    }
    /**
     * Handles changes happening on pagination and select elements.
     * @private
     * @return {?}
     */
    _listenToAdditionalParamsChange() {
        this.additionalParamsChange$.subscribe((/**
         * @return {?}
         */
        () => {
            const { searchModel } = this.dataSource;
            /** @type {?} */
            const requestParams = searchModel.getRequestParams();
            /** @type {?} */
            const queryParams = searchModel.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => { queryParams[key] = queryParams[key] || null; }));
            // aditional params
            queryParams.orderby = this.dataSource.orderBy;
            queryParams.orderdirection = this.dataSource.orderDirection;
            queryParams.page = this.dataSource.currentPage;
            queryParams.limit = this.dataSource.pageSize;
            // If the searched text was updated, overwrite the query params and force sorting by "score".
            if (this.textHasChanged) {
                queryParams.orderby = '_score';
                queryParams.orderdirection = 'DESC';
            }
            this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams,
            });
        }));
    }
    /**
     * URL changes
     * @private
     * @return {?}
     */
    _listenToRouterChanges() {
        this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
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
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.route;
    /**
     * Emits when any of the search-facets are changed
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.facetsChange$;
    /**
     * Emits when the pagination element
     * or the select-sort element are changed
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.additionalParamsChange$;
    /**
     * Last queried text, used to check if the text has changed
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.previousText;
    /**
     * Is true when the search is triggered with a new text-string
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.textHasChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQUFsRDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7Ozs7UUFPekMsa0JBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7Ozs7UUFJNUMsNEJBQXVCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7Ozs7UUFHdEQsaUJBQVksR0FBRyxFQUFFLENBQUM7Ozs7UUFHbEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFvSmpDLENBQUM7Ozs7SUFsSlEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFBRTt3QkFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7d0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLCtCQUErQixFQUFF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QUksQ0FDekIsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLDJCQUEyQjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2FBQy9FO1lBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMzRDtZQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUFyS0Msc0NBQWlEOzs7OztJQUVqRCx5Q0FBMkI7Ozs7O0lBRTNCLGlDQUFtQjs7Ozs7O0lBR25CLHlDQUFvRDs7Ozs7OztJQUlwRCxtREFBOEQ7Ozs7OztJQUc5RCx3Q0FBMEI7Ozs7OztJQUcxQiwwQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIC8qKiBFbWl0cyB3aGVuIGFueSBvZiB0aGUgc2VhcmNoLWZhY2V0cyBhcmUgY2hhbmdlZCAqL1xuICBwcml2YXRlIGZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHBhZ2luYXRpb24gZWxlbWVudFxuICAgKiBvciB0aGUgc2VsZWN0LXNvcnQgZWxlbWVudCBhcmUgY2hhbmdlZCAqL1xuICBwcml2YXRlIGFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBMYXN0IHF1ZXJpZWQgdGV4dCwgdXNlZCB0byBjaGVjayBpZiB0aGUgdGV4dCBoYXMgY2hhbmdlZCAqL1xuICBwcml2YXRlIHByZXZpb3VzVGV4dCA9ICcnO1xuXG4gIC8qKiBJcyB0cnVlIHdoZW4gdGhlIHNlYXJjaCBpcyB0cmlnZ2VyZWQgd2l0aCBhIG5ldyB0ZXh0LXN0cmluZyAqL1xuICBwcml2YXRlIHRleHRIYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5pbml0Jzoge1xuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvRmFjZXRzQ2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9BZGRpdGlvbmFsUGFyYW1zQ2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCk7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZTogdGV4dElucHV0IH0gPSB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgncXVlcnknKVswXTtcbiAgICAgICAgICBpZiAoKHRleHRJbnB1dCB8fCAnJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmlzU2VhcmNoaW5nVGV4dC5uZXh0KHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoJ19zY29yZV9ERVNDJyk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpOyAvLyBlbWl0IGZyb20gb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXNlYXJjaC1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5vcmRlcmJ5Y2hhbmdlJzpcbiAgICAgICAgICAvLyBoYW5kbGUgdGhlIGNoYW5nZSBvZiByZXN1bHQtb3JkZXJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpOyAvLyBlbWl0IGZyb20gb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0LnNlYXJjaHJlc2V0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzZXRCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyhzZWFyY2gpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRzY2hhbmdlJzoge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXNldFBhZ2luYXRpb24oKTtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlOiB0ZXh0SW5wdXQgfSA9IHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKCdxdWVyeScpWzBdO1xuICAgICAgICAgIC8vIENoZWNrcyBpZiA8aW5wdXQgdHlwZT10ZXh0PidzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgdGhpcy50ZXh0SGFzQ2hhbmdlZCA9ICEhKHRleHRJbnB1dCAmJiAodGV4dElucHV0ICE9PSB0aGlzLnByZXZpb3VzVGV4dCkpO1xuICAgICAgICAgIHRoaXMucHJldmlvdXNUZXh0ID0gdGV4dElucHV0O1xuICAgICAgICAgIGlmICh0aGlzLnRleHRIYXNDaGFuZ2VkICYmICh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEFkZCBzb3J0IGJ5IHNjb3JlIG9wdGlvblxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmlzU2VhcmNoaW5nVGV4dC5uZXh0KHRydWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoKHRleHRJbnB1dCB8fCAnJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgc29ydCBieSBzY29yZSBvcHRpb25cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pc1NlYXJjaGluZ1RleHQubmV4dChmYWxzZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZSgnbGFiZWxfc29ydF9ERVNDJyk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpOyAvLyBlbWl0IGZyb20gb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgdG8gYW55IG9mIHRoZSBzZWFyY2gtZmFjZXRzXG4gICAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgdGhpcy50ZXh0SGFzQ2hhbmdlZCA9IGZhbHNlOyAvLyByZXNldFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRvU2VhcmNoUmVxdWVzdCQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblNlYXJjaFJlc3BvbnNlKCk7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCdzZWFyY2hyZXNwb25zZScsIHRoaXMuZGF0YVNvdXJjZS5nZXRTZWFyY2hNb2RlbElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgaGFwcGVuaW5nIG9uIHBhZ2luYXRpb24gYW5kIHNlbGVjdCBlbGVtZW50cy5cbiAgICovXG4gIHByaXZhdGUgX2xpc3RlblRvQWRkaXRpb25hbFBhcmFtc0NoYW5nZSgpIHtcbiAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IHNlYXJjaE1vZGVsIH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xuXG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zXG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gdGhpcy5kYXRhU291cmNlLm9yZGVyQnk7XG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmRpcmVjdGlvbiA9IHRoaXMuZGF0YVNvdXJjZS5vcmRlckRpcmVjdGlvbjtcbiAgICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2U7XG4gICAgICBxdWVyeVBhcmFtcy5saW1pdCA9IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZTtcblxuICAgICAgLy8gSWYgdGhlIHNlYXJjaGVkIHRleHQgd2FzIHVwZGF0ZWQsIG92ZXJ3cml0ZSB0aGUgcXVlcnkgcGFyYW1zIGFuZCBmb3JjZSBzb3J0aW5nIGJ5IFwic2NvcmVcIi5cbiAgICAgIGlmICh0aGlzLnRleHRIYXNDaGFuZ2VkKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyYnkgPSAnX3Njb3JlJztcbiAgICAgICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSAnREVTQyc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBVUkwgY2hhbmdlcyAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3F1ZXJ5cGFyYW1zY2hhbmdlJywgcGFyYW1zKTtcbiAgICAgIC8vIGFkaXRpb25hbCBwYXJhbXMgY29udHJvbFxuICAgICAgaWYgKHBhcmFtcy5vcmRlcmJ5ICYmIHBhcmFtcy5vcmRlcmRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKGAke3BhcmFtcy5vcmRlcmJ5fV8ke3BhcmFtcy5vcmRlcmRpcmVjdGlvbn1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMucGFnZSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25QYWdpbmF0aW9uQ2hhbmdlKGBwYWdlLSR7cGFyYW1zLnBhZ2V9YCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmxpbWl0KSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRMaW1pdCgrcGFyYW1zLmxpbWl0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==