/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class SearchFacetsLayoutDS extends LayoutDataSource {
    /**
     * @param {?} payload
     * @return {?}
     */
    onInit(payload) {
        this.data = payload.data;
        this.initInputs();
    }
    /**
     * @return {?}
     */
    onDestroy() {
        // TODO
    }
    /**
     * @return {?}
     */
    initInputs() {
        this.data.sections.forEach((/**
         * @param {?} section
         * @return {?}
         */
        (section) => {
            section.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            (input) => {
                // set id
                /** @type {?} */
                const widgetDataSource = this.getWidgetDataSource(input.id);
                widgetDataSource.id = input.id;
                // update data
                this.one(input.id).update(input.data);
            }));
        }));
    }
}
if (false) {
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7Ozs7O0lBR3hELE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRXpCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU87SUFDVCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7OztzQkFFekIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzNELGdCQUFnQixDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMvQixjQUFjO2dCQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7O0lBdkJDLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNDb25maWcgfSBmcm9tICcuL3NlYXJjaC1mYWNldHMtY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBkYXRhOiBTZWFyY2hGYWNldHNDb25maWc7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmRhdGEgPSBwYXlsb2FkLmRhdGE7XG5cbiAgICB0aGlzLmluaXRJbnB1dHMoKTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICAvLyBUT0RPXG4gIH1cblxuICBpbml0SW5wdXRzKCkge1xuICAgIHRoaXMuZGF0YS5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBzZWN0aW9uLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAvLyBzZXQgaWRcbiAgICAgICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpbnB1dC5pZCk7XG4gICAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpbnB1dC5pZDtcbiAgICAgICAgLy8gdXBkYXRlIGRhdGFcbiAgICAgICAgdGhpcy5vbmUoaW5wdXQuaWQpLnVwZGF0ZShpbnB1dC5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=