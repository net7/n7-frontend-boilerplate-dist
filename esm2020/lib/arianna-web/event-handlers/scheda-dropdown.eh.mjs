import { EventHandler } from '@n7-frontend/core';
export class AwSchedaDropdownEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            if (type === 'aw-scheda-dropdown.click') {
                if (payload === 'toggle') {
                    this.dataSource.toggle();
                }
                else {
                    this.dataSource.onChange(payload);
                    this.emitOuter('click', payload);
                }
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvc2NoZWRhLWRyb3Bkb3duLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsWUFBWTtJQUMzQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELElBQUksSUFBSSxLQUFLLDBCQUEwQixFQUFFO2dCQUN2QyxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQzFCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDbEM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhRHJvcGRvd25FSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgaWYgKHR5cGUgPT09ICdhdy1zY2hlZGEtZHJvcGRvd24uY2xpY2snKSB7XHJcbiAgICAgICAgaWYgKHBheWxvYWQgPT09ICd0b2dnbGUnKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkNoYW5nZShwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==