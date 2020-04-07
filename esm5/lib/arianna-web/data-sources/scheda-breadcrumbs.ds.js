/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-breadcrumbs.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtYnJlYWRjcnVtYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTJDLGlEQUFVO0lBQXJEO1FBQUEscUVBWUM7UUFYVyxlQUFTOzs7O1FBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDOztJQVd2QyxDQUFDOzs7O0lBVEMsNkNBQWE7OztJQUFiOztZQUNRLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUMvQixJQUFJLFdBQVcsQ0FBQyxPQUFPLEtBQUssYUFBYSxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxXQUFXLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQVpELENBQTJDLFVBQVUsR0FZcEQ7Ozs7Ozs7SUFYQywwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFCcmVhZGNydW1ic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSkgPT4gZGF0YTtcblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXJEYXRhID0gdGhpcy5vdXRwdXQ7XG4gICAgaWYgKHNpZGViYXJEYXRhLmNsYXNzZXMgPT09ICdpcy1leHBhbmRlZCcpIHtcbiAgICAgIHNpZGViYXJEYXRhLmNsYXNzZXMgPSAnaXMtY29sbGFwc2VkJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1leHBhbmRlZCc7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKHNpZGViYXJEYXRhKTtcbiAgfVxufVxuIl19