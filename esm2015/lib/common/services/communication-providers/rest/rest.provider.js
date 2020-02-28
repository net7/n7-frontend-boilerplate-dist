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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC9yZXN0LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFPbkUsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBR3ZCLFlBQ1UsTUFBNEIsRUFDNUIsSUFBZ0I7UUFEaEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUV4QixJQUFJO1lBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ3ZFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFlLEVBQUU7WUFDL0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEdBQUcsT0FBTzs7WUFDekQsS0FBSyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztRQUV6QyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUM7U0FBRTtRQUVyRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUVELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsTUFBTSxLQUFLLENBQUMsa0NBQWtDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNsRzthQUFNLElBQUksTUFBTSxLQUFLLEtBQUssSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RHO2FBQU07WUFDSCxNQUFNLEtBQUssQ0FBQyxlQUFlLE1BQU0sZ0JBQWdCLENBQUMsQ0FBQztTQUN0RDtJQUVILENBQUM7OztZQXhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxvQkFBb0I7WUFGcEIsVUFBVTs7Ozs7Ozs7SUFVakIsc0NBQTRCOzs7OztJQUcxQiw4QkFBb0M7Ozs7O0lBQ3BDLDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcbmltcG9ydCB7IFJlc3RQcm92aWRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElDb21tdW5pY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVyLmludGVyZmFjZSc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFByb3ZpZGVyIGltcGxlbWVudHMgSUNvbW11bmljYXRpb25Qcm92aWRlciB7XG4gIHByaXZhdGUgcHJvdmlkZXJDb25maWc6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICApIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5wcm92aWRlckNvbmZpZyA9IHRoaXMuY29uZmlnLmdldCgnY29tbXVuaWNhdGlvbicpLnByb3ZpZGVycy5yZXN0O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgRXJyb3IoJ05vIGNvbmZpZyBmb3VuZCBmb3IgcmVzdCBwcm92aWRlciEnKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gICAgbGV0IHsgcGFyYW1zLCBtZXRob2QsIGh0dHBPcHRpb25zLCB1cmxQYXJhbXMgPSAnJyB9ID0gb3B0aW9ucztcbiAgICBsZXQgcG9pbnQgPSBSZXN0UHJvdmlkZXJDb25maWdbcmVxdWVzdElkXTtcblxuICAgIC8vIGRlZmF1bHQgbWV0aG9kXG4gICAgaWYgKCFtZXRob2QpIHsgbWV0aG9kID0gdGhpcy5wcm92aWRlckNvbmZpZy5kZWZhdWx0TWV0aG9kIHx8ICdHRVQnOyB9XG5cbiAgICBpZiAodGhpcy5wcm92aWRlckNvbmZpZy5jb25maWcgJiYgdGhpcy5wcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXSkge1xuICAgICAgcG9pbnQgPSB0aGlzLnByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdO1xuICAgIH1cblxuICAgIC8vIGNvbmZpZyBwb2ludCBjb250cm9sXG4gICAgaWYgKCFwb2ludCkge1xuICAgICAgICB0aHJvdyBFcnJvcihgTm8gY29uZmlnIGZvdW5kIGZvciByZXF1ZXN0SWQgXCIke3JlcXVlc3RJZH1cImApO1xuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgfHwgbWV0aG9kID09PSAnUFVUJykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2QudG9Mb3dlckNhc2UoKV0odGhpcy5wcm92aWRlckNvbmZpZy5iYXNlVXJsICsgcG9pbnQsIHBhcmFtcywgaHR0cE9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnR0VUJyB8fCBtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwW21ldGhvZC50b0xvd2VyQ2FzZSgpXSh0aGlzLnByb3ZpZGVyQ29uZmlnLmJhc2VVcmwgKyBwb2ludCArIHVybFBhcmFtcywgaHR0cE9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKGBSZXN0IG1ldGhvZCAke21ldGhvZH0gbm90IHN1cHBvcnRlZGApO1xuICAgIH1cblxuICB9XG59XG4iXX0=