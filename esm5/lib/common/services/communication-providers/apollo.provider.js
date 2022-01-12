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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8ucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUVoRSxJQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUs5QjtJQUNFLHdCQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRG5DLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBQzFDLENBQUM7SUFFSixpQ0FBUSxHQUFSLFVBQVMsY0FBYyxFQUFFLFNBQWlCLEVBQUUsT0FBTztRQUN6QyxJQUFBLHVCQUFNLEVBQUUsdUJBQU0sRUFBRSxpQ0FBVyxDQUFhO1FBQ2hELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO1FBQzVFLElBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3RSxJQUFJLEtBQUssQ0FBQztRQUVWLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMvQixLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsS0FBSyxHQUFHLEtB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QyxLQUFLLENBQUMsRUFBRTtnQkFDcEUsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBSyxNQUFNLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQzthQUMzRDtpQkFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDdEcsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLFVBQUssTUFBTSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLFlBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFHLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQXpFZSxVQUFVO2dCQUNELG9CQUFvQjs7O0lBSGxDLGNBQWM7UUFIMUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHZ0IsVUFBVTtZQUNELG9CQUFvQjtPQUhsQyxjQUFjLENBNEUxQjt5QkF4RkQ7Q0F3RkMsQUE1RUQsSUE0RUM7U0E1RVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcblxuY29uc3QgREVGQVVMVF9UUkVFX0RFUFRIID0gMTU7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBcG9sbG9Qcm92aWRlciBpbXBsZW1lbnRzIENvbW11bmljYXRpb25Qcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgcmVxdWVzdCQocHJvdmlkZXJDb25maWcsIHJlcXVlc3RJZDogc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBwYXJhbXMsIG1ldGhvZCwgaHR0cE9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgdHJlZURlcHRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgndHJlZURlcHRoJykgfHwgREVGQVVMVF9UUkVFX0RFUFRIO1xuICAgIGNvbnN0IGNvbmZpZyA9IHByb3ZpZGVyQ29uZmlnLmNvbmZpZyA/IHByb3ZpZGVyQ29uZmlnLmNvbmZpZyh0cmVlRGVwdGgpIDoge307XG4gICAgbGV0IHF1ZXJ5O1xuXG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWdbcmVxdWVzdElkXSkge1xuICAgICAgcXVlcnkgPSBjb25maWdbcmVxdWVzdElkXTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xuICAgIGNvbnN0IHsgcXVlcnlOYW1lIH0gPSBxdWVyeTtcbiAgICBsZXQgeyBxdWVyeUJvZHkgfSA9IHF1ZXJ5O1xuXG4gICAgLy8gY29uZmlnIHF1ZXJ5IGNvbnRyb2xcbiAgICBpZiAoIXF1ZXJ5TmFtZSB8fCAhcXVlcnlCb2R5KSB7XG4gICAgICB0aHJvdyBFcnJvcihgTm8gY29uZmlnIGZvdW5kIGZvciByZXF1ZXN0SWQgJyR7cmVxdWVzdElkfSdgKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBjb25zdCBwYXJhbXNTdHIgPSB0aGlzLm1ha2VQYXJhbXNTdHIocGFyYW1zKTtcbiAgICAgIHF1ZXJ5Qm9keSA9IHF1ZXJ5Qm9keS5yZXBsYWNlKCdfX1BBUkFNU19fJywgcGFyYW1zU3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlCb2R5ID0gcXVlcnlCb2R5LnJlcGxhY2UoJyhfX1BBUkFNU19fKScsICcnKTtcbiAgICB9XG5cbiAgICBsZXQgc291cmNlJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgaWYgKG1ldGhvZCAmJiBtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLmdldChwcm92aWRlckNvbmZpZy5iYXNlVXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlJCA9IHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICBwcm92aWRlckNvbmZpZy5iYXNlVXJsLFxuICAgICAgICB7IHF1ZXJ5OiBxdWVyeUJvZHkgfSxcbiAgICAgICAgaHR0cE9wdGlvbnMsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2UkLnBpcGUobWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5kYXRhW3F1ZXJ5TmFtZV0pKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVBhcmFtc1N0cihwYXJhbXMpIHtcbiAgICBjb25zdCBwYXJhbXNTdHIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IGFyclN0ciA9IFtdO1xuICAgICAgICBwYXJhbXNba2V5XS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YlBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cih2YWwpO1xuICAgICAgICAgICAgYXJyU3RyLnB1c2goYHsgJHtzdWJQYXJhbXNTdHJ9IH1gKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyB8fCB2YWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGAke3ZhbH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyU3RyLnB1c2goYFwiJHt2YWx9XCJgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiBbJHthcnJTdHIuam9pbignLCcpfV1gKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnb2JqZWN0JyAmJiBwYXJhbXNba2V5XSkge1xuICAgICAgICBjb25zdCBzdWJQYXJhbXNTdHIgPSB0aGlzLm1ha2VQYXJhbXNTdHIocGFyYW1zW2tleV0pO1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiB7ICR7c3ViUGFyYW1zU3RyfSB9YCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ3N0cmluZycgJiYga2V5LmluZGV4T2YoJyQnKSA9PT0gMCkge1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXkucmVwbGFjZSgnJCcsICcnKX06ICR7cGFyYW1zW2tleV19YCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHBhcmFtc1trZXldID09PSAnYm9vbGVhbicgfHwgcGFyYW1zW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogJHtwYXJhbXNba2V5XX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06IFwiJHtwYXJhbXNba2V5XX1cImApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwYXJhbXNTdHIuam9pbignICcpO1xuICB9XG59XG4iXX0=