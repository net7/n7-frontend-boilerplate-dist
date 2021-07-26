import { __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrResourceTabsDS = /** @class */ (function (_super) {
    __extends(MrResourceTabsDS, _super);
    function MrResourceTabsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrResourceTabsDS.prototype.transform = function (data) {
        if (!data)
            return null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtdGFicy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3Jlc291cmNlLXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBc0Msb0NBQVU7SUFBaEQ7O0lBZUEsQ0FBQztJQWRXLG9DQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDM0IsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNqQixJQUFBLGlCQUVVLEVBRGQsMEJBQVUsRUFBRSxjQUFJLEVBQUUsY0FBSSxFQUFFLGtCQUNWLENBQUM7UUFFakIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBYTtnQkFBWCxVQUFFLEVBQUUsZ0JBQUs7WUFBTyxPQUFBLENBQUM7Z0JBQ2xDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNoQixPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3QyxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLE1BQUksSUFBSSxTQUFJLFVBQVUsU0FBSSxJQUFJLFNBQUksRUFBSTtpQkFDN0M7YUFDRixDQUFDO1FBTmlDLENBTWpDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFmRCxDQUFzQyxVQUFVLEdBZS9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZVRhYnNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGN1cnJlbnRUYWIsIHJvb3QsIHNsdWcsIGlkOiByZXNvdXJjZUlkXHJcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xyXG5cclxuICAgIHJldHVybiBkYXRhLm1hcCgoeyBpZCwgbGFiZWwgfSkgPT4gKHtcclxuICAgICAgbGFiZWw6IF90KGxhYmVsKSxcclxuICAgICAgY2xhc3NlczogY3VycmVudFRhYiA9PT0gaWQgPyAnaXMtYWN0aXZlJyA6ICcnLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBocmVmOiBgLyR7cm9vdH0vJHtyZXNvdXJjZUlkfS8ke3NsdWd9LyR7aWR9YFxyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==