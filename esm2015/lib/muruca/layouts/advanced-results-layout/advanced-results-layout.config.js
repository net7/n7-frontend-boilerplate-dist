import { MrAdvancedResultsLayoutDS } from './advanced-results-layout.ds';
import { MrAdvancedResultsLayoutEH } from './advanced-results-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const MrAdvancedResultsLayoutConfig = {
    layoutId: 'mr-advanced-results-layout',
    widgets: [
        {
            id: 'mr-search-page-title'
        }, {
            id: 'mr-search-results-title'
        }, {
            id: 'mr-search-results'
        }, {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        }
    ],
    layoutDS: MrAdvancedResultsLayoutDS,
    layoutEH: MrAdvancedResultsLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    layoutOptions: {}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0L2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQUc7SUFDM0MsUUFBUSxFQUFFLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUU7UUFDUDtZQUNFLEVBQUUsRUFBRSxzQkFBc0I7U0FDM0IsRUFBRTtZQUNELEVBQUUsRUFBRSx5QkFBeUI7U0FDOUIsRUFBRTtZQUNELEVBQUUsRUFBRSxtQkFBbUI7U0FDeEIsRUFBRTtZQUNELEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUseUJBQXlCO0lBQ25DLFFBQVEsRUFBRSx5QkFBeUI7SUFDbkMsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLGFBQWEsRUFBRSxFQUFFO0NBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTIH0gZnJvbSAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5kcyc7XG5pbXBvcnQgeyBNckFkdmFuY2VkUmVzdWx0c0xheW91dEVIIH0gZnJvbSAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5laCc7XG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ21yLWFkdmFuY2VkLXJlc3VsdHMtbGF5b3V0JyxcbiAgd2lkZ2V0czogW1xuICAgIHtcbiAgICAgIGlkOiAnbXItc2VhcmNoLXBhZ2UtdGl0bGUnXG4gICAgfSwge1xuICAgICAgaWQ6ICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZSdcbiAgICB9LCB7XG4gICAgICBpZDogJ21yLXNlYXJjaC1yZXN1bHRzJ1xuICAgIH0sIHtcbiAgICAgIGlkOiAnbjctc21hcnQtcGFnaW5hdGlvbicsXG4gICAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcbiAgICAgIGV2ZW50SGFuZGxlcjogU21hcnRQYWdpbmF0aW9uRUgsXG4gICAgfVxuICBdLFxuICBsYXlvdXREUzogTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXREUyxcbiAgbGF5b3V0RUg6IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgbGF5b3V0T3B0aW9uczoge31cbn07XG4iXX0=