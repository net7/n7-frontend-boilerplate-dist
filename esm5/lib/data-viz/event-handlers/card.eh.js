import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var CardEH = /** @class */ (function (_super) {
    __extends(CardEH, _super);
    function CardEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            // redirect signal
            _this.emitOuter(type.replace(_this.hostId + ".", ''), payload);
        });
    };
    return CardEH;
}(EventHandler));
export { CardEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9ldmVudC1oYW5kbGVycy9jYXJkLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBNEIsMEJBQVk7SUFBeEM7O0lBT0EsQ0FBQztJQU5RLHVCQUFNLEdBQWI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLGtCQUFrQjtZQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUksS0FBSSxDQUFDLE1BQU0sTUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBNEIsWUFBWSxHQU92QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENhcmRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgLy8gcmVkaXJlY3Qgc2lnbmFsXG4gICAgICB0aGlzLmVtaXRPdXRlcih0eXBlLnJlcGxhY2UoYCR7dGhpcy5ob3N0SWR9LmAsICcnKSwgcGF5bG9hZCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==