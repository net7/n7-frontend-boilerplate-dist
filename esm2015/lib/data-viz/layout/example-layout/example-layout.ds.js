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
        this.datepickerOptions = {
            dateFormat: 'Y-m-d',
            mode: 'range',
        };
        this.datePickerExternalData = {
            select: {
                id: "dv-select",
                label: "Last Week",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUF2RDs7UUFDWSxVQUFLLEdBQUc7WUFDWjtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFVBQVU7YUFDdEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLFdBQVc7YUFDdkI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFVBQVU7YUFDdEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsYUFBYTs7Z0JBRW5CLE9BQU8sRUFBRSxRQUFRO2FBQ3BCO1NBQ0osQ0FBQztRQUVNLHNCQUFpQixHQUFHO1lBQ3hCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUM7UUFFTSwyQkFBc0IsR0FBRztZQUM3QixNQUFNLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLFdBQVc7Z0JBQ2YsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNwQjtZQUNELFVBQVUsRUFBRTtnQkFDUixFQUFFLEVBQUMsWUFBWTtnQkFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjthQUNyQztTQUNKLENBQUE7SUFLTCxDQUFDOzs7O0lBSEcsTUFBTTtRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDMUUsQ0FBQztDQUNKOzs7Ozs7SUF4Q0csa0NBa0JFOzs7OztJQUVGLDhDQUdFOzs7OztJQUVGLG1EQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEdkV4YW1wbGVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gICAgcHJpdmF0ZSBJdGVtcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiTGFzdCB3ZWVrXCIsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IFwibGFzdFdlZWtcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJMYXN0IG1vbnRoXCIsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IFwibGFzdE1vbnRoXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiTGFzdCB5ZWFyXCIsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IFwibGFzdFllYXJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJTZWxlY3QgRGF0ZVwiLFxyXG4gICAgICAgICAgICAvL3RoaXMgcGF5bG9hZCBrZXkgaXMgdXNlIGZvciB2aXN1YWxpc2UgdGhlIGRhdGVwaWNrZXIuXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IFwiQnlEYXRlXCIsXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGVwaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICAgIGRhdGVGb3JtYXQ6ICdZLW0tZCcsXHJcbiAgICAgICAgbW9kZTogJ3JhbmdlJyxcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRlUGlja2VyRXh0ZXJuYWxEYXRhID0ge1xyXG4gICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICBpZDogXCJkdi1zZWxlY3RcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiTGFzdCBXZWVrXCIsXHJcbiAgICAgICAgICAgIGl0ZW1zOiB0aGlzLkl0ZW1zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZXBpY2tlcjoge1xyXG4gICAgICAgICAgICBpZDpcImRhdGVwaWNrZXJcIixcclxuICAgICAgICAgICAgbGliT3B0aW9uczogdGhpcy5kYXRlcGlja2VyT3B0aW9ucyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5vbmUoJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmRhdGVQaWNrZXJFeHRlcm5hbERhdGEpO1xyXG4gICAgfVxyXG59Il19