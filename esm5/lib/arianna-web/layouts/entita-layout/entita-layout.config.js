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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9lbnRpdGEtbGF5b3V0L2VudGl0YS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUzQyxNQUFNLEtBQU8sb0JBQW9CLEdBQUc7SUFDbEMsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRTtRQUM1QyxFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRTtRQUNuQyxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRTtRQUMzQixFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRTtRQUN6QixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRTtRQUN4QjtZQUNFLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1NBQ2hDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdFbnRpdGFMYXlvdXREUyB9IGZyb20gJy4vZW50aXRhLWxheW91dC5kcyc7XG5pbXBvcnQgeyBBd0VudGl0YUxheW91dEVIIH0gZnJvbSAnLi9lbnRpdGEtbGF5b3V0LmVoJztcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkRTIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25FSCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9ldmVudC1oYW5kbGVycyc7XG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xuXG5leHBvcnQgY29uc3QgQXdFbnRpdGFMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnYXctZW50aXRhLWxheW91dCcsXG4gIHdpZGdldHM6IFsgLy8gYXJyYXkgb2YgY29tcG9uZW50cyBvZiB0aGlzIGxheW91dFxuICAgIHsgaWQ6ICdhdy1lbnRpdGEtbmF2JywgaGFzU3RhdGljRGF0YTogdHJ1ZSB9LFxuICAgIHsgaWQ6ICdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJyB9LFxuICAgIHsgaWQ6ICdhdy1saW5rZWQtb2JqZWN0cycgfSxcbiAgICB7IGlkOiAnYXctYnViYmxlLWNoYXJ0JyB9LFxuICAgIHsgaWQ6ICdhdy1jaGFydC10aXBweScgfSxcbiAgICB7XG4gICAgICBpZDogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxuICAgICAgZGF0YVNvdXJjZTogU21hcnRQYWdpbmF0aW9uRFMsXG4gICAgICBldmVudEhhbmRsZXI6IFNtYXJ0UGFnaW5hdGlvbkVILFxuICAgIH0sXG4gIF0sXG4gIGxheW91dERTOiBBd0VudGl0YUxheW91dERTLFxuICBsYXlvdXRFSDogQXdFbnRpdGFMYXlvdXRFSCxcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxuICBvcHRpb25zOiB7XG4gICAgLy8gVE9ET1xuICB9LFxufTtcbiJdfQ==