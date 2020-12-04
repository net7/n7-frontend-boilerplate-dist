import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrCollectionEH = /** @class */ (function (_super) {
    __extends(MrCollectionEH, _super);
    function MrCollectionEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrCollectionEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case _this.dataSource.id + ".click": {
                    var action = payload.action;
                    if (action === 'resource-modal') {
                        _this.emitOuter('openresourcemodal', payload);
                    }
                    break;
                }
                default:
                    break;
            }
        });
    };
    return MrCollectionEH;
}(EventHandler));
export { MrCollectionEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvY29sbGVjdGlvbi5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQW9DLGtDQUFZO0lBQWhEOztJQWdCQSxDQUFDO0lBZlEsK0JBQU0sR0FBYjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBUSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBUSxDQUFDLENBQUM7b0JBQzFCLElBQUEsdUJBQU0sQ0FBYTtvQkFDM0IsSUFBSSxNQUFNLEtBQUssZ0JBQWdCLEVBQUU7d0JBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQzlDO29CQUNELE1BQU07aUJBQ1A7Z0JBQ0Q7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBaEJELENBQW9DLFlBQVksR0FnQi9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJDb2xsZWN0aW9uRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0uY2xpY2tgOiB7XG4gICAgICAgICAgY29uc3QgeyBhY3Rpb24gfSA9IHBheWxvYWQ7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3Jlc291cmNlLW1vZGFsJykge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ29wZW5yZXNvdXJjZW1vZGFsJywgcGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==