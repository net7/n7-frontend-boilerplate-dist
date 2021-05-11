import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var FacetHeaderEH = /** @class */ (function (_super) {
    __extends(FacetHeaderEH, _super);
    function FacetHeaderEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacetHeaderEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type;
            switch (type) {
                case _this.dataSource.id + ".click":
                    _this.dataSource.toggle();
                    _this.emitOuter('change', {
                        isOpen: _this.dataSource.isOpen(),
                        id: _this.dataSource.id,
                        value: _this.dataSource.value
                    });
                    break;
                default:
                    break;
            }
        });
    };
    return FacetHeaderEH;
}(EventHandler));
export { FacetHeaderEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtaGVhZGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBbUMsaUNBQVk7SUFBL0M7O0lBaUJBLENBQUM7SUFoQlEsOEJBQU0sR0FBYjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFRO2dCQUFOLGNBQUk7WUFDakMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBUSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBUTtvQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDekIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3ZCLE1BQU0sRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTt3QkFDaEMsRUFBRSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDdEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztxQkFDN0IsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBakJELENBQW1DLFlBQVksR0FpQjlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRIZWFkZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jbGlja2A6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZSgpO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBpc09wZW46IHRoaXMuZGF0YVNvdXJjZS5pc09wZW4oKSxcbiAgICAgICAgICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuaWQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5kYXRhU291cmNlLnZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==