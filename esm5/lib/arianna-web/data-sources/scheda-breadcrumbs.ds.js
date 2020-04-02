/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaBreadcrumbsDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSchedaBreadcrumbsDS, _super);
    function AwSchedaBreadcrumbsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transform = (/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data; });
        return _this;
    }
    /**
     * @return {?}
     */
    AwSchedaBreadcrumbsDS.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
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
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AwSchedaBreadcrumbsDS.prototype.transform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtYnJlYWRjcnVtYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBMkMsaURBQVU7SUFBckQ7UUFBQSxxRUFZQztRQVhXLGVBQVM7Ozs7UUFBRyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7O0lBV3ZDLENBQUM7Ozs7SUFUQyw2Q0FBYTs7O0lBQWI7O1lBQ1EsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQy9CLElBQUksV0FBVyxDQUFDLE9BQU8sS0FBSyxhQUFhLEVBQUU7WUFDekMsV0FBVyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7U0FDdEM7YUFBTTtZQUNMLFdBQVcsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBMkMsVUFBVSxHQVlwRDs7Ozs7OztJQVhDLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUJyZWFkY3J1bWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiBkYXRhO1xuXG4gIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICBpZiAoc2lkZWJhckRhdGEuY2xhc3NlcyA9PT0gJ2lzLWV4cGFuZGVkJykge1xuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1jb2xsYXBzZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gJ2lzLWV4cGFuZGVkJztcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xuICB9XG59XG4iXX0=