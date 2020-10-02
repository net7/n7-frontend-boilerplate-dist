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
            items = d.items
                .filter(function (_a) {
                var label = _a.label, value = _a.value;
                return label && value;
            })
                .map(function (_a) {
                var label = _a.label, value = _a.value;
                var newItem = {};
                // value check
                if (value) {
                    if (_this.isUrl.test(value)) {
                        newItem.value = _this.toUrl(value);
                    }
                    else {
                        newItem.value = value;
                    }
                }
                if (label && !hideLabels) {
                    newItem.label = label;
                }
                return newItem;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9tZXRhZGF0YS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQWtDLGdDQUFVO0lBQTVDO1FBQUEscUVBcUNDO1FBcENDLHNDQUFzQztRQUN0QyxXQUFLLEdBQUcseUVBQXlFLENBQUE7UUFFakYsMkNBQTJDO1FBQzNDLFdBQUssR0FBRyxVQUFDLE1BQWMsSUFBSyxPQUFBLGVBQVksTUFBTSw2QkFBcUIsTUFBTSxRQUFLLEVBQWxELENBQWtELENBQUE7O0lBZ0NoRixDQUFDO0lBOUJXLGdDQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBNkJDO1FBNUJTLElBQUEsb0NBQVUsQ0FBa0I7UUFDcEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDO1lBQ3ZCLElBQUEsZUFBSyxDQUFPO1lBQ2xCLGlFQUFpRTtZQUNqRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUs7aUJBQ1osTUFBTSxDQUFDLFVBQUMsRUFBZ0I7b0JBQWQsZ0JBQUssRUFBRSxnQkFBSztnQkFBTyxPQUFBLEtBQUssSUFBSSxLQUFLO1lBQWQsQ0FBYyxDQUFDO2lCQUM1QyxHQUFHLENBQUMsVUFBQyxFQUFnQjtvQkFBZCxnQkFBSyxFQUFFLGdCQUFLO2dCQUNsQixJQUFNLE9BQU8sR0FBRyxFQUF3QyxDQUFDO2dCQUN6RCxjQUFjO2dCQUNkLElBQUksS0FBSyxFQUFFO29CQUNULElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQzFCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbkM7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7cUJBQ3ZCO2lCQUNGO2dCQUVELElBQUksS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUN4QixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztpQkFDdkI7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFFTCxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNILCtCQUErQjtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFyQ0QsQ0FBa0MsVUFBVSxHQXFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJNZXRhZGF0YURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIC8qKiBUZXN0IGlmIGEgc3RyaW5nIGlzIGEgdmFsaWQgVVJMICovXG4gIGlzVXJsID0gL14oPzpodHRwKHMpPzpcXC9cXC8pP1tcXHcuLV0rKD86XFwuW1xcdy4tXSspK1tcXHdcXC0uX346Lz8jW1xcXUAhJCYnKCkqKyw7PS5dKyQvXG5cbiAgLyoqIFR1cm4gYSBzdHJpbmcgaW50byBhbiBhbmNob3IgZWxlbWVudCAqL1xuICB0b1VybCA9IChzdHJpbmc6IHN0cmluZykgPT4gYDxhIGhyZWY9XCIke3N0cmluZ31cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3N0cmluZ308YT5gXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgaGlkZUxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGdyb3VwID0gZGF0YS5ncm91cC5tYXAoKGQpID0+IHtcbiAgICAgIGxldCB7IGl0ZW1zIH0gPSBkO1xuICAgICAgLy8gQ29udmVydCBVUkxzIHRvIGFuY2hvciBlbGVtZW50cyBhbmQgcmVtb3ZlIGxhYmVscyBpZiBuZWNlc3NhcnlcbiAgICAgIGl0ZW1zID0gZC5pdGVtc1xuICAgICAgICAuZmlsdGVyKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiBsYWJlbCAmJiB2YWx1ZSlcbiAgICAgICAgLm1hcCgoeyBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7fSBhcyB7IGxhYmVsPzogc3RyaW5nOyB2YWx1ZT86IHN0cmluZyB9O1xuICAgICAgICAgIC8vIHZhbHVlIGNoZWNrXG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1VybC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICBuZXdJdGVtLnZhbHVlID0gdGhpcy50b1VybCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdJdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGxhYmVsICYmICFoaWRlTGFiZWxzKSB7XG4gICAgICAgICAgICBuZXdJdGVtLmxhYmVsID0gbGFiZWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXdJdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHsgaXRlbXMgfTtcbiAgICB9KTtcbiAgICAvLyBPdmVyd3JpdGUgdGhlIG1ldGFkYXRhIGdyb3VwXG4gICAgZGF0YS5ncm91cCA9IGdyb3VwO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59XG4iXX0=