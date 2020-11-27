import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
let JsonConfigService = class JsonConfigService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    load(path, staticConfig) {
        return this.http.get(path).pipe(catchError(() => of({})), tap((response) => this._handleResponse(response, staticConfig))).toPromise();
    }
    _handleResponse(response, staticConfig) {
        // set config defaults
        if (staticConfig) {
            Object.keys(staticConfig).forEach((key) => this.config.set(key, staticConfig[key]));
        }
        // set loaded json config
        if (response) {
            Object.keys(response).forEach((key) => this.config.set(key, response[key]));
            // config keys colors
            if (response['config-keys']) {
                const headTag = document.querySelector('head');
                const styleElement = document.createElement('style');
                const styles = [];
                Object.keys(response['config-keys']).forEach((key) => {
                    const configKey = response['config-keys'][key] || {};
                    const className = configKey['class-name'];
                    if (configKey.color && configKey.color.hex) {
                        // add css class
                        styles.push(`--color-${className}: ${configKey.color.hex};`);
                    }
                });
                if (styles.length) {
                    styles.unshift(':root {');
                    styles.push('}');
                    styleElement.appendChild(document.createTextNode(styles.join('\n')));
                    headTag.appendChild(styleElement);
                }
            }
        }
    }
};
JsonConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigurationService }
];
JsonConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function JsonConfigService_Factory() { return new JsonConfigService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: JsonConfigService, providedIn: "root" });
JsonConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [HttpClient,
        ConfigurationService])
], JsonConfigService);
export { JsonConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vc2VydmljZXMvanNvbi1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBSy9ELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQzVCLFlBQ1UsSUFBZ0IsRUFDaEIsTUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNuQyxDQUFDO0lBRUosSUFBSSxDQUFDLElBQUksRUFBRSxZQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM3QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FDaEUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sZUFBZSxDQUFDLFFBQVEsRUFBRSxZQUFZO1FBQzVDLHNCQUFzQjtRQUN0QixJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckY7UUFFRCx5QkFBeUI7UUFDekIsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUUscUJBQXFCO1lBQ3JCLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMzQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVyRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBRWxCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ25ELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JELE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFMUMsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO3dCQUMxQyxnQkFBZ0I7d0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3FCQUM5RDtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBL0NpQixVQUFVO1lBQ1Isb0JBQW9COzs7QUFIM0IsaUJBQWlCO0lBSDdCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7cUNBR2dCLFVBQVU7UUFDUixvQkFBb0I7R0FIM0IsaUJBQWlCLENBaUQ3QjtTQWpEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkNvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgbG9hZChwYXRoLCBzdGF0aWNDb25maWc/KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChwYXRoKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZih7fSkpLFxuICAgICAgdGFwKChyZXNwb25zZSkgPT4gdGhpcy5faGFuZGxlUmVzcG9uc2UocmVzcG9uc2UsIHN0YXRpY0NvbmZpZykpLFxuICAgICkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSwgc3RhdGljQ29uZmlnKSB7XG4gICAgLy8gc2V0IGNvbmZpZyBkZWZhdWx0c1xuICAgIGlmIChzdGF0aWNDb25maWcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRpY0NvbmZpZykuZm9yRWFjaCgoa2V5KSA9PiB0aGlzLmNvbmZpZy5zZXQoa2V5LCBzdGF0aWNDb25maWdba2V5XSkpO1xuICAgIH1cblxuICAgIC8vIHNldCBsb2FkZWQganNvbiBjb25maWdcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKChrZXkpID0+IHRoaXMuY29uZmlnLnNldChrZXksIHJlc3BvbnNlW2tleV0pKTtcblxuICAgICAgLy8gY29uZmlnIGtleXMgY29sb3JzXG4gICAgICBpZiAocmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ10pIHtcbiAgICAgICAgY29uc3QgaGVhZFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgICBjb25zdCBzdHlsZXMgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhyZXNwb25zZVsnY29uZmlnLWtleXMnXSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29uZmlnS2V5ID0gcmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ11ba2V5XSB8fCB7fTtcbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjb25maWdLZXlbJ2NsYXNzLW5hbWUnXTtcblxuICAgICAgICAgIGlmIChjb25maWdLZXkuY29sb3IgJiYgY29uZmlnS2V5LmNvbG9yLmhleCkge1xuICAgICAgICAgICAgLy8gYWRkIGNzcyBjbGFzc1xuICAgICAgICAgICAgc3R5bGVzLnB1c2goYC0tY29sb3ItJHtjbGFzc05hbWV9OiAke2NvbmZpZ0tleS5jb2xvci5oZXh9O2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN0eWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBzdHlsZXMudW5zaGlmdCgnOnJvb3QgeycpO1xuICAgICAgICAgIHN0eWxlcy5wdXNoKCd9Jyk7XG4gICAgICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlcy5qb2luKCdcXG4nKSkpO1xuICAgICAgICAgIGhlYWRUYWcuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19