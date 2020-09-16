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
        return { items: items };
    };
    return MrBreadcrumbsDS;
}(DataSource));
export { MrBreadcrumbsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9icmVhZGNydW1icy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUduRDtJQUFxQyxtQ0FBVTtJQUEvQzs7SUFtQkEsQ0FBQztJQWxCVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUEsZ0NBQUksQ0FBd0I7WUFDbEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLEtBQUssWUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBZTtvQkFBYixjQUFJLEVBQUUsZ0JBQUs7Z0JBQU8sT0FBQSxDQUFDO29CQUNoQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDaEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtpQkFDdkIsQ0FBQztZQUgrQixDQUcvQixDQUFDLEVBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWU7b0JBQWIsY0FBSSxFQUFFLGdCQUFLO2dCQUFPLE9BQUEsQ0FBQztvQkFDaEMsS0FBSyxFQUFFLEtBQUs7b0JBQ1osTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtpQkFDdkIsQ0FBQztZQUgrQixDQUcvQixDQUFDLENBQ0osQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQW5CRCxDQUFxQyxVQUFVLEdBbUI5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYnNEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgTXJCcmVhZGNydW1ic0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogQnJlYWRjcnVtYnNEYXRhIHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgbGV0IHsgYmFzZSB9ID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgICAgYmFzZSA9IEFycmF5LmlzQXJyYXkoYmFzZSkgPyBiYXNlIDogW107XG4gICAgICBpdGVtcyA9IFtcbiAgICAgICAgLi4uYmFzZS5tYXAoKHsgbGluaywgdGl0bGUgfSkgPT4gKHtcbiAgICAgICAgICBsYWJlbDogX3QodGl0bGUpLFxuICAgICAgICAgIGFuY2hvcjogeyBocmVmOiBsaW5rIH1cbiAgICAgICAgfSkpLFxuICAgICAgICAuLi5kYXRhLm1hcCgoeyBsaW5rLCB0aXRsZSB9KSA9PiAoe1xuICAgICAgICAgIGxhYmVsOiB0aXRsZSxcbiAgICAgICAgICBhbmNob3I6IHsgaHJlZjogbGluayB9XG4gICAgICAgIH0pKVxuICAgICAgXTtcbiAgICB9XG4gICAgcmV0dXJuIHsgaXRlbXMgfTtcbiAgfVxufVxuIl19