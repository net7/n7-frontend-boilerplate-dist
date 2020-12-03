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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            // dataSet: [{
            // Mock di un elemento cliccabile
            //   start: '2014-04-17', id: 2992, type: 'point', content: 'Missione Venezia'
            // }],
            _setInstance: function (timeline) {
                _this.timeline = timeline;
                _this.timelineLoaded$.next(timeline);
            }
        };
    };
    return MrTimelineDS;
}(DataSource));
export { MrTimelineDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNL0I7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFxQ0M7UUEvQlEscUJBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUErQmhFLENBQUM7SUE3QkMsNkRBQTZEO0lBQ25ELGdDQUFTLEdBQW5CLFVBQW9CLElBQTBCO1FBQTlDLGlCQTJCQztRQTFCQyxPQUFPO1lBQ0wsV0FBVyxFQUFFLGFBQWE7WUFDMUIsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE1BQU0sRUFBRSxPQUFPO2dCQUNmLEtBQUssRUFBRSxNQUFNO2dCQUNiLFlBQVksRUFBRSxLQUFLO2dCQUNuQixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLFFBQVEsRUFBRSxVQUFDLENBQUMsRUFBRSxPQUFPLElBQUssT0FBQSw0QkFBd0IsT0FBTyxDQUFDLEtBQUssV0FBUSxFQUE3QyxDQUE2QztpQkFDeEU7Z0JBQ0QsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixZQUFZLEVBQUUsQ0FBQzthQUNoQjtZQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixjQUFjO1lBQ2QsaUNBQWlDO1lBQ2pDLDhFQUE4RTtZQUM5RSxNQUFNO1lBQ04sWUFBWSxFQUFFLFVBQUMsUUFBUTtnQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUFrQyxVQUFVLEdBcUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVsaW5lRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB2aXMgZnJvbSAndmlzLXRpbWVsaW5lJztcblxuLy8gdmlzLXRpbWVsaW5lIGRhdGFzZXQgdHlwZSBsb29rdXBcbnR5cGUgRGF0YVNldCA9IFRpbWVsaW5lRGF0YVsnZGF0YVNldCddXG5cbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICAvKiogdGltZWxpbmUgaW5zdGFuY2UgKi9cbiAgdGltZWxpbmU6IHZpcy5UaW1lbGluZTtcblxuICBwdWJsaWMgdGltZWxpbmVMb2FkZWQkOiBTdWJqZWN0PHZpcy5UaW1lbGluZT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiB7IGRhdGFTZXQ6IERhdGFTZXQgfSk6IFRpbWVsaW5lRGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcklEOiAnbXItdGltZWxpbmUnLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICBoZWlnaHQ6ICc1MDBweCcsXG4gICAgICAgIGxvY2FsZTogJ2l0X0lUJyxcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgc2hvd1Rvb2x0aXBzOiBmYWxzZSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcbiAgICAgICAgICB0ZW1wbGF0ZTogKGQsIGVsZW1lbnQpID0+IGA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPiR7ZWxlbWVudC50aXRsZX08L2Rpdj5gXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzM1MHB4JyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnODAwcHgnLFxuICAgICAgICB6b29tRnJpY3Rpb246IDhcbiAgICAgIH0sXG4gICAgICBkYXRhU2V0OiBkYXRhLmRhdGFTZXQsXG4gICAgICAvLyBkYXRhU2V0OiBbe1xuICAgICAgLy8gTW9jayBkaSB1biBlbGVtZW50byBjbGljY2FiaWxlXG4gICAgICAvLyAgIHN0YXJ0OiAnMjAxNC0wNC0xNycsIGlkOiAyOTkyLCB0eXBlOiAncG9pbnQnLCBjb250ZW50OiAnTWlzc2lvbmUgVmVuZXppYSdcbiAgICAgIC8vIH1dLFxuICAgICAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgICAgICB0aGlzLnRpbWVsaW5lTG9hZGVkJC5uZXh0KHRpbWVsaW5lKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=