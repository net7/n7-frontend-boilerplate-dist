//---------------------------
// BubbleChartWrapper.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var BubbleChartWrapperComponent = /** @class */ (function () {
    function BubbleChartWrapperComponent() {
    }
    BubbleChartWrapperComponent.prototype.onClick = function (type, payload) {
        this.emit(type, payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BubbleChartWrapperComponent.prototype, "emit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BubbleChartWrapperComponent.prototype, "container", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BubbleChartWrapperComponent.prototype, "buttons", void 0);
    BubbleChartWrapperComponent = __decorate([
        Component({
            selector: 'aw-bubble-chart-wrapper',
            template: "<div class=\"aw-bubble-chart-wrapper\">\r\n    <ng-content></ng-content>\r\n</div>"
        })
    ], BubbleChartWrapperComponent);
    return BubbleChartWrapperComponent;
}());
export { BubbleChartWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0Isd0JBQXdCO0FBQ3hCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQ7SUFBQTtJQVVBLENBQUM7SUFIQyw2Q0FBTyxHQUFQLFVBQVEsSUFBSSxFQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQVJRO1FBQVIsS0FBSyxFQUFFOzs2REFBVztJQUVWO1FBQVIsS0FBSyxFQUFFOztrRUFBbUI7SUFFbEI7UUFBUixLQUFLLEVBQUU7O2dFQUFjO0lBTFgsMkJBQTJCO1FBSnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsOEZBQTBDO1NBQzNDLENBQUM7T0FDVywyQkFBMkIsQ0FVdkM7SUFBRCxrQ0FBQztDQUFBLEFBVkQsSUFVQztTQVZZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEJ1YmJsZUNoYXJ0V3JhcHBlci50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy1idWJibGUtY2hhcnQtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1YmJsZS1jaGFydC13cmFwcGVyLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnViYmxlQ2hhcnRXcmFwcGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBidXR0b25zOiBhbnk7XHJcblxyXG4gIG9uQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xyXG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=