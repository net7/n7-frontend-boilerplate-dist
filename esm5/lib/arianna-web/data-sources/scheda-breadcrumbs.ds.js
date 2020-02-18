/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaBreadcrumbsDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSchedaBreadcrumbsDS, _super);
    function AwSchedaBreadcrumbsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSchedaBreadcrumbsDS.prototype.transform = /**
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
    AwSchedaBreadcrumbsDS.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sidebarData = this.output;
        if (sidebarData.classes == "is-expanded") {
            sidebarData.classes = "is-collapsed";
        }
        else {
            sidebarData.classes = "is-expanded";
        }
        this.update(sidebarData);
    };
    return AwSchedaBreadcrumbsDS;
}(DataSource));
export { AwSchedaBreadcrumbsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtYnJlYWRjcnVtYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBMkMsaURBQVU7SUFBckQ7O0lBZUEsQ0FBQzs7Ozs7O0lBYlcseUNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsNkNBQWE7OztJQUFiOztZQUNRLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUM3QixJQUFLLFdBQVcsQ0FBQyxPQUFPLElBQUksYUFBYSxFQUFHO1lBQzFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxXQUFXLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQWZELENBQTJDLFVBQVUsR0FlcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFCcmVhZGNydW1ic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7ICBcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgICBsZXQgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDsgICAgXG4gICAgICBpZiAoIHNpZGViYXJEYXRhLmNsYXNzZXMgPT0gXCJpcy1leHBhbmRlZFwiICkge1xuICAgICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gXCJpcy1jb2xsYXBzZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gXCJpcy1leHBhbmRlZFwiO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZShzaWRlYmFyRGF0YSk7XG4gIH1cbn0iXX0=