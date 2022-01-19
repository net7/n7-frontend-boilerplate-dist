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
let MrTranslationsLoaderService = class MrTranslationsLoaderService {
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    load(langCode) {
        var _a;
        const { defaultProvider, providers } = this.configuration.get('communication');
        const currentProvider = providers[defaultProvider] || {};
        const { baseUrl } = currentProvider;
        const translationsPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.translation;
        if (baseUrl && translationsPath) {
            const url = baseUrl + translationsPath + langCode;
            return this.http.get(url).pipe(catchError(() => of(null)), tap((response) => this._handleResponse(response, langCode))).toPromise();
        }
        return of(null).toPromise();
    }
    _handleResponse(response, langCode) {
        if (response) {
            Object.keys(response).forEach((key) => {
                translate.setLangTranslation(langCode, key, response[key]);
            });
        }
    }
};
MrTranslationsLoaderService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
MrTranslationsLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MrTranslationsLoaderService_Factory() { return new MrTranslationsLoaderService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: MrTranslationsLoaderService, providedIn: "root" });
MrTranslationsLoaderService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient,
        ConfigurationService])
], MrTranslationsLoaderService);
export { MrTranslationsLoaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25zLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy90cmFuc2xhdGlvbnMtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFLbkYsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFDdEMsWUFDVSxJQUFnQixFQUNoQixhQUFtQztRQURuQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtJQUMxQyxDQUFDO0lBRUosSUFBSSxDQUFDLFFBQWdCOztRQUNuQixNQUFNLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLGVBQWUsQ0FBQztRQUNwQyxNQUFNLGdCQUFnQixTQUFHLGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxNQUFNLDBDQUFFLFdBQVcsQ0FBQztRQUU5RCxJQUFJLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRTtZQUMvQixNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzFCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FDNUQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNmO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQ3hELElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDcEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFBOztZQTNCaUIsVUFBVTtZQUNELG9CQUFvQjs7O0FBSGxDLDJCQUEyQjtJQUh2QyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO3FDQUdnQixVQUFVO1FBQ0Qsb0JBQW9CO0dBSGxDLDJCQUEyQixDQTZCdkM7U0E3QlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNclRyYW5zbGF0aW9uc0xvYWRlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIGxvYWQobGFuZ0NvZGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCB7IGRlZmF1bHRQcm92aWRlciwgcHJvdmlkZXJzIH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb21tdW5pY2F0aW9uJyk7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvdmlkZXIgPSBwcm92aWRlcnNbZGVmYXVsdFByb3ZpZGVyXSB8fCB7fTtcclxuICAgIGNvbnN0IHsgYmFzZVVybCB9ID0gY3VycmVudFByb3ZpZGVyO1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25zUGF0aCA9IGN1cnJlbnRQcm92aWRlcj8uY29uZmlnPy50cmFuc2xhdGlvbjtcclxuXHJcbiAgICBpZiAoYmFzZVVybCAmJiB0cmFuc2xhdGlvbnNQYXRoKSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IGJhc2VVcmwgKyB0cmFuc2xhdGlvbnNQYXRoICsgbGFuZ0NvZGU7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcclxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG51bGwpKSxcclxuICAgICAgICB0YXAoKHJlc3BvbnNlKSA9PiB0aGlzLl9oYW5kbGVSZXNwb25zZShyZXNwb25zZSwgbGFuZ0NvZGUpKSxcclxuICAgICAgKS50b1Byb21pc2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvZihudWxsKS50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlOiBvYmplY3QsIGxhbmdDb2RlOiBzdHJpbmcpIHtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgdHJhbnNsYXRlLnNldExhbmdUcmFuc2xhdGlvbihsYW5nQ29kZSwga2V5LCByZXNwb25zZVtrZXldKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==