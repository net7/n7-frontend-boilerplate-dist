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
                template: "<div class=\"aw-scheda\" id=\"scheda-layout\">\n    <div class=\"aw-scheda__content n7-side-auto-padding sticky-parent\"\n        [ngClass]=\"{ 'is-collapsed' : lb.dataSource.sidebarCollapsed }\">\n        <!-- Left sidebar: tree -->\n        <div class=\"aw-scheda__tree sticky-target\" [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n            <n7-sidebar-header [data]=\"lb.widgets['aw-sidebar-header'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-sidebar-header'].emit\"></n7-sidebar-header>\n            <div class=\"aw-scheda__tree-content-loading\" *ngIf=\"!(lb.widgets['aw-tree'].ds.out$ | async)\">\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3]\" [data]=\"{\n                    blocks: [{\n                        classes: 'tree-placeholder-item'\n                    }]\n                }\"></n7-content-placeholder>\n            </div>\n            <div class=\"aw-scheda__tree-content\" [ngStyle]=\"{ \n                    'max-height': lb.dataSource.treeMaxHeight, \n                    'overflow': 'auto' \n                }\">\n                <n7-tree [data]=\"lb.widgets['aw-tree'].ds.out$ | async\" [emit]=\"lb.widgets['aw-tree'].emit\"\n                    *ngIf=\"!lb.dataSource.sidebarCollapsed\"></n7-tree>\n            </div>\n        </div>\n\n        <!-- Scheda details -->\n        <div class=\"aw-scheda__scheda-wrapper-loading\" *ngIf=\"lb.dataSource.contentIsLoading\">\n            <!--\n                <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'content-placeholder-title'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }, {\n                    classes: 'content-placeholder-item-preview'\n                }]\n            }\"></n7-content-placeholder>\n            -->\n        </div>\n        <div class=\"aw-scheda__scheda-wrapper\" *ngIf=\"!lb.dataSource.contentIsLoading\">\n            <n7-smart-breadcrumbs *ngIf=\"lb.dataSource.hasBreadcrumb\"\n                [data]=\"lb.widgets['aw-scheda-breadcrumbs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-scheda-breadcrumbs'].emit\">\n            </n7-smart-breadcrumbs>\n\n            <div *ngIf=\"!lb.dataSource.hasBreadcrumb\" class=\"aw-scheda__fake-breadcrumbs\">\n            </div>\n\n            <div *ngIf=\"!lb.dataSource.currentId\" class=\"aw-scheda__intro-text\" [innerHTML]=\"lb.dataSource.emptyLabel\">\n            </div>\n\n            <n7-inner-title [data]=\"lb.widgets['aw-scheda-inner-title'].ds.out$ | async\">\n            </n7-inner-title>\n\n            <n7-image-viewer *ngIf=\"lb.dataSource.hasImage\" [data]=\"lb.widgets['aw-scheda-image'].ds.out$ | async\">\n            </n7-image-viewer>\n\n            <section class=\"aw-scheda__description\" *ngIf=\"lb.dataSource.contentParts.content\">\n                <div *ngFor=\"let part of lb.dataSource.contentParts\">\n                    <div [innerHTML]=\"part.content\"></div>\n                </div>\n            </section>\n\n            <section class=\"aw-scheda__metadata\" *ngIf=\"lb.dataSource.hasMetadata\">\n                <div class=\"aw-scheda__inner-title\">\n                    {{lb.dataSource.metadataSectionTitle}}\n                </div>\n                <n7-metadata-viewer [data]=\"lb.widgets['aw-scheda-metadata'].ds.out$ | async\">\n                </n7-metadata-viewer>\n            </section>\n\n            <section class=\"aw-scheda__bubble-chart\" *ngIf=\"lb.dataSource.bubblesEnabled && lb.dataSource.hasBubbles\">\n                <div *ngIf=\"lb.dataSource.hasBubbles\" class=\"aw-scheda__inner-title\">\n                    {{lb.dataSource.bubbleChartSectionTitle}}\n                </div>\n                <aw-bubble-chart-wrapper>\n                    <aw-chart-tippy [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\"\n                        [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\n                    </aw-chart-tippy>\n                    <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                        [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                    </n7-bubble-chart>\n                </aw-bubble-chart-wrapper>\n            </section>\n\n            <section *ngIf=\"lb.dataSource.hasSimilarItems && lb.dataSource.hasBubbles\" id=\"related-item-container\" class=\"aw-scheda__related\">\n                <div class=\"aw-scheda__inner-title\">{{lb.dataSource.similarItemsSectionTitle}}</div>\n                <div class=\"aw-scheda__related-items n7-grid-2\">\n                    <!--<ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">-->\n                    <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                        <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                        </n7-item-preview>\n                    </ng-container>\n                </div>\n            </section>\n        </div>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLElBQUksTUFBTSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFPdEYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGNBQWM7Ozs7Ozs7Ozs7SUFDekQsWUFDVSxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELFNBQTJCLEVBQzNCLFlBQW1CLEVBQ25CLGFBQW1DO1FBRzNDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQVQ5RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDakQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQU87UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBSTdDLENBQUM7Ozs7Ozs7O0lBT1MsV0FBVztRQUNuQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQTtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsODJLQUFtQzthQUNwQzs7OztZQVpRLE1BQU07WUFBRSxjQUFjO1lBR3RCLG9CQUFvQjtZQUNwQiwyQkFBMkI7WUFDM0IsZ0JBQWdCO1lBSmhCLEtBQUs7WUFNTCxvQkFBb0I7Ozs7Ozs7SUFTekIseUNBQXNCOzs7OztJQUN0Qix3Q0FBNkI7Ozs7O0lBQzdCLGdEQUEyQzs7Ozs7SUFDM0MsdURBQXlEOzs7OztJQUN6RCw0Q0FBbUM7Ozs7O0lBQ25DLCtDQUEyQjs7Ozs7SUFDM0IsZ0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCdcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXdQYXRyaW1vbmlvTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vc2NoZWRhLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctc2NoZWRhLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hlZGEtbGF5b3V0Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcblxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ0F3UGF0cmltb25pb0xheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogT3B0aW9uYWwgdmFyaWFibGVzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGZyb20gdGhlIGxheW91dCdzIGxvZ2ljLlxuICAgKiBJZiByZW1vdmVkLCB0aGV5IG11c3QgYWxzbyBiZSByZW1vdmVkIGZyb20gdGhlIGxheW91dCdzIERhdGFTb3VyY2UgZmlsZSxcbiAgICogYW5kIGZyb20gdGhpcyBmaWxlIGltcG9ydHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgICB0aXRsZVNlcnZpY2U6IHRoaXMudGl0bGVTZXJ2aWNlLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufSJdfQ==