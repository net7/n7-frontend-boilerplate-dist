import { AwEntitaLayoutDS } from './entita-layout.ds';
import { AwEntitaLayoutEH } from './entita-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export var AwEntitaLayoutConfig = {
    layoutId: 'aw-entita-layout',
    widgets: [
        { id: 'aw-entita-nav', hasStaticData: true },
        { id: 'aw-entita-metadata-viewer' },
        { id: 'aw-linked-objects' },
        { id: 'aw-bubble-chart' },
        { id: 'aw-related-entities' },
        { id: 'aw-chart-tippy' },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        },
    ],
    layoutDS: AwEntitaLayoutDS,
    layoutEH: AwEntitaLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9lbnRpdGEtbGF5b3V0L2VudGl0YS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRztJQUNsQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO1FBQzVDLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFO1FBQ25DLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFO1FBQzNCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLHFCQUFxQixFQUFFO1FBQzdCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFO1FBQ3hCO1lBQ0UsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7U0FDaEM7S0FDRjtJQUNELFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3RW50aXRhTGF5b3V0RFMgfSBmcm9tICcuL2VudGl0YS1sYXlvdXQuZHMnO1xuaW1wb3J0IHsgQXdFbnRpdGFMYXlvdXRFSCB9IGZyb20gJy4vZW50aXRhLWxheW91dC5laCc7XG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IEF3RW50aXRhTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ2F3LWVudGl0YS1sYXlvdXQnLFxuICB3aWRnZXRzOiBbIC8vIGFycmF5IG9mIGNvbXBvbmVudHMgb2YgdGhpcyBsYXlvdXRcbiAgICB7IGlkOiAnYXctZW50aXRhLW5hdicsIGhhc1N0YXRpY0RhdGE6IHRydWUgfSxcbiAgICB7IGlkOiAnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicgfSxcbiAgICB7IGlkOiAnYXctbGlua2VkLW9iamVjdHMnIH0sXG4gICAgeyBpZDogJ2F3LWJ1YmJsZS1jaGFydCcgfSxcbiAgICB7IGlkOiAnYXctcmVsYXRlZC1lbnRpdGllcycgfSxcbiAgICB7IGlkOiAnYXctY2hhcnQtdGlwcHknIH0sXG4gICAge1xuICAgICAgaWQ6ICduNy1zbWFydC1wYWdpbmF0aW9uJyxcbiAgICAgIGRhdGFTb3VyY2U6IFNtYXJ0UGFnaW5hdGlvbkRTLFxuICAgICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSCxcbiAgICB9LFxuICBdLFxuICBsYXlvdXREUzogQXdFbnRpdGFMYXlvdXREUyxcbiAgbGF5b3V0RUg6IEF3RW50aXRhTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgb3B0aW9uczoge1xuICAgIC8vIFRPRE9cbiAgfSxcbn07XG4iXX0=