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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9zZXJ2aWNlcy9tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQWFuRixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBR3hCLFlBQ1UsSUFBZ0IsRUFDaEIsYUFBbUM7UUFEbkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFKckMsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFtRTdCLGtCQUFhLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBOUR2RSxDQUFDO0lBRUosSUFBSTs7UUFDRixNQUFNLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLGVBQWUsQ0FBQztRQUNwQyxNQUFNLFFBQVEsU0FBRyxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsTUFBTSwwQ0FBRSxJQUFJLENBQUM7UUFFL0MsSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzVCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDMUIsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ2xELENBQUMsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxlQUFlLENBQUMsUUFBUTtRQUM5QixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNyQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUN6QyxFQUFFLEVBQUU7Z0JBQ0gsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsdUJBQXVCO2dCQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtnQkFFRCxNQUFNLElBQUksR0FBRztvQkFDWCxPQUFPO29CQUNQLElBQUksRUFBRSxLQUFLO29CQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQzlCLEtBQUssRUFBRTt3QkFDTCxFQUFFLEVBQUUsSUFBSTtxQkFDVDtpQkFDVSxDQUFDO2dCQUVkLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTt3QkFDdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFOzRCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDakM7d0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2YsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSTs0QkFDM0IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLOzRCQUNkLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7NEJBQ3pCLEtBQUssRUFBRTtnQ0FDTCxFQUFFLEVBQUUsT0FBTzs2QkFDWjt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Q0FHRixDQUFBOztZQWpFaUIsVUFBVTtZQUNELG9CQUFvQjs7O0FBTGxDLGFBQWE7SUFIekIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FLZ0IsVUFBVTtRQUNELG9CQUFvQjtHQUxsQyxhQUFhLENBcUV6QjtTQXJFWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG50eXBlIE1lbnVJdGVtID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGFuY2hvcjogQW5jaG9yO1xuICBfbWV0YTogYW55O1xuICBzdWJuYXY/OiBNZW51SXRlbVtdO1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTXJNZW51U2VydmljZSB7XG4gIHByaXZhdGUgZHluYW1pY1BhdGhzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgZGVmYXVsdFByb3ZpZGVyLCBwcm92aWRlcnMgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbW11bmljYXRpb24nKTtcbiAgICBjb25zdCBjdXJyZW50UHJvdmlkZXIgPSBwcm92aWRlcnNbZGVmYXVsdFByb3ZpZGVyXSB8fCB7fTtcbiAgICBjb25zdCB7IGJhc2VVcmwgfSA9IGN1cnJlbnRQcm92aWRlcjtcbiAgICBjb25zdCBtZW51UGF0aCA9IGN1cnJlbnRQcm92aWRlcj8uY29uZmlnPy5tZW51O1xuXG4gICAgaWYgKGJhc2VVcmwgJiYgbWVudVBhdGgpIHtcbiAgICAgIGNvbnN0IHVybCA9IGJhc2VVcmwgKyBtZW51UGF0aDtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihudWxsKSksXG4gICAgICAgIHRhcCgocmVzcG9uc2UpID0+IHRoaXMuX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSksXG4gICAgICApLnRvUHJvbWlzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gb2YobnVsbCkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgY29uc3QgaGVhZGVyQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaGVhZGVyJyk7XG4gICAgICBoZWFkZXJDb25maWcubmF2Lml0ZW1zID0gcmVzcG9uc2UubWFwKCh7XG4gICAgICAgIGxhYmVsLCBzbHVnLCBpc1N0YXRpYywgc3VicGFnZXMsIGNsYXNzZXNcbiAgICAgIH0pID0+IHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGAvJHtzbHVnfWA7XG4gICAgICAgIC8vIGR5bmFtaWMgcGF0aCBjb250cm9sXG4gICAgICAgIGlmICghaXNTdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKGhyZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICAgIGFuY2hvcjogc2x1ZyA/IHsgaHJlZiB9IDogbnVsbCxcbiAgICAgICAgICBfbWV0YToge1xuICAgICAgICAgICAgaWQ6IGhyZWZcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgTWVudUl0ZW07XG5cbiAgICAgICAgaWYgKHN1YnBhZ2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpdGVtLnN1Ym5hdiA9IFtdO1xuICAgICAgICAgIHN1YnBhZ2VzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJIcmVmID0gYC8ke2VsLnNsdWd9YDtcbiAgICAgICAgICAgIGlmICghZWwuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgICAgdGhpcy5keW5hbWljUGF0aHMucHVzaChzdWJIcmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0uc3VibmF2LnB1c2goe1xuICAgICAgICAgICAgICBjbGFzc2VzOiBlbC5jbGFzc2VzIHx8IG51bGwsXG4gICAgICAgICAgICAgIHRleHQ6IGVsLmxhYmVsLFxuICAgICAgICAgICAgICBhbmNob3I6IHsgaHJlZjogc3ViSHJlZiB9LFxuICAgICAgICAgICAgICBfbWV0YToge1xuICAgICAgICAgICAgICAgIGlkOiBzdWJIcmVmXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2V0KCdoZWFkZXInLCBoZWFkZXJDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0R5bmFtaWNQYXRoID0gKHBhdGg6IHN0cmluZykgPT4gdGhpcy5keW5hbWljUGF0aHMuaW5jbHVkZXMocGF0aCk7XG59XG4iXX0=