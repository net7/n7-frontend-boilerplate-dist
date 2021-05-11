import { MrSearchLayoutDS } from './search-layout.ds';
import { MrSearchLayoutEH } from './search-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export var MrSearchLayoutConfig = {
    layoutId: 'mr-search-layout',
    widgets: [{
            id: 'mr-search-page-title'
        }, {
            id: 'mr-search-page-description'
        }, {
            id: 'mr-search-results-title'
        }, {
            id: 'mr-search-results'
        }, {
            id: 'mr-search-tags'
        }, {
            id: 'mr-resources', dataSource: DS.MrItemPreviewsDS,
        }, {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        }],
    layoutDS: MrSearchLayoutDS,
    layoutEH: MrSearchLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    layoutOptions: {}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUc7SUFDbEMsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixPQUFPLEVBQUUsQ0FBQztZQUNSLEVBQUUsRUFBRSxzQkFBc0I7U0FDM0IsRUFBRTtZQUNELEVBQUUsRUFBRSw0QkFBNEI7U0FDakMsRUFBRTtZQUNELEVBQUUsRUFBRSx5QkFBeUI7U0FDOUIsRUFBRTtZQUNELEVBQUUsRUFBRSxtQkFBbUI7U0FDeEIsRUFBRTtZQUNELEVBQUUsRUFBRSxnQkFBZ0I7U0FDckIsRUFBRTtZQUNELEVBQUUsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0I7U0FDcEQsRUFBRTtZQUNELEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDLENBQUM7SUFDRixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLGFBQWEsRUFBRSxFQUFFO0NBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNclNlYXJjaExheW91dERTIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmRzJztcclxuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXRFSCB9IGZyb20gJy4vc2VhcmNoLWxheW91dC5laCc7XHJcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkRTIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkVIIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2V2ZW50LWhhbmRsZXJzJztcclxuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1yU2VhcmNoTGF5b3V0Q29uZmlnID0ge1xyXG4gIGxheW91dElkOiAnbXItc2VhcmNoLWxheW91dCcsXHJcbiAgd2lkZ2V0czogW3tcclxuICAgIGlkOiAnbXItc2VhcmNoLXBhZ2UtdGl0bGUnXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdtci1zZWFyY2gtcGFnZS1kZXNjcmlwdGlvbidcclxuICB9LCB7XHJcbiAgICBpZDogJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlJ1xyXG4gIH0sIHtcclxuICAgIGlkOiAnbXItc2VhcmNoLXJlc3VsdHMnXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdtci1zZWFyY2gtdGFncydcclxuICB9LCB7XHJcbiAgICBpZDogJ21yLXJlc291cmNlcycsIGRhdGFTb3VyY2U6IERTLk1ySXRlbVByZXZpZXdzRFMsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICduNy1zbWFydC1wYWdpbmF0aW9uJyxcclxuICAgIGRhdGFTb3VyY2U6IFNtYXJ0UGFnaW5hdGlvbkRTLFxyXG4gICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSCxcclxuICB9XSxcclxuICBsYXlvdXREUzogTXJTZWFyY2hMYXlvdXREUyxcclxuICBsYXlvdXRFSDogTXJTZWFyY2hMYXlvdXRFSCxcclxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxyXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcclxuICBsYXlvdXRPcHRpb25zOiB7fVxyXG59O1xyXG4iXX0=