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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDtJQUFrQyxnQ0FBVTtJQUE1QztRQUFBLHFFQThEQztRQTdEQyxzQ0FBc0M7UUFDdEMsV0FBSyxHQUFHLHlFQUF5RSxDQUFBO1FBRWpGLDJDQUEyQztRQUMzQyxXQUFLLEdBQUcsVUFBQyxNQUFjLElBQUssT0FBQSxlQUFZLE1BQU0sNkJBQXFCLE1BQU0sUUFBSyxFQUFsRCxDQUFrRCxDQUFBOztJQXlEaEYsQ0FBQztJQXZEVyxnQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQTdCLGlCQWdDQztRQS9CUyxJQUFBLG9DQUFVLENBQWtCO1FBQzVCLElBQUEsa0JBQUssQ0FBVTtRQUV2QixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBZ0I7b0JBQWQsZ0JBQUssRUFBRSxnQkFBSztnQkFDM0IsSUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLFlBQ0wsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFDakIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDM0I7cUJBQ0gsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsQ0FBQztnQ0FDTixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dDQUNkLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDO3dDQUNwQixLQUFLLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7cUNBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs2QkFDUixDQUFDO3FCQUNILENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sbUNBQVksR0FBcEIsVUFBcUIsS0FBSztRQUExQixpQkFnQkM7UUFmQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuRCxPQUFPO2dCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsY0FDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDekIsRUFGd0IsQ0FFeEIsQ0FBQzthQUNKLENBQUM7U0FDSDtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSztpQkFDVCxNQUFNLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsQ0FBQztpQkFDeEMsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsQ0FBQztnQkFDbkIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUMxQixLQUFLLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzFDLENBQUMsRUFIa0IsQ0FHbEIsQ0FBQztTQUNOLENBQUM7SUFDSixDQUFDO0lBRU8sbUNBQVksR0FBcEIsVUFBcUIsS0FBSztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTlERCxDQUFrQyxVQUFVLEdBOEQzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJNZXRhZGF0YURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIC8qKiBUZXN0IGlmIGEgc3RyaW5nIGlzIGEgdmFsaWQgVVJMICovXG4gIGlzVXJsID0gL14oPzpodHRwKHMpPzpcXC9cXC8pP1tcXHcuLV0rKD86XFwuW1xcdy4tXSspK1tcXHdcXC0uX346Lz8jW1xcXUAhJCYnKCkqKyw7PS5dKyQvXG5cbiAgLyoqIFR1cm4gYSBzdHJpbmcgaW50byBhbiBhbmNob3IgZWxlbWVudCAqL1xuICB0b1VybCA9IChzdHJpbmc6IHN0cmluZykgPT4gYDxhIGhyZWY9XCIke3N0cmluZ31cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3N0cmluZ308YT5gXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgaGlkZUxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHsgZ3JvdXAgfSA9IGRhdGE7XG5cbiAgICBpZiAoIShncm91cCB8fCBbXSkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB7IGdyb3VwOiBbXSB9O1xuICAgIGdyb3VwLmZvckVhY2goKHsgaXRlbXMgfSkgPT4ge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoeyBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtTGFiZWwgPSBsYWJlbCAmJiAhaGlkZUxhYmVscyA/IGxhYmVsIDogbnVsbDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgcmVzdWx0Lmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgZ3JvdXA6IFt7XG4gICAgICAgICAgICAgIHRpdGxlOiBfdChpdGVtTGFiZWwpLFxuICAgICAgICAgICAgICAuLi50aGlzLmdldEl0ZW1Hcm91cCh2YWx1ZSlcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgZ3JvdXA6IFt7XG4gICAgICAgICAgICAgIGl0ZW1zOiB2YWx1ZSA/IFt7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF90KGl0ZW1MYWJlbCksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0SXRlbVZhbHVlKHZhbHVlKVxuICAgICAgICAgICAgICB9XSA6IFtdXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJdGVtR3JvdXAodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZVswXSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdyb3VwOiB2YWx1ZS5tYXAoKHZhbCkgPT4gKHtcbiAgICAgICAgICAuLi50aGlzLmdldEl0ZW1Hcm91cCh2YWwpXG4gICAgICAgIH0pKVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiB2YWx1ZVxuICAgICAgICAuZmlsdGVyKChjaGlsZEl0ZW0pID0+ICEhY2hpbGRJdGVtLnZhbHVlKVxuICAgICAgICAubWFwKChjaGlsZEl0ZW0pID0+ICh7XG4gICAgICAgICAgbGFiZWw6IF90KGNoaWxkSXRlbS5sYWJlbCksXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0SXRlbVZhbHVlKGNoaWxkSXRlbS52YWx1ZSlcbiAgICAgICAgfSkpXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SXRlbVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNVcmwudGVzdCh2YWx1ZSkgPyB0aGlzLnRvVXJsKHZhbHVlKSA6IHZhbHVlO1xuICB9XG59XG4iXX0=