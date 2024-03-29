import { EventHandler } from '@n7-frontend/core';
export class AwSchedaPdfEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            if (type === 'aw-scheda-pdf.click') {
                this.dataSource.onChange(payload);
            }
            else if (type === 'aw-scheda-pdf.loaded') {
                this.dataSource.onLoaded();
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLXBkZi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9zY2hlZGEtcGRmLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRCxNQUFNLE9BQU8sYUFBYyxTQUFRLFlBQVk7SUFHdEMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxJQUFJLElBQUksS0FBSyxxQkFBcUIsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkM7aUJBQU0sSUFBSSxJQUFJLEtBQUssc0JBQXNCLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDNUI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgQXdTY2hlZGFQZGZEUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFQZGZFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGRhdGFTb3VyY2U6IEF3U2NoZWRhUGRmRFM7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlID09PSAnYXctc2NoZWRhLXBkZi5jbGljaycpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25DaGFuZ2UocGF5bG9hZCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2F3LXNjaGVkYS1wZGYubG9hZGVkJykge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkxvYWRlZCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19