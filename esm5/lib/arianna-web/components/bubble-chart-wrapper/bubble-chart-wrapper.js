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
    /**
     * @param {?} type
     * @return {?}
     */
    BubbleChartWrapperComponent.prototype.onMouseOut = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.emit(type);
    };
    /**
     * @return {?}
     */
    BubbleChartWrapperComponent.prototype.onDestroy = /**
     * @return {?}
     */
    function () {
        console.log("destroyed");
    };
    BubbleChartWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-bubble-chart-wrapper',
                    template: "<div class=\"aw-bubble-chart-wrapper\" >\n    <button style=\"display: none;\" id=\"bubble-popup-menu_closebutton\"\n        (click)=\"onClick('bubble-tooltip-close-click',{entityId: (hover ? hover.id : null)} )\"></button>\n    <button style=\"display: none;\" id=\"bubble-popup-menu_gotobutton\"\n        (click)=\"onClick('bubble-tooltip-goto-click',{entityId:(hover  ? hover.id : null)} )\"></button>\n    <button style=\"display: none;\" id=\"bubble-popup-menu_selectbutton\"\n        (click)=\"onClick('bubble-tooltip-select-click',{entityId:(hover ? hover.id : null)} )\"></button>\n    <div id=\"bubble-popup-menu\" class=\"aw-bubble-popup-menu\" style=\"display: none;\">\n        <h2 class=\"aw-bubble-popup-menu__title\">{{ ( hover ? hover.label : '' ) }}</h2>\n        <span class=\"n7-icon-close aw-bubble-popup-menu__close\"\n            onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\"></span>\n        <p class=\"aw-bubble-popup-menu__text\">\n            {{ ( hover ? '\u00C8 collegato a '+ hover.count + ' entit\u00E0' : '' ) }}\n        </p>\n        <div class=\"aw-bubble-popup-menu__actions\">\n            <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('goto') >= 0\"\n                onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n            <ng-container *ngIf=\"buttons.length > 1\"></ng-container>\n            <span class=\"aw-bubble-popup-menu__link\" *ngIf=\"buttons.indexOf('select') >= 0\"\n                onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">Seleziona</span>\n        </div>\n    </div>\n    <div [id]=\"container\">\n        <ng-content></ng-content>\n    </div>\n</div>"
                }] }
    ];
    BubbleChartWrapperComponent.propDecorators = {
        hover: [{ type: Input }],
        emit: [{ type: Input }],
        container: [{ type: Input }],
        buttons: [{ type: Input }]
    };
    return BubbleChartWrapperComponent;
}());
export { BubbleChartWrapperComponent };
if (false) {
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.hover;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.emit;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.container;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.buttons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFBQTtJQW1CQSxDQUFDOzs7Ozs7SUFUQyw2Q0FBTzs7Ozs7SUFBUCxVQUFRLElBQUksRUFBRSxPQUFPO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBQ0QsZ0RBQVU7Ozs7SUFBVixVQUFXLElBQUk7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFDRCwrQ0FBUzs7O0lBQVQ7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsbXVEQUEwQztpQkFDM0M7Ozt3QkFFRSxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQVdSLGtDQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FmWSwyQkFBMkI7OztJQUN0Qyw0Q0FBb0I7O0lBQ3BCLDJDQUFtQjs7SUFDbkIsZ0RBQTJCOztJQUMzQiw4Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQnViYmxlQ2hhcnRXcmFwcGVyLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LWJ1YmJsZS1jaGFydC13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC13cmFwcGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGhvdmVyOiBhbnk7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJ1dHRvbnM6IGFueTtcblxuICBvbkNsaWNrKHR5cGUsIHBheWxvYWQpIHtcbiAgICB0aGlzLmVtaXQodHlwZSwgcGF5bG9hZCk7XG4gIH1cbiAgb25Nb3VzZU91dCh0eXBlKSB7XG4gICAgdGhpcy5lbWl0KHR5cGUpO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImRlc3Ryb3llZFwiKTtcbiAgfVxufVxuIl19