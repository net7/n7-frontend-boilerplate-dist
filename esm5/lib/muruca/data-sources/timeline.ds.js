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
            libOptions: __assign({ height: '500px', locale: 'it_IT', align: 'left', showTooltips: false, tooltip: {
                    followMouse: false,
                    template: function (d, element) { return "<div class=\"tooltip\">" + element.title + "</div>"; }
                }, width: '100%', minHeight: '350px', maxHeight: '800px', zoomFriction: 8 }, this.options.libOptions),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNL0I7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFzQ0M7UUFoQ1EscUJBQWUsR0FBc0IsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFnQzVELENBQUM7SUE5QlcsZ0NBQVMsR0FBbkIsVUFBb0IsSUFBMEI7UUFBOUMsaUJBNkJDO1FBNUJDLE9BQU87WUFDTCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLGFBQ1IsTUFBTSxFQUFFLE9BQU8sRUFDZixNQUFNLEVBQUUsT0FBTyxFQUNmLEtBQUssRUFBRSxNQUFNLEVBQ2IsWUFBWSxFQUFFLEtBQUssRUFDbkIsT0FBTyxFQUFFO29CQUNQLFdBQVcsRUFBRSxLQUFLO29CQUNsQixRQUFRLEVBQUUsVUFBQyxDQUFDLEVBQUUsT0FBTyxJQUFLLE9BQUEsNEJBQXdCLE9BQU8sQ0FBQyxLQUFLLFdBQVEsRUFBN0MsQ0FBNkM7aUJBQ3hFLEVBQ0QsS0FBSyxFQUFFLE1BQU0sRUFDYixTQUFTLEVBQUUsT0FBTyxFQUNsQixTQUFTLEVBQUUsT0FBTyxFQUNsQixZQUFZLEVBQUUsQ0FBQyxJQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUMzQjtZQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7Z0JBQzFCLCtEQUErRDtnQkFDL0QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDOUIsNkJBQVksQ0FBQyxHQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFHO2lCQUN4QztnQkFBQyxPQUFPLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQztZQUNGLFlBQVksRUFBRSxVQUFDLFFBQVE7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF0Q0QsQ0FBa0MsVUFBVSxHQXNDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVGltZWxpbmUgfSBmcm9tICd2aXMtdGltZWxpbmUnO1xyXG5cclxuLy8gdmlzLXRpbWVsaW5lIGRhdGFzZXQgdHlwZSBsb29rdXBcclxudHlwZSBEYXRhU2V0ID0gVGltZWxpbmVEYXRhWydkYXRhU2V0J11cclxuXHJcbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICAvKiogdGltZWxpbmUgaW5zdGFuY2UgKi9cclxuICB0aW1lbGluZTogVGltZWxpbmU7XHJcblxyXG4gIHB1YmxpYyB0aW1lbGluZUxvYWRlZCQ6IFN1YmplY3Q8VGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiB7IGRhdGFTZXQ6IERhdGFTZXQgfSk6IFRpbWVsaW5lRGF0YSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb250YWluZXJJRDogJ21yLXRpbWVsaW5lJyxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIGhlaWdodDogJzUwMHB4JyxcclxuICAgICAgICBsb2NhbGU6ICdpdF9JVCcsXHJcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgICBzaG93VG9vbHRpcHM6IGZhbHNlLFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcclxuICAgICAgICAgIHRlbXBsYXRlOiAoZCwgZWxlbWVudCkgPT4gYDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+JHtlbGVtZW50LnRpdGxlfTwvZGl2PmBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMzUwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzgwMHB4JyxcclxuICAgICAgICB6b29tRnJpY3Rpb246IDgsXHJcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLmxpYk9wdGlvbnNcclxuICAgICAgfSxcclxuICAgICAgZGF0YVNldDogZGF0YS5kYXRhU2V0Lm1hcCgoZCkgPT4ge1xyXG4gICAgICAgIC8vIFNob3cgZGF0ZXMgdGhhdCBoYXZlIGlkZW50aWNhbCBzdGFydCBhbmQgZW5kIGRhdGVzIGFzIHBvaW50c1xyXG4gICAgICAgIGlmIChkLmVuZCAmJiBkLmVuZCA9PT0gZC5zdGFydCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uZCwgLi4ueyBlbmQ6IHVuZGVmaW5lZCB9IH07XHJcbiAgICAgICAgfSByZXR1cm4gZDtcclxuICAgICAgfSksXHJcbiAgICAgIF9zZXRJbnN0YW5jZTogKHRpbWVsaW5lKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xyXG4gICAgICAgIHRoaXMudGltZWxpbmVMb2FkZWQkLm5leHQodGltZWxpbmUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=