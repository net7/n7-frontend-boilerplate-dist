import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
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
        var group = data.group;
        if (!(group || []).length) {
            return null;
        }
        var result = { group: [] };
        group.forEach(function (_a) {
            var items = _a.items;
            items.forEach(function (_a) {
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
                                items: [{
                                        label: _t(itemLabel),
                                        value: _this.getItemValue(value)
                                    }]
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
            items: value.map(function (childItem) { return ({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDtJQUFrQyxnQ0FBVTtJQUE1QztRQUFBLHFFQTREQztRQTNEQyxzQ0FBc0M7UUFDdEMsV0FBSyxHQUFHLHlFQUF5RSxDQUFBO1FBRWpGLDJDQUEyQztRQUMzQyxXQUFLLEdBQUcsVUFBQyxNQUFjLElBQUssT0FBQSxlQUFZLE1BQU0sNkJBQXFCLE1BQU0sUUFBSyxFQUFsRCxDQUFrRCxDQUFBOztJQXVEaEYsQ0FBQztJQXJEVyxnQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQTdCLGlCQWdDQztRQS9CUyxJQUFBLG9DQUFVLENBQWtCO1FBQzVCLElBQUEsa0JBQUssQ0FBVTtRQUV2QixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBZ0I7b0JBQWQsZ0JBQUssRUFBRSxnQkFBSztnQkFDM0IsSUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLFlBQ0wsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFDakIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDM0I7cUJBQ0gsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsQ0FBQztnQ0FDTixLQUFLLEVBQUUsQ0FBQzt3Q0FDTixLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3Q0FDcEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3FDQUNoQyxDQUFDOzZCQUNILENBQUM7cUJBQ0gsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxtQ0FBWSxHQUFwQixVQUFxQixLQUFLO1FBQTFCLGlCQWNDO1FBYkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsT0FBTztnQkFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLGNBQ3JCLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ3pCLEVBRndCLENBRXhCLENBQUM7YUFDSixDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxDQUFDO2dCQUMvQixLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDMUMsQ0FBQyxFQUg4QixDQUc5QixDQUFDO1NBQ0osQ0FBQztJQUNKLENBQUM7SUFFTyxtQ0FBWSxHQUFwQixVQUFxQixLQUFLO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBNURELENBQWtDLFVBQVUsR0E0RDNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNck1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgLyoqIFRlc3QgaWYgYSBzdHJpbmcgaXMgYSB2YWxpZCBVUkwgKi9cbiAgaXNVcmwgPSAvXig/Omh0dHAocyk/OlxcL1xcLyk/W1xcdy4tXSsoPzpcXC5bXFx3Li1dKykrW1xcd1xcLS5ffjovPyNbXFxdQCEkJicoKSorLDs9Ll0rJC9cblxuICAvKiogVHVybiBhIHN0cmluZyBpbnRvIGFuIGFuY2hvciBlbGVtZW50ICovXG4gIHRvVXJsID0gKHN0cmluZzogc3RyaW5nKSA9PiBgPGEgaHJlZj1cIiR7c3RyaW5nfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7c3RyaW5nfTxhPmBcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyBoaWRlTGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyBncm91cCB9ID0gZGF0YTtcblxuICAgIGlmICghKGdyb3VwIHx8IFtdKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHsgZ3JvdXA6IFtdIH07XG4gICAgZ3JvdXAuZm9yRWFjaCgoeyBpdGVtcyB9KSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1MYWJlbCA9IGxhYmVsICYmICFoaWRlTGFiZWxzID8gbGFiZWwgOiBudWxsO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBncm91cDogW3tcbiAgICAgICAgICAgICAgdGl0bGU6IF90KGl0ZW1MYWJlbCksXG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0SXRlbUdyb3VwKHZhbHVlKVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBncm91cDogW3tcbiAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF90KGl0ZW1MYWJlbCksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0SXRlbVZhbHVlKHZhbHVlKVxuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SXRlbUdyb3VwKHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBncm91cDogdmFsdWUubWFwKCh2YWwpID0+ICh7XG4gICAgICAgICAgLi4udGhpcy5nZXRJdGVtR3JvdXAodmFsKVxuICAgICAgICB9KSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogdmFsdWUubWFwKChjaGlsZEl0ZW0pID0+ICh7XG4gICAgICAgIGxhYmVsOiBfdChjaGlsZEl0ZW0ubGFiZWwpLFxuICAgICAgICB2YWx1ZTogdGhpcy5nZXRJdGVtVmFsdWUoY2hpbGRJdGVtLnZhbHVlKVxuICAgICAgfSkpXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SXRlbVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNVcmwudGVzdCh2YWx1ZSkgPyB0aGlzLnRvVXJsKHZhbHVlKSA6IHZhbHVlO1xuICB9XG59XG4iXX0=