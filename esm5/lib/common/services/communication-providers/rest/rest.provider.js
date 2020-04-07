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
        var params = options.params, httpOptions = options.httpOptions, _a = options.urlParams, urlParams = _a === void 0 ? '' : _a;
        var method = options.method;
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
        if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](this.providerConfig.baseUrl + point + urlParams, httpOptions);
        }
        throw Error("Rest method " + method + " not supported");
    };
    RestProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC9yZXN0LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBSW5FO0lBTUUsc0JBQ1UsTUFBNEIsRUFDNUIsSUFBZ0I7UUFEaEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUV4QixJQUFJO1lBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ3ZFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsK0JBQVE7Ozs7O0lBQVIsVUFBUyxTQUFTLEVBQUUsT0FBaUI7UUFBakIsd0JBQUEsRUFBQSxZQUFpQjtRQUVqQyxJQUFBLHVCQUFNLEVBQUUsaUNBQVcsRUFBRSxzQkFBYyxFQUFkLG1DQUFjO1FBRS9CLElBQUEsdUJBQU07O1lBQ1IsS0FBSyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztRQUV6QyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUM7U0FBRTtRQUVyRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZFLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUVELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsTUFBTSxLQUFLLENBQUMscUNBQWtDLFNBQVMsT0FBRyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUN6RCxDQUFDO1NBQ0g7UUFBQyxJQUFJLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxTQUFTLEVBQUUsV0FBVyxDQUM3RCxDQUFDO1NBQ0g7UUFDRCxNQUFNLEtBQUssQ0FBQyxpQkFBZSxNQUFNLG1CQUFnQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBN0NGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsb0JBQW9CO2dCQUZwQixVQUFVOzs7dUJBRG5CO0NBcURDLEFBOUNELElBOENDO1NBM0NZLFlBQVk7Ozs7OztJQUN2QixzQ0FBNEI7Ozs7O0lBRzFCLDhCQUFvQzs7Ozs7SUFDcEMsNEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJlc3RQcm92aWRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25Qcm92aWRlciB9IGZyb20gJy4uL2NvbW11bmljYXRpb24tcHJvdmlkZXIuaW50ZXJmYWNlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFByb3ZpZGVyIGltcGxlbWVudHMgQ29tbXVuaWNhdGlvblByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBwcm92aWRlckNvbmZpZzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnByb3ZpZGVyQ29uZmlnID0gdGhpcy5jb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJykucHJvdmlkZXJzLnJlc3Q7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBFcnJvcignTm8gY29uZmlnIGZvdW5kIGZvciByZXN0IHByb3ZpZGVyIScpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9uczogYW55ID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXJhbXMsIGh0dHBPcHRpb25zLCB1cmxQYXJhbXMgPSAnJyxcbiAgICB9ID0gb3B0aW9ucztcbiAgICBsZXQgeyBtZXRob2QgfSA9IG9wdGlvbnM7XG4gICAgbGV0IHBvaW50ID0gUmVzdFByb3ZpZGVyQ29uZmlnW3JlcXVlc3RJZF07XG5cbiAgICAvLyBkZWZhdWx0IG1ldGhvZFxuICAgIGlmICghbWV0aG9kKSB7IG1ldGhvZCA9IHRoaXMucHJvdmlkZXJDb25maWcuZGVmYXVsdE1ldGhvZCB8fCAnR0VUJzsgfVxuXG4gICAgaWYgKHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnICYmIHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF0pIHtcbiAgICAgIHBvaW50ID0gdGhpcy5wcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXTtcbiAgICB9XG5cbiAgICAvLyBjb25maWcgcG9pbnQgY29udHJvbFxuICAgIGlmICghcG9pbnQpIHtcbiAgICAgIHRocm93IEVycm9yKGBObyBjb25maWcgZm91bmQgZm9yIHJlcXVlc3RJZCBcIiR7cmVxdWVzdElkfVwiYCk7XG4gICAgfVxuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyB8fCBtZXRob2QgPT09ICdQVVQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwW21ldGhvZC50b0xvd2VyQ2FzZSgpXShcbiAgICAgICAgdGhpcy5wcm92aWRlckNvbmZpZy5iYXNlVXJsICsgcG9pbnQsIHBhcmFtcywgaHR0cE9wdGlvbnMsXG4gICAgICApO1xuICAgIH0gaWYgKG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2QudG9Mb3dlckNhc2UoKV0oXG4gICAgICAgIHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCArIHBvaW50ICsgdXJsUGFyYW1zLCBodHRwT3B0aW9ucyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRocm93IEVycm9yKGBSZXN0IG1ldGhvZCAke21ldGhvZH0gbm90IHN1cHBvcnRlZGApO1xuICB9XG59XG4iXX0=