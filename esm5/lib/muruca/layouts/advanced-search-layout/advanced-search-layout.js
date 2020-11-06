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
            template: "<div *ngIf=\"lb.dataSource\" class=\"mr-advanced-search-layout mr-layout\">\n    <mr-form-wrapper-accordion \n        [data]=\"lb.widgets['mr-form-wrapper-accordion'].ds.out$ | async\"\n        [emit]=\"lb.widgets['mr-form-wrapper-accordion'].emit\">\n    </mr-form-wrapper-accordion>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw0QkFBNEIsSUFBSSxNQUFNLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU16RjtJQUFxRCxtREFBYztJQUdqRSx5Q0FDVSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsU0FBMkIsRUFDM0IsYUFBbUMsRUFDM0Msb0JBQWlEO1FBTG5ELFlBT0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLElBQUksTUFBTSxDQUFDLFNBQzFFO1FBUFMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7O0lBSTdDLENBQUM7SUFFUyxxREFBVyxHQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsa0RBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUN0QyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBN0JpQixNQUFNO2dCQUNFLGNBQWM7Z0JBQ25CLGdCQUFnQjtnQkFDWixvQkFBb0I7Z0JBQ3JCLDJCQUEyQjs7SUFSeEMsK0JBQStCO1FBSjNDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsZ1RBQTRDO1NBQzdDLENBQUM7eUNBS2tCLE1BQU07WUFDRSxjQUFjO1lBQ25CLGdCQUFnQjtZQUNaLG9CQUFvQjtZQUNyQiwyQkFBMkI7T0FSeEMsK0JBQStCLENBa0MzQztJQUFELHNDQUFDO0NBQUEsQUFsQ0QsQ0FBcUQsY0FBYyxHQWtDbEU7U0FsQ1ksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJBZHZhbmNlZFNlYXJjaExheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItYWR2YW5jZWQtc2VhcmNoLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNckFkdmFuY2VkU2VhcmNoTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnSWQ6IHRoaXMuY29uZmlnSWQsXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlcixcbiAgICAgIGFjdGl2YXRlZFJvdXRlOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb25maWdJZCA9IGRhdGEuY29uZmlnSWQ7XG4gICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19