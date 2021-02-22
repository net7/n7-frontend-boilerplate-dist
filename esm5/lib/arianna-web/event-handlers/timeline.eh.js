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
                    var dateText = clicked._meta.dateText;
                    var _b = clicked.item, id = _b.id, label = _b.label;
                    _this.emitOuter('click', {
                        id: id,
                        label: label,
                        dateText: dateText,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvdGltZWxpbmUuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkM7SUFBa0MsZ0NBQVk7SUFBOUM7O0lBK0NBLENBQUM7SUE5Q1EsNkJBQU0sR0FBYjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUNqQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ3hCLE1BQU07Z0JBRVIsS0FBSyw0QkFBNEI7b0JBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFFUixLQUFLLDJCQUEyQjtvQkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHVDQUFnQixHQUF4QjtRQUFBLGlCQXdCQztRQXZCQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWU7YUFDNUIsSUFBSSxDQUNILEtBQUssRUFBRSxDQUNSO2FBQ0EsU0FBUyxDQUFDO1lBQ0gsSUFBQSxxQkFBdUMsRUFBckMsc0JBQVEsRUFBRSxvQkFBMkIsQ0FBQztZQUM5QyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFDMUIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU07d0JBQUosVUFBRTtvQkFBTyxPQUFBLElBQUksS0FBSyxFQUFFO2dCQUFYLENBQVcsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLE9BQU8sRUFBRTtvQkFDSCxJQUFBLGlDQUFRLENBQW1CO29CQUM3QixJQUFBLGlCQUE0QixFQUExQixVQUFFLEVBQUUsZ0JBQXNCLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO3dCQUN0QixFQUFFLElBQUE7d0JBQ0YsS0FBSyxPQUFBO3dCQUNMLFFBQVEsVUFBQTtxQkFDVCxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3RCLEVBQUUsRUFBRSxJQUFJO3FCQUNULENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBL0NELENBQWtDLFlBQVksR0ErQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1RpbWVsaW5lRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy10aW1lbGluZS1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub1RpbWVsaW5lKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctdGltZWxpbmUtbGF5b3V0Lnpvb21vdXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aW1lbGluZS56b29tT3V0KDAuNyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctdGltZWxpbmUtbGF5b3V0Lnpvb21pbic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpbWVsaW5lLnpvb21JbigwLjcpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlblRvVGltZWxpbmUoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnRpbWVsaW5lTG9hZGVkJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpcnN0KClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRpbWVsaW5lLCBkYXRhU2V0IH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICAgIHRpbWVsaW5lLm9uKCdjbGljaycsICh7IGl0ZW0gfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNsaWNrZWQgPSBkYXRhU2V0LmZpbmQoKHsgaWQgfSkgPT4gaXRlbSA9PT0gaWQpO1xuICAgICAgICAgIGlmIChjbGlja2VkKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGVUZXh0IH0gPSBjbGlja2VkLl9tZXRhO1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgbGFiZWwgfSA9IGNsaWNrZWQuaXRlbTtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICBkYXRlVGV4dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCB7XG4gICAgICAgICAgICAgIGlkOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==