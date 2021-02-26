import { AwSchedaLayoutDS } from './scheda-layout.ds';
import { AwSchedaLayoutEH } from './scheda-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export var AwPatrimonioLayoutConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zY2hlZGEtbGF5b3V0L3NjaGVkYS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRztJQUN0QyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCOzs7T0FHRztJQUNILE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFO1FBQzNCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRTtRQUNqQixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRTtRQUMvQixFQUFFLEVBQUUsRUFBRSxvQkFBb0IsRUFBRTtRQUM1QixFQUFFLEVBQUUsRUFBRSxvQkFBb0IsRUFBRTtRQUM1QixFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRTtRQUN6QixFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUU7UUFDdkIsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUU7UUFDL0IsRUFBRSxFQUFFLEVBQUUscUJBQXFCLEVBQUU7UUFDN0IsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUU7UUFDeEIsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7S0FDNUI7SUFDRCxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd1NjaGVkYUxheW91dERTIH0gZnJvbSAnLi9zY2hlZGEtbGF5b3V0LmRzJztcclxuaW1wb3J0IHsgQXdTY2hlZGFMYXlvdXRFSCB9IGZyb20gJy4vc2NoZWRhLWxheW91dC5laCc7XHJcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBd1BhdHJpbW9uaW9MYXlvdXRDb25maWcgPSB7XHJcbiAgbGF5b3V0SWQ6ICdhdy1zY2hlZGEtbGF5b3V0JyxcclxuICAvKipcclxuICAgKiBBcnJheSBvZiBjb21wb25lbnRzIHlvdSB3YW50IHRvIHVzZVxyXG4gICAqIGluIHRoaXMgbGV5b3V0XHJcbiAgICovXHJcbiAgd2lkZ2V0czogW1xyXG4gICAgeyBpZDogJ2F3LXNpZGViYXItaGVhZGVyJyB9LFxyXG4gICAgeyBpZDogJ2F3LXRyZWUnIH0sXHJcbiAgICB7IGlkOiAnYXctc2NoZWRhLWJyZWFkY3J1bWJzJyB9LFxyXG4gICAgeyBpZDogJ2F3LXNjaGVkYS1tZXRhZGF0YScgfSxcclxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtZHJvcGRvd24nIH0sXHJcbiAgICB7IGlkOiAnYXctc2NoZWRhLWltYWdlJyB9LFxyXG4gICAgeyBpZDogJ2F3LXNjaGVkYS1wZGYnIH0sXHJcbiAgICB7IGlkOiAnYXctc2NoZWRhLWlubmVyLXRpdGxlJyB9LFxyXG4gICAgeyBpZDogJ2F3LXJlbGF0ZWQtZW50aXRpZXMnIH0sXHJcbiAgICB7IGlkOiAnYXctY2hhcnQtdGlwcHknIH0sXHJcbiAgICB7IGlkOiAnYXctbGlua2VkLW9iamVjdHMnIH0sXHJcbiAgXSxcclxuICBsYXlvdXREUzogQXdTY2hlZGFMYXlvdXREUyxcclxuICBsYXlvdXRFSDogQXdTY2hlZGFMYXlvdXRFSCxcclxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxyXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcclxuICBvcHRpb25zOiB7XHJcbiAgICAvLyBUT0RPXHJcbiAgfSxcclxufTtcclxuIl19