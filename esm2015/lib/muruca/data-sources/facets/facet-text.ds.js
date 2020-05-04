/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/data-sources/facets/facet-text.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdGV4dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC10ZXh0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTS9DLE1BQU0sT0FBTyxXQUFZLFNBQVEsVUFBVTtJQUEzQzs7UUFvQkUsYUFBUTs7O1FBQUcsR0FBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7SUFLM0MsQ0FBQzs7Ozs7O0lBcEJXLFNBQVMsQ0FBQyxJQUFtQjtRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFrQixFQUFFLE1BQU0sR0FBRyxLQUFLO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sbUJBQ04sSUFBSSxDQUFDLEtBQUssSUFDYixLQUFLLElBQ0wsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0NBQ0Y7OztJQXhCQyx5QkFBVzs7SUFFWCw0QkFBbUI7O0lBaUJuQiwrQkFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRUZXh0RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmcgfCBudWxsO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRUZXh0RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2YWx1ZTogRkFDRVRfVkFMVUU7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dFRleHREYXRhKTogSW5wdXRUZXh0RGF0YSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogRkFDRVRfVkFMVUUsIHVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgfVxufVxuIl19