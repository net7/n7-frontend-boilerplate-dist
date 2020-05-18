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
        var _this = this;
        if (update === void 0) { update = false; }
        this.value = Array.isArray(value) ? value : [value];
        if (update) {
            var checkboxes = this.input.checkboxes;
            /** @type {?} */
            var updatedCheckboxes = checkboxes.map((/**
             * @param {?} checkbox
             * @return {?}
             */
            function (checkbox) { return (tslib_1.__assign({}, checkbox, { checked: _this.value.indexOf(checkbox.payload) !== -1 })); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNL0M7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUF1Q0M7UUFwQ0MsV0FBSyxHQUFnQixFQUFFLENBQUM7UUErQnhCLGNBQVE7OztRQUFHLGNBQW1CLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLEVBQUM7O0lBSzNDLENBQUM7Ozs7OztJQWxDVyxtQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBdUI7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQWtCLEVBQUUsTUFBYztRQUEzQyxpQkFjQztRQWQ0Qix1QkFBQSxFQUFBLGNBQWM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsSUFBSSxNQUFNLEVBQUU7WUFDRixJQUFBLGtDQUFVOztnQkFDWixpQkFBaUIsR0FBRyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsUUFBdUIsSUFBSyxPQUFBLHNCQUNqRSxRQUFRLElBQ1gsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFDcEQsRUFIb0UsQ0FHcEUsRUFBQztZQUNILElBQUksQ0FBQyxNQUFNLHNCQUNOLElBQUksQ0FBQyxLQUFLLElBQ2IsVUFBVSxFQUFFLGlCQUFpQixJQUM3QixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxFQUFrQztZQUFoQyw4QkFBWSxFQUFFLG9CQUFnQjs7WUFDcEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQjthQUFNLElBQUksQ0FBQyxTQUFTLElBQUksTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7OztJQUlELCtCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF2Q0QsQ0FBcUMsVUFBVSxHQXVDOUM7Ozs7SUF0Q0MsNkJBQVc7O0lBRVgsZ0NBQXdCOztJQStCeEIsbUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElucHV0Q2hlY2tib3gsIElucHV0Q2hlY2tib3hEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcblxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZ1tdO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRDaGVja2JveERTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFID0gW107XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dENoZWNrYm94RGF0YSk6IElucHV0Q2hlY2tib3hEYXRhIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBGQUNFVF9WQUxVRSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IGNoZWNrYm94ZXMgfSA9IHRoaXMuaW5wdXQ7XG4gICAgICBjb25zdCB1cGRhdGVkQ2hlY2tib3hlcyA9IGNoZWNrYm94ZXMubWFwKChjaGVja2JveDogSW5wdXRDaGVja2JveCkgPT4gKHtcbiAgICAgICAgLi4uY2hlY2tib3gsXG4gICAgICAgIGNoZWNrZWQ6IHRoaXMudmFsdWUuaW5kZXhPZihjaGVja2JveC5wYXlsb2FkKSAhPT0gLTFcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgY2hlY2tib3hlczogdXBkYXRlZENoZWNrYm94ZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVZhbHVlKHsgaW5wdXRQYXlsb2FkLCB2YWx1ZTogaXNDaGVja2VkIH0pIHtcbiAgICBjb25zdCBleGlzdHMgPSB0aGlzLnZhbHVlLmluZGV4T2YoaW5wdXRQYXlsb2FkKSAhPT0gLTE7XG4gICAgaWYgKGlzQ2hlY2tlZCAmJiAhZXhpc3RzKSB7XG4gICAgICB0aGlzLnZhbHVlLnB1c2goaW5wdXRQYXlsb2FkKTtcbiAgICB9IGVsc2UgaWYgKCFpc0NoZWNrZWQgJiYgZXhpc3RzKSB7XG4gICAgICB0aGlzLnZhbHVlLnNwbGljZSh0aGlzLnZhbHVlLmluZGV4T2YoaW5wdXRQYXlsb2FkKSwgMSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gW107XG4gIH1cbn1cbiJdfQ==