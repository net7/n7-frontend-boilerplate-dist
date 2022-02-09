import { AwSearchLayoutDS } from './search-layout.ds';
import { AwSearchLayoutEH } from './search-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import { AwFacetsWrapperDS } from '../../data-sources';
import { AwFacetsWrapperEH } from '../../event-handlers';
export const AwSearchLayoutConfig = {
    layoutId: 'aw-search-layout',
    /**
     * Array of components you want to use
     * in this layout
     */
    widgets: [
        { id: 'facets-wrapper', dataSource: AwFacetsWrapperDS, eventHandler: AwFacetsWrapperEH },
        { id: 'aw-linked-objects' },
        { id: 'aw-search-layout-tabs', hasStaticData: true },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        },
    ],
    layoutDS: AwSearchLayoutDS,
    layoutEH: AwSearchLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUI7OztPQUdHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRTtRQUN4RixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRTtRQUMzQixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO1FBQ3BEO1lBQ0UsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7U0FDaEM7S0FDRjtJQUNELFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3U2VhcmNoTGF5b3V0RFMgfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBBd1NlYXJjaExheW91dEVIIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmVoJztcclxuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xyXG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25FSCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9ldmVudC1oYW5kbGVycyc7XHJcbmltcG9ydCB7IEF3RmFjZXRzV3JhcHBlckRTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0IHsgQXdGYWNldHNXcmFwcGVyRUggfSBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgQXdTZWFyY2hMYXlvdXRDb25maWcgPSB7XHJcbiAgbGF5b3V0SWQ6ICdhdy1zZWFyY2gtbGF5b3V0JyxcclxuICAvKipcclxuICAgKiBBcnJheSBvZiBjb21wb25lbnRzIHlvdSB3YW50IHRvIHVzZVxyXG4gICAqIGluIHRoaXMgbGF5b3V0XHJcbiAgICovXHJcbiAgd2lkZ2V0czogW1xyXG4gICAgeyBpZDogJ2ZhY2V0cy13cmFwcGVyJywgZGF0YVNvdXJjZTogQXdGYWNldHNXcmFwcGVyRFMsIGV2ZW50SGFuZGxlcjogQXdGYWNldHNXcmFwcGVyRUggfSxcclxuICAgIHsgaWQ6ICdhdy1saW5rZWQtb2JqZWN0cycgfSxcclxuICAgIHsgaWQ6ICdhdy1zZWFyY2gtbGF5b3V0LXRhYnMnLCBoYXNTdGF0aWNEYXRhOiB0cnVlIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnbjctc21hcnQtcGFnaW5hdGlvbicsXHJcbiAgICAgIGRhdGFTb3VyY2U6IFNtYXJ0UGFnaW5hdGlvbkRTLFxyXG4gICAgICBldmVudEhhbmRsZXI6IFNtYXJ0UGFnaW5hdGlvbkVILFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxheW91dERTOiBBd1NlYXJjaExheW91dERTLFxyXG4gIGxheW91dEVIOiBBd1NlYXJjaExheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIC8vIFRPRE9cclxuICB9LFxyXG59O1xyXG4iXX0=