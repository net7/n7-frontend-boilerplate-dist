import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../configuration.service";
const DEFAULT_TREE_DEPTH = 15;
export class ApolloProvider {
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    request$(providerConfig, requestId, options) {
        const { params, method, httpOptions } = options;
        const treeDepth = this.configuration.get('treeDepth') || DEFAULT_TREE_DEPTH;
        const config = providerConfig.config ? providerConfig.config(treeDepth) : {};
        let query;
        if (config && config[requestId]) {
            query = config[requestId];
        }
        query = query || {};
        const { queryName } = query;
        let { queryBody } = query;
        // config query control
        if (!queryName || !queryBody) {
            throw Error(`No config found for requestId '${requestId}'`);
        }
        if (params) {
            const paramsStr = this.makeParamsStr(params);
            queryBody = queryBody.replace('__PARAMS__', paramsStr);
        }
        else {
            queryBody = queryBody.replace('(__PARAMS__)', '');
        }
        let source$;
        if (method && method === 'GET') {
            source$ = this.http.get(providerConfig.baseUrl);
        }
        else {
            source$ = this.http.post(providerConfig.baseUrl, { query: queryBody }, httpOptions);
        }
        return source$.pipe(map((response) => response.data[queryName]));
    }
    makeParamsStr(params) {
        const paramsStr = [];
        Object.keys(params).forEach((key) => {
            if (Array.isArray(params[key])) {
                const arrStr = [];
                params[key].forEach((val) => {
                    if (typeof val === 'object') {
                        const subParamsStr = this.makeParamsStr(val);
                        arrStr.push(`{ ${subParamsStr} }`);
                    }
                    else if (typeof val === 'number' || typeof val === 'boolean' || val === null) {
                        arrStr.push(`${val}`);
                    }
                    else {
                        arrStr.push(`"${val}"`);
                    }
                });
                paramsStr.push(`${key}: [${arrStr.join(',')}]`);
            }
            else if (typeof params[key] === 'object' && params[key]) {
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
        });
        return paramsStr.join(' ');
    }
}
ApolloProvider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloProvider, deps: [{ token: i1.HttpClient }, { token: i2.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
ApolloProvider.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloProvider, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ApolloProvider, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.ConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24tcHJvdmlkZXJzL2Fwb2xsby5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUtyQyxNQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUs5QixNQUFNLE9BQU8sY0FBYztJQUN6QixZQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRG5DLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBQzFDLENBQUM7SUFFSixRQUFRLENBQUMsY0FBYyxFQUFFLFNBQWlCLEVBQUUsT0FBTztRQUNqRCxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDaEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksa0JBQWtCLENBQUM7UUFDNUUsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdFLElBQUksS0FBSyxDQUFDO1FBRVYsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQy9CLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0I7UUFFRCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixNQUFNLEVBQUUsU0FBUyxF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QUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEUsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDM0Q7aUJBQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDTCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDOzsyR0EzRVUsY0FBYzsrR0FBZCxjQUFjLGNBRmIsTUFBTTsyRkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25Qcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcblxyXG5jb25zdCBERUZBVUxUX1RSRUVfREVQVEggPSAxNTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcG9sbG9Qcm92aWRlciBpbXBsZW1lbnRzIENvbW11bmljYXRpb25Qcm92aWRlciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgcmVxdWVzdCQocHJvdmlkZXJDb25maWcsIHJlcXVlc3RJZDogc3RyaW5nLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IHBhcmFtcywgbWV0aG9kLCBodHRwT3B0aW9ucyB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IHRyZWVEZXB0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3RyZWVEZXB0aCcpIHx8IERFRkFVTFRfVFJFRV9ERVBUSDtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHByb3ZpZGVyQ29uZmlnLmNvbmZpZyA/IHByb3ZpZGVyQ29uZmlnLmNvbmZpZyh0cmVlRGVwdGgpIDoge307XHJcbiAgICBsZXQgcXVlcnk7XHJcblxyXG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWdbcmVxdWVzdElkXSkge1xyXG4gICAgICBxdWVyeSA9IGNvbmZpZ1tyZXF1ZXN0SWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXJ5ID0gcXVlcnkgfHwge307XHJcbiAgICBjb25zdCB7IHF1ZXJ5TmFtZSB9ID0gcXVlcnk7XHJcbiAgICBsZXQgeyBxdWVyeUJvZHkgfSA9IHF1ZXJ5O1xyXG5cclxuICAgIC8vIGNvbmZpZyBxdWVyeSBjb250cm9sXHJcbiAgICBpZiAoIXF1ZXJ5TmFtZSB8fCAhcXVlcnlCb2R5KSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBObyBjb25maWcgZm91bmQgZm9yIHJlcXVlc3RJZCAnJHtyZXF1ZXN0SWR9J2ApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgY29uc3QgcGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHBhcmFtcyk7XHJcbiAgICAgIHF1ZXJ5Qm9keSA9IHF1ZXJ5Qm9keS5yZXBsYWNlKCdfX1BBUkFNU19fJywgcGFyYW1zU3RyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHF1ZXJ5Qm9keSA9IHF1ZXJ5Qm9keS5yZXBsYWNlKCcoX19QQVJBTVNfXyknLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNvdXJjZSQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgICBpZiAobWV0aG9kICYmIG1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgc291cmNlJCA9IHRoaXMuaHR0cC5nZXQocHJvdmlkZXJDb25maWcuYmFzZVVybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgcHJvdmlkZXJDb25maWcuYmFzZVVybCxcclxuICAgICAgICB7IHF1ZXJ5OiBxdWVyeUJvZHkgfSxcclxuICAgICAgICBodHRwT3B0aW9ucyxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc291cmNlJC5waXBlKG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuZGF0YVtxdWVyeU5hbWVdKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VQYXJhbXNTdHIocGFyYW1zKSB7XHJcbiAgICBjb25zdCBwYXJhbXNTdHIgPSBbXTtcclxuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1trZXldKSkge1xyXG4gICAgICAgIGNvbnN0IGFyclN0ciA9IFtdO1xyXG4gICAgICAgIHBhcmFtc1trZXldLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cih2YWwpO1xyXG4gICAgICAgICAgICBhcnJTdHIucHVzaChgeyAke3N1YlBhcmFtc1N0cn0gfWApO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicgfHwgdmFsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGAke3ZhbH1gKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGBcIiR7dmFsfVwiYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogWyR7YXJyU3RyLmpvaW4oJywnKX1dYCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnb2JqZWN0JyAmJiBwYXJhbXNba2V5XSkge1xyXG4gICAgICAgIGNvbnN0IHN1YlBhcmFtc1N0ciA9IHRoaXMubWFrZVBhcmFtc1N0cihwYXJhbXNba2V5XSk7XHJcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogeyAke3N1YlBhcmFtc1N0cn0gfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ3N0cmluZycgJiYga2V5LmluZGV4T2YoJyQnKSA9PT0gMCkge1xyXG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleS5yZXBsYWNlKCckJywgJycpfTogJHtwYXJhbXNba2V5XX1gKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdudW1iZXInIHx8IHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ2Jvb2xlYW4nIHx8IHBhcmFtc1trZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5fTogJHtwYXJhbXNba2V5XX1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiBcIiR7cGFyYW1zW2tleV19XCJgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGFyYW1zU3RyLmpvaW4oJyAnKTtcclxuICB9XHJcbn1cclxuIl19