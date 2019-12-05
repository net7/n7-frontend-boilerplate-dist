/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/home-bubble-chart.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwHomeBubbleChartEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeBubbleChartEH, _super);
    function AwHomeBubbleChartEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHomeBubbleChartEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case 'aw-home-bubble-chart.click':
                    _this.emitOuter('click', event.payload);
                    break;
                case 'aw-home-bubble-chart.mouseenter':
                    _this.emitOuter('mouseenter', event.payload);
                    break;
                case 'aw-home-bubble-chart.mouseleave':
                    _this.emitOuter('mouseleave', event.payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return AwHomeBubbleChartEH;
}(EventHandler));
export { AwHomeBubbleChartEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvaG9tZS1idWJibGUtY2hhcnQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXlDLCtDQUFZO0lBQXJEOztJQW9CQSxDQUFDOzs7O0lBbEJRLG9DQUFNOzs7SUFBYjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUMvQixRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLEtBQUssNEJBQTRCO29CQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0MsTUFBTTtnQkFDUixLQUFLLGlDQUFpQztvQkFDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVILDBCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUF5QyxZQUFZLEdBb0JwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUJ1YmJsZUNoYXJ0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJyxldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQubW91c2VlbnRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ21vdXNlZW50ZXInLGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5tb3VzZWxlYXZlJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbW91c2VsZWF2ZScsZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufSJdfQ==