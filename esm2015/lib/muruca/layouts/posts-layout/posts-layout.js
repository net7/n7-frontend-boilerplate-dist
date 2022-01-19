import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { MrPostsLayoutConfig as config } from './posts-layout.config';
import { MrLayoutStateService } from '../../services/layout-state.service';
let MrPostsLayoutComponent = class MrPostsLayoutComponent extends AbstractLayout {
    constructor(router, activatedRoute, mainState, configuration, communication, layoutState, layoutsConfiguration) {
        super(layoutsConfiguration.get('MrPostsLayoutConfig') || config);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainState = mainState;
        this.configuration = configuration;
        this.communication = communication;
        this.layoutState = layoutState;
    }
    initPayload() {
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
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.configId = data.configId;
            // add layout states
            this.layoutState.add(['results']);
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrPostsLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: MainStateService },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MrLayoutStateService },
    { type: LayoutsConfigurationService }
];
MrPostsLayoutComponent = __decorate([
    Component({
        selector: 'mr-posts-layout',
        template: "<div class=\"mr-search mr-layout\"\r\n     *ngIf=\"lb.dataSource\">\r\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\r\n\r\n        <div class=\"mr-search__title\">\r\n            <div class=\"scroll-ref\">&nbsp;</div>\r\n            <n7-inner-title\r\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\r\n            </n7-inner-title>\r\n        </div>\r\n        \r\n        <div class=\"mr-search__results-content\">\r\n            <div class=\"mr-search__results-wrapper\">\r\n                <div class=\"mr-search__results-info\">\r\n                    <n7-inner-title\r\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\r\n                    </n7-inner-title>\r\n                </div>\r\n                <div *ngIf=\"lb.dataSource.pageConfig['filters']\" class=\"mr-search__results-filters\">\r\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \r\n                    class=\"mr-search__results-filters-title\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\r\n                    <div class=\"mr-search__results-filters-wrapper\">\r\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\r\n                            [data]=\"tag\">\r\n                        </n7-tag>\r\n                    </div>\r\n                </div>\r\n                <main class=\"mr-search__results\">\r\n                    <!-- SEARCH RESULTS -->\r\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\r\n                        \r\n                        <!-- loading -->\r\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n                            <div class=\"mr-search__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                                    blocks: [\r\n                                        { classes: 'search-result-placeholder-title' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' },\r\n                                        { classes: 'search-result-placeholder-metadata' }\r\n                                    ]\r\n                                }\"></n7-content-placeholder>\r\n                            </div>\r\n                        </ng-container>\r\n                        \r\n                        <!-- success: items > 0 -->\r\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\r\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\r\n                                [data]=\"item\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- empty: items === 0 -->\r\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\r\n                            <div class=\"mr-search__results-fallback\">\r\n                                <p class=\"mr-search__results-fallback-string\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\r\n                                </p>\r\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\r\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\r\n                                </button>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                        <!-- error: request problem -->\r\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n                            <p class=\"mr-search__results-ko-string\">\r\n                                {{ lb.dataSource.pageConfig.ko.text }}\r\n                            </p>\r\n                            <button class=\"n7-btn mr-search__results-ko-button\"\r\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\r\n                                {{ lb.dataSource.pageConfig.ko.button }}\r\n                            </button>\r\n                        </ng-container>\r\n                        \r\n                    </ng-container>\r\n                </main>               \r\n                <n7-smart-pagination\r\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\r\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n\r\n    </section>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        MainStateService,
        ConfigurationService,
        CommunicationService,
        MrLayoutStateService,
        LayoutsConfigurationService])
], MrPostsLayoutComponent);
export { MrPostsLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Bvc3RzLWxheW91dC9wb3N0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsSUFBSSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU0zRSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUF1QixTQUFRLGNBQWM7SUFHdEQsWUFDUSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsU0FBMkIsRUFDM0IsYUFBbUMsRUFDbkMsYUFBbUMsRUFDcEMsV0FBaUMsRUFDeEMsb0JBQWlEO1FBRS9DLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQVIzRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO0lBSXhDLENBQUM7SUFFUyxXQUFXO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLG9CQUFvQjtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNKLENBQUE7O1lBcENtQixNQUFNO1lBQ0UsY0FBYztZQUNuQixnQkFBZ0I7WUFDWixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3ZCLG9CQUFvQjtZQUNsQiwyQkFBMkI7O0FBVnhDLHNCQUFzQjtJQUpsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLHdvS0FBa0M7S0FDbkMsQ0FBQztxQ0FLa0IsTUFBTTtRQUNFLGNBQWM7UUFDbkIsZ0JBQWdCO1FBQ1osb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUN2QixvQkFBb0I7UUFDbEIsMkJBQTJCO0dBVnhDLHNCQUFzQixDQXdDbEM7U0F4Q1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJQb3N0c0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3Bvc3RzLWxheW91dC5jb25maWcnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItcG9zdHMtbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG9zdHMtbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJQb3N0c0xheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICAgIHB1YmxpYyBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXHJcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgKSB7XHJcbiAgICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJQb3N0c0xheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxyXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXHJcbiAgICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcclxuICAgICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxyXG4gICAgICAgIGFjdGl2YXRlZFJvdXRlOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIGxheW91dFN0YXRlOiB0aGlzLmxheW91dFN0YXRlLFxyXG4gICAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcclxuICAgICAgICAvLyBhZGQgbGF5b3V0IHN0YXRlc1xyXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKFsncmVzdWx0cyddKTtcclxuICAgICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG4iXX0=