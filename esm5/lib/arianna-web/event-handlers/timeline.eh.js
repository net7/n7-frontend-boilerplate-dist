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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvdGltZWxpbmUuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkM7SUFBa0MsZ0NBQVk7SUFBOUM7O0lBb0NBLENBQUM7SUFuQ1EsNkJBQU0sR0FBYjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFRO2dCQUFOLGNBQUk7WUFDakMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUN4QixNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHVDQUFnQixHQUF4QjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWU7YUFDNUIsSUFBSSxDQUNILEtBQUssRUFBRSxDQUNSO2FBQ0EsU0FBUyxDQUFDO1lBQ0gsSUFBQSxxQkFBdUMsRUFBckMsc0JBQVEsRUFBRSxvQkFBMkIsQ0FBQztZQUM5QyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFDMUIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU07d0JBQUosVUFBRTtvQkFBTyxPQUFBLElBQUksS0FBSyxFQUFFO2dCQUFYLENBQVcsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDbkIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSztxQkFDMUIsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO3dCQUN0QixFQUFFLEVBQUUsSUFBSTtxQkFDVCxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXBDRCxDQUFrQyxZQUFZLEdBb0M3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdUaW1lbGluZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctdGltZWxpbmUtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMubGlzdGVuVG9UaW1lbGluZSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlblRvVGltZWxpbmUoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnRpbWVsaW5lTG9hZGVkJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpcnN0KClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRpbWVsaW5lLCBkYXRhU2V0IH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICAgIHRpbWVsaW5lLm9uKCdjbGljaycsICh7IGl0ZW0gfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNsaWNrZWQgPSBkYXRhU2V0LmZpbmQoKHsgaWQgfSkgPT4gaXRlbSA9PT0gaWQpO1xuICAgICAgICAgIGlmIChjbGlja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCB7XG4gICAgICAgICAgICAgIGlkOiBjbGlja2VkLml0ZW0uaWQsXG4gICAgICAgICAgICAgIGxhYmVsOiBjbGlja2VkLml0ZW0ubGFiZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCB7XG4gICAgICAgICAgICAgIGlkOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==