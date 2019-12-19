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
        _this.facetsChange$ = new Subject();
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
                    _this._listenToRouterChanges();
                    break;
                case 'aw-search-layout.destroy':
                    _this.dataSource.onDestroy();
                    _this.destroyed$.next();
                    break;
                case 'aw-search-layout.orderbychange':
                    _this.dataSource.onOrderByChange(payload);
                    _this.facetsChange$.next();
                    break;
                case 'aw-search-layout.searchreset':
                    _this.dataSource.resetButtonEnabled = false;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [_this.configuration.get('paths').searchBasePath]
                    });
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
                    _this.dataSource.resetPagination();
                    break;
                case 'aw-linked-objects.pagination':
                    _this.dataSource.onPaginationChange(payload).subscribe((/**
                     * @param {?} changed
                     * @return {?}
                     */
                    function (changed) {
                        if (changed) {
                            _this.facetsChange$.next();
                        }
                    }));
                    break;
                case 'aw-linked-objects.change':
                    _this.dataSource.onResultsLimitChange(payload);
                    _this.facetsChange$.next();
                    break;
                case 'aw-linked-objects.goto':
                    _this.dataSource.onPaginationGoToChange(payload).subscribe((/**
                     * @param {?} changed
                     * @return {?}
                     */
                    function (changed) {
                        if (changed) {
                            _this.facetsChange$.next();
                        }
                    }));
                    break;
                case 'aw-linked-objects.click':
                    /** @type {?} */
                    var paths = _this.dataSource.configuration.get('paths');
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [payload.type == undefined ? paths.schedaBasePath : paths.entitaBasePath, payload.id]
                    });
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwSearchLayoutEH.prototype._listenToFacetsChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.facetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.dataSource.doSearchRequest$().subscribe((/**
             * @return {?}
             */
            function () {
                _this.dataSource.onSearchResponse();
                _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwSearchLayoutEH.prototype._listenToRouterChanges = /**
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
    AwSearchLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.facetsChange$;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutEH.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQ7SUFBc0MsNENBQVk7SUFBbEQ7UUFBQSxxRUFxR0M7UUFwR1MsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxtQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQWtHdEQsQ0FBQzs7OztJQS9GUSxpQ0FBTTs7O0lBQWI7UUFBQSxpQkF5RUM7UUF4RUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO29CQUM5QixNQUFNO2dCQUVSLEtBQUssMEJBQTBCO29CQUM3QixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUM1QixLQUFJLENBQUMsVUFB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Z0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGlEQUFzQjs7OztJQUE5QjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU07WUFDaEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVILHVCQUFDO0FBQUQsQ0FBQyxBQXJHRCxDQUFzQyxZQUFZLEdBcUdqRDs7Ozs7OztJQXBHQyxzQ0FBaUQ7Ozs7O0lBQ2pELGlDQUFtQjs7Ozs7SUFDbkIseUNBQW9EOzs7OztJQUNwRCx5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcbiAgcHJpdmF0ZSBmYWNldHNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvRmFjZXRzQ2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctc2VhcmNoLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0Lm9yZGVyYnljaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1zZWFyY2gtbGF5b3V0LnNlYXJjaHJlc2V0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzZXRCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGhdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyhzZWFyY2gpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldHNjaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXNldFBhZ2luYXRpb24oKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5wYWdpbmF0aW9uJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25QYWdpbmF0aW9uQ2hhbmdlKHBheWxvYWQpLnN1YnNjcmliZShjaGFuZ2VkID0+IHtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5nb3RvJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25QYWdpbmF0aW9uR29Ub0NoYW5nZShwYXlsb2FkKS5zdWJzY3JpYmUoY2hhbmdlZCA9PiB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICB0aGlzLmZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNsaWNrJzpcbiAgICAgICAgICBjb25zdCBwYXRocyA9IHRoaXMuZGF0YVNvdXJjZS5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKTtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbcGF5bG9hZC50eXBlID09IHVuZGVmaW5lZCA/IHBhdGhzLnNjaGVkYUJhc2VQYXRoIDogcGF0aHMuZW50aXRhQmFzZVBhdGgsIHBheWxvYWQuaWRdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRvU2VhcmNoUmVxdWVzdCQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25TZWFyY2hSZXNwb25zZSgpO1xuICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ3NlYXJjaHJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldFNlYXJjaE1vZGVsSWQoKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmVtaXRPdXRlcigncXVlcnlwYXJhbXNjaGFuZ2UnLCBwYXJhbXMpO1xuICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=