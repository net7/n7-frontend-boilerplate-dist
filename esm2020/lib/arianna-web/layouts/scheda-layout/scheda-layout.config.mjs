import { AwSchedaLayoutDS } from './scheda-layout.ds';
import { AwSchedaLayoutEH } from './scheda-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const AwPatrimonioLayoutConfig = {
    layoutId: 'aw-scheda-layout',
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: [
        { id: 'aw-sidebar-header' },
        { id: 'aw-tree' },
        { id: 'aw-scheda-breadcrumbs' },
        { id: 'aw-scheda-metadata' },
        { id: 'aw-scheda-dropdown' },
        { id: 'aw-scheda-image' },
        { id: 'aw-scheda-pdf' },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-related-entities' },
        { id: 'aw-chart-tippy' },
        { id: 'aw-linked-objects' },
    ],
    layoutDS: AwSchedaLayoutDS,
    layoutEH: AwSchedaLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHO0lBQ3RDLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUI7OztPQUdHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7UUFDM0IsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1FBQ2pCLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFO1FBQzVCLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFO1FBQzVCLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFO1FBQ3pCLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRTtRQUN2QixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRTtRQUMvQixFQUFFLEVBQUUsRUFBRSxxQkFBcUIsRUFBRTtRQUM3QixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRTtRQUN4QixFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRTtLQUM1QjtJQUNELFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3U2NoZWRhTGF5b3V0RFMgfSBmcm9tICcuL3NjaGVkYS1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBBd1NjaGVkYUxheW91dEVIIH0gZnJvbSAnLi9zY2hlZGEtbGF5b3V0LmVoJztcclxuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcclxuaW1wb3J0ICogYXMgRUggZnJvbSAnLi4vLi4vZXZlbnQtaGFuZGxlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF3UGF0cmltb25pb0xheW91dENvbmZpZyA9IHtcclxuICBsYXlvdXRJZDogJ2F3LXNjaGVkYS1sYXlvdXQnLFxyXG4gIC8qKlxyXG4gICAqIEFycmF5IG9mIGNvbXBvbmVudHMgeW91IHdhbnQgdG8gdXNlXHJcbiAgICogaW4gdGhpcyBsZXlvdXRcclxuICAgKi9cclxuICB3aWRnZXRzOiBbXHJcbiAgICB7IGlkOiAnYXctc2lkZWJhci1oZWFkZXInIH0sXHJcbiAgICB7IGlkOiAnYXctdHJlZScgfSxcclxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtYnJlYWRjcnVtYnMnIH0sXHJcbiAgICB7IGlkOiAnYXctc2NoZWRhLW1ldGFkYXRhJyB9LFxyXG4gICAgeyBpZDogJ2F3LXNjaGVkYS1kcm9wZG93bicgfSxcclxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW1hZ2UnIH0sXHJcbiAgICB7IGlkOiAnYXctc2NoZWRhLXBkZicgfSxcclxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW5uZXItdGl0bGUnIH0sXHJcbiAgICB7IGlkOiAnYXctcmVsYXRlZC1lbnRpdGllcycgfSxcclxuICAgIHsgaWQ6ICdhdy1jaGFydC10aXBweScgfSxcclxuICAgIHsgaWQ6ICdhdy1saW5rZWQtb2JqZWN0cycgfSxcclxuICBdLFxyXG4gIGxheW91dERTOiBBd1NjaGVkYUxheW91dERTLFxyXG4gIGxheW91dEVIOiBBd1NjaGVkYUxheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIC8vIFRPRE9cclxuICB9LFxyXG59O1xyXG4iXX0=