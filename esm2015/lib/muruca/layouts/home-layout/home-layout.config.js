/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/home-layout/home-layout.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MrHomeLayoutDS } from './home-layout.ds';
import { MrHomeLayoutEH } from './home-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
/** @type {?} */
export const MrHomeLayoutConfig = {
    layoutId: 'mr-home-layout',
    widgets: [{
            id: 'mr-resources', dataSource: DS.MrItemPreviewsDS,
        }, {
            id: 'mr-collections', dataSource: DS.MrItemPreviewsDS,
        }, {
            id: 'mr-res-header', dataSource: DS.MrInnerTitleDS,
        }, {
            id: 'mr-coll-header', dataSource: DS.MrInnerTitleDS,
        }, {
            id: 'mr-hero', dataSource: DS.MrHeroDS,
        }],
    layoutDS: MrHomeLayoutDS,
    layoutEH: MrHomeLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUUzQyxNQUFNLE9BQU8sa0JBQWtCLEdBQUc7SUFDaEMsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixPQUFPLEVBQUUsQ0FBQztZQUNSLEVBQUUsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0I7U0FDcEQsRUFBRTtZQUNELEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLGdCQUFnQjtTQUN0RCxFQUFFO1lBQ0QsRUFBRSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLGNBQWM7U0FDbkQsRUFBRTtZQUNELEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLGNBQWM7U0FDcEQsRUFBRTtZQUNELEVBQUUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxRQUFRO1NBQ3ZDLENBQUM7SUFDRixRQUFRLEVBQUUsY0FBYztJQUN4QixRQUFRLEVBQUUsY0FBYztJQUN4QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNckhvbWVMYXlvdXREUyB9IGZyb20gJy4vaG9tZS1sYXlvdXQuZHMnO1xuaW1wb3J0IHsgTXJIb21lTGF5b3V0RUggfSBmcm9tICcuL2hvbWUtbGF5b3V0LmVoJztcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBjb25zdCBNckhvbWVMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnbXItaG9tZS1sYXlvdXQnLFxuICB3aWRnZXRzOiBbe1xuICAgIGlkOiAnbXItcmVzb3VyY2VzJywgZGF0YVNvdXJjZTogRFMuTXJJdGVtUHJldmlld3NEUyxcbiAgfSwge1xuICAgIGlkOiAnbXItY29sbGVjdGlvbnMnLCBkYXRhU291cmNlOiBEUy5Nckl0ZW1QcmV2aWV3c0RTLFxuICB9LCB7XG4gICAgaWQ6ICdtci1yZXMtaGVhZGVyJywgZGF0YVNvdXJjZTogRFMuTXJJbm5lclRpdGxlRFMsXG4gIH0sIHtcbiAgICBpZDogJ21yLWNvbGwtaGVhZGVyJywgZGF0YVNvdXJjZTogRFMuTXJJbm5lclRpdGxlRFMsXG4gIH0sIHtcbiAgICBpZDogJ21yLWhlcm8nLCBkYXRhU291cmNlOiBEUy5Nckhlcm9EUyxcbiAgfV0sXG4gIGxheW91dERTOiBNckhvbWVMYXlvdXREUyxcbiAgbGF5b3V0RUg6IE1ySG9tZUxheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH0sXG59O1xuIl19