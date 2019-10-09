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
                    if (configKey.color && configKey.color.hex) {
                        // add css class
                        styles_1.push("--color-" + key + ": " + configKey.color.hex + ";");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvanNvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRTFCO0lBSUUsMkJBQ1UsSUFBZ0IsRUFDaEIsTUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNwQyxDQUFDOzs7OztJQUVILGdDQUFJOzs7O0lBQUosVUFBSyxJQUFJO1FBQVQsaUJBS0M7UUFKQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDN0IsVUFBVTs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFOLENBQU0sRUFBQyxFQUM3QixHQUFHOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQ2hELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sMkNBQWU7Ozs7O0lBQXZCLFVBQXdCLFFBQVE7UUFBaEMsaUJBNkJDO1FBNUJDLElBQUcsUUFBUSxFQUFDO1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQW5DLENBQW1DLEVBQUMsQ0FBQztZQUUxRSxxQkFBcUI7WUFDckIsSUFBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUM7O29CQUNuQixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O29CQUM1QyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O29CQUU1QyxRQUFNLEdBQUcsRUFBRTtnQkFFZixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxHQUFHOzt3QkFDeEMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUVwRCxJQUFHLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUM7d0JBQ3hDLGdCQUFnQjt3QkFDaEIsUUFBTSxDQUFDLElBQUksQ0FBQyxhQUFXLEdBQUcsVUFBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBRyxDQUFDLENBQUM7cUJBQ3hEO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUVILElBQUcsUUFBTSxDQUFDLE1BQU0sRUFBQztvQkFDZixRQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQixRQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JFLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ25DO2FBRUY7U0FDRjtJQUNILENBQUM7O2dCQTdDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFVBQVU7Z0JBRVYsb0JBQW9COzs7NEJBSDdCO0NBb0RDLEFBOUNELElBOENDO1NBM0NZLGlCQUFpQjs7Ozs7O0lBRTFCLGlDQUF3Qjs7Ozs7SUFDeEIsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkNvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApe31cblxuICBsb2FkKHBhdGgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHBhdGgpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gb2Yoe30pKSxcbiAgICAgIHRhcChyZXNwb25zZSA9PiB0aGlzLl9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkpXG4gICAgKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKXtcbiAgICBpZihyZXNwb25zZSl7XG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZSkuZm9yRWFjaChrZXkgPT4gdGhpcy5jb25maWcuc2V0KGtleSwgcmVzcG9uc2Vba2V5XSkpO1xuXG4gICAgICAvLyBjb25maWcga2V5cyBjb2xvcnNcbiAgICAgIGlmKHJlc3BvbnNlWydjb25maWcta2V5cyddKXtcbiAgICAgICAgY29uc3QgaGVhZFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKSxcbiAgICAgICAgICBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgICAgIGxldCBzdHlsZXMgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZVsnY29uZmlnLWtleXMnXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZ0tleSA9IHJlc3BvbnNlWydjb25maWcta2V5cyddW2tleV0gfHwge307XG4gICAgICAgICAgXG4gICAgICAgICAgaWYoY29uZmlnS2V5LmNvbG9yICYmIGNvbmZpZ0tleS5jb2xvci5oZXgpe1xuICAgICAgICAgICAgLy8gYWRkIGNzcyBjbGFzc1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goYC0tY29sb3ItJHtrZXl9OiAke2NvbmZpZ0tleS5jb2xvci5oZXh9O2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoc3R5bGVzLmxlbmd0aCl7XG4gICAgICAgICAgc3R5bGVzLnVuc2hpZnQoJzpyb290IHsnKTtcbiAgICAgICAgICBzdHlsZXMucHVzaCgnfScpO1xuICAgICAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZXMuam9pbignXFxuJykpKTtcbiAgICAgICAgICBoZWFkVGFnLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==