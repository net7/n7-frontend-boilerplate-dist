/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/data-sources/facets/facet-select.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class FacetSelectDS extends DataSource {
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
            const { options } = this.input;
            /** @type {?} */
            const updatedOptions = options.map((/**
             * @param {?} option
             * @return {?}
             */
            (option) => (Object.assign({}, option, { selected: value === option.value }))));
            this.update(Object.assign({}, this.input, { options: updatedOptions }));
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
    FacetSelectDS.prototype.id;
    /** @type {?} */
    FacetSelectDS.prototype.value;
    /** @type {?} */
    FacetSelectDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtc2VsZWN0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LXNlbGVjdC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8sYUFBYyxTQUFRLFVBQVU7SUFBN0M7O1FBeUJFLGFBQVE7OztRQUFHLEdBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO0lBSzNDLENBQUM7Ozs7OztJQXpCVyxTQUFTLENBQUMsSUFBcUI7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBa0IsRUFBRSxNQUFNLEdBQUcsS0FBSztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLE1BQU0sRUFBRTtrQkFDSixFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLOztrQkFDeEIsY0FBYyxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLG1CQUMxQyxNQUFNLElBQ1QsUUFBUSxFQUFFLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxJQUNoQyxFQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sbUJBQ04sSUFBSSxDQUFDLEtBQUssSUFDYixPQUFPLEVBQUUsY0FBYyxJQUN2QixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBSUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Q0FDRjs7O0lBN0JDLDJCQUFXOztJQUVYLDhCQUFtQjs7SUFzQm5CLGlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dFNlbGVjdERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nIHwgbnVsbDtcblxuZXhwb3J0IGNsYXNzIEZhY2V0U2VsZWN0RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2YWx1ZTogRkFDRVRfVkFMVUU7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dFNlbGVjdERhdGEpOiBJbnB1dFNlbGVjdERhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRPcHRpb25zID0gb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHtcbiAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICBzZWxlY3RlZDogdmFsdWUgPT09IG9wdGlvbi52YWx1ZVxuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBvcHRpb25zOiB1cGRhdGVkT3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgfVxufVxuIl19