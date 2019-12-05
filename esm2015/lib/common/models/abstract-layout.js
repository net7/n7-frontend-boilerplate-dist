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
    initPayload() { }
    ;
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
        this.lb.init({
            widgetsConfig: this.widgets,
            widgetsDataSources: this.config.widgetsDataSources,
            widgetsEventHandlers: this.config.widgetsEventHandlers,
            dataSource: new this.config.layoutDS(),
            eventHandler: new this.config.layoutEH(),
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
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRWxELE1BQU0sT0FBZ0IsY0FBYzs7OztJQUtsQyxZQUFZLE1BQVc7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFUyxXQUFXLEtBQVMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBRXRCLE1BQU07UUFDZCxXQUFXO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNYLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTztZQUMzQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQjtZQUNsRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQjtZQUN0RCxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLFNBQVM7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRjs7Ozs7O0lBOUJDLGdDQUFzQjs7Ozs7SUFDdEIsaUNBQXlCOztJQUN6Qiw0QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dEJ1aWxkZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdExheW91dCB7XG4gIHByb3RlY3RlZCBjb25maWc6IGFueTtcbiAgcHJvdGVjdGVkIHdpZGdldHM6IGFueVtdOyBcbiAgcHVibGljIGxiOiBhbnk7XG4gIFxuICBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSl7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy53aWRnZXRzID0gdGhpcy5jb25maWcud2lkZ2V0czsgXG4gICAgdGhpcy5sYiA9IG5ldyBMYXlvdXRCdWlsZGVyKHRoaXMuY29uZmlnLmxheW91dElkKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0UGF5bG9hZCgpOiBhbnkge307XG5cbiAgcHJvdGVjdGVkIG9uSW5pdCgpe1xuICAgIC8vIG9uIHJlYWR5XG4gICAgdGhpcy5sYi5yZWFkeSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubGIuZXZlbnRIYW5kbGVyLmVtaXRJbm5lcignaW5pdCcsIHRoaXMuaW5pdFBheWxvYWQoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxiLmluaXQoe1xuICAgICAgd2lkZ2V0c0NvbmZpZzogdGhpcy53aWRnZXRzLFxuICAgICAgd2lkZ2V0c0RhdGFTb3VyY2VzOiB0aGlzLmNvbmZpZy53aWRnZXRzRGF0YVNvdXJjZXMsXG4gICAgICB3aWRnZXRzRXZlbnRIYW5kbGVyczogdGhpcy5jb25maWcud2lkZ2V0c0V2ZW50SGFuZGxlcnMsXG4gICAgICBkYXRhU291cmNlOiBuZXcgdGhpcy5jb25maWcubGF5b3V0RFMoKSxcbiAgICAgIGV2ZW50SGFuZGxlcjogbmV3IHRoaXMuY29uZmlnLmxheW91dEVIKCksXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25EZXN0cm95KCl7XG4gICAgdGhpcy5sYi5ldmVudEhhbmRsZXIuZW1pdElubmVyKCdkZXN0cm95Jyk7XG4gIH1cbn0iXX0=