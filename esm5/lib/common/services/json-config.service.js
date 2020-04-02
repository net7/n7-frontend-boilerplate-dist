/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvanNvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRS9EO0lBSUUsMkJBQ1UsSUFBZ0IsRUFDaEIsTUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNuQyxDQUFDOzs7Ozs7SUFFSixnQ0FBSTs7Ozs7SUFBSixVQUFLLElBQUksRUFBRSxZQUFhO1FBQXhCLGlCQUtDO1FBSkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzdCLFVBQVU7OztRQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQU4sQ0FBTSxFQUFDLEVBQ3hCLEdBQUc7Ozs7UUFBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUE1QyxDQUE0QyxFQUFDLENBQ2hFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVPLDJDQUFlOzs7Ozs7SUFBdkIsVUFBd0IsUUFBUSxFQUFFLFlBQVk7UUFBOUMsaUJBbUNDO1FBbENDLHNCQUFzQjtRQUN0QixJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsRUFBQyxDQUFDO1NBQ3JGO1FBRUQseUJBQXlCO1FBQ3pCLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQW5DLENBQW1DLEVBQUMsQ0FBQztZQUU1RSxxQkFBcUI7WUFDckIsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7O29CQUNyQixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O29CQUN4QyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O29CQUU5QyxRQUFNLEdBQUcsRUFBRTtnQkFFakIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsR0FBRzs7d0JBQ3pDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTs7d0JBQzlDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO29CQUV6QyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7d0JBQzFDLGdCQUFnQjt3QkFDaEIsUUFBTSxDQUFDLElBQUksQ0FBQyxhQUFXLFNBQVMsVUFBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBRyxDQUFDLENBQUM7cUJBQzlEO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUVILElBQUksUUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDakIsUUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUIsUUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuQzthQUNGO1NBQ0Y7SUFDSCxDQUFDOztnQkFuREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxVQUFVO2dCQUdWLG9CQUFvQjs7OzRCQUo3QjtDQTBEQyxBQXBERCxJQW9EQztTQWpEWSxpQkFBaUI7Ozs7OztJQUUxQixpQ0FBd0I7Ozs7O0lBQ3hCLG1DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICkge31cblxuICBsb2FkKHBhdGgsIHN0YXRpY0NvbmZpZz8pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHBhdGgpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKCgpID0+IG9mKHt9KSksXG4gICAgICB0YXAoKHJlc3BvbnNlKSA9PiB0aGlzLl9oYW5kbGVSZXNwb25zZShyZXNwb25zZSwgc3RhdGljQ29uZmlnKSksXG4gICAgKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlLCBzdGF0aWNDb25maWcpIHtcbiAgICAvLyBzZXQgY29uZmlnIGRlZmF1bHRzXG4gICAgaWYgKHN0YXRpY0NvbmZpZykge1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGljQ29uZmlnKS5mb3JFYWNoKChrZXkpID0+IHRoaXMuY29uZmlnLnNldChrZXksIHN0YXRpY0NvbmZpZ1trZXldKSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IGxvYWRlZCBqc29uIGNvbmZpZ1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UpLmZvckVhY2goKGtleSkgPT4gdGhpcy5jb25maWcuc2V0KGtleSwgcmVzcG9uc2Vba2V5XSkpO1xuXG4gICAgICAvLyBjb25maWcga2V5cyBjb2xvcnNcbiAgICAgIGlmIChyZXNwb25zZVsnY29uZmlnLWtleXMnXSkge1xuICAgICAgICBjb25zdCBoZWFkVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlWydjb25maWcta2V5cyddKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBjb25maWdLZXkgPSByZXNwb25zZVsnY29uZmlnLWtleXMnXVtrZXldIHx8IHt9O1xuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNvbmZpZ0tleVsnY2xhc3MtbmFtZSddO1xuXG4gICAgICAgICAgaWYgKGNvbmZpZ0tleS5jb2xvciAmJiBjb25maWdLZXkuY29sb3IuaGV4KSB7XG4gICAgICAgICAgICAvLyBhZGQgY3NzIGNsYXNzXG4gICAgICAgICAgICBzdHlsZXMucHVzaChgLS1jb2xvci0ke2NsYXNzTmFtZX06ICR7Y29uZmlnS2V5LmNvbG9yLmhleH07YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3R5bGVzLmxlbmd0aCkge1xuICAgICAgICAgIHN0eWxlcy51bnNoaWZ0KCc6cm9vdCB7Jyk7XG4gICAgICAgICAgc3R5bGVzLnB1c2goJ30nKTtcbiAgICAgICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzLmpvaW4oJ1xcbicpKSk7XG4gICAgICAgICAgaGVhZFRhZy5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=