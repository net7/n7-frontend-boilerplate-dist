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
        _this.inputsDS = {};
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
        this.searchService = payload.searchService;
        this.searchConfig = this.searchService.getConfig();
        this.facets = this.searchConfig.facets;
        this.initInputs();
    };
    /**
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.initInputs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // set components data
        this.facets.sections.forEach((/**
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
                // caching DS for next updates
                _this.inputsDS[input.id] = widgetDataSource;
                // first update
                widgetDataSource.update(input.data);
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
        var ds = this.inputsDS[id];
        ds.setValue(newValue, ds.value !== newValue);
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
        var ds = this.inputsDS[id];
        ds.update(tslib_1.__assign({}, ds.input, newData));
        // refresh selected
        ds.setValue(ds.value, true);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.clearInput = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var ds = this.inputsDS[id];
        ds.clear();
        ds.setValue(ds.value, true);
    };
    /**
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.clearInputs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.inputsDS).forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            _this.clearInput(id);
        }));
    };
    return SearchFacetsLayoutDS;
}(LayoutDataSource));
export { SearchFacetsLayoutDS };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdyRDtJQUEwQyxnREFBZ0I7SUFBMUQ7UUFBQSxxRUE0REM7UUF6RFMsY0FBUSxHQUVaLEVBQUUsQ0FBQzs7SUF1RFQsQ0FBQzs7Ozs7SUFqREMscUNBQU07Ozs7SUFBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFBQSxpQkFhQztRQVpDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFrQjtnQkFBaEIsa0JBQU0sRUFBRSxrQkFBTTtZQUM1QyxrQkFBQyxNQUFNLEdBQUssTUFBTSxFQUFFLE9BQU87Ozs7WUFBQyxVQUFDLEtBQUs7OztvQkFFMUIsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzNELGdCQUFnQixDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMvQiw4QkFBOEI7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUMzQyxlQUFlO2dCQUNmLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELCtDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsRUFBRSxFQUFFLFFBQVE7O1lBQ3JCLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM1QixFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7OztJQUVELDhDQUFlOzs7OztJQUFmLFVBQWdCLEVBQVUsRUFBRSxPQUFPOztZQUMzQixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLE1BQU0sc0JBQ0osRUFBRSxDQUFDLEtBQUssRUFDUixPQUFPLEVBQ1YsQ0FBQztRQUNILG1CQUFtQjtRQUNuQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCx5Q0FBVTs7OztJQUFWLFVBQVcsRUFBVTs7WUFDYixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFBQSxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEVBQUU7WUFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUE1REQsQ0FBMEMsZ0JBQWdCLEdBNER6RDs7Ozs7OztJQTNEQyw2Q0FBdUM7Ozs7O0lBRXZDLHdDQUVPOztJQUVQLDRDQUFvQjs7SUFFcEIsc0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFjZXRzTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBpbnB1dHNEUzoge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSA9IHt9O1xuXG4gIHB1YmxpYyBzZWFyY2hDb25maWc7XG5cbiAgcHVibGljIGZhY2V0cztcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IHBheWxvYWQuc2VhcmNoU2VydmljZTtcbiAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoU2VydmljZS5nZXRDb25maWcoKTtcbiAgICB0aGlzLmZhY2V0cyA9IHRoaXMuc2VhcmNoQ29uZmlnLmZhY2V0cztcblxuICAgIHRoaXMuaW5pdElucHV0cygpO1xuICB9XG5cbiAgaW5pdElucHV0cygpIHtcbiAgICAvLyBzZXQgY29tcG9uZW50cyBkYXRhXG4gICAgdGhpcy5mYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIC8vIHNldCBpZFxuICAgICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlucHV0LmlkKTtcbiAgICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlucHV0LmlkO1xuICAgICAgICAvLyBjYWNoaW5nIERTIGZvciBuZXh0IHVwZGF0ZXNcbiAgICAgICAgdGhpcy5pbnB1dHNEU1tpbnB1dC5pZF0gPSB3aWRnZXREYXRhU291cmNlO1xuICAgICAgICAvLyBmaXJzdCB1cGRhdGVcbiAgICAgICAgd2lkZ2V0RGF0YVNvdXJjZS51cGRhdGUoaW5wdXQuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0VmFsdWUoaWQsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3QgZHMgPSB0aGlzLmlucHV0c0RTW2lkXTtcbiAgICBkcy5zZXRWYWx1ZShuZXdWYWx1ZSwgZHMudmFsdWUgIT09IG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0RGF0YShpZDogc3RyaW5nLCBuZXdEYXRhKSB7XG4gICAgY29uc3QgZHMgPSB0aGlzLmlucHV0c0RTW2lkXTtcbiAgICBkcy51cGRhdGUoe1xuICAgICAgLi4uZHMuaW5wdXQsXG4gICAgICAuLi5uZXdEYXRhXG4gICAgfSk7XG4gICAgLy8gcmVmcmVzaCBzZWxlY3RlZFxuICAgIGRzLnNldFZhbHVlKGRzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIGNsZWFySW5wdXQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGRzID0gdGhpcy5pbnB1dHNEU1tpZF07XG4gICAgZHMuY2xlYXIoKTtcbiAgICBkcy5zZXRWYWx1ZShkcy52YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICBjbGVhcklucHV0cygpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmlucHV0c0RTKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5jbGVhcklucHV0KGlkKTtcbiAgICB9KTtcbiAgfVxufVxuIl19