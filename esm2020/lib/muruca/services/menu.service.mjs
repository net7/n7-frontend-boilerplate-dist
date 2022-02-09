import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import linksHelper from '../helpers/links-helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../common/services/configuration.service";
export class MrMenuService {
    constructor(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.dynamicPaths = [];
        this.isDynamicPath = (path) => this.dynamicPaths.includes(path);
    }
    load() {
        const { defaultProvider, providers } = this.configuration.get('communication');
        const currentProvider = providers[defaultProvider] || {};
        const { baseUrl } = currentProvider;
        const menuPath = currentProvider?.config?.menu;
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
                const href = slug ? `/${slug}` : null;
                // dynamic path control
                if (!isStatic) {
                    this.dynamicPaths.push(href);
                }
                const item = {
                    classes,
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
                    subpages.forEach((el) => {
                        const subHref = el.slug ? `/${el.slug}` : null;
                        if (!el.isStatic) {
                            this.dynamicPaths.push(subHref);
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
    }
}
MrMenuService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrMenuService, deps: [{ token: i1.HttpClient }, { token: i2.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
MrMenuService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrMenuService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrMenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.ConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL3NlcnZpY2VzL21lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcxQixPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQWFsRCxNQUFNLE9BQU8sYUFBYTtJQUd4QixZQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRG5DLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBSnJDLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBeUU3QixrQkFBYSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQXBFdkUsQ0FBQztJQUVKLElBQUk7UUFDRixNQUFNLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLGVBQWUsQ0FBQztRQUNwQyxNQUFNLFFBQVEsR0FBRyxlQUFlLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztRQUUvQyxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUMvQixP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b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcclxuXHJcbnR5cGUgTWVudUl0ZW0gPSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGFuY2hvcjogQW5jaG9yO1xyXG4gIF9tZXRhOiBhbnk7XHJcbiAgc3VibmF2PzogTWVudUl0ZW1bXTtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJNZW51U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkeW5hbWljUGF0aHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHsgZGVmYXVsdFByb3ZpZGVyLCBwcm92aWRlcnMgfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbW11bmljYXRpb24nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyc1tkZWZhdWx0UHJvdmlkZXJdIHx8IHt9O1xyXG4gICAgY29uc3QgeyBiYXNlVXJsIH0gPSBjdXJyZW50UHJvdmlkZXI7XHJcbiAgICBjb25zdCBtZW51UGF0aCA9IGN1cnJlbnRQcm92aWRlcj8uY29uZmlnPy5tZW51O1xyXG5cclxuICAgIGlmIChiYXNlVXJsICYmIG1lbnVQYXRoKSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IGJhc2VVcmwgKyBtZW51UGF0aDtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpLFxyXG4gICAgICAgIHRhcCgocmVzcG9uc2UpID0+IHRoaXMuX2hhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSksXHJcbiAgICAgICkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2YobnVsbCkudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlckNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpO1xyXG4gICAgICBoZWFkZXJDb25maWcubmF2Lml0ZW1zID0gcmVzcG9uc2UubWFwKCh7XHJcbiAgICAgICAgbGFiZWwsIHNsdWcsIGlzU3RhdGljLCBzdWJwYWdlcywgY2xhc3Nlc1xyXG4gICAgICB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHJlZiA9IHNsdWcgPyBgLyR7c2x1Z31gIDogbnVsbDtcclxuICAgICAgICAvLyBkeW5hbWljIHBhdGggY29udHJvbFxyXG4gICAgICAgIGlmICghaXNTdGF0aWMpIHtcclxuICAgICAgICAgIHRoaXMuZHluYW1pY1BhdGhzLnB1c2goaHJlZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0ge1xyXG4gICAgICAgICAgY2xhc3NlcyxcclxuICAgICAgICAgIHRleHQ6IGxhYmVsLFxyXG4gICAgICAgICAgYW5jaG9yOiBocmVmID8ge1xyXG4gICAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGhyZWYpLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaHJlZilcclxuICAgICAgICAgIH0gOiBudWxsLFxyXG4gICAgICAgICAgX21ldGE6IHtcclxuICAgICAgICAgICAgaWQ6IGhyZWZcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGFzIE1lbnVJdGVtO1xyXG5cclxuICAgICAgICBpZiAoc3VicGFnZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgaXRlbS5zdWJuYXYgPSBbXTtcclxuICAgICAgICAgIHN1YnBhZ2VzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YkhyZWYgPSBlbC5zbHVnID8gYC8ke2VsLnNsdWd9YCA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghZWwuaXNTdGF0aWMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKHN1YkhyZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uc3VibmF2LnB1c2goe1xyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGVsLmNsYXNzZXMgfHwgbnVsbCxcclxuICAgICAgICAgICAgICB0ZXh0OiBlbC5sYWJlbCxcclxuICAgICAgICAgICAgICBhbmNob3I6IHN1YkhyZWYgPyB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKHN1YkhyZWYpLFxyXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKHN1YkhyZWYpXHJcbiAgICAgICAgICAgICAgfSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgX21ldGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzdWJIcmVmXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zZXQoJ2hlYWRlcicsIGhlYWRlckNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEeW5hbWljUGF0aCA9IChwYXRoOiBzdHJpbmcpID0+IHRoaXMuZHluYW1pY1BhdGhzLmluY2x1ZGVzKHBhdGgpO1xyXG59XHJcbiJdfQ==