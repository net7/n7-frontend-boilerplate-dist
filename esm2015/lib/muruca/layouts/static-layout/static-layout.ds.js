/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class MrStaticLayoutDS extends LayoutDataSource {
    /**
     * @param {?} payload
     * @return {?}
     */
    onInit(payload) {
        this.communication = payload.communication;
    }
    /**
     * @return {?}
     */
    pageRequest$() {
        /** @type {?} */
        const getPageNum = window.location.href.match(/([^/]*)\/*$/)[1];
        return this.communication.request$('page', { urlParams: getPageNum }, 'rest-local');
    }
    /**
     * @param {?} title
     * @param {?} body
     * @return {?}
     */
    renderHTML(title, body) {
        this.RENDER_HTML = {
            title,
            body,
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrStaticLayoutDS.prototype.communication;
    /** @type {?} */
    MrStaticLayoutDS.prototype.RENDER_HTML;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7Ozs7O0lBS3BELE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxZQUFZOztjQUNKLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2pCLEtBQUs7WUFDTCxJQUFJO1NBQ0wsQ0FBQztJQUNKLENBQUM7Q0FDRjs7Ozs7O0lBbkJDLHlDQUEyQjs7SUFFM0IsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIE1yU3RhdGljTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgcHVibGljIFJFTkRFUl9IVE1MOiBhbnk7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XG4gIH1cblxuICBwYWdlUmVxdWVzdCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBnZXRQYWdlTnVtID0gd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goLyhbXi9dKilcXC8qJC8pWzFdO1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3BhZ2UnLCB7IHVybFBhcmFtczogZ2V0UGFnZU51bSB9LCAncmVzdC1sb2NhbCcpO1xuICB9XG5cbiAgcmVuZGVySFRNTCh0aXRsZSwgYm9keSkge1xuICAgIHRoaXMuUkVOREVSX0hUTUwgPSB7XG4gICAgICB0aXRsZSxcbiAgICAgIGJvZHksXG4gICAgfTtcbiAgfVxufVxuIl19