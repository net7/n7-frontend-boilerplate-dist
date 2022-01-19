import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrYearHeaderEH = /** @class */ (function (_super) {
    __extends(MrYearHeaderEH, _super);
    function MrYearHeaderEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrYearHeaderEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type;
            switch (type) {
                case 'mr-year-header.click':
                    _this.emitOuter('closeevent');
                    break;
                default:
                    break;
            }
        });
    };
    return MrYearHeaderEH;
}(EventHandler));
export { MrYearHeaderEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1oZWFkZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL3llYXItaGVhZGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBb0Msa0NBQVk7SUFBaEQ7O0lBWUEsQ0FBQztJQVhRLCtCQUFNLEdBQWI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ2pDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssc0JBQXNCO29CQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM3QixNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQVpELENBQW9DLFlBQVksR0FZL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJZZWFySGVhZGVyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLXllYXItaGVhZGVyLmNsaWNrJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbG9zZWV2ZW50Jyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=