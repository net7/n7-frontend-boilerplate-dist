import { EventHandler } from '@n7-frontend/core';
import { first } from 'rxjs/operators';
export class SbImageViewerEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer.click':
                    this.emitOuter('click', payload);
                    break;
                case 'sb-image-viewer.pagechange':
                    this.emitOuter('pagechange', payload);
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer-layout.init':
                    this.listenToViewer();
                    break;
                case 'sb-image-viewer-layout.thumbclick':
                    this.dataSource.changePage(payload);
                    break;
                case 'sb-image-viewer-layout.pagechange':
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvc2FuZGJveC9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBQ3hDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNqQyxNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssNkJBQTZCO29CQUNoQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1IsS0FBSyxtQ0FBbUM7b0JBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLEtBQUssbUNBQW1DO29CQUN0QyxTQUFTO29CQUNULE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNoQyxLQUFLLEVBQUUsQ0FDUixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTYkltYWdlVmlld2VyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci5jbGljayc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci5wYWdlY2hhbmdlJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdwYWdlY2hhbmdlJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMubGlzdGVuVG9WaWV3ZXIoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQudGh1bWJjbGljayc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2hhbmdlUGFnZShwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQucGFnZWNoYW5nZSc6XHJcbiAgICAgICAgICAvLyBTaWxlbnRcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5Ub1ZpZXdlcigpIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS52aWV3ZXJMb2FkZWQkLnBpcGUoXHJcbiAgICAgIGZpcnN0KClcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgeyB2aWV3ZXIgfSA9IHRoaXMuZGF0YVNvdXJjZTtcclxuICAgICAgdmlld2VyLmFkZEhhbmRsZXIoJ3BhZ2UnLCAoZXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2VjaGFuZ2UnLCBldmVudERhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=