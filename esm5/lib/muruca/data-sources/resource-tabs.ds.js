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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtdGFicy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3Jlc291cmNlLXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBc0Msb0NBQVU7SUFBaEQ7O0lBY0EsQ0FBQztJQWJXLG9DQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDckIsSUFBQSxpQkFFVSxFQURkLDBCQUFVLEVBQUUsY0FBSSxFQUFFLGNBQUksRUFBRSxrQkFDVixDQUFDO1FBRWpCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWE7Z0JBQVgsVUFBRSxFQUFFLGdCQUFLO1lBQU8sT0FBQSxDQUFDO2dCQUNsQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDaEIsT0FBTyxFQUFFLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxNQUFJLElBQUksU0FBSSxVQUFVLFNBQUksSUFBSSxTQUFJLEVBQUk7aUJBQzdDO2FBQ0YsQ0FBQztRQU5pQyxDQU1qQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBc0MsVUFBVSxHQWMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZVRhYnNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudFRhYiwgcm9vdCwgc2x1ZywgaWQ6IHJlc291cmNlSWRcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgcmV0dXJuIGRhdGEubWFwKCh7IGlkLCBsYWJlbCB9KSA9PiAoe1xuICAgICAgbGFiZWw6IF90KGxhYmVsKSxcbiAgICAgIGNsYXNzZXM6IGN1cnJlbnRUYWIgPT09IGlkID8gJ2lzLWFjdGl2ZScgOiAnJyxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBocmVmOiBgLyR7cm9vdH0vJHtyZXNvdXJjZUlkfS8ke3NsdWd9LyR7aWR9YFxuICAgICAgfVxuICAgIH0pKTtcbiAgfVxufVxuIl19