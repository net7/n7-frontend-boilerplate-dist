/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil, first, filter } from 'rxjs/operators';
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
        })), first()).subscribe((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0M7SUFBa0Msd0NBQVk7SUFBOUM7UUFBQSxxRUF3REM7UUF2RFMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUF1RG5ELENBQUM7Ozs7SUFuRFEsNkJBQU07OztJQUFiO1FBQUEsaUJBa0NDO1FBakNDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQU8sSUFBSSxFQUFFO2dCQUNYLEtBQUssa0JBQWtCO29CQUNyQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBRTdCLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUM1QixNQUFNO2dCQUVSLEtBQUsscUJBQXFCO29CQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUVWO29CQUNJLE1BQU07YUFDWDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsMEJBQTBCO1FBQzFCLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM3QixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWU7Z0JBQWQsY0FBSSxFQUFFLG9CQUFPO1lBQ3pCLFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssaUJBQWlCO29CQUNwQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sMkNBQW9COzs7O0lBQTVCO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3pCLE1BQU07Ozs7UUFBQyxVQUFBLE1BQU07WUFDWCxJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUMzQyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQyxFQUNGLEtBQUssRUFBRSxDQUNSLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTtZQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV2QyxvQkFBb0I7WUFDcEIsYUFBYSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsbUJBQUM7QUFBRCxDQUFDLEFBeERELENBQWtDLFlBQVksR0F3RDdDOzs7Ozs7O0lBdkRDLGtDQUFpRDs7Ozs7SUFDakQsNkJBQW1COzs7OztJQUNuQiw4QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIGZpcnN0LCBmaWx0ZXIsIGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuZXhwb3J0IGNsYXNzIE1haW5MYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuICBwcml2YXRlIHJvdXRlcjogYW55O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbWFpbi1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcblxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XG5cbiAgICAgICAgICB0aGlzLl9saXN0ZW5Sb3V0ZXJDaGFuZ2VzKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbWFpbi1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuIHRvIGdsb2JhbCBldmVudHNcbiAgICBFdmVudEhhbmRsZXIuZ2xvYmFsRXZlbnRzJC5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICApLnN1YnNjcmliZSgoe3R5cGUsIHBheWxvYWR9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2dsb2JhbC5uYXZpZ2F0ZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uTmF2aWdhdGUocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuUm91dGVyQ2hhbmdlcygpe1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMucGlwZShcbiAgICAgIGZpbHRlcihwYXJhbXMgPT4ge1xuICAgICAgICBpZihPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pLFxuICAgICAgZmlyc3QoKSxcbiAgICApLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5lbWl0R2xvYmFsKCdxdWVyeXBhcmFtcycsIHBhcmFtcyk7XG5cbiAgICAgIC8vIHRvIHVzZSBpbiBzZWFyY2hzXG4gICAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gcGFyYW1zO1xuICAgIH0pO1xuICB9IFxuICBcbn0iXX0=