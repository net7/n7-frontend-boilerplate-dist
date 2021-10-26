import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from '../../common/services/configuration.service';
import linksHelper from '../helpers/links-helper';
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
                var href = slug ? "/" + slug : null;
                // dynamic path control
                if (!isStatic) {
                    _this.dynamicPaths.push(href);
                }
                var item = {
                    classes: classes,
                    text: label,
                    anchor: href ? {
                        href: linksHelper.getRouterLink(href),
                        queryParams: linksHelper.getQueryParams(href)
                    } : null,
                    _meta: {
                        id: href
                    }
                };
                if (subpages !== undefined) {
                    item.subnav = [];
                    subpages.forEach(function (el) {
                        var subHref = el.slug ? "/" + el.slug : null;
                        if (!el.isStatic) {
                            _this.dynamicPaths.push(subHref);
                        }
                        item.subnav.push({
                            classes: el.classes || null,
                            text: el.label,
                            anchor: subHref ? {
                                href: linksHelper.getRouterLink(subHref),
                                queryParams: linksHelper.getQueryParams(subHref)
                            } : null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQWFsRDtJQUdFLHVCQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRjdDLGlCQUdJO1FBRk0sU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKckMsaUJBQVksR0FBYSxFQUFFLENBQUM7UUF5RTdCLGtCQUFhLEdBQUcsVUFBQyxJQUFZLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztJQXBFdkUsQ0FBQztJQUVKLDRCQUFJLEdBQUo7UUFBQSxpQkFjQzs7UUFiTyxJQUFBLDRDQUF3RSxFQUF0RSxvQ0FBZSxFQUFFLHdCQUFxRCxDQUFDO1FBQy9FLElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakQsSUFBQSxpQ0FBTyxDQUFxQjtRQUNwQyxJQUFNLFFBQVEsU0FBRyxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsTUFBTSwwQ0FBRSxJQUFJLENBQUM7UUFFL0MsSUFBSSxPQUFPLElBQUksUUFB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Q0FBQzs7Z0JBcEVlLFVBQVU7Z0JBQ0Qsb0JBQW9COzs7SUFMbEMsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUtnQixVQUFVO1lBQ0Qsb0JBQW9CO09BTGxDLGFBQWEsQ0EyRXpCO3dCQTlGRDtDQThGQyxBQTNFRCxJQTJFQztTQTNFWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcblxudHlwZSBNZW51SXRlbSA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICBhbmNob3I6IEFuY2hvcjtcbiAgX21ldGE6IGFueTtcbiAgc3VibmF2PzogTWVudUl0ZW1bXTtcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yTWVudVNlcnZpY2Uge1xuICBwcml2YXRlIGR5bmFtaWNQYXRoczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgKSB7fVxuXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IGRlZmF1bHRQcm92aWRlciwgcHJvdmlkZXJzIH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb21tdW5pY2F0aW9uJyk7XG4gICAgY29uc3QgY3VycmVudFByb3ZpZGVyID0gcHJvdmlkZXJzW2RlZmF1bHRQcm92aWRlcl0gfHwge307XG4gICAgY29uc3QgeyBiYXNlVXJsIH0gPSBjdXJyZW50UHJvdmlkZXI7XG4gICAgY29uc3QgbWVudVBhdGggPSBjdXJyZW50UHJvdmlkZXI/LmNvbmZpZz8ubWVudTtcblxuICAgIGlmIChiYXNlVXJsICYmIG1lbnVQYXRoKSB7XG4gICAgICBjb25zdCB1cmwgPSBiYXNlVXJsICsgbWVudVBhdGg7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlKSA9PiB0aGlzLl9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkpLFxuICAgICAgKS50b1Byb21pc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKG51bGwpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGhlYWRlckNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpO1xuICAgICAgaGVhZGVyQ29uZmlnLm5hdi5pdGVtcyA9IHJlc3BvbnNlLm1hcCgoe1xuICAgICAgICBsYWJlbCwgc2x1ZywgaXNTdGF0aWMsIHN1YnBhZ2VzLCBjbGFzc2VzXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBzbHVnID8gYC8ke3NsdWd9YCA6IG51bGw7XG4gICAgICAgIC8vIGR5bmFtaWMgcGF0aCBjb250cm9sXG4gICAgICAgIGlmICghaXNTdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKGhyZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICAgIGFuY2hvcjogaHJlZiA/IHtcbiAgICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsoaHJlZiksXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaHJlZilcbiAgICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgICBfbWV0YToge1xuICAgICAgICAgICAgaWQ6IGhyZWZcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgTWVudUl0ZW07XG5cbiAgICAgICAgaWYgKHN1YnBhZ2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpdGVtLnN1Ym5hdiA9IFtdO1xuICAgICAgICAgIHN1YnBhZ2VzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJIcmVmID0gZWwuc2x1ZyA/IGAvJHtlbC5zbHVnfWAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKCFlbC5pc1N0YXRpYykge1xuICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKHN1YkhyZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5zdWJuYXYucHVzaCh7XG4gICAgICAgICAgICAgIGNsYXNzZXM6IGVsLmNsYXNzZXMgfHwgbnVsbCxcbiAgICAgICAgICAgICAgdGV4dDogZWwubGFiZWwsXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSHJlZiA/IHtcbiAgICAgICAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKHN1YkhyZWYpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhzdWJIcmVmKVxuICAgICAgICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICAgICAgICBpZDogc3ViSHJlZlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnNldCgnaGVhZGVyJywgaGVhZGVyQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNEeW5hbWljUGF0aCA9IChwYXRoOiBzdHJpbmcpID0+IHRoaXMuZHluYW1pY1BhdGhzLmluY2x1ZGVzKHBhdGgpO1xufVxuIl19