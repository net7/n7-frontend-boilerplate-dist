/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
/** @type {?} */
var ICON_OPEN = 'n7-icon-angle-down';
/** @type {?} */
var ICON_CLOSE = 'n7-icon-angle-right';
var FacetHeaderDS = /** @class */ (function (_super) {
    tslib_1.__extends(FacetHeaderDS, _super);
    function FacetHeaderDS() {
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
    FacetHeaderDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return tslib_1.__assign({}, data, { iconRight: data.iconRight || ICON_OPEN });
    };
    /**
     * @param {?} value
     * @param {?=} update
     * @return {?}
     */
    FacetHeaderDS.prototype.setValue = /**
     * @param {?} value
     * @param {?=} update
     * @return {?}
     */
    function (value, update) {
        if (update === void 0) { update = false; }
        this.value = value;
        if (update) {
            this.update(tslib_1.__assign({}, this.input, { additionalText: value }));
        }
    };
    /**
     * @return {?}
     */
    FacetHeaderDS.prototype.toggle = /**
     * @return {?}
     */
    function () {
        var iconRight = this.output.iconRight;
        iconRight = iconRight === ICON_OPEN ? ICON_CLOSE : ICON_OPEN;
        this.update(tslib_1.__assign({}, this.input, { iconRight: iconRight }));
    };
    /**
     * @return {?}
     */
    FacetHeaderDS.prototype.isOpen = /**
     * @return {?}
     */
    function () {
        return this.output.iconRight === ICON_OPEN;
    };
    /**
     * @return {?}
     */
    FacetHeaderDS.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.value = null;
    };
    return FacetHeaderDS;
}(DataSource));
export { FacetHeaderDS };
if (false) {
    /** @type {?} */
    FacetHeaderDS.prototype.id;
    /** @type {?} */
    FacetHeaderDS.prototype.value;
    /** @type {?} */
    FacetHeaderDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhlYWRlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFLekMsU0FBUyxHQUFHLG9CQUFvQjs7SUFDaEMsVUFBVSxHQUFHLHFCQUFxQjtBQUV4QztJQUFtQyx5Q0FBVTtJQUE3QztRQUFBLHFFQXlDQztRQWxCQyxjQUFROzs7UUFBRyxjQUFtQixPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDOztJQWtCM0MsQ0FBQzs7Ozs7O0lBcENXLGlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFxQjtRQUN2Qyw0QkFDSyxJQUFJLElBQ1AsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxJQUN0QztJQUNKLENBQUM7Ozs7OztJQUVELGdDQUFROzs7OztJQUFSLFVBQVMsS0FBa0IsRUFBRSxNQUFjO1FBQWQsdUJBQUEsRUFBQSxjQUFjO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sc0JBQ04sSUFBSSxDQUFDLEtBQUssSUFDYixjQUFjLEVBQUUsS0FBSyxJQUNyQixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBSUQsOEJBQU07OztJQUFOO1FBQ1EsSUFBQSxpQ0FBUztRQUNmLFNBQVMsR0FBRyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxzQkFDTixJQUFJLENBQUMsS0FBSyxJQUNiLFNBQVMsV0FBQSxJQUNULENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsOEJBQU07OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELDZCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF6Q0QsQ0FBbUMsVUFBVSxHQXlDNUM7Ozs7SUF4Q0MsMkJBQVc7O0lBRVgsOEJBQW1COztJQW9CbkIsaUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEZhY2V0SGVhZGVyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmcgfCBudWxsO1xuY29uc3QgSUNPTl9PUEVOID0gJ243LWljb24tYW5nbGUtZG93bic7XG5jb25zdCBJQ09OX0NMT1NFID0gJ243LWljb24tYW5nbGUtcmlnaHQnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRIZWFkZXJEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlOiBGQUNFVF9WQUxVRTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IEZhY2V0SGVhZGVyRGF0YSk6IEZhY2V0SGVhZGVyRGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBpY29uUmlnaHQ6IGRhdGEuaWNvblJpZ2h0IHx8IElDT05fT1BFTlxuICAgIH07XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogRkFDRVRfVkFMVUUsIHVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XG5cbiAgdG9nZ2xlKCkge1xuICAgIGxldCB7IGljb25SaWdodCB9ID0gdGhpcy5vdXRwdXQ7XG4gICAgaWNvblJpZ2h0ID0gaWNvblJpZ2h0ID09PSBJQ09OX09QRU4gPyBJQ09OX0NMT1NFIDogSUNPTl9PUEVOO1xuICAgIHRoaXMudXBkYXRlKHtcbiAgICAgIC4uLnRoaXMuaW5wdXQsXG4gICAgICBpY29uUmlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXQuaWNvblJpZ2h0ID09PSBJQ09OX09QRU47XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgfVxufVxuIl19