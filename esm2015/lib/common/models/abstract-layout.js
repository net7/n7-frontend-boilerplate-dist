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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRWxELE1BQU0sT0FBZ0IsY0FBYzs7OztJQUtsQyxZQUFZLE1BQVc7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFUyxXQUFXLEtBQVMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBRXRCLE1BQU07UUFDZCxXQUFXO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNYLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTztZQUMzQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQjtZQUNsRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQjtZQUN0RCxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLFNBQVM7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRjs7Ozs7O0lBOUJDLGdDQUFzQjs7Ozs7SUFDdEIsaUNBQXlCOztJQUN6Qiw0QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dEJ1aWxkZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RMYXlvdXQge1xyXG4gIHByb3RlY3RlZCBjb25maWc6IGFueTtcclxuICBwcm90ZWN0ZWQgd2lkZ2V0czogYW55W107IFxyXG4gIHB1YmxpYyBsYjogYW55O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55KXtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgdGhpcy53aWRnZXRzID0gdGhpcy5jb25maWcud2lkZ2V0czsgXHJcbiAgICB0aGlzLmxiID0gbmV3IExheW91dEJ1aWxkZXIodGhpcy5jb25maWcubGF5b3V0SWQpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCk6IGFueSB7fTtcclxuXHJcbiAgcHJvdGVjdGVkIG9uSW5pdCgpe1xyXG4gICAgLy8gb24gcmVhZHlcclxuICAgIHRoaXMubGIucmVhZHkkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubGIuZXZlbnRIYW5kbGVyLmVtaXRJbm5lcignaW5pdCcsIHRoaXMuaW5pdFBheWxvYWQoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxiLmluaXQoe1xyXG4gICAgICB3aWRnZXRzQ29uZmlnOiB0aGlzLndpZGdldHMsXHJcbiAgICAgIHdpZGdldHNEYXRhU291cmNlczogdGhpcy5jb25maWcud2lkZ2V0c0RhdGFTb3VyY2VzLFxyXG4gICAgICB3aWRnZXRzRXZlbnRIYW5kbGVyczogdGhpcy5jb25maWcud2lkZ2V0c0V2ZW50SGFuZGxlcnMsXHJcbiAgICAgIGRhdGFTb3VyY2U6IG5ldyB0aGlzLmNvbmZpZy5sYXlvdXREUygpLFxyXG4gICAgICBldmVudEhhbmRsZXI6IG5ldyB0aGlzLmNvbmZpZy5sYXlvdXRFSCgpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25EZXN0cm95KCl7XHJcbiAgICB0aGlzLmxiLmV2ZW50SGFuZGxlci5lbWl0SW5uZXIoJ2Rlc3Ryb3knKTtcclxuICB9XHJcbn0iXX0=