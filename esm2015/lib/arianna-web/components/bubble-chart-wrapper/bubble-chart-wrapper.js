/**
 * @fileoverview added by tsickle
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
                template: "<div class=\"aw-bubble-chart-wrapper\">\n    <ng-content></ng-content>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBS3RDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsMEZBQTBDO2FBQzNDOzs7bUJBRUUsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7Ozs7SUFGTiwyQ0FBbUI7O0lBQ25CLGdEQUEyQjs7SUFDM0IsOENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJ1YmJsZUNoYXJ0V3JhcHBlci50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1idWJibGUtY2hhcnQtd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWJibGUtY2hhcnQtd3JhcHBlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCdWJibGVDaGFydFdyYXBwZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICBASW5wdXQoKSBidXR0b25zOiBhbnk7XG5cbiAgb25DbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICB9XG59Il19