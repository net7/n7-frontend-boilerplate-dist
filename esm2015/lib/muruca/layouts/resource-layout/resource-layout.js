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
        template: "<div class=\"mr-resource mr-layout\" \r\n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- RESOURCE LAYOUT CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <ng-container *ngIf=\"lb.dataSource.pageConfig.sections as sections\">\r\n                <!-- Pass the list of blocks to render to the block template -->\r\n                <div class=\"mr-resource__top\">\r\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\r\n                </div>\r\n                <div class=\"mr-resource__content mr-side-margin\">\r\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</div>\r\n\r\n<ng-template #blocks let-list>\r\n    <ng-container *ngFor=\"let section of list\">\r\n        <section *ngIf=\"lb.widgets[section.id].ds.out$ | async\"\r\n        class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\r\n            <ng-container [ngSwitch]=\"section.type\">\r\n    \r\n                <!-- TABS -->\r\n                <ng-container *ngSwitchCase=\"'tabs'\">\r\n                    <ng-container *ngFor=\"let tab of lb.widgets[section.id].ds.out$ | async\">\r\n                        <n7-anchor-wrapper [data]=\"tab.anchor\" [classes]=\"tab.classes\">\r\n                            <span class=\"mr-resource__tabs-item\">{{ tab.label }}</span>\r\n                        </n7-anchor-wrapper>\r\n                    </ng-container>\r\n                </ng-container>\r\n    \r\n                <!-- INNER TITLE -->\r\n                <ng-container *ngSwitchCase=\"'title'\">\r\n                    <div class=\"mr-resource__title-content mr-side-margin\">\r\n                        <n7-inner-title [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets[section.id].emit\">\r\n                        </n7-inner-title>\r\n                    </div>\r\n                </ng-container>\r\n    \r\n                <!-- IMAGE VIEWER TOOLS -->\r\n                <ng-container *ngSwitchCase=\"'viewer'\">\r\n                    <n7-image-viewer \r\n                        [data]=\"lb.widgets[section.id].ds.out$ | async\" \r\n                        [emit]=\"lb.widgets[section.id].emit\">\r\n                    </n7-image-viewer>\r\n                    <n7-image-viewer-tools *ngIf=\"section.tools\" \r\n                        [data]=\"lb.widgets[section.id + '-tools'].ds.out$ | async\" \r\n                        [emit]=\"lb.widgets[section.id + '-tools'].emit\">\r\n                    </n7-image-viewer-tools>\r\n                </ng-container>\r\n                <!-- IMAGE VIEWER TOOLS -->\r\n    \r\n                <!-- METADATA VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'metadata'\">\r\n                    \r\n                    <div class=\"mr-content-block mr-content-block-metadata\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <mr-read-more [data]=\"section.readmore\">\r\n                                <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                                    [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-metadata-viewer>\r\n                            </mr-read-more>\r\n                        </div>\r\n                    </div>\r\n\r\n                </ng-container>\r\n    \r\n                <!-- COLLECTION -->\r\n                <ng-container *ngSwitchCase=\"'collection'\">\r\n                    <ng-container *ngIf=\"lb.widgets[section.id].ds.out$ | async as collection$\">\r\n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-content-block mr-content-block-collection\">\r\n                            <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                                {{ section.title }}\r\n                            </h3>\r\n                            <div class=\"mr-content-block__content {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\"\r\n                                    [data]=\"item\" [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n    \r\n                <!-- ITEM PREVIEW -->\r\n                <ng-container *ngSwitchCase=\"'preview'\">\r\n                    <div class=\"mr-content-block mr-content-block-item-preview\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <n7-item-preview [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">        \r\n                            </n7-item-preview>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n    \r\n                <!-- TEXT VIEWER -->\r\n                <ng-container *ngSwitchCase=\"'text-viewer'\">\r\n                  <div class=\"mr-content-block mr-content-block-text-viewer\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                          <n7-text-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">\r\n                          </n7-text-viewer>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                </ng-container>\r\n\r\n                <!-- MAP -->\r\n             <ng-container *ngSwitchCase=\"'map'\">\r\n                  <div class=\"mr-content-block mr-content-block-map\">\r\n                    <div class=\"mr-content-block__content\">\r\n                        <n7-map [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\"></n7-map>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n    \r\n                <!-- INFO BOX -->\r\n                <ng-container *ngSwitchCase=\"'info-box'\">\r\n                    <div class=\"mr-content-block mr-content-block-info-box\">\r\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\r\n                            {{ section.title }}\r\n                        </h3>\r\n                        <div class=\"mr-content-block__content\">\r\n                            <div class=\"info-box__mock\">info-box</div>    \r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n    \r\n                <!-- BREADCRUMBS -->\r\n                <ng-container *ngSwitchCase=\"'breadcrumbs'\">\r\n                    <n7-breadcrumbs [data]=\"lb.widgets[section.id].ds.out$ | async\">\r\n                    </n7-breadcrumbs>\r\n                </ng-container>\r\n\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n</ng-template>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsSUFBSSxNQUFNLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGNBQWMsRUFDZCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFcEQsTUFBTSxjQUFjLEdBQUc7SUFDckIsV0FBVyxFQUFFLGVBQWU7SUFDNUIsVUFBVSxFQUFFLGNBQWM7SUFDMUIsSUFBSSxFQUFFLFdBQVc7SUFDakIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsT0FBTyxFQUFFLGVBQWU7SUFDeEIsSUFBSSxFQUFFLGNBQWM7SUFDcEIsS0FBSyxFQUFFLGNBQWM7SUFDckIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsY0FBYyxFQUFFLG9CQUFvQjtJQUNwQyxJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLGFBQWEsRUFBRSxjQUFjO0lBQzdCLEdBQUcsRUFBRSxPQUFPO0NBQ2IsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUc7SUFDdkIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsY0FBYyxFQUFFLG9CQUFvQjtJQUNwQyxVQUFVLEVBQUUsY0FBYztDQUUzQixDQUFDO0FBTUYsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBMEIsU0FBUSxjQUFjO0lBRzNELFlBQ0Usb0JBQWlELEVBQ3pDLGNBQThCLEVBQzlCLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLFNBQTJCLEVBQzNCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZixXQUFpQyxFQUNqQyxZQUFvQztRQUUzQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFUNUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBd0I7SUFHN0MsQ0FBQztJQUVTLFdBQVc7UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1lBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN4RSxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ2hCLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFDekIsRUFBRSxFQUFFO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFO29CQUNGLE9BQU87b0JBQ1AsVUFBVSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUM7b0JBQ2hDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztnQkFDSCxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxFQUFFO29CQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzt3QkFDaEIsT0FBTzt3QkFDUCxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVE7d0JBQ2pCLFVBQVUsRUFBRSxjQUFjLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQzt3QkFDM0MsWUFBWSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUM7cUJBQ2hELENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFqRXlCLDJCQUEyQjtZQUN6QixjQUFjO1lBQ2Ysb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUN4QixnQkFBZ0I7WUFDcEIsY0FBYztZQUNiLE1BQU07WUFDRixvQkFBb0I7WUFDbkIsc0JBQXNCOztBQVpsQyx5QkFBeUI7SUFKckMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixnNFFBQXFDO0tBQ3RDLENBQUM7cUNBS3dCLDJCQUEyQjtRQUN6QixjQUFjO1FBQ2Ysb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUN4QixnQkFBZ0I7UUFDcEIsY0FBYztRQUNiLE1BQU07UUFDRixvQkFBb0I7UUFDbkIsc0JBQXNCO0dBWmxDLHlCQUF5QixDQXFFckM7U0FyRVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yUmVzb3VyY2VNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXNvdXJjZS1tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJSZXNvdXJjZUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3Jlc291cmNlLWxheW91dC5jb25maWcnO1xyXG5pbXBvcnQgeyBNckltYWdlVmlld2VyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXIuZWgnO1xyXG5pbXBvcnQgeyBNckltYWdlVmlld2VyVG9vbHNFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ltYWdlLXZpZXdlci10b29scy5laCc7XHJcbmltcG9ydCB7IE1yQ29sbGVjdGlvbkVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvY29sbGVjdGlvbi5laCc7XHJcbmltcG9ydCB7XHJcbiAgTXJCcmVhZGNydW1ic0RTLFxyXG4gIE1yQ29sbGVjdGlvbkRTLFxyXG4gIE1ySW1hZ2VWaWV3ZXJEUyxcclxuICBNckltYWdlVmlld2VyVG9vbHNEUyxcclxuICBNckluZm9Cb3hEUyxcclxuICBNcklubmVyVGl0bGVEUyxcclxuICBNckl0ZW1QcmV2aWV3RFMsXHJcbiAgTXJNZXRhZGF0YURTLFxyXG4gIE1yVGV4dFZpZXdlckRTLFxyXG4gIE1yUmVzb3VyY2VUYWJzRFMsXHJcbn0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0IHsgTXJNYXBEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9tYXAuZHMnO1xyXG5cclxuY29uc3QgREFUQVNPVVJDRV9NQVAgPSB7XHJcbiAgYnJlYWRjcnVtYnM6IE1yQnJlYWRjcnVtYnNEUyxcclxuICBjb2xsZWN0aW9uOiBNckNvbGxlY3Rpb25EUyxcclxuICBpbmZvOiBNckluZm9Cb3hEUyxcclxuICBtZXRhZGF0YTogTXJNZXRhZGF0YURTLFxyXG4gIHByZXZpZXc6IE1ySXRlbVByZXZpZXdEUyxcclxuICB0ZXh0OiBNclRleHRWaWV3ZXJEUyxcclxuICB0aXRsZTogTXJJbm5lclRpdGxlRFMsXHJcbiAgdmlld2VyOiBNckltYWdlVmlld2VyRFMsXHJcbiAgJ3ZpZXdlci10b29scyc6IE1ySW1hZ2VWaWV3ZXJUb29sc0RTLFxyXG4gIHRhYnM6IE1yUmVzb3VyY2VUYWJzRFMsXHJcbiAgJ3RleHQtdmlld2VyJzogTXJUZXh0Vmlld2VyRFMsXHJcbiAgbWFwOiBNck1hcERTXHJcbn07XHJcblxyXG5jb25zdCBFVkVOVEhBTkRMRVJfTUFQID0ge1xyXG4gIHZpZXdlcjogTXJJbWFnZVZpZXdlckVILFxyXG4gICd2aWV3ZXItdG9vbHMnOiBNckltYWdlVmlld2VyVG9vbHNFSCxcclxuICBjb2xsZWN0aW9uOiBNckNvbGxlY3Rpb25FSCxcclxuICAvLyBtYXA6IE1yTWFwRUhcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItcmVzb3VyY2UtbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVzb3VyY2UtbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHVibGljIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZSxcclxuICAgIHB1YmxpYyBtb2RhbFNlcnZpY2U6IE1yUmVzb3VyY2VNb2RhbFNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJSZXNvdXJjZUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXHJcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXHJcbiAgICAgIGxheW91dFN0YXRlOiB0aGlzLmxheW91dFN0YXRlLFxyXG4gICAgICBtb2RhbFNlcnZpY2U6IHRoaXMubW9kYWxTZXJ2aWNlLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxyXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcclxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlclxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLmxheW91dFN0YXRlLmFkZCgnY29udGVudCcpO1xyXG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcclxuICAgICAgdGhpcy5sb2FkV2lkZ2V0cygpO1xyXG4gICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBsb2FkV2lkZ2V0cygpIHtcclxuICAgIGNvbnN0IHsgdG9wLCBjb250ZW50IH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpLnNlY3Rpb25zO1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xyXG4gICAgdGhpcy53aWRnZXRzID0gW107XHJcbiAgICBpZiAoc2VjdGlvbnMpIHtcclxuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoe1xyXG4gICAgICAgIGlkLCB0eXBlLCBvcHRpb25zLCB0b29sc1xyXG4gICAgICB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xyXG4gICAgICAgICAgaWQsXHJcbiAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVBbdHlwZV0sXHJcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEVWRU5USEFORExFUl9NQVBbdHlwZV1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3ZpZXdlcicgJiYgdG9vbHMpIHtcclxuICAgICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICAgICAgaWQ6IGAke2lkfS10b29sc2AsXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW2Ake3R5cGV9LXRvb2xzYF0sXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUFtgJHt0eXBlfS10b29sc2BdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=