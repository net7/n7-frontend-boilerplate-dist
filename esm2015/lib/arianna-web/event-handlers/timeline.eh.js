import { EventHandler } from '@n7-frontend/core';
import { first } from 'rxjs/operators';
export class AwTimelineEH extends EventHandler {
    listen() {
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'aw-timeline-layout.init':
                    this.listenToTimeline();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvdGltZWxpbmUuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxNQUFNLE9BQU8sWUFBYSxTQUFRLFlBQVk7SUFDckMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ3ZDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDeEIsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlO2FBQzVCLElBQUksQ0FDSCxLQUFLLEVBQUUsQ0FDUjthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Z0JBQ2hDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3RELElBQUksT0FBTyxFQUFFO29CQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO3dCQUN0QixFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNuQixLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLO3FCQUMxQixDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3RCLEVBQUUsRUFBRSxJQUFJO3FCQUNULENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3VGltZWxpbmVFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LXRpbWVsaW5lLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmxpc3RlblRvVGltZWxpbmUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Ub1RpbWVsaW5lKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS50aW1lbGluZUxvYWRlZCRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaXJzdCgpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0aW1lbGluZSwgZGF0YVNldCB9ID0gdGhpcy5kYXRhU291cmNlO1xuICAgICAgICB0aW1lbGluZS5vbignY2xpY2snLCAoeyBpdGVtIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBjbGlja2VkID0gZGF0YVNldC5maW5kKCh7IGlkIH0pID0+IGl0ZW0gPT09IGlkKTtcbiAgICAgICAgICBpZiAoY2xpY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywge1xuICAgICAgICAgICAgICBpZDogY2xpY2tlZC5pdGVtLmlkLFxuICAgICAgICAgICAgICBsYWJlbDogY2xpY2tlZC5pdGVtLmxhYmVsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywge1xuICAgICAgICAgICAgICBpZDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=