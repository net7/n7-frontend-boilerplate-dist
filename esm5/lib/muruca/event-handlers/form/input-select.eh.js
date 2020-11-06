import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrInputSelectEH = /** @class */ (function (_super) {
    __extends(MrInputSelectEH, _super);
    function MrInputSelectEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrInputSelectEH.prototype.listen = function () {
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
    return MrInputSelectEH;
}(EventHandler));
export { MrInputSelectEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mb3JtL2lucHV0LXNlbGVjdC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS2pEO0lBQXFDLG1DQUFZO0lBQWpEOztJQXdCQSxDQUFDO0lBbkJRLGdDQUFNLEdBQWI7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBUSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsWUFBUyxDQUFDLENBQUM7b0JBQzNCLElBQUEscUJBQUssQ0FBYTtvQkFDMUIsZ0JBQWdCO29CQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztvQkFDcEMsc0JBQXNCO29CQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDakIsRUFBRSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDdEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO3FCQUNsQyxDQUFDLENBQUM7b0JBQ0gsTUFBTTtpQkFDUDtnQkFDRDtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBcUMsWUFBWSxHQXdCaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNcklucHV0U2VsZWN0RFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZm9ybS9pbnB1dC1zZWxlY3QuZHMnO1xuaW1wb3J0IHsgTXJJbnB1dEV2ZW50SGFuZGxlciwgTXJDaGFuZ2VkUGFyYW1zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBNcklucHV0U2VsZWN0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBNcklucHV0RXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGNoYW5nZWQkOiBTdWJqZWN0PE1yQ2hhbmdlZFBhcmFtcz47XG5cbiAgcHVibGljIGRhdGFTb3VyY2U6IE1ySW5wdXRTZWxlY3REUztcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0uY2hhbmdlYDoge1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICAgICAgICAgIC8vIGVtaXQgY2hhbmdlZCBzaWduYWxcbiAgICAgICAgICB0aGlzLmNoYW5nZWQkLm5leHQoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5pZCxcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0U3RhdGUoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==