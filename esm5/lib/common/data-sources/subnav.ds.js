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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibmF2LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvc3VibmF2LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUF1QkEsQ0FBQzs7Ozs7O0lBdEJXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCLE9BQU87WUFDTCxPQUFPLEVBQUUsYUFBYTtZQUN0QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDRCQUFTOzs7O0lBQVQsVUFBVSxFQUFFO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBSTtZQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNEJBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBbkIsQ0FBbUIsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUM1RSxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUF2QkQsQ0FBOEIsVUFBVSxHQXVCdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgU3VibmF2RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6ICdtYWluLXN1Ym5hdicsXG4gICAgICBpdGVtczogZGF0YSxcbiAgICB9O1xuICB9XG5cbiAgc2V0QWN0aXZlKGlkKSB7XG4gICAgdGhpcy5vdXRwdXQuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uX21ldGEuaWQgPT09IGlkKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NlcyA9ICdpcy1jdXJyZW50JztcbiAgICAgICAgaXRlbS5fbWV0YS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNsYXNzZXMgPSAnJztcbiAgICAgICAgaXRlbS5fbWV0YS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLm91dHB1dC5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uX21ldGEuaXNBY3RpdmUpWzBdIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==