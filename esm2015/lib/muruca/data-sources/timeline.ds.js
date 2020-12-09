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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU8vQixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFBNUM7O1FBTVMsb0JBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQWdDaEUsQ0FBQztJQTlCVyxTQUFTLENBQUMsSUFBMEI7UUFDNUMsT0FBTztZQUNMLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsT0FBTztnQkFDZixLQUFLLEVBQUUsTUFBTTtnQkFDYixZQUFZLEVBQUUsS0FBSztnQkFDbkIsT0FBTyxFQUFFO29CQUNQLFdBQVcsRUFBRSxLQUFLO29CQUNsQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsT0FBTyxDQUFDLEtBQUssUUFBUTtpQkFDeEU7Z0JBQ0QsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixZQUFZLEVBQUUsQ0FBQzthQUNoQjtZQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdEQUF3RDtZQUN4RCx3RUFBd0U7WUFDeEUsdUJBQXVCO1lBQ3ZCLE9BQU87WUFDUCxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHZpcyBmcm9tICd2aXMtdGltZWxpbmUnO1xuLy8gaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbi8vIHZpcy10aW1lbGluZSBkYXRhc2V0IHR5cGUgbG9va3VwXG50eXBlIERhdGFTZXQgPSBUaW1lbGluZURhdGFbJ2RhdGFTZXQnXVxuXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgLyoqIHRpbWVsaW5lIGluc3RhbmNlICovXG4gIHRpbWVsaW5lOiB2aXMuVGltZWxpbmU7XG5cbiAgcHVibGljIHRpbWVsaW5lTG9hZGVkJDogU3ViamVjdDx2aXMuVGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IHsgZGF0YVNldDogRGF0YVNldCB9KTogVGltZWxpbmVEYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVySUQ6ICdtci10aW1lbGluZScsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICAgICAgbG9jYWxlOiAnaXRfSVQnLFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICBzaG93VG9vbHRpcHM6IGZhbHNlLFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgZm9sbG93TW91c2U6IGZhbHNlLFxuICAgICAgICAgIHRlbXBsYXRlOiAoZCwgZWxlbWVudCkgPT4gYDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+JHtlbGVtZW50LnRpdGxlfTwvZGl2PmBcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMzUwcHgnLFxuICAgICAgICBtYXhIZWlnaHQ6ICc4MDBweCcsXG4gICAgICAgIHpvb21GcmljdGlvbjogOFxuICAgICAgfSxcbiAgICAgIGRhdGFTZXQ6IGRhdGEuZGF0YVNldCxcbiAgICAgIC8vIC5tYXAoKGQpID0+ICh7XG4gICAgICAvLyAgIGlkOiBkLmlkLFxuICAgICAgLy8gICBzdGFydDogbW9tZW50KGQuc3RhcnQsICdERC1NTS1ZWVlZJykudG9JU09TdHJpbmcoKSxcbiAgICAgIC8vICAgZW5kOiBkLmVuZCA/IG1vbWVudChkLmVuZCwgJ0RELU1NLVlZWVknKS50b0lTT1N0cmluZygpIDogdW5kZWZpbmVkLFxuICAgICAgLy8gICBjb250ZW50OiBkLmNvbnRlbnRcbiAgICAgIC8vIH0pKSxcbiAgICAgIF9zZXRJbnN0YW5jZTogKHRpbWVsaW5lKSA9PiB7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcbiAgICAgICAgdGhpcy50aW1lbGluZUxvYWRlZCQubmV4dCh0aW1lbGluZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19