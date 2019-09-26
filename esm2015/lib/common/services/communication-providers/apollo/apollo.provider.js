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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8vYXBvbGxvLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBT3JDLE1BQU0sT0FBTyxjQUFjOzs7OztJQUd6QixZQUNVLE1BQTRCLEVBQzVCLElBQWdCO1FBRGhCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFeEIsSUFBSTtZQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUN6RTtRQUFDLE9BQU0sR0FBRyxFQUFFO1lBQ1gsTUFBTSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTztjQUNuQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTzs7WUFDM0MsS0FBSyxHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztRQUUzQyxJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNB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RyxRQUFRLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUM7Z0JBQ2xFLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNMLElBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7b0JBQzVELFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqRDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQTdFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFSUSxvQkFBb0I7WUFGcEIsVUFBVTs7Ozs7Ozs7SUFZakIsd0NBQTRCOzs7OztJQUcxQixnQ0FBb0M7Ozs7O0lBQ3BDLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNvbW11bmljYXRpb25Qcm92aWRlciB9IGZyb20gJy4uL2NvbW11bmljYXRpb24tcHJvdmlkZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcG9sbG9Qcm92aWRlciBpbXBsZW1lbnRzIElDb21tdW5pY2F0aW9uUHJvdmlkZXIge1xuICBwcml2YXRlIHByb3ZpZGVyQ29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucHJvdmlkZXJDb25maWcgPSB0aGlzLmNvbmZpZy5nZXQoJ2NvbW11bmljYXRpb24nKS5wcm92aWRlcnMuYXBvbGxvO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICB0aHJvdyBFcnJvcignTm8gY29uZmlnIGZvdW5kIGZvciBhcG9sbG8gcHJvdmlkZXIhJyk7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdCQocmVxdWVzdElkLCBvcHRpb25zKXtcbiAgICBjb25zdCB7IHBhcmFtcywgbWV0aG9kLCBodHRwT3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgICBsZXQgcXVlcnkgPSBBcG9sbG9Qcm92aWRlckNvbmZpZ1tyZXF1ZXN0SWRdO1xuXG4gICAgaWYodGhpcy5wcm92aWRlckNvbmZpZy5jb25maWcgJiYgdGhpcy5wcm92aWRlckNvbmZpZy5jb25maWdbcmVxdWVzdElkXSl7XG4gICAgICBxdWVyeSA9IHRoaXMucHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF07XG4gICAgfVxuXG4gICAgcXVlcnkgPSBxdWVyeSB8fCB7fTtcbiAgICBsZXQgeyBxdWVyeU5hbWUsIHF1ZXJ5Qm9keSB9ID0gcXVlcnk7XG5cbiAgICAvLyBjb25maWcgcXVlcnkgY29udHJvbFxuICAgIGlmKCFxdWVyeU5hbWUgfHwgIXF1ZXJ5Qm9keSkgdGhyb3cgRXJyb3IoYE5vIGNvbmZpZyBmb3VuZCBmb3IgcmVxdWVzdElkIFwiJHtyZXF1ZXN0SWR9XCJgKTtcblxuICAgIGlmKHBhcmFtcyl7XG4gICAgICBsZXQgcGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHBhcmFtcyk7XG4gICAgICBxdWVyeUJvZHkgPSBxdWVyeUJvZHkucmVwbGFjZSgnX19QQVJBTVNfXycsIHBhcmFtc1N0cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5Qm9keSA9IHF1ZXJ5Qm9keS5yZXBsYWNlKCcoX19QQVJBTVNfXyknLCAnJyk7XG4gICAgfVxuXG4gICAgbGV0IHNvdXJjZSQ6IE9ic2VydmFibGU8YW55PjtcblxuICAgIGlmKG1ldGhvZCAmJiBtZXRob2QgPT09ICdHRVQnKXtcbiAgICAgIHNvdXJjZSQgPSB0aGlzLmh0dHAuZ2V0KHRoaXMucHJvdmlkZXJDb25maWcuYmFzZVVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvdXJjZSQgPSB0aGlzLmh0dHAucG9zdCh0aGlzLnByb3ZpZGVyQ29uZmlnLmJhc2VVcmwsIHsgcXVlcnk6IHF1ZXJ5Qm9keSB9LCBodHRwT3B0aW9ucyk7ICBcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlJC5waXBlKFxuICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5kYXRhW3F1ZXJ5TmFtZV0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVBhcmFtc1N0cihwYXJhbXMpe1xuICAgIGxldCBwYXJhbXNTdHIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkocGFyYW1zW2tleV0pKXtcbiAgICAgICAgbGV0IGFyclN0ciA9IFtdO1xuICAgICAgICBwYXJhbXNba2V5XS5mb3JFYWNoKCB2YWwgPT4ge1xuICAgICAgICAgIGlmKHR5cGVvZih2YWwpPT09J29iamVjdCcpe1xuICAgICAgICAgICAgbGV0IHN1YlBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cih2YWwpO1xuICAgICAgICAgICAgYXJyU3RyLnB1c2goYHsgJHtzdWJQYXJhbXNTdHJ9IH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoIWlzTmFOKHZhbCkpIGFyclN0ci5wdXNoKGAke3ZhbH1gKTtcbiAgICAgICAgICAgIGVsc2UgYXJyU3RyLnB1c2goYFwiJHt2YWx9XCJgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06IFske2FyclN0ci5qb2luKCcsJyl9XWApO1xuICAgICAgfSBlbHNlIGlmKCB0eXBlb2YocGFyYW1zW2tleV0pPT09J29iamVjdCcgJiYgcGFyYW1zW2tleV0gKXtcbiAgICAgICAgICBsZXQgc3ViUGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHBhcmFtc1trZXldKTtcbiAgICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiB7ICR7c3ViUGFyYW1zU3RyfSB9YCk7XG4gICAgICB9IGVsc2UgaWYoIHR5cGVvZihwYXJhbXNba2V5XSk9PT0nc3RyaW5nJyAmJiBrZXkuaW5kZXhPZignJCcpID09PSAwKXtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5LnJlcGxhY2UoJyQnLCAnJyl9OiAke3BhcmFtc1trZXldfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoIWlzTmFOKHBhcmFtc1trZXldKSkgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogJHtwYXJhbXNba2V5XX1gKTtcbiAgICAgICAgZWxzZSBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiBcIiR7cGFyYW1zW2tleV19XCJgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zU3RyLmpvaW4oJyAnKTtcbiAgfVxuXG59XG4iXX0=