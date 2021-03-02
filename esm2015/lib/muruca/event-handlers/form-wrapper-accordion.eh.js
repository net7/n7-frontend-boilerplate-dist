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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsWUFBWTtJQUExRDs7UUFDVSxhQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7SUEwQ2xELENBQUM7SUF0Q1EsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGdDQUFnQztvQkFDbkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLE1BQU07Z0JBQ1IsS0FBSyxtQ0FBbUM7b0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBQ1IsS0FBSyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUN2QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO3dCQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtxQkFDdkIsQ0FBQyxDQUFDO29CQUNILE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxpQ0FBaUM7b0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hCLE1BQU07Z0JBQ1IsS0FBSyxpQ0FBaUM7b0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxJQUFJLENBQ1QsTUFBTSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUMsRUFDdkQsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekIsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRFMgfSBmcm9tICcuLi9kYXRhLXNvdXJjZXMnO1xuXG5leHBvcnQgY2xhc3MgTXJGb3JtV3JhcHBlckFjY29yZGlvbkVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZGF0YVNvdXJjZTogTXJGb3JtV3JhcHBlckFjY29yZGlvbkRTO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uaW5pdCc6XG4gICAgICAgICAgdGhpcy5saXN0ZW5LZXlVcEV2ZW50cygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLnN1Ym1pdCc6IHtcbiAgICAgICAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuZGF0YVNvdXJjZS5vdXRwdXQ7XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3N1Ym1pdCcsIHtcbiAgICAgICAgICAgIHN0YXRlOiBmb3JtLmdldFN0YXRlKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLnJlc2V0JzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncmVzZXQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5jbGljayc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZUdyb3VwKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5LZXlVcEV2ZW50cygpIHtcbiAgICBjb25zdCBrZXl1cCQgPSBmcm9tRXZlbnQod2luZG93LCAna2V5dXAnKTtcblxuICAgIGtleXVwJC5waXBlKFxuICAgICAgZmlsdGVyKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gZXZlbnQua2V5ID09PSAnRW50ZXInKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZW1pdElubmVyKCdzdWJtaXQnKTtcbiAgICB9KTtcbiAgfVxufVxuIl19