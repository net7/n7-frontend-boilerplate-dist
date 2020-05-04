/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-image.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTs7Ozs7O0lBR25DLFNBQVMsQ0FBQyxJQUFJOztjQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXBELE9BQU87WUFDTCxNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsVUFBVSxFQUFFO2dCQUNWLFdBQVc7Z0JBQ1gsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLGFBQWEsRUFBRSxLQUFLO2FBQ3JCO1lBQ0QsVUFBVTs7OztZQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUzQixRQUFRO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFaEMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFOztrQkFDUixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsTUFBTTtRQUMzQiwwQkFBMEI7UUFDMUIsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFDLENBQUM7SUFDekYsQ0FBQztDQUNGOzs7Ozs7SUExQ0MsbUNBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEltYWdlVmlld2VyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhSW1hZ2VEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGluc3RhbmNlO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IEltYWdlVmlld2VyRGF0YSB7XG4gICAgY29uc3QgdGlsZVNvdXJjZXMgPSB0aGlzLmdldFRpbGVTb3VyY2VzKGRhdGEuaW1hZ2VzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbWFnZXM6IFtdLFxuICAgICAgdmlld2VySWQ6ICdzY2hlZGEtbGF5b3V0LXZpZXdlcicsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIHRpbGVTb3VyY2VzLFxuICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSxcbiAgICAgICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIF9zZXRWaWV3ZXI6ICh2aWV3ZXIpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHZpZXdlcjtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gISF0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUltYWdlcyhkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSByZXR1cm47XG5cbiAgICAvLyByZXNldFxuICAgIHRoaXMuaW5zdGFuY2Uud29ybGQucmVtb3ZlQWxsKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuZ2V0VGlsZVNvdXJjZXMoZGF0YS5pbWFnZXMpO1xuICAgICAgY29uc29sZS53YXJuKCdpbWFnZXMnLCBpbWFnZXMubGVuZ3RoLCBpbWFnZXMpO1xuICAgICAgdGhpcy5pbnN0YW5jZS5vcGVuKGltYWdlcyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRpbGVTb3VyY2VzKGltYWdlcykge1xuICAgIC8vIEZJWE1FOiB0b2dsaWVyZSByZXBsYWNlXG4gICAgcmV0dXJuIGltYWdlcy5tYXAoKGltZykgPT4gaW1nLnJlcGxhY2UoJ0ZJRicsICdEZWVwem9vbScpLnJlcGxhY2UoJy50aWYnLCAnLnRpZi5kemknKSk7XG4gIH1cbn1cbiJdfQ==