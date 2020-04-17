/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNDLE1BQU0sT0FBTyxrQkFBa0IsR0FBRztJQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLE9BQU8sRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLGdCQUFnQjtTQUNwRCxFQUFFO1lBQ0QsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsZ0JBQWdCO1NBQ3RELEVBQUU7WUFDRCxFQUFFLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsY0FBYztTQUNuRCxFQUFFO1lBQ0QsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsY0FBYztTQUNwRCxFQUFFO1lBQ0QsRUFBRSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVE7U0FDdkMsQ0FBQztJQUNGLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixPQUFPLEVBQUU7SUFDUCxPQUFPO0tBQ1I7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ySG9tZUxheW91dERTIH0gZnJvbSAnLi9ob21lLWxheW91dC5kcyc7XG5pbXBvcnQgeyBNckhvbWVMYXlvdXRFSCB9IGZyb20gJy4vaG9tZS1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IE1ySG9tZUxheW91dENvbmZpZyA9IHtcbiAgbGF5b3V0SWQ6ICdtci1ob21lLWxheW91dCcsXG4gIHdpZGdldHM6IFt7XG4gICAgaWQ6ICdtci1yZXNvdXJjZXMnLCBkYXRhU291cmNlOiBEUy5Nckl0ZW1QcmV2aWV3c0RTLFxuICB9LCB7XG4gICAgaWQ6ICdtci1jb2xsZWN0aW9ucycsIGRhdGFTb3VyY2U6IERTLk1ySXRlbVByZXZpZXdzRFMsXG4gIH0sIHtcbiAgICBpZDogJ21yLXJlcy1oZWFkZXInLCBkYXRhU291cmNlOiBEUy5NcklubmVyVGl0bGVEUyxcbiAgfSwge1xuICAgIGlkOiAnbXItY29sbC1oZWFkZXInLCBkYXRhU291cmNlOiBEUy5NcklubmVyVGl0bGVEUyxcbiAgfSwge1xuICAgIGlkOiAnbXItaGVybycsIGRhdGFTb3VyY2U6IERTLk1ySGVyb0RTLFxuICB9XSxcbiAgbGF5b3V0RFM6IE1ySG9tZUxheW91dERTLFxuICBsYXlvdXRFSDogTXJIb21lTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgb3B0aW9uczoge1xuICAgIC8vIFRPRE9cbiAgfSxcbn07XG4iXX0=