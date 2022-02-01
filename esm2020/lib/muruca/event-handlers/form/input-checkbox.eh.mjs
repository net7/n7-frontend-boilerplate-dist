import { EventHandler } from '@n7-frontend/core';
export class MrInputCheckboxEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.change`: {
                    // update value
                    this.dataSource.toggleValue(payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guZWguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS9pbnB1dC1jaGVja2JveC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFlBQVk7SUFLMUMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNuQyxlQUFlO29CQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxzQkFBc0I7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNqQixFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7cUJBQ2xDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTXJJbnB1dENoZWNrYm94RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZm9ybS9pbnB1dC1jaGVja2JveC5kcyc7XG5pbXBvcnQgeyBNcklucHV0RXZlbnRIYW5kbGVyLCBNckNoYW5nZWRQYXJhbXMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0uaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIE1ySW5wdXRDaGVja2JveEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgTXJJbnB1dEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBjaGFuZ2VkJDogU3ViamVjdDxNckNoYW5nZWRQYXJhbXM+O1xuXG4gIHB1YmxpYyBkYXRhU291cmNlOiBNcklucHV0Q2hlY2tib3hEUztcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0uY2hhbmdlYDoge1xuICAgICAgICAgIC8vIHVwZGF0ZSB2YWx1ZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVWYWx1ZShwYXlsb2FkKTtcbiAgICAgICAgICAvLyBlbWl0IGNoYW5nZWQgc2lnbmFsXG4gICAgICAgICAgdGhpcy5jaGFuZ2VkJC5uZXh0KHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuaWQsXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5kYXRhU291cmNlLmdldFN0YXRlKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=