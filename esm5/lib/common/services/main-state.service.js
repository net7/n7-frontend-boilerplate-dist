import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
var MainStateService = /** @class */ (function () {
    function MainStateService() {
        var _this = this;
        // custom streams
        this.custom = {};
        // default streams
        this.default = {
            headTitle: new ReplaySubject(),
            pageTitle: new ReplaySubject(),
            subnav: new ReplaySubject(),
            breadcrumbs: new ReplaySubject(),
            filters: new ReplaySubject(),
        };
        this.get$ = function (key) { return _this._get('default', key); };
        this.getCustom$ = function (key) { return _this._get('custom', key); };
        this.update = function (key, newValue) { return _this._update('default', key, newValue); };
        this.updateCustom = function (key, newValue) { return _this._update('custom', key, newValue); };
        this.has = function (key) { return !!_this.default[key]; };
        this.hasCustom = function (key) { return !!_this.custom[key]; };
    }
    MainStateService.prototype.addCustom = function (key, stream$) {
        if (this.custom[key])
            throw Error("custom stream " + key + " exists!");
        this.custom[key] = stream$;
    };
    MainStateService.prototype._update = function (type, key, newValue) {
        if (!this[type])
            throw Error(type + " stream group does not exists!");
        if (!this[type][key])
            throw Error(type + " stream " + key + " does not exists!");
        this[type][key].next(newValue);
    };
    MainStateService.prototype._get = function (type, key) {
        if (!this[type])
            throw Error(type + " stream group does not exists!");
        if (!this[type][key])
            throw Error(type + " stream " + key + " does not exists!");
        return this[type][key];
    };
    MainStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MainStateService_Factory() { return new MainStateService(); }, token: MainStateService, providedIn: "root" });
    MainStateService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], MainStateService);
    return MainStateService;
}());
export { MainStateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLckM7SUFBQTtRQUFBLGlCQWtEQztRQWpEQyxpQkFBaUI7UUFDVCxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXpCLGtCQUFrQjtRQUNWLFlBQU8sR0FNWDtZQUNGLFNBQVMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM5QixTQUFTLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDOUIsTUFBTSxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzNCLFdBQVcsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUNoQyxPQUFPLEVBQUUsSUFBSSxhQUFhLEVBQUU7U0FDN0IsQ0FBQztRQUVLLFNBQUksR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUFDO1FBRWxELGVBQVUsR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUF4QixDQUF3QixDQUFDO1FBRXZELFdBQU0sR0FBRyxVQUFDLEdBQVcsRUFBRSxRQUFhLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQXRDLENBQXNDLENBQUM7UUFFaEYsaUJBQVksR0FBRyxVQUFDLEdBQVcsRUFBRSxRQUFhLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQXJDLENBQXFDLENBQUM7UUFFckYsUUFBRyxHQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQW5CLENBQW1CLENBQUM7UUFFM0MsY0FBUyxHQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUM7S0FxQnhEO0lBbkJRLG9DQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxPQUEyQjtRQUN2RCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsbUJBQWlCLEdBQUcsYUFBVSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUVPLGtDQUFPLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLEdBQVcsRUFBRSxRQUFhO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxtQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxnQkFBVyxHQUFHLHNCQUFtQixDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sK0JBQUksR0FBWixVQUFhLElBQVksRUFBRSxHQUFXO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxtQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxnQkFBVyxHQUFHLHNCQUFtQixDQUFDLENBQUM7UUFFNUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7SUFqRFUsZ0JBQWdCO1FBSDVCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxnQkFBZ0IsQ0FrRDVCOzJCQXhERDtDQXdEQyxBQWxERCxJQWtEQztTQWxEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluU3RhdGVTZXJ2aWNlIHtcclxuICAvLyBjdXN0b20gc3RyZWFtc1xyXG4gIHByaXZhdGUgY3VzdG9tOiBhbnkgPSB7fTtcclxuXHJcbiAgLy8gZGVmYXVsdCBzdHJlYW1zXHJcbiAgcHJpdmF0ZSBkZWZhdWx0OiB7XHJcbiAgICBoZWFkVGl0bGU6IFJlcGxheVN1YmplY3Q8YW55PjtcclxuICAgIHBhZ2VUaXRsZTogUmVwbGF5U3ViamVjdDxhbnk+O1xyXG4gICAgc3VibmF2OiBSZXBsYXlTdWJqZWN0PGFueT47XHJcbiAgICBicmVhZGNydW1iczogUmVwbGF5U3ViamVjdDxhbnk+O1xyXG4gICAgZmlsdGVyczogUmVwbGF5U3ViamVjdDxhbnk+O1xyXG4gIH0gPSB7XHJcbiAgICBoZWFkVGl0bGU6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgICBwYWdlVGl0bGU6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgICBzdWJuYXY6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgICBicmVhZGNydW1iczogbmV3IFJlcGxheVN1YmplY3QoKSxcclxuICAgIGZpbHRlcnM6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGdldCQgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuX2dldCgnZGVmYXVsdCcsIGtleSk7XHJcblxyXG4gIHB1YmxpYyBnZXRDdXN0b20kID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2N1c3RvbScsIGtleSk7XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUgPSAoa2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpID0+IHRoaXMuX3VwZGF0ZSgnZGVmYXVsdCcsIGtleSwgbmV3VmFsdWUpO1xyXG5cclxuICBwdWJsaWMgdXBkYXRlQ3VzdG9tID0gKGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSA9PiB0aGlzLl91cGRhdGUoJ2N1c3RvbScsIGtleSwgbmV3VmFsdWUpO1xyXG5cclxuICBwdWJsaWMgaGFzID0gKGtleTogc3RyaW5nKSA9PiAhIXRoaXMuZGVmYXVsdFtrZXldO1xyXG5cclxuICBwdWJsaWMgaGFzQ3VzdG9tID0gKGtleTogc3RyaW5nKSA9PiAhIXRoaXMuY3VzdG9tW2tleV07XHJcblxyXG4gIHB1YmxpYyBhZGRDdXN0b20oa2V5OiBzdHJpbmcsIHN0cmVhbSQ6IFJlcGxheVN1YmplY3Q8YW55Pikge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tW2tleV0pIHRocm93IEVycm9yKGBjdXN0b20gc3RyZWFtICR7a2V5fSBleGlzdHMhYCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21ba2V5XSA9IHN0cmVhbSQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGUodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzW3R5cGVdKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gZ3JvdXAgZG9lcyBub3QgZXhpc3RzIWApO1xyXG4gICAgaWYgKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xyXG5cclxuICAgIHRoaXNbdHlwZV1ba2V5XS5uZXh0KG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldCh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXNbdHlwZV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSBncm91cCBkb2VzIG5vdCBleGlzdHMhYCk7XHJcbiAgICBpZiAoIXRoaXNbdHlwZV1ba2V5XSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtICR7a2V5fSBkb2VzIG5vdCBleGlzdHMhYCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNbdHlwZV1ba2V5XTtcclxuICB9XHJcbn1cclxuIl19