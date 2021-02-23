import { MrPostsLayoutDS } from './posts-layout.ds';
import { MrPostsLayoutEH } from './posts-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export var MrPostsLayoutConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9wb3N0cy1sYXlvdXQvcG9zdHMtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRztJQUNqQyxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLE9BQU8sRUFBRTtRQUNQO1lBQ0UsRUFBRSxFQUFFLHNCQUFzQjtTQUMzQixFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7U0FDaEMsRUFBRTtZQUNELEVBQUUsRUFBRSx5QkFBeUI7U0FDOUI7S0FDRjtJQUNELFFBQVEsRUFBRSxlQUFlO0lBQ3pCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixhQUFhLEVBQUUsRUFBRTtDQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJQb3N0c0xheW91dERTIH0gZnJvbSAnLi9wb3N0cy1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBNclBvc3RzTGF5b3V0RUggfSBmcm9tICcuL3Bvc3RzLWxheW91dC5laCc7XHJcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkRTIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkVIIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2V2ZW50LWhhbmRsZXJzJztcclxuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1yUG9zdHNMYXlvdXRDb25maWcgPSB7XHJcbiAgbGF5b3V0SWQ6ICdtci1wb3N0cy1sYXlvdXQnLFxyXG4gIHdpZGdldHM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICdtci1zZWFyY2gtcGFnZS10aXRsZSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICdtci1zZWFyY2gtcmVzdWx0cydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICduNy1zbWFydC1wYWdpbmF0aW9uJyxcclxuICAgICAgZGF0YVNvdXJjZTogU21hcnRQYWdpbmF0aW9uRFMsXHJcbiAgICAgIGV2ZW50SGFuZGxlcjogU21hcnRQYWdpbmF0aW9uRUgsXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnbXItYWR2YW5jZWQtc2VhcmNoLXRhZ3MnXHJcbiAgICB9XHJcbiAgXSxcclxuICBsYXlvdXREUzogTXJQb3N0c0xheW91dERTLFxyXG4gIGxheW91dEVIOiBNclBvc3RzTGF5b3V0RUgsXHJcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcclxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXHJcbiAgbGF5b3V0T3B0aW9uczoge31cclxufTtcclxuIl19