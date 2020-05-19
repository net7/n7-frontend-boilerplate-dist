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
                        /** @type {?} */
                        const activeOrder = this.dataSource.orderByOptions.filter((/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.selected))[0].value;
                        if (this.textHasChanged && (textInput || '').length > 0) {
                            // Add sort by score option
                            this.dataSource.isSearchingText.next(true);
                        }
                        else if ((textInput || '').length === 0 && /score/i.test(activeOrder)) {
                            // Remove sort by score option
                            this.dataSource.isSearchingText.next(false);
                            setTimeout((/**
                             * @return {?}
                             */
                            () => {
                                this.dataSource.onOrderByChange('label_sort_ASC');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQUFsRDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7Ozs7UUFPekMsa0JBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7Ozs7UUFJNUMsNEJBQXVCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7Ozs7UUFHdEQsaUJBQVksR0FBRyxFQUFFLENBQUM7Ozs7UUFHbEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFxSmpDLENBQUM7Ozs7SUFuSlEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFBRTt3QkFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7d0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLCtCQUErQixFQUFF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cG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gYW55IG9mIHRoZSBzZWFyY2gtZmFjZXRzIGFyZSBjaGFuZ2VkICovXG4gIHByaXZhdGUgZmFjZXRzQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgcGFnaW5hdGlvbiBlbGVtZW50XG4gICAqIG9yIHRoZSBzZWxlY3Qtc29ydCBlbGVtZW50IGFyZSBjaGFuZ2VkICovXG4gIHByaXZhdGUgYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqIExhc3QgcXVlcmllZCB0ZXh0LCB1c2VkIHRvIGNoZWNrIGlmIHRoZSB0ZXh0IGhhcyBjaGFuZ2VkICovXG4gIHByaXZhdGUgcHJldmlvdXNUZXh0ID0gJyc7XG5cbiAgLyoqIElzIHRydWUgd2hlbiB0aGUgc2VhcmNoIGlzIHRyaWdnZXJlZCB3aXRoIGEgbmV3IHRleHQtc3RyaW5nICovXG4gIHByaXZhdGUgdGV4dEhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0LmluaXQnOiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9GYWNldHNDaGFuZ2UoKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0FkZGl0aW9uYWxQYXJhbXNDaGFuZ2UoKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKTtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlOiB0ZXh0SW5wdXQgfSA9IHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKCdxdWVyeScpWzBdO1xuICAgICAgICAgIGlmICgodGV4dElucHV0IHx8ICcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQodHJ1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZSgnX3Njb3JlX0RFU0MnKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7IC8vIGVtaXQgZnJvbSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0Lm9yZGVyYnljaGFuZ2UnOlxuICAgICAgICAgIC8vIGhhbmRsZSB0aGUgY2hhbmdlIG9mIHJlc3VsdC1vcmRlclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7IC8vIGVtaXQgZnJvbSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXNlYXJjaC1sYXlvdXQuc2VhcmNocmVzZXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXNldEJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKHNlYXJjaCkgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldHNjaGFuZ2UnOiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHRleHRJbnB1dCB9ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoJ3F1ZXJ5JylbMF07XG4gICAgICAgICAgLy8gQ2hlY2tzIGlmIDxpbnB1dCB0eXBlPXRleHQ+J3MgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICB0aGlzLnRleHRIYXNDaGFuZ2VkID0gISEodGV4dElucHV0ICYmICh0ZXh0SW5wdXQgIT09IHRoaXMucHJldmlvdXNUZXh0KSk7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c1RleHQgPSB0ZXh0SW5wdXQ7XG4gICAgICAgICAgY29uc3QgYWN0aXZlT3JkZXIgPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJCeU9wdGlvbnMuZmlsdGVyKChkKSA9PiBkLnNlbGVjdGVkKVswXS52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCAmJiAodGV4dElucHV0IHx8ICcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgc29ydCBieSBzY29yZSBvcHRpb25cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pc1NlYXJjaGluZ1RleHQubmV4dCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA9PT0gMCAmJiAvc2NvcmUvaS50ZXN0KGFjdGl2ZU9yZGVyKSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHNvcnQgYnkgc2NvcmUgb3B0aW9uXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoJ2xhYmVsX3NvcnRfQVNDJyk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpOyAvLyBlbWl0IGZyb20gb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgdG8gYW55IG9mIHRoZSBzZWFyY2gtZmFjZXRzXG4gICAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgdGhpcy50ZXh0SGFzQ2hhbmdlZCA9IGZhbHNlOyAvLyByZXNldFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRvU2VhcmNoUmVxdWVzdCQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblNlYXJjaFJlc3BvbnNlKCk7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCdzZWFyY2hyZXNwb25zZScsIHRoaXMuZGF0YVNvdXJjZS5nZXRTZWFyY2hNb2RlbElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgaGFwcGVuaW5nIG9uIHBhZ2luYXRpb24gYW5kIHNlbGVjdCBlbGVtZW50cy5cbiAgICovXG4gIHByaXZhdGUgX2xpc3RlblRvQWRkaXRpb25hbFBhcmFtc0NoYW5nZSgpIHtcbiAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IHNlYXJjaE1vZGVsIH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xuXG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zXG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gdGhpcy5kYXRhU291cmNlLm9yZGVyQnk7XG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmRpcmVjdGlvbiA9IHRoaXMuZGF0YVNvdXJjZS5vcmRlckRpcmVjdGlvbjtcbiAgICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2U7XG4gICAgICBxdWVyeVBhcmFtcy5saW1pdCA9IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZTtcblxuICAgICAgLy8gSWYgdGhlIHNlYXJjaGVkIHRleHQgd2FzIHVwZGF0ZWQsIG92ZXJ3cml0ZSB0aGUgcXVlcnkgcGFyYW1zIGFuZCBmb3JjZSBzb3J0aW5nIGJ5IFwic2NvcmVcIi5cbiAgICAgIGlmICh0aGlzLnRleHRIYXNDaGFuZ2VkKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyYnkgPSAnX3Njb3JlJztcbiAgICAgICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSAnREVTQyc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBVUkwgY2hhbmdlcyAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3F1ZXJ5cGFyYW1zY2hhbmdlJywgcGFyYW1zKTtcbiAgICAgIC8vIGFkaXRpb25hbCBwYXJhbXMgY29udHJvbFxuICAgICAgaWYgKHBhcmFtcy5vcmRlcmJ5ICYmIHBhcmFtcy5vcmRlcmRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKGAke3BhcmFtcy5vcmRlcmJ5fV8ke3BhcmFtcy5vcmRlcmRpcmVjdGlvbn1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMucGFnZSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25QYWdpbmF0aW9uQ2hhbmdlKGBwYWdlLSR7cGFyYW1zLnBhZ2V9YCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmxpbWl0KSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRMaW1pdCgrcGFyYW1zLmxpbWl0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==