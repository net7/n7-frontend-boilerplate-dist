import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { NavigationStart } from '@angular/router';
import { AwSearchModel } from '../../../arianna-web/search/aw-search.model';
export class MainLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'main-layout.init':
                    this.dataSource.onInit(payload);
                    this.mainState = payload.mainState;
                    this.route = payload.route;
                    this.router = payload.router;
                    this._listenRouterChanges();
                    this._listenMainStateChanges();
                    break;
                case 'main-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        // listen to global events
        EventHandler.globalEvents$.pipe(takeUntil(this.destroyed$)).subscribe(({ type, payload }) => {
            switch (type) {
                case 'global.navigate':
                    this.dataSource.onNavigate(payload);
                    break;
                default:
                    break;
            }
        });
    }
    _listenRouterChanges() {
        this.route.queryParams.pipe(filter((params) => {
            if (Object.keys(params).length)
                return true;
            return false;
        })).subscribe((params) => {
            this.emitGlobal('queryparams', params);
            // to use in searchs
            AwSearchModel.queryParams = params;
        });
        // router changed
        this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe(() => {
            this.emitOuter('routerchange');
            this.dataSource.onRouterChanged();
        });
    }
    _listenMainStateChanges() {
        this.mainState.addCustom('currentNav', new Subject());
        this.mainState.getCustom$('currentNav').subscribe((val) => {
            this.emitOuter('currentnavchange', val);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9jb21tb24vbGF5b3V0cy9tYWluLWxheW91dC9tYWluLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFNUUsTUFBTSxPQUFPLFlBQWEsU0FBUSxZQUFZO0lBQTlDOztRQUNVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXVFbkQsQ0FBQztJQS9EUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssa0JBQWtCO29CQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO29CQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFFN0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO29CQUMvQixNQUFNO2dCQUVSLEtBQUsscUJBQXFCO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsMEJBQTBCO1FBQzFCLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM3QixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxpQkFBaUI7b0JBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3pCLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2hCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN2QyxvQkFBb0I7WUFDcEIsYUFBYSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssWUFBWSxlQUFlLENBQUMsQ0FDcEQsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHVCQUF1QjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF3U2VhcmNoTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9hcmlhbm5hLXdlYi9zZWFyY2gvYXctc2VhcmNoLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xyXG5cclxuICBwcml2YXRlIHJvdXRlcjogYW55O1xyXG5cclxuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtYWluLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xyXG5cclxuICAgICAgICAgIHRoaXMuX2xpc3RlblJvdXRlckNoYW5nZXMoKTtcclxuICAgICAgICAgIHRoaXMuX2xpc3Rlbk1haW5TdGF0ZUNoYW5nZXMoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdtYWluLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsaXN0ZW4gdG8gZ2xvYmFsIGV2ZW50c1xyXG4gICAgRXZlbnRIYW5kbGVyLmdsb2JhbEV2ZW50cyQucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXHJcbiAgICApLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnZ2xvYmFsLm5hdmlnYXRlJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk5hdmlnYXRlKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9saXN0ZW5Sb3V0ZXJDaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxyXG4gICAgICBmaWx0ZXIoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9KSxcclxuICAgICkuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgdGhpcy5lbWl0R2xvYmFsKCdxdWVyeXBhcmFtcycsIHBhcmFtcyk7XHJcbiAgICAgIC8vIHRvIHVzZSBpbiBzZWFyY2hzXHJcbiAgICAgIEF3U2VhcmNoTW9kZWwucXVlcnlQYXJhbXMgPSBwYXJhbXM7XHJcbiAgICB9KTtcclxuICAgIC8vIHJvdXRlciBjaGFuZ2VkXHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcclxuICAgICAgZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpLFxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmVtaXRPdXRlcigncm91dGVyY2hhbmdlJyk7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblJvdXRlckNoYW5nZWQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbGlzdGVuTWFpblN0YXRlQ2hhbmdlcygpIHtcclxuICAgIHRoaXMubWFpblN0YXRlLmFkZEN1c3RvbSgnY3VycmVudE5hdicsIG5ldyBTdWJqZWN0KCkpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUuZ2V0Q3VzdG9tJCgnY3VycmVudE5hdicpLnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdjdXJyZW50bmF2Y2hhbmdlJywgdmFsKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=