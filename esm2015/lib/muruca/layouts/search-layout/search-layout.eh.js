/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import searchHelper from '../../helpers/search-helper';
export class MrSearchLayoutEH extends EventHandler {
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
                case 'mr-search-layout.init':
                    this.hostEmit$ = payload.hostEmit$;
                    this.guestEmit$ = payload.guestEmit$;
                    this.router = payload.router;
                    this.activatedRoute = payload.activatedRoute;
                    this.dataSource.onInit(payload);
                    this.listenToGuest();
                    this.listenToRouterChanges();
                    /* setTimeout(() => {
                      this.hostEmit$.next({
                        type: 'updateinputdata',
                        payload: {
                          id: 'input-00',
                          data: {
                            placeholder: 'Cerca su tutto',
                          }
                        }
                      });
                      this.hostEmit$.next({
                        type: 'updateinputvalue',
                        payload: {
                          id: 'input-00',
                          value: 'Sto cercando...'
                        }
                      });
                    }, 5000); */
                    break;
                case 'mr-search-layout.destroy':
                    this.destroyed$.next(true);
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        }));
        /*
          this.outerEvents$.subscribe(({ type, payload }) => {
          });
        */
    }
    /**
     * @return {?}
     */
    listenToGuest() {
        this.guestEmit$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'change': {
                    /** @type {?} */
                    const queryParams = searchHelper.stateToQueryParams(payload.state);
                    this.router.navigate([], {
                        queryParams
                    });
                    break;
                }
                default:
                    break;
            }
        }));
    }
    /**
     * @return {?}
     */
    listenToRouterChanges() {
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            // TODO: aggiungere logica richieste
            console.warn('query params', params);
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.hostEmit$;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.guestEmit$;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.router;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.activatedRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLFlBQVksTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQUFsRDs7UUFDVSxlQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7SUF1RnZELENBQUM7Ozs7SUE3RVEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO29CQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO29CQUU3QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFHN0I7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQWlCWTtvQkFDWixNQUFNO2dCQUVSLEtBQUssMEJBQTBCO29CQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0IsTUFBTTtnQkFFUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVIOzs7VUFHRTtJQUNKLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLFFBQVEsQ0FBQyxDQUFDOzswQkFDUCxXQUFXLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTt3QkFDdkIsV0FBVztxQkFDWixDQUFDLENBQUM7b0JBQ0gsTUFBTTtpQkFDUDtnQkFFRDtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3JCLG9DQUFvQztZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7Ozs7O0lBdkZDLHNDQUFxRDs7Ozs7SUFFckQscUNBQWdDOzs7OztJQUVoQyxzQ0FBaUM7Ozs7O0lBRWpDLGtDQUF1Qjs7Ozs7SUFFdkIsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgc2VhcmNoSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvc2VhcmNoLWhlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGhvc3RFbWl0JDogU3ViamVjdDxhbnk+O1xuXG4gIHByaXZhdGUgZ3Vlc3RFbWl0JDogU3ViamVjdDxhbnk+O1xuXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmhvc3RFbWl0JCA9IHBheWxvYWQuaG9zdEVtaXQkO1xuICAgICAgICAgIHRoaXMuZ3Vlc3RFbWl0JCA9IHBheWxvYWQuZ3Vlc3RFbWl0JDtcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUgPSBwYXlsb2FkLmFjdGl2YXRlZFJvdXRlO1xuXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmxpc3RlblRvR3Vlc3QoKTtcbiAgICAgICAgICB0aGlzLmxpc3RlblRvUm91dGVyQ2hhbmdlcygpO1xuXG5cbiAgICAgICAgICAvKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9zdEVtaXQkLm5leHQoe1xuICAgICAgICAgICAgICB0eXBlOiAndXBkYXRlaW5wdXRkYXRhJyxcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGlkOiAnaW5wdXQtMDAnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2Egc3UgdHV0dG8nLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmhvc3RFbWl0JC5uZXh0KHtcbiAgICAgICAgICAgICAgdHlwZTogJ3VwZGF0ZWlucHV0dmFsdWUnLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICdpbnB1dC0wMCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdTdG8gY2VyY2FuZG8uLi4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDUwMDApOyAqL1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKlxuICAgICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgfSk7XG4gICAgKi9cbiAgfVxuXG4gIGxpc3RlblRvR3Vlc3QoKSB7XG4gICAgdGhpcy5ndWVzdEVtaXQkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NoYW5nZSc6IHtcbiAgICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlYXJjaEhlbHBlci5zdGF0ZVRvUXVlcnlQYXJhbXMocGF5bG9hZC5zdGF0ZSk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCkge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIC8vIFRPRE86IGFnZ2l1bmdlcmUgbG9naWNhIHJpY2hpZXN0ZVxuICAgICAgY29uc29sZS53YXJuKCdxdWVyeSBwYXJhbXMnLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=