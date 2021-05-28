import { AwHomeLayoutDS } from './home-layout.ds';
import { AwHomeLayoutEH } from './home-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export var AwHomeLayoutConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHO0lBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsT0FBTyxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsYUFBYTtTQUNsQixFQUFFO1lBQ0QsRUFBRSxFQUFFLFNBQVM7U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLGlCQUFpQjtTQUN0QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHdCQUF3QjtTQUM3QixFQUFFO1lBQ0QsRUFBRSxFQUFFLDJCQUEyQjtTQUNoQyxFQUFFO1lBQ0QsRUFBRSxFQUFFLHNCQUFzQjtTQUMzQixFQUFFO1lBQ0QsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QixFQUFFO1lBQ0QsRUFBRSxFQUFFLHlCQUF5QjtTQUM5QixFQUFFO1lBQ0QsRUFBRSxFQUFFLGdCQUFnQjtTQUNyQixDQUFDO0lBQ0YsUUFBUSxFQUFFLGNBQWM7SUFDeEIsUUFBUSxFQUFFLGNBQWM7SUFDeEIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd0hvbWVMYXlvdXREUyB9IGZyb20gJy4vaG9tZS1sYXlvdXQuZHMnO1xyXG5pbXBvcnQgeyBBd0hvbWVMYXlvdXRFSCB9IGZyb20gJy4vaG9tZS1sYXlvdXQuZWgnO1xyXG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgQXdIb21lTGF5b3V0Q29uZmlnID0ge1xyXG4gIGxheW91dElkOiAnYXctaG9tZS1sYXlvdXQnLFxyXG4gIHdpZGdldHM6IFt7XHJcbiAgICBpZDogJ2F3LWNhcm91c2VsJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2F3LWhlcm8nLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnYXctYnViYmxlLWNoYXJ0JyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlcicsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdhdy1ob21lLWF1dG9jb21wbGV0ZScsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdhdy1saW5rZWQtb2JqZWN0cycsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsXHJcbiAgfSwge1xyXG4gICAgaWQ6ICdhdy1jaGFydC10aXBweScsXHJcbiAgfV0sXHJcbiAgbGF5b3V0RFM6IEF3SG9tZUxheW91dERTLFxyXG4gIGxheW91dEVIOiBBd0hvbWVMYXlvdXRFSCxcclxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxyXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcclxuICBvcHRpb25zOiB7XHJcbiAgICAvLyBUT0RPXHJcbiAgfSxcclxufTtcclxuIl19