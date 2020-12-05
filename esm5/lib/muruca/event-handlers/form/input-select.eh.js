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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mb3JtL2lucHV0LXNlbGVjdC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS2pEO0lBQXFDLG1DQUFZO0lBQWpEOztJQXdCQSxDQUFDO0lBbkJRLGdDQUFNLEdBQWI7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBUSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsWUFBUyxDQUFDLENBQUM7b0JBQzNCLElBQUEscUJBQUssQ0FBYTtvQkFDMUIsZ0JBQWdCO29CQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztvQkFDcEMsc0JBQXNCO29CQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDakIsRUFBRSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDdEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO3FCQUNsQyxDQUFDLENBQUM7b0JBQ0gsTUFBTTtpQkFDUDtnQkFDRDtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBcUMsWUFBWSxHQXdCaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTXJJbnB1dFNlbGVjdERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtc2VsZWN0LmRzJztcclxuaW1wb3J0IHsgTXJJbnB1dEV2ZW50SGFuZGxlciwgTXJDaGFuZ2VkUGFyYW1zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJbnB1dFNlbGVjdEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgTXJJbnB1dEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGNoYW5nZWQkOiBTdWJqZWN0PE1yQ2hhbmdlZFBhcmFtcz47XHJcblxyXG4gIHB1YmxpYyBkYXRhU291cmNlOiBNcklucHV0U2VsZWN0RFM7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jaGFuZ2VgOiB7XHJcbiAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFN0YXRlKHsgdmFsdWUgfSk7XHJcbiAgICAgICAgICAvLyBlbWl0IGNoYW5nZWQgc2lnbmFsXHJcbiAgICAgICAgICB0aGlzLmNoYW5nZWQkLm5leHQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5kYXRhU291cmNlLmdldFN0YXRlKClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==