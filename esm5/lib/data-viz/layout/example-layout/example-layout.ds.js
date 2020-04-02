/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFN0U7SUFBdUMsNkNBQWdCO0lBQXZEO1FBQUEscUVBeUNDO1FBeENXLFdBQUssR0FBRztZQUNkO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsV0FBVzthQUNyQjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixPQUFPLEVBQUUsWUFBWTthQUN0QjtZQUNEO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsV0FBVzthQUNyQjtZQUNEO2dCQUNFLElBQUksRUFBRSxhQUFhOztnQkFFbkIsT0FBTyxFQUFFLFFBQVE7YUFDbEI7U0FDRixDQUFDO1FBRU0sdUJBQWlCLEdBQUc7WUFDMUIsVUFBVSxFQUFFLE9BQU87WUFDbkIsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBRU0sNEJBQXNCLEdBQUc7WUFDL0IsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxXQUFXO2dCQUNmLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUs7YUFDbEI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsRUFBRSxFQUFFLFlBQVk7Z0JBQ2hCLFVBQVUsRUFBRSxLQUFJLENBQUMsaUJBQWlCO2FBQ25DO1NBQ0YsQ0FBQTs7SUFLTCxDQUFDOzs7O0lBSEcsa0NBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBekNELENBQXVDLGdCQUFnQixHQXlDdEQ7Ozs7Ozs7SUF4Q0csa0NBa0JFOzs7OztJQUVGLDhDQUdFOzs7OztJQUVGLG1EQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvbGF5b3V0LWRhdGEtc291cmNlJztcblxuZXhwb3J0IGNsYXNzIER2RXhhbXBsZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gICAgcHJpdmF0ZSBJdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0xhc3Qgd2VlaycsXG4gICAgICAgIHBheWxvYWQ6ICdMYXN0IHdlZWsnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0xhc3QgbW9udGgnLFxuICAgICAgICBwYXlsb2FkOiAnTGFzdCBtb250aCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnTGFzdCB5ZWFyJyxcbiAgICAgICAgcGF5bG9hZDogJ0xhc3QgeWVhcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnU2VsZWN0IERhdGUnLFxuICAgICAgICAvLyB0aGlzIHBheWxvYWQga2V5IGlzIHVzZSBmb3IgdmlzdWFsaXNlIHRoZSBkYXRlcGlja2VyLlxuICAgICAgICBwYXlsb2FkOiAnQnlEYXRlJyxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHByaXZhdGUgZGF0ZXBpY2tlck9wdGlvbnMgPSB7XG4gICAgICBkYXRlRm9ybWF0OiAnWS1tLWQnLFxuICAgICAgbW9kZTogJ3JhbmdlJyxcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBkYXRlUGlja2VyRXh0ZXJuYWxEYXRhID0ge1xuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGlkOiAnZHYtc2VsZWN0JyxcbiAgICAgICAgbGFiZWw6ICdMYXN0IHdlZWsnLFxuICAgICAgICBpdGVtczogdGhpcy5JdGVtcyxcbiAgICAgIH0sXG4gICAgICBkYXRlcGlja2VyOiB7XG4gICAgICAgIGlkOiAnZGF0ZXBpY2tlcicsXG4gICAgICAgIGxpYk9wdGlvbnM6IHRoaXMuZGF0ZXBpY2tlck9wdGlvbnMsXG4gICAgICB9LFxuICAgIH1cblxuICAgIG9uSW5pdCgpIHtcbiAgICAgIHRoaXMub25lKCdkdi1kYXRlcGlja2VyLXdyYXBwZXInKS51cGRhdGUodGhpcy5kYXRlUGlja2VyRXh0ZXJuYWxEYXRhKTtcbiAgICB9XG59XG4iXX0=