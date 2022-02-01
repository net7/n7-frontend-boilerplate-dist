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
MrMenuService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrMenuService, deps: [{ token: i1.HttpClient }, { token: i2.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
MrMenuService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrMenuService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: MrMenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.ConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL3NlcnZpY2VzL21lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcxQixPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQWFsRCxNQUFNLE9BQU8sYUFBYTtJQUd4QixZQUNVLElBQWdCLEVBQ2hCLGFBQW1DO1FBRG5DLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBSnJDLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBeUU3QixrQkFBYSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQXBFdkUsQ0FBQztJQUVKLElBQUk7UUFDRixNQUFNLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLGVBQWUsQ0FBQztRQUNwQyxNQUFNLFFBQVEsR0FBRyxlQUFlLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztRQUUvQyxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUMvQixP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b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcblxudHlwZSBNZW51SXRlbSA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICBhbmNob3I6IEFuY2hvcjtcbiAgX21ldGE6IGFueTtcbiAgc3VibmF2PzogTWVudUl0ZW1bXTtcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yTWVudVNlcnZpY2Uge1xuICBwcml2YXRlIGR5bmFtaWNQYXRoczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgKSB7fVxuXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IGRlZmF1bHRQcm92aWRlciwgcHJvdmlkZXJzIH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb21tdW5pY2F0aW9uJyk7XG4gICAgY29uc3QgY3VycmVudFByb3ZpZGVyID0gcHJvdmlkZXJzW2RlZmF1bHRQcm92aWRlcl0gfHwge307XG4gICAgY29uc3QgeyBiYXNlVXJsIH0gPSBjdXJyZW50UHJvdmlkZXI7XG4gICAgY29uc3QgbWVudVBhdGggPSBjdXJyZW50UHJvdmlkZXI/LmNvbmZpZz8ubWVudTtcblxuICAgIGlmIChiYXNlVXJsICYmIG1lbnVQYXRoKSB7XG4gICAgICBjb25zdCB1cmwgPSBiYXNlVXJsICsgbWVudVBhdGg7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YobnVsbCkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlKSA9PiB0aGlzLl9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkpLFxuICAgICAgKS50b1Byb21pc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKG51bGwpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGhlYWRlckNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hlYWRlcicpO1xuICAgICAgaGVhZGVyQ29uZmlnLm5hdi5pdGVtcyA9IHJlc3BvbnNlLm1hcCgoe1xuICAgICAgICBsYWJlbCwgc2x1ZywgaXNTdGF0aWMsIHN1YnBhZ2VzLCBjbGFzc2VzXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBzbHVnID8gYC8ke3NsdWd9YCA6IG51bGw7XG4gICAgICAgIC8vIGR5bmFtaWMgcGF0aCBjb250cm9sXG4gICAgICAgIGlmICghaXNTdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKGhyZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICAgIGFuY2hvcjogaHJlZiA/IHtcbiAgICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsoaHJlZiksXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaHJlZilcbiAgICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgICBfbWV0YToge1xuICAgICAgICAgICAgaWQ6IGhyZWZcbiAgICAgICAgICB9XG4gICAgICAgIH0gYXMgTWVudUl0ZW07XG5cbiAgICAgICAgaWYgKHN1YnBhZ2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpdGVtLnN1Ym5hdiA9IFtdO1xuICAgICAgICAgIHN1YnBhZ2VzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJIcmVmID0gZWwuc2x1ZyA/IGAvJHtlbC5zbHVnfWAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKCFlbC5pc1N0YXRpYykge1xuICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNQYXRocy5wdXNoKHN1YkhyZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5zdWJuYXYucHVzaCh7XG4gICAgICAgICAgICAgIGNsYXNzZXM6IGVsLmNsYXNzZXMgfHwgbnVsbCxcbiAgICAgICAgICAgICAgdGV4dDogZWwubGFiZWwsXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSHJlZiA/IHtcbiAgICAgICAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKHN1YkhyZWYpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhzdWJIcmVmKVxuICAgICAgICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICAgICAgICBpZDogc3ViSHJlZlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnNldCgnaGVhZGVyJywgaGVhZGVyQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNEeW5hbWljUGF0aCA9IChwYXRoOiBzdHJpbmcpID0+IHRoaXMuZHluYW1pY1BhdGhzLmluY2x1ZGVzKHBhdGgpO1xufVxuIl19