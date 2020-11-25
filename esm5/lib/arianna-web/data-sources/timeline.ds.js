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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUM3QixJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFFeEI7SUFBa0MsZ0NBQVU7SUFBNUM7UUFBQSxxRUFvR0M7UUFqR1EscUJBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUk1QyxlQUFTLEdBQUcsVUFBQyxJQUFJO1lBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBRXhCO29CQURDLFVBQUUsRUFBRSxnQkFBSyxFQUFFLFlBQUcsRUFBRSxjQUFJLEVBQUUsZ0JBQUs7Z0JBQ3ZCLE9BQUEsQ0FBQztvQkFDTCxFQUFFLElBQUE7b0JBQ0YsSUFBSSxNQUFBO29CQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3hELEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtv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LE9BQU87YUFDWixNQUFNLENBQUMsVUFBQyxFQUFTO2dCQUFQLGdCQUFLO1lBQU8sT0FBQSxLQUFLO1FBQUwsQ0FBSyxDQUFDO2FBQzVCLEdBQUcsQ0FBQyxVQUFDLEVBQVM7Z0JBQVAsZ0JBQUs7WUFBTyxPQUFBLEtBQUs7UUFBTCxDQUFLLENBQUMsRUFDekIsSUFBSSxDQUFDLE9BQU87YUFDWixNQUFNLENBQUMsVUFBQyxFQUFPO2dCQUFMLFlBQUc7WUFBTyxPQUFBLEdBQUc7UUFBSCxDQUFHLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUMsRUFBTztnQkFBTCxZQUFHO1lBQU8sT0FBQSxHQUFHO1FBQUgsQ0FBRyxDQUFDLEVBQ3hCO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXBHRCxDQUFrQyxVQUFVLEdBb0czQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBtYXggYXMgX21heCwgbWluIGFzIF9taW4gfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5jb25zdCBPTkVfWUVBUiA9IDMxNTU3NjAwMDAwO1xyXG5jb25zdCBZRUFSU19NQVJHSU4gPSAzMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1RpbWVsaW5lRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwdWJsaWMgdGltZWxpbmU7XHJcblxyXG4gIHB1YmxpYyB0aW1lbGluZUxvYWRlZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgZGF0YVNldDtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKSA9PiB7XHJcbiAgICB0aGlzLmRhdGFTZXQgPSBkYXRhLm1hcCgoe1xyXG4gICAgICBpZCwgc3RhcnQsIGVuZCwgaXRlbSwgbGFiZWxcclxuICAgIH0pID0+ICh7XHJcbiAgICAgIGlkLFxyXG4gICAgICBpdGVtLFxyXG4gICAgICBzdGFydDogc3RhcnQgPyBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbCxcclxuICAgICAgZW5kOiBlbmQgJiYgZW5kICE9PSBzdGFydCA/IG1vbWVudChlbmQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbCxcclxuICAgICAgY29udGVudDogdGhpcy5nZXRJdGVtVGVtcGxhdGUobGFiZWwsIGl0ZW0ubGFiZWwpXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgbWF4ID0gdGhpcy5nZXRNYXgoKTtcclxuICAgIGNvbnN0IG1pbiA9IHRoaXMuZ2V0TWluKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGFpbmVySUQ6ICd0aW1lbGluZS1jb21wb25lbnQnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgbWF4LFxyXG4gICAgICAgIG1pbixcclxuICAgICAgICBzdGFydDogbWluLFxyXG4gICAgICAgIGVuZDogbWF4LFxyXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgICAgIC8vIGhlaWdodDogJzEwMHB4JyxcclxuICAgICAgICBsb2NhbGU6ICdpdF9JVCcsXHJcbiAgICAgICAgLy8gY2x1c3Rlcjoge1xyXG4gICAgICAgICAgLy8gZml0T25Eb3VibGVDbGljazogdHJ1ZSxcclxuICAgICAgICAgIC8vIGNsdXN0ZXJDcml0ZXJpYTogKGYsIHMpID0+IGYuY29udGVudC5jaGFyQXQoMCkgPT09IHMuY29udGVudC5jaGFyQXQoMCksXHJcbiAgICAgICAgLy8gICB0aXRsZVRlbXBsYXRlOiAne2NvdW50fSBldmVudGknLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgc2hvd0N1cnJlbnRUaW1lOiBmYWxzZSxcclxuICAgICAgICBzaG93VG9vbHRpcHM6IGZhbHNlLFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcclxuICAgICAgICAgIHRlbXBsYXRlOiAoZDogYW55LCBlbGVtZW50OiB7IHRpdGxlOiBzdHJpbmcgfSkgPT4gYDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+JHtlbGVtZW50LnRpdGxlfTwvZGl2PmBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgLy8gbWluSGVpZ2h0OiAnMzUwcHgnLFxyXG4gICAgICAgIC8vIG1heEhlaWdodDogJzgwMHB4JyxcclxuICAgICAgICB6b29tTWF4OiBPTkVfWUVBUiAqIDIwMDAsIC8vIDIwMDAgeWVhcnNcclxuICAgICAgICB6b29tTWluOiBPTkVfWUVBUiAvIDEyLCAvLyBhIG1vbnRoXHJcbiAgICAgICAgLy8gem9vbUZyaWN0aW9uOiA4XHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGFTZXQ6IHRoaXMuZGF0YVNldCxcclxuICAgICAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHtcclxuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmU7XHJcbiAgICAgICAgdGhpcy50aW1lbGluZUxvYWRlZCQubmV4dCgpO1xyXG5cclxuICAgICAgICAvLyBmaXggY2x1c3RlciB2aXN1YWxpemF0aW9uXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRpbWVsaW5lLmZpdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbVRlbXBsYXRlKGRhdGVzTGFiZWwsIGxhYmVsKSB7XHJcbiAgICByZXR1cm4gKGBcclxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVzXCI+XHJcbiAgICAgICAgPGVtPiR7ZGF0ZXNMYWJlbH08L2VtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke2xhYmVsfTwvZGl2PlxyXG4gICAgYCk7XHJcbiAgfVxyXG5cclxuICBnZXRNYXgoKSB7XHJcbiAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUoX21heCh0aGlzLmdldEFsbERhdGVzKCkpKTtcclxuXHJcbiAgICBjb25zdCB5ZWFyID0gbWF4RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBtYXhEYXRlLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkYXkgPSBtYXhEYXRlLmdldERhdGUoKTtcclxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyICsgWUVBUlNfTUFSR0lOLCBtb250aCwgZGF5KTtcclxuICB9XHJcblxyXG4gIGdldE1pbigpIHtcclxuICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShfbWluKHRoaXMuZ2V0QWxsRGF0ZXMoKSkpO1xyXG5cclxuICAgIGNvbnN0IHllYXIgPSBtaW5EYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG1pbkRhdGUuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGRheSA9IG1pbkRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIgLSBZRUFSU19NQVJHSU4sIG1vbnRoLCBkYXkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsRGF0ZXMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAuLi50aGlzLmRhdGFTZXRcclxuICAgICAgICAuZmlsdGVyKCh7IHN0YXJ0IH0pID0+IHN0YXJ0KVxyXG4gICAgICAgIC5tYXAoKHsgc3RhcnQgfSkgPT4gc3RhcnQpLFxyXG4gICAgICAuLi50aGlzLmRhdGFTZXRcclxuICAgICAgICAuZmlsdGVyKCh7IGVuZCB9KSA9PiBlbmQpXHJcbiAgICAgICAgLm1hcCgoeyBlbmQgfSkgPT4gZW5kKVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuIl19