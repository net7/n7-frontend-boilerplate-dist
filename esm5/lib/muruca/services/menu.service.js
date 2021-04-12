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
                    anchor: slug ? { href: href } : null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQWFuRjtJQUdFLHVCQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRjdDLGlCQUdJO1FBRk0sU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKckMsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFtRTdCLGtCQUFhLEdBQUcsVUFBQyxJQUFZLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztJQTlEdkUsQ0FBQztJQUVKLDRCQUFJLEdBQUo7UUFBQSxpQkFjQzs7UUFiTyxJQUFBLDRDQUF3RSxFQUF0RSxvQ0FBZSxFQUFFLHdCQUFxRCxDQUFDO1FBQy9FLElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakQsSUFBQSxpQ0FBTyxDQUFxQjtRQUNwQyxJQUFNLFFBQVEsU0FBRyxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsTUFBTSwwQ0FBRSxJQUFJLENBQUM7UUFFL0MsSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQ3ZCLElBQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFSLENBQVEsQ0FBQyxFQUMxQixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQ2xELENBQUMsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyx1Q0FBZSxHQUF2QixVQUF3QixRQUFRO1FBQWhDLGlCQTBDQztRQXpDQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUV0QztvQkFEQyxnQkFBSyxFQUFFLGNBQUksRUFBRSxzQkFBUSxFQUFFLHNCQUFRLEVBQUUsb0JBQU87Z0JBRXhDLElBQU0sSUFBSSxHQUFHLE1BQUksSUFBTSxDQUFDO2dCQUN4Qix1QkFBdUI7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2IsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzlCO2dCQUVELElBQU0sSUFBSSxHQUFHO29CQUNYLE9BQU8sU0FBQTtvQkFDUCxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQzlCLEtBQUssRUFBRTt3QkFDTCxFQUFFLEVBQUUsSUFBSTtxQkFDVDtpQkFDVSxDQUFDO2dCQUVkLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO3dCQUNsQixJQUFNLE9BQU8sR0FBRyxNQUFJLEVBQUUsQ0FBQyxJQUFNLENBQUM7d0JBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFOzRCQUNoQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDakM7d0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2YsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSTs0QkFDM0IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLOzRCQUNkLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7NEJBQ3pCLEtBQUssRUFBRTtnQ0FDTCxFQUFFLEVBQUUsT0FBTzs2QkFDWjt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7O2dCQTlEZSxVQUFVO2dCQUNELG9CQUFvQjs7O0lBTGxDLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FLZ0IsVUFBVTtZQUNELG9CQUFvQjtPQUxsQyxhQUFhLENBcUV6Qjt3QkF2RkQ7Q0F1RkMsQUFyRUQsSUFxRUM7U0FyRVksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcblxyXG50eXBlIE1lbnVJdGVtID0ge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBhbmNob3I6IEFuY2hvcjtcclxuICBfbWV0YTogYW55O1xyXG4gIHN1Ym5hdj86IE1lbnVJdGVtW107XHJcbiAgY2xhc3Nlcz86IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yTWVudVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZHluYW1pY1BhdGhzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBsb2FkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCB7IGRlZmF1bHRQcm92aWRlciwgcHJvdmlkZXJzIH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb21tdW5pY2F0aW9uJyk7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvdmlkZXIgPSBwcm92aWRlcnNbZGVmYXVsdFByb3ZpZGVyXSB8fCB7fTtcclxuICAgIGNvbnN0IHsgYmFzZVVybCB9ID0gY3VycmVudFByb3ZpZGVyO1xyXG4gICAgY29uc3QgbWVudVBhdGggPSBjdXJyZW50UHJvdmlkZXI/LmNvbmZpZz8ubWVudTtcclxuXHJcbiAgICBpZiAoYmFzZVVybCAmJiBtZW51UGF0aCkge1xyXG4gICAgICBjb25zdCB1cmwgPSBiYXNlVXJsICsgbWVudVBhdGg7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcclxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG51bGwpKSxcclxuICAgICAgICB0YXAoKHJlc3BvbnNlKSA9PiB0aGlzLl9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkpLFxyXG4gICAgICApLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9mKG51bGwpLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICBjb25zdCBoZWFkZXJDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdoZWFkZXInKTtcclxuICAgICAgaGVhZGVyQ29uZmlnLm5hdi5pdGVtcyA9IHJlc3BvbnNlLm1hcCgoe1xyXG4gICAgICAgIGxhYmVsLCBzbHVnLCBpc1N0YXRpYywgc3VicGFnZXMsIGNsYXNzZXNcclxuICAgICAgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSBgLyR7c2x1Z31gO1xyXG4gICAgICAgIC8vIGR5bmFtaWMgcGF0aCBjb250cm9sXHJcbiAgICAgICAgaWYgKCFpc1N0YXRpYykge1xyXG4gICAgICAgICAgdGhpcy5keW5hbWljUGF0aHMucHVzaChocmVmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICAgICAgICBjbGFzc2VzLFxyXG4gICAgICAgICAgdGV4dDogbGFiZWwsXHJcbiAgICAgICAgICBhbmNob3I6IHNsdWcgPyB7IGhyZWYgfSA6IG51bGwsXHJcbiAgICAgICAgICBfbWV0YToge1xyXG4gICAgICAgICAgICBpZDogaHJlZlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gYXMgTWVudUl0ZW07XHJcblxyXG4gICAgICAgIGlmIChzdWJwYWdlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBpdGVtLnN1Ym5hdiA9IFtdO1xyXG4gICAgICAgICAgc3VicGFnZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViSHJlZiA9IGAvJHtlbC5zbHVnfWA7XHJcbiAgICAgICAgICAgIGlmICghZWwuaXNTdGF0aWMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKHN1YkhyZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uc3VibmF2LnB1c2goe1xyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGVsLmNsYXNzZXMgfHwgbnVsbCxcclxuICAgICAgICAgICAgICB0ZXh0OiBlbC5sYWJlbCxcclxuICAgICAgICAgICAgICBhbmNob3I6IHsgaHJlZjogc3ViSHJlZiB9LFxyXG4gICAgICAgICAgICAgIF9tZXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc3ViSHJlZlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2V0KCdoZWFkZXInLCBoZWFkZXJDb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRHluYW1pY1BhdGggPSAocGF0aDogc3RyaW5nKSA9PiB0aGlzLmR5bmFtaWNQYXRocy5pbmNsdWRlcyhwYXRoKTtcclxufVxyXG4iXX0=