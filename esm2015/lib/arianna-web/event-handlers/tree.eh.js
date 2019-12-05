/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/tree.eh.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxRQUFTLFNBQVEsWUFBWTs7OztJQUVqQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELElBQUcsT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE1BQU0sSUFBSSxXQUFXLEVBQUM7Z0JBQ2pELFFBQVMsT0FBTyxDQUFDLE1BQU0sRUFBRztvQkFDeEIsS0FBSyxRQUFRO3dCQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUUsQ0FBQzt3QkFBQyxNQUFNO29CQUM5RixLQUFLLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUMsNERBQTREO29CQUNwSixLQUFLLFVBQVU7d0JBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBRSxDQUFDO3dCQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ25DLE1BQU07aUJBQy9CO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUMvQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUFDLE1BQU07Z0JBQ3ZFLEtBQUssNkJBQTZCO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBRSxPQUFPLENBQUUsQ0FBQztvQkFDMUMsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTt3QkFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBRSxDQUFDO3FCQUNqRzt5QkFBTTt3QkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUE7d0JBQ3JELDhCQUE4QjtxQkFDL0I7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLHFDQUFxQztvQkFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQUMsTUFBTTthQUMzQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgaWYocGF5bG9hZCAmJiB0eXBlb2YgcGF5bG9hZC5zb3VyY2UgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBzd2l0Y2ggKCBwYXlsb2FkLnNvdXJjZSApIHtcbiAgICAgICAgICBjYXNlICd0b2dnbGUnOiAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVUcmVlKCBudWxsLCBwYXlsb2FkLnBhcmVudHMsIHBheWxvYWQuaWQgKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnVG9nZ2xlTWVudUl0ZW0nOiB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVHJlZSggbnVsbCwgcGF5bG9hZC5wYXJlbnRzLCBwYXlsb2FkLmlkICk7IC8vbm8gYnJlYWssIEkgd2FudCB0byBleGVjdXRlIGFsc28gdGhlIGZvbGxvd2luZyBpbnN0cnVjdGlvblxuICAgICAgICAgIGNhc2UgJ21lbnVJdGVtJzogICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdFRyZWVJdGVtKCBwYXlsb2FkLmlkICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgc3dpdGNoKCB0eXBlICl7XG4gICAgICAgICAgY2FzZSAnYXctc2lkZWJhci1oZWFkZXIuY2xpY2snOiB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlU2lkZWJhcigpOyBicmVhaztcbiAgICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnNlbGVjdEl0ZW0nOlxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdFRyZWVJdGVtKCBwYXlsb2FkICk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SXRlbSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVRyZWUoIG51bGwsIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SXRlbS5wYXlsb2FkLnRvZ2dsZS5wYXJlbnRzLCBwYXlsb2FkICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBvYmplY3QgaW4gdGhlIFVSTCBkb2VzIG5vdCBleGlzdC4nKVxuICAgICAgICAgICAgICAvLyBNYXliZSBuYXZpZ2F0ZSB0byA0MDQgaGVyZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQubmF2aWdhdGlvbnJlc3BvbnNlJzpcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYXJzZURhdGEocGF5bG9hZCk7IGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbn0iXX0=