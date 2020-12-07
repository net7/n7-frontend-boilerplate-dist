import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var FacetCheckboxEH = /** @class */ (function (_super) {
    __extends(FacetCheckboxEH, _super);
    function FacetCheckboxEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacetCheckboxEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case _this.dataSource.id + ".change":
                    _this.dataSource.toggleValue(payload);
                    _this.emitOuter('change', {
                        value: _this.dataSource.getValue(),
                        id: _this.dataSource.id
                    });
                    break;
                default:
                    break;
            }
        });
    };
    return FacetCheckboxEH;
}(EventHandler));
export { FacetCheckboxEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2tib3guZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1jaGVja2JveC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXFDLG1DQUFZO0lBQWpEOztJQWdCQSxDQUFDO0lBZlEsZ0NBQU0sR0FBYjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBUSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsWUFBUztvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO3dCQUN2QixLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ2pDLEVBQUUsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7cUJBQ3ZCLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUFxQyxZQUFZLEdBZ0JoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldENoZWNrYm94RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jaGFuZ2VgOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVZhbHVlKHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuZGF0YVNvdXJjZS5nZXRWYWx1ZSgpLFxyXG4gICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==