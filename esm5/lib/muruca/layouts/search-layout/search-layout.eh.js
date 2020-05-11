/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import searchHelper from '../../helpers/search-helper';
var MrSearchLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchLayoutEH, _super);
    function MrSearchLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    MrSearchLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-search-layout.init':
                    _this.hostEmit$ = payload.hostEmit$;
                    _this.guestEmit$ = payload.guestEmit$;
                    _this.router = payload.router;
                    _this.activatedRoute = payload.activatedRoute;
                    _this.dataSource.onInit(payload);
                    _this.listenToGuest();
                    _this.listenToRouterChanges();
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
                    _this.destroyed$.next(true);
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
    };
    /**
     * @return {?}
     */
    MrSearchLayoutEH.prototype.listenToGuest = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.guestEmit$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'change': {
                    /** @type {?} */
                    var queryParams = searchHelper.stateToQueryParams(payload.state);
                    _this.router.navigate([], {
                        queryParams: queryParams
                    });
                    break;
                }
                default:
                    break;
            }
        }));
    };
    /**
     * @return {?}
     */
    MrSearchLayoutEH.prototype.listenToRouterChanges = /**
     * @return {?}
     */
    function () {
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            // TODO: aggiungere logica richieste
            console.warn('query params', params);
        }));
    };
    return MrSearchLayoutEH;
}(EventHandler));
export { MrSearchLayoutEH };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxZQUFZLE1BQU0sNkJBQTZCLENBQUM7QUFFdkQ7SUFBc0MsNENBQVk7SUFBbEQ7UUFBQSxxRUF3RkM7UUF2RlMsZ0JBQVUsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUF1RnZELENBQUM7Ozs7SUE3RVEsaUNBQU07OztJQUFiO1FBQUEsaUJBZ0RDO1FBL0NDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztvQkFDckMsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUM3QixLQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7b0JBRTdDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUc3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBaUJZO29CQUNaLE1BQU07Z0JBRVIsS0FBSywwQkFBMEI7b0JBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixNQUFNO2dCQUVSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUg7OztVQUdFO0lBQ0osQ0FBQzs7OztJQUVELHdDQUFhOzs7SUFBYjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUIsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxRQUFRLENBQUMsQ0FBQzs7d0JBQ1AsV0FBVyxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNsRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7d0JBQ3ZCLFdBQVcsYUFBQTtxQkFDWixDQUFDLENBQUM7b0JBQ0gsTUFBTTtpQkFDUDtnQkFFRDtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxnREFBcUI7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFNO1lBQ2pCLG9DQUFvQztZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUF4RkQsQ0FBc0MsWUFBWSxHQXdGakQ7Ozs7Ozs7SUF2RkMsc0NBQXFEOzs7OztJQUVyRCxxQ0FBZ0M7Ozs7O0lBRWhDLHNDQUFpQzs7Ozs7SUFFakMsa0NBQXVCOzs7OztJQUV2QiwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBzZWFyY2hIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9zZWFyY2gtaGVscGVyJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgaG9zdEVtaXQkOiBTdWJqZWN0PGFueT47XG5cbiAgcHJpdmF0ZSBndWVzdEVtaXQkOiBTdWJqZWN0PGFueT47XG5cbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zZWFyY2gtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuaG9zdEVtaXQkID0gcGF5bG9hZC5ob3N0RW1pdCQ7XG4gICAgICAgICAgdGhpcy5ndWVzdEVtaXQkID0gcGF5bG9hZC5ndWVzdEVtaXQkO1xuICAgICAgICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZSA9IHBheWxvYWQuYWN0aXZhdGVkUm91dGU7XG5cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMubGlzdGVuVG9HdWVzdCgpO1xuICAgICAgICAgIHRoaXMubGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCk7XG5cblxuICAgICAgICAgIC8qIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob3N0RW1pdCQubmV4dCh7XG4gICAgICAgICAgICAgIHR5cGU6ICd1cGRhdGVpbnB1dGRhdGEnLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICdpbnB1dC0wMCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdDZXJjYSBzdSB0dXR0bycsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaG9zdEVtaXQkLm5leHQoe1xuICAgICAgICAgICAgICB0eXBlOiAndXBkYXRlaW5wdXR2YWx1ZScsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBpZDogJ2lucHV0LTAwJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1N0byBjZXJjYW5kby4uLidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgNTAwMCk7ICovXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qXG4gICAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICB9KTtcbiAgICAqL1xuICB9XG5cbiAgbGlzdGVuVG9HdWVzdCgpIHtcbiAgICB0aGlzLmd1ZXN0RW1pdCQucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXG4gICAgKS5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2hhbmdlJzoge1xuICAgICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VhcmNoSGVscGVyLnN0YXRlVG9RdWVyeVBhcmFtcyhwYXlsb2FkLnN0YXRlKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW5Ub1JvdXRlckNoYW5nZXMoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgLy8gVE9ETzogYWdnaXVuZ2VyZSBsb2dpY2EgcmljaGllc3RlXG4gICAgICBjb25zb2xlLndhcm4oJ3F1ZXJ5IHBhcmFtcycsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==