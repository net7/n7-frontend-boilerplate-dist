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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9kYXRlcGlja2VyLXdyYXBwZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTJDLGlEQUFVO0lBQXJEO1FBQUEscUVBb0RDO1FBbkRXLGlCQUFXLEdBQVEsSUFBSSxDQUFDOztJQW1EcEMsQ0FBQzs7Ozs7O0lBakRXLHlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTtRQUUzQixPQUFPOztZQUVMLE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNsQixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksb0JBQW9CO2dCQUM5QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO2FBQzdCOztZQUVELFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUU7b0JBQ0osRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtvQkFDdEMsV0FBVzs7OztvQkFBRSxVQUFDLFVBQVUsSUFBTyxLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDaEU7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsOENBQWM7OztJQUFkO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxPQUFPO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNuQztJQUNILENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFwREQsQ0FBMkMsVUFBVSxHQW9EcEQ7Ozs7Ozs7SUFuREMsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEdkRhdGVwaWNrZXJXcmFwcGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgX2RhdGVwaWNrZXI6IGFueSA9IG51bGw7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IGFueSB7XHJcbiAgICBpZiAoIWRhdGEpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvLyBzZXQgc2VsZWN0IG9wdGlvblxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogZGF0YS5zZWxlY3QuaWQsXHJcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgICAgIGljb246IGRhdGEuc2VsZWN0Lmljb24gfHwgJ243LWljb24tYW5nbGUtZG93bicsXHJcbiAgICAgICAgbGFiZWw6IGRhdGEuc2VsZWN0LmxhYmVsLFxyXG4gICAgICAgIGl0ZW1zOiBkYXRhLnNlbGVjdC5pdGVtcyxcclxuICAgICAgICBjbGFzc2VzOiBkYXRhLnNlbGVjdC5jbGFzc2VzLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBzZXQgcGlja2VyXHJcbiAgICAgIGRhdGVwaWNrZXI6IHtcclxuICAgICAgICBoaWRkZW46IHRydWUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaWQ6IGRhdGEuZGF0ZXBpY2tlci5pZCxcclxuICAgICAgICAgIGxpYk9wdGlvbnM6IGRhdGEuZGF0ZXBpY2tlci5saWJPcHRpb25zLFxyXG4gICAgICAgICAgZ2V0SW5zdGFuY2U6IChkYXRlcGlja2VyKSA9PiB7IHRoaXMuX2RhdGVwaWNrZXIgPSBkYXRlcGlja2VyOyB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb3BlbkRhdGVwaWNrZXIoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2RhdGVwaWNrZXIub3BlbigpKTtcclxuICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5vdXRwdXQuZGF0ZXBpY2tlci5oaWRkZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNsb3NlRGF0ZXBpY2tlcigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGF0ZXBpY2tlci5jbG9zZSgpKTtcclxuICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5vdXRwdXQuZGF0ZXBpY2tlci5oaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0TGFiZWwocGF5bG9hZCkge1xyXG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0LmxhYmVsID0gcGF5bG9hZDtcclxuICAgIHRoaXMub3V0cHV0LmRhdGVwaWNrZXIuaGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURyb3BEb3duKCkge1xyXG4gICAgaWYgKHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=