/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const DATASOURCE_MAP = {
    slider: MrSliderDS,
    collection: MrCollectionDS,
    hero: MrHeroDS,
};
/** @type {?} */
const EVENTHANDLER_MAP = {
    slider: MrSliderEH,
    collection: MrCollectionEH,
    hero: MrHeroEH,
};
export class MrHomeLayoutComponent extends AbstractLayout {
    /**
     * @param {?} layoutsConfiguration
     * @param {?} activatedRoute
     * @param {?} configuration
     * @param {?} communication
     */
    constructor(layoutsConfiguration, activatedRoute, configuration, communication) {
        super(layoutsConfiguration.get('MrHomeLayoutConfig') || config);
        this.activatedRoute = activatedRoute;
        this.configuration = configuration;
        this.communication = communication;
    }
    /**
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            configId: this.configId,
            configuration: this.configuration,
            communication: this.communication,
            options: this.config.options || {}
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activatedRoute.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.configId = data.configId;
            this.loadWidgets();
            this.onInit();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
    /**
     * @return {?}
     */
    loadWidgets() {
        /** @type {?} */
        const homeConfig = this.configuration.get(this.configId) || {};
        const { sections } = homeConfig;
        this.widgets = [];
        if (sections) {
            sections.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ id, type }) => {
                this.widgets.push({
                    id,
                    dataSource: DATASOURCE_MAP[type],
                    eventHandler: EVENTHANDLER_MAP[type]
                });
            }));
        }
    }
}
MrHomeLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'mr-home-layout',
                template: "<div class=\"mr-home mr-layout\" *ngIf=\"lb.dataSource\">\n    <section *ngFor=\"let section of lb.dataSource.pageConfig.sections\" class=\"{{ 'mr-layout__' + section.type }}\">\n        <ng-container [ngSwitch]=\"section.type\">\n\n            <!-- SLIDER -->\n            <ng-container *ngSwitchCase=\"'slider'\">\n                <n7-carousel \n                [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[section.id].emit\">\n                </n7-carousel> \n            </ng-container>\n\n            <!-- COLLECTION -->\n            <ng-container *ngSwitchCase=\"'collection'\">\n                <n7-inner-title \n                [data]=\"(lb.widgets[section.id].ds.out$ | async)?.header\"\n                [emit]=\"lb.widgets[section.id].emit\">\n                </n7-inner-title>\n                <div class=\"{{ section.grid ? 'n7-grid-' + section.grid : '' }}\">\n                    <n7-item-preview\n                    *ngFor=\"let item of (lb.widgets[section.id].ds.out$ | async)?.items\"\n                    [data]=\"item\"\n                    [emit]=\"lb.widgets[section.id].emit\">\n                    </n7-item-preview>\n                </div>\n            </ng-container>\n\n            <!-- HERO -->\n            <ng-container *ngSwitchCase=\"'hero'\">\n                <n7-hero \n                [data]=\"lb.widgets[section.id].ds.out$ | async\"\n                [emit]=\"lb.widgets[section.id].emit\">\n                </n7-hero> \n            </ng-container>\n        \n        </ng-container>\n    </section>\n    \n</div>\n"
            }] }
];
/** @nocollapse */
MrHomeLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: CommunicationService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixJQUFJLE1BQU0sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztNQUVsRCxjQUFjLEdBQUc7SUFDckIsTUFBTSxFQUFFLFVBQVU7SUFDbEIsVUFBVSxFQUFFLGNBQWM7SUFDMUIsSUFBSSxFQUFFLFFBQVE7Q0FDZjs7TUFFSyxnQkFBZ0IsR0FBRztJQUN2QixNQUFNLEVBQUUsVUFBVTtJQUNsQixVQUFVLEVBQUUsY0FBYztJQUMxQixJQUFJLEVBQUUsUUFBUTtDQUNmO0FBTUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGNBQWM7Ozs7Ozs7SUFHdkQsWUFDRSxvQkFBaUQsRUFDekMsY0FBOEIsRUFDOUIsYUFBbUMsRUFDbkMsYUFBbUM7UUFFM0MsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBSnhELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBRzdDLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsV0FBVzs7Y0FDSCxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Y0FDeEQsRUFBRSxRQUFRLEVBQUUsR0FBRyxVQUFVO1FBRS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQixFQUFFO29CQUNGLFVBQVUsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDO29CQUNoQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2lCQUNyQyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixxa0RBQWlDO2FBQ2xDOzs7O1lBekJRLDJCQUEyQjtZQUgzQixjQUFjO1lBSWQsb0JBQW9CO1lBRnBCLG9CQUFvQjs7Ozs7OztJQTRCM0IseUNBQXlCOzs7OztJQUl2QiwrQ0FBc0M7Ozs7O0lBQ3RDLDhDQUEyQzs7Ozs7SUFDM0MsOENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNckhvbWVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9ob21lLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgTXJTbGlkZXJEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9zbGlkZXIuZHMnO1xuaW1wb3J0IHsgTXJDb2xsZWN0aW9uRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvY29sbGVjdGlvbi5kcyc7XG5pbXBvcnQgeyBNckhlcm9EUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9oZXJvLmRzJztcbmltcG9ydCB7IE1yU2xpZGVyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9zbGlkZXIuZWgnO1xuaW1wb3J0IHsgTXJDb2xsZWN0aW9uRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycy9jb2xsZWN0aW9uLmVoJztcbmltcG9ydCB7IE1ySGVyb0VIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMvaGVyby5laCc7XG5cbmNvbnN0IERBVEFTT1VSQ0VfTUFQID0ge1xuICBzbGlkZXI6IE1yU2xpZGVyRFMsXG4gIGNvbGxlY3Rpb246IE1yQ29sbGVjdGlvbkRTLFxuICBoZXJvOiBNckhlcm9EUyxcbn07XG5cbmNvbnN0IEVWRU5USEFORExFUl9NQVAgPSB7XG4gIHNsaWRlcjogTXJTbGlkZXJFSCxcbiAgY29sbGVjdGlvbjogTXJDb2xsZWN0aW9uRUgsXG4gIGhlcm86IE1ySGVyb0VILFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItaG9tZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1ySG9tZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNckhvbWVMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWdJZDogdGhpcy5jb25maWdJZCxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge31cbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb25maWdJZCA9IGRhdGEuY29uZmlnSWQ7XG4gICAgICB0aGlzLmxvYWRXaWRnZXRzKCk7XG4gICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxuXG4gIGxvYWRXaWRnZXRzKCkge1xuICAgIGNvbnN0IGhvbWVDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpIHx8IHt9O1xuICAgIGNvbnN0IHsgc2VjdGlvbnMgfSA9IGhvbWVDb25maWc7XG5cbiAgICB0aGlzLndpZGdldHMgPSBbXTtcbiAgICBpZiAoc2VjdGlvbnMpIHtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHsgaWQsIHR5cGUgfSkgPT4ge1xuICAgICAgICB0aGlzLndpZGdldHMucHVzaCh7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgZGF0YVNvdXJjZTogREFUQVNPVVJDRV9NQVBbdHlwZV0sXG4gICAgICAgICAgZXZlbnRIYW5kbGVyOiBFVkVOVEhBTkRMRVJfTUFQW3R5cGVdXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=