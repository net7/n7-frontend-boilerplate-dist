/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQS9DOztRQXlCRSxhQUFROzs7UUFBRyxHQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztJQUszQyxDQUFDOzs7Ozs7SUF6QlcsU0FBUyxDQUFDLElBQXVCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWtCLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLEVBQUU7a0JBQ0osRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSzs7a0JBQzNCLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUUsQ0FBQyxtQkFDakUsUUFBUSxJQUNYLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFDL0MsRUFBQztZQUNILElBQUksQ0FBQyxNQUFNLG1CQUNOLElBQUksQ0FBQyxLQUFLLElBQ2IsVUFBVSxFQUFFLGlCQUFpQixJQUM3QixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBSUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjs7O0lBN0JDLDZCQUFXOztJQUVYLGdDQUFtQjs7SUFzQm5CLG1DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dENoZWNrYm94LCBJbnB1dENoZWNrYm94RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmdbXTtcblxuZXhwb3J0IGNsYXNzIEZhY2V0Q2hlY2tib3hEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlOiBGQUNFVF9WQUxVRTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0Q2hlY2tib3hEYXRhKTogSW5wdXRDaGVja2JveERhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgY2hlY2tib3hlcyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDaGVja2JveGVzID0gY2hlY2tib3hlcy5tYXAoKGNoZWNrYm94OiBJbnB1dENoZWNrYm94KSA9PiAoe1xuICAgICAgICAuLi5jaGVja2JveCxcbiAgICAgICAgY2hlY2tlZDogdmFsdWUuaW5kZXhPZihjaGVja2JveC5wYXlsb2FkKSAhPT0gLTFcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgY2hlY2tib3hlczogdXBkYXRlZENoZWNrYm94ZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IFtdO1xuICB9XG59XG4iXX0=