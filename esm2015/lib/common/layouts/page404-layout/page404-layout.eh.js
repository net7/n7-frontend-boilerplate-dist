/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class Page404LayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
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
        }));
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    Page404LayoutEH.prototype.destroyed$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTQwNC1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvcGFnZTQwNC1sYXlvdXQvcGFnZTQwNC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE1BQU0sT0FBTyxlQUFnQixTQUFRLFlBQVk7SUFBakQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBaUNuRCxDQUFDOzs7O0lBL0JRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBTyxJQUFJLEVBQUU7Z0JBQ1gsS0FBSyx3QkFBd0I7b0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxNQUFNO2dCQUVSLEtBQUssMkJBQTJCO29CQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUVWO29CQUNJLE1BQU07YUFDWDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsMEJBQTBCO1FBQzFCOzs7Ozs7Ozs7OztjQVdNO0lBQ1IsQ0FBQztDQUVGOzs7Ozs7SUFqQ0MscUNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgUGFnZTQwNExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbjctcGFnZTQwNC1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICduNy1wYWdlNDA0LWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBsaXN0ZW4gdG8gZ2xvYmFsIGV2ZW50c1xuICAgIC8qIEV2ZW50SGFuZGxlci5nbG9iYWxFdmVudHMkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCh7dHlwZSwgcGF5bG9hZH0pID0+IHtcbiAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgY2FzZSAnZ2xvYmFsLm5hdmlnYXRlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25OYXZpZ2F0ZShwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7ICovXG4gIH1cbiAgXG59Il19