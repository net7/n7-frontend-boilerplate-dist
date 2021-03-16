import { AwHomeLayoutDS } from './home-layout.ds';
import { AwHomeLayoutEH } from './home-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export var AwHomeLayoutConfig = {
    layoutId: 'aw-home-layout',
    widgets: [{
            id: 'aw-hero',
        }, {
            id: 'aw-home-hero-patrimonio',
        }, {
            id: 'aw-bubble-chart',
        }, {
            id: 'aw-home-facets-wrapper',
        }, {
            id: 'aw-home-item-tags-wrapper',
        }, {
            id: 'aw-home-autocomplete',
        }, {
            id: 'aw-linked-objects',
        }, {
            id: 'aw-autocomplete-wrapper',
        }, {
            id: 'aw-chart-tippy',
        }],
    layoutDS: AwHomeLayoutDS,
    layoutEH: AwHomeLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHO0lBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsT0FBTyxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsU0FBUztTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUseUJBQXlCO1NBQzlCLEVBQUU7WUFDRCxFQUFFLEVBQUUsaUJBQWlCO1NBQ3RCLEVBQUU7WUFDRCxFQUFFLEVBQUUsd0JBQXdCO1NBQzdCLEVBQUU7WUFDRCxFQUFFLEVBQUUsMkJBQTJCO1NBQ2hDLEVBQUU7WUFDRCxFQUFFLEVBQUUsc0JBQXNCO1NBQzNCLEVBQUU7WUFDRCxFQUFFLEVBQUUsbUJBQW1CO1NBQ3hCLEVBQUU7WUFDRCxFQUFFLEVBQUUseUJBQXlCO1NBQzlCLEVBQUU7WUFDRCxFQUFFLEVBQUUsZ0JBQWdCO1NBQ3JCLENBQUM7SUFDRixRQUFRLEVBQUUsY0FBYztJQUN4QixRQUFRLEVBQUUsY0FBYztJQUN4QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3SG9tZUxheW91dERTIH0gZnJvbSAnLi9ob21lLWxheW91dC5kcyc7XG5pbXBvcnQgeyBBd0hvbWVMYXlvdXRFSCB9IGZyb20gJy4vaG9tZS1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IEF3SG9tZUxheW91dENvbmZpZyA9IHtcbiAgbGF5b3V0SWQ6ICdhdy1ob21lLWxheW91dCcsXG4gIHdpZGdldHM6IFt7XG4gICAgaWQ6ICdhdy1oZXJvJyxcbiAgfSwge1xuICAgIGlkOiAnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1idWJibGUtY2hhcnQnLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1ob21lLWZhY2V0cy13cmFwcGVyJyxcbiAgfSwge1xuICAgIGlkOiAnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlcicsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWhvbWUtYXV0b2NvbXBsZXRlJyxcbiAgfSwge1xuICAgIGlkOiAnYXctbGlua2VkLW9iamVjdHMnLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWNoYXJ0LXRpcHB5JyxcbiAgfV0sXG4gIGxheW91dERTOiBBd0hvbWVMYXlvdXREUyxcbiAgbGF5b3V0RUg6IEF3SG9tZUxheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH0sXG59O1xuIl19