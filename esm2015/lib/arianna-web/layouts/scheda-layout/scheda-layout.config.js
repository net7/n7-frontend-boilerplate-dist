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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zY2hlZGEtbGF5b3V0L3NjaGVkYS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUzQyxNQUFNLE9BQU8sd0JBQXdCLEdBQUc7SUFDdEMsUUFBUSxFQUFFLGtCQUFrQjs7Ozs7SUFLNUIsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7UUFDM0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1FBQ2pCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFO1FBQzVCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFO1FBQ3hCLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFO0tBQzVCO0lBQ0QsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixPQUFPLEVBQUU7SUFDUCxPQUFPO0tBQ1I7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3U2NoZWRhTGF5b3V0RFMgfSBmcm9tICcuL3NjaGVkYS1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBBd1NjaGVkYUxheW91dEVIIH0gZnJvbSAnLi9zY2hlZGEtbGF5b3V0LmVoJztcclxuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF3UGF0cmltb25pb0xheW91dENvbmZpZyA9IHtcclxuICBsYXlvdXRJZDogJ2F3LXNjaGVkYS1sYXlvdXQnLFxyXG4gIC8qKlxyXG4gICAqIEFycmF5IG9mIGNvbXBvbmVudHMgeW91IHdhbnQgdG8gdXNlXHJcbiAgICogaW4gdGhpcyBsZXlvdXRcclxuICAgKi9cclxuICB3aWRnZXRzOiBbXHJcbiAgICB7IGlkOiAnYXctc2lkZWJhci1oZWFkZXInIH0sXHJcbiAgICB7IGlkOiAnYXctdHJlZScgfSxcclxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnIH0sXHJcbiAgICB7IGlkOiAnYXctc2NoZWRhLW1ldGFkYXRhJyB9LFxyXG4gICAgeyBpZDogJ2F3LXNjaGVkYS1pbWFnZScgfSxcclxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW5uZXItdGl0bGUnIH0sXHJcbiAgICB7IGlkOiAnYXctYnViYmxlLWNoYXJ0JyB9LFxyXG4gICAgeyBpZDogJ2F3LWNoYXJ0LXRpcHB5JyB9LFxyXG4gICAgeyBpZDogJ2F3LWxpbmtlZC1vYmplY3RzJyB9LFxyXG4gIF0sXHJcbiAgbGF5b3V0RFM6IEF3U2NoZWRhTGF5b3V0RFMsXHJcbiAgbGF5b3V0RUg6IEF3U2NoZWRhTGF5b3V0RUgsXHJcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcclxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXHJcbiAgb3B0aW9uczoge1xyXG4gICAgLy8gVE9ET1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==