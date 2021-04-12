import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var SubnavEH = /** @class */ (function (_super) {
    __extends(SubnavEH, _super);
    function SubnavEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubnavEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'subnav.click':
                    // navigate control
                    if (payload.source === 'navigate') {
                        _this.emitGlobal('navigate', payload);
                    }
                    // global signal
                    _this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        });
    };
    return SubnavEH;
}(EventHandler));
export { SubnavEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibmF2LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9ldmVudC1oYW5kbGVycy9zdWJuYXYuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUE4Qiw0QkFBWTtJQUExQzs7SUFtQkEsQ0FBQztJQWxCUSx5QkFBTSxHQUFiO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssY0FBYztvQkFDakIsbUJBQW1CO29CQUNuQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO3dCQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDdEM7b0JBRUQsZ0JBQWdCO29CQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDL0IsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQW5CRCxDQUE4QixZQUFZLEdBbUJ6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJuYXZFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc3VibmF2LmNsaWNrJzpcclxuICAgICAgICAgIC8vIG5hdmlnYXRlIGNvbnRyb2xcclxuICAgICAgICAgIGlmIChwYXlsb2FkLnNvdXJjZSA9PT0gJ25hdmlnYXRlJykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gZ2xvYmFsIHNpZ25hbFxyXG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKHR5cGUsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==