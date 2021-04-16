import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MrAdvancedSearchLayoutConfig as config } from './advanced-search-layout.config';
var MrAdvancedSearchLayoutComponent = /** @class */ (function (_super) {
    __extends(MrAdvancedSearchLayoutComponent, _super);
    function MrAdvancedSearchLayoutComponent(router, activatedRoute, mainState, configuration, layoutsConfiguration) {
        var _this = _super.call(this, layoutsConfiguration.get('MrAdvancedSearchLayoutConfig') || config) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.mainState = mainState;
        _this.configuration = configuration;
        return _this;
    }
    MrAdvancedSearchLayoutComponent.prototype.initPayload = function () {
        return {
            configId: this.configId,
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            options: this.config.options || {},
        };
    };
    MrAdvancedSearchLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.configId = data.configId;
            _this.onInit();
        });
    };
    MrAdvancedSearchLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    MrAdvancedSearchLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: MainStateService },
        { type: ConfigurationService },
        { type: LayoutsConfigurationService }
    ]; };
    MrAdvancedSearchLayoutComponent = __decorate([
        Component({
            selector: 'mr-advanced-search-layout',
            template: "<div *ngIf=\"lb.dataSource\" class=\"mr-advanced-search mr-layout\">\r\n    <div class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <n7-inner-title [data]=\"{\r\n            title: {\r\n                main: {\r\n                    text: lb.dataSource.pageConfig.title\r\n                }\r\n            }\r\n        }\"></n7-inner-title>\r\n\r\n        <mr-form-wrapper-accordion \r\n            [data]=\"lb.widgets['mr-form-wrapper-accordion'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-form-wrapper-accordion'].emit\">\r\n        </mr-form-wrapper-accordion>\r\n    </div>\r\n</div>"
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            MainStateService,
            ConfigurationService,
            LayoutsConfigurationService])
    ], MrAdvancedSearchLayoutComponent);
    return MrAdvancedSearchLayoutComponent;
}(AbstractLayout));
export { MrAdvancedSearchLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw0QkFBNEIsSUFBSSxNQUFNLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU16RjtJQUFxRCxtREFBYztJQUdqRSx5Q0FDVSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsU0FBMkIsRUFDM0IsYUFBbUMsRUFDM0Msb0JBQWlEO1FBTG5ELFlBT0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLElBQUksTUFBTSxDQUFDLFNBQzFFO1FBUFMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7O0lBSTdDLENBQUM7SUFFUyxxREFBVyxHQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsa0RBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUN0QyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBN0JpQixNQUFNO2dCQUNFLGNBQWM7Z0JBQ25CLGdCQUFnQjtnQkFDWixvQkFBb0I7Z0JBQ3JCLDJCQUEyQjs7SUFSeEMsK0JBQStCO1FBSjNDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsK21CQUE0QztTQUM3QyxDQUFDO3lDQUtrQixNQUFNO1lBQ0UsY0FBYztZQUNuQixnQkFBZ0I7WUFDWixvQkFBb0I7WUFDckIsMkJBQTJCO09BUnhDLCtCQUErQixDQWtDM0M7SUFBRCxzQ0FBQztDQUFBLEFBbENELENBQXFELGNBQWMsR0FrQ2xFO1NBbENZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1yQWR2YW5jZWRTZWFyY2hMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLWFkdmFuY2VkLXNlYXJjaC1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJBZHZhbmNlZFNlYXJjaExheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNckFkdmFuY2VkU2VhcmNoTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxyXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXHJcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXHJcbiAgICAgIGFjdGl2YXRlZFJvdXRlOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcclxuICAgICAgdGhpcy5vbkluaXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=