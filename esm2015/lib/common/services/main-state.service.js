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
                providedIn: 'root',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLckMsTUFBTSxPQUFPLGdCQUFnQjtJQUg3Qjs7UUFLVSxXQUFNLEdBQVEsRUFBRSxDQUFDOztRQUdqQixZQUFPLEdBTVg7WUFDRixTQUFTLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDOUIsU0FBUyxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzlCLE1BQU0sRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUMzQixXQUFXLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDaEMsT0FBTyxFQUFFLElBQUksYUFBYSxFQUFFO1NBQzdCLENBQUM7UUFFSyxTQUFJOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBRWxELGVBQVU7Ozs7UUFBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFFdkQsV0FBTTs7Ozs7UUFBRyxDQUFDLEdBQVcsRUFBRSxRQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBQztRQUVoRixpQkFBWTs7Ozs7UUFBRyxDQUFDLEdBQVcsRUFBRSxRQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBQztRQUVyRixRQUFHOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1FBRTNDLGNBQVM7Ozs7UUFBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUM7S0FxQnhEOzs7Ozs7SUFuQlEsU0FBUyxDQUFDLEdBQVcsRUFBRSxPQUEyQjtRQUN2RCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDN0IsQ0FBQzs7Ozs7Ozs7SUFFTyxPQUFPLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxRQUFhO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyxHQUFHLElBQUksV0FBVyxHQUFHLG1CQUFtQixDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7O0lBRU8sSUFBSSxDQUFDLElBQVksRUFBRSxHQUFXO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBQyxHQUFHLElBQUksV0FBVyxHQUFHLG1CQUFtQixDQUFDLENBQUM7UUFFNUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBcERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7SUFHQyxrQ0FBeUI7Ozs7O0lBR3pCLG1DQVlFOztJQUVGLGdDQUF5RDs7SUFFekQsc0NBQThEOztJQUU5RCxrQ0FBdUY7O0lBRXZGLHdDQUE0Rjs7SUFFNUYsK0JBQWtEOztJQUVsRCxxQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNYWluU3RhdGVTZXJ2aWNlIHtcbiAgLy8gY3VzdG9tIHN0cmVhbXNcbiAgcHJpdmF0ZSBjdXN0b206IGFueSA9IHt9O1xuXG4gIC8vIGRlZmF1bHQgc3RyZWFtc1xuICBwcml2YXRlIGRlZmF1bHQ6IHtcbiAgICBoZWFkVGl0bGU6IFJlcGxheVN1YmplY3Q8YW55PjtcbiAgICBwYWdlVGl0bGU6IFJlcGxheVN1YmplY3Q8YW55PjtcbiAgICBzdWJuYXY6IFJlcGxheVN1YmplY3Q8YW55PjtcbiAgICBicmVhZGNydW1iczogUmVwbGF5U3ViamVjdDxhbnk+O1xuICAgIGZpbHRlcnM6IFJlcGxheVN1YmplY3Q8YW55PjtcbiAgfSA9IHtcbiAgICBoZWFkVGl0bGU6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gICAgcGFnZVRpdGxlOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICAgIHN1Ym5hdjogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBicmVhZGNydW1iczogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBmaWx0ZXJzOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICB9O1xuXG4gIHB1YmxpYyBnZXQkID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2RlZmF1bHQnLCBrZXkpO1xuXG4gIHB1YmxpYyBnZXRDdXN0b20kID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2N1c3RvbScsIGtleSk7XG5cbiAgcHVibGljIHVwZGF0ZSA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4gdGhpcy5fdXBkYXRlKCdkZWZhdWx0Jywga2V5LCBuZXdWYWx1ZSk7XG5cbiAgcHVibGljIHVwZGF0ZUN1c3RvbSA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4gdGhpcy5fdXBkYXRlKCdjdXN0b20nLCBrZXksIG5ld1ZhbHVlKTtcblxuICBwdWJsaWMgaGFzID0gKGtleTogc3RyaW5nKSA9PiAhIXRoaXMuZGVmYXVsdFtrZXldO1xuXG4gIHB1YmxpYyBoYXNDdXN0b20gPSAoa2V5OiBzdHJpbmcpID0+ICEhdGhpcy5jdXN0b21ba2V5XTtcblxuICBwdWJsaWMgYWRkQ3VzdG9tKGtleTogc3RyaW5nLCBzdHJlYW0kOiBSZXBsYXlTdWJqZWN0PGFueT4pIHtcbiAgICBpZiAodGhpcy5jdXN0b21ba2V5XSkgdGhyb3cgRXJyb3IoYGN1c3RvbSBzdHJlYW0gJHtrZXl9IGV4aXN0cyFgKTtcblxuICAgIHRoaXMuY3VzdG9tW2tleV0gPSBzdHJlYW0kO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICBpZiAoIXRoaXNbdHlwZV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSBncm91cCBkb2VzIG5vdCBleGlzdHMhYCk7XG4gICAgaWYgKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xuXG4gICAgdGhpc1t0eXBlXVtrZXldLm5leHQobmV3VmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0KHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXNbdHlwZV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSBncm91cCBkb2VzIG5vdCBleGlzdHMhYCk7XG4gICAgaWYgKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xuXG4gICAgcmV0dXJuIHRoaXNbdHlwZV1ba2V5XTtcbiAgfVxufVxuIl19