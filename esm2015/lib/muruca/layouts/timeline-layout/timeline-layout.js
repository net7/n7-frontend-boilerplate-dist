import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import { MrTimelineLayoutConfig as config } from './timeline-layout.config';
let MrTimelineLayoutComponent = class MrTimelineLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, route, configuration, communication, mainState, layoutState) {
        super(layoutsConfiguration.get('MrTimelineLayoutConfig') || config);
        this.route = route;
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
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: MrLayoutStateService }
];
MrTimelineLayoutComponent = __decorate([
    Component({
        selector: 'mr-timeline-layout',
        template: "<div class=\"mr-timeline mr-layout\"\n     *ngIf=\"lb.dataSource\">\n    <div class=\"mr-timeline__timeline\">\n        <n7-timeline [data]=\"lb.widgets['mr-timeline'].ds.out$ | async\"></n7-timeline>\n    </div>\n\n    <div class=\"mr-timeline__page mr-side-margin\">\n        <div class=\"mr-timeline__date\">\n            <n7-inner-title [data]=\"lb.dataSource.yearHeader\"></n7-inner-title>\n        </div>\n        <h1 class=\"mr-timeline__title\"\n            *ngIf=\"lb.dataSource.loadedResourceDetails\">\n            {{lb.dataSource.eventHeader}}\n        </h1>\n        <div class=\"mr-timeline__content\">\n            <p [innerHTML]=\"lb.dataSource.eventDescription\">\n            <p>\n                <ng-container *ngIf=\"lb.dataSource.loadedResourceDetails\">\n                    <div>Fonti:\n                        <ul>\n                            <li><a href=\"#\">Canzoniere</a></li>\n                            <li><a href=\"#\">I Trionfi</a></li>\n                            <li><a href=\"#\">Epistole</a></li>\n                        </ul>\n                    </div>\n\n                    <div class=\"mr-gallery\">\n                        <div class=\"mr-gallery__item\"\n                             *ngFor=\"let image of lb.dataSource.images\">\n                            <img class=\"mr-gallery__image\"\n                                 [src]=\"image\">\n                        </div>\n                    </div>\n\n                    <div class=\"mr-map\">\n                        <n7-map [data]=\"lb.widgets['mr-map'].ds.out$ | async\"></n7-map>\n                    </div>\n\n                    <ng-container *ngIf=\"lb.dataSource.bibliographyMock\">\n                        <div class=\"mr-content-block mr-content-block-collection\">\n                            <h3 class=\"mr-content-block__title\">Bibliografia</h3>\n                            <div class=\"mr-content-block__content n7-grid-1\">\n                                <ng-container *ngFor=\"let item of lb.dataSource.bibliographyMock\">\n                                    <ng-container *ngTemplateOutlet=\"biblio; context: { $implicit: item }\">\n                                    </ng-container>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </ng-container>\n\n                    <div class=\"mr-content-block mr-content-block-collection\">\n                        <h3 class=\"mr-content-block__title\">Mappe collegate</h3>\n                        <div class=\"mr-content-block__content n7-grid-3\">\n                            <ng-container *ngFor=\"let item of lb.dataSource.connectedMapsMock\">\n                                <ng-container *ngTemplateOutlet=\"maps; context: { $implicit: item }\">\n                                </ng-container>\n                            </ng-container>\n                        </div>\n                    </div>\n                </ng-container>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #biblio\n             let-item>\n    <div class=\"mr-timeline__collection-content\">\n        <n7-item-preview [data]=\"item\"></n7-item-preview>\n    </div>\n</ng-template>\n\n<ng-template #maps\n             let-item>\n    <div class=\"mr-timeline__collection-content\">\n        <n7-item-preview [data]=\"item\"></n7-item-preview>\n    </div>\n</ng-template>\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        MrLayoutStateService])
], MrTimelineLayoutComponent);
export { MrTimelineLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixJQUFJLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBTTVFLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQTBCLFNBQVEsY0FBYztJQUczRCxZQUNFLG9CQUFpRCxFQUN6QyxLQUFxQixFQUNyQixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUM1QixXQUFpQztRQUV4QyxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFONUQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7SUFHMUMsQ0FBQztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7O1lBaEN5QiwyQkFBMkI7WUFDbEMsY0FBYztZQUNOLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDeEIsZ0JBQWdCO1lBQ2Ysb0JBQW9COztBQVQvQix5QkFBeUI7SUFKckMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5Qix5MkdBQXFDO0tBQ3RDLENBQUM7cUNBS3dCLDJCQUEyQjtRQUNsQyxjQUFjO1FBQ04sb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUN4QixnQkFBZ0I7UUFDZixvQkFBb0I7R0FUL0IseUJBQXlCLENBb0NyQztTQXBDWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJUaW1lbGluZUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3RpbWVsaW5lLWxheW91dC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci10aW1lbGluZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yVGltZWxpbmVMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKCdjb250ZW50Jyk7XG4gICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19