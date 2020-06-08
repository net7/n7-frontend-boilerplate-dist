/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
import { EventHandler } from '@n7-frontend/core';
import { takeUntil, switchMap, map } from 'rxjs/operators';
var MrStaticLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(MrStaticLayoutEH, _super);
    function MrStaticLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroy$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    MrStaticLayoutEH.prototype.listen = /**
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
                case 'mr-static-layout.init':
                    _this.route = payload.route;
                    _this.dataSource.onInit(payload);
                    // listen route
                    _this.listenRoute();
                    break;
                case 'mr-static-layout.destroy':
                    _this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MrStaticLayoutEH.prototype.listenRoute = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.paramMap.pipe(takeUntil(this.destroy$), map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) { return params.get('slug'); })), switchMap((/**
         * @param {?} slug
         * @return {?}
         */
        function (slug) { return _this.dataSource.pageRequest$(slug); }))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            var title = response.title;
            var body = response.body;
            _this.dataSource.renderHTML(title, body);
        }));
    };
    return MrStaticLayoutEH;
}(EventHandler));
export { MrStaticLayoutEH };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrStaticLayoutEH.prototype.route;
    /** @type {?} */
    MrStaticLayoutEH.prototype.dataSource;
    /**
     * @type {?}
     * @private
     */
    MrStaticLayoutEH.prototype.destroy$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRDtJQUFzQyw0Q0FBWTtJQUFsRDtRQUFBLHFFQXdDQztRQW5DUyxjQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBbUNsRCxDQUFDOzs7O0lBakNRLGlDQUFNOzs7SUFBYjtRQUFBLGlCQW9CQztRQW5CQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFaEMsZUFBZTtvQkFDZixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLE1BQU07Z0JBRVIsS0FBSywwQkFBMEI7b0JBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLHNDQUFXOzs7O0lBQW5CO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQWdCLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFsQixDQUFrQixFQUFDLEVBQzdDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFsQyxDQUFrQyxFQUFDLENBQ2hFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsUUFBUTtZQUNYLElBQUEsc0JBQUs7WUFDTCxJQUFBLG9CQUFJO1lBQ1osS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUFzQyxZQUFZLEdBd0NqRDs7Ozs7OztJQXZDQyxpQ0FBOEI7O0lBRTlCLHNDQUFvQzs7Ozs7SUFFcEMsb0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtTWFwIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCwgc3dpdGNoTWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNclN0YXRpY0xheW91dERTIH0gZnJvbSAnLi9zdGF0aWMtbGF5b3V0LmRzJztcblxuZXhwb3J0IGNsYXNzIE1yU3RhdGljTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcblxuICBwdWJsaWMgZGF0YVNvdXJjZTogTXJTdGF0aWNMYXlvdXREUztcblxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zdGF0aWMtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG5cbiAgICAgICAgICAvLyBsaXN0ZW4gcm91dGVcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc3RhdGljLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgbWFwKChwYXJhbXM6IFBhcmFtTWFwKSA9PiBwYXJhbXMuZ2V0KCdzbHVnJykpLFxuICAgICAgc3dpdGNoTWFwKChzbHVnOiBzdHJpbmcpID0+IHRoaXMuZGF0YVNvdXJjZS5wYWdlUmVxdWVzdCQoc2x1ZykpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCB7IHRpdGxlIH0gPSByZXNwb25zZTtcbiAgICAgIGNvbnN0IHsgYm9keSB9ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySFRNTCh0aXRsZSwgYm9keSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==