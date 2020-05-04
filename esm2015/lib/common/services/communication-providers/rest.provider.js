/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication-providers/rest.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RestProvider {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} providerConfig
     * @param {?} requestId
     * @param {?=} options
     * @return {?}
     */
    request$(providerConfig, requestId, options = {}) {
        const { params, httpOptions, urlParams = '', } = options;
        let { method } = options;
        /** @type {?} */
        let point;
        // default method
        if (!method) {
            method = providerConfig.defaultMethod || 'GET';
        }
        if (providerConfig.config && providerConfig.config[requestId]) {
            point = providerConfig.config[requestId];
        }
        // config point control
        if (!point) {
            throw Error(`No config found for requestId "${requestId}"`);
        }
        if (method === 'POST' || method === 'PUT') {
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point, params, httpOptions);
        }
        if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point + urlParams, httpOptions);
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
    { type: HttpClient }
];
/** @nocollapse */ RestProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RestProvider_Factory() { return new RestProvider(i0.ɵɵinject(i1.HttpClient)); }, token: RestProvider, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestProvider.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFPbEQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFDdkIsWUFDVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3ZCLENBQUM7Ozs7Ozs7SUFFSixRQUFRLENBQUMsY0FBYyxFQUFFLFNBQVMsRUFBRSxVQUFlLEVBQUU7Y0FDN0MsRUFDSixNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsR0FBRyxFQUFFLEdBQ3BDLEdBQUcsT0FBTztZQUNQLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTzs7WUFDcEIsS0FBSztRQUVULGlCQUFpQjtRQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsTUFBTSxHQUFHLGNBQWMsQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDO1NBQUU7UUFFaEUsSUFBSSxjQUFjLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDN0QsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUM7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sS0FBSyxDQUFDLGtDQUFrQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUNwQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUNwRCxDQUFDO1NBQ0g7UUFBQyxJQUFJLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQ3BDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLFNBQVMsRUFBRSxXQUFXLENBQ3hELENBQUM7U0FDSDtRQUNELE1BQU0sS0FBSyxDQUFDLGVBQWUsTUFBTSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQXBDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxVQUFVOzs7Ozs7OztJQVNmLDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXIuaW50ZXJmYWNlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFByb3ZpZGVyIGltcGxlbWVudHMgQ29tbXVuaWNhdGlvblByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICApIHt9XG5cbiAgcmVxdWVzdCQocHJvdmlkZXJDb25maWcsIHJlcXVlc3RJZCwgb3B0aW9uczogYW55ID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXJhbXMsIGh0dHBPcHRpb25zLCB1cmxQYXJhbXMgPSAnJyxcbiAgICB9ID0gb3B0aW9ucztcbiAgICBsZXQgeyBtZXRob2QgfSA9IG9wdGlvbnM7XG4gICAgbGV0IHBvaW50O1xuXG4gICAgLy8gZGVmYXVsdCBtZXRob2RcbiAgICBpZiAoIW1ldGhvZCkgeyBtZXRob2QgPSBwcm92aWRlckNvbmZpZy5kZWZhdWx0TWV0aG9kIHx8ICdHRVQnOyB9XG5cbiAgICBpZiAocHJvdmlkZXJDb25maWcuY29uZmlnICYmIHByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdKSB7XG4gICAgICBwb2ludCA9IHByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdO1xuICAgIH1cblxuICAgIC8vIGNvbmZpZyBwb2ludCBjb250cm9sXG4gICAgaWYgKCFwb2ludCkge1xuICAgICAgdGhyb3cgRXJyb3IoYE5vIGNvbmZpZyBmb3VuZCBmb3IgcmVxdWVzdElkIFwiJHtyZXF1ZXN0SWR9XCJgKTtcbiAgICB9XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kLnRvTG93ZXJDYXNlKCldKFxuICAgICAgICBwcm92aWRlckNvbmZpZy5iYXNlVXJsICsgcG9pbnQsIHBhcmFtcywgaHR0cE9wdGlvbnMsXG4gICAgICApO1xuICAgIH0gaWYgKG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2QudG9Mb3dlckNhc2UoKV0oXG4gICAgICAgIHByb3ZpZGVyQ29uZmlnLmJhc2VVcmwgKyBwb2ludCArIHVybFBhcmFtcywgaHR0cE9wdGlvbnMsXG4gICAgICApO1xuICAgIH1cbiAgICB0aHJvdyBFcnJvcihgUmVzdCBtZXRob2QgJHttZXRob2R9IG5vdCBzdXBwb3J0ZWRgKTtcbiAgfVxufVxuIl19