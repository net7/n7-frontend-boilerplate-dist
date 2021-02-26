import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
    }
    RestProvider.prototype.request$ = function (providerConfig, requestId, options) {
        if (options === void 0) { options = {}; }
        var params = options.params, httpOptions = options.httpOptions, _a = options.urlParams, urlParams = _a === void 0 ? '' : _a;
        var method = options.method;
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
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point + urlParams, params, httpOptions);
        }
        if (method === 'GET' || method === 'DELETE') {
            return this.http[method.toLowerCase()](providerConfig.baseUrl + point + urlParams, httpOptions);
        }
        throw Error("Rest method " + method + " not supported");
    };
    RestProvider.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    RestProvider.ɵprov = i0.ɵɵdefineInjectable({ factory: function RestProvider_Factory() { return new RestProvider(i0.ɵɵinject(i1.HttpClient)); }, token: RestProvider, providedIn: "root" });
    RestProvider = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], RestProvider);
    return RestProvider;
}());
export { RestProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi1wcm92aWRlcnMvcmVzdC5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQU1sRDtJQUNFLHNCQUNVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDdkIsQ0FBQztJQUVKLCtCQUFRLEdBQVIsVUFBUyxjQUFjLEVBQUUsU0FBUyxFQUFFLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsWUFBaUI7UUFFakQsSUFBQSx1QkFBTSxFQUFFLGlDQUFXLEVBQUUsc0JBQWMsRUFBZCxtQ0FBYyxDQUN6QjtRQUNOLElBQUEsdUJBQU0sQ0FBYTtRQUN6QixJQUFJLEtBQUssQ0FBQztRQUVWLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsTUFBTSxHQUFHLGNBQWMsQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDO1NBQUU7UUFFaEUsSUFBSSxjQUFjLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDN0QsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUM7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sS0FBSyxDQUFDLHFDQUFrQyxTQUFTLE9BQUcsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUNwQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FDaEUsQ0FBQztTQUNIO1FBQUMsSUFBSSxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUNwQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxTQUFTLEVBQUUsV0FBVyxDQUN4RCxDQUFDO1NBQ0g7UUFDRCxNQUFNLEtBQUssQ0FBQyxpQkFBZSxNQUFNLG1CQUFnQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBL0JlLFVBQVU7OztJQUZmLFlBQVk7UUFIeEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHZ0IsVUFBVTtPQUZmLFlBQVksQ0FrQ3hCO3VCQXpDRDtDQXlDQyxBQWxDRCxJQWtDQztTQWxDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXIuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN0UHJvdmlkZXIgaW1wbGVtZW50cyBDb21tdW5pY2F0aW9uUHJvdmlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICkge31cclxuXHJcbiAgcmVxdWVzdCQocHJvdmlkZXJDb25maWcsIHJlcXVlc3RJZCwgb3B0aW9uczogYW55ID0ge30pIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcGFyYW1zLCBodHRwT3B0aW9ucywgdXJsUGFyYW1zID0gJycsXHJcbiAgICB9ID0gb3B0aW9ucztcclxuICAgIGxldCB7IG1ldGhvZCB9ID0gb3B0aW9ucztcclxuICAgIGxldCBwb2ludDtcclxuXHJcbiAgICAvLyBkZWZhdWx0IG1ldGhvZFxyXG4gICAgaWYgKCFtZXRob2QpIHsgbWV0aG9kID0gcHJvdmlkZXJDb25maWcuZGVmYXVsdE1ldGhvZCB8fCAnR0VUJzsgfVxyXG5cclxuICAgIGlmIChwcm92aWRlckNvbmZpZy5jb25maWcgJiYgcHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF0pIHtcclxuICAgICAgcG9pbnQgPSBwcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25maWcgcG9pbnQgY29udHJvbFxyXG4gICAgaWYgKCFwb2ludCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgTm8gY29uZmlnIGZvdW5kIGZvciByZXF1ZXN0SWQgXCIke3JlcXVlc3RJZH1cImApO1xyXG4gICAgfVxyXG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ1BVVCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2QudG9Mb3dlckNhc2UoKV0oXHJcbiAgICAgICAgcHJvdmlkZXJDb25maWcuYmFzZVVybCArIHBvaW50ICsgdXJsUGFyYW1zLCBwYXJhbXMsIGh0dHBPcHRpb25zLFxyXG4gICAgICApO1xyXG4gICAgfSBpZiAobWV0aG9kID09PSAnR0VUJyB8fCBtZXRob2QgPT09ICdERUxFVEUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBbbWV0aG9kLnRvTG93ZXJDYXNlKCldKFxyXG4gICAgICAgIHByb3ZpZGVyQ29uZmlnLmJhc2VVcmwgKyBwb2ludCArIHVybFBhcmFtcywgaHR0cE9wdGlvbnMsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBFcnJvcihgUmVzdCBtZXRob2QgJHttZXRob2R9IG5vdCBzdXBwb3J0ZWRgKTtcclxuICB9XHJcbn1cclxuIl19