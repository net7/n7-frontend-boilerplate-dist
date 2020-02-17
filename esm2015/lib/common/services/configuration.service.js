/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ConfigurationService {
    constructor() {
        this.defaults = {};
        this.get = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => this.defaults[key]);
        this.set = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        (key, value) => this.defaults[key] = value);
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(); }, token: ConfigurationService, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUtuRCxNQUFNLE9BQU8sb0JBQW9CO0lBSGpDO1FBSVUsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVwQixRQUFHOzs7O1FBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFDbEMsUUFBRzs7Ozs7UUFBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFDO0tBQ3pEOzs7WUFSQSxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7O0lBRUMsd0NBQTJCOztJQUUzQixtQ0FBeUM7O0lBQ3pDLG1DQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgZGVmYXVsdHM6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyBnZXQgPSAoa2V5KSA9PiB0aGlzLmRlZmF1bHRzW2tleV07XG4gIHB1YmxpYyBzZXQgPSAoa2V5LCB2YWx1ZSkgPT4gdGhpcy5kZWZhdWx0c1trZXldID0gdmFsdWU7XG59Il19