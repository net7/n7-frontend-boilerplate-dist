import { SbImageViewerLayoutDS } from './image-viewer-layout.ds';
import { SbImageViewerLayoutEH } from './image-viewer-layout.eh';
import * as DS from '../../data-sources';
import * as EH from '../../event-handlers';
export const SbImageViewerLayoutConfig = {
    layoutId: 'sb-image-viewer-layout',
    /**
     * Array of components you want to use
     * in this leyout
     */
    widgets: [
        { id: 'sb-image-viewer-tools', hasStaticData: true },
        { id: 'sb-image-viewer', hasStaticData: true }
    ],
    layoutDS: SbImageViewerLayoutDS,
    layoutEH: SbImageViewerLayoutEH,
    widgetsDataSources: DS,
    widgetsEventHandlers: EH,
    options: {
    // TODO
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9zYW5kYm94L2xheW91dC9pbWFnZS12aWV3ZXItbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRztJQUN2QyxRQUFRLEVBQUUsd0JBQXdCO0lBQ2xDOzs7T0FHRztJQUNILE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7UUFDcEQsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRTtLQUMvQztJQUNELFFBQVEsRUFBRSxxQkFBcUI7SUFDL0IsUUFBUSxFQUFFLHFCQUFxQjtJQUMvQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNiSW1hZ2VWaWV3ZXJMYXlvdXREUyB9IGZyb20gJy4vaW1hZ2Utdmlld2VyLWxheW91dC5kcyc7XG5pbXBvcnQgeyBTYkltYWdlVmlld2VyTGF5b3V0RUggfSBmcm9tICcuL2ltYWdlLXZpZXdlci1sYXlvdXQuZWgnO1xuaW1wb3J0ICogYXMgRFMgZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzJztcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcblxuZXhwb3J0IGNvbnN0IFNiSW1hZ2VWaWV3ZXJMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dElkOiAnc2ItaW1hZ2Utdmlld2VyLWxheW91dCcsXG4gIC8qKlxuICAgKiBBcnJheSBvZiBjb21wb25lbnRzIHlvdSB3YW50IHRvIHVzZVxuICAgKiBpbiB0aGlzIGxleW91dFxuICAgKi9cbiAgd2lkZ2V0czogW1xuICAgIHsgaWQ6ICdzYi1pbWFnZS12aWV3ZXItdG9vbHMnLCBoYXNTdGF0aWNEYXRhOiB0cnVlIH0sXG4gICAgeyBpZDogJ3NiLWltYWdlLXZpZXdlcicsIGhhc1N0YXRpY0RhdGE6IHRydWUgfVxuICBdLFxuICBsYXlvdXREUzogU2JJbWFnZVZpZXdlckxheW91dERTLFxuICBsYXlvdXRFSDogU2JJbWFnZVZpZXdlckxheW91dEVILFxuICB3aWRnZXRzRGF0YVNvdXJjZXM6IERTLFxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBUT0RPXG4gIH0sXG59O1xuIl19