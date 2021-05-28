import { AwGalleryLayoutDS } from './gallery-layout.ds';
import { AwGalleryLayoutEH } from './gallery-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import { AwFacetsWrapperDS } from '../../data-sources';
import { AwFacetsWrapperEH } from '../../event-handlers';
export var AwGalleryLayoutConfig = {
    layoutId: 'aw-gallery-layout',
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
    layoutDS: AwGalleryLayoutDS,
    layoutEH: AwGalleryLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvZ2FsbGVyeS1sYXlvdXQvZ2FsbGVyeS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRztJQUNuQyxRQUFRLEVBQUUsbUJBQW1CO0lBQzdCOzs7T0FHRztJQUNILE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUU7UUFDeEYsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7UUFDM0IsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRTtRQUNwRDtZQUNFLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0Isa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd0dhbGxlcnlMYXlvdXREUyB9IGZyb20gJy4vZ2FsbGVyeS1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBBd0dhbGxlcnlMYXlvdXRFSCB9IGZyb20gJy4vZ2FsbGVyeS1sYXlvdXQuZWgnO1xyXG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XHJcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkRTIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkVIIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2V2ZW50LWhhbmRsZXJzJztcclxuaW1wb3J0IHsgQXdGYWNldHNXcmFwcGVyRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgeyBBd0ZhY2V0c1dyYXBwZXJFSCB9IGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBd0dhbGxlcnlMYXlvdXRDb25maWcgPSB7XHJcbiAgbGF5b3V0SWQ6ICdhdy1nYWxsZXJ5LWxheW91dCcsXHJcbiAgLyoqXHJcbiAgICogQXJyYXkgb2YgY29tcG9uZW50cyB5b3Ugd2FudCB0byB1c2VcclxuICAgKiBpbiB0aGlzIGxheW91dFxyXG4gICAqL1xyXG4gIHdpZGdldHM6IFtcclxuICAgIHsgaWQ6ICdmYWNldHMtd3JhcHBlcicsIGRhdGFTb3VyY2U6IEF3RmFjZXRzV3JhcHBlckRTLCBldmVudEhhbmRsZXI6IEF3RmFjZXRzV3JhcHBlckVIIH0sXHJcbiAgICB7IGlkOiAnYXctbGlua2VkLW9iamVjdHMnIH0sXHJcbiAgICB7IGlkOiAnYXctc2VhcmNoLWxheW91dC10YWJzJywgaGFzU3RhdGljRGF0YTogdHJ1ZSB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxyXG4gICAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcclxuICAgICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSCxcclxuICAgIH0sXHJcbiAgXSxcclxuICBsYXlvdXREUzogQXdHYWxsZXJ5TGF5b3V0RFMsXHJcbiAgbGF5b3V0RUg6IEF3R2FsbGVyeUxheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIC8vIFRPRE9cclxuICB9LFxyXG59O1xyXG4iXX0=