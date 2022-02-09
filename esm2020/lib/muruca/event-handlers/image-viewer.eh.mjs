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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL2ltYWdlLXZpZXdlci5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDLE1BQU0sT0FBTyxlQUFnQixTQUFRLFlBQVk7SUFLeEMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVE7b0JBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNqQyxNQUFNO2dCQUNSLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtvQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUU7d0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDaEQ7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsU0FBUztvQkFDVCxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDaEMsS0FBSyxFQUFFLENBQ1IsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1ySW1hZ2VWaWV3ZXJEUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcy9pbWFnZS12aWV3ZXIuZHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW1hZ2VWaWV3ZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgbGF5b3V0SWQ6IHN0cmluZztcclxuXHJcbiAgZGF0YVNvdXJjZTogTXJJbWFnZVZpZXdlckRTO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0uY2xpY2tgOlxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0ucGFnZWNoYW5nZWA6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnZWNoYW5nZScsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMubGlzdGVuVG9WaWV3ZXIoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC50aHVtYmNsaWNrJzpcclxuICAgICAgICAgIGlmIChwYXlsb2FkLnRhcmdldElkID09PSB0aGlzLmRhdGFTb3VyY2UuaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNoYW5nZVBhZ2UocGF5bG9hZC50aHVtYmluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC5wYWdlY2hhbmdlJzpcclxuICAgICAgICAgIC8vIFNpbGVudFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxpc3RlblRvVmlld2VyKCkge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnZpZXdlckxvYWRlZCQucGlwZShcclxuICAgICAgZmlyc3QoKVxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHZpZXdlciB9ID0gdGhpcy5kYXRhU291cmNlO1xyXG4gICAgICB2aWV3ZXIuYWRkSGFuZGxlcigncGFnZScsIChldmVudERhdGEpID0+IHtcclxuICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnZWNoYW5nZScsIGV2ZW50RGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==