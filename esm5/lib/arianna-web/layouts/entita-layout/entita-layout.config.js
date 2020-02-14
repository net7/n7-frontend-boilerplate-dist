/**
 * @fileoverview added by tsickle
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
            eventHandler: SmartPaginationEH
        },
    ],
    layoutDS: AwEntitaLayoutDS,
    layoutEH: AwEntitaLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9lbnRpdGEtbGF5b3V0L2VudGl0YS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNDLE1BQU0sS0FBTyxvQkFBb0IsR0FBRztJQUNsQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFDO1FBQzNDLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFO1FBQ25DLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFDO1FBQzFCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFDO1FBQ3hCLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFDO1FBQ3ZCO1lBQ0UsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7U0FDaEM7S0FDRjtJQUNELFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd0VudGl0YUxheW91dERTIH0gZnJvbSAnLi9lbnRpdGEtbGF5b3V0LmRzJztcbmltcG9ydCB7IEF3RW50aXRhTGF5b3V0RUggfSBmcm9tICcuL2VudGl0YS1sYXlvdXQuZWgnO1xuaW1wb3J0IHsgU21hcnRQYWdpbmF0aW9uRFMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vZGF0YS1zb3VyY2VzJztcbmltcG9ydCB7IFNtYXJ0UGFnaW5hdGlvbkVIIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2V2ZW50LWhhbmRsZXJzJztcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBjb25zdCBBd0VudGl0YUxheW91dENvbmZpZyA9IHtcbiAgbGF5b3V0SWQ6ICdhdy1lbnRpdGEtbGF5b3V0JyxcbiAgd2lkZ2V0czogWyAvLyBhcnJheSBvZiBjb21wb25lbnRzIG9mIHRoaXMgbGF5b3V0XG4gICAgeyBpZDogJ2F3LWVudGl0YS1uYXYnLCBoYXNTdGF0aWNEYXRhOiB0cnVlfSxcbiAgICB7IGlkOiAnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicgfSxcbiAgICB7IGlkOiAnYXctbGlua2VkLW9iamVjdHMnfSxcbiAgICB7IGlkOiAnYXctYnViYmxlLWNoYXJ0J30sXG4gICAgeyBpZDogJ2F3LWNoYXJ0LXRpcHB5J30sXG4gICAgeyBcbiAgICAgIGlkOiAnbjctc21hcnQtcGFnaW5hdGlvbicsIFxuICAgICAgZGF0YVNvdXJjZTogU21hcnRQYWdpbmF0aW9uRFMsIFxuICAgICAgZXZlbnRIYW5kbGVyOiBTbWFydFBhZ2luYXRpb25FSFxuICAgIH0sXG4gIF0sXG4gIGxheW91dERTOiBBd0VudGl0YUxheW91dERTLFxuICBsYXlvdXRFSDogQXdFbnRpdGFMYXlvdXRFSCxcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxuICBvcHRpb25zOiB7XG4gICAgLy8gVE9ET1xuICB9XG59OyJdfQ==