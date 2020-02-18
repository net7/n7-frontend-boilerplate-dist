/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var SubnavDS = /** @class */ (function (_super) {
    tslib_1.__extends(SubnavDS, _super);
    function SubnavDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    SubnavDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return {
            classes: 'main-subnav',
            items: data
        };
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SubnavDS.prototype.setActive = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.output.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item._meta.id === id) {
                item.classes = 'is-current';
                item._meta.isActive = true;
            }
            else {
                item.classes = '';
                item._meta.isActive = false;
            }
        }));
    };
    /**
     * @return {?}
     */
    SubnavDS.prototype.getActive = /**
     * @return {?}
     */
    function () {
        return this.output.items.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item._meta.isActive; }))[0] || null;
    };
    return SubnavDS;
}(DataSource));
export { SubnavDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibmF2LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvc3VibmF2LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQThCLG9DQUFVO0lBQXhDOztJQXdCQSxDQUFDOzs7Ozs7SUF0QlcsNEJBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDdEIsT0FBTztZQUNMLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQTtJQUNILENBQUM7Ozs7O0lBRUQsNEJBQVM7Ozs7SUFBVCxVQUFVLEVBQUU7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzVCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDN0I7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCw0QkFBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFuQixDQUFtQixFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzFFLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUE4QixVQUFVLEdBd0J2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBTdWJuYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiAnbWFpbi1zdWJuYXYnLFxuICAgICAgaXRlbXM6IGRhdGFcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmUoaWQpe1xuICAgIHRoaXMub3V0cHV0Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZihpdGVtLl9tZXRhLmlkID09PSBpZCl7XG4gICAgICAgIGl0ZW0uY2xhc3NlcyA9ICdpcy1jdXJyZW50JztcbiAgICAgICAgaXRlbS5fbWV0YS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNsYXNzZXMgPSAnJztcbiAgICAgICAgaXRlbS5fbWV0YS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWN0aXZlKCl7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0Lml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uX21ldGEuaXNBY3RpdmUpWzBdIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==