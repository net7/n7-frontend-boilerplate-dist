import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { first } from 'rxjs/operators';
var MrImageViewerEH = /** @class */ (function (_super) {
    __extends(MrImageViewerEH, _super);
    function MrImageViewerEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrImageViewerEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case _this.dataSource.id + ".click":
                    _this.emitOuter('click', payload);
                    break;
                case _this.dataSource.id + ".pagechange":
                    _this.emitOuter('pagechange', payload);
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-resource-layout.init':
                    _this.listenToViewer();
                    break;
                case 'mr-resource-layout.thumbclick':
                    if (payload.targetId === _this.dataSource.id) {
                        _this.dataSource.changePage(payload.thumbindex);
                    }
                    break;
                case 'mr-resource-layout.pagechange':
                    // Silent
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
    };
    MrImageViewerEH.prototype.listenToViewer = function () {
        var _this = this;
        this.dataSource.viewerLoaded$.pipe(first()).subscribe(function () {
            var viewer = _this.dataSource.viewer;
            viewer.addHandler('page', function (eventData) {
                _this.emitOuter('pagechange', eventData);
            });
        });
    };
    return MrImageViewerEH;
}(EventHandler));
export { MrImageViewerEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkM7SUFBcUMsbUNBQVk7SUFBakQ7O0lBa0RBLENBQUM7SUE3Q1EsZ0NBQU0sR0FBYjtRQUFBLGlCQWlDQztRQWhDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFRO29CQUNoQyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDakMsTUFBTTtnQkFDUixLQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxnQkFBYTtvQkFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRTt3QkFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUNoRDtvQkFDRCxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxTQUFTO29CQUNULE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ2hDLEtBQUssRUFBRSxDQUNSLENBQUMsU0FBUyxDQUFDO1lBQ0YsSUFBQSxnQ0FBTSxDQUFxQjtZQUNuQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFDLFNBQVM7Z0JBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbERELENBQXFDLFlBQVksR0FrRGhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTXJJbWFnZVZpZXdlckRTIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2VzL2ltYWdlLXZpZXdlci5kcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJbWFnZVZpZXdlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBsYXlvdXRJZDogc3RyaW5nO1xyXG5cclxuICBkYXRhU291cmNlOiBNckltYWdlVmlld2VyRFM7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jbGlja2A6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5wYWdlY2hhbmdlYDpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdwYWdlY2hhbmdlJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub1ZpZXdlcigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LnRodW1iY2xpY2snOlxyXG4gICAgICAgICAgaWYgKHBheWxvYWQudGFyZ2V0SWQgPT09IHRoaXMuZGF0YVNvdXJjZS5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2hhbmdlUGFnZShwYXlsb2FkLnRodW1iaW5kZXgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LnBhZ2VjaGFuZ2UnOlxyXG4gICAgICAgICAgLy8gU2lsZW50XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuVG9WaWV3ZXIoKSB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2Uudmlld2VyTG9hZGVkJC5waXBlKFxyXG4gICAgICBmaXJzdCgpXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdmlld2VyIH0gPSB0aGlzLmRhdGFTb3VyY2U7XHJcbiAgICAgIHZpZXdlci5hZGRIYW5kbGVyKCdwYWdlJywgKGV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdwYWdlY2hhbmdlJywgZXZlbnREYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19