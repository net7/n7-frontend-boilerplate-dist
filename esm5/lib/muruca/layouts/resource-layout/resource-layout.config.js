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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9yZXNvdXJjZS1sYXlvdXQvcmVzb3VyY2UtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQUc7SUFDcEMsUUFBUSxFQUFFLG9CQUFvQjtJQUM5QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUU7S0FDdkI7SUFDRCxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNclJlc291cmNlTGF5b3V0RFMgfSBmcm9tICcuL3Jlc291cmNlLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IE1yUmVzb3VyY2VMYXlvdXRFSCB9IGZyb20gJy4vcmVzb3VyY2UtbGF5b3V0LmVoJztcclxuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1yUmVzb3VyY2VMYXlvdXRDb25maWcgPSB7XHJcbiAgbGF5b3V0SWQ6ICdtci1yZXNvdXJjZS1sYXlvdXQnLFxyXG4gIHdpZGdldHM6IFtcclxuICAgIHsgaWQ6ICdtci1yZWFkLW1vcmUnIH1cclxuICBdLFxyXG4gIGxheW91dERTOiBNclJlc291cmNlTGF5b3V0RFMsXHJcbiAgbGF5b3V0RUg6IE1yUmVzb3VyY2VMYXlvdXRFSCxcclxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxyXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcclxuICBvcHRpb25zOiB7XHJcbiAgICAvLyBUT0RPXHJcbiAgfSxcclxufTtcclxuIl19