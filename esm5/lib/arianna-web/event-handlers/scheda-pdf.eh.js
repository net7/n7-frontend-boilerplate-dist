import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwSchedaPdfEH = /** @class */ (function (_super) {
    __extends(AwSchedaPdfEH, _super);
    function AwSchedaPdfEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSchedaPdfEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type === 'aw-scheda-pdf.click') {
                _this.dataSource.onChange(payload);
            }
            else if (type === 'aw-scheda-pdf.loaded') {
                _this.dataSource.onLoaded();
            }
        });
    };
    return AwSchedaPdfEH;
}(EventHandler));
export { AwSchedaPdfEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLXBkZi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9zY2hlZGEtcGRmLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHakQ7SUFBbUMsaUNBQVk7SUFBL0M7O0lBWUEsQ0FBQztJQVRRLDhCQUFNLEdBQWI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLElBQUksSUFBSSxLQUFLLHFCQUFxQixFQUFFO2dCQUNsQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztpQkFBTSxJQUFJLElBQUksS0FBSyxzQkFBc0IsRUFBRTtnQkFDMUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQVpELENBQW1DLFlBQVksR0FZOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEF3U2NoZWRhUGRmRFMgfSBmcm9tICcuLi9kYXRhLXNvdXJjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhUGRmRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBkYXRhU291cmNlOiBBd1NjaGVkYVBkZkRTO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ2F3LXNjaGVkYS1wZGYuY2xpY2snKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uQ2hhbmdlKHBheWxvYWQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhdy1zY2hlZGEtcGRmLmxvYWRlZCcpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Mb2FkZWQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==