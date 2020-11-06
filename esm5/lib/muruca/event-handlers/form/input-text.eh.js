import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrInputTextEH = /** @class */ (function (_super) {
    __extends(MrInputTextEH, _super);
    function MrInputTextEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrInputTextEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case _this.dataSource.id + ".change": {
                    var value = payload.value;
                    // set new value
                    _this.dataSource.setState({ value: value });
                    // emit changed signal
                    _this.changed$.next({
                        id: _this.dataSource.id,
                        state: _this.dataSource.getState()
                    });
                    break;
                }
                default:
                    break;
            }
        });
    };
    return MrInputTextEH;
}(EventHandler));
export { MrInputTextEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS9pbnB1dC10ZXh0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLakQ7SUFBbUMsaUNBQVk7SUFBL0M7O0lBd0JBLENBQUM7SUFuQlEsOEJBQU0sR0FBYjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxZQUFTLENBQUMsQ0FBQztvQkFDM0IsSUFBQSxxQkFBSyxDQUFhO29CQUMxQixnQkFBZ0I7b0JBQ2hCLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO29CQUNwQyxzQkFBc0I7b0JBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNqQixFQUFFLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUN0QixLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7cUJBQ2xDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUFtQyxZQUFZLEdBd0I5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1ySW5wdXRUZXh0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZm9ybS9pbnB1dC10ZXh0LmRzJztcbmltcG9ydCB7IE1ySW5wdXRFdmVudEhhbmRsZXIsIE1yQ2hhbmdlZFBhcmFtcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJJbnB1dFRleHRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIE1ySW5wdXRFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgY2hhbmdlZCQ6IFN1YmplY3Q8TXJDaGFuZ2VkUGFyYW1zPjtcblxuICBwdWJsaWMgZGF0YVNvdXJjZTogTXJJbnB1dFRleHREUztcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0uY2hhbmdlYDoge1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICAgICAgICAgIC8vIGVtaXQgY2hhbmdlZCBzaWduYWxcbiAgICAgICAgICB0aGlzLmNoYW5nZWQkLm5leHQoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5pZCxcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0U3RhdGUoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==