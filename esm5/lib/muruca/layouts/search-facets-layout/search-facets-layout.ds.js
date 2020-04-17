/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var SearchFacetsLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(SearchFacetsLayoutDS, _super);
    function SearchFacetsLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
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
         * @param {?} section
         * @return {?}
         */
        function (section) {
            section.inputs.forEach((/**
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
    return SearchFacetsLayoutDS;
}(LayoutDataSource));
export { SearchFacetsLayoutDS };
if (false) {
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdyRDtJQUEwQyxnREFBZ0I7SUFBMUQ7O0lBd0JBLENBQUM7Ozs7O0lBckJDLHFDQUFNOzs7O0lBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRXpCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsd0NBQVM7OztJQUFUO1FBQ0UsT0FBTztJQUNULENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87WUFDakMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxLQUFLOzs7b0JBRXJCLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMzRCxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsY0FBYztnQkFDZCxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBeEJELENBQTBDLGdCQUFnQixHQXdCekQ7Ozs7SUF2QkMsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFNlYXJjaEZhY2V0c0NvbmZpZyB9IGZyb20gJy4vc2VhcmNoLWZhY2V0cy1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFjZXRzTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHVibGljIGRhdGE6IFNlYXJjaEZhY2V0c0NvbmZpZztcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuZGF0YSA9IHBheWxvYWQuZGF0YTtcblxuICAgIHRoaXMuaW5pdElucHV0cygpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIC8vIFRPRE9cbiAgfVxuXG4gIGluaXRJbnB1dHMoKSB7XG4gICAgdGhpcy5kYXRhLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIC8vIHNldCBpZFxuICAgICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlucHV0LmlkKTtcbiAgICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlucHV0LmlkO1xuICAgICAgICAvLyB1cGRhdGUgZGF0YVxuICAgICAgICB0aGlzLm9uZShpbnB1dC5pZCkudXBkYXRlKGlucHV0LmRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==