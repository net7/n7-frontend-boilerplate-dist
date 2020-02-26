/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { AwHomeLayoutConfig as config } from './home-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
import tippy from 'tippy.js';
var AwHomeLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutComponent, _super);
    function AwHomeLayoutComponent(layoutsConfiguration, router, configuration, communication, mainState) {
        var _this = _super.call(this, layoutsConfiguration.get('AwHomeLayoutConfig') || config) || this;
        _this.router = router;
        _this.configuration = configuration;
        _this.communication = communication;
        _this.mainState = mainState;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    AwHomeLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            communication: this.communication,
            options: this.config.options || {},
            tippy: tippy,
        };
    };
    /**
     * @return {?}
     */
    AwHomeLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    AwHomeLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    AwHomeLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-home-layout',
                    template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper n7-side-auto-padding\"\n        [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length > 0 }\" *ngIf=\"lb.dataSource.bubblesEnabled\">\n        <div class=\"aw-home__facets-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\n            <n7-content-placeholder *ngFor=\"let i of [0,1,2,3]\" [data]=\"{\n                blocks: [{\n                    classes: 'facet-placeholder-header'\n                }, {\n                    classes: 'facet-placeholder-input'\n                }] \n            }\"></n7-content-placeholder>\n        </div>\n        <div class=\"aw-home__facets-wrapper\" *ngIf=\"!!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\n            <span class=\"aw-home__facet\"\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n\n        <div class=\"aw-home__bubble-chart-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\">\n            <n7-content-placeholder [data]=\"{\n                blocks: [\n                    {\n                        classes: 'facet-placeholder-item-1'\n                    }\n                ]\n            }\"></n7-content-placeholder>\n        </div>\n        <div class=\"aw-home__bubble-chart-wrapper\" *ngIf=\"!!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\"\n            [style.overflow]=\"lb.dataSource.loadingBubbles ? 'visible' : 'hidden'\">\n            <aw-bubble-chart-wrapper>\n                <aw-chart-tippy \n                    [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\n                </aw-chart-tippy>\n                <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\n                </n7-bubble-chart>\n            </aw-bubble-chart-wrapper>\n        </div>\n\n        <!-- Linked objects -->\n        <ng-container *ngIf=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.selected.length > 0;\">\n            <div class=\"aw-home__bubble-results\" id=\"home-bubble-results\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\" class=\"aw-home__bubble-results-title-wrapper\">\n                    <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">\n                            {{ lb.dataSource.numOfItemsStr }}</strong> <span> Oggetti culturali</span>\n                    </h1>\n                </div>\n                <div class=\"aw-home__bubble-tags-wrapper\">\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                        </n7-tag>\n                        <br>\n                    </ng-container>\n                </div>\n\n                <div class=\"aw-home__bubble-results-list-wrapper\">\n                    <div class=\"aw-home__bubble-results-list-loading\" *ngIf=\"lb.dataSource.resultsListIsLoading\">\n                        <n7-content-placeholder [data]=\"{\n                            blocks: [{\n                                classes: 'search-result-placeholder-title'\n                            }, {\n                                classes: 'search-result-placeholder-metadata'\n                            }]\n                        }\"></n7-content-placeholder>\n                        <n7-content-placeholder [data]=\"{\n                            blocks: [{\n                                classes: 'search-result-placeholder-title'\n                            }, {\n                                classes: 'search-result-placeholder-metadata'\n                            }]\n                        }\"></n7-content-placeholder>\n                        <n7-content-placeholder [data]=\"{\n                            blocks: [{\n                                classes: 'search-result-placeholder-title'\n                            }, {\n                                classes: 'search-result-placeholder-metadata'\n                            }]\n                        }\"></n7-content-placeholder>\n                        <n7-content-placeholder [data]=\"{\n                            blocks: [{\n                                classes: 'search-result-placeholder-title'\n                            }, {\n                                classes: 'search-result-placeholder-metadata'\n                            }]\n                        }\"></n7-content-placeholder>\n                        <n7-content-placeholder [data]=\"{\n                            blocks: [{\n                                classes: 'search-result-placeholder-title'\n                            }, {\n                                classes: 'search-result-placeholder-metadata'\n                            }]\n                        }\"></n7-content-placeholder>\n                    </div>\n                    <div *ngIf=\"!lb.dataSource.resultsListIsLoading\" class=\"aw-home__bubble-results-list\"\n                        [attr.id]=\"'bubble-results-list'\" (scroll)=\"lb.eventHandler.emitOuter('scroll', $event.target)\">\n\n                        <div class=\"aw-home__bubble-results-fallback\"\n                            *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length < 1;\">\n                            <p class=\"aw-home__bubble-results-fallback-text\">\n                                {{ (lb.widgets['aw-linked-objects'].ds.out$ | async)?.fallback }}\n                            </p>\n                            <button class=\"n7-btn aw-home__bubble-results-reset\"\n                                (click)=\"lb.eventHandler.emitInner('clearselection')\">\n                                Resetta la ricerca\n                            </button>\n                        </div>\n\n                        <ng-container\n                            *ngFor=\"let widgetData of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result;\">\n                            <n7-item-preview [data]=\"widgetData\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.isLoading\">\n                            <div class=\"aw-home__bubble-results-list-loader\">\n                                <n7-loader [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.loaderData\">\n                                </n7-loader>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <div [ngClass]=\"{ 'is-visible' : lb.dataSource.hasScrollBackground }\"\n                        class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\n                </div>\n                <!-- aw-linked-objects__actions -->\n                <ng-container\n                    *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length > 0 && !lb.dataSource.resultsListIsLoading\">\n                    <div *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.actions as action\"\n                        class=\"aw-home__bubble-results-list-actions\">\n                        <button (click)=\"lb.eventHandler.emitInner('bubbleresultsviewallclick')\"\n                            class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\">\n                            {{action[0].label}}\n                        </button>\n                    </div>\n                </ng-container>\n\n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Outer links -->\n    <div *ngIf=\"lb.dataSource.outerLinks && lb.dataSource.outerLinks.length > 0\" class=\"aw-home__outer-links\">\n        <section class=\"aw-home__outer-links-wrapper n7-side-auto-padding\">\n            <h2 class=\"aw-home__outer-links-title\" *ngIf=\"lb.dataSource.outerLinksTitle\">\n                {{ lb.dataSource.outerLinksTitle }}\n            </h2>\n            <div class=\"aw-home__outer-links-items\">\n                <!-- Item preview -->\n                <n7-item-preview *ngFor=\"let outerLink of lb.dataSource.outerLinks\" [data]=\"outerLink\"\n                    [emit]=\"lb.eventHandler.outerLinkClick.bind(lb.eventHandler)\">\n                </n7-item-preview>\n                <!-- END // Item preview -->\n            </div>\n        </section>\n    </div>\n    <!-- END // Outer links -->\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- Adavanced autocomplete popover  -->\n    <div class=\"aw-home__advanced-autocomplete\" id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\n        <div class=\"aw-home__advanced-autocomplete-loader\" *ngIf=\"lb.dataSource.homeAutocompleteIsLoading\">\n            <n7-loader [data]=\"{}\"></n7-loader>\n        </div>\n        <n7-advanced-autocomplete *ngIf=\"!lb.dataSource.homeAutocompleteIsLoading\"\n            [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\n        </n7-advanced-autocomplete>\n    </div>\n\n    <!-- Simple autocomplete popover. DO NOT CHANGE parent div class! -->\n    <!-- Creating one template for each facet -->\n    <div *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\"\n        class=\"aw-home__simple-autocomplete aw-simple-autocomplete__template\" style=\"display: none;\">\n        <div class=\"aw-home__simple-autocomplete-content aw-simple-autocomplete__tippy-wrapper\">\n            <div class=\"aw-home__simple-autocomplete-loader aw-simple-autocomplete__tippy-wrapper-loader\"\n                *ngIf=\"(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\">\n                <n7-loader [data]=\"{}\"></n7-loader>\n            </div>\n            <n7-simple-autocomplete *ngIf=\"!(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\"\n                [data]=\"lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-autocomplete-wrapper'].emit\">\n            </n7-simple-autocomplete>\n        </div>\n    </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    AwHomeLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService },
        { type: Router },
        { type: ConfigurationService },
        { type: CommunicationService },
        { type: MainStateService }
    ]; };
    return AwHomeLayoutComponent;
}(AbstractLayout));
export { AwHomeLayoutComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutComponent.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutComponent.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutComponent.prototype.mainState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFBO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsSUFBSSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFN0I7SUFJMkMsaURBQWM7SUFDdkQsK0JBQ0Usb0JBQWlELEVBQ3pDLE1BQWMsRUFDZCxhQUFtQyxFQUNuQyxhQUFtQyxFQUNuQyxTQUEyQjtRQUxyQyxZQU9FLGtCQUFNLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUNoRTtRQU5TLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGVBQVMsR0FBVCxTQUFTLENBQWtCOztJQUdyQyxDQUFDOzs7OztJQUVTLDJDQUFXOzs7O0lBQXJCO1FBQ0UsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtZQUNsQyxLQUFLLEVBQUUsS0FBSztTQUNiLENBQUE7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixtcFdBQWlDO2lCQUNwQzs7OztnQkFUUSwyQkFBMkI7Z0JBSDNCLE1BQU07Z0JBRU4sb0JBQW9CO2dCQUlwQixvQkFBb0I7Z0JBRnBCLGdCQUFnQjs7SUFzQ3pCLDRCQUFDO0NBQUEsQUFqQ0QsQ0FJMkMsY0FBYyxHQTZCeEQ7U0E3QlkscUJBQXFCOzs7Ozs7SUFHOUIsdUNBQXNCOzs7OztJQUN0Qiw4Q0FBMkM7Ozs7O0lBQzNDLDhDQUEyQzs7Ozs7SUFDM0MsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF3SG9tZUxheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL2hvbWUtbGF5b3V0LmNvbmZpZyc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhdy1ob21lLWxheW91dCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvbWUtbGF5b3V0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICApe1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnQXdIb21lTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpe1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgcm91dGVyOiB0aGlzLnJvdXRlcixcbiAgICAgIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgICB0aXBweTogdGlwcHksXG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=