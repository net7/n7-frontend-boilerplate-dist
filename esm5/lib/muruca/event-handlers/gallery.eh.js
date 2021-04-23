import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrGalleryEH = /** @class */ (function (_super) {
    __extends(MrGalleryEH, _super);
    function MrGalleryEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrGalleryEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case _this.dataSource.id + ".click":
                    _this.dataSource.setSelected(payload);
                    break;
                case _this.dataSource.id + ".close":
                    _this.dataSource.removeSelected();
                    break;
                default:
                    break;
            }
        });
    };
    return MrGalleryEH;
}(EventHandler));
export { MrGalleryEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZ2FsbGVyeS5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pEO0lBQWlDLCtCQUFZO0lBQTdDOztJQWlCQSxDQUFDO0lBZFEsNEJBQU0sR0FBYjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBUSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBUTtvQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLE1BQU07Z0JBQ1IsS0FBUSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBUTtvQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDakMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBaUMsWUFBWSxHQWlCNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IE1yR2FsbGVyeURTIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckdhbGxlcnlFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGRhdGFTb3VyY2U6IE1yR2FsbGVyeURTO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIGAke3RoaXMuZGF0YVNvdXJjZS5pZH0uY2xpY2tgOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFNlbGVjdGVkKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNsb3NlYDpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW1vdmVTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19