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
export class ApolloProvider {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} providerConfig
     * @param {?} requestId
     * @param {?} options
     * @return {?}
     */
    request$(providerConfig, requestId, options) {
        const { params, method, httpOptions } = options;
        /** @type {?} */
        let query;
        if (providerConfig.config && providerConfig.config[requestId]) {
            query = providerConfig.config[requestId];
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
            source$ = this.http.get(providerConfig.baseUrl);
        }
        else {
            source$ = this.http.post(providerConfig.baseUrl, { query: queryBody }, httpOptions);
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
    { type: HttpClient }
];
/** @nocollapse */ ApolloProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(i0.ɵɵinject(i1.HttpClient)); }, token: ApolloProvider, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApolloProvider.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8ucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU9yQyxNQUFNLE9BQU8sY0FBYzs7OztJQUN6QixZQUNVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDdkIsQ0FBQzs7Ozs7OztJQUVKLFFBQVEsQ0FBQyxjQUFjLEVBQUUsU0FBaUIsRUFBRSxPQUFPO2NBQzNDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPOztZQUMzQyxLQUFLO1FBRVQsSUFBSSxjQUFjLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDN0QsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUM7UUFFRCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztjQUNkLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSztZQUN2QixFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUs7UUFFekIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUIsTUFBTSxLQUFLLENBQUMsa0NBQWtDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLE1BQU0sRUFBRTs7a0JBQ0osU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFD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RyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBM0VGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFVBQVU7Ozs7Ozs7O0lBVWYsOEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbW11bmljYXRpb25Qcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXBvbGxvUHJvdmlkZXIgaW1wbGVtZW50cyBDb21tdW5pY2F0aW9uUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgKSB7fVxuXG4gIHJlcXVlc3QkKHByb3ZpZGVyQ29uZmlnLCByZXF1ZXN0SWQ6IHN0cmluZywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgcGFyYW1zLCBtZXRob2QsIGh0dHBPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGxldCBxdWVyeTtcblxuICAgIGlmIChwcm92aWRlckNvbmZpZy5jb25maWcgJiYgcHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF0pIHtcbiAgICAgIHF1ZXJ5ID0gcHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF07XG4gICAgfVxuXG4gICAgcXVlcnkgPSBxdWVyeSB8fCB7fTtcbiAgICBjb25zdCB7IHF1ZXJ5TmFtZSB9ID0gcXVlcnk7XG4gICAgbGV0IHsgcXVlcnlCb2R5IH0gPSBxdWVyeTtcblxuICAgIC8vIGNvbmZpZyBxdWVyeSBjb250cm9sXG4gICAgaWYgKCFxdWVyeU5hbWUgfHwgIXF1ZXJ5Qm9keSkge1xuICAgICAgdGhyb3cgRXJyb3IoYE5vIGNvbmZpZyBmb3VuZCBmb3IgcmVxdWVzdElkICcke3JlcXVlc3RJZH0nYCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgY29uc3QgcGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHBhcmFtcyk7XG4gICAgICBxdWVyeUJvZHkgPSBxdWVyeUJvZHkucmVwbGFjZSgnX19QQVJBTVNfXycsIHBhcmFtc1N0cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5Qm9keSA9IHF1ZXJ5Qm9keS5yZXBsYWNlKCcoX19QQVJBTVNfXyknLCAnJyk7XG4gICAgfVxuXG4gICAgbGV0IHNvdXJjZSQ6IE9ic2VydmFibGU8YW55PjtcblxuICAgIGlmIChtZXRob2QgJiYgbWV0aG9kID09PSAnR0VUJykge1xuICAgICAgc291cmNlJCA9IHRoaXMuaHR0cC5nZXQocHJvdmlkZXJDb25maWcuYmFzZVVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvdXJjZSQgPSB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgcHJvdmlkZXJDb25maWcuYmFzZVVybCxcbiAgICAgICAgeyBxdWVyeTogcXVlcnlCb2R5IH0sXG4gICAgICAgIGh0dHBPcHRpb25zLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlJC5waXBlKG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuZGF0YVtxdWVyeU5hbWVdKSk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VQYXJhbXNTdHIocGFyYW1zKSB7XG4gICAgY29uc3QgcGFyYW1zU3RyID0gW107XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1trZXldKSkge1xuICAgICAgICBjb25zdCBhcnJTdHIgPSBbXTtcbiAgICAgICAgcGFyYW1zW2tleV0uZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJQYXJhbXNTdHIgPSB0aGlzLm1ha2VQYXJhbXNTdHIodmFsKTtcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGB7ICR7c3ViUGFyYW1zU3RyfSB9YCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICBhcnJTdHIucHVzaChgJHt2YWx9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGBcIiR7dmFsfVwiYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogWyR7YXJyU3RyLmpvaW4oJywnKX1dYCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ29iamVjdCcgJiYgcGFyYW1zW2tleV0pIHtcbiAgICAgICAgY29uc3Qgc3ViUGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHBhcmFtc1trZXldKTtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogeyAke3N1YlBhcmFtc1N0cn0gfWApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdzdHJpbmcnICYmIGtleS5pbmRleE9mKCckJykgPT09IDApIHtcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5LnJlcGxhY2UoJyQnLCAnJyl9OiAke3BhcmFtc1trZXldfWApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdudW1iZXInIHx8IHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ2Jvb2xlYW4nIHx8IHBhcmFtc1trZXldID09PSBudWxsKSB7XG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06ICR7cGFyYW1zW2tleV19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiBcIiR7cGFyYW1zW2tleV19XCJgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zU3RyLmpvaW4oJyAnKTtcbiAgfVxufVxuIl19