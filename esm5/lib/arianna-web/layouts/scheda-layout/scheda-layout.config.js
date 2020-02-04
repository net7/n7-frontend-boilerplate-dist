/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AwSchedaLayoutDS } from './scheda-layout.ds';
import { AwSchedaLayoutEH } from './scheda-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
/** @type {?} */
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
        { id: 'aw-scheda-image' },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-bubble-chart' },
        { id: 'aw-chart-tippy' },
        { id: 'aw-linked-objects' }
    ],
    layoutDS: AwSchedaLayoutDS,
    layoutEH: AwSchedaLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zY2hlZGEtbGF5b3V0L3NjaGVkYS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNDLE1BQU0sS0FBTyx3QkFBd0IsR0FBRztJQUN0QyxRQUFRLEVBQUUsa0JBQWtCOzs7OztJQUs1QixPQUFPLEVBQUU7UUFDTixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBQztRQUMxQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUU7UUFDakIsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUU7UUFDL0IsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLEVBQUU7UUFDNUIsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUU7UUFDekIsRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUU7UUFDL0IsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUU7UUFDekIsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUU7UUFDeEIsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7S0FDN0I7SUFDRCxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdTY2hlZGFMYXlvdXREUyB9IGZyb20gJy4vc2NoZWRhLWxheW91dC5kcyc7XG5pbXBvcnQgeyBBd1NjaGVkYUxheW91dEVIIH0gZnJvbSAnLi9zY2hlZGEtbGF5b3V0LmVoJztcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBjb25zdCBBd1BhdHJpbW9uaW9MYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnYXctc2NoZWRhLWxheW91dCcsXG4gIC8qKlxuICAgKiBBcnJheSBvZiBjb21wb25lbnRzIHlvdSB3YW50IHRvIHVzZVxuICAgKiBpbiB0aGlzIGxleW91dFxuICAgKi9cbiAgd2lkZ2V0czogW1xuICAgICB7IGlkOiAnYXctc2lkZWJhci1oZWFkZXInfSxcbiAgICAgeyBpZDogJ2F3LXRyZWUnIH0sXG4gICAgIHsgaWQ6ICdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnIH0sXG4gICAgIHsgaWQ6ICdhdy1zY2hlZGEtbWV0YWRhdGEnIH0sXG4gICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW1hZ2UnIH0sXG4gICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW5uZXItdGl0bGUnIH0sXG4gICAgIHsgaWQ6ICdhdy1idWJibGUtY2hhcnQnIH0sXG4gICAgIHsgaWQ6ICdhdy1jaGFydC10aXBweScgfSxcbiAgICAgeyBpZDogJ2F3LWxpbmtlZC1vYmplY3RzJyB9XG4gIF0sXG4gIGxheW91dERTOiBBd1NjaGVkYUxheW91dERTLFxuICBsYXlvdXRFSDogQXdTY2hlZGFMYXlvdXRFSCxcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxuICBvcHRpb25zOiB7XG4gICAgLy8gVE9ET1xuICB9XG59O1xuIl19