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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNL0I7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFxQ0M7UUEvQlEscUJBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUErQmhFLENBQUM7SUE3QlcsZ0NBQVMsR0FBbkIsVUFBb0IsSUFBMEI7UUFBOUMsaUJBNEJDO1FBM0JDLE9BQU87WUFDTCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsUUFBUSxFQUFFLFVBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSyxPQUFBLDRCQUF3QixPQUFPLENBQUMsS0FBSyxXQUFRLEVBQTdDLENBQTZDO2lCQUN4RTtnQkFDRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixTQUFTLEVBQUUsT0FBTztnQkFDbEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztnQkFDMUIsK0RBQStEO2dCQUMvRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUM5Qiw2QkFBWSxDQUFDLEdBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUc7aUJBQ3hDO2dCQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDO1lBQ0YsWUFBWSxFQUFFLFVBQUMsUUFBUTtnQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUFrQyxVQUFVLEdBcUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVsaW5lRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyB2aXMgZnJvbSAndmlzLXRpbWVsaW5lL2RlY2xhcmF0aW9ucyc7XHJcblxyXG4vLyB2aXMtdGltZWxpbmUgZGF0YXNldCB0eXBlIGxvb2t1cFxyXG50eXBlIERhdGFTZXQgPSBUaW1lbGluZURhdGFbJ2RhdGFTZXQnXVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKiB0aW1lbGluZSBpbnN0YW5jZSAqL1xyXG4gIHRpbWVsaW5lOiB2aXMuVGltZWxpbmU7XHJcblxyXG4gIHB1YmxpYyB0aW1lbGluZUxvYWRlZCQ6IFN1YmplY3Q8dmlzLlRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogeyBkYXRhU2V0OiBEYXRhU2V0IH0pOiBUaW1lbGluZURhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGFpbmVySUQ6ICdtci10aW1lbGluZScsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICBoZWlnaHQ6ICc1MDBweCcsXHJcbiAgICAgICAgbG9jYWxlOiAnaXRfSVQnLFxyXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgc2hvd1Rvb2x0aXBzOiBmYWxzZSxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogKGQsIGVsZW1lbnQpID0+IGA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPiR7ZWxlbWVudC50aXRsZX08L2Rpdj5gXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzM1MHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc4MDBweCcsXHJcbiAgICAgICAgem9vbUZyaWN0aW9uOiA4XHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGFTZXQ6IGRhdGEuZGF0YVNldC5tYXAoKGQpID0+IHtcclxuICAgICAgICAvLyBTaG93IGRhdGVzIHRoYXQgaGF2ZSBpZGVudGljYWwgc3RhcnQgYW5kIGVuZCBkYXRlcyBhcyBwb2ludHNcclxuICAgICAgICBpZiAoZC5lbmQgJiYgZC5lbmQgPT09IGQuc3RhcnQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLmQsIC4uLnsgZW5kOiB1bmRlZmluZWQgfSB9O1xyXG4gICAgICAgIH0gcmV0dXJuIGQ7XHJcbiAgICAgIH0pLFxyXG4gICAgICBfc2V0SW5zdGFuY2U6ICh0aW1lbGluZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcclxuICAgICAgICB0aGlzLnRpbWVsaW5lTG9hZGVkJC5uZXh0KHRpbWVsaW5lKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19