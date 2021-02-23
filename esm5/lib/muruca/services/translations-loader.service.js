import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { translate } from '@n7-frontend/core';
import { ConfigurationService } from '../../common/services/configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../common/services/configuration.service";
var MrTranslationsLoaderService = /** @class */ (function () {
    function MrTranslationsLoaderService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    MrTranslationsLoaderService.prototype.load = function (langCode) {
        var _this = this;
        var _a;
        var _b = this.configuration.get('communication'), defaultProvider = _b.defaultProvider, providers = _b.providers;
        var currentProvider = providers[defaultProvider] || {};
        var baseUrl = currentProvider.baseUrl;
        var translationsPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.translation;
        if (baseUrl && translationsPath) {
            var url = baseUrl + translationsPath + langCode;
            return this.http.get(url).pipe(catchError(function () { return of(null); }), tap(function (response) { return _this._handleResponse(response, langCode); })).toPromise();
        }
        return of(null).toPromise();
    };
    MrTranslationsLoaderService.prototype._handleResponse = function (response, langCode) {
        if (response) {
            Object.keys(response).forEach(function (key) {
                translate.setLangTranslation(langCode, key, response[key]);
            });
        }
    };
    MrTranslationsLoaderService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    MrTranslationsLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MrTranslationsLoaderService_Factory() { return new MrTranslationsLoaderService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: MrTranslationsLoaderService, providedIn: "root" });
    MrTranslationsLoaderService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [HttpClient,
            ConfigurationService])
    ], MrTranslationsLoaderService);
    return MrTranslationsLoaderService;
}());
export { MrTranslationsLoaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25zLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy90cmFuc2xhdGlvbnMtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFLbkY7SUFDRSxxQ0FDVSxJQUFnQixFQUNoQixhQUFtQztRQURuQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtJQUMxQyxDQUFDO0lBRUosMENBQUksR0FBSixVQUFLLFFBQWdCO1FBQXJCLGlCQWNDOztRQWJPLElBQUEsNENBQXdFLEVBQXRFLG9DQUFlLEVBQUUsd0JBQXFELENBQUM7UUFDL0UsSUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRCxJQUFBLGlDQUFPLENBQXFCO1FBQ3BDLElBQU0sZ0JBQWdCLFNBQUcsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE1BQU0sMENBQUUsV0FBVyxDQUFDO1FBRTlELElBQUksT0FBTyxJQUFJLGdCQUFnQixFQUFFO1lBQy9CLElBQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7WUFDbEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFSLENBQVEsQ0FBQyxFQUMxQixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUM1RCxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8scURBQWUsR0FBdkIsVUFBd0IsUUFBZ0IsRUFBRSxRQUFnQjtRQUN4RCxJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDaEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQTFCZSxVQUFVO2dCQUNELG9CQUFvQjs7O0lBSGxDLDJCQUEyQjtRQUh2QyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUdnQixVQUFVO1lBQ0Qsb0JBQW9CO09BSGxDLDJCQUEyQixDQTZCdkM7c0NBdkNEO0NBdUNDLEFBN0JELElBNkJDO1NBN0JZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJUcmFuc2xhdGlvbnNMb2FkZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBsb2FkKGxhbmdDb2RlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgeyBkZWZhdWx0UHJvdmlkZXIsIHByb3ZpZGVycyB9ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29tbXVuaWNhdGlvbicpO1xyXG4gICAgY29uc3QgY3VycmVudFByb3ZpZGVyID0gcHJvdmlkZXJzW2RlZmF1bHRQcm92aWRlcl0gfHwge307XHJcbiAgICBjb25zdCB7IGJhc2VVcmwgfSA9IGN1cnJlbnRQcm92aWRlcjtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uc1BhdGggPSBjdXJyZW50UHJvdmlkZXI/LmNvbmZpZz8udHJhbnNsYXRpb247XHJcblxyXG4gICAgaWYgKGJhc2VVcmwgJiYgdHJhbnNsYXRpb25zUGF0aCkge1xyXG4gICAgICBjb25zdCB1cmwgPSBiYXNlVXJsICsgdHJhbnNsYXRpb25zUGF0aCArIGxhbmdDb2RlO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihudWxsKSksXHJcbiAgICAgICAgdGFwKChyZXNwb25zZSkgPT4gdGhpcy5faGFuZGxlUmVzcG9uc2UocmVzcG9uc2UsIGxhbmdDb2RlKSksXHJcbiAgICAgICkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2YobnVsbCkudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZTogb2JqZWN0LCBsYW5nQ29kZTogc3RyaW5nKSB7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2UpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIHRyYW5zbGF0ZS5zZXRMYW5nVHJhbnNsYXRpb24obGFuZ0NvZGUsIGtleSwgcmVzcG9uc2Vba2V5XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=