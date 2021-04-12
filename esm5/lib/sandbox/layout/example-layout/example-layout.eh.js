import { __extends } from "tslib";
/* eslint-disable */
import { EventHandler } from '@n7-frontend/core';
var SbExampleLayoutEH = /** @class */ (function (_super) {
    __extends(SbExampleLayoutEH, _super);
    function SbExampleLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SbExampleLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'sb-example-layout.init':
                    console.log('layout-inner', type, payload);
                    _this.emitOuter('init', payload);
                    _this.dataSource.onInit();
                    break;
                default:
                    console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'sb-dummy.click':
                    console.log('layout-outer', type, payload);
                    break;
                default:
                    console.warn('unhandled event of type', type);
                    break;
            }
        });
    };
    return SbExampleLayoutEH;
}(EventHandler));
export { SbExampleLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvc2FuZGJveC9sYXlvdXQvZXhhbXBsZS1sYXlvdXQvZXhhbXBsZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBdUMscUNBQVk7SUFBbkQ7O0lBMEJBLENBQUM7SUF6QlEsa0NBQU0sR0FBYjtRQUFBLGlCQXdCQztRQXZCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHdCQUF3QjtvQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUMzQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDekIsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM5QyxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssZ0JBQWdCO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDOUMsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBMUJELENBQXVDLFlBQVksR0EwQmxEIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNiRXhhbXBsZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdzYi1leGFtcGxlLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdsYXlvdXQtaW5uZXInLCB0eXBlLCBwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdpbml0JywgcGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc2ItZHVtbXkuY2xpY2snOlxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2xheW91dC1vdXRlcicsIHR5cGUsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19