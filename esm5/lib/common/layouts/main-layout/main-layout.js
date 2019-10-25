/**
 * @fileoverview added by tsickle
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
                    template: "<div class=\"n7-main-layout\" id=\"main-layout\">\n    <div class=\"n7-page-content\">\n        <n7-header\n            [data]=\"lb.widgets['header'].ds.out$ | async\"\n            [emit]=\"lb.widgets['header'].emit\">\n        </n7-header>\n        <main class=\"n7-content\">\n            <div class=\"n7-top-page-bar\">\n                <div class=\"n7-top-page-bar__main\"></div>\n            </div>\n            <div class=\"n7-alert-bar\">\n                <!--<n7-alert\n                [attr.id]=\"'main-layout-alert'\"\n                [data]=\"lb.dataSource.alertData$ | async\"\n                [emit]=\"lb.dataSource.closeAlert.bind(lb.dataSource)\"></n7-alert>-->\n            </div>\n            <ng-content></ng-content>\n        </main>\n    </div>\n    <n7-footer \n        [data]=\"lb.widgets['footer'].ds.out$ | async\" \n        [emit]=\"lb.widgets['footer'].emit\">\n    </n7-footer>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixJQUFJLE1BQU0sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxFO0lBSXlDLCtDQUFjO0lBQ3JELDZCQUNVLE1BQWMsRUFDZCxLQUFxQixFQUNyQixhQUFtQyxFQUNuQyxvQkFBaUQsRUFDakQsU0FBMkIsRUFDM0IsWUFBbUI7UUFON0IsWUFRRSxrQkFBTSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxNQUFNLENBQUMsU0FDOUQ7UUFSUyxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDakQsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isa0JBQVksR0FBWixZQUFZLENBQU87O0lBRzdCLENBQUM7Ozs7O0lBRVMseUNBQVc7Ozs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFBO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDQ1QkFBaUM7aUJBQ3BDOzs7O2dCQVhRLE1BQU07Z0JBQUUsY0FBYztnQkFHdEIsb0JBQW9CO2dCQUNwQiwyQkFBMkI7Z0JBQzNCLGdCQUFnQjtnQkFKaEIsS0FBSzs7SUF5Q2QsMEJBQUM7Q0FBQSxBQWxDRCxDQUl5QyxjQUFjLEdBOEJ0RDtTQTlCWSxtQkFBbUI7Ozs7OztJQUU1QixxQ0FBc0I7Ozs7O0lBQ3RCLG9DQUE2Qjs7Ozs7SUFDN0IsNENBQTJDOzs7OztJQUMzQyxtREFBeUQ7Ozs7O0lBQ3pELHdDQUFtQzs7Ozs7SUFDbkMsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0J1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNYWluTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vbWFpbi1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtYWluLWxheW91dCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21haW4tbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1haW5MYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGVcbiAgKXtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01haW5MYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgICB0aXRsZVNlcnZpY2U6IHRoaXMudGl0bGVTZXJ2aWNlLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==