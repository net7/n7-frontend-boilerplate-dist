/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MrSearchLayoutConfig as config } from './search-layout.config';
import { SearchService } from '../../../common/services/search.service';
// import { CommunicationService } from '../../../common/services/communication.service';
var MrSearchLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchLayoutComponent, _super);
    function MrSearchLayoutComponent(layoutsConfiguration, search) {
        var _this = _super.call(this, layoutsConfiguration.get('MrSearchLayoutConfig') || config) || this;
        _this.search = search;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    MrSearchLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            // configuration: this.configuration,
            // mainState: this.mainState,
            // communication: this.communication,
            search: this.search,
            // route: this.route,
            options: this.config.options || {},
        };
    };
    /**
     * @return {?}
     */
    MrSearchLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    MrSearchLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    MrSearchLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mr-search-layout',
                    template: "<div class=\"search-layout\" *ngIf=\"lb.dataSource\">\n    <div class=\"search-wrapper\">\n        <div class=\"filter-section\">\n            <h2>Filtra i risultati</h2>\n            <n7-facets-wrapper \n                [data]=\"lb.widgets['facets-wrapper'].ds.out$ | async\" \n                [emit]=\"lb.widgets['facets-wrapper'].emit\">\n            </n7-facets-wrapper>\n        </div>\n        <n7-item-preview \n            *ngFor=\"let resource of (lb.widgets['mr-resources'].ds.out$ | async)\" \n            [data]=\"resource\">\n        </n7-item-preview>\n    </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MrSearchLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService },
        { type: SearchService }
    ]; };
    return MrSearchLayoutComponent;
}(AbstractLayout));
export { MrSearchLayoutComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutComponent.prototype.search;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFJeEU7SUFJNkMsbURBQWM7SUFDekQsaUNBQ0Usb0JBQWlELEVBQ3pDLE1BQXFCO1FBRi9CLFlBS0Usa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQ2xFO1FBSlMsWUFBTSxHQUFOLE1BQU0sQ0FBZTs7SUFJL0IsQ0FBQzs7Ozs7SUFFUyw2Q0FBVzs7OztJQUFyQjtRQUNFLE9BQU87Ozs7WUFJTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07O1lBRW5CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix1bEJBQW1DO2lCQUNwQzs7OztnQkFUUSwyQkFBMkI7Z0JBRTNCLGFBQWE7O0lBbUN0Qiw4QkFBQztDQUFBLEFBL0JELENBSTZDLGNBQWMsR0EyQjFEO1NBM0JZLHVCQUF1Qjs7Ozs7O0lBR2hDLHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1yU2VhcmNoTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vc2VhcmNoLWxheW91dC5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG4vLyBpbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLXNlYXJjaC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHNlYXJjaDogU2VhcmNoU2VydmljZSxcbiAgICAvLyBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihsYXlvdXRzQ29uZmlndXJhdGlvbi5nZXQoJ01yU2VhcmNoTGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gY29uZmlndXJhdGlvbjogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgLy8gbWFpblN0YXRlOiB0aGlzLm1haW5TdGF0ZSxcbiAgICAgIC8vIGNvbW11bmljYXRpb246IHRoaXMuY29tbXVuaWNhdGlvbixcbiAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXG4gICAgICAvLyByb3V0ZTogdGhpcy5yb3V0ZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge30sXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=