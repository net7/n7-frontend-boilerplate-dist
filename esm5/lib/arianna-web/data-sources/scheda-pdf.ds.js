import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaPdfDS = /** @class */ (function (_super) {
    __extends(AwSchedaPdfDS, _super);
    function AwSchedaPdfDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSchedaPdfDS.prototype.transform = function (data) {
        var items = data.items;
        if (!(Array.isArray(items) && items.length)) {
            return null;
        }
        this.items = items.map(function (item, index) { return (__assign(__assign({}, item), { selected: index === 0 })); });
        // defaults
        return {
            items: this.items,
            next: 1,
            prev: null,
            currentUrl: items[0].url
        };
    };
    AwSchedaPdfDS.prototype.onChange = function (index) {
        this.output.next = index < (this.items.length - 1) ? index + 1 : null;
        this.output.prev = index > 0 ? index - 1 : null;
        this.output.currentUrl = this.items[index].url;
        this.items.forEach(function (item, itemIndex) {
            item.selected = itemIndex === index;
        });
    };
    AwSchedaPdfDS.prototype.onLoaded = function () {
        this.output.classes = 'is-loaded';
    };
    return AwSchedaPdfDS;
}(DataSource));
export { AwSchedaPdfDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLXBkZi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvc2NoZWRhLXBkZi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQW1DLGlDQUFVO0lBQTdDOztJQXVDQSxDQUFDO0lBaENXLGlDQUFTLEdBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLGtCQUFLLENBQVU7UUFDdkIsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0MsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSx1QkFDbkMsSUFBSSxLQUNQLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxJQUNyQixFQUhzQyxDQUd0QyxDQUFDLENBQUM7UUFFSixXQUFXO1FBQ1gsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1NBQ3pCLENBQUM7SUFDSixDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxTQUFTO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxLQUFLLEtBQUssQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF2Q0QsQ0FBbUMsVUFBVSxHQXVDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgUGRmVmlld2VyRGF0YSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFQZGZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGl0ZW1zOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgfVtdO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IFBkZlZpZXdlckRhdGEge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IGRhdGE7XG4gICAgaWYgKCEoQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XG4gICAgICAuLi5pdGVtLFxuICAgICAgc2VsZWN0ZWQ6IGluZGV4ID09PSAwXG4gICAgfSkpO1xuXG4gICAgLy8gZGVmYXVsdHNcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHRoaXMuaXRlbXMsXG4gICAgICBuZXh0OiAxLFxuICAgICAgcHJldjogbnVsbCxcbiAgICAgIGN1cnJlbnRVcmw6IGl0ZW1zWzBdLnVybFxuICAgIH07XG4gIH1cblxuICBvbkNoYW5nZShpbmRleCkge1xuICAgIHRoaXMub3V0cHV0Lm5leHQgPSBpbmRleCA8ICh0aGlzLml0ZW1zLmxlbmd0aCAtIDEpID8gaW5kZXggKyAxIDogbnVsbDtcbiAgICB0aGlzLm91dHB1dC5wcmV2ID0gaW5kZXggPiAwID8gaW5kZXggLSAxIDogbnVsbDtcbiAgICB0aGlzLm91dHB1dC5jdXJyZW50VXJsID0gdGhpcy5pdGVtc1tpbmRleF0udXJsO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbUluZGV4ID09PSBpbmRleDtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuICAgIHRoaXMub3V0cHV0LmNsYXNzZXMgPSAnaXMtbG9hZGVkJztcbiAgfVxufVxuIl19