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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUFvQyxrQ0FBVTtJQUE5QztRQUFBLHFFQXdDQztRQXZDUSxnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUF1QzVCLENBQUM7SUFyQ1csa0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsa0JBQUssRUFBRSxrQ0FBYSxFQUFFLGdDQUFZLENBQVU7UUFDNUMsSUFBQSw2QkFBTSxDQUFtQjtRQUNqQyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEIsZ0JBQWdCO1FBQ2hCLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBVTtnQkFBUixrQkFBTTtZQUNyQyxNQUFNO2lCQUNILE1BQU0sQ0FBQyxVQUFDLEVBQWM7b0JBQVosMEJBQVU7Z0JBQU8sT0FBQSxVQUFVO1lBQVYsQ0FBVSxDQUFDO2lCQUN0QyxPQUFPLENBQUMsVUFBQyxFQUFNO29CQUFKLFVBQUU7Z0JBQ1osSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDaEMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRSxNQUFNO3lCQUNILE9BQU8sQ0FBQyxVQUFDLEtBQUs7d0JBQ2IsSUFBSSxJQUFJLEdBQUcsS0FBRyxLQUFPLENBQUM7d0JBQ3RCLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUNkLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBVztvQ0FBVCxvQkFBTztnQ0FBTyxPQUFBLE9BQU8sS0FBSyxLQUFLOzRCQUFqQixDQUFpQixDQUFDLENBQUM7NEJBQ2pGLElBQUksYUFBYSxFQUFFO2dDQUNqQixJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQzs2QkFDM0I7eUJBQ0Y7d0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQzs0QkFDUixJQUFJLE1BQUE7NEJBQ0osSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLE9BQU8sRUFBRTtnQ0FDUCxFQUFFLElBQUE7Z0NBQ0YsS0FBSyxPQUFBOzZCQUNOO3lCQUNGLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUFvQyxVQUFVLEdBd0M3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBUYWdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hUYWdzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGhhc0ZpbHRlcnMgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBUYWdEYXRhW10ge1xuICAgIGNvbnN0IHsgc3RhdGUsIGxpbmtzUmVzcG9uc2UsIGZhY2V0c0NvbmZpZyB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gbGlua3NSZXNwb25zZTtcbiAgICBjb25zdCB0YWdzID0gW107XG5cbiAgICAvLyBpbnB1dHMgY29uZmlnXG4gICAgZmFjZXRzQ29uZmlnLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgIGlucHV0c1xuICAgICAgICAuZmlsdGVyKCh7IHF1ZXJ5UGFyYW0gfSkgPT4gcXVlcnlQYXJhbSlcbiAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICAgIGlmIChzdGF0ZVtpZF0gfHwgc3RhdGVbaWRdID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHN0YXRlW2lkXSkgPyBzdGF0ZVtpZF0gOiBbc3RhdGVbaWRdXTtcbiAgICAgICAgICAgIHZhbHVlc1xuICAgICAgICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGAke3ZhbHVlfWA7XG4gICAgICAgICAgICAgICAgaWYgKGZhY2V0c1tpZF0pIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmFjZXQgPSBmYWNldHNbaWRdLnZhbHVlcy5maW5kKCh7IHBheWxvYWQgfSkgPT4gcGF5bG9hZCA9PT0gdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRmFjZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHNlbGVjdGVkRmFjZXQudGV4dDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5oYXNGaWx0ZXJzID0gISF0YWdzLmxlbmd0aDtcbiAgICByZXR1cm4gdGFncztcbiAgfVxufVxuIl19