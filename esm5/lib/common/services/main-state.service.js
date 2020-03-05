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
                    providedIn: 'root',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXJDO0lBQUE7UUFBQSxpQkFxREM7O1FBaERTLFdBQU0sR0FBUSxFQUFFLENBQUM7O1FBR2pCLFlBQU8sR0FNWDtZQUNGLFNBQVMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM5QixTQUFTLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDOUIsTUFBTSxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzNCLFdBQVcsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUNoQyxPQUFPLEVBQUUsSUFBSSxhQUFhLEVBQUU7U0FDN0IsQ0FBQztRQUVLLFNBQUk7Ozs7UUFBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixFQUFDO1FBRWxELGVBQVU7Ozs7UUFBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUF4QixDQUF3QixFQUFDO1FBRXZELFdBQU07Ozs7O1FBQUcsVUFBQyxHQUFXLEVBQUUsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUF0QyxDQUFzQyxFQUFDO1FBRWhGLGlCQUFZOzs7OztRQUFHLFVBQUMsR0FBVyxFQUFFLFFBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBckMsQ0FBcUMsRUFBQztRQUVyRixRQUFHOzs7O1FBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBbkIsQ0FBbUIsRUFBQztRQUUzQyxjQUFTOzs7O1FBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFBQztLQXFCeEQ7Ozs7OztJQW5CUSxvQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsR0FBVyxFQUFFLE9BQTJCO1FBQ3ZELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyxtQkFBaUIsR0FBRyxhQUFVLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUM3QixDQUFDOzs7Ozs7OztJQUVPLGtDQUFPOzs7Ozs7O0lBQWYsVUFBZ0IsSUFBWSxFQUFFLEdBQVcsRUFBRSxRQUFhO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxtQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUksSUFBSSxnQkFBVyxHQUFHLHNCQUFtQixDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7O0lBRU8sK0JBQUk7Ozs7OztJQUFaLFVBQWEsSUFBWSxFQUFFLEdBQVc7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBSSxJQUFJLG1DQUFnQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBSSxJQUFJLGdCQUFXLEdBQUcsc0JBQW1CLENBQUMsQ0FBQztRQUU1RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFwREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzJCQUxEO0NBd0RDLEFBckRELElBcURDO1NBbERZLGdCQUFnQjs7Ozs7O0lBRTNCLGtDQUF5Qjs7Ozs7SUFHekIsbUNBWUU7O0lBRUYsZ0NBQXlEOztJQUV6RCxzQ0FBOEQ7O0lBRTlELGtDQUF1Rjs7SUFFdkYsd0NBQTRGOztJQUU1RiwrQkFBa0Q7O0lBRWxELHFDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5TdGF0ZVNlcnZpY2Uge1xyXG4gIC8vIGN1c3RvbSBzdHJlYW1zXHJcbiAgcHJpdmF0ZSBjdXN0b206IGFueSA9IHt9O1xyXG5cclxuICAvLyBkZWZhdWx0IHN0cmVhbXNcclxuICBwcml2YXRlIGRlZmF1bHQ6IHtcclxuICAgIGhlYWRUaXRsZTogUmVwbGF5U3ViamVjdDxhbnk+O1xyXG4gICAgcGFnZVRpdGxlOiBSZXBsYXlTdWJqZWN0PGFueT47XHJcbiAgICBzdWJuYXY6IFJlcGxheVN1YmplY3Q8YW55PjtcclxuICAgIGJyZWFkY3J1bWJzOiBSZXBsYXlTdWJqZWN0PGFueT47XHJcbiAgICBmaWx0ZXJzOiBSZXBsYXlTdWJqZWN0PGFueT47XHJcbiAgfSA9IHtcclxuICAgIGhlYWRUaXRsZTogbmV3IFJlcGxheVN1YmplY3QoKSxcclxuICAgIHBhZ2VUaXRsZTogbmV3IFJlcGxheVN1YmplY3QoKSxcclxuICAgIHN1Ym5hdjogbmV3IFJlcGxheVN1YmplY3QoKSxcclxuICAgIGJyZWFkY3J1bWJzOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxyXG4gICAgZmlsdGVyczogbmV3IFJlcGxheVN1YmplY3QoKSxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgZ2V0JCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy5fZ2V0KCdkZWZhdWx0Jywga2V5KTtcclxuXHJcbiAgcHVibGljIGdldEN1c3RvbSQgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuX2dldCgnY3VzdG9tJywga2V5KTtcclxuXHJcbiAgcHVibGljIHVwZGF0ZSA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4gdGhpcy5fdXBkYXRlKCdkZWZhdWx0Jywga2V5LCBuZXdWYWx1ZSk7XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVDdXN0b20gPSAoa2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpID0+IHRoaXMuX3VwZGF0ZSgnY3VzdG9tJywga2V5LCBuZXdWYWx1ZSk7XHJcblxyXG4gIHB1YmxpYyBoYXMgPSAoa2V5OiBzdHJpbmcpID0+ICEhdGhpcy5kZWZhdWx0W2tleV07XHJcblxyXG4gIHB1YmxpYyBoYXNDdXN0b20gPSAoa2V5OiBzdHJpbmcpID0+ICEhdGhpcy5jdXN0b21ba2V5XTtcclxuXHJcbiAgcHVibGljIGFkZEN1c3RvbShrZXk6IHN0cmluZywgc3RyZWFtJDogUmVwbGF5U3ViamVjdDxhbnk+KSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21ba2V5XSkgdGhyb3cgRXJyb3IoYGN1c3RvbSBzdHJlYW0gJHtrZXl9IGV4aXN0cyFgKTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbVtrZXldID0gc3RyZWFtJDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZSh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XHJcbiAgICBpZiAoIXRoaXNbdHlwZV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSBncm91cCBkb2VzIG5vdCBleGlzdHMhYCk7XHJcbiAgICBpZiAoIXRoaXNbdHlwZV1ba2V5XSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtICR7a2V5fSBkb2VzIG5vdCBleGlzdHMhYCk7XHJcblxyXG4gICAgdGhpc1t0eXBlXVtrZXldLm5leHQobmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0KHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpc1t0eXBlXSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtIGdyb3VwIGRvZXMgbm90IGV4aXN0cyFgKTtcclxuICAgIGlmICghdGhpc1t0eXBlXVtrZXldKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gJHtrZXl9IGRvZXMgbm90IGV4aXN0cyFgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpc1t0eXBlXVtrZXldO1xyXG4gIH1cclxufVxyXG4iXX0=