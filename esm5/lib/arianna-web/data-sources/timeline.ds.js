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
        _this.timelineControlsVisible = false;
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
                    // timeout for zoom controls
                    setTimeout(function () {
                        _this.timelineControlsVisible = true;
                    }, 1000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUM3QixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFFeEI7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUEyR0M7UUF4R1EscUJBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUkvQyw2QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFFN0IsZUFBUyxHQUFHLFVBQUMsSUFBSTtZQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUV4QjtvQkFEQyxVQUFFLEVBQUUsZ0JBQUssRUFBRSxZQUFHLEVBQUUsY0FBSSxFQUFFLGdCQUFLO2dCQUN2QixPQUFBLENBQUM7b0JBQ0wsRUFBRSxJQUFBO29CQUNGLElBQUksTUFBQTtvQkFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUN4RCxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFB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RUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxnQkFDSyxJQUFJLENBQUMsT0FBTzthQUNaLE1BQU0sQ0FBQyxVQUFDLEVBQVM7Z0JBQVAsZ0JBQUs7WUFBTyxPQUFBLEtBQUs7UUFBTCxDQUFLLENBQUM7YUFDNUIsR0FBRyxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUFPLE9BQUEsS0FBSztRQUFMLENBQUssQ0FBQyxFQUN6QixJQUFJLENBQUMsT0FBTzthQUNaLE1BQU0sQ0FBQyxVQUFDLEVBQU87Z0JBQUwsWUFBRztZQUFPLE9BQUEsR0FBRztRQUFILENBQUcsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQyxFQUFPO2dCQUFMLFlBQUc7WUFBTyxPQUFBLEdBQUc7UUFBSCxDQUFHLENBQUMsRUFDeEI7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBM0dELENBQWtDLFVBQVUsR0EyRzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbWF4IGFzIF9tYXgsIG1pbiBhcyBfbWluIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuY29uc3QgT05FX1lFQVIgPSAzMTU1NzYwMDAwMDtcbmNvbnN0IFlFQVJTX01BUkdJTiA9IDMwO1xuXG5leHBvcnQgY2xhc3MgQXdUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyB0aW1lbGluZTtcblxuICBwdWJsaWMgdGltZWxpbmVMb2FkZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgZGF0YVNldDtcblxuICBwdWJsaWMgdGltZWxpbmVDb250cm9sc1Zpc2libGUgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpID0+IHtcbiAgICB0aGlzLmRhdGFTZXQgPSBkYXRhLm1hcCgoe1xuICAgICAgaWQsIHN0YXJ0LCBlbmQsIGl0ZW0sIGxhYmVsXG4gICAgfSkgPT4gKHtcbiAgICAgIGlkLFxuICAgICAgaXRlbSxcbiAgICAgIHN0YXJ0OiBzdGFydCA/IG1vbWVudChzdGFydCkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBudWxsLFxuICAgICAgZW5kOiBlbmQgJiYgZW5kICE9PSBzdGFydCA/IG1vbWVudChlbmQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbCxcbiAgICAgIGNvbnRlbnQ6IHRoaXMuZ2V0SXRlbVRlbXBsYXRlKGxhYmVsLCBpdGVtLmxhYmVsKVxuICAgIH0pKTtcblxuICAgIGNvbnN0IG1heCA9IHRoaXMuZ2V0TWF4KCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5nZXRNaW4oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXJJRDogJ3RpbWVsaW5lLWNvbXBvbmVudCcsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIG1heCxcbiAgICAgICAgbWluLFxuICAgICAgICBzdGFydDogbWluLFxuICAgICAgICBlbmQ6IG1heCxcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICAvLyBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICAgIGxvY2FsZTogJ2l0X0lUJyxcbiAgICAgICAgLy8gY2x1c3Rlcjoge1xuICAgICAgICAvLyBmaXRPbkRvdWJsZUNsaWNrOiB0cnVlLFxuICAgICAgICAvLyBjbHVzdGVyQ3JpdGVyaWE6IChmLCBzKSA9PiBmLmNvbnRlbnQuY2hhckF0KDApID09PSBzLmNvbnRlbnQuY2hhckF0KDApLFxuICAgICAgICAvLyAgIHRpdGxlVGVtcGxhdGU6ICd7Y291bnR9IGV2ZW50aScsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHNob3dDdXJyZW50VGltZTogZmFsc2UsXG4gICAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXG4gICAgICAgICAgdGVtcGxhdGU6IChkOiBhbnksIGVsZW1lbnQ6IHsgdGl0bGU6IHN0cmluZyB9KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxuICAgICAgICB9LFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAvLyBtaW5IZWlnaHQ6ICczNTBweCcsXG4gICAgICAgIC8vIG1heEhlaWdodDogJzgwMHB4JyxcbiAgICAgICAgem9vbU1heDogT05FX1lFQVIgKiAyMDAwLCAvLyAyMDAwIHllYXJzXG4gICAgICAgIHpvb21NaW46IE9ORV9ZRUFSIC8gMTIsIC8vIGEgbW9udGhcbiAgICAgICAgLy8gem9vbUZyaWN0aW9uOiA4XG4gICAgICB9LFxuICAgICAgZGF0YVNldDogdGhpcy5kYXRhU2V0LFxuICAgICAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgICAgICB0aGlzLnRpbWVsaW5lTG9hZGVkJC5uZXh0KCk7XG5cbiAgICAgICAgLy8gZml4IGNsdXN0ZXIgdmlzdWFsaXphdGlvblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnRpbWVsaW5lLmZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aW1lb3V0IGZvciB6b29tIGNvbnRyb2xzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGltZWxpbmVDb250cm9sc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0SXRlbVRlbXBsYXRlKGRhdGVzTGFiZWwsIGxhYmVsKSB7XG4gICAgcmV0dXJuIChgXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXNcIj5cbiAgICAgICAgPGVtPiR7ZGF0ZXNMYWJlbH08L2VtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7bGFiZWx9PC9kaXY+XG4gICAgYCk7XG4gIH1cblxuICBnZXRNYXgoKSB7XG4gICAgY29uc3QgbWF4RGF0ZSA9IG5ldyBEYXRlKF9tYXgodGhpcy5nZXRBbGxEYXRlcygpKSk7XG5cbiAgICBjb25zdCB5ZWFyID0gbWF4RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gbWF4RGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGRheSA9IG1heERhdGUuZ2V0RGF0ZSgpO1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyICsgWUVBUlNfTUFSR0lOLCBtb250aCwgZGF5KTtcbiAgfVxuXG4gIGdldE1pbigpIHtcbiAgICBjb25zdCBtaW5EYXRlID0gbmV3IERhdGUoX21pbih0aGlzLmdldEFsbERhdGVzKCkpKTtcblxuICAgIGNvbnN0IHllYXIgPSBtaW5EYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBtaW5EYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZGF5ID0gbWluRGF0ZS5nZXREYXRlKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIgLSBZRUFSU19NQVJHSU4sIG1vbnRoLCBkYXkpO1xuICB9XG5cbiAgZ2V0QWxsRGF0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnRoaXMuZGF0YVNldFxuICAgICAgICAuZmlsdGVyKCh7IHN0YXJ0IH0pID0+IHN0YXJ0KVxuICAgICAgICAubWFwKCh7IHN0YXJ0IH0pID0+IHN0YXJ0KSxcbiAgICAgIC4uLnRoaXMuZGF0YVNldFxuICAgICAgICAuZmlsdGVyKCh7IGVuZCB9KSA9PiBlbmQpXG4gICAgICAgIC5tYXAoKHsgZW5kIH0pID0+IGVuZClcbiAgICBdO1xuICB9XG59XG4iXX0=