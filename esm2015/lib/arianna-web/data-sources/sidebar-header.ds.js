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
        return {
            iconLeft: 'n7-icon-tree-icon',
            text: data.text || '',
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header'
        };
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        const sidebarData = this.output;
        if (sidebarData.classes === 'is-expanded') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NpZGViYXItaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVOzs7Ozs7SUFFckMsU0FBUyxDQUFDLElBQUk7UUFDdEIsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNyQixTQUFTLEVBQUUsb0JBQW9CO1lBQy9CLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsYUFBYTs7Y0FDSCxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDL0IsSUFBSyxXQUFXLENBQUMsT0FBTyxLQUFLLGFBQWEsRUFBRztZQUMzQyxXQUFXLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxXQUFXLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1NBRTdDO2FBQU07WUFDTCxXQUFXLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztZQUNwQyxXQUFXLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2lkZWJhckhlYWRlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWNvbkxlZnQ6ICduNy1pY29uLXRyZWUtaWNvbicsXHJcbiAgICAgIHRleHQ6IGRhdGEudGV4dCB8fCAnJyxcclxuICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1sZWZ0JyxcclxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcclxuICAgICAgcGF5bG9hZDogJ2hlYWRlcidcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgICBjb25zdCBzaWRlYmFyRGF0YSA9IHRoaXMub3V0cHV0O1xyXG4gICAgICBpZiAoIHNpZGViYXJEYXRhLmNsYXNzZXMgPT09ICdpcy1leHBhbmRlZCcgKSB7XHJcbiAgICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1jb2xsYXBzZWQnO1xyXG4gICAgICAgIHNpZGViYXJEYXRhLmljb25SaWdodCA9ICduNy1pY29uLXRyZWUtaWNvbic7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtZXhwYW5kZWQnO1xyXG4gICAgICAgIHNpZGViYXJEYXRhLmljb25SaWdodCA9ICduNy1pY29uLWFuZ2xlLWxlZnQnO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=