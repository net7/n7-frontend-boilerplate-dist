import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AbstractLayout } from '../../models/abstract-layout';
import { LayoutsConfigurationService } from '../../services/layouts-configuration.service';
import { Page404LayoutConfig as config } from './page404-layout.config';
let Page404LayoutComponent = class Page404LayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration) {
        super(layoutsConfiguration.get('Page404LayoutConfig') || config);
    }
    initPayload() {
        return {
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
Page404LayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService }
];
Page404LayoutComponent = __decorate([
    Component({
        selector: 'n7-page404-layout',
        template: "<div class=\"n7-page404-layout\">\r\n    404 - Resource not found\r\n</div>"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService])
], Page404LayoutComponent);
export { Page404LayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTQwNC1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvcGFnZTQwNC1sYXlvdXQvcGFnZTQwNC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLElBQUksTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNeEUsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBdUIsU0FBUSxjQUFjO0lBQ3hELFlBQ0Usb0JBQWlEO1FBRWpELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBOztZQWxCeUIsMkJBQTJCOztBQUZ4QyxzQkFBc0I7SUFKbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qix1RkFBb0M7S0FDckMsQ0FBQztxQ0FHd0IsMkJBQTJCO0dBRnhDLHNCQUFzQixDQW9CbEM7U0FwQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2U0MDRMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9wYWdlNDA0LWxheW91dC5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1wYWdlNDA0LWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2U0MDQtbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZTQwNExheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcclxuICApIHtcclxuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnUGFnZTQwNExheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19