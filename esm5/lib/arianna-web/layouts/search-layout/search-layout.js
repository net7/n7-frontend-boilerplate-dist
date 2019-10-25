/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { ConfigurationService, LayoutsConfigurationService, MainStateService, SearchService, CommunicationService, } from '../../../common/services';
import { AwSearchLayoutConfig as config } from './search-layout.config';
var AwSearchLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AwSearchLayoutComponent, _super);
    function AwSearchLayoutComponent(configuration, layoutsConfiguration, mainState, communication, search) {
        var _this = _super.call(this, layoutsConfiguration.get('AwSearchLayoutConfig') || config) || this;
        _this.configuration = configuration;
        _this.layoutsConfiguration = layoutsConfiguration;
        _this.mainState = mainState;
        _this.communication = communication;
        _this.search = search;
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
                    template: "<div class=\"aw-search\" id=\"search-layout\">\n    <div class=\"aw-search__content\">\n\n        <!-- Left sidebar: tree -->\n        <div class=\"aw-search__facets\">\n            <n7-facets-wrapper\n                [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\"\n                [emit]=\"lb.widgets['facets-wrapper'].emit\">\n            </n7-facets-wrapper>\n        </div>\n\n        <!-- Search details -->\n        <div class=\"aw-search__search-wrapper\">\n            #TODO: results\n        </div>\n    </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AwSearchLayoutComponent.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: LayoutsConfigurationService },
        { type: MainStateService },
        { type: CommunicationService },
        { type: SearchService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUN2RSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLDJCQUEyQixFQUMzQixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLG9CQUFvQixHQUNyQixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RTtJQUs2QyxtREFBYztJQUN6RCxpQ0FDVSxhQUFtQyxFQUNuQyxvQkFBaUQsRUFDakQsU0FBMkIsRUFDM0IsYUFBbUMsRUFDbkMsTUFBcUI7UUFML0IsWUFRRSxrQkFBTSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsSUFBSSxNQUFNLENBQUMsU0FDbEU7UUFSUyxtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUNqRCxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixtQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsWUFBTSxHQUFOLE1BQU0sQ0FBZTs7SUFJL0IsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7O0lBQ08sNkNBQVc7Ozs7Ozs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUE7SUFDSCxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixzaUJBQW1DO2lCQUNwQzs7OztnQkFYQyxvQkFBb0I7Z0JBQ3BCLDJCQUEyQjtnQkFDM0IsZ0JBQWdCO2dCQUVoQixvQkFBb0I7Z0JBRHBCLGFBQWE7O0lBNENmLDhCQUFDO0NBQUEsQUF2Q0QsQ0FLNkMsY0FBYyxHQWtDMUQ7U0FsQ1ksdUJBQXVCOzs7Ozs7SUFFaEMsZ0RBQTJDOzs7OztJQUMzQyx1REFBeUQ7Ozs7O0lBQ3pELDRDQUFtQzs7Ozs7SUFDbkMsZ0RBQTJDOzs7OztJQUMzQyx5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0J1xuaW1wb3J0IHsgXG4gIENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gIE1haW5TdGF0ZVNlcnZpY2UsXG4gIFNlYXJjaFNlcnZpY2UsXG4gIENvbW11bmljYXRpb25TZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMnO1xuaW1wb3J0IHsgQXdTZWFyY2hMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXNlYXJjaC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWxheW91dC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2UsXG5cbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdBd1NlYXJjaExheW91dENvbmZpZycpIHx8IGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogT3B0aW9uYWwgdmFyaWFibGVzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGZyb20gdGhlIGxheW91dCdzIGxvZ2ljLlxuICAgKiBJZiByZW1vdmVkLCB0aGV5IG11c3QgYWxzbyBiZSByZW1vdmVkIGZyb20gdGhlIGxheW91dCdzIERhdGFTb3VyY2UgZmlsZSxcbiAgICogYW5kIGZyb20gdGhpcyBmaWxlIGltcG9ydHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIG1haW5TdGF0ZTogdGhpcy5tYWluU3RhdGUsXG4gICAgICBjb21tdW5pY2F0aW9uOiB0aGlzLmNvbW11bmljYXRpb24sXG4gICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3koKTtcbiAgfVxufSJdfQ==