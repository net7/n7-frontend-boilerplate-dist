/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { AbstractLayout } from '../../models/abstract-layout';
// import { ConfigurationService } from '../../services/configuration.service';
import { LayoutsConfigurationService } from '../../services/layouts-configuration.service';
// import { MainStateService } from '../../services/main-state.service';
import { Page404LayoutConfig as config } from './page404-layout.config';
export class Page404LayoutComponent extends AbstractLayout {
    /**
     * @param {?} layoutsConfiguration
     */
    constructor(
    // private router: Router,
    // private configuration: ConfigurationService,
    layoutsConfiguration) {
        super(layoutsConfiguration.get('Page404LayoutConfig') || config);
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            // configuration: this.configuration,
            // mainState: this.mainState,
            // router: this.router,
            options: this.config.options || {},
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
Page404LayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-page404-layout',
                template: "<div class=\"n7-page404-layout\">\n    404 - Resource not found\n</div>"
            }] }
];
/** @nocollapse */
Page404LayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTQwNC1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvcGFnZTQwNC1sYXlvdXQvcGFnZTQwNC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUE7O0FBRTdELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztBQUUzRixPQUFPLEVBQUUsbUJBQW1CLElBQUksTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNeEUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGNBQWM7Ozs7SUFDeEQ7SUFDRSwwQkFBMEI7SUFDMUIsK0NBQStDO0lBQy9DLG9CQUFpRDtRQUdqRCxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFUyxXQUFXO1FBQ25CLE9BQU87Ozs7WUFJTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFBO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixtRkFBb0M7YUFDdkM7Ozs7WUFQUSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0J1xuLy8gaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlNDA0TGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vcGFnZTQwNC1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduNy1wYWdlNDA0LWxheW91dCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2U0MDQtbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2U0MDRMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAvLyBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgLy8gcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICl7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdQYWdlNDA0TGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpe1xuICAgIHJldHVybiB7XG4gICAgICAvLyBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAvLyBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgLy8gcm91dGVyOiB0aGlzLnJvdXRlcixcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=