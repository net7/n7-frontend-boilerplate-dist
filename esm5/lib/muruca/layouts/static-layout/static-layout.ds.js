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
     * @return {?}
     */
    MrStaticLayoutDS.prototype.pageRequest$ = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var getPageNum = window.location.href.match(/([^/]*)\/*$/)[1];
        return this.communication.request$('page', { urlParams: getPageNum }, 'rest-local');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdyRDtJQUFzQyw0Q0FBZ0I7SUFBdEQ7O0lBb0JBLENBQUM7Ozs7O0lBZkMsaUNBQU07Ozs7SUFBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELHVDQUFZOzs7SUFBWjs7WUFDUSxVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7SUFFRCxxQ0FBVTs7Ozs7SUFBVixVQUFXLEtBQUssRUFBRSxJQUFJO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDakIsS0FBSyxPQUFBO1lBQ0wsSUFBSSxNQUFBO1NBQ0wsQ0FBQztJQUNKLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFwQkQsQ0FBc0MsZ0JBQWdCLEdBb0JyRDs7Ozs7OztJQW5CQyx5Q0FBMkI7O0lBRTNCLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBNclN0YXRpY0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIHB1YmxpYyBSRU5ERVJfSFRNTDogYW55O1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICB9XG5cbiAgcGFnZVJlcXVlc3QkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZ2V0UGFnZU51bSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC8oW14vXSopXFwvKiQvKVsxXTtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdwYWdlJywgeyB1cmxQYXJhbXM6IGdldFBhZ2VOdW0gfSwgJ3Jlc3QtbG9jYWwnKTtcbiAgfVxuXG4gIHJlbmRlckhUTUwodGl0bGUsIGJvZHkpIHtcbiAgICB0aGlzLlJFTkRFUl9IVE1MID0ge1xuICAgICAgdGl0bGUsXG4gICAgICBib2R5LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==