/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/data-sources/datepicker-wrapper.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var DvDatepickerWrapperDS = /** @class */ (function (_super) {
    tslib_1.__extends(DvDatepickerWrapperDS, _super);
    function DvDatepickerWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._datepicker = null;
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    DvDatepickerWrapperDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        ;
        return {
            //set select option
            select: {
                id: data.select.id,
                hidden: true,
                icon: data.select.icon || "n7-icon-angle-down",
                label: data.select.label,
                items: data.select.items,
                classes: data.select.classes,
            },
            //set picker
            datepicker: {
                hidden: true,
                data: {
                    id: data.datepicker.id,
                    libOptions: data.datepicker.libOptions,
                    getInstance: (/**
                     * @param {?} datepicker
                     * @return {?}
                     */
                    function (datepicker) { return _this._datepicker = datepicker; }),
                }
            }
        };
    };
    /**
     * @return {?}
     */
    DvDatepickerWrapperDS.prototype.openDatepicker = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this._datepicker.open(); }));
        this.output.select.hidden = true;
        this.output.datepicker.hidden = false;
    };
    /**
     * @return {?}
     */
    DvDatepickerWrapperDS.prototype.closeDatepicker = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this._datepicker.close(); }));
        this.output.select.hidden = true;
        this.output.datepicker.hidden = true;
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    DvDatepickerWrapperDS.prototype.setLabel = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.output.select.label = payload;
        this.output.datepicker.hidden = true;
    };
    /**
     * @return {?}
     */
    DvDatepickerWrapperDS.prototype.toggleDropDown = /**
     * @return {?}
     */
    function () {
        if (this.output.select.hidden === false) {
            this.output.select.hidden = true;
        }
        else {
            this.output.select.hidden = false;
        }
    };
    return DvDatepickerWrapperDS;
}(DataSource));
export { DvDatepickerWrapperDS };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DvDatepickerWrapperDS.prototype._datepicker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9kYXRlcGlja2VyLXdyYXBwZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTJDLGlEQUFVO0lBQXJEO1FBQUEscUVBcURDO1FBcERhLGlCQUFXLEdBQVEsSUFBSSxDQUFDOztJQW9EdEMsQ0FBQzs7Ozs7O0lBbERhLHlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQXVCQztRQXRCRyxJQUFHLENBQUMsSUFBSSxFQUFDO1lBQUMsT0FBTTtTQUFDO1FBQUEsQ0FBQztRQUVsQixPQUFPOztZQUVKLE1BQU0sRUFBRTtnQkFDSCxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNsQixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksb0JBQW9CO2dCQUM5QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQy9COztZQUVELFVBQVUsRUFBRTtnQkFDUixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUU7b0JBQ0YsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtvQkFDdEMsV0FBVzs7OztvQkFBRSxVQUFDLFVBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxFQUE3QixDQUE2QixDQUFBO2lCQUM3RDthQUNKO1NBQ0osQ0FBQTtJQUNMLENBQUM7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7UUFBQSxpQkFJQztRQUhHLFVBQVU7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUF2QixDQUF1QixFQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFBQSxpQkFJQztRQUhHLFVBQVU7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUF4QixDQUF3QixFQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLE9BQU87UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELDhDQUFjOzs7SUFBZDtRQUNJLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BDO2FBQUk7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVMLDRCQUFDO0FBQUQsQ0FBQyxBQXJERCxDQUEyQyxVQUFVLEdBcURwRDs7Ozs7OztJQXBERyw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHZEYXRlcGlja2VyV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIF9kYXRlcGlja2VyOiBhbnkgPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXsgXG4gICAgICAgIGlmKCFkYXRhKXtyZXR1cm59O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vc2V0IHNlbGVjdCBvcHRpb25cbiAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgICAgaWQ6IGRhdGEuc2VsZWN0LmlkLFxuICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpY29uOiBkYXRhLnNlbGVjdC5pY29uIHx8IFwibjctaWNvbi1hbmdsZS1kb3duXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEuc2VsZWN0LmxhYmVsLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBkYXRhLnNlbGVjdC5pdGVtcyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBkYXRhLnNlbGVjdC5jbGFzc2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vc2V0IHBpY2tlclxuICAgICAgICAgICAgZGF0ZXBpY2tlcjoge1xuICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmRhdGVwaWNrZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIGxpYk9wdGlvbnM6IGRhdGEuZGF0ZXBpY2tlci5saWJPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBnZXRJbnN0YW5jZTogKGRhdGVwaWNrZXIpID0+IHRoaXMuX2RhdGVwaWNrZXIgPSBkYXRlcGlja2VyLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBvcGVuRGF0ZXBpY2tlcigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kYXRlcGlja2VyLm9wZW4oKSk7XG4gICAgICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLm91dHB1dC5kYXRlcGlja2VyLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNsb3NlRGF0ZXBpY2tlcigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kYXRlcGlja2VyLmNsb3NlKCkpO1xuICAgICAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vdXRwdXQuZGF0ZXBpY2tlci5oaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIHNldExhYmVsKHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0LmxhYmVsID0gcGF5bG9hZDtcbiAgICAgICAgdGhpcy5vdXRwdXQuZGF0ZXBpY2tlci5oaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIHRvZ2dsZURyb3BEb3duKCl7XG4gICAgICAgIGlmKHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=