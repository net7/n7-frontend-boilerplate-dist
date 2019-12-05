/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-breadcrumbs.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwSchedaBreadcrumbsDS extends DataSource {
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
        if (sidebarData.classes == "is-expanded") {
            sidebarData.classes = "is-collapsed";
        }
        else {
            sidebarData.classes = "is-expanded";
        }
        this.update(sidebarData);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtYnJlYWRjcnVtYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVU7Ozs7OztJQUV6QyxTQUFTLENBQUMsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxhQUFhOztZQUNMLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUM3QixJQUFLLFdBQVcsQ0FBQyxPQUFPLElBQUksYUFBYSxFQUFHO1lBQzFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxXQUFXLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhQnJlYWRjcnVtYnNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkgeyAgXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgICAgbGV0IHNpZGViYXJEYXRhID0gdGhpcy5vdXRwdXQ7ICAgIFxuICAgICAgaWYgKCBzaWRlYmFyRGF0YS5jbGFzc2VzID09IFwiaXMtZXhwYW5kZWRcIiApIHtcbiAgICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9IFwiaXMtY29sbGFwc2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9IFwiaXMtZXhwYW5kZWRcIjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xuICB9XG59Il19