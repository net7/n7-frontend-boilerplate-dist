/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwTreeEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            if (payload && typeof payload.source != "undefined") {
                switch (payload.source) {
                    case 'toggle':
                        this.dataSource.updateTree(null, payload.parents, payload.id);
                        break;
                    case 'ToggleMenuItem': this.dataSource.updateTree(null, payload.parents, payload.id); //no break, I want to execute also the following instruction
                    case 'menuItem':
                        this.dataSource.selectTreeItem(payload.id);
                        this.emitOuter('click', payload.id);
                        break;
                }
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            if (type == 'aw-sidebar-header.click') {
                this.dataSource.toggleSidebar();
            }
            else if (type == 'aw-scheda-layout.selectItem') {
                this.dataSource.selectTreeItem(payload);
                this.dataSource.updateTree(null, this.dataSource.currentItem.payload.parents, payload);
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLFFBQVMsU0FBUSxZQUFZOzs7O0lBRWpDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsSUFBRyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxJQUFJLFdBQVcsRUFBQztnQkFFakQsUUFBUyxPQUFPLENBQUMsTUFBTSxFQUFHO29CQUN4QixLQUFLLFFBQVE7d0JBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBRSxDQUFDO3dCQUFDLE1BQU07b0JBQzlGLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBQyw0REFBNEQ7b0JBQ3BKLEtBQUssVUFBVTt3QkFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUM7d0JBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbkMsTUFBTTtpQkFDL0I7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQy9DLElBQUksSUFBSSxJQUFJLHlCQUF5QixFQUFDO2dCQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ2pDO2lCQUNJLElBQUksSUFBSSxJQUFJLDZCQUE2QixFQUFDO2dCQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBRSxPQUFPLENBQUUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFFLENBQUM7YUFDMUY7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHsgICBcbiAgICAgIGlmKHBheWxvYWQgJiYgdHlwZW9mIHBheWxvYWQuc291cmNlICE9IFwidW5kZWZpbmVkXCIpe1xuXG4gICAgICAgIHN3aXRjaCAoIHBheWxvYWQuc291cmNlICkge1xuICAgICAgICAgIGNhc2UgJ3RvZ2dsZSc6ICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVRyZWUoIG51bGwsIHBheWxvYWQucGFyZW50cywgcGF5bG9hZC5pZCApOyBicmVhaztcbiAgICAgICAgICBjYXNlICdUb2dnbGVNZW51SXRlbSc6IHRoaXMuZGF0YVNvdXJjZS51cGRhdGVUcmVlKCBudWxsLCBwYXlsb2FkLnBhcmVudHMsIHBheWxvYWQuaWQgKTsgLy9ubyBicmVhaywgSSB3YW50IHRvIGV4ZWN1dGUgYWxzbyB0aGUgZm9sbG93aW5nIGluc3RydWN0aW9uXG4gICAgICAgICAgY2FzZSAnbWVudUl0ZW0nOiAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0VHJlZUl0ZW0oIHBheWxvYWQuaWQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQuaWQpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHsgICBcbiAgICAgICAgaWYoIHR5cGUgPT0gJ2F3LXNpZGViYXItaGVhZGVyLmNsaWNrJyl7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlU2lkZWJhcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCB0eXBlID09ICdhdy1zY2hlZGEtbGF5b3V0LnNlbGVjdEl0ZW0nKXtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RUcmVlSXRlbSggcGF5bG9hZCApO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVRyZWUoIG51bGwsIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SXRlbS5wYXlsb2FkLnBhcmVudHMsIHBheWxvYWQgKTtcbiAgICAgICAgICB9XG4gICAgICB9KTsgXG4gIH1cblxufSJdfQ==