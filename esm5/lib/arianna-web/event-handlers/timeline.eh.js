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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvdGltZWxpbmUuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkM7SUFBa0MsZ0NBQVk7SUFBOUM7O0lBNENBLENBQUM7SUEzQ1EsNkJBQU0sR0FBYjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUNqQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ3hCLE1BQU07Z0JBRVIsS0FBSyw0QkFBNEI7b0JBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFFUixLQUFLLDJCQUEyQjtvQkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHVDQUFnQixHQUF4QjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWU7YUFDNUIsSUFBSSxDQUNILEtBQUssRUFBRSxDQUNSO2FBQ0EsU0FBUyxDQUFDO1lBQ0gsSUFBQSxxQkFBdUMsRUFBckMsc0JBQVEsRUFBRSxvQkFBMkIsQ0FBQztZQUM5QyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFDMUIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU07d0JBQUosVUFBRTtvQkFBTyxPQUFBLElBQUksS0FBSyxFQUFFO2dCQUFYLENBQVcsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDbkIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSztxQkFDMUIsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO3dCQUN0QixFQUFFLEVBQUUsSUFBSTtxQkFDVCxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTVDRCxDQUFrQyxZQUFZLEdBNEM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdUaW1lbGluZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy10aW1lbGluZS1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLmxpc3RlblRvVGltZWxpbmUoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdhdy10aW1lbGluZS1sYXlvdXQuem9vbW91dCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGltZWxpbmUuem9vbU91dCgwLjcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2F3LXRpbWVsaW5lLWxheW91dC56b29taW4nOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpbWVsaW5lLnpvb21JbigwLjcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxpc3RlblRvVGltZWxpbmUoKSB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UudGltZWxpbmVMb2FkZWQkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpcnN0KClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHRpbWVsaW5lLCBkYXRhU2V0IH0gPSB0aGlzLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgdGltZWxpbmUub24oJ2NsaWNrJywgKHsgaXRlbSB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjbGlja2VkID0gZGF0YVNldC5maW5kKCh7IGlkIH0pID0+IGl0ZW0gPT09IGlkKTtcclxuICAgICAgICAgIGlmIChjbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHtcclxuICAgICAgICAgICAgICBpZDogY2xpY2tlZC5pdGVtLmlkLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBjbGlja2VkLml0ZW0ubGFiZWxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCB7XHJcbiAgICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=