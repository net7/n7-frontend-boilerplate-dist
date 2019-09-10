/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var MainStateService = /** @class */ (function () {
    function MainStateService() {
        var _this = this;
        // custom streams
        this.custom = {};
        // default streams
        this.default = {
            headTitle: new Subject(),
            pageTitle: new Subject(),
            subnav: new Subject(),
            breadcrumbs: new Subject(),
            filters: new Subject(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7SUFBQTtRQUFBLGlCQW1EQzs7UUE5Q1MsV0FBTSxHQUFRLEVBQUUsQ0FBQzs7UUFHakIsWUFBTyxHQU1YO1lBQ0YsU0FBUyxFQUFFLElBQUksT0FBTyxFQUFFO1lBQ3hCLFNBQVMsRUFBRSxJQUFJLE9BQU8sRUFBRTtZQUN4QixNQUFNLEVBQUUsSUFBSSxPQUFPLEVBQUU7WUFDckIsV0FBVyxFQUFFLElBQUksT0FBTyxFQUFFO1lBQzFCLE9BQU8sRUFBRSxJQUFJLE9BQU8sRUFBRTtTQUN2QixDQUFDO1FBRUssU0FBSTs7OztRQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQXpCLENBQXlCLEVBQUM7UUFDbEQsZUFBVTs7OztRQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQXhCLENBQXdCLEVBQUM7UUFFdkQsV0FBTTs7Ozs7UUFBRyxVQUFDLEdBQVcsRUFBRSxRQUFhLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQXRDLENBQXNDLEVBQUM7UUFDaEYsaUJBQVk7Ozs7O1FBQUcsVUFBQyxHQUFXLEVBQUUsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFyQyxDQUFxQyxFQUFDO1FBRXJGLFFBQUc7Ozs7UUFBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixFQUFDO1FBQzNDLGNBQVM7Ozs7UUFBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixFQUFDO0tBc0J4RDs7Ozs7O0lBcEJRLG9DQUFTOzs7OztJQUFoQixVQUFpQixHQUFXLEVBQUUsT0FBcUI7UUFDakQsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFDLG1CQUFpQixHQUFHLGFBQVUsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7O0lBRU8sa0NBQU87Ozs7Ozs7SUFBZixVQUFnQixJQUFZLEVBQUUsR0FBVyxFQUFFLFFBQWE7UUFDdEQsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBSSxJQUFJLG1DQUFnQyxDQUFDLENBQUM7UUFDckUsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEtBQUssQ0FBSSxJQUFJLGdCQUFXLEdBQUcsc0JBQW1CLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7SUFFTywrQkFBSTs7Ozs7O0lBQVosVUFBYSxJQUFZLEVBQUUsR0FBVztRQUNwQyxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksbUNBQWdDLENBQUMsQ0FBQztRQUNyRSxJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUFFLE1BQU0sS0FBSyxDQUFJLElBQUksZ0JBQVcsR0FBRyxzQkFBbUIsQ0FBQyxDQUFDO1FBRTNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQWpERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MkJBTEQ7Q0FzREMsQUFuREQsSUFtREM7U0FoRFksZ0JBQWdCOzs7Ozs7SUFFM0Isa0NBQXlCOzs7OztJQUd6QixtQ0FZRTs7SUFFRixnQ0FBeUQ7O0lBQ3pELHNDQUE4RDs7SUFFOUQsa0NBQXVGOztJQUN2Rix3Q0FBNEY7O0lBRTVGLCtCQUFrRDs7SUFDbEQscUNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWluU3RhdGVTZXJ2aWNlIHtcbiAgLy8gY3VzdG9tIHN0cmVhbXNcbiAgcHJpdmF0ZSBjdXN0b206IGFueSA9IHt9O1xuICBcbiAgLy8gZGVmYXVsdCBzdHJlYW1zXG4gIHByaXZhdGUgZGVmYXVsdDoge1xuICAgIGhlYWRUaXRsZTogU3ViamVjdDxhbnk+LFxuICAgIHBhZ2VUaXRsZTogU3ViamVjdDxhbnk+LFxuICAgIHN1Ym5hdjogU3ViamVjdDxhbnk+LFxuICAgIGJyZWFkY3J1bWJzOiBTdWJqZWN0PGFueT4sXG4gICAgZmlsdGVyczogU3ViamVjdDxhbnk+LFxuICB9ID0ge1xuICAgIGhlYWRUaXRsZTogbmV3IFN1YmplY3QoKSxcbiAgICBwYWdlVGl0bGU6IG5ldyBTdWJqZWN0KCksXG4gICAgc3VibmF2OiBuZXcgU3ViamVjdCgpLFxuICAgIGJyZWFkY3J1bWJzOiBuZXcgU3ViamVjdCgpLFxuICAgIGZpbHRlcnM6IG5ldyBTdWJqZWN0KCksXG4gIH07XG5cbiAgcHVibGljIGdldCQgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuX2dldCgnZGVmYXVsdCcsIGtleSk7XG4gIHB1YmxpYyBnZXRDdXN0b20kID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLl9nZXQoJ2N1c3RvbScsIGtleSk7XG5cbiAgcHVibGljIHVwZGF0ZSA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4gdGhpcy5fdXBkYXRlKCdkZWZhdWx0Jywga2V5LCBuZXdWYWx1ZSk7XG4gIHB1YmxpYyB1cGRhdGVDdXN0b20gPSAoa2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpID0+IHRoaXMuX3VwZGF0ZSgnY3VzdG9tJywga2V5LCBuZXdWYWx1ZSk7XG5cbiAgcHVibGljIGhhcyA9IChrZXk6IHN0cmluZykgPT4gISF0aGlzLmRlZmF1bHRba2V5XTtcbiAgcHVibGljIGhhc0N1c3RvbSA9IChrZXk6IHN0cmluZykgPT4gISF0aGlzLmN1c3RvbVtrZXldO1xuXG4gIHB1YmxpYyBhZGRDdXN0b20oa2V5OiBzdHJpbmcsIHN0cmVhbSQ6IFN1YmplY3Q8YW55Pil7XG4gICAgaWYodGhpcy5jdXN0b21ba2V5XSkgdGhyb3cgRXJyb3IoYGN1c3RvbSBzdHJlYW0gJHtrZXl9IGV4aXN0cyFgKTtcblxuICAgIHRoaXMuY3VzdG9tW2tleV0gPSBzdHJlYW0kO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpe1xuICAgIGlmKCF0aGlzW3R5cGVdKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gZ3JvdXAgZG9lcyBub3QgZXhpc3RzIWApO1xuICAgIGlmKCF0aGlzW3R5cGVdW2tleV0pIHRocm93IEVycm9yKGAke3R5cGV9IHN0cmVhbSAke2tleX0gZG9lcyBub3QgZXhpc3RzIWApO1xuICAgIFxuICAgIHRoaXNbdHlwZV1ba2V5XS5uZXh0KG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldCh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKXtcbiAgICBpZighdGhpc1t0eXBlXSkgdGhyb3cgRXJyb3IoYCR7dHlwZX0gc3RyZWFtIGdyb3VwIGRvZXMgbm90IGV4aXN0cyFgKTtcbiAgICBpZighdGhpc1t0eXBlXVtrZXldKSB0aHJvdyBFcnJvcihgJHt0eXBlfSBzdHJlYW0gJHtrZXl9IGRvZXMgbm90IGV4aXN0cyFgKTtcbiAgICBcbiAgICByZXR1cm4gdGhpc1t0eXBlXVtrZXldO1xuICB9XG5cbn0iXX0=