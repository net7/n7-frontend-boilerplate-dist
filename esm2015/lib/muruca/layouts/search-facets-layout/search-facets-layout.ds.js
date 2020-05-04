/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-facets-layout/search-facets-layout.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdyRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQWdCOzs7OztJQUd4RCxNQUFNLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPO0lBQ1QsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFOzs7c0JBRXpCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMzRCxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsY0FBYztnQkFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7OztJQXZCQyxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldHNMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwdWJsaWMgZGF0YTogU2VhcmNoRmFjZXRzQ29uZmlnO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5kYXRhID0gcGF5bG9hZC5kYXRhO1xuXG4gICAgdGhpcy5pbml0SW5wdXRzKCk7XG4gIH1cblxuICBvbkRlc3Ryb3koKSB7XG4gICAgLy8gVE9ET1xuICB9XG5cbiAgaW5pdElucHV0cygpIHtcbiAgICB0aGlzLmRhdGEuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgc2VjdGlvbi5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgLy8gc2V0IGlkXG4gICAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaW5wdXQuaWQpO1xuICAgICAgICB3aWRnZXREYXRhU291cmNlLmlkID0gaW5wdXQuaWQ7XG4gICAgICAgIC8vIHVwZGF0ZSBkYXRhXG4gICAgICAgIHRoaXMub25lKGlucHV0LmlkKS51cGRhdGUoaW5wdXQuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19