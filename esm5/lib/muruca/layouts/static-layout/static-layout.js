/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/static-layout/static-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { LayoutsConfigurationService } from '../../../common/services/layouts-configuration.service';
import { MrStaticLayoutConfig as config } from './static-layout.config';
var MrStaticLayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MrStaticLayoutComponent, _super);
    function MrStaticLayoutComponent(layoutsConfiguration) {
        return _super.call(this, layoutsConfiguration.get('MrStaticLayoutConfig') || config) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    MrStaticLayoutComponent.prototype.initPayload = /**
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
    MrStaticLayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    MrStaticLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    MrStaticLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mr-static-layout',
                    template: "<div class=\"static-layout\" *ngIf=\"lb.dataSource\">\n    Hello, from Static layout!\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MrStaticLayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService }
    ]; };
    return MrStaticLayoutComponent;
}(AbstractLayout));
export { MrStaticLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RTtJQUk2QyxtREFBYztJQUN6RCxpQ0FDRSxvQkFBaUQ7ZUFFakQsa0JBQU0sb0JBQW9CLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksTUFBTSxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRVMsNkNBQVc7Ozs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUU7U0FDbkMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELDZDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDJHQUFtQztpQkFDcEM7Ozs7Z0JBTlEsMkJBQTJCOztJQTJCcEMsOEJBQUM7Q0FBQSxBQXhCRCxDQUk2QyxjQUFjLEdBb0IxRDtTQXBCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcbmltcG9ydCB7IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNclN0YXRpY0xheW91dENvbmZpZyBhcyBjb25maWcgfSBmcm9tICcuL3N0YXRpYy1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItc3RhdGljLWxheW91dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0aWMtbGF5b3V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNclN0YXRpY0xheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBsYXlvdXRzQ29uZmlndXJhdGlvbjogTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGxheW91dHNDb25maWd1cmF0aW9uLmdldCgnTXJTdGF0aWNMYXlvdXRDb25maWcnKSB8fCBjb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHRpb25zOiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9XG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub25Jbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG59XG4iXX0=