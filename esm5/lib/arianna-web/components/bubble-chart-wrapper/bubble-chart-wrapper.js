/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// BubbleChartWrapper.ts
//---------------------------
import { Component, Input } from '@angular/core';
var BubbleChartWrapperComponent = /** @class */ (function () {
    function BubbleChartWrapperComponent() {
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    BubbleChartWrapperComponent.prototype.onClick = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        this.emit(type, payload);
    };
    BubbleChartWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-bubble-chart-wrapper',
                    template: "<div class=\"aw-bubble-chart-wrapper\">\n    <div class=\"bubble-chart__tippy-template\" style=\"display: none;\">\n        <!-- <button id=\"bubble-popup-menu_closebutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-close-click')\"></button> -->\n        <button id=\"bubble-popup-menu_gotobutton\" class=\"bubble-popup-menu_gotobutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-goto-click', {})\"></button>\n        <button id=\"bubble-popup-menu_selectbutton\" style=\"display: none;\"\n            (click)=\"onClick('bubble-tooltip-select-click', {})\"></button>\n        <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\">\n            <h2 class=\"aw-bubble-popup-menu__title\">\n                <!-- Set by tippy builder fuction -->\n            </h2>\n            <!-- <span class=\"n7-icon-close aw-bubble-popup-menu__close\"\n                onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\">\n            </span> -->\n            <p class=\"aw-bubble-popup-menu__text\">\n                <!-- Set by tippy builder fuction -->\n            </p>\n            <div class=\"aw-bubble-popup-menu__actions\">\n                <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('goto') >= 0\"\n                    onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n                <ng-container>\n                    <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('select') >= 0\"\n                        onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">\n                        <!-- Set by tippy builder function -->\n                    </span>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n\n    <ng-content></ng-content>\n</div>"
                }] }
    ];
    BubbleChartWrapperComponent.propDecorators = {
        emit: [{ type: Input }],
        container: [{ type: Input }],
        buttons: [{ type: Input }]
    };
    return BubbleChartWrapperComponent;
}());
export { BubbleChartWrapperComponent };
if (false) {
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.emit;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.container;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.buttons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFBQTtJQVlBLENBQUM7Ozs7OztJQUhDLDZDQUFPOzs7OztJQUFQLFVBQVEsSUFBSSxFQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDIyREFBMEM7aUJBQzNDOzs7dUJBRUUsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBS1Isa0NBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSwyQkFBMkI7OztJQUN0QywyQ0FBbUI7O0lBQ25CLGdEQUEyQjs7SUFDM0IsOENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJ1YmJsZUNoYXJ0V3JhcHBlci50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1idWJibGUtY2hhcnQtd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWJibGUtY2hhcnQtd3JhcHBlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydFdyYXBwZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICBASW5wdXQoKSBidXR0b25zOiBhbnk7XG5cbiAgb25DbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICB9XG59Il19