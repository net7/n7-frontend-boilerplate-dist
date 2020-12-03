import { EventHandler } from '@n7-frontend/core';
export class AwSidebarHeaderEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            if (type === 'aw-sidebar-header.click') {
                this.dataSource.toggleSidebar();
                this.emitOuter('click', payload);
            }
        });
        /* this.outerEvents$.subscribe(event => {
    
        }); */
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvc2lkZWJhci1oZWFkZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxZQUFZO0lBQzFDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsSUFBSSxJQUFJLEtBQUsseUJBQXlCLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSDs7Y0FFTTtJQUNSLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3U2lkZWJhckhlYWRlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBpZiAodHlwZSA9PT0gJ2F3LXNpZGViYXItaGVhZGVyLmNsaWNrJykge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlU2lkZWJhcigpO1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG5cbiAgICB9KTsgKi9cbiAgfVxufVxuIl19