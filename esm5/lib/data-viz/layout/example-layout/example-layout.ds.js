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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTdFO0lBQXVDLDZDQUFnQjtJQUF2RDtRQUFBLHFFQXlDQztRQXhDVyxXQUFLLEdBQUc7WUFDZDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLFlBQVk7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTs7Z0JBRW5CLE9BQU8sRUFBRSxRQUFRO2FBQ2xCO1NBQ0YsQ0FBQztRQUVNLHVCQUFpQixHQUFHO1lBQzFCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztRQUVNLDRCQUFzQixHQUFHO1lBQy9CLE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsV0FBVztnQkFDZixLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLO2FBQ2xCO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixVQUFVLEVBQUUsS0FBSSxDQUFDLGlCQUFpQjthQUNuQztTQUNGLENBQUE7O0lBS0wsQ0FBQzs7OztJQUhHLGtDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXpDRCxDQUF1QyxnQkFBZ0IsR0F5Q3REOzs7Ozs7O0lBeENHLGtDQWtCRTs7Ozs7SUFFRiw4Q0FHRTs7Ozs7SUFFRixtREFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHZFeGFtcGxlTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICAgIHByaXZhdGUgSXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnTGFzdCB3ZWVrJyxcclxuICAgICAgICBwYXlsb2FkOiAnTGFzdCB3ZWVrJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdMYXN0IG1vbnRoJyxcclxuICAgICAgICBwYXlsb2FkOiAnTGFzdCBtb250aCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnTGFzdCB5ZWFyJyxcclxuICAgICAgICBwYXlsb2FkOiAnTGFzdCB5ZWFyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdTZWxlY3QgRGF0ZScsXHJcbiAgICAgICAgLy8gdGhpcyBwYXlsb2FkIGtleSBpcyB1c2UgZm9yIHZpc3VhbGlzZSB0aGUgZGF0ZXBpY2tlci5cclxuICAgICAgICBwYXlsb2FkOiAnQnlEYXRlJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRlcGlja2VyT3B0aW9ucyA9IHtcclxuICAgICAgZGF0ZUZvcm1hdDogJ1ktbS1kJyxcclxuICAgICAgbW9kZTogJ3JhbmdlJyxcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRlUGlja2VyRXh0ZXJuYWxEYXRhID0ge1xyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogJ2R2LXNlbGVjdCcsXHJcbiAgICAgICAgbGFiZWw6ICdMYXN0IHdlZWsnLFxyXG4gICAgICAgIGl0ZW1zOiB0aGlzLkl0ZW1zLFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRlcGlja2VyOiB7XHJcbiAgICAgICAgaWQ6ICdkYXRlcGlja2VyJyxcclxuICAgICAgICBsaWJPcHRpb25zOiB0aGlzLmRhdGVwaWNrZXJPcHRpb25zLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgdGhpcy5vbmUoJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmRhdGVQaWNrZXJFeHRlcm5hbERhdGEpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==