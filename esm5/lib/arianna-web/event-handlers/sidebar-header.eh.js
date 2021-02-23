import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwSidebarHeaderEH = /** @class */ (function (_super) {
    __extends(AwSidebarHeaderEH, _super);
    function AwSidebarHeaderEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSidebarHeaderEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type === 'aw-sidebar-header.click') {
                _this.dataSource.toggleSidebar();
                _this.emitOuter('click', payload);
            }
        });
        /* this.outerEvents$.subscribe(event => {
    
        }); */
    };
    return AwSidebarHeaderEH;
}(EventHandler));
export { AwSidebarHeaderEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1oZWFkZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvc2lkZWJhci1oZWFkZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUF1QyxxQ0FBWTtJQUFuRDs7SUFhQSxDQUFDO0lBWlEsa0NBQU0sR0FBYjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsSUFBSSxJQUFJLEtBQUsseUJBQXlCLEVBQUU7Z0JBQ3RDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSDs7Y0FFTTtJQUNSLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFiRCxDQUF1QyxZQUFZLEdBYWxEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2lkZWJhckhlYWRlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ2F3LXNpZGViYXItaGVhZGVyLmNsaWNrJykge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVTaWRlYmFyKCk7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XHJcblxyXG4gICAgfSk7ICovXHJcbiAgfVxyXG59XHJcbiJdfQ==