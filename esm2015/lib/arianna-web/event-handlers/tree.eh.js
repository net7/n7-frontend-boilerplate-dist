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
                    this.dataSource.updateTree(null, this.dataSource.currentItem.payload.parents, payload);
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    this.dataSource.parseData(payload);
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLFFBQVMsU0FBUSxZQUFZOzs7O0lBRWpDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsSUFBRyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxJQUFJLFdBQVcsRUFBQztnQkFDakQsUUFBUyxPQUFPLENBQUMsTUFBTSxFQUFHO29CQUN4QixLQUFLLFFBQVE7d0JBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBRSxDQUFDO3dCQUFDLE1BQU07b0JBQzlGLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBQyw0REFBNEQ7b0JBQ3BKLEtBQUssVUFBVTt3QkFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUM7d0JBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbkMsTUFBTTtpQkFDL0I7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQy9DLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQUMsTUFBTTtnQkFDdkUsS0FBSyw2QkFBNkI7b0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFFLE9BQU8sQ0FBRSxDQUFDO29CQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQztvQkFBQyxNQUFNO2dCQUNsRyxLQUFLLHFDQUFxQztvQkFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQUMsTUFBTTthQUMzQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgaWYocGF5bG9hZCAmJiB0eXBlb2YgcGF5bG9hZC5zb3VyY2UgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBzd2l0Y2ggKCBwYXlsb2FkLnNvdXJjZSApIHtcbiAgICAgICAgICBjYXNlICd0b2dnbGUnOiAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVUcmVlKCBudWxsLCBwYXlsb2FkLnBhcmVudHMsIHBheWxvYWQuaWQgKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnVG9nZ2xlTWVudUl0ZW0nOiB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVHJlZSggbnVsbCwgcGF5bG9hZC5wYXJlbnRzLCBwYXlsb2FkLmlkICk7IC8vbm8gYnJlYWssIEkgd2FudCB0byBleGVjdXRlIGFsc28gdGhlIGZvbGxvd2luZyBpbnN0cnVjdGlvblxuICAgICAgICAgIGNhc2UgJ21lbnVJdGVtJzogICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdFRyZWVJdGVtKCBwYXlsb2FkLmlkICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgc3dpdGNoKCB0eXBlICl7XG4gICAgICAgICAgY2FzZSAnYXctc2lkZWJhci1oZWFkZXIuY2xpY2snOiB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlU2lkZWJhcigpOyBicmVhaztcbiAgICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnNlbGVjdEl0ZW0nOlxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdFRyZWVJdGVtKCBwYXlsb2FkICk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVHJlZSggbnVsbCwgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJdGVtLnBheWxvYWQucGFyZW50cywgcGF5bG9hZCApOyBicmVhaztcbiAgICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0Lm5hdmlnYXRpb25yZXNwb25zZSc6XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFyc2VEYXRhKHBheWxvYWQpOyBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59Il19