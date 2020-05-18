/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
var AwSearchLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwSearchLayoutEH, _super);
    function AwSearchLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        /**
         * Emits when any of the search-facets are changed
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
    AwSearchLayoutEH.prototype.listen = /**
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
                case 'aw-search-layout.init':
                    _this.route = payload.route;
                    _this.configuration = payload.configuration;
                    _this.dataSource.onInit(payload);
                    _this._listenToFacetsChange();
                    _this._listenToAdditionalParamsChange();
                    _this._listenToRouterChanges();
                    break;
                case 'aw-search-layout.destroy':
                    _this.dataSource.onDestroy();
                    _this.destroyed$.next();
                    break;
                case 'aw-search-layout.orderbychange':
                    // handle the change of result-order
                    _this.dataSource.onOrderByChange(payload);
                    _this.additionalParamsChange$.next(); // emit from observable stream
                    break;
                case 'aw-search-layout.searchreset':
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
                        if (_this.textHasChanged && textInput.length > 0) {
                            // Add sort by score option
                            _this.dataSource.isSearchingText.next(true);
                        }
                        else if (textInput.length === 0) {
                            // Remove sort by score option
                            _this.dataSource.isSearchingText.next(false);
                            setTimeout((/**
                             * @return {?}
                             */
                            function () {
                                _this.dataSource.onOrderByChange('label_sort_DESC');
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
    AwSearchLayoutEH.prototype._listenToFacetsChange = /**
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
    AwSearchLayoutEH.prototype._listenToAdditionalParamsChange = /**
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
    AwSearchLayoutEH.prototype._listenToRouterChanges = /**
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
    return AwSearchLayoutEH;
}(EventHandler));
export { AwSearchLayoutEH };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQ7SUFBc0MsNENBQVk7SUFBbEQ7UUFBQSxxRUE4SkM7UUE3SlMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7OztRQU96QyxtQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOzs7OztRQUk1Qyw2QkFBdUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7OztRQUd0RCxrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7OztRQUdsQixvQkFBYyxHQUFHLEtBQUssQ0FBQzs7SUE0SWpDLENBQUM7Ozs7SUExSVEsaUNBQU07OztJQUFiO1FBQUEsaUJBaUVDO1FBaEVDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUM3QixLQUFJLENBQUMsK0JB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YSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTlKRCxDQUFzQyxZQUFZLEdBOEpqRDs7Ozs7OztJQTdKQyxzQ0FBaUQ7Ozs7O0lBRWpELHlDQUEyQjs7Ozs7SUFFM0IsaUNBQW1COzs7Ozs7SUFHbkIseUNBQW9EOzs7Ozs7O0lBSXBELG1EQUE4RDs7Ozs7O0lBRzlELHdDQUEwQjs7Ozs7O0lBRzFCLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gYW55IG9mIHRoZSBzZWFyY2gtZmFjZXRzIGFyZSBjaGFuZ2VkICovXG4gIHByaXZhdGUgZmFjZXRzQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgcGFnaW5hdGlvbiBlbGVtZW50XG4gICAqIG9yIHRoZSBzZWxlY3Qtc29ydCBlbGVtZW50IGFyZSBjaGFuZ2VkICovXG4gIHByaXZhdGUgYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqIExhc3QgcXVlcmllZCB0ZXh0LCB1c2VkIHRvIGNoZWNrIGlmIHRoZSB0ZXh0IGhhcyBjaGFuZ2VkICovXG4gIHByaXZhdGUgcHJldmlvdXNUZXh0ID0gJyc7XG5cbiAgLyoqIElzIHRydWUgd2hlbiB0aGUgc2VhcmNoIGlzIHRyaWdnZXJlZCB3aXRoIGEgbmV3IHRleHQtc3RyaW5nICovXG4gIHByaXZhdGUgdGV4dEhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvRmFjZXRzQ2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9BZGRpdGlvbmFsUGFyYW1zQ2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0Lm9yZGVyYnljaGFuZ2UnOlxuICAgICAgICAgIC8vIGhhbmRsZSB0aGUgY2hhbmdlIG9mIHJlc3VsdC1vcmRlclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7IC8vIGVtaXQgZnJvbSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXNlYXJjaC1sYXlvdXQuc2VhcmNocmVzZXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXNldEJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKHNlYXJjaCkgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldHNjaGFuZ2UnOiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHRleHRJbnB1dCB9ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoJ3F1ZXJ5JylbMF07XG4gICAgICAgICAgLy8gQ2hlY2tzIGlmIDxpbnB1dCB0eXBlPXRleHQ+J3MgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICB0aGlzLnRleHRIYXNDaGFuZ2VkID0gISEodGV4dElucHV0ICYmICh0ZXh0SW5wdXQgIT09IHRoaXMucHJldmlvdXNUZXh0KSk7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c1RleHQgPSB0ZXh0SW5wdXQ7XG4gICAgICAgICAgaWYgKHRoaXMudGV4dEhhc0NoYW5nZWQgJiYgdGV4dElucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEFkZCBzb3J0IGJ5IHNjb3JlIG9wdGlvblxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmlzU2VhcmNoaW5nVGV4dC5uZXh0KHRydWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGV4dElucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHNvcnQgYnkgc2NvcmUgb3B0aW9uXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoJ2xhYmVsX3NvcnRfREVTQycpO1xuICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTsgLy8gZW1pdCBmcm9tIG9ic2VydmFibGUgc3RyZWFtXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBicmVhaztcblxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUmVzdWx0c0xpbWl0Q2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBjaGFuZ2VzIHRvIGFueSBvZiB0aGUgc2VhcmNoLWZhY2V0c1xuICAgKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9GYWNldHNDaGFuZ2UoKSB7XG4gICAgdGhpcy5mYWNldHNDaGFuZ2UkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xvYWRpbmcgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMudGV4dEhhc0NoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgIHRoaXMudGV4dEhhc0NoYW5nZWQgPSBmYWxzZTsgLy8gcmVzZXRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kb1NlYXJjaFJlcXVlc3QkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25TZWFyY2hSZXNwb25zZSgpO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnc2VhcmNocmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0U2VhcmNoTW9kZWxJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBjaGFuZ2VzIGhhcHBlbmluZyBvbiBwYWdpbmF0aW9uIGFuZCBzZWxlY3QgZWxlbWVudHMuXG4gICAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub0FkZGl0aW9uYWxQYXJhbXNDaGFuZ2UoKSB7XG4gICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgeyBzZWFyY2hNb2RlbCB9ID0gdGhpcy5kYXRhU291cmNlO1xuICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcblxuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4geyBxdWVyeVBhcmFtc1trZXldID0gcXVlcnlQYXJhbXNba2V5XSB8fCBudWxsOyB9KTtcblxuICAgICAgLy8gYWRpdGlvbmFsIHBhcmFtc1xuICAgICAgcXVlcnlQYXJhbXMub3JkZXJieSA9IHRoaXMuZGF0YVNvdXJjZS5vcmRlckJ5O1xuICAgICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJEaXJlY3Rpb247XG4gICAgICBxdWVyeVBhcmFtcy5wYWdlID0gdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlO1xuICAgICAgcXVlcnlQYXJhbXMubGltaXQgPSB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemU7XG5cbiAgICAgIC8vIElmIHRoZSBzZWFyY2hlZCB0ZXh0IHdhcyB1cGRhdGVkLCBvdmVyd3JpdGUgdGhlIHF1ZXJ5IHBhcmFtcyBhbmQgZm9yY2Ugc29ydGluZyBieSBcInNjb3JlXCIuXG4gICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCkge1xuICAgICAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gJ19zY29yZSc7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyZGlyZWN0aW9uID0gJ0RFU0MnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgcGF0aDogW10sXG4gICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogVVJMIGNoYW5nZXMgKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdxdWVyeXBhcmFtc2NoYW5nZScsIHBhcmFtcyk7XG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zIGNvbnRyb2xcbiAgICAgIGlmIChwYXJhbXMub3JkZXJieSAmJiBwYXJhbXMub3JkZXJkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZShgJHtwYXJhbXMub3JkZXJieX1fJHtwYXJhbXMub3JkZXJkaXJlY3Rpb259YCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnBhZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUGFnaW5hdGlvbkNoYW5nZShgcGFnZS0ke3BhcmFtcy5wYWdlfWApO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5saW1pdCkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0TGltaXQoK3BhcmFtcy5saW1pdCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=