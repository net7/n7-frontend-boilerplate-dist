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
        var tileSources = this.getTileSources(data.image);
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
        if (!this.instance)
            return;
        /** @type {?} */
        var images = this.getTileSources(data.image);
        this.instance.open(images);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0M7SUFBcUMsMkNBQVU7SUFBL0M7O0lBcUNBLENBQUM7Ozs7OztJQWxDVyxtQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFpQkM7O1lBaEJPLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFbkQsT0FBTztZQUNMLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxVQUFVLEVBQUU7Z0JBQ1YsV0FBVyxhQUFBO2dCQUNYLFlBQVksRUFBRSxJQUFJO2dCQUNsQixrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixhQUFhLEVBQUUsS0FBSzthQUNyQjtZQUNELFVBQVU7Ozs7WUFBRSxVQUFDLE1BQU07Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRU0scUNBQVc7OztJQUFsQjtRQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSxzQ0FBWTs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87O1lBRXJCLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBRU8sd0NBQWM7Ozs7O0lBQXRCLFVBQXVCLE1BQU07UUFDM0IsMEJBQTBCO1FBQzFCLE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQTFELENBQTBELEVBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBckNELENBQXFDLFVBQVUsR0FxQzlDOzs7Ozs7O0lBcENDLG1DQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVZpZXdlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUltYWdlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBpbnN0YW5jZTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBJbWFnZVZpZXdlckRhdGEge1xuICAgIGNvbnN0IHRpbGVTb3VyY2VzID0gdGhpcy5nZXRUaWxlU291cmNlcyhkYXRhLmltYWdlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbWFnZXM6IFtdLFxuICAgICAgdmlld2VySWQ6ICdzY2hlZGEtbGF5b3V0LXZpZXdlcicsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIHRpbGVTb3VyY2VzLFxuICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSxcbiAgICAgICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIF9zZXRWaWV3ZXI6ICh2aWV3ZXIpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHZpZXdlcjtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gISF0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUltYWdlcyhkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSByZXR1cm47XG5cbiAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmdldFRpbGVTb3VyY2VzKGRhdGEuaW1hZ2UpO1xuICAgIHRoaXMuaW5zdGFuY2Uub3BlbihpbWFnZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaWxlU291cmNlcyhpbWFnZXMpIHtcbiAgICAvLyBGSVhNRTogdG9nbGllcmUgcmVwbGFjZVxuICAgIHJldHVybiBpbWFnZXMubWFwKChpbWcpID0+IGltZy5yZXBsYWNlKCdGSUYnLCAnRGVlcHpvb20nKS5yZXBsYWNlKCcudGlmJywgJy50aWYuZHppJykpO1xuICB9XG59XG4iXX0=