/**
 * @fileoverview added by tsickle
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
                text: `È collegato a ${count} entità`,
                isSelected: selected.includes(id),
                anchorData: {
                    href: `${basePath}${id}/${helpers.slugify(label)}`
                }
            };
        }));
        return templates;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVOzs7Ozs7SUFDbEMsU0FBUyxDQUFDLElBQUk7O2NBRWhCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUk7Y0FDNUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDN0MscUJBQXFCOzs7O2NBQ2YsU0FBUyxHQUFTLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7a0JBQ2hDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUM7a0JBQ3JCLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsR0FBRyxNQUFNO1lBQzFDLE9BQU87Z0JBQ0wsRUFBRTtnQkFDRixVQUFVO2dCQUNWLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxpQkFBaUIsS0FBSyxTQUFTO2dCQUNyQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsR0FBRyxRQUFRLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7aUJBQ25EO2FBQ0YsQ0FBQTtRQUNILENBQUMsRUFBQztRQUNGLE9BQU8sU0FBUyxDQUFBO0lBQ2xCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvLyA9PT09PT0gREFUQSA9PT09PT1cbiAgICBjb25zdCB7IGJ1YmJsZXMsIHNlbGVjdGVkIH0gPSBkYXRhXG4gICAgY29uc3QgeyBiYXNlUGF0aCwgc2VsZWN0YWJsZSB9ID0gdGhpcy5vcHRpb25zXG4gICAgLy8gPT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgdGVtcGxhdGVzOmFueVtdID0gYnViYmxlcy5tYXAoYiA9PiB7XG4gICAgICBjb25zdCB7IGNvdW50LCBlbnRpdHkgfSA9IGJcbiAgICAgIGNvbnN0IHsgaWQsIGxhYmVsLCB0eXBlT2ZFbnRpdHkgfSA9IGVudGl0eVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHNlbGVjdGFibGUsXG4gICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgdGV4dDogYMOIIGNvbGxlZ2F0byBhICR7Y291bnR9IGVudGl0w6BgLFxuICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZC5pbmNsdWRlcyhpZCksXG4gICAgICAgIGFuY2hvckRhdGE6IHtcbiAgICAgICAgICBocmVmOiBgJHtiYXNlUGF0aH0ke2lkfS8ke2hlbHBlcnMuc2x1Z2lmeShsYWJlbCl9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlc1xuICB9XG59Il19