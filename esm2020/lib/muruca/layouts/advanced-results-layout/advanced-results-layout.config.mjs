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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRztJQUMzQyxRQUFRLEVBQUUsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRTtRQUNQO1lBQ0UsRUFBRSxFQUFFLHNCQUFzQjtTQUMzQixFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7U0FDaEMsRUFBRTtZQUNELEVBQUUsRUFBRSx5QkFBeUI7U0FDOUI7S0FDRjtJQUNELFFBQVEsRUFBRSx5QkFBeUI7SUFDbkMsUUFBUSxFQUFFLHlCQUF5QjtJQUNuQyxrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsYUFBYSxFQUFFLEVBQUU7Q0FDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0RFMgfSBmcm9tICcuL2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0LmRzJztcbmltcG9ydCB7IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0RUggfSBmcm9tICcuL2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0LmVoJztcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkRTIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25FSCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgY29uc3QgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnbXItYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQnLFxuICB3aWRnZXRzOiBbXG4gICAge1xuICAgICAgaWQ6ICdtci1zZWFyY2gtcGFnZS10aXRsZSdcbiAgICB9LCB7XG4gICAgICBpZDogJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlJ1xuICAgIH0sIHtcbiAgICAgIGlkOiAnbXItc2VhcmNoLXJlc3VsdHMnXG4gICAgfSwge1xuICAgICAgaWQ6ICduNy1zbWFydC1wYWdpbmF0aW9uJyxcbiAgICAgIGRhdGFTb3VyY2U6IFNtYXJ0UGFnaW5hdGlvbkRTLFxuICAgICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSCxcbiAgICB9LCB7XG4gICAgICBpZDogJ21yLWFkdmFuY2VkLXNlYXJjaC10YWdzJ1xuICAgIH1cbiAgXSxcbiAgbGF5b3V0RFM6IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0RFMsXG4gIGxheW91dEVIOiBNckFkdmFuY2VkUmVzdWx0c0xheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIGxheW91dE9wdGlvbnM6IHt9XG59O1xuIl19