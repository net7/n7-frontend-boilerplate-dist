import { MrTimelineLayoutDS } from './timeline-layout.ds';
import { MrTimelineLayoutEH } from './timeline-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const MrTimelineLayoutConfig = {
    layoutId: 'mr-timeline-layout',
    widgets: [
        { id: 'mr-timeline' },
        { id: 'mr-map' }
    ],
    layoutDS: MrTimelineLayoutDS,
    layoutEH: MrTimelineLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy90aW1lbGluZS1sYXlvdXQvdGltZWxpbmUtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUc7SUFDcEMsUUFBUSxFQUFFLG9CQUFvQjtJQUM5QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUU7UUFDckIsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixPQUFPLEVBQUU7SUFDUCxPQUFPO0tBQ1I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJUaW1lbGluZUxheW91dERTIH0gZnJvbSAnLi90aW1lbGluZS1sYXlvdXQuZHMnO1xuaW1wb3J0IHsgTXJUaW1lbGluZUxheW91dEVIIH0gZnJvbSAnLi90aW1lbGluZS1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IE1yVGltZWxpbmVMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnbXItdGltZWxpbmUtbGF5b3V0JyxcbiAgd2lkZ2V0czogW1xuICAgIHsgaWQ6ICdtci10aW1lbGluZScgfSxcbiAgICB7IGlkOiAnbXItbWFwJyB9XG4gIF0sXG4gIGxheW91dERTOiBNclRpbWVsaW5lTGF5b3V0RFMsXG4gIGxheW91dEVIOiBNclRpbWVsaW5lTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgb3B0aW9uczoge1xuICAgIC8vIFRPRE9cbiAgfSxcbn07XG4iXX0=