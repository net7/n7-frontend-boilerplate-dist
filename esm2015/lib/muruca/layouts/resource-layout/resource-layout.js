import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import { MrResourceModalService } from '../../services/resource-modal.service';
import { MrResourceLayoutConfig as config } from './resource-layout.config';
import { MrImageViewerEH } from '../../event-handlers/image-viewer.eh';
import { MrImageViewerToolsEH } from '../../event-handlers/image-viewer-tools.eh';
import { MrCollectionEH } from '../../event-handlers/collection.eh';
import { MrBreadcrumbsDS, MrCollectionDS, MrImageViewerDS, MrImageViewerToolsDS, MrInfoBoxDS, MrInnerTitleDS, MrItemPreviewDS, MrMetadataDS, MrTextViewerDS, MrResourceTabsDS, } from '../../data-sources';
import { MrMapDS } from '../../data-sources/map.ds';
const DATASOURCE_MAP = {
    breadcrumbs: MrBreadcrumbsDS,
    collection: MrCollectionDS,
    info: MrInfoBoxDS,
    metadata: MrMetadataDS,
    preview: MrItemPreviewDS,
    text: MrTextViewerDS,
    title: MrInnerTitleDS,
    viewer: MrImageViewerDS,
    'viewer-tools': MrImageViewerToolsDS,
    tabs: MrResourceTabsDS,
    'text-viewer': MrTextViewerDS,
    map: MrMapDS
};
const EVENTHANDLER_MAP = {
    viewer: MrImageViewerEH,
    'viewer-tools': MrImageViewerToolsEH,
    collection: MrCollectionEH,
};
let MrResourceLayoutComponent = class MrResourceLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route, router, layoutState, modalService) {
        super(layoutsConfiguration.get('MrResourceLayoutConfig') || config);
        this.activatedRoute = activatedRoute;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
        this.route = route;
        this.router = router;
        this.layoutState = layoutState;
        this.modalService = modalService;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            layoutState: this.layoutState,
            modalService: this.modalService,
            options: this.config.options || {},
            route: this.route,
            router: this.router
        };
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.layoutState.add('content');
            this.configId = data.configId;
            this.loadWidgets();
            this.onInit();
        });
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    loadWidgets() {
        const { top, content } = this.configuration.get(this.configId).sections;
        const sections = top.concat(content);
        this.widgets = [];
        if (sections) {
            sections.forEach(({ id, type, options, tools }) => {
                this.widgets.push({
                    id,
                    options,
                    dataSource: DATASOURCE_MAP[type],
                    eventHandler: EVENTHANDLER_MAP[type]
                });
                if (type === 'viewer' && tools) {
                    this.widgets.push({
                        options,
                        id: `${id}-tools`,
                        dataSource: DATASOURCE_MAP[`${type}-tools`],
                        eventHandler: EVENTHANDLER_MAP[`${type}-tools`]
                    });
                }
            });
        }
    }
};
MrResourceLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: ActivatedRoute },
    { type: Router },
    { type: MrLayoutStateService },
    { type: MrResourceModalService }
];
MrResourceLayoutComponent = __decorate([
    Component({
        selector: 'mr-resource-layout',
        template: "<div class=\"mr-resource mr-layout\" \n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\"\n     [ngClass]=\"{\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\n      }\">\n    <!-- RESOURCE LAYOUT CONTENT -->\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n        <!-- loading -->\n        <ng-container *ngSwitchCase=\"'LOADING'\">\n            <div class=\"mr-layout__loader\">\n                <n7-loader></n7-loader>\n            </div>\n        </ng-container>\n\n        <!-- error -->\n        <ng-container *ngSwitchCase=\"'ERROR'\">\n            <div class=\"mr-layout__error\">\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\n                <p>{{ lb.dataSource.errorDescription }}</p>\n            </div>\n        </ng-container>\n\n        <!-- success -->\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n            <ng-container *ngIf=\"lb.dataSource.pageConfig.sections as sections\">\n                <!-- Pass the list of blocks to render to the block template -->\n                <div class=\"mr-resource__top\">\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\n                </div>\n                <div class=\"mr-resource__content mr-side-margin\">\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>\n                </div>\n            </ng-container>\n        </ng-container>\n\n    </ng-container>\n</div>\n\n<ng-template #blocks let-list>\n    <ng-container *ngFor=\"let section of list\">\n        <section *ngIf=\"lb.widgets[section.id].ds.out$ | async\"\n        class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\n            <ng-container [ngSwitch]=\"section.type\">\n    \n                <!-- TABS -->\n                <ng-container *ngSwitchCase=\"'tabs'\">\n                    <ng-container *ngFor=\"let tab of lb.widgets[section.id].ds.out$ | async\">\n                        <n7-anchor-wrapper [data]=\"tab.anchor\" [classes]=\"tab.classes\">\n                            <span class=\"mr-resource__tabs-item\">{{ tab.label }}</span>\n                        </n7-anchor-wrapper>\n                    </ng-container>\n                </ng-container>\n    \n                <!-- INNER TITLE -->\n                <ng-container *ngSwitchCase=\"'title'\">\n                    <div class=\"mr-resource__title-content mr-side-margin\">\n                        <n7-inner-title [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                            [emit]=\"lb.widgets[section.id].emit\">\n                        </n7-inner-title>\n                    </div>\n                </ng-container>\n    \n                <!-- IMAGE VIEWER TOOLS -->\n                <ng-container *ngSwitchCase=\"'viewer'\">\n                    <n7-image-viewer \n                        [data]=\"lb.widgets[section.id].ds.out$ | async\" \n                        [emit]=\"lb.widgets[section.id].emit\">\n                    </n7-image-viewer>\n                    <n7-image-viewer-tools *ngIf=\"section.tools\" \n                        [data]=\"lb.widgets[section.id + '-tools'].ds.out$ | async\" \n                        [emit]=\"lb.widgets[section.id + '-tools'].emit\">\n                    </n7-image-viewer-tools>\n                </ng-container>\n                <!-- IMAGE VIEWER TOOLS -->\n    \n                <!-- METADATA VIEWER -->\n                <ng-container *ngSwitchCase=\"'metadata'\">\n                    \n                    <div class=\"mr-content-block mr-content-block-metadata\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                            <mr-read-more [data]=\"section.readmore\">\n                                <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                                    [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-metadata-viewer>\n                            </mr-read-more>\n                        </div>\n                    </div>\n\n                </ng-container>\n    \n                <!-- COLLECTION -->\n                <ng-container *ngSwitchCase=\"'collection'\">\n                    <ng-container *ngIf=\"lb.widgets[section.id].ds.out$ | async as collection$\">\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-content-block mr-content-block-collection\">\n                            <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                                {{ section.title }}\n                            </h3>\n                            <div class=\"mr-content-block__content {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\"\n                                    [data]=\"item\" [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n    \n                <!-- ITEM PREVIEW -->\n                <ng-container *ngSwitchCase=\"'preview'\">\n                    <div class=\"mr-content-block mr-content-block-item-preview\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                            <n7-item-preview [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">        \n                            </n7-item-preview>\n                        </div>\n                    </div>\n                </ng-container>\n    \n                <!-- TEXT VIEWER -->\n                <ng-container *ngSwitchCase=\"'text-viewer'\">\n                  <div class=\"mr-content-block mr-content-block-text-viewer\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                          <n7-text-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">\n                          </n7-text-viewer>\n                    </div>\n                  </div>\n                  \n                </ng-container>\n\n                <!-- MAP -->\n             <ng-container *ngSwitchCase=\"'map'\">\n                  <div class=\"mr-content-block mr-content-block-map\">\n                    <div class=\"mr-content-block__content\">\n                        <n7-map [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\"></n7-map>\n                    </div>\n                </div>\n            </ng-container>\n    \n                <!-- INFO BOX -->\n                <ng-container *ngSwitchCase=\"'info-box'\">\n                    <div class=\"mr-content-block mr-content-block-info-box\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                            <div class=\"info-box__mock\">info-box</div>    \n                        </div>\n                    </div>\n                </ng-container>\n    \n                <!-- BREADCRUMBS -->\n                <ng-container *ngSwitchCase=\"'breadcrumbs'\">\n                    <n7-breadcrumbs [data]=\"lb.widgets[section.id].ds.out$ | async\">\n                    </n7-breadcrumbs>\n                </ng-container>\n\n            </ng-container>\n        </section>\n    </ng-container>\n</ng-template>\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        ActivatedRoute,
        Router,
        MrLayoutStateService,
        MrResourceModalService])
], MrResourceLayoutComponent);
export { MrResourceLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsSUFBSSxNQUFNLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGNBQWMsRUFDZCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxv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bmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc291cmNlLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJSZXNvdXJjZUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3Jlc291cmNlLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgTXJJbWFnZVZpZXdlckVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvaW1hZ2Utdmlld2VyLmVoJztcbmltcG9ydCB7IE1ySW1hZ2VWaWV3ZXJUb29sc0VIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvaW1hZ2Utdmlld2VyLXRvb2xzLmVoJztcbmltcG9ydCB7IE1yQ29sbGVjdGlvbkVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvY29sbGVjdGlvbi5laCc7XG5pbXBvcnQge1xuICBNckJyZWFkY3J1bWJzRFMsXG4gIE1yQ29sbGVjdGlvbkRTLFxuICBNckltYWdlVmlld2VyRFMsXG4gIE1ySW1hZ2VWaWV3ZXJUb29sc0RTLFxuICBNckluZm9Cb3hEUyxcbiAgTXJJbm5lclRpdGxlRFMsXG4gIE1ySXRlbVByZXZpZXdEUyxcbiAgTXJNZXRhZGF0YURTLFxuICBNclRleHRWaWV3ZXJEUyxcbiAgTXJSZXNvdXJjZVRhYnNEUyxcbn0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCB7IE1yTWFwRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvbWFwLmRzJztcblxuY29uc3QgREFUQVNPVVJDRV9NQVAgPSB7XG4gIGJyZWFkY3J1bWJzOiBNckJyZWFkY3J1bWJzRFMsXG4gIGNvbGxlY3Rpb246IE1yQ29sbGVjdGlvbkRTLFxuICBpbmZvOiBNckluZm9Cb3hEUyxcbiAgbWV0YWRhdGE6IE1yTWV0YWRhdGFEUyxcbiAgcHJldmlldzogTXJJdGVtUHJldmlld0RTLFxuICB0ZXh0OiBNclRleHRWaWV3ZXJEUyxcbiAgdGl0bGU6IE1ySW5uZXJUaXRsZURTLFxuICB2aWV3ZXI6IE1ySW1hZ2VWaWV3ZXJEUyxcbiAgJ3ZpZXdlci10b29scyc6IE1ySW1hZ2VWaWV3ZXJUb29sc0RTLFxuICB0YWJzOiBNclJlc291cmNlVGFic0RTLFxuICAndGV4dC12aWV3ZXInOiBNclRleHRWaWV3ZXJEUyxcbiAgbWFwOiBNck1hcERTXG59O1xuXG5jb25zdCBFVkVOVEhBTkRMRVJfTUFQID0ge1xuICB2aWV3ZXI6IE1ySW1hZ2VWaWV3ZXJFSCxcbiAgJ3ZpZXdlci10b29scyc6IE1ySW1hZ2VWaWV3ZXJUb29sc0VILFxuICBjb2xsZWN0aW9uOiBNckNvbGxlY3Rpb25FSCxcbiAgLy8gbWFwOiBNck1hcEVIXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1yZXNvdXJjZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzb3VyY2UtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNclJlc291cmNlTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIG1vZGFsU2VydmljZTogTXJSZXNvdXJjZU1vZGFsU2VydmljZVxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yUmVzb3VyY2VMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcbiAgICAgIG1vZGFsU2VydmljZTogdGhpcy5tb2RhbFNlcnZpY2UsXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKCdjb250ZW50Jyk7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIHRoaXMubG9hZFdpZGdldHMoKTtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgbG9hZFdpZGdldHMoKSB7XG4gICAgY29uc3QgeyB0b3AsIGNvbnRlbnQgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkuc2VjdGlvbnM7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgIGlmIChzZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoe1xuICAgICAgICBpZCwgdHlwZSwgb3B0aW9ucywgdG9vbHNcbiAgICAgIH0pID0+IHtcbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVBbdHlwZV0sXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQW3R5cGVdXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3ZpZXdlcicgJiYgdG9vbHMpIHtcbiAgICAgICAgICB0aGlzLndpZGdldHMucHVzaCh7XG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgaWQ6IGAke2lkfS10b29sc2AsXG4gICAgICAgICAgICBkYXRhU291cmNlOiBEQVRBU09VUkNFX01BUFtgJHt0eXBlfS10b29sc2BdLFxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQW2Ake3R5cGV9LXRvb2xzYF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=