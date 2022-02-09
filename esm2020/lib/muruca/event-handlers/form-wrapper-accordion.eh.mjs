import { EventHandler } from '@n7-frontend/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
export class MrFormWrapperAccordionEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-form-wrapper-accordion.init':
                    this.listenKeyUpEvents();
                    break;
                case 'mr-form-wrapper-accordion.destroy':
                    this.destroy$.next();
                    break;
                case 'mr-form-wrapper-accordion.submit': {
                    const { form } = this.dataSource.output;
                    this.emitOuter('submit', {
                        state: form.getState()
                    });
                    break;
                }
                case 'mr-form-wrapper-accordion.reset':
                    this.emitOuter('reset');
                    break;
                case 'mr-form-wrapper-accordion.click':
                    this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        });
    }
    listenKeyUpEvents() {
        const keyup$ = fromEvent(window, 'keyup');
        keyup$.pipe(filter((event) => event.key === 'Enter'), takeUntil(this.destroy$)).subscribe(() => {
            this.emitInner('submit');
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mb3JtLXdyYXBwZXItYWNjb3JkaW9uLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxZQUFZO0lBQTFEOztRQUNVLGFBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQTBDbEQsQ0FBQztJQXRDUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssZ0NBQWdDO29CQUNuQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsTUFBTTtnQkFDUixLQUFLLG1DQUFtQztvQkFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFDUixLQUFLLGtDQUFrQyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO3FCQUN2QixDQUFDLENBQUM7b0JBQ0gsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLGlDQUFpQztvQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDeEIsTUFBTTtnQkFDUixLQUFLLGlDQUFpQztvQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFMUMsTUFBTSxDQUFDLElBQUksQ0FDVCxNQUFNLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxFQUN2RCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJGb3JtV3JhcHBlckFjY29yZGlvbkVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgZGF0YVNvdXJjZTogTXJGb3JtV3JhcHBlckFjY29yZGlvbkRTO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5saXN0ZW5LZXlVcEV2ZW50cygpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5zdWJtaXQnOiB7XHJcbiAgICAgICAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuZGF0YVNvdXJjZS5vdXRwdXQ7XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc3VibWl0Jywge1xyXG4gICAgICAgICAgICBzdGF0ZTogZm9ybS5nZXRTdGF0ZSgpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLnJlc2V0JzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdyZXNldCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5jbGljayc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlR3JvdXAocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5LZXlVcEV2ZW50cygpIHtcclxuICAgIGNvbnN0IGtleXVwJCA9IGZyb21FdmVudCh3aW5kb3csICdrZXl1cCcpO1xyXG5cclxuICAgIGtleXVwJC5waXBlKFxyXG4gICAgICBmaWx0ZXIoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiBldmVudC5rZXkgPT09ICdFbnRlcicpLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5lbWl0SW5uZXIoJ3N1Ym1pdCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==