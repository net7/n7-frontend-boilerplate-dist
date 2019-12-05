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
        return data;
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
        if (sidebarData.classes == 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
            sidebarData.iconRight = 'n7-icon-tree-icon';
        }
        else {
            sidebarData.classes = 'is-expanded';
            sidebarData.iconRight = 'n7-icon-angle-left';
        }
        this.update(sidebarData);
    };
    return AwSidebarHeaderDS;
}(DataSource));
export { AwSidebarHeaderDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NpZGViYXItaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUF1Qyw2Q0FBVTtJQUFqRDs7SUFrQkEsQ0FBQzs7Ozs7O0lBaEJXLHFDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjs7WUFDUSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDN0IsSUFBSyxXQUFXLENBQUMsT0FBTyxJQUFJLGFBQWEsRUFBRztZQUMxQyxXQUFXLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxXQUFXLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1NBRTdDO2FBQU07WUFDTCxXQUFXLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztZQUNwQyxXQUFXLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBbEJELENBQXVDLFVBQVUsR0FrQmhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3U2lkZWJhckhlYWRlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgICAgbGV0IHNpZGViYXJEYXRhID0gdGhpcy5vdXRwdXQ7XG4gICAgICBpZiAoIHNpZGViYXJEYXRhLmNsYXNzZXMgPT0gJ2lzLWV4cGFuZGVkJyApIHtcbiAgICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1jb2xsYXBzZWQnO1xuICAgICAgICBzaWRlYmFyRGF0YS5pY29uUmlnaHQgPSAnbjctaWNvbi10cmVlLWljb24nO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gJ2lzLWV4cGFuZGVkJztcbiAgICAgICAgc2lkZWJhckRhdGEuaWNvblJpZ2h0ID0gJ243LWljb24tYW5nbGUtbGVmdCc7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKHNpZGViYXJEYXRhKTtcbiAgfVxufSJdfQ==