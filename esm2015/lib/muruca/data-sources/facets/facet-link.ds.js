/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/data-sources/facets/facet-link.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
/** @type {?} */
const ACTIVE_CLASS = 'is-active';
export class FacetLinkDS extends DataSource {
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
            const { links } = this.input;
            /** @type {?} */
            const updatedLinks = links.map((/**
             * @param {?} link
             * @return {?}
             */
            (link) => (Object.assign({}, link, { classes: value.indexOf(link.payload) !== -1 ? ACTIVE_CLASS : '' }))));
            this.update(Object.assign({}, this.input, { links: updatedLinks }));
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
    FacetLinkDS.prototype.id;
    /** @type {?} */
    FacetLinkDS.prototype.value;
    /** @type {?} */
    FacetLinkDS.prototype.getValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1saW5rLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztNQU16QyxZQUFZLEdBQUcsV0FBVztBQUVoQyxNQUFNLE9BQU8sV0FBWSxTQUFRLFVBQVU7SUFBM0M7O1FBeUJFLGFBQVE7OztRQUFHLEdBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO0lBSzNDLENBQUM7Ozs7OztJQXpCVyxTQUFTLENBQUMsSUFBbUI7UUFDckMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBa0IsRUFBRSxNQUFNLEdBQUcsS0FBSztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLE1BQU0sRUFBRTtrQkFDSixFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLOztrQkFDdEIsWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxJQUFlLEVBQUUsRUFBRSxDQUFDLG1CQUMvQyxJQUFJLElBQ1AsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFDL0QsRUFBQztZQUNILElBQUksQ0FBQyxNQUFNLG1CQUNOLElBQUksQ0FBQyxLQUFLLElBQ2IsS0FBSyxFQUFFLFlBQVksSUFDbkIsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7OztJQTdCQyx5QkFBVzs7SUFFWCw0QkFBbUI7O0lBc0JuQiwrQkFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRMaW5rLCBJbnB1dExpbmtEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcblxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZ1tdO1xuXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnaXMtYWN0aXZlJztcblxuZXhwb3J0IGNsYXNzIEZhY2V0TGlua0RTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW5wdXRMaW5rRGF0YSk6IElucHV0TGlua0RhdGEge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgbGlua3MgfSA9IHRoaXMuaW5wdXQ7XG4gICAgICBjb25zdCB1cGRhdGVkTGlua3MgPSBsaW5rcy5tYXAoKGxpbms6IElucHV0TGluaykgPT4gKHtcbiAgICAgICAgLi4ubGluayxcbiAgICAgICAgY2xhc3NlczogdmFsdWUuaW5kZXhPZihsaW5rLnBheWxvYWQpICE9PSAtMSA/IEFDVElWRV9DTEFTUyA6ICcnXG4gICAgICB9KSk7XG4gICAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXG4gICAgICAgIGxpbmtzOiB1cGRhdGVkTGlua3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IFtdO1xuICB9XG59XG4iXX0=