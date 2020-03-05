/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.ts
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
                    template: "<div class=\"aw-entity n7-side-auto-padding\" *ngIf=\"lb.dataSource\">\r\n\r\n    <div class=\"aw-entity__sidebar\">\r\n        <!-- Custom header -->\r\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-title-wrapper-loading\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-title'\r\n                }]\r\n            }\">\r\n            </n7-content-placeholder>\r\n        </div>\r\n        <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\"\r\n            class=\"aw-entity__sidebar-title-wrapper color-{{lb.dataSource.navHeader.color}}\">\r\n            <h1 class=\"aw-entity__sidebar-title\">\r\n                <span class=\"aw-entity__sidebar-title-icon {{lb.dataSource.navHeader.icon}}\"></span>\r\n                <span class=\"aw-entity__sidebar-title-text\">{{lb.dataSource.navHeader.text}}</span>\r\n            </h1>\r\n        </div>\r\n        <!-- Navigation -->\r\n        <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__sidebar-nav-loading\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2]\"\r\n            [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-nav'\r\n                }]\r\n            }\">\r\n            </n7-content-placeholder>\r\n        </div>\r\n        <n7-nav [data]=\"lb.widgets['aw-entita-nav'].ds.out$ | async\" [emit]=\"lb.widgets['aw-entita-nav'].emit\">\r\n        </n7-nav>\r\n    </div>\r\n\r\n    <!-- lb.dataSource.selectedTab -->\r\n    <div *ngIf=\"!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content-loading\">\r\n        <div class=\"aw-entity__content-loading-title\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [{\r\n                    classes: 'entity-placeholder-title'\r\n                }]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n\r\n        <div class=\"aw-entity__content-loading-items\">\r\n            <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\"\r\n            [data]=\"{\r\n                blocks: [\r\n                {\r\n                    classes: 'entity-placeholder-item-preview'\r\n                }\r\n                ]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!!(lb.widgets['aw-entita-nav'].ds.out$ | async)\" class=\"aw-entity__content\">\r\n        <section>\r\n            <div *ngIf=\"lb.dataSource.myResponse.wikiTab || lb.dataSource.myResponse.extraTab\"\r\n                class=\"aw-entity__content-section\" [hidden]=\"lb.dataSource.selectedTab != 'overview'\">\r\n                <div class=\"aw-entity__overview-description\">\r\n                    {{lb.dataSource.myResponse.extraTab}}\r\n                </div>\r\n                <div class=\"aw-entity-layout__button-wrapper\">\r\n                    <a *ngIf=\"lb.dataSource.myResponse.wikiTab\" class=\"n7-btn n7-btn-light\"\r\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/wiki']\">\r\n                        DESCRIZIONE WIKIPEDIA <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                    <a *ngIf=\"lb.dataSource.myResponse.extraTab\" class=\"n7-btn n7-btn-light\"\r\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/maxxi']\">\r\n                        DESCRIZIONE MAXXI <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"\r\n            ((lb.dataSource.myResponse.fields || []).length > 0 && lb.dataSource.selectedTab == 'campi') ||\r\n            (lb.dataSource.showFields && lb.dataSource.selectedTab == 'overview')\">\r\n                <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\r\n                    [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'campi'\">\r\n                    <div class=\"aw-entity__content-section-header\">\r\n                        <h2 class=\"aw-entity__content-section-title\">Campi</h2>\r\n                        <a class=\"n7-btn n7-btn-light\" [routerLink]=\"[lb.dataSource.getNavBasePath() + 'campi']\">\r\n                            TUTTI I CAMPI <i class=\"n7-icon-angle-right\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <n7-metadata-viewer class=\"aw-entity-layout__metadata-viewer\"\r\n                        [data]=\"lb.widgets['aw-entita-metadata-viewer'].ds.out$ | async \">\r\n                    </n7-metadata-viewer>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview\"\r\n                *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\"\r\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'oggetti-collegati'\">\r\n                <div class=\"aw-entity__content-section-header\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Oggetti collegati</h2>\r\n\r\n                    <a *ngIf=\"lb.dataSource.selectedTab === 'overview' \"\r\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/oggetti-collegati/']\"\r\n                        [queryParams]=\"{ page: 1 }\" class=\"n7-btn n7-btn-light\">\r\n                        TUTTI GLI OGGETTI COLLEGATI <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"aw-entity__content-item-previews\">\r\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                        </n7-smart-breadcrumbs>\r\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </ng-container>\r\n                </div>\r\n                <n7-smart-pagination \r\n                    *ngIf=\"lb.dataSource.selectedTab === 'oggetti-collegati'\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-overview aw-bubble-chart__{{lb.dataSource.selectedTab}}\"\r\n                *ngIf=\"lb.dataSource.bubblesEnabled && lb.dataSource.myResponse.relatedEntities\"\r\n                [hidden]=\"lb.dataSource.selectedTab != 'overview' && lb.dataSource.selectedTab != 'entita-collegate'\">\r\n                <div class=\"aw-entity__content-section-header\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Entit\u00E0 collegate</h2>\r\n                    <a *ngIf=\"lb.dataSource.selectedTab == 'overview'\" class=\"n7-btn n7-btn-light\"\r\n                        [routerLink]=\"[lb.dataSource.getNavBasePath() + '/entita-collegate']\">\r\n                        TUTTE LE ENTIT\u00C0 COLLEGATE <i class=\"n7-icon-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n                <!-- Small Bubble Chart -->\r\n                <div class=\"aw-entity__bubble-chart-wrapper-small\" *ngIf=\"lb.dataSource.selectedTab == 'overview'\">\r\n                    <aw-bubble-chart-wrapper>\r\n                        <!-- Tippy template moved to end of HTML -->\r\n                        <n7-bubble-chart [data]=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.smallView\"\r\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\r\n                        </n7-bubble-chart>\r\n                    </aw-bubble-chart-wrapper>\r\n                </div>\r\n                <!-- Big Bubble Chart -->\r\n                <div class=\"aw-entity__bubble-chart-wrapper\" *ngIf=\"lb.dataSource.selectedTab == 'entita-collegate'\">\r\n                    <aw-bubble-chart-wrapper>\r\n                        <!-- Tippy template moved to end of HTML -->\r\n                        <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\r\n                            [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\r\n                        </n7-bubble-chart>\r\n                    </aw-bubble-chart-wrapper>\r\n                </div>\r\n            </div>\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-maxxi\"\r\n                *ngIf=\"lb.dataSource.myResponse.extraTab\" [hidden]=\"lb.dataSource.selectedTab != 'maxxi'\">\r\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Maxxi</h2>\r\n                </div>\r\n                <div>\r\n                    {{lb.dataSource.myResponse.extraTab}}\r\n                </div>\r\n            </div>\r\n            <div class=\"aw-entity__content-section aw-entity__content-section-wiki\"\r\n                *ngIf=\"lb.dataSource.myResponse.wikiTab\" [hidden]=\"lb.dataSource.selectedTab != 'wiki'\">\r\n                <div class=\"aw-entity__content-section-header aw-entity__content-section-header-decorated\">\r\n                    <h2 class=\"aw-entity__content-section-title\">Descrizione Wikipedia</h2>\r\n                </div>\r\n                <div>\r\n                    {{lb.dataSource.myResponse.wikiTab.text}}\r\n                </div>\r\n                <a href=\"{{lb.dataSource.myResponse.wikiTabUrl}}\">\r\n                    {{ lb.dataSource.myResponse.wikiTab.url }}\r\n                </a>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <!-- Template for bubble chart tooltips -->\r\n    <aw-chart-tippy [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\" [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\r\n    </aw-chart-tippy>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUV0RjtJQUk2QyxtREFBYztJQUN6RCxpQ0FDVSxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsUUFBa0IsRUFDbEIsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELGFBQW1DLEVBQ25DLFNBQTJCLEVBQzNCLFlBQW1CO1FBUjdCLFlBVUUsa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ2xFO1FBVlMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDakQsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGtCQUFZLEdBQVosWUFBWSxDQUFPOztJQUc3QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7OztJQUNPLDZDQUFXOzs7Ozs7Ozs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiw2L1RBQW1DO2lCQUNwQzs7OztnQkFaUSxNQUFNO2dCQUFFLGNBQWM7Z0JBRHRCLFFBQVE7Z0JBSVIsb0JBQW9CO2dCQUNwQiwyQkFBMkI7Z0JBRzNCLG9CQUFvQjtnQkFGcEIsZ0JBQWdCO2dCQUpoQixLQUFLOztJQW1EZCw4QkFBQztDQUFBLEFBM0NELENBSTZDLGNBQWMsR0F1QzFEO1NBdkNZLHVCQUF1Qjs7Ozs7O0lBRWhDLHlDQUFzQjs7Ozs7SUFDdEIsd0NBQTZCOzs7OztJQUM3QiwyQ0FBMEI7Ozs7O0lBQzFCLGdEQUEyQzs7Ozs7SUFDM0MsdURBQXlEOzs7OztJQUN6RCxnREFBMkM7Ozs7O0lBQzNDLDRDQUFtQzs7Ozs7SUFDbkMsK0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBd0VudGl0YUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2VudGl0YS1sYXlvdXQuY29uZmlnJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXctZW50aXRhLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VudGl0YS1sYXlvdXQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdBd0VudGl0YUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAgT3B0aW9uYWwgdmFyaWFibGVzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGZyb20gdGhlIGxheW91dCdzIGxvZ2ljLlxyXG4gICAgSWYgcmVtb3ZlZCwgdGhleSBtdXN0IGFsc28gYmUgcmVtb3ZlZCBmcm9tIHRoZSBsYXlvdXQncyBEYXRhU291cmNlIGZpbGUsXHJcbiAgICBhbmQgZnJvbSB0aGlzIGZpbGUgaW1wb3J0cy5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXHJcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXHJcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxyXG4gICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcclxuICAgICAgdGl0bGVTZXJ2aWNlOiB0aGlzLnRpdGxlU2VydmljZSxcclxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19