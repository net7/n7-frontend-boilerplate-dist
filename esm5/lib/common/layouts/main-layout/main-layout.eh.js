/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/main-layout/main-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { NavigationStart } from '@angular/router';
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
                    _this.router = payload.router;
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
        // router changed
        this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationStart; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.dataSource.onRouterChanged();
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
    MainLayoutEH.prototype.router;
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.mainState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DO0lBQWtDLHdDQUFZO0lBQTlDO1FBQUEscUVBNEVDO1FBM0VTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBMkVuRCxDQUFDOzs7O0lBbkVRLDZCQUFNOzs7SUFBYjtRQUFBLGlCQW1DQztRQWxDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGtCQUFrQjtvQkFDckIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBRTdCLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUM1QixLQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztvQkFDL0IsTUFBTTtnQkFFUixLQUFLLHFCQUFxQjtvQkFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILDBCQUEwQjtRQUMxQixZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUIsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxpQkFBaUI7b0JBQ3BCLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTywyQ0FBb0I7Ozs7SUFBNUI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUN6QixNQUFNOzs7O1FBQUMsVUFBQyxNQUFNO1lBQ1osSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU07Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFDNUMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FFSCxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQU07WUFDakIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdkMsb0JBQW9CO1lBQ3BCLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLENBQUMsRUFBQyxDQUFDO1FBRUgsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsTUFBTTs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxZQUFZLGVBQWUsRUFBaEMsQ0FBZ0MsRUFBQyxDQUNwRDthQUNFLFNBQVM7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBR08sOENBQXVCOzs7O0lBQS9CO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDcEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUE1RUQsQ0FBa0MsWUFBWSxHQTRFN0M7Ozs7Ozs7SUEzRUMsa0NBQWlEOzs7OztJQUVqRCw2QkFBbUI7Ozs7O0lBRW5CLDhCQUFvQjs7Ozs7SUFFcEIsaUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5MYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIHJvdXRlOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgcm91dGVyOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21haW4tbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XHJcblxyXG4gICAgICAgICAgdGhpcy5fbGlzdGVuUm91dGVyQ2hhbmdlcygpO1xyXG4gICAgICAgICAgdGhpcy5fbGlzdGVuTWFpblN0YXRlQ2hhbmdlcygpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ21haW4tbGF5b3V0LmRlc3Ryb3knOlxyXG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGxpc3RlbiB0byBnbG9iYWwgZXZlbnRzXHJcbiAgICBFdmVudEhhbmRsZXIuZ2xvYmFsRXZlbnRzJC5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcclxuICAgICkuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdnbG9iYWwubmF2aWdhdGUnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uTmF2aWdhdGUocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2xpc3RlblJvdXRlckNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXHJcbiAgICAgIGZpbHRlcigocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyBmaXJzdCgpLFxyXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICB0aGlzLmVtaXRHbG9iYWwoJ3F1ZXJ5cGFyYW1zJywgcGFyYW1zKTtcclxuXHJcbiAgICAgIC8vIHRvIHVzZSBpbiBzZWFyY2hzXHJcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBwYXJhbXM7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByb3V0ZXIgY2hhbmdlZFxyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAgICAgIGZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSxcclxuICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUm91dGVyQ2hhbmdlZCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIF9saXN0ZW5NYWluU3RhdGVDaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5tYWluU3RhdGUuYWRkQ3VzdG9tKCdjdXJyZW50TmF2JywgbmV3IFN1YmplY3QoKSk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS5nZXRDdXN0b20kKCdjdXJyZW50TmF2Jykuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2N1cnJlbnRuYXZjaGFuZ2UnLCB2YWwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==