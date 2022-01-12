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
            template: "<div *ngIf=\"lb.dataSource && lb.dataSource.cards\" class=\"dv-card-example-layout\">\n    <ng-container *ngFor=\"let card of lb.dataSource.cards\">\n        <dv-card [data]=\"card\"></dv-card>\n    </ng-container>\n</div>"
        }),
        __metadata("design:paramtypes", [LayoutsConfigurationService,
            ConfigurationService,
            CommunicationService,
            ActivatedRoute])
    ], DvCardExampleLayoutComponent);
    return DvCardExampleLayoutComponent;
}(AbstractLayout));
export { DvCardExampleLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1leGFtcGxlLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9sYXlvdXQvY2FyZC1leGFtcGxlLWxheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx5QkFBeUIsSUFBSSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNdEQ7SUFBa0QsZ0RBQWM7SUFLOUQsc0NBQ0Usb0JBQWlELEVBQ3pDLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLGNBQThCO1FBSnhDLFlBTUUsa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ3BFO1FBTFMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7O0lBR3hDLENBQUM7SUFFUyxrREFBVyxHQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxLQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBN0J1QiwyQkFBMkI7Z0JBQzFCLG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUNuQixjQUFjOztJQVQ3Qiw0QkFBNEI7UUFKeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQywwT0FBeUM7U0FDMUMsQ0FBQzt5Q0FPd0IsMkJBQTJCO1lBQzFCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDbkIsY0FBYztPQVQ3Qiw0QkFBNEIsQ0FvQ3hDO0lBQUQsbUNBQUM7Q0FBQSxBQXBDRCxDQUFrRCxjQUFjLEdBb0MvRDtTQXBDWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IER2Q2FyZEV4YW1wbGVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9jYXJkLWV4YW1wbGUtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBDYXJkTG9hZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhcmQtbG9hZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHYtY2FyZC1leGFtcGxlLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWV4YW1wbGUtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEdkNhcmRFeGFtcGxlTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBwcml2YXRlIGNhcmRMb2FkZXI6IENhcmRMb2FkZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJSZXNvdXJjZUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgY2FyZExvYWRlcjogdGhpcy5jYXJkTG9hZGVyLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb25maWdJZCA9IGRhdGEuY29uZmlnSWQ7XG4gICAgICBjb25zdCBwYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcbiAgICAgIHRoaXMuY2FyZExvYWRlciA9IG5ldyBDYXJkTG9hZGVyKHRoaXMsIHBhZ2VDb25maWcpO1xuICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==