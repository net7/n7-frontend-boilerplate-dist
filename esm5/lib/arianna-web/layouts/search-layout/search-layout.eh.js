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
                        if (_this.textHasChanged && (textInput || '').length > 0) {
                            // Add sort by score option
                            _this.dataSource.isSearchingText.next(true);
                        }
                        else if ((textInput || '').length === 0) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQ7SUFBc0MsNENBQVk7SUFBbEQ7UUFBQSxxRUFzS0M7UUFyS1MsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7OztRQU96QyxtQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOzs7OztRQUk1Qyw2QkFBdUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7OztRQUd0RCxrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7OztRQUdsQixvQkFBYyxHQUFHLEtBQUssQ0FBQzs7SUFvSmpDLENBQUM7Ozs7SUFsSlEsaUNBQU07OztJQUFiO1FBQUEsaUJBeUVDO1FBeEVDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUFFO3dCQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQzt3QkFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUM3QixLQUFJLENB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SUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFJLE1BQU0sQ0FBQyxPQUFPLFNBQUksTUFBTSxDQUFDLGNBQWdCLENBQUMsQ0FBQzthQUMvRTtZQUNELElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDZixLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFVBQVEsTUFBTSxDQUFDLElBQU0sQ0FBQyxDQUFDO2FBQzNEO1lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QztZQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBdEtELENBQXNDLFlBQVksR0FzS2pEOzs7Ozs7O0lBcktDLHNDQUFpRDs7Ozs7SUFFakQseUNBQTJCOzs7OztJQUUzQixpQ0FBbUI7Ozs7OztJQUduQix5Q0FBb0Q7Ozs7Ozs7SUFJcEQsbURBQThEOzs7Ozs7SUFHOUQsd0NBQTBCOzs7Ozs7SUFHMUIsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICAvKiogRW1pdHMgd2hlbiBhbnkgb2YgdGhlIHNlYXJjaC1mYWNldHMgYXJlIGNoYW5nZWQgKi9cbiAgcHJpdmF0ZSBmYWNldHNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBwYWdpbmF0aW9uIGVsZW1lbnRcbiAgICogb3IgdGhlIHNlbGVjdC1zb3J0IGVsZW1lbnQgYXJlIGNoYW5nZWQgKi9cbiAgcHJpdmF0ZSBhZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKiogTGFzdCBxdWVyaWVkIHRleHQsIHVzZWQgdG8gY2hlY2sgaWYgdGhlIHRleHQgaGFzIGNoYW5nZWQgKi9cbiAgcHJpdmF0ZSBwcmV2aW91c1RleHQgPSAnJztcblxuICAvKiogSXMgdHJ1ZSB3aGVuIHRoZSBzZWFyY2ggaXMgdHJpZ2dlcmVkIHdpdGggYSBuZXcgdGV4dC1zdHJpbmcgKi9cbiAgcHJpdmF0ZSB0ZXh0SGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LXNlYXJjaC1sYXlvdXQuaW5pdCc6IHtcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvQWRkaXRpb25hbFBhcmFtc0NoYW5nZSgpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHRleHRJbnB1dCB9ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoJ3F1ZXJ5JylbMF07XG4gICAgICAgICAgaWYgKCh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pc1NlYXJjaGluZ1RleHQubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKCdfc2NvcmVfREVTQycpO1xuICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTsgLy8gZW1pdCBmcm9tIG9ic2VydmFibGUgc3RyZWFtXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXNlYXJjaC1sYXlvdXQub3JkZXJieWNoYW5nZSc6XG4gICAgICAgICAgLy8gaGFuZGxlIHRoZSBjaGFuZ2Ugb2YgcmVzdWx0LW9yZGVyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZShwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTsgLy8gZW1pdCBmcm9tIG9ic2VydmFibGUgc3RyZWFtXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5zZWFyY2hyZXNldCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0QnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCcoc2VhcmNoKSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ZhY2V0cy13cmFwcGVyLmZhY2V0c2NoYW5nZSc6IHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZTogdGV4dElucHV0IH0gPSB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgncXVlcnknKVswXTtcbiAgICAgICAgICAvLyBDaGVja3MgaWYgPGlucHV0IHR5cGU9dGV4dD4ncyB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgIHRoaXMudGV4dEhhc0NoYW5nZWQgPSAhISh0ZXh0SW5wdXQgJiYgKHRleHRJbnB1dCAhPT0gdGhpcy5wcmV2aW91c1RleHQpKTtcbiAgICAgICAgICB0aGlzLnByZXZpb3VzVGV4dCA9IHRleHRJbnB1dDtcbiAgICAgICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCAmJiAodGV4dElucHV0IHx8ICcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgc29ydCBieSBzY29yZSBvcHRpb25cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pc1NlYXJjaGluZ1RleHQubmV4dCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHNvcnQgYnkgc2NvcmUgb3B0aW9uXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoJ2xhYmVsX3NvcnRfREVTQycpO1xuICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTsgLy8gZW1pdCBmcm9tIG9ic2VydmFibGUgc3RyZWFtXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBicmVhaztcblxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUmVzdWx0c0xpbWl0Q2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBjaGFuZ2VzIHRvIGFueSBvZiB0aGUgc2VhcmNoLWZhY2V0c1xuICAgKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9GYWNldHNDaGFuZ2UoKSB7XG4gICAgdGhpcy5mYWNldHNDaGFuZ2UkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xvYWRpbmcgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMudGV4dEhhc0NoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgIHRoaXMudGV4dEhhc0NoYW5nZWQgPSBmYWxzZTsgLy8gcmVzZXRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kb1NlYXJjaFJlcXVlc3QkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25TZWFyY2hSZXNwb25zZSgpO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnc2VhcmNocmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0U2VhcmNoTW9kZWxJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBjaGFuZ2VzIGhhcHBlbmluZyBvbiBwYWdpbmF0aW9uIGFuZCBzZWxlY3QgZWxlbWVudHMuXG4gICAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub0FkZGl0aW9uYWxQYXJhbXNDaGFuZ2UoKSB7XG4gICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgeyBzZWFyY2hNb2RlbCB9ID0gdGhpcy5kYXRhU291cmNlO1xuICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcblxuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4geyBxdWVyeVBhcmFtc1trZXldID0gcXVlcnlQYXJhbXNba2V5XSB8fCBudWxsOyB9KTtcblxuICAgICAgLy8gYWRpdGlvbmFsIHBhcmFtc1xuICAgICAgcXVlcnlQYXJhbXMub3JkZXJieSA9IHRoaXMuZGF0YVNvdXJjZS5vcmRlckJ5O1xuICAgICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJEaXJlY3Rpb247XG4gICAgICBxdWVyeVBhcmFtcy5wYWdlID0gdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlO1xuICAgICAgcXVlcnlQYXJhbXMubGltaXQgPSB0aGlzLmRhdGFTb3VyY2UucGFnZVNpemU7XG5cbiAgICAgIC8vIElmIHRoZSBzZWFyY2hlZCB0ZXh0IHdhcyB1cGRhdGVkLCBvdmVyd3JpdGUgdGhlIHF1ZXJ5IHBhcmFtcyBhbmQgZm9yY2Ugc29ydGluZyBieSBcInNjb3JlXCIuXG4gICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCkge1xuICAgICAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gJ19zY29yZSc7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyZGlyZWN0aW9uID0gJ0RFU0MnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgcGF0aDogW10sXG4gICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogVVJMIGNoYW5nZXMgKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdxdWVyeXBhcmFtc2NoYW5nZScsIHBhcmFtcyk7XG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zIGNvbnRyb2xcbiAgICAgIGlmIChwYXJhbXMub3JkZXJieSAmJiBwYXJhbXMub3JkZXJkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZShgJHtwYXJhbXMub3JkZXJieX1fJHtwYXJhbXMub3JkZXJkaXJlY3Rpb259YCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnBhZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUGFnaW5hdGlvbkNoYW5nZShgcGFnZS0ke3BhcmFtcy5wYWdlfWApO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5saW1pdCkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0TGltaXQoK3BhcmFtcy5saW1pdCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=