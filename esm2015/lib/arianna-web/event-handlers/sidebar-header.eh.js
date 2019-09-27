/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwSidebarHeaderEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            console.log(type);
            if (type == 'aw-sidebar-header.click') {
                this.dataSource.toggleSidebar();
                this.emitOuter('click', payload);
            }
        }));
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvc2lkZWJhci1oZWFkZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsWUFBWTs7OztJQUUxQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxJQUFJLElBQUkseUJBQXlCLEVBQUM7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSDs7Y0FFTTtJQUNSLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3U2lkZWJhckhlYWRlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHsgICBcbiAgICAgIGNvbnNvbGUubG9nKHR5cGUpO1xuICAgICAgaWYoIHR5cGUgPT0gJ2F3LXNpZGViYXItaGVhZGVyLmNsaWNrJyl7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVTaWRlYmFyKCk7XG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyogdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICBcbiAgICB9KTsgKi9cbiAgfVxuXG59Il19