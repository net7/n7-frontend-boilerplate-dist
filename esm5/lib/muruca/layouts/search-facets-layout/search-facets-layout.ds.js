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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JEO0lBQTBDLHdDQUFnQjtJQUExRDtRQUFBLHFFQThEQztRQTNEUyxjQUFRLEdBRVosRUFBRSxDQUFDOztJQXlEVCxDQUFDO0lBbkRDLHFDQUFNLEdBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQseUNBQVUsR0FBVjtRQUFBLGlCQWVDO1FBZEMsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQWtCO2dCQUFoQixrQkFBTSxFQUFFLGtCQUFNO1lBQzVDLFVBQUMsTUFBTSxHQUFLLE1BQU0sRUFDZixNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO2lCQUN4QixPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNiLFNBQVM7Z0JBQ1QsSUFBTSxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsOEJBQThCO2dCQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDM0MsZUFBZTtnQkFDZixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLEVBQUUsRUFBRSxRQUFRO1FBQzNCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsOENBQWUsR0FBZixVQUFnQixFQUFVLEVBQUUsT0FBTztRQUNqQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLHVCQUNKLEVBQUUsQ0FBQyxLQUFLLEdBQ1IsT0FBTyxFQUNWLENBQUM7UUFDSCxtQkFBbUI7UUFDbkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUFBLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRTtZQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTlERCxDQUEwQyxnQkFBZ0IsR0E4RHpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE1yU2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgc2VhcmNoU2VydmljZTogTXJTZWFyY2hTZXJ2aWNlO1xuXG4gIHByaXZhdGUgaW5wdXRzRFM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fTtcblxuICBwdWJsaWMgc2VhcmNoQ29uZmlnO1xuXG4gIHB1YmxpYyBmYWNldHM7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XG4gICAgdGhpcy5zZWFyY2hDb25maWcgPSB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy5mYWNldHMgPSB0aGlzLnNlYXJjaENvbmZpZy5mYWNldHM7XG5cbiAgICB0aGlzLmluaXRJbnB1dHMoKTtcbiAgfVxuXG4gIGluaXRJbnB1dHMoKSB7XG4gICAgLy8gc2V0IGNvbXBvbmVudHMgZGF0YVxuICAgIHRoaXMuZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXVxuICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQpXG4gICAgICAgIC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgIC8vIHNldCBpZFxuICAgICAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaW5wdXQuaWQpO1xuICAgICAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpbnB1dC5pZDtcbiAgICAgICAgICAvLyBjYWNoaW5nIERTIGZvciBuZXh0IHVwZGF0ZXNcbiAgICAgICAgICB0aGlzLmlucHV0c0RTW2lucHV0LmlkXSA9IHdpZGdldERhdGFTb3VyY2U7XG4gICAgICAgICAgLy8gZmlyc3QgdXBkYXRlXG4gICAgICAgICAgd2lkZ2V0RGF0YVNvdXJjZS51cGRhdGUoaW5wdXQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlSW5wdXRWYWx1ZShpZCwgbmV3VmFsdWUpIHtcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xuICAgIGRzLnNldFZhbHVlKG5ld1ZhbHVlLCBkcy52YWx1ZSAhPT0gbmV3VmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlSW5wdXREYXRhKGlkOiBzdHJpbmcsIG5ld0RhdGEpIHtcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xuICAgIGRzLnVwZGF0ZSh7XG4gICAgICAuLi5kcy5pbnB1dCxcbiAgICAgIC4uLm5ld0RhdGFcbiAgICB9KTtcbiAgICAvLyByZWZyZXNoIHNlbGVjdGVkXG4gICAgZHMuc2V0VmFsdWUoZHMudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgY2xlYXJJbnB1dChpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgZHMgPSB0aGlzLmlucHV0c0RTW2lkXTtcbiAgICBkcy5jbGVhcigpO1xuICAgIGRzLnNldFZhbHVlKGRzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIGNsZWFySW5wdXRzKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5wdXRzRFMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoaWQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=