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
            iconRight: data.isExpanded ? 'n7-icon-angle-left' : 'n7-icon-angle-right',
            classes: data.isExpanded ? 'is-expanded' : 'is-collapsed',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NpZGViYXItaGVhZGVyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBdUMscUNBQVU7SUFBakQ7O0lBcUJBLENBQUM7SUFwQlcscUNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMscUJBQXFCO1lBQ3pFLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGNBQWM7WUFDekQsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEtBQUssYUFBYSxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7U0FDL0M7YUFBTTtZQUNMLFdBQVcsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1lBQ3BDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBckJELENBQXVDLFVBQVUsR0FxQmhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NpZGViYXJIZWFkZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWNvbkxlZnQ6ICduNy1pY29uLXRyZWUtaWNvbicsXHJcbiAgICAgIHRleHQ6IGRhdGEudGV4dCB8fCAnJyxcclxuICAgICAgaWNvblJpZ2h0OiBkYXRhLmlzRXhwYW5kZWQgPyAnbjctaWNvbi1hbmdsZS1sZWZ0JyA6ICduNy1pY29uLWFuZ2xlLXJpZ2h0JyxcclxuICAgICAgY2xhc3NlczogZGF0YS5pc0V4cGFuZGVkID8gJ2lzLWV4cGFuZGVkJyA6ICdpcy1jb2xsYXBzZWQnLFxyXG4gICAgICBwYXlsb2FkOiAnaGVhZGVyJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgY29uc3Qgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDtcclxuICAgIGlmIChzaWRlYmFyRGF0YS5jbGFzc2VzID09PSAnaXMtZXhwYW5kZWQnKSB7XHJcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtY29sbGFwc2VkJztcclxuICAgICAgc2lkZWJhckRhdGEuaWNvblJpZ2h0ID0gJ243LWljb24tYW5nbGUtcmlnaHQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1leHBhbmRlZCc7XHJcbiAgICAgIHNpZGViYXJEYXRhLmljb25SaWdodCA9ICduNy1pY29uLWFuZ2xlLWxlZnQnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=