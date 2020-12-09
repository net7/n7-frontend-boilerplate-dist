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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbmF2LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7SUFDckMsNkRBQTZEO0lBQ25ELFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hELE1BQU0sRUFBRSxRQUFRO29CQUNoQixPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUU7aUJBQ2Y7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU87WUFDTCxLQUFLO1NBQ04sQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNck5hdkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICBkYXRhLm5hdi5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6IGVsLnRpdGxlLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBgaHR0cDovL2xvY2FsaG9zdDo0MjAwL21yL3N0YXRpYy8ke2VsLmlkfWAsXG4gICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgICBwYXlsb2FkOiBlbC5pZFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXMsXG4gICAgfTtcbiAgfVxufVxuIl19