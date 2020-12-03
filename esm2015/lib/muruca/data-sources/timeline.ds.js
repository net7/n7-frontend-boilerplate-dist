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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy90aW1lbGluZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU0vQixNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7SUFBNUM7O1FBTVMsb0JBQWUsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQStCaEUsQ0FBQztJQTdCQyw2REFBNkQ7SUFDbkQsU0FBUyxDQUFDLElBQTBCO1FBQzVDLE9BQU87WUFDTCxXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRTtvQkFDUCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsd0JBQXdCLE9BQU8sQ0FBQyxLQUFLLFFBQVE7aUJBQ3hFO2dCQUNELEtBQUssRUFBRSxNQUFNO2dCQUNiLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsWUFBWSxFQUFFLENBQUM7YUFDaEI7WUFDRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsY0FBYztZQUNkLGlDQUFpQztZQUNqQyw4RUFBOEU7WUFDOUUsTUFBTTtZQUNOLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lbGluZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgdmlzIGZyb20gJ3Zpcy10aW1lbGluZSc7XHJcblxyXG4vLyB2aXMtdGltZWxpbmUgZGF0YXNldCB0eXBlIGxvb2t1cFxyXG50eXBlIERhdGFTZXQgPSBUaW1lbGluZURhdGFbJ2RhdGFTZXQnXVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKiB0aW1lbGluZSBpbnN0YW5jZSAqL1xyXG4gIHRpbWVsaW5lOiB2aXMuVGltZWxpbmU7XHJcblxyXG4gIHB1YmxpYyB0aW1lbGluZUxvYWRlZCQ6IFN1YmplY3Q8dmlzLlRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IHsgZGF0YVNldDogRGF0YVNldCB9KTogVGltZWxpbmVEYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnRhaW5lcklEOiAnbXItdGltZWxpbmUnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxyXG4gICAgICAgIGxvY2FsZTogJ2l0X0lUJyxcclxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgIHNob3dUb29sdGlwczogZmFsc2UsXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZm9sbG93TW91c2U6IGZhbHNlLFxyXG4gICAgICAgICAgdGVtcGxhdGU6IChkLCBlbGVtZW50KSA9PiBgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj4ke2VsZW1lbnQudGl0bGV9PC9kaXY+YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICczNTBweCcsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAnODAwcHgnLFxyXG4gICAgICAgIHpvb21GcmljdGlvbjogOFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhU2V0OiBkYXRhLmRhdGFTZXQsXHJcbiAgICAgIC8vIGRhdGFTZXQ6IFt7XHJcbiAgICAgIC8vIE1vY2sgZGkgdW4gZWxlbWVudG8gY2xpY2NhYmlsZVxyXG4gICAgICAvLyAgIHN0YXJ0OiAnMjAxNC0wNC0xNycsIGlkOiAyOTkyLCB0eXBlOiAncG9pbnQnLCBjb250ZW50OiAnTWlzc2lvbmUgVmVuZXppYSdcclxuICAgICAgLy8gfV0sXHJcbiAgICAgIF9zZXRJbnN0YW5jZTogKHRpbWVsaW5lKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xyXG4gICAgICAgIHRoaXMudGltZWxpbmVMb2FkZWQkLm5leHQodGltZWxpbmUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=