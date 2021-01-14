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
        this.route.data.subscribe(function () {
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
    return MrTimelineLayoutComponent;
}(AbstractLayout));
export { MrTimelineLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLElBQUksTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNNUU7SUFBK0MsNkNBQWM7SUFHM0QsbUNBQ0Usb0JBQWlELEVBQ3pDLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUM1QixXQUFpQztRQVIxQyxZQVVFLGtCQUFNLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUNwRTtRQVRTLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDNUIsaUJBQVcsR0FBWCxXQUFXLENBQXNCOztJQUcxQyxDQUFDO0lBRVMsK0NBQVcsR0FBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFuQ3VCLDJCQUEyQjtnQkFDbEMsY0FBYztnQkFDYixNQUFNO2dCQUNKLFFBQVE7Z0JBQ0gsb0JBQW9CO2dCQUNwQixvQkFBb0I7Z0JBQ3hCLGdCQUFnQjtnQkFDZixvQkFBb0I7O0lBWC9CLHlCQUF5QjtRQUpyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLHdySEFBcUM7U0FDdEMsQ0FBQzt5Q0FLd0IsMkJBQTJCO1lBQ2xDLGNBQWM7WUFDYixNQUFNO1lBQ0osUUFBUTtZQUNILG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDeEIsZ0JBQWdCO1lBQ2Ysb0JBQW9CO09BWC9CLHlCQUF5QixDQXdDckM7SUFBRCxnQ0FBQztDQUFBLEFBeENELENBQStDLGNBQWMsR0F3QzVEO1NBeENZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yVGltZWxpbmVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi90aW1lbGluZS1sYXlvdXQuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItdGltZWxpbmUtbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUtbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHVibGljIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZSxcclxuICApIHtcclxuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJUaW1lbGluZUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcclxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXHJcbiAgICAgIGxheW91dFN0YXRlOiB0aGlzLmxheW91dFN0YXRlLFxyXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcclxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlcixcclxuICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24sXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucm91dGUuZGF0YS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxheW91dFN0YXRlLmFkZCgnY29udGVudCcpO1xyXG4gICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==