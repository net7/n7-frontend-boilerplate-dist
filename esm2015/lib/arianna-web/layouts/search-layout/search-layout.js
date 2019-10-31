/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFBO0FBQ3ZFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsMkJBQTJCLEVBQzNCLGdCQUFnQixFQUNoQixhQUFhLEVBQ2Isb0JBQW9CLEdBQ3JCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLG9CQUFvQixJQUFJLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBT3hFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjOzs7Ozs7OztJQUN6RCxZQUNVLGFBQW1DLEVBQ25DLG9CQUFpRCxFQUNqRCxTQUEyQixFQUMzQixhQUFtQyxFQUNuQyxNQUFxQjtRQUc3QixLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFQMUQsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFDakQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLFdBQU0sR0FBTixNQUFNLENBQWU7SUFJL0IsQ0FBQzs7Ozs7Ozs7SUFPUyxXQUFXO1FBQ25CLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQTtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIscXlGQUFtQzthQUNwQzs7OztZQVhDLG9CQUFvQjtZQUNwQiwyQkFBMkI7WUFDM0IsZ0JBQWdCO1lBRWhCLG9CQUFvQjtZQURwQixhQUFhOzs7Ozs7O0lBWVgsZ0RBQTJDOzs7OztJQUMzQyx1REFBeUQ7Ozs7O0lBQ3pELDRDQUFtQzs7Ozs7SUFDbkMsZ0RBQTJDOzs7OztJQUMzQyx5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0J1xuaW1wb3J0IHsgXG4gIENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gIE1haW5TdGF0ZVNlcnZpY2UsXG4gIFNlYXJjaFNlcnZpY2UsXG4gIENvbW11bmljYXRpb25TZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMnO1xuaW1wb3J0IHsgQXdTZWFyY2hMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXNlYXJjaC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWxheW91dC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2UsXG5cbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdBd1NlYXJjaExheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogT3B0aW9uYWwgdmFyaWFibGVzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGZyb20gdGhlIGxheW91dCdzIGxvZ2ljLlxuICAgKiBJZiByZW1vdmVkLCB0aGV5IG11c3QgYWxzbyBiZSByZW1vdmVkIGZyb20gdGhlIGxheW91dCdzIERhdGFTb3VyY2UgZmlsZSxcbiAgICogYW5kIGZyb20gdGhpcyBmaWxlIGltcG9ydHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufSJdfQ==