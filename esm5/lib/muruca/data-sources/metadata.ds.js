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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWxDO0lBQWtDLGdDQUFVO0lBQTVDO1FBQUEscUVBa0VDO1FBakVDLHNDQUFzQztRQUN0QyxXQUFLLEdBQUcsd0VBQXdFLENBQUE7UUFFaEYsMkNBQTJDO1FBQzNDLFdBQUssR0FBRyxVQUFDLE1BQWMsSUFBSyxPQUFBLGVBQVksTUFBTSw2QkFBcUIsTUFBTSxRQUFLLEVBQWxELENBQWtELENBQUE7O0lBNkRoRixDQUFDO0lBM0RXLGdDQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBb0NDO1FBbkNTLElBQUEsb0NBQVUsQ0FBa0I7UUFDNUIsSUFBQSxrQkFBSyxDQUFVO1FBRXZCLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sTUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzdCLEtBQUs7YUFDRixNQUFNLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQU8sT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUFwQixDQUFvQixDQUFDO2FBQzNDLE9BQU8sQ0FBQyxVQUFDLEVBQVM7Z0JBQVAsZ0JBQUs7WUFDZixLQUFLO2lCQUNGLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBZCxDQUFjLENBQUM7aUJBQ2hDLE9BQU8sQ0FBQyxVQUFDLEVBQWdCO29CQUFkLGdCQUFLLEVBQUUsZ0JBQUs7Z0JBQ3RCLElBQU0sU0FBUyxHQUFHLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLEtBQUssRUFBRSxZQUNMLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQ2pCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQzNCO3FCQUNILENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLENBQUM7Z0NBQ04sS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3Q0FDZCxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3Q0FDcEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3FDQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NkJBQ1IsQ0FBQztxQkFDSCxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLG1DQUFZLEdBQXBCLFVBQXFCLEtBQUs7UUFBMUIsaUJBZ0JDO1FBZkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkQsT0FBTztnQkFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLGNBQ3JCLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ3pCLEVBRndCLENBRXhCLENBQUM7YUFDSixDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEtBQUs7aUJBQ1QsTUFBTSxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUM7aUJBQ3hDLEdBQUcsQ0FBQyxVQUFDLFNBQVMsSUFBSyxPQUFBLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDMUIsS0FBSyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzthQUMxQyxDQUFDLEVBSGtCLENBR2xCLENBQUM7U0FDTixDQUFDO0lBQ0osQ0FBQztJQUVPLG1DQUFZLEdBQXBCLFVBQXFCLEtBQUs7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFsRUQsQ0FBa0MsVUFBVSxHQWtFM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNsYXNzIE1yTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICAvKiogVGVzdCBpZiBhIHN0cmluZyBpcyBhIHZhbGlkIFVSTCAqL1xuICBpc1VybCA9IC9eKD86aHR0cChzKT86XFwvXFwvKVtcXHcuLV0rKD86XFwuW1xcdy4tXSspK1tcXHdcXC0uX346Lz8jW1xcXUAhJCYnKCkqKyw7PS5dKyQvXG5cbiAgLyoqIFR1cm4gYSBzdHJpbmcgaW50byBhbiBhbmNob3IgZWxlbWVudCAqL1xuICB0b1VybCA9IChzdHJpbmc6IHN0cmluZykgPT4gYDxhIGhyZWY9XCIke3N0cmluZ31cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3N0cmluZ308YT5gXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgaGlkZUxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHsgZ3JvdXAgfSA9IGRhdGE7XG5cbiAgICBpZiAoIShncm91cCB8fCBbXSkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB7IGdyb3VwOiBbXSB9O1xuICAgIGdyb3VwXG4gICAgICAuZmlsdGVyKCh7IGl0ZW1zIH0pID0+IEFycmF5LmlzQXJyYXkoaXRlbXMpKVxuICAgICAgLmZvckVhY2goKHsgaXRlbXMgfSkgPT4ge1xuICAgICAgICBpdGVtc1xuICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGlzT2JqZWN0KGl0ZW0pKVxuICAgICAgICAgIC5mb3JFYWNoKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtTGFiZWwgPSBsYWJlbCAmJiAhaGlkZUxhYmVscyA/IGxhYmVsIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICByZXN1bHQuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICAgICAgZ3JvdXA6IFt7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogX3QoaXRlbUxhYmVsKSxcbiAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0SXRlbUdyb3VwKHZhbHVlKVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgICAgIGdyb3VwOiBbe1xuICAgICAgICAgICAgICAgICAgaXRlbXM6IHZhbHVlID8gW3tcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF90KGl0ZW1MYWJlbCksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldEl0ZW1WYWx1ZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1dIDogW11cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdldEl0ZW1Hcm91cCh2YWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBBcnJheS5pc0FycmF5KHZhbHVlWzBdKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ3JvdXA6IHZhbHVlLm1hcCgodmFsKSA9PiAoe1xuICAgICAgICAgIC4uLnRoaXMuZ2V0SXRlbUdyb3VwKHZhbClcbiAgICAgICAgfSkpXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHZhbHVlXG4gICAgICAgIC5maWx0ZXIoKGNoaWxkSXRlbSkgPT4gISFjaGlsZEl0ZW0udmFsdWUpXG4gICAgICAgIC5tYXAoKGNoaWxkSXRlbSkgPT4gKHtcbiAgICAgICAgICBsYWJlbDogX3QoY2hpbGRJdGVtLmxhYmVsKSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRJdGVtVmFsdWUoY2hpbGRJdGVtLnZhbHVlKVxuICAgICAgICB9KSlcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJdGVtVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5pc1VybC50ZXN0KHZhbHVlKSA/IHRoaXMudG9VcmwodmFsdWUpIDogdmFsdWU7XG4gIH1cbn1cbiJdfQ==