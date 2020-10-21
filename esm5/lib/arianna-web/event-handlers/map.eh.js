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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL21hcC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQTZCLDJCQUFZO0lBQXpDOztJQXVCQSxDQUFDO0lBdEJRLHdCQUFNLEdBQWI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ2pDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssb0JBQW9CO29CQUN2QixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8saUNBQWUsR0FBdkI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDekMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQXZCRCxDQUE2QixZQUFZLEdBdUJ4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3TWFwRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1tYXAtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMubGlzdGVuVG9NYXJrZXJzKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuVG9NYXJrZXJzKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5tYXJrZXJPcGVuJC5zdWJzY3JpYmUoKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdtYXJrZXJvcGVuJywgaXRlbSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UubWFya2VyQ2xvc2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmVtaXRPdXRlcignbWFya2VyY2xvc2UnKTtcbiAgICB9KTtcbiAgfVxufVxuIl19