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
    MrMenuService.prototype.load = function (path) {
        var _this = this;
        return this.http.get(path).pipe(catchError(function () { return of(null); }), tap(function (response) { return _this._handleResponse(response); })).toPromise();
    };
    MrMenuService.prototype._handleResponse = function (response) {
        var _this = this;
        if (response) {
            var headerConfig = this.configuration.get('header');
            headerConfig.nav.items = response.map(function (_a) {
                var label = _a.label, slug = _a.slug, isStatic = _a.isStatic;
                var href = "/" + slug;
                // dynamic path control
                if (!isStatic) {
                    _this.dynamicPaths.push(href);
                }
                return {
                    text: label,
                    anchor: { href: href },
                    _meta: {
                        id: href
                    }
                };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQUtuRjtJQUdFLHVCQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRjdDLGlCQUdJO1FBRk0sU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKckMsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFtQzdCLGtCQUFhLEdBQUcsVUFBQyxJQUFZLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztJQTlCdkUsQ0FBQztJQUVKLDRCQUFJLEdBQUosVUFBSyxJQUFJO1FBQVQsaUJBS0M7UUFKQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDN0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQVIsQ0FBUSxDQUFDLEVBQzFCLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FDbEQsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sdUNBQWUsR0FBdkIsVUFBd0IsUUFBUTtRQUFoQyxpQkFtQkM7UUFsQkMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RCxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBeUI7b0JBQXZCLGdCQUFLLEVBQUUsY0FBSSxFQUFFLHNCQUFRO2dCQUM1RCxJQUFNLElBQUksR0FBRyxNQUFJLElBQU0sQ0FBQztnQkFDeEIsdUJBQXVCO2dCQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCxPQUFPO29CQUNMLElBQUksRUFBRSxLQUFLO29CQUNYLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFO29CQUNoQixLQUFLLEVBQUU7d0JBQ0wsRUFBRSxFQUFFLElBQUk7cUJBQ1Q7aUJBQ0YsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0JBOUJlLFVBQVU7Z0JBQ0Qsb0JBQW9COzs7SUFMbEMsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUtnQixVQUFVO1lBQ0Qsb0JBQW9CO09BTGxDLGFBQWEsQ0FxQ3pCO3dCQTlDRDtDQThDQyxBQXJDRCxJQXFDQztTQXJDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTXJNZW51U2VydmljZSB7XG4gIHByaXZhdGUgZHluYW1pY1BhdGhzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgbG9hZChwYXRoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChwYXRoKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihudWxsKSksXG4gICAgICB0YXAoKHJlc3BvbnNlKSA9PiB0aGlzLl9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkpLFxuICAgICkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgY29uc3QgaGVhZGVyQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJyk7XG4gICAgICBoZWFkZXJDb25maWcubmF2Lml0ZW1zID0gcmVzcG9uc2UubWFwKCh7IGxhYmVsLCBzbHVnLCBpc1N0YXRpYyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBgLyR7c2x1Z31gO1xuICAgICAgICAvLyBkeW5hbWljIHBhdGggY29udHJvbFxuICAgICAgICBpZiAoIWlzU3RhdGljKSB7XG4gICAgICAgICAgdGhpcy5keW5hbWljUGF0aHMucHVzaChocmVmKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICAgIGFuY2hvcjogeyBocmVmIH0sXG4gICAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICAgIGlkOiBocmVmXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2V0KCdoZWFkZXInLCBoZWFkZXJDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0R5bmFtaWNQYXRoID0gKHBhdGg6IHN0cmluZykgPT4gdGhpcy5keW5hbWljUGF0aHMuaW5jbHVkZXMocGF0aCk7XG59XG4iXX0=