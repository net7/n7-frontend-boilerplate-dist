import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { MrAdvancedResultsLayoutConfig as config } from './advanced-results-layout.config';
import { MrLayoutStateService } from '../../services/layout-state.service';
var MrAdvancedResultsLayoutComponent = /** @class */ (function (_super) {
    __extends(MrAdvancedResultsLayoutComponent, _super);
    function MrAdvancedResultsLayoutComponent(router, activatedRoute, mainState, configuration, communication, layoutState, layoutsConfiguration) {
        var _this = _super.call(this, layoutsConfiguration.get('MrAdvancedResultsLayoutConfig') || config) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.mainState = mainState;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.layoutState = layoutState;
        return _this;
    }
    MrAdvancedResultsLayoutComponent.prototype.initPayload = function () {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            layoutState: this.layoutState,
            options: this.config.options || {},
        };
    };
    MrAdvancedResultsLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.configId = data.configId;
            // add layout states
            _this.layoutState.add(['results']);
            _this.onInit();
        });
    };
    MrAdvancedResultsLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    MrAdvancedResultsLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: MainStateService },
        { type: ConfigurationService },
        { type: CommunicationService },
        { type: MrLayoutStateService },
        { type: LayoutsConfigurationService }
    ]; };
    MrAdvancedResultsLayoutComponent = __decorate([
        Component({
            selector: 'mr-advanced-results-layout',
            template: "<div class=\"mr-search mr-layout\"\n     *ngIf=\"lb.dataSource\">\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\n\n        <div class=\"mr-search__title\">\n            <n7-inner-title\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\n            </n7-inner-title>\n        </div>\n        \n        <div class=\"mr-search__results-content\">\n            <div class=\"mr-search__results-wrapper\">\n                <div class=\"mr-search__results-info\">\n                    <n7-inner-title\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\n                    </n7-inner-title>\n                </div>\n                <div *ngIf=\"lb.dataSource.pageConfig['filters']\" class=\"mr-search__results-filters\">\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \n                    class=\"mr-search__results-filters-title\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\n                    <div class=\"mr-search__results-filters-wrapper\">\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\n                            [data]=\"tag\">\n                        </n7-tag>\n                    </div>\n                </div>\n                <main class=\"mr-search__results\">\n                    <!-- SEARCH RESULTS -->\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\n                        \n                        <!-- loading -->\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\n                            <div class=\"mr-search__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                                    blocks: [\n                                        { classes: 'search-result-placeholder-title' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' }\n                                    ]\n                                }\"></n7-content-placeholder>\n                            </div>\n                        </ng-container>\n                        \n                        <!-- success: items > 0 -->\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\n                                [data]=\"item\">\n                                </n7-item-preview>\n                            </div>\n                        </ng-container>\n\n                        <!-- empty: items === 0 -->\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\n                            <div class=\"mr-search__results-fallback\">\n                                <p class=\"mr-search__results-fallback-string\">\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\n                                </p>\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\n                                </button>\n                            </div>\n                        </ng-container>\n\n                        <!-- error: request problem -->\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\n                            <p class=\"mr-search__results-ko-string\">\n                                {{ lb.dataSource.pageConfig.ko.text }}\n                            </p>\n                            <button class=\"n7-btn mr-search__results-ko-button\"\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                {{ lb.dataSource.pageConfig.ko.button }}\n                            </button>\n                        </ng-container>\n                        \n                    </ng-container>\n                </main>               \n                <n7-smart-pagination\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n        </div>\n\n    </section>\n</div>\n"
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            MainStateService,
            ConfigurationService,
            CommunicationService,
            MrLayoutStateService,
            LayoutsConfigurationService])
    ], MrAdvancedResultsLayoutComponent);
    return MrAdvancedResultsLayoutComponent;
}(AbstractLayout));
export { MrAdvancedResultsLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw2QkFBNkIsSUFBSSxNQUFNLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU0zRTtJQUFzRCxvREFBYztJQUdoRSwwQ0FDUSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsU0FBMkIsRUFDM0IsYUFBbUMsRUFDbkMsYUFBbUMsRUFDcEMsV0FBaUMsRUFDeEMsb0JBQWlEO1FBUGpELFlBU0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQzNFO1FBVE8sWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ3BDLGlCQUFXLEdBQVgsV0FBVyxDQUFzQjs7SUFJeEMsQ0FBQztJQUVTLHNEQUFXLEdBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELG1EQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLG9CQUFvQjtZQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBbkNlLE1BQU07Z0JBQ0UsY0FBYztnQkFDbkIsZ0JBQWdCO2dCQUNaLG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUN2QixvQkFBb0I7Z0JBQ2xCLDJCQUEyQjs7SUFWeEMsZ0NBQWdDO1FBSjVDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsNDVKQUE2QztTQUM5QyxDQUFDO3lDQUtrQixNQUFNO1lBQ0UsY0FBYztZQUNuQixnQkFBZ0I7WUFDWixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3ZCLG9CQUFvQjtZQUNsQiwyQkFBMkI7T0FWeEMsZ0NBQWdDLENBd0M1QztJQUFELHVDQUFDO0NBQUEsQUF4Q0QsQ0FBc0QsY0FBYyxHQXdDbkU7U0F4Q1ksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1hZHZhbmNlZC1yZXN1bHRzLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgKSB7XG4gICAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yQWR2YW5jZWRSZXN1bHRzTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICAgIGFjdGl2YXRlZFJvdXRlOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcbiAgICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnSWQgPSBkYXRhLmNvbmZpZ0lkO1xuICAgICAgICAvLyBhZGQgbGF5b3V0IHN0YXRlc1xuICAgICAgICB0aGlzLmxheW91dFN0YXRlLmFkZChbJ3Jlc3VsdHMnXSk7XG4gICAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxufVxuIl19