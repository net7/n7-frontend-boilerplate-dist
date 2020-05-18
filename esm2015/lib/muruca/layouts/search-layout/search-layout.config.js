/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MrSearchLayoutDS } from './search-layout.ds';
import { MrSearchLayoutEH } from './search-layout.eh';
import { FacetsWrapperDS, SmartPaginationDS } from '../../../common/data-sources';
import { FacetsWrapperEH, SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
/** @type {?} */
export const MrSearchLayoutConfig = {
    layoutId: 'mr-search-layout',
    widgets: [{
            id: 'facets-wrapper',
            dataSource: FacetsWrapperDS,
            eventHandler: FacetsWrapperEH
        }, {
            id: 'mr-search-page-title'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRixPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNDLE1BQU0sT0FBTyxvQkFBb0IsR0FBRztJQUNsQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE9BQU8sRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLGdCQUFnQjtZQUNwQixVQUFVLEVBQUUsZUFBZTtZQUMzQixZQUFZLEVBQUUsZUFBZTtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHNCQUFzQjtTQUMzQixFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixFQUFFO1lBQ0QsRUFBRSxFQUFFLGdCQUFnQjtTQUNyQixFQUFFO1lBQ0QsRUFBRSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLGdCQUFnQjtTQUNwRCxFQUFFO1lBQ0QsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7U0FDaEMsQ0FBQztJQUNGLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsYUFBYSxFQUFFLEVBQUU7Q0FDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNclNlYXJjaExheW91dERTIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmRzJztcbmltcG9ydCB7IE1yU2VhcmNoTGF5b3V0RUggfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuZWgnO1xuaW1wb3J0IHsgRmFjZXRzV3JhcHBlckRTLCBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0IHsgRmFjZXRzV3JhcHBlckVILCBTbWFydFBhZ2luYXRpb25FSCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgY29uc3QgTXJTZWFyY2hMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnbXItc2VhcmNoLWxheW91dCcsXG4gIHdpZGdldHM6IFt7XG4gICAgaWQ6ICdmYWNldHMtd3JhcHBlcicsXG4gICAgZGF0YVNvdXJjZTogRmFjZXRzV3JhcHBlckRTLFxuICAgIGV2ZW50SGFuZGxlcjogRmFjZXRzV3JhcHBlckVIXG4gIH0sIHtcbiAgICBpZDogJ21yLXNlYXJjaC1wYWdlLXRpdGxlJ1xuICB9LCB7XG4gICAgaWQ6ICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZSdcbiAgfSwge1xuICAgIGlkOiAnbXItc2VhcmNoLXJlc3VsdHMnXG4gIH0sIHtcbiAgICBpZDogJ21yLXNlYXJjaC10YWdzJ1xuICB9LCB7XG4gICAgaWQ6ICdtci1yZXNvdXJjZXMnLCBkYXRhU291cmNlOiBEUy5Nckl0ZW1QcmV2aWV3c0RTLFxuICB9LCB7XG4gICAgaWQ6ICduNy1zbWFydC1wYWdpbmF0aW9uJyxcbiAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcbiAgICBldmVudEhhbmRsZXI6IFNtYXJ0UGFnaW5hdGlvbkVILFxuICB9XSxcbiAgbGF5b3V0RFM6IE1yU2VhcmNoTGF5b3V0RFMsXG4gIGxheW91dEVIOiBNclNlYXJjaExheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIGxheW91dE9wdGlvbnM6IHt9XG59O1xuIl19