import { AwSchedaLayoutDS } from './scheda-layout.ds';
import { AwSchedaLayoutEH } from './scheda-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const AwPatrimonioLayoutConfig = {
    layoutId: 'aw-scheda-layout',
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: [
        { id: 'aw-sidebar-header' },
        { id: 'aw-tree' },
        { id: 'aw-scheda-breadcrumbs' },
        { id: 'aw-scheda-metadata' },
        { id: 'aw-scheda-dropdown' },
        { id: 'aw-scheda-image' },
        { id: 'aw-scheda-pdf' },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-related-entities' },
        { id: 'aw-chart-tippy' },
        { id: 'aw-linked-objects' },
    ],
    layoutDS: AwSchedaLayoutDS,
    layoutEH: AwSchedaLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zY2hlZGEtbGF5b3V0L3NjaGVkYS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRztJQUN0QyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCOzs7T0FHRztJQUNILE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFO1FBQzNCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRTtRQUNqQixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRTtRQUMvQixFQUFFLEVBQUUsRUFBRSxvQkFBb0IsRUFBRTtRQUM1QixFQUFFLEVBQUUsRUFBRSxvQkFBb0IsRUFBRTtRQUM1QixFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRTtRQUN6QixFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUU7UUFDdkIsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUU7UUFDL0IsRUFBRSxFQUFFLEVBQUUscUJBQXFCLEVBQUU7UUFDN0IsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUU7UUFDeEIsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7S0FDNUI7SUFDRCxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd1NjaGVkYUxheW91dERTIH0gZnJvbSAnLi9zY2hlZGEtbGF5b3V0LmRzJztcbmltcG9ydCB7IEF3U2NoZWRhTGF5b3V0RUggfSBmcm9tICcuL3NjaGVkYS1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IEF3UGF0cmltb25pb0xheW91dENvbmZpZyA9IHtcbiAgbGF5b3V0SWQ6ICdhdy1zY2hlZGEtbGF5b3V0JyxcbiAgLyoqXG4gICAqIEFycmF5IG9mIGNvbXBvbmVudHMgeW91IHdhbnQgdG8gdXNlXG4gICAqIGluIHRoaXMgbGV5b3V0XG4gICAqL1xuICB3aWRnZXRzOiBbXG4gICAgeyBpZDogJ2F3LXNpZGViYXItaGVhZGVyJyB9LFxuICAgIHsgaWQ6ICdhdy10cmVlJyB9LFxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnIH0sXG4gICAgeyBpZDogJ2F3LXNjaGVkYS1tZXRhZGF0YScgfSxcbiAgICB7IGlkOiAnYXctc2NoZWRhLWRyb3Bkb3duJyB9LFxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW1hZ2UnIH0sXG4gICAgeyBpZDogJ2F3LXNjaGVkYS1wZGYnIH0sXG4gICAgeyBpZDogJ2F3LXNjaGVkYS1pbm5lci10aXRsZScgfSxcbiAgICB7IGlkOiAnYXctcmVsYXRlZC1lbnRpdGllcycgfSxcbiAgICB7IGlkOiAnYXctY2hhcnQtdGlwcHknIH0sXG4gICAgeyBpZDogJ2F3LWxpbmtlZC1vYmplY3RzJyB9LFxuICBdLFxuICBsYXlvdXREUzogQXdTY2hlZGFMYXlvdXREUyxcbiAgbGF5b3V0RUg6IEF3U2NoZWRhTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgb3B0aW9uczoge1xuICAgIC8vIFRPRE9cbiAgfSxcbn07XG4iXX0=