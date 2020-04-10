/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutBuilder } from '@n7-frontend/core';
/**
 * @abstract
 */
var /**
 * @abstract
 */
AbstractLayout = /** @class */ (function () {
    function AbstractLayout(config) {
        this.config = config;
        this.widgets = this.config.widgets;
        this.lb = new LayoutBuilder(this.config.layoutId);
    }
    /**
     * @protected
     * @return {?}
     */
    AbstractLayout.prototype.onInit = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        // on ready
        this.lb.ready$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.lb.eventHandler.emitInner('init', _this.initPayload());
        }));
        /** @type {?} */
        var LayoutDS = this.config.layoutDS;
        /** @type {?} */
        var LayoutEH = this.config.layoutEH;
        this.lb.init({
            widgetsConfig: this.widgets,
            widgetsDataSources: this.config.widgetsDataSources,
            widgetsEventHandlers: this.config.widgetsEventHandlers,
            dataSource: new LayoutDS(),
            eventHandler: new LayoutEH(),
        });
    };
    /**
     * @protected
     * @return {?}
     */
    AbstractLayout.prototype.onDestroy = /**
     * @protected
     * @return {?}
     */
    function () {
        this.lb.eventHandler.emitInner('destroy');
    };
    return AbstractLayout;
}());
/**
 * @abstract
 */
export { AbstractLayout };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbEQ7Ozs7SUFPRSx3QkFBWSxNQUFXO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBSVMsK0JBQU07Ozs7SUFBaEI7UUFBQSxpQkFlQztRQWRDLFdBQVc7UUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7UUFBQztZQUN2QixLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFBQyxDQUFDOztZQUVHLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7O1lBQy9CLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDWCxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDM0Isa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0I7WUFDbEQsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0I7WUFDdEQsVUFBVSxFQUFFLElBQUksUUFBUSxFQUFFO1lBQzFCLFlBQVksRUFBRSxJQUFJLFFBQVEsRUFBRTtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLGtDQUFTOzs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7Ozs7Ozs7Ozs7SUFsQ0MsZ0NBQXNCOzs7OztJQUV0QixpQ0FBeUI7O0lBRXpCLDRCQUFlOzs7Ozs7SUFRZix1REFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXRCdWlsZGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RMYXlvdXQge1xuICBwcm90ZWN0ZWQgY29uZmlnOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHdpZGdldHM6IGFueVtdO1xuXG4gIHB1YmxpYyBsYjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55KSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy53aWRnZXRzID0gdGhpcy5jb25maWcud2lkZ2V0cztcbiAgICB0aGlzLmxiID0gbmV3IExheW91dEJ1aWxkZXIodGhpcy5jb25maWcubGF5b3V0SWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXRQYXlsb2FkKCk6IGFueTtcblxuICBwcm90ZWN0ZWQgb25Jbml0KCkge1xuICAgIC8vIG9uIHJlYWR5XG4gICAgdGhpcy5sYi5yZWFkeSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubGIuZXZlbnRIYW5kbGVyLmVtaXRJbm5lcignaW5pdCcsIHRoaXMuaW5pdFBheWxvYWQoKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBMYXlvdXREUyA9IHRoaXMuY29uZmlnLmxheW91dERTO1xuICAgIGNvbnN0IExheW91dEVIID0gdGhpcy5jb25maWcubGF5b3V0RUg7XG4gICAgdGhpcy5sYi5pbml0KHtcbiAgICAgIHdpZGdldHNDb25maWc6IHRoaXMud2lkZ2V0cyxcbiAgICAgIHdpZGdldHNEYXRhU291cmNlczogdGhpcy5jb25maWcud2lkZ2V0c0RhdGFTb3VyY2VzLFxuICAgICAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IHRoaXMuY29uZmlnLndpZGdldHNFdmVudEhhbmRsZXJzLFxuICAgICAgZGF0YVNvdXJjZTogbmV3IExheW91dERTKCksXG4gICAgICBldmVudEhhbmRsZXI6IG5ldyBMYXlvdXRFSCgpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLmxiLmV2ZW50SGFuZGxlci5lbWl0SW5uZXIoJ2Rlc3Ryb3knKTtcbiAgfVxufVxuIl19