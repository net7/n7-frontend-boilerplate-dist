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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guZWguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS9pbnB1dC1jaGVja2JveC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFlBQVk7SUFLMUMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNuQyxlQUFlO29CQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxzQkFBc0I7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNqQixFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7cUJBQ2xDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1ySW5wdXRDaGVja2JveERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtY2hlY2tib3guZHMnO1xyXG5pbXBvcnQgeyBNcklucHV0RXZlbnRIYW5kbGVyLCBNckNoYW5nZWRQYXJhbXMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0uaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNcklucHV0Q2hlY2tib3hFSCBleHRlbmRzIEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIE1ySW5wdXRFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBjaGFuZ2VkJDogU3ViamVjdDxNckNoYW5nZWRQYXJhbXM+O1xyXG5cclxuICBwdWJsaWMgZGF0YVNvdXJjZTogTXJJbnB1dENoZWNrYm94RFM7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jaGFuZ2VgOiB7XHJcbiAgICAgICAgICAvLyB1cGRhdGUgdmFsdWVcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVWYWx1ZShwYXlsb2FkKTtcclxuICAgICAgICAgIC8vIGVtaXQgY2hhbmdlZCBzaWduYWxcclxuICAgICAgICAgIHRoaXMuY2hhbmdlZCQubmV4dCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuaWQsXHJcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0U3RhdGUoKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19