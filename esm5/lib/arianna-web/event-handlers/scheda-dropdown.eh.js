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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL3NjaGVkYS1kcm9wZG93bi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXdDLHNDQUFZO0lBQXBEOztJQWFBLENBQUM7SUFaUSxtQ0FBTSxHQUFiO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxJQUFJLElBQUksS0FBSywwQkFBMEIsRUFBRTtnQkFDdkMsSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFO29CQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFiRCxDQUF3QyxZQUFZLEdBYW5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFEcm9wZG93bkVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBpZiAodHlwZSA9PT0gJ2F3LXNjaGVkYS1kcm9wZG93bi5jbGljaycpIHtcbiAgICAgICAgaWYgKHBheWxvYWQgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkNoYW5nZShwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=