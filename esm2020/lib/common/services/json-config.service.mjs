import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { merge } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class JsonConfigService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    load(path) {
        return this.http.get(path).pipe(catchError(() => of({})), tap((response) => this._handleResponse(response))).toPromise();
    }
    _handleResponse(response) {
        // set loaded json config
        if (response) {
            Object.keys(response).forEach((key) => {
                const oldValue = this.config.get(key);
                const newValue = response[key];
                this.config.set(key, merge(oldValue, newValue));
            });
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
}
JsonConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: JsonConfigService, deps: [{ token: i1.HttpClient }, { token: i2.ConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable });
JsonConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: JsonConfigService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: JsonConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.ConfigurationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2NvbW1vbi9zZXJ2aWNlcy9qc29uLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7QUFNL0IsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUNVLElBQWdCLEVBQ2hCLE1BQTRCO1FBRDVCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7SUFDbkMsQ0FBQztJQUVKLElBQUksQ0FBQyxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzdCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDeEIsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ2xELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUFRO1FBQzlCLHlCQUF5QjtRQUN6QixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3BDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7WUFFSCxxQkFBcUI7WUFDckIsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzNCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXJELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDbkQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckQsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUUxQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7d0JBQzFDLGdCQUFnQjt3QkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7cUJBQzlEO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuQzthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs4R0EvQ1UsaUJBQWlCO2tIQUFqQixpQkFBaUIsY0FGaEIsTUFBTTsyRkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSnNvbkNvbmZpZ1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbG9hZChwYXRoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHBhdGgpLnBpcGUoXHJcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2Yoe30pKSxcclxuICAgICAgdGFwKChyZXNwb25zZSkgPT4gdGhpcy5faGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpKSxcclxuICAgICkudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgLy8gc2V0IGxvYWRlZCBqc29uIGNvbmZpZ1xyXG4gICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuY29uZmlnLmdldChrZXkpO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcmVzcG9uc2Vba2V5XTtcclxuICAgICAgICB0aGlzLmNvbmZpZy5zZXQoa2V5LCBtZXJnZShvbGRWYWx1ZSwgbmV3VmFsdWUpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBjb25maWcga2V5cyBjb2xvcnNcclxuICAgICAgaWYgKHJlc3BvbnNlWydjb25maWcta2V5cyddKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcclxuICAgICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBbXTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMocmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ10pLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY29uZmlnS2V5ID0gcmVzcG9uc2VbJ2NvbmZpZy1rZXlzJ11ba2V5XSB8fCB7fTtcclxuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNvbmZpZ0tleVsnY2xhc3MtbmFtZSddO1xyXG5cclxuICAgICAgICAgIGlmIChjb25maWdLZXkuY29sb3IgJiYgY29uZmlnS2V5LmNvbG9yLmhleCkge1xyXG4gICAgICAgICAgICAvLyBhZGQgY3NzIGNsYXNzXHJcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKGAtLWNvbG9yLSR7Y2xhc3NOYW1lfTogJHtjb25maWdLZXkuY29sb3IuaGV4fTtgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHN0eWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgIHN0eWxlcy51bnNoaWZ0KCc6cm9vdCB7Jyk7XHJcbiAgICAgICAgICBzdHlsZXMucHVzaCgnfScpO1xyXG4gICAgICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlcy5qb2luKCdcXG4nKSkpO1xyXG4gICAgICAgICAgaGVhZFRhZy5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=