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
        if (!data)
            return null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWxDO0lBQWtDLGdDQUFVO0lBQTVDO1FBQUEscUVBb0VDO1FBbkVDLHNDQUFzQztRQUN0QyxXQUFLLEdBQUcsd0VBQXdFLENBQUE7UUFFaEYsMkNBQTJDO1FBQzNDLFdBQUssR0FBRyxVQUFDLE1BQWMsSUFBSyxPQUFBLGVBQVksTUFBTSw2QkFBcUIsTUFBTSxRQUFLLEVBQWxELENBQWtELENBQUE7O0lBK0RoRixDQUFDO0lBN0RXLGdDQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBc0NDO1FBckNDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFZixJQUFBLG9DQUFVLENBQWtCO1FBQzVCLElBQUEsa0JBQUssQ0FBVTtRQUV2QixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixLQUFLO2FBQ0YsTUFBTSxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUFPLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFBcEIsQ0FBb0IsQ0FBQzthQUMzQyxPQUFPLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQ2YsS0FBSztpQkFDRixNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWQsQ0FBYyxDQUFDO2lCQUNoQyxPQUFPLENBQUMsVUFBQyxFQUFnQjtvQkFBZCxnQkFBSyxFQUFFLGdCQUFLO2dCQUN0QixJQUFNLFNBQVMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsWUFDTCxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUNqQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUMzQjtxQkFDSCxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLEtBQUssRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ2QsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0NBQ3BCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztxQ0FDaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzZCQUNSLENBQUM7cUJBQ0gsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxtQ0FBWSxHQUFwQixVQUFxQixLQUFLO1FBQTFCLGlCQWdCQztRQWZDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25ELE9BQU87Z0JBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxjQUNyQixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUN6QixFQUZ3QixDQUV4QixDQUFDO2FBQ0osQ0FBQztTQUNIO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxLQUFLO2lCQUNULE1BQU0sQ0FBQyxVQUFDLFNBQVMsSUFBSyxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDO2lCQUN4QyxHQUFHLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxDQUFDO2dCQUNuQixLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDMUMsQ0FBQyxFQUhrQixDQUdsQixDQUFDO1NBQ04sQ0FBQztJQUNKLENBQUM7SUFFTyxtQ0FBWSxHQUFwQixVQUFxQixLQUFLO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBcEVELENBQWtDLFVBQVUsR0FvRTNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBNck1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgLyoqIFRlc3QgaWYgYSBzdHJpbmcgaXMgYSB2YWxpZCBVUkwgKi9cbiAgaXNVcmwgPSAvXig/Omh0dHAocyk/OlxcL1xcLylbXFx3Li1dKyg/OlxcLltcXHcuLV0rKStbXFx3XFwtLl9+Oi8/I1tcXF1AISQmJygpKissOz0uXSskL1xuXG4gIC8qKiBUdXJuIGEgc3RyaW5nIGludG8gYW4gYW5jaG9yIGVsZW1lbnQgKi9cbiAgdG9VcmwgPSAoc3RyaW5nOiBzdHJpbmcpID0+IGA8YSBocmVmPVwiJHtzdHJpbmd9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHtzdHJpbmd9PGE+YFxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgeyBoaWRlTGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyBncm91cCB9ID0gZGF0YTtcblxuICAgIGlmICghKGdyb3VwIHx8IFtdKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHsgZ3JvdXA6IFtdIH07XG4gICAgZ3JvdXBcbiAgICAgIC5maWx0ZXIoKHsgaXRlbXMgfSkgPT4gQXJyYXkuaXNBcnJheShpdGVtcykpXG4gICAgICAuZm9yRWFjaCgoeyBpdGVtcyB9KSA9PiB7XG4gICAgICAgIGl0ZW1zXG4gICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXNPYmplY3QoaXRlbSkpXG4gICAgICAgICAgLmZvckVhY2goKHsgbGFiZWwsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1MYWJlbCA9IGxhYmVsICYmICFoaWRlTGFiZWxzID8gbGFiZWwgOiBudWxsO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5ncm91cC5wdXNoKHtcbiAgICAgICAgICAgICAgICBncm91cDogW3tcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdChpdGVtTGFiZWwpLFxuICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRJdGVtR3JvdXAodmFsdWUpXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICAgICAgZ3JvdXA6IFt7XG4gICAgICAgICAgICAgICAgICBpdGVtczogdmFsdWUgPyBbe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3QoaXRlbUxhYmVsKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0SXRlbVZhbHVlKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgfV0gOiBbXVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SXRlbUdyb3VwKHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBncm91cDogdmFsdWUubWFwKCh2YWwpID0+ICh7XG4gICAgICAgICAgLi4udGhpcy5nZXRJdGVtR3JvdXAodmFsKVxuICAgICAgICB9KSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogdmFsdWVcbiAgICAgICAgLmZpbHRlcigoY2hpbGRJdGVtKSA9PiAhIWNoaWxkSXRlbS52YWx1ZSlcbiAgICAgICAgLm1hcCgoY2hpbGRJdGVtKSA9PiAoe1xuICAgICAgICAgIGxhYmVsOiBfdChjaGlsZEl0ZW0ubGFiZWwpLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmdldEl0ZW1WYWx1ZShjaGlsZEl0ZW0udmFsdWUpXG4gICAgICAgIH0pKVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldEl0ZW1WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmlzVXJsLnRlc3QodmFsdWUpID8gdGhpcy50b1VybCh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxufVxuIl19