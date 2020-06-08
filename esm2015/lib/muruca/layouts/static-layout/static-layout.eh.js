/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { EventHandler } from '@n7-frontend/core';
import { takeUntil, switchMap, map } from 'rxjs/operators';
export class MrStaticLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
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
                case 'mr-static-layout.init':
                    this.route = payload.route;
                    this.dataSource.onInit(payload);
                    // listen route
                    this.listenRoute();
                    break;
                case 'mr-static-layout.destroy':
                    this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    listenRoute() {
        this.route.paramMap.pipe(takeUntil(this.destroy$), map((/**
         * @param {?} params
         * @return {?}
         */
        (params) => params.get('slug'))), switchMap((/**
         * @param {?} slug
         * @return {?}
         */
        (slug) => this.dataSource.pageRequest$(slug)))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            const { title } = response;
            const { body } = response;
            this.dataSource.renderHTML(title, body);
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrStaticLayoutEH.prototype.route;
    /** @type {?} */
    MrStaticLayoutEH.prototype.dataSource;
    /**
     * @type {?}
     * @private
     */
    MrStaticLayoutEH.prototype.destroy$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBQWxEOztRQUtVLGFBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQW1DbEQsQ0FBQzs7OztJQWpDUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVoQyxlQUFlO29CQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsTUFBTTtnQkFFUixLQUFLLDBCQUEwQjtvQkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFFUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWdCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFDN0MsU0FBUzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUNoRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2tCQUNqQixFQUFFLEtBQUssRUFBRSxHQUFHLFFBQVE7a0JBQ3BCLEVBQUUsSUFBSSxFQUFFLEdBQUcsUUFBUTtZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQXZDQyxpQ0FBOEI7O0lBRTlCLHNDQUFvQzs7Ozs7SUFFcEMsb0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtTWFwIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCwgc3dpdGNoTWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNclN0YXRpY0xheW91dERTIH0gZnJvbSAnLi9zdGF0aWMtbGF5b3V0LmRzJztcblxuZXhwb3J0IGNsYXNzIE1yU3RhdGljTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcblxuICBwdWJsaWMgZGF0YVNvdXJjZTogTXJTdGF0aWNMYXlvdXREUztcblxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zdGF0aWMtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG5cbiAgICAgICAgICAvLyBsaXN0ZW4gcm91dGVcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc3RhdGljLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgbWFwKChwYXJhbXM6IFBhcmFtTWFwKSA9PiBwYXJhbXMuZ2V0KCdzbHVnJykpLFxuICAgICAgc3dpdGNoTWFwKChzbHVnOiBzdHJpbmcpID0+IHRoaXMuZGF0YVNvdXJjZS5wYWdlUmVxdWVzdCQoc2x1ZykpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCB7IHRpdGxlIH0gPSByZXNwb25zZTtcbiAgICAgIGNvbnN0IHsgYm9keSB9ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySFRNTCh0aXRsZSwgYm9keSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==