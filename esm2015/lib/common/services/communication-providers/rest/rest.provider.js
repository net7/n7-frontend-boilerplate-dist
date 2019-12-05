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
        let { params, method, httpOptions, urlParams = '' } = options;
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
        else if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point + urlParams, httpOptions);
        }
        else {
            throw Error(`Rest method ${method} not supported`);
        }
    }
}
RestProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC9yZXN0LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBT25FLE1BQU0sT0FBTyxZQUFZOzs7OztJQUd2QixZQUNVLE1BQTRCLEVBQzVCLElBQWdCO1FBRGhCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFeEIsSUFBSTtZQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUN2RTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxTQUFTLEVBQUUsVUFBZSxFQUFFO1lBQy9CLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxHQUFHLE9BQU87O1lBQ3pELEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7UUFFekMsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDO1NBQUU7UUFFckUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN2RSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0M7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE1BQU0sS0FBSyxDQUFDLGtDQUFrQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDbEc7YUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN0RzthQUFNO1lBQ0gsTUFBTSxLQUFLLENBQUMsZUFBZSxNQUFNLGdCQUFnQixDQUFDLENBQUM7U0FDdEQ7SUFFSCxDQUFDOzs7WUF4Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsb0JBQW9CO1lBRnBCLFVBQVU7Ozs7Ozs7O0lBVWpCLHNDQUE0Qjs7Ozs7SUFHMUIsOEJBQW9DOzs7OztJQUNwQyw0QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5pbXBvcnQgeyBSZXN0UHJvdmlkZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJQ29tbXVuaWNhdGlvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RQcm92aWRlciBpbXBsZW1lbnRzIElDb21tdW5pY2F0aW9uUHJvdmlkZXIge1xuICBwcml2YXRlIHByb3ZpZGVyQ29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucHJvdmlkZXJDb25maWcgPSB0aGlzLmNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKS5wcm92aWRlcnMucmVzdDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IEVycm9yKCdObyBjb25maWcgZm91bmQgZm9yIHJlc3QgcHJvdmlkZXIhJyk7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdCQocmVxdWVzdElkLCBvcHRpb25zOiBhbnkgPSB7fSkge1xuICAgIGxldCB7IHBhcmFtcywgbWV0aG9kLCBodHRwT3B0aW9ucywgdXJsUGFyYW1zID0gJycgfSA9IG9wdGlvbnM7XG4gICAgbGV0IHBvaW50ID0gUmVzdFByb3ZpZGVyQ29uZmlnW3JlcXVlc3RJZF07XG5cbiAgICAvLyBkZWZhdWx0IG1ldGhvZFxuICAgIGlmICghbWV0aG9kKSB7IG1ldGhvZCA9IHRoaXMucHJvdmlkZXJDb25maWcuZGVmYXVsdE1ldGhvZCB8fCAnR0VUJzsgfVxuXG4gICAgaWYgKHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnICYmIHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF0pIHtcbiAgICAgIHBvaW50ID0gdGhpcy5wcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXTtcbiAgICB9XG5cbiAgICAvLyBjb25maWcgcG9pbnQgY29udHJvbFxuICAgIGlmICghcG9pbnQpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYE5vIGNvbmZpZyBmb3VuZCBmb3IgcmVxdWVzdElkIFwiJHtyZXF1ZXN0SWR9XCJgKTtcbiAgICB9XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kLnRvTG93ZXJDYXNlKCldKHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCArIHBvaW50LCBwYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2QudG9Mb3dlckNhc2UoKV0odGhpcy5wcm92aWRlckNvbmZpZy5iYXNlVXJsICsgcG9pbnQgKyB1cmxQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihgUmVzdCBtZXRob2QgJHttZXRob2R9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICB9XG5cbiAgfVxufVxuIl19