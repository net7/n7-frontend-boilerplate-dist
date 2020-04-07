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
            return null;
        }
        return {
            // set select option
            select: {
                id: data.select.id,
                hidden: true,
                icon: data.select.icon || 'n7-icon-angle-down',
                label: data.select.label,
                items: data.select.items,
                classes: data.select.classes,
            },
            // set picker
            datepicker: {
                hidden: true,
                data: {
                    id: data.datepicker.id,
                    libOptions: data.datepicker.libOptions,
                    getInstance: (/**
                     * @param {?} datepicker
                     * @return {?}
                     */
                    function (datepicker) { _this._datepicker = datepicker; }),
                },
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9kYXRlcGlja2VyLXdyYXBwZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTJDLGlEQUFVO0lBQXJEO1FBQUEscUVBb0RDO1FBbkRXLGlCQUFXLEdBQVEsSUFBSSxDQUFDOztJQW1EcEMsQ0FBQzs7Ozs7O0lBakRXLHlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTtRQUUzQixPQUFPOztZQUVMLE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNsQixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksb0JBQW9CO2dCQUM5QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQzdCOztZQUVELFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUU7b0JBQ0osRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtvQkFDdEMsV0FBVzs7OztvQkFBRSxVQUFDLFVBQVUsSUFBTyxLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDaEU7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsOENBQWM7OztJQUFkO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxPQUFPO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNuQztJQUNILENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFwREQsQ0FBMkMsVUFBVSxHQW9EcEQ7Ozs7Ozs7SUFuREMsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIER2RGF0ZXBpY2tlcldyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgX2RhdGVwaWNrZXI6IGFueSA9IG51bGw7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogYW55IHtcbiAgICBpZiAoIWRhdGEpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgIHJldHVybiB7XG4gICAgICAvLyBzZXQgc2VsZWN0IG9wdGlvblxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGlkOiBkYXRhLnNlbGVjdC5pZCxcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICBpY29uOiBkYXRhLnNlbGVjdC5pY29uIHx8ICduNy1pY29uLWFuZ2xlLWRvd24nLFxuICAgICAgICBsYWJlbDogZGF0YS5zZWxlY3QubGFiZWwsXG4gICAgICAgIGl0ZW1zOiBkYXRhLnNlbGVjdC5pdGVtcyxcbiAgICAgICAgY2xhc3NlczogZGF0YS5zZWxlY3QuY2xhc3NlcyxcbiAgICAgIH0sXG4gICAgICAvLyBzZXQgcGlja2VyXG4gICAgICBkYXRlcGlja2VyOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiBkYXRhLmRhdGVwaWNrZXIuaWQsXG4gICAgICAgICAgbGliT3B0aW9uczogZGF0YS5kYXRlcGlja2VyLmxpYk9wdGlvbnMsXG4gICAgICAgICAgZ2V0SW5zdGFuY2U6IChkYXRlcGlja2VyKSA9PiB7IHRoaXMuX2RhdGVwaWNrZXIgPSBkYXRlcGlja2VyOyB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgb3BlbkRhdGVwaWNrZXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kYXRlcGlja2VyLm9wZW4oKSk7XG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5vdXRwdXQuZGF0ZXBpY2tlci5oaWRkZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlRGF0ZXBpY2tlcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2RhdGVwaWNrZXIuY2xvc2UoKSk7XG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5vdXRwdXQuZGF0ZXBpY2tlci5oaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgc2V0TGFiZWwocGF5bG9hZCkge1xuICAgIHRoaXMub3V0cHV0LnNlbGVjdC5sYWJlbCA9IHBheWxvYWQ7XG4gICAgdGhpcy5vdXRwdXQuZGF0ZXBpY2tlci5oaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlRHJvcERvd24oKSB7XG4gICAgaWYgKHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19