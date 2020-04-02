/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AbstractLayout } from '../../models/abstract-layout';
import { LayoutsConfigurationService } from '../../services/layouts-configuration.service';
import { Page404LayoutConfig as config } from './page404-layout.config';
var Page404LayoutComponent = /** @class */ (function (_super) {
    tslib_1.__extends(Page404LayoutComponent, _super);
    function Page404LayoutComponent(layoutsConfiguration) {
        return _super.call(this, layoutsConfiguration.get('Page404LayoutConfig') || config) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    Page404LayoutComponent.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            options: this.config.options || {},
        };
    };
    /**
     * @return {?}
     */
    Page404LayoutComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
    };
    /**
     * @return {?}
     */
    Page404LayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy();
    };
    Page404LayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-page404-layout',
                    template: "<div class=\"n7-page404-layout\">\n    404 - Resource not found\n</div>"
                }] }
    ];
    /** @nocollapse */
    Page404LayoutComponent.ctorParameters = function () { return [
        { type: LayoutsConfigurationService }
    ]; };
    return Page404LayoutComponent;
}(AbstractLayout));
export { Page404LayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTQwNC1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvcGFnZTQwNC1sYXlvdXQvcGFnZTQwNC1sYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDM0YsT0FBTyxFQUFFLG1CQUFtQixJQUFJLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhFO0lBSTRDLGtEQUFjO0lBQ3hELGdDQUNFLG9CQUFpRDtlQUVqRCxrQkFBTSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFUyw0Q0FBVzs7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbUZBQW9DO2lCQUNyQzs7OztnQkFOUSwyQkFBMkI7O0lBMkJwQyw2QkFBQztDQUFBLEFBeEJELENBSTRDLGNBQWMsR0FvQnpEO1NBcEJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fic3RyYWN0LWxheW91dCc7XG5pbXBvcnQgeyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXRzLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlNDA0TGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vcGFnZTQwNC1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctcGFnZTQwNC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZTQwNC1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2U0MDRMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdExheW91dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgbGF5b3V0c0NvbmZpZ3VyYXRpb246IExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0c0NvbmZpZ3VyYXRpb24uZ2V0KCdQYWdlNDA0TGF5b3V0Q29uZmlnJykgfHwgY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3B0aW9uczogdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fSxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==