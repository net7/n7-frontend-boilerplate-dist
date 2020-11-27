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
                var label = _a.label, slug = _a.slug, isStatic = _a.isStatic, subpages = _a.subpages;
                var href = "/" + slug;
                // dynamic path control
                if (!isStatic) {
                    _this.dynamicPaths.push(href);
                }
                var item = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQVluRjtJQUdFLHVCQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRjdDLGlCQUdJO1FBRk0sU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKckMsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFpRTdCLGtCQUFhLEdBQUcsVUFBQyxJQUFZLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztJQTVEdkUsQ0FBQztJQUVKLDRCQUFJLEdBQUo7UUFBQSxpQkFjQzs7UUFiTyxJQUFBLDRDQUF3RSxFQUF0RSxvQ0FBZSxFQUFFLHdCQUFxRCxDQUFDO1FBQy9FLElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakQsSUFBQSxpQ0FBTyxDQUFxQjtRQUNwQyxJQUFNLFFBQVEsU0FBRyxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsTUFBTSwwQ0FBRSxJQUFJLENBQUM7UUFFL0MsSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQ3ZCLElBQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFSLENBQVEsQ0FBQyxFQUMxQixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQ2xELENBQUMsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyx1Q0FBZSxHQUF2QixVQUF3QixRQUFRO1FBQWhDLGlCQXdDQztRQXZDQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUV0QztvQkFEQyxnQkFBSyxFQUFFLGNBQUksRUFBRSxzQkFBUSxFQUFFLHNCQUFRO2dCQUUvQixJQUFNLElBQUksR0FBRyxNQUFJLElBQU0sQ0FBQztnQkFDeEIsdUJBQXVCO2dCQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtnQkFFRCxJQUFNLElBQUksR0FBRztvQkFDWCxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRTtvQkFDaEIsS0FBSyxFQUFFO3dCQUNMLEVBQUUsRUFBRSxJQUFJO3FCQUNUO2lCQUNVLENBQUM7Z0JBRWQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO29CQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7d0JBQ2xCLElBQU0sT0FBTyxHQUFHLE1BQUksRUFBRSxDQUFDLElBQU0sQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7NEJBQ2hCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNqQzt3QkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDZixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7NEJBQ2QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs0QkFDekIsS0FBSyxFQUFFO2dDQUNMLEVBQUUsRUFBRSxPQUFPOzZCQUNaO3lCQUNGLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0JBNURlLFVBQVU7Z0JBQ0Qsb0JBQW9COzs7SUFMbEMsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUtnQixVQUFVO1lBQ0Qsb0JBQW9CO09BTGxDLGFBQWEsQ0FtRXpCO3dCQXBGRDtDQW9GQyxBQW5FRCxJQW1FQztTQW5FWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG50eXBlIE1lbnVJdGVtID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGFuY2hvcjogQW5jaG9yO1xuICBfbWV0YTogYW55O1xuICBzdWJuYXY/OiBNZW51SXRlbVtdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTXJNZW51U2VydmljZSB7XG4gIHByaXZhdGUgZHluYW1pY1BhdGhzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgZGVmYXVsdFByb3ZpZGVyLCBwcm92aWRlcnMgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbW11bmljYXRpb24nKTtcbiAgICBjb25zdCBjdXJyZW50UHJvdmlkZXIgPSBwcm92aWRlcnNbZGVmYXVsdFByb3ZpZGVyXSB8fCB7fTtcbiAgICBjb25zdCB7IGJhc2VVcmwgfSA9IGN1cnJlbnRQcm92aWRlcjtcbiAgICBjb25zdCBtZW51UGF0aCA9IGN1cnJlbnRQcm92aWRlcj8uY29uZmlnPy5tZW51O1xuXG4gICAgaWYgKGJhc2VVcmwgJiYgbWVudVBhdGgpIHtcbiAgICAgIGNvbnN0IHVybCA9IGJhc2VVcmwgKyBtZW51UGF0aDtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihudWxsKSksXG4gICAgICAgIHRhcCgocmVzcG9uc2UpID0+IHRoaXMuX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSksXG4gICAgICApLnRvUHJvbWlzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gb2YobnVsbCkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgY29uc3QgaGVhZGVyQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJyk7XG4gICAgICBoZWFkZXJDb25maWcubmF2Lml0ZW1zID0gcmVzcG9uc2UubWFwKCh7XG4gICAgICAgIGxhYmVsLCBzbHVnLCBpc1N0YXRpYywgc3VicGFnZXNcbiAgICAgIH0pID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGAvJHtzbHVnfWA7XG4gICAgICAgIC8vIGR5bmFtaWMgcGF0aCBjb250cm9sXG4gICAgICAgIGlmICghaXNTdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKGhyZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgICAgICBhbmNob3I6IHsgaHJlZiB9LFxuICAgICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgICBpZDogaHJlZlxuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBNZW51SXRlbTtcblxuICAgICAgICBpZiAoc3VicGFnZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGl0ZW0uc3VibmF2ID0gW107XG4gICAgICAgICAgc3VicGFnZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkhyZWYgPSBgLyR7ZWwuc2x1Z31gO1xuICAgICAgICAgICAgaWYgKCFlbC5pc1N0YXRpYykge1xuICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKHN1YkhyZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5zdWJuYXYucHVzaCh7XG4gICAgICAgICAgICAgIHRleHQ6IGVsLmxhYmVsLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgaHJlZjogc3ViSHJlZiB9LFxuICAgICAgICAgICAgICBfbWV0YToge1xuICAgICAgICAgICAgICAgIGlkOiBzdWJIcmVmXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2V0KCdoZWFkZXInLCBoZWFkZXJDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0R5bmFtaWNQYXRoID0gKHBhdGg6IHN0cmluZykgPT4gdGhpcy5keW5hbWljUGF0aHMuaW5jbHVkZXMocGF0aCk7XG59XG4iXX0=