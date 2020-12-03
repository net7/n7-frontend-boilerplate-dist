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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQyxRQUFRLEVBQUUsb0JBQW9CO0lBQzlCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRTtRQUNyQixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRTtRQUMvQixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRTtRQUMzQjtZQUNFLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd1RpbWVsaW5lTGF5b3V0RFMgfSBmcm9tICcuL3RpbWVsaW5lLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IEF3VGltZWxpbmVMYXlvdXRFSCB9IGZyb20gJy4vdGltZWxpbmUtbGF5b3V0LmVoJztcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRFMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xyXG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgQXdUaW1lbGluZUxheW91dENvbmZpZyA9IHtcclxuICBsYXlvdXRJZDogJ2F3LXRpbWVsaW5lLWxheW91dCcsXHJcbiAgd2lkZ2V0czogWyAvLyBhcnJheSBvZiBjb21wb25lbnRzIG9mIHRoaXMgbGF5b3V0XHJcbiAgICB7IGlkOiAnYXctdGltZWxpbmUnIH0sXHJcbiAgICB7IGlkOiAnYXctc2NoZWRhLWlubmVyLXRpdGxlJyB9LFxyXG4gICAgeyBpZDogJ2F3LWxpbmtlZC1vYmplY3RzJyB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxyXG4gICAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcclxuICAgICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSCxcclxuICAgIH1cclxuICBdLFxyXG4gIGxheW91dERTOiBBd1RpbWVsaW5lTGF5b3V0RFMsXHJcbiAgbGF5b3V0RUg6IEF3VGltZWxpbmVMYXlvdXRFSCxcclxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxyXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcclxuICBvcHRpb25zOiB7XHJcbiAgICAvLyBUT0RPXHJcbiAgfSxcclxufTtcclxuIl19