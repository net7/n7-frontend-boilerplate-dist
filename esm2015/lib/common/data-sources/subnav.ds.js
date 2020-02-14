/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class SubnavDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return {
            classes: 'main-subnav',
            items: data
        };
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setActive(id) {
        this.output.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item._meta.id === id) {
                item.classes = 'is-current';
                item._meta.isActive = true;
            }
            else {
                item.classes = '';
                item._meta.isActive = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    getActive() {
        return this.output.items.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item._meta.isActive))[0] || null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibmF2LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvc3VibmF2LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVOzs7Ozs7SUFFNUIsU0FBUyxDQUFDLElBQUk7UUFDdEIsT0FBTztZQUNMLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQTtJQUNILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUM7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUM3QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzFFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBTdWJuYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiAnbWFpbi1zdWJuYXYnLFxuICAgICAgaXRlbXM6IGRhdGFcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmUoaWQpe1xuICAgIHRoaXMub3V0cHV0Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZihpdGVtLl9tZXRhLmlkID09PSBpZCl7XG4gICAgICAgIGl0ZW0uY2xhc3NlcyA9ICdpcy1jdXJyZW50JztcbiAgICAgICAgaXRlbS5fbWV0YS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNsYXNzZXMgPSAnJztcbiAgICAgICAgaXRlbS5fbWV0YS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWN0aXZlKCl7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0Lml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uX21ldGEuaXNBY3RpdmUpWzBdIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==