import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let ApolloProvider = class ApolloProvider {
    constructor(http) {
        this.http = http;
    }
    request$(providerConfig, requestId, options) {
        const { params, method, httpOptions } = options;
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
};
ApolloProvider.ctorParameters = () => [
    { type: HttpClient }
];
ApolloProvider.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApolloProvider_Factory() { return new ApolloProvider(i0.ɵɵinject(i1.HttpClient)); }, token: ApolloProvider, providedIn: "root" });
ApolloProvider = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient])
], ApolloProvider);
export { ApolloProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBvbGxvLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLXByb3ZpZGVycy9hcG9sbG8ucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBT3JDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFDVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3ZCLENBQUM7SUFFSixRQUFRLENBQUMsY0FBYyxFQUFFLFNBQWlCLEVBQUUsT0FBTztRQUNqRCxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDaEQsSUFBSSxLQUFLLENBQUM7UUFFVixJQUFJLGNBQWMsQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM3RCxLQUFLLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQztRQUVELEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUUxQix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1QixNQUFNLEtBQUssQ0FBQyxrQ0FBa0MsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsTUFB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LE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDdEcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNMLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBOztZQXZFaUIsVUFBVTs7O0FBRmYsY0FBYztJQUgxQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO3FDQUdnQixVQUFVO0dBRmYsY0FBYyxDQXlFMUI7U0F6RVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25Qcm92aWRlciB9IGZyb20gJy4vY29tbXVuaWNhdGlvbi1wcm92aWRlci5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwb2xsb1Byb3ZpZGVyIGltcGxlbWVudHMgQ29tbXVuaWNhdGlvblByb3ZpZGVyIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG4gICkge31cclxuXHJcbiAgcmVxdWVzdCQocHJvdmlkZXJDb25maWcsIHJlcXVlc3RJZDogc3RyaW5nLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IHBhcmFtcywgbWV0aG9kLCBodHRwT3B0aW9ucyB9ID0gb3B0aW9ucztcclxuICAgIGxldCBxdWVyeTtcclxuXHJcbiAgICBpZiAocHJvdmlkZXJDb25maWcuY29uZmlnICYmIHByb3ZpZGVyQ29uZmlnLmNvbmZpZ1tyZXF1ZXN0SWRdKSB7XHJcbiAgICAgIHF1ZXJ5ID0gcHJvdmlkZXJDb25maWcuY29uZmlnW3JlcXVlc3RJZF07XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnkgPSBxdWVyeSB8fCB7fTtcclxuICAgIGNvbnN0IHsgcXVlcnlOYW1lIH0gPSBxdWVyeTtcclxuICAgIGxldCB7IHF1ZXJ5Qm9keSB9ID0gcXVlcnk7XHJcblxyXG4gICAgLy8gY29uZmlnIHF1ZXJ5IGNvbnRyb2xcclxuICAgIGlmICghcXVlcnlOYW1lIHx8ICFxdWVyeUJvZHkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYE5vIGNvbmZpZyBmb3VuZCBmb3IgcmVxdWVzdElkICcke3JlcXVlc3RJZH0nYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmFtcykge1xyXG4gICAgICBjb25zdCBwYXJhbXNTdHIgPSB0aGlzLm1ha2VQYXJhbXNTdHIocGFyYW1zKTtcclxuICAgICAgcXVlcnlCb2R5ID0gcXVlcnlCb2R5LnJlcGxhY2UoJ19fUEFSQU1TX18nLCBwYXJhbXNTdHIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcXVlcnlCb2R5ID0gcXVlcnlCb2R5LnJlcGxhY2UoJyhfX1BBUkFNU19fKScsICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc291cmNlJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAgIGlmIChtZXRob2QgJiYgbWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICBzb3VyY2UkID0gdGhpcy5odHRwLmdldChwcm92aWRlckNvbmZpZy5iYXNlVXJsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNvdXJjZSQgPSB0aGlzLmh0dHAucG9zdChcclxuICAgICAgICBwcm92aWRlckNvbmZpZy5iYXNlVXJsLFxyXG4gICAgICAgIHsgcXVlcnk6IHF1ZXJ5Qm9keSB9LFxyXG4gICAgICAgIGh0dHBPcHRpb25zLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzb3VyY2UkLnBpcGUobWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5kYXRhW3F1ZXJ5TmFtZV0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVBhcmFtc1N0cihwYXJhbXMpIHtcclxuICAgIGNvbnN0IHBhcmFtc1N0ciA9IFtdO1xyXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW2tleV0pKSB7XHJcbiAgICAgICAgY29uc3QgYXJyU3RyID0gW107XHJcbiAgICAgICAgcGFyYW1zW2tleV0uZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViUGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHZhbCk7XHJcbiAgICAgICAgICAgIGFyclN0ci5wdXNoKGB7ICR7c3ViUGFyYW1zU3RyfSB9YCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyB8fCB2YWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYXJyU3RyLnB1c2goYCR7dmFsfWApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJyU3RyLnB1c2goYFwiJHt2YWx9XCJgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiBbJHthcnJTdHIuam9pbignLCcpfV1gKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zW2tleV0gPT09ICdvYmplY3QnICYmIHBhcmFtc1trZXldKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViUGFyYW1zU3RyID0gdGhpcy5tYWtlUGFyYW1zU3RyKHBhcmFtc1trZXldKTtcclxuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiB7ICR7c3ViUGFyYW1zU3RyfSB9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1trZXldID09PSAnc3RyaW5nJyAmJiBrZXkuaW5kZXhPZignJCcpID09PSAwKSB7XHJcbiAgICAgICAgcGFyYW1zU3RyLnB1c2goYCR7a2V5LnJlcGxhY2UoJyQnLCAnJyl9OiAke3BhcmFtc1trZXldfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHBhcmFtc1trZXldID09PSAnYm9vbGVhbicgfHwgcGFyYW1zW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgICBwYXJhbXNTdHIucHVzaChgJHtrZXl9OiAke3BhcmFtc1trZXldfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmFtc1N0ci5wdXNoKGAke2tleX06IFwiJHtwYXJhbXNba2V5XX1cImApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwYXJhbXNTdHIuam9pbignICcpO1xyXG4gIH1cclxufVxyXG4iXX0=