import { __decorate, __extends, __metadata } from "tslib";
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
import { MrCollectionEH } from '../../event-handlers/collection.eh';
import { MrBreadcrumbsDS, MrCollectionDS, MrImageViewerDS, MrInfoBoxDS, MrInnerTitleDS, MrItemPreviewDS, MrMetadataDS, MrTextViewerDS, MrResourceTabsDS, } from '../../data-sources';
var DATASOURCE_MAP = {
    breadcrumbs: MrBreadcrumbsDS,
    collection: MrCollectionDS,
    info: MrInfoBoxDS,
    metadata: MrMetadataDS,
    preview: MrItemPreviewDS,
    text: MrTextViewerDS,
    title: MrInnerTitleDS,
    viewer: MrImageViewerDS,
    tabs: MrResourceTabsDS,
    'text-viewer': MrTextViewerDS
};
var EVENTHANDLER_MAP = {
    viewer: MrImageViewerEH,
    collection: MrCollectionEH,
};
var MrResourceLayoutComponent = /** @class */ (function (_super) {
    __extends(MrResourceLayoutComponent, _super);
    function MrResourceLayoutComponent(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route, router, layoutState, modalService) {
        var _this = _super.call(this, layoutsConfiguration.get('MrResourceLayoutConfig') || config) || this;
        _this.activatedRoute = activatedRoute;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.mainState = mainState;
        _this.route = route;
        _this.router = router;
        _this.layoutState = layoutState;
        _this.modalService = modalService;
        return _this;
    }
    MrResourceLayoutComponent.prototype.initPayload = function () {
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
    };
    MrResourceLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.layoutState.add('content');
            _this.configId = data.configId;
            _this.loadWidgets();
            _this.onInit();
        });
    };
    MrResourceLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    MrResourceLayoutComponent.prototype.loadWidgets = function () {
        var _this = this;
        var _a = this.configuration.get(this.configId).sections, top = _a.top, content = _a.content;
        var sections = top.concat(content);
        this.widgets = [];
        if (sections) {
            sections.forEach(function (_a) {
                var id = _a.id, type = _a.type, options = _a.options;
                _this.widgets.push({
                    id: id,
                    options: options,
                    dataSource: DATASOURCE_MAP[type],
                    eventHandler: EVENTHANDLER_MAP[type]
                });
            });
        }
    };
    MrResourceLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService },
        { type: ActivatedRoute },
        { type: ConfigurationService },
        { type: CommunicationService },
        { type: MainStateService },
        { type: ActivatedRoute },
        { type: Router },
        { type: MrLayoutStateService },
        { type: MrResourceModalService }
    ]; };
    MrResourceLayoutComponent = __decorate([
        Component({
            selector: 'mr-resource-layout',
            template: "<div class=\"mr-resource mr-layout\" \n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\"\n     [ngClass]=\"{\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\n      }\">\n    <!-- RESOURCE LAYOUT CONTENT -->\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n        <!-- loading -->\n        <ng-container *ngSwitchCase=\"'LOADING'\">\n            <div class=\"mr-layout__loader\">\n                <n7-loader></n7-loader>\n            </div>\n        </ng-container>\n\n        <!-- error -->\n        <ng-container *ngSwitchCase=\"'ERROR'\">\n            <div class=\"mr-layout__error\">\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\n                <p>{{ lb.dataSource.errorDescription }}</p>\n            </div>\n        </ng-container>\n\n        <!-- success -->\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n            <ng-container *ngIf=\"lb.dataSource.pageConfig.sections as sections\">\n                <!-- Pass the list of blocks to render to the block template -->\n                <div class=\"mr-resource__top\">\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\n                </div>\n                <div class=\"mr-resource__content mr-side-margin\">\n                    <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>\n                </div>\n            </ng-container>\n        </ng-container>\n\n    </ng-container>\n</div>\n\n<ng-template #blocks let-list>\n    <ng-container *ngFor=\"let section of list\">\n        <section *ngIf=\"lb.widgets[section.id].ds.out$ | async\"\n        class=\"{{ 'mr-resource__section mr-resource__' + section.type }}\">\n            <ng-container [ngSwitch]=\"section.type\">\n    \n                <!-- TABS -->\n                <ng-container *ngSwitchCase=\"'tabs'\">\n                    <ng-container *ngFor=\"let tab of lb.widgets[section.id].ds.out$ | async\">\n                        <n7-anchor-wrapper [data]=\"tab.anchor\" [classes]=\"tab.classes\">\n                            <span class=\"mr-resource__tabs-item\">{{ tab.label }}</span>\n                        </n7-anchor-wrapper>\n                    </ng-container>\n                </ng-container>\n    \n                <!-- INNER TITLE -->\n                <ng-container *ngSwitchCase=\"'title'\">\n                    <div class=\"mr-resource__title-content mr-side-margin\">\n                        <n7-inner-title [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                            [emit]=\"lb.widgets[section.id].emit\">\n                        </n7-inner-title>\n                    </div>\n                </ng-container>\n    \n                <!-- IMAGE VIEWER -->\n                <ng-container *ngSwitchCase=\"'viewer'\">\n                    <n7-image-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">\n                    </n7-image-viewer>\n                </ng-container>\n    \n                <!-- METADATA VIEWER -->\n                <ng-container *ngSwitchCase=\"'metadata'\">\n                    \n                    <div class=\"mr-content-block mr-content-block-metadata\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                            <mr-read-more [data]=\"section.readmore\">\n                                <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                                    [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-metadata-viewer>\n                            </mr-read-more>\n                        </div>\n                    </div>\n\n                </ng-container>\n    \n                <!-- COLLECTION -->\n                <ng-container *ngSwitchCase=\"'collection'\">\n                    <ng-container *ngIf=\"lb.widgets[section.id].ds.out$ | async as collection$\">\n                        \n                        <div *ngIf=\"collection$.items?.length > 0\" class=\"mr-content-block mr-content-block-collection\">\n                            <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                                {{ section.title }}\n                            </h3>\n                            <div class=\"mr-content-block__content {{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                                <n7-item-preview *ngFor=\"let item of collection$?.items\"\n                                    [data]=\"item\" [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n\n                    </ng-container>\n                </ng-container>\n    \n                <!-- ITEM PREVIEW -->\n                <ng-container *ngSwitchCase=\"'preview'\">\n                    <div class=\"mr-content-block mr-content-block-item-preview\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                            <n7-item-preview [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">        \n                            </n7-item-preview>\n                        </div>\n                    </div>\n                </ng-container>\n    \n                <!-- TEXT VIEWER -->\n                <ng-container *ngSwitchCase=\"'text-viewer'\">\n                  <div class=\"mr-content-block mr-content-block-text-viewer\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                          <n7-text-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\" [emit]=\"lb.widgets[section.id].emit\">\n                          </n7-text-viewer>\n                    </div>\n                  </div>\n                  \n                </ng-container>\n    \n                <!-- INFO BOX -->\n                <ng-container *ngSwitchCase=\"'info-box'\">\n                    <div class=\"mr-content-block mr-content-block-info-box\">\n                        <h3 *ngIf=\"section.title\" class=\"mr-content-block__title\">\n                            {{ section.title }}\n                        </h3>\n                        <div class=\"mr-content-block__content\">\n                            <div class=\"info-box__mock\">info-box</div>    \n                        </div>\n                    </div>\n                </ng-container>\n    \n                <!-- BREADCRUMBS -->\n                <ng-container *ngSwitchCase=\"'breadcrumbs'\">\n                    <n7-breadcrumbs [data]=\"lb.widgets[section.id].ds.out$ | async\">\n                    </n7-breadcrumbs>\n                </ng-container>\n\n            </ng-container>\n        </section>\n    </ng-container>\n</ng-template>\n"
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
    return MrResourceLayoutComponent;
}(AbstractLayout));
export { MrResourceLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsSUFBSSxNQUFNLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGVBQWUsRUFDZixXQUFXLEVBQ1gsY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEVBQ1osY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLElBQU0sY0FBYyxHQUFHO0lBQ3JCLFdBQVcsRUFBRSxlQUFlO0lBQzVC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Q0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQXREdUIsMkJBQTJCO2dCQUN6QixjQUFjO2dCQUNmLG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUN4QixnQkFBZ0I7Z0JBQ3BCLGNBQWM7Z0JBQ2IsTUFBTTtnQkFDRixvQkFBb0I7Z0JBQ25CLHNCQUFzQjs7SUFabEMseUJBQXlCO1FBSnJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsNnhPQUFxQztTQUN0QyxDQUFDO3lDQUt3QiwyQkFBMkI7WUFDekIsY0FBYztZQUNmLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDeEIsZ0JBQWdCO1lBQ3BCLGNBQWM7WUFDYixNQUFNO1lBQ0Ysb0JBQW9CO1lBQ25CLHNCQUFzQjtPQVpsQyx5QkFBeUIsQ0EyRHJDO0lBQUQsZ0NBQUM7Q0FBQSxBQTNERCxDQUErQyxjQUFjLEdBMkQ1RDtTQTNEWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNclJlc291cmNlTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzb3VyY2UtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBNclJlc291cmNlTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vcmVzb3VyY2UtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBNckltYWdlVmlld2VyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXIuZWgnO1xuaW1wb3J0IHsgTXJDb2xsZWN0aW9uRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9jb2xsZWN0aW9uLmVoJztcbmltcG9ydCB7XG4gIE1yQnJlYWRjcnVtYnNEUyxcbiAgTXJDb2xsZWN0aW9uRFMsXG4gIE1ySW1hZ2VWaWV3ZXJEUyxcbiAgTXJJbmZvQm94RFMsXG4gIE1ySW5uZXJUaXRsZURTLFxuICBNckl0ZW1QcmV2aWV3RFMsXG4gIE1yTWV0YWRhdGFEUyxcbiAgTXJUZXh0Vmlld2VyRFMsXG4gIE1yUmVzb3VyY2VUYWJzRFMsXG59IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICBicmVhZGNydW1iczogTXJCcmVhZGNydW1ic0RTLFxuICBjb2xsZWN0aW9uOiBNckNvbGxlY3Rpb25EUyxcbiAgaW5mbzogTXJJbmZvQm94RFMsXG4gIG1ldGFkYXRhOiBNck1ldGFkYXRhRFMsXG4gIHByZXZpZXc6IE1ySXRlbVByZXZpZXdEUyxcbiAgdGV4dDogTXJUZXh0Vmlld2VyRFMsXG4gIHRpdGxlOiBNcklubmVyVGl0bGVEUyxcbiAgdmlld2VyOiBNckltYWdlVmlld2VyRFMsXG4gIHRhYnM6IE1yUmVzb3VyY2VUYWJzRFMsXG4gICd0ZXh0LXZpZXdlcic6IE1yVGV4dFZpZXdlckRTXG59O1xuXG5jb25zdCBFVkVOVEhBTkRMRVJfTUFQID0ge1xuICB2aWV3ZXI6IE1ySW1hZ2VWaWV3ZXJFSCxcbiAgY29sbGVjdGlvbjogTXJDb2xsZWN0aW9uRUgsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1yZXNvdXJjZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzb3VyY2UtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNclJlc291cmNlTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIG1vZGFsU2VydmljZTogTXJSZXNvdXJjZU1vZGFsU2VydmljZVxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yUmVzb3VyY2VMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcbiAgICAgIG1vZGFsU2VydmljZTogdGhpcy5tb2RhbFNlcnZpY2UsXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuYWRkKCdjb250ZW50Jyk7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIHRoaXMubG9hZFdpZGdldHMoKTtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgbG9hZFdpZGdldHMoKSB7XG4gICAgY29uc3QgeyB0b3AsIGNvbnRlbnQgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkuc2VjdGlvbnM7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSB0b3AuY29uY2F0KGNvbnRlbnQpO1xuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgIGlmIChzZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCwgdHlwZSwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW3R5cGVdLFxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUFt0eXBlXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19