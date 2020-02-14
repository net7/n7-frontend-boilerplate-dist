/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../models/abstract-layout';
import { ConfigurationService } from '../../services/configuration.service';
import { LayoutsConfigurationService } from '../../services/layouts-configuration.service';
import { MainStateService } from '../../services/main-state.service';
import { MainLayoutConfig as config } from './main-layout.config';
export class MainLayoutComponent extends AbstractLayout {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} titleService
     */
    constructor(router, route, configuration, layoutsConfiguration, mainState, titleService) {
        super(layoutsConfiguration.get('MainLayoutConfig') || config);
        this.router = router;
        this.route = route;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.titleService = titleService;
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            titleService: this.titleService,
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
MainLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'main-layout',
                template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n            [data]=\"lb.widgets['header'].ds.out$ | async\"\n            [emit]=\"lb.widgets['header'].emit\">\n        </n7-header>\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\"></div>\n            </div>\n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n    <n7-footer \n        [data]=\"lb.widgets['footer'].ds.out$ | async\" \n        [emit]=\"lb.widgets['footer'].emit\">\n    </n7-footer>\n</div>"
            }] }
];
/** @nocollapse */
MainLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: Title }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    MainLayoutComponent.prototype.titleService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLElBQUksTUFBTSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFNbEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGNBQWM7Ozs7Ozs7OztJQUNyRCxZQUNVLE1BQWMsRUFDZCxLQUFxQixFQUNyQixhQUFtQyxFQUNuQyxvQkFBaUQsRUFDakQsU0FBMkIsRUFDM0IsWUFBbUI7UUFFM0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBUHRELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBTztJQUc3QixDQUFDOzs7OztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQTtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDQ1QkFBaUM7YUFDcEM7Ozs7WUFYUSxNQUFNO1lBQUUsY0FBYztZQUd0QixvQkFBb0I7WUFDcEIsMkJBQTJCO1lBQzNCLGdCQUFnQjtZQUpoQixLQUFLOzs7Ozs7O0lBYVYscUNBQXNCOzs7OztJQUN0QixvQ0FBNkI7Ozs7O0lBQzdCLDRDQUEyQzs7Ozs7SUFDM0MsbURBQXlEOzs7OztJQUN6RCx3Q0FBbUM7Ozs7O0lBQ25DLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fic3RyYWN0LWxheW91dCdcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpbkxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL21haW4tbGF5b3V0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFpbi1sYXlvdXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYWluLWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlXG4gICl7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNYWluTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpe1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlcixcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgICAgdGl0bGVTZXJ2aWNlOiB0aGlzLnRpdGxlU2VydmljZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=