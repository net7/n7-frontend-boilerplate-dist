/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { AwPatrimonioLayoutConfig as config } from './scheda-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
export class AwSchedaLayoutComponent extends AbstractLayout {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} titleService
     * @param {?} communication
     */
    constructor(router, route, configuration, layoutsConfiguration, mainState, titleService, communication) {
        super(layoutsConfiguration.get('AwPatrimonioLayoutConfig') || config);
        this.router = router;
        this.route = route;
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.titleService = titleService;
        this.communication = communication;
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
AwSchedaLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-scheda-layout',
                template: "<div class=\"aw-scheda\" id=\"scheda-layout\">\r\n    <div class=\"aw-scheda__content n7-side-auto-padding sticky-parent\"\r\n        [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\r\n        <!-- Left sidebar: tree -->\r\n        <div class=\"aw-scheda__tree sticky-target\" [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\r\n            <n7-sidebar-header [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-sidebar-header'].emit\"></n7-sidebar-header>\r\n            <div class=\"aw-scheda__tree-content-loading\" *ngIf=\"!(lb.widgets['aw-tree'].ds.out$ | async)\">\r\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\" [data]=\"{\r\n                    blocks: [{\r\n                        classes: 'tree-placeholder-item'\r\n                    }]\r\n                }\"></n7-content-placeholder>\r\n            </div>\r\n            <div class=\"aw-scheda__tree-content\" [ngStyle]=\"{ \r\n                    'max-height': lb.dataSource.treeMaxHeight, \r\n                    'overflow': 'auto' \r\n                }\">\r\n                <n7-tree [data]=\"lb.widgets['aw-tree'].ds.out$ | async\" [emit]=\"lb.widgets['aw-tree'].emit\"\r\n                    *ngIf=\"!lb.dataSource.sidebarCollapsed\"></n7-tree>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Scheda details -->\r\n        <div class=\"aw-scheda__scheda-wrapper-loading\" *ngIf=\"lb.dataSource.contentIsLoading\">\r\n            <!--\r\n                <n7-content-placeholder [data]=\"{\r\n                blocks: [{\r\n                    classes: 'content-placeholder-title'\r\n                }, {\r\n                    classes: 'content-placeholder-item-preview'\r\n                }, {\r\n                    classes: 'content-placeholder-item-preview'\r\n                }, {\r\n                    classes: 'content-placeholder-item-preview'\r\n                }, {\r\n                    classes: 'content-placeholder-item-preview'\r\n                }, {\r\n                    classes: 'content-placeholder-item-preview'\r\n                }, {\r\n                    classes: 'content-placeholder-item-preview'\r\n                }]\r\n            }\"></n7-content-placeholder>\r\n            -->\r\n        </div>\r\n        <div class=\"aw-scheda__scheda-wrapper\" *ngIf=\"!lb.dataSource.contentIsLoading\">\r\n            <n7-smart-breadcrumbs *ngIf=\"lb.dataSource.hasBreadcrumb\"\r\n                [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\r\n            </n7-smart-breadcrumbs>\r\n\r\n            <div *ngIf=\"!lb.dataSource.hasBreadcrumb\" class=\"aw-scheda__fake-breadcrumbs\">\r\n            </div>\r\n\r\n            <div *ngIf=\"!lb.dataSource.currentId\" class=\"aw-scheda__intro-text\" [innerHTML]=\"lb.dataSource.emptyLabel\">\r\n            </div>\r\n\r\n            <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\r\n            </n7-inner-title>\r\n\r\n            <n7-image-viewer *ngIf=\"lb.dataSource.hasImage\" [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\r\n            </n7-image-viewer>\r\n\r\n            <section class=\"aw-scheda__description\" *ngIf=\"lb.dataSource.contentParts.content\">\r\n                <div *ngFor=\"let part of lb.dataSource.contentParts\">\r\n                    <div [innerHTML]=\"part.content\"></div>\r\n                </div>\r\n            </section>\r\n\r\n            <section class=\"aw-scheda__metadata\" *ngIf=\"lb.dataSource.hasMetadata\">\r\n                <div class=\"aw-scheda__inner-title\">\r\n                    {{lb.dataSource.metadataSectionTitle}}\r\n                </div>\r\n                <n7-metadata-viewer [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\r\n                </n7-metadata-viewer>\r\n            </section>\r\n\r\n            <section class=\"aw-scheda__bubble-chart\" *ngIf=\"lb.dataSource.bubblesEnabled && lb.dataSource.hasBubbles\">\r\n                <div *ngIf=\"lb.dataSource.hasBubbles\" class=\"aw-scheda__inner-title\">\r\n                    {{lb.dataSource.bubbleChartSectionTitle}}\r\n                </div>\r\n                <aw-bubble-chart-wrapper>\r\n                    <aw-chart-tippy [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\"\r\n                        [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\r\n                    </aw-chart-tippy>\r\n                    <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\r\n                        [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\r\n                    </n7-bubble-chart>\r\n                </aw-bubble-chart-wrapper>\r\n            </section>\r\n\r\n            <section *ngIf=\"lb.dataSource.hasSimilarItems && lb.dataSource.hasBubbles\" id=\"related-item-container\" class=\"aw-scheda__related\">\r\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.similarItemsSectionTitle}}</div>\r\n                <div class=\"aw-scheda__related-items n7-grid-2\">\r\n                    <!--<ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">-->\r\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                        </n7-item-preview>\r\n                    </ng-container>\r\n                </div>\r\n            </section>\r\n        </div>\r\n    </div>\r\n</div>"
            }] }
];
/** @nocollapse */
AwSchedaLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: Title },
    { type: CommunicationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    AwSchedaLayoutComponent.prototype.communication;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLElBQUksTUFBTSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFPdEYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGNBQWM7Ozs7Ozs7Ozs7SUFDekQsWUFDVSxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELFNBQTJCLEVBQzNCLFlBQW1CLEVBQ25CLGFBQW1DO1FBRzNDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQVQ5RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDakQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQU87UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBSTdDLENBQUM7Ozs7Ozs7O0lBT1MsV0FBVztRQUNuQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsNGpMQUFtQzthQUNwQzs7OztZQVpRLE1BQU07WUFBRSxjQUFjO1lBR3RCLG9CQUFvQjtZQUNwQiwyQkFBMkI7WUFDM0IsZ0JBQWdCO1lBSmhCLEtBQUs7WUFNTCxvQkFBb0I7Ozs7Ozs7SUFTekIseUNBQXNCOzs7OztJQUN0Qix3Q0FBNkI7Ozs7O0lBQzdCLGdEQUEyQzs7Ozs7SUFDM0MsdURBQXlEOzs7OztJQUN6RCw0Q0FBbUM7Ozs7O0lBQ25DLCtDQUEyQjs7Ozs7SUFDM0IsZ0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXdQYXRyaW1vbmlvTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vc2NoZWRhLWxheW91dC5jb25maWcnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy1zY2hlZGEtbGF5b3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2NoZWRhLWxheW91dC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuXHJcbiAgKSB7XHJcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ0F3UGF0cmltb25pb0xheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcHRpb25hbCB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgbGF5b3V0J3MgbG9naWMuXHJcbiAgICogSWYgcmVtb3ZlZCwgdGhleSBtdXN0IGFsc28gYmUgcmVtb3ZlZCBmcm9tIHRoZSBsYXlvdXQncyBEYXRhU291cmNlIGZpbGUsXHJcbiAgICogYW5kIGZyb20gdGhpcyBmaWxlIGltcG9ydHMuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxyXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxyXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcclxuICAgICAgdGl0bGVTZXJ2aWNlOiB0aGlzLnRpdGxlU2VydmljZSxcclxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19