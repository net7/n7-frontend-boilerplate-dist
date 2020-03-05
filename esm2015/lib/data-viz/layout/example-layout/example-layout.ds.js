/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
export class DvExampleLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.Items = [
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
        this.datepickerOptions = {
            dateFormat: 'Y-m-d',
            mode: 'range',
        };
        this.datePickerExternalData = {
            select: {
                id: 'dv-select',
                label: 'Last week',
                items: this.Items,
            },
            datepicker: {
                id: 'datepicker',
                libOptions: this.datepickerOptions,
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFN0UsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUF2RDs7UUFDWSxVQUFLLEdBQUc7WUFDZDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLFlBQVk7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTs7Z0JBRW5CLE9BQU8sRUFBRSxRQUFRO2FBQ2xCO1NBQ0YsQ0FBQztRQUVNLHNCQUFpQixHQUFHO1lBQzFCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztRQUVNLDJCQUFzQixHQUFHO1lBQy9CLE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsV0FBVztnQkFDZixLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ2xCO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjthQUNuQztTQUNGLENBQUE7SUFLTCxDQUFDOzs7O0lBSEcsTUFBTTtRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNKOzs7Ozs7SUF4Q0csa0NBa0JFOzs7OztJQUVGLDhDQUdFOzs7OztJQUVGLG1EQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvbGF5b3V0LWRhdGEtc291cmNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEdkV4YW1wbGVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gICAgcHJpdmF0ZSBJdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdMYXN0IHdlZWsnLFxyXG4gICAgICAgIHBheWxvYWQ6ICdMYXN0IHdlZWsnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ0xhc3QgbW9udGgnLFxyXG4gICAgICAgIHBheWxvYWQ6ICdMYXN0IG1vbnRoJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdMYXN0IHllYXInLFxyXG4gICAgICAgIHBheWxvYWQ6ICdMYXN0IHllYXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1NlbGVjdCBEYXRlJyxcclxuICAgICAgICAvLyB0aGlzIHBheWxvYWQga2V5IGlzIHVzZSBmb3IgdmlzdWFsaXNlIHRoZSBkYXRlcGlja2VyLlxyXG4gICAgICAgIHBheWxvYWQ6ICdCeURhdGUnLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGVwaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICBkYXRlRm9ybWF0OiAnWS1tLWQnLFxyXG4gICAgICBtb2RlOiAncmFuZ2UnLFxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGVQaWNrZXJFeHRlcm5hbERhdGEgPSB7XHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIGlkOiAnZHYtc2VsZWN0JyxcclxuICAgICAgICBsYWJlbDogJ0xhc3Qgd2VlaycsXHJcbiAgICAgICAgaXRlbXM6IHRoaXMuSXRlbXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGVwaWNrZXI6IHtcclxuICAgICAgICBpZDogJ2RhdGVwaWNrZXInLFxyXG4gICAgICAgIGxpYk9wdGlvbnM6IHRoaXMuZGF0ZXBpY2tlck9wdGlvbnMsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgb25Jbml0KCkge1xyXG4gICAgICB0aGlzLm9uZSgnZHYtZGF0ZXBpY2tlci13cmFwcGVyJykudXBkYXRlKHRoaXMuZGF0ZVBpY2tlckV4dGVybmFsRGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIl19