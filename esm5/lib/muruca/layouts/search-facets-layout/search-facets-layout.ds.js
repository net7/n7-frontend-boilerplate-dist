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
            __spread([header], inputs).forEach(function (input) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3JEO0lBQTBDLHdDQUFnQjtJQUExRDtRQUFBLHFFQTREQztRQXpEUyxjQUFRLEdBRVosRUFBRSxDQUFDOztJQXVEVCxDQUFDO0lBakRDLHFDQUFNLEdBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQseUNBQVUsR0FBVjtRQUFBLGlCQWFDO1FBWkMsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQWtCO2dCQUFoQixrQkFBTSxFQUFFLGtCQUFNO1lBQzVDLFVBQUMsTUFBTSxHQUFLLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNoQyxTQUFTO2dCQUNULElBQU0sZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDNUQsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLDhCQUE4QjtnQkFDOUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzNDLGVBQWU7Z0JBQ2YsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixFQUFFLEVBQUUsUUFBUTtRQUMzQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDhDQUFlLEdBQWYsVUFBZ0IsRUFBVSxFQUFFLE9BQU87UUFDakMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsTUFBTSx1QkFDSixFQUFFLENBQUMsS0FBSyxHQUNSLE9BQU8sRUFDVixDQUFDO1FBQ0gsbUJBQW1CO1FBQ25CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLEVBQVU7UUFDbkIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFBQSxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7WUFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUE1REQsQ0FBMEMsZ0JBQWdCLEdBNER6RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldHNMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcblxuICBwcml2YXRlIGlucHV0c0RTOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge307XG5cbiAgcHVibGljIHNlYXJjaENvbmZpZztcblxuICBwdWJsaWMgZmFjZXRzO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gcGF5bG9hZC5zZWFyY2hTZXJ2aWNlO1xuICAgIHRoaXMuc2VhcmNoQ29uZmlnID0gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgIHRoaXMuZmFjZXRzID0gdGhpcy5zZWFyY2hDb25maWcuZmFjZXRzO1xuXG4gICAgdGhpcy5pbml0SW5wdXRzKCk7XG4gIH1cblxuICBpbml0SW5wdXRzKCkge1xuICAgIC8vIHNldCBjb21wb25lbnRzIGRhdGFcbiAgICB0aGlzLmZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKCh7IGhlYWRlciwgaW5wdXRzIH0pID0+IHtcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c10uZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgLy8gc2V0IGlkXG4gICAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaW5wdXQuaWQpO1xuICAgICAgICB3aWRnZXREYXRhU291cmNlLmlkID0gaW5wdXQuaWQ7XG4gICAgICAgIC8vIGNhY2hpbmcgRFMgZm9yIG5leHQgdXBkYXRlc1xuICAgICAgICB0aGlzLmlucHV0c0RTW2lucHV0LmlkXSA9IHdpZGdldERhdGFTb3VyY2U7XG4gICAgICAgIC8vIGZpcnN0IHVwZGF0ZVxuICAgICAgICB3aWRnZXREYXRhU291cmNlLnVwZGF0ZShpbnB1dC5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlSW5wdXRWYWx1ZShpZCwgbmV3VmFsdWUpIHtcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xuICAgIGRzLnNldFZhbHVlKG5ld1ZhbHVlLCBkcy52YWx1ZSAhPT0gbmV3VmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlSW5wdXREYXRhKGlkOiBzdHJpbmcsIG5ld0RhdGEpIHtcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xuICAgIGRzLnVwZGF0ZSh7XG4gICAgICAuLi5kcy5pbnB1dCxcbiAgICAgIC4uLm5ld0RhdGFcbiAgICB9KTtcbiAgICAvLyByZWZyZXNoIHNlbGVjdGVkXG4gICAgZHMuc2V0VmFsdWUoZHMudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgY2xlYXJJbnB1dChpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgZHMgPSB0aGlzLmlucHV0c0RTW2lkXTtcbiAgICBkcy5jbGVhcigpO1xuICAgIGRzLnNldFZhbHVlKGRzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIGNsZWFySW5wdXRzKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuaW5wdXRzRFMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoaWQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=