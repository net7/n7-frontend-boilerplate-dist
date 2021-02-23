import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSidebarHeaderDS = /** @class */ (function (_super) {
    __extends(AwSidebarHeaderDS, _super);
    function AwSidebarHeaderDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSidebarHeaderDS.prototype.transform = function (data) {
        return {
            iconLeft: 'n7-icon-tree-icon',
            text: data.text || '',
            iconRight: 'n7-icon-angle-left',
            classes: 'is-expanded',
            payload: 'header',
        };
    };
    AwSidebarHeaderDS.prototype.toggleSidebar = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NpZGViYXItaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBdUMscUNBQVU7SUFBakQ7O0lBcUJBLENBQUM7SUFwQlcscUNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxvQkFBb0I7WUFDL0IsT0FBTyxFQUFFLGFBQWE7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEtBQUssYUFBYSxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7U0FDL0M7YUFBTTtZQUNMLFdBQVcsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1lBQ3BDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBckJELENBQXVDLFVBQVUsR0FxQmhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NpZGViYXJIZWFkZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWNvbkxlZnQ6ICduNy1pY29uLXRyZWUtaWNvbicsXHJcbiAgICAgIHRleHQ6IGRhdGEudGV4dCB8fCAnJyxcclxuICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1sZWZ0JyxcclxuICAgICAgY2xhc3NlczogJ2lzLWV4cGFuZGVkJyxcclxuICAgICAgcGF5bG9hZDogJ2hlYWRlcicsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2lkZWJhcigpIHtcclxuICAgIGNvbnN0IHNpZGViYXJEYXRhID0gdGhpcy5vdXRwdXQ7XHJcbiAgICBpZiAoc2lkZWJhckRhdGEuY2xhc3NlcyA9PT0gJ2lzLWV4cGFuZGVkJykge1xyXG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gJ2lzLWNvbGxhcHNlZCc7XHJcbiAgICAgIHNpZGViYXJEYXRhLmljb25SaWdodCA9ICduNy1pY29uLWFuZ2xlLXJpZ2h0JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtZXhwYW5kZWQnO1xyXG4gICAgICBzaWRlYmFyRGF0YS5pY29uUmlnaHQgPSAnbjctaWNvbi1hbmdsZS1sZWZ0JztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19