/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export class MainStateService {
    constructor() {
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
        (key) => this._get('default', key));
        this.getCustom$ = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => this._get('custom', key));
        this.update = (/**
         * @param {?} key
         * @param {?} newValue
         * @return {?}
         */
        (key, newValue) => this._update('default', key, newValue));
        this.updateCustom = (/**
         * @param {?} key
         * @param {?} newValue
         * @return {?}
         */
        (key, newValue) => this._update('custom', key, newValue));
        this.has = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => !!this.default[key]);
        this.hasCustom = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => !!this.custom[key]);
    }
    /**
     * @param {?} key
     * @param {?} stream$
     * @return {?}
     */
    addCustom(key, stream$) {
        if (this.custom[key])
            throw Error(`custom stream ${key} exists!`);
        this.custom[key] = stream$;
    }
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @param {?} newValue
     * @return {?}
     */
    _update(type, key, newValue) {
        if (!this[type])
            throw Error(`${type} stream group does not exists!`);
        if (!this[type][key])
            throw Error(`${type} stream ${key} does not exists!`);
        this[type][key].next(newValue);
    }
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @return {?}
     */
    _get(type, key) {
        if (!this[type])
            throw Error(`${type} stream group does not exists!`);
        if (!this[type][key])
            throw Error(`${type} stream ${key} does not exists!`);
        return this[type][key];
    }
}
MainStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ MainStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MainStateService_Factory() { return new MainStateService(); }, token: MainStateService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLckMsTUFBTSxPQUFPLGdCQUFnQjtJQUg3Qjs7UUFLVSxXQUFNLEdBQVEsRUFBRSxDQUFDOztRQUdqQixZQUFPLEdBTVg7WUFDRixTQUFTLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDOUIsU0FBUyxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzlCLE1BQU0sRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUMzQixXQUFXLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDaEMsT0FBTyxFQUFFLElBQUksYUFBYSxFQUFFO1NBQzdCLENBQUM7UUFFSyxTQUFJOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBQ2xELGVBQVU7Ozs7UUFBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFFdkQsV0FBTTs7Ozs7UUFBRyxDQUFDLEdBQVcsRUFBRSxRQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBQztRQUNoRixpQkFBWTs7Ozs7UUFBRyxDQUFDLEdBQVcsRUFBRSxRQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBQztRQUVyRixRQUFHOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1FBQzNDLGNBQVM7Ozs7UUFBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUM7S0FzQnhEOzs7Ozs7SUFwQlEsU0FBUyxDQUFDLEdBQVcsRUFBRSxPQUEyQjtRQUN2RCxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDN0IsQ0FBQzs7Ozs7Ozs7SUFFTyxPQUFPLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxRQUFhO1FBQ3RELElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLENBQUM7UUFDckUsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyxHQUFHLElBQUksV0FBVyxHQUFHLG1CQUFtQixDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7O0lBRU8sSUFBSSxDQUFDLElBQVksRUFBRSxHQUFXO1FBQ3BDLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLENBQUM7UUFDckUsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyxHQUFHLElBQUksV0FBVyxHQUFHLG1CQUFtQixDQUFDLENBQUM7UUFFM0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBakRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7SUFHQyxrQ0FBeUI7Ozs7O0lBR3pCLG1DQVlFOztJQUVGLGdDQUF5RDs7SUFDekQsc0NBQThEOztJQUU5RCxrQ0FBdUY7O0lBQ3ZGLHdDQUE0Rjs7SUFFNUYsK0JBQWtEOztJQUNsRCxxQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1haW5TdGF0ZVNlcnZpY2Uge1xuICAvLyBjdXN0b20gc3RyZWFtc1xuICBwcml2YXRlIGN1c3RvbTogYW55ID0ge307XG4gIFxuICAvLyBkZWZhdWx0IHN0cmVhbXNcbiAgcHJpdmF0ZSBkZWZhdWx0OiB7XG4gICAgaGVhZFRpdGxlOiBSZXBsYXlTdWJqZWN0PGFueT4sXG4gICAgcGFnZVRpdGxlOiBSZXBsYXlTdWJqZWN0PGFueT4sXG4gICAgc3VibmF2OiBSZXBsYXlTdWJqZWN0PGFueT4sXG4gICAgYnJlYWRjcnVtYnM6IFJlcGxheVN1YmplY3Q8YW55PixcbiAgICBmaWx0ZXJzOiBSZXBsYXlTdWJqZWN0PGFueT4sXG4gIH0gPSB7XG4gICAgaGVhZFRpdGxlOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICAgIHBhZ2VUaXRsZTogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBzdWJuYXY6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gICAgYnJlYWRjcnVtYnM6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gICAgZmlsdGVyczogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgfTtcblxuICBwdWJsaWMgZ2V0JCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy5fZ2V0KCdkZWZhdWx0Jywga2V5KTtcbiAgcHVibGljIGdldEN1c3RvbSQgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuX2dldCgnY3VzdG9tJywga2V5KTtcblxuICBwdWJsaWMgdXBkYXRlID0gKGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSA9PiB0aGlzLl91cGRhdGUoJ2RlZmF1bHQnLCBrZXksIG5ld1ZhbHVlKTtcbiAgcHVibGljIHVwZGF0ZUN1c3RvbSA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4gdGhpcy5fdXBkYXRlKCdjdXN0b20nLCBrZXksIG5ld1ZhbHVlKTtcblxuICBwdWJsaWMgaGFzID0gKGtleTogc3RyaW5nKSA9PiAhIXRoaXMuZGVmYXVsdFtrZXldO1xuICBwdWJsaWMgaGFzQ3VzdG9tID0gKGtleTogc3RyaW5nKSA9PiAhIXRoaXMuY3VzdG9tW2tleV07XG5cbiAgcHVibGljIGFkZEN1c3RvbShrZXk6IHN0cmluZywgc3RyZWFtJDogUmVwbGF5U3ViamVjdDxhbnk+KXtcbiAgICBpZih0aGlzLmN1c3RvbVtrZXldKSB0aHJvdyBFcnJvcihgY3VzdG9tIHN0cmVhbSAke2tleX0gZXhpc3RzIWApO1xuXG4gICAgdGhpcy5jdXN0b21ba2V5XSA9IHN0cmVhbSQ7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGUodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSl7XG4gICAgaWYoIXRoaXNbdHlwZV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSBncm91cCBkb2VzIG5vdCBleGlzdHMhYCk7XG4gICAgaWYoIXRoaXNbdHlwZV1ba2V5XSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtICR7a2V5fSBkb2VzIG5vdCBleGlzdHMhYCk7XG4gICAgXG4gICAgdGhpc1t0eXBlXVtrZXldLm5leHQobmV3VmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0KHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcpe1xuICAgIGlmKCF0aGlzW3R5cGVdKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gZ3JvdXAgZG9lcyBub3QgZXhpc3RzIWApO1xuICAgIGlmKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xuICAgIFxuICAgIHJldHVybiB0aGlzW3R5cGVdW2tleV07XG4gIH1cblxufSJdfQ==