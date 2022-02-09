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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLXBkZi5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL3NjaGVkYS1wZGYuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pELE1BQU0sT0FBTyxhQUFjLFNBQVEsWUFBWTtJQUd0QyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELElBQUksSUFBSSxLQUFLLHFCQUFxQixFQUFFO2dCQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztpQkFBTSxJQUFJLElBQUksS0FBSyxzQkFBc0IsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBBd1NjaGVkYVBkZkRTIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYVBkZkVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgZGF0YVNvdXJjZTogQXdTY2hlZGFQZGZEUztcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgaWYgKHR5cGUgPT09ICdhdy1zY2hlZGEtcGRmLmNsaWNrJykge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkNoYW5nZShwYXlsb2FkKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYXctc2NoZWRhLXBkZi5sb2FkZWQnKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uTG9hZGVkKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=