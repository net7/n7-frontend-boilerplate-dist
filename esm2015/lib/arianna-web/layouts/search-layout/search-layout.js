/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { SearchService } from '../../../common/services/search.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { AwSearchLayoutConfig as config } from './search-layout.config';
export class AwSearchLayoutComponent extends AbstractLayout {
    /**
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} communication
     * @param {?} search
     * @param {?} route
     */
    constructor(configuration, layoutsConfiguration, mainState, communication, search, route) {
        super(layoutsConfiguration.get('AwSearchLayoutConfig') || config);
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.route = route;
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
            communication: this.communication,
            search: this.search,
            route: this.route,
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
AwSearchLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-search-layout',
                template: "<div class=\"aw-search n7-side-auto-padding\" id=\"search-layout\">\r\n    <div class=\"aw-search__header\">\r\n        <div class=\"aw-search__header-left\">\r\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\r\n        </div>\r\n        <!--\r\n        <div class=\"aw-search__header-right\">\r\n            <n7-nav\r\n                [data]=\"lb.widgets['aw-search-layout-tabs'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-search-layout-tabs'].emit\">\r\n            </n7-nav>\r\n        </div>\r\n        -->\r\n    </div>\r\n    <div class=\"aw-search__content-wrapper sticky-parent\">\r\n        <!-- Left sidebar: facets -->\r\n        <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-search__sidebar-loading sticky-target\">\r\n            <div class=\"aw-search__facets-loading\">\r\n                <n7-content-placeholder [data]=\"{\r\n                    blocks: [{\r\n                        classes: 'search-placeholder-facet-input'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-check'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }]\r\n                }\">\r\n                </n7-content-placeholder>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-search__sidebar sticky-target\"\r\n            [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\r\n            <div class=\"aw-search__facets\">\r\n                <n7-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['facets-wrapper'].emit\">\r\n                </n7-facets-wrapper>\r\n            </div>\r\n        </div>\r\n        <div class=\"aw-search__content\">\r\n            <div class=\"aw-search__results-header\">\r\n                <div class=\"aw-search__results-header-left\">\r\n                    <h3 *ngIf=\"!lb.dataSource.resultsLoading\" class=\"aw-search__total\">\r\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\r\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"aw-search__results-header-right\">\r\n                    <label class=\"aw-search__results-select-orderby-label\"\r\n                        for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\r\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\r\n                        id=\"aw-search__results-select-orderby\">\r\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\" [value]=\"option.value\"\r\n                            [selected]=\"option.selected\">\r\n                            {{ option.label }}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <!-- Search details -->\r\n            <div *ngIf=\"lb.dataSource.resultsLoading\" class=\"aw-search__results-wrapper-loading\">\r\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                    blocks: [\r\n                        { classes: 'search-result-placeholder-title' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' }\r\n                    ]\r\n                }\"></n7-content-placeholder>\r\n            </div>\r\n            <div *ngIf=\"!lb.dataSource.resultsLoading\" class=\"aw-search__results-wrapper\">\r\n                <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                    <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                    </n7-smart-breadcrumbs>\r\n                    <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                    </n7-item-preview>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\r\n                    <div class=\"aw-search__fallback\">\r\n                        <p class=\"aw-search__fallback-string\">\r\n                            {{ lb.dataSource.fallback }}\r\n                        </p>\r\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\" class=\"n7-btn aw-search__fallback-button\"\r\n                            (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\r\n                            Resetta la ricerca\r\n                        </button>\r\n                    </div>\r\n                </ng-container>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
            }] }
];
/** @nocollapse */
AwSearchLayoutComponent.ctorParameters = () => [
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: CommunicationService },
    { type: SearchService },
    { type: ActivatedRoute }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.search;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU94RSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsY0FBYzs7Ozs7Ozs7O0lBQ3pELFlBQ1UsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELFNBQTJCLEVBQzNCLGFBQW1DLEVBQ25DLE1BQXFCLEVBQ3JCLEtBQXFCO1FBRTdCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQVAxRCxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUcvQixDQUFDOzs7Ozs7OztJQU9TLFdBQVc7UUFDbkIsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIscW1MQUFtQzthQUNwQzs7OztZQVZRLG9CQUFvQjtZQUNwQiwyQkFBMkI7WUFDM0IsZ0JBQWdCO1lBRWhCLG9CQUFvQjtZQURwQixhQUFhO1lBTGIsY0FBYzs7Ozs7OztJQWdCbkIsZ0RBQTJDOzs7OztJQUMzQyx1REFBeUQ7Ozs7O0lBQ3pELDRDQUFtQzs7Ozs7SUFDbkMsZ0RBQTJDOzs7OztJQUMzQyx5Q0FBNkI7Ozs7O0lBQzdCLHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXdTZWFyY2hMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F3LXNlYXJjaC1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtbGF5b3V0Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICApIHtcclxuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnQXdTZWFyY2hMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgdmFyaWFibGVzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGZyb20gdGhlIGxheW91dCdzIGxvZ2ljLlxyXG4gICAqIElmIHJlbW92ZWQsIHRoZXkgbXVzdCBhbHNvIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGF5b3V0J3MgRGF0YVNvdXJjZSBmaWxlLFxyXG4gICAqIGFuZCBmcm9tIHRoaXMgZmlsZSBpbXBvcnRzLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcclxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxyXG4gICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxyXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcclxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub25Jbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==