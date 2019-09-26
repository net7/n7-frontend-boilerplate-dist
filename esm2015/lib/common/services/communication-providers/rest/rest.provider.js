/**
 * @fileoverview added by tsickle
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
        let { params, method, httpOptions } = options;
        /** @type {?} */
        let point = RestProviderConfig[requestId];
        // default method
        if (!method)
            method = this.providerConfig.defaultMethod || 'GET';
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            point = this.providerConfig.config[requestId];
        }
        // config point control
        if (!point)
            throw Error(`No config found for requestId "${requestId}"`);
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, params, httpOptions);
        }
        else if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, httpOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC9yZXN0LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFPbkUsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBR3ZCLFlBQ1UsTUFBNEIsRUFDNUIsSUFBZ0I7UUFEaEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUV4QixJQUFJO1lBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ3ZFO1FBQUMsT0FBTSxHQUFHLEVBQUU7WUFDWCxNQUFNLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFlLEVBQUU7WUFDL0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU87O1lBQ3pDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7UUFFekMsaUJBQWlCO1FBQ2pCLElBQUcsQ0FBQyxNQUFNO1lBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQztRQUVoRSxJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFDO1lBQ3JFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUVELHVCQUF1QjtRQUN2QixJQUFHLENBQUMsS0FBSztZQUFFLE1BQU0sS0FBSyxDQUFDLGtDQUFrQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRXZFLElBQUcsTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ2xHO2FBQU0sSUFBRyxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztTQUMxRjthQUFNO1lBQ0wsTUFBTSxLQUFLLENBQUMsZUFBZSxNQUFNLGdCQUFnQixDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7WUF0Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsb0JBQW9CO1lBRnBCLFVBQVU7Ozs7Ozs7O0lBVWpCLHNDQUE0Qjs7Ozs7SUFHMUIsOEJBQW9DOzs7OztJQUNwQyw0QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5pbXBvcnQgeyBSZXN0UHJvdmlkZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJQ29tbXVuaWNhdGlvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RQcm92aWRlciBpbXBsZW1lbnRzIElDb21tdW5pY2F0aW9uUHJvdmlkZXIge1xuICBwcml2YXRlIHByb3ZpZGVyQ29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucHJvdmlkZXJDb25maWcgPSB0aGlzLmNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKS5wcm92aWRlcnMucmVzdDtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgdGhyb3cgRXJyb3IoJ05vIGNvbmZpZyBmb3VuZCBmb3IgcmVzdCBwcm92aWRlciEnKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnM6IGFueSA9IHt9KXtcbiAgICBsZXQgeyBwYXJhbXMsIG1ldGhvZCwgaHR0cE9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgbGV0IHBvaW50ID0gUmVzdFByb3ZpZGVyQ29uZmlnW3JlcXVlc3RJZF07XG5cbiAgICAvLyBkZWZhdWx0IG1ldGhvZFxuICAgIGlmKCFtZXRob2QpIG1ldGhvZCA9IHRoaXMucHJvdmlkZXJDb25maWcuZGVmYXVsdE1ldGhvZCB8fCAnR0VUJztcblxuICAgIGlmKHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnICYmIHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF0pe1xuICAgICAgcG9pbnQgPSB0aGlzLnByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdO1xuICAgIH1cblxuICAgIC8vIGNvbmZpZyBwb2ludCBjb250cm9sXG4gICAgaWYoIXBvaW50KSB0aHJvdyBFcnJvcihgTm8gY29uZmlnIGZvdW5kIGZvciByZXF1ZXN0SWQgXCIke3JlcXVlc3RJZH1cImApO1xuXG4gICAgaWYobWV0aG9kID09PSAnUE9TVCcgfHwgbWV0aG9kID09PSAnUFVUJyl7XG4gICAgICByZXR1cm4gdGhpcy5odHRwW21ldGhvZC50b0xvd2VyQ2FzZSgpXSh0aGlzLnByb3ZpZGVyQ29uZmlnLmJhc2VVcmwgKyBwb2ludCwgcGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmKG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnREVMRVRFJyl7XG4gICAgICByZXR1cm4gdGhpcy5odHRwW21ldGhvZC50b0xvd2VyQ2FzZSgpXSh0aGlzLnByb3ZpZGVyQ29uZmlnLmJhc2VVcmwgKyBwb2ludCwgaHR0cE9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcihgUmVzdCBtZXRob2QgJHttZXRob2R9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICB9XG4gIH1cblxufVxuIl19