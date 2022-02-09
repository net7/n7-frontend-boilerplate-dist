import { MrPostsLayoutDS } from './posts-layout.ds';
import { MrPostsLayoutEH } from './posts-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const MrPostsLayoutConfig = {
    layoutId: 'mr-posts-layout',
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
    layoutDS: MrPostsLayoutDS,
    layoutEH: MrPostsLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    layoutOptions: {}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL3Bvc3RzLWxheW91dC9wb3N0cy1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHO0lBQ2pDLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsT0FBTyxFQUFFO1FBQ1A7WUFDRSxFQUFFLEVBQUUsc0JBQXNCO1NBQzNCLEVBQUU7WUFDRCxFQUFFLEVBQUUseUJBQXlCO1NBQzlCLEVBQUU7WUFDRCxFQUFFLEVBQUUsbUJBQW1CO1NBQ3hCLEVBQUU7WUFDRCxFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLFVBQVUsRUFBRSxpQkFBaUI7WUFDN0IsWUFBWSxFQUFFLGlCQUFpQjtTQUNoQyxFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QjtLQUNGO0lBQ0QsUUFBUSxFQUFFLGVBQWU7SUFDekIsUUFBUSxFQUFFLGVBQWU7SUFDekIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLGFBQWEsRUFBRSxFQUFFO0NBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNclBvc3RzTGF5b3V0RFMgfSBmcm9tICcuL3Bvc3RzLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IE1yUG9zdHNMYXlvdXRFSCB9IGZyb20gJy4vcG9zdHMtbGF5b3V0LmVoJztcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRFMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xyXG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgTXJQb3N0c0xheW91dENvbmZpZyA9IHtcclxuICBsYXlvdXRJZDogJ21yLXBvc3RzLWxheW91dCcsXHJcbiAgd2lkZ2V0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogJ21yLXNlYXJjaC1wYWdlLXRpdGxlJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJ21yLXNlYXJjaC1yZXN1bHRzJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxyXG4gICAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcclxuICAgICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSCxcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICdtci1hZHZhbmNlZC1zZWFyY2gtdGFncydcclxuICAgIH1cclxuICBdLFxyXG4gIGxheW91dERTOiBNclBvc3RzTGF5b3V0RFMsXHJcbiAgbGF5b3V0RUg6IE1yUG9zdHNMYXlvdXRFSCxcclxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxyXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcclxuICBsYXlvdXRPcHRpb25zOiB7fVxyXG59O1xyXG4iXX0=