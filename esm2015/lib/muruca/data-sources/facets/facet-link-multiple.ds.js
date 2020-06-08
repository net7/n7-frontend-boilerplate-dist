/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
/** @type {?} */
const ACTIVE_CLASS = 'is-active';
export class FacetLinkMultipleDS extends DataSource {
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
            const { links } = this.input;
            /** @type {?} */
            const updatedLinks = links.map((/**
             * @param {?} link
             * @return {?}
             */
            (link) => (Object.assign({}, link, { classes: this.value.includes(link.payload) ? ACTIVE_CLASS : '' }))));
            this.update(Object.assign({}, this.input, { links: updatedLinks }));
        }
    }
    /**
     * @param {?} linkValue
     * @return {?}
     */
    toggleValue(linkValue) {
        /** @type {?} */
        const exists = this.value.includes(linkValue);
        if (!exists) {
            this.value.push(linkValue);
        }
        else if (exists) {
            this.value.splice(this.value.indexOf(linkValue), 1);
        }
        // update
        this.setValue(this.value, true);
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
    FacetLinkMultipleDS.prototype.id;
    /** @type {?} */
    FacetLinkMultipleDS.prototype.value;
    /** @type {?} */
    FacetLinkMultipleDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay1tdWx0aXBsZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLW11bHRpcGxlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O01BSXpDLFlBQVksR0FBRyxXQUFXO0FBRWhDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxVQUFVO0lBQW5EOztRQUdFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFrQ1gsYUFBUTs7O1FBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztJQUs5QixDQUFDOzs7Ozs7SUFyQ1csU0FBUyxDQUFDLElBQW1CO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsS0FBSztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLE1BQU0sRUFBRTtrQkFDSixFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLOztrQkFDdEIsWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxJQUFlLEVBQUUsRUFBRSxDQUFDLG1CQUMvQyxJQUFJLElBQ1AsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQzlELEVBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxtQkFDTixJQUFJLENBQUMsS0FBSyxJQUNiLEtBQUssRUFBRSxZQUFZLElBQ25CLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQVM7O2NBQ2IsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUVELFNBQVM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7OztJQXpDQyxpQ0FBVzs7SUFFWCxvQ0FBVzs7SUFrQ1gsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElucHV0TGluaywgSW5wdXRMaW5rRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XG5cbmNvbnN0IEFDVElWRV9DTEFTUyA9ICdpcy1hY3RpdmUnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRMaW5rTXVsdGlwbGVEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHZhbHVlID0gW107XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbnB1dExpbmtEYXRhKTogSW5wdXRMaW5rRGF0YSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IGxpbmtzIH0gPSB0aGlzLmlucHV0O1xuICAgICAgY29uc3QgdXBkYXRlZExpbmtzID0gbGlua3MubWFwKChsaW5rOiBJbnB1dExpbmspID0+ICh7XG4gICAgICAgIC4uLmxpbmssXG4gICAgICAgIGNsYXNzZXM6IHRoaXMudmFsdWUuaW5jbHVkZXMobGluay5wYXlsb2FkKSA/IEFDVElWRV9DTEFTUyA6ICcnXG4gICAgICB9KSk7XG4gICAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXG4gICAgICAgIGxpbmtzOiB1cGRhdGVkTGlua3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVZhbHVlKGxpbmtWYWx1ZSkge1xuICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMudmFsdWUuaW5jbHVkZXMobGlua1ZhbHVlKTtcbiAgICBpZiAoIWV4aXN0cykge1xuICAgICAgdGhpcy52YWx1ZS5wdXNoKGxpbmtWYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChleGlzdHMpIHtcbiAgICAgIHRoaXMudmFsdWUuc3BsaWNlKHRoaXMudmFsdWUuaW5kZXhPZihsaW5rVmFsdWUpLCAxKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGVcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgfVxufVxuIl19