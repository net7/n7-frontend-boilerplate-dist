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
            if (payload && typeof payload.source != 'undefined') {
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
            switch (type) {
                case 'aw-sidebar-header.click':
                    this.dataSource.toggleSidebar();
                    break;
                case 'aw-scheda-layout.selectItem':
                    this.dataSource.selectTreeItem(payload);
                    if (typeof this.dataSource.currentItem !== 'undefined') {
                        this.dataSource.updateTree(null, this.dataSource.currentItem.payload.parents, payload);
                    }
                    else {
                        console.warn('The object in the URL does not exist.');
                        // Maybe navigate to 404 here.
                    }
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    this.dataSource.parseData(payload);
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLFFBQVMsU0FBUSxZQUFZOzs7O0lBRWpDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsSUFBRyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxJQUFJLFdBQVcsRUFBQztnQkFDakQsUUFBUyxPQUFPLENBQUMsTUFBTSxFQUFHO29CQUN4QixLQUFLLFFBQVE7d0JBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBRSxDQUFDO3dCQUFDLE1BQU07b0JBQzlGLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBQyw0REFBNEQ7b0JBQ3BKLEtBQUssVUFBVTt3QkFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUM7d0JBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbkMsTUFBTTtpQkFDL0I7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQy9DLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQUMsTUFBTTtnQkFDdkUsS0FBSyw2QkFBNkI7b0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFFLE9BQU8sQ0FBRSxDQUFDO29CQUMxQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFO3dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQztxQkFDMUY7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO3dCQUNyRCw4QkFBOEI7cUJBQy9CO29CQUNELE1BQU07Z0JBQ1IsS0FBSyxxQ0FBcUM7b0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUFDLE1BQU07YUFDM0M7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGlmKHBheWxvYWQgJiYgdHlwZW9mIHBheWxvYWQuc291cmNlICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgc3dpdGNoICggcGF5bG9hZC5zb3VyY2UgKSB7XG4gICAgICAgICAgY2FzZSAndG9nZ2xlJzogICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVHJlZSggbnVsbCwgcGF5bG9hZC5wYXJlbnRzLCBwYXlsb2FkLmlkICk7IGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1RvZ2dsZU1lbnVJdGVtJzogdGhpcy5kYXRhU291cmNlLnVwZGF0ZVRyZWUoIG51bGwsIHBheWxvYWQucGFyZW50cywgcGF5bG9hZC5pZCApOyAvL25vIGJyZWFrLCBJIHdhbnQgdG8gZXhlY3V0ZSBhbHNvIHRoZSBmb2xsb3dpbmcgaW5zdHJ1Y3Rpb25cbiAgICAgICAgICBjYXNlICdtZW51SXRlbSc6ICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RUcmVlSXRlbSggcGF5bG9hZC5pZCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN3aXRjaCggdHlwZSApe1xuICAgICAgICAgIGNhc2UgJ2F3LXNpZGViYXItaGVhZGVyLmNsaWNrJzogdGhpcy5kYXRhU291cmNlLnRvZ2dsZVNpZGViYXIoKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5zZWxlY3RJdGVtJzpcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RUcmVlSXRlbSggcGF5bG9hZCApO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudEl0ZW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVUcmVlKCBudWxsLCB0aGlzLmRhdGFTb3VyY2UuY3VycmVudEl0ZW0ucGF5bG9hZC5wYXJlbnRzLCBwYXlsb2FkICk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgb2JqZWN0IGluIHRoZSBVUkwgZG9lcyBub3QgZXhpc3QuJylcbiAgICAgICAgICAgICAgLy8gTWF5YmUgbmF2aWdhdGUgdG8gNDA0IGhlcmUuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0Lm5hdmlnYXRpb25yZXNwb25zZSc6XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFyc2VEYXRhKHBheWxvYWQpOyBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59Il19