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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRztJQUMzQyxRQUFRLEVBQUUsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRTtRQUNQO1lBQ0UsRUFBRSxFQUFFLHNCQUFzQjtTQUMzQixFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7U0FDaEMsRUFBRTtZQUNELEVBQUUsRUFBRSx5QkFBeUI7U0FDOUI7S0FDRjtJQUNELFFBQVEsRUFBRSx5QkFBeUI7SUFDbkMsUUFBUSxFQUFFLHlCQUF5QjtJQUNuQyxrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsYUFBYSxFQUFFLEVBQUU7Q0FDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0RFMgfSBmcm9tICcuL2FkdmFuY2VkLXJlc3VsdHMtbGF5b3V0LmRzJztcclxuaW1wb3J0IHsgTXJBZHZhbmNlZFJlc3VsdHNMYXlvdXRFSCB9IGZyb20gJy4vYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZWgnO1xyXG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25FSCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9ldmVudC1oYW5kbGVycyc7XHJcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBNckFkdmFuY2VkUmVzdWx0c0xheW91dENvbmZpZyA9IHtcclxuICBsYXlvdXRJZDogJ21yLWFkdmFuY2VkLXJlc3VsdHMtbGF5b3V0JyxcclxuICB3aWRnZXRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnbXItc2VhcmNoLXBhZ2UtdGl0bGUnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnbXItc2VhcmNoLXJlc3VsdHMnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnbjctc21hcnQtcGFnaW5hdGlvbicsXHJcbiAgICAgIGRhdGFTb3VyY2U6IFNtYXJ0UGFnaW5hdGlvbkRTLFxyXG4gICAgICBldmVudEhhbmRsZXI6IFNtYXJ0UGFnaW5hdGlvbkVILFxyXG4gICAgfSwge1xyXG4gICAgICBpZDogJ21yLWFkdmFuY2VkLXNlYXJjaC10YWdzJ1xyXG4gICAgfVxyXG4gIF0sXHJcbiAgbGF5b3V0RFM6IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0RFMsXHJcbiAgbGF5b3V0RUg6IE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0RUgsXHJcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcclxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXHJcbiAgbGF5b3V0T3B0aW9uczoge31cclxufTtcclxuIl19