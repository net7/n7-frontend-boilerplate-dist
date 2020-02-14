/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export class ConfigurationService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
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
        if (this.config.global) {
            Object.keys(this.config.global).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                this.set(key, this.config.global[key]);
            }));
        }
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.ɵɵinject("config")); }, token: ConfigurationService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUtuRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQXNDLE1BQVc7UUFBWCxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBRnpDLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFVcEIsUUFBRzs7OztRQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDO1FBQ2xDLFFBQUc7Ozs7O1FBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBQztRQVJ0RCxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FJYyxNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7SUFGNUIsd0NBQTJCOztJQVUzQixtQ0FBeUM7O0lBQ3pDLG1DQUF3RDs7Ozs7SUFUNUMsc0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZhdWx0czogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IGFueSl7XG4gICAgaWYodGhpcy5jb25maWcuZ2xvYmFsKXtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnLmdsb2JhbCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY29uZmlnLmdsb2JhbFtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgPSAoa2V5KSA9PiB0aGlzLmRlZmF1bHRzW2tleV07XG4gIHB1YmxpYyBzZXQgPSAoa2V5LCB2YWx1ZSkgPT4gdGhpcy5kZWZhdWx0c1trZXldID0gdmFsdWU7XG59Il19