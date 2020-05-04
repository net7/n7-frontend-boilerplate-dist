/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/data-sources/facets/facet-checkbox.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class FacetCheckboxDS extends DataSource {
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
            const { checkboxes } = this.input;
            /** @type {?} */
            const updatedCheckboxes = checkboxes.map((/**
             * @param {?} checkbox
             * @return {?}
             */
            (checkbox) => (Object.assign({}, checkbox, { checked: value.indexOf(checkbox.payload) !== -1 }))));
            this.update(Object.assign({}, this.input, { checkboxes: updatedCheckboxes }));
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.value = [];
    }
}
if (false) {
    /** @type {?} */
    FacetCheckboxDS.prototype.id;
    /** @type {?} */
    FacetCheckboxDS.prototype.value;
    /** @type {?} */
    FacetCheckboxDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNL0MsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUEvQzs7UUF5QkUsYUFBUTs7O1FBQUcsR0FBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7SUFLM0MsQ0FBQzs7Ozs7O0lBekJXLFNBQVMsQ0FBQyxJQUF1QjtRQUN6QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFrQixFQUFFLE1BQU0sR0FBRyxLQUFLO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksTUFBTSxFQUFFO2tCQUNKLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7O2tCQUMzQixpQkFBaUIsR0FBRyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFLENBQUMsbUJBQ2pFLFFBQVEsSUFDWCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQy9DLEVBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxtQkFDTixJQUFJLENBQUMsS0FBSyxJQUNiLFVBQVUsRUFBRSxpQkFBaUIsSUFDN0IsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7OztJQTdCQyw2QkFBVzs7SUFFWCxnQ0FBbUI7O0lBc0JuQixtQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRDaGVja2JveCwgSW5wdXRDaGVja2JveERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nW107XG5cbmV4cG9ydCBjbGFzcyBGYWNldENoZWNrYm94RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2YWx1ZTogRkFDRVRfVkFMVUU7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dENoZWNrYm94RGF0YSk6IElucHV0Q2hlY2tib3hEYXRhIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBGQUNFVF9WQUxVRSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IGNoZWNrYm94ZXMgfSA9IHRoaXMuaW5wdXQ7XG4gICAgICBjb25zdCB1cGRhdGVkQ2hlY2tib3hlcyA9IGNoZWNrYm94ZXMubWFwKChjaGVja2JveDogSW5wdXRDaGVja2JveCkgPT4gKHtcbiAgICAgICAgLi4uY2hlY2tib3gsXG4gICAgICAgIGNoZWNrZWQ6IHZhbHVlLmluZGV4T2YoY2hlY2tib3gucGF5bG9hZCkgIT09IC0xXG4gICAgICB9KSk7XG4gICAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXG4gICAgICAgIGNoZWNrYm94ZXM6IHVwZGF0ZWRDaGVja2JveGVzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgfVxufVxuIl19