import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConfigurationService } from '../configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../configuration.service";
var DEFAULT_TREE_DEPTH = 15;
var ApolloProvider = /** @class */ (function () {
    function ApolloProvider(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    ApolloProvider.prototype.request$ = function (providerConfig, requestId, options) {
        var params = options.params, method = options.method, httpOptions = options.httpOptions;
        var treeDepth = this.configuration.get('treeDepth') || DEFAULT_TREE_DEPTH;
        var config = providerConfig.config ? providerConfig.config(treeDepth) : {};
        var query;
        if (config && config[requestId]) {
            query = config[requestId];
        }
        query = query || {};
        var queryName = query.queryName;
        var queryBody = query.queryBody;
        // config query control
        if (!queryName || !queryBody) {
            throw Error("No config found for requestId '" + requestId + "'");
        }
        if (params) {
            var paramsStr = this.makeParamsStr(params);
            queryBody = queryBody.replace('__PARAMS__', paramsStr);
        }
        else {
            queryBody = queryBody.replace('(__PARAMS__)', '');
        }
        var source$;
        if (method && method === 'GET') {
            source$ = this.http.get(providerConfig.baseUrl);
        }
        else {
            source$ = this.http.post(providerConfig.baseUrl, { query: queryBody }, httpOptions);
        }
        return source$.pipe(map(function (response) { return response.data[queryName]; }));
    };
    ApolloProvider.prototype.makeParamsStr = function (params) {
        var _this = this;
        var paramsStr = [];
        Object.keys(params).forEach(function (key) {
            if (Array.isArray(params[key])) {
                var arrStr_1 = [];
                params[key].forEach(function (val) {
                    if (typeof val === 'object') {
                        var subParamsStr = _this.makeParamsStr(val);
                        arrStr_1.push("{ " + subParamsStr + " }");
                    }
                    else if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
                        arrStr_1.push("" + val);
                    }
                    else {
                        arrStr_1.push("\"" + val + "\"");
                    }
                });
                paramsStr.push(key + ": [" + arrStr_1.join(',') + "]");
            }
            else if (typeof params[key] === 'object' && params[key]) {
                var subParamsStr = _this.makeParamsStr(params[key]);
                paramsStr.push(key + ": { " + subParamsStr + " }");
            }
            else if (typeof params[key] === 'string' && key.indexOf('$') === 0) {
                paramsStr.push(key.replace('$', '') + ": " + params[key]);
            }
            else if (typeof params[key] === 'number' || typeof params[key] === 'boolean' || params[key] === null) {
                paramsStr.push(key + ": " + params[key]);
            }
            else {
                paramsStr.push(key + ": \"" + params[key] + "\"");
            }
        });
        return paramsStr.join(' ');
    };
    ApolloProvider.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    ApolloProvider.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: ApolloProvider, providedIn: "root" });
    ApolloProvider = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [HttpClient,
            ConfigurationService])
    ], ApolloProvider);
    return ApolloProvider;
}());
export { ApolloProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8ucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUVoRSxJQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUs5QjtJQUNFLHdCQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRG5DLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBQzFDLENBQUM7SUFFSixpQ0FBUSxHQUFSLFVBQVMsY0FBYyxFQUFFLFNBQWlCLEVBQUUsT0FBTztRQUN6QyxJQUFBLHVCQUFNLEVBQUUsdUJBQU0sRUFBRSxpQ0FBVyxDQUFhO1FBQ2hELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO1FBQzVFLElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3RSxJQUFJLEtBQUssQ0FBQztRQUVWLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMvQixLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDWixJQUFBLDJCQUFTLENBQVc7UUFDdEIsSUFBQSwyQkFBUyxDQUFXO1FBRTFCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVCLE1BQU0sS0FBSyxDQUFDLG9DQUFrQyxTQUFTLE1BQUcsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0wsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxPQUF3QixDQUFDO1FBRTdCLElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDOUIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixjQUFjLENBQUMsT0FBTyxFQUN0QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFDcEIsV0FBVyxDQUNaLENBQUM7U0FDSDtRQUVELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFhLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU8sc0NBQWEsR0FBckIsVUFBc0IsTUFBTTtRQUE1QixpQkE0QkM7UUEzQkMsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLElBQU0sUUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7b0JBQ3RCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO3dCQUMzQixJQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QyxRQUFNLENBQUMsSUFBSSxDQUFDLE9BQUssWUFBWSxPQUFJLENBQUMsQ0FBQztxQkFDcEM7eUJBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7d0JBQzlFLFFBQU0sQ0FBQyxJQUFJLENBQUMsS0FBRyxHQUFLLENBQUMsQ0FBQztxQkFDdkI7eUJBQU07d0JBQ0wsUUFBTSxDQUFDLElBQUksQ0FBQyxPQUFJLEdBQUcsT0FBRyxDQUFDLENBQUM7cUJBQ3pCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILFNBQVMsQ0FBQyxJQUFJLENBQUksR0FBRyxXQUFNLFFBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDekQsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckQsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLFlBQU8sWUFBWSxPQUFJLENBQUMsQ0FBQzthQUMvQztpQkFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEUsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBSyxNQUFNLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQzthQUMzRDtpQkFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDdEcsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLFVBQUssTUFBTSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLFlBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFHLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQXpFZSxVQUFVO2dCQUNELG9CQUFvQjs7O0lBSGxDLGNBQWM7UUFIMUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHZ0IsVUFBVTtZQUNELG9CQUFvQjtPQUhsQyxjQUFjLENBNEUxQjt5QkF4RkQ7Q0F3RkMsQUE1RUQsSUE0RUM7U0E1RVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25Qcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcblxyXG5jb25zdCBERUZBVUxUX1RSRUVfREVQVEggPSAxNTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcG9sbG9Qcm92aWRlciBpbXBsZW1lbnRzIENvbW11bmljYXRpb25Qcm92aWRlciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgcmVxdWVzdCQocHJvdmlkZXJDb25maWcsIHJlcXVlc3RJZDogc3RyaW5nLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IHBhcmFtcywgbWV0aG9kLCBodHRwT3B0aW9ucyB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IHRyZWVEZXB0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3RyZWVEZXB0aCcpIHx8IERFRkFVTFRfVFJFRV9ERVBUSDtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHByb3ZpZGVyQ29uZmlnLmNvbmZpZyA/IHByb3ZpZGVyQ29uZmlnLmNvbmZpZyh0cmVlRGVwdGgpIDoge307XHJcbiAgICBsZXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWdbcmVxdWVzdElkXSkge1xyXG4gICAgICBxdWVyeSA9IGNvbmZpZ1tyZXF1ZXN0SWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXJ5ID0gcXVlcnkgfHwge307XHJcbiAgICBjb25zdCB7IHF1ZXJ5TmFtZSB9ID0gcXVlcnk7XHJcbiAgICBsZXQgeyBxdWVyeUJvZHkgfSA9IHF1ZXJ5O1xyXG5cclxuICAgIC8vIGNvbmZpZyBxdWVyeSBjb250cm9sXHJcbiAgICBpZiAoIXF1ZXJ5TmFtZSB8fCAhcXVlcnlCb2R5KSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBObyBjb25maWcgZm91bmQgZm9yIHJlcXVlc3RJZCAnJHtyZXF1ZXN0SWR9J2ApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgY29uc3QgcGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHBhcmFtcyk7XHJcbiAgICAgIHF1ZXJ5Qm9keSA9IHF1ZXJ5Qm9keS5yZXBsYWNlKCdfX1BBUkFNU19fJywgcGFyYW1zU3RyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHF1ZXJ5Qm9keSA9IHF1ZXJ5Qm9keS5yZXBsYWNlKCcoX19QQVJBTVNfXyknLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNvdXJjZSQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgICBpZiAobWV0aG9kICYmIG1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgc291cmNlJCA9IHRoaXMuaHR0cC5nZXQocHJvdmlkZXJDb25maWcuYmFzZVVybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgcHJvdmlkZXJDb25maWcuYmFzZVVybCxcclxuICAgICAgICB7IHF1ZXJ5OiBxdWVyeUJvZHkgfSxcclxuICAgICAgICBodHRwT3B0aW9ucyxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc291cmNlJC5waXBlKG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuZGF0YVtxdWVyeU5hbWVdKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VQYXJhbXNTdHIocGFyYW1zKSB7XHJcbiAgICBjb25zdCBwYXJhbXNTdHIgPSBbXTtcclxuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1trZXldKSkge1xyXG4gICAgICAgIGNvbnN0IGFyclN0ciA9IFtdO1xyXG4gICAgICAgIHBhcmFtc1trZXldLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cih2YWwpO1xyXG4gICAgICAgICAgICBhcnJTdHIucHVzaChgeyAke3N1YlBhcmFtc1N0cn0gfWApO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicgfHwgdmFsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGAke3ZhbH1gKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGBcIiR7dmFsfVwiYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogWyR7YXJyU3RyLmpvaW4oJywnKX1dYCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnb2JqZWN0JyAmJiBwYXJhbXNba2V5XSkge1xyXG4gICAgICAgIGNvbnN0IHN1YlBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cihwYXJhbXNba2V5XSk7XHJcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogeyAke3N1YlBhcmFtc1N0cn0gfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ3N0cmluZycgJiYga2V5LmluZGV4T2YoJyQnKSA9PT0gMCkge1xyXG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleS5yZXBsYWNlKCckJywgJycpfTogJHtwYXJhbXNba2V5XX1gKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdudW1iZXInIHx8IHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ2Jvb2xlYW4nIHx8IHBhcmFtc1trZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogJHtwYXJhbXNba2V5XX1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiBcIiR7cGFyYW1zW2tleV19XCJgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGFyYW1zU3RyLmpvaW4oJyAnKTtcclxuICB9XHJcbn1cclxuIl19