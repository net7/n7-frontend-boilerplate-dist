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
        _this.value = null;
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
        this.value = value;
        if (update) {
            var links = this.input.links;
            /** @type {?} */
            var updatedLinks = links.map((/**
             * @param {?} link
             * @return {?}
             */
            function (link) { return (tslib_1.__assign({}, link, { classes: _this.value === link.payload ? ACTIVE_CLASS : '' })); }));
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
        // update
        this.setValue(this.value !== linkValue ? linkValue : null, true);
    };
    /**
     * @return {?}
     */
    FacetLinkDS.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.value = null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQUl6QyxZQUFZLEdBQUcsV0FBVztBQUVoQztJQUFpQyx1Q0FBVTtJQUEzQztRQUFBLHFFQW1DQztRQWhDQyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBMkJiLGNBQVE7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQzs7SUFLOUIsQ0FBQzs7Ozs7O0lBOUJXLCtCQUFTOzs7OztJQUFuQixVQUFvQixJQUFtQjtRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELDhCQUFROzs7OztJQUFSLFVBQVMsS0FBSyxFQUFFLE1BQWM7UUFBOUIsaUJBY0M7UUFkZSx1QkFBQSxFQUFBLGNBQWM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLEVBQUU7WUFDRixJQUFBLHdCQUFLOztnQkFDUCxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLElBQWUsSUFBSyxPQUFBLHNCQUMvQyxJQUFJLElBQ1AsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQ3hELEVBSGtELENBR2xELEVBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxzQkFDTixJQUFJLENBQUMsS0FBSyxJQUNiLEtBQUssRUFBRSxZQUFZLElBQ25CLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLFNBQVM7UUFDbkIsU0FBUztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFJRCwyQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBbkNELENBQWlDLFVBQVUsR0FtQzFDOzs7O0lBbENDLHlCQUFXOztJQUVYLDRCQUFhOztJQTJCYiwrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRMaW5rLCBJbnB1dExpbmtEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcblxuY29uc3QgQUNUSVZFX0NMQVNTID0gJ2lzLWFjdGl2ZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldExpbmtEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlID0gbnVsbDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0TGlua0RhdGEpOiBJbnB1dExpbmtEYXRhIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgbGlua3MgfSA9IHRoaXMuaW5wdXQ7XG4gICAgICBjb25zdCB1cGRhdGVkTGlua3MgPSBsaW5rcy5tYXAoKGxpbms6IElucHV0TGluaykgPT4gKHtcbiAgICAgICAgLi4ubGluayxcbiAgICAgICAgY2xhc3NlczogdGhpcy52YWx1ZSA9PT0gbGluay5wYXlsb2FkID8gQUNUSVZFX0NMQVNTIDogJydcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgbGlua3M6IHVwZGF0ZWRMaW5rc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlVmFsdWUobGlua1ZhbHVlKSB7XG4gICAgLy8gdXBkYXRlXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlICE9PSBsaW5rVmFsdWUgPyBsaW5rVmFsdWUgOiBudWxsLCB0cnVlKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy52YWx1ZTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgfVxufVxuIl19