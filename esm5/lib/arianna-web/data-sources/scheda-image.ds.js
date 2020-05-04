/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-image.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXFDLDJDQUFVO0lBQS9DOztJQTJDQSxDQUFDOzs7Ozs7SUF4Q1csbUNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFBeEIsaUJBaUJDOztZQWhCTyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXBELE9BQU87WUFDTCxNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFO2dCQUNWLFdBQVcsYUFBQTtnQkFDWCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsZ0JBQWdCLEVBQUUsS0FBSztnQkFDdkIsYUFBYSxFQUFFLEtBQUs7YUFDckI7WUFDRCxVQUFVOzs7O1lBQUUsVUFBQyxNQUFNO2dCQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUN6QixDQUFDLENBQUE7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLHFDQUFXOzs7SUFBbEI7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU0sc0NBQVk7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFXQztRQVZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFM0IsUUFBUTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWhDLFVBQVU7OztRQUFDOztnQkFDSCxNQUFNLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyx3Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsTUFBTTtRQUMzQiwwQkFBMEI7UUFDMUIsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBMUQsQ0FBMEQsRUFBQyxDQUFDO0lBQ3pGLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUEzQ0QsQ0FBcUMsVUFBVSxHQTJDOUM7Ozs7Ozs7SUExQ0MsbUNBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEltYWdlVmlld2VyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhSW1hZ2VEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGluc3RhbmNlO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IEltYWdlVmlld2VyRGF0YSB7XG4gICAgY29uc3QgdGlsZVNvdXJjZXMgPSB0aGlzLmdldFRpbGVTb3VyY2VzKGRhdGEuaW1hZ2VzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbWFnZXM6IFtdLFxuICAgICAgdmlld2VySWQ6ICdzY2hlZGEtbGF5b3V0LXZpZXdlcicsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIHRpbGVTb3VyY2VzLFxuICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSxcbiAgICAgICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIF9zZXRWaWV3ZXI6ICh2aWV3ZXIpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHZpZXdlcjtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gISF0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUltYWdlcyhkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSByZXR1cm47XG5cbiAgICAvLyByZXNldFxuICAgIHRoaXMuaW5zdGFuY2Uud29ybGQucmVtb3ZlQWxsKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuZ2V0VGlsZVNvdXJjZXMoZGF0YS5pbWFnZXMpO1xuICAgICAgY29uc29sZS53YXJuKCdpbWFnZXMnLCBpbWFnZXMubGVuZ3RoLCBpbWFnZXMpO1xuICAgICAgdGhpcy5pbnN0YW5jZS5vcGVuKGltYWdlcyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRpbGVTb3VyY2VzKGltYWdlcykge1xuICAgIC8vIEZJWE1FOiB0b2dsaWVyZSByZXBsYWNlXG4gICAgcmV0dXJuIGltYWdlcy5tYXAoKGltZykgPT4gaW1nLnJlcGxhY2UoJ0ZJRicsICdEZWVwem9vbScpLnJlcGxhY2UoJy50aWYnLCAnLnRpZi5kemknKSk7XG4gIH1cbn1cbiJdfQ==