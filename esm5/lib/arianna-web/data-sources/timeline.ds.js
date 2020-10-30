import { __extends, __read, __spread } from "tslib";
import { DataSource } from '@n7-frontend/core';
import * as moment from 'moment';
import { max as _max, min as _min } from 'lodash';
import { Subject } from 'rxjs';
var ONE_YEAR = 31557600000;
var YEARS_MARGIN = 30;
var AwTimelineDS = /** @class */ (function (_super) {
    __extends(AwTimelineDS, _super);
    function AwTimelineDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timelineLoaded$ = new Subject();
        _this.transform = function (data) {
            _this.dataSet = data.map(function (_a) {
                var id = _a.id, start = _a.start, end = _a.end, item = _a.item, label = _a.label;
                return ({
                    id: id,
                    item: item,
                    start: start ? moment(start).format('YYYY-MM-DD') : null,
                    end: end && end !== start ? moment(end).format('YYYY-MM-DD') : null,
                    content: _this.getItemTemplate(label, item.label)
                });
            });
            var max = _this.getMax();
            var min = _this.getMin();
            return {
                containerID: 'timeline-component',
                libOptions: {
                    max: max,
                    min: min,
                    start: min,
                    end: max,
                    align: 'left',
                    minHeight: '100px',
                    // height: '100px',
                    locale: 'it_IT',
                    // cluster: {
                    // fitOnDoubleClick: true,
                    // clusterCriteria: (f, s) => f.content.charAt(0) === s.content.charAt(0),
                    //   titleTemplate: '{count} eventi',
                    // },
                    showCurrentTime: false,
                    showTooltips: false,
                    tooltip: {
                        followMouse: false,
                        template: function (d, element) { return "<div class=\"tooltip\">" + element.title + "</div>"; }
                    },
                    width: '100%',
                    // minHeight: '350px',
                    // maxHeight: '800px',
                    zoomMax: ONE_YEAR * 2000,
                    zoomMin: ONE_YEAR / 12,
                },
                dataSet: _this.dataSet,
                _setInstance: function (timeline) {
                    _this.timeline = timeline;
                    _this.timelineLoaded$.next();
                    // fix cluster visualization
                    setTimeout(function () {
                        _this.timeline.fit();
                    });
                }
            };
        };
        return _this;
    }
    AwTimelineDS.prototype.getItemTemplate = function (datesLabel, label) {
        return ("\n      <div class=\"dates\">\n        <em>" + datesLabel + "</em>\n      </div>\n      <div class=\"content\">" + label + "</div>\n    ");
    };
    AwTimelineDS.prototype.getMax = function () {
        var maxDate = new Date(_max(this.getAllDates()));
        var year = maxDate.getFullYear();
        var month = maxDate.getMonth();
        var day = maxDate.getDate();
        return new Date(year + YEARS_MARGIN, month, day);
    };
    AwTimelineDS.prototype.getMin = function () {
        var minDate = new Date(_min(this.getAllDates()));
        var year = minDate.getFullYear();
        var month = minDate.getMonth();
        var day = minDate.getDate();
        return new Date(year - YEARS_MARGIN, month, day);
    };
    AwTimelineDS.prototype.getAllDates = function () {
        return __spread(this.dataSet
            .filter(function (_a) {
            var start = _a.start;
            return start;
        })
            .map(function (_a) {
            var start = _a.start;
            return start;
        }), this.dataSet
            .filter(function (_a) {
            var end = _a.end;
            return end;
        })
            .map(function (_a) {
            var end = _a.end;
            return end;
        }));
    };
    return AwTimelineDS;
}(DataSource));
export { AwTimelineDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUM3QixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFFeEI7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFvR0M7UUFqR1EscUJBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUk1QyxlQUFTLEdBQUcsVUFBQyxJQUFJO1lBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBRXhCO29CQURDLFVBQUUsRUFBRSxnQkFBSyxFQUFFLFlBQUcsRUFBRSxjQUFJLEVBQUUsZ0JBQUs7Z0JBQ3ZCLE9BQUEsQ0FBQztvQkFDTCxFQUFFLElBQUE7b0JBQ0YsSUFBSSxNQUFBO29CQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3hELEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtv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LE9BQU87YUFDWixNQUFNLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQU8sT0FBQSxLQUFLO1FBQUwsQ0FBSyxDQUFDO2FBQzVCLEdBQUcsQ0FBQyxVQUFDLEVBQVM7Z0JBQVAsZ0JBQUs7WUFBTyxPQUFBLEtBQUs7UUFBTCxDQUFLLENBQUMsRUFDekIsSUFBSSxDQUFDLE9BQU87YUFDWixNQUFNLENBQUMsVUFBQyxFQUFPO2dCQUFMLFlBQUc7WUFBTyxPQUFBLEdBQUc7UUFBSCxDQUFHLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUMsRUFBTztnQkFBTCxZQUFHO1lBQU8sT0FBQSxHQUFHO1FBQUgsQ0FBRyxDQUFDLEVBQ3hCO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXBHRCxDQUFrQyxVQUFVLEdBb0czQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IG1heCBhcyBfbWF4LCBtaW4gYXMgX21pbiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IE9ORV9ZRUFSID0gMzE1NTc2MDAwMDA7XG5jb25zdCBZRUFSU19NQVJHSU4gPSAzMDtcblxuZXhwb3J0IGNsYXNzIEF3VGltZWxpbmVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgdGltZWxpbmU7XG5cbiAgcHVibGljIHRpbWVsaW5lTG9hZGVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHVibGljIGRhdGFTZXQ7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiB7XG4gICAgdGhpcy5kYXRhU2V0ID0gZGF0YS5tYXAoKHtcbiAgICAgIGlkLCBzdGFydCwgZW5kLCBpdGVtLCBsYWJlbFxuICAgIH0pID0+ICh7XG4gICAgICBpZCxcbiAgICAgIGl0ZW0sXG4gICAgICBzdGFydDogc3RhcnQgPyBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbCxcbiAgICAgIGVuZDogZW5kICYmIGVuZCAhPT0gc3RhcnQgPyBtb21lbnQoZW5kKS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IG51bGwsXG4gICAgICBjb250ZW50OiB0aGlzLmdldEl0ZW1UZW1wbGF0ZShsYWJlbCwgaXRlbS5sYWJlbClcbiAgICB9KSk7XG5cbiAgICBjb25zdCBtYXggPSB0aGlzLmdldE1heCgpO1xuICAgIGNvbnN0IG1pbiA9IHRoaXMuZ2V0TWluKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVySUQ6ICd0aW1lbGluZS1jb21wb25lbnQnLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgc3RhcnQ6IG1pbixcbiAgICAgICAgZW5kOiBtYXgsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMHB4JyxcbiAgICAgICAgLy8gaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICBsb2NhbGU6ICdpdF9JVCcsXG4gICAgICAgIC8vIGNsdXN0ZXI6IHtcbiAgICAgICAgICAvLyBmaXRPbkRvdWJsZUNsaWNrOiB0cnVlLFxuICAgICAgICAgIC8vIGNsdXN0ZXJDcml0ZXJpYTogKGYsIHMpID0+IGYuY29udGVudC5jaGFyQXQoMCkgPT09IHMuY29udGVudC5jaGFyQXQoMCksXG4gICAgICAgIC8vICAgdGl0bGVUZW1wbGF0ZTogJ3tjb3VudH0gZXZlbnRpJyxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgc2hvd0N1cnJlbnRUaW1lOiBmYWxzZSxcbiAgICAgICAgc2hvd1Rvb2x0aXBzOiBmYWxzZSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcbiAgICAgICAgICB0ZW1wbGF0ZTogKGQ6IGFueSwgZWxlbWVudDogeyB0aXRsZTogc3RyaW5nIH0pID0+IGA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPiR7ZWxlbWVudC50aXRsZX08L2Rpdj5gXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIC8vIG1pbkhlaWdodDogJzM1MHB4JyxcbiAgICAgICAgLy8gbWF4SGVpZ2h0OiAnODAwcHgnLFxuICAgICAgICB6b29tTWF4OiBPTkVfWUVBUiAqIDIwMDAsIC8vIDIwMDAgeWVhcnNcbiAgICAgICAgem9vbU1pbjogT05FX1lFQVIgLyAxMiwgLy8gYSBtb250aFxuICAgICAgICAvLyB6b29tRnJpY3Rpb246IDhcbiAgICAgIH0sXG4gICAgICBkYXRhU2V0OiB0aGlzLmRhdGFTZXQsXG4gICAgICBfc2V0SW5zdGFuY2U6ICh0aW1lbGluZSkgPT4ge1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmU7XG4gICAgICAgIHRoaXMudGltZWxpbmVMb2FkZWQkLm5leHQoKTtcblxuICAgICAgICAvLyBmaXggY2x1c3RlciB2aXN1YWxpemF0aW9uXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGltZWxpbmUuZml0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnZXRJdGVtVGVtcGxhdGUoZGF0ZXNMYWJlbCwgbGFiZWwpIHtcbiAgICByZXR1cm4gKGBcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlc1wiPlxuICAgICAgICA8ZW0+JHtkYXRlc0xhYmVsfTwvZW0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtsYWJlbH08L2Rpdj5cbiAgICBgKTtcbiAgfVxuXG4gIGdldE1heCgpIHtcbiAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUoX21heCh0aGlzLmdldEFsbERhdGVzKCkpKTtcblxuICAgIGNvbnN0IHllYXIgPSBtYXhEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBtYXhEYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZGF5ID0gbWF4RGF0ZS5nZXREYXRlKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIgKyBZRUFSU19NQVJHSU4sIG1vbnRoLCBkYXkpO1xuICB9XG5cbiAgZ2V0TWluKCkge1xuICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShfbWluKHRoaXMuZ2V0QWxsRGF0ZXMoKSkpO1xuXG4gICAgY29uc3QgeWVhciA9IG1pbkRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IG1pbkRhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBkYXkgPSBtaW5EYXRlLmdldERhdGUoKTtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciAtIFlFQVJTX01BUkdJTiwgbW9udGgsIGRheSk7XG4gIH1cblxuICBnZXRBbGxEYXRlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4udGhpcy5kYXRhU2V0XG4gICAgICAgIC5maWx0ZXIoKHsgc3RhcnQgfSkgPT4gc3RhcnQpXG4gICAgICAgIC5tYXAoKHsgc3RhcnQgfSkgPT4gc3RhcnQpLFxuICAgICAgLi4udGhpcy5kYXRhU2V0XG4gICAgICAgIC5maWx0ZXIoKHsgZW5kIH0pID0+IGVuZClcbiAgICAgICAgLm1hcCgoeyBlbmQgfSkgPT4gZW5kKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==