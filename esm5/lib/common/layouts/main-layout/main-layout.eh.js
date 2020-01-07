/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { SearchService } from '../../services';
var MainLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(MainLayoutEH, _super);
    function MainLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    MainLayoutEH.prototype.listen = /**
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
                case 'main-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.mainState = payload.mainState;
                    _this.route = payload.route;
                    _this._listenRouterChanges();
                    _this._listenMainStateChanges();
                    break;
                case 'main-layout.destroy':
                    _this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        // listen to global events
        EventHandler.globalEvents$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'global.navigate':
                    _this.dataSource.onNavigate(payload);
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
    MainLayoutEH.prototype._listenRouterChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.queryParams.pipe(filter((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (Object.keys(params).length)
                return true;
            return false;
        }))).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.emitGlobal('queryparams', params);
            // to use in searchs
            SearchService.queryParams = params;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MainLayoutEH.prototype._listenMainStateChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.mainState.addCustom('currentNav', new Subject());
        this.mainState.getCustom$('currentNav').subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.emitOuter('currentnavchange', val);
        }));
    };
    return MainLayoutEH;
}(EventHandler));
export { MainLayoutEH };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.mainState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFTLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQztJQUFrQyx3Q0FBWTtJQUE5QztRQUFBLHFFQStEQztRQTlEUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQThEbkQsQ0FBQzs7OztJQTFEUSw2QkFBTTs7O0lBQWI7UUFBQSxpQkFrQ0M7UUFqQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBTyxJQUFJLEVBQUU7Z0JBQ1gsS0FBSyxrQkFBa0I7b0JBQ3JCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFFM0IsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQzVCLEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO29CQUMvQixNQUFNO2dCQUVSLEtBQUsscUJBQXFCO29CQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUVWO29CQUNJLE1BQU07YUFDWDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsMEJBQTBCO1FBQzFCLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM3QixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWU7Z0JBQWQsY0FBSSxFQUFFLG9CQUFPO1lBQ3pCLFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssaUJBQWlCO29CQUNwQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sMkNBQW9COzs7O0lBQTVCO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3pCLE1BQU07Ozs7UUFBQyxVQUFBLE1BQU07WUFDWCxJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUMzQyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQyxDQUVILENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTtZQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV2QyxvQkFBb0I7WUFDcEIsYUFBYSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUdPLDhDQUF1Qjs7OztJQUEvQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ25ELEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBL0RELENBQWtDLFlBQVksR0ErRDdDOzs7Ozs7O0lBOURDLGtDQUFpRDs7Ozs7SUFDakQsNkJBQW1COzs7OztJQUNuQixpQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGZpcnN0LCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5leHBvcnQgY2xhc3MgTWFpbkxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJvdXRlOiBhbnk7XG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdtYWluLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG5cbiAgICAgICAgICB0aGlzLl9saXN0ZW5Sb3V0ZXJDaGFuZ2VzKCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuTWFpblN0YXRlQ2hhbmdlcygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21haW4tbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGxpc3RlbiB0byBnbG9iYWwgZXZlbnRzXG4gICAgRXZlbnRIYW5kbGVyLmdsb2JhbEV2ZW50cyQucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXG4gICAgKS5zdWJzY3JpYmUoKHt0eXBlLCBwYXlsb2FkfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICBjYXNlICdnbG9iYWwubmF2aWdhdGUnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk5hdmlnYXRlKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIFxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblJvdXRlckNoYW5nZXMoKXtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICBmaWx0ZXIocGFyYW1zID0+IHtcbiAgICAgICAgaWYoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSxcbiAgICAgIC8vIGZpcnN0KCksXG4gICAgKS5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuZW1pdEdsb2JhbCgncXVlcnlwYXJhbXMnLCBwYXJhbXMpO1xuXG4gICAgICAvLyB0byB1c2UgaW4gc2VhcmNoc1xuICAgICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IHBhcmFtcztcbiAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfbGlzdGVuTWFpblN0YXRlQ2hhbmdlcygpe1xuICAgIHRoaXMubWFpblN0YXRlLmFkZEN1c3RvbSgnY3VycmVudE5hdicsIG5ldyBTdWJqZWN0KCkpO1xuICAgIHRoaXMubWFpblN0YXRlLmdldEN1c3RvbSQoJ2N1cnJlbnROYXYnKS5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdjdXJyZW50bmF2Y2hhbmdlJywgdmFsKTtcbiAgICB9KTtcbiAgfVxufVxuIl19