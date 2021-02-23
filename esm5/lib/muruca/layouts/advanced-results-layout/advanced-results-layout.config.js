import { MrAdvancedResultsLayoutDS } from './advanced-results-layout.ds';
import { MrAdvancedResultsLayoutEH } from './advanced-results-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export var MrAdvancedResultsLayoutConfig = {
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
        }, {
            id: 'mr-advanced-search-tags'
        }
    ],
    layoutDS: MrAdvancedResultsLayoutDS,
    layoutEH: MrAdvancedResultsLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    layoutOptions: {}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0L2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQUc7SUFDM0MsUUFBUSxFQUFFLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUU7UUFDUDtZQUNFLEVBQUUsRUFBRSxzQkFBc0I7U0FDM0IsRUFBRTtZQUNELEVBQUUsRUFBRSx5QkFBeUI7U0FDOUIsRUFBRTtZQUNELEVBQUUsRUFBRSxtQkFBbUI7U0FDeEIsRUFBRTtZQUNELEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDLEVBQUU7WUFDRCxFQUFFLEVBQUUseUJBQXlCO1NBQzlCO0tBQ0Y7SUFDRCxRQUFRLEVBQUUseUJBQXlCO0lBQ25DLFFBQVEsRUFBRSx5QkFBeUI7SUFDbkMsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLGFBQWEsRUFBRSxFQUFFO0NBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTIH0gZnJvbSAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0RUggfSBmcm9tICcuL2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0LmVoJztcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRFMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xyXG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRDb25maWcgPSB7XHJcbiAgbGF5b3V0SWQ6ICdtci1hZHZhbmNlZC1yZXN1bHRzLWxheW91dCcsXHJcbiAgd2lkZ2V0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogJ21yLXNlYXJjaC1wYWdlLXRpdGxlJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJ21yLXNlYXJjaC1yZXN1bHRzJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxyXG4gICAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcclxuICAgICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSCxcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICdtci1hZHZhbmNlZC1zZWFyY2gtdGFncydcclxuICAgIH1cclxuICBdLFxyXG4gIGxheW91dERTOiBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTLFxyXG4gIGxheW91dEVIOiBNckFkdmFuY2VkUmVzdWx0c0xheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIGxheW91dE9wdGlvbnM6IHt9XHJcbn07XHJcbiJdfQ==