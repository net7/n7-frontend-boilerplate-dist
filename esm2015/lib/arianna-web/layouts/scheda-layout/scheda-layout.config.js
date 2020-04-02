/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AwSchedaLayoutDS } from './scheda-layout.ds';
import { AwSchedaLayoutEH } from './scheda-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
/** @type {?} */
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
        { id: 'aw-scheda-image' },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-bubble-chart' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zY2hlZGEtbGF5b3V0L3NjaGVkYS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNDLE1BQU0sT0FBTyx3QkFBd0IsR0FBRztJQUN0QyxRQUFRLEVBQUUsa0JBQWtCOzs7OztJQUs1QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRTtRQUMzQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUU7UUFDakIsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUU7UUFDL0IsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLEVBQUU7UUFDNUIsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUU7UUFDekIsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUU7UUFDL0IsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUU7UUFDekIsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUU7UUFDeEIsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7S0FDNUI7SUFDRCxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdTY2hlZGFMYXlvdXREUyB9IGZyb20gJy4vc2NoZWRhLWxheW91dC5kcyc7XG5pbXBvcnQgeyBBd1NjaGVkYUxheW91dEVIIH0gZnJvbSAnLi9zY2hlZGEtbGF5b3V0LmVoJztcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBjb25zdCBBd1BhdHJpbW9uaW9MYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnYXctc2NoZWRhLWxheW91dCcsXG4gIC8qKlxuICAgKiBBcnJheSBvZiBjb21wb25lbnRzIHlvdSB3YW50IHRvIHVzZVxuICAgKiBpbiB0aGlzIGxleW91dFxuICAgKi9cbiAgd2lkZ2V0czogW1xuICAgIHsgaWQ6ICdhdy1zaWRlYmFyLWhlYWRlcicgfSxcbiAgICB7IGlkOiAnYXctdHJlZScgfSxcbiAgICB7IGlkOiAnYXctc2NoZWRhLWJyZWFkY3J1bWJzJyB9LFxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtbWV0YWRhdGEnIH0sXG4gICAgeyBpZDogJ2F3LXNjaGVkYS1pbWFnZScgfSxcbiAgICB7IGlkOiAnYXctc2NoZWRhLWlubmVyLXRpdGxlJyB9LFxuICAgIHsgaWQ6ICdhdy1idWJibGUtY2hhcnQnIH0sXG4gICAgeyBpZDogJ2F3LWNoYXJ0LXRpcHB5JyB9LFxuICAgIHsgaWQ6ICdhdy1saW5rZWQtb2JqZWN0cycgfSxcbiAgXSxcbiAgbGF5b3V0RFM6IEF3U2NoZWRhTGF5b3V0RFMsXG4gIGxheW91dEVIOiBBd1NjaGVkYUxheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH0sXG59O1xuIl19