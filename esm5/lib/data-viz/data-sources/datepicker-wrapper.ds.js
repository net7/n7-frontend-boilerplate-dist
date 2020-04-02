/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci13cmFwcGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9kYXRlcGlja2VyLXdyYXBwZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBMkMsaURBQVU7SUFBckQ7UUFBQSxxRUFvREM7UUFuRFcsaUJBQVcsR0FBUSxJQUFJLENBQUM7O0lBbURwQyxDQUFDOzs7Ozs7SUFqRFcseUNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFBeEIsaUJBdUJDO1FBdEJDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBRTNCLE9BQU87O1lBRUwsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2xCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxvQkFBb0I7Z0JBQzlDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3hCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87YUFDN0I7O1lBRUQsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2dCQUNaLElBQUksRUFBRTtvQkFDSixFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN0QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO29CQUN0QyxXQUFXOzs7O29CQUFFLFVBQUMsVUFBVSxJQUFPLEtBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUNoRTthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7UUFBQSxpQkFJQztRQUhDLFVBQVU7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUF2QixDQUF1QixFQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFBQSxpQkFJQztRQUhDLFVBQVU7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUF4QixDQUF3QixFQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLE9BQU87UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELDhDQUFjOzs7SUFBZDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQXBERCxDQUEyQyxVQUFVLEdBb0RwRDs7Ozs7OztJQW5EQyw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHZEYXRlcGlja2VyV3JhcHBlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBfZGF0ZXBpY2tlcjogYW55ID0gbnVsbDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBhbnkge1xuICAgIGlmICghZGF0YSkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIHNldCBzZWxlY3Qgb3B0aW9uXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6IGRhdGEuc2VsZWN0LmlkLFxuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIGljb246IGRhdGEuc2VsZWN0Lmljb24gfHwgJ243LWljb24tYW5nbGUtZG93bicsXG4gICAgICAgIGxhYmVsOiBkYXRhLnNlbGVjdC5sYWJlbCxcbiAgICAgICAgaXRlbXM6IGRhdGEuc2VsZWN0Lml0ZW1zLFxuICAgICAgICBjbGFzc2VzOiBkYXRhLnNlbGVjdC5jbGFzc2VzLFxuICAgICAgfSxcbiAgICAgIC8vIHNldCBwaWNrZXJcbiAgICAgIGRhdGVwaWNrZXI6IHtcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IGRhdGEuZGF0ZXBpY2tlci5pZCxcbiAgICAgICAgICBsaWJPcHRpb25zOiBkYXRhLmRhdGVwaWNrZXIubGliT3B0aW9ucyxcbiAgICAgICAgICBnZXRJbnN0YW5jZTogKGRhdGVwaWNrZXIpID0+IHsgdGhpcy5fZGF0ZXBpY2tlciA9IGRhdGVwaWNrZXI7IH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBvcGVuRGF0ZXBpY2tlcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2RhdGVwaWNrZXIub3BlbigpKTtcbiAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLm91dHB1dC5kYXRlcGlja2VyLmhpZGRlbiA9IGZhbHNlO1xuICB9XG5cbiAgY2xvc2VEYXRlcGlja2VyKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGF0ZXBpY2tlci5jbG9zZSgpKTtcbiAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLm91dHB1dC5kYXRlcGlja2VyLmhpZGRlbiA9IHRydWU7XG4gIH1cblxuICBzZXRMYWJlbChwYXlsb2FkKSB7XG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0LmxhYmVsID0gcGF5bG9hZDtcbiAgICB0aGlzLm91dHB1dC5kYXRlcGlja2VyLmhpZGRlbiA9IHRydWU7XG4gIH1cblxuICB0b2dnbGVEcm9wRG93bigpIHtcbiAgICBpZiAodGhpcy5vdXRwdXQuc2VsZWN0LmhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdC5oaWRkZW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dHB1dC5zZWxlY3QuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=