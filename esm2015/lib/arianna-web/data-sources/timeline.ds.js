import { DataSource } from '@n7-frontend/core';
import * as moment from 'moment';
import { max as _max, min as _min } from 'lodash';
import { Subject } from 'rxjs';
const ONE_YEAR = 31557600000;
const YEARS_MARGIN = 30;
export class AwTimelineDS extends DataSource {
    constructor() {
        super(...arguments);
        this.timelineLoaded$ = new Subject();
        this.timelineControlsVisible = false;
        this.transform = (data) => {
            this.dataSet = data.map(({ id, start, end, item, label }) => ({
                id,
                item,
                start: start ? moment(start).format('YYYY-MM-DD') : null,
                end: end && end !== start ? moment(end).format('YYYY-MM-DD') : null,
                content: this.getItemTemplate(label, item.label),
                _meta: {
                    dateText: label
                }
            }));
            const max = this.getMax();
            const min = this.getMin();
            return {
                containerID: 'timeline-component',
                libOptions: {
                    max,
                    min,
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
                        template: (d, element) => `<div class="tooltip">${element.title}</div>`
                    },
                    width: '100%',
                    // minHeight: '350px',
                    // maxHeight: '800px',
                    zoomMax: ONE_YEAR * 2000,
                    zoomMin: ONE_YEAR / 12,
                },
                dataSet: this.dataSet,
                _setInstance: (timeline) => {
                    this.timeline = timeline;
                    this.timelineLoaded$.next();
                    // fix cluster visualization
                    setTimeout(() => {
                        this.timeline.fit();
                    });
                    // timeout for zoom controls
                    setTimeout(() => {
                        this.timelineControlsVisible = true;
                    }, 1000);
                }
            };
        };
    }
    getItemTemplate(datesLabel, label) {
        return (`
      <div class="dates">
        <em>${datesLabel}</em>
      </div>
      <div class="content">${label}</div>
    `);
    }
    getMax() {
        const maxDate = new Date(_max(this.getAllDates()));
        const year = maxDate.getFullYear();
        const month = maxDate.getMonth();
        const day = maxDate.getDate();
        return new Date(year + YEARS_MARGIN, month, day);
    }
    getMin() {
        const minDate = new Date(_min(this.getAllDates()));
        const year = minDate.getFullYear();
        const month = minDate.getMonth();
        const day = minDate.getDate();
        return new Date(year - YEARS_MARGIN, month, day);
    }
    getAllDates() {
        return [
            ...this.dataSet
                .filter(({ start }) => start)
                .map(({ start }) => start),
            ...this.dataSet
                .filter(({ end }) => end)
                .map(({ end }) => end)
        ];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDO0FBQzdCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUV4QixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFBNUM7O1FBR1Msb0JBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUkvQyw0QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFFN0IsY0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDdkIsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFDNUIsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDTCxFQUFFO2dCQUNGLElBQUk7Z0JBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDeEQsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFlB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TSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPO1lBQ0wsR0FBRyxJQUFJLENBQUMsT0FBTztpQkFDWixNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUJBQzVCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM1QixHQUFHLElBQUksQ0FBQyxPQUFPO2lCQUNaLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztpQkFDeEIsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO1NBQ3pCLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBtYXggYXMgX21heCwgbWluIGFzIF9taW4gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBPTkVfWUVBUiA9IDMxNTU3NjAwMDAwO1xuY29uc3QgWUVBUlNfTUFSR0lOID0gMzA7XG5cbmV4cG9ydCBjbGFzcyBBd1RpbWVsaW5lRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIHRpbWVsaW5lO1xuXG4gIHB1YmxpYyB0aW1lbGluZUxvYWRlZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBkYXRhU2V0O1xuXG4gIHB1YmxpYyB0aW1lbGluZUNvbnRyb2xzVmlzaWJsZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuZGF0YVNldCA9IGRhdGEubWFwKCh7XG4gICAgICBpZCwgc3RhcnQsIGVuZCwgaXRlbSwgbGFiZWxcbiAgICB9KSA9PiAoe1xuICAgICAgaWQsXG4gICAgICBpdGVtLFxuICAgICAgc3RhcnQ6IHN0YXJ0ID8gbW9tZW50KHN0YXJ0KS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IG51bGwsXG4gICAgICBlbmQ6IGVuZCAmJiBlbmQgIT09IHN0YXJ0ID8gbW9tZW50KGVuZCkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBudWxsLFxuICAgICAgY29udGVudDogdGhpcy5nZXRJdGVtVGVtcGxhdGUobGFiZWwsIGl0ZW0ubGFiZWwpLFxuICAgICAgX21ldGE6IHtcbiAgICAgICAgZGF0ZVRleHQ6IGxhYmVsXG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgY29uc3QgbWF4ID0gdGhpcy5nZXRNYXgoKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLmdldE1pbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcklEOiAndGltZWxpbmUtY29tcG9uZW50JyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIHN0YXJ0OiBtaW4sXG4gICAgICAgIGVuZDogbWF4LFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDBweCcsXG4gICAgICAgIC8vIGhlaWdodDogJzEwMHB4JyxcbiAgICAgICAgbG9jYWxlOiAnaXRfSVQnLFxuICAgICAgICAvLyBjbHVzdGVyOiB7XG4gICAgICAgIC8vIGZpdE9uRG91YmxlQ2xpY2s6IHRydWUsXG4gICAgICAgIC8vIGNsdXN0ZXJDcml0ZXJpYTogKGYsIHMpID0+IGYuY29udGVudC5jaGFyQXQoMCkgPT09IHMuY29udGVudC5jaGFyQXQoMCksXG4gICAgICAgIC8vICAgdGl0bGVUZW1wbGF0ZTogJ3tjb3VudH0gZXZlbnRpJyxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgc2hvd0N1cnJlbnRUaW1lOiBmYWxzZSxcbiAgICAgICAgc2hvd1Rvb2x0aXBzOiBmYWxzZSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcbiAgICAgICAgICB0ZW1wbGF0ZTogKGQ6IGFueSwgZWxlbWVudDogeyB0aXRsZTogc3RyaW5nIH0pID0+IGA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPiR7ZWxlbWVudC50aXRsZX08L2Rpdj5gXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIC8vIG1pbkhlaWdodDogJzM1MHB4JyxcbiAgICAgICAgLy8gbWF4SGVpZ2h0OiAnODAwcHgnLFxuICAgICAgICB6b29tTWF4OiBPTkVfWUVBUiAqIDIwMDAsIC8vIDIwMDAgeWVhcnNcbiAgICAgICAgem9vbU1pbjogT05FX1lFQVIgLyAxMiwgLy8gYSBtb250aFxuICAgICAgICAvLyB6b29tRnJpY3Rpb246IDhcbiAgICAgIH0sXG4gICAgICBkYXRhU2V0OiB0aGlzLmRhdGFTZXQsXG4gICAgICBfc2V0SW5zdGFuY2U6ICh0aW1lbGluZSkgPT4ge1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmU7XG4gICAgICAgIHRoaXMudGltZWxpbmVMb2FkZWQkLm5leHQoKTtcblxuICAgICAgICAvLyBmaXggY2x1c3RlciB2aXN1YWxpemF0aW9uXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGltZWxpbmUuZml0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRpbWVvdXQgZm9yIHpvb20gY29udHJvbHNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy50aW1lbGluZUNvbnRyb2xzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnZXRJdGVtVGVtcGxhdGUoZGF0ZXNMYWJlbCwgbGFiZWwpIHtcbiAgICByZXR1cm4gKGBcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlc1wiPlxuICAgICAgICA8ZW0+JHtkYXRlc0xhYmVsfTwvZW0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtsYWJlbH08L2Rpdj5cbiAgICBgKTtcbiAgfVxuXG4gIGdldE1heCgpIHtcbiAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUoX21heCh0aGlzLmdldEFsbERhdGVzKCkpKTtcblxuICAgIGNvbnN0IHllYXIgPSBtYXhEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBtYXhEYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZGF5ID0gbWF4RGF0ZS5nZXREYXRlKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIgKyBZRUFSU19NQVJHSU4sIG1vbnRoLCBkYXkpO1xuICB9XG5cbiAgZ2V0TWluKCkge1xuICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShfbWluKHRoaXMuZ2V0QWxsRGF0ZXMoKSkpO1xuXG4gICAgY29uc3QgeWVhciA9IG1pbkRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IG1pbkRhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBkYXkgPSBtaW5EYXRlLmdldERhdGUoKTtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciAtIFlFQVJTX01BUkdJTiwgbW9udGgsIGRheSk7XG4gIH1cblxuICBnZXRBbGxEYXRlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4udGhpcy5kYXRhU2V0XG4gICAgICAgIC5maWx0ZXIoKHsgc3RhcnQgfSkgPT4gc3RhcnQpXG4gICAgICAgIC5tYXAoKHsgc3RhcnQgfSkgPT4gc3RhcnQpLFxuICAgICAgLi4udGhpcy5kYXRhU2V0XG4gICAgICAgIC5maWx0ZXIoKHsgZW5kIH0pID0+IGVuZClcbiAgICAgICAgLm1hcCgoeyBlbmQgfSkgPT4gZW5kKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==