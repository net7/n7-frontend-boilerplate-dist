import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import { MrTimelineLayoutConfig as config } from './timeline-layout.config';
var MrTimelineLayoutComponent = /** @class */ (function (_super) {
    __extends(MrTimelineLayoutComponent, _super);
    function MrTimelineLayoutComponent(layoutsConfiguration, route, router, location, configuration, communication, mainState, layoutState) {
        var _this = _super.call(this, layoutsConfiguration.get('MrTimelineLayoutConfig') || config) || this;
        _this.route = route;
        _this.router = router;
        _this.location = location;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.mainState = mainState;
        _this.layoutState = layoutState;
        return _this;
    }
    MrTimelineLayoutComponent.prototype.initPayload = function () {
        return {
            configId: this.configId,
            mainState: this.mainState,
            configuration: this.configuration,
            communication: this.communication,
            layoutState: this.layoutState,
            route: this.route,
            router: this.router,
            location: this.location,
            options: this.config.options || {}
        };
    };
    MrTimelineLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.configId = data.configId;
            _this.layoutState.add('content');
            _this.onInit();
        });
    };
    MrTimelineLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    MrTimelineLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService },
        { type: ActivatedRoute },
        { type: Router },
        { type: Location },
        { type: ConfigurationService },
        { type: CommunicationService },
        { type: MainStateService },
        { type: MrLayoutStateService }
    ]; };
    MrTimelineLayoutComponent = __decorate([
        Component({
            selector: 'mr-timeline-layout',
            template: "<div class=\"mr-timeline mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <div class=\"mr-timeline__timeline\">\r\n        <div class=\"mr-timeline__timeline-loading\"\r\n             *ngIf=\"lb.dataSource.loading.timeline\">\r\n        </div>\r\n        <n7-timeline [data]=\"lb.widgets['mr-timeline'].ds.out$ | async\"\r\n                     *ngIf=\"!lb.dataSource.loading.timeline\">\r\n        </n7-timeline>\r\n    </div>\r\n\r\n    <div class=\"mr-timeline__page mr-side-margin\">\r\n        <div class=\"mr-timeline__date\">\r\n            <n7-inner-title [data]=\"lb.widgets['mr-year-header'].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets['mr-year-header'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <h1 class=\"mr-timeline__title\"\r\n            *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n            {{lb.dataSource.eventHeader}}\r\n        </h1>\r\n        <div class=\"mr-timeline__content\">\r\n            <!-- DESCRIZIONE -->\r\n            <div class=\"mr-content-block mr-content-block-description\">\r\n                <p [innerHTML]=\"lb.dataSource.eventDescription\">\r\n                <p>\r\n            </div>\r\n            <ng-container *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n\r\n                <!-- GALLERIA -->\r\n                <div class=\"mr-content-block n7-grid-6\">\r\n                    <ng-container *ngFor=\"let image of lb.dataSource.collectionGalleryData\">\r\n                        <a [href]=\"image.image\" class=\"mr-gallery__image\">\r\n                            <img [src]=\"image.thumbnail\" alt=\"image.title\">\r\n                        </a>\r\n                    </ng-container>\r\n                </div>\r\n                \r\n\r\n                <!-- MAPPA -->\r\n                <div class=\"mr-content-block mr-content-block-map\" *ngIf=\"lb.dataSource.hasMap\">\r\n                    <h3 class=\"mr-content-block__title\" *ngIf=\"lb.dataSource.mapHeader\">{{ lb.dataSource.mapHeader }}</h3>\r\n                    <div class=\"mr-content-block__content\">\r\n                        <n7-map [data]=\"lb.widgets['mr-map'].ds.out$ | async\"></n7-map>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- BIBLIOGRAFIA -->\r\n                <ng-container *ngIf=\"lb.dataSource.bibliographyData as biblio\">\r\n                    <ng-container *ngIf=\"biblio.items && biblio.items.length > 0\">\r\n                        <div class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 class=\"mr-content-block__title\">{{ biblio.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-1\">\r\n                                <ng-container *ngFor=\"let item of biblio.items\">\r\n                                    <div class=\"mr-timeline__collection-content\">\r\n                                        <n7-item-preview [data]=\"item\"></n7-item-preview>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- TESTIMONI -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWitnessData as wit\">\r\n                    <ng-container *ngIf=\"wit.items && wit.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ wit.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of wit.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- OPERE -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWorksData as works\">\r\n                    <ng-container *ngIf=\"works.items && works.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ works.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of works.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
        }),
        __metadata("design:paramtypes", [LayoutsConfigurationService,
            ActivatedRoute,
            Router,
            Location,
            ConfigurationService,
            CommunicationService,
            MainStateService,
            MrLayoutStateService])
    ], MrTimelineLayoutComponent);
    return MrTimelineLayoutComponent;
}(AbstractLayout));
export { MrTimelineLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLElBQUksTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNNUU7SUFBK0MsNkNBQWM7SUFHM0QsbUNBQ0Usb0JBQWlELEVBQ3pDLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUM1QixXQUFpQztRQVIxQyxZQVVFLGtCQUFNLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUNwRTtRQVRTLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDNUIsaUJBQVcsR0FBWCxXQUFXLENBQXNCOztJQUcxQyxDQUFDO0lBRVMsK0NBQVcsR0FBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDN0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQXBDdUIsMkJBQTJCO2dCQUNsQyxjQUFjO2dCQUNiLE1BQU07Z0JBQ0osUUFBUTtnQkFDSCxvQkFBb0I7Z0JBQ3BCLG9CQUFvQjtnQkFDeEIsZ0JBQWdCO2dCQUNmLG9CQUFvQjs7SUFYL0IseUJBQXlCO1FBSnJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsZzVKQUFxQztTQUN0QyxDQUFDO3lDQUt3QiwyQkFBMkI7WUFDbEMsY0FBYztZQUNiLE1BQU07WUFDSixRQUFRO1lBQ0gsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUN4QixnQkFBZ0I7WUFDZixvQkFBb0I7T0FYL0IseUJBQXlCLENBeUNyQztJQUFELGdDQUFDO0NBQUEsQUF6Q0QsQ0FBK0MsY0FBYyxHQXlDNUQ7U0F6Q1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJUaW1lbGluZUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3RpbWVsaW5lLWxheW91dC5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtci10aW1lbGluZS1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS1sYXlvdXQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNclRpbWVsaW5lTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxyXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxyXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcclxuICAgICAgbGF5b3V0U3RhdGU6IHRoaXMubGF5b3V0U3RhdGUsXHJcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxyXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxyXG4gICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcclxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcclxuICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5hZGQoJ2NvbnRlbnQnKTtcclxuICAgICAgdGhpcy5vbkluaXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=