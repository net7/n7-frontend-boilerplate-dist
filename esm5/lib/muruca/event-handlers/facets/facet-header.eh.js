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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtaGVhZGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBbUMsaUNBQVk7SUFBL0M7O0lBaUJBLENBQUM7SUFoQlEsOEJBQU0sR0FBYjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFRO2dCQUFOLGNBQUk7WUFDakMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBUSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBUTtvQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDekIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3ZCLE1BQU0sRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTt3QkFDaEMsRUFBRSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDdEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztxQkFDN0IsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBakJELENBQW1DLFlBQVksR0FpQjlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0SGVhZGVyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jbGlja2A6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlKCk7XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywge1xyXG4gICAgICAgICAgICBpc09wZW46IHRoaXMuZGF0YVNvdXJjZS5pc09wZW4oKSxcclxuICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5pZCxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuZGF0YVNvdXJjZS52YWx1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=