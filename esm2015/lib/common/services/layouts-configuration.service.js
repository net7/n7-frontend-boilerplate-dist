import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
let LayoutsConfigurationService = class LayoutsConfigurationService {
    constructor(config) {
        var _a;
        this.config = config;
        this.defaults = {};
        this.get = (key) => this.defaults[key];
        this.set = (key, value) => { this.defaults[key] = value; };
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.layouts) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLbkQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFHdEMsWUFBc0MsTUFBVzs7UUFBWCxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBRnpDLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFVcEIsUUFBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLFFBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBVDFELFVBQUksSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUtGLENBQUE7OzRDQVhjLE1BQU0sU0FBQyxRQUFROzs7QUFIakIsMkJBQTJCO0lBSHZDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFJYSxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTs7R0FIbEIsMkJBQTJCLENBY3ZDO1NBZFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRzOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogYW55KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnPy5sYXlvdXRzKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZy5sYXlvdXRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNvbmZpZy5sYXlvdXRzW2tleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCA9IChrZXkpID0+IHRoaXMuZGVmYXVsdHNba2V5XTtcblxuICBwdWJsaWMgc2V0ID0gKGtleSwgdmFsdWUpID0+IHsgdGhpcy5kZWZhdWx0c1trZXldID0gdmFsdWU7IH1cbn1cbiJdfQ==