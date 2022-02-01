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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pDLE9BQU8sS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEMsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixPQUFPLEVBQUUsQ0FBQztZQUNSLEVBQUUsRUFBRSxhQUFhO1NBQ2xCLEVBQUU7WUFDRCxFQUFFLEVBQUUsU0FBUztTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUseUJBQXlCO1NBQzlCLEVBQUU7WUFDRCxFQUFFLEVBQUUsaUJBQWlCO1NBQ3RCLEVBQUU7WUFDRCxFQUFFLEVBQUUsd0JBQXdCO1NBQzdCLEVBQUU7WUFDRCxFQUFFLEVBQUUsMkJBQTJCO1NBQ2hDLEVBQUU7WUFDRCxFQUFFLEVBQUUsc0JBQXNCO1NBQzNCLEVBQUU7WUFDRCxFQUFFLEVBQUUsbUJBQW1CO1NBQ3hCLEVBQUU7WUFDRCxFQUFFLEVBQUUseUJBQXlCO1NBQzlCLEVBQUU7WUFDRCxFQUFFLEVBQUUsZ0JBQWdCO1NBQ3JCLENBQUM7SUFDRixRQUFRLEVBQUUsY0FBYztJQUN4QixRQUFRLEVBQUUsY0FBYztJQUN4QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3SG9tZUxheW91dERTIH0gZnJvbSAnLi9ob21lLWxheW91dC5kcyc7XG5pbXBvcnQgeyBBd0hvbWVMYXlvdXRFSCB9IGZyb20gJy4vaG9tZS1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IEF3SG9tZUxheW91dENvbmZpZyA9IHtcbiAgbGF5b3V0SWQ6ICdhdy1ob21lLWxheW91dCcsXG4gIHdpZGdldHM6IFt7XG4gICAgaWQ6ICdhdy1jYXJvdXNlbCcsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWhlcm8nLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1ob21lLWhlcm8tcGF0cmltb25pbycsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWJ1YmJsZS1jaGFydCcsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJyxcbiAgfSwge1xuICAgIGlkOiAnYXctaG9tZS1hdXRvY29tcGxldGUnLFxuICB9LCB7XG4gICAgaWQ6ICdhdy1saW5rZWQtb2JqZWN0cycsXG4gIH0sIHtcbiAgICBpZDogJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJyxcbiAgfSwge1xuICAgIGlkOiAnYXctY2hhcnQtdGlwcHknLFxuICB9XSxcbiAgbGF5b3V0RFM6IEF3SG9tZUxheW91dERTLFxuICBsYXlvdXRFSDogQXdIb21lTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgb3B0aW9uczoge1xuICAgIC8vIFRPRE9cbiAgfSxcbn07XG4iXX0=