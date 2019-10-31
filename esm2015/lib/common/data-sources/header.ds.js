/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class HeaderDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (data.selected) {
            this.selectNavItem(data.selected);
        }
        return data.items;
    }
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    selectNavItem(selectedItem) {
        this.output.nav.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.classes = "";
            if (item.payload == selectedItem) {
                item.classes = "is-current";
            }
        }));
        this.update({ 'items': this.output });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVOzs7Ozs7SUFDNUIsU0FBUyxDQUFDLElBQUk7UUFFdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU0sYUFBYSxDQUFDLFlBQVk7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxJQUFJLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFLLElBQUksQ0FBQyxPQUFPLElBQUksWUFBWSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQzthQUM3QjtRQUNILENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSGVhZGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG5cbiAgICBpZiAoZGF0YS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3ROYXZJdGVtKGRhdGEuc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLml0ZW1zO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE5hdkl0ZW0oc2VsZWN0ZWRJdGVtKSB7XG4gICAgdGhpcy5vdXRwdXQubmF2Lml0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgaXRlbS5jbGFzc2VzID0gXCJcIjtcbiAgICAgIGlmICggaXRlbS5wYXlsb2FkID09IHNlbGVjdGVkSXRlbSApe1xuICAgICAgICBpdGVtLmNsYXNzZXMgPSBcImlzLWN1cnJlbnRcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMudXBkYXRlKHsnaXRlbXMnOiB0aGlzLm91dHB1dH0pO1xuICB9XG59XG4iXX0=