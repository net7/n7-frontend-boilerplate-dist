/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil, first, filter } from 'rxjs/operators';
export class MainLayoutEH extends EventHandler {
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
                case 'main-layout.init':
                    this.dataSource.onInit(payload);
                    this.route = payload.route;
                    this.router = payload.router;
                    this._listenRouterChanges();
                    break;
                case 'main-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        // listen to global events
        EventHandler.globalEvents$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'global.navigate':
                    this.dataSource.onNavigate(payload);
                    break;
                default:
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenRouterChanges() {
        this.route.queryParams.pipe(filter((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            if (Object.keys(params).length)
                return true;
            return false;
        })), first()).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            // setTimeout for fixing route event timings
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.emitGlobal('queryparams', params);
            }));
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.route;
    /**
     * @type {?}
     * @private
     */
    MainLayoutEH.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFELE1BQU0sT0FBTyxZQUFhLFNBQVEsWUFBWTtJQUE5Qzs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUF1RG5ELENBQUM7Ozs7SUFuRFEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFPLElBQUksRUFBRTtnQkFDWCxLQUFLLGtCQUFrQjtvQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRWhDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUU3QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDNUIsTUFBTTtnQkFFUixLQUFLLHFCQUFxQjtvQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFFVjtvQkFDSSxNQUFNO2FBQ1g7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILDBCQUEwQjtRQUMxQixZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFFO1lBQzlCLFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssaUJBQWlCO29CQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sb0JBQW9CO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDekIsTUFBTTs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2QsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU07Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFDM0MsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsRUFDRixLQUFLLEVBQUUsQ0FDUixDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNuQiw0Q0FBNEM7WUFDNUMsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBRUY7Ozs7OztJQXZEQyxrQ0FBaUQ7Ozs7O0lBQ2pELDZCQUFtQjs7Ozs7SUFDbkIsOEJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBmaXJzdCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgTWFpbkxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJvdXRlOiBhbnk7XG4gIHByaXZhdGUgcm91dGVyOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICBjYXNlICdtYWluLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcblxuICAgICAgICAgIHRoaXMuX2xpc3RlblJvdXRlckNoYW5nZXMoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtYWluLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBsaXN0ZW4gdG8gZ2xvYmFsIGV2ZW50c1xuICAgIEV2ZW50SGFuZGxlci5nbG9iYWxFdmVudHMkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCh7dHlwZSwgcGF5bG9hZH0pID0+IHtcbiAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgY2FzZSAnZ2xvYmFsLm5hdmlnYXRlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25OYXZpZ2F0ZShwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Sb3V0ZXJDaGFuZ2VzKCl7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgZmlsdGVyKHBhcmFtcyA9PiB7XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSksXG4gICAgICBmaXJzdCgpXG4gICAgKS5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIC8vIHNldFRpbWVvdXQgZm9yIGZpeGluZyByb3V0ZSBldmVudCB0aW1pbmdzXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCdxdWVyeXBhcmFtcycsIHBhcmFtcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBcbiAgXG59Il19