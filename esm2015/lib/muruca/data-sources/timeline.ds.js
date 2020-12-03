import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class MrTimelineDS extends DataSource {
    constructor() {
        super(...arguments);
        this.timelineLoaded$ = new Subject();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            // dataSet: [{
            // Mock di un elemento cliccabile
            //   start: '2014-04-17', id: 2992, type: 'point', content: 'Missione Venezia'
            // }],
            _setInstance: (timeline) => {
                this.timeline = timeline;
                this.timelineLoaded$.next(timeline);
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU0vQixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFBNUM7O1FBTVMsb0JBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQStCaEUsQ0FBQztJQTdCQyw2REFBNkQ7SUFDbkQsU0FBUyxDQUFDLElBQTBCO1FBQzVDLE9BQU87WUFDTCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsd0JBQXdCLE9BQU8sQ0FBQyxLQUFLLFFBQVE7aUJBQ3hFO2dCQUNELEtBQUssRUFBRSxNQUFNO2dCQUNiLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsWUFBWSxFQUFFLENBQUM7YUFDaEI7WUFDRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsY0FBYztZQUNkLGlDQUFpQztZQUNqQyw4RUFBOEU7WUFDOUUsTUFBTTtZQUNOLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdmlzIGZyb20gJ3Zpcy10aW1lbGluZSc7XG5cbi8vIHZpcy10aW1lbGluZSBkYXRhc2V0IHR5cGUgbG9va3VwXG50eXBlIERhdGFTZXQgPSBUaW1lbGluZURhdGFbJ2RhdGFTZXQnXVxuXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgLyoqIHRpbWVsaW5lIGluc3RhbmNlICovXG4gIHRpbWVsaW5lOiB2aXMuVGltZWxpbmU7XG5cbiAgcHVibGljIHRpbWVsaW5lTG9hZGVkJDogU3ViamVjdDx2aXMuVGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogeyBkYXRhU2V0OiBEYXRhU2V0IH0pOiBUaW1lbGluZURhdGEge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXJJRDogJ21yLXRpbWVsaW5lJyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxuICAgICAgICBsb2NhbGU6ICdpdF9JVCcsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXG4gICAgICAgICAgdGVtcGxhdGU6IChkLCBlbGVtZW50KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxuICAgICAgICB9LFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICczNTBweCcsXG4gICAgICAgIG1heEhlaWdodDogJzgwMHB4JyxcbiAgICAgICAgem9vbUZyaWN0aW9uOiA4XG4gICAgICB9LFxuICAgICAgZGF0YVNldDogZGF0YS5kYXRhU2V0LFxuICAgICAgLy8gZGF0YVNldDogW3tcbiAgICAgIC8vIE1vY2sgZGkgdW4gZWxlbWVudG8gY2xpY2NhYmlsZVxuICAgICAgLy8gICBzdGFydDogJzIwMTQtMDQtMTcnLCBpZDogMjk5MiwgdHlwZTogJ3BvaW50JywgY29udGVudDogJ01pc3Npb25lIFZlbmV6aWEnXG4gICAgICAvLyB9XSxcbiAgICAgIF9zZXRJbnN0YW5jZTogKHRpbWVsaW5lKSA9PiB7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcbiAgICAgICAgdGhpcy50aW1lbGluZUxvYWRlZCQubmV4dCh0aW1lbGluZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19