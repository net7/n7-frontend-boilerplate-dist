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
                        this.dataSource.updateTree(null, this.dataSource.currentItem.payload.toggle.parents, payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLFFBQVMsU0FBUSxZQUFZOzs7O0lBRWpDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsSUFBRyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxJQUFJLFdBQVcsRUFBQztnQkFDakQsUUFBUyxPQUFPLENBQUMsTUFBTSxFQUFHO29CQUN4QixLQUFLLFFBQVE7d0JBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBRSxDQUFDO3dCQUFDLE1BQU07b0JBQzlGLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBQyw0REFBNEQ7b0JBQ3BKLEtBQUssVUFBVTt3QkFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUM7d0JBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbkMsTUFBTTtpQkFDL0I7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQy9DLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQUMsTUFBTTtnQkFDdkUsS0FBSyw2QkFBNkI7b0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFFLE9BQU8sQ0FBRSxDQUFDO29CQUMxQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFO3dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFFLENBQUM7cUJBQ2pHO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQTt3QkFDckQsOEJBQThCO3FCQUMvQjtvQkFDRCxNQUFNO2dCQUNSLEtBQUsscUNBQXFDO29CQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFBQyxNQUFNO2FBQzNDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1RyZWVFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBpZihwYXlsb2FkICYmIHR5cGVvZiBwYXlsb2FkLnNvdXJjZSAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgIHN3aXRjaCAoIHBheWxvYWQuc291cmNlICkge1xuICAgICAgICAgIGNhc2UgJ3RvZ2dsZSc6ICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVRyZWUoIG51bGwsIHBheWxvYWQucGFyZW50cywgcGF5bG9hZC5pZCApOyBicmVhaztcbiAgICAgICAgICBjYXNlICdUb2dnbGVNZW51SXRlbSc6IHRoaXMuZGF0YVNvdXJjZS51cGRhdGVUcmVlKCBudWxsLCBwYXlsb2FkLnBhcmVudHMsIHBheWxvYWQuaWQgKTsgLy9ubyBicmVhaywgSSB3YW50IHRvIGV4ZWN1dGUgYWxzbyB0aGUgZm9sbG93aW5nIGluc3RydWN0aW9uXG4gICAgICAgICAgY2FzZSAnbWVudUl0ZW0nOiAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0VHJlZUl0ZW0oIHBheWxvYWQuaWQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBzd2l0Y2goIHR5cGUgKXtcbiAgICAgICAgICBjYXNlICdhdy1zaWRlYmFyLWhlYWRlci5jbGljayc6IHRoaXMuZGF0YVNvdXJjZS50b2dnbGVTaWRlYmFyKCk7IGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuc2VsZWN0SXRlbSc6XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0VHJlZUl0ZW0oIHBheWxvYWQgKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJdGVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVHJlZSggbnVsbCwgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJdGVtLnBheWxvYWQudG9nZ2xlLnBhcmVudHMsIHBheWxvYWQgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIG9iamVjdCBpbiB0aGUgVVJMIGRvZXMgbm90IGV4aXN0LicpXG4gICAgICAgICAgICAgIC8vIE1heWJlIG5hdmlnYXRlIHRvIDQwNCBoZXJlLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5uYXZpZ2F0aW9ucmVzcG9uc2UnOlxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhcnNlRGF0YShwYXlsb2FkKTsgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufSJdfQ==