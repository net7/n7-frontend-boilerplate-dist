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
                zoomFriction: 8,
                ...this.options.libOptions
            },
            dataSet: data.dataSet.map((d) => {
                // Show dates that have identical start and end dates as points
                if (d.end && d.end === d.start) {
                    return { ...d, ...{ end: undefined } };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTS9CLE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBVTtJQUE1Qzs7UUFNUyxvQkFBZSxHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBZ0M1RCxDQUFDO0lBOUJXLFNBQVMsQ0FBQyxJQUEwQjtRQUM1QyxPQUFPO1lBQ0wsV0FBVyxFQUFFLGFBQWE7WUFDMUIsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE1BQU0sRUFBRSxPQUFPO2dCQUNmLEtBQUssRUFBRSxNQUFNO2dCQUNiLFlBQVksRUFBRSxLQUFLO2dCQUNuQixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLHdCQUF3QixPQUFPLENBQUMsS0FBSyxRQUFRO2lCQUN4RTtnQkFDRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixTQUFTLEVBQUUsT0FBTztnQkFDbEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFlBQVksRUFBRSxDQUFDO2dCQUNmLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2FBQzNCO1lBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlCLCtEQUErRDtnQkFDL0QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDOUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQztpQkFDeEM7Z0JBQUMsT0FBTyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUM7WUFDRixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRpbWVsaW5lIH0gZnJvbSAndmlzLXRpbWVsaW5lJztcblxuLy8gdmlzLXRpbWVsaW5lIGRhdGFzZXQgdHlwZSBsb29rdXBcbnR5cGUgRGF0YVNldCA9IFRpbWVsaW5lRGF0YVsnZGF0YVNldCddXG5cbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICAvKiogdGltZWxpbmUgaW5zdGFuY2UgKi9cbiAgdGltZWxpbmU6IFRpbWVsaW5lO1xuXG4gIHB1YmxpYyB0aW1lbGluZUxvYWRlZCQ6IFN1YmplY3Q8VGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IHsgZGF0YVNldDogRGF0YVNldCB9KTogVGltZWxpbmVEYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVySUQ6ICdtci10aW1lbGluZScsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICAgICAgbG9jYWxlOiAnaXRfSVQnLFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICBzaG93VG9vbHRpcHM6IGZhbHNlLFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgZm9sbG93TW91c2U6IGZhbHNlLFxuICAgICAgICAgIHRlbXBsYXRlOiAoZCwgZWxlbWVudCkgPT4gYDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+JHtlbGVtZW50LnRpdGxlfTwvZGl2PmBcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMzUwcHgnLFxuICAgICAgICBtYXhIZWlnaHQ6ICc4MDBweCcsXG4gICAgICAgIHpvb21GcmljdGlvbjogOCxcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLmxpYk9wdGlvbnNcbiAgICAgIH0sXG4gICAgICBkYXRhU2V0OiBkYXRhLmRhdGFTZXQubWFwKChkKSA9PiB7XG4gICAgICAgIC8vIFNob3cgZGF0ZXMgdGhhdCBoYXZlIGlkZW50aWNhbCBzdGFydCBhbmQgZW5kIGRhdGVzIGFzIHBvaW50c1xuICAgICAgICBpZiAoZC5lbmQgJiYgZC5lbmQgPT09IGQuc3RhcnQpIHtcbiAgICAgICAgICByZXR1cm4geyAuLi5kLCAuLi57IGVuZDogdW5kZWZpbmVkIH0gfTtcbiAgICAgICAgfSByZXR1cm4gZDtcbiAgICAgIH0pLFxuICAgICAgX3NldEluc3RhbmNlOiAodGltZWxpbmUpID0+IHtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgICAgICB0aGlzLnRpbWVsaW5lTG9hZGVkJC5uZXh0KHRpbWVsaW5lKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=