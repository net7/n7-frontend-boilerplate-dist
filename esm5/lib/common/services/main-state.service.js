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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLckM7SUFBQTtRQUFBLGlCQWtEQztRQWpEQyxpQkFBaUI7UUFDVCxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXpCLGtCQUFrQjtRQUNWLFlBQU8sR0FNWDtZQUNGLFNBQVMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM5QixTQUFTLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDOUIsTUFBTSxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzNCLFdBQVcsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUNoQyxPQUFPLEVBQUUsSUFBSSxhQUFhLEVBQUU7U0FDN0IsQ0FBQztRQUVLLFNBQUksR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUFDO1FBRWxELGVBQVUsR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUF4QixDQUF3QixDQUFDO1FBRXZELFdBQU0sR0FBRyxVQUFDLEdBQVcsRUFBRSxRQUFhLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQXRDLENBQXNDLENBQUM7UUFFaEYsaUJBQVksR0FBRyxVQUFDLEdBQVcsRUFBRSxRQUFhLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQXJDLENBQXFDLENBQUM7UUFFckYsUUFBRyxHQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQW5CLENBQW1CLENBQUM7UUFFM0MsY0FBUyxHQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUM7S0FxQnhEO0lBbkJRLG9DQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxPQUEyQjtRQUN2RCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsbUJBQWlCLEdBQUcsYUFBVSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUVPLGtDQUFPLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLEdBQVcsRUFBRSxRQUFhO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxtQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxnQkFBVyxHQUFHLHNCQUFtQixDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sK0JBQUksR0FBWixVQUFhLElBQVksRUFBRSxHQUFXO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxtQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxnQkFBVyxHQUFHLHNCQUFtQixDQUFDLENBQUM7UUFFNUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7SUFqRFUsZ0JBQWdCO1FBSDVCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxnQkFBZ0IsQ0FrRDVCOzJCQXhERDtDQXdEQyxBQWxERCxJQWtEQztTQWxEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNYWluU3RhdGVTZXJ2aWNlIHtcbiAgLy8gY3VzdG9tIHN0cmVhbXNcbiAgcHJpdmF0ZSBjdXN0b206IGFueSA9IHt9O1xuXG4gIC8vIGRlZmF1bHQgc3RyZWFtc1xuICBwcml2YXRlIGRlZmF1bHQ6IHtcbiAgICBoZWFkVGl0bGU6IFJlcGxheVN1YmplY3Q8YW55PjtcbiAgICBwYWdlVGl0bGU6IFJlcGxheVN1YmplY3Q8YW55PjtcbiAgICBzdWJuYXY6IFJlcGxheVN1YmplY3Q8YW55PjtcbiAgICBicmVhZGNydW1iczogUmVwbGF5U3ViamVjdDxhbnk+O1xuICAgIGZpbHRlcnM6IFJlcGxheVN1YmplY3Q8YW55PjtcbiAgfSA9IHtcbiAgICBoZWFkVGl0bGU6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gICAgcGFnZVRpdGxlOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICAgIHN1Ym5hdjogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBicmVhZGNydW1iczogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBmaWx0ZXJzOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICB9O1xuXG4gIHB1YmxpYyBnZXQkID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2RlZmF1bHQnLCBrZXkpO1xuXG4gIHB1YmxpYyBnZXRDdXN0b20kID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2N1c3RvbScsIGtleSk7XG5cbiAgcHVibGljIHVwZGF0ZSA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4gdGhpcy5fdXBkYXRlKCdkZWZhdWx0Jywga2V5LCBuZXdWYWx1ZSk7XG5cbiAgcHVibGljIHVwZGF0ZUN1c3RvbSA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4gdGhpcy5fdXBkYXRlKCdjdXN0b20nLCBrZXksIG5ld1ZhbHVlKTtcblxuICBwdWJsaWMgaGFzID0gKGtleTogc3RyaW5nKSA9PiAhIXRoaXMuZGVmYXVsdFtrZXldO1xuXG4gIHB1YmxpYyBoYXNDdXN0b20gPSAoa2V5OiBzdHJpbmcpID0+ICEhdGhpcy5jdXN0b21ba2V5XTtcblxuICBwdWJsaWMgYWRkQ3VzdG9tKGtleTogc3RyaW5nLCBzdHJlYW0kOiBSZXBsYXlTdWJqZWN0PGFueT4pIHtcbiAgICBpZiAodGhpcy5jdXN0b21ba2V5XSkgdGhyb3cgRXJyb3IoYGN1c3RvbSBzdHJlYW0gJHtrZXl9IGV4aXN0cyFgKTtcblxuICAgIHRoaXMuY3VzdG9tW2tleV0gPSBzdHJlYW0kO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICBpZiAoIXRoaXNbdHlwZV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSBncm91cCBkb2VzIG5vdCBleGlzdHMhYCk7XG4gICAgaWYgKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xuXG4gICAgdGhpc1t0eXBlXVtrZXldLm5leHQobmV3VmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0KHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXNbdHlwZV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSBncm91cCBkb2VzIG5vdCBleGlzdHMhYCk7XG4gICAgaWYgKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xuXG4gICAgcmV0dXJuIHRoaXNbdHlwZV1ba2V5XTtcbiAgfVxufVxuIl19