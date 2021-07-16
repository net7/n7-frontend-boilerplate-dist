import { __decorate, __extends, __metadata } from "tslib";
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
var MrSearchLayoutComponent = /** @class */ (function (_super) {
    __extends(MrSearchLayoutComponent, _super);
    function MrSearchLayoutComponent(layoutsConfiguration, router, activatedRoute, communication, configuration, searchService, layoutState, mainState, modalService) {
        var _this = _super.call(this, layoutsConfiguration.get('MrSearchLayoutConfig') || config) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.communication = communication;
        _this.configuration = configuration;
        _this.searchService = searchService;
        _this.layoutState = layoutState;
        _this.mainState = mainState;
        _this.modalService = modalService;
        return _this;
    }
    MrSearchLayoutComponent.prototype.initPayload = function () {
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
    };
    MrSearchLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.configId = data.configId;
            var _a = _this.configuration.get(_this.configId), searchId = _a.searchId, searchConfig = _a.searchConfig;
            _this.searchService.init(searchId, searchConfig);
            // add layout states
            _this.layoutState.add(['results']);
            _this.onInit();
        });
    };
    MrSearchLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    MrSearchLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService },
        { type: Router },
        { type: ActivatedRoute },
        { type: CommunicationService },
        { type: ConfigurationService },
        { type: MrSearchService },
        { type: MrLayoutStateService },
        { type: MainStateService },
        { type: MrResourceModalService }
    ]; };
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
    return MrSearchLayoutComponent;
}(AbstractLayout));
export { MrSearchLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFNL0U7SUFBNkMsMkNBQWM7SUFHekQsaUNBQ0Usb0JBQWlELEVBQ3pDLE1BQWMsRUFDZCxjQUE4QixFQUM5QixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxhQUE4QixFQUMvQixXQUFpQyxFQUNoQyxTQUEyQixFQUM1QixZQUFvQztRQVQ3QyxZQVlFLGtCQUFNLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUNsRTtRQVhTLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxtQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDL0IsaUJBQVcsR0FBWCxXQUFXLENBQXNCO1FBQ2hDLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzVCLGtCQUFZLEdBQVosWUFBWSxDQUF3Qjs7SUFJN0MsQ0FBQztJQUVTLDZDQUFXLEdBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUN0QyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEIsSUFBQSw0Q0FBa0UsRUFBaEUsc0JBQVEsRUFBRSw4QkFBc0QsQ0FBQztZQUN6RSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDaEQsb0JBQW9CO1lBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkExQ3VCLDJCQUEyQjtnQkFDakMsTUFBTTtnQkFDRSxjQUFjO2dCQUNmLG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUNwQixlQUFlO2dCQUNsQixvQkFBb0I7Z0JBQ3JCLGdCQUFnQjtnQkFDZCxzQkFBc0I7O0lBWmxDLHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLCs5TEFBbUM7U0FDcEMsQ0FBQzt5Q0FLd0IsMkJBQTJCO1lBQ2pDLE1BQU07WUFDRSxjQUFjO1lBQ2Ysb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2xCLG9CQUFvQjtZQUNyQixnQkFBZ0I7WUFDZCxzQkFBc0I7T0FabEMsdUJBQXVCLENBK0NuQztJQUFELDhCQUFDO0NBQUEsQUEvQ0QsQ0FBNkMsY0FBYyxHQStDMUQ7U0EvQ1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNclNlYXJjaExheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNclJlc291cmNlTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzb3VyY2UtbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXNlYXJjaC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2UsXG4gICAgcHVibGljIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwdWJsaWMgbW9kYWxTZXJ2aWNlOiBNclJlc291cmNlTW9kYWxTZXJ2aWNlXG5cbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNclNlYXJjaExheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICBhY3RpdmF0ZWRSb3V0ZTogdGhpcy5hY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIHNlYXJjaFNlcnZpY2U6IHRoaXMuc2VhcmNoU2VydmljZSxcbiAgICAgIGxheW91dFN0YXRlOiB0aGlzLmxheW91dFN0YXRlLFxuICAgICAgbW9kYWxTZXJ2aWNlOiB0aGlzLm1vZGFsU2VydmljZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29uZmlnSWQgPSBkYXRhLmNvbmZpZ0lkO1xuICAgICAgY29uc3QgeyBzZWFyY2hJZCwgc2VhcmNoQ29uZmlnIH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmluaXQoc2VhcmNoSWQsIHNlYXJjaENvbmZpZyk7XG4gICAgICAvLyBhZGQgbGF5b3V0IHN0YXRlc1xuICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5hZGQoWydyZXN1bHRzJ10pO1xuICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==