/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/components/bubble-chart-wrapper/bubble-chart-wrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// BubbleChartWrapper.ts
//---------------------------
import { Component, Input } from '@angular/core';
export class BubbleChartWrapperComponent {
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    onClick(type, payload) {
        this.emit(type, payload);
    }
}
BubbleChartWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-bubble-chart-wrapper',
                template: "<div class=\"aw-bubble-chart-wrapper\">\r\n    <ng-content></ng-content>\r\n</div>"
            }] }
];
BubbleChartWrapperComponent.propDecorators = {
    emit: [{ type: Input }],
    container: [{ type: Input }],
    buttons: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.emit;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.container;
    /** @type {?} */
    BubbleChartWrapperComponent.prototype.buttons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWpELE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQU90QyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDhGQUEwQzthQUMzQzs7O21CQUVFLEtBQUs7d0JBRUwsS0FBSztzQkFFTCxLQUFLOzs7O0lBSk4sMkNBQW1COztJQUVuQixnREFBMkI7O0lBRTNCLDhDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEJ1YmJsZUNoYXJ0V3JhcHBlci50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy1idWJibGUtY2hhcnQtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC13cmFwcGVyLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRXcmFwcGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBidXR0b25zOiBhbnk7XHJcblxyXG4gIG9uQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xyXG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=