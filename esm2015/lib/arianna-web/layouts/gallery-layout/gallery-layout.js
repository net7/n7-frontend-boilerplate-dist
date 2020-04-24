/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AbstractLayout } from "../../../common/models/abstract-layout";
import { ConfigurationService, LayoutsConfigurationService, MainStateService, SearchService, CommunicationService, } from '../../../common/services';
import { AwGalleryLayoutConfig as config } from './gallery-layout.config';
import { ActivatedRoute } from '@angular/router';
export class AwGalleryLayoutComponent extends AbstractLayout {
    /**
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} communication
     * @param {?} search
     * @param {?} route
     */
    constructor(configuration, layoutsConfiguration, mainState, communication, search, route) {
        super(config);
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.route = route;
    }
    /**
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
AwGalleryLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-gallery-layout',
                template: "<div class=\"aw-gallery\" *ngIf=\"lb.dataSource\">\n\n  <div class=\"aw-gallery__header\">\n    <div class=\"aw-gallery__header-left\">\n      <h1 class=\"aw-gallery__header-title\">{{ lb.dataSource.pageTitle }}</h1>\n    </div>\n  </div>\n\n  <div class=\"aw-gallery__content-wrapper sticky-parent\">\n    \n    <!-- Left sidebar: facets -->\n    <div *ngIf=\"!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-gallery__sidebar-loading sticky-target\">\n        <div class=\"aw-gallery__facets-loading\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [{\n                    classes: 'gallery-placeholder-facet-input'\n                }, {\n                    classes: 'gallery-placeholder-facet-check'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }, {\n                    classes: 'gallery-placeholder-facet-item'\n                }]\n            }\">\n            </n7-content-placeholder>\n        </div>\n    </div>\n    <div *ngIf=\"!!(lb.widgets['facets-wrapper'].ds.out$ | async)\" class=\"aw-gallery__sidebar sticky-target\" [ngClass]=\"{ 'is-sticky': lb.dataSource.sidebarIsSticky }\">\n        <div class=\"aw-gallery__facets\">\n            <!-- <n7-facet-header [data]=\"{\n                iconLeft: 'n7-icon-search1',\n                text: 'Filtri di ricerca',\n                iconRight: 'n7-icon-angle-down',\n                classes: 'is-expanded',\n                payload: 'header'\n                }\"></n7-facet-header> -->\n            <n7-facets-wrapper \n                [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                [emit]=\"lb.widgets['facets-wrapper'].emit\">\n              </n7-facets-wrapper>\n        </div>\n    </div>\n\n    <div class=\"aw-gallery__content\">\n      <div class=\"aw-gallery__results-header\">\n        <div class=\"aw-gallery__results-header-left\">\n          <h3 class=\"aw-gallery__total\">\n            <span class=\"aw-gallery__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\n            <span class=\"aw-gallery__total-title\">{{ lb.dataSource.resultsTitle }}</span>\n          </h3>\n        </div>\n        <div class=\"aw-gallery__results-header-right\">\n          <label class=\"aw-gallery__results-select-orderby-label\"\n            for=\"aw-gallery__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\n          <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\"\n            id=\"aw-gallery__results-select-orderby\">\n            <option *ngFor=\"let option of lb.dataSource.orderByOptions\" [value]=\"option.value\">\n              {{ option.label }}</option>\n          </select>\n        </div>\n      </div>\n      \n      <!-- Gallery details -->\n      <div class=\"aw-gallery__results-wrapper\">\n\n        <!-- Gallery results loader -->\n        <div *ngIf=\"!(lb.widgets['aw-gallery-results'].ds.out$ | async)\"\n             class=\"aw-gallery__results-wrapper-loader n7-grid-3\">\n             <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n            <n7-content-placeholder *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\" [data]=\"{\n                blocks: [\n                    { classes: 'gallery-placeholder-image' },\n                    { classes: 'gallery-placeholder-title' },\n                    { classes: 'gallery-placeholder-subtitle' }\n                ]\n                }\">\n            </n7-content-placeholder>\n        </div>\n\n        <!-- Gallery results and pagination -->\n        <div class=\"aw-gallery__results\">\n            <div class=\"aw-gallery__results-list n7-grid-3\">\n                <n7-item-preview \n                *ngFor=\"let item of (lb.widgets['aw-gallery-results'].ds.out$ | async)?.res\"\n                class=\"gallery-result is-vertical\"\n                [data]=\"item\">\n                </n7-item-preview>\n            </div>\n\n            <n7-pagination [data]=\"(lb.widgets['aw-gallery-results'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-gallery-results'].emit\">\n            </n7-pagination>\n\n            <!-- <ng-container *ngIf=\"lb.dataSource.totalCount == 0\">\n            <div class=\"aw-gallery__fallback\">\n                <p class=\"aw-gallery__fallback-string\">\n                {{ lb.dataSource.fallback }}\n                </p>\n                <button [disabled]=\"!lb.dataSource.resetButtonEnabled\" class=\"n7-btn aw-gallery__fallback-button\"\n                (click)=\"lb.eventHandler.emitInner('galleryreset', {})\">\n                Resetta la ricerca\n                </button>\n            </div>\n            </ng-container>\n            <n7-pagination *ngIf=\"lb.dataSource.totalCount > 10\"\n            [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n            [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n            </n7-pagination> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
AwGalleryLayoutComponent.ctorParameters = () => [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMkJBQTJCLEVBQzNCLGdCQUFnQixFQUNoQixhQUFhLEVBQ2Isb0JBQW9CLEdBQ3JCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLHFCQUFxQixJQUFJLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU1qRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7Ozs7O0lBQzFELFlBQ1UsYUFBbUMsRUFDbkMsb0JBQWlELEVBQ2pELFNBQTJCLEVBQzNCLGFBQW1DLEVBQ25DLE1BQXFCLEVBQ3JCLEtBQXFCO1FBRTdCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVBOLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1FBQ2pELGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBRy9CLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNuQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFBO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix3K05BQW9DO2FBQ3JDOzs7O1lBWkMsb0JBQW9CO1lBQ3BCLDJCQUEyQjtZQUMzQixnQkFBZ0I7WUFFaEIsb0JBQW9CO1lBRHBCLGFBQWE7WUFJTixjQUFjOzs7Ozs7O0lBUW5CLGlEQUEyQzs7Ozs7SUFDM0Msd0RBQXlEOzs7OztJQUN6RCw2Q0FBbUM7Ozs7O0lBQ25DLGlEQUEyQzs7Ozs7SUFDM0MsMENBQTZCOzs7OztJQUM3Qix5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dFwiO1xuaW1wb3J0IHtcbiAgQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gIExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgTWFpblN0YXRlU2VydmljZSxcbiAgU2VhcmNoU2VydmljZSxcbiAgQ29tbXVuaWNhdGlvblNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBBd0dhbGxlcnlMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9nYWxsZXJ5LWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1nYWxsZXJ5LWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBd0dhbGxlcnlMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHNlYXJjaDogU2VhcmNoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxuXG59Il19