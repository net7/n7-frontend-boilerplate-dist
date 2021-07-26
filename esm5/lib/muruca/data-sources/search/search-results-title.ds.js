import { __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrSearchResultsTitleDS = /** @class */ (function (_super) {
    __extends(MrSearchResultsTitleDS, _super);
    function MrSearchResultsTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrSearchResultsTitleDS.prototype.transform = function (data) {
        var _a = this.options.config, totalResultsText = _a.totalResultsText, sort = _a.sort;
        var totalCount = data.total_count, currentSort = data.sort;
        var mainText = _t(totalResultsText, { total: totalCount }, function (key, _a) {
            var total = _a.total;
            if (total === 0) {
                return key + "_0";
            }
            if (total === 1) {
                return key + "_1";
            }
            return key;
        });
        return {
            title: {
                main: {
                    text: mainText
                }
            },
            actions: {
                select: {
                    label: sort.label,
                    options: sort.options.map(function (_a) {
                        var label = _a.label, value = _a.value, selected = _a.selected, disabled = _a.disabled;
                        return ({
                            value: value,
                            disabled: disabled,
                            selected: currentSort ? value === currentSort : selected,
                            text: label
                        });
                    }),
                    payload: 'sort'
                }
            }
        };
    };
    MrSearchResultsTitleDS.prototype.OnInputQueryChange = function (value) {
        var sort = this.options.config.sort;
        sort.options.forEach(function (option) {
            if (option.value === '_score') {
                option.disabled = !value;
            }
        });
        this.update(this.input);
    };
    return MrSearchResultsTitleDS;
}(DataSource));
export { MrSearchResultsTitleDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBNEMsMENBQVU7SUFBdEQ7O0lBZ0RBLENBQUM7SUEvQ1csMENBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNoQixJQUFBLHdCQUdpQixFQUZyQixzQ0FBZ0IsRUFDaEIsY0FDcUIsQ0FBQztRQUNoQixJQUFBLDZCQUF1QixFQUFFLHVCQUFpQixDQUFVO1FBQzVELElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxVQUFDLEdBQUcsRUFBRSxFQUFTO2dCQUFQLGdCQUFLO1lBQ3hFLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFVLEdBQUcsT0FBSSxDQUFDO2FBQ25CO1lBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixPQUFVLEdBQUcsT0FBSSxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxRQUFRO2lCQUNmO2FBQ0Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFFMUI7NEJBREMsZ0JBQUssRUFBRSxnQkFBSyxFQUFFLHNCQUFRLEVBQUUsc0JBQVE7d0JBQzVCLE9BQUEsQ0FBQzs0QkFDTCxLQUFLLE9BQUE7NEJBQ0wsUUFBUSxVQUFBOzRCQUNSLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVE7NEJBQ3hELElBQUksRUFBRSxLQUFLO3lCQUNaLENBQUM7b0JBTEksQ0FLSixDQUFDO29CQUNILE9BQU8sRUFBRSxNQUFNO2lCQUNoQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxtREFBa0IsR0FBbEIsVUFBbUIsS0FBSztRQUNkLElBQUEsK0JBQUksQ0FBeUI7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQzFCLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFoREQsQ0FBNEMsVUFBVSxHQWdEckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFJlc3VsdHNUaXRsZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRvdGFsUmVzdWx0c1RleHQsXHJcbiAgICAgIHNvcnRcclxuICAgIH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xyXG4gICAgY29uc3QgeyB0b3RhbF9jb3VudDogdG90YWxDb3VudCwgc29ydDogY3VycmVudFNvcnQgfSA9IGRhdGE7XHJcbiAgICBjb25zdCBtYWluVGV4dCA9IF90KHRvdGFsUmVzdWx0c1RleHQsIHsgdG90YWw6IHRvdGFsQ291bnQgfSwgKGtleSwgeyB0b3RhbCB9KSA9PiB7XHJcbiAgICAgIGlmICh0b3RhbCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBgJHtrZXl9XzBgO1xyXG4gICAgICB9IGlmICh0b3RhbCA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBgJHtrZXl9XzFgO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIG1haW46IHtcclxuICAgICAgICAgIHRleHQ6IG1haW5UZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICBsYWJlbDogc29ydC5sYWJlbCxcclxuICAgICAgICAgIG9wdGlvbnM6IHNvcnQub3B0aW9ucy5tYXAoKHtcclxuICAgICAgICAgICAgbGFiZWwsIHZhbHVlLCBzZWxlY3RlZCwgZGlzYWJsZWRcclxuICAgICAgICAgIH0pID0+ICh7XHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGN1cnJlbnRTb3J0ID8gdmFsdWUgPT09IGN1cnJlbnRTb3J0IDogc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHRleHQ6IGxhYmVsXHJcbiAgICAgICAgICB9KSksXHJcbiAgICAgICAgICBwYXlsb2FkOiAnc29ydCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBPbklucHV0UXVlcnlDaGFuZ2UodmFsdWUpIHtcclxuICAgIGNvbnN0IHsgc29ydCB9ID0gdGhpcy5vcHRpb25zLmNvbmZpZztcclxuICAgIHNvcnQub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gJ19zY29yZScpIHtcclxuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSAhdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy51cGRhdGUodGhpcy5pbnB1dCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==