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
MrTranslationsLoaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrTranslationsLoaderService, deps: [{ token: i1.HttpClient }, { token: i2.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
MrTranslationsLoaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrTranslationsLoaderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrTranslationsLoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.ConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25zLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL3NlcnZpY2VzL3RyYW5zbGF0aW9ucy1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFNOUMsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxZQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRG5DLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBQzFDLENBQUM7SUFFSixJQUFJLENBQUMsUUFBZ0I7UUFDbkIsTUFBTSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvRSxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxlQUFlLENBQUM7UUFDcEMsTUFBTSxnQkFBZ0IsR0FBRyxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQztRQUU5RCxJQUFJLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRTtZQUMvQixNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzFCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FDNUQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNmO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQ3hELElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDcEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O3dIQTVCVSwyQkFBMkI7NEhBQTNCLDJCQUEyQixjQUYxQixNQUFNOzJGQUVQLDJCQUEyQjtrQkFIdkMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNclRyYW5zbGF0aW9uc0xvYWRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgKSB7fVxuXG4gIGxvYWQobGFuZ0NvZGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBkZWZhdWx0UHJvdmlkZXIsIHByb3ZpZGVycyB9ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29tbXVuaWNhdGlvbicpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyc1tkZWZhdWx0UHJvdmlkZXJdIHx8IHt9O1xuICAgIGNvbnN0IHsgYmFzZVVybCB9ID0gY3VycmVudFByb3ZpZGVyO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uc1BhdGggPSBjdXJyZW50UHJvdmlkZXI/LmNvbmZpZz8udHJhbnNsYXRpb247XG5cbiAgICBpZiAoYmFzZVVybCAmJiB0cmFuc2xhdGlvbnNQYXRoKSB7XG4gICAgICBjb25zdCB1cmwgPSBiYXNlVXJsICsgdHJhbnNsYXRpb25zUGF0aCArIGxhbmdDb2RlO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG51bGwpKSxcbiAgICAgICAgdGFwKChyZXNwb25zZSkgPT4gdGhpcy5faGFuZGxlUmVzcG9uc2UocmVzcG9uc2UsIGxhbmdDb2RlKSksXG4gICAgICApLnRvUHJvbWlzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gb2YobnVsbCkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZTogb2JqZWN0LCBsYW5nQ29kZTogc3RyaW5nKSB7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHRyYW5zbGF0ZS5zZXRMYW5nVHJhbnNsYXRpb24obGFuZ0NvZGUsIGtleSwgcmVzcG9uc2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==