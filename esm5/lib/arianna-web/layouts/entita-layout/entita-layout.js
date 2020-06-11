/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var AwEntitaLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaLayoutComponent, _super);
    function AwEntitaLayoutComponent(router, route, location, configuration, layoutsConfiguration, communication, mainState, titleService) {
        var _this = _super.call(this, layoutsConfiguration.get('AwEntitaLayoutConfig') || config) || this;
        _this.router = router;
        _this.route = route;
        _this.location = location;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.communication = communication;
        _this.mainState = mainState;
        _this.titleService = titleService;
        return _this;
    }
    /*
      Optional variables that can be accessed from the layout's logic.
      If removed, they must also be removed from the layout's DataSource file,
      and from this file imports.
     */
    /*
        Optional variables that can be accessed from the layout's logic.
        If removed, they must also be removed from the layout's DataSource file,
        and from this file imports.
       */
    /**
     * @protected
     * @return {?}
     */
    AwEntitaLayoutComponent.prototype.initPayload = /*
        Optional variables that can be accessed from the layout's logic.
        If removed, they must also be removed from the layout's DataSource file,
        and from this file imports.
       */
    /**
     * @protected
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    AwEntitaLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwEntitaLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwEntitaLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-entita-layout',
                    template: "<div class=\"aw-entity n7-side-auto-padding\" *ngIf=\"lb.dataSource\">\n\n    <div class=\"aw-entity__sidebar\">\n        <!-- Custom header -->\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-title-wrapper-loading\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-title'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n        <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\"\n            class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\n            <h1 class=\"aw-entity__sidebar-title\">\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\n            </h1>\n        </div>\n        <!-- Navigation -->\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-nav-loading\">\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2]\"\n            [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-nav'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n        <n7-nav [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" [emit]=\"lb.widgets['aw-entita-nav'].emit\">\n        </n7-nav>\n    </div>\n\n    <!-- lb.dataSource.selectedTab -->\n    <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content-loading\">\n        <div class=\"aw-entity__content-loading-title\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'entity-placeholder-title'\n                }]\n            }\"></n7-content-placeholder>\n        </div>\n\n        <div class=\"aw-entity__content-loading-items\">\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\n            [data]=\"{\n                blocks: [\n                {\n                    classes: 'entity-placeholder-item-preview'\n                }\n                ]\n            }\"></n7-content-placeholder>\n        </div>\n    </div>\n\n    <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content\">\n        <section>\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\n                class=\"aw-entity__content-section\" [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\n                <div class=\"aw-entity__overview-description\">\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n                <div class=\"aw-entity-layout__button-wrapper\">\n                    <a *ngIf=\"lb.dataSource.myResponse.wikiTab\" class=\"n7-btn n7-btn-light\"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/wiki']\">\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                    <a *ngIf=\"lb.dataSource.myResponse.extraTab\" class=\"n7-btn n7-btn-light\"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/maxxi']\">\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n            </div>\n\n            <ng-container \n                *ngIf=\"(\n                    lb.widgets['aw-entita-metadata-viewer'].ds.hasFields && \n                    ['overview', 'campi'].indexOf(lb.dataSource.selectedTab) !== -1\n                )\">\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\">\n                    <div class=\"aw-entity__content-section-header\">\n                        <h2 class=\"aw-entity__content-section-title\">Campi</h2>\n                        <a \n                        *ngIf=\"lb.dataSource.selectedTab !== 'campi'\"\n                        class=\"n7-btn n7-btn-light\" \n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/campi']\">\n                            TUTTI I CAMPI <i class=\"n7-icon-angle-right\"></i>\n                        </a>\n                    </div>\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\n                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async \">\n                    </n7-metadata-viewer>\n                </div>\n            </ng-container>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\n                *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews && lb.dataSource.myResponse.relatedItems\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\n\n                    <a *ngIf=\"lb.dataSource.selectedTab === 'overview' \"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/oggetti-collegati/']\"\n                        [queryParams]=\"{ page: 1 }\" class=\"n7-btn n7-btn-light\">\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n                <div class=\"aw-entity__content-item-previews\">\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <div class=\"aw-entity__content-item-preview-wrapper\">\n                            <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\n                            </n7-smart-breadcrumbs>\n                            <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                            <!-- relation -->\n                            <div class=\"aw-entity__relation\" *ngIf=\"preview.relation.value\">\n                                <p class=\"aw-entity__relation-description\">Relazione con \n                                <span class=\"aw-entity__relation-key\">{{preview.relation.key}}</span>:\n                                <span class=\"aw-entity__relation-value\"> {{preview.relation.value}}</span>\n                                </p>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <n7-smart-pagination \n                    *ngIf=\"lb.dataSource.selectedTab === 'oggetti-collegati'\"\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\n                </n7-smart-pagination>\n            </div>\n\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview aw-bubble-chart__{{lb.dataSource.selectedTab}}\"\n                *ngIf=\"lb.dataSource.bubblesEnabled && lb.dataSource.myResponse.relatedEntities\"\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\n                <div class=\"aw-entity__content-section-header\">\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\n                    <a *ngIf=\"lb.dataSource.selectedTab == 'overview'\" class=\"n7-btn n7-btn-light\"\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/entita-collegate']\">\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\n                    </a>\n                </div>\n                <!-- Small Bubble Chart -->\n                <div class=\"aw-entity__bubble-chart-wrapper-small\" *ngIf=\"lb.dataSource.selectedTab == 'overview'\">\n                    <aw-bubble-chart-wrapper>\n                        <!-- Tippy template moved to end of HTML -->\n                        <n7-bubble-chart [data]=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.smallView\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n                <!-- Big Bubble Chart -->\n                <div class=\"aw-entity__bubble-chart-wrapper\" *ngIf=\"lb.dataSource.selectedTab == 'entita-collegate'\">\n                    <aw-bubble-chart-wrapper>\n                        <!-- Tippy template moved to end of HTML -->\n                        <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                        </n7-bubble-chart>\n                    </aw-bubble-chart-wrapper>\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\n                *ngIf=\"lb.dataSource.myResponse.extraTab\" [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.extraTab}}\n                </div>\n            </div>\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\n                *ngIf=\"lb.dataSource.myResponse.wikiTab\" [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\n                </div>\n                <div>\n                    {{lb.dataSource.myResponse.wikiTab.text}}\n                </div>\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\n                    {{ lb.dataSource.myResponse.wikiTab.url }}\n                </a>\n            </div>\n        </section>\n    </div>\n    <!-- Template for bubble chart tooltips -->\n    <aw-chart-tippy [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\" [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\n    </aw-chart-tippy>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AwEntitaLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: Location },
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: CommunicationService },
        { type: MainStateService },
        { type: Title }
    ]; };
    return AwEntitaLayoutComponent;
}(AbstractLayout));
export { AwEntitaLayoutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixJQUFJLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXRGO0lBSTZDLG1EQUFjO0lBQ3pELGlDQUNVLE1BQWMsRUFDZCxLQUFxQixFQUNyQixRQUFrQixFQUNsQixhQUFtQyxFQUNuQyxvQkFBaUQsRUFDakQsYUFBbUMsRUFDbkMsU0FBMkIsRUFDM0IsWUFBbUI7UUFSN0IsWUFVRSxrQkFBTSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsSUFBSSxNQUFNLENBQUMsU0FDbEU7UUFWUyxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isa0JBQVksR0FBWixZQUFZLENBQU87O0lBRzdCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7Ozs7O0lBQ08sNkNBQVc7Ozs7Ozs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELDZDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLG8zVUFBbUM7aUJBQ3BDOzs7O2dCQVpRLE1BQU07Z0JBQUUsY0FBYztnQkFEdEIsUUFBUTtnQkFJUixvQkFBb0I7Z0JBQ3BCLDJCQUEyQjtnQkFHM0Isb0JBQW9CO2dCQUZwQixnQkFBZ0I7Z0JBSmhCLEtBQUs7O0lBbURkLDhCQUFDO0NBQUEsQUEzQ0QsQ0FJNkMsY0FBYyxHQXVDMUQ7U0F2Q1ksdUJBQXVCOzs7Ozs7SUFFaEMseUNBQXNCOzs7OztJQUN0Qix3Q0FBNkI7Ozs7O0lBQzdCLDJDQUEwQjs7Ozs7SUFDMUIsZ0RBQTJDOzs7OztJQUMzQyx1REFBeUQ7Ozs7O0lBQ3pELGdEQUEyQzs7Ozs7SUFDM0MsNENBQW1DOzs7OztJQUNuQywrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXdFbnRpdGFMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9lbnRpdGEtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1lbnRpdGEtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VudGl0YS1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnQXdFbnRpdGFMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgLypcbiAgICBPcHRpb25hbCB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgbGF5b3V0J3MgbG9naWMuXG4gICAgSWYgcmVtb3ZlZCwgdGhleSBtdXN0IGFsc28gYmUgcmVtb3ZlZCBmcm9tIHRoZSBsYXlvdXQncyBEYXRhU291cmNlIGZpbGUsXG4gICAgYW5kIGZyb20gdGhpcyBmaWxlIGltcG9ydHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcbiAgICAgIHRpdGxlU2VydmljZTogdGhpcy50aXRsZVNlcnZpY2UsXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19