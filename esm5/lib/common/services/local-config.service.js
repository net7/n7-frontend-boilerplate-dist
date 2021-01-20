import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import * as i0 from "@angular/core";
import * as i1 from "./configuration.service";
var LocalConfigService = /** @class */ (function () {
    function LocalConfigService(config) {
        this.config = config;
    }
    LocalConfigService.prototype.load = function (config) {
        var _this = this;
        return of(true).pipe(tap(function () {
            if (config) {
                Object.keys(config).forEach(function (key) { return _this.config.set(key, config[key]); });
                // config keys colors
                if (config['config-keys']) {
                    var headTag = document.querySelector('head');
                    var styleElement = document.createElement('style');
                    var styles_1 = [];
                    Object.keys(config['config-keys']).forEach(function (key) {
                        var configKey = config['config-keys'][key] || {};
                        var className = configKey['class-name'];
                        if (configKey.color && configKey.color.hex) {
                            // add css class
                            styles_1.push("--color-" + className + ": " + configKey.color.hex + ";");
                        }
                    });
                    if (styles_1.length) {
                        styles_1.unshift(':root {');
                        styles_1.push('}');
                        styleElement.appendChild(document.createTextNode(styles_1.join('\n')));
                        headTag.appendChild(styleElement);
                    }
                }
            }
        })).toPromise();
    };
    LocalConfigService.ctorParameters = function () { return [
        { type: ConfigurationService }
    ]; };
    LocalConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LocalConfigService_Factory() { return new LocalConfigService(i0.ɵɵinject(i1.ConfigurationService)); }, token: LocalConfigService, providedIn: "root" });
    LocalConfigService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [ConfigurationService])
    ], LocalConfigService);
    return LocalConfigService;
}());
export { LocalConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL2xvY2FsLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFLL0Q7SUFDRSw0QkFDVSxNQUE0QjtRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNuQyxDQUFDO0lBRUosaUNBQUksR0FBSixVQUFLLE1BQU07UUFBWCxpQkFpQ0M7UUFoQ0MsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNsQixHQUFHLENBQUM7WUFDRixJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO2dCQUV4RSxxQkFBcUI7Z0JBQ3JCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUN6QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMvQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVyRCxJQUFNLFFBQU0sR0FBRyxFQUFFLENBQUM7b0JBRWxCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRzt3QkFDN0MsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbkQsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUUxQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7NEJBQzFDLGdCQUFnQjs0QkFDaEIsUUFBTSxDQUFDLElBQUksQ0FBQyxhQUFXLFNBQVMsVUFBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBRyxDQUFDLENBQUM7eUJBQzlEO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILElBQUksUUFBTSxDQUFDLE1BQU0sRUFBRTt3QkFDakIsUUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDMUIsUUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUNuQztpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDOztnQkFwQ2lCLG9CQUFvQjs7O0lBRjNCLGtCQUFrQjtRQUg5QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUdrQixvQkFBb0I7T0FGM0Isa0JBQWtCLENBdUM5Qjs2QkEvQ0Q7Q0ErQ0MsQUF2Q0QsSUF1Q0M7U0F2Q1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxDb25maWdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgbG9hZChjb25maWcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBvZih0cnVlKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaCgoa2V5KSA9PiB0aGlzLmNvbmZpZy5zZXQoa2V5LCBjb25maWdba2V5XSkpO1xuXG4gICAgICAgICAgLy8gY29uZmlnIGtleXMgY29sb3JzXG4gICAgICAgICAgaWYgKGNvbmZpZ1snY29uZmlnLWtleXMnXSkge1xuICAgICAgICAgICAgY29uc3QgaGVhZFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IFtdO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWdbJ2NvbmZpZy1rZXlzJ10pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb25maWdLZXkgPSBjb25maWdbJ2NvbmZpZy1rZXlzJ11ba2V5XSB8fCB7fTtcbiAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY29uZmlnS2V5WydjbGFzcy1uYW1lJ107XG5cbiAgICAgICAgICAgICAgaWYgKGNvbmZpZ0tleS5jb2xvciAmJiBjb25maWdLZXkuY29sb3IuaGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGNzcyBjbGFzc1xuICAgICAgICAgICAgICAgIHN0eWxlcy5wdXNoKGAtLWNvbG9yLSR7Y2xhc3NOYW1lfTogJHtjb25maWdLZXkuY29sb3IuaGV4fTtgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChzdHlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHN0eWxlcy51bnNoaWZ0KCc6cm9vdCB7Jyk7XG4gICAgICAgICAgICAgIHN0eWxlcy5wdXNoKCd9Jyk7XG4gICAgICAgICAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZXMuam9pbignXFxuJykpKTtcbiAgICAgICAgICAgICAgaGVhZFRhZy5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKS50b1Byb21pc2UoKTtcbiAgfVxufVxuIl19