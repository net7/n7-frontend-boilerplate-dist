/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService, LayoutsConfigurationService, MainStateService, SearchService, CommunicationService, } from '../../../common/services';
import { AwSearchLayoutConfig as config } from './search-layout.config';
export class AwSearchLayoutComponent extends AbstractLayout {
    /**
     * @param {?} configuration
     * @param {?} layoutsConfiguration
     * @param {?} mainState
     * @param {?} communication
     * @param {?} search
     */
    constructor(configuration, layoutsConfiguration, mainState, communication, search) {
        super(layoutsConfiguration.get('AwSearchLayoutConfig') || config);
        this.configuration = configuration;
        this.layoutsConfiguration = layoutsConfiguration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
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
                template: "<div class=\"aw-search n7-side-auto-padding\" id=\"search-layout\">\n    <div class=\"aw-search__header\">\n        <div class=\"aw-search__header-left\">\n            <h1 class=\"aw-search__header-title\">{{ lb.dataSource.pageTitle }}</h1>\n        </div>        \n        <!--\n        <div class=\"aw-search__header-right\">\n            <n7-nav\n                [data]=\"lb.widgets['aw-search-layout-tabs'].ds.out$ | async\"\n                [emit]=\"lb.widgets['aw-search-layout-tabs'].emit\">\n            </n7-nav>\n        </div>\n        -->\n    </div>\n    <div class=\"aw-search__content-wrapper\">\n        <!-- Left sidebar: facets -->\n        <div class=\"aw-search__sidebar\">\n            <div class=\"aw-search__facets\">\n                <n7-facets-wrapper\n                    [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                    [emit]=\"lb.widgets['facets-wrapper'].emit\">\n                </n7-facets-wrapper>\n            </div>\n        </div>\n        <div class=\"aw-search__content\">\n            <div class=\"aw-search__results-header\">\n                <div class=\"aw-search__results-header-left\">\n                    <h3 class=\"aw-search__total\">\n                        <span class=\"aw-search__total-number\">{{ lb.dataSource.totalCount }}</span>&nbsp;\n                        <span class=\"aw-search__total-title\">{{ lb.dataSource.resultsTitle }}</span>\n                    </h3>\n                </div>        \n                <div class=\"aw-search__results-header-right\">\n                    <label class=\"aw-search__results-select-orderby-label\" for=\"aw-search__results-select-orderby\">{{ lb.dataSource.orderByLabel }}</label>\n                    <select (change)=\"lb.eventHandler.emitInner('orderbychange', $event.target.value)\" id=\"aw-search__results-select-orderby\">\n                        <option *ngFor=\"let option of lb.dataSource.orderByOptions\" [value]=\"option.value\">{{ option.label }}</option>\n                    </select>\n                </div>     \n            </div>\n            <!-- Search details -->\n            <div class=\"aw-search__results-wrapper\">\n                <ng-container *ngFor=\"let preview of (lb.widgets['aw-linked-objects'].ds.out$ | async)?.previews\">\n                    <n7-breadcrumbs [data]=\"preview.breadcrumbs\">\n                    </n7-breadcrumbs>\n                    <n7-item-preview [data]=\"preview\" [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                    </n7-item-preview>\n                </ng-container>\n                <n7-pagination [data]=\"(lb.widgets['aw-linked-objects'].ds.out$ | async)?.pagination\"\n                    [emit]=\"lb.widgets['aw-linked-objects'].emit\">\n                </n7-pagination>\n            </div>\n        </div>\n    </div>\n</div>\n"
            }] }
];
/** @nocollapse */
AwSearchLayoutComponent.ctorParameters = () => [
    { type: ConfigurationService },
    { type: LayoutsConfigurationService },
    { type: MainStateService },
    { type: CommunicationService },
    { type: SearchService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUN2RSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDJCQUEyQixFQUMzQixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLG9CQUFvQixHQUNyQixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU94RSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsY0FBYzs7Ozs7Ozs7SUFDekQsWUFDVSxhQUFtQyxFQUNuQyxvQkFBaUQsRUFDakQsU0FBMkIsRUFDM0IsYUFBbUMsRUFDbkMsTUFBcUI7UUFHN0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBUDFELGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1FBQ2pELGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFlO0lBSS9CLENBQUM7Ozs7Ozs7O0lBT1MsV0FBVztRQUNuQixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUE7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHF5RkFBbUM7YUFDcEM7Ozs7WUFYQyxvQkFBb0I7WUFDcEIsMkJBQTJCO1lBQzNCLGdCQUFnQjtZQUVoQixvQkFBb0I7WUFEcEIsYUFBYTs7Ozs7OztJQVlYLGdEQUEyQzs7Ozs7SUFDM0MsdURBQXlEOzs7OztJQUN6RCw0Q0FBbUM7Ozs7O0lBQ25DLGdEQUEyQzs7Ozs7SUFDM0MseUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL2Fic3RyYWN0LWxheW91dCdcbmltcG9ydCB7IFxuICBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICBNYWluU3RhdGVTZXJ2aWNlLFxuICBTZWFyY2hTZXJ2aWNlLFxuICBDb21tdW5pY2F0aW9uU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzJztcbmltcG9ydCB7IEF3U2VhcmNoTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vc2VhcmNoLWxheW91dC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1zZWFyY2gtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1sYXlvdXQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VhcmNoOiBTZWFyY2hTZXJ2aWNlLFxuXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnQXdTZWFyY2hMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHZhcmlhYmxlcyB0aGF0IGNhbiBiZSBhY2Nlc3NlZCBmcm9tIHRoZSBsYXlvdXQncyBsb2dpYy5cbiAgICogSWYgcmVtb3ZlZCwgdGhleSBtdXN0IGFsc28gYmUgcmVtb3ZlZCBmcm9tIHRoZSBsYXlvdXQncyBEYXRhU291cmNlIGZpbGUsXG4gICAqIGFuZCBmcm9tIHRoaXMgZmlsZSBpbXBvcnRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBtYWluU3RhdGU6IHRoaXMubWFpblN0YXRlLFxuICAgICAgY29tbXVuaWNhdGlvbjogdGhpcy5jb21tdW5pY2F0aW9uLFxuICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn0iXX0=