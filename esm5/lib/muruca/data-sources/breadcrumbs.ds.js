import { __extends, __read, __spread } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrBreadcrumbsDS = /** @class */ (function (_super) {
    __extends(MrBreadcrumbsDS, _super);
    function MrBreadcrumbsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrBreadcrumbsDS.prototype.transform = function (data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9icmVhZGNydW1icy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUduRDtJQUFxQyxtQ0FBVTtJQUEvQzs7SUF3QkEsQ0FBQztJQXZCVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUEsZ0NBQUksQ0FBd0I7WUFDbEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLEtBQUssWUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBZTtvQkFBYixjQUFJLEVBQUUsZ0JBQUs7Z0JBQU8sT0FBQSxDQUFDO29CQUNoQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDaEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtpQkFDdkIsQ0FBQztZQUgrQixDQUcvQixDQUFDLEVBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWU7b0JBQWIsY0FBSSxFQUFFLGdCQUFLO2dCQUFPLE9BQUEsQ0FBQztvQkFDaEMsS0FBSyxFQUFFLEtBQUs7b0JBQ1osTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtpQkFDdkIsQ0FBQztZQUgrQixDQUcvQixDQUFDLENBQ0osQ0FBQztTQUNIO1FBRUQsbUJBQW1CO1FBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUFxQyxVQUFVLEdBd0I5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1ic0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJCcmVhZGNydW1ic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBCcmVhZGNydW1ic0RhdGEge1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCkge1xyXG4gICAgICBsZXQgeyBiYXNlIH0gPSB0aGlzLm9wdGlvbnMgfHwge307XHJcbiAgICAgIGJhc2UgPSBBcnJheS5pc0FycmF5KGJhc2UpID8gYmFzZSA6IFtdO1xyXG4gICAgICBpdGVtcyA9IFtcclxuICAgICAgICAuLi5iYXNlLm1hcCgoeyBsaW5rLCB0aXRsZSB9KSA9PiAoe1xyXG4gICAgICAgICAgbGFiZWw6IF90KHRpdGxlKSxcclxuICAgICAgICAgIGFuY2hvcjogeyBocmVmOiBsaW5rIH1cclxuICAgICAgICB9KSksXHJcbiAgICAgICAgLi4uZGF0YS5tYXAoKHsgbGluaywgdGl0bGUgfSkgPT4gKHtcclxuICAgICAgICAgIGxhYmVsOiB0aXRsZSxcclxuICAgICAgICAgIGFuY2hvcjogeyBocmVmOiBsaW5rIH1cclxuICAgICAgICB9KSlcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgbGFzdCBsaW5rXHJcbiAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmFuY2hvciA9IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBpdGVtcyB9O1xyXG4gIH1cclxufVxyXG4iXX0=