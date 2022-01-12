import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var DvCardExampleLayoutEH = /** @class */ (function (_super) {
    __extends(DvCardExampleLayoutEH, _super);
    function DvCardExampleLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DvCardExampleLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            console.log('innerEvents$----->', type, payload);
            switch (type) {
                case 'dv-card-example-layout.init':
                    _this.dataSource.onInit(payload);
                    break;
                case 'dv-card-example-layout.destroy':
                    _this.dataSource.onDestroy();
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            console.log('outerEvents$----->', type, payload);
            // TODO
        });
    };
    return DvCardExampleLayoutEH;
}(EventHandler));
export { DvCardExampleLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1leGFtcGxlLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9sYXlvdXQvY2FyZC1leGFtcGxlLWxheW91dC9jYXJkLWV4YW1wbGUtbGF5b3V0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBMkMseUNBQVk7SUFBdkQ7O0lBcUJBLENBQUM7SUFwQlEsc0NBQU0sR0FBYjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDZCQUE2QjtvQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1IsS0FBSyxnQ0FBZ0M7b0JBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqRCxPQUFPO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBckJELENBQTJDLFlBQVksR0FxQnREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHZDYXJkRXhhbXBsZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnaW5uZXJFdmVudHMkLS0tLS0+JywgdHlwZSwgcGF5bG9hZCk7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZHYtY2FyZC1leGFtcGxlLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkdi1jYXJkLWV4YW1wbGUtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkRlc3Ryb3koKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdvdXRlckV2ZW50cyQtLS0tLT4nLCB0eXBlLCBwYXlsb2FkKTtcbiAgICAgIC8vIFRPRE9cbiAgICB9KTtcbiAgfVxufVxuIl19