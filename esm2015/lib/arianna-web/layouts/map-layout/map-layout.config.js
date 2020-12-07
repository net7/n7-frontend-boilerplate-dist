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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9CLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRTtRQUNoQixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRTtRQUMvQixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRTtRQUMzQjtZQUNFLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsYUFBYTtJQUN2QixRQUFRLEVBQUUsYUFBYTtJQUN2QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3TWFwTGF5b3V0RFMgfSBmcm9tICcuL21hcC1sYXlvdXQuZHMnO1xuaW1wb3J0IHsgQXdNYXBMYXlvdXRFSCB9IGZyb20gJy4vbWFwLWxheW91dC5laCc7XG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IEF3TWFwTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ2F3LW1hcC1sYXlvdXQnLFxuICB3aWRnZXRzOiBbIC8vIGFycmF5IG9mIGNvbXBvbmVudHMgb2YgdGhpcyBsYXlvdXRcbiAgICB7IGlkOiAnYXctbWFwJyB9LFxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW5uZXItdGl0bGUnIH0sXG4gICAgeyBpZDogJ2F3LWxpbmtlZC1vYmplY3RzJyB9LFxuICAgIHtcbiAgICAgIGlkOiAnbjctc21hcnQtcGFnaW5hdGlvbicsXG4gICAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcbiAgICAgIGV2ZW50SGFuZGxlcjogU21hcnRQYWdpbmF0aW9uRUgsXG4gICAgfVxuICBdLFxuICBsYXlvdXREUzogQXdNYXBMYXlvdXREUyxcbiAgbGF5b3V0RUg6IEF3TWFwTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgb3B0aW9uczoge1xuICAgIC8vIFRPRE9cbiAgfSxcbn07XG4iXX0=