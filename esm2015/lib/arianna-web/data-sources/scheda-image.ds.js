/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwSchedaImageDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        const tileSources = this.getTileSources(data.image);
        return {
            images: [],
            viewerId: 'scheda-layout-viewer',
            libOptions: {
                tileSources,
                sequenceMode: true,
                showReferenceStrip: true,
                autoHideControls: false,
                showNavigator: false,
            },
            _setViewer: (/**
             * @param {?} viewer
             * @return {?}
             */
            (viewer) => {
                this.instance = viewer;
            }),
        };
    }
    /**
     * @return {?}
     */
    hasInstance() {
        return !!this.instance;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateImages(data) {
        if (!this.instance)
            return;
        /** @type {?} */
        const images = this.getTileSources(data.image);
        this.instance.open(images);
    }
    /**
     * @private
     * @param {?} images
     * @return {?}
     */
    getTileSources(images) {
        // FIXME: togliere replace
        return images.map((/**
         * @param {?} img
         * @return {?}
         */
        (img) => img.replace('FIF', 'Deepzoom').replace('.tif', '.tif.dzi')));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSchedaImageDS.prototype.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVOzs7Ozs7SUFHbkMsU0FBUyxDQUFDLElBQUk7O2NBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFbkQsT0FBTztZQUNMLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxVQUFVLEVBQUU7Z0JBQ1YsV0FBVztnQkFDWCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsZ0JBQWdCLEVBQUUsS0FBSztnQkFDdkIsYUFBYSxFQUFFLEtBQUs7YUFDckI7WUFDRCxVQUFVOzs7O1lBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDekIsQ0FBQyxDQUFBO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPOztjQUVyQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxNQUFNO1FBQzNCLDBCQUEwQjtRQUMxQixPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUMsQ0FBQztJQUN6RixDQUFDO0NBQ0Y7Ozs7OztJQXBDQyxtQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VWaWV3ZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFJbWFnZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgaW5zdGFuY2U7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogSW1hZ2VWaWV3ZXJEYXRhIHtcbiAgICBjb25zdCB0aWxlU291cmNlcyA9IHRoaXMuZ2V0VGlsZVNvdXJjZXMoZGF0YS5pbWFnZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgIHZpZXdlcklkOiAnc2NoZWRhLWxheW91dC12aWV3ZXInLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICB0aWxlU291cmNlcyxcbiAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLFxuICAgICAgICBzaG93UmVmZXJlbmNlU3RyaXA6IHRydWUsXG4gICAgICAgIGF1dG9IaWRlQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBzaG93TmF2aWdhdG9yOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfc2V0Vmlld2VyOiAodmlld2VyKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSB2aWV3ZXI7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgaGFzSW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbWFnZXMoZGF0YSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgaW1hZ2VzID0gdGhpcy5nZXRUaWxlU291cmNlcyhkYXRhLmltYWdlKTtcbiAgICB0aGlzLmluc3RhbmNlLm9wZW4oaW1hZ2VzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGlsZVNvdXJjZXMoaW1hZ2VzKSB7XG4gICAgLy8gRklYTUU6IHRvZ2xpZXJlIHJlcGxhY2VcbiAgICByZXR1cm4gaW1hZ2VzLm1hcCgoaW1nKSA9PiBpbWcucmVwbGFjZSgnRklGJywgJ0RlZXB6b29tJykucmVwbGFjZSgnLnRpZicsICcudGlmLmR6aScpKTtcbiAgfVxufVxuIl19