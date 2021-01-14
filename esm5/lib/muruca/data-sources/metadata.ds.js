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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDtJQUFrQyxnQ0FBVTtJQUE1QztRQUFBLHFFQThEQztRQTdEQyxzQ0FBc0M7UUFDdEMsV0FBSyxHQUFHLHlFQUF5RSxDQUFBO1FBRWpGLDJDQUEyQztRQUMzQyxXQUFLLEdBQUcsVUFBQyxNQUFjLElBQUssT0FBQSxlQUFZLE1BQU0sNkJBQXFCLE1BQU0sUUFBSyxFQUFsRCxDQUFrRCxDQUFBOztJQXlEaEYsQ0FBQztJQXZEVyxnQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQTdCLGlCQWdDQztRQS9CUyxJQUFBLG9DQUFVLENBQWtCO1FBQzVCLElBQUEsa0JBQUssQ0FBVTtRQUV2QixJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBZ0I7b0JBQWQsZ0JBQUssRUFBRSxnQkFBSztnQkFDM0IsSUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLFlBQ0wsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFDakIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDM0I7cUJBQ0gsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsQ0FBQztnQ0FDTixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dDQUNkLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDO3dDQUNwQixLQUFLLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7cUNBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs2QkFDUixDQUFDO3FCQUNILENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sbUNBQVksR0FBcEIsVUFBcUIsS0FBSztRQUExQixpQkFnQkM7UUFmQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuRCxPQUFPO2dCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsY0FDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDekIsRUFGd0IsQ0FFeEIsQ0FBQzthQUNKLENBQUM7U0FDSDtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSztpQkFDVCxNQUFNLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsQ0FBQztpQkFDeEMsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsQ0FBQztnQkFDbkIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUMxQixLQUFLLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzFDLENBQUMsRUFIa0IsQ0FHbEIsQ0FBQztTQUNOLENBQUM7SUFDSixDQUFDO0lBRU8sbUNBQVksR0FBcEIsVUFBcUIsS0FBSztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTlERCxDQUFrQyxVQUFVLEdBOEQzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIC8qKiBUZXN0IGlmIGEgc3RyaW5nIGlzIGEgdmFsaWQgVVJMICovXHJcbiAgaXNVcmwgPSAvXig/Omh0dHAocyk/OlxcL1xcLyk/W1xcdy4tXSsoPzpcXC5bXFx3Li1dKykrW1xcd1xcLS5ffjovPyNbXFxdQCEkJicoKSorLDs9Ll0rJC9cclxuXHJcbiAgLyoqIFR1cm4gYSBzdHJpbmcgaW50byBhbiBhbmNob3IgZWxlbWVudCAqL1xyXG4gIHRvVXJsID0gKHN0cmluZzogc3RyaW5nKSA9PiBgPGEgaHJlZj1cIiR7c3RyaW5nfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7c3RyaW5nfTxhPmBcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgeyBoaWRlTGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCB7IGdyb3VwIH0gPSBkYXRhO1xyXG5cclxuICAgIGlmICghKGdyb3VwIHx8IFtdKS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0geyBncm91cDogW10gfTtcclxuICAgIGdyb3VwLmZvckVhY2goKHsgaXRlbXMgfSkgPT4ge1xyXG4gICAgICBpdGVtcy5mb3JFYWNoKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbUxhYmVsID0gbGFiZWwgJiYgIWhpZGVMYWJlbHMgPyBsYWJlbCA6IG51bGw7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XHJcbiAgICAgICAgICAgIGdyb3VwOiBbe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBfdChpdGVtTGFiZWwpLFxyXG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0SXRlbUdyb3VwKHZhbHVlKVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdC5ncm91cC5wdXNoKHtcclxuICAgICAgICAgICAgZ3JvdXA6IFt7XHJcbiAgICAgICAgICAgICAgaXRlbXM6IHZhbHVlID8gW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBfdChpdGVtTGFiZWwpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0SXRlbVZhbHVlKHZhbHVlKVxyXG4gICAgICAgICAgICAgIH1dIDogW11cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEl0ZW1Hcm91cCh2YWx1ZSkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZ3JvdXA6IHZhbHVlLm1hcCgodmFsKSA9PiAoe1xyXG4gICAgICAgICAgLi4udGhpcy5nZXRJdGVtR3JvdXAodmFsKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXRlbXM6IHZhbHVlXHJcbiAgICAgICAgLmZpbHRlcigoY2hpbGRJdGVtKSA9PiAhIWNoaWxkSXRlbS52YWx1ZSlcclxuICAgICAgICAubWFwKChjaGlsZEl0ZW0pID0+ICh7XHJcbiAgICAgICAgICBsYWJlbDogX3QoY2hpbGRJdGVtLmxhYmVsKSxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLmdldEl0ZW1WYWx1ZShjaGlsZEl0ZW0udmFsdWUpXHJcbiAgICAgICAgfSkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJdGVtVmFsdWUodmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVXJsLnRlc3QodmFsdWUpID8gdGhpcy50b1VybCh2YWx1ZSkgOiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19