/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
/** @type {?} */
var ACTIVE_CLASS = 'is-active';
var FacetLinkMultipleDS = /** @class */ (function (_super) {
    tslib_1.__extends(FacetLinkMultipleDS, _super);
    function FacetLinkMultipleDS() {
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
    FacetLinkMultipleDS.prototype.transform = /**
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
    FacetLinkMultipleDS.prototype.setValue = /**
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
            function (link) { return (tslib_1.__assign({}, link, { classes: _this.value.includes(link.payload) ? ACTIVE_CLASS : '' })); }));
            this.update(tslib_1.__assign({}, this.input, { links: updatedLinks }));
        }
    };
    /**
     * @param {?} linkValue
     * @return {?}
     */
    FacetLinkMultipleDS.prototype.toggleValue = /**
     * @param {?} linkValue
     * @return {?}
     */
    function (linkValue) {
        /** @type {?} */
        var exists = this.value.includes(linkValue);
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
    FacetLinkMultipleDS.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.value = [];
    };
    return FacetLinkMultipleDS;
}(DataSource));
export { FacetLinkMultipleDS };
if (false) {
    /** @type {?} */
    FacetLinkMultipleDS.prototype.id;
    /** @type {?} */
    FacetLinkMultipleDS.prototype.value;
    /** @type {?} */
    FacetLinkMultipleDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay1tdWx0aXBsZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLW11bHRpcGxlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQUl6QyxZQUFZLEdBQUcsV0FBVztBQUVoQztJQUF5QywrQ0FBVTtJQUFuRDtRQUFBLHFFQTBDQztRQXZDQyxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBa0NYLGNBQVE7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQzs7SUFLOUIsQ0FBQzs7Ozs7O0lBckNXLHVDQUFTOzs7OztJQUFuQixVQUFvQixJQUFtQjtRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELHNDQUFROzs7OztJQUFSLFVBQVMsS0FBSyxFQUFFLE1BQWM7UUFBOUIsaUJBY0M7UUFkZSx1QkFBQSxFQUFBLGNBQWM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLEVBQUU7WUFDRixJQUFBLHdCQUFLOztnQkFDUCxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLElBQWUsSUFBSyxPQUFBLHNCQUMvQyxJQUFJLElBQ1AsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQzlELEVBSGtELENBR2xELEVBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxzQkFDTixJQUFJLENBQUMsS0FBSyxJQUNiLEtBQUssRUFBRSxZQUFZLElBQ25CLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLFNBQVM7O1lBQ2IsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUVELFNBQVM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUlELG1DQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUExQ0QsQ0FBeUMsVUFBVSxHQTBDbEQ7Ozs7SUF6Q0MsaUNBQVc7O0lBRVgsb0NBQVc7O0lBa0NYLHVDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dExpbmssIElucHV0TGlua0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnaXMtYWN0aXZlJztcblxuZXhwb3J0IGNsYXNzIEZhY2V0TGlua011bHRpcGxlRFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2YWx1ZSA9IFtdO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRMaW5rRGF0YSk6IElucHV0TGlua0RhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUsIHVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rcyA9IGxpbmtzLm1hcCgobGluazogSW5wdXRMaW5rKSA9PiAoe1xuICAgICAgICAuLi5saW5rLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLnZhbHVlLmluY2x1ZGVzKGxpbmsucGF5bG9hZCkgPyBBQ1RJVkVfQ0xBU1MgOiAnJ1xuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBsaW5rczogdXBkYXRlZExpbmtzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVWYWx1ZShsaW5rVmFsdWUpIHtcbiAgICBjb25zdCBleGlzdHMgPSB0aGlzLnZhbHVlLmluY2x1ZGVzKGxpbmtWYWx1ZSk7XG4gICAgaWYgKCFleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUucHVzaChsaW5rVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZXhpc3RzKSB7XG4gICAgICB0aGlzLnZhbHVlLnNwbGljZSh0aGlzLnZhbHVlLmluZGV4T2YobGlua1ZhbHVlKSwgMSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy52YWx1ZTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gW107XG4gIH1cbn1cbiJdfQ==