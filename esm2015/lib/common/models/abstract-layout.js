/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbEQsTUFBTSxPQUFnQixjQUFjOzs7O0lBS2xDLFlBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVTLFdBQVcsS0FBUyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFdEIsTUFBTTtRQUNkLFdBQVc7UUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ1gsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQzNCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCO1lBQ2xELG9CQUFvQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CO1lBQ3RELFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3RDLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRVMsU0FBUztRQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGOzs7Ozs7SUE5QkMsZ0NBQXNCOzs7OztJQUN0QixpQ0FBeUI7O0lBQ3pCLDRCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0QnVpbGRlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TGF5b3V0IHtcbiAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xuICBwcm90ZWN0ZWQgd2lkZ2V0czogYW55W107IFxuICBwdWJsaWMgbGI6IGFueTtcbiAgXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55KXtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLndpZGdldHMgPSB0aGlzLmNvbmZpZy53aWRnZXRzOyBcbiAgICB0aGlzLmxiID0gbmV3IExheW91dEJ1aWxkZXIodGhpcy5jb25maWcubGF5b3V0SWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQYXlsb2FkKCk6IGFueSB7fTtcblxuICBwcm90ZWN0ZWQgb25Jbml0KCl7XG4gICAgLy8gb24gcmVhZHlcbiAgICB0aGlzLmxiLnJlYWR5JC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sYi5ldmVudEhhbmRsZXIuZW1pdElubmVyKCdpbml0JywgdGhpcy5pbml0UGF5bG9hZCgpKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGIuaW5pdCh7XG4gICAgICB3aWRnZXRzQ29uZmlnOiB0aGlzLndpZGdldHMsXG4gICAgICB3aWRnZXRzRGF0YVNvdXJjZXM6IHRoaXMuY29uZmlnLndpZGdldHNEYXRhU291cmNlcyxcbiAgICAgIHdpZGdldHNFdmVudEhhbmRsZXJzOiB0aGlzLmNvbmZpZy53aWRnZXRzRXZlbnRIYW5kbGVycyxcbiAgICAgIGRhdGFTb3VyY2U6IG5ldyB0aGlzLmNvbmZpZy5sYXlvdXREUygpLFxuICAgICAgZXZlbnRIYW5kbGVyOiBuZXcgdGhpcy5jb25maWcubGF5b3V0RUgoKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkRlc3Ryb3koKXtcbiAgICB0aGlzLmxiLmV2ZW50SGFuZGxlci5lbWl0SW5uZXIoJ2Rlc3Ryb3knKTtcbiAgfVxufSJdfQ==