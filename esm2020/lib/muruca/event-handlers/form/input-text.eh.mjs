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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mb3JtL2lucHV0LXRleHQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS2pELE1BQU0sT0FBTyxhQUFjLFNBQVEsWUFBWTtJQUt0QyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ25DLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUM7b0JBQzFCLGdCQUFnQjtvQkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNwQyxzQkFBc0I7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNqQixFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7cUJBQ2xDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1ySW5wdXRUZXh0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZm9ybS9pbnB1dC10ZXh0LmRzJztcclxuaW1wb3J0IHsgTXJJbnB1dEV2ZW50SGFuZGxlciwgTXJDaGFuZ2VkUGFyYW1zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJbnB1dFRleHRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIE1ySW5wdXRFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBjaGFuZ2VkJDogU3ViamVjdDxNckNoYW5nZWRQYXJhbXM+O1xyXG5cclxuICBwdWJsaWMgZGF0YVNvdXJjZTogTXJJbnB1dFRleHREUztcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNoYW5nZWA6IHtcclxuICAgICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHBheWxvYWQ7XHJcbiAgICAgICAgICAvLyBzZXQgbmV3IHZhbHVlXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcclxuICAgICAgICAgIC8vIGVtaXQgY2hhbmdlZCBzaWduYWxcclxuICAgICAgICAgIHRoaXMuY2hhbmdlZCQubmV4dCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuaWQsXHJcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0U3RhdGUoKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19