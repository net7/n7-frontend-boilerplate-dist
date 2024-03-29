import { MrMapLayoutDS } from './map-layout.ds';
import { MrMapLayoutEH } from './map-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const MrMapLayoutConfig = {
    layoutId: 'mr-map-layout',
    widgets: [
        { id: 'mr-map' },
        { id: 'mr-year-header' }
    ],
    layoutDS: MrMapLayoutDS,
    layoutEH: MrMapLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {},
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvbWFwLWxheW91dC9tYXAtbGF5b3V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUMvQixRQUFRLEVBQUUsZUFBZTtJQUN6QixPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUU7UUFDaEIsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUU7S0FDekI7SUFDRCxRQUFRLEVBQUUsYUFBYTtJQUN2QixRQUFRLEVBQUUsYUFBYTtJQUN2QixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFLEVBQUU7Q0FDWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJNYXBMYXlvdXREUyB9IGZyb20gJy4vbWFwLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IE1yTWFwTGF5b3V0RUggfSBmcm9tICcuL21hcC1sYXlvdXQuZWgnO1xyXG5pbXBvcnQgKiBhcyBEUyBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMnO1xyXG5pbXBvcnQgKiBhcyBFSCBmcm9tICcuLi8uLi9ldmVudC1oYW5kbGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgTXJNYXBMYXlvdXRDb25maWcgPSB7XHJcbiAgbGF5b3V0SWQ6ICdtci1tYXAtbGF5b3V0JyxcclxuICB3aWRnZXRzOiBbXHJcbiAgICB7IGlkOiAnbXItbWFwJyB9LFxyXG4gICAgeyBpZDogJ21yLXllYXItaGVhZGVyJyB9XHJcbiAgXSxcclxuICBsYXlvdXREUzogTXJNYXBMYXlvdXREUyxcclxuICBsYXlvdXRFSDogTXJNYXBMYXlvdXRFSCxcclxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxyXG4gIHdpZGdldHNFdmVudEhhbmRsZXJzOiBFSCxcclxuICBvcHRpb25zOiB7fSxcclxufTtcclxuIl19