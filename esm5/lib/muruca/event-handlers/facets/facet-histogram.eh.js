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
                case _this.dataSource.id + ".loaded":
                    _this.dataSource.loadTooltips();
                    break;
                default:
                    break;
            }
        });
    };
    return FacetHistogramEH;
}(EventHandler));
export { FacetHistogramEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGlzdG9ncmFtLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtaGlzdG9ncmFtLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHakQ7SUFBc0Msb0NBQVk7SUFBbEQ7O0lBdUJBLENBQUM7SUFwQlEsaUNBQU0sR0FBYjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxtQkFBZ0I7b0JBQ3hDLElBQUksT0FBTyxFQUFFO3dCQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7NEJBQ3ZCLEtBQUssRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDakMsRUFBRSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTt5QkFDdkIsQ0FBQyxDQUFDO3FCQUNKO29CQUNELE1BQU07Z0JBQ1IsS0FBUSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsWUFBUztvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDL0IsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUF2QkQsQ0FBc0MsWUFBWSxHQXVCakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEZhY2V0SGlzdG9ncmFtRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhpc3RvZ3JhbS5kcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRIaXN0b2dyYW1FSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgZGF0YVNvdXJjZTogRmFjZXRIaXN0b2dyYW1EU1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0ucmFuZ2VzZWxlY3RlZGA6XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0VmFsdWUocGF5bG9hZC5qb2luKCctJykpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0VmFsdWUoKSxcclxuICAgICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmxvYWRlZGA6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZFRvb2x0aXBzKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=