/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/header.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUFtQkEsQ0FBQzs7Ozs7O0lBbEJXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBRXRCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVNLGdDQUFhOzs7O0lBQXBCLFVBQXFCLFlBQVk7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxVQUFBLElBQUk7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSyxJQUFJLENBQUMsT0FBTyxJQUFJLFlBQVksRUFBRTtnQkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7YUFDN0I7UUFDSCxDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBbkJELENBQThCLFVBQVUsR0FtQnZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEhlYWRlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuXG4gICAgaWYgKGRhdGEuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0TmF2SXRlbShkYXRhLnNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5pdGVtcztcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3ROYXZJdGVtKHNlbGVjdGVkSXRlbSkge1xuICAgIHRoaXMub3V0cHV0Lm5hdi5pdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgIGl0ZW0uY2xhc3NlcyA9IFwiXCI7XG4gICAgICBpZiAoIGl0ZW0ucGF5bG9hZCA9PSBzZWxlY3RlZEl0ZW0gKXtcbiAgICAgICAgaXRlbS5jbGFzc2VzID0gXCJpcy1jdXJyZW50XCI7XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnVwZGF0ZSh7J2l0ZW1zJzogdGhpcy5vdXRwdXR9KTtcbiAgfVxufVxuIl19