/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var HeaderDS = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderDS, _super);
    function HeaderDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    HeaderDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data.selected) {
            this.selectNavItem(data.selected);
        }
        return data.items;
    };
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    HeaderDS.prototype.selectNavItem = /**
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        this.output.nav.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.classes = "";
            if (item.payload == selectedItem) {
                item.classes = "is-current";
            }
        }));
        this.update({ 'items': this.output });
    };
    return HeaderDS;
}(DataSource));
export { HeaderDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQThCLG9DQUFVO0lBQXhDOztJQW1CQSxDQUFDOzs7Ozs7SUFsQlcsNEJBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFFdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU0sZ0NBQWE7Ozs7SUFBcEIsVUFBcUIsWUFBWTtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFFLFVBQUEsSUFBSTtZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFLLElBQUksQ0FBQyxPQUFPLElBQUksWUFBWSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQzthQUM3QjtRQUNILENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFuQkQsQ0FBOEIsVUFBVSxHQW1CdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSGVhZGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG5cbiAgICBpZiAoZGF0YS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3ROYXZJdGVtKGRhdGEuc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLml0ZW1zO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE5hdkl0ZW0oc2VsZWN0ZWRJdGVtKSB7XG4gICAgdGhpcy5vdXRwdXQubmF2Lml0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgaXRlbS5jbGFzc2VzID0gXCJcIjtcbiAgICAgIGlmICggaXRlbS5wYXlsb2FkID09IHNlbGVjdGVkSXRlbSApe1xuICAgICAgICBpdGVtLmNsYXNzZXMgPSBcImlzLWN1cnJlbnRcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMudXBkYXRlKHsnaXRlbXMnOiB0aGlzLm91dHB1dH0pO1xuICB9XG59XG4iXX0=