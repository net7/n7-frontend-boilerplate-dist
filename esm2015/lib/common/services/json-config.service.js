/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/json-config.service.ts
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
     * @return {?}
     */
    load(path) {
        return this.http.get(path).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => of({}))), tap((/**
         * @param {?} response
         * @return {?}
         */
        response => this._handleResponse(response)))).toPromise();
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    _handleResponse(response) {
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
                let styles = [];
                Object.keys(response['config-keys']).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    /** @type {?} */
                    const configKey = response['config-keys'][key] || {};
                    if (configKey.color && configKey.color.hex) {
                        // add css class
                        styles.push(`--color-${key}: ${configKey.color.hex};`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvanNvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUsxQixNQUFNLE9BQU8saUJBQWlCOzs7OztJQUM1QixZQUNVLElBQWdCLEVBQ2hCLE1BQTRCO1FBRDVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7SUFDcEMsQ0FBQzs7Ozs7SUFFSCxJQUFJLENBQUMsSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM3QixVQUFVOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUM3QixHQUFHOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQ2hELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLFFBQVE7UUFDOUIsSUFBRyxRQUFRLEVBQUM7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBRTFFLHFCQUFxQjtZQUNyQixJQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBQzs7c0JBQ25CLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7c0JBQzVDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzs7b0JBRTVDLE1BQU0sR0FBRyxFQUFFO2dCQUVmLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTs7MEJBQzNDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtvQkFFcEQsSUFBRyxTQUFTLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDO3dCQUN4QyxnQkFBZ0I7d0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3FCQUN4RDtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFFSCxJQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUM7b0JBQ2YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuQzthQUVGO1NBQ0Y7SUFDSCxDQUFDOzs7WUE3Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsVUFBVTtZQUVWLG9CQUFvQjs7Ozs7Ozs7SUFRekIsaUNBQXdCOzs7OztJQUN4QixtQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBKc29uQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICl7fVxuXG4gIGxvYWQocGF0aCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocGF0aCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiBvZih7fSkpLFxuICAgICAgdGFwKHJlc3BvbnNlID0+IHRoaXMuX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICApLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUmVzcG9uc2UocmVzcG9uc2Upe1xuICAgIGlmKHJlc3BvbnNlKXtcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKGtleSA9PiB0aGlzLmNvbmZpZy5zZXQoa2V5LCByZXNwb25zZVtrZXldKSk7XG5cbiAgICAgIC8vIGNvbmZpZyBrZXlzIGNvbG9yc1xuICAgICAgaWYocmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ10pe1xuICAgICAgICBjb25zdCBoZWFkVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLFxuICAgICAgICAgIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgICAgbGV0IHN0eWxlcyA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlWydjb25maWcta2V5cyddKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgY29uc3QgY29uZmlnS2V5ID0gcmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ11ba2V5XSB8fCB7fTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZihjb25maWdLZXkuY29sb3IgJiYgY29uZmlnS2V5LmNvbG9yLmhleCl7XG4gICAgICAgICAgICAvLyBhZGQgY3NzIGNsYXNzXG4gICAgICAgICAgICBzdHlsZXMucHVzaChgLS1jb2xvci0ke2tleX06ICR7Y29uZmlnS2V5LmNvbG9yLmhleH07YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZihzdHlsZXMubGVuZ3RoKXtcbiAgICAgICAgICBzdHlsZXMudW5zaGlmdCgnOnJvb3QgeycpO1xuICAgICAgICAgIHN0eWxlcy5wdXNoKCd9Jyk7XG4gICAgICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlcy5qb2luKCdcXG4nKSkpO1xuICAgICAgICAgIGhlYWRUYWcuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG59Il19