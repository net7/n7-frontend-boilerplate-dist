import { EventHandler } from '@n7-frontend/core';
export class AwMapEH extends EventHandler {
    listen() {
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'aw-map-layout.init':
                    this.listenToMarkers();
                    break;
                default:
                    break;
            }
        });
    }
    listenToMarkers() {
        this.dataSource.markerOpen$.subscribe((item) => {
            this.emitOuter('markeropen', item);
        });
        this.dataSource.markerClose$.subscribe(() => {
            this.emitOuter('markerclose');
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbWFwLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sT0FBUSxTQUFRLFlBQVk7SUFDaEMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ3ZDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssb0JBQW9CO29CQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd01hcEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1tYXAtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub01hcmtlcnMoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Ub01hcmtlcnMoKSB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UubWFya2VyT3BlbiQuc3Vic2NyaWJlKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdtYXJrZXJvcGVuJywgaXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UubWFya2VyQ2xvc2UkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdtYXJrZXJjbG9zZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==