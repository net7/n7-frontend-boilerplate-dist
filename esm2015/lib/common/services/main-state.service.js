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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3JDLE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7O1FBS1UsV0FBTSxHQUFRLEVBQUUsQ0FBQzs7UUFHakIsWUFBTyxHQU1YO1lBQ0YsU0FBUyxFQUFFLElBQUksYUFBYSxFQUFFO1lBQzlCLFNBQVMsRUFBRSxJQUFJLGFBQWEsRUFBRTtZQUM5QixNQUFNLEVBQUUsSUFBSSxhQUFhLEVBQUU7WUFDM0IsV0FBVyxFQUFFLElBQUksYUFBYSxFQUFFO1lBQ2hDLE9BQU8sRUFBRSxJQUFJLGFBQWEsRUFBRTtTQUM3QixDQUFDO1FBRUssU0FBSTs7OztRQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBQztRQUNsRCxlQUFVOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBRXZELFdBQU07Ozs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsUUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUM7UUFDaEYsaUJBQVk7Ozs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsUUFBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUM7UUFFckYsUUFBRzs7OztRQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQztRQUMzQyxjQUFTOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDO0tBc0J4RDs7Ozs7O0lBcEJRLFNBQVMsQ0FBQyxHQUFXLEVBQUUsT0FBMkI7UUFDdkQsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7O0lBRU8sT0FBTyxDQUFDLElBQVksRUFBRSxHQUFXLEVBQUUsUUFBYTtRQUN0RCxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3JFLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7OztJQUVPLElBQUksQ0FBQyxJQUFZLEVBQUUsR0FBVztRQUNwQyxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3JFLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxJQUFJLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQWpERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7O0lBR0Msa0NBQXlCOzs7OztJQUd6QixtQ0FZRTs7SUFFRixnQ0FBeUQ7O0lBQ3pELHNDQUE4RDs7SUFFOUQsa0NBQXVGOztJQUN2Rix3Q0FBNEY7O0lBRTVGLCtCQUFrRDs7SUFDbEQscUNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWluU3RhdGVTZXJ2aWNlIHtcbiAgLy8gY3VzdG9tIHN0cmVhbXNcbiAgcHJpdmF0ZSBjdXN0b206IGFueSA9IHt9O1xuICBcbiAgLy8gZGVmYXVsdCBzdHJlYW1zXG4gIHByaXZhdGUgZGVmYXVsdDoge1xuICAgIGhlYWRUaXRsZTogUmVwbGF5U3ViamVjdDxhbnk+LFxuICAgIHBhZ2VUaXRsZTogUmVwbGF5U3ViamVjdDxhbnk+LFxuICAgIHN1Ym5hdjogUmVwbGF5U3ViamVjdDxhbnk+LFxuICAgIGJyZWFkY3J1bWJzOiBSZXBsYXlTdWJqZWN0PGFueT4sXG4gICAgZmlsdGVyczogUmVwbGF5U3ViamVjdDxhbnk+LFxuICB9ID0ge1xuICAgIGhlYWRUaXRsZTogbmV3IFJlcGxheVN1YmplY3QoKSxcbiAgICBwYWdlVGl0bGU6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gICAgc3VibmF2OiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICAgIGJyZWFkY3J1bWJzOiBuZXcgUmVwbGF5U3ViamVjdCgpLFxuICAgIGZpbHRlcnM6IG5ldyBSZXBsYXlTdWJqZWN0KCksXG4gIH07XG5cbiAgcHVibGljIGdldCQgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuX2dldCgnZGVmYXVsdCcsIGtleSk7XG4gIHB1YmxpYyBnZXRDdXN0b20kID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2N1c3RvbScsIGtleSk7XG5cbiAgcHVibGljIHVwZGF0ZSA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4gdGhpcy5fdXBkYXRlKCdkZWZhdWx0Jywga2V5LCBuZXdWYWx1ZSk7XG4gIHB1YmxpYyB1cGRhdGVDdXN0b20gPSAoa2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpID0+IHRoaXMuX3VwZGF0ZSgnY3VzdG9tJywga2V5LCBuZXdWYWx1ZSk7XG5cbiAgcHVibGljIGhhcyA9IChrZXk6IHN0cmluZykgPT4gISF0aGlzLmRlZmF1bHRba2V5XTtcbiAgcHVibGljIGhhc0N1c3RvbSA9IChrZXk6IHN0cmluZykgPT4gISF0aGlzLmN1c3RvbVtrZXldO1xuXG4gIHB1YmxpYyBhZGRDdXN0b20oa2V5OiBzdHJpbmcsIHN0cmVhbSQ6IFJlcGxheVN1YmplY3Q8YW55Pil7XG4gICAgaWYodGhpcy5jdXN0b21ba2V5XSkgdGhyb3cgRXJyb3IoYGN1c3RvbSBzdHJlYW0gJHtrZXl9IGV4aXN0cyFgKTtcblxuICAgIHRoaXMuY3VzdG9tW2tleV0gPSBzdHJlYW0kO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpe1xuICAgIGlmKCF0aGlzW3R5cGVdKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gZ3JvdXAgZG9lcyBub3QgZXhpc3RzIWApO1xuICAgIGlmKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xuICAgIFxuICAgIHRoaXNbdHlwZV1ba2V5XS5uZXh0KG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldCh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKXtcbiAgICBpZighdGhpc1t0eXBlXSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtIGdyb3VwIGRvZXMgbm90IGV4aXN0cyFgKTtcbiAgICBpZighdGhpc1t0eXBlXVtrZXldKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gJHtrZXl9IGRvZXMgbm90IGV4aXN0cyFgKTtcbiAgICBcbiAgICByZXR1cm4gdGhpc1t0eXBlXVtrZXldO1xuICB9XG5cbn0iXX0=