/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MrHomeLayoutConfig as config } from './home-layout.config';
import { MrSliderDS } from '../../data-sources/slider.ds';
import { MrCollectionDS } from '../../data-sources/collection.ds';
import { MrHeroDS } from '../../data-sources/hero.ds';
import { MrSliderEH } from '../../event-handlers/slider.eh';
import { MrCollectionEH } from '../../event-handlers/collection.eh';
import { MrHeroEH } from '../../event-handlers/hero.eh';
/** @type {?} */
var DATASOURCE_MAP = {
    slider: MrSliderDS,
    collection: MrCollectionDS,
    hero: MrHeroDS,
};
/** @type {?} */
var EVENTHANDLER_MAP = {
    slider: MrSliderEH,
    collection: MrCollectionEH,
    hero: MrHeroEH,
};
var MrHomeLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MrHomeLayoutComponent, _super);
    function MrHomeLayoutComponent(layoutsConfiguration, activatedRoute, configuration, communication) {
        var _this = _super.call(this, layoutsConfiguration.get('MrHomeLayoutConfig') || config) || this;
        _this.activatedRoute = activatedRoute;
        _this.configuration = configuration;
        _this.communication = communication;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    MrHomeLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            options: this.config.options || {}
        };
    };
    /**
     * @return {?}
     */
    MrHomeLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.configId = data.configId;
            _this.loadWidgets();
            _this.onInit();
        }));
    };
    /**
     * @return {?}
     */
    MrHomeLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    /**
     * @return {?}
     */
    MrHomeLayoutComponent.prototype.loadWidgets = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var homeConfig = this.configuration.get(this.configId) || {};
        var sections = homeConfig.sections;
        this.widgets = [];
        if (sections) {
            sections.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var id = _a.id, type = _a.type, options = _a.options;
                _this.widgets.push({
                    id: id,
                    options: options,
                    dataSource: DATASOURCE_MAP[type],
                    eventHandler: EVENTHANDLER_MAP[type]
                });
            }));
        }
    };
    MrHomeLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mr-home-layout',
                    template: "<div class=\"mr-home mr-layout\" *ngIf=\"lb.dataSource\">\n    <section *ngFor=\"let section of lb.dataSource.pageConfig.sections\" class=\"{{ 'mr-layout__' + section.type }}\">\n        <ng-container [ngSwitch]=\"section.type\">\n\n            <!-- SLIDER -->\n            <ng-container *ngSwitchCase=\"'slider'\">\n                <n7-carousel \n                [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[section.id].emit\">\n                </n7-carousel> \n            </ng-container>\n\n            <!-- COLLECTION -->\n            <ng-container *ngSwitchCase=\"'collection'\">\n                <div class=\"mr-layout__maxwidth mr-items-preview\">\n                    <n7-inner-title \n                    [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\n                    [emit]=\"lb.widgets[section.id].emit\">\n                    </n7-inner-title>\n                    <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                        <n7-item-preview\n                        *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\n                        [data]=\"item\"\n                        [emit]=\"lb.widgets[section.id].emit\">\n                        </n7-item-preview>\n                    </div>\n                </div>\n            </ng-container>\n\n            <!-- HERO -->\n            <ng-container *ngSwitchCase=\"'hero'\">\n                <n7-hero \n                [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[section.id].emit\">\n                </n7-hero> \n            </ng-container>\n        \n        </ng-container>\n    </section>\n    \n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MrHomeLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService },
        { type: ActivatedRoute },
        { type: ConfigurationService },
        { type: CommunicationService }
    ]; };
    return MrHomeLayoutComponent;
}(AbstractLayout));
export { MrHomeLayoutComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutComponent.prototype.configId;
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutComponent.prototype.communication;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsSUFBSSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7SUFFbEQsY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLFVBQVUsRUFBRSxjQUFjO0lBQzFCLElBQUksRUFBRSxRQUFRO0NBQ2Y7O0lBRUssZ0JBQWdCLEdBQUc7SUFDdkIsTUFBTSxFQUFFLFVBQVU7SUFDbEIsVUFBVSxFQUFFLGNBQWM7SUFDMUIsSUFBSSxFQUFFLFFBQVE7Q0FDZjtBQUVEO0lBSTJDLGlEQUFjO0lBR3ZELCtCQUNFLG9CQUFpRCxFQUN6QyxjQUE4QixFQUM5QixhQUFtQyxFQUNuQyxhQUFtQztRQUo3QyxZQU1FLGtCQUFNLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUNoRTtRQUxTLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQXNCOztJQUc3QyxDQUFDOzs7OztJQUVTLDJDQUFXOzs7O0lBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFJO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQUEsaUJBZUM7O1lBZE8sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1FBQ3RELElBQUEsOEJBQVE7UUFFaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsRUFBcUI7b0JBQW5CLFVBQUUsRUFBRSxjQUFJLEVBQUUsb0JBQU87Z0JBQ25DLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFLElBQUE7b0JBQ0YsT0FBTyxTQUFBO29CQUNQLFVBQVUsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDO29CQUNoQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2lCQUNyQyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBcERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiwrc0RBQWlDO2lCQUNsQzs7OztnQkF6QlEsMkJBQTJCO2dCQUgzQixjQUFjO2dCQUlkLG9CQUFvQjtnQkFGcEIsb0JBQW9COztJQTRFN0IsNEJBQUM7Q0FBQSxBQXJERCxDQUkyQyxjQUFjLEdBaUR4RDtTQWpEWSxxQkFBcUI7Ozs7OztJQUNoQyx5Q0FBeUI7Ozs7O0lBSXZCLCtDQUFzQzs7Ozs7SUFDdEMsOENBQTJDOzs7OztJQUMzQyw4Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1ySG9tZUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2hvbWUtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBNclNsaWRlckRTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL3NsaWRlci5kcyc7XG5pbXBvcnQgeyBNckNvbGxlY3Rpb25EUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9jb2xsZWN0aW9uLmRzJztcbmltcG9ydCB7IE1ySGVyb0RTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2hlcm8uZHMnO1xuaW1wb3J0IHsgTXJTbGlkZXJFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL3NsaWRlci5laCc7XG5pbXBvcnQgeyBNckNvbGxlY3Rpb25FSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2NvbGxlY3Rpb24uZWgnO1xuaW1wb3J0IHsgTXJIZXJvRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9oZXJvLmVoJztcblxuY29uc3QgREFUQVNPVVJDRV9NQVAgPSB7XG4gIHNsaWRlcjogTXJTbGlkZXJEUyxcbiAgY29sbGVjdGlvbjogTXJDb2xsZWN0aW9uRFMsXG4gIGhlcm86IE1ySGVyb0RTLFxufTtcblxuY29uc3QgRVZFTlRIQU5ETEVSX01BUCA9IHtcbiAgc2xpZGVyOiBNclNsaWRlckVILFxuICBjb2xsZWN0aW9uOiBNckNvbGxlY3Rpb25FSCxcbiAgaGVybzogTXJIZXJvRUgsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1ob21lLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJIb21lTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01ySG9tZUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkLFxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIHRoaXMubG9hZFdpZGdldHMoKTtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgbG9hZFdpZGdldHMoKSB7XG4gICAgY29uc3QgaG9tZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkgfHwge307XG4gICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gaG9tZUNvbmZpZztcblxuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgIGlmIChzZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCwgdHlwZSwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW3R5cGVdLFxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUFt0eXBlXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19