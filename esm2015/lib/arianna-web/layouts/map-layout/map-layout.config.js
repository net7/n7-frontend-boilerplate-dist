import { AwMapLayoutDS } from './map-layout.ds';
import { AwMapLayoutEH } from './map-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const AwMapLayoutConfig = {
    layoutId: 'aw-map-layout',
    widgets: [
        { id: 'aw-map', hasStaticData: true },
        { id: 'aw-scheda-inner-title' },
        { id: 'aw-linked-objects' }
    ],
    layoutDS: AwMapLayoutDS,
    layoutEH: AwMapLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9CLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFO1FBQ3JDLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFO1FBQy9CLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFO0tBQzVCO0lBQ0QsUUFBUSxFQUFFLGFBQWE7SUFDdkIsUUFBUSxFQUFFLGFBQWE7SUFDdkIsa0JBQWtCLEVBQUUsRUFBRTtJQUN0QixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sRUFBRTtJQUNQLE9BQU87S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd01hcExheW91dERTIH0gZnJvbSAnLi9tYXAtbGF5b3V0LmRzJztcbmltcG9ydCB7IEF3TWFwTGF5b3V0RUggfSBmcm9tICcuL21hcC1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IEF3TWFwTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRJZDogJ2F3LW1hcC1sYXlvdXQnLFxuICB3aWRnZXRzOiBbIC8vIGFycmF5IG9mIGNvbXBvbmVudHMgb2YgdGhpcyBsYXlvdXRcbiAgICB7IGlkOiAnYXctbWFwJywgaGFzU3RhdGljRGF0YTogdHJ1ZSB9LFxuICAgIHsgaWQ6ICdhdy1zY2hlZGEtaW5uZXItdGl0bGUnIH0sXG4gICAgeyBpZDogJ2F3LWxpbmtlZC1vYmplY3RzJyB9XG4gIF0sXG4gIGxheW91dERTOiBBd01hcExheW91dERTLFxuICBsYXlvdXRFSDogQXdNYXBMYXlvdXRFSCxcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcbiAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IEVILFxuICBvcHRpb25zOiB7XG4gICAgLy8gVE9ET1xuICB9LFxufTtcbiJdfQ==