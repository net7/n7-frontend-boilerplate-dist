import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { AwCollectionLayoutConfig as config } from './collection-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
var AwCollectionLayoutComponent = /** @class */ (function (_super) {
    __extends(AwCollectionLayoutComponent, _super);
    function AwCollectionLayoutComponent(communication, layoutsConfiguration, configuration, route) {
        var _this = _super.call(this, config) || this;
        _this.communication = communication;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.configuration = configuration;
        _this.route = route;
        return _this;
    }
    AwCollectionLayoutComponent.prototype.initPayload = function () {
        return {
            communication: this.communication,
            layoutsConfiguration: this.layoutsConfiguration,
            configuration: this.configuration,
            route: this.route
        };
    };
    AwCollectionLayoutComponent.prototype.ngOnInit = function () {
        this.onInit();
    };
    AwCollectionLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    AwCollectionLayoutComponent.ctorParameters = function () { return [
        { type: CommunicationService },
        { type: LayoutsConfigurationService },
        { type: ConfigurationService },
        { type: ActivatedRoute }
    ]; };
    AwCollectionLayoutComponent = __decorate([
        Component({
            selector: 'n7-collection-layout',
            template: "<div class=\"aw-collection-layout\"\r\n     *ngIf=\"lb.dataSource as dataSource\">\r\n\r\n    <div class=\"aw-collection-layout__header\">\r\n        <n7-inner-title [data]=\"dataSource.innerTitleData.getValue()\">\r\n        </n7-inner-title>\r\n    </div>\r\n\r\n    <div class=\"aw-collection-layout__description\"\r\n         *ngIf=\"dataSource.collectionDescription.getValue()\">\r\n        <div class=\"aw-collection-layout__description-text\">\r\n            {{ dataSource.collectionDescription.getValue() }}\r\n        </div>\r\n    </div>\r\n\r\n    <section class=\"n7-grid-3 aw-collection-layout__grid\"\r\n            [ngClass]=\"{ 'is-loading': dataSource.loading }\"\r\n             *ngIf=\"dataSource.loadedCollections | async\">\r\n        \r\n        <ng-container *ngFor=\"let item of (dataSource.loadedCollections | async)\">\r\n            <n7-item-preview [data]=\"item\">\r\n            </n7-item-preview>\r\n        </ng-container>\r\n        \r\n        <ng-container *ngIf=\"dataSource.loading\">\r\n            <n7-content-placeholder *ngFor=\"let n of dataSource.pageSizeList\"\r\n                                    [data]=\"{\r\n                blocks: [{ classes: 'collection-placeholder-item-preview' }]\r\n            }\"></n7-content-placeholder>\r\n        </ng-container>\r\n        \r\n    </section>\r\n\r\n    <section *ngIf=\"dataSource.loadMoreButton.getValue()\">\r\n        <button class=\"n7-btn n7-btn-cta n7-btn-xl aw-collection-layout__btn-more\"\r\n                (click)=\"dataSource.loadMore()\"\r\n                [disabled]=\"dataSource.loading\">\r\n            MOSTRA ALTRI\r\n        </button>\r\n    </section>\r\n</div>\r\n"
        }),
        __metadata("design:paramtypes", [CommunicationService,
            LayoutsConfigurationService,
            ConfigurationService,
            ActivatedRoute])
    ], AwCollectionLayoutComponent);
    return AwCollectionLayoutComponent;
}(AbstractLayout));
export { AwCollectionLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFNckc7SUFBaUQsK0NBQWM7SUFDN0QscUNBQ1UsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELGFBQW1DLEVBQ25DLEtBQXFCO1FBSi9CLFlBTUUsa0JBQU0sTUFBTSxDQUFDLFNBQ2Q7UUFOUyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7O0lBRy9CLENBQUM7SUFFUyxpREFBVyxHQUFyQjtRQUNFLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtZQUMvQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBRUQsOENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkF2QndCLG9CQUFvQjtnQkFDYiwyQkFBMkI7Z0JBQ2xDLG9CQUFvQjtnQkFDNUIsY0FBYzs7SUFMcEIsMkJBQTJCO1FBSnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsNHBEQUF1QztTQUN4QyxDQUFDO3lDQUd5QixvQkFBb0I7WUFDYiwyQkFBMkI7WUFDbEMsb0JBQW9CO1lBQzVCLGNBQWM7T0FMcEIsMkJBQTJCLENBMEJ2QztJQUFELGtDQUFDO0NBQUEsQUExQkQsQ0FBaUQsY0FBYyxHQTBCOUQ7U0ExQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBBd0NvbGxlY3Rpb25MYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9jb2xsZWN0aW9uLWxheW91dC5jb25maWcnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1jb2xsZWN0aW9uLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbGxlY3Rpb24tbGF5b3V0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBd0NvbGxlY3Rpb25MYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogdGhpcy5sYXlvdXRzQ29uZmlndXJhdGlvbixcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19