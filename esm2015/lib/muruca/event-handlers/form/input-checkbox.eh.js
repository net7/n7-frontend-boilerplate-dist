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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL2Zvcm0vaW5wdXQtY2hlY2tib3guZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS2pELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxZQUFZO0lBSzFDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDbkMsZUFBZTtvQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckMsc0JBQXNCO29CQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDakIsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO3FCQUNsQyxDQUFDLENBQUM7b0JBQ0gsTUFBTTtpQkFDUDtnQkFDRDtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1ySW5wdXRDaGVja2JveERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtY2hlY2tib3guZHMnO1xuaW1wb3J0IHsgTXJJbnB1dEV2ZW50SGFuZGxlciwgTXJDaGFuZ2VkUGFyYW1zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBNcklucHV0Q2hlY2tib3hFSCBleHRlbmRzIEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIE1ySW5wdXRFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgY2hhbmdlZCQ6IFN1YmplY3Q8TXJDaGFuZ2VkUGFyYW1zPjtcblxuICBwdWJsaWMgZGF0YVNvdXJjZTogTXJJbnB1dENoZWNrYm94RFM7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNoYW5nZWA6IHtcbiAgICAgICAgICAvLyB1cGRhdGUgdmFsdWVcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlVmFsdWUocGF5bG9hZCk7XG4gICAgICAgICAgLy8gZW1pdCBjaGFuZ2VkIHNpZ25hbFxuICAgICAgICAgIHRoaXMuY2hhbmdlZCQubmV4dCh7XG4gICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHRoaXMuZGF0YVNvdXJjZS5nZXRTdGF0ZSgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19