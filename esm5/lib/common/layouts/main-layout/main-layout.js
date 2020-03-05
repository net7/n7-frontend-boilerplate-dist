/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/main-layout/main-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../models/abstract-layout';
import { ConfigurationService } from '../../services/configuration.service';
import { LayoutsConfigurationService } from '../../services/layouts-configuration.service';
import { MainStateService } from '../../services/main-state.service';
import { MainLayoutConfig as config } from './main-layout.config';
var MainLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MainLayoutComponent, _super);
    function MainLayoutComponent(router, route, configuration, layoutsConfiguration, mainState, titleService) {
        var _this = _super.call(this, layoutsConfiguration.get('MainLayoutConfig') || config) || this;
        _this.router = router;
        _this.route = route;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.mainState = mainState;
        _this.titleService = titleService;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    MainLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            options: this.config.options || {},
        };
    };
    /**
     * @return {?}
     */
    MainLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    MainLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    MainLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'main-layout',
                    template: "<div class=\"n7-main-layout\" id=\"main-layout\">\r\n    <div class=\"n7-page-content\">\r\n        <n7-header\r\n            [data]=\"lb.widgets['header'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['header'].emit\">\r\n        </n7-header>\r\n        <main class=\"n7-content\">\r\n            <div class=\"n7-top-page-bar\">\r\n                <div class=\"n7-top-page-bar__main\"></div>\r\n            </div>\r\n            <div class=\"n7-alert-bar\">\r\n                <!--<n7-alert\r\n                [attr.id]=\"'main-layout-alert'\"\r\n                [data]=\"lb.dataSource.alertData$ | async\"\r\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\r\n            </div>\r\n            <ng-content></ng-content>\r\n        </main>\r\n    </div>\r\n    <n7-footer \r\n        [data]=\"lb.widgets['footer'].ds.out$ | async\" \r\n        [emit]=\"lb.widgets['footer'].emit\">\r\n    </n7-footer>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    MainLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: MainStateService },
        { type: Title }
    ]; };
    return MainLayoutComponent;
}(AbstractLayout));
export { MainLayoutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsSUFBSSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRTtJQUl5QywrQ0FBYztJQUNyRCw2QkFDVSxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELFNBQTJCLEVBQzNCLFlBQW1CO1FBTjdCLFlBUUUsa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQzlEO1FBUlMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1FBQ2pELGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGtCQUFZLEdBQVosWUFBWSxDQUFPOztJQUc3QixDQUFDOzs7OztJQUVTLHlDQUFXOzs7O0lBQXJCO1FBQ0UsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwwOEJBQWlDO2lCQUNsQzs7OztnQkFYUSxNQUFNO2dCQUFFLGNBQWM7Z0JBR3RCLG9CQUFvQjtnQkFDcEIsMkJBQTJCO2dCQUMzQixnQkFBZ0I7Z0JBSmhCLEtBQUs7O0lBeUNkLDBCQUFDO0NBQUEsQUFsQ0QsQ0FJeUMsY0FBYyxHQThCdEQ7U0E5QlksbUJBQW1COzs7Ozs7SUFFNUIscUNBQXNCOzs7OztJQUN0QixvQ0FBNkI7Ozs7O0lBQzdCLDRDQUEyQzs7Ozs7SUFDM0MsbURBQXlEOzs7OztJQUN6RCx3Q0FBbUM7Ozs7O0lBQ25DLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpbkxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL21haW4tbGF5b3V0LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21haW4tbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWFpbi1sYXlvdXQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01haW5MYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxyXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxyXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcclxuICAgICAgdGl0bGVTZXJ2aWNlOiB0aGlzLnRpdGxlU2VydmljZSxcclxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==