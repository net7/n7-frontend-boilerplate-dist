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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLckM7SUFBQTtRQUFBLGlCQW9EQztRQW5EQyxpQkFBaUI7UUFDVCxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXpCLGtCQUFrQjtRQUNWLFlBQU8sR0FPWDtZQUNGLFNBQVMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM5QixTQUFTLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDOUIsTUFBTSxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzNCLFdBQVcsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUNoQyxPQUFPLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDNUIsTUFBTSxFQUFFLElBQUksYUFBYSxFQUFFO1NBQzVCLENBQUM7UUFFSyxTQUFJLEdBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FBQztRQUVsRCxlQUFVLEdBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztRQUV2RCxXQUFNLEdBQUcsVUFBQyxHQUFXLEVBQUUsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDO1FBRWhGLGlCQUFZLEdBQUcsVUFBQyxHQUFXLEVBQUUsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDO1FBRXJGLFFBQUcsR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixDQUFDO1FBRTNDLGNBQVMsR0FBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDO0tBcUJ4RDtJQW5CUSxvQ0FBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsT0FBMkI7UUFDdkQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLG1CQUFpQixHQUFHLGFBQVUsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFTyxrQ0FBTyxHQUFmLFVBQWdCLElBQVksRUFBRSxHQUFXLEVBQUUsUUFBYTtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksbUNBQWdDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksZ0JBQVcsR0FBRyxzQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLCtCQUFJLEdBQVosVUFBYSxJQUFZLEVBQUUsR0FBVztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksbUNBQWdDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksZ0JBQVcsR0FBRyxzQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O0lBbkRVLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBb0Q1QjsyQkExREQ7Q0EwREMsQUFwREQsSUFvREM7U0FwRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWFpblN0YXRlU2VydmljZSB7XG4gIC8vIGN1c3RvbSBzdHJlYW1zXG4gIHByaXZhdGUgY3VzdG9tOiBhbnkgPSB7fTtcblxuICAvLyBkZWZhdWx0IHN0cmVhbXNcbiAgcHJpdmF0ZSBkZWZhdWx0OiB7XG4gICAgaGVhZFRpdGxlOiBSZXBsYXlTdWJqZWN0PGFueT47XG4gICAgcGFnZVRpdGxlOiBSZXBsYXlTdWJqZWN0PGFueT47XG4gICAgc3VibmF2OiBSZXBsYXlTdWJqZWN0PGFueT47XG4gICAgYnJlYWRjcnVtYnM6IFJlcGxheVN1YmplY3Q8YW55PjtcbiAgICBmaWx0ZXJzOiBSZXBsYXlTdWJqZWN0PGFueT47XG4gICAgaGVhZGVyOiBSZXBsYXlTdWJqZWN0PGFueT47XG4gIH0gPSB7XG4gICAgaGVhZFRpdGxlOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICAgIHBhZ2VUaXRsZTogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBzdWJuYXY6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gICAgYnJlYWRjcnVtYnM6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gICAgZmlsdGVyczogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBoZWFkZXI6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gIH07XG5cbiAgcHVibGljIGdldCQgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuX2dldCgnZGVmYXVsdCcsIGtleSk7XG5cbiAgcHVibGljIGdldEN1c3RvbSQgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuX2dldCgnY3VzdG9tJywga2V5KTtcblxuICBwdWJsaWMgdXBkYXRlID0gKGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSA9PiB0aGlzLl91cGRhdGUoJ2RlZmF1bHQnLCBrZXksIG5ld1ZhbHVlKTtcblxuICBwdWJsaWMgdXBkYXRlQ3VzdG9tID0gKGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSA9PiB0aGlzLl91cGRhdGUoJ2N1c3RvbScsIGtleSwgbmV3VmFsdWUpO1xuXG4gIHB1YmxpYyBoYXMgPSAoa2V5OiBzdHJpbmcpID0+ICEhdGhpcy5kZWZhdWx0W2tleV07XG5cbiAgcHVibGljIGhhc0N1c3RvbSA9IChrZXk6IHN0cmluZykgPT4gISF0aGlzLmN1c3RvbVtrZXldO1xuXG4gIHB1YmxpYyBhZGRDdXN0b20oa2V5OiBzdHJpbmcsIHN0cmVhbSQ6IFJlcGxheVN1YmplY3Q8YW55Pikge1xuICAgIGlmICh0aGlzLmN1c3RvbVtrZXldKSB0aHJvdyBFcnJvcihgY3VzdG9tIHN0cmVhbSAke2tleX0gZXhpc3RzIWApO1xuXG4gICAgdGhpcy5jdXN0b21ba2V5XSA9IHN0cmVhbSQ7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGUodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgIGlmICghdGhpc1t0eXBlXSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtIGdyb3VwIGRvZXMgbm90IGV4aXN0cyFgKTtcbiAgICBpZiAoIXRoaXNbdHlwZV1ba2V5XSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtICR7a2V5fSBkb2VzIG5vdCBleGlzdHMhYCk7XG5cbiAgICB0aGlzW3R5cGVdW2tleV0ubmV4dChuZXdWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXQodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpc1t0eXBlXSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtIGdyb3VwIGRvZXMgbm90IGV4aXN0cyFgKTtcbiAgICBpZiAoIXRoaXNbdHlwZV1ba2V5XSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtICR7a2V5fSBkb2VzIG5vdCBleGlzdHMhYCk7XG5cbiAgICByZXR1cm4gdGhpc1t0eXBlXVtrZXldO1xuICB9XG59XG4iXX0=