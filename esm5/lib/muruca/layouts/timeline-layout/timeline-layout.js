import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrResourceModalService } from '../../services/resource-modal.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import { MrTimelineLayoutConfig as config } from './timeline-layout.config';
var MrTimelineLayoutComponent = /** @class */ (function (_super) {
    __extends(MrTimelineLayoutComponent, _super);
    function MrTimelineLayoutComponent(layoutsConfiguration, route, router, location, configuration, communication, mainState, layoutState, modalService) {
        var _this = _super.call(this, layoutsConfiguration.get('MrTimelineLayoutConfig') || config) || this;
        _this.route = route;
        _this.router = router;
        _this.location = location;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.mainState = mainState;
        _this.layoutState = layoutState;
        _this.modalService = modalService;
        return _this;
    }
    MrTimelineLayoutComponent.prototype.initPayload = function () {
        return {
            configId: this.configId,
            mainState: this.mainState,
            configuration: this.configuration,
            communication: this.communication,
            layoutState: this.layoutState,
            modalService: this.modalService,
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
        { type: MrLayoutStateService },
        { type: MrResourceModalService }
    ]; };
    MrTimelineLayoutComponent = __decorate([
        Component({
            selector: 'mr-timeline-layout',
            template: "<div class=\"mr-timeline mr-layout\"\n     *ngIf=\"lb.dataSource\">\n    <div class=\"mr-timeline__timeline\">\n        <div class=\"mr-timeline__timeline-loading\"\n             *ngIf=\"lb.dataSource.loading.timeline\">\n        </div>\n        <n7-timeline [data]=\"lb.widgets['mr-timeline'].ds.out$ | async\"\n                     *ngIf=\"!lb.dataSource.loading.timeline\">\n        </n7-timeline>\n    </div>\n\n    <div class=\"mr-timeline__page mr-side-margin\">\n        <div class=\"mr-timeline__date\">\n            <n7-inner-title [data]=\"lb.widgets['mr-year-header'].ds.out$ | async\"\n                            [emit]=\"lb.widgets['mr-year-header'].emit\">\n            </n7-inner-title>\n        </div>\n        <h1 class=\"mr-timeline__title\"\n            *ngIf=\"!lb.dataSource.loading.resourceDetails\">\n            {{lb.dataSource.eventHeader}}\n        </h1>\n        <div class=\"mr-timeline__content\">\n            <!-- DESCRIZIONE -->\n            <div class=\"mr-content-block mr-content-block-description\">\n                <p [innerHTML]=\"lb.dataSource.eventDescription\">\n                <p>\n            </div>\n            <ng-container *ngIf=\"!lb.dataSource.loading.resourceDetails\">\n\n                <!-- GALLERIA -->\n                <div class=\"mr-content-block n7-grid-6\">\n                    <ng-container *ngFor=\"let image of lb.dataSource.collectionGalleryData\">\n                        <a [href]=\"image.image\" class=\"mr-gallery__image\">\n                            <img [src]=\"image.thumbnail\" alt=\"image.title\">\n                        </a>\n                    </ng-container>\n                </div>\n                \n\n                <!-- MAPPA -->\n                <div class=\"mr-content-block mr-content-block-map\" *ngIf=\"lb.dataSource.hasMap\">\n                    <h3 class=\"mr-content-block__title\" *ngIf=\"lb.dataSource.mapHeader\">{{ lb.dataSource.mapHeader }}</h3>\n                    <div class=\"mr-content-block__content\">\n                        <n7-map [data]=\"lb.widgets['mr-map'].ds.out$ | async\"></n7-map>\n                    </div>\n                </div>\n\n                <!-- BIBLIOGRAFIA -->\n                <ng-container *ngIf=\"lb.dataSource.bibliographyData as biblio\">\n                    <ng-container *ngIf=\"biblio.items && biblio.items.length > 0\">\n                        <div class=\"mr-content-block mr-content-block-collection\">\n                            <h3 class=\"mr-content-block__title\">{{ biblio.header.title }}</h3>\n                            <div class=\"mr-content-block__content n7-grid-1\">\n                                <ng-container *ngFor=\"let item of biblio.items\">\n                                    <div class=\"mr-timeline__collection-content\">\n                                        <n7-item-preview \n                                            [emit]=\"lb.eventHandler.itemPreviewEmit\"    \n                                            [data]=\"item\">\n                                        </n7-item-preview>\n                                    </div>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n                <!-- TESTIMONI -->\n                <ng-container *ngIf=\"lb.dataSource.collectionWitnessData as wit\">\n                    <ng-container *ngIf=\"wit.items && wit.items.length > 0\">\n                        <div class=\"mr-content-block-collection mr-content-block\">\n                            <h3 class=\"mr-content-block__title\">{{ wit.header.title }}</h3>\n                            <div class=\"mr-content-block__content n7-grid-3\">\n                                <n7-item-preview *ngFor=\"let item of wit.items\"\n                                                 [data]=\"item\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n                <!-- OPERE -->\n                <ng-container *ngIf=\"lb.dataSource.collectionWorksData as works\">\n                    <ng-container *ngIf=\"works.items && works.items.length > 0\">\n                        <div class=\"mr-content-block-collection mr-content-block\">\n                            <h3 class=\"mr-content-block__title\">{{ works.header.title }}</h3>\n                            <div class=\"mr-content-block__content n7-grid-3\">\n                                <n7-item-preview *ngFor=\"let item of works.items\"\n                                                 [data]=\"item\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n            </ng-container>\n        </div>\n    </div>\n</div>\n"
        }),
        __metadata("design:paramtypes", [LayoutsConfigurationService,
            ActivatedRoute,
            Router,
            Location,
            ConfigurationService,
            CommunicationService,
            MainStateService,
            MrLayoutStateService,
            MrResourceModalService])
    ], MrTimelineLayoutComponent);
    return MrTimelineLayoutComponent;
}(AbstractLayout));
export { MrTimelineLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLElBQUksTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNNUU7SUFBK0MsNkNBQWM7SUFHM0QsbUNBQ0Usb0JBQWlELEVBQ3pDLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUM1QixXQUFpQyxFQUNqQyxZQUFvQztRQVQ3QyxZQVdFLGtCQUFNLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUNwRTtRQVZTLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDNUIsaUJBQVcsR0FBWCxXQUFXLENBQXNCO1FBQ2pDLGtCQUFZLEdBQVosWUFBWSxDQUF3Qjs7SUFHN0MsQ0FBQztJQUVTLCtDQUFXLEdBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUM3QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEMsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBdEN1QiwyQkFBMkI7Z0JBQ2xDLGNBQWM7Z0JBQ2IsTUFBTTtnQkFDSixRQUFRO2dCQUNILG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUN4QixnQkFBZ0I7Z0JBQ2Ysb0JBQW9CO2dCQUNuQixzQkFBc0I7O0lBWmxDLHlCQUF5QjtRQUpyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLHM0SkFBcUM7U0FDdEMsQ0FBQzt5Q0FLd0IsMkJBQTJCO1lBQ2xDLGNBQWM7WUFDYixNQUFNO1lBQ0osUUFBUTtZQUNILG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDeEIsZ0JBQWdCO1lBQ2Ysb0JBQW9CO1lBQ25CLHNCQUFzQjtPQVpsQyx5QkFBeUIsQ0EyQ3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQTNDRCxDQUErQyxjQUFjLEdBMkM1RDtTQTNDWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc291cmNlLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNclRpbWVsaW5lTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vdGltZWxpbmUtbGF5b3V0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXRpbWVsaW5lLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgbW9kYWxTZXJ2aWNlOiBNclJlc291cmNlTW9kYWxTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJUaW1lbGluZUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIGxheW91dFN0YXRlOiB0aGlzLmxheW91dFN0YXRlLFxuICAgICAgbW9kYWxTZXJ2aWNlOiB0aGlzLm1vZGFsU2VydmljZSxcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlcixcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKCdjb250ZW50Jyk7XG4gICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19