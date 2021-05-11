import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwMapEH = /** @class */ (function (_super) {
    __extends(AwMapEH, _super);
    function AwMapEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwMapEH.prototype.listen = function () {
        var _this = this;
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type;
            switch (type) {
                case 'aw-map-layout.init':
                    _this.listenToMarkers();
                    break;
                default:
                    break;
            }
        });
    };
    AwMapEH.prototype.listenToMarkers = function () {
        var _this = this;
        this.dataSource.markerOpen$.subscribe(function (item) {
            _this.emitOuter('markeropen', item);
        });
        this.dataSource.markerClose$.subscribe(function () {
            _this.emitOuter('markerclose');
        });
    };
    return AwMapEH;
}(EventHandler));
export { AwMapEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL21hcC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQTZCLDJCQUFZO0lBQXpDOztJQXVCQSxDQUFDO0lBdEJRLHdCQUFNLEdBQWI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ2pDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssb0JBQW9CO29CQUN2QixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8saUNBQWUsR0FBdkI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDekMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQXZCRCxDQUE2QixZQUFZLEdBdUJ4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd01hcEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1tYXAtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub01hcmtlcnMoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Ub01hcmtlcnMoKSB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UubWFya2VyT3BlbiQuc3Vic2NyaWJlKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdtYXJrZXJvcGVuJywgaXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UubWFya2VyQ2xvc2UkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdtYXJrZXJjbG9zZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==