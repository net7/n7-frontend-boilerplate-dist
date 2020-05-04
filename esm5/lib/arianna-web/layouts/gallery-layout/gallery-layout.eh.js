/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/gallery-layout/gallery-layout.eh.ts
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
        _this.facetsChange$ = new Subject();
        _this.aditionalParamsChange$ = new Subject();
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
                    _this.route = payload.route;
                    _this.configuration = payload.configuration;
                    _this.dataSource.onInit(payload);
                    _this._listenToFacetsChange();
                    _this._listenToAditionalParamsChange();
                    _this._listenToRouterChanges();
                    break;
                case 'aw-gallery-layout.destroy':
                    _this.dataSource.onDestroy();
                    _this.destroyed$.next();
                    break;
                case 'aw-gallery-layout.orderbychange':
                    _this.dataSource.onOrderByChange(payload);
                    _this.aditionalParamsChange$.next();
                    break;
                case 'aw-gallery-layout.searchreset':
                    _this.dataSource.resetButtonEnabled = false;
                    _this.dataSource.searchModel.clear();
                    _this.aditionalParamsChange$.next();
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
                case 'n7-smart-pagination.change':
                    _this.dataSource.onResultsLimitChange(payload.value);
                    _this.aditionalParamsChange$.next();
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
    AwGalleryLayoutEH.prototype._listenToFacetsChange = /**
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
            _this.dataSource.doSearchRequest$().subscribe((/**
             * @return {?}
             */
            function () {
                _this.dataSource.resultsLoading = false;
                _this.dataSource.onSearchResponse();
                _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwGalleryLayoutEH.prototype._listenToAditionalParamsChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.aditionalParamsChange$.subscribe((/**
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
            // router signal
            _this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams: queryParams,
            });
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwGalleryLayoutEH.prototype._listenToRouterChanges = /**
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
    AwGalleryLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutEH.prototype.facetsChange$;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutEH.prototype.aditionalParamsChange$;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutEH.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpEO0lBQXVDLDZDQUFZO0lBQW5EO1FBQUEscUVBb0hDO1FBbkhTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFJekMsbUJBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUU1Qyw0QkFBc0IsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUE2Ry9ELENBQUM7Ozs7SUF6R1Esa0NBQU07OztJQUFiO1FBQUEsaUJBaURDO1FBaERDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssd0JBQXdCO29CQUMzQixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUM3QixLQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztvQkFDdEMsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7b0JBQzlCLE1BQU07Z0JB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QVksR0FvSGxEOzs7Ozs7O0lBbkhDLHVDQUFpRDs7Ozs7SUFFakQsa0NBQW1COzs7OztJQUVuQiwwQ0FBb0Q7Ozs7O0lBRXBELG1EQUE2RDs7Ozs7SUFFN0QsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0dhbGxlcnlMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgcHJpdmF0ZSBmYWNldHNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgYWRpdGlvbmFsUGFyYW1zQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1nYWxsZXJ5LWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvQWRpdGlvbmFsUGFyYW1zQ2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1sYXlvdXQub3JkZXJieWNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZShwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmFkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LWdhbGxlcnktbGF5b3V0LnNlYXJjaHJlc2V0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzZXRCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5hZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKHNlYXJjaCkgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldHNjaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXNldFBhZ2luYXRpb24oKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUmVzdWx0c0xpbWl0Q2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIHRoaXMuYWRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblRvRmFjZXRzQ2hhbmdlKCkge1xuICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kb1NlYXJjaFJlcXVlc3QkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblNlYXJjaFJlc3BvbnNlKCk7XG4gICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnc2VhcmNocmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0U2VhcmNoTW9kZWxJZCgpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuVG9BZGl0aW9uYWxQYXJhbXNDaGFuZ2UoKSB7XG4gICAgdGhpcy5hZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IHNlYXJjaE1vZGVsIH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xuXG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zXG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gdGhpcy5kYXRhU291cmNlLm9yZGVyQnk7XG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmRpcmVjdGlvbiA9IHRoaXMuZGF0YVNvdXJjZS5vcmRlckRpcmVjdGlvbjtcbiAgICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2U7XG4gICAgICBxdWVyeVBhcmFtcy5saW1pdCA9IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZTtcblxuICAgICAgLy8gcm91dGVyIHNpZ25hbFxuICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgIHBhdGg6IFtdLFxuICAgICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdxdWVyeXBhcmFtc2NoYW5nZScsIHBhcmFtcyk7XG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zIGNvbnRyb2xcbiAgICAgIGlmIChwYXJhbXMub3JkZXJieSAmJiBwYXJhbXMub3JkZXJkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZShgJHtwYXJhbXMub3JkZXJieX1fJHtwYXJhbXMub3JkZXJkaXJlY3Rpb259YCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnBhZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUGFnaW5hdGlvbkNoYW5nZShgcGFnZS0ke3BhcmFtcy5wYWdlfWApO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5saW1pdCkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0TGltaXQoK3BhcmFtcy5saW1pdCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=