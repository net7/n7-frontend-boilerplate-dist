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
                    anchor: slug ? { href } : null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQWFuRixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBR3hCLFlBQ1UsSUFBZ0IsRUFDaEIsYUFBbUM7UUFEbkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKckMsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFtRTdCLGtCQUFhLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBOUR2RSxDQUFDO0lBRUosSUFBSTs7UUFDRixNQUFNLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLGVBQWUsQ0FBQztRQUNwQyxNQUFNLFFBQVEsU0FBRyxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsTUFBTSwwQ0FBRSxJQUFJLENBQUM7UUFFL0MsSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzVCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDMUIsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ2xELENBQUMsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxlQUFlLENBQUMsUUFBUTtRQUM5QixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNyQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUN6QyxFQUFFLEVBQUU7Z0JBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsdUJBQXVCO2dCQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtnQkFFRCxNQUFNLElBQUksR0FBRztvQkFDWCxPQUFPO29CQUNQLElBQUksRUFBRSxLQUFLO29CQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQzlCLEtBQUssRUFBRTt3QkFDTCxFQUFFLEVBQUUsSUFBSTtxQkFDVDtpQkFDVSxDQUFDO2dCQUVkLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTt3QkFDdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFOzRCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDakM7d0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2YsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSTs0QkFDM0IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLOzRCQUNkLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7NEJBQ3pCLEtBQUssRUFBRTtnQ0FDTCxFQUFFLEVBQUUsT0FBTzs2QkFDWjt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Q0FHRixDQUFBOztZQWpFaUIsVUFBVTtZQUNELG9CQUFvQjs7O0FBTGxDLGFBQWE7SUFIekIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FLZ0IsVUFBVTtRQUNELG9CQUFvQjtHQUxsQyxhQUFhLENBcUV6QjtTQXJFWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuXHJcbnR5cGUgTWVudUl0ZW0gPSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGFuY2hvcjogQW5jaG9yO1xyXG4gIF9tZXRhOiBhbnk7XHJcbiAgc3VibmF2PzogTWVudUl0ZW1bXTtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJNZW51U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkeW5hbWljUGF0aHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHsgZGVmYXVsdFByb3ZpZGVyLCBwcm92aWRlcnMgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbW11bmljYXRpb24nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyc1tkZWZhdWx0UHJvdmlkZXJdIHx8IHt9O1xyXG4gICAgY29uc3QgeyBiYXNlVXJsIH0gPSBjdXJyZW50UHJvdmlkZXI7XHJcbiAgICBjb25zdCBtZW51UGF0aCA9IGN1cnJlbnRQcm92aWRlcj8uY29uZmlnPy5tZW51O1xyXG5cclxuICAgIGlmIChiYXNlVXJsICYmIG1lbnVQYXRoKSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IGJhc2VVcmwgKyBtZW51UGF0aDtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpLFxyXG4gICAgICAgIHRhcCgocmVzcG9uc2UpID0+IHRoaXMuX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSksXHJcbiAgICAgICkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2YobnVsbCkudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlckNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpO1xyXG4gICAgICBoZWFkZXJDb25maWcubmF2Lml0ZW1zID0gcmVzcG9uc2UubWFwKCh7XHJcbiAgICAgICAgbGFiZWwsIHNsdWcsIGlzU3RhdGljLCBzdWJwYWdlcywgY2xhc3Nlc1xyXG4gICAgICB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHJlZiA9IGAvJHtzbHVnfWA7XHJcbiAgICAgICAgLy8gZHluYW1pYyBwYXRoIGNvbnRyb2xcclxuICAgICAgICBpZiAoIWlzU3RhdGljKSB7XHJcbiAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKGhyZWYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgICAgIGNsYXNzZXMsXHJcbiAgICAgICAgICB0ZXh0OiBsYWJlbCxcclxuICAgICAgICAgIGFuY2hvcjogc2x1ZyA/IHsgaHJlZiB9IDogbnVsbCxcclxuICAgICAgICAgIF9tZXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiBocmVmXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBhcyBNZW51SXRlbTtcclxuXHJcbiAgICAgICAgaWYgKHN1YnBhZ2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGl0ZW0uc3VibmF2ID0gW107XHJcbiAgICAgICAgICBzdWJwYWdlcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJIcmVmID0gYC8ke2VsLnNsdWd9YDtcclxuICAgICAgICAgICAgaWYgKCFlbC5pc1N0YXRpYykge1xyXG4gICAgICAgICAgICAgIHRoaXMuZHluYW1pY1BhdGhzLnB1c2goc3ViSHJlZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5zdWJuYXYucHVzaCh7XHJcbiAgICAgICAgICAgICAgY2xhc3NlczogZWwuY2xhc3NlcyB8fCBudWxsLFxyXG4gICAgICAgICAgICAgIHRleHQ6IGVsLmxhYmVsLFxyXG4gICAgICAgICAgICAgIGFuY2hvcjogeyBocmVmOiBzdWJIcmVmIH0sXHJcbiAgICAgICAgICAgICAgX21ldGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzdWJIcmVmXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zZXQoJ2hlYWRlcicsIGhlYWRlckNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEeW5hbWljUGF0aCA9IChwYXRoOiBzdHJpbmcpID0+IHRoaXMuZHluYW1pY1BhdGhzLmluY2x1ZGVzKHBhdGgpO1xyXG59XHJcbiJdfQ==