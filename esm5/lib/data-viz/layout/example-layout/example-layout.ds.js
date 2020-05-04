/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
var DvExampleLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(DvExampleLayoutDS, _super);
    function DvExampleLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Items = [
            {
                text: 'Last week',
                payload: 'Last week',
            },
            {
                text: 'Last month',
                payload: 'Last month',
            },
            {
                text: 'Last year',
                payload: 'Last year',
            },
            {
                text: 'Select Date',
                // this payload key is use for visualise the datepicker.
                payload: 'ByDate',
            },
        ];
        _this.datepickerOptions = {
            dateFormat: 'Y-m-d',
            mode: 'range',
        };
        _this.datePickerExternalData = {
            select: {
                id: 'dv-select',
                label: 'Last week',
                items: _this.Items,
            },
            datepicker: {
                id: 'datepicker',
                libOptions: _this.datepickerOptions,
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTdFO0lBQXVDLDZDQUFnQjtJQUF2RDtRQUFBLHFFQXlDQztRQXhDVyxXQUFLLEdBQUc7WUFDZDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLFlBQVk7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTs7Z0JBRW5CLE9BQU8sRUFBRSxRQUFRO2FBQ2xCO1NBQ0YsQ0FBQztRQUVNLHVCQUFpQixHQUFHO1lBQzFCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztRQUVNLDRCQUFzQixHQUFHO1lBQy9CLE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsV0FBVztnQkFDZixLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLO2FBQ2xCO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixVQUFVLEVBQUUsS0FBSSxDQUFDLGlCQUFpQjthQUNuQztTQUNGLENBQUE7O0lBS0wsQ0FBQzs7OztJQUhHLGtDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXpDRCxDQUF1QyxnQkFBZ0IsR0F5Q3REOzs7Ozs7O0lBeENHLGtDQWtCRTs7Ozs7SUFFRiw4Q0FHRTs7Ozs7SUFFRixtREFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5cbmV4cG9ydCBjbGFzcyBEdkV4YW1wbGVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICAgIHByaXZhdGUgSXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdMYXN0IHdlZWsnLFxuICAgICAgICBwYXlsb2FkOiAnTGFzdCB3ZWVrJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdMYXN0IG1vbnRoJyxcbiAgICAgICAgcGF5bG9hZDogJ0xhc3QgbW9udGgnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0xhc3QgeWVhcicsXG4gICAgICAgIHBheWxvYWQ6ICdMYXN0IHllYXInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1NlbGVjdCBEYXRlJyxcbiAgICAgICAgLy8gdGhpcyBwYXlsb2FkIGtleSBpcyB1c2UgZm9yIHZpc3VhbGlzZSB0aGUgZGF0ZXBpY2tlci5cbiAgICAgICAgcGF5bG9hZDogJ0J5RGF0ZScsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBwcml2YXRlIGRhdGVwaWNrZXJPcHRpb25zID0ge1xuICAgICAgZGF0ZUZvcm1hdDogJ1ktbS1kJyxcbiAgICAgIG1vZGU6ICdyYW5nZScsXG4gICAgfTtcblxuICAgIHByaXZhdGUgZGF0ZVBpY2tlckV4dGVybmFsRGF0YSA9IHtcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogJ2R2LXNlbGVjdCcsXG4gICAgICAgIGxhYmVsOiAnTGFzdCB3ZWVrJyxcbiAgICAgICAgaXRlbXM6IHRoaXMuSXRlbXMsXG4gICAgICB9LFxuICAgICAgZGF0ZXBpY2tlcjoge1xuICAgICAgICBpZDogJ2RhdGVwaWNrZXInLFxuICAgICAgICBsaWJPcHRpb25zOiB0aGlzLmRhdGVwaWNrZXJPcHRpb25zLFxuICAgICAgfSxcbiAgICB9XG5cbiAgICBvbkluaXQoKSB7XG4gICAgICB0aGlzLm9uZSgnZHYtZGF0ZXBpY2tlci13cmFwcGVyJykudXBkYXRlKHRoaXMuZGF0ZVBpY2tlckV4dGVybmFsRGF0YSk7XG4gICAgfVxufVxuIl19