/**
 * @fileoverview added by tsickle
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
        const { queryName } = query;
        let { queryBody } = query;
        // config query control
        if (!queryName || !queryBody) {
            throw Error(`No config found for requestId '${requestId}'`);
        }
        if (params) {
            /** @type {?} */
            const paramsStr = this.makeParamsStr(params);
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
        const paramsStr = [];
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (Array.isArray(params[key])) {
                /** @type {?} */
                const arrStr = [];
                params[key].forEach((/**
                 * @param {?} val
                 * @return {?}
                 */
                (val) => {
                    if (typeof val === 'object') {
                        /** @type {?} */
                        const subParamsStr = this.makeParamsStr(val);
                        arrStr.push(`{ ${subParamsStr} }`);
                    }
                    else if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
                        arrStr.push(`${val}`);
                    }
                    else {
                        arrStr.push(`"${val}"`);
                    }
                }));
                paramsStr.push(`${key}: [${arrStr.join(',')}]`);
            }
            else if (typeof params[key] === 'object' && params[key]) {
                /** @type {?} */
                const subParamsStr = this.makeParamsStr(params[key]);
                paramsStr.push(`${key}: { ${subParamsStr} }`);
            }
            else if (typeof params[key] === 'string' && key.indexOf('$') === 0) {
                paramsStr.push(`${key.replace('$', '')}: ${params[key]}`);
            }
            else if (typeof params[key] === 'number' || typeof params[key] === 'boolean' || params[key] === null) {
                paramsStr.push(`${key}: ${params[key]}`);
            }
            else {
                paramsStr.push(`${key}: "${params[key]}"`);
            }
        }));
        return paramsStr.join(' ');
    }
}
ApolloProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vYXBvbGxvLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBTW5FLE1BQU0sT0FBTyxjQUFjOzs7OztJQUd6QixZQUFvQixNQUE0QixFQUFVLElBQWdCO1FBQXRELFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUN4RSxJQUFJO1lBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQ3pFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixNQUFNLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFNBQVMsRUFBRSxPQUFPO2NBQ25CLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPOztZQUMzQyxLQUFLLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBRTNDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FB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QVksSUFBSSxDQUFDLENBQUM7YUFDL0M7aUJBQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BFLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNEO2lCQUFNLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN0RyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBakZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLG9CQUFvQjtZQUpwQixVQUFVOzs7Ozs7OztJQVdqQix3Q0FBNEI7Ozs7O0lBRWhCLGdDQUFvQzs7Ozs7SUFBRSw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uUHJvdmlkZXIgfSBmcm9tICcuLi9jb21tdW5pY2F0aW9uLXByb3ZpZGVyLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBcG9sbG9Qcm92aWRlciBpbXBsZW1lbnRzIENvbW11bmljYXRpb25Qcm92aWRlciB7XG4gIHByaXZhdGUgcHJvdmlkZXJDb25maWc6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnByb3ZpZGVyQ29uZmlnID0gdGhpcy5jb25maWcuZ2V0KCdjb21tdW5pY2F0aW9uJykucHJvdmlkZXJzLmFwb2xsbztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IEVycm9yKCdObyBjb25maWcgZm91bmQgZm9yIGFwb2xsbyBwcm92aWRlciEnKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0JChyZXF1ZXN0SWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHBhcmFtcywgbWV0aG9kLCBodHRwT3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgICBsZXQgcXVlcnkgPSBBcG9sbG9Qcm92aWRlckNvbmZpZ1tyZXF1ZXN0SWRdO1xuXG4gICAgaWYgKHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnICYmIHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF0pIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5wcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xuICAgIGNvbnN0IHsgcXVlcnlOYW1lIH0gPSBxdWVyeTtcbiAgICBsZXQgeyBxdWVyeUJvZHkgfSA9IHF1ZXJ5O1xuXG4gICAgLy8gY29uZmlnIHF1ZXJ5IGNvbnRyb2xcbiAgICBpZiAoIXF1ZXJ5TmFtZSB8fCAhcXVlcnlCb2R5KSB7XG4gICAgICB0aHJvdyBFcnJvcihgTm8gY29uZmlnIGZvdW5kIGZvciByZXF1ZXN0SWQgJyR7cmVxdWVzdElkfSdgKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBjb25zdCBwYXJhbXNTdHIgPSB0aGlzLm1ha2VQYXJhbXNTdHIocGFyYW1zKTtcbiAgICAgIHF1ZXJ5Qm9keSA9IHF1ZXJ5Qm9keS5yZXBsYWNlKCdfX1BBUkFNU19fJywgcGFyYW1zU3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlCb2R5ID0gcXVlcnlCb2R5LnJlcGxhY2UoJyhfX1BBUkFNU19fKScsICcnKTtcbiAgICB9XG5cbiAgICBsZXQgc291cmNlJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgaWYgKG1ldGhvZCAmJiBtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLmdldCh0aGlzLnByb3ZpZGVyQ29uZmlnLmJhc2VVcmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgIHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCxcbiAgICAgICAgeyBxdWVyeTogcXVlcnlCb2R5IH0sXG4gICAgICAgIGh0dHBPcHRpb25zLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlJC5waXBlKG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuZGF0YVtxdWVyeU5hbWVdKSk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VQYXJhbXNTdHIocGFyYW1zKSB7XG4gICAgY29uc3QgcGFyYW1zU3RyID0gW107XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1trZXldKSkge1xuICAgICAgICBjb25zdCBhcnJTdHIgPSBbXTtcbiAgICAgICAgcGFyYW1zW2tleV0uZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJQYXJhbXNTdHIgPSB0aGlzLm1ha2VQYXJhbXNTdHIodmFsKTtcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGB7ICR7c3ViUGFyYW1zU3RyfSB9YCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICBhcnJTdHIucHVzaChgJHt2YWx9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGBcIiR7dmFsfVwiYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogWyR7YXJyU3RyLmpvaW4oJywnKX1dYCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ29iamVjdCcgJiYgcGFyYW1zW2tleV0pIHtcbiAgICAgICAgY29uc3Qgc3ViUGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHBhcmFtc1trZXldKTtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogeyAke3N1YlBhcmFtc1N0cn0gfWApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdzdHJpbmcnICYmIGtleS5pbmRleE9mKCckJykgPT09IDApIHtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5LnJlcGxhY2UoJyQnLCAnJyl9OiAke3BhcmFtc1trZXldfWApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdudW1iZXInIHx8IHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ2Jvb2xlYW4nIHx8IHBhcmFtc1trZXldID09PSBudWxsKSB7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06ICR7cGFyYW1zW2tleV19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiBcIiR7cGFyYW1zW2tleV19XCJgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zU3RyLmpvaW4oJyAnKTtcbiAgfVxufVxuIl19