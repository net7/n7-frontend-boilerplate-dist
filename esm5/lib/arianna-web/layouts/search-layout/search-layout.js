/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { SearchService } from '../../../common/services/search.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { AwSearchLayoutConfig as config } from './search-layout.config';
var AwSearchLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AwSearchLayoutComponent, _super);
    function AwSearchLayoutComponent(configuration, layoutsConfiguration, mainState, communication, search, route) {
        var _this = _super.call(this, layoutsConfiguration.get('AwSearchLayoutConfig') || config) || this;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.mainState = mainState;
        _this.communication = communication;
        _this.search = search;
        _this.route = route;
        return _this;
    }
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     */
    /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     * @protected
     * @return {?}
     */
    AwSearchLayoutComponent.prototype.initPayload = /**
     * Optional variables that can be accessed from the layout's logic.
     * If removed, they must also be removed from the layout's DataSource file,
     * and from this file imports.
     * @protected
     * @return {?}
     */
    function () {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            communication: this.communication,
            search: this.search,
            route: this.route,
            options: this.config.options || {},
        };
    };
    /**
     * @return {?}
     */
    AwSearchLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwSearchLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwSearchLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-search-layout',
                    template: "<div class=\"aw-search n7-side-auto-padding\" id=\"search-layout\">\r\n    <div class=\"aw-search__header\">\r\n        <div class=\"aw-search__header-left\">\r\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\r\n        </div>\r\n        <!--\r\n        <div class=\"aw-search__header-right\">\r\n            <n7-nav\r\n                [data]=\"lb.widgets['aw-search-layout-tabs'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-search-layout-tabs'].emit\">\r\n            </n7-nav>\r\n        </div>\r\n        -->\r\n    </div>\r\n    <div class=\"aw-search__content-wrapper sticky-parent\">\r\n        <!-- Left sidebar: facets -->\r\n        <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-search__sidebar-loading sticky-target\">\r\n            <div class=\"aw-search__facets-loading\">\r\n                <n7-content-placeholder [data]=\"{\r\n                    blocks: [{\r\n                        classes: 'search-placeholder-facet-input'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-check'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }, {\r\n                        classes: 'search-placeholder-facet-item'\r\n                    }]\r\n                }\">\r\n                </n7-content-placeholder>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-search__sidebar sticky-target\"\r\n            [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\r\n            <div class=\"aw-search__facets\">\r\n                <n7-facets-wrapper [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['facets-wrapper'].emit\">\r\n                </n7-facets-wrapper>\r\n            </div>\r\n        </div>\r\n        <div class=\"aw-search__content\">\r\n            <div class=\"aw-search__results-header\">\r\n                <div class=\"aw-search__results-header-left\">\r\n                    <h3 *ngIf=\"!lb.dataSource.resultsLoading\" class=\"aw-search__total\">\r\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\r\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\r\n                    </h3>\r\n                </div>\r\n                <div class=\"aw-search__results-header-right\">\r\n                    <label class=\"aw-search__results-select-orderby-label\"\r\n                        for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\r\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\r\n                        id=\"aw-search__results-select-orderby\">\r\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\" [value]=\"option.value\"\r\n                            [selected]=\"option.selected\">\r\n                            {{ option.label }}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <!-- Search details -->\r\n            <div *ngIf=\"lb.dataSource.resultsLoading\" class=\"aw-search__results-wrapper-loading\">\r\n                <n7-content-placeholder *ngFor=\"let n of [0,1,2,3,4,5,6,7,8,9]\" [data]=\"{\r\n                    blocks: [\r\n                        { classes: 'search-result-placeholder-title' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' },\r\n                        { classes: 'search-result-placeholder-metadata' }\r\n                    ]\r\n                }\"></n7-content-placeholder>\r\n            </div>\r\n            <div *ngIf=\"!lb.dataSource.resultsLoading\" class=\"aw-search__results-wrapper\">\r\n                <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\r\n                    <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                    </n7-smart-breadcrumbs>\r\n                    <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                    </n7-item-preview>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\r\n                    <div class=\"aw-search__fallback\">\r\n                        <p class=\"aw-search__fallback-string\">\r\n                            {{ lb.dataSource.fallback }}\r\n                        </p>\r\n                        <button [disabled]=\"!lb.dataSource.resetButtonEnabled\" class=\"n7-btn aw-search__fallback-button\"\r\n                            (click)=\"lb.eventHandler.emitInner('searchreset', {})\">\r\n                            Resetta la ricerca\r\n                        </button>\r\n                    </div>\r\n                </ng-container>\r\n                <n7-smart-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\r\n                    [data]=\"lb.widgets['n7-smart-pagination'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['n7-smart-pagination'].emit\">\r\n                </n7-smart-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    AwSearchLayoutComponent.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: MainStateService },
        { type: CommunicationService },
        { type: SearchService },
        { type: ActivatedRoute }
    ]; };
    return AwSearchLayoutComponent;
}(AbstractLayout));
export { AwSearchLayoutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLElBQUksTUFBTSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEU7SUFLNkMsbURBQWM7SUFDekQsaUNBQ1UsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELFNBQTJCLEVBQzNCLGFBQW1DLEVBQ25DLE1BQXFCLEVBQ3JCLEtBQXFCO1FBTi9CLFlBUUUsa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ2xFO1FBUlMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDakQsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLFlBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7O0lBRy9CLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNPLDZDQUFXOzs7Ozs7O0lBQXJCO1FBQ0UsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELDZDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHFtTEFBbUM7aUJBQ3BDOzs7O2dCQVZRLG9CQUFvQjtnQkFDcEIsMkJBQTJCO2dCQUMzQixnQkFBZ0I7Z0JBRWhCLG9CQUFvQjtnQkFEcEIsYUFBYTtnQkFMYixjQUFjOztJQWlEdkIsOEJBQUM7Q0FBQSxBQXhDRCxDQUs2QyxjQUFjLEdBbUMxRDtTQW5DWSx1QkFBdUI7Ozs7OztJQUVoQyxnREFBMkM7Ozs7O0lBQzNDLHVEQUF5RDs7Ozs7SUFDekQsNENBQW1DOzs7OztJQUNuQyxnREFBMkM7Ozs7O0lBQzNDLHlDQUE2Qjs7Ozs7SUFDN0Isd0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBd1NlYXJjaExheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXctc2VhcmNoLWxheW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1sYXlvdXQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNlYXJjaDogU2VhcmNoU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdBd1NlYXJjaExheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcHRpb25hbCB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgbGF5b3V0J3MgbG9naWMuXHJcbiAgICogSWYgcmVtb3ZlZCwgdGhleSBtdXN0IGFsc28gYmUgcmVtb3ZlZCBmcm9tIHRoZSBsYXlvdXQncyBEYXRhU291cmNlIGZpbGUsXHJcbiAgICogYW5kIGZyb20gdGhpcyBmaWxlIGltcG9ydHMuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxyXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXHJcbiAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXHJcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19