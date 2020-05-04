/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/data-sources/facets/facet-checkbox.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTS9DO0lBQXFDLDJDQUFVO0lBQS9DO1FBQUEscUVBOEJDO1FBTEMsY0FBUTs7O1FBQUcsY0FBbUIsT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQzs7SUFLM0MsQ0FBQzs7Ozs7O0lBekJXLG1DQUFTOzs7OztJQUFuQixVQUFvQixJQUF1QjtRQUN6QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELGtDQUFROzs7OztJQUFSLFVBQVMsS0FBa0IsRUFBRSxNQUFjO1FBQWQsdUJBQUEsRUFBQSxjQUFjO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksTUFBTSxFQUFFO1lBQ0YsSUFBQSxrQ0FBVTs7Z0JBQ1osaUJBQWlCLEdBQUcsVUFBVSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLFFBQXVCLElBQUssT0FBQSxzQkFDakUsUUFBUSxJQUNYLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFDL0MsRUFIb0UsQ0FHcEUsRUFBQztZQUNILElBQUksQ0FBQyxNQUFNLHNCQUNOLElBQUksQ0FBQyxLQUFLLElBQ2IsVUFBVSxFQUFFLGlCQUFpQixJQUM3QixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBSUQsK0JBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUFxQyxVQUFVLEdBOEI5Qzs7OztJQTdCQyw2QkFBVzs7SUFFWCxnQ0FBbUI7O0lBc0JuQixtQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRDaGVja2JveCwgSW5wdXRDaGVja2JveERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nW107XG5cbmV4cG9ydCBjbGFzcyBGYWNldENoZWNrYm94RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2YWx1ZTogRkFDRVRfVkFMVUU7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dENoZWNrYm94RGF0YSk6IElucHV0Q2hlY2tib3hEYXRhIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBGQUNFVF9WQUxVRSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IGNoZWNrYm94ZXMgfSA9IHRoaXMuaW5wdXQ7XG4gICAgICBjb25zdCB1cGRhdGVkQ2hlY2tib3hlcyA9IGNoZWNrYm94ZXMubWFwKChjaGVja2JveDogSW5wdXRDaGVja2JveCkgPT4gKHtcbiAgICAgICAgLi4uY2hlY2tib3gsXG4gICAgICAgIGNoZWNrZWQ6IHZhbHVlLmluZGV4T2YoY2hlY2tib3gucGF5bG9hZCkgIT09IC0xXG4gICAgICB9KSk7XG4gICAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXG4gICAgICAgIGNoZWNrYm94ZXM6IHVwZGF0ZWRDaGVja2JveGVzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgfVxufVxuIl19