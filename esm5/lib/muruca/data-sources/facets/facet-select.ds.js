/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/data-sources/facets/facet-select.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var FacetSelectDS = /** @class */ (function (_super) {
    tslib_1.__extends(FacetSelectDS, _super);
    function FacetSelectDS() {
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
    FacetSelectDS.prototype.transform = /**
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
    FacetSelectDS.prototype.setValue = /**
     * @param {?} value
     * @param {?=} update
     * @return {?}
     */
    function (value, update) {
        if (update === void 0) { update = false; }
        this.value = value;
        if (update) {
            var options = this.input.options;
            /** @type {?} */
            var updatedOptions = options.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return (tslib_1.__assign({}, option, { selected: value === option.value })); }));
            this.update(tslib_1.__assign({}, this.input, { options: updatedOptions }));
        }
    };
    /**
     * @return {?}
     */
    FacetSelectDS.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.value = null;
    };
    return FacetSelectDS;
}(DataSource));
export { FacetSelectDS };
if (false) {
    /** @type {?} */
    FacetSelectDS.prototype.id;
    /** @type {?} */
    FacetSelectDS.prototype.value;
    /** @type {?} */
    FacetSelectDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtc2VsZWN0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNL0M7SUFBbUMseUNBQVU7SUFBN0M7UUFBQSxxRUE4QkM7UUFMQyxjQUFROzs7UUFBRyxjQUFtQixPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDOztJQUszQyxDQUFDOzs7Ozs7SUF6QlcsaUNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQXFCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsZ0NBQVE7Ozs7O0lBQVIsVUFBUyxLQUFrQixFQUFFLE1BQWM7UUFBZCx1QkFBQSxFQUFBLGNBQWM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLEVBQUU7WUFDRixJQUFBLDRCQUFPOztnQkFDVCxjQUFjLEdBQUcsT0FBTyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLHNCQUMxQyxNQUFNLElBQ1QsUUFBUSxFQUFFLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxJQUNoQyxFQUg2QyxDQUc3QyxFQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sc0JBQ04sSUFBSSxDQUFDLEtBQUssSUFDYixPQUFPLEVBQUUsY0FBYyxJQUN2QixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBSUQsNkJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUFtQyxVQUFVLEdBOEI1Qzs7OztJQTdCQywyQkFBVzs7SUFFWCw4QkFBbUI7O0lBc0JuQixpQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRTZWxlY3REYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcblxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZyB8IG51bGw7XG5cbmV4cG9ydCBjbGFzcyBGYWNldFNlbGVjdERTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRTZWxlY3REYXRhKTogSW5wdXRTZWxlY3REYXRhIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBGQUNFVF9WQUxVRSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMuaW5wdXQ7XG4gICAgICBjb25zdCB1cGRhdGVkT3B0aW9ucyA9IG9wdGlvbnMubWFwKChvcHRpb24pID0+ICh7XG4gICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgc2VsZWN0ZWQ6IHZhbHVlID09PSBvcHRpb24udmFsdWVcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgb3B0aW9uczogdXBkYXRlZE9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==