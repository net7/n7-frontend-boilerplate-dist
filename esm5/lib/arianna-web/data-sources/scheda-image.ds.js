/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaImageDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSchedaImageDS, _super);
    function AwSchedaImageDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSchedaImageDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var tileSources = this.getTileSources(data.images);
        return {
            images: [],
            viewerId: 'scheda-layout-viewer',
            libOptions: {
                tileSources: tileSources,
                sequenceMode: true,
                showReferenceStrip: true,
                autoHideControls: false,
                showNavigator: false,
            },
            _setViewer: (/**
             * @param {?} viewer
             * @return {?}
             */
            function (viewer) {
                _this.instance = viewer;
            }),
        };
    };
    /**
     * @return {?}
     */
    AwSchedaImageDS.prototype.hasInstance = /**
     * @return {?}
     */
    function () {
        return !!this.instance;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwSchedaImageDS.prototype.updateImages = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!this.instance)
            return;
        // reset
        this.instance.world.removeAll();
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var images = _this.getTileSources(data.images);
            console.warn('images', images.length, images);
            _this.instance.open(images);
        }));
    };
    /**
     * @private
     * @param {?} images
     * @return {?}
     */
    AwSchedaImageDS.prototype.getTileSources = /**
     * @private
     * @param {?} images
     * @return {?}
     */
    function (images) {
        // FIXME: togliere replace
        return images.map((/**
         * @param {?} img
         * @return {?}
         */
        function (img) { return img.replace('FIF', 'Deepzoom').replace('.tif', '.tif.dzi'); }));
    };
    return AwSchedaImageDS;
}(DataSource));
export { AwSchedaImageDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSchedaImageDS.prototype.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0M7SUFBcUMsMkNBQVU7SUFBL0M7O0lBMkNBLENBQUM7Ozs7OztJQXhDVyxtQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFpQkM7O1lBaEJPLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFcEQsT0FBTztZQUNMLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxVQUFVLEVBQUU7Z0JBQ1YsV0FBVyxhQUFBO2dCQUNYLFlBQVksRUFBRSxJQUFJO2dCQUNsQixrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixhQUFhLEVBQUUsS0FBSzthQUNyQjtZQUNELFVBQVU7Ozs7WUFBRSxVQUFDLE1BQU07Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRU0scUNBQVc7OztJQUFsQjtRQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSxzQ0FBWTs7OztJQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQVdDO1FBVkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUzQixRQUFRO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFaEMsVUFBVTs7O1FBQUM7O2dCQUNILE1BQU0sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0MsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLHdDQUFjOzs7OztJQUF0QixVQUF1QixNQUFNO1FBQzNCLDBCQUEwQjtRQUMxQixPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUExRCxDQUEwRCxFQUFDLENBQUM7SUFDekYsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTNDRCxDQUFxQyxVQUFVLEdBMkM5Qzs7Ozs7OztJQTFDQyxtQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VWaWV3ZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFJbWFnZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgaW5zdGFuY2U7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogSW1hZ2VWaWV3ZXJEYXRhIHtcbiAgICBjb25zdCB0aWxlU291cmNlcyA9IHRoaXMuZ2V0VGlsZVNvdXJjZXMoZGF0YS5pbWFnZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGltYWdlczogW10sXG4gICAgICB2aWV3ZXJJZDogJ3NjaGVkYS1sYXlvdXQtdmlld2VyJyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgdGlsZVNvdXJjZXMsXG4gICAgICAgIHNlcXVlbmNlTW9kZTogdHJ1ZSxcbiAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0cnVlLFxuICAgICAgICBhdXRvSGlkZUNvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgc2hvd05hdmlnYXRvcjogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gdmlld2VyO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGhhc0luc3RhbmNlKCkge1xuICAgIHJldHVybiAhIXRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW1hZ2VzKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHJldHVybjtcblxuICAgIC8vIHJlc2V0XG4gICAgdGhpcy5pbnN0YW5jZS53b3JsZC5yZW1vdmVBbGwoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5nZXRUaWxlU291cmNlcyhkYXRhLmltYWdlcyk7XG4gICAgICBjb25zb2xlLndhcm4oJ2ltYWdlcycsIGltYWdlcy5sZW5ndGgsIGltYWdlcyk7XG4gICAgICB0aGlzLmluc3RhbmNlLm9wZW4oaW1hZ2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGlsZVNvdXJjZXMoaW1hZ2VzKSB7XG4gICAgLy8gRklYTUU6IHRvZ2xpZXJlIHJlcGxhY2VcbiAgICByZXR1cm4gaW1hZ2VzLm1hcCgoaW1nKSA9PiBpbWcucmVwbGFjZSgnRklGJywgJ0RlZXB6b29tJykucmVwbGFjZSgnLnRpZicsICcudGlmLmR6aScpKTtcbiAgfVxufVxuIl19