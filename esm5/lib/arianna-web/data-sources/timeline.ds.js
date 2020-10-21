import { __extends, __read, __spread } from "tslib";
import { DataSource } from '@n7-frontend/core';
import * as moment from 'moment';
import { max as _max, min as _min } from 'lodash';
import { Subject } from 'rxjs';
var ONE_YEAR = 31557600000;
var YEARS_MARGIN = 100;
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
                    cluster: {
                        // fitOnDoubleClick: true,
                        // clusterCriteria: (f, s) => f.content.charAt(0) === s.content.charAt(0),
                        titleTemplate: '{count} eventi',
                    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUM3QixJQUFNLFlBQVksR0FBRyxHQUFHLENBQUM7QUFFekI7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFvR0M7UUFqR1EscUJBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUk1QyxlQUFTLEdBQUcsVUFBQyxJQUFJO1lBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBRXhCO29CQURDLFVBQUUsRUFBRSxnQkFBSyxFQUFFLFlBQUcsRUFBRSxjQUFJLEVBQUUsZ0JBQUs7Z0JBQ3ZCLE9BQUEsQ0FBQztvQkFDTCxFQUFFLElBQUE7b0JBQ0YsSUFBSSxNQUFBO29CQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3hELEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtv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LElBQUksQ0FBQyxPQUFPO2FBQ1osTUFBTSxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUFPLE9BQUEsS0FBSztRQUFMLENBQUssQ0FBQzthQUM1QixHQUFHLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQU8sT0FBQSxLQUFLO1FBQUwsQ0FBSyxDQUFDLEVBQ3pCLElBQUksQ0FBQyxPQUFPO2FBQ1osTUFBTSxDQUFDLFVBQUMsRUFBTztnQkFBTCxZQUFHO1lBQU8sT0FBQSxHQUFHO1FBQUgsQ0FBRyxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFDLEVBQU87Z0JBQUwsWUFBRztZQUFPLE9BQUEsR0FBRztRQUFILENBQUcsQ0FBQyxFQUN4QjtJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFwR0QsQ0FBa0MsVUFBVSxHQW9HM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBtYXggYXMgX21heCwgbWluIGFzIF9taW4gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBPTkVfWUVBUiA9IDMxNTU3NjAwMDAwO1xuY29uc3QgWUVBUlNfTUFSR0lOID0gMTAwO1xuXG5leHBvcnQgY2xhc3MgQXdUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyB0aW1lbGluZTtcblxuICBwdWJsaWMgdGltZWxpbmVMb2FkZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgZGF0YVNldDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpID0+IHtcbiAgICB0aGlzLmRhdGFTZXQgPSBkYXRhLm1hcCgoe1xuICAgICAgaWQsIHN0YXJ0LCBlbmQsIGl0ZW0sIGxhYmVsXG4gICAgfSkgPT4gKHtcbiAgICAgIGlkLFxuICAgICAgaXRlbSxcbiAgICAgIHN0YXJ0OiBzdGFydCA/IG1vbWVudChzdGFydCkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBudWxsLFxuICAgICAgZW5kOiBlbmQgJiYgZW5kICE9PSBzdGFydCA/IG1vbWVudChlbmQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbCxcbiAgICAgIGNvbnRlbnQ6IHRoaXMuZ2V0SXRlbVRlbXBsYXRlKGxhYmVsLCBpdGVtLmxhYmVsKVxuICAgIH0pKTtcblxuICAgIGNvbnN0IG1heCA9IHRoaXMuZ2V0TWF4KCk7XG4gICAgY29uc3QgbWluID0gdGhpcy5nZXRNaW4oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXJJRDogJ3RpbWVsaW5lLWNvbXBvbmVudCcsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIG1heCxcbiAgICAgICAgbWluLFxuICAgICAgICBzdGFydDogbWluLFxuICAgICAgICBlbmQ6IG1heCxcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICAvLyBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICAgIGxvY2FsZTogJ2l0X0lUJyxcbiAgICAgICAgY2x1c3Rlcjoge1xuICAgICAgICAgIC8vIGZpdE9uRG91YmxlQ2xpY2s6IHRydWUsXG4gICAgICAgICAgLy8gY2x1c3RlckNyaXRlcmlhOiAoZiwgcykgPT4gZi5jb250ZW50LmNoYXJBdCgwKSA9PT0gcy5jb250ZW50LmNoYXJBdCgwKSxcbiAgICAgICAgICB0aXRsZVRlbXBsYXRlOiAne2NvdW50fSBldmVudGknLFxuICAgICAgICB9LFxuICAgICAgICBzaG93Q3VycmVudFRpbWU6IGZhbHNlLFxuICAgICAgICBzaG93VG9vbHRpcHM6IGZhbHNlLFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgZm9sbG93TW91c2U6IGZhbHNlLFxuICAgICAgICAgIHRlbXBsYXRlOiAoZDogYW55LCBlbGVtZW50OiB7IHRpdGxlOiBzdHJpbmcgfSkgPT4gYDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+JHtlbGVtZW50LnRpdGxlfTwvZGl2PmBcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgLy8gbWluSGVpZ2h0OiAnMzUwcHgnLFxuICAgICAgICAvLyBtYXhIZWlnaHQ6ICc4MDBweCcsXG4gICAgICAgIHpvb21NYXg6IE9ORV9ZRUFSICogMjAwMCwgLy8gMjAwMCB5ZWFyc1xuICAgICAgICB6b29tTWluOiBPTkVfWUVBUiAvIDEyLCAvLyBhIG1vbnRoXG4gICAgICAgIC8vIHpvb21GcmljdGlvbjogOFxuICAgICAgfSxcbiAgICAgIGRhdGFTZXQ6IHRoaXMuZGF0YVNldCxcbiAgICAgIF9zZXRJbnN0YW5jZTogKHRpbWVsaW5lKSA9PiB7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcbiAgICAgICAgdGhpcy50aW1lbGluZUxvYWRlZCQubmV4dCgpO1xuXG4gICAgICAgIC8vIGZpeCBjbHVzdGVyIHZpc3VhbGl6YXRpb25cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy50aW1lbGluZS5maXQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdldEl0ZW1UZW1wbGF0ZShkYXRlc0xhYmVsLCBsYWJlbCkge1xuICAgIHJldHVybiAoYFxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVzXCI+XG4gICAgICAgIDxlbT4ke2RhdGVzTGFiZWx9PC9lbT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke2xhYmVsfTwvZGl2PlxuICAgIGApO1xuICB9XG5cbiAgZ2V0TWF4KCkge1xuICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShfbWF4KHRoaXMuZ2V0QWxsRGF0ZXMoKSkpO1xuXG4gICAgY29uc3QgeWVhciA9IG1heERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IG1heERhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBkYXkgPSBtYXhEYXRlLmdldERhdGUoKTtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciArIFlFQVJTX01BUkdJTiwgbW9udGgsIGRheSk7XG4gIH1cblxuICBnZXRNaW4oKSB7XG4gICAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKF9taW4odGhpcy5nZXRBbGxEYXRlcygpKSk7XG5cbiAgICBjb25zdCB5ZWFyID0gbWluRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gbWluRGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGRheSA9IG1pbkRhdGUuZ2V0RGF0ZSgpO1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyIC0gWUVBUlNfTUFSR0lOLCBtb250aCwgZGF5KTtcbiAgfVxuXG4gIGdldEFsbERhdGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi50aGlzLmRhdGFTZXRcbiAgICAgICAgLmZpbHRlcigoeyBzdGFydCB9KSA9PiBzdGFydClcbiAgICAgICAgLm1hcCgoeyBzdGFydCB9KSA9PiBzdGFydCksXG4gICAgICAuLi50aGlzLmRhdGFTZXRcbiAgICAgICAgLmZpbHRlcigoeyBlbmQgfSkgPT4gZW5kKVxuICAgICAgICAubWFwKCh7IGVuZCB9KSA9PiBlbmQpXG4gICAgXTtcbiAgfVxufVxuIl19