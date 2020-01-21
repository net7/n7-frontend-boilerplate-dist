/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApolloProviderConfig } from './config';
import { ConfigurationService } from '../../configuration.service';
import { map } from 'rxjs/operators';
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
                    else {
                        if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
                            arrStr_1.push("" + val);
                        }
                        else {
                            arrStr_1.push("\"" + val + "\"");
                        }
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
            else {
                if (typeof params[key] === 'number' || typeof params[key] === 'boolean' || params[key] === null) {
                    paramsStr.push(key + ": " + params[key]);
                }
                else {
                    paramsStr.push(key + ": \"" + params[key] + "\"");
                }
            }
        }));
        return paramsStr.join(' ');
    };
    ApolloProvider.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vYXBvbGxvLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBR3JDO0lBTUUsd0JBQW9CLE1BQTRCLEVBQVUsSUFBZ0I7UUFBdEQsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ3hFLElBQUk7WUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDekU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE1BQU0sS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCxpQ0FBUTs7Ozs7SUFBUixVQUFTLFNBQVMsRUFBRSxPQUFPO1FBQ2pCLElBQUEsdUJBQU0sRUFBRSx1QkFBTSxFQUFFLGlDQUFXOztZQUMvQixLQUFLLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBRTNDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkUsS0FB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QU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BFLFNBQVMsQ0FBQyxJQUFJLENBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFVBQUssTUFBTSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7YUFDM0Q7aUJBQU07Z0JBQ0wsSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQy9GLFNBQVMsQ0FBQyxJQUFJLENBQUksR0FBRyxVQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUcsQ0FBQyxDQUFDO2lCQUMxQztxQkFBTTtvQkFDTCxTQUFTLENBQUMsSUFBSSxDQUFJLEdBQUcsWUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQUcsQ0FBQyxDQUFDO2lCQUM1QzthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBckZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsb0JBQW9CO2dCQUZwQixVQUFVOzs7eUJBRG5CO0NBOEZDLEFBdEZELElBc0ZDO1NBbkZZLGNBQWM7Ozs7OztJQUN6Qix3Q0FBNEI7Ozs7O0lBRWhCLGdDQUFvQzs7Ozs7SUFBRSw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJQ29tbXVuaWNhdGlvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcG9sbG9Qcm92aWRlciBpbXBsZW1lbnRzIElDb21tdW5pY2F0aW9uUHJvdmlkZXIge1xuICBwcml2YXRlIHByb3ZpZGVyQ29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5wcm92aWRlckNvbmZpZyA9IHRoaXMuY29uZmlnLmdldCgnY29tbXVuaWNhdGlvbicpLnByb3ZpZGVycy5hcG9sbG87XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBFcnJvcignTm8gY29uZmlnIGZvdW5kIGZvciBhcG9sbG8gcHJvdmlkZXIhJyk7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdCQocmVxdWVzdElkLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBwYXJhbXMsIG1ldGhvZCwgaHR0cE9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgbGV0IHF1ZXJ5ID0gQXBvbGxvUHJvdmlkZXJDb25maWdbcmVxdWVzdElkXTtcblxuICAgIGlmICh0aGlzLnByb3ZpZGVyQ29uZmlnLmNvbmZpZyAmJiB0aGlzLnByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdKSB7XG4gICAgICBxdWVyeSA9IHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF07XG4gICAgfVxuXG4gICAgcXVlcnkgPSBxdWVyeSB8fCB7fTtcbiAgICBjb25zdCB7IHF1ZXJ5TmFtZSB9ID0gcXVlcnk7XG4gICAgbGV0IHsgcXVlcnlCb2R5IH0gPSBxdWVyeTtcblxuICAgIC8vIGNvbmZpZyBxdWVyeSBjb250cm9sXG4gICAgaWYgKCFxdWVyeU5hbWUgfHwgIXF1ZXJ5Qm9keSkge1xuICAgICAgdGhyb3cgRXJyb3IoYE5vIGNvbmZpZyBmb3VuZCBmb3IgcmVxdWVzdElkICcke3JlcXVlc3RJZH0nYCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgY29uc3QgcGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHBhcmFtcyk7XG4gICAgICBxdWVyeUJvZHkgPSBxdWVyeUJvZHkucmVwbGFjZSgnX19QQVJBTVNfXycsIHBhcmFtc1N0cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5Qm9keSA9IHF1ZXJ5Qm9keS5yZXBsYWNlKCcoX19QQVJBTVNfXyknLCAnJyk7XG4gICAgfVxuXG4gICAgbGV0IHNvdXJjZSQ6IE9ic2VydmFibGU8YW55PjtcblxuICAgIGlmIChtZXRob2QgJiYgbWV0aG9kID09PSAnR0VUJykge1xuICAgICAgc291cmNlJCA9IHRoaXMuaHR0cC5nZXQodGhpcy5wcm92aWRlckNvbmZpZy5iYXNlVXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlJCA9IHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICB0aGlzLnByb3ZpZGVyQ29uZmlnLmJhc2VVcmwsXG4gICAgICAgIHsgcXVlcnk6IHF1ZXJ5Qm9keSB9LFxuICAgICAgICBodHRwT3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlJC5waXBlKG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuZGF0YVtxdWVyeU5hbWVdKSk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VQYXJhbXNTdHIocGFyYW1zKSB7XG4gICAgY29uc3QgcGFyYW1zU3RyID0gW107XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNba2V5XSkpIHtcbiAgICAgICAgY29uc3QgYXJyU3RyID0gW107XG4gICAgICAgIHBhcmFtc1trZXldLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YlBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cih2YWwpO1xuICAgICAgICAgICAgYXJyU3RyLnB1c2goYHsgJHtzdWJQYXJhbXNTdHJ9IH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyB8fCB2YWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgYXJyU3RyLnB1c2goYCR7dmFsfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXJyU3RyLnB1c2goYFwiJHt2YWx9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiBbJHthcnJTdHIuam9pbignLCcpfV1gKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnb2JqZWN0JyAmJiBwYXJhbXNba2V5XSkge1xuICAgICAgICBjb25zdCBzdWJQYXJhbXNTdHIgPSB0aGlzLm1ha2VQYXJhbXNTdHIocGFyYW1zW2tleV0pO1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiB7ICR7c3ViUGFyYW1zU3RyfSB9YCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ3N0cmluZycgJiYga2V5LmluZGV4T2YoJyQnKSA9PT0gMCkge1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXkucmVwbGFjZSgnJCcsICcnKX06ICR7cGFyYW1zW2tleV19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdib29sZWFuJyB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06ICR7cGFyYW1zW2tleV19YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogXCIke3BhcmFtc1trZXldfVwiYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zU3RyLmpvaW4oJyAnKTtcbiAgfVxufVxuIl19