/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AwSearchLayoutDS } from './search-layout.ds';
import { AwSearchLayoutEH } from './search-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
import { FacetsWrapperDS } from '../../../common/data-sources';
import { FacetsWrapperEH } from '../../../common/event-handlers';
/** @type {?} */
export var AwSearchLayoutConfig = {
    layoutId: 'aw-search-layout',
    /**
     * Array of components you want to use
     * in this layout
     */
    widgets: [
        { id: 'facets-wrapper', dataSource: FacetsWrapperDS, eventHandler: FacetsWrapperEH },
    ],
    layoutDS: AwSearchLayoutDS,
    layoutEH: AwSearchLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFakUsTUFBTSxLQUFPLG9CQUFvQixHQUFHO0lBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7Ozs7O0lBSzVCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRTtLQUNyRjtJQUNELFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd1NlYXJjaExheW91dERTIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmRzJztcbmltcG9ydCB7IEF3U2VhcmNoTGF5b3V0RUggfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcbmltcG9ydCB7IEZhY2V0c1dyYXBwZXJEUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xuaW1wb3J0IHsgRmFjZXRzV3JhcHBlckVIIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IEF3U2VhcmNoTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ2F3LXNlYXJjaC1sYXlvdXQnLFxuICAvKipcbiAgICogQXJyYXkgb2YgY29tcG9uZW50cyB5b3Ugd2FudCB0byB1c2VcbiAgICogaW4gdGhpcyBsYXlvdXRcbiAgICovXG4gIHdpZGdldHM6IFtcbiAgICB7IGlkOiAnZmFjZXRzLXdyYXBwZXInLCBkYXRhU291cmNlOiBGYWNldHNXcmFwcGVyRFMsIGV2ZW50SGFuZGxlcjogRmFjZXRzV3JhcHBlckVIIH0sXG4gIF0sXG4gIGxheW91dERTOiBBd1NlYXJjaExheW91dERTLFxuICBsYXlvdXRFSDogQXdTZWFyY2hMYXlvdXRFSCxcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxuICBvcHRpb25zOiB7XG4gICAgLy8gVE9ET1xuICB9XG59O1xuIl19