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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9wb3N0cy1sYXlvdXQvcG9zdHMtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQyxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLE9BQU8sRUFBRTtRQUNQO1lBQ0UsRUFBRSxFQUFFLHNCQUFzQjtTQUMzQixFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7U0FDaEMsRUFBRTtZQUNELEVBQUUsRUFBRSx5QkFBeUI7U0FDOUI7S0FDRjtJQUNELFFBQVEsRUFBRSxlQUFlO0lBQ3pCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixhQUFhLEVBQUUsRUFBRTtDQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJQb3N0c0xheW91dERTIH0gZnJvbSAnLi9wb3N0cy1sYXlvdXQuZHMnO1xuaW1wb3J0IHsgTXJQb3N0c0xheW91dEVIIH0gZnJvbSAnLi9wb3N0cy1sYXlvdXQuZWgnO1xuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRFMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGF0YS1zb3VyY2VzJztcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkVIIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2V2ZW50LWhhbmRsZXJzJztcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBjb25zdCBNclBvc3RzTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ21yLXBvc3RzLWxheW91dCcsXG4gIHdpZGdldHM6IFtcbiAgICB7XG4gICAgICBpZDogJ21yLXNlYXJjaC1wYWdlLXRpdGxlJ1xuICAgIH0sIHtcbiAgICAgIGlkOiAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUnXG4gICAgfSwge1xuICAgICAgaWQ6ICdtci1zZWFyY2gtcmVzdWx0cydcbiAgICB9LCB7XG4gICAgICBpZDogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxuICAgICAgZGF0YVNvdXJjZTogU21hcnRQYWdpbmF0aW9uRFMsXG4gICAgICBldmVudEhhbmRsZXI6IFNtYXJ0UGFnaW5hdGlvbkVILFxuICAgIH0sIHtcbiAgICAgIGlkOiAnbXItYWR2YW5jZWQtc2VhcmNoLXRhZ3MnXG4gICAgfVxuICBdLFxuICBsYXlvdXREUzogTXJQb3N0c0xheW91dERTLFxuICBsYXlvdXRFSDogTXJQb3N0c0xheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIGxheW91dE9wdGlvbnM6IHt9XG59O1xuIl19