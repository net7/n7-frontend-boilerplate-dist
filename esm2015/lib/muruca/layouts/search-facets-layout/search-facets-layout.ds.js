/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class SearchFacetsLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.state = {};
    }
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
                // update data
                this.one(input.id).update(input.data);
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
        const widgetDataSource = this.getWidgetDataSource(id);
        widgetDataSource.setValue(newValue, true);
    }
    /**
     * @param {?} id
     * @param {?} newData
     * @return {?}
     */
    updateInputData(id, newData) {
        /** @type {?} */
        const widgetDataSource = this.getWidgetDataSource(id);
        widgetDataSource.update(Object.assign({}, widgetDataSource.input, newData));
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    getState(id) {
        return id ? this.state[id] : this.state;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    setState({ value, id }) {
        this.state[id] = value;
    }
}
if (false) {
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.data;
    /**
     * @type {?}
     * @private
     */
    SearchFacetsLayoutDS.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7SUFBMUQ7O1FBR1UsVUFBSyxHQUFHLEVBQUUsQ0FBQTtJQTRDcEIsQ0FBQzs7Ozs7SUExQ0MsTUFBTSxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTztJQUNULENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUNoRCxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFOzs7c0JBRTlCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMzRCxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsY0FBYztnQkFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsUUFBUTs7Y0FDckIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyRCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxFQUFFLEVBQUUsT0FBTzs7Y0FDbkIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyRCxnQkFBZ0IsQ0FBQyxNQUFNLG1CQUNsQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQ3RCLE9BQU8sRUFDVixDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsRUFBRztRQUNWLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0NBQ0Y7OztJQTlDQyxvQ0FBZ0M7Ozs7O0lBRWhDLHFDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNDb25maWcgfSBmcm9tICcuL3NlYXJjaC1mYWNldHMtY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBkYXRhOiBTZWFyY2hGYWNldHNDb25maWc7XG5cbiAgcHJpdmF0ZSBzdGF0ZSA9IHt9XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmRhdGEgPSBwYXlsb2FkLmRhdGE7XG5cbiAgICB0aGlzLmluaXRJbnB1dHMoKTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICAvLyBUT0RPXG4gIH1cblxuICBpbml0SW5wdXRzKCkge1xuICAgIHRoaXMuZGF0YS5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c10uZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgLy8gc2V0IGlkXG4gICAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaW5wdXQuaWQpO1xuICAgICAgICB3aWRnZXREYXRhU291cmNlLmlkID0gaW5wdXQuaWQ7XG4gICAgICAgIC8vIHVwZGF0ZSBkYXRhXG4gICAgICAgIHRoaXMub25lKGlucHV0LmlkKS51cGRhdGUoaW5wdXQuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0VmFsdWUoaWQsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpZCk7XG4gICAgd2lkZ2V0RGF0YVNvdXJjZS5zZXRWYWx1ZShuZXdWYWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICB1cGRhdGVJbnB1dERhdGEoaWQsIG5ld0RhdGEpIHtcbiAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlkKTtcbiAgICB3aWRnZXREYXRhU291cmNlLnVwZGF0ZSh7XG4gICAgICAuLi53aWRnZXREYXRhU291cmNlLmlucHV0LFxuICAgICAgLi4ubmV3RGF0YVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhdGUoaWQ/KSB7XG4gICAgcmV0dXJuIGlkID8gdGhpcy5zdGF0ZVtpZF0gOiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoeyB2YWx1ZSwgaWQgfSkge1xuICAgIHRoaXMuc3RhdGVbaWRdID0gdmFsdWU7XG4gIH1cbn1cbiJdfQ==