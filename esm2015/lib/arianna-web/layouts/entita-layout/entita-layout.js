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
                template: "<div class=\"aw-entity n7-side-auto-padding\" *ngIf=\"lb.dataSource\">\n\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-title-wrapper-loading\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-title'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n        <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\"\n            class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-nav-loading\">\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2]\"\n            [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-nav'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n        <n7-nav [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n\n    <!-- lb.dataSource.selectedTab -->\n    <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content-loading\">\n        <div class=\"aw-entity__content-loading-title\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-title'\n                }]\n            }\"></n7-content-placeholder>\n        </div>\n\n        <div class=\"aw-entity__content-loading-items\">\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\n            [data]=\"{\n                blocks: [\n                {\n                    classes: 'entity-placeholder-item-preview'\n                }\n                ]\n            }\"></n7-content-placeholder>\n        </div>\n    </div>\n\n    <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content\">\n        <section>\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\n                class=\"aw-entity__content-section\" [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\n                <div class=\"aw-entity__overview-description\">\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n                <div class=\"aw-entity-layout__button-wrapper\">\n                    <a *ngIf=\"lb.dataSource.myResponse.wikiTab\" class=\"n7-btn n7-btn-light\"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/wiki']\">\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                    <a *ngIf=\"lb.dataSource.myResponse.extraTab\" class=\"n7-btn n7-btn-light\"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/maxxi']\">\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n            </div>\n\n            <ng-container *ngIf=\"\n            ((lb.dataSource.myResponse.fields || []).length > 0 && lb.dataSource.selectedTab == 'campi') ||\n            (lb.dataSource.showFields && lb.dataSource.selectedTab == 'overview')\">\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                    [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'campi'\">\n                    <div class=\"aw-entity__content-section-header\">\n                        <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n                        <a class=\"n7-btn n7-btn-light\" [routerLink]=\"[lb.dataSource.getNavBasePath() + 'campi']\">\n                            TUTTI I CAMPI <i class=\"n7-icon-angle-right\"></i>\n                        </a>\n                    </div>\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\n                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async \">\n                    </n7-metadata-viewer>\n                </div>\n            </ng-container>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n\n                    <a *ngIf=\"lb.dataSource.selectedTab === 'overview' \"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/oggetti-collegati/']\"\n                        [queryParams]=\"{ page: 1 }\" class=\"n7-btn n7-btn-light\">\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n                <div class=\"aw-entity__content-item-previews\">\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <div class=\"aw-entity__content-item-preview-wrapper\">\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                            </n7-smart-breadcrumbs>\n                            <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                            <!-- relation -->\n                            <div class=\"aw-entity__relation\" *ngIf=\"preview.relation.value\">\n                                <p class=\"aw-entity__relation-description\">Relazione con \n                                <span class=\"aw-entity__relation-key\">{{preview.relation.key}}</span>:\n                                <span class=\"aw-entity__relation-value\"> {{preview.relation.value}}</span>\n                                </p>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <n7-smart-pagination \n                    *ngIf=\"lb.dataSource.selectedTab === 'oggetti-collegati'\"\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview aw-bubble-chart__{{lb.dataSource.selectedTab}}\"\n                *ngIf=\"lb.dataSource.bubblesEnabled && lb.dataSource.myResponse.relatedEntities\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n                    <a *ngIf=\"lb.dataSource.selectedTab == 'overview'\" class=\"n7-btn n7-btn-light\"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/entita-collegate']\">\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n                <!-- Small Bubble Chart -->\n                <div class=\"aw-entity__bubble-chart-wrapper-small\" *ngIf=\"lb.dataSource.selectedTab == 'overview'\">\n                    <aw-bubble-chart-wrapper>\n                        <!-- Tippy template moved to end of HTML -->\n                        <n7-bubble-chart [data]=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.smallView\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n                <!-- Big Bubble Chart -->\n                <div class=\"aw-entity__bubble-chart-wrapper\" *ngIf=\"lb.dataSource.selectedTab == 'entita-collegate'\">\n                    <aw-bubble-chart-wrapper>\n                        <!-- Tippy template moved to end of HTML -->\n                        <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\n                *ngIf=\"lb.dataSource.myResponse.extraTab\" [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\n                *ngIf=\"lb.dataSource.myResponse.wikiTab\" [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.wikiTab.text}}\n                </div>\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\n                    {{ lb.dataSource.myResponse.wikiTab.url }}\n                </a>\n            </div>\n        </section>\n    </div>\n    <!-- Template for bubble chart tooltips -->\n    <aw-chart-tippy [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\" [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\n    </aw-chart-tippy>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixJQUFJLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBTXRGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7Ozs7OztJQUN6RCxZQUNVLE1BQWMsRUFDZCxLQUFxQixFQUNyQixRQUFrQixFQUNsQixhQUFtQyxFQUNuQyxvQkFBaUQsRUFDakQsYUFBbUMsRUFDbkMsU0FBMkIsRUFDM0IsWUFBbUI7UUFFM0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBVDFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1FBQ2pELGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBTztJQUc3QixDQUFDOzs7Ozs7Ozs7O0lBT1MsV0FBVztRQUNuQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLG96VUFBbUM7YUFDcEM7Ozs7WUFaUSxNQUFNO1lBQUUsY0FBYztZQUR0QixRQUFRO1lBSVIsb0JBQW9CO1lBQ3BCLDJCQUEyQjtZQUczQixvQkFBb0I7WUFGcEIsZ0JBQWdCO1lBSmhCLEtBQUs7Ozs7Ozs7SUFjVix5Q0FBc0I7Ozs7O0lBQ3RCLHdDQUE2Qjs7Ozs7SUFDN0IsMkNBQTBCOzs7OztJQUMxQixnREFBMkM7Ozs7O0lBQzNDLHVEQUF5RDs7Ozs7SUFDekQsZ0RBQTJDOzs7OztJQUMzQyw0Q0FBbUM7Ozs7O0lBQ25DLCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBBd0VudGl0YUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2VudGl0YS1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LWVudGl0YS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZW50aXRhLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSxcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdBd0VudGl0YUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICAvKlxuICAgIE9wdGlvbmFsIHZhcmlhYmxlcyB0aGF0IGNhbiBiZSBhY2Nlc3NlZCBmcm9tIHRoZSBsYXlvdXQncyBsb2dpYy5cbiAgICBJZiByZW1vdmVkLCB0aGV5IG11c3QgYWxzbyBiZSByZW1vdmVkIGZyb20gdGhlIGxheW91dCdzIERhdGFTb3VyY2UgZmlsZSxcbiAgICBhbmQgZnJvbSB0aGlzIGZpbGUgaW1wb3J0cy5cbiAgICovXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxuICAgICAgdGl0bGVTZXJ2aWNlOiB0aGlzLnRpdGxlU2VydmljZSxcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=