import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import { MrMapLayoutConfig as config } from './map-layout.config';
let MrMapLayoutComponent = class MrMapLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, route, router, location, configuration, communication, mainState, layoutState) {
        super(layoutsConfiguration.get('MrMapLayoutConfig') || config);
        this.route = route;
        this.router = router;
        this.location = location;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
        this.layoutState = layoutState;
    }
    initPayload() {
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
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.configId = data.configId;
            this.layoutState.add('content');
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrMapLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: ActivatedRoute },
    { type: Router },
    { type: Location },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: MrLayoutStateService }
];
MrMapLayoutComponent = __decorate([
    Component({
        selector: 'mr-map-layout',
        template: "<div class=\"mr-map-layout mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <div class=\"mr-map-layout__map\">\r\n        <div class=\"mr-map-layout__map-loading\"\r\n             *ngIf=\"lb.dataSource.loading.timeline\">\r\n        </div>\r\n        <n7-map [data]=\"lb.widgets['mr-map'].ds.out$ | async\"></n7-map>\r\n        <!-- <n7-timeline [data]=\"lb.widgets['mr-timeline'].ds.out$ | async\"\r\n                     *ngIf=\"!lb.dataSource.loading.timeline\">\r\n        </n7-timeline> -->\r\n    </div>\r\n\r\n    <div class=\"mr-map-layout__page mr-side-margin\">\r\n        <div class=\"mr-map-layout__date\">\r\n            <n7-inner-title [data]=\"lb.widgets['mr-year-header'].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets['mr-year-header'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <!--\r\n        <h1 class=\"mr-map-layout__title\"\r\n            *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n            {{lb.dataSource.eventHeader}}\r\n        </h1>\r\n        -->\r\n        <div class=\"mr-map-layout__content\">\r\n            <!-- DESCRIZIONE -->\r\n            <div class=\"mr-content-block mr-content-block-description\" *ngIf=\"lb.dataSource.eventDescription\">\r\n                <p [innerHTML]=\"lb.dataSource.eventDescription\">\r\n                <p>\r\n            </div>\r\n            <ng-container *ngIf=\"!lb.dataSource.loading.resourceDetails\">\r\n\r\n                <!-- GALLERIA -->\r\n                <div class=\"mr-content-block n7-grid-6\">\r\n                    <ng-container *ngFor=\"let image of lb.dataSource.collectionGalleryData\">\r\n                        <a [href]=\"image.image\" class=\"mr-gallery__image\">\r\n                            <img [src]=\"image.thumbnail\" alt=\"image.title\">\r\n                        </a>\r\n                    </ng-container>\r\n                </div>\r\n\r\n                <!-- BIBLIOGRAFIA -->\r\n                <ng-container *ngIf=\"lb.dataSource.bibliographyData as biblio\">\r\n                    <ng-container *ngIf=\"biblio.items && biblio.items.length > 0\">\r\n                        <div class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 class=\"mr-content-block__title\">{{ biblio.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-1\">\r\n                                <ng-container *ngFor=\"let item of biblio.items\">\r\n                                    <div class=\"mr-map-layout__collection-content\">\r\n                                        <n7-item-preview [data]=\"item\"></n7-item-preview>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- TESTIMONI -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWitnessData as wit\">\r\n                    <ng-container *ngIf=\"wit.items && wit.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ wit.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of wit.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <!-- OPERE -->\r\n                <ng-container *ngIf=\"lb.dataSource.collectionWorksData as works\">\r\n                    <ng-container *ngIf=\"works.items && works.items.length > 0\">\r\n                        <div class=\"mr-content-block-collection mr-content-block\">\r\n                            <h3 class=\"mr-content-block__title\">{{ works.header.title }}</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-3\">\r\n                                <n7-item-preview *ngFor=\"let item of works.items\"\r\n                                                 [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        Router,
        Location,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        MrLayoutStateService])
], MrMapLayoutComponent);
export { MrMapLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLElBQUksTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNbEUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBcUIsU0FBUSxjQUFjO0lBR3RELFlBQ0Usb0JBQWlELEVBQ3pDLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUM1QixXQUFpQztRQUV4QyxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFSdkQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7SUFHMUMsQ0FBQztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBOztZQXJDeUIsMkJBQTJCO1lBQ2xDLGNBQWM7WUFDYixNQUFNO1lBQ0osUUFBUTtZQUNILG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDeEIsZ0JBQWdCO1lBQ2Ysb0JBQW9COztBQVgvQixvQkFBb0I7SUFKaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsMGpKQUFnQztLQUNqQyxDQUFDO3FDQUt3QiwyQkFBMkI7UUFDbEMsY0FBYztRQUNiLE1BQU07UUFDSixRQUFRO1FBQ0gsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUN4QixnQkFBZ0I7UUFDZixvQkFBb0I7R0FYL0Isb0JBQW9CLENBeUNoQztTQXpDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNck1hcExheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL21hcC1sYXlvdXQuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItbWFwLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC1sYXlvdXQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNck1hcExheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHVibGljIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZSxcclxuICApIHtcclxuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJNYXBMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlnSWQ6IHRoaXMuY29uZmlnSWQsXHJcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcclxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXHJcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXHJcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuY29uZmlnSWQgPSBkYXRhLmNvbmZpZ0lkO1xyXG4gICAgICB0aGlzLmxheW91dFN0YXRlLmFkZCgnY29udGVudCcpO1xyXG4gICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==