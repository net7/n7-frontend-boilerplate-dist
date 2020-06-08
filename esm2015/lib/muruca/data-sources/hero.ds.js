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
        const { classes, background } = this.options;
        /** @type {?} */
        let back;
        /** @type {?} */
        let image;
        if (background) {
            back = data.image;
            image = false;
        }
        else {
            image = data.image;
            back = false;
        }
        return Object.assign({}, data, { classes, backgroundImage: back, image: image || '' });
    }
}
if (false) {
    /** @type {?} */
    MrHeroDS.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2hlcm8uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sUUFBUyxTQUFRLFVBQVU7Ozs7OztJQUc1QixTQUFTLENBQUMsSUFBUztjQUNyQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTzs7WUFDeEMsSUFBSTs7WUFDSixLQUFLO1FBQ1QsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbEM7YUFBTTtZQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNsQztRQUNELHlCQUNLLElBQUksSUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxJQUFJLEVBQUUsSUFDM0Q7SUFDSixDQUFDO0NBQ0Y7OztJQWZDLHNCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1ySGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgY2xhc3NlcywgYmFja2dyb3VuZCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGxldCBiYWNrO1xuICAgIGxldCBpbWFnZTtcbiAgICBpZiAoYmFja2dyb3VuZCkge1xuICAgICAgYmFjayA9IGRhdGEuaW1hZ2U7IGltYWdlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlID0gZGF0YS5pbWFnZTsgYmFjayA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGF0YSwgY2xhc3NlcywgYmFja2dyb3VuZEltYWdlOiBiYWNrLCBpbWFnZTogaW1hZ2UgfHwgJydcbiAgICB9O1xuICB9XG59XG4iXX0=