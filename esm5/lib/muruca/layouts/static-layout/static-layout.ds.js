/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var MrStaticLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrStaticLayoutDS, _super);
    function MrStaticLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    MrStaticLayoutDS.prototype.onInit = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.communication = payload.communication;
    };
    /**
     * @param {?} slug
     * @return {?}
     */
    MrStaticLayoutDS.prototype.pageRequest$ = /**
     * @param {?} slug
     * @return {?}
     */
    function (slug) {
        return this.communication.request$('wp-page', { urlParams: slug });
    };
    /**
     * @param {?} title
     * @param {?} body
     * @return {?}
     */
    MrStaticLayoutDS.prototype.renderHTML = /**
     * @param {?} title
     * @param {?} body
     * @return {?}
     */
    function (title, body) {
        this.RENDER_HTML = {
            title: title,
            body: body,
        };
    };
    return MrStaticLayoutDS;
}(LayoutDataSource));
export { MrStaticLayoutDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrStaticLayoutDS.prototype.communication;
    /** @type {?} */
    MrStaticLayoutDS.prototype.RENDER_HTML;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdyRDtJQUFzQyw0Q0FBZ0I7SUFBdEQ7O0lBbUJBLENBQUM7Ozs7O0lBZEMsaUNBQU07Ozs7SUFBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCx1Q0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQUVELHFDQUFVOzs7OztJQUFWLFVBQVcsS0FBSyxFQUFFLElBQUk7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixLQUFLLE9BQUE7WUFDTCxJQUFJLE1BQUE7U0FDTCxDQUFDO0lBQ0osQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQW5CRCxDQUFzQyxnQkFBZ0IsR0FtQnJEOzs7Ozs7O0lBbEJDLHlDQUEyQjs7SUFFM0IsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIE1yU3RhdGljTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgcHVibGljIFJFTkRFUl9IVE1MOiBhbnk7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XG4gIH1cblxuICBwYWdlUmVxdWVzdCQoc2x1Zzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd3cC1wYWdlJywgeyB1cmxQYXJhbXM6IHNsdWcgfSk7XG4gIH1cblxuICByZW5kZXJIVE1MKHRpdGxlLCBib2R5KSB7XG4gICAgdGhpcy5SRU5ERVJfSFRNTCA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgYm9keSxcbiAgICB9O1xuICB9XG59XG4iXX0=