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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9sYXlvdXRzL3Bvc3RzLWxheW91dC9wb3N0cy1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHO0lBQ2pDLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsT0FBTyxFQUFFO1FBQ1A7WUFDRSxFQUFFLEVBQUUsc0JBQXNCO1NBQzNCLEVBQUU7WUFDRCxFQUFFLEVBQUUseUJBQXlCO1NBQzlCLEVBQUU7WUFDRCxFQUFFLEVBQUUsbUJBQW1CO1NBQ3hCLEVBQUU7WUFDRCxFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLFVBQVUsRUFBRSxpQkFBaUI7WUFDN0IsWUFBWSxFQUFFLGlCQUFpQjtTQUNoQyxFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QjtLQUNGO0lBQ0QsUUFBUSxFQUFFLGVBQWU7SUFDekIsUUFBUSxFQUFFLGVBQWU7SUFDekIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLGFBQWEsRUFBRSxFQUFFO0NBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNclBvc3RzTGF5b3V0RFMgfSBmcm9tICcuL3Bvc3RzLWxheW91dC5kcyc7XG5pbXBvcnQgeyBNclBvc3RzTGF5b3V0RUggfSBmcm9tICcuL3Bvc3RzLWxheW91dC5laCc7XG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IE1yUG9zdHNMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnbXItcG9zdHMtbGF5b3V0JyxcbiAgd2lkZ2V0czogW1xuICAgIHtcbiAgICAgIGlkOiAnbXItc2VhcmNoLXBhZ2UtdGl0bGUnXG4gICAgfSwge1xuICAgICAgaWQ6ICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZSdcbiAgICB9LCB7XG4gICAgICBpZDogJ21yLXNlYXJjaC1yZXN1bHRzJ1xuICAgIH0sIHtcbiAgICAgIGlkOiAnbjctc21hcnQtcGFnaW5hdGlvbicsXG4gICAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcbiAgICAgIGV2ZW50SGFuZGxlcjogU21hcnRQYWdpbmF0aW9uRUgsXG4gICAgfSwge1xuICAgICAgaWQ6ICdtci1hZHZhbmNlZC1zZWFyY2gtdGFncydcbiAgICB9XG4gIF0sXG4gIGxheW91dERTOiBNclBvc3RzTGF5b3V0RFMsXG4gIGxheW91dEVIOiBNclBvc3RzTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgbGF5b3V0T3B0aW9uczoge31cbn07XG4iXX0=