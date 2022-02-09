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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9kYXRhLXZpei9sYXlvdXQvZXhhbXBsZS1sYXlvdXQvZXhhbXBsZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUF2RDs7UUFDWSxVQUFLLEdBQUc7WUFDZDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLFlBQVk7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsd0RBQXdEO2dCQUN4RCxPQUFPLEVBQUUsUUFBUTthQUNsQjtTQUNGLENBQUM7UUFFTSxzQkFBaUIsR0FBRztZQUMxQixVQUFVLEVBQUUsT0FBTztZQUNuQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFFTSwyQkFBc0IsR0FBRztZQUMvQixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLFdBQVc7Z0JBQ2YsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNsQjtZQUNELFVBQVUsRUFBRTtnQkFDVixFQUFFLEVBQUUsWUFBWTtnQkFDaEIsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7YUFDbkM7U0FDRixDQUFBO0lBS0wsQ0FBQztJQUhHLE1BQU07UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHZFeGFtcGxlTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICAgIHByaXZhdGUgSXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnTGFzdCB3ZWVrJyxcclxuICAgICAgICBwYXlsb2FkOiAnTGFzdCB3ZWVrJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdMYXN0IG1vbnRoJyxcclxuICAgICAgICBwYXlsb2FkOiAnTGFzdCBtb250aCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnTGFzdCB5ZWFyJyxcclxuICAgICAgICBwYXlsb2FkOiAnTGFzdCB5ZWFyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdTZWxlY3QgRGF0ZScsXHJcbiAgICAgICAgLy8gdGhpcyBwYXlsb2FkIGtleSBpcyB1c2UgZm9yIHZpc3VhbGlzZSB0aGUgZGF0ZXBpY2tlci5cclxuICAgICAgICBwYXlsb2FkOiAnQnlEYXRlJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRlcGlja2VyT3B0aW9ucyA9IHtcclxuICAgICAgZGF0ZUZvcm1hdDogJ1ktbS1kJyxcclxuICAgICAgbW9kZTogJ3JhbmdlJyxcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRlUGlja2VyRXh0ZXJuYWxEYXRhID0ge1xyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogJ2R2LXNlbGVjdCcsXHJcbiAgICAgICAgbGFiZWw6ICdMYXN0IHdlZWsnLFxyXG4gICAgICAgIGl0ZW1zOiB0aGlzLkl0ZW1zLFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRlcGlja2VyOiB7XHJcbiAgICAgICAgaWQ6ICdkYXRlcGlja2VyJyxcclxuICAgICAgICBsaWJPcHRpb25zOiB0aGlzLmRhdGVwaWNrZXJPcHRpb25zLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgdGhpcy5vbmUoJ2R2LWRhdGVwaWNrZXItd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmRhdGVQaWNrZXJFeHRlcm5hbERhdGEpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==