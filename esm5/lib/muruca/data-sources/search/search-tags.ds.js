import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrSearchTagsDS = /** @class */ (function (_super) {
    __extends(MrSearchTagsDS, _super);
    function MrSearchTagsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasFilters = false;
        return _this;
    }
    MrSearchTagsDS.prototype.transform = function (data) {
        var state = data.state, linksResponse = data.linksResponse, facetsConfig = data.facetsConfig;
        var facets = linksResponse.facets;
        var tags = [];
        // inputs config
        facetsConfig.sections.forEach(function (_a) {
            var inputs = _a.inputs;
            inputs
                .filter(function (_a) {
                var queryParam = _a.queryParam;
                return queryParam;
            })
                .forEach(function (_a) {
                var id = _a.id;
                if (state[id]) {
                    var values = Array.isArray(state[id]) ? state[id] : [state[id]];
                    values
                        .forEach(function (value) {
                        var text = value;
                        if (facets[id]) {
                            var selectedFacet = facets[id].values.find(function (_a) {
                                var payload = _a.payload;
                                return payload === value;
                            });
                            if (selectedFacet) {
                                text = selectedFacet.text;
                            }
                        }
                        tags.push({
                            text: text,
                            icon: 'n7-icon-close',
                            payload: {
                                id: id,
                                value: value
                            }
                        });
                    });
                }
            });
        });
        this.hasFilters = !!tags.length;
        return tags;
    };
    return MrSearchTagsDS;
}(DataSource));
export { MrSearchTagsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUFvQyxrQ0FBVTtJQUE5QztRQUFBLHFFQXdDQztRQXZDUSxnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUF1QzVCLENBQUM7SUFyQ1csa0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsa0JBQUssRUFBRSxrQ0FBYSxFQUFFLGdDQUFZLENBQVU7UUFDNUMsSUFBQSw2QkFBTSxDQUFtQjtRQUNqQyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEIsZ0JBQWdCO1FBQ2hCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBVTtnQkFBUixrQkFBTTtZQUNyQyxNQUFNO2lCQUNILE1BQU0sQ0FBQyxVQUFDLEVBQWM7b0JBQVosMEJBQVU7Z0JBQU8sT0FBQSxVQUFVO1lBQVYsQ0FBVSxDQUFDO2lCQUN0QyxPQUFPLENBQUMsVUFBQyxFQUFNO29CQUFKLFVBQUU7Z0JBQ1osSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ2IsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRSxNQUFNO3lCQUNILE9BQU8sQ0FBQyxVQUFDLEtBQUs7d0JBQ2IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO3dCQUNqQixJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTs0QkFDZCxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQVc7b0NBQVQsb0JBQU87Z0NBQU8sT0FBQSxPQUFPLEtBQUssS0FBSzs0QkFBakIsQ0FBaUIsQ0FBQyxDQUFDOzRCQUNqRixJQUFJLGFBQWEsRUFBRTtnQ0FDakIsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7NkJBQzNCO3lCQUNGO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ1IsSUFBSSxNQUFBOzRCQUNKLElBQUksRUFBRSxlQUFlOzRCQUNyQixPQUFPLEVBQUU7Z0NBQ1AsRUFBRSxJQUFBO2dDQUNGLEtBQUssT0FBQTs2QkFDTjt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ047WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF4Q0QsQ0FBb0MsVUFBVSxHQXdDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgVGFnRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoVGFnc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBoYXNGaWx0ZXJzID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogVGFnRGF0YVtdIHtcbiAgICBjb25zdCB7IHN0YXRlLCBsaW5rc1Jlc3BvbnNlLCBmYWNldHNDb25maWcgfSA9IGRhdGE7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IGxpbmtzUmVzcG9uc2U7XG4gICAgY29uc3QgdGFncyA9IFtdO1xuXG4gICAgLy8gaW5wdXRzIGNvbmZpZ1xuICAgIGZhY2V0c0NvbmZpZy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlucHV0cyB9KSA9PiB7XG4gICAgICBpbnB1dHNcbiAgICAgICAgLmZpbHRlcigoeyBxdWVyeVBhcmFtIH0pID0+IHF1ZXJ5UGFyYW0pXG4gICAgICAgIC5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGVbaWRdKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHN0YXRlW2lkXSkgPyBzdGF0ZVtpZF0gOiBbc3RhdGVbaWRdXTtcbiAgICAgICAgICAgIHZhbHVlc1xuICAgICAgICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChmYWNldHNbaWRdKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEZhY2V0ID0gZmFjZXRzW2lkXS52YWx1ZXMuZmluZCgoeyBwYXlsb2FkIH0pID0+IHBheWxvYWQgPT09IHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEZhY2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBzZWxlY3RlZEZhY2V0LnRleHQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhZ3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaGFzRmlsdGVycyA9ICEhdGFncy5sZW5ndGg7XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH1cbn1cbiJdfQ==