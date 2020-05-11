/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class FacetCheckboxDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = [];
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
     * @param {?} __0
     * @return {?}
     */
    toggleValue({ inputPayload, value: isChecked }) {
        /** @type {?} */
        const exists = this.value.indexOf(inputPayload) !== -1;
        if (isChecked && !exists) {
            this.value.push(inputPayload);
        }
        else if (!isChecked && exists) {
            this.value.splice(this.value.indexOf(inputPayload), 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQS9DOztRQUdFLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBK0J4QixhQUFROzs7UUFBRyxHQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztJQUszQyxDQUFDOzs7Ozs7SUFsQ1csU0FBUyxDQUFDLElBQXVCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWtCLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLEVBQUU7a0JBQ0osRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSzs7a0JBQzNCLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUUsQ0FBQyxtQkFDakUsUUFBUSxJQUNYLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFDL0MsRUFBQztZQUNILElBQUksQ0FBQyxNQUFNLG1CQUNOLElBQUksQ0FBQyxLQUFLLElBQ2IsVUFBVSxFQUFFLGlCQUFpQixJQUM3QixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFOztjQUN0QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxDQUFDLFNBQVMsSUFBSSxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDOzs7O0lBSUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjs7O0lBdENDLDZCQUFXOztJQUVYLGdDQUF3Qjs7SUErQnhCLG1DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbnB1dENoZWNrYm94LCBJbnB1dENoZWNrYm94RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmdbXTtcblxuZXhwb3J0IGNsYXNzIEZhY2V0Q2hlY2tib3hEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlOiBGQUNFVF9WQUxVRSA9IFtdO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRDaGVja2JveERhdGEpOiBJbnB1dENoZWNrYm94RGF0YSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogRkFDRVRfVkFMVUUsIHVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBjaGVja2JveGVzIH0gPSB0aGlzLmlucHV0O1xuICAgICAgY29uc3QgdXBkYXRlZENoZWNrYm94ZXMgPSBjaGVja2JveGVzLm1hcCgoY2hlY2tib3g6IElucHV0Q2hlY2tib3gpID0+ICh7XG4gICAgICAgIC4uLmNoZWNrYm94LFxuICAgICAgICBjaGVja2VkOiB2YWx1ZS5pbmRleE9mKGNoZWNrYm94LnBheWxvYWQpICE9PSAtMVxuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBjaGVja2JveGVzOiB1cGRhdGVkQ2hlY2tib3hlc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlVmFsdWUoeyBpbnB1dFBheWxvYWQsIHZhbHVlOiBpc0NoZWNrZWQgfSkge1xuICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMudmFsdWUuaW5kZXhPZihpbnB1dFBheWxvYWQpICE9PSAtMTtcbiAgICBpZiAoaXNDaGVja2VkICYmICFleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUucHVzaChpbnB1dFBheWxvYWQpO1xuICAgIH0gZWxzZSBpZiAoIWlzQ2hlY2tlZCAmJiBleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUuc3BsaWNlKHRoaXMudmFsdWUuaW5kZXhPZihpbnB1dFBheWxvYWQpLCAxKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgfVxufVxuIl19