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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPL0I7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFzQ0M7UUFoQ1EscUJBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFnQ2hFLENBQUM7SUE5QlcsZ0NBQVMsR0FBbkIsVUFBb0IsSUFBMEI7UUFBOUMsaUJBNkJDO1FBNUJDLE9BQU87WUFDTCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsUUFBUSxFQUFFLFVBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSyxPQUFBLDRCQUF3QixPQUFPLENBQUMsS0FBSyxXQUFRLEVBQTdDLENBQTZDO2lCQUN4RTtnQkFDRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixTQUFTLEVBQUUsT0FBTztnQkFDbEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsd0RBQXdEO1lBQ3hELHdFQUF3RTtZQUN4RSx1QkFBdUI7WUFDdkIsT0FBTztZQUNQLFlBQVksRUFBRSxVQUFDLFFBQVE7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF0Q0QsQ0FBa0MsVUFBVSxHQXNDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdmlzIGZyb20gJ3Zpcy10aW1lbGluZSc7XG4vLyBpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuLy8gdmlzLXRpbWVsaW5lIGRhdGFzZXQgdHlwZSBsb29rdXBcbnR5cGUgRGF0YVNldCA9IFRpbWVsaW5lRGF0YVsnZGF0YVNldCddXG5cbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICAvKiogdGltZWxpbmUgaW5zdGFuY2UgKi9cbiAgdGltZWxpbmU6IHZpcy5UaW1lbGluZTtcblxuICBwdWJsaWMgdGltZWxpbmVMb2FkZWQkOiBTdWJqZWN0PHZpcy5UaW1lbGluZT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogeyBkYXRhU2V0OiBEYXRhU2V0IH0pOiBUaW1lbGluZURhdGEge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXJJRDogJ21yLXRpbWVsaW5lJyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxuICAgICAgICBsb2NhbGU6ICdpdF9JVCcsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXG4gICAgICAgICAgdGVtcGxhdGU6IChkLCBlbGVtZW50KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxuICAgICAgICB9LFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICczNTBweCcsXG4gICAgICAgIG1heEhlaWdodDogJzgwMHB4JyxcbiAgICAgICAgem9vbUZyaWN0aW9uOiA4XG4gICAgICB9LFxuICAgICAgZGF0YVNldDogZGF0YS5kYXRhU2V0LFxuICAgICAgLy8gLm1hcCgoZCkgPT4gKHtcbiAgICAgIC8vICAgaWQ6IGQuaWQsXG4gICAgICAvLyAgIHN0YXJ0OiBtb21lbnQoZC5zdGFydCwgJ0RELU1NLVlZWVknKS50b0lTT1N0cmluZygpLFxuICAgICAgLy8gICBlbmQ6IGQuZW5kID8gbW9tZW50KGQuZW5kLCAnREQtTU0tWVlZWScpLnRvSVNPU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgICAvLyAgIGNvbnRlbnQ6IGQuY29udGVudFxuICAgICAgLy8gfSkpLFxuICAgICAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgICAgICB0aGlzLnRpbWVsaW5lTG9hZGVkJC5uZXh0KHRpbWVsaW5lKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=