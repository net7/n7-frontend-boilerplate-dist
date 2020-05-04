/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/scheda-layout/scheda-layout.config.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zY2hlZGEtbGF5b3V0L3NjaGVkYS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUzQyxNQUFNLE9BQU8sd0JBQXdCLEdBQUc7SUFDdEMsUUFBUSxFQUFFLGtCQUFrQjs7Ozs7SUFLNUIsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7UUFDM0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1FBQ2pCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFO1FBQzVCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFO1FBQ3hCLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFO0tBQzVCO0lBQ0QsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixPQUFPLEVBQUU7SUFDUCxPQUFPO0tBQ1I7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3U2NoZWRhTGF5b3V0RFMgfSBmcm9tICcuL3NjaGVkYS1sYXlvdXQuZHMnO1xuaW1wb3J0IHsgQXdTY2hlZGFMYXlvdXRFSCB9IGZyb20gJy4vc2NoZWRhLWxheW91dC5laCc7XG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgY29uc3QgQXdQYXRyaW1vbmlvTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ2F3LXNjaGVkYS1sYXlvdXQnLFxuICAvKipcbiAgICogQXJyYXkgb2YgY29tcG9uZW50cyB5b3Ugd2FudCB0byB1c2VcbiAgICogaW4gdGhpcyBsZXlvdXRcbiAgICovXG4gIHdpZGdldHM6IFtcbiAgICB7IGlkOiAnYXctc2lkZWJhci1oZWFkZXInIH0sXG4gICAgeyBpZDogJ2F3LXRyZWUnIH0sXG4gICAgeyBpZDogJ2F3LXNjaGVkYS1icmVhZGNydW1icycgfSxcbiAgICB7IGlkOiAnYXctc2NoZWRhLW1ldGFkYXRhJyB9LFxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW1hZ2UnIH0sXG4gICAgeyBpZDogJ2F3LXNjaGVkYS1pbm5lci10aXRsZScgfSxcbiAgICB7IGlkOiAnYXctYnViYmxlLWNoYXJ0JyB9LFxuICAgIHsgaWQ6ICdhdy1jaGFydC10aXBweScgfSxcbiAgICB7IGlkOiAnYXctbGlua2VkLW9iamVjdHMnIH0sXG4gIF0sXG4gIGxheW91dERTOiBBd1NjaGVkYUxheW91dERTLFxuICBsYXlvdXRFSDogQXdTY2hlZGFMYXlvdXRFSCxcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxuICBvcHRpb25zOiB7XG4gICAgLy8gVE9ET1xuICB9LFxufTtcbiJdfQ==