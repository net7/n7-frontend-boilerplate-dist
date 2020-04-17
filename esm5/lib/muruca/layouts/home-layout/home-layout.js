/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MrHomeLayoutConfig as config } from './home-layout.config';
var MrHomeLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MrHomeLayoutComponent, _super);
    function MrHomeLayoutComponent(layoutsConfiguration) {
        return _super.call(this, layoutsConfiguration.get('MrHomeLayoutConfig') || config) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    MrHomeLayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            options: this.config.options || {}
        };
    };
    /**
     * @return {?}
     */
    MrHomeLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    MrHomeLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    MrHomeLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mr-home-layout',
                    template: "<div class=\"mr-home\" *ngIf=\"lb.dataSource\">\n    <!-- TODO: Replace with <n7-carousel-component> -->\n    <div style=\"\n        height: 300px;\n        border: 1px solid #dddddd;\n        line-height: 300px;\n        text-align: center;\">\n        <em>n7-carousel-component</em>\n    </div>\n    <!-- ========================================== -->\n    <n7-inner-title [data]=\"lb.widgets['mr-res-header'].ds.out$ | async\"></n7-inner-title>\n    <n7-item-preview\n        *ngFor=\"let resource of (lb.widgets['mr-resources'].ds.out$ | async)\"\n        [data]=\"resource\">\n    </n7-item-preview>\n    <n7-hero [data]=\"lb.widgets['mr-hero'].ds.out$ | async\">\n    </n7-hero>\n    <n7-inner-title [data]=\"lb.widgets['mr-coll-header'].ds.out$ | async\">\n    </n7-inner-title>\n    <n7-item-preview\n        *ngFor=\"let collection of (lb.widgets['mr-collections'].ds.out$ | async)\" \n        [data]=\"collection\">\n    </n7-item-preview>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MrHomeLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService }
    ]; };
    return MrHomeLayoutComponent;
}(AbstractLayout));
export { MrHomeLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixJQUFJLE1BQU0sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBFO0lBSTJDLGlEQUFjO0lBQ3ZELCtCQUNFLG9CQUFpRDtlQUVqRCxrQkFBTSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFUywyQ0FBVzs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsMjhCQUFpQztpQkFDbEM7Ozs7Z0JBTlEsMkJBQTJCOztJQTJCcEMsNEJBQUM7Q0FBQSxBQXhCRCxDQUkyQyxjQUFjLEdBb0J4RDtTQXBCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNckhvbWVMYXlvdXRDb25maWcgYXMgY29uZmlnIH0gZnJvbSAnLi9ob21lLWxheW91dC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1ob21lLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLWxheW91dC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJIb21lTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RMYXlvdXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGxheW91dHNDb25maWd1cmF0aW9uOiBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdNckhvbWVMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9XG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=