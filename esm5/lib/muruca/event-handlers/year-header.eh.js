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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1oZWFkZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL3llYXItaGVhZGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBb0Msa0NBQVk7SUFBaEQ7O0lBWUEsQ0FBQztJQVhRLCtCQUFNLEdBQWI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ2pDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssc0JBQXNCO29CQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM3QixNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQVpELENBQW9DLFlBQVksR0FZL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNclllYXJIZWFkZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLXllYXItaGVhZGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xvc2VldmVudCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=