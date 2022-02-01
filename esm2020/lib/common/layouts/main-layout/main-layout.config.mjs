import { MainLayoutDS } from './main-layout.ds';
import { MainLayoutEH } from './main-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const MainLayoutConfig = {
    layoutId: 'main-layout',
    widgets: [{
            id: 'header',
        }, {
            id: 'subnav',
        }, {
            id: 'breadcrumbs',
        }, {
            id: 'footer',
        }],
    layoutDS: MainLayoutDS,
    layoutEH: MainLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLE9BQU8sRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLFFBQVE7U0FDYixFQUFFO1lBQ0QsRUFBRSxFQUFFLFFBQVE7U0FDYixFQUFFO1lBQ0QsRUFBRSxFQUFFLGFBQWE7U0FDbEIsRUFBRTtZQUNELEVBQUUsRUFBRSxRQUFRO1NBQ2IsQ0FBQztJQUNGLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixPQUFPLEVBQUU7SUFDUCxPQUFPO0tBQ1I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFpbkxheW91dERTIH0gZnJvbSAnLi9tYWluLWxheW91dC5kcyc7XG5pbXBvcnQgeyBNYWluTGF5b3V0RUggfSBmcm9tICcuL21haW4tbGF5b3V0LmVoJztcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XG5cbmV4cG9ydCBjb25zdCBNYWluTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ21haW4tbGF5b3V0JyxcbiAgd2lkZ2V0czogW3tcbiAgICBpZDogJ2hlYWRlcicsXG4gIH0sIHtcbiAgICBpZDogJ3N1Ym5hdicsXG4gIH0sIHtcbiAgICBpZDogJ2JyZWFkY3J1bWJzJyxcbiAgfSwge1xuICAgIGlkOiAnZm9vdGVyJyxcbiAgfV0sXG4gIGxheW91dERTOiBNYWluTGF5b3V0RFMsXG4gIGxheW91dEVIOiBNYWluTGF5b3V0RUgsXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcbiAgb3B0aW9uczoge1xuICAgIC8vIFRPRE9cbiAgfSxcbn07XG4iXX0=