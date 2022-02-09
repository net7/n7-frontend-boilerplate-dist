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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1sYXlvdXQuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvY29tbW9uL2xheW91dHMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLE9BQU8sRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLFFBQVE7U0FDYixFQUFFO1lBQ0QsRUFBRSxFQUFFLFFBQVE7U0FDYixFQUFFO1lBQ0QsRUFBRSxFQUFFLGFBQWE7U0FDbEIsRUFBRTtZQUNELEVBQUUsRUFBRSxRQUFRO1NBQ2IsQ0FBQztJQUNGLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtJQUN4QixPQUFPLEVBQUU7SUFDUCxPQUFPO0tBQ1I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFpbkxheW91dERTIH0gZnJvbSAnLi9tYWluLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IE1haW5MYXlvdXRFSCB9IGZyb20gJy4vbWFpbi1sYXlvdXQuZWgnO1xyXG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbkxheW91dENvbmZpZyA9IHtcclxuICBsYXlvdXRJZDogJ21haW4tbGF5b3V0JyxcclxuICB3aWRnZXRzOiBbe1xyXG4gICAgaWQ6ICdoZWFkZXInLFxyXG4gIH0sIHtcclxuICAgIGlkOiAnc3VibmF2JyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2JyZWFkY3J1bWJzJyxcclxuICB9LCB7XHJcbiAgICBpZDogJ2Zvb3RlcicsXHJcbiAgfV0sXHJcbiAgbGF5b3V0RFM6IE1haW5MYXlvdXREUyxcclxuICBsYXlvdXRFSDogTWFpbkxheW91dEVILFxyXG4gIHdpZGdldHNEYXRhU291cmNlczogRFMsXHJcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIC8vIFRPRE9cclxuICB9LFxyXG59O1xyXG4iXX0=