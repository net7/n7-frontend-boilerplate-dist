/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/main-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.get$ = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return _this._get('default', key); });
        this.getCustom$ = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return _this._get('custom', key); });
        this.update = (/**
         * @param {?} key
         * @param {?} newValue
         * @return {?}
         */
        function (key, newValue) { return _this._update('default', key, newValue); });
        this.updateCustom = (/**
         * @param {?} key
         * @param {?} newValue
         * @return {?}
         */
        function (key, newValue) { return _this._update('custom', key, newValue); });
        this.has = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return !!_this.default[key]; });
        this.hasCustom = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return !!_this.custom[key]; });
    }
    /**
     * @param {?} key
     * @param {?} stream$
     * @return {?}
     */
    MainStateService.prototype.addCustom = /**
     * @param {?} key
     * @param {?} stream$
     * @return {?}
     */
    function (key, stream$) {
        if (this.custom[key])
            throw Error("custom stream " + key + " exists!");
        this.custom[key] = stream$;
    };
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @param {?} newValue
     * @return {?}
     */
    MainStateService.prototype._update = /**
     * @private
     * @param {?} type
     * @param {?} key
     * @param {?} newValue
     * @return {?}
     */
    function (type, key, newValue) {
        if (!this[type])
            throw Error(type + " stream group does not exists!");
        if (!this[type][key])
            throw Error(type + " stream " + key + " does not exists!");
        this[type][key].next(newValue);
    };
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @return {?}
     */
    MainStateService.prototype._get = /**
     * @private
     * @param {?} type
     * @param {?} key
     * @return {?}
     */
    function (type, key) {
        if (!this[type])
            throw Error(type + " stream group does not exists!");
        if (!this[type][key])
            throw Error(type + " stream " + key + " does not exists!");
        return this[type][key];
    };
    MainStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ MainStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MainStateService_Factory() { return new MainStateService(); }, token: MainStateService, providedIn: "root" });
    return MainStateService;
}());
export { MainStateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MainStateService.prototype.custom;
    /**
     * @type {?}
     * @private
     */
    MainStateService.prototype.default;
    /** @type {?} */
    MainStateService.prototype.get$;
    /** @type {?} */
    MainStateService.prototype.getCustom$;
    /** @type {?} */
    MainStateService.prototype.update;
    /** @type {?} */
    MainStateService.prototype.updateCustom;
    /** @type {?} */
    MainStateService.prototype.has;
    /** @type {?} */
    MainStateService.prototype.hasCustom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXJDO0lBQUE7UUFBQSxpQkFtREM7O1FBOUNTLFdBQU0sR0FBUSxFQUFFLENBQUM7O1FBR2pCLFlBQU8sR0FNWDtZQUNGLFNBQVMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM5QixTQUFTLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDOUIsTUFBTSxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzNCLFdBQVcsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUNoQyxPQUFPLEVBQUUsSUFBSSxhQUFhLEVBQUU7U0FDN0IsQ0FBQztRQUVLLFNBQUk7Ozs7UUFBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixFQUFDO1FBQ2xELGVBQVU7Ozs7UUFBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUF4QixDQUF3QixFQUFDO1FBRXZELFdBQU07Ozs7O1FBQUcsVUFBQyxHQUFXLEVBQUUsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUF0QyxDQUFzQyxFQUFDO1FBQ2hGLGlCQUFZOzs7OztRQUFHLFVBQUMsR0FBVyxFQUFFLFFBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBckMsQ0FBcUMsRUFBQztRQUVyRixRQUFHOzs7O1FBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBbkIsQ0FBbUIsRUFBQztRQUMzQyxjQUFTOzs7O1FBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFBQztLQXNCeEQ7Ozs7OztJQXBCUSxvQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsR0FBVyxFQUFFLE9BQTJCO1FBQ3ZELElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyxtQkFBaUIsR0FBRyxhQUFVLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUM3QixDQUFDOzs7Ozs7OztJQUVPLGtDQUFPOzs7Ozs7O0lBQWYsVUFBZ0IsSUFBWSxFQUFFLEdBQVcsRUFBRSxRQUFhO1FBQ3RELElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxtQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3JFLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxnQkFBVyxHQUFHLHNCQUFtQixDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7O0lBRU8sK0JBQUk7Ozs7OztJQUFaLFVBQWEsSUFBWSxFQUFFLEdBQVc7UUFDcEMsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBSSxJQUFJLG1DQUFnQyxDQUFDLENBQUM7UUFDckUsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBSSxJQUFJLGdCQUFXLEdBQUcsc0JBQW1CLENBQUMsQ0FBQztRQUUzRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFqREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzJCQUxEO0NBc0RDLEFBbkRELElBbURDO1NBaERZLGdCQUFnQjs7Ozs7O0lBRTNCLGtDQUF5Qjs7Ozs7SUFHekIsbUNBWUU7O0lBRUYsZ0NBQXlEOztJQUN6RCxzQ0FBOEQ7O0lBRTlELGtDQUF1Rjs7SUFDdkYsd0NBQTRGOztJQUU1RiwrQkFBa0Q7O0lBQ2xELHFDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWFpblN0YXRlU2VydmljZSB7XG4gIC8vIGN1c3RvbSBzdHJlYW1zXG4gIHByaXZhdGUgY3VzdG9tOiBhbnkgPSB7fTtcbiAgXG4gIC8vIGRlZmF1bHQgc3RyZWFtc1xuICBwcml2YXRlIGRlZmF1bHQ6IHtcbiAgICBoZWFkVGl0bGU6IFJlcGxheVN1YmplY3Q8YW55PixcbiAgICBwYWdlVGl0bGU6IFJlcGxheVN1YmplY3Q8YW55PixcbiAgICBzdWJuYXY6IFJlcGxheVN1YmplY3Q8YW55PixcbiAgICBicmVhZGNydW1iczogUmVwbGF5U3ViamVjdDxhbnk+LFxuICAgIGZpbHRlcnM6IFJlcGxheVN1YmplY3Q8YW55PixcbiAgfSA9IHtcbiAgICBoZWFkVGl0bGU6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gICAgcGFnZVRpdGxlOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICAgIHN1Ym5hdjogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBicmVhZGNydW1iczogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBmaWx0ZXJzOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICB9O1xuXG4gIHB1YmxpYyBnZXQkID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2RlZmF1bHQnLCBrZXkpO1xuICBwdWJsaWMgZ2V0Q3VzdG9tJCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy5fZ2V0KCdjdXN0b20nLCBrZXkpO1xuXG4gIHB1YmxpYyB1cGRhdGUgPSAoa2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpID0+IHRoaXMuX3VwZGF0ZSgnZGVmYXVsdCcsIGtleSwgbmV3VmFsdWUpO1xuICBwdWJsaWMgdXBkYXRlQ3VzdG9tID0gKGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSA9PiB0aGlzLl91cGRhdGUoJ2N1c3RvbScsIGtleSwgbmV3VmFsdWUpO1xuXG4gIHB1YmxpYyBoYXMgPSAoa2V5OiBzdHJpbmcpID0+ICEhdGhpcy5kZWZhdWx0W2tleV07XG4gIHB1YmxpYyBoYXNDdXN0b20gPSAoa2V5OiBzdHJpbmcpID0+ICEhdGhpcy5jdXN0b21ba2V5XTtcblxuICBwdWJsaWMgYWRkQ3VzdG9tKGtleTogc3RyaW5nLCBzdHJlYW0kOiBSZXBsYXlTdWJqZWN0PGFueT4pe1xuICAgIGlmKHRoaXMuY3VzdG9tW2tleV0pIHRocm93IEVycm9yKGBjdXN0b20gc3RyZWFtICR7a2V5fSBleGlzdHMhYCk7XG5cbiAgICB0aGlzLmN1c3RvbVtrZXldID0gc3RyZWFtJDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZSh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KXtcbiAgICBpZighdGhpc1t0eXBlXSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtIGdyb3VwIGRvZXMgbm90IGV4aXN0cyFgKTtcbiAgICBpZighdGhpc1t0eXBlXVtrZXldKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gJHtrZXl9IGRvZXMgbm90IGV4aXN0cyFgKTtcbiAgICBcbiAgICB0aGlzW3R5cGVdW2tleV0ubmV4dChuZXdWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXQodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZyl7XG4gICAgaWYoIXRoaXNbdHlwZV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSBncm91cCBkb2VzIG5vdCBleGlzdHMhYCk7XG4gICAgaWYoIXRoaXNbdHlwZV1ba2V5XSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtICR7a2V5fSBkb2VzIG5vdCBleGlzdHMhYCk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXNbdHlwZV1ba2V5XTtcbiAgfVxuXG59Il19