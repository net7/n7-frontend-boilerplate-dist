/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from '../../common/services/configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../common/services/configuration.service";
export class MrMenuService {
    /**
     * @param {?} http
     * @param {?} configuration
     */
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    /**
     * @param {?} path
     * @param {?} rootPath
     * @return {?}
     */
    load(path, rootPath) {
        return this.http.get(path).pipe(catchError((/**
         * @return {?}
         */
        () => of(null))), tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => this._handleResponse(response, rootPath)))).toPromise();
    }
    /**
     * @private
     * @param {?} response
     * @param {?} rootPath
     * @return {?}
     */
    _handleResponse(response, rootPath) {
        if (response) {
            /** @type {?} */
            const headerConfig = this.configuration.get('header');
            headerConfig.nav.items = response.map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ label, slug, isStatic }) => ({
                text: label,
                anchor: {
                    href: isStatic ? slug : `${rootPath}/${slug}`
                },
                _meta: {
                    id: slug
                }
            })));
            this.configuration.set('header', headerConfig);
        }
    }
}
MrMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MrMenuService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
/** @nocollapse */ MrMenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MrMenuService_Factory() { return new MrMenuService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: MrMenuService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrMenuService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    MrMenuService.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQUtuRixNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDeEIsWUFDVSxJQUFnQixFQUNoQixhQUFtQztRQURuQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtJQUMxQyxDQUFDOzs7Ozs7SUFFSixJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzdCLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUMxQixHQUFHOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQzVELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVPLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUTtRQUN4QyxJQUFJLFFBQVEsRUFBRTs7a0JBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNyRCxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRzs7OztZQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLEVBQUUsS0FBSztnQkFDWCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsSUFBSSxJQUFJLEVBQUU7aUJBQzlDO2dCQUNELEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsSUFBSTtpQkFDVDthQUNGLENBQUMsRUFBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7O1lBOUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFVBQVU7WUFHVixvQkFBb0I7Ozs7Ozs7O0lBT3pCLDZCQUF3Qjs7Ozs7SUFDeEIsc0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTXJNZW51U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgbG9hZChwYXRoLCByb290UGF0aCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocGF0aCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpLFxuICAgICAgdGFwKChyZXNwb25zZSkgPT4gdGhpcy5faGFuZGxlUmVzcG9uc2UocmVzcG9uc2UsIHJvb3RQYXRoKSksXG4gICAgKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlLCByb290UGF0aCkge1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgY29uc3QgaGVhZGVyQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJyk7XG4gICAgICBoZWFkZXJDb25maWcubmF2Lml0ZW1zID0gcmVzcG9uc2UubWFwKCh7IGxhYmVsLCBzbHVnLCBpc1N0YXRpYyB9KSA9PiAoe1xuICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogaXNTdGF0aWMgPyBzbHVnIDogYCR7cm9vdFBhdGh9LyR7c2x1Z31gXG4gICAgICAgIH0sXG4gICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgaWQ6IHNsdWdcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnNldCgnaGVhZGVyJywgaGVhZGVyQ29uZmlnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==