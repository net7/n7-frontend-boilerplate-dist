/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication-providers/apollo/apollo.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApolloProviderConfig } from './config';
import { ConfigurationService } from '../../configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "../../configuration.service";
import * as i2 from "@angular/common/http";
var ApolloProvider = /** @class */ (function () {
    function ApolloProvider(config, http) {
        this.config = config;
        this.http = http;
        try {
            this.providerConfig = this.config.get('communication').providers.apollo;
        }
        catch (err) {
            throw Error('No config found for apollo provider!');
        }
    }
    /**
     * @param {?} requestId
     * @param {?} options
     * @return {?}
     */
    ApolloProvider.prototype.request$ = /**
     * @param {?} requestId
     * @param {?} options
     * @return {?}
     */
    function (requestId, options) {
        var params = options.params, method = options.method, httpOptions = options.httpOptions;
        /** @type {?} */
        var query = ApolloProviderConfig[requestId];
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            query = this.providerConfig.config[requestId];
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
            source$ = this.http.get(this.providerConfig.baseUrl);
        }
        else {
            source$ = this.http.post(this.providerConfig.baseUrl, { query: queryBody }, httpOptions);
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
        { type: ConfigurationService },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ApolloProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(i0.ɵɵinject(i1.ConfigurationService), i0.ɵɵinject(i2.HttpClient)); }, token: ApolloProvider, providedIn: "root" });
    return ApolloProvider;
}());
export { ApolloProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApolloProvider.prototype.providerConfig;
    /**
     * @type {?}
     * @private
     */
    ApolloProvider.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ApolloProvider.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vYXBvbGxvLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUduRTtJQU1FLHdCQUFvQixNQUE0QixFQUFVLElBQWdCO1FBQXRELFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUN4RSxJQUFJO1lBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQ3pFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsaUNBQVE7Ozs7O0lBQVIsVUFBUyxTQUFTLEVBQUUsT0FBTztRQUNqQixJQUFBLHVCQUFNLEVBQUUsdUJBQU0sRUFBRSxpQ0FBVzs7WUFDL0IsS0FBSyxHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZFLEtB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RyxDQUFDLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwRSxTQUFTLENBQUMsSUFBSSxDQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUcsQ0FBQyxDQUFDO2FBQzNEO2lCQUFNLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN0RyxTQUFTLENBQUMsSUFBSSxDQUFJLEdBQUcsVUFBSyxNQUFNLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDTCxTQUFTLENBQUMsSUFBSSxDQUFJLEdBQUcsWUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQUcsQ0FBQyxDQUFDO2FBQzVDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBakZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsb0JBQW9CO2dCQUpwQixVQUFVOzs7eUJBRG5CO0NBMEZDLEFBbEZELElBa0ZDO1NBL0VZLGNBQWM7Ozs7OztJQUN6Qix3Q0FBNEI7Ozs7O0lBRWhCLGdDQUFvQzs7Ozs7SUFBRSw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVyLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBvbGxvUHJvdmlkZXIgaW1wbGVtZW50cyBDb21tdW5pY2F0aW9uUHJvdmlkZXIge1xyXG4gIHByaXZhdGUgcHJvdmlkZXJDb25maWc6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMucHJvdmlkZXJDb25maWcgPSB0aGlzLmNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKS5wcm92aWRlcnMuYXBvbGxvO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdObyBjb25maWcgZm91bmQgZm9yIGFwb2xsbyBwcm92aWRlciEnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBwYXJhbXMsIG1ldGhvZCwgaHR0cE9wdGlvbnMgfSA9IG9wdGlvbnM7XHJcbiAgICBsZXQgcXVlcnkgPSBBcG9sbG9Qcm92aWRlckNvbmZpZ1tyZXF1ZXN0SWRdO1xyXG5cclxuICAgIGlmICh0aGlzLnByb3ZpZGVyQ29uZmlnLmNvbmZpZyAmJiB0aGlzLnByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdKSB7XHJcbiAgICAgIHF1ZXJ5ID0gdGhpcy5wcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXTtcclxuICAgIH1cclxuXHJcbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xyXG4gICAgY29uc3QgeyBxdWVyeU5hbWUgfSA9IHF1ZXJ5O1xyXG4gICAgbGV0IHsgcXVlcnlCb2R5IH0gPSBxdWVyeTtcclxuXHJcbiAgICAvLyBjb25maWcgcXVlcnkgY29udHJvbFxyXG4gICAgaWYgKCFxdWVyeU5hbWUgfHwgIXF1ZXJ5Qm9keSkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgTm8gY29uZmlnIGZvdW5kIGZvciByZXF1ZXN0SWQgJyR7cmVxdWVzdElkfSdgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgIGNvbnN0IHBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cihwYXJhbXMpO1xyXG4gICAgICBxdWVyeUJvZHkgPSBxdWVyeUJvZHkucmVwbGFjZSgnX19QQVJBTVNfXycsIHBhcmFtc1N0cik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBxdWVyeUJvZHkgPSBxdWVyeUJvZHkucmVwbGFjZSgnKF9fUEFSQU1TX18pJywgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzb3VyY2UkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gICAgaWYgKG1ldGhvZCAmJiBtZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgIHNvdXJjZSQgPSB0aGlzLmh0dHAuZ2V0KHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgdGhpcy5wcm92aWRlckNvbmZpZy5iYXNlVXJsLFxyXG4gICAgICAgIHsgcXVlcnk6IHF1ZXJ5Qm9keSB9LFxyXG4gICAgICAgIGh0dHBPcHRpb25zLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzb3VyY2UkLnBpcGUobWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5kYXRhW3F1ZXJ5TmFtZV0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVBhcmFtc1N0cihwYXJhbXMpIHtcclxuICAgIGNvbnN0IHBhcmFtc1N0ciA9IFtdO1xyXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW2tleV0pKSB7XHJcbiAgICAgICAgY29uc3QgYXJyU3RyID0gW107XHJcbiAgICAgICAgcGFyYW1zW2tleV0uZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViUGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHZhbCk7XHJcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGB7ICR7c3ViUGFyYW1zU3RyfSB9YCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyB8fCB2YWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYXJyU3RyLnB1c2goYCR7dmFsfWApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJyU3RyLnB1c2goYFwiJHt2YWx9XCJgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiBbJHthcnJTdHIuam9pbignLCcpfV1gKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdvYmplY3QnICYmIHBhcmFtc1trZXldKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViUGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHBhcmFtc1trZXldKTtcclxuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiB7ICR7c3ViUGFyYW1zU3RyfSB9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnc3RyaW5nJyAmJiBrZXkuaW5kZXhPZignJCcpID09PSAwKSB7XHJcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5LnJlcGxhY2UoJyQnLCAnJyl9OiAke3BhcmFtc1trZXldfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHBhcmFtc1trZXldID09PSAnYm9vbGVhbicgfHwgcGFyYW1zW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiAke3BhcmFtc1trZXldfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06IFwiJHtwYXJhbXNba2V5XX1cImApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwYXJhbXNTdHIuam9pbignICcpO1xyXG4gIH1cclxufVxyXG4iXX0=