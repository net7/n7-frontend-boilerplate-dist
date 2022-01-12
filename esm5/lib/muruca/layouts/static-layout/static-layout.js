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
            template: "<div class=\"mr-static mr-layout\"\n     *ngIf=\"lb.dataSource\"\n     [ngClass]=\"{\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\n      }\">\n    <!-- STATIC LAYOUT CONTENT -->\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n        <!-- loading -->\n        <ng-container *ngSwitchCase=\"'LOADING'\">\n            <div class=\"mr-layout__loader\">\n                <n7-loader></n7-loader>\n            </div>\n        </ng-container>\n\n        <!-- error -->\n        <ng-container *ngSwitchCase=\"'ERROR'\">\n            <div class=\"mr-layout__error\">\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\n                <p>{{ lb.dataSource.errorDescription }}</p>\n            </div>\n        </ng-container>\n\n        <!-- success -->\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n            <div class=\"mr-static__top\">\n                <h1 class=\"mr-static__title mr-generated-title-WP\">{{lb.dataSource.title}}</h1>\n                <div class=\"mr-static__metadata\">\n                    <n7-metadata-viewer \n                    [data]=\"lb.widgets['mr-static-metadata'].ds.out$ | async\">\n                    </n7-metadata-viewer>\n                </div>\n            </div>\n            \n            <div class=\"mr-static__content mr-wp-content\" [innerHTML]=\"lb.dataSource.content | keepHtml\"></div>\n        </ng-container>\n    \n    </ng-container>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU14RTtJQUE2QywyQ0FBYztJQUN6RCxpQ0FDVSxhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUMzQixLQUFxQixFQUNyQixNQUFjLEVBQ2YsV0FBaUMsRUFDeEMsb0JBQWlEO1FBUG5ELFlBU0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ2xFO1FBVFMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2YsaUJBQVcsR0FBWCxXQUFXLENBQXNCOztJQUkxQyxDQUFDO0lBRVMsNkNBQVcsR0FBckI7UUFDRSxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQTlCd0Isb0JBQW9CO2dCQUNwQixvQkFBb0I7Z0JBQ3hCLGdCQUFnQjtnQkFDcEIsY0FBYztnQkFDYixNQUFNO2dCQUNGLG9CQUFvQjtnQkFDbEIsMkJBQTJCOztJQVJ4Qyx1QkFBdUI7UUFKbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixvZ0RBQW1DO1NBQ3BDLENBQUM7eUNBR3lCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDeEIsZ0JBQWdCO1lBQ3BCLGNBQWM7WUFDYixNQUFNO1lBQ0Ysb0JBQW9CO1lBQ2xCLDJCQUEyQjtPQVJ4Qyx1QkFBdUIsQ0FpQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQWpDRCxDQUE2QyxjQUFjLEdBaUMxRDtTQWpDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNclN0YXRpY0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3N0YXRpYy1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItc3RhdGljLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0aWMtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNclN0YXRpY0xheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJTdGF0aWNMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgbGF5b3V0U3RhdGU6IHRoaXMubGF5b3V0U3RhdGUsXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9XG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKCdjb250ZW50Jyk7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==