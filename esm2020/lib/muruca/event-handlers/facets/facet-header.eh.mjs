import { EventHandler } from '@n7-frontend/core';
export class FacetHeaderEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type }) => {
            switch (type) {
                case `${this.dataSource.id}.click`:
                    this.dataSource.toggle();
                    this.emitOuter('change', {
                        isOpen: this.dataSource.isOpen(),
                        id: this.dataSource.id,
                        value: this.dataSource.value
                    });
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1oZWFkZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxhQUFjLFNBQVEsWUFBWTtJQUN0QyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDdkMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTt3QkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO3dCQUNoQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLO3FCQUM3QixDQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldEhlYWRlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0uY2xpY2tgOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgaXNPcGVuOiB0aGlzLmRhdGFTb3VyY2UuaXNPcGVuKCksXHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuaWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmRhdGFTb3VyY2UudmFsdWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19