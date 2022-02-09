import { AwHomeLayoutDS } from './home-layout.ds';
import { AwHomeLayoutEH } from './home-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const AwHomeLayoutConfig = {
    layoutId: 'aw-home-layout',
    widgets: [{
            id: 'aw-carousel',
        }, {
            id: 'aw-hero',
        }, {
            id: 'aw-home-hero-patrimonio',
        }, {
            id: 'aw-bubble-chart',
        }, {
            id: 'aw-home-facets-wrapper',
        }, {
            id: 'aw-home-item-tags-wrapper',
        }, {
            id: 'aw-home-autocomplete',
        }, {
            id: 'aw-linked-objects',
        }, {
            id: 'aw-autocomplete-wrapper',
        }, {
            id: 'aw-chart-tippy',
        }],
    layoutDS: AwHomeLayoutDS,
    layoutEH: AwHomeLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEMsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixPQUFPLEVBQUUsQ0FBQztZQUNSLEVBQUUsRUFBRSxhQUFhO1NBQ2xCLEVBQUU7WUFDRCxFQUFFLEVBQUUsU0FBUztTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUseUJBQXlCO1NBQzlCLEVBQUU7WUFDRCxFQUFFLEVBQUUsaUJBQWlCO1NBQ3RCLEVBQUU7WUFDRCxFQUFFLEVBQUUsd0JBQXdCO1NBQzdCLEVBQUU7WUFDRCxFQUFFLEVBQUUsMkJBQTJCO1NBQ2hDLEVBQUU7WUFDRCxFQUFFLEVBQUUsc0JBQXNCO1NBQzNCLEVBQUU7WUFDRCxFQUFFLEVBQUUsbUJBQW1CO1NBQ3hCLEVBQUU7WUFDRCxFQUFFLEVBQUUseUJBQXlCO1NBQzlCLEVBQUU7WUFDRCxFQUFFLEVBQUUsZ0JBQWdCO1NBQ3JCLENBQUM7SUFDRixRQUFRLEVBQUUsY0FBYztJQUN4QixRQUFRLEVBQUUsY0FBYztJQUN4QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3SG9tZUxheW91dERTIH0gZnJvbSAnLi9ob21lLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IEF3SG9tZUxheW91dEVIIH0gZnJvbSAnLi9ob21lLWxheW91dC5laCc7XHJcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBd0hvbWVMYXlvdXRDb25maWcgPSB7XHJcbiAgbGF5b3V0SWQ6ICdhdy1ob21lLWxheW91dCcsXHJcbiAgd2lkZ2V0czogW3tcclxuICAgIGlkOiAnYXctY2Fyb3VzZWwnLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnYXctaGVybycsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdhdy1ob21lLWhlcm8tcGF0cmltb25pbycsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdhdy1idWJibGUtY2hhcnQnLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnYXctaG9tZS1mYWNldHMtd3JhcHBlcicsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2F3LWhvbWUtYXV0b2NvbXBsZXRlJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2F3LWxpbmtlZC1vYmplY3RzJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2F3LWNoYXJ0LXRpcHB5JyxcclxuICB9XSxcclxuICBsYXlvdXREUzogQXdIb21lTGF5b3V0RFMsXHJcbiAgbGF5b3V0RUg6IEF3SG9tZUxheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIC8vIFRPRE9cclxuICB9LFxyXG59O1xyXG4iXX0=