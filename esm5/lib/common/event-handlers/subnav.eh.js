/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/subnav.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var SubnavEH = /** @class */ (function (_super) {
    tslib_1.__extends(SubnavEH, _super);
    function SubnavEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SubnavEH.prototype.listen = /**
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
                case 'subnav.click':
                    // navigate control
                    if (payload.source === 'navigate') {
                        _this.emitGlobal('navigate', payload);
                    }
                    // global signal
                    _this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return SubnavEH;
}(EventHandler));
export { SubnavEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibmF2LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9ldmVudC1oYW5kbGVycy9zdWJuYXYuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQThCLG9DQUFZO0lBQTFDOztJQW1CQSxDQUFDOzs7O0lBbEJRLHlCQUFNOzs7SUFBYjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLGNBQWM7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsSUFBRyxPQUFPLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBQzt3QkFDL0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ3RDO29CQUVELGdCQUFnQjtvQkFDaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQy9CLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFuQkQsQ0FBOEIsWUFBWSxHQW1CekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VibmF2RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICBjYXNlICdzdWJuYXYuY2xpY2snOlxyXG4gICAgICAgICAgLy8gbmF2aWdhdGUgY29udHJvbFxyXG4gICAgICAgICAgaWYocGF5bG9hZC5zb3VyY2UgPT09ICduYXZpZ2F0ZScpe1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gZ2xvYmFsIHNpZ25hbFxyXG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKHR5cGUsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19