import { AwHomeLayoutDS } from './home-layout.ds';
import { AwHomeLayoutEH } from './home-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const AwHomeLayoutConfig = {
    layoutId: 'aw-home-layout',
    widgets: [{
            id: 'aw-carousel',
        }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHO0lBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsT0FBTyxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsYUFBYTtTQUNsQixFQUFFO1lBQ0QsRUFBRSxFQUFFLFNBQVM7U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLGlCQUFpQjtTQUN0QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHdCQUF3QjtTQUM3QixFQUFFO1lBQ0QsRUFBRSxFQUFFLDJCQUEyQjtTQUNoQyxFQUFFO1lBQ0QsRUFBRSxFQUFFLHNCQUFzQjtTQUMzQixFQUFFO1lBQ0QsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLGdCQUFnQjtTQUNyQixDQUFDO0lBQ0YsUUFBUSxFQUFFLGNBQWM7SUFDeEIsUUFBUSxFQUFFLGNBQWM7SUFDeEIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd0hvbWVMYXlvdXREUyB9IGZyb20gJy4vaG9tZS1sYXlvdXQuZHMnO1xuaW1wb3J0IHsgQXdIb21lTGF5b3V0RUggfSBmcm9tICcuL2hvbWUtbGF5b3V0LmVoJztcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBjb25zdCBBd0hvbWVMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnYXctaG9tZS1sYXlvdXQnLFxuICB3aWRnZXRzOiBbe1xuICAgIGlkOiAnYXctY2Fyb3VzZWwnLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1oZXJvJyxcbiAgfSwge1xuICAgIGlkOiAnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1idWJibGUtY2hhcnQnLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1ob21lLWZhY2V0cy13cmFwcGVyJyxcbiAgfSwge1xuICAgIGlkOiAnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlcicsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWhvbWUtYXV0b2NvbXBsZXRlJyxcbiAgfSwge1xuICAgIGlkOiAnYXctbGlua2VkLW9iamVjdHMnLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWNoYXJ0LXRpcHB5JyxcbiAgfV0sXG4gIGxheW91dERTOiBBd0hvbWVMYXlvdXREUyxcbiAgbGF5b3V0RUg6IEF3SG9tZUxheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH0sXG59O1xuIl19