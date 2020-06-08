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
     * @param {?} slug
     * @return {?}
     */
    pageRequest$(slug) {
        return this.communication.request$('wp-page', { urlParams: slug });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7Ozs7O0lBS3BELE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixLQUFLO1lBQ0wsSUFBSTtTQUNMLENBQUM7SUFDSixDQUFDO0NBQ0Y7Ozs7OztJQWxCQyx5Q0FBMkI7O0lBRTNCLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBNclN0YXRpY0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIHB1YmxpYyBSRU5ERVJfSFRNTDogYW55O1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICB9XG5cbiAgcGFnZVJlcXVlc3QkKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnd3AtcGFnZScsIHsgdXJsUGFyYW1zOiBzbHVnIH0pO1xuICB9XG5cbiAgcmVuZGVySFRNTCh0aXRsZSwgYm9keSkge1xuICAgIHRoaXMuUkVOREVSX0hUTUwgPSB7XG4gICAgICB0aXRsZSxcbiAgICAgIGJvZHksXG4gICAgfTtcbiAgfVxufVxuIl19