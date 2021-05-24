import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { MrResourceModalService } from '../../services/resource-modal.service';
import { MrAdvancedResultsLayoutConfig as config } from './advanced-results-layout.config';
import { MrLayoutStateService } from '../../services/layout-state.service';
var MrAdvancedResultsLayoutComponent = /** @class */ (function (_super) {
    __extends(MrAdvancedResultsLayoutComponent, _super);
    function MrAdvancedResultsLayoutComponent(router, activatedRoute, mainState, configuration, communication, layoutState, modalService, layoutsConfiguration) {
        var _this = _super.call(this, layoutsConfiguration.get('MrAdvancedResultsLayoutConfig') || config) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.mainState = mainState;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.layoutState = layoutState;
        _this.modalService = modalService;
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
            modalService: this.modalService,
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
        { type: MrResourceModalService },
        { type: LayoutsConfigurationService }
    ]; };
    MrAdvancedResultsLayoutComponent = __decorate([
        Component({
            selector: 'mr-advanced-results-layout',
            template: "<div class=\"mr-advanced-results mr-layout\"\n     *ngIf=\"lb.dataSource\">\n    <section class=\"mr-layout__maxwidth mr-side-margin\">\n\n        <div class=\"mr-advanced-results__title\">\n            <n7-inner-title\n            [data]=\"lb.widgets['mr-search-page-title'].ds.out$ | async\"\n            [emit]=\"lb.widgets['mr-search-page-title'].emit\">\n            </n7-inner-title>\n        </div>\n        \n        <div class=\"mr-advanced-results__results-content\">\n            <div class=\"scroll-ref\">&nbsp;</div>\n            <div class=\"mr-advanced-results__results-wrapper\">\n                \n                <div class=\"mr-advanced-results__results-info\">\n                    <n7-inner-title\n                    [data]=\"lb.widgets['mr-search-results-title'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['mr-search-results-title'].emit\">\n                    </n7-inner-title>\n                </div>\n                \n                <div *ngIf=\"lb.dataSource.pageConfig['filters']\" class=\"mr-active-filters\">\n                    <span *ngIf=\"lb.dataSource.pageConfig['filters'].title\" \n                    class=\"mr-active-filters__label\">{{ lb.dataSource.pageConfig['filters'].title }}</span>\n                    <div class=\"mr-active-filters__tags-wrapper\">\n                        <n7-tag *ngFor=\"let tag of (lb.widgets['mr-advanced-search-tags'].ds.out$ | async)\"\n                            [data]=\"tag\">\n                        </n7-tag>\n                    </div>\n                </div>\n\n                <main class=\"mr-advanced-results__results\">\n                    \n                    <!-- SEARCH RESULTS -->\n                    <ng-container [ngSwitch]=\"layoutState.get$('results') | async\">\n                        \n                        <!-- loading -->\n                        <ng-container *ngSwitchCase=\"'LOADING'\">\n                            <div class=\"mr-advanced-results__results-loading n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\n                                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                                    blocks: [\n                                        { classes: 'search-result-placeholder-title' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' },\n                                        { classes: 'search-result-placeholder-metadata' }\n                                    ]\n                                }\"></n7-content-placeholder>\n                            </div>\n                        </ng-container>\n                        \n                        <!-- success: items > 0 -->\n                        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n                            <div class=\"n7-grid-{{ lb.dataSource.pageConfig.grid || 3 }}\">\n                                <!-- Use a custom item preview with clickable metadata items -->\n                                <mr-advanced-result\n                                    *ngFor=\"let item of (lb.widgets['mr-search-results'].ds.out$ | async)\"\n                                    [data]=\"item\" [emit]=\"lb.widgets['mr-search-results'].emit\">\n                                </mr-advanced-result>\n                                <!-- ../../components/advanced-result/advanced-result.html -->\n                            </div>\n                        </ng-container>\n\n                        <!-- empty: items === 0 -->\n                        <ng-container *ngSwitchCase=\"'EMPTY'\">\n                            <div *ngIf=\"lb.dataSource.pageConfig?.fallback?.text\" class=\"mr-advanced-results__results-fallback\">\n                                <p class=\"mr-advanced-results__feedback-text\">\n                                    {{ lb.dataSource.pageConfig.fallback.text }}\n                                </p>\n                                <!-- <div class=\"mr-advanced-results__buttons\">\n                                    <button class=\"n7-btn n7-btn-xl mr-advanced-results__results-fallback-button\"\n                                    (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                        {{ lb.dataSource.pageConfig.fallback.button }}\n                                    </button>\n                                </div> -->\n                            </div>\n                        </ng-container>\n\n                        <!-- error: request problem -->\n                        <ng-container *ngSwitchCase=\"'ERROR'\">\n                            <p *ngIf=\"lb.dataSource.pageConfig?.ko?.text\" class=\"mr-advanced-results__feedback-text\">\n                                {{ lb.dataSource.pageConfig.ko.text }}\n                            </p>\n                            <!-- <div class=\"mr-advanced-results__buttons\">\n                                <button class=\"n7-btn n7-btn-xl mr-advanced-results__results-ko-button\"\n                                (click)=\"lb.eventHandler.emitInner('searchreset')\">\n                                    {{ lb.dataSource.pageConfig.ko.button }}\n                                </button>\n                            </div> -->\n                        </ng-container>\n                        \n                    </ng-container>\n                </main>               \n                \n                <n7-smart-pagination\n                    *ngIf=\"(layoutState.get$('results') | async) === 'SUCCESS'\"\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n\n            </div>\n        </div>\n    </section>\n</div>\n"
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            MainStateService,
            ConfigurationService,
            CommunicationService,
            MrLayoutStateService,
            MrResourceModalService,
            LayoutsConfigurationService])
    ], MrAdvancedResultsLayoutComponent);
    return MrAdvancedResultsLayoutComponent;
}(AbstractLayout));
export { MrAdvancedResultsLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSw2QkFBNkIsSUFBSSxNQUFNLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU0zRTtJQUFzRCxvREFBYztJQUdoRSwwQ0FDUSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsU0FBMkIsRUFDM0IsYUFBbUMsRUFDbkMsYUFBbUMsRUFDcEMsV0FBaUMsRUFDakMsWUFBb0MsRUFDM0Msb0JBQWlEO1FBUmpELFlBVUUsa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQzNFO1FBVk8sWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ3BDLGlCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUNqQyxrQkFBWSxHQUFaLFlBQVksQ0FBd0I7O0lBSTNDLENBQUM7SUFFUyxzREFBVyxHQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsbURBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUN0QyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsb0JBQW9CO1lBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFyQ2UsTUFBTTtnQkFDRSxjQUFjO2dCQUNuQixnQkFBZ0I7Z0JBQ1osb0JBQW9CO2dCQUNwQixvQkFBb0I7Z0JBQ3ZCLG9CQUFvQjtnQkFDbkIsc0JBQXNCO2dCQUNyQiwyQkFBMkI7O0lBWHhDLGdDQUFnQztRQUo1QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLG15TEFBNkM7U0FDOUMsQ0FBQzt5Q0FLa0IsTUFBTTtZQUNFLGNBQWM7WUFDbkIsZ0JBQWdCO1lBQ1osb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUN2QixvQkFBb0I7WUFDbkIsc0JBQXNCO1lBQ3JCLDJCQUEyQjtPQVh4QyxnQ0FBZ0MsQ0EwQzVDO0lBQUQsdUNBQUM7Q0FBQSxBQTFDRCxDQUFzRCxjQUFjLEdBMENuRTtTQTFDWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc291cmNlLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLWFkdmFuY2VkLXJlc3VsdHMtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkUmVzdWx0c0xheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIG1vZGFsU2VydmljZTogTXJSZXNvdXJjZU1vZGFsU2VydmljZSxcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgICkge1xuICAgICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNckFkdmFuY2VkUmVzdWx0c0xheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29uZmlnSWQ6IHRoaXMuY29uZmlnSWQsXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgICBhY3RpdmF0ZWRSb3V0ZTogdGhpcy5hY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgbGF5b3V0U3RhdGU6IHRoaXMubGF5b3V0U3RhdGUsXG4gICAgICAgIG1vZGFsU2VydmljZTogdGhpcy5tb2RhbFNlcnZpY2UsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgICB9O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgICAgLy8gYWRkIGxheW91dCBzdGF0ZXNcbiAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5hZGQoWydyZXN1bHRzJ10pO1xuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICB0aGlzLm9uRGVzdHJveSgpO1xuICAgIH1cbn1cbiJdfQ==