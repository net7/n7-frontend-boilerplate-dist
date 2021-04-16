import { DataSource } from '@n7-frontend/core';
export class MrNavDS extends DataSource {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(data) {
        const items = [];
        data.nav.forEach((el) => {
            items.push({
                text: el.title,
                anchor: {
                    href: `http://localhost:4200/mr/static/${el.id}`,
                    target: '_blank',
                    payload: el.id
                }
            });
        });
        return {
            items,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbmF2LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7SUFDckMsNkRBQTZEO0lBQ25ELFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hELE1BQU0sRUFBRSxRQUFRO29CQUNoQixPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUU7aUJBQ2Y7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxLQUFLO1NBQ04sQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJOYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICBkYXRhLm5hdi5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICB0ZXh0OiBlbC50aXRsZSxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIGhyZWY6IGBodHRwOi8vbG9jYWxob3N0OjQyMDAvbXIvc3RhdGljLyR7ZWwuaWR9YCxcclxuICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXHJcbiAgICAgICAgICBwYXlsb2FkOiBlbC5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19