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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL2xvY2FsLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFLL0Q7SUFDRSw0QkFDVSxNQUE0QjtRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUNuQyxDQUFDO0lBRUosaUNBQUksR0FBSixVQUFLLE1BQU07UUFBWCxpQkFpQ0M7UUFoQ0MsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNsQixHQUFHLENBQUM7WUFDRixJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO2dCQUV4RSxxQkFBcUI7Z0JBQ3JCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUN6QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMvQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVyRCxJQUFNLFFBQU0sR0FBRyxFQUFFLENBQUM7b0JBRWxCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRzt3QkFDN0MsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbkQsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUUxQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7NEJBQzFDLGdCQUFnQjs0QkFDaEIsUUFBTSxDQUFDLElBQUksQ0FBQyxhQUFXLFNBQVMsVUFBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBRyxDQUFDLENBQUM7eUJBQzlEO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILElBQUksUUFBTSxDQUFDLE1BQU0sRUFBRTt3QkFDakIsUUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDMUIsUUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUNuQztpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDOztnQkFwQ2lCLG9CQUFvQjs7O0lBRjNCLGtCQUFrQjtRQUg5QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUdrQixvQkFBb0I7T0FGM0Isa0JBQWtCLENBdUM5Qjs2QkEvQ0Q7Q0ErQ0MsQUF2Q0QsSUF1Q0M7U0F2Q1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2FsQ29uZmlnU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBsb2FkKGNvbmZpZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gb2YodHJ1ZSkucGlwZShcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKGtleSkgPT4gdGhpcy5jb25maWcuc2V0KGtleSwgY29uZmlnW2tleV0pKTtcclxuXHJcbiAgICAgICAgICAvLyBjb25maWcga2V5cyBjb2xvcnNcclxuICAgICAgICAgIGlmIChjb25maWdbJ2NvbmZpZy1rZXlzJ10pIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnWydjb25maWcta2V5cyddKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBjb25maWdLZXkgPSBjb25maWdbJ2NvbmZpZy1rZXlzJ11ba2V5XSB8fCB7fTtcclxuICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjb25maWdLZXlbJ2NsYXNzLW5hbWUnXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZ0tleS5jb2xvciAmJiBjb25maWdLZXkuY29sb3IuaGV4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgY3NzIGNsYXNzXHJcbiAgICAgICAgICAgICAgICBzdHlsZXMucHVzaChgLS1jb2xvci0ke2NsYXNzTmFtZX06ICR7Y29uZmlnS2V5LmNvbG9yLmhleH07YCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgc3R5bGVzLnVuc2hpZnQoJzpyb290IHsnKTtcclxuICAgICAgICAgICAgICBzdHlsZXMucHVzaCgnfScpO1xyXG4gICAgICAgICAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZXMuam9pbignXFxuJykpKTtcclxuICAgICAgICAgICAgICBoZWFkVGFnLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgKS50b1Byb21pc2UoKTtcclxuICB9XHJcbn1cclxuIl19