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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNL0M7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUE4QkM7UUFMQyxjQUFROzs7UUFBRyxjQUFtQixPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDOztJQUszQyxDQUFDOzs7Ozs7SUF6QlcsbUNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQXVCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsa0NBQVE7Ozs7O0lBQVIsVUFBUyxLQUFrQixFQUFFLE1BQWM7UUFBZCx1QkFBQSxFQUFBLGNBQWM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLEVBQUU7WUFDRixJQUFBLGtDQUFVOztnQkFDWixpQkFBaUIsR0FBRyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsUUFBdUIsSUFBSyxPQUFBLHNCQUNqRSxRQUFRLElBQ1gsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUMvQyxFQUhvRSxDQUdwRSxFQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sc0JBQ04sSUFBSSxDQUFDLEtBQUssSUFDYixVQUFVLEVBQUUsaUJBQWlCLElBQzdCLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFJRCwrQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBOUJELENBQXFDLFVBQVUsR0E4QjlDOzs7O0lBN0JDLDZCQUFXOztJQUVYLGdDQUFtQjs7SUFzQm5CLG1DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dENoZWNrYm94LCBJbnB1dENoZWNrYm94RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmdbXTtcblxuZXhwb3J0IGNsYXNzIEZhY2V0Q2hlY2tib3hEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlOiBGQUNFVF9WQUxVRTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0Q2hlY2tib3hEYXRhKTogSW5wdXRDaGVja2JveERhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgY2hlY2tib3hlcyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDaGVja2JveGVzID0gY2hlY2tib3hlcy5tYXAoKGNoZWNrYm94OiBJbnB1dENoZWNrYm94KSA9PiAoe1xuICAgICAgICAuLi5jaGVja2JveCxcbiAgICAgICAgY2hlY2tlZDogdmFsdWUuaW5kZXhPZihjaGVja2JveC5wYXlsb2FkKSAhPT0gLTFcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgY2hlY2tib3hlczogdXBkYXRlZENoZWNrYm94ZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IFtdO1xuICB9XG59XG4iXX0=