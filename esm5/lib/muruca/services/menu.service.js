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
var MrMenuService = /** @class */ (function () {
    function MrMenuService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    /**
     * @param {?} path
     * @param {?} rootPath
     * @return {?}
     */
    MrMenuService.prototype.load = /**
     * @param {?} path
     * @param {?} rootPath
     * @return {?}
     */
    function (path, rootPath) {
        var _this = this;
        return this.http.get(path).pipe(catchError((/**
         * @return {?}
         */
        function () { return of(null); })), tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return _this._handleResponse(response, rootPath); }))).toPromise();
    };
    /**
     * @private
     * @param {?} response
     * @param {?} rootPath
     * @return {?}
     */
    MrMenuService.prototype._handleResponse = /**
     * @private
     * @param {?} response
     * @param {?} rootPath
     * @return {?}
     */
    function (response, rootPath) {
        if (response) {
            /** @type {?} */
            var headerConfig = this.configuration.get('header');
            headerConfig.nav.items = response.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var label = _a.label, slug = _a.slug, isStatic = _a.isStatic;
                return ({
                    text: label,
                    anchor: {
                        href: isStatic ? slug : rootPath + "/" + slug
                    },
                    _meta: {
                        id: slug
                    }
                });
            }));
            this.configuration.set('header', headerConfig);
        }
    };
    MrMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MrMenuService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    /** @nocollapse */ MrMenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MrMenuService_Factory() { return new MrMenuService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: MrMenuService, providedIn: "root" });
    return MrMenuService;
}());
export { MrMenuService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQUVuRjtJQUlFLHVCQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRG5DLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO0lBQzFDLENBQUM7Ozs7OztJQUVKLDRCQUFJOzs7OztJQUFKLFVBQUssSUFBSSxFQUFFLFFBQVE7UUFBbkIsaUJBS0M7UUFKQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDN0IsVUFBVTs7O1FBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBUixDQUFRLEVBQUMsRUFDMUIsR0FBRzs7OztRQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQXhDLENBQXdDLEVBQUMsQ0FDNUQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRU8sdUNBQWU7Ozs7OztJQUF2QixVQUF3QixRQUFRLEVBQUUsUUFBUTtRQUN4QyxJQUFJLFFBQVEsRUFBRTs7Z0JBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNyRCxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsRUFBeUI7b0JBQXZCLGdCQUFLLEVBQUUsY0FBSSxFQUFFLHNCQUFRO2dCQUFPLE9BQUEsQ0FBQztvQkFDcEUsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUksUUFBUSxTQUFJLElBQU07cUJBQzlDO29CQUNELEtBQUssRUFBRTt3QkFDTCxFQUFFLEVBQUUsSUFBSTtxQkFDVDtpQkFDRixDQUFDO1lBUm1FLENBUW5FLEVBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7O2dCQTlCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFVBQVU7Z0JBR1Ysb0JBQW9COzs7d0JBSjdCO0NBcUNDLEFBL0JELElBK0JDO1NBNUJZLGFBQWE7Ozs7OztJQUV0Qiw2QkFBd0I7Ozs7O0lBQ3hCLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yTWVudVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgKSB7fVxuXG4gIGxvYWQocGF0aCwgcm9vdFBhdGgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHBhdGgpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG51bGwpKSxcbiAgICAgIHRhcCgocmVzcG9uc2UpID0+IHRoaXMuX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlLCByb290UGF0aCkpLFxuICAgICkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSwgcm9vdFBhdGgpIHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGhlYWRlckNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpO1xuICAgICAgaGVhZGVyQ29uZmlnLm5hdi5pdGVtcyA9IHJlc3BvbnNlLm1hcCgoeyBsYWJlbCwgc2x1ZywgaXNTdGF0aWMgfSkgPT4gKHtcbiAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IGlzU3RhdGljID8gc2x1ZyA6IGAke3Jvb3RQYXRofS8ke3NsdWd9YFxuICAgICAgICB9LFxuICAgICAgICBfbWV0YToge1xuICAgICAgICAgIGlkOiBzbHVnXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zZXQoJ2hlYWRlcicsIGhlYWRlckNvbmZpZyk7XG4gICAgfVxuICB9XG59XG4iXX0=