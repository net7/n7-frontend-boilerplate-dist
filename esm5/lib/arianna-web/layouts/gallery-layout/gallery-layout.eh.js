/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
var AwGalleryLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwGalleryLayoutEH, _super);
    function AwGalleryLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        /**
         * Emits when any of the gallery-facets are changed
         */
        _this.facetsChange$ = new Subject();
        /**
         * Emits when the pagination element
         * or the select-sort element are changed
         */
        _this.additionalParamsChange$ = new Subject();
        /**
         * Last queried text, used to check if the text has changed
         */
        _this.previousText = '';
        /**
         * Is true when the search is triggered with a new text-string
         */
        _this.textHasChanged = false;
        return _this;
    }
    /**
     * @return {?}
     */
    AwGalleryLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-gallery-layout.init':
                    {
                        _this.route = payload.route;
                        _this.configuration = payload.configuration;
                        _this.dataSource.onInit(payload);
                        _this._listenToFacetsChange();
                        _this._listenToAdditionalParamsChange();
                        _this._listenToRouterChanges();
                        var textInput = _this.dataSource.searchModel.getFiltersByFacetId('query')[0].value;
                        if ((textInput || '').length > 0) {
                            _this.dataSource.isSearchingText.next(true);
                            setTimeout((/**
                             * @return {?}
                             */
                            function () {
                                _this.dataSource.onOrderByChange('_score_DESC');
                                _this.additionalParamsChange$.next(); // emit from observable stream
                            }), 100);
                        }
                    }
                    break;
                case 'aw-gallery-layout.destroy':
                    _this.dataSource.onDestroy();
                    _this.destroyed$.next();
                    break;
                case 'aw-gallery-layout.orderbychange':
                    // handle the change of result-order
                    _this.dataSource.onOrderByChange(payload);
                    _this.additionalParamsChange$.next(); // emit from observable stream
                    break;
                case 'aw-gallery-layout.searchreset':
                    _this.dataSource.resetButtonEnabled = false;
                    _this.dataSource.searchModel.clear();
                    _this.additionalParamsChange$.next();
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
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'facets-wrapper.facetschange':
                    {
                        _this.dataSource.resetPagination();
                        var textInput = _this.dataSource.searchModel.getFiltersByFacetId('query')[0].value;
                        // Checks if <input type=text>'s value has changed
                        _this.textHasChanged = !!(textInput && (textInput !== _this.previousText));
                        _this.previousText = textInput;
                        /** @type {?} */
                        var activeOrder = _this.dataSource.orderByOptions.filter((/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.selected; }))[0].value;
                        if (_this.textHasChanged && (textInput || '').length > 0) {
                            // Add sort by score option
                            _this.dataSource.isSearchingText.next(true);
                        }
                        else if ((textInput || '').length === 0 && /score/i.test(activeOrder)) {
                            // Remove sort by score option
                            _this.dataSource.isSearchingText.next(false);
                            setTimeout((/**
                             * @return {?}
                             */
                            function () {
                                _this.dataSource.onOrderByChange('label_sort_ASC');
                                _this.additionalParamsChange$.next(); // emit from observable stream
                            }), 100);
                        }
                    }
                    break;
                case 'n7-smart-pagination.change':
                    _this.dataSource.onResultsLimitChange(payload.value);
                    _this.additionalParamsChange$.next();
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * Handles changes to any of the search-facets
     */
    /**
     * Handles changes to any of the search-facets
     * @private
     * @return {?}
     */
    AwGalleryLayoutEH.prototype._listenToFacetsChange = /**
     * Handles changes to any of the search-facets
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.facetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.dataSource.resultsLoading = true;
            if (_this.textHasChanged) {
                _this.additionalParamsChange$.next();
                _this.textHasChanged = false; // reset
            }
            else {
                _this.dataSource.doSearchRequest$().subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.dataSource.resultsLoading = false;
                    _this.dataSource.onSearchResponse();
                    _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
                }));
            }
        }));
    };
    /**
     * Handles changes happening on pagination and select elements.
     */
    /**
     * Handles changes happening on pagination and select elements.
     * @private
     * @return {?}
     */
    AwGalleryLayoutEH.prototype._listenToAdditionalParamsChange = /**
     * Handles changes happening on pagination and select elements.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.additionalParamsChange$.subscribe((/**
         * @return {?}
         */
        function () {
            var searchModel = _this.dataSource.searchModel;
            /** @type {?} */
            var requestParams = searchModel.getRequestParams();
            /** @type {?} */
            var queryParams = searchModel.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { queryParams[key] = queryParams[key] || null; }));
            // aditional params
            queryParams.orderby = _this.dataSource.orderBy;
            queryParams.orderdirection = _this.dataSource.orderDirection;
            queryParams.page = _this.dataSource.currentPage;
            queryParams.limit = _this.dataSource.pageSize;
            // If the searched text was updated, overwrite the query params and force sorting by "score".
            if (_this.textHasChanged) {
                queryParams.orderby = '_score';
                queryParams.orderdirection = 'DESC';
            }
            _this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams: queryParams,
            });
        }));
    };
    /** URL changes */
    /**
     * URL changes
     * @private
     * @return {?}
     */
    AwGalleryLayoutEH.prototype._listenToRouterChanges = /**
     * URL changes
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.emitOuter('queryparamschange', params);
            // aditional params control
            if (params.orderby && params.orderdirection) {
                _this.dataSource.onOrderByChange(params.orderby + "_" + params.orderdirection);
            }
            if (params.page) {
                _this.dataSource.onPaginationChange("page-" + params.page);
            }
            if (params.limit) {
                _this.dataSource.setLimit(+params.limit);
            }
            _this.facetsChange$.next();
        }));
    };
    return AwGalleryLayoutEH;
}(EventHandler));
export { AwGalleryLayoutEH };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutEH.prototype.route;
    /**
     * Emits when any of the gallery-facets are changed
     * @type {?}
     * @private
     */
    AwGalleryLayoutEH.prototype.facetsChange$;
    /**
     * Emits when the pagination element
     * or the select-sort element are changed
     * @type {?}
     * @private
     */
    AwGalleryLayoutEH.prototype.additionalParamsChange$;
    /**
     * Last queried text, used to check if the text has changed
     * @type {?}
     * @private
     */
    AwGalleryLayoutEH.prototype.previousText;
    /**
     * Is true when the search is triggered with a new text-string
     * @type {?}
     * @private
     */
    AwGalleryLayoutEH.prototype.textHasChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQ7SUFBdUMsNkNBQVk7SUFBbkQ7UUFBQSxxRUF1S0M7UUF0S1MsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7OztRQU96QyxtQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOzs7OztRQUk1Qyw2QkFBdUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7OztRQUd0RCxrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7OztRQUdsQixvQkFBYyxHQUFHLEtBQUssQ0FBQzs7SUFxSmpDLENBQUM7Ozs7SUFuSlEsa0NBQU07OztJQUFiO1FBQUEsaUJBMEVDO1FBekVDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssd0JBQXdCO29CQUFFO3dCQUM3QixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQzt3QkFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUM3QixLQUFJ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QUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDekIsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFNO1lBQ2pCLEtBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUMsMkJBQTJCO1lBQzNCLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUMzQyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBSSxNQUFNLENBQUMsT0FBTyxTQUFJLE1BQU0sQ0FBQyxjQUFnQixDQUFDLENBQUM7YUFDL0U7WUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFRLE1BQU0sQ0FBQyxJQUFNLENBQUMsQ0FBQzthQUMzRDtZQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7WUFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQXZLRCxDQUF1QyxZQUFZLEdBdUtsRDs7Ozs7OztJQXRLQyx1Q0FBaUQ7Ozs7O0lBRWpELDBDQUEyQjs7Ozs7SUFFM0Isa0NBQW1COzs7Ozs7SUFHbkIsMENBQW9EOzs7Ozs7O0lBSXBELG9EQUE4RDs7Ozs7O0lBRzlELHlDQUEwQjs7Ozs7O0lBRzFCLDJDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5TGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIC8qKiBFbWl0cyB3aGVuIGFueSBvZiB0aGUgZ2FsbGVyeS1mYWNldHMgYXJlIGNoYW5nZWQgKi9cbiAgcHJpdmF0ZSBmYWNldHNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBwYWdpbmF0aW9uIGVsZW1lbnRcbiAgICogb3IgdGhlIHNlbGVjdC1zb3J0IGVsZW1lbnQgYXJlIGNoYW5nZWQgKi9cbiAgcHJpdmF0ZSBhZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKiogTGFzdCBxdWVyaWVkIHRleHQsIHVzZWQgdG8gY2hlY2sgaWYgdGhlIHRleHQgaGFzIGNoYW5nZWQgKi9cbiAgcHJpdmF0ZSBwcmV2aW91c1RleHQgPSAnJztcblxuICAvKiogSXMgdHJ1ZSB3aGVuIHRoZSBzZWFyY2ggaXMgdHJpZ2dlcmVkIHdpdGggYSBuZXcgdGV4dC1zdHJpbmcgKi9cbiAgcHJpdmF0ZSB0ZXh0SGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWdhbGxlcnktbGF5b3V0LmluaXQnOiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9GYWNldHNDaGFuZ2UoKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0FkZGl0aW9uYWxQYXJhbXNDaGFuZ2UoKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKTtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlOiB0ZXh0SW5wdXQgfSA9IHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKCdxdWVyeScpWzBdO1xuICAgICAgICAgIGlmICgodGV4dElucHV0IHx8ICcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQodHJ1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZSgnX3Njb3JlX0RFU0MnKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7IC8vIGVtaXQgZnJvbSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1sYXlvdXQub3JkZXJieWNoYW5nZSc6XG4gICAgICAgICAgLy8gaGFuZGxlIHRoZSBjaGFuZ2Ugb2YgcmVzdWx0LW9yZGVyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZShwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTsgLy8gZW1pdCBmcm9tIG9ic2VydmFibGUgc3RyZWFtXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1sYXlvdXQuc2VhcmNocmVzZXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXNldEJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKHNlYXJjaCkgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldHNjaGFuZ2UnOiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHRleHRJbnB1dCB9ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoJ3F1ZXJ5JylbMF07XG4gICAgICAgICAgLy8gQ2hlY2tzIGlmIDxpbnB1dCB0eXBlPXRleHQ+J3MgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICB0aGlzLnRleHRIYXNDaGFuZ2VkID0gISEodGV4dElucHV0ICYmICh0ZXh0SW5wdXQgIT09IHRoaXMucHJldmlvdXNUZXh0KSk7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c1RleHQgPSB0ZXh0SW5wdXQ7XG4gICAgICAgICAgY29uc3QgYWN0aXZlT3JkZXIgPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJCeU9wdGlvbnMuZmlsdGVyKChkKSA9PiBkLnNlbGVjdGVkKVswXS52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCAmJiAodGV4dElucHV0IHx8ICcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgc29ydCBieSBzY29yZSBvcHRpb25cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pc1NlYXJjaGluZ1RleHQubmV4dCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA9PT0gMCAmJiAvc2NvcmUvaS50ZXN0KGFjdGl2ZU9yZGVyKSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHNvcnQgYnkgc2NvcmUgb3B0aW9uXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoJ2xhYmVsX3NvcnRfQVNDJyk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpOyAvLyBlbWl0IGZyb20gb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgdG8gYW55IG9mIHRoZSBzZWFyY2gtZmFjZXRzXG4gICAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgdGhpcy50ZXh0SGFzQ2hhbmdlZCA9IGZhbHNlOyAvLyByZXNldFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRvU2VhcmNoUmVxdWVzdCQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblNlYXJjaFJlc3BvbnNlKCk7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCdzZWFyY2hyZXNwb25zZScsIHRoaXMuZGF0YVNvdXJjZS5nZXRTZWFyY2hNb2RlbElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgaGFwcGVuaW5nIG9uIHBhZ2luYXRpb24gYW5kIHNlbGVjdCBlbGVtZW50cy5cbiAgICovXG4gIHByaXZhdGUgX2xpc3RlblRvQWRkaXRpb25hbFBhcmFtc0NoYW5nZSgpIHtcbiAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IHNlYXJjaE1vZGVsIH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xuXG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zXG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gdGhpcy5kYXRhU291cmNlLm9yZGVyQnk7XG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmRpcmVjdGlvbiA9IHRoaXMuZGF0YVNvdXJjZS5vcmRlckRpcmVjdGlvbjtcbiAgICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2U7XG4gICAgICBxdWVyeVBhcmFtcy5saW1pdCA9IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZTtcblxuICAgICAgLy8gSWYgdGhlIHNlYXJjaGVkIHRleHQgd2FzIHVwZGF0ZWQsIG92ZXJ3cml0ZSB0aGUgcXVlcnkgcGFyYW1zIGFuZCBmb3JjZSBzb3J0aW5nIGJ5IFwic2NvcmVcIi5cbiAgICAgIGlmICh0aGlzLnRleHRIYXNDaGFuZ2VkKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyYnkgPSAnX3Njb3JlJztcbiAgICAgICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSAnREVTQyc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBVUkwgY2hhbmdlcyAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3F1ZXJ5cGFyYW1zY2hhbmdlJywgcGFyYW1zKTtcbiAgICAgIC8vIGFkaXRpb25hbCBwYXJhbXMgY29udHJvbFxuICAgICAgaWYgKHBhcmFtcy5vcmRlcmJ5ICYmIHBhcmFtcy5vcmRlcmRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKGAke3BhcmFtcy5vcmRlcmJ5fV8ke3BhcmFtcy5vcmRlcmRpcmVjdGlvbn1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMucGFnZSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25QYWdpbmF0aW9uQ2hhbmdlKGBwYWdlLSR7cGFyYW1zLnBhZ2V9YCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmxpbWl0KSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRMaW1pdCgrcGFyYW1zLmxpbWl0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==