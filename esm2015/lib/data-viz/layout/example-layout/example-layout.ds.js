import { LayoutDataSource } from '@n7-frontend/core';
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
    onInit() {
        this.one('dv-datepicker-wrapper').update(this.datePickerExternalData);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7SUFBdkQ7O1FBQ1ksVUFBSyxHQUFHO1lBQ2Q7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE9BQU8sRUFBRSxXQUFXO2FBQ3JCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLE9BQU8sRUFBRSxZQUFZO2FBQ3RCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE9BQU8sRUFBRSxXQUFXO2FBQ3JCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLHdEQUF3RDtnQkFDeEQsT0FBTyxFQUFFLFFBQVE7YUFDbEI7U0FDRixDQUFDO1FBRU0sc0JBQWlCLEdBQUc7WUFDMUIsVUFBVSxFQUFFLE9BQU87WUFDbkIsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBRU0sMkJBQXNCLEdBQUc7WUFDL0IsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxXQUFXO2dCQUNmLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDbEI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsRUFBRSxFQUFFLFlBQVk7Z0JBQ2hCLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCO2FBQ25DO1NBQ0YsQ0FBQTtJQUtMLENBQUM7SUFIRyxNQUFNO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIER2RXhhbXBsZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgICBwcml2YXRlIEl0ZW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ0xhc3Qgd2VlaycsXHJcbiAgICAgICAgcGF5bG9hZDogJ0xhc3Qgd2VlaycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnTGFzdCBtb250aCcsXHJcbiAgICAgICAgcGF5bG9hZDogJ0xhc3QgbW9udGgnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ0xhc3QgeWVhcicsXHJcbiAgICAgICAgcGF5bG9hZDogJ0xhc3QgeWVhcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnU2VsZWN0IERhdGUnLFxyXG4gICAgICAgIC8vIHRoaXMgcGF5bG9hZCBrZXkgaXMgdXNlIGZvciB2aXN1YWxpc2UgdGhlIGRhdGVwaWNrZXIuXHJcbiAgICAgICAgcGF5bG9hZDogJ0J5RGF0ZScsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHByaXZhdGUgZGF0ZXBpY2tlck9wdGlvbnMgPSB7XHJcbiAgICAgIGRhdGVGb3JtYXQ6ICdZLW0tZCcsXHJcbiAgICAgIG1vZGU6ICdyYW5nZScsXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgZGF0ZVBpY2tlckV4dGVybmFsRGF0YSA9IHtcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6ICdkdi1zZWxlY3QnLFxyXG4gICAgICAgIGxhYmVsOiAnTGFzdCB3ZWVrJyxcclxuICAgICAgICBpdGVtczogdGhpcy5JdGVtcyxcclxuICAgICAgfSxcclxuICAgICAgZGF0ZXBpY2tlcjoge1xyXG4gICAgICAgIGlkOiAnZGF0ZXBpY2tlcicsXHJcbiAgICAgICAgbGliT3B0aW9uczogdGhpcy5kYXRlcGlja2VyT3B0aW9ucyxcclxuICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgIHRoaXMub25lKCdkdi1kYXRlcGlja2VyLXdyYXBwZXInKS51cGRhdGUodGhpcy5kYXRlUGlja2VyRXh0ZXJuYWxEYXRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=