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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRztJQUNsQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCOzs7T0FHRztJQUNILE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUU7UUFDeEYsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7UUFDM0IsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRTtRQUNwRDtZQUNFLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd1NlYXJjaExheW91dERTIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmRzJztcclxuaW1wb3J0IHsgQXdTZWFyY2hMYXlvdXRFSCB9IGZyb20gJy4vc2VhcmNoLWxheW91dC5laCc7XHJcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRFMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRUggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZXZlbnQtaGFuZGxlcnMnO1xyXG5pbXBvcnQgeyBBd0ZhY2V0c1dyYXBwZXJEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCB7IEF3RmFjZXRzV3JhcHBlckVIIH0gZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF3U2VhcmNoTGF5b3V0Q29uZmlnID0ge1xyXG4gIGxheW91dElkOiAnYXctc2VhcmNoLWxheW91dCcsXHJcbiAgLyoqXHJcbiAgICogQXJyYXkgb2YgY29tcG9uZW50cyB5b3Ugd2FudCB0byB1c2VcclxuICAgKiBpbiB0aGlzIGxheW91dFxyXG4gICAqL1xyXG4gIHdpZGdldHM6IFtcclxuICAgIHsgaWQ6ICdmYWNldHMtd3JhcHBlcicsIGRhdGFTb3VyY2U6IEF3RmFjZXRzV3JhcHBlckRTLCBldmVudEhhbmRsZXI6IEF3RmFjZXRzV3JhcHBlckVIIH0sXHJcbiAgICB7IGlkOiAnYXctbGlua2VkLW9iamVjdHMnIH0sXHJcbiAgICB7IGlkOiAnYXctc2VhcmNoLWxheW91dC10YWJzJywgaGFzU3RhdGljRGF0YTogdHJ1ZSB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxyXG4gICAgICBkYXRhU291cmNlOiBTbWFydFBhZ2luYXRpb25EUyxcclxuICAgICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSCxcclxuICAgIH0sXHJcbiAgXSxcclxuICBsYXlvdXREUzogQXdTZWFyY2hMYXlvdXREUyxcclxuICBsYXlvdXRFSDogQXdTZWFyY2hMYXlvdXRFSCxcclxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxyXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcclxuICBvcHRpb25zOiB7XHJcbiAgICAvLyBUT0RPXHJcbiAgfSxcclxufTtcclxuIl19