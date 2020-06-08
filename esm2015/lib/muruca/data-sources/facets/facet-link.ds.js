/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
/** @type {?} */
const ACTIVE_CLASS = 'is-active';
export class FacetLinkDS extends DataSource {
    constructor() {
        super(...arguments);
        this.value = null;
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
            const { links } = this.input;
            /** @type {?} */
            const updatedLinks = links.map((/**
             * @param {?} link
             * @return {?}
             */
            (link) => (Object.assign({}, link, { classes: this.value === link.payload ? ACTIVE_CLASS : '' }))));
            this.update(Object.assign({}, this.input, { links: updatedLinks }));
        }
    }
    /**
     * @param {?} linkValue
     * @return {?}
     */
    toggleValue(linkValue) {
        // update
        this.setValue(this.value !== linkValue ? linkValue : null, true);
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
    FacetLinkDS.prototype.id;
    /** @type {?} */
    FacetLinkDS.prototype.value;
    /** @type {?} */
    FacetLinkDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O01BSXpDLFlBQVksR0FBRyxXQUFXO0FBRWhDLE1BQU0sT0FBTyxXQUFZLFNBQVEsVUFBVTtJQUEzQzs7UUFHRSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBMkJiLGFBQVE7OztRQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7SUFLOUIsQ0FBQzs7Ozs7O0lBOUJXLFNBQVMsQ0FBQyxJQUFtQjtRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLEVBQUU7a0JBQ0osRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSzs7a0JBQ3RCLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxtQkFDL0MsSUFBSSxJQUNQLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUN4RCxFQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sbUJBQ04sSUFBSSxDQUFDLEtBQUssSUFDYixLQUFLLEVBQUUsWUFBWSxJQUNuQixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxTQUFTO1FBQ25CLFNBQVM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBSUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Q0FDRjs7O0lBbENDLHlCQUFXOztJQUVYLDRCQUFhOztJQTJCYiwrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRMaW5rLCBJbnB1dExpbmtEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcblxuY29uc3QgQUNUSVZFX0NMQVNTID0gJ2lzLWFjdGl2ZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldExpbmtEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlID0gbnVsbDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IElucHV0TGlua0RhdGEpOiBJbnB1dExpbmtEYXRhIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgbGlua3MgfSA9IHRoaXMuaW5wdXQ7XG4gICAgICBjb25zdCB1cGRhdGVkTGlua3MgPSBsaW5rcy5tYXAoKGxpbms6IElucHV0TGluaykgPT4gKHtcbiAgICAgICAgLi4ubGluayxcbiAgICAgICAgY2xhc3NlczogdGhpcy52YWx1ZSA9PT0gbGluay5wYXlsb2FkID8gQUNUSVZFX0NMQVNTIDogJydcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgbGlua3M6IHVwZGF0ZWRMaW5rc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlVmFsdWUobGlua1ZhbHVlKSB7XG4gICAgLy8gdXBkYXRlXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlICE9PSBsaW5rVmFsdWUgPyBsaW5rVmFsdWUgOiBudWxsLCB0cnVlKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCkgPT4gdGhpcy52YWx1ZTtcblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgfVxufVxuIl19