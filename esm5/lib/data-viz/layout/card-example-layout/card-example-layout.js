import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { DvCardExampleLayoutConfig as config } from './card-example-layout.config';
import { CardLoader } from '../../models/card-loader';
var DvCardExampleLayoutComponent = /** @class */ (function (_super) {
    __extends(DvCardExampleLayoutComponent, _super);
    function DvCardExampleLayoutComponent(layoutsConfiguration, configuration, communication, activatedRoute) {
        var _this = _super.call(this, layoutsConfiguration.get('MrResourceLayoutConfig') || config) || this;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.activatedRoute = activatedRoute;
        return _this;
    }
    DvCardExampleLayoutComponent.prototype.initPayload = function () {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            cardLoader: this.cardLoader,
            options: this.config.options || {},
        };
    };
    DvCardExampleLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.configId = data.configId;
            var pageConfig = _this.configuration.get(_this.configId);
            _this.cardLoader = new CardLoader(_this, pageConfig);
            _this.onInit();
        });
    };
    DvCardExampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    DvCardExampleLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService },
        { type: ConfigurationService },
        { type: CommunicationService },
        { type: ActivatedRoute }
    ]; };
    DvCardExampleLayoutComponent = __decorate([
        Component({
            selector: 'dv-card-example-layout',
            template: "<div *ngIf=\"lb.dataSource && lb.dataSource.cards\" class=\"dv-card-example-layout\">\r\n    <ng-container *ngFor=\"let card of lb.dataSource.cards\">\r\n        <dv-card [data]=\"card\"></dv-card>\r\n    </ng-container>\r\n</div>"
        }),
        __metadata("design:paramtypes", [LayoutsConfigurationService,
            ConfigurationService,
            CommunicationService,
            ActivatedRoute])
    ], DvCardExampleLayoutComponent);
    return DvCardExampleLayoutComponent;
}(AbstractLayout));
export { DvCardExampleLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1leGFtcGxlLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9sYXlvdXQvY2FyZC1leGFtcGxlLWxheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx5QkFBeUIsSUFBSSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNdEQ7SUFBa0QsZ0RBQWM7SUFLOUQsc0NBQ0Usb0JBQWlELEVBQ3pDLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLGNBQThCO1FBSnhDLFlBTUUsa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ3BFO1FBTFMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7O0lBR3hDLENBQUM7SUFFUyxrREFBVyxHQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxLQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBN0J1QiwyQkFBMkI7Z0JBQzFCLG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUNuQixjQUFjOztJQVQ3Qiw0QkFBNEI7UUFKeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxrUEFBeUM7U0FDMUMsQ0FBQzt5Q0FPd0IsMkJBQTJCO1lBQzFCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDbkIsY0FBYztPQVQ3Qiw0QkFBNEIsQ0FvQ3hDO0lBQUQsbUNBQUM7Q0FBQSxBQXBDRCxDQUFrRCxjQUFjLEdBb0MvRDtTQXBDWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IER2Q2FyZEV4YW1wbGVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9jYXJkLWV4YW1wbGUtbGF5b3V0LmNvbmZpZyc7XHJcbmltcG9ydCB7IENhcmRMb2FkZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2FyZC1sb2FkZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkdi1jYXJkLWV4YW1wbGUtbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1leGFtcGxlLWxheW91dC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIER2Q2FyZEV4YW1wbGVMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY2FyZExvYWRlcjogQ2FyZExvYWRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICApIHtcclxuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJSZXNvdXJjZUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXHJcbiAgICAgIGNhcmRMb2FkZXI6IHRoaXMuY2FyZExvYWRlcixcclxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy5jb25maWdJZCA9IGRhdGEuY29uZmlnSWQ7XHJcbiAgICAgIGNvbnN0IHBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xyXG4gICAgICB0aGlzLmNhcmRMb2FkZXIgPSBuZXcgQ2FyZExvYWRlcih0aGlzLCBwYWdlQ29uZmlnKTtcclxuICAgICAgdGhpcy5vbkluaXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=