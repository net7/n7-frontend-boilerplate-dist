import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
var MrTimelineDS = /** @class */ (function (_super) {
    __extends(MrTimelineDS, _super);
    function MrTimelineDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timelineLoaded$ = new Subject();
        return _this;
    }
    MrTimelineDS.prototype.transform = function (data) {
        var _this = this;
        return {
            containerID: 'mr-timeline',
            libOptions: {
                height: '500px',
                locale: 'it_IT',
                align: 'left',
                showTooltips: false,
                tooltip: {
                    followMouse: false,
                    template: function (d, element) { return "<div class=\"tooltip\">" + element.title + "</div>"; }
                },
                width: '100%',
                minHeight: '350px',
                maxHeight: '800px',
                zoomFriction: 8
            },
            dataSet: data.dataSet.map(function (d) {
                // Show dates that have identical start and end dates as points
                if (d.end && d.end === d.start) {
                    return __assign(__assign({}, d), { end: undefined });
                }
                return d;
            }),
            _setInstance: function (timeline) {
                _this.timeline = timeline;
                _this.timelineLoaded$.next(timeline);
            }
        };
    };
    return MrTimelineDS;
}(DataSource));
export { MrTimelineDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNL0I7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFxQ0M7UUEvQlEscUJBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUErQmhFLENBQUM7SUE3QlcsZ0NBQVMsR0FBbkIsVUFBb0IsSUFBMEI7UUFBOUMsaUJBNEJDO1FBM0JDLE9BQU87WUFDTCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsUUFBUSxFQUFFLFVBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSyxPQUFBLDRCQUF3QixPQUFPLENBQUMsS0FBSyxXQUFRLEVBQTdDLENBQTZDO2lCQUN4RTtnQkFDRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixTQUFTLEVBQUUsT0FBTztnQkFDbEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztnQkFDMUIsK0RBQStEO2dCQUMvRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUM5Qiw2QkFBWSxDQUFDLEdBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUc7aUJBQ3hDO2dCQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDO1lBQ0YsWUFBWSxFQUFFLFVBQUMsUUFBUTtnQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUFrQyxVQUFVLEdBcUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVsaW5lRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyB2aXMgZnJvbSAndmlzLXRpbWVsaW5lJztcclxuXHJcbi8vIHZpcy10aW1lbGluZSBkYXRhc2V0IHR5cGUgbG9va3VwXHJcbnR5cGUgRGF0YVNldCA9IFRpbWVsaW5lRGF0YVsnZGF0YVNldCddXHJcblxyXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgLyoqIHRpbWVsaW5lIGluc3RhbmNlICovXHJcbiAgdGltZWxpbmU6IHZpcy5UaW1lbGluZTtcclxuXHJcbiAgcHVibGljIHRpbWVsaW5lTG9hZGVkJDogU3ViamVjdDx2aXMuVGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiB7IGRhdGFTZXQ6IERhdGFTZXQgfSk6IFRpbWVsaW5lRGF0YSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb250YWluZXJJRDogJ21yLXRpbWVsaW5lJyxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIGhlaWdodDogJzUwMHB4JyxcclxuICAgICAgICBsb2NhbGU6ICdpdF9JVCcsXHJcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgICBzaG93VG9vbHRpcHM6IGZhbHNlLFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcclxuICAgICAgICAgIHRlbXBsYXRlOiAoZCwgZWxlbWVudCkgPT4gYDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+JHtlbGVtZW50LnRpdGxlfTwvZGl2PmBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMzUwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzgwMHB4JyxcclxuICAgICAgICB6b29tRnJpY3Rpb246IDhcclxuICAgICAgfSxcclxuICAgICAgZGF0YVNldDogZGF0YS5kYXRhU2V0Lm1hcCgoZCkgPT4ge1xyXG4gICAgICAgIC8vIFNob3cgZGF0ZXMgdGhhdCBoYXZlIGlkZW50aWNhbCBzdGFydCBhbmQgZW5kIGRhdGVzIGFzIHBvaW50c1xyXG4gICAgICAgIGlmIChkLmVuZCAmJiBkLmVuZCA9PT0gZC5zdGFydCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uZCwgLi4ueyBlbmQ6IHVuZGVmaW5lZCB9IH07XHJcbiAgICAgICAgfSByZXR1cm4gZDtcclxuICAgICAgfSksXHJcbiAgICAgIF9zZXRJbnN0YW5jZTogKHRpbWVsaW5lKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xyXG4gICAgICAgIHRoaXMudGltZWxpbmVMb2FkZWQkLm5leHQodGltZWxpbmUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=