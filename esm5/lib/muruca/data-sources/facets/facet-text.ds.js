/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/data-sources/facets/facet-text.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var FacetTextDS = /** @class */ (function (_super) {
    tslib_1.__extends(FacetTextDS, _super);
    function FacetTextDS() {
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
    FacetTextDS.prototype.transform = /**
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
    FacetTextDS.prototype.setValue = /**
     * @param {?} value
     * @param {?=} update
     * @return {?}
     */
    function (value, update) {
        if (update === void 0) { update = false; }
        this.value = value;
        if (update) {
            this.update(tslib_1.__assign({}, this.input, { value: value }));
        }
    };
    /**
     * @return {?}
     */
    FacetTextDS.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.value = null;
    };
    return FacetTextDS;
}(DataSource));
export { FacetTextDS };
if (false) {
    /** @type {?} */
    FacetTextDS.prototype.id;
    /** @type {?} */
    FacetTextDS.prototype.value;
    /** @type {?} */
    FacetTextDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU0vQztJQUFpQyx1Q0FBVTtJQUEzQztRQUFBLHFFQXlCQztRQUxDLGNBQVE7OztRQUFHLGNBQW1CLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLEVBQUM7O0lBSzNDLENBQUM7Ozs7OztJQXBCVywrQkFBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBbUI7UUFDckMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCw4QkFBUTs7Ozs7SUFBUixVQUFTLEtBQWtCLEVBQUUsTUFBYztRQUFkLHVCQUFBLEVBQUEsY0FBYztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLHNCQUNOLElBQUksQ0FBQyxLQUFLLElBQ2IsS0FBSyxPQUFBLElBQ0wsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUlELDJCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF6QkQsQ0FBaUMsVUFBVSxHQXlCMUM7Ozs7SUF4QkMseUJBQVc7O0lBRVgsNEJBQW1COztJQWlCbkIsK0JBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElucHV0VGV4dERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nIHwgbnVsbDtcblxuZXhwb3J0IGNsYXNzIEZhY2V0VGV4dERTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRUZXh0RGF0YSk6IElucHV0VGV4dERhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==