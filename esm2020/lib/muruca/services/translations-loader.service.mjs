import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { translate } from '@n7-frontend/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../common/services/configuration.service";
export class MrTranslationsLoaderService {
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    load(langCode) {
        const { defaultProvider, providers } = this.configuration.get('communication');
        const currentProvider = providers[defaultProvider] || {};
        const { baseUrl } = currentProvider;
        const translationsPath = currentProvider?.config?.translation;
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
}
MrTranslationsLoaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrTranslationsLoaderService, deps: [{ token: i1.HttpClient }, { token: i2.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
MrTranslationsLoaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrTranslationsLoaderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrTranslationsLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.ConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25zLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL3NlcnZpY2VzL3RyYW5zbGF0aW9ucy1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFNOUMsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxZQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRG5DLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBQzFDLENBQUM7SUFFSixJQUFJLENBQUMsUUFBZ0I7UUFDbkIsTUFBTSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvRSxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxlQUFlLENBQUM7UUFDcEMsTUFBTSxnQkFBZ0IsR0FBRyxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQztRQUU5RCxJQUFJLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRTtZQUMvQixNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzFCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FDNUQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNmO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQ3hELElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDcEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O3dIQTVCVSwyQkFBMkI7NEhBQTNCLDJCQUEyQixjQUYxQixNQUFNOzJGQUVQLDJCQUEyQjtrQkFIdkMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yVHJhbnNsYXRpb25zTG9hZGVyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbG9hZChsYW5nQ29kZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHsgZGVmYXVsdFByb3ZpZGVyLCBwcm92aWRlcnMgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbW11bmljYXRpb24nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyc1tkZWZhdWx0UHJvdmlkZXJdIHx8IHt9O1xyXG4gICAgY29uc3QgeyBiYXNlVXJsIH0gPSBjdXJyZW50UHJvdmlkZXI7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbnNQYXRoID0gY3VycmVudFByb3ZpZGVyPy5jb25maWc/LnRyYW5zbGF0aW9uO1xyXG5cclxuICAgIGlmIChiYXNlVXJsICYmIHRyYW5zbGF0aW9uc1BhdGgpIHtcclxuICAgICAgY29uc3QgdXJsID0gYmFzZVVybCArIHRyYW5zbGF0aW9uc1BhdGggKyBsYW5nQ29kZTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpLFxyXG4gICAgICAgIHRhcCgocmVzcG9uc2UpID0+IHRoaXMuX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlLCBsYW5nQ29kZSkpLFxyXG4gICAgICApLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9mKG51bGwpLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IG9iamVjdCwgbGFuZ0NvZGU6IHN0cmluZykge1xyXG4gICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICB0cmFuc2xhdGUuc2V0TGFuZ1RyYW5zbGF0aW9uKGxhbmdDb2RlLCBrZXksIHJlc3BvbnNlW2tleV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19