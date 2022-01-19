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
        var _this = this;
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
                if (state[id] || state[id] === 0) {
                    var values = Array.isArray(state[id]) ? state[id] : [state[id]];
                    values
                        .forEach(function (value) {
                        var text = "" + value;
                        if (facets[id]) {
                            var selectedFacet = facets[id].values.find(function (_a) {
                                var payload = _a.payload;
                                return payload === value;
                            });
                            var cachedTag = Array.isArray(_this.output)
                                ? _this.output.find(function (_a) {
                                    var payload = _a.payload;
                                    return payload.value === value;
                                })
                                : null;
                            if (selectedFacet === null || selectedFacet === void 0 ? void 0 : selectedFacet.text) {
                                text = selectedFacet.text;
                            }
                            else if (cachedTag === null || cachedTag === void 0 ? void 0 : cachedTag.text) {
                                text = cachedTag === null || cachedTag === void 0 ? void 0 : cachedTag.text;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUFvQyxrQ0FBVTtJQUE5QztRQUFBLHFFQTZDQztRQTVDUSxnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUE0QzVCLENBQUM7SUExQ1csa0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkF5Q0M7UUF4Q1MsSUFBQSxrQkFBSyxFQUFFLGtDQUFhLEVBQUUsZ0NBQVksQ0FBVTtRQUM1QyxJQUFBLDZCQUFNLENBQW1CO1FBQ2pDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVoQixnQkFBZ0I7UUFDaEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFVO2dCQUFSLGtCQUFNO1lBQ3JDLE1BQU07aUJBQ0gsTUFBTSxDQUFDLFVBQUMsRUFBYztvQkFBWiwwQkFBVTtnQkFBTyxPQUFBLFVBQVU7WUFBVixDQUFVLENBQUM7aUJBQ3RDLE9BQU8sQ0FBQyxVQUFDLEVBQU07b0JBQUosVUFBRTtnQkFDWixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNoQyxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLE1BQU07eUJBQ0gsT0FBTyxDQUFDLFVBQUMsS0FBSzt3QkFDYixJQUFJLElBQUksR0FBRyxLQUFHLEtBQU8sQ0FBQzt3QkFDdEIsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7NEJBQ2QsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFXO29DQUFULG9CQUFPO2dDQUFPLE9BQUEsT0FBTyxLQUFLLEtBQUs7NEJBQWpCLENBQWlCLENBQUMsQ0FBQzs0QkFDakYsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDO2dDQUMxQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFXO3dDQUFULG9CQUFPO29DQUFPLE9BQUEsT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO2dDQUF2QixDQUF1QixDQUFDO2dDQUM1RCxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNULElBQUksYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLElBQUksRUFBRTtnQ0FDdkIsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7NkJBQzNCO2lDQUFNLElBQUksU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLElBQUksRUFBRTtnQ0FDMUIsSUFBSSxHQUFHLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxJQUFJLENBQUM7NkJBQ3hCO3lCQUNGO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ1IsSUFBSSxNQUFBOzRCQUNKLElBQUksRUFBRSxlQUFlOzRCQUNyQixPQUFPLEVBQUU7Z0NBQ1AsRUFBRSxJQUFBO2dDQUNGLEtBQUssT0FBQTs2QkFDTjt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ047WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE3Q0QsQ0FBb0MsVUFBVSxHQTZDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoVGFnc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIGhhc0ZpbHRlcnMgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogVGFnRGF0YVtdIHtcclxuICAgIGNvbnN0IHsgc3RhdGUsIGxpbmtzUmVzcG9uc2UsIGZhY2V0c0NvbmZpZyB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSBsaW5rc1Jlc3BvbnNlO1xyXG4gICAgY29uc3QgdGFncyA9IFtdO1xyXG5cclxuICAgIC8vIGlucHV0cyBjb25maWdcclxuICAgIGZhY2V0c0NvbmZpZy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlucHV0cyB9KSA9PiB7XHJcbiAgICAgIGlucHV0c1xyXG4gICAgICAgIC5maWx0ZXIoKHsgcXVlcnlQYXJhbSB9KSA9PiBxdWVyeVBhcmFtKVxyXG4gICAgICAgIC5mb3JFYWNoKCh7IGlkIH0pID0+IHtcclxuICAgICAgICAgIGlmIChzdGF0ZVtpZF0gfHwgc3RhdGVbaWRdID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGVbaWRdKSA/IHN0YXRlW2lkXSA6IFtzdGF0ZVtpZF1dO1xyXG4gICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gYCR7dmFsdWV9YDtcclxuICAgICAgICAgICAgICAgIGlmIChmYWNldHNbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmFjZXQgPSBmYWNldHNbaWRdLnZhbHVlcy5maW5kKCh7IHBheWxvYWQgfSkgPT4gcGF5bG9hZCA9PT0gdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRUYWcgPSBBcnJheS5pc0FycmF5KHRoaXMub3V0cHV0KVxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5vdXRwdXQuZmluZCgoeyBwYXlsb2FkIH0pID0+IHBheWxvYWQudmFsdWUgPT09IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRmFjZXQ/LnRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gc2VsZWN0ZWRGYWNldC50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhY2hlZFRhZz8udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBjYWNoZWRUYWc/LnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhZ3MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcclxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5oYXNGaWx0ZXJzID0gISF0YWdzLmxlbmd0aDtcclxuICAgIHJldHVybiB0YWdzO1xyXG4gIH1cclxufVxyXG4iXX0=