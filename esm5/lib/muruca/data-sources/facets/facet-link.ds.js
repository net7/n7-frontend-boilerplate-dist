/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/data-sources/facets/facet-link.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
/** @type {?} */
var ACTIVE_CLASS = 'is-active';
var FacetLinkDS = /** @class */ (function (_super) {
    tslib_1.__extends(FacetLinkDS, _super);
    function FacetLinkDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getValue = (/**
         * @return {?}
         */
        function () { return _this.value; });
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    FacetLinkDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return data;
    };
    /**
     * @param {?} value
     * @param {?=} update
     * @return {?}
     */
    FacetLinkDS.prototype.setValue = /**
     * @param {?} value
     * @param {?=} update
     * @return {?}
     */
    function (value, update) {
        if (update === void 0) { update = false; }
        this.value = value;
        if (update) {
            var links = this.input.links;
            /** @type {?} */
            var updatedLinks = links.map((/**
             * @param {?} link
             * @return {?}
             */
            function (link) { return (tslib_1.__assign({}, link, { classes: value.indexOf(link.payload) !== -1 ? ACTIVE_CLASS : '' })); }));
            this.update(tslib_1.__assign({}, this.input, { links: updatedLinks }));
        }
    };
    /**
     * @return {?}
     */
    FacetLinkDS.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.value = [];
    };
    return FacetLinkDS;
}(DataSource));
export { FacetLinkDS };
if (false) {
    /** @type {?} */
    FacetLinkDS.prototype.id;
    /** @type {?} */
    FacetLinkDS.prototype.value;
    /** @type {?} */
    FacetLinkDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFNekMsWUFBWSxHQUFHLFdBQVc7QUFFaEM7SUFBaUMsdUNBQVU7SUFBM0M7UUFBQSxxRUE4QkM7UUFMQyxjQUFROzs7UUFBRyxjQUFtQixPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDOztJQUszQyxDQUFDOzs7Ozs7SUF6QlcsK0JBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQW1CO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsOEJBQVE7Ozs7O0lBQVIsVUFBUyxLQUFrQixFQUFFLE1BQWM7UUFBZCx1QkFBQSxFQUFBLGNBQWM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLEVBQUU7WUFDRixJQUFBLHdCQUFLOztnQkFDUCxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLElBQWUsSUFBSyxPQUFBLHNCQUMvQyxJQUFJLElBQ1AsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFDL0QsRUFIa0QsQ0FHbEQsRUFBQztZQUNILElBQUksQ0FBQyxNQUFNLHNCQUNOLElBQUksQ0FBQyxLQUFLLElBQ2IsS0FBSyxFQUFFLFlBQVksSUFDbkIsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUlELDJCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUE5QkQsQ0FBaUMsVUFBVSxHQThCMUM7Ozs7SUE3QkMseUJBQVc7O0lBRVgsNEJBQW1COztJQXNCbkIsK0JBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElucHV0TGluaywgSW5wdXRMaW5rRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmdbXTtcblxuY29uc3QgQUNUSVZFX0NMQVNTID0gJ2lzLWFjdGl2ZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldExpbmtEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlOiBGQUNFVF9WQUxVRTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0TGlua0RhdGEpOiBJbnB1dExpbmtEYXRhIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBGQUNFVF9WQUxVRSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IGxpbmtzIH0gPSB0aGlzLmlucHV0O1xuICAgICAgY29uc3QgdXBkYXRlZExpbmtzID0gbGlua3MubWFwKChsaW5rOiBJbnB1dExpbmspID0+ICh7XG4gICAgICAgIC4uLmxpbmssXG4gICAgICAgIGNsYXNzZXM6IHZhbHVlLmluZGV4T2YobGluay5wYXlsb2FkKSAhPT0gLTEgPyBBQ1RJVkVfQ0xBU1MgOiAnJ1xuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBsaW5rczogdXBkYXRlZExpbmtzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgfVxufVxuIl19