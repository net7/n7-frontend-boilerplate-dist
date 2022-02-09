import { EventHandler } from '@n7-frontend/core';
export class AwGalleryResultsEH extends EventHandler {
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-gallery-results.change':
                    this.emitOuter('change', +payload.value);
                    break;
                case 'aw-gallery-results.click':
                    if (typeof payload === 'string') { // click on pagination
                        if (payload.startsWith('page')) {
                            // pagination routing is handled by the parent layout
                            this.emitOuter('pagination', payload);
                        }
                        else if (payload.startsWith('goto')) {
                            const targetPage = +payload.replace('goto-', '');
                            // kill impossible page navigations
                            if (targetPage > this.dataSource.totalPages)
                                return;
                            if (targetPage < 1 || targetPage === this.dataSource.currentPage)
                                return;
                            this.emitOuter('goto', payload);
                        }
                    }
                    else { // click on a linked object
                        this.emitOuter('click', payload);
                    }
                    break;
                default:
                    console.warn('(gallery-results) unhandled inner event of type', type);
                    break;
            }
        });
        // this.outerEvents$.subscribe(({ type, payload }) => {
        // });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvZ2FsbGVyeS1yZXN1bHRzLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsWUFBWTtJQUMzQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssMkJBQTJCO29CQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsTUFBTTtnQkFDUixLQUFLLDBCQUEwQjtvQkFDN0IsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUUsRUFBRSxzQkFBc0I7d0JBQ3ZELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs0QkFDOUIscURBQXFEOzRCQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFDdkM7NkJBQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUNyQyxNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDOzRCQUNqRCxtQ0FBbUM7NEJBQ25DLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtnQ0FBRSxPQUFPOzRCQUNwRCxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztnQ0FBRSxPQUFPOzRCQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFDakM7cUJBQ0Y7eUJBQU0sRUFBRSwyQkFBMkI7d0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsaURBQWlELEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3RFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsdURBQXVEO1FBQ3ZELE1BQU07SUFDUixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5UmVzdWx0c0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1nYWxsZXJ5LXJlc3VsdHMuY2hhbmdlJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCArcGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1nYWxsZXJ5LXJlc3VsdHMuY2xpY2snOlxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkID09PSAnc3RyaW5nJykgeyAvLyBjbGljayBvbiBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ3BhZ2UnKSkge1xyXG4gICAgICAgICAgICAgIC8vIHBhZ2luYXRpb24gcm91dGluZyBpcyBoYW5kbGVkIGJ5IHRoZSBwYXJlbnQgbGF5b3V0XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2luYXRpb24nLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ2dvdG8nKSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBhZ2UgPSArcGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKTtcclxuICAgICAgICAgICAgICAvLyBraWxsIGltcG9zc2libGUgcGFnZSBuYXZpZ2F0aW9uc1xyXG4gICAgICAgICAgICAgIGlmICh0YXJnZXRQYWdlID4gdGhpcy5kYXRhU291cmNlLnRvdGFsUGFnZXMpIHJldHVybjtcclxuICAgICAgICAgICAgICBpZiAodGFyZ2V0UGFnZSA8IDEgfHwgdGFyZ2V0UGFnZSA9PT0gdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2dvdG8nLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHsgLy8gY2xpY2sgb24gYSBsaW5rZWQgb2JqZWN0XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybignKGdhbGxlcnktcmVzdWx0cykgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=