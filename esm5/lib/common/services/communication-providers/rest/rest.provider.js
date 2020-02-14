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
var RestProvider = /** @class */ (function () {
    function RestProvider(config, http) {
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
    RestProvider.prototype.request$ = /**
     * @param {?} requestId
     * @param {?=} options
     * @return {?}
     */
    function (requestId, options) {
        if (options === void 0) { options = {}; }
        var params = options.params, method = options.method, httpOptions = options.httpOptions, _a = options.urlParams, urlParams = _a === void 0 ? '' : _a;
        /** @type {?} */
        var point = RestProviderConfig[requestId];
        // default method
        if (!method) {
            method = this.providerConfig.defaultMethod || 'GET';
        }
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            point = this.providerConfig.config[requestId];
        }
        // config point control
        if (!point) {
            throw Error("No config found for requestId \"" + requestId + "\"");
        }
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, params, httpOptions);
        }
        else if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point + urlParams, httpOptions);
        }
        else {
            throw Error("Rest method " + method + " not supported");
        }
    };
    RestProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RestProvider.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ RestProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RestProvider_Factory() { return new RestProvider(i0.ɵɵinject(i1.ConfigurationService), i0.ɵɵinject(i2.HttpClient)); }, token: RestProvider, providedIn: "root" });
    return RestProvider;
}());
export { RestProvider };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC9yZXN0LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFJbkU7SUFNRSxzQkFDVSxNQUE0QixFQUM1QixJQUFnQjtRQURoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRXhCLElBQUk7WUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDdkU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE1BQU0sS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCwrQkFBUTs7Ozs7SUFBUixVQUFTLFNBQVMsRUFBRSxPQUFpQjtRQUFqQix3QkFBQSxFQUFBLFlBQWlCO1FBQzdCLElBQUEsdUJBQU0sRUFBRSx1QkFBTSxFQUFFLGlDQUFXLEVBQUUsc0JBQWMsRUFBZCxtQ0FBYzs7WUFDN0MsS0FBSyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztRQUV6QyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUM7U0FBRTtRQUVyRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUVELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsTUFBTSxLQUFLLENBQUMscUNBQWtDLFNBQVMsT0FBRyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNsRzthQUFNLElBQUksTUFBTSxLQUFLLEtBQUssSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RHO2FBQU07WUFDSCxNQUFNLEtBQUssQ0FBQyxpQkFBZSxNQUFNLG1CQUFnQixDQUFDLENBQUM7U0FDdEQ7SUFFSCxDQUFDOztnQkF4Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxvQkFBb0I7Z0JBRnBCLFVBQVU7Ozt1QkFEbkI7Q0FnREMsQUF6Q0QsSUF5Q0M7U0F0Q1ksWUFBWTs7Ozs7O0lBQ3ZCLHNDQUE0Qjs7Ozs7SUFHMUIsOEJBQW9DOzs7OztJQUNwQyw0QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5pbXBvcnQgeyBSZXN0UHJvdmlkZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJQ29tbXVuaWNhdGlvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RQcm92aWRlciBpbXBsZW1lbnRzIElDb21tdW5pY2F0aW9uUHJvdmlkZXIge1xuICBwcml2YXRlIHByb3ZpZGVyQ29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucHJvdmlkZXJDb25maWcgPSB0aGlzLmNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKS5wcm92aWRlcnMucmVzdDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IEVycm9yKCdObyBjb25maWcgZm91bmQgZm9yIHJlc3QgcHJvdmlkZXIhJyk7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdCQocmVxdWVzdElkLCBvcHRpb25zOiBhbnkgPSB7fSkge1xuICAgIGxldCB7IHBhcmFtcywgbWV0aG9kLCBodHRwT3B0aW9ucywgdXJsUGFyYW1zID0gJycgfSA9IG9wdGlvbnM7XG4gICAgbGV0IHBvaW50ID0gUmVzdFByb3ZpZGVyQ29uZmlnW3JlcXVlc3RJZF07XG5cbiAgICAvLyBkZWZhdWx0IG1ldGhvZFxuICAgIGlmICghbWV0aG9kKSB7IG1ldGhvZCA9IHRoaXMucHJvdmlkZXJDb25maWcuZGVmYXVsdE1ldGhvZCB8fCAnR0VUJzsgfVxuXG4gICAgaWYgKHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnICYmIHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF0pIHtcbiAgICAgIHBvaW50ID0gdGhpcy5wcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXTtcbiAgICB9XG5cbiAgICAvLyBjb25maWcgcG9pbnQgY29udHJvbFxuICAgIGlmICghcG9pbnQpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYE5vIGNvbmZpZyBmb3VuZCBmb3IgcmVxdWVzdElkIFwiJHtyZXF1ZXN0SWR9XCJgKTtcbiAgICB9XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kLnRvTG93ZXJDYXNlKCldKHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCArIHBvaW50LCBwYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2QudG9Mb3dlckNhc2UoKV0odGhpcy5wcm92aWRlckNvbmZpZy5iYXNlVXJsICsgcG9pbnQgKyB1cmxQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihgUmVzdCBtZXRob2QgJHttZXRob2R9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgICB9XG5cbiAgfVxufVxuIl19