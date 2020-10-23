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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25zLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy90cmFuc2xhdGlvbnMtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFLbkY7SUFDRSxxQ0FDVSxJQUFnQixFQUNoQixhQUFtQztRQURuQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtJQUMxQyxDQUFDO0lBRUosMENBQUksR0FBSixVQUFLLFFBQWdCO1FBQXJCLGlCQWNDOztRQWJPLElBQUEsNENBQXdFLEVBQXRFLG9DQUFlLEVBQUUsd0JBQXFELENBQUM7UUFDL0UsSUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRCxJQUFBLGlDQUFPLENBQXFCO1FBQ3BDLElBQU0sZ0JBQWdCLFNBQUcsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE1BQU0sMENBQUUsV0FBVyxDQUFDO1FBRTlELElBQUksT0FBTyxJQUFJLGdCQUFnQixFQUFFO1lBQy9CLElBQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7WUFDbEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFSLENBQVEsQ0FBQyxFQUMxQixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUM1RCxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8scURBQWUsR0FBdkIsVUFBd0IsUUFBZ0IsRUFBRSxRQUFnQjtRQUN4RCxJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDaEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQTFCZSxVQUFVO2dCQUNELG9CQUFvQjs7O0lBSGxDLDJCQUEyQjtRQUh2QyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUdnQixVQUFVO1lBQ0Qsb0JBQW9CO09BSGxDLDJCQUEyQixDQTZCdkM7c0NBdkNEO0NBdUNDLEFBN0JELElBNkJDO1NBN0JZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yVHJhbnNsYXRpb25zTG9hZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgbG9hZChsYW5nQ29kZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IGRlZmF1bHRQcm92aWRlciwgcHJvdmlkZXJzIH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb21tdW5pY2F0aW9uJyk7XG4gICAgY29uc3QgY3VycmVudFByb3ZpZGVyID0gcHJvdmlkZXJzW2RlZmF1bHRQcm92aWRlcl0gfHwge307XG4gICAgY29uc3QgeyBiYXNlVXJsIH0gPSBjdXJyZW50UHJvdmlkZXI7XG4gICAgY29uc3QgdHJhbnNsYXRpb25zUGF0aCA9IGN1cnJlbnRQcm92aWRlcj8uY29uZmlnPy50cmFuc2xhdGlvbjtcblxuICAgIGlmIChiYXNlVXJsICYmIHRyYW5zbGF0aW9uc1BhdGgpIHtcbiAgICAgIGNvbnN0IHVybCA9IGJhc2VVcmwgKyB0cmFuc2xhdGlvbnNQYXRoICsgbGFuZ0NvZGU7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlKSA9PiB0aGlzLl9oYW5kbGVSZXNwb25zZShyZXNwb25zZSwgbGFuZ0NvZGUpKSxcbiAgICAgICkudG9Qcm9taXNlKCk7XG4gICAgfVxuICAgIHJldHVybiBvZihudWxsKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlOiBvYmplY3QsIGxhbmdDb2RlOiBzdHJpbmcpIHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdHJhbnNsYXRlLnNldExhbmdUcmFuc2xhdGlvbihsYW5nQ29kZSwga2V5LCByZXNwb25zZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19