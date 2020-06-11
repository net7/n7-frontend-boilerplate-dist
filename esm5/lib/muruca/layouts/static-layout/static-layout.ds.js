import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var MrStaticLayoutDS = /** @class */ (function (_super) {
    __extends(MrStaticLayoutDS, _super);
    function MrStaticLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrStaticLayoutDS.prototype.onInit = function (payload) {
        this.communication = payload.communication;
    };
    MrStaticLayoutDS.prototype.pageRequest$ = function (slug) {
        return this.communication.request$('wp-page', { urlParams: slug });
    };
    MrStaticLayoutDS.prototype.renderHTML = function (title, body) {
        this.RENDER_HTML = {
            title: title,
            body: body,
        };
    };
    return MrStaticLayoutDS;
}(LayoutDataSource));
export { MrStaticLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JEO0lBQXNDLG9DQUFnQjtJQUF0RDs7SUFtQkEsQ0FBQztJQWRDLGlDQUFNLEdBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzdDLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsSUFBWTtRQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsS0FBSyxFQUFFLElBQUk7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixLQUFLLE9BQUE7WUFDTCxJQUFJLE1BQUE7U0FDTCxDQUFDO0lBQ0osQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQW5CRCxDQUFzQyxnQkFBZ0IsR0FtQnJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIE1yU3RhdGljTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgcHVibGljIFJFTkRFUl9IVE1MOiBhbnk7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XG4gIH1cblxuICBwYWdlUmVxdWVzdCQoc2x1Zzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd3cC1wYWdlJywgeyB1cmxQYXJhbXM6IHNsdWcgfSk7XG4gIH1cblxuICByZW5kZXJIVE1MKHRpdGxlLCBib2R5KSB7XG4gICAgdGhpcy5SRU5ERVJfSFRNTCA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgYm9keSxcbiAgICB9O1xuICB9XG59XG4iXX0=