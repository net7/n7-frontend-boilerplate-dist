/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class AwGalleryLayoutComponent extends AbstractLayout {
    /**
     * @param {?} router
     * @param {?} configuration
     * @param {?} titleService
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} communication
     * @param {?} search
     * @param {?} route
     */
    constructor(router, configuration, titleService, layoutsConfiguration, mainState, communication, search, route) {
        super(config);
        this.router = router;
        this.configuration = configuration;
        this.titleService = titleService;
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
            router: this.router,
            route: this.route,
            titleService: this.titleService,
            communication: this.communication,
            options: this.config.options || {},
            search: this.search,
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
    { type: Router },
    { type: ConfigurationService },
    { type: Title },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFNeEUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7Ozs7Ozs7Ozs7O0lBQzFELFlBQ1UsTUFBYyxFQUNkLGFBQW1DLEVBQ25DLFlBQW1CLEVBQ25CLG9CQUFpRCxFQUNqRCxTQUEyQixFQUMzQixhQUFtQyxFQUNuQyxNQUFxQixFQUNyQixLQUFxQjtRQUU3QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFUTixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBQ25CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDakQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFHL0IsQ0FBQzs7Ozs7SUFFUyxXQUFXO1FBQ25CLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtZQUNsQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsdytOQUFvQzthQUNyQzs7OztZQWJRLE1BQU07WUFHTixvQkFBb0I7WUFGcEIsS0FBSztZQUdMLDJCQUEyQjtZQUMzQixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBRXBCLGFBQWE7WUFSTCxjQUFjOzs7Ozs7O0lBZ0IzQiwwQ0FBc0I7Ozs7O0lBQ3RCLGlEQUEyQzs7Ozs7SUFDM0MsZ0RBQTJCOzs7OztJQUMzQix3REFBeUQ7Ozs7O0lBQ3pELDZDQUFtQzs7Ozs7SUFDbkMsaURBQTJDOzs7OztJQUMzQywwQ0FBNkI7Ozs7O0lBQzdCLHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXdHYWxsZXJ5TGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vZ2FsbGVyeS1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1nYWxsZXJ5LWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBd0dhbGxlcnlMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSxcbiAgICBwcml2YXRlIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHNlYXJjaDogU2VhcmNoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlcixcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgICAgdGl0bGVTZXJ2aWNlOiB0aGlzLnRpdGxlU2VydmljZSxcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19