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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL2Zvcm0vaW5wdXQtY2hlY2tib3guZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS2pELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxZQUFZO0lBSzFDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDbkMsZUFBZTtvQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckMsc0JBQXNCO29CQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDakIsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO3FCQUNsQyxDQUFDLENBQUM7b0JBQ0gsTUFBTTtpQkFDUDtnQkFDRDtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNcklucHV0Q2hlY2tib3hEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mb3JtL2lucHV0LWNoZWNrYm94LmRzJztcclxuaW1wb3J0IHsgTXJJbnB1dEV2ZW50SGFuZGxlciwgTXJDaGFuZ2VkUGFyYW1zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJbnB1dENoZWNrYm94RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBNcklucHV0RXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgY2hhbmdlZCQ6IFN1YmplY3Q8TXJDaGFuZ2VkUGFyYW1zPjtcclxuXHJcbiAgcHVibGljIGRhdGFTb3VyY2U6IE1ySW5wdXRDaGVja2JveERTO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0uY2hhbmdlYDoge1xyXG4gICAgICAgICAgLy8gdXBkYXRlIHZhbHVlXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlVmFsdWUocGF5bG9hZCk7XHJcbiAgICAgICAgICAvLyBlbWl0IGNoYW5nZWQgc2lnbmFsXHJcbiAgICAgICAgICB0aGlzLmNoYW5nZWQkLm5leHQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5kYXRhU291cmNlLmdldFN0YXRlKClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==