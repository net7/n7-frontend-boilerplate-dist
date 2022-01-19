import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { AwMapLayoutConfig as config } from './map-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
var AwMapLayoutComponent = /** @class */ (function (_super) {
    __extends(AwMapLayoutComponent, _super);
    function AwMapLayoutComponent(configuration, layoutsConfiguration, communication, mainState, titleService) {
        var _this = _super.call(this, layoutsConfiguration.get('AwMapLayoutConfig') || config) || this;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.communication = communication;
        _this.mainState = mainState;
        _this.titleService = titleService;
        return _this;
    }
    /*
      Optional variables that can be accessed from the layout's logic.
      If removed, they must also be removed from the layout's DataSource file,
      and from this file imports.
     */
    AwMapLayoutComponent.prototype.initPayload = function () {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
        };
    };
    AwMapLayoutComponent.prototype.ngOnInit = function () {
        this.onInit();
    };
    AwMapLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    AwMapLayoutComponent.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: CommunicationService },
        { type: MainStateService },
        { type: Title }
    ]; };
    AwMapLayoutComponent = __decorate([
        Component({
            selector: 'aw-map-layout',
            template: "<div class=\"aw-multimedia\" id=\"map-layout\" *ngIf=\"lb.dataSource\">\r\n    <n7-inner-title [data]=\"{\r\n        title: {\r\n            main: {\r\n                    text: 'I luoghi dell\\'archivio'\r\n            }\r\n        }\r\n    }\">\r\n    </n7-inner-title>\r\n\r\n    <!-- Map -->\r\n    <div class=\"aw-multimedia__map\">\r\n        <n7-map [data]=\"lb.widgets['aw-map'].ds.out$ | async\"></n7-map>\r\n    </div>\r\n    <!-- END // Map -->\r\n\r\n    <!-- RESULTS -->\r\n    <div class=\"aw-multimedia__results\">\r\n        <div class=\"aw-multimedia__loader\" *ngIf=\"(lb.dataSource.state$ | async) === 'LOADING'\">\r\n            <ng-container>\r\n                <n7-loader></n7-loader>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div class=\"aw-multimedia__empty\" *ngIf=\"(lb.dataSource.state$ | async) === 'EMPTY'\">\r\n            <ng-container>\r\n                <p class=\"aw-multimedia__empty-text\">Clicca su un luogo della mappa per vedere tutti gli oggetti collegati.</p>\r\n            </ng-container>\r\n        </div>\r\n        \r\n        <ng-container *ngIf=\"(lb.dataSource.state$ | async) === 'SUCCESS'\">\r\n            <div class=\"aw-multimedia__results-title\">\r\n                <n7-inner-title \r\n                    [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\r\n                </n7-inner-title>\r\n            </div>\r\n            <div class=\"aw-multimedia__results-wrapper\">\r\n                <div>\r\n                    <div class=\"aw-item-preview-wrapper\" *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-smart-breadcrumbs \r\n                            [data]=\"preview.breadcrumbs\">\r\n                        </n7-smart-breadcrumbs>\r\n                        <n7-item-preview \r\n                            [data]=\"preview\" \r\n                            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </div>\r\n                </div>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.total > 0\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>"
        }),
        __metadata("design:paramtypes", [ConfigurationService,
            LayoutsConfigurationService,
            CommunicationService,
            MainStateService,
            Title])
    ], AwMapLayoutComponent);
    return AwMapLayoutComponent;
}(AbstractLayout));
export { AwMapLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL21hcC1sYXlvdXQvbWFwLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLElBQUksTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFNdEY7SUFBMEMsd0NBQWM7SUFDdEQsOEJBQ1UsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELGFBQW1DLEVBQ25DLFNBQTJCLEVBQzNCLFlBQW1CO1FBTDdCLFlBT0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQy9EO1FBUFMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDakQsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGtCQUFZLEdBQVosWUFBWSxDQUFPOztJQUc3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLDBDQUFXLEdBQXJCO1FBQ0UsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBOUJ3QixvQkFBb0I7Z0JBQ2IsMkJBQTJCO2dCQUNsQyxvQkFBb0I7Z0JBQ3hCLGdCQUFnQjtnQkFDYixLQUFLOztJQU5sQixvQkFBb0I7UUFKaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsNDRFQUFnQztTQUNqQyxDQUFDO3lDQUd5QixvQkFBb0I7WUFDYiwyQkFBMkI7WUFDbEMsb0JBQW9CO1lBQ3hCLGdCQUFnQjtZQUNiLEtBQUs7T0FObEIsb0JBQW9CLENBaUNoQztJQUFELDJCQUFDO0NBQUEsQUFqQ0QsQ0FBMEMsY0FBYyxHQWlDdkQ7U0FqQ1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBd01hcExheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL21hcC1sYXlvdXQuY29uZmlnJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXctbWFwLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC1sYXlvdXQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBd01hcExheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSxcclxuICApIHtcclxuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnQXdNYXBMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgIE9wdGlvbmFsIHZhcmlhYmxlcyB0aGF0IGNhbiBiZSBhY2Nlc3NlZCBmcm9tIHRoZSBsYXlvdXQncyBsb2dpYy5cclxuICAgIElmIHJlbW92ZWQsIHRoZXkgbXVzdCBhbHNvIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGF5b3V0J3MgRGF0YVNvdXJjZSBmaWxlLFxyXG4gICAgYW5kIGZyb20gdGhpcyBmaWxlIGltcG9ydHMuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxyXG4gICAgICB0aXRsZVNlcnZpY2U6IHRoaXMudGl0bGVTZXJ2aWNlLFxyXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=