/* eslint-disable */
import { EventHandler } from '@n7-frontend/core';
export class SbImageViewerLayoutEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer-layout.init':
                    this.dataSource.onInit(payload);
                    this.emitOuter('init');
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'sb-image-viewer-tools.click':
                    // Silent
                    break;
                case 'sb-image-viewer.pagechange':
                    this.emitOuter('pagechange', payload);
                    break;
                case 'sb-image-viewer-tools.thumbclick':
                    this.emitOuter('thumbclick', payload);
                    break;
                case 'sb-image-viewer.click':
                    this.emitOuter('viewerclick', payload);
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9zYW5kYm94L2xheW91dC9pbWFnZS12aWV3ZXItbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsWUFBWTtJQUM5QyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssNkJBQTZCO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkIsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssNkJBQTZCO29CQUNoQyxTQUFTO29CQUNULE1BQU07Z0JBQ1IsS0FBSyw0QkFBNEI7b0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2dCQUNSLEtBQUssa0NBQWtDO29CQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTYkltYWdlVmlld2VyTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2luaXQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdzYi1pbWFnZS12aWV3ZXItdG9vbHMuY2xpY2snOlxyXG4gICAgICAgICAgLy8gU2lsZW50XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzYi1pbWFnZS12aWV3ZXIucGFnZWNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnZWNoYW5nZScsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLXRvb2xzLnRodW1iY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3RodW1iY2xpY2snLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci5jbGljayc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndmlld2VyY2xpY2snLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==