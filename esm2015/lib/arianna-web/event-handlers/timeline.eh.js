import { EventHandler } from '@n7-frontend/core';
import { first } from 'rxjs/operators';
export class AwTimelineEH extends EventHandler {
    listen() {
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'aw-timeline-layout.init':
                    this.listenToTimeline();
                    break;
                case 'aw-timeline-layout.zoomout':
                    this.dataSource.timeline.zoomOut(0.7);
                    break;
                case 'aw-timeline-layout.zoomin':
                    this.dataSource.timeline.zoomIn(0.7);
                    break;
                default:
                    break;
            }
        });
    }
    listenToTimeline() {
        this.dataSource.timelineLoaded$
            .pipe(first())
            .subscribe(() => {
            const { timeline, dataSet } = this.dataSource;
            timeline.on('click', ({ item }) => {
                const clicked = dataSet.find(({ id }) => item === id);
                if (clicked) {
                    this.emitOuter('click', {
                        id: clicked.item.id,
                        label: clicked.item.label
                    });
                }
                else {
                    this.emitOuter('click', {
                        id: null
                    });
                }
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvdGltZWxpbmUuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxNQUFNLE9BQU8sWUFBYSxTQUFRLFlBQVk7SUFDckMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ3ZDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDeEIsTUFBTTtnQkFFUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QyxNQUFNO2dCQUVSLEtBQUssMkJBQTJCO29CQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JDLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZTthQUM1QixJQUFJLENBQ0gsS0FBSyxFQUFFLENBQ1I7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO2dCQUNoQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDbkIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSztxQkFDMUIsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO3dCQUN0QixFQUFFLEVBQUUsSUFBSTtxQkFDVCxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1RpbWVsaW5lRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LXRpbWVsaW5lLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMubGlzdGVuVG9UaW1lbGluZSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2F3LXRpbWVsaW5lLWxheW91dC56b29tb3V0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aW1lbGluZS56b29tT3V0KDAuNyk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYXctdGltZWxpbmUtbGF5b3V0Lnpvb21pbic6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGltZWxpbmUuem9vbUluKDAuNyk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9UaW1lbGluZSgpIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS50aW1lbGluZUxvYWRlZCRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlyc3QoKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdGltZWxpbmUsIGRhdGFTZXQgfSA9IHRoaXMuZGF0YVNvdXJjZTtcclxuICAgICAgICB0aW1lbGluZS5vbignY2xpY2snLCAoeyBpdGVtIH0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNsaWNrZWQgPSBkYXRhU2V0LmZpbmQoKHsgaWQgfSkgPT4gaXRlbSA9PT0gaWQpO1xyXG4gICAgICAgICAgaWYgKGNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywge1xyXG4gICAgICAgICAgICAgIGlkOiBjbGlja2VkLml0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IGNsaWNrZWQuaXRlbS5sYWJlbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHtcclxuICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==