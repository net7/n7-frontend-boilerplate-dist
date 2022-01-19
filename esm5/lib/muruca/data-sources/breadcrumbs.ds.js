import { __extends, __read, __spread } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrBreadcrumbsDS = /** @class */ (function (_super) {
    __extends(MrBreadcrumbsDS, _super);
    function MrBreadcrumbsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrBreadcrumbsDS.prototype.transform = function (data) {
        if (!data)
            return null;
        var items = [];
        if (Array.isArray(data) && data.length) {
            var base = (this.options || {}).base;
            base = Array.isArray(base) ? base : [];
            items = __spread(base.map(function (_a) {
                var link = _a.link, title = _a.title;
                return ({
                    label: _t(title),
                    anchor: { href: link }
                });
            }), data.map(function (_a) {
                var link = _a.link, title = _a.title;
                return ({
                    label: title,
                    anchor: { href: link }
                });
            }));
        }
        // remove last link
        if (items.length) {
            items[items.length - 1].anchor = null;
        }
        return { items: items };
    };
    return MrBreadcrumbsDS;
}(DataSource));
export { MrBreadcrumbsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9icmVhZGNydW1icy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUduRDtJQUFxQyxtQ0FBVTtJQUEvQzs7SUF5QkEsQ0FBQztJQXhCVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBQSxnQ0FBSSxDQUF3QjtZQUNsQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkMsS0FBSyxZQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFlO29CQUFiLGNBQUksRUFBRSxnQkFBSztnQkFBTyxPQUFBLENBQUM7b0JBQ2hDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNoQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO2lCQUN2QixDQUFDO1lBSCtCLENBRy9CLENBQUMsRUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBZTtvQkFBYixjQUFJLEVBQUUsZ0JBQUs7Z0JBQU8sT0FBQSxDQUFDO29CQUNoQyxLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO2lCQUN2QixDQUFDO1lBSCtCLENBRy9CLENBQUMsQ0FDSixDQUFDO1NBQ0g7UUFFRCxtQkFBbUI7UUFDbkIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdkM7UUFDRCxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBekJELENBQXFDLFVBQVUsR0F5QjlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWJzRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckJyZWFkY3J1bWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IEJyZWFkY3J1bWJzRGF0YSB7XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCkge1xyXG4gICAgICBsZXQgeyBiYXNlIH0gPSB0aGlzLm9wdGlvbnMgfHwge307XHJcbiAgICAgIGJhc2UgPSBBcnJheS5pc0FycmF5KGJhc2UpID8gYmFzZSA6IFtdO1xyXG4gICAgICBpdGVtcyA9IFtcclxuICAgICAgICAuLi5iYXNlLm1hcCgoeyBsaW5rLCB0aXRsZSB9KSA9PiAoe1xyXG4gICAgICAgICAgbGFiZWw6IF90KHRpdGxlKSxcclxuICAgICAgICAgIGFuY2hvcjogeyBocmVmOiBsaW5rIH1cclxuICAgICAgICB9KSksXHJcbiAgICAgICAgLi4uZGF0YS5tYXAoKHsgbGluaywgdGl0bGUgfSkgPT4gKHtcclxuICAgICAgICAgIGxhYmVsOiB0aXRsZSxcclxuICAgICAgICAgIGFuY2hvcjogeyBocmVmOiBsaW5rIH1cclxuICAgICAgICB9KSlcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgbGFzdCBsaW5rXHJcbiAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmFuY2hvciA9IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBpdGVtcyB9O1xyXG4gIH1cclxufVxyXG4iXX0=