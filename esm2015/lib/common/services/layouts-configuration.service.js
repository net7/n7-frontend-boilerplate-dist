import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
let LayoutsConfigurationService = class LayoutsConfigurationService {
    constructor(config) {
        this.config = config;
        this.defaults = {};
        this.get = (key) => this.defaults[key];
        this.set = (key, value) => { this.defaults[key] = value; };
        if (this.config.layouts) {
            Object.keys(this.config.layouts).forEach((key) => {
                this.set(key, this.config.layouts[key]);
            });
        }
    }
};
LayoutsConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
LayoutsConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LayoutsConfigurationService_Factory() { return new LayoutsConfigurationService(i0.ɵɵinject("config")); }, token: LayoutsConfigurationService, providedIn: "root" });
LayoutsConfigurationService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject('config')),
    __metadata("design:paramtypes", [Object])
], LayoutsConfigurationService);
export { LayoutsConfigurationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLbkQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFHdEMsWUFBc0MsTUFBVztRQUFYLFdBQU0sR0FBTixNQUFNLENBQUs7UUFGekMsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQVVwQixRQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsUUFBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFUMUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FLRixDQUFBOzs0Q0FYYyxNQUFNLFNBQUMsUUFBUTs7O0FBSGpCLDJCQUEyQjtJQUh2QyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBSWEsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7O0dBSGxCLDJCQUEyQixDQWN2QztTQWRZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dHNDb25maWd1cmF0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0czogYW55ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5sYXlvdXRzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnLmxheW91dHMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jb25maWcubGF5b3V0c1trZXldKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0ID0gKGtleSkgPT4gdGhpcy5kZWZhdWx0c1trZXldO1xyXG5cclxuICBwdWJsaWMgc2V0ID0gKGtleSwgdmFsdWUpID0+IHsgdGhpcy5kZWZhdWx0c1trZXldID0gdmFsdWU7IH1cclxufVxyXG4iXX0=