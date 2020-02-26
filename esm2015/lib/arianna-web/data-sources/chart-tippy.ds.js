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
        const { basePath, selectable } = this.options
        // ==================
        ;
        // ==================
        /** @type {?} */
        const templates = bubbles.map((/**
         * @param {?} b
         * @return {?}
         */
        b => {
            const { count, entity } = b;
            const { id, label, typeOfEntity } = entity;
            return {
                id,
                selectable,
                title: label,
                text: `È collegato a ${count} oggetti culturali`,
                isSelected: selected.includes(id),
                anchorData: {
                    href: `${basePath}${id}/${helpers.slugify(label)}`
                }
            };
        }));
        return templates;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7O0lBQ2xDLFNBQVMsQ0FBQyxJQUFJOztjQUVoQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJO2NBQzVCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQzdDLHFCQUFxQjs7OztjQUNmLFNBQVMsR0FBUyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO2tCQUNoQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDO2tCQUNyQixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEdBQUcsTUFBTTtZQUMxQyxPQUFPO2dCQUNMLEVBQUU7Z0JBQ0YsVUFBVTtnQkFDVixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsaUJBQWlCLEtBQUssb0JBQW9CO2dCQUNoRCxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsR0FBRyxRQUFRLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7aUJBQ25EO2FBQ0YsQ0FBQTtRQUNILENBQUMsRUFBQztRQUNGLE9BQU8sU0FBUyxDQUFBO0lBQ2xCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvLyA9PT09PT0gREFUQSA9PT09PT1cbiAgICBjb25zdCB7IGJ1YmJsZXMsIHNlbGVjdGVkIH0gPSBkYXRhXG4gICAgY29uc3QgeyBiYXNlUGF0aCwgc2VsZWN0YWJsZSB9ID0gdGhpcy5vcHRpb25zXG4gICAgLy8gPT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgdGVtcGxhdGVzOmFueVtdID0gYnViYmxlcy5tYXAoYiA9PiB7XG4gICAgICBjb25zdCB7IGNvdW50LCBlbnRpdHkgfSA9IGJcbiAgICAgIGNvbnN0IHsgaWQsIGxhYmVsLCB0eXBlT2ZFbnRpdHkgfSA9IGVudGl0eVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHNlbGVjdGFibGUsXG4gICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgdGV4dDogYMOIIGNvbGxlZ2F0byBhICR7Y291bnR9IG9nZ2V0dGkgY3VsdHVyYWxpYCxcbiAgICAgICAgaXNTZWxlY3RlZDogc2VsZWN0ZWQuaW5jbHVkZXMoaWQpLFxuICAgICAgICBhbmNob3JEYXRhOiB7XG4gICAgICAgICAgaHJlZjogYCR7YmFzZVBhdGh9JHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZXNcbiAgfVxufSJdfQ==