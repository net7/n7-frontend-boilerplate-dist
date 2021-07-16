import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MrSearchLayoutConfig as config } from './search-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrSearchService } from '../../services/search.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import { MrResourceModalService } from '../../services/resource-modal.service';
let MrSearchLayoutComponent = class MrSearchLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, router, activatedRoute, communication, configuration, searchService, layoutState, mainState, modalService) {
        super(layoutsConfiguration.get('MrSearchLayoutConfig') || config);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.communication = communication;
        this.configuration = configuration;
        this.searchService = searchService;
        this.layoutState = layoutState;
        this.mainState = mainState;
        this.modalService = modalService;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            activatedRoute: this.activatedRoute,
            communication: this.communication,
            searchService: this.searchService,
            layoutState: this.layoutState,
            modalService: this.modalService,
            options: this.config.options || {},
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.configId = data.configId;
            const { searchId, searchConfig } = this.configuration.get(this.configId);
            this.searchService.init(searchId, searchConfig);
            // add layout states
            this.layoutState.add(['results']);
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
MrSearchLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: Router },
    { type: ActivatedRoute },
    { type: CommunicationService },
    { type: ConfigurationService },
    { type: MrSearchService },
    { type: MrLayoutStateService },
    { type: MainStateService },
    { type: MrResourceModalService }
];
MrSearchLayoutComponent = __decorate([
    Component({
        selector: 'mr-search-layout',
        template: "<div class=\"mr-search mr-layout\"\n     *ngIf=\"lb.dataSource\">\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\n\n        <div class=\"mr-search__title\">\n            <n7-inner-title\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\n            </n7-inner-title>\n        </div>\n\n        <div *ngIf=\"lb.dataSource.showDescription\" class=\"mr-search__description\">\n            <mr-search-page-description\n            [data]=\"lb.widgets['mr-search-page-description'].ds.out$ | async\"\n            [emit]=\"lb.widgets['mr-search-page-description'].emit\">\n            </mr-search-page-description>\n        </div>\n        \n        <div class=\"mr-search__results-content\">\n            <aside class=\"mr-facets\">\n                <div class=\"scroll-ref\">&nbsp;</div>\n                <div class=\"mr-facets__contents\">\n                    <h2 class=\"mr-facets__title\" \n                        *ngIf=\"lb.dataSource.pageConfig['facetsTitle']\">\n                        {{ lb.dataSource.pageConfig['facetsTitle'] }}\n                    </h2>\n                    <mr-search-facets-layout \n                    [searchService]=\"lb.dataSource.searchService\">\n                    </mr-search-facets-layout>\n                </div>\n            </aside>\n            <div class=\"mr-search__results-wrapper\">\n                <div class=\"mr-search__results-info\">\n                    <n7-inner-title\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\n                    </n7-inner-title>\n                </div>\n                \n                <div *ngIf=\"(\n                    lb.dataSource.pageConfig['filtersTitle'] && \n                    lb.widgets['mr-search-tags'].ds.hasFilters\n                )\" \n                class=\"mr-active-filters\">\n                    <span class=\"mr-active-filters__label\">{{ lb.dataSource.pageConfig['filtersTitle'] }}</span>\n                    <div class=\"mr-active-filters__tags-wrapper\">\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-search-tags'].ds.out$ | async)\"\n                        [data]=\"tag\"\n                        [emit]=\"lb.widgets['mr-search-tags'].emit\">\n                        </n7-tag>\n                    </div>\n                </div>\n\n                <main class=\"mr-search__results\">\n                    <!-- SEARCH RESULTS -->\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\n                        \n                        <!-- loading -->\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\n                            <div class=\"mr-search__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                                    blocks: [\n                                        { classes: 'search-result-placeholder-title' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' }\n                                    ]\n                                }\"></n7-content-placeholder>\n                            </div>\n                        </ng-container>\n                        \n                        <!-- success: items > 0 -->\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\n                                <n7-item-preview *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\n                                [data]=\"item\" [emit]=\"lb.widgets['mr-search-results'].emit\">\n                                </n7-item-preview>\n                            </div>\n                        </ng-container>\n\n                        <!-- empty: items === 0 -->\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\n                            <div class=\"mr-search__results-fallback\">\n                                <p class=\"mr-search__results-fallback-string\">\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\n                                </p>\n                                <button class=\"n7-btn mr-search__results-fallback-button\"\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                    {{ lb.dataSource.pageConfig.fallback.button }}\n                                </button>\n                            </div>\n                        </ng-container>\n\n                        <!-- error: request problem -->\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\n                            <p class=\"mr-search__results-ko-string\">\n                                {{ lb.dataSource.pageConfig.ko.text }}\n                            </p>\n                            <button class=\"n7-btn mr-search__results-ko-button\"\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                {{ lb.dataSource.pageConfig.ko.button }}\n                            </button>\n                        </ng-container>\n                        \n                    </ng-container>\n                </main>               \n                <n7-smart-pagination\n                *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\n                [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n        </div>\n\n    </section>\n</div>"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        Router,
        ActivatedRoute,
        CommunicationService,
        ConfigurationService,
        MrSearchService,
        MrLayoutStateService,
        MainStateService,
        MrResourceModalService])
], MrSearchLayoutComponent);
export { MrSearchLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFNL0UsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBd0IsU0FBUSxjQUFjO0lBR3pELFlBQ0Usb0JBQWlELEVBQ3pDLE1BQWMsRUFDZCxjQUE4QixFQUM5QixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxhQUE4QixFQUMvQixXQUFpQyxFQUNoQyxTQUEyQixFQUM1QixZQUFvQztRQUczQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFWMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQXdCO0lBSTdDLENBQUM7SUFFUyxXQUFXO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ2hELG9CQUFvQjtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7O1lBM0N5QiwyQkFBMkI7WUFDakMsTUFBTTtZQUNFLGNBQWM7WUFDZixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDbEIsb0JBQW9CO1lBQ3JCLGdCQUFnQjtZQUNkLHNCQUFzQjs7QUFabEMsdUJBQXVCO0lBSm5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsKzlMQUFtQztLQUNwQyxDQUFDO3FDQUt3QiwyQkFBMkI7UUFDakMsTUFBTTtRQUNFLGNBQWM7UUFDZixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDbEIsb0JBQW9CO1FBQ3JCLGdCQUFnQjtRQUNkLHNCQUFzQjtHQVpsQyx1QkFBdUIsQ0ErQ25DO1NBL0NZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yU2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc291cmNlLW1vZGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1zZWFyY2gtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VhcmNoU2VydmljZTogTXJTZWFyY2hTZXJ2aWNlLFxuICAgIHB1YmxpYyBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIG1vZGFsU2VydmljZTogTXJSZXNvdXJjZU1vZGFsU2VydmljZVxuXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJTZWFyY2hMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgYWN0aXZhdGVkUm91dGU6IHRoaXMuYWN0aXZhdGVkUm91dGUsXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBzZWFyY2hTZXJ2aWNlOiB0aGlzLnNlYXJjaFNlcnZpY2UsXG4gICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcbiAgICAgIG1vZGFsU2VydmljZTogdGhpcy5tb2RhbFNlcnZpY2UsXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIGNvbnN0IHsgc2VhcmNoSWQsIHNlYXJjaENvbmZpZyB9ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcbiAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5pbml0KHNlYXJjaElkLCBzZWFyY2hDb25maWcpO1xuICAgICAgLy8gYWRkIGxheW91dCBzdGF0ZXNcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKFsncmVzdWx0cyddKTtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=