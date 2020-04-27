/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { AwGalleryLayoutConfig as config } from './gallery-layout.config';
import { SearchService } from '../../../common/services/search.service';
var AwGalleryLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AwGalleryLayoutComponent, _super);
    function AwGalleryLayoutComponent(router, configuration, titleService, layoutsConfiguration, mainState, communication, search, route) {
        var _this = _super.call(this, config) || this;
        _this.router = router;
        _this.configuration = configuration;
        _this.titleService = titleService;
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
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
            search: this.search,
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
        { type: Router },
        { type: ConfigurationService },
        { type: Title },
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
    AwGalleryLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutComponent.prototype.titleService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLElBQUksTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXhFO0lBSThDLG9EQUFjO0lBQzFELGtDQUNVLE1BQWMsRUFDZCxhQUFtQyxFQUNuQyxZQUFtQixFQUNuQixvQkFBaUQsRUFDakQsU0FBMkIsRUFDM0IsYUFBbUMsRUFDbkMsTUFBcUIsRUFDckIsS0FBcUI7UUFSL0IsWUFVRSxrQkFBTSxNQUFNLENBQUMsU0FDZDtRQVZTLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsa0JBQVksR0FBWixZQUFZLENBQU87UUFDbkIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsWUFBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixXQUFLLEdBQUwsS0FBSyxDQUFnQjs7SUFHL0IsQ0FBQzs7Ozs7SUFFUyw4Q0FBVzs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtZQUNsQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHcrTkFBb0M7aUJBQ3JDOzs7O2dCQWJRLE1BQU07Z0JBR04sb0JBQW9CO2dCQUZwQixLQUFLO2dCQUdMLDJCQUEyQjtnQkFDM0IsZ0JBQWdCO2dCQUNoQixvQkFBb0I7Z0JBRXBCLGFBQWE7Z0JBUkwsY0FBYzs7SUFnRC9CLCtCQUFDO0NBQUEsQUF0Q0QsQ0FJOEMsY0FBYyxHQWtDM0Q7U0FsQ1ksd0JBQXdCOzs7Ozs7SUFFakMsMENBQXNCOzs7OztJQUN0QixpREFBMkM7Ozs7O0lBQzNDLGdEQUEyQjs7Ozs7SUFDM0Isd0RBQXlEOzs7OztJQUN6RCw2Q0FBbUM7Ozs7O0lBQ25DLGlEQUEyQzs7Ozs7SUFDM0MsMENBQTZCOzs7OztJQUM3Qix5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF3R2FsbGVyeUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2dhbGxlcnktbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctZ2FsbGVyeS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS1sYXlvdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5TGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG4gICAgcHJpdmF0ZSBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcbiAgICAgIHRpdGxlU2VydmljZTogdGhpcy50aXRsZVNlcnZpY2UsXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==