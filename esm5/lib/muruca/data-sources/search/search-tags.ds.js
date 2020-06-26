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
                    values.forEach(function (value) {
                        var text = value;
                        if (linkInputs[id]) {
                            text = linkInputs[id].find(function (_a) {
                                var payload = _a.payload;
                                return payload === value;
                            }).text;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUFvQyxrQ0FBVTtJQUE5QztRQUFBLHFFQW9DQztRQW5DUSxnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUFtQzVCLENBQUM7SUFqQ1csa0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsa0JBQUssRUFBRSxrQ0FBYSxFQUFFLGdDQUFZLENBQVU7UUFDNUMsSUFBQSxpQ0FBa0IsQ0FBbUI7UUFDN0MsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGdCQUFnQjtRQUNoQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVU7Z0JBQVIsa0JBQU07WUFDckMsTUFBTTtpQkFDSCxNQUFNLENBQUMsVUFBQyxFQUFjO29CQUFaLDBCQUFVO2dCQUFPLE9BQUEsVUFBVTtZQUFWLENBQVUsQ0FBQztpQkFDdEMsT0FBTyxDQUFDLFVBQUMsRUFBTTtvQkFBSixVQUFFO2dCQUNaLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUNiLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7d0JBQ25CLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQzt3QkFDakIsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7NEJBQ2xCLElBQUksR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBVztvQ0FBVCxvQkFBTztnQ0FBTyxPQUFBLE9BQU8sS0FBSyxLQUFLOzRCQUFqQixDQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDO3lCQUNyRTt3QkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDOzRCQUNSLElBQUksTUFBQTs0QkFDSixJQUFJLEVBQUUsZUFBZTs0QkFDckIsT0FBTyxFQUFFO2dDQUNQLEVBQUUsSUFBQTtnQ0FDRixLQUFLLE9BQUE7NkJBQ047eUJBQ0YsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBcENELENBQW9DLFVBQVUsR0FvQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFRhZ0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFRhZ3NEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgaGFzRmlsdGVycyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IFRhZ0RhdGFbXSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgbGlua3NSZXNwb25zZSwgZmFjZXRzQ29uZmlnIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgaW5wdXRzOiBsaW5rSW5wdXRzIH0gPSBsaW5rc1Jlc3BvbnNlO1xuICAgIGNvbnN0IHRhZ3MgPSBbXTtcblxuICAgIC8vIGlucHV0cyBjb25maWdcbiAgICBmYWNldHNDb25maWcuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xuICAgICAgaW5wdXRzXG4gICAgICAgIC5maWx0ZXIoKHsgcXVlcnlQYXJhbSB9KSA9PiBxdWVyeVBhcmFtKVxuICAgICAgICAuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlW2lkXSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gQXJyYXkuaXNBcnJheShzdGF0ZVtpZF0pID8gc3RhdGVbaWRdIDogW3N0YXRlW2lkXV07XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHRleHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGxpbmtJbnB1dHNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IGxpbmtJbnB1dHNbaWRdLmZpbmQoKHsgcGF5bG9hZCB9KSA9PiBwYXlsb2FkID09PSB2YWx1ZSkudGV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0YWdzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaGFzRmlsdGVycyA9ICEhdGFncy5sZW5ndGg7XG4gICAgcmV0dXJuIHRhZ3M7XG4gIH1cbn1cbiJdfQ==