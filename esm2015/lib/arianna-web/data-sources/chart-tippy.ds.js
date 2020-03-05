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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7O0lBQ2xDLFNBQVMsQ0FBQyxJQUFJOztjQUVoQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJO2NBQzVCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOzs7Y0FFdkMsU0FBUyxHQUFVLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtrQkFDbkMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQztrQkFDckIsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTTtZQUM1QixPQUFPO2dCQUNMLEVBQUU7Z0JBQ0YsVUFBVTtnQkFDVixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsaUJBQWlCLEtBQUssb0JBQW9CO2dCQUNoRCxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsR0FBRyxRQUFRLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7aUJBQ25EO2FBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQztRQUNGLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgLy8gPT09PT09IERBVEEgPT09PT09XHJcbiAgICBjb25zdCB7IGJ1YmJsZXMsIHNlbGVjdGVkIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyBiYXNlUGF0aCwgc2VsZWN0YWJsZSB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCB0ZW1wbGF0ZXM6IGFueVtdID0gYnViYmxlcy5tYXAoKGIpID0+IHtcclxuICAgICAgY29uc3QgeyBjb3VudCwgZW50aXR5IH0gPSBiO1xyXG4gICAgICBjb25zdCB7IGlkLCBsYWJlbCB9ID0gZW50aXR5O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHNlbGVjdGFibGUsXHJcbiAgICAgICAgdGl0bGU6IGxhYmVsLFxyXG4gICAgICAgIHRleHQ6IGDDiCBjb2xsZWdhdG8gYSAke2NvdW50fSBvZ2dldHRpIGN1bHR1cmFsaWAsXHJcbiAgICAgICAgaXNTZWxlY3RlZDogc2VsZWN0ZWQuaW5jbHVkZXMoaWQpLFxyXG4gICAgICAgIGFuY2hvckRhdGE6IHtcclxuICAgICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0ZW1wbGF0ZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==