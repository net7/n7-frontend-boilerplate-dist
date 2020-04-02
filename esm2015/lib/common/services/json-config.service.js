/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class JsonConfigService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} path
     * @param {?=} staticConfig
     * @return {?}
     */
    load(path, staticConfig) {
        return this.http.get(path).pipe(catchError((/**
         * @return {?}
         */
        () => of({}))), tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => this._handleResponse(response, staticConfig)))).toPromise();
    }
    /**
     * @private
     * @param {?} response
     * @param {?} staticConfig
     * @return {?}
     */
    _handleResponse(response, staticConfig) {
        // set config defaults
        if (staticConfig) {
            Object.keys(staticConfig).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => this.config.set(key, staticConfig[key])));
        }
        // set loaded json config
        if (response) {
            Object.keys(response).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => this.config.set(key, response[key])));
            // config keys colors
            if (response['config-keys']) {
                /** @type {?} */
                const headTag = document.querySelector('head');
                /** @type {?} */
                const styleElement = document.createElement('style');
                /** @type {?} */
                const styles = [];
                Object.keys(response['config-keys']).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    /** @type {?} */
                    const configKey = response['config-keys'][key] || {};
                    /** @type {?} */
                    const className = configKey['class-name'];
                    if (configKey.color && configKey.color.hex) {
                        // add css class
                        styles.push(`--color-${className}: ${configKey.color.hex};`);
                    }
                }));
                if (styles.length) {
                    styles.unshift(':root {');
                    styles.push('}');
                    styleElement.appendChild(document.createTextNode(styles.join('\n')));
                    headTag.appendChild(styleElement);
                }
            }
        }
    }
}
JsonConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
JsonConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
/** @nocollapse */ JsonConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function JsonConfigService_Factory() { return new JsonConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: JsonConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    JsonConfigService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    JsonConfigService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvanNvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBSy9ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzVCLFlBQ1UsSUFBZ0IsRUFDaEIsTUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNuQyxDQUFDOzs7Ozs7SUFFSixJQUFJLENBQUMsSUFBSSxFQUFFLFlBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzdCLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUN4QixHQUFHOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFDLENBQ2hFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVPLGVBQWUsQ0FBQyxRQUFRLEVBQUUsWUFBWTtRQUM1QyxzQkFBc0I7UUFDdEIsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDO1NBQ3JGO1FBRUQseUJBQXlCO1FBQ3pCLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBRTVFLHFCQUFxQjtZQUNyQixJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTs7c0JBQ3JCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7c0JBQ3hDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzs7c0JBRTlDLE1BQU0sR0FBRyxFQUFFO2dCQUVqQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7MEJBQzdDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTs7MEJBQzlDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO29CQUV6QyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7d0JBQzFDLGdCQUFnQjt3QkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7cUJBQzlEO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUVILElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuQzthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7WUFuREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsVUFBVTtZQUdWLG9CQUFvQjs7Ozs7Ozs7SUFPekIsaUNBQXdCOzs7OztJQUN4QixtQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkNvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgbG9hZChwYXRoLCBzdGF0aWNDb25maWc/KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChwYXRoKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZih7fSkpLFxuICAgICAgdGFwKChyZXNwb25zZSkgPT4gdGhpcy5faGFuZGxlUmVzcG9uc2UocmVzcG9uc2UsIHN0YXRpY0NvbmZpZykpLFxuICAgICkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSwgc3RhdGljQ29uZmlnKSB7XG4gICAgLy8gc2V0IGNvbmZpZyBkZWZhdWx0c1xuICAgIGlmIChzdGF0aWNDb25maWcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRpY0NvbmZpZykuZm9yRWFjaCgoa2V5KSA9PiB0aGlzLmNvbmZpZy5zZXQoa2V5LCBzdGF0aWNDb25maWdba2V5XSkpO1xuICAgIH1cblxuICAgIC8vIHNldCBsb2FkZWQganNvbiBjb25maWdcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKChrZXkpID0+IHRoaXMuY29uZmlnLnNldChrZXksIHJlc3BvbnNlW2tleV0pKTtcblxuICAgICAgLy8gY29uZmlnIGtleXMgY29sb3JzXG4gICAgICBpZiAocmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ10pIHtcbiAgICAgICAgY29uc3QgaGVhZFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgICBjb25zdCBzdHlsZXMgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZVsnY29uZmlnLWtleXMnXSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29uZmlnS2V5ID0gcmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ11ba2V5XSB8fCB7fTtcbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjb25maWdLZXlbJ2NsYXNzLW5hbWUnXTtcblxuICAgICAgICAgIGlmIChjb25maWdLZXkuY29sb3IgJiYgY29uZmlnS2V5LmNvbG9yLmhleCkge1xuICAgICAgICAgICAgLy8gYWRkIGNzcyBjbGFzc1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goYC0tY29sb3ItJHtjbGFzc05hbWV9OiAke2NvbmZpZ0tleS5jb2xvci5oZXh9O2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN0eWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBzdHlsZXMudW5zaGlmdCgnOnJvb3QgeycpO1xuICAgICAgICAgIHN0eWxlcy5wdXNoKCd9Jyk7XG4gICAgICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlcy5qb2luKCdcXG4nKSkpO1xuICAgICAgICAgIGhlYWRUYWcuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19