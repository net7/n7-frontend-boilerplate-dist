/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AwSearchLayoutDS } from './search-layout.ds';
import { AwSearchLayoutEH } from './search-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
import { FacetsWrapperDS, SmartPaginationDS } from '../../../common/data-sources';
import { FacetsWrapperEH, SmartPaginationEH } from '../../../common/event-handlers';
/** @type {?} */
export const AwSearchLayoutConfig = {
    layoutId: 'aw-search-layout',
    /**
     * Array of components you want to use
     * in this layout
     */
    widgets: [
        { id: 'facets-wrapper', dataSource: FacetsWrapperDS, eventHandler: FacetsWrapperEH },
        { id: 'aw-linked-objects' },
        { id: 'aw-search-layout-tabs', hasStaticData: true },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH
        },
    ],
    layoutDS: AwSearchLayoutDS,
    layoutEH: AwSearchLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFcEYsTUFBTSxPQUFPLG9CQUFvQixHQUFHO0lBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7Ozs7O0lBSzVCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRTtRQUNwRixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRTtRQUMzQixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO1FBQ3BEO1lBQ0UsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7U0FDaEM7S0FDRjtJQUNELFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd1NlYXJjaExheW91dERTIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmRzJztcbmltcG9ydCB7IEF3U2VhcmNoTGF5b3V0RUggfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IEZhY2V0c1dyYXBwZXJEUywgU21hcnRQYWdpbmF0aW9uRFMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGF0YS1zb3VyY2VzJztcbmltcG9ydCB7IEZhY2V0c1dyYXBwZXJFSCwgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgY29uc3QgQXdTZWFyY2hMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnYXctc2VhcmNoLWxheW91dCcsXG4gIC8qKlxuICAgKiBBcnJheSBvZiBjb21wb25lbnRzIHlvdSB3YW50IHRvIHVzZVxuICAgKiBpbiB0aGlzIGxheW91dFxuICAgKi9cbiAgd2lkZ2V0czogW1xuICAgIHsgaWQ6ICdmYWNldHMtd3JhcHBlcicsIGRhdGFTb3VyY2U6IEZhY2V0c1dyYXBwZXJEUywgZXZlbnRIYW5kbGVyOiBGYWNldHNXcmFwcGVyRUggfSxcbiAgICB7IGlkOiAnYXctbGlua2VkLW9iamVjdHMnIH0sXG4gICAgeyBpZDogJ2F3LXNlYXJjaC1sYXlvdXQtdGFicycsIGhhc1N0YXRpY0RhdGE6IHRydWUgfSxcbiAgICB7XG4gICAgICBpZDogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxuICAgICAgZGF0YVNvdXJjZTogU21hcnRQYWdpbmF0aW9uRFMsXG4gICAgICBldmVudEhhbmRsZXI6IFNtYXJ0UGFnaW5hdGlvbkVIXG4gICAgfSxcbiAgXSxcbiAgbGF5b3V0RFM6IEF3U2VhcmNoTGF5b3V0RFMsXG4gIGxheW91dEVIOiBBd1NlYXJjaExheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH1cbn07XG4iXX0=