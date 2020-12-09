import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ApolloProvider = /** @class */ (function () {
    function ApolloProvider(http) {
        this.http = http;
    }
    ApolloProvider.prototype.request$ = function (providerConfig, requestId, options) {
        var params = options.params, method = options.method, httpOptions = options.httpOptions;
        var query;
        if (providerConfig.config && providerConfig.config[requestId]) {
            query = providerConfig.config[requestId];
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
        { type: HttpClient }
    ]; };
    ApolloProvider.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(i0.ɵɵinject(i1.HttpClient)); }, token: ApolloProvider, providedIn: "root" });
    ApolloProvider = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ApolloProvider);
    return ApolloProvider;
}());
export { ApolloProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8ucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBT3JDO0lBQ0Usd0JBQ1UsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUN2QixDQUFDO0lBRUosaUNBQVEsR0FBUixVQUFTLGNBQWMsRUFBRSxTQUFpQixFQUFFLE9BQU87UUFDekMsSUFBQSx1QkFBTSxFQUFFLHVCQUFNLEVBQUUsaUNBQVcsQ0FBYTtRQUNoRCxJQUFJLEtBQUssQ0FBQztRQUVWLElBQUksY0FBYyxDQUFDLE1BQU0sSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdELEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDWixJQUFBLDJCQUFTLENBQVc7UUFDdEIsSUFBQSwyQkFBUyxDQUFXO1FBRTFCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVCLE1BQU0sS0FBSyxDQUFDLG9DQUFrQyxTQUFTLE1BQUcsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0wsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxPQUF3QixDQUFDO1FBRTdCLElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDOUIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixjQUFjLENBQUMsT0FBTyxFQUN0QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFDcEIsV0FBVyxDQUNaLENBQUM7U0FDSDtRQUVELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFhLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU8sc0NBQWEsR0FBckIsVUFBc0IsTUFBTTtRQUE1QixpQkE0QkM7UUEzQkMsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLElBQU0sUUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7b0JBQ3RCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO3dCQUMzQixJQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QyxRQUFNLENBQUMsSUFBSSxDQUFDLE9BQUssWUFBWSxPQUFJLENBQUMsQ0FBQztxQkFDcEM7eUJBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7d0JBQzlFLFFBQU0sQ0FBQyxJQUFJLENBQUMsS0FBRyxHQUFLLENBQUMsQ0FBQztxQkFDdkI7eUJBQU07d0JBQ0wsUUFBTSxDQUFDLElBQUksQ0FBQyxPQUFJLEdBQUcsT0FBRyxDQUFDLENBQUM7cUJBQ3pCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILFNBQVMsQ0FBQyxJQUFJLENBQUksR0FBRyxXQUFNLFFBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDekQsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckQsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLFlBQU8sWUFBWSxPQUFJLENBQUMsQ0FBQzthQUMvQztpQkFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEUsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBSyxNQUFNLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQzthQUMzRDtpQkFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDdEcsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLFVBQUssTUFBTSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLFlBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFHLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQXRFZSxVQUFVOzs7SUFGZixjQUFjO1FBSDFCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBR2dCLFVBQVU7T0FGZixjQUFjLENBeUUxQjt5QkFsRkQ7Q0FrRkMsQUF6RUQsSUF5RUM7U0F6RVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXIuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFwb2xsb1Byb3ZpZGVyIGltcGxlbWVudHMgQ29tbXVuaWNhdGlvblByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICkge31cblxuICByZXF1ZXN0JChwcm92aWRlckNvbmZpZywgcmVxdWVzdElkOiBzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHBhcmFtcywgbWV0aG9kLCBodHRwT3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgICBsZXQgcXVlcnk7XG5cbiAgICBpZiAocHJvdmlkZXJDb25maWcuY29uZmlnICYmIHByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdKSB7XG4gICAgICBxdWVyeSA9IHByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcXVlcnkgfHwge307XG4gICAgY29uc3QgeyBxdWVyeU5hbWUgfSA9IHF1ZXJ5O1xuICAgIGxldCB7IHF1ZXJ5Qm9keSB9ID0gcXVlcnk7XG5cbiAgICAvLyBjb25maWcgcXVlcnkgY29udHJvbFxuICAgIGlmICghcXVlcnlOYW1lIHx8ICFxdWVyeUJvZHkpIHtcbiAgICAgIHRocm93IEVycm9yKGBObyBjb25maWcgZm91bmQgZm9yIHJlcXVlc3RJZCAnJHtyZXF1ZXN0SWR9J2ApO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGNvbnN0IHBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cihwYXJhbXMpO1xuICAgICAgcXVlcnlCb2R5ID0gcXVlcnlCb2R5LnJlcGxhY2UoJ19fUEFSQU1TX18nLCBwYXJhbXNTdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeUJvZHkgPSBxdWVyeUJvZHkucmVwbGFjZSgnKF9fUEFSQU1TX18pJywgJycpO1xuICAgIH1cblxuICAgIGxldCBzb3VyY2UkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBpZiAobWV0aG9kICYmIG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIHNvdXJjZSQgPSB0aGlzLmh0dHAuZ2V0KHByb3ZpZGVyQ29uZmlnLmJhc2VVcmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgIHByb3ZpZGVyQ29uZmlnLmJhc2VVcmwsXG4gICAgICAgIHsgcXVlcnk6IHF1ZXJ5Qm9keSB9LFxuICAgICAgICBodHRwT3B0aW9ucyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZSQucGlwZShtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmRhdGFbcXVlcnlOYW1lXSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlUGFyYW1zU3RyKHBhcmFtcykge1xuICAgIGNvbnN0IHBhcmFtc1N0ciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNba2V5XSkpIHtcbiAgICAgICAgY29uc3QgYXJyU3RyID0gW107XG4gICAgICAgIHBhcmFtc1trZXldLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3Qgc3ViUGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHZhbCk7XG4gICAgICAgICAgICBhcnJTdHIucHVzaChgeyAke3N1YlBhcmFtc1N0cn0gfWApO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgYXJyU3RyLnB1c2goYCR7dmFsfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJTdHIucHVzaChgXCIke3ZhbH1cImApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06IFske2FyclN0ci5qb2luKCcsJyl9XWApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdvYmplY3QnICYmIHBhcmFtc1trZXldKSB7XG4gICAgICAgIGNvbnN0IHN1YlBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cihwYXJhbXNba2V5XSk7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06IHsgJHtzdWJQYXJhbXNTdHJ9IH1gKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnc3RyaW5nJyAmJiBrZXkuaW5kZXhPZignJCcpID09PSAwKSB7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleS5yZXBsYWNlKCckJywgJycpfTogJHtwYXJhbXNba2V5XX1gKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdib29sZWFuJyB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiAke3BhcmFtc1trZXldfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogXCIke3BhcmFtc1trZXldfVwiYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcmFtc1N0ci5qb2luKCcgJyk7XG4gIH1cbn1cbiJdfQ==