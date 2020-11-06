import { EventHandler } from '@n7-frontend/core';
export class MrInputTextEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`: {
                    const { value } = payload;
                    // set new value
                    this.dataSource.setState({ value });
                    // emit changed signal
                    this.changed$.next({
                        id: this.dataSource.id,
                        state: this.dataSource.getState()
                    });
                    break;
                }
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS9pbnB1dC10ZXh0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtqRCxNQUFNLE9BQU8sYUFBYyxTQUFRLFlBQVk7SUFLdEMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNuQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDO29CQUMxQixnQkFBZ0I7b0JBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDcEMsc0JBQXNCO29CQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDakIsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO3FCQUNsQyxDQUFDLENBQUM7b0JBQ0gsTUFBTTtpQkFDUDtnQkFDRDtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1ySW5wdXRUZXh0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZm9ybS9pbnB1dC10ZXh0LmRzJztcbmltcG9ydCB7IE1ySW5wdXRFdmVudEhhbmRsZXIsIE1yQ2hhbmdlZFBhcmFtcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJJbnB1dFRleHRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIE1ySW5wdXRFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgY2hhbmdlZCQ6IFN1YmplY3Q8TXJDaGFuZ2VkUGFyYW1zPjtcblxuICBwdWJsaWMgZGF0YVNvdXJjZTogTXJJbnB1dFRleHREUztcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0uY2hhbmdlYDoge1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICAgICAgICAgIC8vIGVtaXQgY2hhbmdlZCBzaWduYWxcbiAgICAgICAgICB0aGlzLmNoYW5nZWQkLm5leHQoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5pZCxcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0U3RhdGUoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==