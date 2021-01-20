import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { first } from 'rxjs/operators';
var AwTimelineEH = /** @class */ (function (_super) {
    __extends(AwTimelineEH, _super);
    function AwTimelineEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwTimelineEH.prototype.listen = function () {
        var _this = this;
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type;
            switch (type) {
                case 'aw-timeline-layout.init':
                    _this.listenToTimeline();
                    break;
                case 'aw-timeline-layout.zoomout':
                    _this.dataSource.timeline.zoomOut(0.7);
                    break;
                case 'aw-timeline-layout.zoomin':
                    _this.dataSource.timeline.zoomIn(0.7);
                    break;
                default:
                    break;
            }
        });
    };
    AwTimelineEH.prototype.listenToTimeline = function () {
        var _this = this;
        this.dataSource.timelineLoaded$
            .pipe(first())
            .subscribe(function () {
            var _a = _this.dataSource, timeline = _a.timeline, dataSet = _a.dataSet;
            timeline.on('click', function (_a) {
                var item = _a.item;
                var clicked = dataSet.find(function (_a) {
                    var id = _a.id;
                    return item === id;
                });
                if (clicked) {
                    _this.emitOuter('click', {
                        id: clicked.item.id,
                        label: clicked.item.label
                    });
                }
                else {
                    _this.emitOuter('click', {
                        id: null
                    });
                }
            });
        });
    };
    return AwTimelineEH;
}(EventHandler));
export { AwTimelineEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvdGltZWxpbmUuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkM7SUFBa0MsZ0NBQVk7SUFBOUM7O0lBNENBLENBQUM7SUEzQ1EsNkJBQU0sR0FBYjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUNqQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ3hCLE1BQU07Z0JBRVIsS0FBSyw0QkFBNEI7b0JBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFFUixLQUFLLDJCQUEyQjtvQkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHVDQUFnQixHQUF4QjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWU7YUFDNUIsSUFBSSxDQUNILEtBQUssRUFBRSxDQUNSO2FBQ0EsU0FBUyxDQUFDO1lBQ0gsSUFBQSxxQkFBdUMsRUFBckMsc0JBQVEsRUFBRSxvQkFBMkIsQ0FBQztZQUM5QyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFDMUIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU07d0JBQUosVUFBRTtvQkFBTyxPQUFBLElBQUksS0FBSyxFQUFFO2dCQUFYLENBQVcsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDbkIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSztxQkFDMUIsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO3dCQUN0QixFQUFFLEVBQUUsSUFBSTtxQkFDVCxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTVDRCxDQUFrQyxZQUFZLEdBNEM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdUaW1lbGluZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctdGltZWxpbmUtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMubGlzdGVuVG9UaW1lbGluZSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXRpbWVsaW5lLWxheW91dC56b29tb3V0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGltZWxpbmUuem9vbU91dCgwLjcpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2F3LXRpbWVsaW5lLWxheW91dC56b29taW4nOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aW1lbGluZS56b29tSW4oMC43KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Ub1RpbWVsaW5lKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS50aW1lbGluZUxvYWRlZCRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaXJzdCgpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0aW1lbGluZSwgZGF0YVNldCB9ID0gdGhpcy5kYXRhU291cmNlO1xuICAgICAgICB0aW1lbGluZS5vbignY2xpY2snLCAoeyBpdGVtIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBjbGlja2VkID0gZGF0YVNldC5maW5kKCh7IGlkIH0pID0+IGl0ZW0gPT09IGlkKTtcbiAgICAgICAgICBpZiAoY2xpY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywge1xuICAgICAgICAgICAgICBpZDogY2xpY2tlZC5pdGVtLmlkLFxuICAgICAgICAgICAgICBsYWJlbDogY2xpY2tlZC5pdGVtLmxhYmVsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywge1xuICAgICAgICAgICAgICBpZDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=