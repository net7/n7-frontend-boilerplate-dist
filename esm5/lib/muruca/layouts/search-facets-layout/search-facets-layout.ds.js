/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var SearchFacetsLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(SearchFacetsLayoutDS, _super);
    function SearchFacetsLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.onInit = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.data = payload.data;
        this.initInputs();
    };
    /**
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.onDestroy = /**
     * @return {?}
     */
    function () {
        // TODO
    };
    /**
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.initInputs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.data.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var header = _a.header, inputs = _a.inputs;
            tslib_1.__spread([header], inputs).forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
                // set id
                /** @type {?} */
                var widgetDataSource = _this.getWidgetDataSource(input.id);
                widgetDataSource.id = input.id;
                // update data
                _this.one(input.id).update(input.data);
            }));
        }));
    };
    /**
     * @param {?} id
     * @param {?} newValue
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.updateInputValue = /**
     * @param {?} id
     * @param {?} newValue
     * @return {?}
     */
    function (id, newValue) {
        /** @type {?} */
        var widgetDataSource = this.getWidgetDataSource(id);
        widgetDataSource.setValue(newValue, true);
    };
    /**
     * @param {?} id
     * @param {?} newData
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.updateInputData = /**
     * @param {?} id
     * @param {?} newData
     * @return {?}
     */
    function (id, newData) {
        /** @type {?} */
        var widgetDataSource = this.getWidgetDataSource(id);
        widgetDataSource.update(tslib_1.__assign({}, widgetDataSource.input, newData));
    };
    /**
     * @param {?=} id
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.getState = /**
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return id ? this.state[id] : this.state;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.setState = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var value = _a.value, id = _a.id;
        this.state[id] = value;
    };
    return SearchFacetsLayoutDS;
}(LayoutDataSource));
export { SearchFacetsLayoutDS };
if (false) {
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.data;
    /**
     * @type {?}
     * @private
     */
    SearchFacetsLayoutDS.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdyRDtJQUEwQyxnREFBZ0I7SUFBMUQ7UUFBQSxxRUErQ0M7UUE1Q1MsV0FBSyxHQUFHLEVBQUUsQ0FBQTs7SUE0Q3BCLENBQUM7Ozs7O0lBMUNDLHFDQUFNOzs7O0lBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRXpCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsd0NBQVM7OztJQUFUO1FBQ0UsT0FBTztJQUNULENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEVBQWtCO2dCQUFoQixrQkFBTSxFQUFFLGtCQUFNO1lBQzFDLGtCQUFDLE1BQU0sR0FBSyxNQUFNLEVBQUUsT0FBTzs7OztZQUFDLFVBQUMsS0FBSzs7O29CQUUxQixnQkFBZ0IsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDM0QsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLGNBQWM7Z0JBQ2QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsK0NBQWdCOzs7OztJQUFoQixVQUFpQixFQUFFLEVBQUUsUUFBUTs7WUFDckIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyRCxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVELDhDQUFlOzs7OztJQUFmLFVBQWdCLEVBQUUsRUFBRSxPQUFPOztZQUNuQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JELGdCQUFnQixDQUFDLE1BQU0sc0JBQ2xCLGdCQUFnQixDQUFDLEtBQUssRUFDdEIsT0FBTyxFQUNWLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHVDQUFROzs7O0lBQVIsVUFBUyxFQUFHO1FBQ1YsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCx1Q0FBUTs7OztJQUFSLFVBQVMsRUFBYTtZQUFYLGdCQUFLLEVBQUUsVUFBRTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBL0NELENBQTBDLGdCQUFnQixHQStDekQ7Ozs7SUE5Q0Msb0NBQWdDOzs7OztJQUVoQyxxQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRzQ29uZmlnIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXRzLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldHNMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwdWJsaWMgZGF0YTogU2VhcmNoRmFjZXRzQ29uZmlnO1xuXG4gIHByaXZhdGUgc3RhdGUgPSB7fVxuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5kYXRhID0gcGF5bG9hZC5kYXRhO1xuXG4gICAgdGhpcy5pbml0SW5wdXRzKCk7XG4gIH1cblxuICBvbkRlc3Ryb3koKSB7XG4gICAgLy8gVE9ET1xuICB9XG5cbiAgaW5pdElucHV0cygpIHtcbiAgICB0aGlzLmRhdGEuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIC8vIHNldCBpZFxuICAgICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlucHV0LmlkKTtcbiAgICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlucHV0LmlkO1xuICAgICAgICAvLyB1cGRhdGUgZGF0YVxuICAgICAgICB0aGlzLm9uZShpbnB1dC5pZCkudXBkYXRlKGlucHV0LmRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVJbnB1dFZhbHVlKGlkLCBuZXdWYWx1ZSkge1xuICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaWQpO1xuICAgIHdpZGdldERhdGFTb3VyY2Uuc2V0VmFsdWUobmV3VmFsdWUsIHRydWUpO1xuICB9XG5cbiAgdXBkYXRlSW5wdXREYXRhKGlkLCBuZXdEYXRhKSB7XG4gICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpZCk7XG4gICAgd2lkZ2V0RGF0YVNvdXJjZS51cGRhdGUoe1xuICAgICAgLi4ud2lkZ2V0RGF0YVNvdXJjZS5pbnB1dCxcbiAgICAgIC4uLm5ld0RhdGFcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXRlKGlkPykge1xuICAgIHJldHVybiBpZCA/IHRoaXMuc3RhdGVbaWRdIDogdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKHsgdmFsdWUsIGlkIH0pIHtcbiAgICB0aGlzLnN0YXRlW2lkXSA9IHZhbHVlO1xuICB9XG59XG4iXX0=