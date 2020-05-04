/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/sidebar-header.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSidebarHeaderDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSidebarHeaderDS, _super);
    function AwSidebarHeaderDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSidebarHeaderDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return {
            iconLeft: 'n7-icon-tree-icon',
            text: data.text || '',
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header',
        };
    };
    /**
     * @return {?}
     */
    AwSidebarHeaderDS.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sidebarData = this.output;
        if (sidebarData.classes === 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
            sidebarData.iconRight = 'n7-icon-angle-right';
        }
        else {
            sidebarData.classes = 'is-expanded';
            sidebarData.iconRight = 'n7-icon-angle-left';
        }
    };
    return AwSidebarHeaderDS;
}(DataSource));
export { AwSidebarHeaderDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NpZGViYXItaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUF1Qyw2Q0FBVTtJQUFqRDs7SUFxQkEsQ0FBQzs7Ozs7O0lBcEJXLHFDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDckIsU0FBUyxFQUFFLG9CQUFvQjtZQUMvQixPQUFPLEVBQUUsYUFBYTtZQUN0QixPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjs7WUFDUSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDL0IsSUFBSSxXQUFXLENBQUMsT0FBTyxLQUFLLGFBQWEsRUFBRTtZQUN6QyxXQUFXLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxXQUFXLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1NBQy9DO2FBQU07WUFDTCxXQUFXLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztZQUNwQyxXQUFXLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUF1QyxVQUFVLEdBcUJoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1NpZGViYXJIZWFkZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbkxlZnQ6ICduNy1pY29uLXRyZWUtaWNvbicsXG4gICAgICB0ZXh0OiBkYXRhLnRleHQgfHwgJycsXG4gICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLWxlZnQnLFxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcbiAgICAgIHBheWxvYWQ6ICdoZWFkZXInLFxuICAgIH07XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXJEYXRhID0gdGhpcy5vdXRwdXQ7XG4gICAgaWYgKHNpZGViYXJEYXRhLmNsYXNzZXMgPT09ICdpcy1leHBhbmRlZCcpIHtcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtY29sbGFwc2VkJztcbiAgICAgIHNpZGViYXJEYXRhLmljb25SaWdodCA9ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcbiAgICB9IGVsc2Uge1xuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1leHBhbmRlZCc7XG4gICAgICBzaWRlYmFyRGF0YS5pY29uUmlnaHQgPSAnbjctaWNvbi1hbmdsZS1sZWZ0JztcbiAgICB9XG4gIH1cbn1cbiJdfQ==