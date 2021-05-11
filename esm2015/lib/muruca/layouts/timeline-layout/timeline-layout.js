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
import { MrTimelineLayoutConfig as config } from './timeline-layout.config';
let MrTimelineLayoutComponent = class MrTimelineLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, route, router, location, configuration, communication, mainState, layoutState) {
        super(layoutsConfiguration.get('MrTimelineLayoutConfig') || config);
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
MrTimelineLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: ActivatedRoute },
    { type: Router },
    { type: Location },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: MrLayoutStateService }
];
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
export { MrTimelineLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLElBQUksTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNNUUsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBMEIsU0FBUSxjQUFjO0lBRzNELFlBQ0Usb0JBQWlELEVBQ3pDLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUM1QixXQUFpQztRQUV4QyxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFSNUQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7SUFHMUMsQ0FBQztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBOztZQXJDeUIsMkJBQTJCO1lBQ2xDLGNBQWM7WUFDYixNQUFNO1lBQ0osUUFBUTtZQUNILG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDeEIsZ0JBQWdCO1lBQ2Ysb0JBQW9COztBQVgvQix5QkFBeUI7SUFKckMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixrdEpBQXFDO0tBQ3RDLENBQUM7cUNBS3dCLDJCQUEyQjtRQUNsQyxjQUFjO1FBQ2IsTUFBTTtRQUNKLFFBQVE7UUFDSCxvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3hCLGdCQUFnQjtRQUNmLG9CQUFvQjtHQVgvQix5QkFBeUIsQ0F5Q3JDO1NBekNZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yVGltZWxpbmVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi90aW1lbGluZS1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItdGltZWxpbmUtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yVGltZWxpbmVMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlcixcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKCdjb250ZW50Jyk7XG4gICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19