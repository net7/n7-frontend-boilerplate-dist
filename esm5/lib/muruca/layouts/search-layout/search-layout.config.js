/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-layout/search-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MrSearchLayoutDS } from './search-layout.ds';
import { MrSearchLayoutEH } from './search-layout.eh';
import { FacetsWrapperDS, SmartPaginationDS } from '../../../common/data-sources';
import { FacetsWrapperEH, SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
/** @type {?} */
export var MrSearchLayoutConfig = {
    layoutId: 'mr-search-layout',
    widgets: [{
            id: 'facets-wrapper', dataSource: FacetsWrapperDS, eventHandler: FacetsWrapperEH
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEYsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUzQyxNQUFNLEtBQU8sb0JBQW9CLEdBQUc7SUFDbEMsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixPQUFPLEVBQUUsQ0FBQztZQUNSLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxlQUFlO1NBQ2pGLEVBQUU7WUFDRCxFQUFFLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsZ0JBQWdCO1NBQ3BELEVBQUU7WUFDRCxFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLFVBQVUsRUFBRSxpQkFBaUI7WUFDN0IsWUFBWSxFQUFFLGlCQUFpQjtTQUNoQyxDQUFDO0lBQ0YsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixhQUFhLEVBQUUsRUFBRTtDQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1yU2VhcmNoTGF5b3V0RFMgfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuZHMnO1xuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXRFSCB9IGZyb20gJy4vc2VhcmNoLWxheW91dC5laCc7XG5pbXBvcnQgeyBGYWNldHNXcmFwcGVyRFMsIFNtYXJ0UGFnaW5hdGlvbkRTIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgeyBGYWNldHNXcmFwcGVyRUgsIFNtYXJ0UGFnaW5hdGlvbkVIIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2V2ZW50LWhhbmRsZXJzJztcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBjb25zdCBNclNlYXJjaExheW91dENvbmZpZyA9IHtcbiAgbGF5b3V0SWQ6ICdtci1zZWFyY2gtbGF5b3V0JyxcbiAgd2lkZ2V0czogW3tcbiAgICBpZDogJ2ZhY2V0cy13cmFwcGVyJywgZGF0YVNvdXJjZTogRmFjZXRzV3JhcHBlckRTLCBldmVudEhhbmRsZXI6IEZhY2V0c1dyYXBwZXJFSFxuICB9LCB7XG4gICAgaWQ6ICdtci1yZXNvdXJjZXMnLCBkYXRhU291cmNlOiBEUy5Nckl0ZW1QcmV2aWV3c0RTLFxuICB9LCB7XG4gICAgaWQ6ICduNy1zbWFydC1wYWdpbmF0aW9uJyxcbiAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcbiAgICBldmVudEhhbmRsZXI6IFNtYXJ0UGFnaW5hdGlvbkVILFxuICB9XSxcbiAgbGF5b3V0RFM6IE1yU2VhcmNoTGF5b3V0RFMsXG4gIGxheW91dEVIOiBNclNlYXJjaExheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIGxheW91dE9wdGlvbnM6IHt9XG59O1xuIl19