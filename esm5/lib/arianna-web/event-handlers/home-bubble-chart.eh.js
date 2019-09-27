/**
 * @fileoverview added by tsickle
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
                case 'aw-home-bubble-chart.mouse_enter':
                    _this.emitOuter('mouse_enter', event.payload);
                    break;
                case 'aw-home-bubble-chart.mouse_leave':
                    _this.emitOuter('mouse_leave', event.payload);
                    break;
                default:
                    break;
            }
        }));
        /*
        this.outerEvents$.subscribe(event => {
          
        });
        */
    };
    return AwHomeBubbleChartEH;
}(EventHandler));
export { AwHomeBubbleChartEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvaG9tZS1idWJibGUtY2hhcnQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBeUMsK0NBQVk7SUFBckQ7O0lBeUJBLENBQUM7Ozs7SUF2QlEsb0NBQU07OztJQUFiO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUMvQixRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLEtBQUssNEJBQTRCO29CQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxrQ0FBa0M7b0JBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLGtDQUFrQztvQkFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0g7Ozs7VUFJRTtJQUNKLENBQUM7SUFFSCwwQkFBQztBQUFELENBQUMsQUF6QkQsQ0FBeUMsWUFBWSxHQXlCcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVCdWJibGVDaGFydEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0Lm1vdXNlX2VudGVyJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbW91c2VfZW50ZXInLGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5tb3VzZV9sZWF2ZSc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ21vdXNlX2xlYXZlJyxldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKlxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBcbiAgICB9KTtcbiAgICAqL1xuICB9XG5cbn0iXX0=