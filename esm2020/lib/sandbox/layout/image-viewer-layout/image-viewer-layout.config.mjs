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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9zYW5kYm94L2xheW91dC9pbWFnZS12aWV3ZXItbGF5b3V0L2ltYWdlLXZpZXdlci1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRztJQUN2QyxRQUFRLEVBQUUsd0JBQXdCO0lBQ2xDOzs7T0FHRztJQUNILE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFLHVCQUF1QixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7UUFDcEQsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRTtLQUMvQztJQUNELFFBQVEsRUFBRSxxQkFBcUI7SUFDL0IsUUFBUSxFQUFFLHFCQUFxQjtJQUMvQixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLG9CQUFvQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxFQUFFO0lBQ1AsT0FBTztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNiSW1hZ2VWaWV3ZXJMYXlvdXREUyB9IGZyb20gJy4vaW1hZ2Utdmlld2VyLWxheW91dC5kcyc7XHJcbmltcG9ydCB7IFNiSW1hZ2VWaWV3ZXJMYXlvdXRFSCB9IGZyb20gJy4vaW1hZ2Utdmlld2VyLWxheW91dC5laCc7XHJcbmltcG9ydCAqIGFzIERTIGZyb20gJy4uLy4uL2RhdGEtc291cmNlcyc7XHJcbmltcG9ydCAqIGFzIEVIIGZyb20gJy4uLy4uL2V2ZW50LWhhbmRsZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTYkltYWdlVmlld2VyTGF5b3V0Q29uZmlnID0ge1xyXG4gIGxheW91dElkOiAnc2ItaW1hZ2Utdmlld2VyLWxheW91dCcsXHJcbiAgLyoqXHJcbiAgICogQXJyYXkgb2YgY29tcG9uZW50cyB5b3Ugd2FudCB0byB1c2VcclxuICAgKiBpbiB0aGlzIGxleW91dFxyXG4gICAqL1xyXG4gIHdpZGdldHM6IFtcclxuICAgIHsgaWQ6ICdzYi1pbWFnZS12aWV3ZXItdG9vbHMnLCBoYXNTdGF0aWNEYXRhOiB0cnVlIH0sXHJcbiAgICB7IGlkOiAnc2ItaW1hZ2Utdmlld2VyJywgaGFzU3RhdGljRGF0YTogdHJ1ZSB9XHJcbiAgXSxcclxuICBsYXlvdXREUzogU2JJbWFnZVZpZXdlckxheW91dERTLFxyXG4gIGxheW91dEVIOiBTYkltYWdlVmlld2VyTGF5b3V0RUgsXHJcbiAgd2lkZ2V0c0RhdGFTb3VyY2VzOiBEUyxcclxuICB3aWRnZXRzRXZlbnRIYW5kbGVyczogRUgsXHJcbiAgb3B0aW9uczoge1xyXG4gICAgLy8gVE9ET1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==