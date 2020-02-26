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
                payload: "Last week",
            },
            {
                text: "Last month",
                payload: "Last month",
            },
            {
                text: "Last year",
                payload: "Last year",
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
                label: "Last week",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQXVDLDZDQUFnQjtJQUF2RDtRQUFBLHFFQXlDQztRQXhDVyxXQUFLLEdBQUc7WUFDWjtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDdkI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLFlBQVk7YUFDeEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDdkI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsYUFBYTs7Z0JBRW5CLE9BQU8sRUFBRSxRQUFRO2FBQ3BCO1NBQ0osQ0FBQztRQUVNLHVCQUFpQixHQUFHO1lBQ3hCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUM7UUFFTSw0QkFBc0IsR0FBRztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLFdBQVc7Z0JBQ2YsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSzthQUNwQjtZQUNELFVBQVUsRUFBRTtnQkFDUixFQUFFLEVBQUMsWUFBWTtnQkFDZixVQUFVLEVBQUUsS0FBSSxDQUFDLGlCQUFpQjthQUNyQztTQUNKLENBQUE7O0lBS0wsQ0FBQzs7OztJQUhHLGtDQUFNOzs7SUFBTjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXpDRCxDQUF1QyxnQkFBZ0IsR0F5Q3REOzs7Ozs7O0lBeENHLGtDQWtCRTs7Ozs7SUFFRiw4Q0FHRTs7Ozs7SUFFRixtREFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEdkV4YW1wbGVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICAgIHByaXZhdGUgSXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiTGFzdCB3ZWVrXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBcIkxhc3Qgd2Vla1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkxhc3QgbW9udGhcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IFwiTGFzdCBtb250aFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkxhc3QgeWVhclwiLFxuICAgICAgICAgICAgcGF5bG9hZDogXCJMYXN0IHllYXJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJTZWxlY3QgRGF0ZVwiLFxuICAgICAgICAgICAgLy90aGlzIHBheWxvYWQga2V5IGlzIHVzZSBmb3IgdmlzdWFsaXNlIHRoZSBkYXRlcGlja2VyLlxuICAgICAgICAgICAgcGF5bG9hZDogXCJCeURhdGVcIixcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBwcml2YXRlIGRhdGVwaWNrZXJPcHRpb25zID0ge1xuICAgICAgICBkYXRlRm9ybWF0OiAnWS1tLWQnLFxuICAgICAgICBtb2RlOiAncmFuZ2UnLFxuICAgIH07XG5cbiAgICBwcml2YXRlIGRhdGVQaWNrZXJFeHRlcm5hbERhdGEgPSB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IFwiZHYtc2VsZWN0XCIsXG4gICAgICAgICAgICBsYWJlbDogXCJMYXN0IHdlZWtcIixcbiAgICAgICAgICAgIGl0ZW1zOiB0aGlzLkl0ZW1zLFxuICAgICAgICB9LFxuICAgICAgICBkYXRlcGlja2VyOiB7XG4gICAgICAgICAgICBpZDpcImRhdGVwaWNrZXJcIixcbiAgICAgICAgICAgIGxpYk9wdGlvbnM6IHRoaXMuZGF0ZXBpY2tlck9wdGlvbnMsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkluaXQoKXtcbiAgICAgICAgdGhpcy5vbmUoJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmRhdGVQaWNrZXJFeHRlcm5hbERhdGEpO1xuICAgIH1cbn0iXX0=