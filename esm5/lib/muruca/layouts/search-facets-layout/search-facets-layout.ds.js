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
                if (input.data) {
                    widgetDataSource.update(input.data);
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JEO0lBQTBDLHdDQUFnQjtJQUExRDtRQUFBLHFFQWdFQztRQTdEUyxjQUFRLEdBRVosRUFBRSxDQUFDOztJQTJEVCxDQUFDO0lBckRDLHFDQUFNLEdBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQseUNBQVUsR0FBVjtRQUFBLGlCQWlCQztRQWhCQyxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBa0I7Z0JBQWhCLGtCQUFNLEVBQUUsa0JBQU07WUFDNUMsVUFBQyxNQUFNLEdBQUssTUFBTSxFQUNmLE1BQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUM7aUJBQ3hCLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQ2IsU0FBUztnQkFDVCxJQUFNLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVELGdCQUFnQixDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMvQiw4QkFBOEI7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUMzQyxlQUFlO2dCQUNmLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDZCxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLEVBQUUsRUFBRSxRQUFRO1FBQzNCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsOENBQWUsR0FBZixVQUFnQixFQUFVLEVBQUUsT0FBTztRQUNqQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLHVCQUNKLEVBQUUsQ0FBQyxLQUFLLEdBQ1IsT0FBTyxFQUNWLENBQUM7UUFDSCxtQkFBbUI7UUFDbkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUFBLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRTtZQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQWhFRCxDQUEwQyxnQkFBZ0IsR0FnRXpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE1yU2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgc2VhcmNoU2VydmljZTogTXJTZWFyY2hTZXJ2aWNlO1xuXG4gIHByaXZhdGUgaW5wdXRzRFM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fTtcblxuICBwdWJsaWMgc2VhcmNoQ29uZmlnO1xuXG4gIHB1YmxpYyBmYWNldHM7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XG4gICAgdGhpcy5zZWFyY2hDb25maWcgPSB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy5mYWNldHMgPSB0aGlzLnNlYXJjaENvbmZpZy5mYWNldHM7XG5cbiAgICB0aGlzLmluaXRJbnB1dHMoKTtcbiAgfVxuXG4gIGluaXRJbnB1dHMoKSB7XG4gICAgLy8gc2V0IGNvbXBvbmVudHMgZGF0YVxuICAgIHRoaXMuZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xuICAgICAgW2hlYWRlciwgLi4uaW5wdXRzXVxuICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQpXG4gICAgICAgIC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgIC8vIHNldCBpZFxuICAgICAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaW5wdXQuaWQpO1xuICAgICAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpbnB1dC5pZDtcbiAgICAgICAgICAvLyBjYWNoaW5nIERTIGZvciBuZXh0IHVwZGF0ZXNcbiAgICAgICAgICB0aGlzLmlucHV0c0RTW2lucHV0LmlkXSA9IHdpZGdldERhdGFTb3VyY2U7XG4gICAgICAgICAgLy8gZmlyc3QgdXBkYXRlXG4gICAgICAgICAgaWYgKGlucHV0LmRhdGEpIHtcbiAgICAgICAgICAgIHdpZGdldERhdGFTb3VyY2UudXBkYXRlKGlucHV0LmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVJbnB1dFZhbHVlKGlkLCBuZXdWYWx1ZSkge1xuICAgIGNvbnN0IGRzID0gdGhpcy5pbnB1dHNEU1tpZF07XG4gICAgZHMuc2V0VmFsdWUobmV3VmFsdWUsIGRzLnZhbHVlICE9PSBuZXdWYWx1ZSk7XG4gIH1cblxuICB1cGRhdGVJbnB1dERhdGEoaWQ6IHN0cmluZywgbmV3RGF0YSkge1xuICAgIGNvbnN0IGRzID0gdGhpcy5pbnB1dHNEU1tpZF07XG4gICAgZHMudXBkYXRlKHtcbiAgICAgIC4uLmRzLmlucHV0LFxuICAgICAgLi4ubmV3RGF0YVxuICAgIH0pO1xuICAgIC8vIHJlZnJlc2ggc2VsZWN0ZWRcbiAgICBkcy5zZXRWYWx1ZShkcy52YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICBjbGVhcklucHV0KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xuICAgIGRzLmNsZWFyKCk7XG4gICAgZHMuc2V0VmFsdWUoZHMudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgY2xlYXJJbnB1dHMoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5pbnB1dHNEUykuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dChpZCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==