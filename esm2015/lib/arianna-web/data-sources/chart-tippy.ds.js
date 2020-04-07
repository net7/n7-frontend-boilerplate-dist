/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/chart-tippy.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
export class AwChartTippyDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        // ====== DATA ======
        const { bubbles, selected } = data;
        const { basePath, selectable } = this.options;
        // ==================
        /** @type {?} */
        const templates = bubbles.map((/**
         * @param {?} b
         * @return {?}
         */
        (b) => {
            const { count, entity } = b;
            const { id, label } = entity;
            return {
                id,
                selectable,
                title: label,
                text: `È collegato a ${count} oggetti culturali`,
                isSelected: selected.includes(id),
                anchorData: {
                    href: `${basePath}${id}/${helpers.slugify(label)}`,
                },
            };
        }));
        return templates;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7O0lBQ2xDLFNBQVMsQ0FBQyxJQUFJOztjQUVoQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJO2NBQzVCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOzs7Y0FFdkMsU0FBUyxHQUFVLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtrQkFDbkMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQztrQkFDckIsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTTtZQUM1QixPQUFPO2dCQUNMLEVBQUU7Z0JBQ0YsVUFBVTtnQkFDVixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsaUJBQWlCLEtBQUssb0JBQW9CO2dCQUNoRCxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsR0FBRyxRQUFRLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7aUJBQ25EO2FBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQztRQUNGLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvLyA9PT09PT0gREFUQSA9PT09PT1cbiAgICBjb25zdCB7IGJ1YmJsZXMsIHNlbGVjdGVkIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgYmFzZVBhdGgsIHNlbGVjdGFibGUgfSA9IHRoaXMub3B0aW9ucztcbiAgICAvLyA9PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCB0ZW1wbGF0ZXM6IGFueVtdID0gYnViYmxlcy5tYXAoKGIpID0+IHtcbiAgICAgIGNvbnN0IHsgY291bnQsIGVudGl0eSB9ID0gYjtcbiAgICAgIGNvbnN0IHsgaWQsIGxhYmVsIH0gPSBlbnRpdHk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgc2VsZWN0YWJsZSxcbiAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICB0ZXh0OiBgw4ggY29sbGVnYXRvIGEgJHtjb3VudH0gb2dnZXR0aSBjdWx0dXJhbGlgLFxuICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZC5pbmNsdWRlcyhpZCksXG4gICAgICAgIGFuY2hvckRhdGE6IHtcbiAgICAgICAgICBocmVmOiBgJHtiYXNlUGF0aH0ke2lkfS8ke2hlbHBlcnMuc2x1Z2lmeShsYWJlbCl9YCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlcztcbiAgfVxufVxuIl19