/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class FacetTextDS extends DataSource {
    constructor() {
        super(...arguments);
        this.getValue = (/**
         * @return {?}
         */
        () => this.value);
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return data;
    }
    /**
     * @param {?} value
     * @param {?=} update
     * @return {?}
     */
    setValue(value, update = false) {
        this.value = value;
        if (update) {
            this.update(Object.assign({}, this.input, { value }));
            // fix element update
            /** @type {?} */
            const el = (/** @type {?} */ (document.getElementById(this.output.id)));
            if (el) {
                el.value = value;
            }
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.value = null;
    }
}
if (false) {
    /** @type {?} */
    FacetTextDS.prototype.id;
    /** @type {?} */
    FacetTextDS.prototype.value;
    /** @type {?} */
    FacetTextDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNL0MsTUFBTSxPQUFPLFdBQVksU0FBUSxVQUFVO0lBQTNDOztRQTBCRSxhQUFROzs7UUFBRyxHQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztJQUszQyxDQUFDOzs7Ozs7SUExQlcsU0FBUyxDQUFDLElBQW1CO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWtCLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxtQkFDTixJQUFJLENBQUMsS0FBSyxJQUNiLEtBQUssSUFDTCxDQUFDOzs7a0JBR0csRUFBRSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBb0I7WUFDdEUsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7Ozs7SUFJRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztDQUNGOzs7SUE5QkMseUJBQVc7O0lBRVgsNEJBQW1COztJQXVCbkIsK0JBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElucHV0VGV4dERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nIHwgbnVsbDtcblxuZXhwb3J0IGNsYXNzIEZhY2V0VGV4dERTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRUZXh0RGF0YSk6IElucHV0VGV4dERhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICAvLyBmaXggZWxlbWVudCB1cGRhdGVcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vdXRwdXQuaWQpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICB9XG59XG4iXX0=