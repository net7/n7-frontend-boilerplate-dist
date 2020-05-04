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
         * @return {?}
         */
        () => of({}))), tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => this._handleResponse(response, staticConfig)))).toPromise();
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
            (key) => this.config.set(key, staticConfig[key])));
        }
        // set loaded json config
        if (response) {
            Object.keys(response).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => this.config.set(key, response[key])));
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
                (key) => {
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
                providedIn: 'root',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvanNvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUsvRCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUM1QixZQUNVLElBQWdCLEVBQ2hCLE1BQTRCO1FBRDVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7SUFDbkMsQ0FBQzs7Ozs7O0lBRUosSUFBSSxDQUFDLElBQUksRUFBRSxZQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM3QixVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFDeEIsR0FBRzs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsRUFBQyxDQUNoRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFFTyxlQUFlLENBQUMsUUFBUSxFQUFFLFlBQVk7UUFDNUMsc0JBQXNCO1FBQ3RCLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUNyRjtRQUVELHlCQUF5QjtRQUN6QixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUU1RSxxQkFBcUI7WUFDckIsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7O3NCQUNyQixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O3NCQUN4QyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O3NCQUU5QyxNQUFNLEdBQUcsRUFBRTtnQkFFakIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7OzBCQUM3QyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7OzBCQUM5QyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztvQkFFekMsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO3dCQUMxQyxnQkFBZ0I7d0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3FCQUM5RDtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFFSCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7O1lBbkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFVBQVU7WUFHVixvQkFBb0I7Ozs7Ozs7O0lBT3pCLGlDQUF3Qjs7Ozs7SUFDeEIsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25Db25maWdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgKSB7fVxuXG4gIGxvYWQocGF0aCwgc3RhdGljQ29uZmlnPyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocGF0aCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2Yoe30pKSxcbiAgICAgIHRhcCgocmVzcG9uc2UpID0+IHRoaXMuX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlLCBzdGF0aWNDb25maWcpKSxcbiAgICApLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UsIHN0YXRpY0NvbmZpZykge1xuICAgIC8vIHNldCBjb25maWcgZGVmYXVsdHNcbiAgICBpZiAoc3RhdGljQ29uZmlnKSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0aWNDb25maWcpLmZvckVhY2goKGtleSkgPT4gdGhpcy5jb25maWcuc2V0KGtleSwgc3RhdGljQ29uZmlnW2tleV0pKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgbG9hZGVkIGpzb24gY29uZmlnXG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZSkuZm9yRWFjaCgoa2V5KSA9PiB0aGlzLmNvbmZpZy5zZXQoa2V5LCByZXNwb25zZVtrZXldKSk7XG5cbiAgICAgIC8vIGNvbmZpZyBrZXlzIGNvbG9yc1xuICAgICAgaWYgKHJlc3BvbnNlWydjb25maWcta2V5cyddKSB7XG4gICAgICAgIGNvbnN0IGhlYWRUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ10pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZ0tleSA9IHJlc3BvbnNlWydjb25maWcta2V5cyddW2tleV0gfHwge307XG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY29uZmlnS2V5WydjbGFzcy1uYW1lJ107XG5cbiAgICAgICAgICBpZiAoY29uZmlnS2V5LmNvbG9yICYmIGNvbmZpZ0tleS5jb2xvci5oZXgpIHtcbiAgICAgICAgICAgIC8vIGFkZCBjc3MgY2xhc3NcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKGAtLWNvbG9yLSR7Y2xhc3NOYW1lfTogJHtjb25maWdLZXkuY29sb3IuaGV4fTtgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzdHlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgc3R5bGVzLnVuc2hpZnQoJzpyb290IHsnKTtcbiAgICAgICAgICBzdHlsZXMucHVzaCgnfScpO1xuICAgICAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZXMuam9pbignXFxuJykpKTtcbiAgICAgICAgICBoZWFkVGFnLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==