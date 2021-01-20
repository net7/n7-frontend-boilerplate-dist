import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "./configuration.service";
let LocalConfigService = class LocalConfigService {
    constructor(config) {
        this.config = config;
    }
    load(config) {
        return of(true).pipe(tap(() => {
            if (config) {
                Object.keys(config).forEach((key) => this.config.set(key, config[key]));
                // config keys colors
                if (config['config-keys']) {
                    const headTag = document.querySelector('head');
                    const styleElement = document.createElement('style');
                    const styles = [];
                    Object.keys(config['config-keys']).forEach((key) => {
                        const configKey = config['config-keys'][key] || {};
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
        })).toPromise();
    }
};
LocalConfigService.ctorParameters = () => [
    { type: ConfigurationService }
];
LocalConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LocalConfigService_Factory() { return new LocalConfigService(i0.ɵɵinject(i1.ConfigurationService)); }, token: LocalConfigService, providedIn: "root" });
LocalConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], LocalConfigService);
export { LocalConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL2xvY2FsLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFLL0QsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDN0IsWUFDVSxNQUE0QjtRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNuQyxDQUFDO0lBRUosSUFBSSxDQUFDLE1BQU07UUFDVCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ2xCLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXhFLHFCQUFxQjtnQkFDckIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ3pCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQy9DLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXJELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFFbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDakQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbkQsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUUxQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7NEJBQzFDLGdCQUFnQjs0QkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7eUJBQzlEO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTt3QkFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUNuQztpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTs7WUFyQ21CLG9CQUFvQjs7O0FBRjNCLGtCQUFrQjtJQUg5QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO3FDQUdrQixvQkFBb0I7R0FGM0Isa0JBQWtCLENBdUM5QjtTQXZDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhbENvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICkge31cblxuICBsb2FkKGNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG9mKHRydWUpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKChrZXkpID0+IHRoaXMuY29uZmlnLnNldChrZXksIGNvbmZpZ1trZXldKSk7XG5cbiAgICAgICAgICAvLyBjb25maWcga2V5cyBjb2xvcnNcbiAgICAgICAgICBpZiAoY29uZmlnWydjb25maWcta2V5cyddKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gW107XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZ1snY29uZmlnLWtleXMnXSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0tleSA9IGNvbmZpZ1snY29uZmlnLWtleXMnXVtrZXldIHx8IHt9O1xuICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjb25maWdLZXlbJ2NsYXNzLW5hbWUnXTtcblxuICAgICAgICAgICAgICBpZiAoY29uZmlnS2V5LmNvbG9yICYmIGNvbmZpZ0tleS5jb2xvci5oZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBhZGQgY3NzIGNsYXNzXG4gICAgICAgICAgICAgICAgc3R5bGVzLnB1c2goYC0tY29sb3ItJHtjbGFzc05hbWV9OiAke2NvbmZpZ0tleS5jb2xvci5oZXh9O2ApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHN0eWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgc3R5bGVzLnVuc2hpZnQoJzpyb290IHsnKTtcbiAgICAgICAgICAgICAgc3R5bGVzLnB1c2goJ30nKTtcbiAgICAgICAgICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlcy5qb2luKCdcXG4nKSkpO1xuICAgICAgICAgICAgICBoZWFkVGFnLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApLnRvUHJvbWlzZSgpO1xuICB9XG59XG4iXX0=