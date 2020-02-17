/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class DvExampleLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.Items = [
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
        this.datepickerOptions = {
            dateFormat: 'Y-m-d',
            mode: 'range',
        };
        this.datePickerExternalData = {
            select: {
                id: "dv-select",
                label: "Last week",
                items: this.Items,
            },
            datepicker: {
                id: "datepicker",
                libOptions: this.datepickerOptions,
            }
        };
    }
    /**
     * @return {?}
     */
    onInit() {
        this.one('dv-datepicker-wrapper').update(this.datePickerExternalData);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUF2RDs7UUFDWSxVQUFLLEdBQUc7WUFDWjtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDdkI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLFlBQVk7YUFDeEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDdkI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsYUFBYTs7Z0JBRW5CLE9BQU8sRUFBRSxRQUFRO2FBQ3BCO1NBQ0osQ0FBQztRQUVNLHNCQUFpQixHQUFHO1lBQ3hCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUM7UUFFTSwyQkFBc0IsR0FBRztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLFdBQVc7Z0JBQ2YsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNwQjtZQUNELFVBQVUsRUFBRTtnQkFDUixFQUFFLEVBQUMsWUFBWTtnQkFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjthQUNyQztTQUNKLENBQUE7SUFLTCxDQUFDOzs7O0lBSEcsTUFBTTtRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDMUUsQ0FBQztDQUNKOzs7Ozs7SUF4Q0csa0NBa0JFOzs7OztJQUVGLDhDQUdFOzs7OztJQUVGLG1EQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIER2RXhhbXBsZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gICAgcHJpdmF0ZSBJdGVtcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJMYXN0IHdlZWtcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IFwiTGFzdCB3ZWVrXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiTGFzdCBtb250aFwiLFxuICAgICAgICAgICAgcGF5bG9hZDogXCJMYXN0IG1vbnRoXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiTGFzdCB5ZWFyXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBcIkxhc3QgeWVhclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlNlbGVjdCBEYXRlXCIsXG4gICAgICAgICAgICAvL3RoaXMgcGF5bG9hZCBrZXkgaXMgdXNlIGZvciB2aXN1YWxpc2UgdGhlIGRhdGVwaWNrZXIuXG4gICAgICAgICAgICBwYXlsb2FkOiBcIkJ5RGF0ZVwiLFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIHByaXZhdGUgZGF0ZXBpY2tlck9wdGlvbnMgPSB7XG4gICAgICAgIGRhdGVGb3JtYXQ6ICdZLW0tZCcsXG4gICAgICAgIG1vZGU6ICdyYW5nZScsXG4gICAgfTtcblxuICAgIHByaXZhdGUgZGF0ZVBpY2tlckV4dGVybmFsRGF0YSA9IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBpZDogXCJkdi1zZWxlY3RcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIkxhc3Qgd2Vla1wiLFxuICAgICAgICAgICAgaXRlbXM6IHRoaXMuSXRlbXMsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVwaWNrZXI6IHtcbiAgICAgICAgICAgIGlkOlwiZGF0ZXBpY2tlclwiLFxuICAgICAgICAgICAgbGliT3B0aW9uczogdGhpcy5kYXRlcGlja2VyT3B0aW9ucyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSW5pdCgpe1xuICAgICAgICB0aGlzLm9uZSgnZHYtZGF0ZXBpY2tlci13cmFwcGVyJykudXBkYXRlKHRoaXMuZGF0ZVBpY2tlckV4dGVybmFsRGF0YSk7XG4gICAgfVxufSJdfQ==