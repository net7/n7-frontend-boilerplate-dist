import { AwTimelineLayoutDS } from './timeline-layout.ds';
import { AwTimelineLayoutEH } from './timeline-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const AwTimelineLayoutConfig = {
    layoutId: 'aw-timeline-layout',
    widgets: [
        { id: 'aw-timeline' },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-linked-objects' },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        }
    ],
    layoutDS: AwTimelineLayoutDS,
    layoutEH: AwTimelineLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQyxRQUFRLEVBQUUsb0JBQW9CO0lBQzlCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRTtRQUNyQixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRTtRQUMvQixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRTtRQUMzQjtZQUNFLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd1RpbWVsaW5lTGF5b3V0RFMgfSBmcm9tICcuL3RpbWVsaW5lLWxheW91dC5kcyc7XG5pbXBvcnQgeyBBd1RpbWVsaW5lTGF5b3V0RUggfSBmcm9tICcuL3RpbWVsaW5lLWxheW91dC5laCc7XG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IEF3VGltZWxpbmVMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnYXctdGltZWxpbmUtbGF5b3V0JyxcbiAgd2lkZ2V0czogWyAvLyBhcnJheSBvZiBjb21wb25lbnRzIG9mIHRoaXMgbGF5b3V0XG4gICAgeyBpZDogJ2F3LXRpbWVsaW5lJyB9LFxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW5uZXItdGl0bGUnIH0sXG4gICAgeyBpZDogJ2F3LWxpbmtlZC1vYmplY3RzJyB9LFxuICAgIHtcbiAgICAgIGlkOiAnbjctc21hcnQtcGFnaW5hdGlvbicsXG4gICAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcbiAgICAgIGV2ZW50SGFuZGxlcjogU21hcnRQYWdpbmF0aW9uRUgsXG4gICAgfVxuICBdLFxuICBsYXlvdXREUzogQXdUaW1lbGluZUxheW91dERTLFxuICBsYXlvdXRFSDogQXdUaW1lbGluZUxheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH0sXG59O1xuIl19