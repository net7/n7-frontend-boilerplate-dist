import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class MrTimelineDS extends DataSource {
    constructor() {
        super(...arguments);
        this.timelineLoaded$ = new Subject();
    }
    transform(data) {
        return {
            containerID: 'mr-timeline',
            libOptions: {
                height: '500px',
                locale: 'it_IT',
                align: 'left',
                showTooltips: false,
                tooltip: {
                    followMouse: false,
                    template: (d, element) => `<div class="tooltip">${element.title}</div>`
                },
                width: '100%',
                minHeight: '350px',
                maxHeight: '800px',
                zoomFriction: 8
            },
            dataSet: data.dataSet.map((d) => {
                // Show dates that have identical start and end dates as points
                if (d.end && d.end === d.start) {
                    return Object.assign(Object.assign({}, d), { end: undefined });
                }
                return d;
            }),
            _setInstance: (timeline) => {
                this.timeline = timeline;
                this.timelineLoaded$.next(timeline);
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU0vQixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFBNUM7O1FBTVMsb0JBQWUsR0FBc0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQStCNUQsQ0FBQztJQTdCVyxTQUFTLENBQUMsSUFBMEI7UUFDNUMsT0FBTztZQUNMLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsT0FBTztnQkFDZixLQUFLLEVBQUUsTUFBTTtnQkFDYixZQUFZLEVBQUUsS0FBSztnQkFDbkIsT0FBTyxFQUFFO29CQUNQLFdBQVcsRUFBRSxLQUFLO29CQUNsQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsT0FBTyxDQUFDLEtBQUssUUFBUTtpQkFDeEU7Z0JBQ0QsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixZQUFZLEVBQUUsQ0FBQzthQUNoQjtZQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM5QiwrREFBK0Q7Z0JBQy9ELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7b0JBQzlCLHVDQUFZLENBQUMsR0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRztpQkFDeEM7Z0JBQUMsT0FBTyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUM7WUFDRixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRpbWVsaW5lIH0gZnJvbSAndmlzLXRpbWVsaW5lJztcblxuLy8gdmlzLXRpbWVsaW5lIGRhdGFzZXQgdHlwZSBsb29rdXBcbnR5cGUgRGF0YVNldCA9IFRpbWVsaW5lRGF0YVsnZGF0YVNldCddXG5cbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICAvKiogdGltZWxpbmUgaW5zdGFuY2UgKi9cbiAgdGltZWxpbmU6IFRpbWVsaW5lO1xuXG4gIHB1YmxpYyB0aW1lbGluZUxvYWRlZCQ6IFN1YmplY3Q8VGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IHsgZGF0YVNldDogRGF0YVNldCB9KTogVGltZWxpbmVEYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVySUQ6ICdtci10aW1lbGluZScsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICAgICAgbG9jYWxlOiAnaXRfSVQnLFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICBzaG93VG9vbHRpcHM6IGZhbHNlLFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgZm9sbG93TW91c2U6IGZhbHNlLFxuICAgICAgICAgIHRlbXBsYXRlOiAoZCwgZWxlbWVudCkgPT4gYDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+JHtlbGVtZW50LnRpdGxlfTwvZGl2PmBcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMzUwcHgnLFxuICAgICAgICBtYXhIZWlnaHQ6ICc4MDBweCcsXG4gICAgICAgIHpvb21GcmljdGlvbjogOFxuICAgICAgfSxcbiAgICAgIGRhdGFTZXQ6IGRhdGEuZGF0YVNldC5tYXAoKGQpID0+IHtcbiAgICAgICAgLy8gU2hvdyBkYXRlcyB0aGF0IGhhdmUgaWRlbnRpY2FsIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgYXMgcG9pbnRzXG4gICAgICAgIGlmIChkLmVuZCAmJiBkLmVuZCA9PT0gZC5zdGFydCkge1xuICAgICAgICAgIHJldHVybiB7IC4uLmQsIC4uLnsgZW5kOiB1bmRlZmluZWQgfSB9O1xuICAgICAgICB9IHJldHVybiBkO1xuICAgICAgfSksXG4gICAgICBfc2V0SW5zdGFuY2U6ICh0aW1lbGluZSkgPT4ge1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmU7XG4gICAgICAgIHRoaXMudGltZWxpbmVMb2FkZWQkLm5leHQodGltZWxpbmUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==