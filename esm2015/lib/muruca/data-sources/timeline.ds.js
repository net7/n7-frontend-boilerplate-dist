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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU0vQixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFBNUM7O1FBTVMsb0JBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQStCaEUsQ0FBQztJQTdCVyxTQUFTLENBQUMsSUFBMEI7UUFDNUMsT0FBTztZQUNMLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsT0FBTztnQkFDZixLQUFLLEVBQUUsTUFBTTtnQkFDYixZQUFZLEVBQUUsS0FBSztnQkFDbkIsT0FBTyxFQUFFO29CQUNQLFdBQVcsRUFBRSxLQUFLO29CQUNsQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsT0FBTyxDQUFDLEtBQUssUUFBUTtpQkFDeEU7Z0JBQ0QsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixZQUFZLEVBQUUsQ0FBQzthQUNoQjtZQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM5QiwrREFBK0Q7Z0JBQy9ELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7b0JBQzlCLHVDQUFZLENBQUMsR0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRztpQkFDeEM7Z0JBQUMsT0FBTyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUM7WUFDRixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIHZpcyBmcm9tICd2aXMtdGltZWxpbmUnO1xuXG4vLyB2aXMtdGltZWxpbmUgZGF0YXNldCB0eXBlIGxvb2t1cFxudHlwZSBEYXRhU2V0ID0gVGltZWxpbmVEYXRhWydkYXRhU2V0J11cblxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIC8qKiB0aW1lbGluZSBpbnN0YW5jZSAqL1xuICB0aW1lbGluZTogdmlzLlRpbWVsaW5lO1xuXG4gIHB1YmxpYyB0aW1lbGluZUxvYWRlZCQ6IFN1YmplY3Q8dmlzLlRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiB7IGRhdGFTZXQ6IERhdGFTZXQgfSk6IFRpbWVsaW5lRGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcklEOiAnbXItdGltZWxpbmUnLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICBoZWlnaHQ6ICc1MDBweCcsXG4gICAgICAgIGxvY2FsZTogJ2l0X0lUJyxcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgc2hvd1Rvb2x0aXBzOiBmYWxzZSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgIGZvbGxvd01vdXNlOiBmYWxzZSxcbiAgICAgICAgICB0ZW1wbGF0ZTogKGQsIGVsZW1lbnQpID0+IGA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPiR7ZWxlbWVudC50aXRsZX08L2Rpdj5gXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzM1MHB4JyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnODAwcHgnLFxuICAgICAgICB6b29tRnJpY3Rpb246IDhcbiAgICAgIH0sXG4gICAgICBkYXRhU2V0OiBkYXRhLmRhdGFTZXQubWFwKChkKSA9PiB7XG4gICAgICAgIC8vIFNob3cgZGF0ZXMgdGhhdCBoYXZlIGlkZW50aWNhbCBzdGFydCBhbmQgZW5kIGRhdGVzIGFzIHBvaW50c1xuICAgICAgICBpZiAoZC5lbmQgJiYgZC5lbmQgPT09IGQuc3RhcnQpIHtcbiAgICAgICAgICByZXR1cm4geyAuLi5kLCAuLi57IGVuZDogdW5kZWZpbmVkIH0gfTtcbiAgICAgICAgfSByZXR1cm4gZDtcbiAgICAgIH0pLFxuICAgICAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgICAgICB0aGlzLnRpbWVsaW5lTG9hZGVkJC5uZXh0KHRpbWVsaW5lKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=