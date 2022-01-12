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
            template: "<div class=\"dv-data-widget-wrapper {{ data && data.classes || '' }}\">\n    <ng-content></ng-content>\n</div>"
        })
    ], DataWidgetWrapperComponent);
    return DataWidgetWrapperComponent;
}());
export { DataWidgetWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS13aWRnZXQtd3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9jb21wb25lbnRzL2RhdGEtd2lkZ2V0LXdyYXBwZXIvZGF0YS13aWRnZXQtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVakQ7SUFBQTtJQUVBLENBQUM7SUFEWTtRQUFSLEtBQUssRUFBRTs7NERBQTZCO0lBRDVCLDBCQUEwQjtRQUp0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLDBIQUF5QztTQUMxQyxDQUFDO09BQ1csMEJBQTBCLENBRXRDO0lBQUQsaUNBQUM7Q0FBQSxBQUZELElBRUM7U0FGWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVdpZGdldFdyYXBwZXJEYXRhIHtcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkdi1kYXRhLXdpZGdldC13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtd2lkZ2V0LXdyYXBwZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGFXaWRnZXRXcmFwcGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBkYXRhOiBEYXRhV2lkZ2V0V3JhcHBlckRhdGE7XG59XG4iXX0=