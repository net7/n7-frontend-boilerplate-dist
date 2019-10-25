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
    /*
        Optional variables that can be accessed from the layout's logic.
        If removed, they must also be removed from the layout's DataSource file,
        and from this file imports.
       */
    /**
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
                template: "<div class=\"aw-entity\" *ngIf=\"lb.dataSource\">\n\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <n7-nav [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n\n    <div class=\"aw-entity__content\" [ngSwitch]=\"lb.dataSource.selectedTab\">\n        <ng-container *ngSwitchCase=\"'overview'\">\n            <ng-container *ngTemplateOutlet=\"overview\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'campi'\">\n            <ng-container *ngTemplateOutlet=\"campi\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'oggetti-collegati'\">\n            <ng-container *ngTemplateOutlet=\"oggetti\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'entita-collegate'\">\n            <ng-container *ngTemplateOutlet=\"entita\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'maxxi'\">\n            <ng-container *ngTemplateOutlet=\"maxxi\"></ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'wiki'\">\n            <ng-container *ngTemplateOutlet=\"wiki\"></ng-container>\n        </ng-container>\n    </div>\n</div>\n\n<!-- navigation page content templates -->\n<ng-template #overview>\n    <section>\n        <div class=\"aw-entity__content-section\">\n            <div class=\"aw-entity__overview-description\">\n                {{lb.dataSource.myResponse.extraTab}}\n            </div>\n            <div class=\"aw-entity-layout__button-wrapper\">\n                <button *ngIf=\"lb.dataSource.myResponse.wikiTab\" class=\"n7-btn n7-btn-light\"\n                    (click)=\"lb.eventHandler.emitInner('showmore', 'wiki')\">\n                    DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\n                </button>\n                <button *ngIf=\"lb.dataSource.myResponse.extraTab\" class=\"n7-btn n7-btn-light\"\n                    (click)=\"lb.eventHandler.emitInner('showmore', 'maxxi')\">\n                    DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\n                </button>\n            </div>\n        </div>\n\n        <ng-container *ngIf=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async as data\">\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n                    <button class=\"n7-btn n7-btn-light\" (click)=\"lb.eventHandler.emitInner('showmore', 'campi')\">\n                        TUTTI I CAMPI <i class=\"n7-icon-angle-right\"></i>\n                    </button>\n                </div>\n                <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\" [data]=\"data\">\n                </n7-metadata-viewer>\n            </div>\n        </ng-container>\n\n        <div class=\"aw-entity__content-section aw-entity__content-section-overview\">\n            <div class=\"aw-entity__content-section-header\">\n                <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n                <button class=\"n7-btn n7-btn-light\"\n                    (click)=\"lb.eventHandler.emitInner('showmore', 'oggetti-collegati')\">\n                    TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\n                </button>\n            </div>\n            <ng-container *ngFor=\"let preview of lb.widgets['aw-linked-objects'].ds.out$ | async\">\n                <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n                </n7-breadcrumbs>\n                <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-item-preview>\n            </ng-container>\n        </div>\n\n        <div\n            class=\"aw-entity__content-section aw-entity__content-section-overview\"\n            *ngIf=\"lb.dataSource.bubblesEnabled\"\n        >\n            <div class=\"aw-entity__content-section-header\">\n                <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n                <button class=\"n7-btn n7-btn-light\" (click)=\"lb.eventHandler.emitInner('showmore', 'entita-collegate')\">\n                    TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\n                </button>\n            </div>\n            <div  [style.overflow]=\"'hidden'\">\n                <aw-bubble-chart-wrapper\n                [hover]=\"lb.widgets['aw-bubble-chart'].ds.currentHoverEntity\"\n                [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n                [container]=\"'bubble-chart-container-overview'\"\n                [buttons]=\"['goto']\"\n                >\n                    <n7-bubble-chart\n                    [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                    </n7-bubble-chart>\n                </aw-bubble-chart-wrapper>\n            </div>\n        </div>\n    </section>\n</ng-template>\n\n<ng-template #campi>\n    <div class=\"aw-entity__content-section aw-entity__content-section-fields\">\n        <ng-container *ngIf=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async as data\">\n            <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n            </div>\n            <n7-metadata-viewer class=\"aw-entita-layout__metadata-viewer\" [data]=\"data\">\n            </n7-metadata-viewer>\n        </ng-container>\n    </div>\n</ng-template>\n\n<ng-template #oggetti>\n    <div class=\"aw-entity__content-section aw-entity__content-section-objects\">\n        <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n            <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n        </div>\n        <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n            <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n            </n7-breadcrumbs>\n            <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n            </n7-item-preview>\n        </ng-container>\n        <n7-pagination [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n        </n7-pagination>\n    </div>\n</ng-template>\n\n<ng-template #entita>\n    <div class=\"aw-entity__content-section aw-entity__content-section-entities\">\n        <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n            <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n        </div>\n        <div  [style.overflow]=\"'hidden'\">\n            <aw-bubble-chart-wrapper\n            [hover]=\"lb.widgets['aw-bubble-chart'].ds.currentHoverEntity\"\n            [emit]=\"lb.widgets['aw-bubble-chart'].emit\"\n            [container]=\"'bubble-chart-container'\"\n            [buttons]=\"['goto']\"\n            >\n                <n7-bubble-chart\n                [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                </n7-bubble-chart>\n            </aw-bubble-chart-wrapper>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #maxxi>\n    <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\">\n        <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n            <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\n        </div>\n        <div>\n            {{lb.dataSource.myResponse.extraTab}}\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #wiki>\n    <div class=\"aw-entity__content-section aw-entity__content-section-wiki\">\n        <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n            <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\n        </div>\n        <div>\n            {{lb.dataSource.myResponse.wikiTab.text}}\n        </div>\n        <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\n            {{lb.dataSource.myResponse.wikiTab.url}}\n        </a>\n    </div>\n</ng-template>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU1oRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsY0FBYzs7Ozs7Ozs7OztJQUN6RCxZQUNVLE1BQWMsRUFDZCxLQUFxQixFQUNyQixhQUFtQyxFQUNuQyxvQkFBaUQsRUFDakQsYUFBbUMsRUFDbkMsU0FBMkIsRUFDM0IsWUFBbUI7UUFFM0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBUjFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQU87SUFHN0IsQ0FBQzs7Ozs7Ozs7OztJQU9TLFdBQVc7UUFDbkIsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUE7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHl4UkFBbUM7YUFDcEM7Ozs7WUFaUSxNQUFNO1lBQUUsY0FBYztZQUd0QixvQkFBb0I7WUFDcEIsMkJBQTJCO1lBRzNCLG9CQUFvQjtZQUZwQixnQkFBZ0I7WUFKaEIsS0FBSzs7Ozs7OztJQWNWLHlDQUFzQjs7Ozs7SUFDdEIsd0NBQTZCOzs7OztJQUM3QixnREFBMkM7Ozs7O0lBQzNDLHVEQUF5RDs7Ozs7SUFDekQsZ0RBQTJDOzs7OztJQUMzQyw0Q0FBbUM7Ozs7O0lBQ25DLCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0XCI7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMnO1xuaW1wb3J0IHsgQXdFbnRpdGFMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9lbnRpdGEtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LWVudGl0YS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZW50aXRhLWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnQXdFbnRpdGFMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgLypcbiAgICBPcHRpb25hbCB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgbGF5b3V0J3MgbG9naWMuXG4gICAgSWYgcmVtb3ZlZCwgdGhleSBtdXN0IGFsc28gYmUgcmVtb3ZlZCBmcm9tIHRoZSBsYXlvdXQncyBEYXRhU291cmNlIGZpbGUsXG4gICAgYW5kIGZyb20gdGhpcyBmaWxlIGltcG9ydHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgICB0aXRsZVNlcnZpY2U6IHRoaXMudGl0bGVTZXJ2aWNlLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufSJdfQ==