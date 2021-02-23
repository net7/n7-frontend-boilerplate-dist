import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class MrAdvancedSearchLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-advanced-search-layout.init':
                    this.dataSource.onInit(payload);
                    this.listenFormChanges();
                    break;
                case 'mr-advanced-search-layout.destroy':
                    this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-form-wrapper-accordion.submit':
                    this.dataSource.onSubmit(payload);
                    break;
                case 'mr-form-wrapper-accordion.reset':
                    this.dataSource.onReset();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
    /**
     * @example
     * protected listenFormChanges() {
     *   this.dataSource.form.changed$.subscribe(({ id, state }) => {
     *     console.log('changed$', { id, state });
     *   });
     * }
     */
    listenFormChanges() {
        // to be extended on project
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsTUFBTSxPQUFPLHdCQUF5QixTQUFRLFlBQVk7SUFBMUQ7O1FBR1ksYUFBUSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBK0NwRCxDQUFDO0lBN0NRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxnQ0FBZ0M7b0JBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsTUFBTTtnQkFFUixLQUFLLG1DQUFtQztvQkFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFFUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGtDQUFrQztvQkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBQ1IsS0FBSyxpQ0FBaUM7b0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzFCLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNPLGlCQUFpQjtRQUN6Qiw0QkFBNEI7SUFDOUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1yQWR2YW5jZWRTZWFyY2hMYXlvdXREUyB9IGZyb20gJy4vYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJBZHZhbmNlZFNlYXJjaExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBkYXRhU291cmNlOiBNckFkdmFuY2VkU2VhcmNoTGF5b3V0RFM7XHJcblxyXG4gIHByb3RlY3RlZCBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLWFkdmFuY2VkLXNlYXJjaC1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Gb3JtQ2hhbmdlcygpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ21yLWFkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5zdWJtaXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uU3VibWl0KHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5yZXNldCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25SZXNldCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIHByb3RlY3RlZCBsaXN0ZW5Gb3JtQ2hhbmdlcygpIHtcclxuICAgKiAgIHRoaXMuZGF0YVNvdXJjZS5mb3JtLmNoYW5nZWQkLnN1YnNjcmliZSgoeyBpZCwgc3RhdGUgfSkgPT4ge1xyXG4gICAqICAgICBjb25zb2xlLmxvZygnY2hhbmdlZCQnLCB7IGlkLCBzdGF0ZSB9KTtcclxuICAgKiAgIH0pO1xyXG4gICAqIH1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgbGlzdGVuRm9ybUNoYW5nZXMoKSB7XHJcbiAgICAvLyB0byBiZSBleHRlbmRlZCBvbiBwcm9qZWN0XHJcbiAgfVxyXG59XHJcbiJdfQ==