import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../common/services/configuration.service";
export class MrFooterService {
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    load() {
        const { defaultProvider, providers } = this.configuration.get('communication');
        const currentProvider = providers[defaultProvider] || {};
        const { baseUrl } = currentProvider;
        const menuPath = currentProvider?.config?.footer;
        if (baseUrl && menuPath) {
            const url = baseUrl + menuPath;
            return this.http.get(url).pipe(catchError(() => of(null)), tap((response) => this._handleResponse(response))).toPromise();
        }
        return of(null).toPromise();
    }
    _handleResponse(response) {
        if (response) {
            this.configuration.set('footer', response);
        }
    }
}
MrFooterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrFooterService, deps: [{ token: i1.HttpClient }, { token: i2.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
MrFooterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrFooterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrFooterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.ConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2Evc2VydmljZXMvZm9vdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFNMUIsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFDVSxJQUFnQixFQUNoQixhQUFtQztRQURuQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtJQUMxQyxDQUFDO0lBRUosSUFBSTtRQUNGLE1BQU0sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0UsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6RCxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsZUFBZSxDQUFDO1FBQ3BDLE1BQU0sUUFBUSxHQUFHLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBRWpELElBQUksT0FBTyxJQUFJLFFBQVEsRUFBRTtZQUN2QixNQUFNLEdBQUcsR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzFCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNsRCxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sZUFBZSxDQUFDLFFBQVE7UUFDOUIsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs0R0ExQlUsZUFBZTtnSEFBZixlQUFlLGNBRmQsTUFBTTsyRkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yRm9vdGVyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgeyBkZWZhdWx0UHJvdmlkZXIsIHByb3ZpZGVycyB9ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29tbXVuaWNhdGlvbicpO1xyXG4gICAgY29uc3QgY3VycmVudFByb3ZpZGVyID0gcHJvdmlkZXJzW2RlZmF1bHRQcm92aWRlcl0gfHwge307XHJcbiAgICBjb25zdCB7IGJhc2VVcmwgfSA9IGN1cnJlbnRQcm92aWRlcjtcclxuICAgIGNvbnN0IG1lbnVQYXRoID0gY3VycmVudFByb3ZpZGVyPy5jb25maWc/LmZvb3RlcjtcclxuXHJcbiAgICBpZiAoYmFzZVVybCAmJiBtZW51UGF0aCkge1xyXG4gICAgICBjb25zdCB1cmwgPSBiYXNlVXJsICsgbWVudVBhdGg7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcclxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG51bGwpKSxcclxuICAgICAgICB0YXAoKHJlc3BvbnNlKSA9PiB0aGlzLl9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkpLFxyXG4gICAgICApLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9mKG51bGwpLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2V0KCdmb290ZXInLCByZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==