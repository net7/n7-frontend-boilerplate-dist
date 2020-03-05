/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/subnav.ds.ts
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
            items: data,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibmF2LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvc3VibmF2LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUF1QkEsQ0FBQzs7Ozs7O0lBdEJXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCLE9BQU87WUFDTCxPQUFPLEVBQUUsYUFBYTtZQUN0QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDRCQUFTOzs7O0lBQVQsVUFBVSxFQUFFO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBSTtZQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNEJBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBbkIsQ0FBbUIsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUM1RSxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUF2QkQsQ0FBOEIsVUFBVSxHQXVCdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1Ym5hdkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjbGFzc2VzOiAnbWFpbi1zdWJuYXYnLFxyXG4gICAgICBpdGVtczogZGF0YSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmUoaWQpIHtcclxuICAgIHRoaXMub3V0cHV0Lml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uX21ldGEuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgaXRlbS5jbGFzc2VzID0gJ2lzLWN1cnJlbnQnO1xyXG4gICAgICAgIGl0ZW0uX21ldGEuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NlcyA9ICcnO1xyXG4gICAgICAgIGl0ZW0uX21ldGEuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRBY3RpdmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vdXRwdXQuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLl9tZXRhLmlzQWN0aXZlKVswXSB8fCBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=