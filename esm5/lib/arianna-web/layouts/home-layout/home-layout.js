/**
 * @fileoverview added by tsickle
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
import { CommunicationService } from '../../../common/services';
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
                    template: "<div class=\"aw-home\" *ngIf=\"lb.dataSource\">\n    <!-- Hero section at the top of the page -->\n    <div class=\"aw-home__top-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-hero'].ds.out$ | async\" [emit]=\"lb.widgets['aw-hero'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- hidden buttons and div used to implement the bubbles' popups -->\n    <button style=\"display: none;\"\n            id=\"bubble-popup-menu_closebutton\"\n            (click)=\"lb.eventHandler.emitInner('bubble-tooltip-close-click',{entityId:(lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.id : null)} )\"></button>\n    <button style=\"display: none;\"\n            id=\"bubble-popup-menu_gotobutton\"\n            (click)=\"lb.eventHandler.emitInner('bubble-tooltip-goto-click',{entityId:(lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.id : null)} )\"></button>\n    <button style=\"display: none;\"\n            id=\"bubble-popup-menu_selectbutton\"\n            (click)=\"lb.eventHandler.emitInner('bubble-tooltip-select-click',{entityId:(lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.id : null)} )\"></button>\n    <div class=\"aw-bubble-popup-menu\" id=\"bubble-popup-menu\" style=\"display: none;\">\n        <h2 class=\"aw-bubble-popup-menu__title\">{{ ( lb.dataSource.currentHoverEntity ? lb.dataSource.currentHoverEntity.label : '' ) }}</h2>\n        <span class=\"aw-bubble-popup-menu__close n7-icon-close\" onclick=\"document.getElementById('bubble-popup-menu_closebutton').click();\"></span>\n        <p class=\"aw-bubble-popup-menu__text\">\n            {{ ( lb.dataSource.currentHoverEntity ? '\u00C8 collegato a '+lb.dataSource.currentHoverEntity.count+' entit\u00E0' : '' ) }}\n        </p>\n\n        <div class=\"aw-bubble-popup-menu__actions\">\n            <span class=\"aw-bubble-popup-menu__link\" onclick=\"document.getElementById('bubble-popup-menu_gotobutton').click();\">Vai alla scheda</span>\n            <span class=\"aw-bubble-popup-menu__link\" onclick=\"document.getElementById('bubble-popup-menu_selectbutton').click();\">Seleziona</span>\n        </div>\n    </div>\n\n    <!-- Bubble chart -->\n    <div class=\"aw-home__bubble-wrapper\" [ngClass]=\"{ 'has-results' : lb.dataSource.selectedBubbles.length>0 }\">\n        <div class=\"aw-home__facets-wrapper\">\n            <span class=\"aw-home__facet\"\n                *ngFor=\"let widgetData of lb.widgets['aw-home-facets-wrapper'].ds.out$ | async;\">\n                <n7-facet-header [data]=\"widgetData.header\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet-header>\n                <n7-facet [data]=\"widgetData.input\" [emit]=\"lb.widgets['aw-home-facets-wrapper'].emit\">\n                </n7-facet>\n            </span>\n        </div>\n\n        <div id=\"bubble-chart-container\">\n            <n7-bubble-chart [data]=\"lb.widgets['aw-home-bubble-chart'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-home-bubble-chart'].emit\">\n            </n7-bubble-chart>\n        </div>\n\n        <ng-container *ngIf=\"lb.dataSource.selectedBubbles.length>0\">\n            <div class=\"aw-home__bubble-results\" [ngStyle]=\"{ 'display': 'flex' , 'flex-direction': 'column' }\">\n                <div *ngIf=\"lb.dataSource.numOfItemsStr\"> <h1 class=\"aw-home__bubble-results-title\"><strong class=\"aw-home__bubble-results-title-counter\">{{ lb.dataSource.numOfItemsStr }}</strong> <span> Oggetti culturali</span></h1></div>\n\n                <div class=\"aw-home__bubble-tags-wrapper\">\n                    <h3 class=\"aw-home__bubble-tags-title\">Collegati a </h3>\n                    <ng-container *ngFor=\"let widgetData of lb.widgets['aw-home-item-tags-wrapper'].ds.out$ | async;\">\n                        <n7-tag [data]=\"widgetData\" [emit]=\"lb.widgets['aw-home-item-tags-wrapper'].emit\">\n                        </n7-tag>\n                        <br>\n                    </ng-container>\n                </div>\n                <div class=\"aw-home__bubble-results-list-wrapper\">\n                    <div class=\"aw-home__bubble-results-list\" [attr.id]=\"'bubble-results-list'\">\n                        <ng-container *ngFor=\"let widgetData of lb.widgets['aw-linked-objects'].ds.out$ | async;\">\n                            <n7-item-preview\n                                [data]=\"widgetData\"\n                                [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                            </n7-item-preview>\n                        </ng-container>\n                    </div>\n                    <div *ngIf=\"lb.dataSource.hasScrollBackground\" class=\"aw-home__bubble-results-list-wrapper-with-scroll\"></div>\n                    \n                    <div class=\"aw-home__bubble-results-list-actions\">\n                        <a class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-all\" href=\"\">Vedi tutti</a>\n                        <a class=\"n7-btn n7-btn-light n7-btn-l aw-home__bubble-results-list-view-others\" href=\"\">Vedi altri</a>\n                    </div>\n                    \n                </div>\n               \n            </div>\n        </ng-container>\n    </div>\n\n    <!-- Hero section at the bottom of the page -->\n    <div class=\"aw-home__bottom-hero\">\n        <n7-hero [data]=\"lb.widgets['aw-home-hero-patrimonio'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-hero-patrimonio'].emit\">\n        </n7-hero>\n    </div>\n\n    <!-- adavanced autocomplete popover  -->\n    <div id=\"aw-home-advanced-autocomplete-popover\" style=\"display: none;\">\n        <n7-advanced-autocomplete [data]=\"lb.widgets['aw-home-autocomplete'].ds.out$ | async\"\n            [emit]=\"lb.widgets['aw-home-autocomplete'].emit\">\n        </n7-advanced-autocomplete>\n    </div>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUE7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixJQUFJLE1BQU0sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QjtJQUkyQyxpREFBYztJQUN2RCwrQkFDRSxvQkFBaUQsRUFDekMsTUFBYyxFQUNkLGFBQW1DLEVBQ25DLGFBQW1DLEVBQ25DLFNBQTJCO1FBTHJDLFlBT0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ2hFO1FBTlMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7O0lBR3JDLENBQUM7Ozs7O0lBRVMsMkNBQVc7Ozs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1lBQ2xDLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQTtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLG93TEFBaUM7aUJBQ3BDOzs7O2dCQVRRLDJCQUEyQjtnQkFIM0IsTUFBTTtnQkFFTixvQkFBb0I7Z0JBSXBCLG9CQUFvQjtnQkFGcEIsZ0JBQWdCOztJQXNDekIsNEJBQUM7Q0FBQSxBQWpDRCxDQUkyQyxjQUFjLEdBNkJ4RDtTQTdCWSxxQkFBcUI7Ozs7OztJQUc5Qix1Q0FBc0I7Ozs7O0lBQ3RCLDhDQUEyQzs7Ozs7SUFDM0MsOENBQTJDOzs7OztJQUMzQywwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCdcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXdIb21lTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vaG9tZS1sYXlvdXQuY29uZmlnJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXctaG9tZS1sYXlvdXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob21lLWxheW91dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgKXtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ0F3SG9tZUxheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKXtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9LFxuICAgICAgdGlwcHk6IHRpcHB5LFxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19