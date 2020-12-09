//---------------------------
// BubbleChartWrapper.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let BubbleChartWrapperComponent = class BubbleChartWrapperComponent {
    onClick(type, payload) {
        this.emit(type, payload);
    }
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
export { BubbleChartWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9idWJibGUtY2hhcnQtd3JhcHBlci9idWJibGUtY2hhcnQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0Isd0JBQXdCO0FBQ3hCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFPdEMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBO0FBVFU7SUFBUixLQUFLLEVBQUU7O3lEQUFXO0FBRVY7SUFBUixLQUFLLEVBQUU7OzhEQUFtQjtBQUVsQjtJQUFSLEtBQUssRUFBRTs7NERBQWM7QUFMWCwyQkFBMkI7SUFKdkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQywwRkFBMEM7S0FDM0MsQ0FBQztHQUNXLDJCQUEyQixDQVV2QztTQVZZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCdWJibGVDaGFydFdyYXBwZXIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctYnViYmxlLWNoYXJ0LXdyYXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnViYmxlLWNoYXJ0LXdyYXBwZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1YmJsZUNoYXJ0V3JhcHBlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcblxuICBASW5wdXQoKSBidXR0b25zOiBhbnk7XG5cbiAgb25DbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgdGhpcy5lbWl0KHR5cGUsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=