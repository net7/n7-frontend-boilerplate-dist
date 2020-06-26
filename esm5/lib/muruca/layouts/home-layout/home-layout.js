import { __decorate, __extends, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { CommunicationService } from '../../../common/services/communication.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrHomeLayoutConfig as config } from './home-layout.config';
import { MrSliderDS } from '../../data-sources/slider.ds';
import { MrCollectionDS } from '../../data-sources/collection.ds';
import { MrHeroDS } from '../../data-sources/hero.ds';
import { MrSliderEH } from '../../event-handlers/slider.eh';
import { MrCollectionEH } from '../../event-handlers/collection.eh';
import { MrHeroEH } from '../../event-handlers/hero.eh';
var DATASOURCE_MAP = {
    slider: MrSliderDS,
    collection: MrCollectionDS,
    hero: MrHeroDS,
};
var EVENTHANDLER_MAP = {
    slider: MrSliderEH,
    collection: MrCollectionEH,
    hero: MrHeroEH,
};
var MrHomeLayoutComponent = /** @class */ (function (_super) {
    __extends(MrHomeLayoutComponent, _super);
    function MrHomeLayoutComponent(layoutsConfiguration, activatedRoute, configuration, communication, mainState) {
        var _this = _super.call(this, layoutsConfiguration.get('MrHomeLayoutConfig') || config) || this;
        _this.activatedRoute = activatedRoute;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.mainState = mainState;
        return _this;
    }
    MrHomeLayoutComponent.prototype.initPayload = function () {
        return {
            configId: this.configId,
            mainState: this.mainState,
            configuration: this.configuration,
            communication: this.communication,
            options: this.config.options || {}
        };
    };
    MrHomeLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.configId = data.configId;
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
        { type: MainStateService }
    ]; };
    MrHomeLayoutComponent = __decorate([
        Component({
            selector: 'mr-home-layout',
            template: "<div class=\"mr-home mr-layout\" *ngIf=\"lb.dataSource\">\n    <section *ngFor=\"let section of lb.dataSource.pageConfig.sections\" class=\"{{ 'mr-layout__' + section.type }}\">\n        <ng-container [ngSwitch]=\"section.type\">\n\n            <!-- SLIDER -->\n            <ng-container *ngSwitchCase=\"'slider'\">\n                <n7-carousel \n                [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[section.id].emit\">\n                </n7-carousel> \n            </ng-container>\n\n            <!-- COLLECTION -->\n            <ng-container *ngSwitchCase=\"'collection'\">\n                <div class=\"mr-layout__maxwidth mr-items-preview\">\n                    <n7-inner-title \n                    [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\n                    [emit]=\"lb.widgets[section.id].emit\">\n                    </n7-inner-title>\n                    <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                        <n7-item-preview\n                        *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\n                        [data]=\"item\"\n                        [emit]=\"lb.widgets[section.id].emit\">\n                        </n7-item-preview>\n                    </div>\n                </div>\n            </ng-container>\n\n            <!-- HERO -->\n            <ng-container *ngSwitchCase=\"'hero'\">\n                <n7-hero \n                [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[section.id].emit\">\n                </n7-hero> \n            </ng-container>\n        \n        </ng-container>\n    </section>\n    \n</div>\n"
        }),
        __metadata("design:paramtypes", [LayoutsConfigurationService,
            ActivatedRoute,
            ConfigurationService,
            CommunicationService,
            MainStateService])
    ], MrHomeLayoutComponent);
    return MrHomeLayoutComponent;
}(AbstractLayout));
export { MrHomeLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixJQUFJLE1BQU0sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXhELElBQU0sY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLFVBQVUsRUFBRSxjQUFjO0lBQzFCLElBQUksRUFBRSxRQUFRO0NBQ2YsQ0FBQztBQUVGLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkIsTUFBTSxFQUFFLFVBQVU7SUFDbEIsVUFBVSxFQUFFLGNBQWM7SUFDMUIsSUFBSSxFQUFFLFFBQVE7Q0FDZixDQUFDO0FBTUY7SUFBMkMseUNBQWM7SUFHdkQsK0JBQ0Usb0JBQWlELEVBQ3pDLGNBQThCLEVBQzlCLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLFNBQTJCO1FBTHJDLFlBT0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ2hFO1FBTlMsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7O0lBR3JDLENBQUM7SUFFUywyQ0FBVyxHQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFBQSxpQkFlQztRQWRDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkQsSUFBQSw4QkFBUSxDQUFnQjtRQUVoQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFxQjtvQkFBbkIsVUFBRSxFQUFFLGNBQUksRUFBRSxvQkFBTztnQkFDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLEVBQUUsSUFBQTtvQkFDRixPQUFPLFNBQUE7b0JBQ1AsVUFBVSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUM7b0JBQ2hDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkE5Q3VCLDJCQUEyQjtnQkFDekIsY0FBYztnQkFDZixvQkFBb0I7Z0JBQ3BCLG9CQUFvQjtnQkFDeEIsZ0JBQWdCOztJQVIxQixxQkFBcUI7UUFKakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQiwrc0RBQWlDO1NBQ2xDLENBQUM7eUNBS3dCLDJCQUEyQjtZQUN6QixjQUFjO1lBQ2Ysb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUN4QixnQkFBZ0I7T0FSMUIscUJBQXFCLENBbURqQztJQUFELDRCQUFDO0NBQUEsQUFuREQsQ0FBMkMsY0FBYyxHQW1EeEQ7U0FuRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNckhvbWVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9ob21lLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgTXJTbGlkZXJEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9zbGlkZXIuZHMnO1xuaW1wb3J0IHsgTXJDb2xsZWN0aW9uRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvY29sbGVjdGlvbi5kcyc7XG5pbXBvcnQgeyBNckhlcm9EUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9oZXJvLmRzJztcbmltcG9ydCB7IE1yU2xpZGVyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9zbGlkZXIuZWgnO1xuaW1wb3J0IHsgTXJDb2xsZWN0aW9uRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9jb2xsZWN0aW9uLmVoJztcbmltcG9ydCB7IE1ySGVyb0VIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvaGVyby5laCc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICBzbGlkZXI6IE1yU2xpZGVyRFMsXG4gIGNvbGxlY3Rpb246IE1yQ29sbGVjdGlvbkRTLFxuICBoZXJvOiBNckhlcm9EUyxcbn07XG5cbmNvbnN0IEVWRU5USEFORExFUl9NQVAgPSB7XG4gIHNsaWRlcjogTXJTbGlkZXJFSCxcbiAgY29sbGVjdGlvbjogTXJDb2xsZWN0aW9uRUgsXG4gIGhlcm86IE1ySGVyb0VILFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItaG9tZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1ySG9tZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJIb21lTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnSWQ6IHRoaXMuY29uZmlnSWQsXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZ0lkID0gZGF0YS5jb25maWdJZDtcbiAgICAgIHRoaXMubG9hZFdpZGdldHMoKTtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgbG9hZFdpZGdldHMoKSB7XG4gICAgY29uc3QgaG9tZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkgfHwge307XG4gICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gaG9tZUNvbmZpZztcblxuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgIGlmIChzZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoeyBpZCwgdHlwZSwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGRhdGFTb3VyY2U6IERBVEFTT1VSQ0VfTUFQW3R5cGVdLFxuICAgICAgICAgIGV2ZW50SGFuZGxlcjogRVZFTlRIQU5ETEVSX01BUFt0eXBlXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19