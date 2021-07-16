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
            template: "<div class=\"mr-timeline mr-layout\"\n     *ngIf=\"lb.dataSource\">\n    <div class=\"mr-timeline__timeline\">\n        <div class=\"mr-timeline__timeline-loading\"\n             *ngIf=\"lb.dataSource.loading.timeline\">\n        </div>\n        <n7-timeline [data]=\"lb.widgets['mr-timeline'].ds.out$ | async\"\n                     *ngIf=\"!lb.dataSource.loading.timeline\">\n        </n7-timeline>\n    </div>\n\n    <div class=\"mr-timeline__page mr-side-margin\">\n        <div class=\"mr-timeline__date\">\n            <n7-inner-title [data]=\"lb.widgets['mr-year-header'].ds.out$ | async\"\n                            [emit]=\"lb.widgets['mr-year-header'].emit\">\n            </n7-inner-title>\n        </div>\n        <h1 class=\"mr-timeline__title\"\n            *ngIf=\"!lb.dataSource.loading.resourceDetails\">\n            {{lb.dataSource.eventHeader}}\n        </h1>\n        <div class=\"mr-timeline__content\">\n            <!-- DESCRIZIONE -->\n            <div class=\"mr-content-block mr-content-block-description\">\n                <p [innerHTML]=\"lb.dataSource.eventDescription\">\n                <p>\n            </div>\n            <ng-container *ngIf=\"!lb.dataSource.loading.resourceDetails\">\n\n                <!-- GALLERIA -->\n                <div class=\"mr-content-block n7-grid-6\">\n                    <ng-container *ngFor=\"let image of lb.dataSource.collectionGalleryData\">\n                        <a [href]=\"image.image\" class=\"mr-gallery__image\">\n                            <img [src]=\"image.thumbnail\" alt=\"image.title\">\n                        </a>\n                    </ng-container>\n                </div>\n                \n\n                <!-- MAPPA -->\n                <div class=\"mr-content-block mr-content-block-map\" *ngIf=\"lb.dataSource.hasMap\">\n                    <h3 class=\"mr-content-block__title\" *ngIf=\"lb.dataSource.mapHeader\">{{ lb.dataSource.mapHeader }}</h3>\n                    <div class=\"mr-content-block__content\">\n                        <n7-map [data]=\"lb.widgets['mr-map'].ds.out$ | async\"></n7-map>\n                    </div>\n                </div>\n\n                <!-- BIBLIOGRAFIA -->\n                <ng-container *ngIf=\"lb.dataSource.bibliographyData as biblio\">\n                    <ng-container *ngIf=\"biblio.items && biblio.items.length > 0\">\n                        <div class=\"mr-content-block mr-content-block-collection\">\n                            <h3 class=\"mr-content-block__title\">{{ biblio.header.title }}</h3>\n                            <div class=\"mr-content-block__content n7-grid-1\">\n                                <ng-container *ngFor=\"let item of biblio.items\">\n                                    <div class=\"mr-timeline__collection-content\">\n                                        <n7-item-preview [data]=\"item\"></n7-item-preview>\n                                    </div>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n                <!-- TESTIMONI -->\n                <ng-container *ngIf=\"lb.dataSource.collectionWitnessData as wit\">\n                    <ng-container *ngIf=\"wit.items && wit.items.length > 0\">\n                        <div class=\"mr-content-block-collection mr-content-block\">\n                            <h3 class=\"mr-content-block__title\">{{ wit.header.title }}</h3>\n                            <div class=\"mr-content-block__content n7-grid-3\">\n                                <n7-item-preview *ngFor=\"let item of wit.items\"\n                                                 [data]=\"item\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n                <!-- OPERE -->\n                <ng-container *ngIf=\"lb.dataSource.collectionWorksData as works\">\n                    <ng-container *ngIf=\"works.items && works.items.length > 0\">\n                        <div class=\"mr-content-block-collection mr-content-block\">\n                            <h3 class=\"mr-content-block__title\">{{ works.header.title }}</h3>\n                            <div class=\"mr-content-block__content n7-grid-3\">\n                                <n7-item-preview *ngFor=\"let item of works.items\"\n                                                 [data]=\"item\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n            </ng-container>\n        </div>\n    </div>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLElBQUksTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNNUU7SUFBK0MsNkNBQWM7SUFHM0QsbUNBQ0Usb0JBQWlELEVBQ3pDLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUM1QixXQUFpQztRQVIxQyxZQVVFLGtCQUFNLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUNwRTtRQVRTLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDNUIsaUJBQVcsR0FBWCxXQUFXLENBQXNCOztJQUcxQyxDQUFDO0lBRVMsK0NBQVcsR0FBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDN0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQXBDdUIsMkJBQTJCO2dCQUNsQyxjQUFjO2dCQUNiLE1BQU07Z0JBQ0osUUFBUTtnQkFDSCxvQkFBb0I7Z0JBQ3BCLG9CQUFvQjtnQkFDeEIsZ0JBQWdCO2dCQUNmLG9CQUFvQjs7SUFYL0IseUJBQXlCO1FBSnJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsa3RKQUFxQztTQUN0QyxDQUFDO3lDQUt3QiwyQkFBMkI7WUFDbEMsY0FBYztZQUNiLE1BQU07WUFDSixRQUFRO1lBQ0gsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUN4QixnQkFBZ0I7WUFDZixvQkFBb0I7T0FYL0IseUJBQXlCLENBeUNyQztJQUFELGdDQUFDO0NBQUEsQUF6Q0QsQ0FBK0MsY0FBYyxHQXlDNUQ7U0F6Q1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJUaW1lbGluZUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3RpbWVsaW5lLWxheW91dC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci10aW1lbGluZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJUaW1lbGluZUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIGxheW91dFN0YXRlOiB0aGlzLmxheW91dFN0YXRlLFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24sXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9XG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29uZmlnSWQgPSBkYXRhLmNvbmZpZ0lkO1xuICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5hZGQoJ2NvbnRlbnQnKTtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=