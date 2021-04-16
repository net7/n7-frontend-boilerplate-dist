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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL3NhbmRib3gvZXZlbnQtaGFuZGxlcnMvaW1hZ2Utdmlld2VyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsWUFBWTtJQUN4QyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDakMsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDZCQUE2QjtvQkFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNO2dCQUNSLEtBQUssbUNBQW1DO29CQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUixLQUFLLG1DQUFtQztvQkFDdEMsU0FBUztvQkFDVCxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDaEMsS0FBSyxFQUFFLENBQ1IsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2JJbWFnZVZpZXdlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdzYi1pbWFnZS12aWV3ZXIuY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzYi1pbWFnZS12aWV3ZXIucGFnZWNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnZWNoYW5nZScsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLmxpc3RlblRvVmlld2VyKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzYi1pbWFnZS12aWV3ZXItbGF5b3V0LnRodW1iY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNoYW5nZVBhZ2UocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzYi1pbWFnZS12aWV3ZXItbGF5b3V0LnBhZ2VjaGFuZ2UnOlxyXG4gICAgICAgICAgLy8gU2lsZW50XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuVG9WaWV3ZXIoKSB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2Uudmlld2VyTG9hZGVkJC5waXBlKFxyXG4gICAgICBmaXJzdCgpXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdmlld2VyIH0gPSB0aGlzLmRhdGFTb3VyY2U7XHJcbiAgICAgIHZpZXdlci5hZGRIYW5kbGVyKCdwYWdlJywgKGV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdwYWdlY2hhbmdlJywgZXZlbnREYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19