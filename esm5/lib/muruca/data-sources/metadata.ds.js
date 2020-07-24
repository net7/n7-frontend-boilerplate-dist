import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrMetadataDS = /** @class */ (function (_super) {
    __extends(MrMetadataDS, _super);
    function MrMetadataDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Test if a string is a valid URL */
        _this.isUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
        /** Turn a string into an anchor element */
        _this.toUrl = function (string) { return "<a href=\"" + string + "\" target=\"_blank\">" + string + "<a>"; };
        return _this;
    }
    MrMetadataDS.prototype.transform = function (data) {
        var _this = this;
        var hideLabels = this.options.hideLabels;
        var group = data.group.map(function (d) {
            var items = d.items;
            // Convert URLs to anchor elements and remove labels if necessary
            items = d.items.map(function (_a) {
                var label = _a.label, value = _a.value;
                if (_this.isUrl.test(value)) {
                    return ({ label: hideLabels ? '' : label, value: _this.toUrl(value) });
                }
                return ({ label: hideLabels ? '' : label, value: value });
            });
            return { items: items };
        });
        // Overwrite the metadata group
        data.group = group;
        return data;
    };
    return MrMetadataDS;
}(DataSource));
export { MrMetadataDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQWtDLGdDQUFVO0lBQTVDO1FBQUEscUVBd0JDO1FBdkJDLHNDQUFzQztRQUN0QyxXQUFLLEdBQUcseUVBQXlFLENBQUE7UUFFakYsMkNBQTJDO1FBQzNDLFdBQUssR0FBRyxVQUFDLE1BQWMsSUFBSyxPQUFBLGVBQVksTUFBTSw2QkFBcUIsTUFBTSxRQUFLLEVBQWxELENBQWtELENBQUE7O0lBbUJoRixDQUFDO0lBakJXLGdDQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBZ0JDO1FBZlMsSUFBQSxvQ0FBVSxDQUFrQjtRQUNwQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7WUFDdkIsSUFBQSxlQUFLLENBQU87WUFDbEIsaUVBQWlFO1lBQ2pFLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWdCO29CQUFkLGdCQUFLLEVBQUUsZ0JBQUs7Z0JBQ2pDLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzFCLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdkU7Z0JBQ0QsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBeEJELENBQWtDLFVBQVUsR0F3QjNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICAvKiogVGVzdCBpZiBhIHN0cmluZyBpcyBhIHZhbGlkIFVSTCAqL1xuICBpc1VybCA9IC9eKD86aHR0cChzKT86XFwvXFwvKT9bXFx3Li1dKyg/OlxcLltcXHcuLV0rKStbXFx3XFwtLl9+Oi8/I1tcXF1AISQmJygpKissOz0uXSskL1xuXG4gIC8qKiBUdXJuIGEgc3RyaW5nIGludG8gYW4gYW5jaG9yIGVsZW1lbnQgKi9cbiAgdG9VcmwgPSAoc3RyaW5nOiBzdHJpbmcpID0+IGA8YSBocmVmPVwiJHtzdHJpbmd9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHtzdHJpbmd9PGE+YFxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBjb25zdCB7IGhpZGVMYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBncm91cCA9IGRhdGEuZ3JvdXAubWFwKChkKSA9PiB7XG4gICAgICBsZXQgeyBpdGVtcyB9ID0gZDtcbiAgICAgIC8vIENvbnZlcnQgVVJMcyB0byBhbmNob3IgZWxlbWVudHMgYW5kIHJlbW92ZSBsYWJlbHMgaWYgbmVjZXNzYXJ5XG4gICAgICBpdGVtcyA9IGQuaXRlbXMubWFwKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzVXJsLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuICh7IGxhYmVsOiBoaWRlTGFiZWxzID8gJycgOiBsYWJlbCwgdmFsdWU6IHRoaXMudG9VcmwodmFsdWUpIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoeyBsYWJlbDogaGlkZUxhYmVscyA/ICcnIDogbGFiZWwsIHZhbHVlIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBpdGVtcyB9O1xuICAgIH0pO1xuICAgIC8vIE92ZXJ3cml0ZSB0aGUgbWV0YWRhdGEgZ3JvdXBcbiAgICBkYXRhLmdyb3VwID0gZ3JvdXA7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiJdfQ==