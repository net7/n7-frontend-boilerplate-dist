/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/sidebar-header.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwSidebarHeaderDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return data;
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        let sidebarData = this.output;
        if (sidebarData.classes == 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
            sidebarData.iconRight = 'n7-icon-tree-icon';
        }
        else {
            sidebarData.classes = 'is-expanded';
            sidebarData.iconRight = 'n7-icon-angle-left';
        }
        this.update(sidebarData);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NpZGViYXItaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVOzs7Ozs7SUFFckMsU0FBUyxDQUFDLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsYUFBYTs7WUFDTCxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDN0IsSUFBSyxXQUFXLENBQUMsT0FBTyxJQUFJLGFBQWEsRUFBRztZQUMxQyxXQUFXLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxXQUFXLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1NBRTdDO2FBQU07WUFDTCxXQUFXLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztZQUNwQyxXQUFXLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdTaWRlYmFySGVhZGVyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgICBsZXQgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICAgIGlmICggc2lkZWJhckRhdGEuY2xhc3NlcyA9PSAnaXMtZXhwYW5kZWQnICkge1xuICAgICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gJ2lzLWNvbGxhcHNlZCc7XG4gICAgICAgIHNpZGViYXJEYXRhLmljb25SaWdodCA9ICduNy1pY29uLXRyZWUtaWNvbic7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtZXhwYW5kZWQnO1xuICAgICAgICBzaWRlYmFyRGF0YS5pY29uUmlnaHQgPSAnbjctaWNvbi1hbmdsZS1sZWZ0JztcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xuICB9XG59Il19