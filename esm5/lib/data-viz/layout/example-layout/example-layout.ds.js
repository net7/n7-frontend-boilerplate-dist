/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQ7SUFBdUMsNkNBQWdCO0lBQXZEO1FBQUEscUVBeUNDO1FBeENXLFdBQUssR0FBRztZQUNaO2dCQUNJLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsVUFBVTthQUN0QjtZQUNEO2dCQUNJLElBQUksRUFBRSxZQUFZO2dCQUNsQixPQUFPLEVBQUUsV0FBVzthQUN2QjtZQUNEO2dCQUNJLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsVUFBVTthQUN0QjtZQUNEO2dCQUNJLElBQUksRUFBRSxhQUFhOztnQkFFbkIsT0FBTyxFQUFFLFFBQVE7YUFDcEI7U0FDSixDQUFDO1FBRU0sdUJBQWlCLEdBQUc7WUFDeEIsVUFBVSxFQUFFLE9BQU87WUFDbkIsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQztRQUVNLDRCQUFzQixHQUFHO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixFQUFFLEVBQUUsV0FBVztnQkFDZixLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLO2FBQ3BCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLEVBQUUsRUFBQyxZQUFZO2dCQUNmLFVBQVUsRUFBRSxLQUFJLENBQUMsaUJBQWlCO2FBQ3JDO1NBQ0osQ0FBQTs7SUFLTCxDQUFDOzs7O0lBSEcsa0NBQU07OztJQUFOO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBekNELENBQXVDLGdCQUFnQixHQXlDdEQ7Ozs7Ozs7SUF4Q0csa0NBa0JFOzs7OztJQUVGLDhDQUdFOzs7OztJQUVGLG1EQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIER2RXhhbXBsZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gICAgcHJpdmF0ZSBJdGVtcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJMYXN0IHdlZWtcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IFwibGFzdFdlZWtcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJMYXN0IG1vbnRoXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBcImxhc3RNb250aFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkxhc3QgeWVhclwiLFxuICAgICAgICAgICAgcGF5bG9hZDogXCJsYXN0WWVhclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlNlbGVjdCBEYXRlXCIsXG4gICAgICAgICAgICAvL3RoaXMgcGF5bG9hZCBrZXkgaXMgdXNlIGZvciB2aXN1YWxpc2UgdGhlIGRhdGVwaWNrZXIuXG4gICAgICAgICAgICBwYXlsb2FkOiBcIkJ5RGF0ZVwiLFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIHByaXZhdGUgZGF0ZXBpY2tlck9wdGlvbnMgPSB7XG4gICAgICAgIGRhdGVGb3JtYXQ6ICdZLW0tZCcsXG4gICAgICAgIG1vZGU6ICdyYW5nZScsXG4gICAgfTtcblxuICAgIHByaXZhdGUgZGF0ZVBpY2tlckV4dGVybmFsRGF0YSA9IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBpZDogXCJkdi1zZWxlY3RcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIkxhc3QgV2Vla1wiLFxuICAgICAgICAgICAgaXRlbXM6IHRoaXMuSXRlbXMsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVwaWNrZXI6IHtcbiAgICAgICAgICAgIGlkOlwiZGF0ZXBpY2tlclwiLFxuICAgICAgICAgICAgbGliT3B0aW9uczogdGhpcy5kYXRlcGlja2VyT3B0aW9ucyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSW5pdCgpe1xuICAgICAgICB0aGlzLm9uZSgnZHYtZGF0ZXBpY2tlci13cmFwcGVyJykudXBkYXRlKHRoaXMuZGF0ZVBpY2tlckV4dGVybmFsRGF0YSk7XG4gICAgfVxufSJdfQ==