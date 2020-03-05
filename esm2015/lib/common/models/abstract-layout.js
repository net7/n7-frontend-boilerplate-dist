/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/abstract-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutBuilder } from '@n7-frontend/core';
/**
 * @abstract
 */
export class AbstractLayout {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.widgets = this.config.widgets;
        this.lb = new LayoutBuilder(this.config.layoutId);
    }
    /**
     * @protected
     * @return {?}
     */
    onInit() {
        // on ready
        this.lb.ready$.subscribe((/**
         * @return {?}
         */
        () => {
            this.lb.eventHandler.emitInner('init', this.initPayload());
        }));
        /** @type {?} */
        const LayoutDS = this.config.layoutDS;
        /** @type {?} */
        const LayoutEH = this.config.layoutEH;
        this.lb.init({
            widgetsConfig: this.widgets,
            widgetsDataSources: this.config.widgetsDataSources,
            widgetsEventHandlers: this.config.widgetsEventHandlers,
            dataSource: new LayoutDS(),
            eventHandler: new LayoutEH(),
        });
    }
    /**
     * @protected
     * @return {?}
     */
    onDestroy() {
        this.lb.eventHandler.emitInner('destroy');
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AbstractLayout.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    AbstractLayout.prototype.widgets;
    /** @type {?} */
    AbstractLayout.prototype.lb;
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    AbstractLayout.prototype.initPayload = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRWxELE1BQU0sT0FBZ0IsY0FBYzs7OztJQU9sQyxZQUFZLE1BQVc7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFJUyxNQUFNO1FBQ2QsV0FBVztRQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFBQyxDQUFDOztjQUVHLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7O2NBQy9CLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDWCxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDM0Isa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0I7WUFDbEQsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0I7WUFDdEQsVUFBVSxFQUFFLElBQUksUUFBUSxFQUFFO1lBQzFCLFlBQVksRUFBRSxJQUFJLFFBQVEsRUFBRTtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLFNBQVM7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRjs7Ozs7O0lBbENDLGdDQUFzQjs7Ozs7SUFFdEIsaUNBQXlCOztJQUV6Qiw0QkFBZTs7Ozs7O0lBUWYsdURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0QnVpbGRlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdExheW91dCB7XHJcbiAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgd2lkZ2V0czogYW55W107XHJcblxyXG4gIHB1YmxpYyBsYjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICB0aGlzLndpZGdldHMgPSB0aGlzLmNvbmZpZy53aWRnZXRzO1xyXG4gICAgdGhpcy5sYiA9IG5ldyBMYXlvdXRCdWlsZGVyKHRoaXMuY29uZmlnLmxheW91dElkKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0UGF5bG9hZCgpOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBvbkluaXQoKSB7XHJcbiAgICAvLyBvbiByZWFkeVxyXG4gICAgdGhpcy5sYi5yZWFkeSQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sYi5ldmVudEhhbmRsZXIuZW1pdElubmVyKCdpbml0JywgdGhpcy5pbml0UGF5bG9hZCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IExheW91dERTID0gdGhpcy5jb25maWcubGF5b3V0RFM7XHJcbiAgICBjb25zdCBMYXlvdXRFSCA9IHRoaXMuY29uZmlnLmxheW91dEVIO1xyXG4gICAgdGhpcy5sYi5pbml0KHtcclxuICAgICAgd2lkZ2V0c0NvbmZpZzogdGhpcy53aWRnZXRzLFxyXG4gICAgICB3aWRnZXRzRGF0YVNvdXJjZXM6IHRoaXMuY29uZmlnLndpZGdldHNEYXRhU291cmNlcyxcclxuICAgICAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IHRoaXMuY29uZmlnLndpZGdldHNFdmVudEhhbmRsZXJzLFxyXG4gICAgICBkYXRhU291cmNlOiBuZXcgTGF5b3V0RFMoKSxcclxuICAgICAgZXZlbnRIYW5kbGVyOiBuZXcgTGF5b3V0RUgoKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubGIuZXZlbnRIYW5kbGVyLmVtaXRJbm5lcignZGVzdHJveScpO1xyXG4gIH1cclxufVxyXG4iXX0=