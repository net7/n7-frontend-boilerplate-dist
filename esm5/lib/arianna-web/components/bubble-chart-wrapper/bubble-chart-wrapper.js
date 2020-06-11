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
            template: "<div class=\"aw-bubble-chart-wrapper\">\n    <ng-content></ng-content>\n</div>"
        })
    ], BubbleChartWrapperComponent);
    return BubbleChartWrapperComponent;
}());
export { BubbleChartWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0Isd0JBQXdCO0FBQ3hCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQ7SUFBQTtJQVVBLENBQUM7SUFIQyw2Q0FBTyxHQUFQLFVBQVEsSUFBSSxFQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQVJRO1FBQVIsS0FBSyxFQUFFOzs2REFBVztJQUVWO1FBQVIsS0FBSyxFQUFFOztrRUFBbUI7SUFFbEI7UUFBUixLQUFLLEVBQUU7O2dFQUFjO0lBTFgsMkJBQTJCO1FBSnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsMEZBQTBDO1NBQzNDLENBQUM7T0FDVywyQkFBMkIsQ0FVdkM7SUFBRCxrQ0FBQztDQUFBLEFBVkQsSUFVQztTQVZZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCdWJibGVDaGFydFdyYXBwZXIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctYnViYmxlLWNoYXJ0LXdyYXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0LXdyYXBwZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcblxuICBASW5wdXQoKSBidXR0b25zOiBhbnk7XG5cbiAgb25DbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=