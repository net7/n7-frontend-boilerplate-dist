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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvaG9tZS1idWJibGUtY2hhcnQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBeUMsK0NBQVk7SUFBckQ7O0lBbUJBLENBQUM7Ozs7SUFqQlEsb0NBQU07OztJQUFiO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDL0IsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNsQixLQUFLLDRCQUE0QjtvQkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0g7Ozs7VUFJRTtJQUNKLENBQUM7SUFFSCwwQkFBQztBQUFELENBQUMsQUFuQkQsQ0FBeUMsWUFBWSxHQW1CcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVCdWJibGVDaGFydEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLypcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgXG4gICAgfSk7XG4gICAgKi9cbiAgfVxuXG59Il19