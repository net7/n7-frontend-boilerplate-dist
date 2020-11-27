import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import { MrResourceLayoutConfig as config } from './resource-layout.config';
import { MrImageViewerEH } from '../../event-handlers/image-viewer.eh';
import { MrBreadcrumbsDS, MrCollectionDS, MrImageViewerDS, MrInfoBoxDS, MrInnerTitleDS, MrItemPreviewDS, MrMetadataDS, MrTextViewerDS, MrResourceTabsDS, } from '../../data-sources';
const DATASOURCE_MAP = {
    breadcrumbs: MrBreadcrumbsDS,
    collection: MrCollectionDS,
    info: MrInfoBoxDS,
    metadata: MrMetadataDS,
    preview: MrItemPreviewDS,
    text: MrTextViewerDS,
    title: MrInnerTitleDS,
    viewer: MrImageViewerDS,
    tabs: MrResourceTabsDS
};
const EVENTHANDLER_MAP = {
    viewer: MrImageViewerEH,
};
let MrResourceLayoutComponent = class MrResourceLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route, layoutState) {
        super(layoutsConfiguration.get('MrResourceLayoutConfig') || config);
        this.activatedRoute = activatedRoute;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
        this.route = route;
        this.layoutState = layoutState;
    }
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            layoutState: this.layoutState,
            options: this.config.options || {},
            route: this.route
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
            sections.forEach(({ id, type, options }) => {
                this.widgets.push({
                    id,
                    options,
                    dataSource: DATASOURCE_MAP[type],
                    eventHandler: EVENTHANDLER_MAP[type]
                });
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
    { type: MrLayoutStateService }
];
MrResourceLayoutComponent = __decorate([
    Component({
        selector: 'mr-resource-layout',
        template: "<div class=\"mr-resource mr-layout\" \n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\"\n     [ngClass]=\"{\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\n      }\">\n    <!-- RESOURCE LAYOUT CONTENT -->\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n        <!-- loading -->\n        <ng-container *ngSwitchCase=\"'LOADING'\">\n            <div class=\"mr-layout__loader\">\n                <n7-loader></n7-loader>\n            </div>\n        </ng-container>\n\n        <!-- error -->\n        <ng-container *ngSwitchCase=\"'ERROR'\">\n            <div class=\"mr-layout__error\">\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\n                <p>{{ lb.dataSource.errorDescription }}</p>\n            </div>\n        </ng-container>\n\n        <!-- success -->\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n            <ng-container *ngIf=\"lb.dataSource.pageConfig.sections as sections\">\n                <!-- Pass the list of blocks to render to the block template -->\n                <div class=\"mr-resource__top\">\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\n                </div>\n                <div class=\"mr-resource__content mr-side-margin\">\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>\n                </div>\n            </ng-container>\n        </ng-container>\n\n    </ng-container>\n</div>\n\n<ng-template #blocks let-list>\n    <ng-container *ngFor=\"let section of list\">\n        <section *ngIf=\"lb.widgets[section.id].ds.out$ | async\"\n        class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\n            <ng-container [ngSwitch]=\"section.type\">\n    \n                <!-- TABS -->\n                <ng-container *ngSwitchCase=\"'tabs'\">\n                    <ng-container *ngFor=\"let tab of lb.widgets[section.id].ds.out$ | async\">\n                        <n7-anchor-wrapper [data]=\"tab.anchor\" [classes]=\"tab.classes\">\n                            <span class=\"mr-resource__tabs-item\">{{ tab.label }}</span>\n                        </n7-anchor-wrapper>\n                    </ng-container>\n                </ng-container>\n    \n                <!-- INNER TITLE -->\n                <ng-container *ngSwitchCase=\"'title'\">\n                    <div class=\"mr-resource__title-content mr-side-margin\">\n                        <n7-inner-title [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                            [emit]=\"lb.widgets[section.id].emit\">\n                        </n7-inner-title>\n                    </div>\n                </ng-container>\n    \n                <!-- IMAGE VIEWER -->\n                <ng-container *ngSwitchCase=\"'viewer'\">\n                    <n7-image-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">\n                    </n7-image-viewer>\n                </ng-container>\n    \n                <!-- METADATA VIEWER -->\n                <ng-container *ngSwitchCase=\"'metadata'\">\n                    <div class=\"mr-resource__metadata-content\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-resource__section-title mr-resource__metadata-title\">\n                            {{ section.title }}\n                        </h3>\n                        <mr-read-more [data]=\"section.readmore\">\n                            <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                                [emit]=\"lb.widgets[section.id].emit\">\n                            </n7-metadata-viewer>\n                        </mr-read-more>\n                    </div>\n                </ng-container>\n    \n                <!-- COLLECTION -->\n                <ng-container *ngSwitchCase=\"'collection'\">\n                    <ng-container *ngIf=\"lb.widgets[section.id].ds.out$ | async as collection$\">\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-resource__collection-content\">\n                            <h3 *ngIf=\"section.title\" class=\"mr-resource__section-title\">\n                                {{ section.title }}\n                            </h3>\n                            <div class=\"mr-resource__collection-grid {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\"\n                                    [data]=\"item\" [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n    \n                <!-- ITEM PREVIEW -->\n                <ng-container *ngSwitchCase=\"'preview'\">\n                    <h3 *ngIf=\"section.title\" class=\"mr-resource__section-title mr-resource__preview-title\">\n                        {{ section.title }}\n                    </h3>\n                    <n7-item-preview [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">\n                    </n7-item-preview>\n                </ng-container>\n    \n                <!-- TEXT VIEWER -->\n                <ng-container *ngSwitchCase=\"'text-viewer'\">\n                    <h3 *ngIf=\"section.title\" class=\"mr-resource__section-title mr-resource__text-viewer-title\">\n                        {{ section.title }}\n                    </h3>\n                    <div class=\"text-viewer__mock\">n7-text-viewer</div>\n                </ng-container>\n    \n                <!-- INFO BOX -->\n                <ng-container *ngSwitchCase=\"'info-box'\">\n                    <h3 *ngIf=\"section.title\" class=\"mr-resource__section-title mr-resource__info-box-title\">\n                        {{ section.title }}\n                    </h3>\n                    <div class=\"info-box__mock\">info-box</div>\n                </ng-container>\n    \n                <!-- BREADCRUMBS -->\n                <ng-container *ngSwitchCase=\"'breadcrumbs'\">\n                    <n7-breadcrumbs [data]=\"lb.widgets[section.id].ds.out$ | async\">\n                    </n7-breadcrumbs>\n                </ng-container>\n            </ng-container>\n        </section>\n    </ng-container>\n</ng-template>\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        ActivatedRoute,
        ConfigurationService,
        CommunicationService,
        MainStateService,
        ActivatedRoute,
        MrLayoutStateService])
], MrResourceLayoutComponent);
export { MrResourceLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixJQUFJLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGNBQWMsRUFDZCxlQUFlLEVBQ2YsV0FBVyxFQUNYLGNBQWMsRUFDZCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixNQUFNLGNBQWMsR0FBRztJQUNyQixXQUFXLEVBQUUsZUFBZTtJQUM1QixVQUFVLEVBQUUsY0FBYztJQUMxQixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUUsWUFBWTtJQUN0QixPQUFPLEVBQUUsZUFBZTtJQUN4QixJQUFJLEVBQUUsY0FB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ZixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3hCLGdCQUFnQjtRQUNwQixjQUFjO1FBQ1Qsb0JBQW9CO0dBVi9CLHlCQUF5QixDQXVEckM7U0F2RFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yUmVzb3VyY2VMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9yZXNvdXJjZS1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IE1ySW1hZ2VWaWV3ZXJFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ltYWdlLXZpZXdlci5laCc7XG5pbXBvcnQge1xuICBNckJyZWFkY3J1bWJzRFMsXG4gIE1yQ29sbGVjdGlvbkRTLFxuICBNckltYWdlVmlld2VyRFMsXG4gIE1ySW5mb0JveERTLFxuICBNcklubmVyVGl0bGVEUyxcbiAgTXJJdGVtUHJldmlld0RTLFxuICBNck1ldGFkYXRhRFMsXG4gIE1yVGV4dFZpZXdlckRTLFxuICBNclJlc291cmNlVGFic0RTLFxufSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuXG5jb25zdCBEQVRBU09VUkNFX01BUCA9IHtcbiAgYnJlYWRjcnVtYnM6IE1yQnJlYWRjcnVtYnNEUyxcbiAgY29sbGVjdGlvbjogTXJDb2xsZWN0aW9uRFMsXG4gIGluZm86IE1ySW5mb0JveERTLFxuICBtZXRhZGF0YTogTXJNZXRhZGF0YURTLFxuICBwcmV2aWV3OiBNckl0ZW1QcmV2aWV3RFMsXG4gIHRleHQ6IE1yVGV4dFZpZXdlckRTLFxuICB0aXRsZTogTXJJbm5lclRpdGxlRFMsXG4gIHZpZXdlcjogTXJJbWFnZVZpZXdlckRTLFxuICB0YWJzOiBNclJlc291cmNlVGFic0RTXG59O1xuXG5jb25zdCBFVkVOVEhBTkRMRVJfTUFQID0ge1xuICB2aWV3ZXI6IE1ySW1hZ2VWaWV3ZXJFSCxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXJlc291cmNlLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNvdXJjZS1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yUmVzb3VyY2VMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJSZXNvdXJjZUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIGxheW91dFN0YXRlOiB0aGlzLmxheW91dFN0YXRlLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKCdjb250ZW50Jyk7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIHRoaXMubG9hZFdpZGdldHMoKTtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgbG9hZFdpZGdldHMoKSB7XG4gICAgY29uc3QgeyB0b3AsIGNvbnRlbnQgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkuc2VjdGlvbnM7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgIGlmIChzZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCwgdHlwZSwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW3R5cGVdLFxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUFt0eXBlXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19