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
            template: "<div class=\"aw-collection-layout\"\n     *ngIf=\"lb.dataSource as dataSource\">\n\n    <div class=\"aw-collection-layout__header\">\n        <n7-inner-title [data]=\"dataSource.innerTitleData.getValue()\">\n        </n7-inner-title>\n    </div>\n\n    <div class=\"aw-collection-layout__description\"\n         *ngIf=\"dataSource.collectionDescription.getValue()\">\n        <div class=\"aw-collection-layout__description-text\">\n            {{ dataSource.collectionDescription.getValue() }}\n        </div>\n    </div>\n\n    <section class=\"n7-grid-3 aw-collection-layout__grid\"\n            [ngClass]=\"{ 'is-loading': dataSource.loading }\"\n             *ngIf=\"dataSource.loadedCollections | async\">\n        \n        <ng-container *ngFor=\"let item of (dataSource.loadedCollections | async)\">\n            <n7-item-preview [data]=\"item\">\n            </n7-item-preview>\n        </ng-container>\n        \n        <ng-container *ngIf=\"dataSource.loading\">\n            <n7-content-placeholder *ngFor=\"let n of dataSource.pageSizeList\"\n                                    [data]=\"{\n                blocks: [{ classes: 'collection-placeholder-item-preview' }]\n            }\"></n7-content-placeholder>\n        </ng-container>\n        \n    </section>\n\n    <section *ngIf=\"dataSource.loadMoreButton.getValue()\">\n        <button class=\"n7-btn n7-btn-cta n7-btn-xl aw-collection-layout__btn-more\"\n                (click)=\"dataSource.loadMore()\"\n                [disabled]=\"dataSource.loading\">\n            MOSTRA ALTRI\n        </button>\n    </section>\n</div>\n"
        }),
        __metadata("design:paramtypes", [CommunicationService,
            LayoutsConfigurationService,
            ConfigurationService,
            ActivatedRoute])
    ], AwCollectionLayoutComponent);
    return AwCollectionLayoutComponent;
}(AbstractLayout));
export { AwCollectionLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFNckc7SUFBaUQsK0NBQWM7SUFDN0QscUNBQ1UsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELGFBQW1DLEVBQ25DLEtBQXFCO1FBSi9CLFlBTUUsa0JBQU0sTUFBTSxDQUFDLFNBQ2Q7UUFOUyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7O0lBRy9CLENBQUM7SUFFUyxpREFBVyxHQUFyQjtRQUNFLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtZQUMvQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBRUQsOENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkF2QndCLG9CQUFvQjtnQkFDYiwyQkFBMkI7Z0JBQ2xDLG9CQUFvQjtnQkFDNUIsY0FBYzs7SUFMcEIsMkJBQTJCO1FBSnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsMGtEQUF1QztTQUN4QyxDQUFDO3lDQUd5QixvQkFBb0I7WUFDYiwyQkFBMkI7WUFDbEMsb0JBQW9CO1lBQzVCLGNBQWM7T0FMcEIsMkJBQTJCLENBMEJ2QztJQUFELGtDQUFDO0NBQUEsQUExQkQsQ0FBaUQsY0FBYyxHQTBCOUQ7U0ExQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQXdDb2xsZWN0aW9uTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vY29sbGVjdGlvbi1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1jb2xsZWN0aW9uLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xsZWN0aW9uLWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBd0NvbGxlY3Rpb25MYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IHRoaXMubGF5b3V0c0NvbmZpZ3VyYXRpb24sXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19