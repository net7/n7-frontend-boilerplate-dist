import { MrItineraryLayoutDS } from './itinerary-layout.ds';
import { MrItineraryLayoutEH } from './itinerary-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export var MrItineraryLayoutConfig = {
    layoutId: 'mr-itinerary-layout',
    widgets: [
        { id: 'mr-static-metadata' }
    ],
    layoutDS: MrItineraryLayoutDS,
    layoutEH: MrItineraryLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRpbmVyYXJ5LWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaXRpbmVyYXJ5LWxheW91dC9pdGluZXJhcnktbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUc7SUFDckMsUUFBUSxFQUFFLHFCQUFxQjtJQUMvQixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxvQkFBb0IsRUFBRTtLQUM3QjtJQUNELFFBQVEsRUFBRSxtQkFBbUI7SUFDN0IsUUFBUSxFQUFFLG1CQUFtQjtJQUM3QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ySXRpbmVyYXJ5TGF5b3V0RFMgfSBmcm9tICcuL2l0aW5lcmFyeS1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBNckl0aW5lcmFyeUxheW91dEVIIH0gZnJvbSAnLi9pdGluZXJhcnktbGF5b3V0LmVoJztcclxuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1ySXRpbmVyYXJ5TGF5b3V0Q29uZmlnID0ge1xyXG4gIGxheW91dElkOiAnbXItaXRpbmVyYXJ5LWxheW91dCcsXHJcbiAgd2lkZ2V0czogW1xyXG4gICAgeyBpZDogJ21yLXN0YXRpYy1tZXRhZGF0YScgfVxyXG4gIF0sXHJcbiAgbGF5b3V0RFM6IE1ySXRpbmVyYXJ5TGF5b3V0RFMsXHJcbiAgbGF5b3V0RUg6IE1ySXRpbmVyYXJ5TGF5b3V0RUgsXHJcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcclxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXHJcbiAgb3B0aW9uczoge1xyXG4gICAgLy8gVE9ET1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==