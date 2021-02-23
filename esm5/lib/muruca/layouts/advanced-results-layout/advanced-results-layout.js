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
            template: "<div class=\"mr-search mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-search__title\">\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        \r\n        <div class=\"mr-search__results-content\">\r\n            <div class=\"mr-search__results-wrapper\">\r\n                <div class=\"mr-search__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                <div *ngIf=\"lb.dataSource.pageConfig['filters']\" class=\"mr-search__results-filters\">\r\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \r\n                    class=\"mr-search__results-filters-title\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\r\n                    <div class=\"mr-search__results-filters-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\r\n                            [data]=\"tag\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n                <main class=\"mr-search__results\">\r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-search__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div class=\"mr-search__results-fallback\">\r\n                                <p class=\"mr-search__results-fallback-string\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                </button>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p class=\"mr-search__results-ko-string\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <button class=\"n7-btn mr-search__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                {{ lb.dataSource.pageConfig.ko.button }}\r\n                            </button>\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                <n7-smart-pagination\r\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw2QkFBNkIsSUFBSSxNQUFNLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU0zRTtJQUFzRCxvREFBYztJQUdoRSwwQ0FDUSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsU0FBMkIsRUFDM0IsYUFBbUMsRUFDbkMsYUFBbUMsRUFDcEMsV0FBaUMsRUFDeEMsb0JBQWlEO1FBUGpELFlBU0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQzNFO1FBVE8sWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ3BDLGlCQUFXLEdBQVgsV0FBVyxDQUFzQjs7SUFJeEMsQ0FBQztJQUVTLHNEQUFXLEdBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELG1EQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLG9CQUFvQjtZQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBbkNlLE1BQU07Z0JBQ0UsY0FBYztnQkFDbkIsZ0JBQWdCO2dCQUNaLG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUN2QixvQkFBb0I7Z0JBQ2xCLDJCQUEyQjs7SUFWeEMsZ0NBQWdDO1FBSjVDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsa2xLQUE2QztTQUM5QyxDQUFDO3lDQUtrQixNQUFNO1lBQ0UsY0FBYztZQUNuQixnQkFBZ0I7WUFDWixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3ZCLG9CQUFvQjtZQUNsQiwyQkFBMkI7T0FWeEMsZ0NBQWdDLENBd0M1QztJQUFELHVDQUFDO0NBQUEsQUF4Q0QsQ0FBc0QsY0FBYyxHQXdDbkU7U0F4Q1ksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5jb25maWcnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHVibGljIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZSxcclxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICApIHtcclxuICAgICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNckFkdmFuY2VkUmVzdWx0c0xheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxyXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXHJcbiAgICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcclxuICAgICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxyXG4gICAgICAgIGFjdGl2YXRlZFJvdXRlOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIGxheW91dFN0YXRlOiB0aGlzLmxheW91dFN0YXRlLFxyXG4gICAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcclxuICAgICAgICAvLyBhZGQgbGF5b3V0IHN0YXRlc1xyXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKFsncmVzdWx0cyddKTtcclxuICAgICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG4iXX0=