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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUM3QixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFFeEI7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUE4R0M7UUEzR1EscUJBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUkvQyw2QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFFN0IsZUFBUyxHQUFHLFVBQUMsSUFBSTtZQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUV4QjtvQkFEQyxVQUFFLEVBQUUsZ0JBQUssRUFBRSxZQUFHLEVBQUUsY0FBSSxFQUFFLGdCQUFLO2dCQUN2QixPQUFBLENBQUM7b0JBQ0wsRUFBRSxJQUFBO29CQUNGLElBQUksTUFBQTtvQkFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUN4RCxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFB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QUUsQ0FBQztRQUNqQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLGdCQUNLLElBQUksQ0FBQyxPQUFPO2FBQ1osTUFBTSxDQUFDLFVBQUMsRUFBUztnQkFBUCxnQkFBSztZQUFPLE9BQUEsS0FBSztRQUFMLENBQUssQ0FBQzthQUM1QixHQUFHLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQU8sT0FBQSxLQUFLO1FBQUwsQ0FBSyxDQUFDLEVBQ3pCLElBQUksQ0FBQyxPQUFPO2FBQ1osTUFBTSxDQUFDLFVBQUMsRUFBTztnQkFBTCxZQUFHO1lBQU8sT0FBQSxHQUFHO1FBQUgsQ0FBRyxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFDLEVBQU87Z0JBQUwsWUFBRztZQUFPLE9BQUEsR0FBRztRQUFILENBQUcsQ0FBQyxFQUN4QjtJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUE5R0QsQ0FBa0MsVUFBVSxHQThHM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBtYXggYXMgX21heCwgbWluIGFzIF9taW4gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBPTkVfWUVBUiA9IDMxNTU3NjAwMDAwO1xuY29uc3QgWUVBUlNfTUFSR0lOID0gMzA7XG5cbmV4cG9ydCBjbGFzcyBBd1RpbWVsaW5lRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIHRpbWVsaW5lO1xuXG4gIHB1YmxpYyB0aW1lbGluZUxvYWRlZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBkYXRhU2V0O1xuXG4gIHB1YmxpYyB0aW1lbGluZUNvbnRyb2xzVmlzaWJsZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuZGF0YVNldCA9IGRhdGEubWFwKCh7XG4gICAgICBpZCwgc3RhcnQsIGVuZCwgaXRlbSwgbGFiZWxcbiAgICB9KSA9PiAoe1xuICAgICAgaWQsXG4gICAgICBpdGVtLFxuICAgICAgc3RhcnQ6IHN0YXJ0ID8gbW9tZW50KHN0YXJ0KS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IG51bGwsXG4gICAgICBlbmQ6IGVuZCAmJiBlbmQgIT09IHN0YXJ0ID8gbW9tZW50KGVuZCkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBudWxsLFxuICAgICAgY29udGVudDogdGhpcy5nZXRJdGVtVGVtcGxhdGUobGFiZWwsIGl0ZW0ubGFiZWwpLFxuICAgICAgX21ldGE6IHtcbiAgICAgICAgZGF0ZVRleHQ6IGxhYmVsXG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgY29uc3QgbWF4ID0gdGhpcy5nZXRNYXgoKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLmdldE1pbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcklEOiAndGltZWxpbmUtY29tcG9uZW50JyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIHN0YXJ0OiBtaW4sXG4gICAgICAgIGVuZDogbWF4LFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDBweCcsXG4gICAgICAgIC8vIGhlaWdodDogJzEwMHB4JyxcbiAgICAgICAgbG9jYWxlOiAnaXRfSVQnLFxuICAgICAgICAvLyBjbHVzdGVyOiB7XG4gICAgICAgIC8vIGZpdE9uRG91YmxlQ2xpY2s6IHRydWUsXG4gICAgICAgIC8vIGNsdXN0ZXJDcml0ZXJpYTogKGYsIHMpID0+IGYuY29udGVudC5jaGFyQXQoMCkgPT09IHMuY29udGVudC5jaGFyQXQoMCksXG4gICAgICAgIC8vICAgdGl0bGVUZW1wbGF0ZTogJ3tjb3VudH0gZXZlbnRpJyxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgc2hvd0N1cnJlbnRUaW1lOiBmYWxzZSxcbiAgICAgICAgc2hvd1Rvb2x0aXBzOiBmYWxzZSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcbiAgICAgICAgICB0ZW1wbGF0ZTogKGQ6IGFueSwgZWxlbWVudDogeyB0aXRsZTogc3RyaW5nIH0pID0+IGA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPiR7ZWxlbWVudC50aXRsZX08L2Rpdj5gXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIC8vIG1pbkhlaWdodDogJzM1MHB4JyxcbiAgICAgICAgLy8gbWF4SGVpZ2h0OiAnODAwcHgnLFxuICAgICAgICB6b29tTWF4OiBPTkVfWUVBUiAqIDIwMDAsIC8vIDIwMDAgeWVhcnNcbiAgICAgICAgem9vbU1pbjogT05FX1lFQVIgLyAxMiwgLy8gYSBtb250aFxuICAgICAgICAvLyB6b29tRnJpY3Rpb246IDhcbiAgICAgIH0sXG4gICAgICBkYXRhU2V0OiB0aGlzLmRhdGFTZXQsXG4gICAgICBfc2V0SW5zdGFuY2U6ICh0aW1lbGluZSkgPT4ge1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmU7XG4gICAgICAgIHRoaXMudGltZWxpbmVMb2FkZWQkLm5leHQoKTtcblxuICAgICAgICAvLyBmaXggY2x1c3RlciB2aXN1YWxpemF0aW9uXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGltZWxpbmUuZml0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRpbWVvdXQgZm9yIHpvb20gY29udHJvbHNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy50aW1lbGluZUNvbnRyb2xzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnZXRJdGVtVGVtcGxhdGUoZGF0ZXNMYWJlbCwgbGFiZWwpIHtcbiAgICByZXR1cm4gKGBcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlc1wiPlxuICAgICAgICA8ZW0+JHtkYXRlc0xhYmVsfTwvZW0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtsYWJlbH08L2Rpdj5cbiAgICBgKTtcbiAgfVxuXG4gIGdldE1heCgpIHtcbiAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUoX21heCh0aGlzLmdldEFsbERhdGVzKCkpKTtcblxuICAgIGNvbnN0IHllYXIgPSBtYXhEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBtYXhEYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZGF5ID0gbWF4RGF0ZS5nZXREYXRlKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIgKyBZRUFSU19NQVJHSU4sIG1vbnRoLCBkYXkpO1xuICB9XG5cbiAgZ2V0TWluKCkge1xuICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShfbWluKHRoaXMuZ2V0QWxsRGF0ZXMoKSkpO1xuXG4gICAgY29uc3QgeWVhciA9IG1pbkRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IG1pbkRhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBkYXkgPSBtaW5EYXRlLmdldERhdGUoKTtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciAtIFlFQVJTX01BUkdJTiwgbW9udGgsIGRheSk7XG4gIH1cblxuICBnZXRBbGxEYXRlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4udGhpcy5kYXRhU2V0XG4gICAgICAgIC5maWx0ZXIoKHsgc3RhcnQgfSkgPT4gc3RhcnQpXG4gICAgICAgIC5tYXAoKHsgc3RhcnQgfSkgPT4gc3RhcnQpLFxuICAgICAgLi4udGhpcy5kYXRhU2V0XG4gICAgICAgIC5maWx0ZXIoKHsgZW5kIH0pID0+IGVuZClcbiAgICAgICAgLm1hcCgoeyBlbmQgfSkgPT4gZW5kKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==