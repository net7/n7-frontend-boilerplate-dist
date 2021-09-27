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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkM7SUFBcUMsbUNBQVk7SUFBakQ7O0lBa0RBLENBQUM7SUE3Q1EsZ0NBQU0sR0FBYjtRQUFBLGlCQWlDQztRQWhDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFRO29CQUNoQyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDakMsTUFBTTtnQkFDUixLQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxnQkFBYTtvQkFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRTt3QkFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUNoRDtvQkFDRCxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxTQUFTO29CQUNULE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ2hDLEtBQUssRUFBRSxDQUNSLENBQUMsU0FBUyxDQUFDO1lBQ0YsSUFBQSxnQ0FBTSxDQUFxQjtZQUNuQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFDLFNBQVM7Z0JBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbERELENBQXFDLFlBQVksR0FrRGhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNckltYWdlVmlld2VyRFMgfSBmcm9tICcuLi9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzJztcblxuZXhwb3J0IGNsYXNzIE1ySW1hZ2VWaWV3ZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIGxheW91dElkOiBzdHJpbmc7XG5cbiAgZGF0YVNvdXJjZTogTXJJbWFnZVZpZXdlckRTO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5jbGlja2A6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgYCR7dGhpcy5kYXRhU291cmNlLmlkfS5wYWdlY2hhbmdlYDpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnZWNoYW5nZScsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub1ZpZXdlcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQudGh1bWJjbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQudGFyZ2V0SWQgPT09IHRoaXMuZGF0YVNvdXJjZS5pZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNoYW5nZVBhZ2UocGF5bG9hZC50aHVtYmluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC5wYWdlY2hhbmdlJzpcbiAgICAgICAgICAvLyBTaWxlbnRcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW5Ub1ZpZXdlcigpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uudmlld2VyTG9hZGVkJC5waXBlKFxuICAgICAgZmlyc3QoKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHsgdmlld2VyIH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICB2aWV3ZXIuYWRkSGFuZGxlcigncGFnZScsIChldmVudERhdGEpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2VjaGFuZ2UnLCBldmVudERhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==