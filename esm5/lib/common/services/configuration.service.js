/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(config) {
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
        function (key, value) { return _this.defaults[key] = value; });
        if (this.config.global) {
            Object.keys(this.config.global).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.set(key, _this.config.global[key]);
            }));
        }
    }
    ConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.ɵɵinject("config")); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());
export { ConfigurationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.defaults;
    /** @type {?} */
    ConfigurationService.prototype.get;
    /** @type {?} */
    ConfigurationService.prototype.set;
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVuRDtJQU1FLDhCQUFzQyxNQUFXO1FBQWpELGlCQU1DO1FBTnFDLFdBQU0sR0FBTixNQUFNLENBQUs7UUFGekMsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQVVwQixRQUFHOzs7O1FBQUcsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUFDO1FBQ2xDLFFBQUc7Ozs7O1FBQUcsVUFBQyxHQUFHLEVBQUUsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQTFCLENBQTBCLEVBQUM7UUFSdEQsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsR0FBRztnQkFDekMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBWkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFJYyxNQUFNLFNBQUMsUUFBUTs7OytCQVI5QjtDQWtCQyxBQWhCRCxJQWdCQztTQWJZLG9CQUFvQjs7Ozs7O0lBQy9CLHdDQUEyQjs7SUFVM0IsbUNBQXlDOztJQUN6QyxtQ0FBd0Q7Ozs7O0lBVDVDLHNDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgZGVmYXVsdHM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBhbnkpe1xuICAgIGlmKHRoaXMuY29uZmlnLmdsb2JhbCl7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZy5nbG9iYWwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNvbmZpZy5nbG9iYWxba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0ID0gKGtleSkgPT4gdGhpcy5kZWZhdWx0c1trZXldO1xuICBwdWJsaWMgc2V0ID0gKGtleSwgdmFsdWUpID0+IHRoaXMuZGVmYXVsdHNba2V5XSA9IHZhbHVlO1xufSJdfQ==