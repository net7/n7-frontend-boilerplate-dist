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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9kYXRhLXZpei9sYXlvdXQvZXhhbXBsZS1sYXlvdXQvZXhhbXBsZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUF2RDs7UUFDWSxVQUFLLEdBQUc7WUFDZDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLFlBQVk7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsd0RBQXdEO2dCQUN4RCxPQUFPLEVBQUUsUUFBUTthQUNsQjtTQUNGLENBQUM7UUFFTSxzQkFBaUIsR0FBRztZQUMxQixVQUFVLEVBQUUsT0FBTztZQUNuQixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFFTSwyQkFBc0IsR0FBRztZQUMvQixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLFdBQVc7Z0JBQ2YsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNsQjtZQUNELFVBQVUsRUFBRTtnQkFDVixFQUFFLEVBQUUsWUFBWTtnQkFDaEIsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7YUFDbkM7U0FDRixDQUFBO0lBS0wsQ0FBQztJQUhHLE1BQU07UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEdkV4YW1wbGVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICAgIHByaXZhdGUgSXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdMYXN0IHdlZWsnLFxuICAgICAgICBwYXlsb2FkOiAnTGFzdCB3ZWVrJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdMYXN0IG1vbnRoJyxcbiAgICAgICAgcGF5bG9hZDogJ0xhc3QgbW9udGgnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0xhc3QgeWVhcicsXG4gICAgICAgIHBheWxvYWQ6ICdMYXN0IHllYXInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1NlbGVjdCBEYXRlJyxcbiAgICAgICAgLy8gdGhpcyBwYXlsb2FkIGtleSBpcyB1c2UgZm9yIHZpc3VhbGlzZSB0aGUgZGF0ZXBpY2tlci5cbiAgICAgICAgcGF5bG9hZDogJ0J5RGF0ZScsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBwcml2YXRlIGRhdGVwaWNrZXJPcHRpb25zID0ge1xuICAgICAgZGF0ZUZvcm1hdDogJ1ktbS1kJyxcbiAgICAgIG1vZGU6ICdyYW5nZScsXG4gICAgfTtcblxuICAgIHByaXZhdGUgZGF0ZVBpY2tlckV4dGVybmFsRGF0YSA9IHtcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogJ2R2LXNlbGVjdCcsXG4gICAgICAgIGxhYmVsOiAnTGFzdCB3ZWVrJyxcbiAgICAgICAgaXRlbXM6IHRoaXMuSXRlbXMsXG4gICAgICB9LFxuICAgICAgZGF0ZXBpY2tlcjoge1xuICAgICAgICBpZDogJ2RhdGVwaWNrZXInLFxuICAgICAgICBsaWJPcHRpb25zOiB0aGlzLmRhdGVwaWNrZXJPcHRpb25zLFxuICAgICAgfSxcbiAgICB9XG5cbiAgICBvbkluaXQoKSB7XG4gICAgICB0aGlzLm9uZSgnZHYtZGF0ZXBpY2tlci13cmFwcGVyJykudXBkYXRlKHRoaXMuZGF0ZVBpY2tlckV4dGVybmFsRGF0YSk7XG4gICAgfVxufVxuIl19