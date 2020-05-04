/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication-providers/rest.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
    }
    /**
     * @param {?} providerConfig
     * @param {?} requestId
     * @param {?=} options
     * @return {?}
     */
    RestProvider.prototype.request$ = /**
     * @param {?} providerConfig
     * @param {?} requestId
     * @param {?=} options
     * @return {?}
     */
    function (providerConfig, requestId, options) {
        if (options === void 0) { options = {}; }
        var params = options.params, httpOptions = options.httpOptions, _a = options.urlParams, urlParams = _a === void 0 ? '' : _a;
        var method = options.method;
        /** @type {?} */
        var point;
        // default method
        if (!method) {
            method = providerConfig.defaultMethod || 'GET';
        }
        if (providerConfig.config && providerConfig.config[requestId]) {
            point = providerConfig.config[requestId];
        }
        // config point control
        if (!point) {
            throw Error("No config found for requestId \"" + requestId + "\"");
        }
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point, params, httpOptions);
        }
        if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point + urlParams, httpOptions);
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
        { type: HttpClient }
    ]; };
    /** @nocollapse */ RestProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RestProvider_Factory() { return new RestProvider(i0.ɵɵinject(i1.HttpClient)); }, token: RestProvider, providedIn: "root" });
    return RestProvider;
}());
export { RestProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestProvider.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJbEQ7SUFJRSxzQkFDVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3ZCLENBQUM7Ozs7Ozs7SUFFSiwrQkFBUTs7Ozs7O0lBQVIsVUFBUyxjQUFjLEVBQUUsU0FBUyxFQUFFLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsWUFBaUI7UUFFakQsSUFBQSx1QkFBTSxFQUFFLGlDQUFXLEVBQUUsc0JBQWMsRUFBZCxtQ0FBYztRQUUvQixJQUFBLHVCQUFNOztZQUNSLEtBQUs7UUFFVCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE1BQU0sR0FBRyxjQUFjLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQztTQUFFO1FBRWhFLElBQUksY0FBYyxDQUFDLE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdELEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixNQUFNLEtBQUssQ0FBQyxxQ0FBa0MsU0FBUyxPQUFHLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FDcEMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FDcEQsQ0FBQztTQUNIO1FBQUMsSUFBSSxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUNwQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxTQUFTLEVBQUUsV0FBVyxDQUN4RCxDQUFDO1NBQ0g7UUFDRCxNQUFNLEtBQUssQ0FBQyxpQkFBZSxNQUFNLG1CQUFnQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBcENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsVUFBVTs7O3VCQURuQjtDQTBDQyxBQXJDRCxJQXFDQztTQWxDWSxZQUFZOzs7Ozs7SUFFckIsNEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbW11bmljYXRpb25Qcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0UHJvdmlkZXIgaW1wbGVtZW50cyBDb21tdW5pY2F0aW9uUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICkge31cblxuICByZXF1ZXN0JChwcm92aWRlckNvbmZpZywgcmVxdWVzdElkLCBvcHRpb25zOiBhbnkgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcmFtcywgaHR0cE9wdGlvbnMsIHVybFBhcmFtcyA9ICcnLFxuICAgIH0gPSBvcHRpb25zO1xuICAgIGxldCB7IG1ldGhvZCB9ID0gb3B0aW9ucztcbiAgICBsZXQgcG9pbnQ7XG5cbiAgICAvLyBkZWZhdWx0IG1ldGhvZFxuICAgIGlmICghbWV0aG9kKSB7IG1ldGhvZCA9IHByb3ZpZGVyQ29uZmlnLmRlZmF1bHRNZXRob2QgfHwgJ0dFVCc7IH1cblxuICAgIGlmIChwcm92aWRlckNvbmZpZy5jb25maWcgJiYgcHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF0pIHtcbiAgICAgIHBvaW50ID0gcHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF07XG4gICAgfVxuXG4gICAgLy8gY29uZmlnIHBvaW50IGNvbnRyb2xcbiAgICBpZiAoIXBvaW50KSB7XG4gICAgICB0aHJvdyBFcnJvcihgTm8gY29uZmlnIGZvdW5kIGZvciByZXF1ZXN0SWQgXCIke3JlcXVlc3RJZH1cImApO1xuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcgfHwgbWV0aG9kID09PSAnUFVUJykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2QudG9Mb3dlckNhc2UoKV0oXG4gICAgICAgIHByb3ZpZGVyQ29uZmlnLmJhc2VVcmwgKyBwb2ludCwgcGFyYW1zLCBodHRwT3B0aW9ucyxcbiAgICAgICk7XG4gICAgfSBpZiAobWV0aG9kID09PSAnR0VUJyB8fCBtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwW21ldGhvZC50b0xvd2VyQ2FzZSgpXShcbiAgICAgICAgcHJvdmlkZXJDb25maWcuYmFzZVVybCArIHBvaW50ICsgdXJsUGFyYW1zLCBodHRwT3B0aW9ucyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRocm93IEVycm9yKGBSZXN0IG1ldGhvZCAke21ldGhvZH0gbm90IHN1cHBvcnRlZGApO1xuICB9XG59XG4iXX0=