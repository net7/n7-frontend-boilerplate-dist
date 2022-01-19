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
            var disableEndDates = _this.options.configuration.disableEndDates;
            _this.dataSet = data.map(function (_a) {
                var id = _a.id, start = _a.start, end = _a.end, item = _a.item, label = _a.label;
                return ({
                    id: id,
                    item: item,
                    start: start ? moment(start).format('YYYY-MM-DD') : null,
                    end: (end && end !== start && !disableEndDates)
                        ? moment(end).format('YYYY-MM-DD') // show end date
                        : null,
                    content: _this.getItemTemplate(label, item.label),
                    _meta: {
                        dateText: label
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUM3QixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFFeEI7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFpSEM7UUE5R1EscUJBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUkvQyw2QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFFN0IsZUFBUyxHQUFHLFVBQUMsSUFBSTtZQUNqQixJQUFBLDZEQUFlLENBQWdDO1lBQ3ZELEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBRXhCO29CQURDLFVBQUUsRUFBRSxnQkFBSyxFQUFFLFlBQUcsRUFBRSxjQUFJLEVBQUUsZ0JBQUs7Z0JBQ3ZCLE9BQUEsQ0FBQztvQkFDTCxFQUFFLElBQUE7b0JBQ0YsSUFBSSxNQUFBO29CQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3hELEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDO3dCQUM3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T0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLGdCQUNLLElBQUksQ0FBQyxPQUFPO2FBQ1osTUFBTSxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUFPLE9BQUEsS0FBSztRQUFMLENBQUssQ0FBQzthQUM1QixHQUFHLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQU8sT0FBQSxLQUFLO1FBQUwsQ0FBSyxDQUFDLEVBQ3pCLElBQUksQ0FBQyxPQUFPO2FBQ1osTUFBTSxDQUFDLFVBQUMsRUFBTztnQkFBTCxZQUFHO1lBQU8sT0FBQSxHQUFHO1FBQUgsQ0FBRyxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFDLEVBQU87Z0JBQUwsWUFBRztZQUFPLE9BQUEsR0FBRztRQUFILENBQUcsQ0FBQyxFQUN4QjtJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFqSEQsQ0FBa0MsVUFBVSxHQWlIM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgbWF4IGFzIF9tYXgsIG1pbiBhcyBfbWluIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuY29uc3QgT05FX1lFQVIgPSAzMTU1NzYwMDAwMDtcclxuY29uc3QgWUVBUlNfTUFSR0lOID0gMzA7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIHRpbWVsaW5lO1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVMb2FkZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHVibGljIGRhdGFTZXQ7XHJcblxyXG4gIHB1YmxpYyB0aW1lbGluZUNvbnRyb2xzVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHsgZGlzYWJsZUVuZERhdGVzIH0gPSB0aGlzLm9wdGlvbnMuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMuZGF0YVNldCA9IGRhdGEubWFwKCh7XHJcbiAgICAgIGlkLCBzdGFydCwgZW5kLCBpdGVtLCBsYWJlbFxyXG4gICAgfSkgPT4gKHtcclxuICAgICAgaWQsXHJcbiAgICAgIGl0ZW0sXHJcbiAgICAgIHN0YXJ0OiBzdGFydCA/IG1vbWVudChzdGFydCkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBudWxsLFxyXG4gICAgICBlbmQ6IChlbmQgJiYgZW5kICE9PSBzdGFydCAmJiAhZGlzYWJsZUVuZERhdGVzKVxyXG4gICAgICAgID8gbW9tZW50KGVuZCkuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gc2hvdyBlbmQgZGF0ZVxyXG4gICAgICAgIDogbnVsbCwgLy8gaGlkZSBlbmQgZGF0ZVxyXG4gICAgICBjb250ZW50OiB0aGlzLmdldEl0ZW1UZW1wbGF0ZShsYWJlbCwgaXRlbS5sYWJlbCksXHJcbiAgICAgIF9tZXRhOiB7XHJcbiAgICAgICAgZGF0ZVRleHQ6IGxhYmVsXHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuXHJcbiAgICBjb25zdCBtYXggPSB0aGlzLmdldE1heCgpO1xyXG4gICAgY29uc3QgbWluID0gdGhpcy5nZXRNaW4oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb250YWluZXJJRDogJ3RpbWVsaW5lLWNvbXBvbmVudCcsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICBtYXgsXHJcbiAgICAgICAgbWluLFxyXG4gICAgICAgIHN0YXJ0OiBtaW4sXHJcbiAgICAgICAgZW5kOiBtYXgsXHJcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDBweCcsXHJcbiAgICAgICAgLy8gaGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgICAgIGxvY2FsZTogJ2l0X0lUJyxcclxuICAgICAgICAvLyBjbHVzdGVyOiB7XHJcbiAgICAgICAgLy8gZml0T25Eb3VibGVDbGljazogdHJ1ZSxcclxuICAgICAgICAvLyBjbHVzdGVyQ3JpdGVyaWE6IChmLCBzKSA9PiBmLmNvbnRlbnQuY2hhckF0KDApID09PSBzLmNvbnRlbnQuY2hhckF0KDApLFxyXG4gICAgICAgIC8vICAgdGl0bGVUZW1wbGF0ZTogJ3tjb3VudH0gZXZlbnRpJyxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIHNob3dDdXJyZW50VGltZTogZmFsc2UsXHJcbiAgICAgICAgc2hvd1Rvb2x0aXBzOiBmYWxzZSxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogKGQ6IGFueSwgZWxlbWVudDogeyB0aXRsZTogc3RyaW5nIH0pID0+IGA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPiR7ZWxlbWVudC50aXRsZX08L2Rpdj5gXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIC8vIG1pbkhlaWdodDogJzM1MHB4JyxcclxuICAgICAgICAvLyBtYXhIZWlnaHQ6ICc4MDBweCcsXHJcbiAgICAgICAgem9vbU1heDogT05FX1lFQVIgKiAyMDAwLCAvLyAyMDAwIHllYXJzXHJcbiAgICAgICAgem9vbU1pbjogT05FX1lFQVIgLyAxMiwgLy8gYSBtb250aFxyXG4gICAgICAgIC8vIHpvb21GcmljdGlvbjogOFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhU2V0OiB0aGlzLmRhdGFTZXQsXHJcbiAgICAgIF9zZXRJbnN0YW5jZTogKHRpbWVsaW5lKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xyXG4gICAgICAgIHRoaXMudGltZWxpbmVMb2FkZWQkLm5leHQoKTtcclxuXHJcbiAgICAgICAgLy8gZml4IGNsdXN0ZXIgdmlzdWFsaXphdGlvblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy50aW1lbGluZS5maXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGltZW91dCBmb3Igem9vbSBjb250cm9sc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy50aW1lbGluZUNvbnRyb2xzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtVGVtcGxhdGUoZGF0ZXNMYWJlbCwgbGFiZWwpIHtcclxuICAgIHJldHVybiAoYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXNcIj5cclxuICAgICAgICA8ZW0+JHtkYXRlc0xhYmVsfTwvZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7bGFiZWx9PC9kaXY+XHJcbiAgICBgKTtcclxuICB9XHJcblxyXG4gIGdldE1heCgpIHtcclxuICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShfbWF4KHRoaXMuZ2V0QWxsRGF0ZXMoKSkpO1xyXG5cclxuICAgIGNvbnN0IHllYXIgPSBtYXhEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG1heERhdGUuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGRheSA9IG1heERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIgKyBZRUFSU19NQVJHSU4sIG1vbnRoLCBkYXkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWluKCkge1xyXG4gICAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKF9taW4odGhpcy5nZXRBbGxEYXRlcygpKSk7XHJcblxyXG4gICAgY29uc3QgeWVhciA9IG1pbkRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbWluRGF0ZS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgZGF5ID0gbWluRGF0ZS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciAtIFlFQVJTX01BUkdJTiwgbW9udGgsIGRheSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxEYXRlcygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIC4uLnRoaXMuZGF0YVNldFxyXG4gICAgICAgIC5maWx0ZXIoKHsgc3RhcnQgfSkgPT4gc3RhcnQpXHJcbiAgICAgICAgLm1hcCgoeyBzdGFydCB9KSA9PiBzdGFydCksXHJcbiAgICAgIC4uLnRoaXMuZGF0YVNldFxyXG4gICAgICAgIC5maWx0ZXIoKHsgZW5kIH0pID0+IGVuZClcclxuICAgICAgICAubWFwKCh7IGVuZCB9KSA9PiBlbmQpXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG4iXX0=