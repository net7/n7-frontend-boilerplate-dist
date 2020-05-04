/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication-providers/apollo.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ApolloProvider = /** @class */ (function () {
    function ApolloProvider(http) {
        this.http = http;
    }
    /**
     * @param {?} providerConfig
     * @param {?} requestId
     * @param {?} options
     * @return {?}
     */
    ApolloProvider.prototype.request$ = /**
     * @param {?} providerConfig
     * @param {?} requestId
     * @param {?} options
     * @return {?}
     */
    function (providerConfig, requestId, options) {
        var params = options.params, method = options.method, httpOptions = options.httpOptions;
        /** @type {?} */
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
            /** @type {?} */
            var paramsStr = this.makeParamsStr(params);
            queryBody = queryBody.replace('__PARAMS__', paramsStr);
        }
        else {
            queryBody = queryBody.replace('(__PARAMS__)', '');
        }
        /** @type {?} */
        var source$;
        if (method && method === 'GET') {
            source$ = this.http.get(providerConfig.baseUrl);
        }
        else {
            source$ = this.http.post(providerConfig.baseUrl, { query: queryBody }, httpOptions);
        }
        return source$.pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response.data[queryName]; })));
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    ApolloProvider.prototype.makeParamsStr = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        /** @type {?} */
        var paramsStr = [];
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (Array.isArray(params[key])) {
                /** @type {?} */
                var arrStr_1 = [];
                params[key].forEach((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    if (typeof val === 'object') {
                        /** @type {?} */
                        var subParamsStr = _this.makeParamsStr(val);
                        arrStr_1.push("{ " + subParamsStr + " }");
                    }
                    else if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
                        arrStr_1.push("" + val);
                    }
                    else {
                        arrStr_1.push("\"" + val + "\"");
                    }
                }));
                paramsStr.push(key + ": [" + arrStr_1.join(',') + "]");
            }
            else if (typeof params[key] === 'object' && params[key]) {
                /** @type {?} */
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
        }));
        return paramsStr.join(' ');
    };
    ApolloProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ApolloProvider.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ApolloProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(i0.ɵɵinject(i1.HttpClient)); }, token: ApolloProvider, providedIn: "root" });
    return ApolloProvider;
}());
export { ApolloProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApolloProvider.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8ucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUlyQztJQUlFLHdCQUNVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDdkIsQ0FBQzs7Ozs7OztJQUVKLGlDQUFROzs7Ozs7SUFBUixVQUFTLGNBQWMsRUFBRSxTQUFpQixFQUFFLE9BQU87UUFDekMsSUFBQSx1QkFBTSxFQUFFLHVCQUFNLEVBQUUsaUNBQVc7O1lBQy9CLEtBQUs7UUFFVCxJQUFJLGNBQWMsQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM3RCxLQUFLLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQztRQUVELEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBQSwyQkFBUztRQUNYLElBQUEsMkJBQVM7UUFFZix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1QixNQUFNLEtBQUssQ0FBQyxvQ0FBa0MsU0FBUyxNQUFHLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksTUFBTSxFQUFFOztnQkFDSixTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDNUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFNB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YUFDMUM7aUJBQU07Z0JBQ0wsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLFlBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFHLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQTNFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFVBQVU7Ozt5QkFEbkI7Q0FrRkMsQUE1RUQsSUE0RUM7U0F6RVksY0FBYzs7Ozs7O0lBRXZCLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuL2NvbW11bmljYXRpb24tcHJvdmlkZXIuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFwb2xsb1Byb3ZpZGVyIGltcGxlbWVudHMgQ29tbXVuaWNhdGlvblByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICkge31cblxuICByZXF1ZXN0JChwcm92aWRlckNvbmZpZywgcmVxdWVzdElkOiBzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHBhcmFtcywgbWV0aG9kLCBodHRwT3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgICBsZXQgcXVlcnk7XG5cbiAgICBpZiAocHJvdmlkZXJDb25maWcuY29uZmlnICYmIHByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdKSB7XG4gICAgICBxdWVyeSA9IHByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcXVlcnkgfHwge307XG4gICAgY29uc3QgeyBxdWVyeU5hbWUgfSA9IHF1ZXJ5O1xuICAgIGxldCB7IHF1ZXJ5Qm9keSB9ID0gcXVlcnk7XG5cbiAgICAvLyBjb25maWcgcXVlcnkgY29udHJvbFxuICAgIGlmICghcXVlcnlOYW1lIHx8ICFxdWVyeUJvZHkpIHtcbiAgICAgIHRocm93IEVycm9yKGBObyBjb25maWcgZm91bmQgZm9yIHJlcXVlc3RJZCAnJHtyZXF1ZXN0SWR9J2ApO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGNvbnN0IHBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cihwYXJhbXMpO1xuICAgICAgcXVlcnlCb2R5ID0gcXVlcnlCb2R5LnJlcGxhY2UoJ19fUEFSQU1TX18nLCBwYXJhbXNTdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeUJvZHkgPSBxdWVyeUJvZHkucmVwbGFjZSgnKF9fUEFSQU1TX18pJywgJycpO1xuICAgIH1cblxuICAgIGxldCBzb3VyY2UkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBpZiAobWV0aG9kICYmIG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIHNvdXJjZSQgPSB0aGlzLmh0dHAuZ2V0KHByb3ZpZGVyQ29uZmlnLmJhc2VVcmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgIHByb3ZpZGVyQ29uZmlnLmJhc2VVcmwsXG4gICAgICAgIHsgcXVlcnk6IHF1ZXJ5Qm9keSB9LFxuICAgICAgICBodHRwT3B0aW9ucyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZSQucGlwZShtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmRhdGFbcXVlcnlOYW1lXSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlUGFyYW1zU3RyKHBhcmFtcykge1xuICAgIGNvbnN0IHBhcmFtc1N0ciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNba2V5XSkpIHtcbiAgICAgICAgY29uc3QgYXJyU3RyID0gW107XG4gICAgICAgIHBhcmFtc1trZXldLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3Qgc3ViUGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHZhbCk7XG4gICAgICAgICAgICBhcnJTdHIucHVzaChgeyAke3N1YlBhcmFtc1N0cn0gfWApO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgYXJyU3RyLnB1c2goYCR7dmFsfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJTdHIucHVzaChgXCIke3ZhbH1cImApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06IFske2FyclN0ci5qb2luKCcsJyl9XWApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdvYmplY3QnICYmIHBhcmFtc1trZXldKSB7XG4gICAgICAgIGNvbnN0IHN1YlBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cihwYXJhbXNba2V5XSk7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06IHsgJHtzdWJQYXJhbXNTdHJ9IH1gKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnc3RyaW5nJyAmJiBrZXkuaW5kZXhPZignJCcpID09PSAwKSB7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleS5yZXBsYWNlKCckJywgJycpfTogJHtwYXJhbXNba2V5XX1gKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdib29sZWFuJyB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiAke3BhcmFtc1trZXldfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogXCIke3BhcmFtc1trZXldfVwiYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcmFtc1N0ci5qb2luKCcgJyk7XG4gIH1cbn1cbiJdfQ==