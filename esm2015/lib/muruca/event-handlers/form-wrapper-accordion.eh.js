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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS13cmFwcGVyLWFjY29yZGlvbi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsWUFBWTtJQUExRDs7UUFDVSxhQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7SUEwQ2xELENBQUM7SUF0Q1EsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGdDQUFnQztvQkFDbkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLE1BQU07Z0JBQ1IsS0FBSyxtQ0FBbUM7b0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBQ1IsS0FBSyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUN2QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO3dCQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtxQkFDdkIsQ0FBQyxDQUFDO29CQUNILE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxpQ0FBaUM7b0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hCLE1BQU07Z0JBQ1IsS0FBSyxpQ0FBaUM7b0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxJQUFJLENBQ1QsTUFBTSxDQUFDLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUMsRUFDdkQsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekIsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRFMgfSBmcm9tICcuLi9kYXRhLXNvdXJjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25FSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGRhdGFTb3VyY2U6IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EUztcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5pbml0JzpcclxuICAgICAgICAgIHRoaXMubGlzdGVuS2V5VXBFdmVudHMoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uZGVzdHJveSc6XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uc3VibWl0Jzoge1xyXG4gICAgICAgICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLmRhdGFTb3VyY2Uub3V0cHV0O1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3N1Ym1pdCcsIHtcclxuICAgICAgICAgICAgc3RhdGU6IGZvcm0uZ2V0U3RhdGUoKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbi5yZXNldCc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncmVzZXQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24uY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZUdyb3VwKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuS2V5VXBFdmVudHMoKSB7XHJcbiAgICBjb25zdCBrZXl1cCQgPSBmcm9tRXZlbnQod2luZG93LCAna2V5dXAnKTtcclxuXHJcbiAgICBrZXl1cCQucGlwZShcclxuICAgICAgZmlsdGVyKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gZXZlbnQua2V5ID09PSAnRW50ZXInKSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdElubmVyKCdzdWJtaXQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=