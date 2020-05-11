/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var FacetCheckboxDS = /** @class */ (function (_super) {
    tslib_1.__extends(FacetCheckboxDS, _super);
    function FacetCheckboxDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = [];
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
    FacetCheckboxDS.prototype.transform = /**
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
    FacetCheckboxDS.prototype.setValue = /**
     * @param {?} value
     * @param {?=} update
     * @return {?}
     */
    function (value, update) {
        if (update === void 0) { update = false; }
        this.value = value;
        if (update) {
            var checkboxes = this.input.checkboxes;
            /** @type {?} */
            var updatedCheckboxes = checkboxes.map((/**
             * @param {?} checkbox
             * @return {?}
             */
            function (checkbox) { return (tslib_1.__assign({}, checkbox, { checked: value.indexOf(checkbox.payload) !== -1 })); }));
            this.update(tslib_1.__assign({}, this.input, { checkboxes: updatedCheckboxes }));
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    FacetCheckboxDS.prototype.toggleValue = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var inputPayload = _a.inputPayload, isChecked = _a.value;
        /** @type {?} */
        var exists = this.value.indexOf(inputPayload) !== -1;
        if (isChecked && !exists) {
            this.value.push(inputPayload);
        }
        else if (!isChecked && exists) {
            this.value.splice(this.value.indexOf(inputPayload), 1);
        }
    };
    /**
     * @return {?}
     */
    FacetCheckboxDS.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.value = [];
    };
    return FacetCheckboxDS;
}(DataSource));
export { FacetCheckboxDS };
if (false) {
    /** @type {?} */
    FacetCheckboxDS.prototype.id;
    /** @type {?} */
    FacetCheckboxDS.prototype.value;
    /** @type {?} */
    FacetCheckboxDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNL0M7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUF1Q0M7UUFwQ0MsV0FBSyxHQUFnQixFQUFFLENBQUM7UUErQnhCLGNBQVE7OztRQUFHLGNBQW1CLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLEVBQUM7O0lBSzNDLENBQUM7Ozs7OztJQWxDVyxtQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBdUI7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQWtCLEVBQUUsTUFBYztRQUFkLHVCQUFBLEVBQUEsY0FBYztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLE1BQU0sRUFBRTtZQUNGLElBQUEsa0NBQVU7O2dCQUNaLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxRQUF1QixJQUFLLE9BQUEsc0JBQ2pFLFFBQVEsSUFDWCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQy9DLEVBSG9FLENBR3BFLEVBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxzQkFDTixJQUFJLENBQUMsS0FBSyxJQUNiLFVBQVUsRUFBRSxpQkFBaUIsSUFDN0IsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksRUFBa0M7WUFBaEMsOEJBQVksRUFBRSxvQkFBZ0I7O1lBQ3BDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0I7YUFBTSxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7SUFJRCwrQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBdkNELENBQXFDLFVBQVUsR0F1QzlDOzs7O0lBdENDLDZCQUFXOztJQUVYLGdDQUF3Qjs7SUErQnhCLG1DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dENoZWNrYm94LCBJbnB1dENoZWNrYm94RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmdbXTtcblxuZXhwb3J0IGNsYXNzIEZhY2V0Q2hlY2tib3hEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlOiBGQUNFVF9WQUxVRSA9IFtdO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRDaGVja2JveERhdGEpOiBJbnB1dENoZWNrYm94RGF0YSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogRkFDRVRfVkFMVUUsIHVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBjaGVja2JveGVzIH0gPSB0aGlzLmlucHV0O1xuICAgICAgY29uc3QgdXBkYXRlZENoZWNrYm94ZXMgPSBjaGVja2JveGVzLm1hcCgoY2hlY2tib3g6IElucHV0Q2hlY2tib3gpID0+ICh7XG4gICAgICAgIC4uLmNoZWNrYm94LFxuICAgICAgICBjaGVja2VkOiB2YWx1ZS5pbmRleE9mKGNoZWNrYm94LnBheWxvYWQpICE9PSAtMVxuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBjaGVja2JveGVzOiB1cGRhdGVkQ2hlY2tib3hlc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlVmFsdWUoeyBpbnB1dFBheWxvYWQsIHZhbHVlOiBpc0NoZWNrZWQgfSkge1xuICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMudmFsdWUuaW5kZXhPZihpbnB1dFBheWxvYWQpICE9PSAtMTtcbiAgICBpZiAoaXNDaGVja2VkICYmICFleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUucHVzaChpbnB1dFBheWxvYWQpO1xuICAgIH0gZWxzZSBpZiAoIWlzQ2hlY2tlZCAmJiBleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUuc3BsaWNlKHRoaXMudmFsdWUuaW5kZXhPZihpbnB1dFBheWxvYWQpLCAxKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgfVxufVxuIl19