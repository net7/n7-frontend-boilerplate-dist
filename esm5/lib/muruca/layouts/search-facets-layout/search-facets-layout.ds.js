import { __assign, __extends, __read, __spread } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var SearchFacetsLayoutDS = /** @class */ (function (_super) {
    __extends(SearchFacetsLayoutDS, _super);
    function SearchFacetsLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputsDS = {};
        return _this;
    }
    SearchFacetsLayoutDS.prototype.onInit = function (payload) {
        this.searchService = payload.searchService;
        this.searchConfig = this.searchService.getConfig();
        this.facets = this.searchConfig.facets;
        this.initInputs();
    };
    SearchFacetsLayoutDS.prototype.initInputs = function () {
        var _this = this;
        // set components data
        this.facets.sections.forEach(function (_a) {
            var header = _a.header, inputs = _a.inputs;
            __spread([header], inputs).filter(function (input) { return input; })
                .forEach(function (input) {
                // set id
                var widgetDataSource = _this.getWidgetDataSource(input.id);
                widgetDataSource.id = input.id;
                // caching DS for next updates
                _this.inputsDS[input.id] = widgetDataSource;
                // first update
                widgetDataSource.update(input.data);
            });
        });
    };
    SearchFacetsLayoutDS.prototype.updateInputValue = function (id, newValue) {
        var ds = this.inputsDS[id];
        ds.setValue(newValue, ds.value !== newValue);
    };
    SearchFacetsLayoutDS.prototype.updateInputData = function (id, newData) {
        var ds = this.inputsDS[id];
        ds.update(__assign(__assign({}, ds.input), newData));
        // refresh selected
        ds.setValue(ds.value, true);
    };
    SearchFacetsLayoutDS.prototype.clearInput = function (id) {
        var ds = this.inputsDS[id];
        ds.clear();
        ds.setValue(ds.value, true);
    };
    SearchFacetsLayoutDS.prototype.clearInputs = function () {
        var _this = this;
        Object.keys(this.inputsDS).forEach(function (id) {
            _this.clearInput(id);
        });
    };
    return SearchFacetsLayoutDS;
}(LayoutDataSource));
export { SearchFacetsLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JEO0lBQTBDLHdDQUFnQjtJQUExRDtRQUFBLHFFQThEQztRQTNEUyxjQUFRLEdBRVosRUFBRSxDQUFDOztJQXlEVCxDQUFDO0lBbkRDLHFDQUFNLEdBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQseUNBQVUsR0FBVjtRQUFBLGlCQWVDO1FBZEMsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQWtCO2dCQUFoQixrQkFBTSxFQUFFLGtCQUFNO1lBQzVDLFVBQUMsTUFBTSxHQUFLLE1BQU0sRUFDZixNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO2lCQUN4QixPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNiLFNBQVM7Z0JBQ1QsSUFBTSxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsOEJBQThCO2dCQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDM0MsZUFBZTtnQkFDZixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLEVBQUUsRUFBRSxRQUFRO1FBQzNCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsOENBQWUsR0FBZixVQUFnQixFQUFVLEVBQUUsT0FBTztRQUNqQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLHVCQUNKLEVBQUUsQ0FBQyxLQUFLLEdBQ1IsT0FBTyxFQUNWLENBQUM7UUFDSCxtQkFBbUI7UUFDbkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUFBLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRTtZQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTlERCxDQUEwQyxnQkFBZ0IsR0E4RHpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgaW5wdXRzRFM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9ID0ge307XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hDb25maWc7XHJcblxyXG4gIHB1YmxpYyBmYWNldHM7XHJcblxyXG4gIG9uSW5pdChwYXlsb2FkKSB7XHJcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XHJcbiAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoU2VydmljZS5nZXRDb25maWcoKTtcclxuICAgIHRoaXMuZmFjZXRzID0gdGhpcy5zZWFyY2hDb25maWcuZmFjZXRzO1xyXG5cclxuICAgIHRoaXMuaW5pdElucHV0cygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdElucHV0cygpIHtcclxuICAgIC8vIHNldCBjb21wb25lbnRzIGRhdGFcclxuICAgIHRoaXMuZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xyXG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdXHJcbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxyXG4gICAgICAgIC5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgLy8gc2V0IGlkXHJcbiAgICAgICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlucHV0LmlkKTtcclxuICAgICAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpbnB1dC5pZDtcclxuICAgICAgICAgIC8vIGNhY2hpbmcgRFMgZm9yIG5leHQgdXBkYXRlc1xyXG4gICAgICAgICAgdGhpcy5pbnB1dHNEU1tpbnB1dC5pZF0gPSB3aWRnZXREYXRhU291cmNlO1xyXG4gICAgICAgICAgLy8gZmlyc3QgdXBkYXRlXHJcbiAgICAgICAgICB3aWRnZXREYXRhU291cmNlLnVwZGF0ZShpbnB1dC5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRWYWx1ZShpZCwgbmV3VmFsdWUpIHtcclxuICAgIGNvbnN0IGRzID0gdGhpcy5pbnB1dHNEU1tpZF07XHJcbiAgICBkcy5zZXRWYWx1ZShuZXdWYWx1ZSwgZHMudmFsdWUgIT09IG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0RGF0YShpZDogc3RyaW5nLCBuZXdEYXRhKSB7XHJcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xyXG4gICAgZHMudXBkYXRlKHtcclxuICAgICAgLi4uZHMuaW5wdXQsXHJcbiAgICAgIC4uLm5ld0RhdGFcclxuICAgIH0pO1xyXG4gICAgLy8gcmVmcmVzaCBzZWxlY3RlZFxyXG4gICAgZHMuc2V0VmFsdWUoZHMudmFsdWUsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJJbnB1dChpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xyXG4gICAgZHMuY2xlYXIoKTtcclxuICAgIGRzLnNldFZhbHVlKGRzLnZhbHVlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGNsZWFySW5wdXRzKCkge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnB1dHNEUykuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgdGhpcy5jbGVhcklucHV0KGlkKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=