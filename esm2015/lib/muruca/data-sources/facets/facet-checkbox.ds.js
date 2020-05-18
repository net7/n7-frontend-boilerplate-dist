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
        this.value = Array.isArray(value) ? value : [value];
        if (update) {
            const { checkboxes } = this.input;
            /** @type {?} */
            const updatedCheckboxes = checkboxes.map((/**
             * @param {?} checkbox
             * @return {?}
             */
            (checkbox) => (Object.assign({}, checkbox, { checked: this.value.indexOf(checkbox.payload) !== -1 }))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtY2hlY2tib3guZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQS9DOztRQUdFLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBK0J4QixhQUFROzs7UUFBRyxHQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztJQUszQyxDQUFDOzs7Ozs7SUFsQ1csU0FBUyxDQUFDLElBQXVCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWtCLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsSUFBSSxNQUFNLEVBQUU7a0JBQ0osRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSzs7a0JBQzNCLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUUsQ0FBQyxtQkFDakUsUUFBUSxJQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQ3BELEVBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxtQkFDTixJQUFJLENBQUMsS0FBSyxJQUNiLFVBQVUsRUFBRSxpQkFBaUIsSUFDN0IsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTs7Y0FDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQjthQUFNLElBQUksQ0FBQyxTQUFTLElBQUksTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7OztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7OztJQXRDQyw2QkFBVzs7SUFFWCxnQ0FBd0I7O0lBK0J4QixtQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRDaGVja2JveCwgSW5wdXRDaGVja2JveERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG50eXBlIEZBQ0VUX1ZBTFVFID0gc3RyaW5nW107XG5cbmV4cG9ydCBjbGFzcyBGYWNldENoZWNrYm94RFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2YWx1ZTogRkFDRVRfVkFMVUUgPSBbXTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0Q2hlY2tib3hEYXRhKTogSW5wdXRDaGVja2JveERhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgY2hlY2tib3hlcyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDaGVja2JveGVzID0gY2hlY2tib3hlcy5tYXAoKGNoZWNrYm94OiBJbnB1dENoZWNrYm94KSA9PiAoe1xuICAgICAgICAuLi5jaGVja2JveCxcbiAgICAgICAgY2hlY2tlZDogdGhpcy52YWx1ZS5pbmRleE9mKGNoZWNrYm94LnBheWxvYWQpICE9PSAtMVxuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBjaGVja2JveGVzOiB1cGRhdGVkQ2hlY2tib3hlc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlVmFsdWUoeyBpbnB1dFBheWxvYWQsIHZhbHVlOiBpc0NoZWNrZWQgfSkge1xuICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMudmFsdWUuaW5kZXhPZihpbnB1dFBheWxvYWQpICE9PSAtMTtcbiAgICBpZiAoaXNDaGVja2VkICYmICFleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUucHVzaChpbnB1dFBheWxvYWQpO1xuICAgIH0gZWxzZSBpZiAoIWlzQ2hlY2tlZCAmJiBleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUuc3BsaWNlKHRoaXMudmFsdWUuaW5kZXhPZihpbnB1dFBheWxvYWQpLCAxKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgfVxufVxuIl19