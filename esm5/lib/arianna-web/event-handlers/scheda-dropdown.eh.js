import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwSchedaDropdownEH = /** @class */ (function (_super) {
    __extends(AwSchedaDropdownEH, _super);
    function AwSchedaDropdownEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSchedaDropdownEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type === 'aw-scheda-dropdown.click') {
                if (payload === 'toggle') {
                    _this.dataSource.toggle();
                }
                else {
                    _this.dataSource.onChange(payload);
                    _this.emitOuter('click', payload);
                }
            }
        });
    };
    return AwSchedaDropdownEH;
}(EventHandler));
export { AwSchedaDropdownEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL3NjaGVkYS1kcm9wZG93bi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXdDLHNDQUFZO0lBQXBEOztJQWFBLENBQUM7SUFaUSxtQ0FBTSxHQUFiO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxJQUFJLElBQUksS0FBSywwQkFBMEIsRUFBRTtnQkFDdkMsSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFO29CQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFiRCxDQUF3QyxZQUFZLEdBYW5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhRHJvcGRvd25FSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgaWYgKHR5cGUgPT09ICdhdy1zY2hlZGEtZHJvcGRvd24uY2xpY2snKSB7XHJcbiAgICAgICAgaWYgKHBheWxvYWQgPT09ICd0b2dnbGUnKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkNoYW5nZShwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==