import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from '../../common/services/configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../common/services/configuration.service";
let MrMenuService = class MrMenuService {
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.dynamicPaths = [];
        this.isDynamicPath = (path) => this.dynamicPaths.includes(path);
    }
    load() {
        var _a;
        const { defaultProvider, providers } = this.configuration.get('communication');
        const currentProvider = providers[defaultProvider] || {};
        const { baseUrl } = currentProvider;
        const menuPath = (_a = currentProvider === null || currentProvider === void 0 ? void 0 : currentProvider.config) === null || _a === void 0 ? void 0 : _a.menu;
        if (baseUrl && menuPath) {
            const url = baseUrl + menuPath;
            return this.http.get(url).pipe(catchError(() => of(null)), tap((response) => this._handleResponse(response))).toPromise();
        }
        return of(null).toPromise();
    }
    _handleResponse(response) {
        if (response) {
            const headerConfig = this.configuration.get('header');
            headerConfig.nav.items = response.map(({ label, slug, isStatic, subpages, classes }) => {
                const href = `/${slug}`;
                // dynamic path control
                if (!isStatic) {
                    this.dynamicPaths.push(href);
                }
                const item = {
                    classes,
                    text: label,
                    anchor: { href },
                    _meta: {
                        id: href
                    }
                };
                if (subpages !== undefined) {
                    item.subnav = [];
                    subpages.forEach((el) => {
                        const subHref = `/${el.slug}`;
                        if (!el.isStatic) {
                            this.dynamicPaths.push(subHref);
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
    }
};
MrMenuService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
MrMenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MrMenuService_Factory() { return new MrMenuService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: MrMenuService, providedIn: "root" });
MrMenuService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient,
        ConfigurationService])
], MrMenuService);
export { MrMenuService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQWFuRixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBR3hCLFlBQ1UsSUFBZ0IsRUFDaEIsYUFBbUM7UUFEbkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKckMsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFtRTdCLGtCQUFhLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBOUR2RSxDQUFDO0lBRUosSUFBSTs7UUFDRixNQUFNLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLGVBQWUsQ0FBQztRQUNwQyxNQUFNLFFBQVEsU0FBRyxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsTUFBTSwwQ0FBRSxJQUFJLENBQUM7UUFFL0MsSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzVCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDMUIsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ2xELENBQUMsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxlQUFlLENBQUMsUUFBUTtRQUM5QixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNyQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUN6QyxFQUFFLEVBQUU7Z0JBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsdUJBQXVCO2dCQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtnQkFFRCxNQUFNLElBQUksR0FBRztvQkFDWCxPQUFPO29CQUNQLElBQUksRUFBRSxLQUFLO29CQUNYLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRTtvQkFDaEIsS0FBSyxFQUFFO3dCQUNMLEVBQUUsRUFBRSxJQUFJO3FCQUNUO2lCQUNVLENBQUM7Z0JBRWQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO29CQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO3dCQUN0QixNQUFNLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7NEJBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNqQzt3QkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDZixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxJQUFJOzRCQUMzQixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7NEJBQ2QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs0QkFDekIsS0FBSyxFQUFFO2dDQUNMLEVBQUUsRUFBRSxPQUFPOzZCQUNaO3lCQUNGLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztDQUdGLENBQUE7O1lBakVpQixVQUFVO1lBQ0Qsb0JBQW9COzs7QUFMbEMsYUFBYTtJQUh6QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO3FDQUtnQixVQUFVO1FBQ0Qsb0JBQW9CO0dBTGxDLGFBQWEsQ0FxRXpCO1NBckVZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5cclxudHlwZSBNZW51SXRlbSA9IHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgYW5jaG9yOiBBbmNob3I7XHJcbiAgX21ldGE6IGFueTtcclxuICBzdWJuYXY/OiBNZW51SXRlbVtdO1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNck1lbnVTZXJ2aWNlIHtcclxuICBwcml2YXRlIGR5bmFtaWNQYXRoczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgeyBkZWZhdWx0UHJvdmlkZXIsIHByb3ZpZGVycyB9ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29tbXVuaWNhdGlvbicpO1xyXG4gICAgY29uc3QgY3VycmVudFByb3ZpZGVyID0gcHJvdmlkZXJzW2RlZmF1bHRQcm92aWRlcl0gfHwge307XHJcbiAgICBjb25zdCB7IGJhc2VVcmwgfSA9IGN1cnJlbnRQcm92aWRlcjtcclxuICAgIGNvbnN0IG1lbnVQYXRoID0gY3VycmVudFByb3ZpZGVyPy5jb25maWc/Lm1lbnU7XHJcblxyXG4gICAgaWYgKGJhc2VVcmwgJiYgbWVudVBhdGgpIHtcclxuICAgICAgY29uc3QgdXJsID0gYmFzZVVybCArIG1lbnVQYXRoO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihudWxsKSksXHJcbiAgICAgICAgdGFwKChyZXNwb25zZSkgPT4gdGhpcy5faGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpKSxcclxuICAgICAgKS50b1Byb21pc2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvZihudWxsKS50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgY29uc3QgaGVhZGVyQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJyk7XHJcbiAgICAgIGhlYWRlckNvbmZpZy5uYXYuaXRlbXMgPSByZXNwb25zZS5tYXAoKHtcclxuICAgICAgICBsYWJlbCwgc2x1ZywgaXNTdGF0aWMsIHN1YnBhZ2VzLCBjbGFzc2VzXHJcbiAgICAgIH0pID0+IHtcclxuICAgICAgICBjb25zdCBocmVmID0gYC8ke3NsdWd9YDtcclxuICAgICAgICAvLyBkeW5hbWljIHBhdGggY29udHJvbFxyXG4gICAgICAgIGlmICghaXNTdGF0aWMpIHtcclxuICAgICAgICAgIHRoaXMuZHluYW1pY1BhdGhzLnB1c2goaHJlZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICAgICAgY2xhc3NlcyxcclxuICAgICAgICAgIHRleHQ6IGxhYmVsLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IGhyZWYgfSxcclxuICAgICAgICAgIF9tZXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBocmVmXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBhcyBNZW51SXRlbTtcclxuXHJcbiAgICAgICAgaWYgKHN1YnBhZ2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGl0ZW0uc3VibmF2ID0gW107XHJcbiAgICAgICAgICBzdWJwYWdlcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJIcmVmID0gYC8ke2VsLnNsdWd9YDtcclxuICAgICAgICAgICAgaWYgKCFlbC5pc1N0YXRpYykge1xyXG4gICAgICAgICAgICAgIHRoaXMuZHluYW1pY1BhdGhzLnB1c2goc3ViSHJlZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5zdWJuYXYucHVzaCh7XHJcbiAgICAgICAgICAgICAgY2xhc3NlczogZWwuY2xhc3NlcyB8fCBudWxsLFxyXG4gICAgICAgICAgICAgIHRleHQ6IGVsLmxhYmVsLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBocmVmOiBzdWJIcmVmIH0sXHJcbiAgICAgICAgICAgICAgX21ldGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzdWJIcmVmXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zZXQoJ2hlYWRlcicsIGhlYWRlckNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEeW5hbWljUGF0aCA9IChwYXRoOiBzdHJpbmcpID0+IHRoaXMuZHluYW1pY1BhdGhzLmluY2x1ZGVzKHBhdGgpO1xyXG59XHJcbiJdfQ==