import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var LayoutsConfigurationService = /** @class */ (function () {
    function LayoutsConfigurationService(config) {
        var _this = this;
        this.config = config;
        this.defaults = {};
        this.get = function (key) { return _this.defaults[key]; };
        this.set = function (key, value) { _this.defaults[key] = value; };
        if (this.config.layouts) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NlcnZpY2VzL2xheW91dHMtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLbkQ7SUFHRSxxQ0FBc0MsTUFBVztRQUFqRCxpQkFNQztRQU5xQyxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBRnpDLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFVcEIsUUFBRyxHQUFHLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQztRQUVsQyxRQUFHLEdBQUcsVUFBQyxHQUFHLEVBQUUsS0FBSyxJQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBVDFELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQzNDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dEQU5ZLE1BQU0sU0FBQyxRQUFROzs7SUFIakIsMkJBQTJCO1FBSHZDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFJYSxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTs7T0FIbEIsMkJBQTJCLENBY3ZDO3NDQW5CRDtDQW1CQyxBQWRELElBY0M7U0FkWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRzQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZGVmYXVsdHM6IGFueSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogYW55KSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcubGF5b3V0cykge1xyXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZy5sYXlvdXRzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY29uZmlnLmxheW91dHNba2V5XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCA9IChrZXkpID0+IHRoaXMuZGVmYXVsdHNba2V5XTtcclxuXHJcbiAgcHVibGljIHNldCA9IChrZXksIHZhbHVlKSA9PiB7IHRoaXMuZGVmYXVsdHNba2V5XSA9IHZhbHVlOyB9XHJcbn1cclxuIl19