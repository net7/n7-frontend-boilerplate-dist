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
        var params = options.params, method = options.method, httpOptions = options.httpOptions;
        /** @type {?} */
        var point = RestProviderConfig[requestId];
        // default method
        if (!method)
            method = this.providerConfig.defaultMethod || 'GET';
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            point = this.providerConfig.config[requestId];
        }
        // config point control
        if (!point)
            throw Error("No config found for requestId \"" + requestId + "\"");
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, params, httpOptions);
        }
        else if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point, httpOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC9yZXN0LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFJbkU7SUFNRSxzQkFDVSxNQUE0QixFQUM1QixJQUFnQjtRQURoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRXhCLElBQUk7WUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDdkU7UUFBQyxPQUFNLEdBQUcsRUFBRTtZQUNYLE1BQU0sS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCwrQkFBUTs7Ozs7SUFBUixVQUFTLFNBQVMsRUFBRSxPQUFpQjtRQUFqQix3QkFBQSxFQUFBLFlBQWlCO1FBQzdCLElBQUEsdUJBQU0sRUFBRSx1QkFBTSxFQUFFLGlDQUFXOztZQUM3QixLQUFLLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1FBRXpDLGlCQUFpQjtRQUNqQixJQUFHLENBQUMsTUFBTTtZQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUM7UUFFaEUsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBQztZQUNyRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0M7UUFFRCx1QkFBdUI7UUFDdkIsSUFBRyxDQUFDLEtBQUs7WUFBRSxNQUFNLEtBQUssQ0FBQyxxQ0FBa0MsU0FBUyxPQUFHLENBQUMsQ0FBQztRQUV2RSxJQUFHLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxLQUFLLEtBQUssRUFBQztZQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNsRzthQUFNLElBQUcsTUFBTSxLQUFLLEtBQUssSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFDO1lBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDMUY7YUFBTTtZQUNMLE1BQU0sS0FBSyxDQUFDLGlCQUFlLE1BQU0sbUJBQWdCLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7O2dCQXRDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLG9CQUFvQjtnQkFGcEIsVUFBVTs7O3VCQURuQjtDQStDQyxBQXhDRCxJQXdDQztTQXJDWSxZQUFZOzs7Ozs7SUFDdkIsc0NBQTRCOzs7OztJQUcxQiw4QkFBb0M7Ozs7O0lBQ3BDLDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcbmltcG9ydCB7IFJlc3RQcm92aWRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElDb21tdW5pY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVyLmludGVyZmFjZSc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFByb3ZpZGVyIGltcGxlbWVudHMgSUNvbW11bmljYXRpb25Qcm92aWRlciB7XG4gIHByaXZhdGUgcHJvdmlkZXJDb25maWc6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICApIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5wcm92aWRlckNvbmZpZyA9IHRoaXMuY29uZmlnLmdldCgnY29tbXVuaWNhdGlvbicpLnByb3ZpZGVycy5yZXN0O1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICB0aHJvdyBFcnJvcignTm8gY29uZmlnIGZvdW5kIGZvciByZXN0IHByb3ZpZGVyIScpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9uczogYW55ID0ge30pe1xuICAgIGxldCB7IHBhcmFtcywgbWV0aG9kLCBodHRwT3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgICBsZXQgcG9pbnQgPSBSZXN0UHJvdmlkZXJDb25maWdbcmVxdWVzdElkXTtcblxuICAgIC8vIGRlZmF1bHQgbWV0aG9kXG4gICAgaWYoIW1ldGhvZCkgbWV0aG9kID0gdGhpcy5wcm92aWRlckNvbmZpZy5kZWZhdWx0TWV0aG9kIHx8ICdHRVQnO1xuXG4gICAgaWYodGhpcy5wcm92aWRlckNvbmZpZy5jb25maWcgJiYgdGhpcy5wcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXSl7XG4gICAgICBwb2ludCA9IHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF07XG4gICAgfVxuXG4gICAgLy8gY29uZmlnIHBvaW50IGNvbnRyb2xcbiAgICBpZighcG9pbnQpIHRocm93IEVycm9yKGBObyBjb25maWcgZm91bmQgZm9yIHJlcXVlc3RJZCBcIiR7cmVxdWVzdElkfVwiYCk7XG5cbiAgICBpZihtZXRob2QgPT09ICdQT1NUJyB8fCBtZXRob2QgPT09ICdQVVQnKXtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kLnRvTG93ZXJDYXNlKCldKHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCArIHBvaW50LCBwYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICB9IGVsc2UgaWYobWV0aG9kID09PSAnR0VUJyB8fCBtZXRob2QgPT09ICdERUxFVEUnKXtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kLnRvTG93ZXJDYXNlKCldKHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCArIHBvaW50LCBodHRwT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKGBSZXN0IG1ldGhvZCAke21ldGhvZH0gbm90IHN1cHBvcnRlZGApO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=