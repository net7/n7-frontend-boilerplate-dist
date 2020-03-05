/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication-providers/rest/rest.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestProviderConfig } from './config';
import { ConfigurationService } from '../../configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "../../configuration.service";
import * as i2 from "@angular/common/http";
export class RestProvider {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
        this.config = config;
        this.http = http;
        try {
            this.providerConfig = this.config.get('communication').providers.rest;
        }
        catch (err) {
            throw Error('No config found for rest provider!');
        }
    }
    /**
     * @param {?} requestId
     * @param {?=} options
     * @return {?}
     */
    request$(requestId, options = {}) {
        const { params, httpOptions, urlParams = '', } = options;
        let { method } = options;
        /** @type {?} */
        let point = RestProviderConfig[requestId];
        // default method
        if (!method) {
            method = this.providerConfig.defaultMethod || 'GET';
        }
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            point = this.providerConfig.config[requestId];
        }
        // config point control
        if (!point) {
            throw Error(`No config found for requestId "${requestId}"`);
        }
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, params, httpOptions);
        }
        if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point + urlParams, httpOptions);
        }
        throw Error(`Rest method ${method} not supported`);
    }
}
RestProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
RestProvider.ctorParameters = () => [
    { type: ConfigurationService },
    { type: HttpClient }
];
/** @nocollapse */ RestProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RestProvider_Factory() { return new RestProvider(i0.ɵɵinject(i1.ConfigurationService), i0.ɵɵinject(i2.HttpClient)); }, token: RestProvider, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestProvider.prototype.providerConfig;
    /**
     * @type {?}
     * @private
     */
    RestProvider.prototype.config;
    /**
     * @type {?}
     * @private
     */
    RestProvider.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC9yZXN0LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBT25FLE1BQU0sT0FBTyxZQUFZOzs7OztJQUd2QixZQUNVLE1BQTRCLEVBQzVCLElBQWdCO1FBRGhCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFeEIsSUFBSTtZQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUN2RTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxTQUFTLEVBQUUsVUFBZSxFQUFFO2NBQzdCLEVBQ0osTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEdBQUcsRUFBRSxHQUNwQyxHQUFHLE9BQU87WUFDUCxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU87O1lBQ3BCLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7UUFFekMsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDO1NBQUU7UUFFckUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN2RSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0M7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sS0FBSyxDQUFDLGtDQUFrQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FDekQsQ0FBQztTQUNIO1FBQUMsSUFBSSxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsU0FBUyxFQUFFLFdBQVcsQ0FDN0QsQ0FBQztTQUNIO1FBQ0QsTUFBTSxLQUFLLENBQUMsZUFBZSxNQUFNLGdCQUFnQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBN0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLG9CQUFvQjtZQUZwQixVQUFVOzs7Ozs7OztJQVVqQixzQ0FBNEI7Ozs7O0lBRzFCLDhCQUFvQzs7Ozs7SUFDcEMsNEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSZXN0UHJvdmlkZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN0UHJvdmlkZXIgaW1wbGVtZW50cyBDb21tdW5pY2F0aW9uUHJvdmlkZXIge1xyXG4gIHByaXZhdGUgcHJvdmlkZXJDb25maWc6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnByb3ZpZGVyQ29uZmlnID0gdGhpcy5jb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJykucHJvdmlkZXJzLnJlc3Q7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ05vIGNvbmZpZyBmb3VuZCBmb3IgcmVzdCBwcm92aWRlciEnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9uczogYW55ID0ge30pIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcGFyYW1zLCBodHRwT3B0aW9ucywgdXJsUGFyYW1zID0gJycsXHJcbiAgICB9ID0gb3B0aW9ucztcclxuICAgIGxldCB7IG1ldGhvZCB9ID0gb3B0aW9ucztcclxuICAgIGxldCBwb2ludCA9IFJlc3RQcm92aWRlckNvbmZpZ1tyZXF1ZXN0SWRdO1xyXG5cclxuICAgIC8vIGRlZmF1bHQgbWV0aG9kXHJcbiAgICBpZiAoIW1ldGhvZCkgeyBtZXRob2QgPSB0aGlzLnByb3ZpZGVyQ29uZmlnLmRlZmF1bHRNZXRob2QgfHwgJ0dFVCc7IH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm92aWRlckNvbmZpZy5jb25maWcgJiYgdGhpcy5wcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXSkge1xyXG4gICAgICBwb2ludCA9IHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uZmlnIHBvaW50IGNvbnRyb2xcclxuICAgIGlmICghcG9pbnQpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYE5vIGNvbmZpZyBmb3VuZCBmb3IgcmVxdWVzdElkIFwiJHtyZXF1ZXN0SWR9XCJgKTtcclxuICAgIH1cclxuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyB8fCBtZXRob2QgPT09ICdQVVQnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kLnRvTG93ZXJDYXNlKCldKFxyXG4gICAgICAgIHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCArIHBvaW50LCBwYXJhbXMsIGh0dHBPcHRpb25zLFxyXG4gICAgICApO1xyXG4gICAgfSBpZiAobWV0aG9kID09PSAnR0VUJyB8fCBtZXRob2QgPT09ICdERUxFVEUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kLnRvTG93ZXJDYXNlKCldKFxyXG4gICAgICAgIHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCArIHBvaW50ICsgdXJsUGFyYW1zLCBodHRwT3B0aW9ucyxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRocm93IEVycm9yKGBSZXN0IG1ldGhvZCAke21ldGhvZH0gbm90IHN1cHBvcnRlZGApO1xyXG4gIH1cclxufVxyXG4iXX0=