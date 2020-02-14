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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zY2hlZGEtbGF5b3V0L3NjaGVkYS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUzQyxNQUFNLEtBQU8sd0JBQXdCLEdBQUc7SUFDdEMsUUFBUSxFQUFFLGtCQUFrQjs7Ozs7SUFLNUIsT0FBTyxFQUFFO1FBQ04sRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUM7UUFDMUIsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1FBQ2pCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFO1FBQzVCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFO1FBQ3hCLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFO0tBQzdCO0lBQ0QsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixPQUFPLEVBQUU7SUFDUCxPQUFPO0tBQ1I7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3U2NoZWRhTGF5b3V0RFMgfSBmcm9tICcuL3NjaGVkYS1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBBd1NjaGVkYUxheW91dEVIIH0gZnJvbSAnLi9zY2hlZGEtbGF5b3V0LmVoJztcclxuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF3UGF0cmltb25pb0xheW91dENvbmZpZyA9IHtcclxuICBsYXlvdXRJZDogJ2F3LXNjaGVkYS1sYXlvdXQnLFxyXG4gIC8qKlxyXG4gICAqIEFycmF5IG9mIGNvbXBvbmVudHMgeW91IHdhbnQgdG8gdXNlXHJcbiAgICogaW4gdGhpcyBsZXlvdXRcclxuICAgKi9cclxuICB3aWRnZXRzOiBbXHJcbiAgICAgeyBpZDogJ2F3LXNpZGViYXItaGVhZGVyJ30sXHJcbiAgICAgeyBpZDogJ2F3LXRyZWUnIH0sXHJcbiAgICAgeyBpZDogJ2F3LXNjaGVkYS1icmVhZGNydW1icycgfSxcclxuICAgICB7IGlkOiAnYXctc2NoZWRhLW1ldGFkYXRhJyB9LFxyXG4gICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW1hZ2UnIH0sXHJcbiAgICAgeyBpZDogJ2F3LXNjaGVkYS1pbm5lci10aXRsZScgfSxcclxuICAgICB7IGlkOiAnYXctYnViYmxlLWNoYXJ0JyB9LFxyXG4gICAgIHsgaWQ6ICdhdy1jaGFydC10aXBweScgfSxcclxuICAgICB7IGlkOiAnYXctbGlua2VkLW9iamVjdHMnIH1cclxuICBdLFxyXG4gIGxheW91dERTOiBBd1NjaGVkYUxheW91dERTLFxyXG4gIGxheW91dEVIOiBBd1NjaGVkYUxheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIC8vIFRPRE9cclxuICB9XHJcbn07XHJcbiJdfQ==