/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AwEntitaLayoutDS } from './entita-layout.ds';
import { AwEntitaLayoutEH } from './entita-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
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
        { id: 'aw-chart-tippy' },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        },
    ],
    layoutDS: AwEntitaLayoutDS,
    layoutEH: AwEntitaLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9lbnRpdGEtbGF5b3V0L2VudGl0YS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUzQyxNQUFNLEtBQU8sb0JBQW9CLEdBQUc7SUFDbEMsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRTtRQUM1QyxFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRTtRQUNuQyxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRTtRQUMzQixFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRTtRQUN6QixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRTtRQUN4QjtZQUNFLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdFbnRpdGFMYXlvdXREUyB9IGZyb20gJy4vZW50aXRhLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IEF3RW50aXRhTGF5b3V0RUggfSBmcm9tICcuL2VudGl0YS1sYXlvdXQuZWgnO1xyXG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25FSCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9ldmVudC1oYW5kbGVycyc7XHJcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBd0VudGl0YUxheW91dENvbmZpZyA9IHtcclxuICBsYXlvdXRJZDogJ2F3LWVudGl0YS1sYXlvdXQnLFxyXG4gIHdpZGdldHM6IFsgLy8gYXJyYXkgb2YgY29tcG9uZW50cyBvZiB0aGlzIGxheW91dFxyXG4gICAgeyBpZDogJ2F3LWVudGl0YS1uYXYnLCBoYXNTdGF0aWNEYXRhOiB0cnVlIH0sXHJcbiAgICB7IGlkOiAnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicgfSxcclxuICAgIHsgaWQ6ICdhdy1saW5rZWQtb2JqZWN0cycgfSxcclxuICAgIHsgaWQ6ICdhdy1idWJibGUtY2hhcnQnIH0sXHJcbiAgICB7IGlkOiAnYXctY2hhcnQtdGlwcHknIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnbjctc21hcnQtcGFnaW5hdGlvbicsXHJcbiAgICAgIGRhdGFTb3VyY2U6IFNtYXJ0UGFnaW5hdGlvbkRTLFxyXG4gICAgICBldmVudEhhbmRsZXI6IFNtYXJ0UGFnaW5hdGlvbkVILFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxheW91dERTOiBBd0VudGl0YUxheW91dERTLFxyXG4gIGxheW91dEVIOiBBd0VudGl0YUxheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIC8vIFRPRE9cclxuICB9LFxyXG59O1xyXG4iXX0=