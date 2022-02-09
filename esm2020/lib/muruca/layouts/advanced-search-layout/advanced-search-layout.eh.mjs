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
                    // init hook
                    this.onInit();
                    // scroll top
                    window.scrollTo(0, 0);
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
     * protected onInit() {
     *   this.dataSource.form.changed$.subscribe(({ id, state }) => {
     *     console.log('changed$', { id, state });
     *   });
     * }
     */
    onInit() {
        // to be extended on project
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQvYWR2YW5jZWQtc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsWUFBWTtJQUExRDs7UUFHWSxhQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7SUFrRHBELENBQUM7SUFoRFEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGdDQUFnQztvQkFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLFlBQVk7b0JBQ1osSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNkLGFBQWE7b0JBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLE1BQU07Z0JBRVIsS0FBSyxtQ0FBbUM7b0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxrQ0FBa0M7b0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2dCQUNSLEtBQUssaUNBQWlDO29CQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMxQixNQUFNO2dCQUVSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxNQUFNO1FBQ2QsNEJBQTRCO0lBQzlCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0RFMgfSBmcm9tICcuL2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRTZWFyY2hMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgZGF0YVNvdXJjZTogTXJBZHZhbmNlZFNlYXJjaExheW91dERTO1xyXG5cclxuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci1hZHZhbmNlZC1zZWFyY2gtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIC8vIGluaXQgaG9va1xyXG4gICAgICAgICAgdGhpcy5vbkluaXQoKTtcclxuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdtci1hZHZhbmNlZC1zZWFyY2gtbGF5b3V0LmRlc3Ryb3knOlxyXG4gICAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uc3VibWl0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblN1Ym1pdChwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24ucmVzZXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUmVzZXQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBwcm90ZWN0ZWQgb25Jbml0KCkge1xyXG4gICAqICAgdGhpcy5kYXRhU291cmNlLmZvcm0uY2hhbmdlZCQuc3Vic2NyaWJlKCh7IGlkLCBzdGF0ZSB9KSA9PiB7XHJcbiAgICogICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VkJCcsIHsgaWQsIHN0YXRlIH0pO1xyXG4gICAqICAgfSk7XHJcbiAgICogfVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBvbkluaXQoKSB7XHJcbiAgICAvLyB0byBiZSBleHRlbmRlZCBvbiBwcm9qZWN0XHJcbiAgfVxyXG59XHJcbiJdfQ==