import { EventHandler } from '@n7-frontend/core';
import { first } from 'rxjs/operators';
export class AwTimelineEH extends EventHandler {
    listen() {
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'aw-timeline-layout.init':
                    this.listenToTimeline();
                    break;
                case 'aw-timeline-layout.zoomout':
                    this.dataSource.timeline.zoomOut(0.7);
                    break;
                case 'aw-timeline-layout.zoomin':
                    this.dataSource.timeline.zoomIn(0.7);
                    break;
                default:
                    break;
            }
        });
    }
    listenToTimeline() {
        this.dataSource.timelineLoaded$
            .pipe(first())
            .subscribe(() => {
            const { timeline, dataSet } = this.dataSource;
            timeline.on('click', ({ item }) => {
                const clicked = dataSet.find(({ id }) => item === id);
                if (clicked) {
                    const { dateText } = clicked._meta;
                    const { id, label } = clicked.item;
                    this.emitOuter('click', {
                        id,
                        label,
                        dateText,
                    });
                }
                else {
                    this.emitOuter('click', {
                        id: null
                    });
                }
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZWguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90aW1lbGluZS5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE1BQU0sT0FBTyxZQUFhLFNBQVEsWUFBWTtJQUNyQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDdkMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUN4QixNQUFNO2dCQUVSLEtBQUssNEJBQTRCO29CQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLE1BQU07Z0JBRVIsS0FBSywyQkFBMkI7b0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDckMsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlO2FBQzVCLElBQUksQ0FDSCxLQUFLLEVBQUUsQ0FDUjthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Z0JBQ2hDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3RELElBQUksT0FBTyxFQUFFO29CQUNYLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNuQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO3dCQUN0QixFQUFFO3dCQUNGLEtBQUs7d0JBQ0wsUUFBUTtxQkFDVCxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3RCLEVBQUUsRUFBRSxJQUFJO3FCQUNULENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3VGltZWxpbmVFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctdGltZWxpbmUtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub1RpbWVsaW5lKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYXctdGltZWxpbmUtbGF5b3V0Lnpvb21vdXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpbWVsaW5lLnpvb21PdXQoMC43KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdhdy10aW1lbGluZS1sYXlvdXQuem9vbWluJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aW1lbGluZS56b29tSW4oMC43KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Ub1RpbWVsaW5lKCkge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnRpbWVsaW5lTG9hZGVkJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaXJzdCgpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0aW1lbGluZSwgZGF0YVNldCB9ID0gdGhpcy5kYXRhU291cmNlO1xyXG4gICAgICAgIHRpbWVsaW5lLm9uKCdjbGljaycsICh7IGl0ZW0gfSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2xpY2tlZCA9IGRhdGFTZXQuZmluZCgoeyBpZCB9KSA9PiBpdGVtID09PSBpZCk7XHJcbiAgICAgICAgICBpZiAoY2xpY2tlZCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGVUZXh0IH0gPSBjbGlja2VkLl9tZXRhO1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkLCBsYWJlbCB9ID0gY2xpY2tlZC5pdGVtO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCB7XHJcbiAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgICAgZGF0ZVRleHQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywge1xyXG4gICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19