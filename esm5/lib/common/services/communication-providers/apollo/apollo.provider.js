/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/communication-providers/apollo/apollo.provider.ts
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
        var queryName = query.queryName, queryBody = query.queryBody;
        // config query control
        if (!queryName || !queryBody)
            throw Error("No config found for requestId \"" + requestId + "\"");
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
                    if (typeof (val) === 'object') {
                        /** @type {?} */
                        var subParamsStr = _this.makeParamsStr(val);
                        arrStr_1.push("{ " + subParamsStr + " }");
                    }
                    else {
                        if (!isNaN(val))
                            arrStr_1.push("" + val);
                        else
                            arrStr_1.push("\"" + val + "\"");
                    }
                }));
                paramsStr.push(key + ": [" + arrStr_1.join(',') + "]");
            }
            else if (typeof (params[key]) === 'object' && params[key]) {
                /** @type {?} */
                var subParamsStr = _this.makeParamsStr(params[key]);
                paramsStr.push(key + ": { " + subParamsStr + " }");
            }
            else if (typeof (params[key]) === 'string' && key.indexOf('$') === 0) {
                paramsStr.push(key.replace('$', '') + ": " + params[key]);
            }
            else {
                if (!isNaN(params[key]))
                    paramsStr.push(key + ": " + params[key]);
                else
                    paramsStr.push(key + ": \"" + params[key] + "\"");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vYXBvbGxvLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUlyQztJQU1FLHdCQUNVLE1BQTRCLEVBQzVCLElBQWdCO1FBRGhCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFeEIsSUFBSTtZQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUN6RTtRQUFDLE9BQU0sR0FBRyxFQUFFO1lBQ1gsTUFBTSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7OztJQUVELGlDQUFROzs7OztJQUFSLFVBQVMsU0FBUyxFQUFFLE9BQU87UUFDakIsSUFBQSx1QkFBTSxFQUFFLHVCQUFNLEVBQUUsaUNBQVc7O1lBQy9CLEtBQUssR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUM7UUFFM0MsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBQztZQUNyRSxL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Q0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUM7Z0JBQ2xFLFNBQVMsQ0FBQyxJQUFJLENBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFVBQUssTUFBTSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7YUFDM0Q7aUJBQU07Z0JBQ0wsSUFBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQUUsU0FBUyxDQUFDLElBQUksQ0FBSSxHQUFHLFVBQUssTUFBTSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7O29CQUM1RCxTQUFTLENBQUMsSUFBSSxDQUFJLEdBQUcsWUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQUcsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBN0VGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsb0JBQW9CO2dCQUZwQixVQUFVOzs7eUJBRG5CO0NBd0ZDLEFBL0VELElBK0VDO1NBNUVZLGNBQWM7Ozs7OztJQUN6Qix3Q0FBNEI7Ozs7O0lBRzFCLGdDQUFvQzs7Ozs7SUFDcEMsOEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJQ29tbXVuaWNhdGlvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFwb2xsb1Byb3ZpZGVyIGltcGxlbWVudHMgSUNvbW11bmljYXRpb25Qcm92aWRlciB7XG4gIHByaXZhdGUgcHJvdmlkZXJDb25maWc6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICApIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5wcm92aWRlckNvbmZpZyA9IHRoaXMuY29uZmlnLmdldCgnY29tbXVuaWNhdGlvbicpLnByb3ZpZGVycy5hcG9sbG87XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIHRocm93IEVycm9yKCdObyBjb25maWcgZm91bmQgZm9yIGFwb2xsbyBwcm92aWRlciEnKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnMpe1xuICAgIGNvbnN0IHsgcGFyYW1zLCBtZXRob2QsIGh0dHBPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGxldCBxdWVyeSA9IEFwb2xsb1Byb3ZpZGVyQ29uZmlnW3JlcXVlc3RJZF07XG5cbiAgICBpZih0aGlzLnByb3ZpZGVyQ29uZmlnLmNvbmZpZyAmJiB0aGlzLnByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdKXtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5wcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xuICAgIGxldCB7IHF1ZXJ5TmFtZSwgcXVlcnlCb2R5IH0gPSBxdWVyeTtcblxuICAgIC8vIGNvbmZpZyBxdWVyeSBjb250cm9sXG4gICAgaWYoIXF1ZXJ5TmFtZSB8fCAhcXVlcnlCb2R5KSB0aHJvdyBFcnJvcihgTm8gY29uZmlnIGZvdW5kIGZvciByZXF1ZXN0SWQgXCIke3JlcXVlc3RJZH1cImApO1xuXG4gICAgaWYocGFyYW1zKXtcbiAgICAgIGxldCBwYXJhbXNTdHIgPSB0aGlzLm1ha2VQYXJhbXNTdHIocGFyYW1zKTtcbiAgICAgIHF1ZXJ5Qm9keSA9IHF1ZXJ5Qm9keS5yZXBsYWNlKCdfX1BBUkFNU19fJywgcGFyYW1zU3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlCb2R5ID0gcXVlcnlCb2R5LnJlcGxhY2UoJyhfX1BBUkFNU19fKScsICcnKTtcbiAgICB9XG5cbiAgICBsZXQgc291cmNlJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgaWYobWV0aG9kICYmIG1ldGhvZCA9PT0gJ0dFVCcpe1xuICAgICAgc291cmNlJCA9IHRoaXMuaHR0cC5nZXQodGhpcy5wcm92aWRlckNvbmZpZy5iYXNlVXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlJCA9IHRoaXMuaHR0cC5wb3N0KHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCwgeyBxdWVyeTogcXVlcnlCb2R5IH0sIGh0dHBPcHRpb25zKTsgIFxuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2UkLnBpcGUoXG4gICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmRhdGFbcXVlcnlOYW1lXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlUGFyYW1zU3RyKHBhcmFtcyl7XG4gICAgbGV0IHBhcmFtc1N0ciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYoQXJyYXkuaXNBcnJheShwYXJhbXNba2V5XSkpe1xuICAgICAgICBsZXQgYXJyU3RyID0gW107XG4gICAgICAgIHBhcmFtc1trZXldLmZvckVhY2goIHZhbCA9PiB7XG4gICAgICAgICAgaWYodHlwZW9mKHZhbCk9PT0nb2JqZWN0Jyl7XG4gICAgICAgICAgICBsZXQgc3ViUGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHZhbCk7XG4gICAgICAgICAgICBhcnJTdHIucHVzaChgeyAke3N1YlBhcmFtc1N0cn0gfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZighaXNOYU4odmFsKSkgYXJyU3RyLnB1c2goYCR7dmFsfWApO1xuICAgICAgICAgICAgZWxzZSBhcnJTdHIucHVzaChgXCIke3ZhbH1cImApXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogWyR7YXJyU3RyLmpvaW4oJywnKX1dYCk7XG4gICAgICB9IGVsc2UgaWYoIHR5cGVvZihwYXJhbXNba2V5XSk9PT0nb2JqZWN0JyAmJiBwYXJhbXNba2V5XSApe1xuICAgICAgICAgIGxldCBzdWJQYXJhbXNTdHIgPSB0aGlzLm1ha2VQYXJhbXNTdHIocGFyYW1zW2tleV0pO1xuICAgICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06IHsgJHtzdWJQYXJhbXNTdHJ9IH1gKTtcbiAgICAgIH0gZWxzZSBpZiggdHlwZW9mKHBhcmFtc1trZXldKT09PSdzdHJpbmcnICYmIGtleS5pbmRleE9mKCckJykgPT09IDApe1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXkucmVwbGFjZSgnJCcsICcnKX06ICR7cGFyYW1zW2tleV19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZighaXNOYU4ocGFyYW1zW2tleV0pKSBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiAke3BhcmFtc1trZXldfWApO1xuICAgICAgICBlbHNlIHBhcmFtc1N0ci5wdXNoKGAke2tleX06IFwiJHtwYXJhbXNba2V5XX1cImApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwYXJhbXNTdHIuam9pbignICcpO1xuICB9XG5cbn1cbiJdfQ==