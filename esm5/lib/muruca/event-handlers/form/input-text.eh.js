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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZm9ybS9pbnB1dC10ZXh0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLakQ7SUFBbUMsaUNBQVk7SUFBL0M7O0lBd0JBLENBQUM7SUFuQlEsOEJBQU0sR0FBYjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxZQUFTLENBQUMsQ0FBQztvQkFDM0IsSUFBQSxxQkFBSyxDQUFhO29CQUMxQixnQkFBZ0I7b0JBQ2hCLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO29CQUNwQyxzQkFBc0I7b0JBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNqQixFQUFFLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUN0QixLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7cUJBQ2xDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUFtQyxZQUFZLEdBd0I5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNcklucHV0VGV4dERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtdGV4dC5kcyc7XHJcbmltcG9ydCB7IE1ySW5wdXRFdmVudEhhbmRsZXIsIE1yQ2hhbmdlZFBhcmFtcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW5wdXRUZXh0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBNcklucHV0RXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgY2hhbmdlZCQ6IFN1YmplY3Q8TXJDaGFuZ2VkUGFyYW1zPjtcclxuXHJcbiAgcHVibGljIGRhdGFTb3VyY2U6IE1ySW5wdXRUZXh0RFM7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jaGFuZ2VgOiB7XHJcbiAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFN0YXRlKHsgdmFsdWUgfSk7XHJcbiAgICAgICAgICAvLyBlbWl0IGNoYW5nZWQgc2lnbmFsXHJcbiAgICAgICAgICB0aGlzLmNoYW5nZWQkLm5leHQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5kYXRhU291cmNlLmdldFN0YXRlKClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==