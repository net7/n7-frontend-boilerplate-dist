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
        this.route.data.subscribe(() => {
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
        template: "<div class=\"mr-timeline mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <div class=\"mr-timeline__timeline\">\r\n        <n7-timeline [data]=\"lb.widgets['mr-timeline'].ds.out$ | async\"></n7-timeline>\r\n    </div>\r\n\r\n    <div class=\"mr-timeline__page mr-side-margin\">\r\n        <div class=\"mr-timeline__date\">\r\n            <n7-inner-title [data]=\"lb.widgets['mr-year-header'].ds.out$ | async\" \r\n                            [emit]=\"lb.widgets['mr-year-header'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        <h1 class=\"mr-timeline__title\"\r\n            *ngIf=\"lb.dataSource.loadedResourceDetails\">\r\n            {{lb.dataSource.eventHeader}}\r\n        </h1>\r\n        <div class=\"mr-timeline__content\">\r\n            <p [innerHTML]=\"lb.dataSource.eventDescription\">\r\n            <p>\r\n                <ng-container *ngIf=\"lb.dataSource.loadedResourceDetails && false\">\r\n                    <div>Fonti:\r\n                        <ul>\r\n                            <li><a href=\"#\">Canzoniere</a></li>\r\n                            <li><a href=\"#\">I Trionfi</a></li>\r\n                            <li><a href=\"#\">Epistole</a></li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                    <div class=\"mr-gallery\" *ngIf=\"false\">\r\n                        <div class=\"mr-gallery__item\"\r\n                             *ngFor=\"let image of lb.dataSource.images\">\r\n                            <img class=\"mr-gallery__image\"\r\n                                 [src]=\"image\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"mr-map\" *ngIf=\"false\">\r\n                        <n7-map [data]=\"lb.widgets['mr-map'].ds.out$ | async\"></n7-map>\r\n                    </div>\r\n\r\n                    <ng-container *ngIf=\"lb.dataSource.bibliographyMock && false\">\r\n                        <div class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 class=\"mr-content-block__title\">Bibliografia</h3>\r\n                            <div class=\"mr-content-block__content n7-grid-1\">\r\n                                <ng-container *ngFor=\"let item of lb.dataSource.bibliographyMock\">\r\n                                    <ng-container *ngTemplateOutlet=\"biblio; context: { $implicit: item }\">\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n\r\n                    <div class=\"mr-content-block mr-content-block-collection\" *ngIf=\"false\">\r\n                        <h3 class=\"mr-content-block__title\">Mappe collegate</h3>\r\n                        <div class=\"mr-content-block__content n7-grid-3\">\r\n                            <ng-container *ngFor=\"let item of lb.dataSource.connectedMapsMock\">\r\n                                <ng-container *ngTemplateOutlet=\"maps; context: { $implicit: item }\">\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-template #biblio\r\n             let-item>\r\n    <div class=\"mr-timeline__collection-content\">\r\n        <n7-item-preview [data]=\"item\"></n7-item-preview>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #maps\r\n             let-item>\r\n    <div class=\"mr-timeline__collection-content\">\r\n        <n7-item-preview [data]=\"item\"></n7-item-preview>\r\n    </div>\r\n</ng-template>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLElBQUksTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNNUUsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBMEIsU0FBUSxjQUFjO0lBRzNELFlBQ0Usb0JBQWlELEVBQ3pDLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUM1QixXQUFpQztRQUV4QyxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFSNUQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7SUFHMUMsQ0FBQztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0YsQ0FBQTs7WUFwQ3lCLDJCQUEyQjtZQUNsQyxjQUFjO1lBQ2IsTUFBTTtZQUNKLFFBQVE7WUFDSCxvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3hCLGdCQUFnQjtZQUNmLG9CQUFvQjs7QUFYL0IseUJBQXlCO0lBSnJDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsd3JIQUFxQztLQUN0QyxDQUFDO3FDQUt3QiwyQkFBMkI7UUFDbEMsY0FBYztRQUNiLE1BQU07UUFDSixRQUFRO1FBQ0gsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUN4QixnQkFBZ0I7UUFDZixvQkFBb0I7R0FYL0IseUJBQXlCLENBd0NyQztTQXhDWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNclRpbWVsaW5lTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vdGltZWxpbmUtbGF5b3V0LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLXRpbWVsaW5lLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVsaW5lLWxheW91dC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcclxuICAgIHB1YmxpYyBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yVGltZWxpbmVMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlnSWQ6IHRoaXMuY29uZmlnSWQsXHJcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcclxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXHJcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXHJcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5hZGQoJ2NvbnRlbnQnKTtcclxuICAgICAgdGhpcy5vbkluaXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=