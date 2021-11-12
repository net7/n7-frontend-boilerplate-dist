import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from '../../common/services/configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../common/services/configuration.service";
var MrFooterService = /** @class */ (function () {
    function MrFooterService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    MrFooterService.prototype.load = function () {
        var _this = this;
        var _a;
        var _b = this.configuration.get('communication'), defaultProvider = _b.defaultProvider, providers = _b.providers;
        var currentProvider = providers[defaultProvider] || {};
        var baseUrl = currentProvider.baseUrl;
        var menuPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.footer;
        if (baseUrl && menuPath) {
            var url = baseUrl + menuPath;
            return this.http.get(url).pipe(catchError(function () { return of(null); }), tap(function (response) { return _this._handleResponse(response); })).toPromise();
        }
        return of(null).toPromise();
    };
    MrFooterService.prototype._handleResponse = function (response) {
        if (response) {
            this.configuration.set('footer', response);
        }
    };
    MrFooterService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    MrFooterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MrFooterService_Factory() { return new MrFooterService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: MrFooterService, providedIn: "root" });
    MrFooterService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [HttpClient,
            ConfigurationService])
    ], MrFooterService);
    return MrFooterService;
}());
export { MrFooterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL3NlcnZpY2VzL2Zvb3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFLbkY7SUFDRSx5QkFDVSxJQUFnQixFQUNoQixhQUFtQztRQURuQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtJQUMxQyxDQUFDO0lBRUosOEJBQUksR0FBSjtRQUFBLGlCQWNDOztRQWJPLElBQUEsNENBQXdFLEVBQXRFLG9DQUFlLEVBQUUsd0JBQXFELENBQUM7UUFDL0UsSUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRCxJQUFBLGlDQUFPLENBQXFCO1FBQ3BDLElBQU0sUUFBUSxTQUFHLGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxNQUFNLDBDQUFFLE1BQU0sQ0FBQztRQUVqRCxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDdkIsSUFBTSxHQUFHLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDNUIsVUFBVSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQVIsQ0FBUSxDQUFDLEVBQzFCLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FDbEQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNmO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLHlDQUFlLEdBQXZCLFVBQXdCLFFBQVE7UUFDOUIsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOztnQkF4QmUsVUFBVTtnQkFDRCxvQkFBb0I7OztJQUhsQyxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBR2dCLFVBQVU7WUFDRCxvQkFBb0I7T0FIbEMsZUFBZSxDQTJCM0I7MEJBcENEO0NBb0NDLEFBM0JELElBMkJDO1NBM0JZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNckZvb3RlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHsgZGVmYXVsdFByb3ZpZGVyLCBwcm92aWRlcnMgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbW11bmljYXRpb24nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyc1tkZWZhdWx0UHJvdmlkZXJdIHx8IHt9O1xyXG4gICAgY29uc3QgeyBiYXNlVXJsIH0gPSBjdXJyZW50UHJvdmlkZXI7XHJcbiAgICBjb25zdCBtZW51UGF0aCA9IGN1cnJlbnRQcm92aWRlcj8uY29uZmlnPy5mb290ZXI7XHJcblxyXG4gICAgaWYgKGJhc2VVcmwgJiYgbWVudVBhdGgpIHtcclxuICAgICAgY29uc3QgdXJsID0gYmFzZVVybCArIG1lbnVQYXRoO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihudWxsKSksXHJcbiAgICAgICAgdGFwKChyZXNwb25zZSkgPT4gdGhpcy5faGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpKSxcclxuICAgICAgKS50b1Byb21pc2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvZihudWxsKS50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnNldCgnZm9vdGVyJywgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=