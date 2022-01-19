import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var FacetLinkEH = /** @class */ (function (_super) {
    __extends(FacetLinkEH, _super);
    function FacetLinkEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacetLinkEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case _this.dataSource.id + ".change":
                    if (payload) {
                        _this.dataSource.toggleValue(payload);
                        _this.emitOuter('change', {
                            value: _this.dataSource.getValue(),
                            id: _this.dataSource.id
                        });
                    }
                    break;
                default:
                    break;
            }
        });
    };
    return FacetLinkEH;
}(EventHandler));
export { FacetLinkEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWxpbmsuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRDtJQUFpQywrQkFBWTtJQUE3Qzs7SUFvQkEsQ0FBQztJQWpCUSw0QkFBTSxHQUFiO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBUSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsWUFBUztvQkFDakMsSUFBSSxPQUFPLEVBQUU7d0JBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFOzRCQUN2QixLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ2pDLEVBQUUsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7eUJBQ3ZCLENBQUMsQ0FBQztxQkFDSjtvQkFDRCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUFpQyxZQUFZLEdBb0I1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgRmFjZXRMaW5rRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWxpbmsuZHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0TGlua0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBkYXRhU291cmNlOiBGYWNldExpbmtEU1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0uY2hhbmdlYDpcclxuICAgICAgICAgIGlmIChwYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVWYWx1ZShwYXlsb2FkKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5kYXRhU291cmNlLmdldFZhbHVlKCksXHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5pZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==