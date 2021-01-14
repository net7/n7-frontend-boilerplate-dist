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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUM3QixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFFeEI7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUEyR0M7UUF4R1EscUJBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUkvQyw2QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFFN0IsZUFBUyxHQUFHLFVBQUMsSUFBSTtZQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUV4QjtvQkFEQyxVQUFFLEVBQUUsZ0JBQUssRUFBRSxZQUFHLEVBQUUsY0FBSSxFQUFFLGdCQUFLO2dCQUN2QixPQUFBLENBQUM7b0JBQ0wsRUFBRSxJQUFBO29CQUNGLElBQUksTUFBQTtvQkFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUN4RCxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFB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RUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxnQkFDSyxJQUFJLENBQUMsT0FBTzthQUNaLE1BQU0sQ0FBQyxVQUFDLEVBQVM7Z0JBQVAsZ0JBQUs7WUFBTyxPQUFBLEtBQUs7UUFBTCxDQUFLLENBQUM7YUFDNUIsR0FBRyxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUFPLE9BQUEsS0FBSztRQUFMLENBQUssQ0FBQyxFQUN6QixJQUFJLENBQUMsT0FBTzthQUNaLE1BQU0sQ0FBQyxVQUFDLEVBQU87Z0JBQUwsWUFBRztZQUFPLE9BQUEsR0FBRztRQUFILENBQUcsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQyxFQUFPO2dCQUFMLFlBQUc7WUFBTyxPQUFBLEdBQUc7UUFBSCxDQUFHLENBQUMsRUFDeEI7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBM0dELENBQWtDLFVBQVUsR0EyRzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IG1heCBhcyBfbWF4LCBtaW4gYXMgX21pbiB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmNvbnN0IE9ORV9ZRUFSID0gMzE1NTc2MDAwMDA7XHJcbmNvbnN0IFlFQVJTX01BUkdJTiA9IDMwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3VGltZWxpbmVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyB0aW1lbGluZTtcclxuXHJcbiAgcHVibGljIHRpbWVsaW5lTG9hZGVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBkYXRhU2V0O1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVDb250cm9sc1Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiB7XHJcbiAgICB0aGlzLmRhdGFTZXQgPSBkYXRhLm1hcCgoe1xyXG4gICAgICBpZCwgc3RhcnQsIGVuZCwgaXRlbSwgbGFiZWxcclxuICAgIH0pID0+ICh7XHJcbiAgICAgIGlkLFxyXG4gICAgICBpdGVtLFxyXG4gICAgICBzdGFydDogc3RhcnQgPyBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbCxcclxuICAgICAgZW5kOiBlbmQgJiYgZW5kICE9PSBzdGFydCA/IG1vbWVudChlbmQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbCxcclxuICAgICAgY29udGVudDogdGhpcy5nZXRJdGVtVGVtcGxhdGUobGFiZWwsIGl0ZW0ubGFiZWwpXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgbWF4ID0gdGhpcy5nZXRNYXgoKTtcclxuICAgIGNvbnN0IG1pbiA9IHRoaXMuZ2V0TWluKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGFpbmVySUQ6ICd0aW1lbGluZS1jb21wb25lbnQnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgbWF4LFxyXG4gICAgICAgIG1pbixcclxuICAgICAgICBzdGFydDogbWluLFxyXG4gICAgICAgIGVuZDogbWF4LFxyXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgICAgIC8vIGhlaWdodDogJzEwMHB4JyxcclxuICAgICAgICBsb2NhbGU6ICdpdF9JVCcsXHJcbiAgICAgICAgLy8gY2x1c3Rlcjoge1xyXG4gICAgICAgIC8vIGZpdE9uRG91YmxlQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgLy8gY2x1c3RlckNyaXRlcmlhOiAoZiwgcykgPT4gZi5jb250ZW50LmNoYXJBdCgwKSA9PT0gcy5jb250ZW50LmNoYXJBdCgwKSxcclxuICAgICAgICAvLyAgIHRpdGxlVGVtcGxhdGU6ICd7Y291bnR9IGV2ZW50aScsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBzaG93Q3VycmVudFRpbWU6IGZhbHNlLFxyXG4gICAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZm9sbG93TW91c2U6IGZhbHNlLFxyXG4gICAgICAgICAgdGVtcGxhdGU6IChkOiBhbnksIGVsZW1lbnQ6IHsgdGl0bGU6IHN0cmluZyB9KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAvLyBtaW5IZWlnaHQ6ICczNTBweCcsXHJcbiAgICAgICAgLy8gbWF4SGVpZ2h0OiAnODAwcHgnLFxyXG4gICAgICAgIHpvb21NYXg6IE9ORV9ZRUFSICogMjAwMCwgLy8gMjAwMCB5ZWFyc1xyXG4gICAgICAgIHpvb21NaW46IE9ORV9ZRUFSIC8gMTIsIC8vIGEgbW9udGhcclxuICAgICAgICAvLyB6b29tRnJpY3Rpb246IDhcclxuICAgICAgfSxcclxuICAgICAgZGF0YVNldDogdGhpcy5kYXRhU2V0LFxyXG4gICAgICBfc2V0SW5zdGFuY2U6ICh0aW1lbGluZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcclxuICAgICAgICB0aGlzLnRpbWVsaW5lTG9hZGVkJC5uZXh0KCk7XHJcblxyXG4gICAgICAgIC8vIGZpeCBjbHVzdGVyIHZpc3VhbGl6YXRpb25cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudGltZWxpbmUuZml0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRpbWVvdXQgZm9yIHpvb20gY29udHJvbHNcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudGltZWxpbmVDb250cm9sc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbVRlbXBsYXRlKGRhdGVzTGFiZWwsIGxhYmVsKSB7XHJcbiAgICByZXR1cm4gKGBcclxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVzXCI+XHJcbiAgICAgICAgPGVtPiR7ZGF0ZXNMYWJlbH08L2VtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke2xhYmVsfTwvZGl2PlxyXG4gICAgYCk7XHJcbiAgfVxyXG5cclxuICBnZXRNYXgoKSB7XHJcbiAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUoX21heCh0aGlzLmdldEFsbERhdGVzKCkpKTtcclxuXHJcbiAgICBjb25zdCB5ZWFyID0gbWF4RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBtYXhEYXRlLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkYXkgPSBtYXhEYXRlLmdldERhdGUoKTtcclxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyICsgWUVBUlNfTUFSR0lOLCBtb250aCwgZGF5KTtcclxuICB9XHJcblxyXG4gIGdldE1pbigpIHtcclxuICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShfbWluKHRoaXMuZ2V0QWxsRGF0ZXMoKSkpO1xyXG5cclxuICAgIGNvbnN0IHllYXIgPSBtaW5EYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG1pbkRhdGUuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGRheSA9IG1pbkRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIgLSBZRUFSU19NQVJHSU4sIG1vbnRoLCBkYXkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsRGF0ZXMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAuLi50aGlzLmRhdGFTZXRcclxuICAgICAgICAuZmlsdGVyKCh7IHN0YXJ0IH0pID0+IHN0YXJ0KVxyXG4gICAgICAgIC5tYXAoKHsgc3RhcnQgfSkgPT4gc3RhcnQpLFxyXG4gICAgICAuLi50aGlzLmRhdGFTZXRcclxuICAgICAgICAuZmlsdGVyKCh7IGVuZCB9KSA9PiBlbmQpXHJcbiAgICAgICAgLm1hcCgoeyBlbmQgfSkgPT4gZW5kKVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuIl19