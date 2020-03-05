/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/services/main-state.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3JDLE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7O1FBS1UsV0FBTSxHQUFRLEVBQUUsQ0FBQzs7UUFHakIsWUFBTyxHQU1YO1lBQ0YsU0FBUyxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzlCLFNBQVMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM5QixNQUFNLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDM0IsV0FBVyxFQUFFLElBQUksYUFBYSxFQUFFO1lBQ2hDLE9BQU8sRUFBRSxJQUFJLGFBQWEsRUFBRTtTQUM3QixDQUFDO1FBRUssU0FBSTs7OztRQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBQztRQUVsRCxlQUFVOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBRXZELFdBQU07Ozs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsUUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUM7UUFFaEYsaUJBQVk7Ozs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsUUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUM7UUFFckYsUUFBRzs7OztRQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQztRQUUzQyxjQUFTOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDO0tBcUJ4RDs7Ozs7O0lBbkJRLFNBQVMsQ0FBQyxHQUFXLEVBQUUsT0FBMkI7UUFDdkQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7O0lBRU8sT0FBTyxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsUUFBYTtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7OztJQUVPLElBQUksQ0FBQyxJQUFZLEVBQUUsR0FBVztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQXBERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7O0lBR0Msa0NBQXlCOzs7OztJQUd6QixtQ0FZRTs7SUFFRixnQ0FBeUQ7O0lBRXpELHNDQUE4RDs7SUFFOUQsa0NBQXVGOztJQUV2Rix3Q0FBNEY7O0lBRTVGLCtCQUFrRDs7SUFFbEQscUNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpblN0YXRlU2VydmljZSB7XHJcbiAgLy8gY3VzdG9tIHN0cmVhbXNcclxuICBwcml2YXRlIGN1c3RvbTogYW55ID0ge307XHJcblxyXG4gIC8vIGRlZmF1bHQgc3RyZWFtc1xyXG4gIHByaXZhdGUgZGVmYXVsdDoge1xyXG4gICAgaGVhZFRpdGxlOiBSZXBsYXlTdWJqZWN0PGFueT47XHJcbiAgICBwYWdlVGl0bGU6IFJlcGxheVN1YmplY3Q8YW55PjtcclxuICAgIHN1Ym5hdjogUmVwbGF5U3ViamVjdDxhbnk+O1xyXG4gICAgYnJlYWRjcnVtYnM6IFJlcGxheVN1YmplY3Q8YW55PjtcclxuICAgIGZpbHRlcnM6IFJlcGxheVN1YmplY3Q8YW55PjtcclxuICB9ID0ge1xyXG4gICAgaGVhZFRpdGxlOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxyXG4gICAgcGFnZVRpdGxlOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxyXG4gICAgc3VibmF2OiBuZXcgUmVwbGF5U3ViamVjdCgpLFxyXG4gICAgYnJlYWRjcnVtYnM6IG5ldyBSZXBsYXlTdWJqZWN0KCksXHJcbiAgICBmaWx0ZXJzOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBnZXQkID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2RlZmF1bHQnLCBrZXkpO1xyXG5cclxuICBwdWJsaWMgZ2V0Q3VzdG9tJCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy5fZ2V0KCdjdXN0b20nLCBrZXkpO1xyXG5cclxuICBwdWJsaWMgdXBkYXRlID0gKGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSA9PiB0aGlzLl91cGRhdGUoJ2RlZmF1bHQnLCBrZXksIG5ld1ZhbHVlKTtcclxuXHJcbiAgcHVibGljIHVwZGF0ZUN1c3RvbSA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4gdGhpcy5fdXBkYXRlKCdjdXN0b20nLCBrZXksIG5ld1ZhbHVlKTtcclxuXHJcbiAgcHVibGljIGhhcyA9IChrZXk6IHN0cmluZykgPT4gISF0aGlzLmRlZmF1bHRba2V5XTtcclxuXHJcbiAgcHVibGljIGhhc0N1c3RvbSA9IChrZXk6IHN0cmluZykgPT4gISF0aGlzLmN1c3RvbVtrZXldO1xyXG5cclxuICBwdWJsaWMgYWRkQ3VzdG9tKGtleTogc3RyaW5nLCBzdHJlYW0kOiBSZXBsYXlTdWJqZWN0PGFueT4pIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbVtrZXldKSB0aHJvdyBFcnJvcihgY3VzdG9tIHN0cmVhbSAke2tleX0gZXhpc3RzIWApO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tW2tleV0gPSBzdHJlYW0kO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIGlmICghdGhpc1t0eXBlXSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtIGdyb3VwIGRvZXMgbm90IGV4aXN0cyFgKTtcclxuICAgIGlmICghdGhpc1t0eXBlXVtrZXldKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gJHtrZXl9IGRvZXMgbm90IGV4aXN0cyFgKTtcclxuXHJcbiAgICB0aGlzW3R5cGVdW2tleV0ubmV4dChuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXQodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCF0aGlzW3R5cGVdKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gZ3JvdXAgZG9lcyBub3QgZXhpc3RzIWApO1xyXG4gICAgaWYgKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xyXG5cclxuICAgIHJldHVybiB0aGlzW3R5cGVdW2tleV07XHJcbiAgfVxyXG59XHJcbiJdfQ==