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
                content: this.getItemTemplate(label, item.label)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDO0FBQzdCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUV4QixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFBNUM7O1FBR1Msb0JBQWUsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUkvQyw0QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFFN0IsY0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDdkIsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFDNUIsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDTCxFQUFFO2dCQUNGLElBQUk7Z0JBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDeEQsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNuRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNqRCxDQUFDLENBQUMsQ0FBQztZQUVKLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFMUIsT0FBTztnQkFDTCxXQUFXLEVBQUUsb0JBQW9CO2dCQUNqQyxVQUFVLEVBQUU7b0JBQ1YsR0FBRztvQkFDSCxHQUFHO29CQUNILEtBQUssRUFBRSxHQUFHO29CQUNWLEdBQUcsRUFBRSxHQUFHO29CQUNSLEtBQUssRUFBRSxNQUFNO29CQUNiLFNBQVMsRUFBRSxPQUFPO29CQUNsQixtQkFBbUI7b0JBQ25CLE1BQU0sRUFBRSxPQUFPO29CQUNmLGFBQWE7b0JBQ1gsMEJBQTBCO29CQUMxQiwwRUFBMEU7b0JBQzVFLHFDQUFxQztvQkFDckMsS0FBSztvQkFDTCxlQUFlLEVBQUUsS0FBSztvQkFDdEIsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLE9BQU8sRUFBRTt3QkFDUCxXQUFXLEVBQUUsS0FBSzt3QkFDbEIsUUFBUSxFQUFFLENBQUMsQ0FBTSxFQUFFLE9BQTBCLEVBQUUsRUFBRSxDQUFDLHdCQUF3QixPQUFPLENBQUMsS0FBSyxRQUFRO3FCQUNoRztvQkFDRCxLQUFLLEVBQUUsTUFBTTtvQkFDYixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsT0FBTyxFQUFFLFFBQVEsR0FBRyxJQUFJO29CQUN4QixPQUFPLEVBQUUsUUFBUSxHQUFHLEVBQUU7aUJBRXZCO2dCQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUU1Qiw0QkFBNEI7b0JBQzVCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxDQUFDLENBQUM7b0JBRUgsNEJBQTRCO29CQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFO3dCQUNkLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7b0JBQ3RDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDWCxDQUFDO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQTtJQXVDSCxDQUFDO0lBckNDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsS0FBSztRQUMvQixPQUFPLENBQUM7O2NBRUUsVUFBVTs7NkJBRUssS0FBSztLQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTztZQUNMLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ1osTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO2lCQUM1QixHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDNUIsR0FBRyxJQUFJLENBQUMsT0FBTztpQkFDWixNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7aUJBQ3hCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUN6QixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbWF4IGFzIF9tYXgsIG1pbiBhcyBfbWluIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuY29uc3QgT05FX1lFQVIgPSAzMTU1NzYwMDAwMDtcbmNvbnN0IFlFQVJTX01BUkdJTiA9IDMwO1xuXG5leHBvcnQgY2xhc3MgQXdUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyB0aW1lbGluZTtcblxuICBwdWJsaWMgdGltZWxpbmVMb2FkZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgZGF0YVNldDtcbiAgXG4gIHB1YmxpYyB0aW1lbGluZUNvbnRyb2xzVmlzaWJsZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuZGF0YVNldCA9IGRhdGEubWFwKCh7XG4gICAgICBpZCwgc3RhcnQsIGVuZCwgaXRlbSwgbGFiZWxcbiAgICB9KSA9PiAoe1xuICAgICAgaWQsXG4gICAgICBpdGVtLFxuICAgICAgc3RhcnQ6IHN0YXJ0ID8gbW9tZW50KHN0YXJ0KS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IG51bGwsXG4gICAgICBlbmQ6IGVuZCAmJiBlbmQgIT09IHN0YXJ0ID8gbW9tZW50KGVuZCkuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBudWxsLFxuICAgICAgY29udGVudDogdGhpcy5nZXRJdGVtVGVtcGxhdGUobGFiZWwsIGl0ZW0ubGFiZWwpXG4gICAgfSkpO1xuXG4gICAgY29uc3QgbWF4ID0gdGhpcy5nZXRNYXgoKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLmdldE1pbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcklEOiAndGltZWxpbmUtY29tcG9uZW50JyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIHN0YXJ0OiBtaW4sXG4gICAgICAgIGVuZDogbWF4LFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDBweCcsXG4gICAgICAgIC8vIGhlaWdodDogJzEwMHB4JyxcbiAgICAgICAgbG9jYWxlOiAnaXRfSVQnLFxuICAgICAgICAvLyBjbHVzdGVyOiB7XG4gICAgICAgICAgLy8gZml0T25Eb3VibGVDbGljazogdHJ1ZSxcbiAgICAgICAgICAvLyBjbHVzdGVyQ3JpdGVyaWE6IChmLCBzKSA9PiBmLmNvbnRlbnQuY2hhckF0KDApID09PSBzLmNvbnRlbnQuY2hhckF0KDApLFxuICAgICAgICAvLyAgIHRpdGxlVGVtcGxhdGU6ICd7Y291bnR9IGV2ZW50aScsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHNob3dDdXJyZW50VGltZTogZmFsc2UsXG4gICAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXG4gICAgICAgICAgdGVtcGxhdGU6IChkOiBhbnksIGVsZW1lbnQ6IHsgdGl0bGU6IHN0cmluZyB9KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxuICAgICAgICB9LFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAvLyBtaW5IZWlnaHQ6ICczNTBweCcsXG4gICAgICAgIC8vIG1heEhlaWdodDogJzgwMHB4JyxcbiAgICAgICAgem9vbU1heDogT05FX1lFQVIgKiAyMDAwLCAvLyAyMDAwIHllYXJzXG4gICAgICAgIHpvb21NaW46IE9ORV9ZRUFSIC8gMTIsIC8vIGEgbW9udGhcbiAgICAgICAgLy8gem9vbUZyaWN0aW9uOiA4XG4gICAgICB9LFxuICAgICAgZGF0YVNldDogdGhpcy5kYXRhU2V0LFxuICAgICAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgICAgICB0aGlzLnRpbWVsaW5lTG9hZGVkJC5uZXh0KCk7XG5cbiAgICAgICAgLy8gZml4IGNsdXN0ZXIgdmlzdWFsaXphdGlvblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnRpbWVsaW5lLmZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aW1lb3V0IGZvciB6b29tIGNvbnRyb2xzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGltZWxpbmVDb250cm9sc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0SXRlbVRlbXBsYXRlKGRhdGVzTGFiZWwsIGxhYmVsKSB7XG4gICAgcmV0dXJuIChgXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXNcIj5cbiAgICAgICAgPGVtPiR7ZGF0ZXNMYWJlbH08L2VtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7bGFiZWx9PC9kaXY+XG4gICAgYCk7XG4gIH1cblxuICBnZXRNYXgoKSB7XG4gICAgY29uc3QgbWF4RGF0ZSA9IG5ldyBEYXRlKF9tYXgodGhpcy5nZXRBbGxEYXRlcygpKSk7XG5cbiAgICBjb25zdCB5ZWFyID0gbWF4RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gbWF4RGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGRheSA9IG1heERhdGUuZ2V0RGF0ZSgpO1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyICsgWUVBUlNfTUFSR0lOLCBtb250aCwgZGF5KTtcbiAgfVxuXG4gIGdldE1pbigpIHtcbiAgICBjb25zdCBtaW5EYXRlID0gbmV3IERhdGUoX21pbih0aGlzLmdldEFsbERhdGVzKCkpKTtcblxuICAgIGNvbnN0IHllYXIgPSBtaW5EYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBtaW5EYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZGF5ID0gbWluRGF0ZS5nZXREYXRlKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIgLSBZRUFSU19NQVJHSU4sIG1vbnRoLCBkYXkpO1xuICB9XG5cbiAgZ2V0QWxsRGF0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnRoaXMuZGF0YVNldFxuICAgICAgICAuZmlsdGVyKCh7IHN0YXJ0IH0pID0+IHN0YXJ0KVxuICAgICAgICAubWFwKCh7IHN0YXJ0IH0pID0+IHN0YXJ0KSxcbiAgICAgIC4uLnRoaXMuZGF0YVNldFxuICAgICAgICAuZmlsdGVyKCh7IGVuZCB9KSA9PiBlbmQpXG4gICAgICAgIC5tYXAoKHsgZW5kIH0pID0+IGVuZClcbiAgICBdO1xuICB9XG59XG4iXX0=