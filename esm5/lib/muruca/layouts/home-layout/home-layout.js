import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrLayoutStateService } from '../../services/layout-state.service';
import { MrHomeLayoutConfig as config } from './home-layout.config';
import { MrSliderDS } from '../../data-sources/slider.ds';
import { MrCollectionDS } from '../../data-sources/collection.ds';
import { MrHeroDS } from '../../data-sources/hero.ds';
import { MrSliderEH } from '../../event-handlers/slider.eh';
import { MrCollectionEH } from '../../event-handlers/collection.eh';
import { MrHeroEH } from '../../event-handlers/hero.eh';
import { MrContentDS } from '../../data-sources/content.ds';
var DATASOURCE_MAP = {
    slider: MrSliderDS,
    collection: MrCollectionDS,
    hero: MrHeroDS,
    content: MrContentDS,
};
var EVENTHANDLER_MAP = {
    slider: MrSliderEH,
    collection: MrCollectionEH,
    hero: MrHeroEH,
};
var MrHomeLayoutComponent = /** @class */ (function (_super) {
    __extends(MrHomeLayoutComponent, _super);
    function MrHomeLayoutComponent(layoutsConfiguration, activatedRoute, configuration, communication, mainState, layoutState) {
        var _this = _super.call(this, layoutsConfiguration.get('MrHomeLayoutConfig') || config) || this;
        _this.activatedRoute = activatedRoute;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.mainState = mainState;
        _this.layoutState = layoutState;
        return _this;
    }
    MrHomeLayoutComponent.prototype.initPayload = function () {
        return {
            configId: this.configId,
            mainState: this.mainState,
            configuration: this.configuration,
            communication: this.communication,
            layoutState: this.layoutState,
            options: this.config.options || {}
        };
    };
    MrHomeLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.configId = data.configId;
            _this.layoutState.add('content');
            _this.loadWidgets();
            _this.onInit();
        });
    };
    MrHomeLayoutComponent.prototype.ngOnDestroy = function () {
        this.onDestroy();
    };
    MrHomeLayoutComponent.prototype.loadWidgets = function () {
        var _this = this;
        var homeConfig = this.configuration.get(this.configId) || {};
        var sections = homeConfig.sections;
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
    MrHomeLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService },
        { type: ActivatedRoute },
        { type: ConfigurationService },
        { type: CommunicationService },
        { type: MainStateService },
        { type: MrLayoutStateService }
    ]; };
    MrHomeLayoutComponent = __decorate([
        Component({
            selector: 'mr-home-layout',
            template: "<div class=\"mr-home mr-layout\"\r\n     *ngIf=\"lb.dataSource\"\r\n     [ngClass]=\"{\r\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\r\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\r\n      }\">\r\n    <!-- HOME CONTENT -->\r\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\r\n        <!-- loading -->\r\n        <ng-container *ngSwitchCase=\"'LOADING'\">\r\n            <div class=\"mr-layout__loader\">\r\n                <n7-loader></n7-loader>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- error -->\r\n        <ng-container *ngSwitchCase=\"'ERROR'\">\r\n            <div class=\"mr-layout__error\">\r\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\r\n                <p>{{ lb.dataSource.errorDescription }}</p>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- success -->\r\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\r\n            <section *ngFor=\"let section of lb.dataSource.pageConfig.sections\" class=\"{{ 'mr-layout__' + section.type }}\">\r\n                <ng-container [ngSwitch]=\"section.type\">\r\n        \r\n                    <!-- SLIDER -->\r\n                    <ng-container *ngSwitchCase=\"'slider'\">\r\n                        <n7-carousel \r\n                        [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                        [emit]=\"lb.widgets[section.id].emit\">\r\n                        </n7-carousel> \r\n                    </ng-container>\r\n        \r\n                    <!-- COLLECTION -->\r\n                    <ng-container *ngSwitchCase=\"'collection'\">\r\n                        <div class=\"mr-layout__maxwidth mr-items-preview\">\r\n                            <n7-inner-title \r\n                            [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\r\n                            [emit]=\"lb.widgets[section.id].emit\">\r\n                            </n7-inner-title>\r\n                            <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\r\n                                <n7-item-preview\r\n                                *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\r\n                                [data]=\"item\"\r\n                                [emit]=\"lb.widgets[section.id].emit\">\r\n                                </n7-item-preview>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n        \r\n                    <!-- HERO -->\r\n                    <ng-container *ngSwitchCase=\"'hero'\">\r\n                        <n7-hero \r\n                        [data]=\"lb.widgets[section.id].ds.out$ | async\"\r\n                        [emit]=\"lb.widgets[section.id].emit\">\r\n                        </n7-hero> \r\n                    </ng-container>\r\n        \r\n                    <!-- CONTENT -->\r\n                    <ng-container *ngSwitchCase=\"'content'\">\r\n                        <div [innerHTML]=\"lb.widgets[section.id].ds.out$ | async\"></div>\r\n                    </ng-container>\r\n                \r\n                </ng-container>\r\n            </section>\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</div>\r\n"
        }),
        __metadata("design:paramtypes", [LayoutsConfigurationService,
            ActivatedRoute,
            ConfigurationService,
            CommunicationService,
            MainStateService,
            MrLayoutStateService])
    ], MrHomeLayoutComponent);
    return MrHomeLayoutComponent;
}(AbstractLayout));
export { MrHomeLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixJQUFJLE1BQU0sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RCxJQUFNLGNBQWMsR0FBRztJQUNyQixNQUFNLEVBQUUsVUFBVTtJQUNsQixVQUFVLEVBQUUsY0FBYztJQUMxQixJQUFJLEVBQUUsUUFBUTtJQUNkLE9BQU8sRUFBRSxXQUFXO0NBQ3JCLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLFVBQVUsRUFBRSxjQUFjO0lBQzFCLElBQUksRUFBRSxRQUFRO0NBQ2YsQ0FBQztBQU1GO0lBQTJDLHlDQUFjO0lBR3ZELCtCQUNFLG9CQUFpRCxFQUN6QyxjQUE4QixFQUM5QixhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQixFQUM1QixXQUFpQztRQU4xQyxZQVFFLGtCQUFNLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUNoRTtRQVBTLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzVCLGlCQUFXLEdBQVgsV0FBVyxDQUFzQjs7SUFHMUMsQ0FBQztJQUVTLDJDQUFXLEdBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFBQSxpQkFlQztRQWRDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkQsSUFBQSw4QkFBUSxDQUFnQjtRQUVoQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFxQjtvQkFBbkIsVUFBRSxFQUFFLGNBQUksRUFBRSxvQkFBTztnQkFDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLEVBQUUsSUFBQTtvQkFDRixPQUFPLFNBQUE7b0JBQ1AsVUFBVSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUM7b0JBQ2hDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkFqRHVCLDJCQUEyQjtnQkFDekIsY0FBYztnQkFDZixvQkFBb0I7Z0JBQ3BCLG9CQUFvQjtnQkFDeEIsZ0JBQWdCO2dCQUNmLG9CQUFvQjs7SUFUL0IscUJBQXFCO1FBSmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsc3dHQUFpQztTQUNsQyxDQUFDO3lDQUt3QiwyQkFBMkI7WUFDekIsY0FBYztZQUNmLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDeEIsZ0JBQWdCO1lBQ2Ysb0JBQW9CO09BVC9CLHFCQUFxQixDQXNEakM7SUFBRCw0QkFBQztDQUFBLEFBdERELENBQTJDLGNBQWMsR0FzRHhEO1NBdERZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJIb21lTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vaG9tZS1sYXlvdXQuY29uZmlnJztcclxuaW1wb3J0IHsgTXJTbGlkZXJEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9zbGlkZXIuZHMnO1xyXG5pbXBvcnQgeyBNckNvbGxlY3Rpb25EUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9jb2xsZWN0aW9uLmRzJztcclxuaW1wb3J0IHsgTXJIZXJvRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvaGVyby5kcyc7XHJcbmltcG9ydCB7IE1yU2xpZGVyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9zbGlkZXIuZWgnO1xyXG5pbXBvcnQgeyBNckNvbGxlY3Rpb25FSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2NvbGxlY3Rpb24uZWgnO1xyXG5pbXBvcnQgeyBNckhlcm9FSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzL2hlcm8uZWgnO1xyXG5pbXBvcnQgeyBNckNvbnRlbnREUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9jb250ZW50LmRzJztcclxuXHJcbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xyXG4gIHNsaWRlcjogTXJTbGlkZXJEUyxcclxuICBjb2xsZWN0aW9uOiBNckNvbGxlY3Rpb25EUyxcclxuICBoZXJvOiBNckhlcm9EUyxcclxuICBjb250ZW50OiBNckNvbnRlbnREUyxcclxufTtcclxuXHJcbmNvbnN0IEVWRU5USEFORExFUl9NQVAgPSB7XHJcbiAgc2xpZGVyOiBNclNsaWRlckVILFxyXG4gIGNvbGxlY3Rpb246IE1yQ29sbGVjdGlvbkVILFxyXG4gIGhlcm86IE1ySGVyb0VILFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtci1ob21lLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUtbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJIb21lTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNckhvbWVMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlnSWQ6IHRoaXMuY29uZmlnSWQsXHJcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcclxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcclxuICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5hZGQoJ2NvbnRlbnQnKTtcclxuICAgICAgdGhpcy5sb2FkV2lkZ2V0cygpO1xyXG4gICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBsb2FkV2lkZ2V0cygpIHtcclxuICAgIGNvbnN0IGhvbWVDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpIHx8IHt9O1xyXG4gICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gaG9tZUNvbmZpZztcclxuXHJcbiAgICB0aGlzLndpZGdldHMgPSBbXTtcclxuICAgIGlmIChzZWN0aW9ucykge1xyXG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKCh7IGlkLCB0eXBlLCBvcHRpb25zIH0pID0+IHtcclxuICAgICAgICB0aGlzLndpZGdldHMucHVzaCh7XHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICBkYXRhU291cmNlOiBEQVRBU09VUkNFX01BUFt0eXBlXSxcclxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUFt0eXBlXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19