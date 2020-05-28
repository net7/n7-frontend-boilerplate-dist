/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class SearchFacetsLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.inputsDS = {};
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onInit(payload) {
        this.searchService = payload.searchService;
        this.searchConfig = this.searchService.getConfig();
        this.facets = this.searchConfig.facets;
        this.initInputs();
    }
    /**
     * @return {?}
     */
    initInputs() {
        // set components data
        this.facets.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ header, inputs }) => {
            [header, ...inputs].forEach((/**
             * @param {?} input
             * @return {?}
             */
            (input) => {
                // set id
                /** @type {?} */
                const widgetDataSource = this.getWidgetDataSource(input.id);
                widgetDataSource.id = input.id;
                // caching DS for next updates
                this.inputsDS[input.id] = widgetDataSource;
                // first update
                widgetDataSource.update(input.data);
            }));
        }));
    }
    /**
     * @param {?} id
     * @param {?} newValue
     * @return {?}
     */
    updateInputValue(id, newValue) {
        /** @type {?} */
        const ds = this.inputsDS[id];
        ds.setValue(newValue, ds.value !== newValue);
    }
    /**
     * @param {?} id
     * @param {?} newData
     * @return {?}
     */
    updateInputData(id, newData) {
        /** @type {?} */
        const ds = this.inputsDS[id];
        ds.update(Object.assign({}, ds.input, newData));
        // refresh selected
        ds.setValue(ds.value, true);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    clearInput(id) {
        /** @type {?} */
        const ds = this.inputsDS[id];
        ds.clear();
        ds.setValue(ds.value, true);
    }
    /**
     * @return {?}
     */
    clearInputs() {
        Object.keys(this.inputsDS).forEach((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            this.clearInput(id);
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchFacetsLayoutDS.prototype.searchService;
    /**
     * @type {?}
     * @private
     */
    SearchFacetsLayoutDS.prototype.inputsDS;
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.searchConfig;
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.facets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7SUFBMUQ7O1FBR1UsYUFBUSxHQUVaLEVBQUUsQ0FBQztJQXVEVCxDQUFDOzs7OztJQWpEQyxNQUFNLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUNsRCxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFOzs7c0JBRTlCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMzRCxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsOEJBQThCO2dCQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDM0MsZUFBZTtnQkFDZixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsUUFBUTs7Y0FDckIsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEVBQVUsRUFBRSxPQUFPOztjQUMzQixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLE1BQU0sbUJBQ0osRUFBRSxDQUFDLEtBQUssRUFDUixPQUFPLEVBQ1YsQ0FBQztRQUNILG1CQUFtQjtRQUNuQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsRUFBVTs7Y0FDYixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7Ozs7O0lBM0RDLDZDQUF1Qzs7Ozs7SUFFdkMsd0NBRU87O0lBRVAsNENBQW9COztJQUVwQixzQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldHNMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcblxuICBwcml2YXRlIGlucHV0c0RTOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge307XG5cbiAgcHVibGljIHNlYXJjaENvbmZpZztcblxuICBwdWJsaWMgZmFjZXRzO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gcGF5bG9hZC5zZWFyY2hTZXJ2aWNlO1xuICAgIHRoaXMuc2VhcmNoQ29uZmlnID0gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgIHRoaXMuZmFjZXRzID0gdGhpcy5zZWFyY2hDb25maWcuZmFjZXRzO1xuXG4gICAgdGhpcy5pbml0SW5wdXRzKCk7XG4gIH1cblxuICBpbml0SW5wdXRzKCkge1xuICAgIC8vIHNldCBjb21wb25lbnRzIGRhdGFcbiAgICB0aGlzLmZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c10uZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgLy8gc2V0IGlkXG4gICAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaW5wdXQuaWQpO1xuICAgICAgICB3aWRnZXREYXRhU291cmNlLmlkID0gaW5wdXQuaWQ7XG4gICAgICAgIC8vIGNhY2hpbmcgRFMgZm9yIG5leHQgdXBkYXRlc1xuICAgICAgICB0aGlzLmlucHV0c0RTW2lucHV0LmlkXSA9IHdpZGdldERhdGFTb3VyY2U7XG4gICAgICAgIC8vIGZpcnN0IHVwZGF0ZVxuICAgICAgICB3aWRnZXREYXRhU291cmNlLnVwZGF0ZShpbnB1dC5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlSW5wdXRWYWx1ZShpZCwgbmV3VmFsdWUpIHtcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xuICAgIGRzLnNldFZhbHVlKG5ld1ZhbHVlLCBkcy52YWx1ZSAhPT0gbmV3VmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlSW5wdXREYXRhKGlkOiBzdHJpbmcsIG5ld0RhdGEpIHtcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xuICAgIGRzLnVwZGF0ZSh7XG4gICAgICAuLi5kcy5pbnB1dCxcbiAgICAgIC4uLm5ld0RhdGFcbiAgICB9KTtcbiAgICAvLyByZWZyZXNoIHNlbGVjdGVkXG4gICAgZHMuc2V0VmFsdWUoZHMudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgY2xlYXJJbnB1dChpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgZHMgPSB0aGlzLmlucHV0c0RTW2lkXTtcbiAgICBkcy5jbGVhcigpO1xuICAgIGRzLnNldFZhbHVlKGRzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIGNsZWFySW5wdXRzKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5wdXRzRFMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoaWQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=