/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-breadcrumbs.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwSchedaBreadcrumbsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.transform = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => data);
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        const sidebarData = this.output;
        if (sidebarData.classes === 'is-expanded') {
            sidebarData.classes = 'is-collapsed';
        }
        else {
            sidebarData.classes = 'is-expanded';
        }
        this.update(sidebarData);
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AwSchedaBreadcrumbsDS.prototype.transform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtYnJlYWRjcnVtYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVU7SUFBckQ7O1FBQ1ksY0FBUzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUM7SUFXdkMsQ0FBQzs7OztJQVRDLGFBQWE7O2NBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQy9CLElBQUksV0FBVyxDQUFDLE9BQU8sS0FBSyxhQUFhLEVBQUU7WUFDekMsV0FBVyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7U0FDdEM7YUFBTTtZQUNMLFdBQVcsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7Ozs7OztJQVhDLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUJyZWFkY3J1bWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiBkYXRhO1xuXG4gIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhckRhdGEgPSB0aGlzLm91dHB1dDtcbiAgICBpZiAoc2lkZWJhckRhdGEuY2xhc3NlcyA9PT0gJ2lzLWV4cGFuZGVkJykge1xuICAgICAgc2lkZWJhckRhdGEuY2xhc3NlcyA9ICdpcy1jb2xsYXBzZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gJ2lzLWV4cGFuZGVkJztcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xuICB9XG59XG4iXX0=