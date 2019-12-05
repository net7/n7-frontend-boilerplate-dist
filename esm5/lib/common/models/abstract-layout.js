/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/models/abstract-layout.ts
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
    AbstractLayout.prototype.initPayload = /**
     * @protected
     * @return {?}
     */
    function () { };
    ;
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
        this.lb.init({
            widgetsConfig: this.widgets,
            widgetsDataSources: this.config.widgetsDataSources,
            widgetsEventHandlers: this.config.widgetsEventHandlers,
            dataSource: new this.config.layoutDS(),
            eventHandler: new this.config.layoutEH(),
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
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRWxEOzs7O0lBS0Usd0JBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVTLG9DQUFXOzs7O0lBQXJCLGNBQThCLENBQUM7SUFBQSxDQUFDOzs7OztJQUV0QiwrQkFBTTs7OztJQUFoQjtRQUFBLGlCQWFDO1FBWkMsV0FBVztRQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVM7OztRQUFDO1lBQ3ZCLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNYLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTztZQUMzQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQjtZQUNsRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQjtZQUN0RCxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVTLGtDQUFTOzs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7Ozs7Ozs7Ozs7SUE5QkMsZ0NBQXNCOzs7OztJQUN0QixpQ0FBeUI7O0lBQ3pCLDRCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0QnVpbGRlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TGF5b3V0IHtcbiAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xuICBwcm90ZWN0ZWQgd2lkZ2V0czogYW55W107IFxuICBwdWJsaWMgbGI6IGFueTtcbiAgXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55KXtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLndpZGdldHMgPSB0aGlzLmNvbmZpZy53aWRnZXRzOyBcbiAgICB0aGlzLmxiID0gbmV3IExheW91dEJ1aWxkZXIodGhpcy5jb25maWcubGF5b3V0SWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCk6IGFueSB7fTtcblxuICBwcm90ZWN0ZWQgb25Jbml0KCl7XG4gICAgLy8gb24gcmVhZHlcbiAgICB0aGlzLmxiLnJlYWR5JC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sYi5ldmVudEhhbmRsZXIuZW1pdElubmVyKCdpbml0JywgdGhpcy5pbml0UGF5bG9hZCgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGIuaW5pdCh7XG4gICAgICB3aWRnZXRzQ29uZmlnOiB0aGlzLndpZGdldHMsXG4gICAgICB3aWRnZXRzRGF0YVNvdXJjZXM6IHRoaXMuY29uZmlnLndpZGdldHNEYXRhU291cmNlcyxcbiAgICAgIHdpZGdldHNFdmVudEhhbmRsZXJzOiB0aGlzLmNvbmZpZy53aWRnZXRzRXZlbnRIYW5kbGVycyxcbiAgICAgIGRhdGFTb3VyY2U6IG5ldyB0aGlzLmNvbmZpZy5sYXlvdXREUygpLFxuICAgICAgZXZlbnRIYW5kbGVyOiBuZXcgdGhpcy5jb25maWcubGF5b3V0RUgoKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRlc3Ryb3koKXtcbiAgICB0aGlzLmxiLmV2ZW50SGFuZGxlci5lbWl0SW5uZXIoJ2Rlc3Ryb3knKTtcbiAgfVxufSJdfQ==