import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwSchedaSidebarEH = /** @class */ (function (_super) {
    __extends(AwSchedaSidebarEH, _super);
    function AwSchedaSidebarEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSchedaSidebarEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type === 'aw-sidebar-header.click') {
                _this.dataSource.toggleSidebar();
                _this.emitOuter(type, payload);
            }
        });
    };
    return AwSchedaSidebarEH;
}(EventHandler));
export { AwSchedaSidebarEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL3NjaGVkYS1icmVhZGNydW1icy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXVDLHFDQUFZO0lBQW5EOztJQVNBLENBQUM7SUFSUSxrQ0FBTSxHQUFiO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxJQUFJLElBQUksS0FBSyx5QkFBeUIsRUFBRTtnQkFDdEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFURCxDQUF1QyxZQUFZLEdBU2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhU2lkZWJhckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ2F3LXNpZGViYXItaGVhZGVyLmNsaWNrJykge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVTaWRlYmFyKCk7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIodHlwZSwgcGF5bG9hZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=