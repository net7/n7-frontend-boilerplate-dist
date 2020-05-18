/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
import { LayoutDataSource } from '@n7-frontend/core';
var SearchFacetsLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(SearchFacetsLayoutDS, _super);
    function SearchFacetsLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ready$ = new Subject();
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
        // signal
        this.ready$.next();
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
        if (widgetDataSource) {
            widgetDataSource.setValue(newValue, true);
        }
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
        if (widgetDataSource) {
            widgetDataSource.update(tslib_1.__assign({}, widgetDataSource.input, newData));
        }
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
        var widgetDataSource = this.getWidgetDataSource(id);
        if (widgetDataSource) {
            widgetDataSource.clear();
            widgetDataSource.setValue(widgetDataSource.value, true);
        }
    };
    /**
     * @return {?}
     */
    SearchFacetsLayoutDS.prototype.clearInputs = /**
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
                _this.clearInput(input.id);
            }));
        }));
    };
    return SearchFacetsLayoutDS;
}(LayoutDataSource));
export { SearchFacetsLayoutDS };
if (false) {
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.data;
    /** @type {?} */
    SearchFacetsLayoutDS.prototype.ready$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JEO0lBQTBDLGdEQUFnQjtJQUExRDtRQUFBLHFFQThEQztRQTNEUSxZQUFNLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBMkQvQyxDQUFDOzs7OztJQXpEQyxxQ0FBTTs7OztJQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHdDQUFTOzs7SUFBVDtRQUNFLE9BQU87SUFDVCxDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFrQjtnQkFBaEIsa0JBQU0sRUFBRSxrQkFBTTtZQUMxQyxrQkFBQyxNQUFNLEdBQUssTUFBTSxFQUFFLE9BQU87Ozs7WUFBQyxVQUFDLEtBQUs7OztvQkFFMUIsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzNELGdCQUFnQixDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMvQixjQUFjO2dCQUNkLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUVILFNBQVM7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVELCtDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsRUFBRSxFQUFFLFFBQVE7O1lBQ3JCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsOENBQWU7Ozs7O0lBQWYsVUFBZ0IsRUFBRSxFQUFFLE9BQU87O1lBQ25CLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixnQkFBZ0IsQ0FBQyxNQUFNLHNCQUNsQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQ3RCLE9BQU8sRUFDVixDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELHlDQUFVOzs7O0lBQVYsVUFBVyxFQUFFOztZQUNMLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6QixnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsRUFBa0I7Z0JBQWhCLGtCQUFNLEVBQUUsa0JBQU07WUFDMUMsa0JBQUMsTUFBTSxHQUFLLE1BQU0sRUFBRSxPQUFPOzs7O1lBQUMsVUFBQyxLQUFLO2dCQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTlERCxDQUEwQyxnQkFBZ0IsR0E4RHpEOzs7O0lBN0RDLG9DQUFnQzs7SUFFaEMsc0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFNlYXJjaEZhY2V0c0NvbmZpZyB9IGZyb20gJy4vc2VhcmNoLWZhY2V0cy1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFjZXRzTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHVibGljIGRhdGE6IFNlYXJjaEZhY2V0c0NvbmZpZztcblxuICBwdWJsaWMgcmVhZHkkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuZGF0YSA9IHBheWxvYWQuZGF0YTtcblxuICAgIHRoaXMuaW5pdElucHV0cygpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIC8vIFRPRE9cbiAgfVxuXG4gIGluaXRJbnB1dHMoKSB7XG4gICAgdGhpcy5kYXRhLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAvLyBzZXQgaWRcbiAgICAgICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpbnB1dC5pZCk7XG4gICAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpbnB1dC5pZDtcbiAgICAgICAgLy8gdXBkYXRlIGRhdGFcbiAgICAgICAgdGhpcy5vbmUoaW5wdXQuaWQpLnVwZGF0ZShpbnB1dC5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gc2lnbmFsXG4gICAgdGhpcy5yZWFkeSQubmV4dCgpO1xuICB9XG5cbiAgdXBkYXRlSW5wdXRWYWx1ZShpZCwgbmV3VmFsdWUpIHtcbiAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlkKTtcbiAgICBpZiAod2lkZ2V0RGF0YVNvdXJjZSkge1xuICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5zZXRWYWx1ZShuZXdWYWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSW5wdXREYXRhKGlkLCBuZXdEYXRhKSB7XG4gICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpZCk7XG4gICAgaWYgKHdpZGdldERhdGFTb3VyY2UpIHtcbiAgICAgIHdpZGdldERhdGFTb3VyY2UudXBkYXRlKHtcbiAgICAgICAgLi4ud2lkZ2V0RGF0YVNvdXJjZS5pbnB1dCxcbiAgICAgICAgLi4ubmV3RGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJJbnB1dChpZCkge1xuICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaWQpO1xuICAgIGlmICh3aWRnZXREYXRhU291cmNlKSB7XG4gICAgICB3aWRnZXREYXRhU291cmNlLmNsZWFyKCk7XG4gICAgICB3aWRnZXREYXRhU291cmNlLnNldFZhbHVlKHdpZGdldERhdGFTb3VyY2UudmFsdWUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFySW5wdXRzKCkge1xuICAgIHRoaXMuZGF0YS5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c10uZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KGlucHV0LmlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=