import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
import { isObject } from 'lodash';
var MrMetadataDS = /** @class */ (function (_super) {
    __extends(MrMetadataDS, _super);
    function MrMetadataDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Test if a string is a valid URL */
        _this.isUrl = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
        /** Turn a string into an anchor element */
        _this.toUrl = function (string) { return "<a href=\"" + string + "\" target=\"_blank\">" + string + "<a>"; };
        return _this;
    }
    MrMetadataDS.prototype.transform = function (data) {
        var _this = this;
        var hideLabels = this.options.hideLabels;
        var group = data.group;
        if (!(group || []).length) {
            return null;
        }
        var result = { group: [] };
        group
            .filter(function (_a) {
            var items = _a.items;
            return Array.isArray(items);
        })
            .forEach(function (_a) {
            var items = _a.items;
            items
                .filter(function (item) { return isObject(item); })
                .forEach(function (_a) {
                var label = _a.label, value = _a.value;
                var itemLabel = label && !hideLabels ? label : null;
                if (Array.isArray(value)) {
                    result.group.push({
                        group: [__assign({ title: _t(itemLabel) }, _this.getItemGroup(value))]
                    });
                }
                else {
                    result.group.push({
                        group: [{
                                items: value ? [{
                                        label: _t(itemLabel),
                                        value: _this.getItemValue(value)
                                    }] : []
                            }]
                    });
                }
            });
        });
        return result;
    };
    MrMetadataDS.prototype.getItemGroup = function (value) {
        var _this = this;
        if (Array.isArray(value) && Array.isArray(value[0])) {
            return {
                group: value.map(function (val) { return (__assign({}, _this.getItemGroup(val))); })
            };
        }
        return {
            items: value
                .filter(function (childItem) { return !!childItem.value; })
                .map(function (childItem) { return ({
                label: _t(childItem.label),
                value: _this.getItemValue(childItem.value)
            }); })
        };
    };
    MrMetadataDS.prototype.getItemValue = function (value) {
        return this.isUrl.test(value) ? this.toUrl(value) : value;
    };
    return MrMetadataDS;
}(DataSource));
export { MrMetadataDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWxDO0lBQWtDLGdDQUFVO0lBQTVDO1FBQUEscUVBa0VDO1FBakVDLHNDQUFzQztRQUN0QyxXQUFLLEdBQUcsd0VBQXdFLENBQUE7UUFFaEYsMkNBQTJDO1FBQzNDLFdBQUssR0FBRyxVQUFDLE1BQWMsSUFBSyxPQUFBLGVBQVksTUFBTSw2QkFBcUIsTUFBTSxRQUFLLEVBQWxELENBQWtELENBQUE7O0lBNkRoRixDQUFDO0lBM0RXLGdDQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBb0NDO1FBbkNTLElBQUEsb0NBQVUsQ0FBa0I7UUFDNUIsSUFBQSxrQkFBSyxDQUFVO1FBRXZCLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sTUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzdCLEtBQUs7YUFDRixNQUFNLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQU8sT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUFwQixDQUFvQixDQUFDO2FBQzNDLE9BQU8sQ0FBQyxVQUFDLEVBQVM7Z0JBQVAsZ0JBQUs7WUFDZixLQUFLO2lCQUNGLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBZCxDQUFjLENBQUM7aUJBQ2hDLE9BQU8sQ0FBQyxVQUFDLEVBQWdCO29CQUFkLGdCQUFLLEVBQUUsZ0JBQUs7Z0JBQ3RCLElBQU0sU0FBUyxHQUFHLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLEtBQUssRUFBRSxZQUNMLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQ2pCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQzNCO3FCQUNILENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLENBQUM7Z0NBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3Q0FDZCxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3Q0FDcEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3FDQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NkJBQ1IsQ0FBQztxQkFDSCxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLG1DQUFZLEdBQXBCLFVBQXFCLEtBQUs7UUFBMUIsaUJBZ0JDO1FBZkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsT0FBTztnQkFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLGNBQ3JCLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ3pCLEVBRndCLENBRXhCLENBQUM7YUFDSixDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEtBQUs7aUJBQ1QsTUFBTSxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUM7aUJBQ3hDLEdBQUcsQ0FBQyxVQUFDLFNBQVMsSUFBSyxPQUFBLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDMUIsS0FBSyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzthQUMxQyxDQUFDLEVBSGtCLENBR2xCLENBQUM7U0FDTixDQUFDO0lBQ0osQ0FBQztJQUVPLG1DQUFZLEdBQXBCLFVBQXFCLEtBQUs7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFsRUQsQ0FBa0MsVUFBVSxHQWtFM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIC8qKiBUZXN0IGlmIGEgc3RyaW5nIGlzIGEgdmFsaWQgVVJMICovXHJcbiAgaXNVcmwgPSAvXig/Omh0dHAocyk/OlxcL1xcLylbXFx3Li1dKyg/OlxcLltcXHcuLV0rKStbXFx3XFwtLl9+Oi8/I1tcXF1AISQmJygpKissOz0uXSskL1xyXG5cclxuICAvKiogVHVybiBhIHN0cmluZyBpbnRvIGFuIGFuY2hvciBlbGVtZW50ICovXHJcbiAgdG9VcmwgPSAoc3RyaW5nOiBzdHJpbmcpID0+IGA8YSBocmVmPVwiJHtzdHJpbmd9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHtzdHJpbmd9PGE+YFxyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCB7IGhpZGVMYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IHsgZ3JvdXAgfSA9IGRhdGE7XHJcblxyXG4gICAgaWYgKCEoZ3JvdXAgfHwgW10pLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB7IGdyb3VwOiBbXSB9O1xyXG4gICAgZ3JvdXBcclxuICAgICAgLmZpbHRlcigoeyBpdGVtcyB9KSA9PiBBcnJheS5pc0FycmF5KGl0ZW1zKSlcclxuICAgICAgLmZvckVhY2goKHsgaXRlbXMgfSkgPT4ge1xyXG4gICAgICAgIGl0ZW1zXHJcbiAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpc09iamVjdChpdGVtKSlcclxuICAgICAgICAgIC5mb3JFYWNoKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1MYWJlbCA9IGxhYmVsICYmICFoaWRlTGFiZWxzID8gbGFiZWwgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBncm91cDogW3tcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF90KGl0ZW1MYWJlbCksXHJcbiAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0SXRlbUdyb3VwKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBncm91cDogW3tcclxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHZhbHVlID8gW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3QoaXRlbUxhYmVsKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRJdGVtVmFsdWUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgIH1dIDogW11cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEl0ZW1Hcm91cCh2YWx1ZSkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZ3JvdXA6IHZhbHVlLm1hcCgodmFsKSA9PiAoe1xyXG4gICAgICAgICAgLi4udGhpcy5nZXRJdGVtR3JvdXAodmFsKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXRlbXM6IHZhbHVlXHJcbiAgICAgICAgLmZpbHRlcigoY2hpbGRJdGVtKSA9PiAhIWNoaWxkSXRlbS52YWx1ZSlcclxuICAgICAgICAubWFwKChjaGlsZEl0ZW0pID0+ICh7XHJcbiAgICAgICAgICBsYWJlbDogX3QoY2hpbGRJdGVtLmxhYmVsKSxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLmdldEl0ZW1WYWx1ZShjaGlsZEl0ZW0udmFsdWUpXHJcbiAgICAgICAgfSkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJdGVtVmFsdWUodmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVXJsLnRlc3QodmFsdWUpID8gdGhpcy50b1VybCh2YWx1ZSkgOiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19