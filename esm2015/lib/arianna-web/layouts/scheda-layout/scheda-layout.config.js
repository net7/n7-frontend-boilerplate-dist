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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zY2hlZGEtbGF5b3V0L3NjaGVkYS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUzQyxNQUFNLE9BQU8sd0JBQXdCLEdBQUc7SUFDdEMsUUFBUSxFQUFFLGtCQUFrQjs7Ozs7SUFLNUIsT0FBTyxFQUFFO1FBQ04sRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUM7UUFDMUIsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1FBQ2pCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFO1FBQzVCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFO0tBQzdCO0lBQ0QsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixPQUFPLEVBQUU7SUFDUCxPQUFPO0tBQ1I7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3U2NoZWRhTGF5b3V0RFMgfSBmcm9tICcuL3NjaGVkYS1sYXlvdXQuZHMnO1xuaW1wb3J0IHsgQXdTY2hlZGFMYXlvdXRFSCB9IGZyb20gJy4vc2NoZWRhLWxheW91dC5laCc7XG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgY29uc3QgQXdQYXRyaW1vbmlvTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ2F3LXNjaGVkYS1sYXlvdXQnLFxuICAvKipcbiAgICogQXJyYXkgb2YgY29tcG9uZW50cyB5b3Ugd2FudCB0byB1c2VcbiAgICogaW4gdGhpcyBsZXlvdXRcbiAgICovXG4gIHdpZGdldHM6IFtcbiAgICAgeyBpZDogJ2F3LXNpZGViYXItaGVhZGVyJ30sXG4gICAgIHsgaWQ6ICdhdy10cmVlJyB9LFxuICAgICB7IGlkOiAnYXctc2NoZWRhLWJyZWFkY3J1bWJzJyB9LFxuICAgICB7IGlkOiAnYXctc2NoZWRhLW1ldGFkYXRhJyB9LFxuICAgICB7IGlkOiAnYXctc2NoZWRhLWltYWdlJyB9LFxuICAgICB7IGlkOiAnYXctc2NoZWRhLWlubmVyLXRpdGxlJyB9LFxuICAgICB7IGlkOiAnYXctYnViYmxlLWNoYXJ0JyB9LFxuICAgICB7IGlkOiAnYXctbGlua2VkLW9iamVjdHMnIH1cbiAgXSxcbiAgbGF5b3V0RFM6IEF3U2NoZWRhTGF5b3V0RFMsXG4gIGxheW91dEVIOiBBd1NjaGVkYUxheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH1cbn07XG4iXX0=