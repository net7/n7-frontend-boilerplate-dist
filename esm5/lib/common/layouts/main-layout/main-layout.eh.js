/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/main-layout/main-layout.eh.ts
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
                    _this.route = payload.route;
                    _this.router = payload.router;
                    _this._listenRouterChanges();
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
    MainLayoutEH.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBUyxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0M7SUFBa0Msd0NBQVk7SUFBOUM7UUFBQSxxRUF3REM7UUF2RFMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUF1RG5ELENBQUM7Ozs7SUFuRFEsNkJBQU07OztJQUFiO1FBQUEsaUJBa0NDO1FBakNDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQU8sSUFBSSxFQUFFO2dCQUNYLEtBQUssa0JBQWtCO29CQUNyQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBRTdCLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUM1QixNQUFNO2dCQUVSLEtBQUsscUJBQXFCO29CQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUVWO29CQUNJLE1BQU07YUFDWDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsMEJBQTBCO1FBQzFCLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM3QixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWU7Z0JBQWQsY0FBSSxFQUFFLG9CQUFPO1lBQ3pCLFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssaUJBQWlCO29CQUNwQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sMkNBQW9COzs7O0lBQTVCO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3pCLE1BQU07Ozs7UUFBQyxVQUFBLE1BQU07WUFDWCxJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUMzQyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQyxDQUVILENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTtZQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV2QyxvQkFBb0I7WUFDcEIsYUFBYSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsbUJBQUM7QUFBRCxDQUFDLEFBeERELENBQWtDLFlBQVksR0F3RDdDOzs7Ozs7O0lBdkRDLGtDQUFpRDs7Ozs7SUFDakQsNkJBQW1COzs7OztJQUNuQiw4QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGZpcnN0LCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5leHBvcnQgY2xhc3MgTWFpbkxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJvdXRlOiBhbnk7XG4gIHByaXZhdGUgcm91dGVyOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdtYWluLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcblxuICAgICAgICAgIHRoaXMuX2xpc3RlblJvdXRlckNoYW5nZXMoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtYWluLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBsaXN0ZW4gdG8gZ2xvYmFsIGV2ZW50c1xuICAgIEV2ZW50SGFuZGxlci5nbG9iYWxFdmVudHMkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCh7dHlwZSwgcGF5bG9hZH0pID0+IHtcbiAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgY2FzZSAnZ2xvYmFsLm5hdmlnYXRlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25OYXZpZ2F0ZShwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Sb3V0ZXJDaGFuZ2VzKCl7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgZmlsdGVyKHBhcmFtcyA9PiB7XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSksXG4gICAgICAvLyBmaXJzdCgpLFxuICAgICkuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmVtaXRHbG9iYWwoJ3F1ZXJ5cGFyYW1zJywgcGFyYW1zKTtcblxuICAgICAgLy8gdG8gdXNlIGluIHNlYXJjaHNcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBwYXJhbXM7XG4gICAgfSk7XG4gIH0gXG4gIFxufSJdfQ==