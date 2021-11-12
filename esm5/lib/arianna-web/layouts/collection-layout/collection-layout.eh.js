import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwCollectionLayoutEH = /** @class */ (function (_super) {
    __extends(AwCollectionLayoutEH, _super);
    function AwCollectionLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwCollectionLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-collection-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.route = payload.route;
                    _this.listenRoute();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    };
    AwCollectionLayoutEH.prototype.listenRoute = function () {
        var _this = this;
        // get collection ID from the url
        this.route.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.dataSource.collectionID = params.get('id');
                _this.dataSource.onCollectionID();
            }
        });
    };
    return AwCollectionLayoutEH;
}(EventHandler));
export { AwCollectionLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQTBDLHdDQUFZO0lBQXREOztJQTRCQSxDQUFDO0lBekJRLHFDQUFNLEdBQWI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssMkJBQTJCO29CQUM5QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUFBLGlCQVFDO1FBUEMsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDbkMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNwQixLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBNUJELENBQTBDLFlBQVksR0E0QnJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdDb2xsZWN0aW9uTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1jb2xsZWN0aW9uLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuUm91dGUoKSB7XHJcbiAgICAvLyBnZXQgY29sbGVjdGlvbiBJRCBmcm9tIHRoZSB1cmxcclxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgaWYgKHBhcmFtcy5nZXQoJ2lkJykpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29sbGVjdGlvbklEID0gcGFyYW1zLmdldCgnaWQnKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Db2xsZWN0aW9uSUQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==