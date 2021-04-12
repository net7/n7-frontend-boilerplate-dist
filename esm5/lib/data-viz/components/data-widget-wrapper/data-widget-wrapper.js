import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var DataWidgetWrapperComponent = /** @class */ (function () {
    function DataWidgetWrapperComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DataWidgetWrapperComponent.prototype, "data", void 0);
    DataWidgetWrapperComponent = __decorate([
        Component({
            selector: 'dv-data-widget-wrapper',
            template: "<div class=\"dv-data-widget-wrapper {{ data && data.classes || '' }}\">\r\n    <ng-content></ng-content>\r\n</div>"
        })
    ], DataWidgetWrapperComponent);
    return DataWidgetWrapperComponent;
}());
export { DataWidgetWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQtd3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9jb21wb25lbnRzL2RhdGEtd2lkZ2V0LXdyYXBwZXIvZGF0YS13aWRnZXQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVakQ7SUFBQTtJQUVBLENBQUM7SUFEWTtRQUFSLEtBQUssRUFBRTs7NERBQTZCO0lBRDVCLDBCQUEwQjtRQUp0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLDhIQUF5QztTQUMxQyxDQUFDO09BQ1csMEJBQTBCLENBRXRDO0lBQUQsaUNBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFXaWRnZXRXcmFwcGVyRGF0YSB7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2R2LWRhdGEtd2lkZ2V0LXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXdpZGdldC13cmFwcGVyLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YVdpZGdldFdyYXBwZXJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZGF0YTogRGF0YVdpZGdldFdyYXBwZXJEYXRhO1xyXG59XHJcbiJdfQ==