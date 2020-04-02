/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUU3RSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZ0JBQWdCO0lBQXZEOztRQUNZLFVBQUssR0FBRztZQUNkO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsV0FBVzthQUNyQjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixPQUFPLEVBQUUsWUFBWTthQUN0QjtZQUNEO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsV0FBVzthQUNyQjtZQUNEO2dCQUNFLElBQUksRUFBRSxhQUFhOztnQkFFbkIsT0FBTyxFQUFFLFFBQVE7YUFDbEI7U0FDRixDQUFDO1FBRU0sc0JBQWlCLEdBQUc7WUFDMUIsVUFBVSxFQUFFLE9BQU87WUFDbkIsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBRU0sMkJBQXNCLEdBQUc7WUFDL0IsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxXQUFXO2dCQUNmLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDbEI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsRUFBRSxFQUFFLFlBQVk7Z0JBQ2hCLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCO2FBQ25DO1NBQ0YsQ0FBQTtJQUtMLENBQUM7Ozs7SUFIRyxNQUFNO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBQ0o7Ozs7OztJQXhDRyxrQ0FrQkU7Ozs7O0lBRUYsOENBR0U7Ozs7O0lBRUYsbURBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUvZGlzdC9sYXlvdXQtZGF0YS1zb3VyY2UnO1xuXG5leHBvcnQgY2xhc3MgRHZFeGFtcGxlTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgICBwcml2YXRlIEl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnTGFzdCB3ZWVrJyxcbiAgICAgICAgcGF5bG9hZDogJ0xhc3Qgd2VlaycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnTGFzdCBtb250aCcsXG4gICAgICAgIHBheWxvYWQ6ICdMYXN0IG1vbnRoJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdMYXN0IHllYXInLFxuICAgICAgICBwYXlsb2FkOiAnTGFzdCB5ZWFyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdTZWxlY3QgRGF0ZScsXG4gICAgICAgIC8vIHRoaXMgcGF5bG9hZCBrZXkgaXMgdXNlIGZvciB2aXN1YWxpc2UgdGhlIGRhdGVwaWNrZXIuXG4gICAgICAgIHBheWxvYWQ6ICdCeURhdGUnLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcHJpdmF0ZSBkYXRlcGlja2VyT3B0aW9ucyA9IHtcbiAgICAgIGRhdGVGb3JtYXQ6ICdZLW0tZCcsXG4gICAgICBtb2RlOiAncmFuZ2UnLFxuICAgIH07XG5cbiAgICBwcml2YXRlIGRhdGVQaWNrZXJFeHRlcm5hbERhdGEgPSB7XG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6ICdkdi1zZWxlY3QnLFxuICAgICAgICBsYWJlbDogJ0xhc3Qgd2VlaycsXG4gICAgICAgIGl0ZW1zOiB0aGlzLkl0ZW1zLFxuICAgICAgfSxcbiAgICAgIGRhdGVwaWNrZXI6IHtcbiAgICAgICAgaWQ6ICdkYXRlcGlja2VyJyxcbiAgICAgICAgbGliT3B0aW9uczogdGhpcy5kYXRlcGlja2VyT3B0aW9ucyxcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgdGhpcy5vbmUoJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmRhdGVQaWNrZXJFeHRlcm5hbERhdGEpO1xuICAgIH1cbn1cbiJdfQ==