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
        if (this.input) {
            this.update(this.input);
        }
    };
    return MrSearchResultsTitleDS;
}(DataSource));
export { MrSearchResultsTitleDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBNEMsMENBQVU7SUFBdEQ7O0lBa0RBLENBQUM7SUFqRFcsMENBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNoQixJQUFBLHdCQUdpQixFQUZyQixzQ0FBZ0IsRUFDaEIsY0FDcUIsQ0FBQztRQUNoQixJQUFBLDZCQUF1QixFQUFFLHVCQUFpQixDQUFVO1FBQzVELElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRSxVQUFDLEdBQUcsRUFBRSxFQUFTO2dCQUFQLGdCQUFLO1lBQ3hFLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDZixPQUFVLEdBQUcsT0FBSSxDQUFDO2FBQ25CO1lBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixPQUFVLEdBQUcsT0FBSSxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxRQUFRO2lCQUNmO2FBQ0Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFFMUI7NEJBREMsZ0JBQUssRUFBRSxnQkFBSyxFQUFFLHNCQUFRLEVBQUUsc0JBQVE7d0JBQzVCLE9BQUEsQ0FBQzs0QkFDTCxLQUFLLE9BQUE7NEJBQ0wsUUFBUSxVQUFBOzRCQUNSLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVE7NEJBQ3hELElBQUksRUFBRSxLQUFLO3lCQUNaLENBQUM7b0JBTEksQ0FLSixDQUFDO29CQUNILE9BQU8sRUFBRSxNQUFNO2lCQUNoQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxtREFBa0IsR0FBbEIsVUFBbUIsS0FBSztRQUNkLElBQUEsK0JBQUksQ0FBeUI7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQzFCLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWxERCxDQUE0QyxVQUFVLEdBa0RyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzVGl0bGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbFJlc3VsdHNUZXh0LFxuICAgICAgc29ydFxuICAgIH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xuICAgIGNvbnN0IHsgdG90YWxfY291bnQ6IHRvdGFsQ291bnQsIHNvcnQ6IGN1cnJlbnRTb3J0IH0gPSBkYXRhO1xuICAgIGNvbnN0IG1haW5UZXh0ID0gX3QodG90YWxSZXN1bHRzVGV4dCwgeyB0b3RhbDogdG90YWxDb3VudCB9LCAoa2V5LCB7IHRvdGFsIH0pID0+IHtcbiAgICAgIGlmICh0b3RhbCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYCR7a2V5fV8wYDtcbiAgICAgIH0gaWYgKHRvdGFsID09PSAxKSB7XG4gICAgICAgIHJldHVybiBgJHtrZXl9XzFgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGtleTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgdGV4dDogbWFpblRleHRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgbGFiZWw6IHNvcnQubGFiZWwsXG4gICAgICAgICAgb3B0aW9uczogc29ydC5vcHRpb25zLm1hcCgoe1xuICAgICAgICAgICAgbGFiZWwsIHZhbHVlLCBzZWxlY3RlZCwgZGlzYWJsZWRcbiAgICAgICAgICB9KSA9PiAoe1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBjdXJyZW50U29ydCA/IHZhbHVlID09PSBjdXJyZW50U29ydCA6IHNlbGVjdGVkLFxuICAgICAgICAgICAgdGV4dDogbGFiZWxcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgcGF5bG9hZDogJ3NvcnQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgT25JbnB1dFF1ZXJ5Q2hhbmdlKHZhbHVlKSB7XG4gICAgY29uc3QgeyBzb3J0IH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xuICAgIHNvcnQub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGlmIChvcHRpb24udmFsdWUgPT09ICdfc2NvcmUnKSB7XG4gICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9ICF2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5pbnB1dCk7XG4gICAgfVxuICB9XG59XG4iXX0=