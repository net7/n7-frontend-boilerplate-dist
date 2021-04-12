import { __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrResourceTabsDS = /** @class */ (function (_super) {
    __extends(MrResourceTabsDS, _super);
    function MrResourceTabsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrResourceTabsDS.prototype.transform = function (data) {
        var _a = this.options, currentTab = _a.currentTab, root = _a.root, slug = _a.slug, resourceId = _a.id;
        return data.map(function (_a) {
            var id = _a.id, label = _a.label;
            return ({
                label: _t(label),
                classes: currentTab === id ? 'is-active' : '',
                anchor: {
                    href: "/" + root + "/" + resourceId + "/" + slug + "/" + id
                }
            });
        });
    };
    return MrResourceTabsDS;
}(DataSource));
export { MrResourceTabsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtdGFicy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3Jlc291cmNlLXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBc0Msb0NBQVU7SUFBaEQ7O0lBY0EsQ0FBQztJQWJXLG9DQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDckIsSUFBQSxpQkFFVSxFQURkLDBCQUFVLEVBQUUsY0FBSSxFQUFFLGNBQUksRUFBRSxrQkFDVixDQUFDO1FBRWpCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWE7Z0JBQVgsVUFBRSxFQUFFLGdCQUFLO1lBQU8sT0FBQSxDQUFDO2dCQUNsQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDaEIsT0FBTyxFQUFFLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxNQUFJLElBQUksU0FBSSxVQUFVLFNBQUksSUFBSSxTQUFJLEVBQUk7aUJBQzdDO2FBQ0YsQ0FBQztRQU5pQyxDQU1qQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBc0MsVUFBVSxHQWMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yUmVzb3VyY2VUYWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGN1cnJlbnRUYWIsIHJvb3QsIHNsdWcsIGlkOiByZXNvdXJjZUlkXHJcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xyXG5cclxuICAgIHJldHVybiBkYXRhLm1hcCgoeyBpZCwgbGFiZWwgfSkgPT4gKHtcclxuICAgICAgbGFiZWw6IF90KGxhYmVsKSxcclxuICAgICAgY2xhc3NlczogY3VycmVudFRhYiA9PT0gaWQgPyAnaXMtYWN0aXZlJyA6ICcnLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBocmVmOiBgLyR7cm9vdH0vJHtyZXNvdXJjZUlkfS8ke3NsdWd9LyR7aWR9YFxyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==