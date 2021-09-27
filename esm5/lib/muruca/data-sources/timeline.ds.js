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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNL0I7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFzQ0M7UUFoQ1EscUJBQWUsR0FBc0IsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFnQzVELENBQUM7SUE5QlcsZ0NBQVMsR0FBbkIsVUFBb0IsSUFBMEI7UUFBOUMsaUJBNkJDO1FBNUJDLE9BQU87WUFDTCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLGFBQ1IsTUFBTSxFQUFFLE9BQU8sRUFDZixNQUFNLEVBQUUsT0FBTyxFQUNmLEtBQUssRUFBRSxNQUFNLEVBQ2IsWUFBWSxFQUFFLEtBQUssRUFDbkIsT0FBTyxFQUFFO29CQUNQLFdBQVcsRUFBRSxLQUFLO29CQUNsQixRQUFRLEVBQUUsVUFBQyxDQUFDLEVBQUUsT0FBTyxJQUFLLE9BQUEsNEJBQXdCLE9BQU8sQ0FBQyxLQUFLLFdBQVEsRUFBN0MsQ0FBNkM7aUJBQ3hFLEVBQ0QsS0FBSyxFQUFFLE1BQU0sRUFDYixTQUFTLEVBQUUsT0FBTyxFQUNsQixTQUFTLEVBQUUsT0FBTyxFQUNsQixZQUFZLEVBQUUsQ0FBQyxJQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUMzQjtZQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7Z0JBQzFCLCtEQUErRDtnQkFDL0QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDOUIsNkJBQVksQ0FBQyxHQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFHO2lCQUN4QztnQkFBQyxPQUFPLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQztZQUNGLFlBQVksRUFBRSxVQUFDLFFBQVE7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF0Q0QsQ0FBa0MsVUFBVSxHQXNDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGltZWxpbmUgfSBmcm9tICd2aXMtdGltZWxpbmUnO1xuXG4vLyB2aXMtdGltZWxpbmUgZGF0YXNldCB0eXBlIGxvb2t1cFxudHlwZSBEYXRhU2V0ID0gVGltZWxpbmVEYXRhWydkYXRhU2V0J11cblxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIC8qKiB0aW1lbGluZSBpbnN0YW5jZSAqL1xuICB0aW1lbGluZTogVGltZWxpbmU7XG5cbiAgcHVibGljIHRpbWVsaW5lTG9hZGVkJDogU3ViamVjdDxUaW1lbGluZT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogeyBkYXRhU2V0OiBEYXRhU2V0IH0pOiBUaW1lbGluZURhdGEge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXJJRDogJ21yLXRpbWVsaW5lJyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxuICAgICAgICBsb2NhbGU6ICdpdF9JVCcsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXG4gICAgICAgICAgdGVtcGxhdGU6IChkLCBlbGVtZW50KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxuICAgICAgICB9LFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICczNTBweCcsXG4gICAgICAgIG1heEhlaWdodDogJzgwMHB4JyxcbiAgICAgICAgem9vbUZyaWN0aW9uOiA4LFxuICAgICAgICAuLi50aGlzLm9wdGlvbnMubGliT3B0aW9uc1xuICAgICAgfSxcbiAgICAgIGRhdGFTZXQ6IGRhdGEuZGF0YVNldC5tYXAoKGQpID0+IHtcbiAgICAgICAgLy8gU2hvdyBkYXRlcyB0aGF0IGhhdmUgaWRlbnRpY2FsIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgYXMgcG9pbnRzXG4gICAgICAgIGlmIChkLmVuZCAmJiBkLmVuZCA9PT0gZC5zdGFydCkge1xuICAgICAgICAgIHJldHVybiB7IC4uLmQsIC4uLnsgZW5kOiB1bmRlZmluZWQgfSB9O1xuICAgICAgICB9IHJldHVybiBkO1xuICAgICAgfSksXG4gICAgICBfc2V0SW5zdGFuY2U6ICh0aW1lbGluZSkgPT4ge1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmU7XG4gICAgICAgIHRoaXMudGltZWxpbmVMb2FkZWQkLm5leHQodGltZWxpbmUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==