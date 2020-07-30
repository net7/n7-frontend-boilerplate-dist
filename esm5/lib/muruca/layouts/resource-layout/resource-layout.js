import { __decorate, __extends, __metadata } from "tslib";
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
import { MrBreadcrumbsDS, MrCollectionDS, MrImageViewerDS, MrInfoBoxDS, MrInnerTitleDS, MrItemPreviewDS, MrMetadataDS, MrTextViewerDS, } from '../../data-sources';
var ɵ0 = function (d) { return d; };
var DATASOURCE_MAP = {
    breadcrumbs: MrBreadcrumbsDS,
    collection: MrCollectionDS,
    info: MrInfoBoxDS,
    metadata: MrMetadataDS,
    preview: MrItemPreviewDS,
    text: MrTextViewerDS,
    title: MrInnerTitleDS,
    viewer: MrImageViewerDS,
    tabs: ɵ0
};
var EVENTHANDLER_MAP = {
    viewer: MrImageViewerEH,
};
var MrResourceLayoutComponent = /** @class */ (function (_super) {
    __extends(MrResourceLayoutComponent, _super);
    function MrResourceLayoutComponent(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route, layoutState) {
        var _this = _super.call(this, layoutsConfiguration.get('MrResourceLayoutConfig') || config) || this;
        _this.activatedRoute = activatedRoute;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.mainState = mainState;
        _this.route = route;
        _this.layoutState = layoutState;
        return _this;
    }
    MrResourceLayoutComponent.prototype.initPayload = function () {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            layoutState: this.layoutState,
            options: this.config.options || {},
            route: this.route
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
        { type: MrLayoutStateService }
    ]; };
    MrResourceLayoutComponent = __decorate([
        Component({
            selector: 'mr-resource-layout',
            template: "<div class=\"mr-resource mr-layout\"\n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\">\n  <!-- RESOURCE LAYOUT CONTENT -->\n  <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n    <!-- loading -->\n    <ng-container *ngSwitchCase=\"'LOADING'\">\n      loading...\n    </ng-container>\n\n    <!-- error -->\n    <ng-container *ngSwitchCase=\"'ERROR'\">\n      error!\n    </ng-container>\n\n    <!-- success -->\n    <ng-container *ngSwitchCase=\"'SUCCESS'\">\n      <ng-container *ngIf=\"lb.dataSource.pageConfig.sections as sections\">\n        <!-- Pass the list of blocks to render to the block template -->\n        <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.top }\"></ng-container>\n        <div class=\"mr-resource__content\">\n          <ng-container *ngTemplateOutlet=\"blocks; context: { $implicit: sections.content }\"></ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n\n  </ng-container>\n</div>\n\n\n\n\n<ng-template #blocks\n             let-list>\n  <section *ngFor=\"let section of list\"\n           class=\"{{ 'mr-layout__' + section.type }}\">\n    <ng-container [ngSwitch]=\"section.type\">\n      <!-- TABS -->\n      <!-- TABS -->\n      <ng-container *ngSwitchCase=\"'tabs'\">\n        <ng-container *ngFor=\"let tab of lb.dataSource.tabConfig\">\n          <n7-anchor-wrapper [data]=\"{ href: '/opera' + '/' + lb.dataSource.slug + '/' + tab.id }\">\n            <span class=\"n7-btn n7-btn-light\">{{tab.label}}</span>\n          </n7-anchor-wrapper>\n        </ng-container>\n      </ng-container>\n\n      <!-- INNER TITLE -->\n      <div class=\"mr-resource__title\">\n        <ng-container *ngSwitchCase=\"'title'\">\n          <n7-inner-title [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                          [emit]=\"lb.widgets[section.id].emit\">\n          </n7-inner-title>\n        </ng-container>\n      </div>\n\n      <!-- IMAGE VIEWER -->\n      <ng-container *ngSwitchCase=\"'viewer'\">\n        <n7-image-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                         [emit]=\"lb.widgets[section.id].emit\">\n        </n7-image-viewer>\n      </ng-container>\n\n      <!-- METADATA VIEWER -->\n      <ng-container *ngSwitchCase=\"'metadata'\">\n        <mr-read-more [data]=\"{ limit: 130 }\">\n          <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                              [emit]=\"lb.widgets[section.id].emit\">\n          </n7-metadata-viewer>\n        </mr-read-more>\n      </ng-container>\n\n      <!-- COLLECTION -->\n      <ng-container *ngSwitchCase=\"'collection'\">\n        <div class=\"mr-layout__maxwidth mr-items-preview\">\n          <n7-inner-title [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\n                          [emit]=\"lb.widgets[section.id].emit\">\n          </n7-inner-title>\n          <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n            <n7-item-preview *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\n                             [data]=\"item\"\n                             [emit]=\"lb.widgets[section.id].emit\">\n            </n7-item-preview>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- ITEM PREVIEW -->\n      <ng-container *ngSwitchCase=\"'preview'\">\n        <n7-item-preview [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                         [emit]=\"lb.widgets[section.id].emit\">\n        </n7-item-preview>\n      </ng-container>\n\n      <!-- TEXT VIEWER -->\n      <ng-container *ngSwitchCase=\"'text'\">\n        <div class=\"text-viewer__mock\">n7-text-viewer</div>\n      </ng-container>\n\n      <!-- INFO BOX -->\n      <ng-container *ngSwitchCase=\"'info'\">\n        <div class=\"info-box__mock\">info-box</div>\n      </ng-container>\n\n      <!-- BREADCRUMBS -->\n      <ng-container *ngSwitchCase=\"'breadcrumbs'\">\n        <n7-breadcrumbs [data]=\"{\n            items: [{\n              label: 'Home',\n              anchor: { href: '/home' }\n            }, {\n              label: 'Opere',\n              anchor: { href: '/opere' }\n            }, {\n              label: 'Opere giovanili',\n              anchor: { href: '/opere-giovanili' }\n            }, {\n              label: 'Canzoniere',\n              anchor: { href: '/canzoniere' }\n            }, {\n              label: 'Canzoniere (Rerum vulgarium fragmenta)',\n              anchor: { href: '/canzoniere/rerum-vulgarium-fragmenta' }\n            }]\n          }\">\n        </n7-breadcrumbs>\n      </ng-container>\n    </ng-container>\n  </section>\n</ng-template>\n"
        }),
        __metadata("design:paramtypes", [LayoutsConfigurationService,
            ActivatedRoute,
            ConfigurationService,
            CommunicationService,
            MainStateService,
            ActivatedRoute,
            MrLayoutStateService])
    ], MrResourceLayoutComponent);
    return MrResourceLayoutComponent;
}(AbstractLayout));
export { MrResourceLayoutComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixJQUFJLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGNBQWMsRUFDZCxlQUFlLEVBQ2YsV0FBVyxFQUNYLGNBQWMsRUFDZCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGNBQWMsR0FDZixNQUFNLG9CQUFvQixDQUFDO1NBV3BCLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUM7QUFUaEIsSUFBTSxjQUFjLEdBQUc7SUFDckIsV0FBVyxFQUFFLGVBQWU7SUFDNUIsVUFBVSxFQUFFLGNBQWM7SUFDMUIsSUFBSSxFQUFFLFdBQVc7SUFDakIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsT0FBTyxF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Z0JBQWdCO1lBQ3BCLGNBQWM7WUFDVCxvQkFBb0I7T0FWL0IseUJBQXlCLENBdURyQztJQUFELGdDQUFDO0NBQUEsQUF2REQsQ0FBK0MsY0FBYyxHQXVENUQ7U0F2RFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yUmVzb3VyY2VMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9yZXNvdXJjZS1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IE1ySW1hZ2VWaWV3ZXJFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2ltYWdlLXZpZXdlci5laCc7XG5pbXBvcnQge1xuICBNckJyZWFkY3J1bWJzRFMsXG4gIE1yQ29sbGVjdGlvbkRTLFxuICBNckltYWdlVmlld2VyRFMsXG4gIE1ySW5mb0JveERTLFxuICBNcklubmVyVGl0bGVEUyxcbiAgTXJJdGVtUHJldmlld0RTLFxuICBNck1ldGFkYXRhRFMsXG4gIE1yVGV4dFZpZXdlckRTLFxufSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuXG5jb25zdCBEQVRBU09VUkNFX01BUCA9IHtcbiAgYnJlYWRjcnVtYnM6IE1yQnJlYWRjcnVtYnNEUyxcbiAgY29sbGVjdGlvbjogTXJDb2xsZWN0aW9uRFMsXG4gIGluZm86IE1ySW5mb0JveERTLFxuICBtZXRhZGF0YTogTXJNZXRhZGF0YURTLFxuICBwcmV2aWV3OiBNckl0ZW1QcmV2aWV3RFMsXG4gIHRleHQ6IE1yVGV4dFZpZXdlckRTLFxuICB0aXRsZTogTXJJbm5lclRpdGxlRFMsXG4gIHZpZXdlcjogTXJJbWFnZVZpZXdlckRTLFxuICB0YWJzOiAoZCkgPT4gZFxufTtcblxuY29uc3QgRVZFTlRIQU5ETEVSX01BUCA9IHtcbiAgdmlld2VyOiBNckltYWdlVmlld2VyRUgsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1yZXNvdXJjZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzb3VyY2UtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNclJlc291cmNlTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yUmVzb3VyY2VMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmxheW91dFN0YXRlLmFkZCgnY29udGVudCcpO1xuICAgICAgdGhpcy5jb25maWdJZCA9IGRhdGEuY29uZmlnSWQ7XG4gICAgICB0aGlzLmxvYWRXaWRnZXRzKCk7XG4gICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxuXG4gIGxvYWRXaWRnZXRzKCkge1xuICAgIGNvbnN0IHsgdG9wLCBjb250ZW50IH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpLnNlY3Rpb25zO1xuICAgIGNvbnN0IHNlY3Rpb25zID0gdG9wLmNvbmNhdChjb250ZW50KTtcbiAgICB0aGlzLndpZGdldHMgPSBbXTtcbiAgICBpZiAoc2VjdGlvbnMpIHtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHsgaWQsIHR5cGUsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICB0aGlzLndpZGdldHMucHVzaCh7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBkYXRhU291cmNlOiBEQVRBU09VUkNFX01BUFt0eXBlXSxcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEVWRU5USEFORExFUl9NQVBbdHlwZV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==