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
                    if (payload === 'next') {
                        // let index = this.dataSource.retrieveIndex();
                        // this.dataSource.handleThumbsNext(index);
                        // let updatedIndex = this.dataSource.retrieveIndex();
                        // this.emitOuter('thumbclick', updatedIndex);
                        this.dataSource.scrollRight();
                        break;
                    }
                    if (payload === 'prev') {
                        // let index = this.dataSource.retrieveIndex();
                        // this.dataSource.handleThumbsPrev(index);
                        // let updatedIndex = this.dataSource.retrieveIndex();
                        // this.emitOuter('thumbclick', updatedIndex);
                        this.dataSource.scrollLeft();
                        break;
                    }
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            // console.log(payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXItdG9vbHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxZQUFZO0lBRzdDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRO29CQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO3dCQUNwQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO3dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3BDLE1BQU07cUJBQ1A7b0JBQ0QsSUFBSSxPQUFPLEtBQUssbUJBQW1CLEVBQUU7d0JBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDcEMsTUFBTTtxQkFDUDtvQkFDRCxJQUFJLE9BQU8sS0FBSyxvQkFBb0IsRUFBRTt3QkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUNwQyxNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLGVBQWUsRUFBRTt3QkFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDL0IsTUFBTTtxQkFDUDtvQkFDRCxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7d0JBQ3RCLCtDQUErQzt3QkFDL0MsMkNBQTJDO3dCQUMzQyxzREFBc0Q7d0JBQ3RELDhDQUE4Qzt3QkFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDOUIsTUFBTTtxQkFDUDtvQkFDRCxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7d0JBQ3RCLCtDQUErQzt3QkFDL0MsMkNBQTJDO3dCQUMzQyxzREFBc0Q7d0JBQ3RELDhDQUE4Qzt3QkFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDN0IsTUFBTTtxQkFDUDtvQkFDRCxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsd0JBQXdCO1lBQ3hCLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCLENBQUM7Z0JBQy9CLEtBQUssK0JBQStCO29CQUNsQyxTQUFTO29CQUNULE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRTt3QkFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQ3JEO29CQUNELE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE1ySW1hZ2VWaWV3ZXJUb29sc0RTIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2VzL2ltYWdlLXZpZXdlci10b29scy5kcyc7XG5cbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyVG9vbHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIGRhdGFTb3VyY2U6IE1ySW1hZ2VWaWV3ZXJUb29sc0RTO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jbGlja2A6XG4gICAgICAgICAgaWYgKHBheWxvYWQudGh1bWJpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBheWxvYWQudGh1bWJpbmRleDtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVUaHVtYnMoaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3RodW1iY2xpY2snLCBpbmRleCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09ICdjbG9zZS1kZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVEZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAndG9nZ2xlLWRlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZURlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09ICd0b2dnbGUtdGh1bWJzJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVRodW1icygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgIC8vIGxldCBpbmRleCA9IHRoaXMuZGF0YVNvdXJjZS5yZXRyaWV2ZUluZGV4KCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlVGh1bWJzTmV4dChpbmRleCk7XG4gICAgICAgICAgICAvLyBsZXQgdXBkYXRlZEluZGV4ID0gdGhpcy5kYXRhU291cmNlLnJldHJpZXZlSW5kZXgoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZW1pdE91dGVyKCd0aHVtYmNsaWNrJywgdXBkYXRlZEluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zY3JvbGxSaWdodCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAncHJldicpIHtcbiAgICAgICAgICAgIC8vIGxldCBpbmRleCA9IHRoaXMuZGF0YVNvdXJjZS5yZXRyaWV2ZUluZGV4KCk7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlVGh1bWJzUHJldihpbmRleCk7XG4gICAgICAgICAgICAvLyBsZXQgdXBkYXRlZEluZGV4ID0gdGhpcy5kYXRhU291cmNlLnJldHJpZXZlSW5kZXgoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZW1pdE91dGVyKCd0aHVtYmNsaWNrJywgdXBkYXRlZEluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zY3JvbGxMZWZ0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2cocGF5bG9hZCk7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LmluaXQnOlxuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQudGh1bWJjbGljayc6XG4gICAgICAgICAgLy8gU2lsZW50XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC5wYWdlY2hhbmdlJzpcbiAgICAgICAgICBpZiAocGF5bG9hZC50YXJnZXRJZCA9PT0gdGhpcy5kYXRhU291cmNlLmlkKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZUNoYW5nZShwYXlsb2FkLmV2ZW50RGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19