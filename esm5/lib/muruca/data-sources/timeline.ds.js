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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNL0I7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFxQ0M7UUEvQlEscUJBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUErQmhFLENBQUM7SUE3QkMsNkRBQTZEO0lBQ25ELGdDQUFTLEdBQW5CLFVBQW9CLElBQTBCO1FBQTlDLGlCQTJCQztRQTFCQyxPQUFPO1lBQ0wsV0FBVyxFQUFFLGFBQWE7WUFDMUIsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE1BQU0sRUFBRSxPQUFPO2dCQUNmLEtBQUssRUFBRSxNQUFNO2dCQUNiLFlBQVksRUFBRSxLQUFLO2dCQUNuQixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLFFBQVEsRUFBRSxVQUFDLENBQUMsRUFBRSxPQUFPLElBQUssT0FBQSw0QkFBd0IsT0FBTyxDQUFDLEtBQUssV0FBUSxFQUE3QyxDQUE2QztpQkFDeEU7Z0JBQ0QsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixZQUFZLEVBQUUsQ0FBQzthQUNoQjtZQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixjQUFjO1lBQ2QsaUNBQWlDO1lBQ2pDLDhFQUE4RTtZQUM5RSxNQUFNO1lBQ04sWUFBWSxFQUFFLFVBQUMsUUFBUTtnQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUFrQyxVQUFVLEdBcUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVsaW5lRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyB2aXMgZnJvbSAndmlzLXRpbWVsaW5lJztcclxuXHJcbi8vIHZpcy10aW1lbGluZSBkYXRhc2V0IHR5cGUgbG9va3VwXHJcbnR5cGUgRGF0YVNldCA9IFRpbWVsaW5lRGF0YVsnZGF0YVNldCddXHJcblxyXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgLyoqIHRpbWVsaW5lIGluc3RhbmNlICovXHJcbiAgdGltZWxpbmU6IHZpcy5UaW1lbGluZTtcclxuXHJcbiAgcHVibGljIHRpbWVsaW5lTG9hZGVkJDogU3ViamVjdDx2aXMuVGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogeyBkYXRhU2V0OiBEYXRhU2V0IH0pOiBUaW1lbGluZURhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGFpbmVySUQ6ICdtci10aW1lbGluZScsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICBoZWlnaHQ6ICc1MDBweCcsXHJcbiAgICAgICAgbG9jYWxlOiAnaXRfSVQnLFxyXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgc2hvd1Rvb2x0aXBzOiBmYWxzZSxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogKGQsIGVsZW1lbnQpID0+IGA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPiR7ZWxlbWVudC50aXRsZX08L2Rpdj5gXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzM1MHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc4MDBweCcsXHJcbiAgICAgICAgem9vbUZyaWN0aW9uOiA4XHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGFTZXQ6IGRhdGEuZGF0YVNldCxcclxuICAgICAgLy8gZGF0YVNldDogW3tcclxuICAgICAgLy8gTW9jayBkaSB1biBlbGVtZW50byBjbGljY2FiaWxlXHJcbiAgICAgIC8vICAgc3RhcnQ6ICcyMDE0LTA0LTE3JywgaWQ6IDI5OTIsIHR5cGU6ICdwb2ludCcsIGNvbnRlbnQ6ICdNaXNzaW9uZSBWZW5lemlhJ1xyXG4gICAgICAvLyB9XSxcclxuICAgICAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHtcclxuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmU7XHJcbiAgICAgICAgdGhpcy50aW1lbGluZUxvYWRlZCQubmV4dCh0aW1lbGluZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==