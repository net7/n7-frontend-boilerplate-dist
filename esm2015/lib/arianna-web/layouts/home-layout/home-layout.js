import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import tippy from 'tippy.js';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { AwHomeLayoutConfig as config } from './home-layout.config';
import { CommunicationService } from '../../../common/services/communication.service';
let AwHomeLayoutComponent = class AwHomeLayoutComponent extends AbstractLayout {
    constructor(layoutsConfiguration, router, configuration, communication, mainState) {
        super(layoutsConfiguration.get('AwHomeLayoutConfig') || config);
        this.router = router;
        this.configuration = configuration;
        this.communication = communication;
        this.mainState = mainState;
    }
    initPayload() {
        return {
            configuration: this.configuration,
            mainState: this.mainState,
            router: this.router,
            communication: this.communication,
            options: this.config.options || {},
            tippy,
        };
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
};
AwHomeLayoutComponent.ctorParameters = () => [
    { type: LayoutsConfigurationService },
    { type: Router },
    { type: ConfigurationService },
    { type: CommunicationService },
    { type: MainStateService }
];
AwHomeLayoutComponent = __decorate([
    Component({
        selector: 'aw-home-layout',
        template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\r\n    <!-- Carousel -->\r\n    <div class=\"aw-home__carousel\" *ngIf=\"lb.dataSource.carouselEnabled\">\r\n        <n7-carousel [data]=\"lb.widgets['aw-carousel'].ds.out$ | async\">\r\n        </n7-carousel>\r\n    </div>\r\n\r\n    <!-- Hero section at the top of the page -->\r\n    <div class=\"aw-home__top-hero\">\r\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\r\n        </n7-hero>\r\n    </div>\r\n\r\n    <!-- Bubble chart -->\r\n    <div class=\"aw-home__bubble-wrapper n7-side-auto-padding\"\r\n        [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length > 0 }\" *ngIf=\"lb.dataSource.bubblesEnabled\">\r\n        <div class=\"aw-home__facets-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\r\n            <n7-content-placeholder *ngFor=\"let i of [0,1,2,3]\" [data]=\"{\r\n                blocks: [{\r\n                    classes: 'facet-placeholder-header'\r\n                }, {\r\n                    classes: 'facet-placeholder-input'\r\n                }] \r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n        <div class=\"aw-home__facets-wrapper\" *ngIf=\"!!(lb.widgets['aw-home-facets-wrapper'].ds.out$ | async)\">\r\n            <span class=\"aw-home__facet\"\r\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\r\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\r\n                </n7-facet-header>\r\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\r\n                </n7-facet>\r\n            </span>\r\n        </div>\r\n\r\n        <div class=\"aw-home__bubble-chart-wrapper-loading\" *ngIf=\"!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\">\r\n            <n7-content-placeholder [data]=\"{\r\n                blocks: [\r\n                    {\r\n                        classes: 'facet-placeholder-item-1'\r\n                    }\r\n                ]\r\n            }\"></n7-content-placeholder>\r\n        </div>\r\n        <div class=\"aw-home__bubble-chart-wrapper\" *ngIf=\"!!(lb.widgets['aw-bubble-chart'].ds.out$ | async)\"\r\n            [style.overflow]=\"lb.dataSource.loadingBubbles ? 'visible' : 'hidden'\">\r\n            <aw-bubble-chart-wrapper>\r\n                <aw-chart-tippy \r\n                    [data]=\"lb.widgets['aw-chart-tippy'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['aw-chart-tippy'].emit\">\r\n                </aw-chart-tippy>\r\n                <n7-bubble-chart [data]=\"lb.widgets['aw-bubble-chart'].ds.out$ | async\"\r\n                    [emit]=\"lb.widgets['aw-bubble-chart'].emit\">\r\n                </n7-bubble-chart>\r\n            </aw-bubble-chart-wrapper>\r\n        </div>\r\n\r\n        <!-- Linked objects -->\r\n        <ng-container *ngIf=\"(lb.widgets['aw-bubble-chart'].ds.out$ | async)?.selected.length > 0;\">\r\n            <div class=\"aw-home__bubble-results\" id=\"home-bubble-results\">\r\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\" class=\"aw-home__bubble-results-title-wrapper\">\r\n                    <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">\r\n                            {{ lb.dataSource.numOfItemsStr }}</strong> <span> Risultati</span>\r\n                    </h1>\r\n                </div>\r\n                <div class=\"aw-home__bubble-tags-wrapper\">\r\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\r\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\r\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\r\n                        </n7-tag>\r\n                        <br>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"aw-home__bubble-results-list-wrapper\">\r\n                    <div class=\"aw-home__bubble-results-list-loading\" *ngIf=\"lb.dataSource.resultsListIsLoading\">\r\n                        <n7-content-placeholder \r\n                            *ngFor=\"let i of [1, 2, 3, 4, 5]\"\r\n                            [data]=\"{\r\n                                blocks: [{\r\n                                    classes: 'search-result-placeholder-title'\r\n                                }, {\r\n                                    classes: 'search-result-placeholder-metadata'\r\n                                }]\r\n                        }\"></n7-content-placeholder>\r\n                    </div>\r\n                    <div *ngIf=\"!lb.dataSource.resultsListIsLoading\" class=\"aw-home__bubble-results-list\"\r\n                        [attr.id]=\"'bubble-results-list'\" (scroll)=\"lb.eventHandler.emitOuter('scroll', $event.target)\">\r\n\r\n                        <div class=\"aw-home__bubble-results-fallback\"\r\n                            *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length < 1;\">\r\n                            <p class=\"aw-home__bubble-results-fallback-text\">\r\n                                {{ (lb.widgets['aw-linked-objects'].ds.out$ | async)?.fallback }}\r\n                            </p>\r\n                            <button class=\"n7-btn aw-home__bubble-results-reset\"\r\n                                (click)=\"lb.eventHandler.emitInner('clearselection')\">\r\n                                Resetta la ricerca\r\n                            </button>\r\n                        </div>\r\n\r\n                        <div class=\"aw-item-preview-list\">\r\n                            <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result\">\r\n                                <div class=\"aw-item-preview-wrapper\">\r\n                                    <n7-smart-breadcrumbs [data]=\"preview.breadcrumbs\">\r\n                                    </n7-smart-breadcrumbs>\r\n                                    <n7-item-preview [data]=\"preview\"\r\n                                                        [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                                    </n7-item-preview>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                        \r\n                        <!-- <ng-container\r\n                            *ngFor=\"let widgetData of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.result;\">\r\n                            <n7-item-preview [data]=\"widgetData\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\r\n                            </n7-item-preview>\r\n                        </ng-container> -->\r\n\r\n                        <ng-container *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.isLoading\">\r\n                            <div class=\"aw-home__bubble-results-list-loader\">\r\n                                <n7-loader [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.loaderData\">\r\n                                </n7-loader>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                    <div [ngClass]=\"{ 'is-visible' : lb.dataSource.hasScrollBackground }\"\r\n                        class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\r\n                </div>\r\n                <!-- aw-linked-objects__actions -->\r\n                <ng-container\r\n                    *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.result.length > 0 && !lb.dataSource.resultsListIsLoading\">\r\n                    <div *ngIf=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.actions as action\"\r\n                        class=\"aw-home__bubble-results-list-actions\">\r\n                        <button (click)=\"lb.eventHandler.emitInner('bubbleresultsviewallclick')\"\r\n                            class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\">\r\n                            {{action[0].label}}\r\n                        </button>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n\r\n    <!-- Outer links -->\r\n    <div *ngIf=\"lb.dataSource.outerLinks && lb.dataSource.outerLinks.length > 0\" class=\"aw-home__outer-links\">\r\n        <section class=\"aw-home__outer-links-wrapper n7-side-auto-padding\">\r\n            <h2 class=\"aw-home__outer-links-title\" *ngIf=\"lb.dataSource.outerLinksTitle\">\r\n                {{ lb.dataSource.outerLinksTitle }}\r\n            </h2>\r\n            <p class=\"aw-home__outer-links-description\" *ngIf=\"lb.dataSource.outerLinksDescription\">\r\n                {{ lb.dataSource.outerLinksDescription }}\r\n            </p>\r\n            <div class=\"aw-home__outer-links-items\">\r\n                <!-- Item preview -->\r\n                <n7-item-preview *ngFor=\"let outerLink of lb.dataSource.outerLinks\" [data]=\"outerLink\"\r\n                    [emit]=\"lb.eventHandler.outerLinkClick.bind(lb.eventHandler)\">\r\n                </n7-item-preview>\r\n                <!-- END // Item preview -->\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <!-- END // Outer links -->\r\n\r\n    <!-- Hero section at the bottom of the page -->\r\n    <div class=\"aw-home__bottom-hero\">\r\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\r\n        </n7-hero>\r\n    </div>\r\n\r\n    <!-- Adavanced autocomplete popover  -->\r\n    <div class=\"aw-home__advanced-autocomplete\" id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\r\n        <div class=\"aw-home__advanced-autocomplete-loader\" *ngIf=\"lb.dataSource.homeAutocompleteIsLoading\">\r\n            <n7-loader [data]=\"{}\"></n7-loader>\r\n        </div>\r\n        <n7-advanced-autocomplete *ngIf=\"!lb.dataSource.homeAutocompleteIsLoading\"\r\n            [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\r\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\r\n        </n7-advanced-autocomplete>\r\n    </div>\r\n\r\n    <!-- Simple autocomplete popover. DO NOT CHANGE parent div class! -->\r\n    <!-- Creating one template for each facet -->\r\n    <div *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\"\r\n        class=\"aw-home__simple-autocomplete aw-simple-autocomplete__template\" style=\"display: none;\">\r\n        <div class=\"aw-home__simple-autocomplete-content aw-simple-autocomplete__tippy-wrapper\">\r\n            <div class=\"aw-home__simple-autocomplete-loader aw-simple-autocomplete__tippy-wrapper-loader\"\r\n                *ngIf=\"(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\">\r\n                <n7-loader [data]=\"{}\"></n7-loader>\r\n            </div>\r\n            <n7-simple-autocomplete *ngIf=\"!(lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async)?.loading\"\r\n                [data]=\"lb.widgets['aw-autocomplete-wrapper'].ds.out$ | async\"\r\n                [emit]=\"lb.widgets['aw-autocomplete-wrapper'].emit\">\r\n            </n7-simple-autocomplete>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [LayoutsConfigurationService,
        Router,
        ConfigurationService,
        CommunicationService,
        MainStateService])
], AwHomeLayoutComponent);
export { AwHomeLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUM3QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixJQUFJLE1BQU0sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBTXRGLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsY0FBYztJQUN2RCxZQUNFLG9CQUFpRCxFQUN6QyxNQUFjLEVBQ2QsYUFBbUMsRUFDbkMsYUFBbUMsRUFDbkMsU0FBMkI7UUFFbkMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBTHhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBR3JDLENBQUM7SUFFUyxXQUFXO1FBQ25CLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7WUFDbEMsS0FBSztTQUNOLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0YsQ0FBQTs7WUEzQnlCLDJCQUEyQjtZQUNqQyxNQUFNO1lBQ0Msb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUN4QixnQkFBZ0I7O0FBTjFCLHFCQUFxQjtJQUpqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLHExV0FBaUM7S0FDbEMsQ0FBQztxQ0FHd0IsMkJBQTJCO1FBQ2pDLE1BQU07UUFDQyxvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3hCLGdCQUFnQjtHQU4xQixxQkFBcUIsQ0E2QmpDO1NBN0JZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcclxuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXdIb21lTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vaG9tZS1sYXlvdXQuY29uZmlnJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXctaG9tZS1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLWxheW91dC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdBd0hvbWVMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxyXG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxyXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXHJcbiAgICAgIHRpcHB5LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19