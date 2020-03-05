/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/json-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var JsonConfigService = /** @class */ (function () {
    function JsonConfigService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} path
     * @param {?=} staticConfig
     * @return {?}
     */
    JsonConfigService.prototype.load = /**
     * @param {?} path
     * @param {?=} staticConfig
     * @return {?}
     */
    function (path, staticConfig) {
        var _this = this;
        return this.http.get(path).pipe(catchError((/**
         * @return {?}
         */
        function () { return of({}); })), tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return _this._handleResponse(response, staticConfig); }))).toPromise();
    };
    /**
     * @private
     * @param {?} response
     * @param {?} staticConfig
     * @return {?}
     */
    JsonConfigService.prototype._handleResponse = /**
     * @private
     * @param {?} response
     * @param {?} staticConfig
     * @return {?}
     */
    function (response, staticConfig) {
        var _this = this;
        // set config defaults
        if (staticConfig) {
            Object.keys(staticConfig).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.config.set(key, staticConfig[key]); }));
        }
        // set loaded json config
        if (response) {
            Object.keys(response).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.config.set(key, response[key]); }));
            // config keys colors
            if (response['config-keys']) {
                /** @type {?} */
                var headTag = document.querySelector('head');
                /** @type {?} */
                var styleElement = document.createElement('style');
                /** @type {?} */
                var styles_1 = [];
                Object.keys(response['config-keys']).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var configKey = response['config-keys'][key] || {};
                    /** @type {?} */
                    var className = configKey['class-name'];
                    if (configKey.color && configKey.color.hex) {
                        // add css class
                        styles_1.push("--color-" + className + ": " + configKey.color.hex + ";");
                    }
                }));
                if (styles_1.length) {
                    styles_1.unshift(':root {');
                    styles_1.push('}');
                    styleElement.appendChild(document.createTextNode(styles_1.join('\n')));
                    headTag.appendChild(styleElement);
                }
            }
        }
    };
    JsonConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    JsonConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    /** @nocollapse */ JsonConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonConfigService_Factory() { return new JsonConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: JsonConfigService, providedIn: "root" });
    return JsonConfigService;
}());
export { JsonConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    JsonConfigService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    JsonConfigService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvanNvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUUvRDtJQUlFLDJCQUNVLElBQWdCLEVBQ2hCLE1BQTRCO1FBRDVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7SUFDbkMsQ0FBQzs7Ozs7O0lBRUosZ0NBQUk7Ozs7O0lBQUosVUFBSyxJQUFJLEVBQUUsWUFBYTtRQUF4QixpQkFLQztRQUpDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM3QixVQUFVOzs7UUFBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFOLENBQU0sRUFBQyxFQUN4QixHQUFHOzs7O1FBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsRUFBNUMsQ0FBNEMsRUFBQyxDQUNoRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFFTywyQ0FBZTs7Ozs7O0lBQXZCLFVBQXdCLFFBQVEsRUFBRSxZQUFZO1FBQTlDLGlCQW1DQztRQWxDQyxzQkFBc0I7UUFDdEIsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXZDLENBQXVDLEVBQUMsQ0FBQztTQUNyRjtRQUVELHlCQUF5QjtRQUN6QixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLENBQUM7WUFFNUUscUJBQXFCO1lBQ3JCLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFOztvQkFDckIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOztvQkFDeEMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDOztvQkFFOUMsUUFBTSxHQUFHLEVBQUU7Z0JBRWpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLEdBQUc7O3dCQUN6QyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7O3dCQUM5QyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztvQkFFekMsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO3dCQUMxQyxnQkFBZ0I7d0JBQ2hCLFFBQU0sQ0FBQyxJQUFJLENBQUMsYUFBVyxTQUFTLFVBQUssU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQUcsQ0FBQyxDQUFDO3FCQUM5RDtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFFSCxJQUFJLFFBQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLFFBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFCLFFBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBbkRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsVUFBVTtnQkFHVixvQkFBb0I7Ozs0QkFKN0I7Q0EwREMsQUFwREQsSUFvREM7U0FqRFksaUJBQWlCOzs7Ozs7SUFFMUIsaUNBQXdCOzs7OztJQUN4QixtQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSnNvbkNvbmZpZ1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbG9hZChwYXRoLCBzdGF0aWNDb25maWc/KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHBhdGgpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2Yoe30pKSxcclxuICAgICAgdGFwKChyZXNwb25zZSkgPT4gdGhpcy5faGFuZGxlUmVzcG9uc2UocmVzcG9uc2UsIHN0YXRpY0NvbmZpZykpLFxyXG4gICAgKS50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlLCBzdGF0aWNDb25maWcpIHtcclxuICAgIC8vIHNldCBjb25maWcgZGVmYXVsdHNcclxuICAgIGlmIChzdGF0aWNDb25maWcpIHtcclxuICAgICAgT2JqZWN0LmtleXMoc3RhdGljQ29uZmlnKS5mb3JFYWNoKChrZXkpID0+IHRoaXMuY29uZmlnLnNldChrZXksIHN0YXRpY0NvbmZpZ1trZXldKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IGxvYWRlZCBqc29uIGNvbmZpZ1xyXG4gICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKChrZXkpID0+IHRoaXMuY29uZmlnLnNldChrZXksIHJlc3BvbnNlW2tleV0pKTtcclxuXHJcbiAgICAgIC8vIGNvbmZpZyBrZXlzIGNvbG9yc1xyXG4gICAgICBpZiAocmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ10pIHtcclxuICAgICAgICBjb25zdCBoZWFkVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xyXG4gICAgICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IFtdO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZVsnY29uZmlnLWtleXMnXSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjb25maWdLZXkgPSByZXNwb25zZVsnY29uZmlnLWtleXMnXVtrZXldIHx8IHt9O1xyXG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY29uZmlnS2V5WydjbGFzcy1uYW1lJ107XHJcblxyXG4gICAgICAgICAgaWYgKGNvbmZpZ0tleS5jb2xvciAmJiBjb25maWdLZXkuY29sb3IuaGV4KSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBjc3MgY2xhc3NcclxuICAgICAgICAgICAgc3R5bGVzLnB1c2goYC0tY29sb3ItJHtjbGFzc05hbWV9OiAke2NvbmZpZ0tleS5jb2xvci5oZXh9O2ApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc3R5bGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgc3R5bGVzLnVuc2hpZnQoJzpyb290IHsnKTtcclxuICAgICAgICAgIHN0eWxlcy5wdXNoKCd9Jyk7XHJcbiAgICAgICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzLmpvaW4oJ1xcbicpKSk7XHJcbiAgICAgICAgICBoZWFkVGFnLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==