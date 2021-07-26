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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWxDO0lBQWtDLGdDQUFVO0lBQTVDO1FBQUEscUVBb0VDO1FBbkVDLHNDQUFzQztRQUN0QyxXQUFLLEdBQUcsd0VBQXdFLENBQUE7UUFFaEYsMkNBQTJDO1FBQzNDLFdBQUssR0FBRyxVQUFDLE1BQWMsSUFBSyxPQUFBLGVBQVksTUFBTSw2QkFBcUIsTUFBTSxRQUFLLEVBQWxELENBQWtELENBQUE7O0lBK0RoRixDQUFDO0lBN0RXLGdDQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBc0NDO1FBckNDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFZixJQUFBLG9DQUFVLENBQWtCO1FBQzVCLElBQUEsa0JBQUssQ0FBVTtRQUV2QixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixLQUFLO2FBQ0YsTUFBTSxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUFPLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFBcEIsQ0FBb0IsQ0FBQzthQUMzQyxPQUFPLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQ2YsS0FBSztpQkFDRixNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWQsQ0FBYyxDQUFDO2lCQUNoQyxPQUFPLENBQUMsVUFBQyxFQUFnQjtvQkFBZCxnQkFBSyxFQUFFLGdCQUFLO2dCQUN0QixJQUFNLFNBQVMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsWUFDTCxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUNqQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUMzQjtxQkFDSCxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLEtBQUssRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ2QsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0NBQ3BCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztxQ0FDaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzZCQUNSLENBQUM7cUJBQ0gsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxtQ0FBWSxHQUFwQixVQUFxQixLQUFLO1FBQTFCLGlCQWdCQztRQWZDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25ELE9BQU87Z0JBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxjQUNyQixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUN6QixFQUZ3QixDQUV4QixDQUFDO2FBQ0osQ0FBQztTQUNIO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxLQUFLO2lCQUNULE1BQU0sQ0FBQyxVQUFDLFNBQVMsSUFBSyxPQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDO2lCQUN4QyxHQUFHLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxDQUFDO2dCQUNuQixLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDMUMsQ0FBQyxFQUhrQixDQUdsQixDQUFDO1NBQ04sQ0FBQztJQUNKLENBQUM7SUFFTyxtQ0FBWSxHQUFwQixVQUFxQixLQUFLO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBcEVELENBQWtDLFVBQVUsR0FvRTNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNck1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICAvKiogVGVzdCBpZiBhIHN0cmluZyBpcyBhIHZhbGlkIFVSTCAqL1xyXG4gIGlzVXJsID0gL14oPzpodHRwKHMpPzpcXC9cXC8pW1xcdy4tXSsoPzpcXC5bXFx3Li1dKykrW1xcd1xcLS5ffjovPyNbXFxdQCEkJicoKSorLDs9Ll0rJC9cclxuXHJcbiAgLyoqIFR1cm4gYSBzdHJpbmcgaW50byBhbiBhbmNob3IgZWxlbWVudCAqL1xyXG4gIHRvVXJsID0gKHN0cmluZzogc3RyaW5nKSA9PiBgPGEgaHJlZj1cIiR7c3RyaW5nfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7c3RyaW5nfTxhPmBcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCB7IGhpZGVMYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IHsgZ3JvdXAgfSA9IGRhdGE7XHJcblxyXG4gICAgaWYgKCEoZ3JvdXAgfHwgW10pLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB7IGdyb3VwOiBbXSB9O1xyXG4gICAgZ3JvdXBcclxuICAgICAgLmZpbHRlcigoeyBpdGVtcyB9KSA9PiBBcnJheS5pc0FycmF5KGl0ZW1zKSlcclxuICAgICAgLmZvckVhY2goKHsgaXRlbXMgfSkgPT4ge1xyXG4gICAgICAgIGl0ZW1zXHJcbiAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpc09iamVjdChpdGVtKSlcclxuICAgICAgICAgIC5mb3JFYWNoKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1MYWJlbCA9IGxhYmVsICYmICFoaWRlTGFiZWxzID8gbGFiZWwgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBncm91cDogW3tcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF90KGl0ZW1MYWJlbCksXHJcbiAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0SXRlbUdyb3VwKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBncm91cDogW3tcclxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHZhbHVlID8gW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3QoaXRlbUxhYmVsKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRJdGVtVmFsdWUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgIH1dIDogW11cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEl0ZW1Hcm91cCh2YWx1ZSkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZ3JvdXA6IHZhbHVlLm1hcCgodmFsKSA9PiAoe1xyXG4gICAgICAgICAgLi4udGhpcy5nZXRJdGVtR3JvdXAodmFsKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXRlbXM6IHZhbHVlXHJcbiAgICAgICAgLmZpbHRlcigoY2hpbGRJdGVtKSA9PiAhIWNoaWxkSXRlbS52YWx1ZSlcclxuICAgICAgICAubWFwKChjaGlsZEl0ZW0pID0+ICh7XHJcbiAgICAgICAgICBsYWJlbDogX3QoY2hpbGRJdGVtLmxhYmVsKSxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLmdldEl0ZW1WYWx1ZShjaGlsZEl0ZW0udmFsdWUpXHJcbiAgICAgICAgfSkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJdGVtVmFsdWUodmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVXJsLnRlc3QodmFsdWUpID8gdGhpcy50b1VybCh2YWx1ZSkgOiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19