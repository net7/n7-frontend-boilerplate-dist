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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNL0I7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFxQ0M7UUEvQlEscUJBQWUsR0FBc0IsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUErQjVELENBQUM7SUE3QlcsZ0NBQVMsR0FBbkIsVUFBb0IsSUFBMEI7UUFBOUMsaUJBNEJDO1FBM0JDLE9BQU87WUFDTCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsUUFBUSxFQUFFLFVBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSyxPQUFBLDRCQUF3QixPQUFPLENBQUMsS0FBSyxXQUFRLEVBQTdDLENBQTZDO2lCQUN4RTtnQkFDRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixTQUFTLEVBQUUsT0FBTztnQkFDbEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztnQkFDMUIsK0RBQStEO2dCQUMvRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUM5Qiw2QkFBWSxDQUFDLEdBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUc7aUJBQ3hDO2dCQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDO1lBQ0YsWUFBWSxFQUFFLFVBQUMsUUFBUTtnQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUFrQyxVQUFVLEdBcUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVsaW5lRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUaW1lbGluZSB9IGZyb20gJ3Zpcy10aW1lbGluZSc7XHJcblxyXG4vLyB2aXMtdGltZWxpbmUgZGF0YXNldCB0eXBlIGxvb2t1cFxyXG50eXBlIERhdGFTZXQgPSBUaW1lbGluZURhdGFbJ2RhdGFTZXQnXVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKiB0aW1lbGluZSBpbnN0YW5jZSAqL1xyXG4gIHRpbWVsaW5lOiBUaW1lbGluZTtcclxuXHJcbiAgcHVibGljIHRpbWVsaW5lTG9hZGVkJDogU3ViamVjdDxUaW1lbGluZT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IHsgZGF0YVNldDogRGF0YVNldCB9KTogVGltZWxpbmVEYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnRhaW5lcklEOiAnbXItdGltZWxpbmUnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxyXG4gICAgICAgIGxvY2FsZTogJ2l0X0lUJyxcclxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZm9sbG93TW91c2U6IGZhbHNlLFxyXG4gICAgICAgICAgdGVtcGxhdGU6IChkLCBlbGVtZW50KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICczNTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnODAwcHgnLFxyXG4gICAgICAgIHpvb21GcmljdGlvbjogOFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhU2V0OiBkYXRhLmRhdGFTZXQubWFwKChkKSA9PiB7XHJcbiAgICAgICAgLy8gU2hvdyBkYXRlcyB0aGF0IGhhdmUgaWRlbnRpY2FsIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgYXMgcG9pbnRzXHJcbiAgICAgICAgaWYgKGQuZW5kICYmIGQuZW5kID09PSBkLnN0YXJ0KSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5kLCAuLi57IGVuZDogdW5kZWZpbmVkIH0gfTtcclxuICAgICAgICB9IHJldHVybiBkO1xyXG4gICAgICB9KSxcclxuICAgICAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHtcclxuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmU7XHJcbiAgICAgICAgdGhpcy50aW1lbGluZUxvYWRlZCQubmV4dCh0aW1lbGluZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==