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
            template: "<div class=\"mr-home mr-layout\"\n     *ngIf=\"lb.dataSource\"\n     [ngClass]=\"{\n        'is-loading': ( layoutState.get$('content') | async ) == 'LOADING',\n        'is-error': ( layoutState.get$('content') | async ) == 'ERROR'\n      }\">\n    <!-- HOME CONTENT -->\n    <ng-container [ngSwitch]=\"layoutState.get$('content') | async\">\n        <!-- loading -->\n        <ng-container *ngSwitchCase=\"'LOADING'\">\n            <div class=\"mr-layout__loader\">\n                <n7-loader></n7-loader>\n            </div>\n        </ng-container>\n\n        <!-- error -->\n        <ng-container *ngSwitchCase=\"'ERROR'\">\n            <div class=\"mr-layout__error\">\n                <h2>{{ lb.dataSource.errorTitle }}</h2>\n                <p>{{ lb.dataSource.errorDescription }}</p>\n            </div>\n        </ng-container>\n\n        <!-- success -->\n        <ng-container *ngSwitchCase=\"'SUCCESS'\">\n            <section *ngFor=\"let section of lb.dataSource.pageConfig.sections\" class=\"{{ 'mr-layout__' + section.type }}\">\n                <ng-container [ngSwitch]=\"section.type\">\n        \n                    <!-- SLIDER -->\n                    <ng-container *ngSwitchCase=\"'slider'\">\n                        <n7-carousel \n                        [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                        [emit]=\"lb.widgets[section.id].emit\">\n                        </n7-carousel> \n                    </ng-container>\n        \n                    <!-- COLLECTION -->\n                    <ng-container *ngSwitchCase=\"'collection'\">\n                        <div class=\"mr-layout__maxwidth mr-items-preview\">\n                            <n7-inner-title \n                            [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\n                            [emit]=\"lb.widgets[section.id].emit\">\n                            </n7-inner-title>\n                            <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                                <n7-item-preview\n                                *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\n                                [data]=\"item\"\n                                [emit]=\"lb.widgets[section.id].emit\">\n                                </n7-item-preview>\n                            </div>\n                        </div>\n                    </ng-container>\n        \n                    <!-- HERO -->\n                    <ng-container *ngSwitchCase=\"'hero'\">\n                        <n7-hero \n                        [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                        [emit]=\"lb.widgets[section.id].emit\">\n                        </n7-hero> \n                    </ng-container>\n        \n                    <!-- CONTENT -->\n                    <ng-container *ngSwitchCase=\"'content'\">\n                        <div [innerHTML]=\"lb.widgets[section.id].ds.out$ | async\"></div>\n                    </ng-container>\n                \n                </ng-container>\n            </section>\n        </ng-container>\n\n    </ng-container>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixJQUFJLE1BQU0sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RCxJQUFNLGNBQWMsR0FBRztJQUNy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RCw0QkFBQztDQUFBLEFBdERELENBQTJDLGNBQWMsR0FzRHhEO1NBdERZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNckhvbWVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9ob21lLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgTXJTbGlkZXJEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9zbGlkZXIuZHMnO1xuaW1wb3J0IHsgTXJDb2xsZWN0aW9uRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvY29sbGVjdGlvbi5kcyc7XG5pbXBvcnQgeyBNckhlcm9EUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9oZXJvLmRzJztcbmltcG9ydCB7IE1yU2xpZGVyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9zbGlkZXIuZWgnO1xuaW1wb3J0IHsgTXJDb2xsZWN0aW9uRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9jb2xsZWN0aW9uLmVoJztcbmltcG9ydCB7IE1ySGVyb0VIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvaGVyby5laCc7XG5pbXBvcnQgeyBNckNvbnRlbnREUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9jb250ZW50LmRzJztcblxuY29uc3QgREFUQVNPVVJDRV9NQVAgPSB7XG4gIHNsaWRlcjogTXJTbGlkZXJEUyxcbiAgY29sbGVjdGlvbjogTXJDb2xsZWN0aW9uRFMsXG4gIGhlcm86IE1ySGVyb0RTLFxuICBjb250ZW50OiBNckNvbnRlbnREUyxcbn07XG5cbmNvbnN0IEVWRU5USEFORExFUl9NQVAgPSB7XG4gIHNsaWRlcjogTXJTbGlkZXJFSCxcbiAgY29sbGVjdGlvbjogTXJDb2xsZWN0aW9uRUgsXG4gIGhlcm86IE1ySGVyb0VILFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItaG9tZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1ySG9tZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHVibGljIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNckhvbWVMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBsYXlvdXRTdGF0ZTogdGhpcy5sYXlvdXRTdGF0ZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge31cbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb25maWdJZCA9IGRhdGEuY29uZmlnSWQ7XG4gICAgICB0aGlzLmxheW91dFN0YXRlLmFkZCgnY29udGVudCcpO1xuICAgICAgdGhpcy5sb2FkV2lkZ2V0cygpO1xuICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cblxuICBsb2FkV2lkZ2V0cygpIHtcbiAgICBjb25zdCBob21lQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKSB8fCB7fTtcbiAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSBob21lQ29uZmlnO1xuXG4gICAgdGhpcy53aWRnZXRzID0gW107XG4gICAgaWYgKHNlY3Rpb25zKSB7XG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKCh7IGlkLCB0eXBlLCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVBbdHlwZV0sXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQW3R5cGVdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=