import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaBreadcrumbsDS = /** @class */ (function (_super) {
    __extends(AwSchedaBreadcrumbsDS, _super);
    function AwSchedaBreadcrumbsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transform = function (data) { return data; };
        return _this;
    }
    AwSchedaBreadcrumbsDS.prototype.toggleSidebar = function () {
        var sidebarData = this.output;
        if (sidebarData.classes === 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
        }
        else {
            sidebarData.classes = 'is-expanded';
        }
        this.update(sidebarData);
    };
    return AwSchedaBreadcrumbsDS;
}(DataSource));
export { AwSchedaBreadcrumbsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtYnJlYWRjcnVtYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUEyQyx5Q0FBVTtJQUFyRDtRQUFBLHFFQVlDO1FBWFcsZUFBUyxHQUFHLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQzs7SUFXdkMsQ0FBQztJQVRDLDZDQUFhLEdBQWI7UUFDRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksV0FBVyxDQUFDLE9BQU8sS0FBSyxhQUFhLEVBQUU7WUFDekMsV0FBVyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7U0FDdEM7YUFBTTtZQUNMLFdBQVcsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBMkMsVUFBVSxHQVlwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFCcmVhZGNydW1ic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiBkYXRhO1xyXG5cclxuICB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgY29uc3Qgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDtcclxuICAgIGlmIChzaWRlYmFyRGF0YS5jbGFzc2VzID09PSAnaXMtZXhwYW5kZWQnKSB7XHJcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtY29sbGFwc2VkJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtZXhwYW5kZWQnO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=