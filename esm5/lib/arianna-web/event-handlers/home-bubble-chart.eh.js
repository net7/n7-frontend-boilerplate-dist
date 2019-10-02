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
    };
    return AwHomeBubbleChartEH;
}(EventHandler));
export { AwHomeBubbleChartEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvaG9tZS1idWJibGUtY2hhcnQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBeUMsK0NBQVk7SUFBckQ7O0lBb0JBLENBQUM7Ozs7SUFsQlEsb0NBQU07OztJQUFiO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQy9CLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDbEIsS0FBSyw0QkFBNEI7b0JBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLGtDQUFrQztvQkFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxNQUFNO2dCQUNSLEtBQUssa0NBQWtDO29CQUNyQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsMEJBQUM7QUFBRCxDQUFDLEFBcEJELENBQXlDLFlBQVksR0FvQnBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lQnViYmxlQ2hhcnRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYnViYmxlLWNoYXJ0LmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWJ1YmJsZS1jaGFydC5tb3VzZV9lbnRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ21vdXNlX2VudGVyJyxldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1idWJibGUtY2hhcnQubW91c2VfbGVhdmUnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdtb3VzZV9sZWF2ZScsZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufSJdfQ==