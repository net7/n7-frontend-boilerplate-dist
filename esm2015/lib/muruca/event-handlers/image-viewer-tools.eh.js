import { EventHandler } from '@n7-frontend/core';
export class MrImageViewerToolsEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case `${this.dataSource.id}.click`:
                    if (payload.thumbindex !== undefined) {
                        const index = payload.thumbindex;
                        this.dataSource.handleThumbs(index);
                        this.emitOuter('thumbclick', index);
                        break;
                    }
                    if (payload === 'close-description') {
                        this.dataSource.toggleDescription();
                        break;
                    }
                    if (payload === 'toggle-description') {
                        this.dataSource.toggleDescription();
                        break;
                    }
                    if (payload === 'toggle-thumbs') {
                        this.dataSource.toggleThumbs();
                        break;
                    }
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-resource-layout.init':
                case 'mr-resource-layout.thumbclick':
                    // Silent
                    break;
                case 'mr-resource-layout.pagechange':
                    if (payload.targetId === this.dataSource.id) {
                        this.dataSource.handlePageChange(payload.eventData);
                    }
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXItdG9vbHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxZQUFZO0lBRzdDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRO29CQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO3dCQUNwQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO3dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3BDLE1BQU07cUJBQ1A7b0JBQ0QsSUFBSSxPQUFPLEtBQUssbUJBQW1CLEVBQUU7d0JBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDcEMsTUFBTTtxQkFDUDtvQkFDRCxJQUFJLE9BQU8sS0FBSyxvQkFBb0IsRUFBRTt3QkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUNwQyxNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLGVBQWUsRUFBRTt3QkFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDL0IsTUFBTTtxQkFDUDtvQkFDRCxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUIsQ0FBQztnQkFDL0IsS0FBSywrQkFBK0I7b0JBQ2xDLFNBQVM7b0JBQ1QsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFO3dCQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFDckQ7b0JBQ0QsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBNckltYWdlVmlld2VyVG9vbHNEUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcy9pbWFnZS12aWV3ZXItdG9vbHMuZHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW1hZ2VWaWV3ZXJUb29sc0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBkYXRhU291cmNlOiBNckltYWdlVmlld2VyVG9vbHNEUztcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNsaWNrYDpcclxuICAgICAgICAgIGlmIChwYXlsb2FkLnRodW1iaW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBheWxvYWQudGh1bWJpbmRleDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVRodW1icyhpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0aHVtYmNsaWNrJywgaW5kZXgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAnY2xvc2UtZGVzY3JpcHRpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVEZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAndG9nZ2xlLWRlc2NyaXB0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlRGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ3RvZ2dsZS10aHVtYnMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVUaHVtYnMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC50aHVtYmNsaWNrJzpcclxuICAgICAgICAgIC8vIFNpbGVudFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LnBhZ2VjaGFuZ2UnOlxyXG4gICAgICAgICAgaWYgKHBheWxvYWQudGFyZ2V0SWQgPT09IHRoaXMuZGF0YVNvdXJjZS5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZUNoYW5nZShwYXlsb2FkLmV2ZW50RGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=