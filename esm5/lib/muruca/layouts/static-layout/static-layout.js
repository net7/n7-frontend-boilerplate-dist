import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MrStaticLayoutConfig as config } from './static-layout.config';
var MrStaticLayoutComponent = /** @class */ (function (_super) {
    __extends(MrStaticLayoutComponent, _super);
    function MrStaticLayoutComponent(communication, configuration, mainState, route, router, layoutState, layoutsConfiguration) {
        var _this = _super.call(this, layoutsConfiguration.get('MrStaticLayoutConfig') || config) || this;
        _this.communication = communication;
        _this.configuration = configuration;
        _this.mainState = mainState;
        _this.route = route;
        _this.router = router;
        _this.layoutState = layoutState;
        return _this;
    }
    MrStaticLayoutComponent.prototype.initPayload = function () {
        return {
            communication: this.communication,
            configuration: this.configuration,
            mainState: this.mainState,
            layoutState: this.layoutState,
            route: this.route,
            router: this.router,
            options: this.config.options || {}
        };
    };
    MrStaticLayoutComponent.prototype.ngOnInit = function () {
        this.layoutState.add('content');
        this.onInit();
    };
    MrStaticLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    MrStaticLayoutComponent.ctorParameters = function () { return [
        { type: CommunicationService },
        { type: ConfigurationService },
        { type: MainStateService },
        { type: ActivatedRoute },
        { type: Router },
        { type: MrLayoutStateService },
        { type: LayoutsConfigurationService }
    ]; };
    MrStaticLayoutComponent = __decorate([
        Component({
            selector: 'mr-static-layout',
            template: "<div class=\"mr-static mr-layout\"\r\n     *ngIf=\"lb.dataSource\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- STATIC LAYOUT CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <div class=\"mr-static__top\">\r\n                <h1 class=\"mr-static__title mr-generated-title-WP\">{{lb.dataSource.title}}</h1>\r\n                <div class=\"mr-static__metadata\">\r\n                    <n7-metadata-viewer \r\n                    [data]=\"lb.widgets['mr-static-metadata'].ds.out$ | async\">\r\n                    </n7-metadata-viewer>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"mr-static__content mr-wp-content\" [innerHTML]=\"lb.dataSource.content | keepHtml\"></div>\r\n        </ng-container>\r\n    \r\n    </ng-container>\r\n</div>\r\n"
        }),
        __metadata("design:paramtypes", [CommunicationService,
            ConfigurationService,
            MainStateService,
            ActivatedRoute,
            Router,
            MrLayoutStateService,
            LayoutsConfigurationService])
    ], MrStaticLayoutComponent);
    return MrStaticLayoutComponent;
}(AbstractLayout));
export { MrStaticLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU14RTtJQUE2QywyQ0FBYztJQUN6RCxpQ0FDVSxhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUMzQixLQUFxQixFQUNyQixNQUFjLEVBQ2YsV0FBaUMsRUFDeEMsb0JBQWlEO1FBUG5ELFlBU0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ2xFO1FBVFMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2YsaUJBQVcsR0FBWCxXQUFXLENBQXNCOztJQUkxQyxDQUFDO0lBRVMsNkNBQVcsR0FBckI7UUFDRSxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQTlCd0Isb0JBQW9CO2dCQUNwQixvQkFBb0I7Z0JBQ3hCLGdCQUFnQjtnQkFDcEIsY0FBYztnQkFDYixNQUFNO2dCQUNGLG9CQUFvQjtnQkFDbEIsMkJBQTJCOztJQVJ4Qyx1QkFBdUI7UUFKbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixrbERBQW1DO1NBQ3BDLENBQUM7eUNBR3lCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDeEIsZ0JBQWdCO1lBQ3BCLGNBQWM7WUFDYixNQUFNO1lBQ0Ysb0JBQW9CO1lBQ2xCLDJCQUEyQjtPQVJ4Qyx1QkFBdUIsQ0FpQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQWpDRCxDQUE2QyxjQUFjLEdBaUMxRDtTQWpDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJTdGF0aWNMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zdGF0aWMtbGF5b3V0LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLXN0YXRpYy1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0aWMtbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJTdGF0aWNMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwdWJsaWMgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLFxyXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcclxuICApIHtcclxuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJTdGF0aWNMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXHJcbiAgICAgIGxheW91dFN0YXRlOiB0aGlzLmxheW91dFN0YXRlLFxyXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcclxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlcixcclxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5sYXlvdXRTdGF0ZS5hZGQoJ2NvbnRlbnQnKTtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==