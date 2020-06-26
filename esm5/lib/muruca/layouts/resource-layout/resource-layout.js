import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MrInnerTitleDS } from '../../data-sources/inner-title.ds';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrResourceLayoutConfig as config } from './resource-layout.config';
import { MrImageViewerDS } from '../../data-sources/image-viewer.ds';
import { MrImageViewerEH } from '../../event-handlers/image-viewer.eh';
import { MrMetadataDS } from '../../data-sources/metadata.ds';
import { MrItemPreviewDS } from '../../data-sources/item-preview.ds';
import { MrCollectionDS } from '../../data-sources/collection.ds';
var DATASOURCE_MAP = {
    viewer: MrImageViewerDS,
    metadata: MrMetadataDS,
    preview: MrItemPreviewDS,
    title: MrInnerTitleDS,
    collection: MrCollectionDS
};
var EVENTHANDLER_MAP = {
    viewer: MrImageViewerEH,
};
var MrResourceLayoutComponent = /** @class */ (function (_super) {
    __extends(MrResourceLayoutComponent, _super);
    function MrResourceLayoutComponent(layoutsConfiguration, activatedRoute, configuration, communication, mainState, route) {
        var _this = _super.call(this, layoutsConfiguration.get('MrResourceLayoutConfig') || config) || this;
        _this.activatedRoute = activatedRoute;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.mainState = mainState;
        _this.route = route;
        return _this;
    }
    MrResourceLayoutComponent.prototype.initPayload = function () {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            mainState: this.mainState,
            options: this.config.options || {},
            route: this.route
        };
    };
    MrResourceLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
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
        var sections = this.configuration.get(this.configId).sections;
        this.widgets = [];
        if (sections) {
            sections.forEach(function (_a) {
                var id = _a.id, type = _a.type;
                _this.widgets.push({
                    id: id,
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
        { type: ActivatedRoute }
    ]; };
    MrResourceLayoutComponent = __decorate([
        Component({
            selector: 'mr-resource-layout',
            template: "<div class=\"mr-resource mr-layout\"\n     *ngIf=\"lb.dataSource && lb.dataSource.pageConfig\">\n  <section *ngFor=\"let section of lb.dataSource.pageConfig.sections\"\n           class=\"{{ 'mr-layout__' + section.type }}\">\n    <ng-container [ngSwitch]=\"section.type\">\n\n      <!-- INNER TITLE -->\n      <ng-container *ngSwitchCase=\"'title'\">\n        <n7-inner-title [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                        [emit]=\"lb.widgets[section.id].emit\">\n        </n7-inner-title>\n      </ng-container>\n\n      <!-- IMAGE VIEWER -->\n      <ng-container *ngSwitchCase=\"'viewer'\">\n        <n7-image-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                         [emit]=\"lb.widgets[section.id].emit\">\n        </n7-image-viewer>\n      </ng-container>\n\n      <!-- METADATA VIEWER -->\n      <ng-container *ngSwitchCase=\"'metadata'\">\n        <n7-metadata-viewer [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                            [emit]=\"lb.widgets[section.id].emit\">\n        </n7-metadata-viewer>\n      </ng-container>\n\n      <!-- COLLECTION -->\n      <ng-container *ngSwitchCase=\"'collection'\">\n        <div class=\"mr-layout__maxwidth mr-items-preview\">\n          <n7-inner-title [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\n                          [emit]=\"lb.widgets[section.id].emit\">\n          </n7-inner-title>\n          <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n            <n7-item-preview *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\n                             [data]=\"item\"\n                             [emit]=\"lb.widgets[section.id].emit\">\n            </n7-item-preview>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- ITEM PREVIEW -->\n      <ng-container *ngSwitchCase=\"'preview'\">\n        <n7-item-preview [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                         [emit]=\"lb.widgets[section.id].emit\">\n        </n7-item-preview>\n      </ng-container>\n\n    </ng-container>\n  </section>\n</div>\n"
        }),
        __metadata("design:paramtypes", [LayoutsConfigurationService,
            ActivatedRoute,
            ConfigurationService,
            CommunicationService,
            MainStateService,
            ActivatedRoute])
    ], MrResourceLayoutComponent);
    return MrResourceLayoutComponent;
}(AbstractLayout));
export { MrResourceLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsSUFBSSxNQUFNLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWxFLElBQU0sY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLEtBQUssRUFBRSxjQUFjO0lBQ3JCLFVBQVUsRUFBRSxjQUFjO0NBQzNCLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLE1BQU0sRUFBRSxlQUFlO0NBQ3hCLENBQUM7QUFNRjtJQUErQyw2Q0FBYztJQUczRCxtQ0FDRSxvQkFBaUQsRUFDekMsY0FBOEIsRUFDOUIsYUFBbUMsRUFDbkMsYUFBbUMsRUFDbkMsU0FBMkIsRUFDM0IsS0FBcUI7UUFOL0IsWUFRRSxrQkFBTSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsSUFBSSxNQUFNLENBQUMsU0FDcEU7UUFQUyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixXQUFLLEdBQUwsS0FBSyxDQUFnQjs7SUFHL0IsQ0FBQztJQUVTLCtDQUFXLEdBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtZQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFBQSxpQkFhQztRQVpTLElBQUEseURBQVEsQ0FBMkM7UUFFM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBWTtvQkFBVixVQUFFLEVBQUUsY0FBSTtnQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLEVBQUUsSUFBQTtvQkFDRixVQUFVLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQztvQkFDaEMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztpQkFDckMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQTlDdUIsMkJBQTJCO2dCQUN6QixjQUFjO2dCQUNmLG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUN4QixnQkFBZ0I7Z0JBQ3BCLGNBQWM7O0lBVHBCLHlCQUF5QjtRQUpyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLGttRUFBcUM7U0FDdEMsQ0FBQzt5Q0FLd0IsMkJBQTJCO1lBQ3pCLGNBQWM7WUFDZixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3hCLGdCQUFnQjtZQUNwQixjQUFjO09BVHBCLHlCQUF5QixDQW1EckM7SUFBRCxnQ0FBQztDQUFBLEFBbkRELENBQStDLGNBQWMsR0FtRDVEO1NBbkRZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1ySW5uZXJUaXRsZURTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2lubmVyLXRpdGxlLmRzJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJSZXNvdXJjZUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3Jlc291cmNlLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgTXJJbWFnZVZpZXdlckRTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ltYWdlLXZpZXdlci5kcyc7XG5pbXBvcnQgeyBNckltYWdlVmlld2VyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXIuZWgnO1xuaW1wb3J0IHsgTXJNZXRhZGF0YURTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL21ldGFkYXRhLmRzJztcbmltcG9ydCB7IE1ySXRlbVByZXZpZXdEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9pdGVtLXByZXZpZXcuZHMnO1xuaW1wb3J0IHsgTXJDb2xsZWN0aW9uRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvY29sbGVjdGlvbi5kcyc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICB2aWV3ZXI6IE1ySW1hZ2VWaWV3ZXJEUyxcbiAgbWV0YWRhdGE6IE1yTWV0YWRhdGFEUyxcbiAgcHJldmlldzogTXJJdGVtUHJldmlld0RTLFxuICB0aXRsZTogTXJJbm5lclRpdGxlRFMsXG4gIGNvbGxlY3Rpb246IE1yQ29sbGVjdGlvbkRTXG59O1xuXG5jb25zdCBFVkVOVEhBTkRMRVJfTUFQID0ge1xuICB2aWV3ZXI6IE1ySW1hZ2VWaWV3ZXJFSCxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXJlc291cmNlLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNvdXJjZS1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yUmVzb3VyY2VMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJSZXNvdXJjZUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIHRoaXMubG9hZFdpZGdldHMoKTtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgbG9hZFdpZGdldHMoKSB7XG4gICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcblxuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgIGlmIChzZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCwgdHlwZSB9KSA9PiB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBkYXRhU291cmNlOiBEQVRBU09VUkNFX01BUFt0eXBlXSxcbiAgICAgICAgICBldmVudEhhbmRsZXI6IEVWRU5USEFORExFUl9NQVBbdHlwZV1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==