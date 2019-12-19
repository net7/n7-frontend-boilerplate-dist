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
            switch (payload.source) {
                case 'toggle':
                    this.dataSource.build(payload.id);
                    break;
                case 'menuitem':
                    this.dataSource.setActive(payload.id);
                    this.dataSource.highlightActive();
                    this.emitOuter('click', payload.id);
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-sidebar-header.click':
                    this.dataSource.toggleSidebar();
                    break;
                case 'aw-scheda-layout.selectItem':
                    this.dataSource.build(payload);
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    if (payload.currentItem) {
                        this.dataSource.setActive(payload.currentItem);
                    }
                    /** @type {?} */
                    const currentId = payload.currentItem || payload.tree.id;
                    this.dataSource.load(payload);
                    this.dataSource.build(currentId);
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLFFBQVMsU0FBUSxZQUFZOzs7O0lBRWpDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUN0QixLQUFLLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2dCQUNSLEtBQUssVUFBVTtvQkFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDcEMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMvQyxRQUFTLElBQUksRUFBRztnQkFDZCxLQUFLLHlCQUF5QjtvQkFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDaEMsTUFBTTtnQkFDUixLQUFLLDZCQUE2QjtvQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1IsS0FBSyxxQ0FBcUM7b0JBQ3hDLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUNoRDs7MEJBQ0ssU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2pDLE1BQU07YUFDUDtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoIChwYXlsb2FkLnNvdXJjZSkge1xuICAgICAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkLmlkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudWl0ZW0nOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRBY3RpdmUocGF5bG9hZC5pZCk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhpZ2hsaWdodEFjdGl2ZSgpO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQuaWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgc3dpdGNoICggdHlwZSApIHtcbiAgICAgICAgICBjYXNlICdhdy1zaWRlYmFyLWhlYWRlci5jbGljayc6XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlU2lkZWJhcigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5zZWxlY3RJdGVtJzpcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5idWlsZChwYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQubmF2aWdhdGlvbnJlc3BvbnNlJzpcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmN1cnJlbnRJdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRBY3RpdmUocGF5bG9hZC5jdXJyZW50SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SWQgPSBwYXlsb2FkLmN1cnJlbnRJdGVtIHx8IHBheWxvYWQudHJlZS5pZDtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkKHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKGN1cnJlbnRJZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59Il19