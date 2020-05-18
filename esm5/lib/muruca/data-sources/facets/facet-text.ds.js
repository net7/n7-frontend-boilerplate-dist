/**
 * @fileoverview added by tsickle
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
            // fix element update
            /** @type {?} */
            var el = (/** @type {?} */ (document.getElementById(this.output.id)));
            if (el) {
                el.value = value;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTS9DO0lBQWlDLHVDQUFVO0lBQTNDO1FBQUEscUVBK0JDO1FBTEMsY0FBUTs7O1FBQUcsY0FBbUIsT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQzs7SUFLM0MsQ0FBQzs7Ozs7O0lBMUJXLCtCQUFTOzs7OztJQUFuQixVQUFvQixJQUFtQjtRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELDhCQUFROzs7OztJQUFSLFVBQVMsS0FBa0IsRUFBRSxNQUFjO1FBQWQsdUJBQUEsRUFBQSxjQUFjO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sc0JBQ04sSUFBSSxDQUFDLEtBQUssSUFDYixLQUFLLE9BQUEsSUFDTCxDQUFDOzs7Z0JBR0csRUFBRSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBb0I7WUFDdEUsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7Ozs7SUFJRCwyQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBL0JELENBQWlDLFVBQVUsR0ErQjFDOzs7O0lBOUJDLHlCQUFXOztJQUVYLDRCQUFtQjs7SUF1Qm5CLCtCQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dFRleHREYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcblxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZyB8IG51bGw7XG5cbmV4cG9ydCBjbGFzcyBGYWNldFRleHREUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlOiBGQUNFVF9WQUxVRTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0VGV4dERhdGEpOiBJbnB1dFRleHREYXRhIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBGQUNFVF9WQUxVRSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KTtcblxuICAgICAgLy8gZml4IGVsZW1lbnQgdXBkYXRlXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3V0cHV0LmlkKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgfVxufVxuIl19