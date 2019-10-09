/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from "../../../common/models/abstract-layout";
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services';
import { AwEntitaLayoutConfig as config } from './entita-layout.config';
import { CommunicationService } from '../../../common/services';
export class AwEntitaLayoutComponent extends AbstractLayout {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} communication
     * @param {?} mainState
     * @param {?} titleService
     */
    constructor(router, route, configuration, layoutsConfiguration, communication, mainState, titleService) {
        super(layoutsConfiguration.get('AwEntitaLayoutConfig') || config);
        this.router = router;
        this.route = route;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.communication = communication;
        this.mainState = mainState;
        this.titleService = titleService;
    }
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     * @protected
     * @return {?}
     */
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy();
    }
}
AwEntitaLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-entita-layout',
                template: "<div class=\"aw-entity\" *ngIf=\"lb.dataSource\">\n\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div class=\"aw-entity__sidebar-title-wrapper\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <n7-nav \n            [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" \n            [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n    \n    <div class=\"aw-entity__content\" \n         [ngSwitch]=\"lb.dataSource.selectedTab\">\n        <ng-container *ngSwitchCase=\"'overview'\">\n            <ng-container *ngTemplateOutlet=\"overview\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'campi'\">\n            <ng-container *ngTemplateOutlet=\"campi\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'oggetti-collegati'\">\n            <ng-container *ngTemplateOutlet=\"oggetti\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'entita-collegate'\">\n            <ng-container *ngTemplateOutlet=\"entita\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'maxxi'\">\n            <ng-container *ngTemplateOutlet=\"maxxi\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'wiki'\">\n            <ng-container *ngTemplateOutlet=\"wiki\"></ng-container>\n        </ng-container>\n    </div>\n</div>\n\n<!-- navigation page content templates -->\n<ng-template #overview>\n    <section>\n        <div class=\"aw-entity__content-section\">\n            <div class=\"aw-entity__overview-description\">\n                {{lb.dataSource.myResponse.overviewTab}}\n            </div>\n            <div class=\"aw-entita-layout__button-wrapper\">\n                <button class=\"n7-btn n7-btn-light\">DESCRIZIONE WIKIPEDIA</button>\n                <button class=\"n7-btn n7-btn-light\">DESCRIZIONE MAXXI</button>\n            </div>\n        </div>\n        \n        <ng-container *ngIf=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async as data\">\n            <div class=\"aw-entity__content-section\">\n                <h1>Campi</h1>\n                <button class=\"n7-btn n7-btn-light\">TUTTI I CAMPI</button>\n                <n7-metadata-viewer \n                    class=\"aw-entita-layout__metadata-viewer\"\n                    [data]=\"data\">\n                </n7-metadata-viewer>\n            </div>\n        </ng-container>\n        \n        <div class=\"aw-entity__content-section\">\n            <h1>Oggetti collegati</h1><button class=\"n7-btn n7-btn-light\">TUTTI GLI OGGETTI COLLEGATI</button>\n            <ng-container *ngFor=\"let preview of lb.widgets['aw-linked-objects'].ds.out$ | async\">\n                <n7-breadcrumbs\n                    [data]=\"preview.breadcrumbs\">\n                </n7-breadcrumbs>\n                <n7-item-preview\n                    [data]=\"preview\"\n                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-item-preview>\n            </ng-container>\n        </div>\n        \n    </section>\n</ng-template>\n\n<ng-template #campi>\n    <div>\n        <ng-container *ngIf=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async as data\">\n            <h1>Campi</h1>\n            <n7-metadata-viewer class=\"aw-entita-layout__metadata-viewer\"\n                [data]=\"data\">\n            </n7-metadata-viewer>\n        </ng-container>\n    </div>\n</ng-template>\n\n<ng-template #oggetti>\n    <div>\n        <h1>Oggetti collegati</h1>\n        <ng-container \n            *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n            <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n            </n7-breadcrumbs>\n            <n7-item-preview \n                [data]=\"preview\"\n                [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n            </n7-item-preview>\n        </ng-container>\n        <n7-pagination \n            [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n        </n7-pagination>\n    </div>\n</ng-template>\n\n<ng-template #entita>\n    <div>\n        Page entita\n    </div>\n</ng-template>\n\n<ng-template #maxxi>\n    <div>\n        Page maxxi\n    </div>\n</ng-template>\n\n<ng-template #wiki>\n    <div>\n        Page wiki\n    </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
AwEntitaLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: CommunicationService },
    { type: MainStateService },
    { type: Title }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutComponent.prototype.titleService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU1oRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsY0FBYzs7Ozs7Ozs7OztJQUN6RCxZQUNVLE1BQWMsRUFDZCxLQUFxQixFQUNyQixhQUFtQyxFQUNuQyxvQkFBaUQsRUFDakQsYUFBbUMsRUFDbkMsU0FBMkIsRUFDM0IsWUFBbUI7UUFFM0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBUjFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQU87SUFHN0IsQ0FBQzs7Ozs7Ozs7SUFPUyxXQUFXO1FBQ25CLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFBO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qixzb0pBQW1DO2FBQ3BDOzs7O1lBWlEsTUFBTTtZQUFFLGNBQWM7WUFHdEIsb0JBQW9CO1lBQ3BCLDJCQUEyQjtZQUczQixvQkFBb0I7WUFGcEIsZ0JBQWdCO1lBSmhCLEtBQUs7Ozs7Ozs7SUFjVix5Q0FBc0I7Ozs7O0lBQ3RCLHdDQUE2Qjs7Ozs7SUFDN0IsZ0RBQTJDOzs7OztJQUMzQyx1REFBeUQ7Ozs7O0lBQ3pELGdEQUEyQzs7Ozs7SUFDM0MsNENBQW1DOzs7OztJQUNuQywrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dFwiO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzJztcbmltcG9ydCB7IEF3RW50aXRhTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vZW50aXRhLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1lbnRpdGEtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VudGl0YS1sYXlvdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZVxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ0F3RW50aXRhTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcHRpb25hbCB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgbGF5b3V0J3MgbG9naWMuXG4gICAqIElmIHJlbW92ZWQsIHRoZXkgbXVzdCBhbHNvIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGF5b3V0J3MgRGF0YVNvdXJjZSBmaWxlLFxuICAgKiBhbmQgZnJvbSB0aGlzIGZpbGUgaW1wb3J0cy5cbiAgICovXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcbiAgICAgIHRpdGxlU2VydmljZTogdGhpcy50aXRsZVNlcnZpY2UsXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59Il19