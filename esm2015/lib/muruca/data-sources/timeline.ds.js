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
            dataSet: data.dataSet,
            // .map((d) => ({
            //   id: d.id,
            //   start: moment(d.start, 'DD-MM-YYYY').toISOString(),
            //   end: d.end ? moment(d.end, 'DD-MM-YYYY').toISOString() : undefined,
            //   content: d.content
            // })),
            _setInstance: (timeline) => {
                this.timeline = timeline;
                this.timelineLoaded$.next(timeline);
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU8vQixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFBNUM7O1FBTVMsb0JBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQWdDaEUsQ0FBQztJQTlCVyxTQUFTLENBQUMsSUFBMEI7UUFDNUMsT0FBTztZQUNMLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsT0FBTztnQkFDZixLQUFLLEVBQUUsTUFBTTtnQkFDYixZQUFZLEVBQUUsS0FBSztnQkFDbkIsT0FBTyxFQUFFO29CQUNQLFdBQVcsRUFBRSxLQUFLO29CQUNsQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsT0FBTyxDQUFDLEtBQUssUUFBUTtpQkFDeEU7Z0JBQ0QsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixZQUFZLEVBQUUsQ0FBQzthQUNoQjtZQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdEQUF3RDtZQUN4RCx3RUFBd0U7WUFDeEUsdUJBQXVCO1lBQ3ZCLE9BQU87WUFDUCxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzIHZpcyBmcm9tICd2aXMtdGltZWxpbmUnO1xyXG4vLyBpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbi8vIHZpcy10aW1lbGluZSBkYXRhc2V0IHR5cGUgbG9va3VwXHJcbnR5cGUgRGF0YVNldCA9IFRpbWVsaW5lRGF0YVsnZGF0YVNldCddXHJcblxyXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgLyoqIHRpbWVsaW5lIGluc3RhbmNlICovXHJcbiAgdGltZWxpbmU6IHZpcy5UaW1lbGluZTtcclxuXHJcbiAgcHVibGljIHRpbWVsaW5lTG9hZGVkJDogU3ViamVjdDx2aXMuVGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiB7IGRhdGFTZXQ6IERhdGFTZXQgfSk6IFRpbWVsaW5lRGF0YSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb250YWluZXJJRDogJ21yLXRpbWVsaW5lJyxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIGhlaWdodDogJzUwMHB4JyxcclxuICAgICAgICBsb2NhbGU6ICdpdF9JVCcsXHJcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgICBzaG93VG9vbHRpcHM6IGZhbHNlLFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcclxuICAgICAgICAgIHRlbXBsYXRlOiAoZCwgZWxlbWVudCkgPT4gYDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+JHtlbGVtZW50LnRpdGxlfTwvZGl2PmBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMzUwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodDogJzgwMHB4JyxcclxuICAgICAgICB6b29tRnJpY3Rpb246IDhcclxuICAgICAgfSxcclxuICAgICAgZGF0YVNldDogZGF0YS5kYXRhU2V0LFxyXG4gICAgICAvLyAubWFwKChkKSA9PiAoe1xyXG4gICAgICAvLyAgIGlkOiBkLmlkLFxyXG4gICAgICAvLyAgIHN0YXJ0OiBtb21lbnQoZC5zdGFydCwgJ0RELU1NLVlZWVknKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAvLyAgIGVuZDogZC5lbmQgPyBtb21lbnQoZC5lbmQsICdERC1NTS1ZWVlZJykudG9JU09TdHJpbmcoKSA6IHVuZGVmaW5lZCxcclxuICAgICAgLy8gICBjb250ZW50OiBkLmNvbnRlbnRcclxuICAgICAgLy8gfSkpLFxyXG4gICAgICBfc2V0SW5zdGFuY2U6ICh0aW1lbGluZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcclxuICAgICAgICB0aGlzLnRpbWVsaW5lTG9hZGVkJC5uZXh0KHRpbWVsaW5lKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19