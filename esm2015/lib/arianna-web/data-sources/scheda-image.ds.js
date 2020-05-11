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
        const tileSources = this.getTileSources(data.images);
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
        // reset
        this.instance.world.removeAll();
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const images = this.getTileSources(data.images);
            console.warn('images', images.length, images);
            this.instance.open(images);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVOzs7Ozs7SUFHbkMsU0FBUyxDQUFDLElBQUk7O2NBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFcEQsT0FBTztZQUNMLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxVQUFVLEVBQUU7Z0JBQ1YsV0FBVztnQkFDWCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsZ0JBQWdCLEVBQUUsS0FBSztnQkFDdkIsYUFBYSxFQUFFLEtBQUs7YUFDckI7WUFDRCxVQUFVOzs7O1lBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDekIsQ0FBQyxDQUFBO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTNCLFFBQVE7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVoQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUNSLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0MsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxNQUFNO1FBQzNCLDBCQUEwQjtRQUMxQixPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUMsQ0FBQztJQUN6RixDQUFDO0NBQ0Y7Ozs7OztJQTFDQyxtQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VWaWV3ZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFJbWFnZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgaW5zdGFuY2U7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogSW1hZ2VWaWV3ZXJEYXRhIHtcbiAgICBjb25zdCB0aWxlU291cmNlcyA9IHRoaXMuZ2V0VGlsZVNvdXJjZXMoZGF0YS5pbWFnZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGltYWdlczogW10sXG4gICAgICB2aWV3ZXJJZDogJ3NjaGVkYS1sYXlvdXQtdmlld2VyJyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgdGlsZVNvdXJjZXMsXG4gICAgICAgIHNlcXVlbmNlTW9kZTogdHJ1ZSxcbiAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0cnVlLFxuICAgICAgICBhdXRvSGlkZUNvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgc2hvd05hdmlnYXRvcjogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gdmlld2VyO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGhhc0luc3RhbmNlKCkge1xuICAgIHJldHVybiAhIXRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW1hZ2VzKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHJldHVybjtcblxuICAgIC8vIHJlc2V0XG4gICAgdGhpcy5pbnN0YW5jZS53b3JsZC5yZW1vdmVBbGwoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5nZXRUaWxlU291cmNlcyhkYXRhLmltYWdlcyk7XG4gICAgICBjb25zb2xlLndhcm4oJ2ltYWdlcycsIGltYWdlcy5sZW5ndGgsIGltYWdlcyk7XG4gICAgICB0aGlzLmluc3RhbmNlLm9wZW4oaW1hZ2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGlsZVNvdXJjZXMoaW1hZ2VzKSB7XG4gICAgLy8gRklYTUU6IHRvZ2xpZXJlIHJlcGxhY2VcbiAgICByZXR1cm4gaW1hZ2VzLm1hcCgoaW1nKSA9PiBpbWcucmVwbGFjZSgnRklGJywgJ0RlZXB6b29tJykucmVwbGFjZSgnLnRpZicsICcudGlmLmR6aScpKTtcbiAgfVxufVxuIl19