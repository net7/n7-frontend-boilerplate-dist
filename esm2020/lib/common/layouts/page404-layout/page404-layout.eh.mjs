import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class Page404LayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'n7-page404-layout.init':
                    this.dataSource.onInit(payload);
                    break;
                case 'n7-page404-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        // listen to global events
        /* EventHandler.globalEvents$.pipe(
          takeUntil(this.destroyed$)
        ).subscribe(({type, payload}) => {
          switch(type){
            case 'global.navigate':
              this.dataSource.onNavigate(payload);
              break;
    
            default:
              break;
          }
        }); */
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTQwNC1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9jb21tb24vbGF5b3V0cy9wYWdlNDA0LWxheW91dC9wYWdlNDA0LWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBQWpEOztRQUNVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQWdDbkQsQ0FBQztJQTlCUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssd0JBQXdCO29CQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtnQkFFUixLQUFLLDJCQUEyQjtvQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILDBCQUEwQjtRQUMxQjs7Ozs7Ozs7Ozs7Y0FXTTtJQUNSLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2U0MDRMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICduNy1wYWdlNDA0LWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbjctcGFnZTQwNC1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGlzdGVuIHRvIGdsb2JhbCBldmVudHNcclxuICAgIC8qIEV2ZW50SGFuZGxlci5nbG9iYWxFdmVudHMkLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXHJcbiAgICApLnN1YnNjcmliZSgoe3R5cGUsIHBheWxvYWR9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICBjYXNlICdnbG9iYWwubmF2aWdhdGUnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uTmF2aWdhdGUocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTsgKi9cclxuICB9XHJcbn1cclxuIl19