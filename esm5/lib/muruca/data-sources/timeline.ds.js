import { __extends } from "tslib";
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
            dataSet: data.dataSet,
            // .map((d) => ({
            //   id: d.id,
            //   start: moment(d.start, 'DD-MM-YYYY').toISOString(),
            //   end: d.end ? moment(d.end, 'DD-MM-YYYY').toISOString() : undefined,
            //   content: d.content
            // })),
            _setInstance: function (timeline) {
                _this.timeline = timeline;
                _this.timelineLoaded$.next(timeline);
            }
        };
    };
    return MrTimelineDS;
}(DataSource));
export { MrTimelineDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPL0I7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFzQ0M7UUFoQ1EscUJBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFnQ2hFLENBQUM7SUE5QlcsZ0NBQVMsR0FBbkIsVUFBb0IsSUFBMEI7UUFBOUMsaUJBNkJDO1FBNUJDLE9BQU87WUFDTCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsUUFBUSxFQUFFLFVBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSyxPQUFBLDRCQUF3QixPQUFPLENBQUMsS0FBSyxXQUFRLEVBQTdDLENBQTZDO2lCQUN4RTtnQkFDRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixTQUFTLEVBQUUsT0FBTztnQkFDbEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsd0RBQXdEO1lBQ3hELHdFQUF3RTtZQUN4RSx1QkFBdUI7WUFDdkIsT0FBTztZQUNQLFlBQVksRUFBRSxVQUFDLFFBQVE7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF0Q0QsQ0FBa0MsVUFBVSxHQXNDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgdmlzIGZyb20gJ3Zpcy10aW1lbGluZSc7XHJcbi8vIGltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuLy8gdmlzLXRpbWVsaW5lIGRhdGFzZXQgdHlwZSBsb29rdXBcclxudHlwZSBEYXRhU2V0ID0gVGltZWxpbmVEYXRhWydkYXRhU2V0J11cclxuXHJcbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICAvKiogdGltZWxpbmUgaW5zdGFuY2UgKi9cclxuICB0aW1lbGluZTogdmlzLlRpbWVsaW5lO1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVMb2FkZWQkOiBTdWJqZWN0PHZpcy5UaW1lbGluZT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IHsgZGF0YVNldDogRGF0YVNldCB9KTogVGltZWxpbmVEYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnRhaW5lcklEOiAnbXItdGltZWxpbmUnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxyXG4gICAgICAgIGxvY2FsZTogJ2l0X0lUJyxcclxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZm9sbG93TW91c2U6IGZhbHNlLFxyXG4gICAgICAgICAgdGVtcGxhdGU6IChkLCBlbGVtZW50KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICczNTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnODAwcHgnLFxyXG4gICAgICAgIHpvb21GcmljdGlvbjogOFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhU2V0OiBkYXRhLmRhdGFTZXQsXHJcbiAgICAgIC8vIC5tYXAoKGQpID0+ICh7XHJcbiAgICAgIC8vICAgaWQ6IGQuaWQsXHJcbiAgICAgIC8vICAgc3RhcnQ6IG1vbWVudChkLnN0YXJ0LCAnREQtTU0tWVlZWScpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIC8vICAgZW5kOiBkLmVuZCA/IG1vbWVudChkLmVuZCwgJ0RELU1NLVlZWVknKS50b0lTT1N0cmluZygpIDogdW5kZWZpbmVkLFxyXG4gICAgICAvLyAgIGNvbnRlbnQ6IGQuY29udGVudFxyXG4gICAgICAvLyB9KSksXHJcbiAgICAgIF9zZXRJbnN0YW5jZTogKHRpbWVsaW5lKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xyXG4gICAgICAgIHRoaXMudGltZWxpbmVMb2FkZWQkLm5leHQodGltZWxpbmUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=