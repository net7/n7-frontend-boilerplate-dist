/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class MrHeroDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { classes } = this.options;
        return Object.assign({}, data, { classes: classes || '' });
    }
}
if (false) {
    /** @type {?} */
    MrHeroDS.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2hlcm8uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sUUFBUyxTQUFRLFVBQVU7Ozs7OztJQUc1QixTQUFTLENBQUMsSUFBUztjQUNyQixFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQ2hDLHlCQUFZLElBQUksSUFBRSxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsSUFBRztJQUM3QyxDQUFDO0NBQ0Y7OztJQU5DLHNCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1ySGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIHJldHVybiB7IC4uLmRhdGEsIGNsYXNzZXM6IGNsYXNzZXMgfHwgJycgfTtcbiAgfVxufVxuIl19