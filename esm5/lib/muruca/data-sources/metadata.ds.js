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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDtJQUFrQyxnQ0FBVTtJQUE1QztRQUFBLHFFQXVEQztRQXREQyxzQ0FBc0M7UUFDdEMsV0FBSyxHQUFHLHlFQUF5RSxDQUFBO1FBRWpGLDJDQUEyQztRQUMzQyxXQUFLLEdBQUcsVUFBQyxNQUFjLElBQUssT0FBQSxlQUFZLE1BQU0sNkJBQXFCLE1BQU0sUUFBSyxFQUFsRCxDQUFrRCxDQUFBOztJQWtEaEYsQ0FBQztJQWhEVyxnQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQTdCLGlCQTJCQztRQTFCUyxJQUFBLG9DQUFVLENBQWtCO1FBQzVCLElBQUEsa0JBQUssQ0FBVTtRQUN2QixJQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBZ0I7b0JBQWQsZ0JBQUssRUFBRSxnQkFBSztnQkFDM0IsSUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLFlBQ0wsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFDakIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDM0I7cUJBQ0gsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsQ0FBQztnQ0FDTixLQUFLLEVBQUUsQ0FBQzt3Q0FDTixLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3Q0FDcEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3FDQUNoQyxDQUFDOzZCQUNILENBQUM7cUJBQ0gsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxtQ0FBWSxHQUFwQixVQUFxQixLQUFLO1FBQTFCLGlCQWNDO1FBYkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsT0FBTztnQkFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLGNBQ3JCLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ3pCLEVBRndCLENBRXhCLENBQUM7YUFDSixDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxDQUFDO2dCQUMvQixLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDMUMsQ0FBQyxFQUg4QixDQUc5QixDQUFDO1NBQ0osQ0FBQztJQUNKLENBQUM7SUFFTyxtQ0FBWSxHQUFwQixVQUFxQixLQUFLO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBdkRELENBQWtDLFVBQVUsR0F1RDNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNck1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgLyoqIFRlc3QgaWYgYSBzdHJpbmcgaXMgYSB2YWxpZCBVUkwgKi9cbiAgaXNVcmwgPSAvXig/Omh0dHAocyk/OlxcL1xcLyk/W1xcdy4tXSsoPzpcXC5bXFx3Li1dKykrW1xcd1xcLS5ffjovPyNbXFxdQCEkJicoKSorLDs9Ll0rJC9cblxuICAvKiogVHVybiBhIHN0cmluZyBpbnRvIGFuIGFuY2hvciBlbGVtZW50ICovXG4gIHRvVXJsID0gKHN0cmluZzogc3RyaW5nKSA9PiBgPGEgaHJlZj1cIiR7c3RyaW5nfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7c3RyaW5nfTxhPmBcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyBoaWRlTGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyBncm91cCB9ID0gZGF0YTtcbiAgICBjb25zdCByZXN1bHQgPSB7IGdyb3VwOiBbXSB9O1xuICAgIGdyb3VwLmZvckVhY2goKHsgaXRlbXMgfSkgPT4ge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoeyBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtTGFiZWwgPSBsYWJlbCAmJiAhaGlkZUxhYmVscyA/IGxhYmVsIDogbnVsbDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgcmVzdWx0Lmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgZ3JvdXA6IFt7XG4gICAgICAgICAgICAgIHRpdGxlOiBfdChpdGVtTGFiZWwpLFxuICAgICAgICAgICAgICAuLi50aGlzLmdldEl0ZW1Hcm91cCh2YWx1ZSlcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgZ3JvdXA6IFt7XG4gICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdChpdGVtTGFiZWwpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldEl0ZW1WYWx1ZSh2YWx1ZSlcbiAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdldEl0ZW1Hcm91cCh2YWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBBcnJheS5pc0FycmF5KHZhbHVlWzBdKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ3JvdXA6IHZhbHVlLm1hcCgodmFsKSA9PiAoe1xuICAgICAgICAgIC4uLnRoaXMuZ2V0SXRlbUdyb3VwKHZhbClcbiAgICAgICAgfSkpXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHZhbHVlLm1hcCgoY2hpbGRJdGVtKSA9PiAoe1xuICAgICAgICBsYWJlbDogX3QoY2hpbGRJdGVtLmxhYmVsKSxcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0SXRlbVZhbHVlKGNoaWxkSXRlbS52YWx1ZSlcbiAgICAgIH0pKVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldEl0ZW1WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmlzVXJsLnRlc3QodmFsdWUpID8gdGhpcy50b1VybCh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxufVxuIl19