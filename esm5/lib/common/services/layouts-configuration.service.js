/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/layouts-configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var LayoutsConfigurationService = /** @class */ (function () {
    function LayoutsConfigurationService(config) {
        var _this = this;
        this.config = config;
        this.defaults = {};
        this.get = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return _this.defaults[key]; });
        this.set = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) { _this.defaults[key] = value; });
        if (this.config.layouts) {
            Object.keys(this.config.layouts).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.set(key, _this.config.layouts[key]);
            }));
        }
    }
    LayoutsConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    LayoutsConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ LayoutsConfigurationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LayoutsConfigurationService_Factory() { return new LayoutsConfigurationService(i0.ɵɵinject("config")); }, token: LayoutsConfigurationService, providedIn: "root" });
    return LayoutsConfigurationService;
}());
export { LayoutsConfigurationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutsConfigurationService.prototype.defaults;
    /** @type {?} */
    LayoutsConfigurationService.prototype.get;
    /** @type {?} */
    LayoutsConfigurationService.prototype.set;
    /**
     * @type {?}
     * @private
     */
    LayoutsConfigurationService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRW5EO0lBTUUscUNBQXNDLE1BQVc7UUFBakQsaUJBTUM7UUFOcUMsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUZ6QyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBVXBCLFFBQUc7Ozs7UUFBRyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLEVBQUM7UUFFbEMsUUFBRzs7Ozs7UUFBRyxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUE7UUFUMUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsR0FBRztnQkFDM0MsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBWkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFJYyxNQUFNLFNBQUMsUUFBUTs7O3NDQVI5QjtDQW1CQyxBQWpCRCxJQWlCQztTQWRZLDJCQUEyQjs7Ozs7O0lBQ3RDLCtDQUEyQjs7SUFVM0IsMENBQXlDOztJQUV6QywwQ0FBNEQ7Ozs7O0lBVmhELDZDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZhdWx0czogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IGFueSkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5sYXlvdXRzKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZy5sYXlvdXRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNvbmZpZy5sYXlvdXRzW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCA9IChrZXkpID0+IHRoaXMuZGVmYXVsdHNba2V5XTtcblxuICBwdWJsaWMgc2V0ID0gKGtleSwgdmFsdWUpID0+IHsgdGhpcy5kZWZhdWx0c1trZXldID0gdmFsdWU7IH1cbn1cbiJdfQ==