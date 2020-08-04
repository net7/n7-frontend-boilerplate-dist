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
        var linkInputs = linksResponse.inputs;
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
                        var _a;
                        var text = value;
                        if (linkInputs[id]) {
                            text = (_a = linkInputs[id].find(function (_a) {
                                var payload = _a.payload;
                                return payload === value;
                            })) === null || _a === void 0 ? void 0 : _a.text;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUFvQyxrQ0FBVTtJQUE5QztRQUFBLHFFQXFDQztRQXBDUSxnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUFvQzVCLENBQUM7SUFsQ1csa0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsa0JBQUssRUFBRSxrQ0FBYSxFQUFFLGdDQUFZLENBQVU7UUFDNUMsSUFBQSxpQ0FBa0IsQ0FBbUI7UUFDN0MsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGdCQUFnQjtRQUNoQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVU7Z0JBQVIsa0JBQU07WUFDckMsTUFBTTtpQkFDSCxNQUFNLENBQUMsVUFBQyxFQUFjO29CQUFaLDBCQUFVO2dCQUFPLE9BQUEsVUFBVTtZQUFWLENBQVUsQ0FBQztpQkFDdEMsT0FBTyxDQUFDLFVBQUMsRUFBTTtvQkFBSixVQUFFO2dCQUNaLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUNiLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEUsTUFBTTt5QkFDSCxPQUFPLENBQUMsVUFBQyxLQUFLOzt3QkFDYixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7d0JBQ2pCLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUNsQixJQUFJLFNBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQVc7b0NBQVQsb0JBQU87Z0NBQU8sT0FBQSxPQUFPLEtBQUssS0FBSzs0QkFBakIsQ0FBaUIsQ0FBQywwQ0FBRSxJQUFJLENBQUM7eUJBQ3RFO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ1IsSUFBSSxNQUFBOzRCQUNKLElBQUksRUFBRSxlQUFlOzRCQUNyQixPQUFPLEVBQUU7Z0NBQ1AsRUFBRSxJQUFBO2dDQUNGLEtBQUssT0FBQTs2QkFDTjt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ047WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFyQ0QsQ0FBb0MsVUFBVSxHQXFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgVGFnRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoVGFnc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBoYXNGaWx0ZXJzID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogVGFnRGF0YVtdIHtcbiAgICBjb25zdCB7IHN0YXRlLCBsaW5rc1Jlc3BvbnNlLCBmYWNldHNDb25maWcgfSA9IGRhdGE7XG4gICAgY29uc3QgeyBpbnB1dHM6IGxpbmtJbnB1dHMgfSA9IGxpbmtzUmVzcG9uc2U7XG4gICAgY29uc3QgdGFncyA9IFtdO1xuXG4gICAgLy8gaW5wdXRzIGNvbmZpZ1xuICAgIGZhY2V0c0NvbmZpZy5zZWN0aW9ucy5mb3JFYWNoKCh7IGlucHV0cyB9KSA9PiB7XG4gICAgICBpbnB1dHNcbiAgICAgICAgLmZpbHRlcigoeyBxdWVyeVBhcmFtIH0pID0+IHF1ZXJ5UGFyYW0pXG4gICAgICAgIC5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGVbaWRdKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHN0YXRlW2lkXSkgPyBzdGF0ZVtpZF0gOiBbc3RhdGVbaWRdXTtcbiAgICAgICAgICAgIHZhbHVlc1xuICAgICAgICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChsaW5rSW5wdXRzW2lkXSkge1xuICAgICAgICAgICAgICAgICAgdGV4dCA9IGxpbmtJbnB1dHNbaWRdLmZpbmQoKHsgcGF5bG9hZCB9KSA9PiBwYXlsb2FkID09PSB2YWx1ZSk/LnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhZ3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaGFzRmlsdGVycyA9ICEhdGFncy5sZW5ndGg7XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH1cbn1cbiJdfQ==