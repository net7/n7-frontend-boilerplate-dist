import { __decorate, __metadata } from "tslib";
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
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.dynamicPaths = [];
        this.isDynamicPath = function (path) { return _this.dynamicPaths.includes(path); };
    }
    MrMenuService.prototype.load = function () {
        var _this = this;
        var _a;
        var _b = this.configuration.get('communication'), defaultProvider = _b.defaultProvider, providers = _b.providers;
        var currentProvider = providers[defaultProvider] || {};
        var baseUrl = currentProvider.baseUrl;
        var menuPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.menu;
        if (baseUrl && menuPath) {
            var url = baseUrl + menuPath;
            return this.http.get(url).pipe(catchError(function () { return of(null); }), tap(function (response) { return _this._handleResponse(response); })).toPromise();
        }
        return of(null).toPromise();
    };
    MrMenuService.prototype._handleResponse = function (response) {
        var _this = this;
        if (response) {
            var headerConfig = this.configuration.get('header');
            headerConfig.nav.items = response.map(function (_a) {
                var label = _a.label, slug = _a.slug, isStatic = _a.isStatic, subpages = _a.subpages, classes = _a.classes;
                var href = "/" + slug;
                // dynamic path control
                if (!isStatic) {
                    _this.dynamicPaths.push(href);
                }
                var item = {
                    classes: classes,
                    text: label,
                    anchor: { href: href },
                    _meta: {
                        id: href
                    }
                };
                if (subpages !== undefined) {
                    item.subnav = [];
                    subpages.forEach(function (el) {
                        var subHref = "/" + el.slug;
                        if (!el.isStatic) {
                            _this.dynamicPaths.push(subHref);
                        }
                        item.subnav.push({
                            classes: el.classes || null,
                            text: el.label,
                            anchor: { href: subHref },
                            _meta: {
                                id: subHref
                            }
                        });
                    });
                }
                return item;
            });
            this.configuration.set('header', headerConfig);
        }
    };
    MrMenuService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    MrMenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MrMenuService_Factory() { return new MrMenuService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: MrMenuService, providedIn: "root" });
    MrMenuService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [HttpClient,
            ConfigurationService])
    ], MrMenuService);
    return MrMenuService;
}());
export { MrMenuService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQWFuRjtJQUdFLHVCQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRjdDLGlCQUdJO1FBRk0sU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKckMsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFtRTdCLGtCQUFhLEdBQUcsVUFBQyxJQUFZLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztJQTlEdkUsQ0FBQztJQUVKLDRCQUFJLEdBQUo7UUFBQSxpQkFjQzs7UUFiTyxJQUFBLDRDQUF3RSxFQUF0RSxvQ0FBZSxFQUFFLHdCQUFxRCxDQUFDO1FBQy9FLElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakQsSUFBQSxpQ0FBTyxDQUFxQjtRQUNwQyxJQUFNLFFBQVEsU0FBRyxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsTUFBTSwwQ0FBRSxJQUFJLENBQUM7UUFFL0MsSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQ3ZCLElBQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFSLENBQVEsQ0FBQyxFQUMxQixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQ2xELENBQUMsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyx1Q0FBZSxHQUF2QixVQUF3QixRQUFRO1FBQWhDLGlCQTBDQztRQXpDQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUV0QztvQkFEQyxnQkFBSyxFQUFFLGNBQUksRUFBRSxzQkFBUSxFQUFFLHNCQUFRLEVBQUUsb0JBQU87Z0JBRXhDLElBQU0sSUFBSSxHQUFHLE1BQUksSUFBTSxDQUFDO2dCQUN4Qix1QkFBdUI7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2IsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzlCO2dCQUVELElBQU0sSUFBSSxHQUFHO29CQUNYLE9BQU8sU0FBQTtvQkFDUCxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRTtvQkFDaEIsS0FBSyxFQUFFO3dCQUNMLEVBQUUsRUFBRSxJQUFJO3FCQUNUO2lCQUNVLENBQUM7Z0JBRWQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO29CQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7d0JBQ2xCLElBQU0sT0FBTyxHQUFHLE1BQUksRUFBRSxDQUFDLElBQU0sQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7NEJBQ2hCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNqQzt3QkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDZixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxJQUFJOzRCQUMzQixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7NEJBQ2QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs0QkFDekIsS0FBSyxFQUFFO2dDQUNMLEVBQUUsRUFBRSxPQUFPOzZCQUNaO3lCQUNGLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0JBOURlLFVBQVU7Z0JBQ0Qsb0JBQW9COzs7SUFMbEMsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUtnQixVQUFVO1lBQ0Qsb0JBQW9CO09BTGxDLGFBQWEsQ0FxRXpCO3dCQXZGRDtDQXVGQyxBQXJFRCxJQXFFQztTQXJFWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuXHJcbnR5cGUgTWVudUl0ZW0gPSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGFuY2hvcjogQW5jaG9yO1xyXG4gIF9tZXRhOiBhbnk7XHJcbiAgc3VibmF2PzogTWVudUl0ZW1bXTtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJNZW51U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkeW5hbWljUGF0aHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHsgZGVmYXVsdFByb3ZpZGVyLCBwcm92aWRlcnMgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbW11bmljYXRpb24nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyc1tkZWZhdWx0UHJvdmlkZXJdIHx8IHt9O1xyXG4gICAgY29uc3QgeyBiYXNlVXJsIH0gPSBjdXJyZW50UHJvdmlkZXI7XHJcbiAgICBjb25zdCBtZW51UGF0aCA9IGN1cnJlbnRQcm92aWRlcj8uY29uZmlnPy5tZW51O1xyXG5cclxuICAgIGlmIChiYXNlVXJsICYmIG1lbnVQYXRoKSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IGJhc2VVcmwgKyBtZW51UGF0aDtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpLFxyXG4gICAgICAgIHRhcCgocmVzcG9uc2UpID0+IHRoaXMuX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSksXHJcbiAgICAgICkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2YobnVsbCkudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlckNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpO1xyXG4gICAgICBoZWFkZXJDb25maWcubmF2Lml0ZW1zID0gcmVzcG9uc2UubWFwKCh7XHJcbiAgICAgICAgbGFiZWwsIHNsdWcsIGlzU3RhdGljLCBzdWJwYWdlcywgY2xhc3Nlc1xyXG4gICAgICB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHJlZiA9IGAvJHtzbHVnfWA7XHJcbiAgICAgICAgLy8gZHluYW1pYyBwYXRoIGNvbnRyb2xcclxuICAgICAgICBpZiAoIWlzU3RhdGljKSB7XHJcbiAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKGhyZWYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgICAgIGNsYXNzZXMsXHJcbiAgICAgICAgICB0ZXh0OiBsYWJlbCxcclxuICAgICAgICAgIGFuY2hvcjogeyBocmVmIH0sXHJcbiAgICAgICAgICBfbWV0YToge1xyXG4gICAgICAgICAgICBpZDogaHJlZlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gYXMgTWVudUl0ZW07XHJcblxyXG4gICAgICAgIGlmIChzdWJwYWdlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBpdGVtLnN1Ym5hdiA9IFtdO1xyXG4gICAgICAgICAgc3VicGFnZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViSHJlZiA9IGAvJHtlbC5zbHVnfWA7XHJcbiAgICAgICAgICAgIGlmICghZWwuaXNTdGF0aWMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKHN1YkhyZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uc3VibmF2LnB1c2goe1xyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGVsLmNsYXNzZXMgfHwgbnVsbCxcclxuICAgICAgICAgICAgICB0ZXh0OiBlbC5sYWJlbCxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgaHJlZjogc3ViSHJlZiB9LFxyXG4gICAgICAgICAgICAgIF9tZXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc3ViSHJlZlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2V0KCdoZWFkZXInLCBoZWFkZXJDb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRHluYW1pY1BhdGggPSAocGF0aDogc3RyaW5nKSA9PiB0aGlzLmR5bmFtaWNQYXRocy5pbmNsdWRlcyhwYXRoKTtcclxufVxyXG4iXX0=