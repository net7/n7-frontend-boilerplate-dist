import { MrResourceLayoutDS } from './resource-layout.ds';
import { MrResourceLayoutEH } from './resource-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export var MrResourceLayoutConfig = {
    layoutId: 'mr-resource-layout',
    widgets: [
        { id: 'mr-read-more' }
    ],
    layoutDS: MrResourceLayoutDS,
    layoutEH: MrResourceLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9yZXNvdXJjZS1sYXlvdXQvcmVzb3VyY2UtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQUc7SUFDcEMsUUFBUSxFQUFFLG9CQUFvQjtJQUM5QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUU7S0FDdkI7SUFDRCxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNclJlc291cmNlTGF5b3V0RFMgfSBmcm9tICcuL3Jlc291cmNlLWxheW91dC5kcyc7XG5pbXBvcnQgeyBNclJlc291cmNlTGF5b3V0RUggfSBmcm9tICcuL3Jlc291cmNlLWxheW91dC5laCc7XG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgY29uc3QgTXJSZXNvdXJjZUxheW91dENvbmZpZyA9IHtcbiAgbGF5b3V0SWQ6ICdtci1yZXNvdXJjZS1sYXlvdXQnLFxuICB3aWRnZXRzOiBbXG4gICAgeyBpZDogJ21yLXJlYWQtbW9yZScgfVxuICBdLFxuICBsYXlvdXREUzogTXJSZXNvdXJjZUxheW91dERTLFxuICBsYXlvdXRFSDogTXJSZXNvdXJjZUxheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH0sXG59O1xuIl19