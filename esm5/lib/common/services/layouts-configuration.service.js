import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var LayoutsConfigurationService = /** @class */ (function () {
    function LayoutsConfigurationService(config) {
        var _this = this;
        var _a;
        this.config = config;
        this.defaults = {};
        this.get = function (key) { return _this.defaults[key]; };
        this.set = function (key, value) { _this.defaults[key] = value; };
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.layouts) {
            Object.keys(this.config.layouts).forEach(function (key) {
                _this.set(key, _this.config.layouts[key]);
            });
        }
    }
    LayoutsConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    LayoutsConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LayoutsConfigurationService_Factory() { return new LayoutsConfigurationService(i0.ɵɵinject("config")); }, token: LayoutsConfigurationService, providedIn: "root" });
    LayoutsConfigurationService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Inject('config')),
        __metadata("design:paramtypes", [Object])
    ], LayoutsConfigurationService);
    return LayoutsConfigurationService;
}());
export { LayoutsConfigurationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLbkQ7SUFHRSxxQ0FBc0MsTUFBVztRQUFqRCxpQkFNQzs7UUFOcUMsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUZ6QyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBVXBCLFFBQUcsR0FBRyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUM7UUFFbEMsUUFBRyxHQUFHLFVBQUMsR0FBRyxFQUFFLEtBQUssSUFBTyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQVQxRCxVQUFJLElBQUksQ0FBQyxNQUFNLDBDQUFFLE9BQU8sRUFBRTtZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDM0MsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0RBTlksTUFBTSxTQUFDLFFBQVE7OztJQUhqQiwyQkFBMkI7UUFIdkMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQUlhLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBOztPQUhsQiwyQkFBMkIsQ0FjdkM7c0NBbkJEO0NBbUJDLEFBZEQsSUFjQztTQWRZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZhdWx0czogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IGFueSkge1xuICAgIGlmICh0aGlzLmNvbmZpZz8ubGF5b3V0cykge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5jb25maWcubGF5b3V0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jb25maWcubGF5b3V0c1trZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgPSAoa2V5KSA9PiB0aGlzLmRlZmF1bHRzW2tleV07XG5cbiAgcHVibGljIHNldCA9IChrZXksIHZhbHVlKSA9PiB7IHRoaXMuZGVmYXVsdHNba2V5XSA9IHZhbHVlOyB9XG59XG4iXX0=