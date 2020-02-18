/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZ0JBQWdCO0lBQXZEOztRQUNZLFVBQUssR0FBRztZQUNaO2dCQUNJLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsV0FBVzthQUN2QjtZQUNEO2dCQUNJLElBQUksRUFBRSxZQUFZO2dCQUNsQixPQUFPLEVBQUUsWUFBWTthQUN4QjtZQUNEO2dCQUNJLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsV0FBVzthQUN2QjtZQUNEO2dCQUNJLElBQUksRUFBRSxhQUFhOztnQkFFbkIsT0FBTyxFQUFFLFFBQVE7YUFDcEI7U0FDSixDQUFDO1FBRU0sc0JBQWlCLEdBQUc7WUFDeEIsVUFBVSxFQUFFLE9BQU87WUFDbkIsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQztRQUVNLDJCQUFzQixHQUFHO1lBQzdCLE1BQU0sRUFBRTtnQkFDSixFQUFFLEVBQUUsV0FBVztnQkFDZixLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ3BCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLEVBQUUsRUFBQyxZQUFZO2dCQUNmLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCO2FBQ3JDO1NBQ0osQ0FBQTtJQUtMLENBQUM7Ozs7SUFIRyxNQUFNO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0o7Ozs7OztJQXhDRyxrQ0FrQkU7Ozs7O0lBRUYsOENBR0U7Ozs7O0lBRUYsbURBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHZFeGFtcGxlTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgICBwcml2YXRlIEl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkxhc3Qgd2Vla1wiLFxuICAgICAgICAgICAgcGF5bG9hZDogXCJMYXN0IHdlZWtcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJMYXN0IG1vbnRoXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBcIkxhc3QgbW9udGhcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJMYXN0IHllYXJcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IFwiTGFzdCB5ZWFyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiU2VsZWN0IERhdGVcIixcbiAgICAgICAgICAgIC8vdGhpcyBwYXlsb2FkIGtleSBpcyB1c2UgZm9yIHZpc3VhbGlzZSB0aGUgZGF0ZXBpY2tlci5cbiAgICAgICAgICAgIHBheWxvYWQ6IFwiQnlEYXRlXCIsXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgcHJpdmF0ZSBkYXRlcGlja2VyT3B0aW9ucyA9IHtcbiAgICAgICAgZGF0ZUZvcm1hdDogJ1ktbS1kJyxcbiAgICAgICAgbW9kZTogJ3JhbmdlJyxcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBkYXRlUGlja2VyRXh0ZXJuYWxEYXRhID0ge1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiBcImR2LXNlbGVjdFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiTGFzdCB3ZWVrXCIsXG4gICAgICAgICAgICBpdGVtczogdGhpcy5JdGVtcyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZXBpY2tlcjoge1xuICAgICAgICAgICAgaWQ6XCJkYXRlcGlja2VyXCIsXG4gICAgICAgICAgICBsaWJPcHRpb25zOiB0aGlzLmRhdGVwaWNrZXJPcHRpb25zLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Jbml0KCl7XG4gICAgICAgIHRoaXMub25lKCdkdi1kYXRlcGlja2VyLXdyYXBwZXInKS51cGRhdGUodGhpcy5kYXRlUGlja2VyRXh0ZXJuYWxEYXRhKTtcbiAgICB9XG59Il19