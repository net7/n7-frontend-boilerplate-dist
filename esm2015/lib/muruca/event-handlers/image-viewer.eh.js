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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBS3hDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRO29CQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDakMsTUFBTTtnQkFDUixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLGFBQWE7b0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFO3dCQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQ2hEO29CQUNELE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLFNBQVM7b0JBQ1QsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ2hDLEtBQUssRUFBRSxDQUNSLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNmLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1ySW1hZ2VWaWV3ZXJEUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcy9pbWFnZS12aWV3ZXIuZHMnO1xuXG5leHBvcnQgY2xhc3MgTXJJbWFnZVZpZXdlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgbGF5b3V0SWQ6IHN0cmluZztcblxuICBkYXRhU291cmNlOiBNckltYWdlVmlld2VyRFM7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNsaWNrYDpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LnBhZ2VjaGFuZ2VgOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdwYWdlY2hhbmdlJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmxpc3RlblRvVmlld2VyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC50aHVtYmNsaWNrJzpcbiAgICAgICAgICBpZiAocGF5bG9hZC50YXJnZXRJZCA9PT0gdGhpcy5kYXRhU291cmNlLmlkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2hhbmdlUGFnZShwYXlsb2FkLnRodW1iaW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LnBhZ2VjaGFuZ2UnOlxuICAgICAgICAgIC8vIFNpbGVudFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxpc3RlblRvVmlld2VyKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS52aWV3ZXJMb2FkZWQkLnBpcGUoXG4gICAgICBmaXJzdCgpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgeyB2aWV3ZXIgfSA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgICAgIHZpZXdlci5hZGRIYW5kbGVyKCdwYWdlJywgKGV2ZW50RGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnZWNoYW5nZScsIGV2ZW50RGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19