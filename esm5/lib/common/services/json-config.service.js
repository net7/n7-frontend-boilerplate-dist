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
     * @return {?}
     */
    JsonConfigService.prototype.load = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        return this.http.get(path).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of({}); })), tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return _this._handleResponse(response); }))).toPromise();
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    JsonConfigService.prototype._handleResponse = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvanNvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRTFCO0lBSUUsMkJBQ1UsSUFBZ0IsRUFDaEIsTUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNwQyxDQUFDOzs7OztJQUVILGdDQUFJOzs7O0lBQUosVUFBSyxJQUFJO1FBQVQsaUJBS0M7UUFKQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDN0IsVUFBVTs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFOLENBQU0sRUFBQyxFQUM3QixHQUFHOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQ2hELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sMkNBQWU7Ozs7O0lBQXZCLFVBQXdCLFFBQVE7UUFBaEMsaUJBOEJDO1FBN0JDLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQW5DLENBQW1DLEVBQUMsQ0FBQztZQUUxRSxxQkFBcUI7WUFDckIsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7O29CQUNyQixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O29CQUM1QyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O29CQUUxQyxRQUFNLEdBQUcsRUFBRTtnQkFFakIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUEsR0FBRzs7d0JBQ3hDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTs7d0JBQzlDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO29CQUV6QyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7d0JBQzFDLGdCQUFnQjt3QkFDaEIsUUFBTSxDQUFDLElBQUksQ0FBQyxhQUFXLFNBQVMsVUFBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBRyxDQUFDLENBQUM7cUJBQzlEO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUVILElBQUksUUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDakIsUUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUIsUUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuQzthQUVGO1NBQ0Y7SUFDSCxDQUFDOztnQkE5Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxVQUFVO2dCQUVWLG9CQUFvQjs7OzRCQUg3QjtDQXFEQyxBQS9DRCxJQStDQztTQTVDWSxpQkFBaUI7Ozs7OztJQUUxQixpQ0FBd0I7Ozs7O0lBQ3hCLG1DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEpzb25Db25maWdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgKXt9XG5cbiAgbG9hZChwYXRoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChwYXRoKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IG9mKHt9KSksXG4gICAgICB0YXAocmVzcG9uc2UgPT4gdGhpcy5faGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpKVxuICAgICkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSl7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZSkuZm9yRWFjaChrZXkgPT4gdGhpcy5jb25maWcuc2V0KGtleSwgcmVzcG9uc2Vba2V5XSkpO1xuXG4gICAgICAvLyBjb25maWcga2V5cyBjb2xvcnNcbiAgICAgIGlmIChyZXNwb25zZVsnY29uZmlnLWtleXMnXSkge1xuICAgICAgICBjb25zdCBoZWFkVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLFxuICAgICAgICAgIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ10pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBjb25zdCBjb25maWdLZXkgPSByZXNwb25zZVsnY29uZmlnLWtleXMnXVtrZXldIHx8IHt9O1xuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNvbmZpZ0tleVsnY2xhc3MtbmFtZSddO1xuXG4gICAgICAgICAgaWYgKGNvbmZpZ0tleS5jb2xvciAmJiBjb25maWdLZXkuY29sb3IuaGV4KSB7XG4gICAgICAgICAgICAvLyBhZGQgY3NzIGNsYXNzXG4gICAgICAgICAgICBzdHlsZXMucHVzaChgLS1jb2xvci0ke2NsYXNzTmFtZX06ICR7Y29uZmlnS2V5LmNvbG9yLmhleH07YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3R5bGVzLmxlbmd0aCkge1xuICAgICAgICAgIHN0eWxlcy51bnNoaWZ0KCc6cm9vdCB7Jyk7XG4gICAgICAgICAgc3R5bGVzLnB1c2goJ30nKTtcbiAgICAgICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzLmpvaW4oJ1xcbicpKSk7XG4gICAgICAgICAgaGVhZFRhZy5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=