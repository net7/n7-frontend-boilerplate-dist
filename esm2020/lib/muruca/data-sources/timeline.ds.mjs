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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3RpbWVsaW5lLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTS9CLE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBVTtJQUE1Qzs7UUFNUyxvQkFBZSxHQUFzQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBZ0M1RCxDQUFDO0lBOUJXLFNBQVMsQ0FBQyxJQUEwQjtRQUM1QyxPQUFPO1lBQ0wsV0FBVyxFQUFFLGFBQWE7WUFDMUIsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE1BQU0sRUFBRSxPQUFPO2dCQUNmLEtBQUssRUFBRSxNQUFNO2dCQUNiLFlBQVksRUFBRSxLQUFLO2dCQUNuQixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLHdCQUF3QixPQUFPLENBQUMsS0FBSyxRQUFRO2lCQUN4RTtnQkFDRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixTQUFTLEVBQUUsT0FBTztnQkFDbEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFlBQVksRUFBRSxDQUFDO2dCQUNmLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2FBQzNCO1lBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlCLCtEQUErRDtnQkFDL0QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDOUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQztpQkFDeEM7Z0JBQUMsT0FBTyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUM7WUFDRixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRpbWVsaW5lIH0gZnJvbSAndmlzLXRpbWVsaW5lJztcclxuXHJcbi8vIHZpcy10aW1lbGluZSBkYXRhc2V0IHR5cGUgbG9va3VwXHJcbnR5cGUgRGF0YVNldCA9IFRpbWVsaW5lRGF0YVsnZGF0YVNldCddXHJcblxyXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgLyoqIHRpbWVsaW5lIGluc3RhbmNlICovXHJcbiAgdGltZWxpbmU6IFRpbWVsaW5lO1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVMb2FkZWQkOiBTdWJqZWN0PFRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogeyBkYXRhU2V0OiBEYXRhU2V0IH0pOiBUaW1lbGluZURhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGFpbmVySUQ6ICdtci10aW1lbGluZScsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICBoZWlnaHQ6ICc1MDBweCcsXHJcbiAgICAgICAgbG9jYWxlOiAnaXRfSVQnLFxyXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgc2hvd1Rvb2x0aXBzOiBmYWxzZSxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogKGQsIGVsZW1lbnQpID0+IGA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPiR7ZWxlbWVudC50aXRsZX08L2Rpdj5gXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1pbkhlaWdodDogJzM1MHB4JyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc4MDBweCcsXHJcbiAgICAgICAgem9vbUZyaWN0aW9uOiA4LFxyXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5saWJPcHRpb25zXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGFTZXQ6IGRhdGEuZGF0YVNldC5tYXAoKGQpID0+IHtcclxuICAgICAgICAvLyBTaG93IGRhdGVzIHRoYXQgaGF2ZSBpZGVudGljYWwgc3RhcnQgYW5kIGVuZCBkYXRlcyBhcyBwb2ludHNcclxuICAgICAgICBpZiAoZC5lbmQgJiYgZC5lbmQgPT09IGQuc3RhcnQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLmQsIC4uLnsgZW5kOiB1bmRlZmluZWQgfSB9O1xyXG4gICAgICAgIH0gcmV0dXJuIGQ7XHJcbiAgICAgIH0pLFxyXG4gICAgICBfc2V0SW5zdGFuY2U6ICh0aW1lbGluZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcclxuICAgICAgICB0aGlzLnRpbWVsaW5lTG9hZGVkJC5uZXh0KHRpbWVsaW5lKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19