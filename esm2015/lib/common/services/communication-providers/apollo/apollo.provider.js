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
export class ApolloProvider {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
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
    request$(requestId, options) {
        const { params, method, httpOptions } = options;
        /** @type {?} */
        let query = ApolloProviderConfig[requestId];
        if (this.providerConfig.config && this.providerConfig.config[requestId]) {
            query = this.providerConfig.config[requestId];
        }
        query = query || {};
        let { queryName, queryBody } = query;
        // config query control
        if (!queryName || !queryBody)
            throw Error(`No config found for requestId "${requestId}"`);
        if (params) {
            /** @type {?} */
            let paramsStr = this.makeParamsStr(params);
            queryBody = queryBody.replace('__PARAMS__', paramsStr);
        }
        else {
            queryBody = queryBody.replace('(__PARAMS__)', '');
        }
        /** @type {?} */
        let source$;
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
        (response) => response.data[queryName])));
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    makeParamsStr(params) {
        /** @type {?} */
        let paramsStr = [];
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (Array.isArray(params[key])) {
                /** @type {?} */
                let arrStr = [];
                params[key].forEach((/**
                 * @param {?} val
                 * @return {?}
                 */
                val => {
                    if (typeof (val) === 'object') {
                        /** @type {?} */
                        let subParamsStr = this.makeParamsStr(val);
                        arrStr.push(`{ ${subParamsStr} }`);
                    }
                    else {
                        if (!isNaN(val))
                            arrStr.push(`${val}`);
                        else
                            arrStr.push(`"${val}"`);
                    }
                }));
                paramsStr.push(`${key}: [${arrStr.join(',')}]`);
            }
            else if (typeof (params[key]) === 'object' && params[key]) {
                /** @type {?} */
                let subParamsStr = this.makeParamsStr(params[key]);
                paramsStr.push(`${key}: { ${subParamsStr} }`);
            }
            else if (typeof (params[key]) === 'string' && key.indexOf('$') === 0) {
                paramsStr.push(`${key.replace('$', '')}: ${params[key]}`);
            }
            else {
                if (!isNaN(params[key]))
                    paramsStr.push(`${key}: ${params[key]}`);
                else
                    paramsStr.push(`${key}: "${params[key]}"`);
            }
        }));
        return paramsStr.join(' ');
    }
}
ApolloProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApolloProvider.ctorParameters = () => [
    { type: ConfigurationService },
    { type: HttpClient }
];
/** @nocollapse */ ApolloProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(i0.ɵɵinject(i1.ConfigurationService), i0.ɵɵinject(i2.HttpClient)); }, token: ApolloProvider, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vYXBvbGxvLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUE7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU9yQyxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFHekIsWUFDVSxNQUE0QixFQUM1QixJQUFnQjtRQURoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRXhCLElBQUk7WUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDekU7UUFBQyxPQUFNLEdBQUcsRUFBRTtZQUNYLE1BQU0sS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQU87Y0FDbkIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU87O1lBQzNDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUM7UUFFM0MsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxT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QUcsUUFBUSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFDO2dCQUNsRSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzRDtpQkFBTTtnQkFDTCxJQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7O29CQUM1RCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUE3RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsb0JBQW9CO1lBRnBCLFVBQVU7Ozs7Ozs7O0lBWWpCLHdDQUE0Qjs7Ozs7SUFHMUIsZ0NBQW9DOzs7OztJQUNwQyw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElDb21tdW5pY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBvbGxvUHJvdmlkZXIgaW1wbGVtZW50cyBJQ29tbXVuaWNhdGlvblByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBwcm92aWRlckNvbmZpZzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnByb3ZpZGVyQ29uZmlnID0gdGhpcy5jb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJykucHJvdmlkZXJzLmFwb2xsbztcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgdGhyb3cgRXJyb3IoJ05vIGNvbmZpZyBmb3VuZCBmb3IgYXBvbGxvIHByb3ZpZGVyIScpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3QkKHJlcXVlc3RJZCwgb3B0aW9ucyl7XG4gICAgY29uc3QgeyBwYXJhbXMsIG1ldGhvZCwgaHR0cE9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgbGV0IHF1ZXJ5ID0gQXBvbGxvUHJvdmlkZXJDb25maWdbcmVxdWVzdElkXTtcblxuICAgIGlmKHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnICYmIHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF0pe1xuICAgICAgcXVlcnkgPSB0aGlzLnByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcXVlcnkgfHwge307XG4gICAgbGV0IHsgcXVlcnlOYW1lLCBxdWVyeUJvZHkgfSA9IHF1ZXJ5O1xuXG4gICAgLy8gY29uZmlnIHF1ZXJ5IGNvbnRyb2xcbiAgICBpZighcXVlcnlOYW1lIHx8ICFxdWVyeUJvZHkpIHRocm93IEVycm9yKGBObyBjb25maWcgZm91bmQgZm9yIHJlcXVlc3RJZCBcIiR7cmVxdWVzdElkfVwiYCk7XG5cbiAgICBpZihwYXJhbXMpe1xuICAgICAgbGV0IHBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cihwYXJhbXMpO1xuICAgICAgcXVlcnlCb2R5ID0gcXVlcnlCb2R5LnJlcGxhY2UoJ19fUEFSQU1TX18nLCBwYXJhbXNTdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeUJvZHkgPSBxdWVyeUJvZHkucmVwbGFjZSgnKF9fUEFSQU1TX18pJywgJycpO1xuICAgIH1cblxuICAgIGxldCBzb3VyY2UkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBpZihtZXRob2QgJiYgbWV0aG9kID09PSAnR0VUJyl7XG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLmdldCh0aGlzLnByb3ZpZGVyQ29uZmlnLmJhc2VVcmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLnBvc3QodGhpcy5wcm92aWRlckNvbmZpZy5iYXNlVXJsLCB7IHF1ZXJ5OiBxdWVyeUJvZHkgfSwgaHR0cE9wdGlvbnMpOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZSQucGlwZShcbiAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuZGF0YVtxdWVyeU5hbWVdKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VQYXJhbXNTdHIocGFyYW1zKXtcbiAgICBsZXQgcGFyYW1zU3RyID0gW107XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZihBcnJheS5pc0FycmF5KHBhcmFtc1trZXldKSl7XG4gICAgICAgIGxldCBhcnJTdHIgPSBbXTtcbiAgICAgICAgcGFyYW1zW2tleV0uZm9yRWFjaCggdmFsID0+IHtcbiAgICAgICAgICBpZih0eXBlb2YodmFsKT09PSdvYmplY3QnKXtcbiAgICAgICAgICAgIGxldCBzdWJQYXJhbXNTdHIgPSB0aGlzLm1ha2VQYXJhbXNTdHIodmFsKTtcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGB7ICR7c3ViUGFyYW1zU3RyfSB9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKCFpc05hTih2YWwpKSBhcnJTdHIucHVzaChgJHt2YWx9YCk7XG4gICAgICAgICAgICBlbHNlIGFyclN0ci5wdXNoKGBcIiR7dmFsfVwiYClcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiBbJHthcnJTdHIuam9pbignLCcpfV1gKTtcbiAgICAgIH0gZWxzZSBpZiggdHlwZW9mKHBhcmFtc1trZXldKT09PSdvYmplY3QnICYmIHBhcmFtc1trZXldICl7XG4gICAgICAgICAgbGV0IHN1YlBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cihwYXJhbXNba2V5XSk7XG4gICAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogeyAke3N1YlBhcmFtc1N0cn0gfWApO1xuICAgICAgfSBlbHNlIGlmKCB0eXBlb2YocGFyYW1zW2tleV0pPT09J3N0cmluZycgJiYga2V5LmluZGV4T2YoJyQnKSA9PT0gMCl7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleS5yZXBsYWNlKCckJywgJycpfTogJHtwYXJhbXNba2V5XX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKCFpc05hTihwYXJhbXNba2V5XSkpIHBhcmFtc1N0ci5wdXNoKGAke2tleX06ICR7cGFyYW1zW2tleV19YCk7XG4gICAgICAgIGVsc2UgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogXCIke3BhcmFtc1trZXldfVwiYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcmFtc1N0ci5qb2luKCcgJyk7XG4gIH1cblxufVxuIl19