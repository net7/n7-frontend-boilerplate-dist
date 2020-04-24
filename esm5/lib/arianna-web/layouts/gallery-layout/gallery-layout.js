/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AbstractLayout } from "../../../common/models/abstract-layout";
import { ConfigurationService, LayoutsConfigurationService, MainStateService, SearchService, CommunicationService, } from '../../../common/services';
import { AwGalleryLayoutConfig as config } from './gallery-layout.config';
import { ActivatedRoute } from '@angular/router';
var AwGalleryLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AwGalleryLayoutComponent, _super);
    function AwGalleryLayoutComponent(configuration, layoutsConfiguration, mainState, communication, search, route) {
        var _this = _super.call(this, config) || this;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.mainState = mainState;
        _this.communication = communication;
        _this.search = search;
        _this.route = route;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    AwGalleryLayoutComponent.prototype.initPayload = /**
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
    AwGalleryLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwGalleryLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwGalleryLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-gallery-layout',
                    template: "<div class=\"aw-gallery\" *ngIf=\"lb.dataSource\">\n\n  <div class=\"aw-gallery__header\">\n    <div class=\"aw-gallery__header-left\">\n      <h1 class=\"aw-gallery__header-title\">{{ lb.dataSource.pageTitle }}</h1>\n    </div>\n  </div>\n\n  <div class=\"aw-gallery__content-wrapper sticky-parent\">\n    \n    <!-- Left sidebar: facets -->\n    <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-gallery__sidebar-loading sticky-target\">\n        <div class=\"aw-gallery__facets-loading\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'gallery-placeholder-facet-input'\n                }, {\n                    classes: 'gallery-placeholder-facet-check'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n    </div>\n    <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-gallery__sidebar sticky-target\" [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n        <div class=\"aw-gallery__facets\">\n            <!-- <n7-facet-header [data]=\"{\n                iconLeft: 'n7-icon-search1',\n                text: 'Filtri di ricerca',\n                iconRight: 'n7-icon-angle-down',\n                classes: 'is-expanded',\n                payload: 'header'\n                }\"></n7-facet-header> -->\n            <n7-facets-wrapper \n                [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                [emit]=\"lb.widgets['facets-wrapper'].emit\">\n              </n7-facets-wrapper>\n        </div>\n    </div>\n\n    <div class=\"aw-gallery__content\">\n      <div class=\"aw-gallery__results-header\">\n        <div class=\"aw-gallery__results-header-left\">\n          <h3 class=\"aw-gallery__total\">\n            <span class=\"aw-gallery__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\n            <span class=\"aw-gallery__total-title\">{{ lb.dataSource.resultsTitle }}</span>\n          </h3>\n        </div>\n        <div class=\"aw-gallery__results-header-right\">\n          <label class=\"aw-gallery__results-select-orderby-label\"\n            for=\"aw-gallery__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\n          <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\n            id=\"aw-gallery__results-select-orderby\">\n            <option *ngFor=\"let option of lb.dataSource.orderByOptions\" [value]=\"option.value\">\n              {{ option.label }}</option>\n          </select>\n        </div>\n      </div>\n      \n      <!-- Gallery details -->\n      <div class=\"aw-gallery__results-wrapper\">\n\n        <!-- Gallery results loader -->\n        <div *ngIf=\"!(lb.widgets['aw-gallery-results'].ds.out$ | async)\"\n             class=\"aw-gallery__results-wrapper-loader n7-grid-3\">\n             <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n        </div>\n\n        <!-- Gallery results and pagination -->\n        <div class=\"aw-gallery__results\">\n            <div class=\"aw-gallery__results-list n7-grid-3\">\n                <n7-item-preview \n                *ngFor=\"let item of (lb.widgets['aw-gallery-results'].ds.out$ | async)?.res\"\n                class=\"gallery-result is-vertical\"\n                [data]=\"item\">\n                </n7-item-preview>\n            </div>\n\n            <n7-pagination [data]=\"(lb.widgets['aw-gallery-results'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-gallery-results'].emit\">\n            </n7-pagination>\n\n            <!-- <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\n            <div class=\"aw-gallery__fallback\">\n                <p class=\"aw-gallery__fallback-string\">\n                {{ lb.dataSource.fallback }}\n                </p>\n                <button [disabled]=\"!lb.dataSource.resetButtonEnabled\" class=\"n7-btn aw-gallery__fallback-button\"\n                (click)=\"lb.eventHandler.emitInner('galleryreset', {})\">\n                Resetta la ricerca\n                </button>\n            </div>\n            </ng-container>\n            <n7-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\n            [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n            </n7-pagination> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    AwGalleryLayoutComponent.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: MainStateService },
        { type: CommunicationService },
        { type: SearchService },
        { type: ActivatedRoute }
    ]; };
    return AwGalleryLayoutComponent;
}(AbstractLayout));
export { AwGalleryLayoutComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutComponent.prototype.layoutsConfiguration;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutComponent.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutComponent.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutComponent.prototype.search;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDJCQUEyQixFQUMzQixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLG9CQUFvQixHQUNyQixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQ7SUFJOEMsb0RBQWM7SUFDMUQsa0NBQ1UsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELFNBQTJCLEVBQzNCLGFBQW1DLEVBQ25DLE1BQXFCLEVBQ3JCLEtBQXFCO1FBTi9CLFlBUUUsa0JBQU0sTUFBTSxDQUFDLFNBQ2Q7UUFSUyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsWUFBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixXQUFLLEdBQUwsS0FBSyxDQUFnQjs7SUFHL0IsQ0FBQzs7Ozs7SUFFUyw4Q0FBVzs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUE7SUFDSCxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qix3K05BQW9DO2lCQUNyQzs7OztnQkFaQyxvQkFBb0I7Z0JBQ3BCLDJCQUEyQjtnQkFDM0IsZ0JBQWdCO2dCQUVoQixvQkFBb0I7Z0JBRHBCLGFBQWE7Z0JBSU4sY0FBYzs7SUFxQ3ZCLCtCQUFDO0NBQUEsQUFuQ0QsQ0FJOEMsY0FBYyxHQStCM0Q7U0EvQlksd0JBQXdCOzs7Ozs7SUFFakMsaURBQTJDOzs7OztJQUMzQyx3REFBeUQ7Ozs7O0lBQ3pELDZDQUFtQzs7Ozs7SUFDbkMsaURBQTJDOzs7OztJQUMzQywwQ0FBNkI7Ozs7O0lBQzdCLHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0XCI7XG5pbXBvcnQge1xuICBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICBNYWluU3RhdGVTZXJ2aWNlLFxuICBTZWFyY2hTZXJ2aWNlLFxuICBDb21tdW5pY2F0aW9uU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzJztcbmltcG9ydCB7IEF3R2FsbGVyeUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2dhbGxlcnktbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LWdhbGxlcnktbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnktbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF3R2FsbGVyeUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VhcmNoOiBTZWFyY2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgcm91dGU6IHRoaXMucm91dGUsXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbn0iXX0=