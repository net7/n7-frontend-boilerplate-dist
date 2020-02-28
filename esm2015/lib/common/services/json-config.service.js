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
export class JsonConfigService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} path
     * @param {?=} staticConfig
     * @return {?}
     */
    load(path, staticConfig) {
        return this.http.get(path).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => of({}))), tap((/**
         * @param {?} response
         * @return {?}
         */
        response => this._handleResponse(response, staticConfig)))).toPromise();
    }
    /**
     * @private
     * @param {?} response
     * @param {?} staticConfig
     * @return {?}
     */
    _handleResponse(response, staticConfig) {
        // set config defaults
        if (staticConfig) {
            Object.keys(staticConfig).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => this.config.set(key, staticConfig[key])));
        }
        // set loaded json config
        if (response) {
            Object.keys(response).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => this.config.set(key, response[key])));
            // config keys colors
            if (response['config-keys']) {
                /** @type {?} */
                const headTag = document.querySelector('head');
                /** @type {?} */
                const styleElement = document.createElement('style');
                /** @type {?} */
                const styles = [];
                Object.keys(response['config-keys']).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    /** @type {?} */
                    const configKey = response['config-keys'][key] || {};
                    /** @type {?} */
                    const className = configKey['class-name'];
                    if (configKey.color && configKey.color.hex) {
                        // add css class
                        styles.push(`--color-${className}: ${configKey.color.hex};`);
                    }
                }));
                if (styles.length) {
                    styles.unshift(':root {');
                    styles.push('}');
                    styleElement.appendChild(document.createTextNode(styles.join('\n')));
                    headTag.appendChild(styleElement);
                }
            }
        }
    }
}
JsonConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
JsonConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
/** @nocollapse */ JsonConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonConfigService_Factory() { return new JsonConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: JsonConfigService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvanNvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBSzFCLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzVCLFlBQ1UsSUFBZ0IsRUFDaEIsTUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNwQyxDQUFDOzs7Ozs7SUFFSCxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzdCLFVBQVU7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQzdCLEdBQUc7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFDLENBQzlELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVPLGVBQWUsQ0FBQyxRQUFRLEVBQUUsWUFBWTtRQUM1QyxzQkFBc0I7UUFDdEIsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUNuRjtRQUVELHlCQUF5QjtRQUN6QixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFFMUUscUJBQXFCO1lBQ3JCLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFOztzQkFDckIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOztzQkFDNUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDOztzQkFFMUMsTUFBTSxHQUFHLEVBQUU7Z0JBRWpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTs7MEJBQzNDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTs7MEJBQzlDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO29CQUV6QyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7d0JBQzFDLGdCQUFnQjt3QkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7cUJBQzlEO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUVILElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuQzthQUVGO1NBQ0Y7SUFDSCxDQUFDOzs7WUFwREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsVUFBVTtZQUVWLG9CQUFvQjs7Ozs7Ozs7SUFRekIsaUNBQXdCOzs7OztJQUN4QixtQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBKc29uQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICl7fVxuXG4gIGxvYWQocGF0aCwgc3RhdGljQ29uZmlnPyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocGF0aCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiBvZih7fSkpLFxuICAgICAgdGFwKHJlc3BvbnNlID0+IHRoaXMuX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlLCBzdGF0aWNDb25maWcpKVxuICAgICkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSwgc3RhdGljQ29uZmlnKXtcbiAgICAvLyBzZXQgY29uZmlnIGRlZmF1bHRzXG4gICAgaWYgKHN0YXRpY0NvbmZpZykge1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGljQ29uZmlnKS5mb3JFYWNoKGtleSA9PiB0aGlzLmNvbmZpZy5zZXQoa2V5LCBzdGF0aWNDb25maWdba2V5XSkpO1xuICAgIH1cblxuICAgIC8vIHNldCBsb2FkZWQganNvbiBjb25maWdcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKGtleSA9PiB0aGlzLmNvbmZpZy5zZXQoa2V5LCByZXNwb25zZVtrZXldKSk7XG5cbiAgICAgIC8vIGNvbmZpZyBrZXlzIGNvbG9yc1xuICAgICAgaWYgKHJlc3BvbnNlWydjb25maWcta2V5cyddKSB7XG4gICAgICAgIGNvbnN0IGhlYWRUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyksXG4gICAgICAgICAgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgICBjb25zdCBzdHlsZXMgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZVsnY29uZmlnLWtleXMnXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZ0tleSA9IHJlc3BvbnNlWydjb25maWcta2V5cyddW2tleV0gfHwge307XG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY29uZmlnS2V5WydjbGFzcy1uYW1lJ107XG5cbiAgICAgICAgICBpZiAoY29uZmlnS2V5LmNvbG9yICYmIGNvbmZpZ0tleS5jb2xvci5oZXgpIHtcbiAgICAgICAgICAgIC8vIGFkZCBjc3MgY2xhc3NcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKGAtLWNvbG9yLSR7Y2xhc3NOYW1lfTogJHtjb25maWdLZXkuY29sb3IuaGV4fTtgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzdHlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgc3R5bGVzLnVuc2hpZnQoJzpyb290IHsnKTtcbiAgICAgICAgICBzdHlsZXMucHVzaCgnfScpO1xuICAgICAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZXMuam9pbignXFxuJykpKTtcbiAgICAgICAgICBoZWFkVGFnLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==