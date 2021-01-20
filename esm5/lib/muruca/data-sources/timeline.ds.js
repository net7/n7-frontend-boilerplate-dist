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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNL0I7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFxQ0M7UUEvQlEscUJBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUErQmhFLENBQUM7SUE3QlcsZ0NBQVMsR0FBbkIsVUFBb0IsSUFBMEI7UUFBOUMsaUJBNEJDO1FBM0JDLE9BQU87WUFDTCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsUUFBUSxFQUFFLFVBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSyxPQUFBLDRCQUF3QixPQUFPLENBQUMsS0FBSyxXQUFRLEVBQTdDLENBQTZDO2lCQUN4RTtnQkFDRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixTQUFTLEVBQUUsT0FBTztnQkFDbEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztnQkFDMUIsK0RBQStEO2dCQUMvRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUM5Qiw2QkFBWSxDQUFDLEdBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUc7aUJBQ3hDO2dCQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDO1lBQ0YsWUFBWSxFQUFFLFVBQUMsUUFBUTtnQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUFrQyxVQUFVLEdBcUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVsaW5lRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB2aXMgZnJvbSAndmlzLXRpbWVsaW5lJztcblxuLy8gdmlzLXRpbWVsaW5lIGRhdGFzZXQgdHlwZSBsb29rdXBcbnR5cGUgRGF0YVNldCA9IFRpbWVsaW5lRGF0YVsnZGF0YVNldCddXG5cbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICAvKiogdGltZWxpbmUgaW5zdGFuY2UgKi9cbiAgdGltZWxpbmU6IHZpcy5UaW1lbGluZTtcblxuICBwdWJsaWMgdGltZWxpbmVMb2FkZWQkOiBTdWJqZWN0PHZpcy5UaW1lbGluZT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogeyBkYXRhU2V0OiBEYXRhU2V0IH0pOiBUaW1lbGluZURhdGEge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXJJRDogJ21yLXRpbWVsaW5lJyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxuICAgICAgICBsb2NhbGU6ICdpdF9JVCcsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXG4gICAgICAgICAgdGVtcGxhdGU6IChkLCBlbGVtZW50KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxuICAgICAgICB9LFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICczNTBweCcsXG4gICAgICAgIG1heEhlaWdodDogJzgwMHB4JyxcbiAgICAgICAgem9vbUZyaWN0aW9uOiA4XG4gICAgICB9LFxuICAgICAgZGF0YVNldDogZGF0YS5kYXRhU2V0Lm1hcCgoZCkgPT4ge1xuICAgICAgICAvLyBTaG93IGRhdGVzIHRoYXQgaGF2ZSBpZGVudGljYWwgc3RhcnQgYW5kIGVuZCBkYXRlcyBhcyBwb2ludHNcbiAgICAgICAgaWYgKGQuZW5kICYmIGQuZW5kID09PSBkLnN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uZCwgLi4ueyBlbmQ6IHVuZGVmaW5lZCB9IH07XG4gICAgICAgIH0gcmV0dXJuIGQ7XG4gICAgICB9KSxcbiAgICAgIF9zZXRJbnN0YW5jZTogKHRpbWVsaW5lKSA9PiB7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcbiAgICAgICAgdGhpcy50aW1lbGluZUxvYWRlZCQubmV4dCh0aW1lbGluZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19