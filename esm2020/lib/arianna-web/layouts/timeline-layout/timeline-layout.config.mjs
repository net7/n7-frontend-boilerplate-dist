import { AwTimelineLayoutDS } from './timeline-layout.ds';
import { AwTimelineLayoutEH } from './timeline-layout.eh';
import { SmartPaginationDS } from '../../../common/data-sources';
import { SmartPaginationEH } from '../../../common/event-handlers';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const AwTimelineLayoutConfig = {
    layoutId: 'aw-timeline-layout',
    widgets: [
        { id: 'aw-timeline' },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-linked-objects' },
        {
            id: 'n7-smart-pagination',
            dataSource: SmartPaginationDS,
            eventHandler: SmartPaginationEH,
        }
    ],
    layoutDS: AwTimelineLayoutDS,
    layoutEH: AwTimelineLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2xheW91dHMvdGltZWxpbmUtbGF5b3V0L3RpbWVsaW5lLWxheW91dC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHO0lBQ3BDLFFBQVEsRUFBRSxvQkFBb0I7SUFDOUIsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFO1FBQ3JCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFO1FBQzNCO1lBQ0UsRUFBRSxFQUFFLHFCQUFxQjtZQUN6QixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7U0FDaEM7S0FDRjtJQUNELFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3VGltZWxpbmVMYXlvdXREUyB9IGZyb20gJy4vdGltZWxpbmUtbGF5b3V0LmRzJztcclxuaW1wb3J0IHsgQXdUaW1lbGluZUxheW91dEVIIH0gZnJvbSAnLi90aW1lbGluZS1sYXlvdXQuZWgnO1xyXG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25EUyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgeyBTbWFydFBhZ2luYXRpb25FSCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9ldmVudC1oYW5kbGVycyc7XHJcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBd1RpbWVsaW5lTGF5b3V0Q29uZmlnID0ge1xyXG4gIGxheW91dElkOiAnYXctdGltZWxpbmUtbGF5b3V0JyxcclxuICB3aWRnZXRzOiBbIC8vIGFycmF5IG9mIGNvbXBvbmVudHMgb2YgdGhpcyBsYXlvdXRcclxuICAgIHsgaWQ6ICdhdy10aW1lbGluZScgfSxcclxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW5uZXItdGl0bGUnIH0sXHJcbiAgICB7IGlkOiAnYXctbGlua2VkLW9iamVjdHMnIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnbjctc21hcnQtcGFnaW5hdGlvbicsXHJcbiAgICAgIGRhdGFTb3VyY2U6IFNtYXJ0UGFnaW5hdGlvbkRTLFxyXG4gICAgICBldmVudEhhbmRsZXI6IFNtYXJ0UGFnaW5hdGlvbkVILFxyXG4gICAgfVxyXG4gIF0sXHJcbiAgbGF5b3V0RFM6IEF3VGltZWxpbmVMYXlvdXREUyxcclxuICBsYXlvdXRFSDogQXdUaW1lbGluZUxheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIC8vIFRPRE9cclxuICB9LFxyXG59O1xyXG4iXX0=