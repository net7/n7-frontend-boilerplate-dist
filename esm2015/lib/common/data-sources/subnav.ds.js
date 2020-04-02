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
            items: data,
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
        (item) => {
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
        (item) => item._meta.isActive))[0] || null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibmF2LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvc3VibmF2LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVOzs7Ozs7SUFDNUIsU0FBUyxDQUFDLElBQUk7UUFDdEIsT0FBTztZQUNMLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUM1RSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgU3VibmF2RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6ICdtYWluLXN1Ym5hdicsXG4gICAgICBpdGVtczogZGF0YSxcbiAgICB9O1xuICB9XG5cbiAgc2V0QWN0aXZlKGlkKSB7XG4gICAgdGhpcy5vdXRwdXQuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uX21ldGEuaWQgPT09IGlkKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NlcyA9ICdpcy1jdXJyZW50JztcbiAgICAgICAgaXRlbS5fbWV0YS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNsYXNzZXMgPSAnJztcbiAgICAgICAgaXRlbS5fbWV0YS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLm91dHB1dC5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX21ldGEuaXNBY3RpdmUpWzBdIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==