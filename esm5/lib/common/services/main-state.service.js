/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFckM7SUFBQTtRQUFBLGlCQXFEQzs7UUFoRFMsV0FBTSxHQUFRLEVBQUUsQ0FBQzs7UUFHakIsWUFBTyxHQU1YO1lBQ0YsU0FBUyxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzlCLFNBQVMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM5QixNQUFNLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDM0IsV0FBVyxFQUFFLElBQUksYUFBYSxFQUFFO1lBQ2hDLE9BQU8sRUFBRSxJQUFJLGFBQWEsRUFBRTtTQUM3QixDQUFDO1FBRUssU0FBSTs7OztRQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQXpCLENBQXlCLEVBQUM7UUFFbEQsZUFBVTs7OztRQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQXhCLENBQXdCLEVBQUM7UUFFdkQsV0FBTTs7Ozs7UUFBRyxVQUFDLEdBQVcsRUFBRSxRQUFhLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQXRDLENBQXNDLEVBQUM7UUFFaEYsaUJBQVk7Ozs7O1FBQUcsVUFBQyxHQUFXLEVBQUUsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFyQyxDQUFxQyxFQUFDO1FBRXJGLFFBQUc7Ozs7UUFBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixFQUFDO1FBRTNDLGNBQVM7Ozs7UUFBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUFDO0tBcUJ4RDs7Ozs7O0lBbkJRLG9DQUFTOzs7OztJQUFoQixVQUFpQixHQUFXLEVBQUUsT0FBMkI7UUFDdkQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLG1CQUFpQixHQUFHLGFBQVUsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7O0lBRU8sa0NBQU87Ozs7Ozs7SUFBZixVQUFnQixJQUFZLEVBQUUsR0FBVyxFQUFFLFFBQWE7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBSSxJQUFJLG1DQUFnQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBSSxJQUFJLGdCQUFXLEdBQUcsc0JBQW1CLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7SUFFTywrQkFBSTs7Ozs7O0lBQVosVUFBYSxJQUFZLEVBQUUsR0FBVztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksbUNBQWdDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksZ0JBQVcsR0FBRyxzQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQXBERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MkJBTEQ7Q0F3REMsQUFyREQsSUFxREM7U0FsRFksZ0JBQWdCOzs7Ozs7SUFFM0Isa0NBQXlCOzs7OztJQUd6QixtQ0FZRTs7SUFFRixnQ0FBeUQ7O0lBRXpELHNDQUE4RDs7SUFFOUQsa0NBQXVGOztJQUV2Rix3Q0FBNEY7O0lBRTVGLCtCQUFrRDs7SUFFbEQscUNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWFpblN0YXRlU2VydmljZSB7XG4gIC8vIGN1c3RvbSBzdHJlYW1zXG4gIHByaXZhdGUgY3VzdG9tOiBhbnkgPSB7fTtcblxuICAvLyBkZWZhdWx0IHN0cmVhbXNcbiAgcHJpdmF0ZSBkZWZhdWx0OiB7XG4gICAgaGVhZFRpdGxlOiBSZXBsYXlTdWJqZWN0PGFueT47XG4gICAgcGFnZVRpdGxlOiBSZXBsYXlTdWJqZWN0PGFueT47XG4gICAgc3VibmF2OiBSZXBsYXlTdWJqZWN0PGFueT47XG4gICAgYnJlYWRjcnVtYnM6IFJlcGxheVN1YmplY3Q8YW55PjtcbiAgICBmaWx0ZXJzOiBSZXBsYXlTdWJqZWN0PGFueT47XG4gIH0gPSB7XG4gICAgaGVhZFRpdGxlOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICAgIHBhZ2VUaXRsZTogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBzdWJuYXY6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gICAgYnJlYWRjcnVtYnM6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gICAgZmlsdGVyczogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgfTtcblxuICBwdWJsaWMgZ2V0JCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy5fZ2V0KCdkZWZhdWx0Jywga2V5KTtcblxuICBwdWJsaWMgZ2V0Q3VzdG9tJCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy5fZ2V0KCdjdXN0b20nLCBrZXkpO1xuXG4gIHB1YmxpYyB1cGRhdGUgPSAoa2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpID0+IHRoaXMuX3VwZGF0ZSgnZGVmYXVsdCcsIGtleSwgbmV3VmFsdWUpO1xuXG4gIHB1YmxpYyB1cGRhdGVDdXN0b20gPSAoa2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpID0+IHRoaXMuX3VwZGF0ZSgnY3VzdG9tJywga2V5LCBuZXdWYWx1ZSk7XG5cbiAgcHVibGljIGhhcyA9IChrZXk6IHN0cmluZykgPT4gISF0aGlzLmRlZmF1bHRba2V5XTtcblxuICBwdWJsaWMgaGFzQ3VzdG9tID0gKGtleTogc3RyaW5nKSA9PiAhIXRoaXMuY3VzdG9tW2tleV07XG5cbiAgcHVibGljIGFkZEN1c3RvbShrZXk6IHN0cmluZywgc3RyZWFtJDogUmVwbGF5U3ViamVjdDxhbnk+KSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tW2tleV0pIHRocm93IEVycm9yKGBjdXN0b20gc3RyZWFtICR7a2V5fSBleGlzdHMhYCk7XG5cbiAgICB0aGlzLmN1c3RvbVtrZXldID0gc3RyZWFtJDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZSh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgaWYgKCF0aGlzW3R5cGVdKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gZ3JvdXAgZG9lcyBub3QgZXhpc3RzIWApO1xuICAgIGlmICghdGhpc1t0eXBlXVtrZXldKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gJHtrZXl9IGRvZXMgbm90IGV4aXN0cyFgKTtcblxuICAgIHRoaXNbdHlwZV1ba2V5XS5uZXh0KG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldCh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzW3R5cGVdKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gZ3JvdXAgZG9lcyBub3QgZXhpc3RzIWApO1xuICAgIGlmICghdGhpc1t0eXBlXVtrZXldKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gJHtrZXl9IGRvZXMgbm90IGV4aXN0cyFgKTtcblxuICAgIHJldHVybiB0aGlzW3R5cGVdW2tleV07XG4gIH1cbn1cbiJdfQ==