import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var FacetHistogramEH = /** @class */ (function (_super) {
    __extends(FacetHistogramEH, _super);
    function FacetHistogramEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacetHistogramEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case _this.dataSource.id + ".rangeselected":
                    if (payload) {
                        _this.dataSource.setValue(payload.join('-'));
                        _this.emitOuter('change', {
                            value: _this.dataSource.getValue(),
                            id: _this.dataSource.id
                        });
                    }
                    break;
                default:
                    break;
            }
        });
    };
    return FacetHistogramEH;
}(EventHandler));
export { FacetHistogramEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGlzdG9ncmFtLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtaGlzdG9ncmFtLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHakQ7SUFBc0Msb0NBQVk7SUFBbEQ7O0lBb0JBLENBQUM7SUFqQlEsaUNBQU0sR0FBYjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQVEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLG1CQUFnQjtvQkFDeEMsSUFBSSxPQUFPLEVBQUU7d0JBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTs0QkFDdkIsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNqQyxFQUFFLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3lCQUN2QixDQUFDLENBQUM7cUJBQ0o7b0JBQ0QsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFwQkQsQ0FBc0MsWUFBWSxHQW9CakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBGYWNldEhpc3RvZ3JhbURTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1oaXN0b2dyYW0uZHMnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRIaXN0b2dyYW1FSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIGRhdGFTb3VyY2U6IEZhY2V0SGlzdG9ncmFtRFNcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0ucmFuZ2VzZWxlY3RlZGA6XG4gICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRWYWx1ZShwYXlsb2FkLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywge1xuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5kYXRhU291cmNlLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19