/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var DvExampleLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(DvExampleLayoutDS, _super);
    function DvExampleLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Items = [
            {
                text: "Last week",
                payload: "lastWeek",
            },
            {
                text: "Last month",
                payload: "lastMonth",
            },
            {
                text: "Last year",
                payload: "lastYear",
            },
            {
                text: "Select Date",
                //this payload key is use for visualise the datepicker.
                payload: "ByDate",
            }
        ];
        _this.datepickerOptions = {
            dateFormat: 'Y-m-d',
            mode: 'range',
        };
        _this.datePickerExternalData = {
            select: {
                id: "dv-select",
                label: "Last Week",
                items: _this.Items,
            },
            datepicker: {
                id: "datepicker",
                libOptions: _this.datepickerOptions,
            }
        };
        return _this;
    }
    /**
     * @return {?}
     */
    DvExampleLayoutDS.prototype.onInit = /**
     * @return {?}
     */
    function () {
        this.one('dv-datepicker-wrapper').update(this.datePickerExternalData);
    };
    return DvExampleLayoutDS;
}(LayoutDataSource));
export { DvExampleLayoutDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DvExampleLayoutDS.prototype.Items;
    /**
     * @type {?}
     * @private
     */
    DvExampleLayoutDS.prototype.datepickerOptions;
    /**
     * @type {?}
     * @private
     */
    DvExampleLayoutDS.prototype.datePickerExternalData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQXVDLDZDQUFnQjtJQUF2RDtRQUFBLHFFQXlDQztRQXhDVyxXQUFLLEdBQUc7WUFDWjtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFVBQVU7YUFDdEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLFdBQVc7YUFDdkI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFVBQVU7YUFDdEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsYUFBYTs7Z0JBRW5CLE9BQU8sRUFBRSxRQUFRO2FBQ3BCO1NBQ0osQ0FBQztRQUVNLHVCQUFpQixHQUFHO1lBQ3hCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUM7UUFFTSw0QkFBc0IsR0FBRztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLFdBQVc7Z0JBQ2YsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSzthQUNwQjtZQUNELFVBQVUsRUFBRTtnQkFDUixFQUFFLEVBQUMsWUFBWTtnQkFDZixVQUFVLEVBQUUsS0FBSSxDQUFDLGlCQUFpQjthQUNyQztTQUNKLENBQUE7O0lBS0wsQ0FBQzs7OztJQUhHLGtDQUFNOzs7SUFBTjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXpDRCxDQUF1QyxnQkFBZ0IsR0F5Q3REOzs7Ozs7O0lBeENHLGtDQWtCRTs7Ozs7SUFFRiw4Q0FHRTs7Ozs7SUFFRixtREFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHZFeGFtcGxlTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICAgIHByaXZhdGUgSXRlbXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIkxhc3Qgd2Vla1wiLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBcImxhc3RXZWVrXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiTGFzdCBtb250aFwiLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBcImxhc3RNb250aFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIkxhc3QgeWVhclwiLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBcImxhc3RZZWFyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiU2VsZWN0IERhdGVcIixcclxuICAgICAgICAgICAgLy90aGlzIHBheWxvYWQga2V5IGlzIHVzZSBmb3IgdmlzdWFsaXNlIHRoZSBkYXRlcGlja2VyLlxyXG4gICAgICAgICAgICBwYXlsb2FkOiBcIkJ5RGF0ZVwiLFxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRlcGlja2VyT3B0aW9ucyA9IHtcclxuICAgICAgICBkYXRlRm9ybWF0OiAnWS1tLWQnLFxyXG4gICAgICAgIG1vZGU6ICdyYW5nZScsXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgZGF0ZVBpY2tlckV4dGVybmFsRGF0YSA9IHtcclxuICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IFwiZHYtc2VsZWN0XCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkxhc3QgV2Vla1wiLFxyXG4gICAgICAgICAgICBpdGVtczogdGhpcy5JdGVtcyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGVwaWNrZXI6IHtcclxuICAgICAgICAgICAgaWQ6XCJkYXRlcGlja2VyXCIsXHJcbiAgICAgICAgICAgIGxpYk9wdGlvbnM6IHRoaXMuZGF0ZXBpY2tlck9wdGlvbnMsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMub25lKCdkdi1kYXRlcGlja2VyLXdyYXBwZXInKS51cGRhdGUodGhpcy5kYXRlUGlja2VyRXh0ZXJuYWxEYXRhKTtcclxuICAgIH1cclxufSJdfQ==