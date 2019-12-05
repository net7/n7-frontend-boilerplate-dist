/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AwEntitaLayoutDS } from './entita-layout.ds';
import { AwEntitaLayoutEH } from './entita-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
/** @type {?} */
export var AwEntitaLayoutConfig = {
    layoutId: 'aw-entita-layout',
    widgets: [
        { id: 'aw-entita-nav', hasStaticData: true },
        { id: 'aw-entita-metadata-viewer' },
        { id: 'aw-linked-objects' },
        { id: 'aw-bubble-chart' },
    ],
    layoutDS: AwEntitaLayoutDS,
    layoutEH: AwEntitaLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9lbnRpdGEtbGF5b3V0L2VudGl0YS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUzQyxNQUFNLEtBQU8sb0JBQW9CLEdBQUc7SUFDbEMsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBQztRQUMzQyxFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRTtRQUNuQyxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBQztRQUMxQixFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBQztLQUN6QjtJQUNELFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd0VudGl0YUxheW91dERTIH0gZnJvbSAnLi9lbnRpdGEtbGF5b3V0LmRzJztcbmltcG9ydCB7IEF3RW50aXRhTGF5b3V0RUggfSBmcm9tICcuL2VudGl0YS1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IEF3RW50aXRhTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ2F3LWVudGl0YS1sYXlvdXQnLFxuICB3aWRnZXRzOiBbIC8vIGFycmF5IG9mIGNvbXBvbmVudHMgb2YgdGhpcyBsYXlvdXRcbiAgICB7IGlkOiAnYXctZW50aXRhLW5hdicsIGhhc1N0YXRpY0RhdGE6IHRydWV9LFxuICAgIHsgaWQ6ICdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJyB9LFxuICAgIHsgaWQ6ICdhdy1saW5rZWQtb2JqZWN0cyd9LFxuICAgIHsgaWQ6ICdhdy1idWJibGUtY2hhcnQnfSxcbiAgXSxcbiAgbGF5b3V0RFM6IEF3RW50aXRhTGF5b3V0RFMsXG4gIGxheW91dEVIOiBBd0VudGl0YUxheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH1cbn07Il19