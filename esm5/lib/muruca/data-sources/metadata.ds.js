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
        var group = data.group;
        var result = { group: [] };
        group.forEach(function (_a) {
            var items = _a.items;
            items.forEach(function (_a) {
                var label = _a.label, value = _a.value;
                var itemLabel = label && !hideLabels ? label : null;
                if (Array.isArray(value)) {
                    result.group.push({
                        group: [{
                                title: itemLabel,
                                items: value.map(function (childItem) { return ({
                                    label: childItem.label,
                                    value: _this.getItemValue(childItem.value)
                                }); })
                            }]
                    });
                }
                else {
                    result.group.push({
                        group: [{
                                items: [{
                                        label: itemLabel,
                                        value: _this.getItemValue(value)
                                    }]
                            }]
                    });
                }
            });
        });
        return result;
    };
    MrMetadataDS.prototype.getItemValue = function (value) {
        return this.isUrl.test(value) ? this.toUrl(value) : value;
    };
    return MrMetadataDS;
}(DataSource));
export { MrMetadataDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQWtDLGdDQUFVO0lBQTVDO1FBQUEscUVBMENDO1FBekNDLHNDQUFzQztRQUN0QyxXQUFLLEdBQUcseUVBQXlFLENBQUE7UUFFakYsMkNBQTJDO1FBQzNDLFdBQUssR0FBRyxVQUFDLE1BQWMsSUFBSyxPQUFBLGVBQVksTUFBTSw2QkFBcUIsTUFBTSxRQUFLLEVBQWxELENBQWtELENBQUE7O0lBcUNoRixDQUFDO0lBbkNXLGdDQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBOEJDO1FBN0JTLElBQUEsb0NBQVUsQ0FBa0I7UUFDNUIsSUFBQSxrQkFBSyxDQUFVO1FBQ3ZCLElBQU0sTUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFnQjtvQkFBZCxnQkFBSyxFQUFFLGdCQUFLO2dCQUMzQixJQUFNLFNBQVMsR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNoQixLQUFLLEVBQUUsQ0FBQztnQ0FDTixLQUFLLEVBQUUsU0FBUztnQ0FDaEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxDQUFDO29DQUMvQixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7b0NBQ3RCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7aUNBQzFDLENBQUMsRUFIOEIsQ0FHOUIsQ0FBQzs2QkFDSixDQUFDO3FCQUNILENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLENBQUM7Z0NBQ04sS0FBSyxFQUFFLENBQUM7d0NBQ04sS0FBSyxFQUFFLFNBQVM7d0NBQ2hCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztxQ0FDaEMsQ0FBQzs2QkFDSCxDQUFDO3FCQUNILENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sbUNBQVksR0FBcEIsVUFBcUIsS0FBSztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTFDRCxDQUFrQyxVQUFVLEdBMEMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNck1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgLyoqIFRlc3QgaWYgYSBzdHJpbmcgaXMgYSB2YWxpZCBVUkwgKi9cbiAgaXNVcmwgPSAvXig/Omh0dHAocyk/OlxcL1xcLyk/W1xcdy4tXSsoPzpcXC5bXFx3Li1dKykrW1xcd1xcLS5ffjovPyNbXFxdQCEkJicoKSorLDs9Ll0rJC9cblxuICAvKiogVHVybiBhIHN0cmluZyBpbnRvIGFuIGFuY2hvciBlbGVtZW50ICovXG4gIHRvVXJsID0gKHN0cmluZzogc3RyaW5nKSA9PiBgPGEgaHJlZj1cIiR7c3RyaW5nfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7c3RyaW5nfTxhPmBcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyBoaWRlTGFiZWxzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyBncm91cCB9ID0gZGF0YTtcbiAgICBjb25zdCByZXN1bHQgPSB7IGdyb3VwOiBbXSB9O1xuICAgIGdyb3VwLmZvckVhY2goKHsgaXRlbXMgfSkgPT4ge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoeyBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtTGFiZWwgPSBsYWJlbCAmJiAhaGlkZUxhYmVscyA/IGxhYmVsIDogbnVsbDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgcmVzdWx0Lmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgZ3JvdXA6IFt7XG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtTGFiZWwsXG4gICAgICAgICAgICAgIGl0ZW1zOiB2YWx1ZS5tYXAoKGNoaWxkSXRlbSkgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogY2hpbGRJdGVtLmxhYmVsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldEl0ZW1WYWx1ZShjaGlsZEl0ZW0udmFsdWUpXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBncm91cDogW3tcbiAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW1MYWJlbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRJdGVtVmFsdWUodmFsdWUpXG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJdGVtVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5pc1VybC50ZXN0KHZhbHVlKSA/IHRoaXMudG9VcmwodmFsdWUpIDogdmFsdWU7XG4gIH1cbn1cbiJdfQ==