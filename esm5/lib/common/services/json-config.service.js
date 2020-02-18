/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { ConfigurationService } from './configuration.service';
import { of } from 'rxjs';
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
         * @param {?} error
         * @return {?}
         */
        function (error) { return of({}); })), tap((/**
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
                    providedIn: 'root'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvanNvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRTFCO0lBSUUsMkJBQ1UsSUFBZ0IsRUFDaEIsTUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNwQyxDQUFDOzs7Ozs7SUFFSCxnQ0FBSTs7Ozs7SUFBSixVQUFLLElBQUksRUFBRSxZQUFhO1FBQXhCLGlCQUtDO1FBSkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzdCLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBTixDQUFNLEVBQUMsRUFDN0IsR0FBRzs7OztRQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLEVBQTVDLENBQTRDLEVBQUMsQ0FDOUQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRU8sMkNBQWU7Ozs7OztJQUF2QixVQUF3QixRQUFRLEVBQUUsWUFBWTtRQUE5QyxpQkFvQ0M7UUFuQ0Msc0JBQXNCO1FBQ3RCLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUF2QyxDQUF1QyxFQUFDLENBQUM7U0FDbkY7UUFFRCx5QkFBeUI7UUFDekIsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsRUFBQyxDQUFDO1lBRTFFLHFCQUFxQjtZQUNyQixJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTs7b0JBQ3JCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7b0JBQzVDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzs7b0JBRTFDLFFBQU0sR0FBRyxFQUFFO2dCQUVqQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxHQUFHOzt3QkFDeEMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFOzt3QkFDOUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7b0JBRXpDLElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTt3QkFDMUMsZ0JBQWdCO3dCQUNoQixRQUFNLENBQUMsSUFBSSxDQUFDLGFBQVcsU0FBUyxVQUFLLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFHLENBQUMsQ0FBQztxQkFDOUQ7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Z0JBRUgsSUFBSSxRQUFNLENBQUMsTUFBTSxFQUFFO29CQUNqQixRQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQixRQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JFLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ25DO2FBRUY7U0FDRjtJQUNILENBQUM7O2dCQXBERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFVBQVU7Z0JBRVYsb0JBQW9COzs7NEJBSDdCO0NBMkRDLEFBckRELElBcURDO1NBbERZLGlCQUFpQjs7Ozs7O0lBRTFCLGlDQUF3Qjs7Ozs7SUFDeEIsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkNvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApe31cblxuICBsb2FkKHBhdGgsIHN0YXRpY0NvbmZpZz8pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHBhdGgpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gb2Yoe30pKSxcbiAgICAgIHRhcChyZXNwb25zZSA9PiB0aGlzLl9oYW5kbGVSZXNwb25zZShyZXNwb25zZSwgc3RhdGljQ29uZmlnKSlcbiAgICApLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UsIHN0YXRpY0NvbmZpZyl7XG4gICAgLy8gc2V0IGNvbmZpZyBkZWZhdWx0c1xuICAgIGlmIChzdGF0aWNDb25maWcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRpY0NvbmZpZykuZm9yRWFjaChrZXkgPT4gdGhpcy5jb25maWcuc2V0KGtleSwgc3RhdGljQ29uZmlnW2tleV0pKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgbG9hZGVkIGpzb24gY29uZmlnXG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZSkuZm9yRWFjaChrZXkgPT4gdGhpcy5jb25maWcuc2V0KGtleSwgcmVzcG9uc2Vba2V5XSkpO1xuXG4gICAgICAvLyBjb25maWcga2V5cyBjb2xvcnNcbiAgICAgIGlmIChyZXNwb25zZVsnY29uZmlnLWtleXMnXSkge1xuICAgICAgICBjb25zdCBoZWFkVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLFxuICAgICAgICAgIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ10pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBjb25zdCBjb25maWdLZXkgPSByZXNwb25zZVsnY29uZmlnLWtleXMnXVtrZXldIHx8IHt9O1xuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNvbmZpZ0tleVsnY2xhc3MtbmFtZSddO1xuXG4gICAgICAgICAgaWYgKGNvbmZpZ0tleS5jb2xvciAmJiBjb25maWdLZXkuY29sb3IuaGV4KSB7XG4gICAgICAgICAgICAvLyBhZGQgY3NzIGNsYXNzXG4gICAgICAgICAgICBzdHlsZXMucHVzaChgLS1jb2xvci0ke2NsYXNzTmFtZX06ICR7Y29uZmlnS2V5LmNvbG9yLmhleH07YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3R5bGVzLmxlbmd0aCkge1xuICAgICAgICAgIHN0eWxlcy51bnNoaWZ0KCc6cm9vdCB7Jyk7XG4gICAgICAgICAgc3R5bGVzLnB1c2goJ30nKTtcbiAgICAgICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzLmpvaW4oJ1xcbicpKSk7XG4gICAgICAgICAgaGVhZFRhZy5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=