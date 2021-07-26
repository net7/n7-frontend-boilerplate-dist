import { EventHandler } from '@n7-frontend/core';
import { first } from 'rxjs/operators';
export class MrImageViewerEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.click`:
                    this.emitOuter('click', payload);
                    break;
                case `${this.dataSource.id}.pagechange`:
                    this.emitOuter('pagechange', payload);
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-resource-layout.init':
                    this.listenToViewer();
                    break;
                case 'mr-resource-layout.thumbclick':
                    if (payload.targetId === this.dataSource.id) {
                        this.dataSource.changePage(payload.thumbindex);
                    }
                    break;
                case 'mr-resource-layout.pagechange':
                    // Silent
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
    }
    listenToViewer() {
        this.dataSource.viewerLoaded$.pipe(first()).subscribe(() => {
            const { viewer } = this.dataSource;
            viewer.addHandler('page', (eventData) => {
                this.emitOuter('pagechange', eventData);
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBS3hDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRO29CQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDakMsTUFBTTtnQkFDUixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLGFBQWE7b0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFO3dCQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQ2hEO29CQUNELE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLFNBQVM7b0JBQ1QsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ2hDLEtBQUssRUFBRSxDQUNSLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNmLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNckltYWdlVmlld2VyRFMgfSBmcm9tICcuLi9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIGxheW91dElkOiBzdHJpbmc7XHJcblxyXG4gIGRhdGFTb3VyY2U6IE1ySW1hZ2VWaWV3ZXJEUztcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNsaWNrYDpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LnBhZ2VjaGFuZ2VgOlxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2VjaGFuZ2UnLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLmxpc3RlblRvVmlld2VyKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQudGh1bWJjbGljayc6XHJcbiAgICAgICAgICBpZiAocGF5bG9hZC50YXJnZXRJZCA9PT0gdGhpcy5kYXRhU291cmNlLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGFuZ2VQYWdlKHBheWxvYWQudGh1bWJpbmRleCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQucGFnZWNoYW5nZSc6XHJcbiAgICAgICAgICAvLyBTaWxlbnRcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5Ub1ZpZXdlcigpIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS52aWV3ZXJMb2FkZWQkLnBpcGUoXHJcbiAgICAgIGZpcnN0KClcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgeyB2aWV3ZXIgfSA9IHRoaXMuZGF0YVNvdXJjZTtcclxuICAgICAgdmlld2VyLmFkZEhhbmRsZXIoJ3BhZ2UnLCAoZXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2VjaGFuZ2UnLCBldmVudERhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=