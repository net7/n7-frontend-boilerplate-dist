/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { AwEntitaLayoutConfig as config } from './entita-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
export class AwEntitaLayoutComponent extends AbstractLayout {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} location
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} communication
     * @param {?} mainState
     * @param {?} titleService
     */
    constructor(router, route, location, configuration, layoutsConfiguration, communication, mainState, titleService) {
        super(layoutsConfiguration.get('AwEntitaLayoutConfig') || config);
        this.router = router;
        this.route = route;
        this.location = location;
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
            location: this.location,
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
                template: "<div class=\"aw-entity n7-side-auto-padding\" *ngIf=\"lb.dataSource\">\r\n\r\n    <div class=\"aw-entity__sidebar\">\r\n        <!-- Custom header -->\r\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-title-wrapper-loading\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-title'\r\n                }]\r\n            }\">\r\n            </n7-content-placeholder>\r\n        </div>\r\n        <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\"\r\n            class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\r\n            <h1 class=\"aw-entity__sidebar-title\">\r\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\r\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\r\n            </h1>\r\n        </div>\r\n        <!-- Navigation -->\r\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-nav-loading\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2]\"\r\n            [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-nav'\r\n                }]\r\n            }\">\r\n            </n7-content-placeholder>\r\n        </div>\r\n        <n7-nav [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" [emit]=\"lb.widgets['aw-entita-nav'].emit\">\r\n        </n7-nav>\r\n    </div>\r\n\r\n    <!-- lb.dataSource.selectedTab -->\r\n    <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content-loading\">\r\n        <div class=\"aw-entity__content-loading-title\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-title'\r\n                }]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n\r\n        <div class=\"aw-entity__content-loading-items\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\r\n            [data]=\"{\r\n                blocks: [\r\n                {\r\n                    classes: 'entity-placeholder-item-preview'\r\n                }\r\n                ]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content\">\r\n        <section>\r\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\r\n                class=\"aw-entity__content-section\" [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\r\n                <div class=\"aw-entity__overview-description\">\r\n                    {{lb.dataSource.myResponse.extraTab}}\r\n                </div>\r\n                <div class=\"aw-entity-layout__button-wrapper\">\r\n                    <a *ngIf=\"lb.dataSource.myResponse.wikiTab\" class=\"n7-btn n7-btn-light\"\r\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/wiki']\">\r\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                    <a *ngIf=\"lb.dataSource.myResponse.extraTab\" class=\"n7-btn n7-btn-light\"\r\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/maxxi']\">\r\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"\r\n            ((lb.dataSource.myResponse.fields || []).length > 0 && lb.dataSource.selectedTab == 'campi') ||\r\n            (lb.dataSource.showFields && lb.dataSource.selectedTab == 'overview')\">\r\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\r\n                    [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'campi'\">\r\n                    <div class=\"aw-entity__content-section-header\">\r\n                        <h2 class=\"aw-entity__content-section-title\">Campi</h2>\r\n                        <a class=\"n7-btn n7-btn-light\" [routerLink]=\"[lb.dataSource.getNavBasePath() + 'campi']\">\r\n                            TUTTI I CAMPI <i class=\"n7-icon-angle-right\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\r\n                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async \">\r\n                    </n7-metadata-viewer>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\r\n                *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\"\r\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\r\n                <div class=\"aw-entity__content-section-header\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\r\n\r\n                    <a *ngIf=\"lb.dataSource.selectedTab === 'overview' \"\r\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/oggetti-collegati/']\"\r\n                        [queryParams]=\"{ page: 1 }\" class=\"n7-btn n7-btn-light\">\r\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"aw-entity__content-item-previews\">\r\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                        </n7-smart-breadcrumbs>\r\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </ng-container>\r\n                </div>\r\n                <n7-smart-pagination \r\n                    *ngIf=\"lb.dataSource.selectedTab === 'oggetti-collegati'\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview aw-bubble-chart__{{lb.dataSource.selectedTab}}\"\r\n                *ngIf=\"lb.dataSource.bubblesEnabled && lb.dataSource.myResponse.relatedEntities\"\r\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\r\n                <div class=\"aw-entity__content-section-header\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\r\n                    <a *ngIf=\"lb.dataSource.selectedTab == 'overview'\" class=\"n7-btn n7-btn-light\"\r\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/entita-collegate']\">\r\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n                <!-- Small Bubble Chart -->\r\n                <div class=\"aw-entity__bubble-chart-wrapper-small\" *ngIf=\"lb.dataSource.selectedTab == 'overview'\">\r\n                    <aw-bubble-chart-wrapper>\r\n                        <!-- Tippy template moved to end of HTML -->\r\n                        <n7-bubble-chart [data]=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.smallView\"\r\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\r\n                        </n7-bubble-chart>\r\n                    </aw-bubble-chart-wrapper>\r\n                </div>\r\n                <!-- Big Bubble Chart -->\r\n                <div class=\"aw-entity__bubble-chart-wrapper\" *ngIf=\"lb.dataSource.selectedTab == 'entita-collegate'\">\r\n                    <aw-bubble-chart-wrapper>\r\n                        <!-- Tippy template moved to end of HTML -->\r\n                        <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\r\n                        </n7-bubble-chart>\r\n                    </aw-bubble-chart-wrapper>\r\n                </div>\r\n            </div>\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\r\n                *ngIf=\"lb.dataSource.myResponse.extraTab\" [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\r\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\r\n                </div>\r\n                <div>\r\n                    {{lb.dataSource.myResponse.extraTab}}\r\n                </div>\r\n            </div>\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\r\n                *ngIf=\"lb.dataSource.myResponse.wikiTab\" [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\r\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\r\n                </div>\r\n                <div>\r\n                    {{lb.dataSource.myResponse.wikiTab.text}}\r\n                </div>\r\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\r\n                    {{ lb.dataSource.myResponse.wikiTab.url }}\r\n                </a>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <!-- Template for bubble chart tooltips -->\r\n    <aw-chart-tippy [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\" [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\r\n    </aw-chart-tippy>\r\n</div>"
            }] }
];
/** @nocollapse */
AwEntitaLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: Location },
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
    AwEntitaLayoutComponent.prototype.location;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixJQUFJLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBTXRGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7Ozs7OztJQUN6RCxZQUNVLE1BQWMsRUFDZCxLQUFxQixFQUNyQixRQUFrQixFQUNsQixhQUFtQyxFQUNuQyxvQkFBaUQsRUFDakQsYUFBbUMsRUFDbkMsU0FBMkIsRUFDM0IsWUFBbUI7UUFFM0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBVDFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1FBQ2pELGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBTztJQUc3QixDQUFDOzs7Ozs7Ozs7O0lBT1MsV0FBVztRQUNuQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUE7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDYvVEFBbUM7YUFDcEM7Ozs7WUFaUSxNQUFNO1lBQUUsY0FBYztZQUR0QixRQUFRO1lBSVIsb0JBQW9CO1lBQ3BCLDJCQUEyQjtZQUczQixvQkFBb0I7WUFGcEIsZ0JBQWdCO1lBSmhCLEtBQUs7Ozs7Ozs7SUFjVix5Q0FBc0I7Ozs7O0lBQ3RCLHdDQUE2Qjs7Ozs7SUFDN0IsMkNBQTBCOzs7OztJQUMxQixnREFBMkM7Ozs7O0lBQzNDLHVEQUF5RDs7Ozs7SUFDekQsZ0RBQTJDOzs7OztJQUMzQyw0Q0FBbUM7Ozs7O0lBQ25DLCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXdFbnRpdGFMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9lbnRpdGEtbGF5b3V0LmNvbmZpZyc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F3LWVudGl0YS1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lbnRpdGEtbGF5b3V0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ0F3RW50aXRhTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICBPcHRpb25hbCB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgbGF5b3V0J3MgbG9naWMuXHJcbiAgICBJZiByZW1vdmVkLCB0aGV5IG11c3QgYWxzbyBiZSByZW1vdmVkIGZyb20gdGhlIGxheW91dCdzIERhdGFTb3VyY2UgZmlsZSxcclxuICAgIGFuZCBmcm9tIHRoaXMgZmlsZSBpbXBvcnRzLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcclxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlcixcclxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXHJcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxyXG4gICAgICB0aXRsZVNlcnZpY2U6IHRoaXMudGl0bGVTZXJ2aWNlLFxyXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59Il19