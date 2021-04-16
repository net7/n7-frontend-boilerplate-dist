import { AwMapLayoutDS } from './map-layout.ds';
import { AwMapLayoutEH } from './map-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const AwMapLayoutConfig = {
    layoutId: 'aw-map-layout',
    widgets: [
        { id: 'aw-map' },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-linked-objects' },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        }
    ],
    layoutDS: AwMapLayoutDS,
    layoutEH: AwMapLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9CLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRTtRQUNoQixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRTtRQUMvQixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRTtRQUMzQjtZQUNFLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsYUFBYTtJQUN2QixRQUFRLEVBQUUsYUFBYTtJQUN2QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3TWFwTGF5b3V0RFMgfSBmcm9tICcuL21hcC1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBBd01hcExheW91dEVIIH0gZnJvbSAnLi9tYXAtbGF5b3V0LmVoJztcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRFMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xyXG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgQXdNYXBMYXlvdXRDb25maWcgPSB7XHJcbiAgbGF5b3V0SWQ6ICdhdy1tYXAtbGF5b3V0JyxcclxuICB3aWRnZXRzOiBbIC8vIGFycmF5IG9mIGNvbXBvbmVudHMgb2YgdGhpcyBsYXlvdXRcclxuICAgIHsgaWQ6ICdhdy1tYXAnIH0sXHJcbiAgICB7IGlkOiAnYXctc2NoZWRhLWlubmVyLXRpdGxlJyB9LFxyXG4gICAgeyBpZDogJ2F3LWxpbmtlZC1vYmplY3RzJyB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxyXG4gICAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcclxuICAgICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSCxcclxuICAgIH1cclxuICBdLFxyXG4gIGxheW91dERTOiBBd01hcExheW91dERTLFxyXG4gIGxheW91dEVIOiBBd01hcExheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIC8vIFRPRE9cclxuICB9LFxyXG59O1xyXG4iXX0=