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
            header: new ReplaySubject(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLckM7SUFBQTtRQUFBLGlCQW9EQztRQW5EQyxpQkFBaUI7UUFDVCxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXpCLGtCQUFrQjtRQUNWLFlBQU8sR0FPWDtZQUNGLFNBQVMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM5QixTQUFTLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDOUIsTUFBTSxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzNCLFdBQVcsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUNoQyxPQUFPLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDNUIsTUFBTSxFQUFFLElBQUksYUFBYSxFQUFFO1NBQzVCLENBQUM7UUFFSyxTQUFJLEdBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FBQztRQUVsRCxlQUFVLEdBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztRQUV2RCxXQUFNLEdBQUcsVUFBQyxHQUFXLEVBQUUsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDO1FBRWhGLGlCQUFZLEdBQUcsVUFBQyxHQUFXLEVBQUUsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDO1FBRXJGLFFBQUcsR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixDQUFDO1FBRTNDLGNBQVMsR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDO0tBcUJ4RDtJQW5CUSxvQ0FBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsT0FBMkI7UUFDdkQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLG1CQUFpQixHQUFHLGFBQVUsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFTyxrQ0FBTyxHQUFmLFVBQWdCLElBQVksRUFBRSxHQUFXLEVBQUUsUUFBYTtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksbUNBQWdDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksZ0JBQVcsR0FBRyxzQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLCtCQUFJLEdBQVosVUFBYSxJQUFZLEVBQUUsR0FBVztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksbUNBQWdDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksZ0JBQVcsR0FBRyxzQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O0lBbkRVLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBb0Q1QjsyQkExREQ7Q0EwREMsQUFwREQsSUFvREM7U0FwRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpblN0YXRlU2VydmljZSB7XHJcbiAgLy8gY3VzdG9tIHN0cmVhbXNcclxuICBwcml2YXRlIGN1c3RvbTogYW55ID0ge307XHJcblxyXG4gIC8vIGRlZmF1bHQgc3RyZWFtc1xyXG4gIHByaXZhdGUgZGVmYXVsdDoge1xyXG4gICAgaGVhZFRpdGxlOiBSZXBsYXlTdWJqZWN0PGFueT47XHJcbiAgICBwYWdlVGl0bGU6IFJlcGxheVN1YmplY3Q8YW55PjtcclxuICAgIHN1Ym5hdjogUmVwbGF5U3ViamVjdDxhbnk+O1xyXG4gICAgYnJlYWRjcnVtYnM6IFJlcGxheVN1YmplY3Q8YW55PjtcclxuICAgIGZpbHRlcnM6IFJlcGxheVN1YmplY3Q8YW55PjtcclxuICAgIGhlYWRlcjogUmVwbGF5U3ViamVjdDxhbnk+O1xyXG4gIH0gPSB7XHJcbiAgICBoZWFkVGl0bGU6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgICBwYWdlVGl0bGU6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgICBzdWJuYXY6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgICBicmVhZGNydW1iczogbmV3IFJlcGxheVN1YmplY3QoKSxcclxuICAgIGZpbHRlcnM6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgICBoZWFkZXI6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGdldCQgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuX2dldCgnZGVmYXVsdCcsIGtleSk7XHJcblxyXG4gIHB1YmxpYyBnZXRDdXN0b20kID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2N1c3RvbScsIGtleSk7XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUgPSAoa2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpID0+IHRoaXMuX3VwZGF0ZSgnZGVmYXVsdCcsIGtleSwgbmV3VmFsdWUpO1xyXG5cclxuICBwdWJsaWMgdXBkYXRlQ3VzdG9tID0gKGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSA9PiB0aGlzLl91cGRhdGUoJ2N1c3RvbScsIGtleSwgbmV3VmFsdWUpO1xyXG5cclxuICBwdWJsaWMgaGFzID0gKGtleTogc3RyaW5nKSA9PiAhIXRoaXMuZGVmYXVsdFtrZXldO1xyXG5cclxuICBwdWJsaWMgaGFzQ3VzdG9tID0gKGtleTogc3RyaW5nKSA9PiAhIXRoaXMuY3VzdG9tW2tleV07XHJcblxyXG4gIHB1YmxpYyBhZGRDdXN0b20oa2V5OiBzdHJpbmcsIHN0cmVhbSQ6IFJlcGxheVN1YmplY3Q8YW55Pikge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tW2tleV0pIHRocm93IEVycm9yKGBjdXN0b20gc3RyZWFtICR7a2V5fSBleGlzdHMhYCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21ba2V5XSA9IHN0cmVhbSQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGUodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzW3R5cGVdKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gZ3JvdXAgZG9lcyBub3QgZXhpc3RzIWApO1xyXG4gICAgaWYgKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xyXG5cclxuICAgIHRoaXNbdHlwZV1ba2V5XS5uZXh0KG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldCh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXNbdHlwZV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSBncm91cCBkb2VzIG5vdCBleGlzdHMhYCk7XHJcbiAgICBpZiAoIXRoaXNbdHlwZV1ba2V5XSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtICR7a2V5fSBkb2VzIG5vdCBleGlzdHMhYCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNbdHlwZV1ba2V5XTtcclxuICB9XHJcbn1cclxuIl19