/**
 * @fileoverview added by tsickle
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
        var _this = this;
        if (update === void 0) { update = false; }
        this.value = Array.isArray(value) ? value : [value];
        if (update) {
            var links = this.input.links;
            /** @type {?} */
            var updatedLinks = links.map((/**
             * @param {?} link
             * @return {?}
             */
            function (link) { return (tslib_1.__assign({}, link, { classes: _this.value.indexOf(link.payload) !== -1 ? ACTIVE_CLASS : '' })); }));
            this.update(tslib_1.__assign({}, this.input, { links: updatedLinks }));
        }
    };
    /**
     * @param {?} linkValue
     * @return {?}
     */
    FacetLinkDS.prototype.toggleValue = /**
     * @param {?} linkValue
     * @return {?}
     */
    function (linkValue) {
        /** @type {?} */
        var exists = this.value.indexOf(linkValue) !== -1;
        if (!exists) {
            this.value.push(linkValue);
        }
        else if (exists) {
            this.value.splice(this.value.indexOf(linkValue), 1);
        }
        // update
        this.setValue(this.value, true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQU16QyxZQUFZLEdBQUcsV0FBVztBQUVoQztJQUFpQyx1Q0FBVTtJQUEzQztRQUFBLHFFQTBDQztRQXZDQyxXQUFLLEdBQWdCLEVBQUUsQ0FBQztRQWtDeEIsY0FBUTs7O1FBQUcsY0FBbUIsT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQzs7SUFLM0MsQ0FBQzs7Ozs7O0lBckNXLCtCQUFTOzs7OztJQUFuQixVQUFvQixJQUFtQjtRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELDhCQUFROzs7OztJQUFSLFVBQVMsS0FBa0IsRUFBRSxNQUFjO1FBQTNDLGlCQWNDO1FBZDRCLHVCQUFBLEVBQUEsY0FBYztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwRCxJQUFJLE1BQU0sRUFBRTtZQUNGLElBQUEsd0JBQUs7O2dCQUNQLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsSUFBZSxJQUFLLE9BQUEsc0JBQy9DLElBQUksSUFDUCxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFDcEUsRUFIa0QsQ0FHbEQsRUFBQztZQUNILElBQUksQ0FBQyxNQUFNLHNCQUNOLElBQUksQ0FBQyxLQUFLLElBQ2IsS0FBSyxFQUFFLFlBQVksSUFDbkIsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksU0FBUzs7WUFDYixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjthQUFNLElBQUksTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsU0FBUztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBSUQsMkJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTFDRCxDQUFpQyxVQUFVLEdBMEMxQzs7OztJQXpDQyx5QkFBVzs7SUFFWCw0QkFBd0I7O0lBa0N4QiwrQkFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRMaW5rLCBJbnB1dExpbmtEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcblxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZ1tdO1xuXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnaXMtYWN0aXZlJztcblxuZXhwb3J0IGNsYXNzIEZhY2V0TGlua0RTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFID0gW107XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dExpbmtEYXRhKTogSW5wdXRMaW5rRGF0YSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogRkFDRVRfVkFMVUUsIHVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy52YWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rcyA9IGxpbmtzLm1hcCgobGluazogSW5wdXRMaW5rKSA9PiAoe1xuICAgICAgICAuLi5saW5rLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnZhbHVlLmluZGV4T2YobGluay5wYXlsb2FkKSAhPT0gLTEgPyBBQ1RJVkVfQ0xBU1MgOiAnJ1xuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBsaW5rczogdXBkYXRlZExpbmtzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVWYWx1ZShsaW5rVmFsdWUpIHtcbiAgICBjb25zdCBleGlzdHMgPSB0aGlzLnZhbHVlLmluZGV4T2YobGlua1ZhbHVlKSAhPT0gLTE7XG4gICAgaWYgKCFleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUucHVzaChsaW5rVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZXhpc3RzKSB7XG4gICAgICB0aGlzLnZhbHVlLnNwbGljZSh0aGlzLnZhbHVlLmluZGV4T2YobGlua1ZhbHVlKSwgMSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IFtdO1xuICB9XG59XG4iXX0=