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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFbEQ7Ozs7SUFLRSx3QkFBWSxNQUFXO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRVMsb0NBQVc7Ozs7SUFBckIsY0FBOEIsQ0FBQztJQUFBLENBQUM7Ozs7O0lBRXRCLCtCQUFNOzs7O0lBQWhCO1FBQUEsaUJBYUM7UUFaQyxXQUFXO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1FBQUM7WUFDdkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ1gsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQzNCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCO1lBQ2xELG9CQUFvQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CO1lBQ3RELFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3RDLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRVMsa0NBQVM7Ozs7SUFBbkI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQzs7Ozs7Ozs7OztJQTlCQyxnQ0FBc0I7Ozs7O0lBQ3RCLGlDQUF5Qjs7SUFDekIsNEJBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXRCdWlsZGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RMYXlvdXQge1xuICBwcm90ZWN0ZWQgY29uZmlnOiBhbnk7XG4gIHByb3RlY3RlZCB3aWRnZXRzOiBhbnlbXTsgXG4gIHB1YmxpYyBsYjogYW55O1xuICBcbiAgY29uc3RydWN0b3IoY29uZmlnOiBhbnkpe1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMud2lkZ2V0cyA9IHRoaXMuY29uZmlnLndpZGdldHM7IFxuICAgIHRoaXMubGIgPSBuZXcgTGF5b3V0QnVpbGRlcih0aGlzLmNvbmZpZy5sYXlvdXRJZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdFBheWxvYWQoKTogYW55IHt9O1xuXG4gIHByb3RlY3RlZCBvbkluaXQoKXtcbiAgICAvLyBvbiByZWFkeVxuICAgIHRoaXMubGIucmVhZHkkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxiLmV2ZW50SGFuZGxlci5lbWl0SW5uZXIoJ2luaXQnLCB0aGlzLmluaXRQYXlsb2FkKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sYi5pbml0KHtcbiAgICAgIHdpZGdldHNDb25maWc6IHRoaXMud2lkZ2V0cyxcbiAgICAgIHdpZGdldHNEYXRhU291cmNlczogdGhpcy5jb25maWcud2lkZ2V0c0RhdGFTb3VyY2VzLFxuICAgICAgd2lkZ2V0c0V2ZW50SGFuZGxlcnM6IHRoaXMuY29uZmlnLndpZGdldHNFdmVudEhhbmRsZXJzLFxuICAgICAgZGF0YVNvdXJjZTogbmV3IHRoaXMuY29uZmlnLmxheW91dERTKCksXG4gICAgICBldmVudEhhbmRsZXI6IG5ldyB0aGlzLmNvbmZpZy5sYXlvdXRFSCgpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRGVzdHJveSgpe1xuICAgIHRoaXMubGIuZXZlbnRIYW5kbGVyLmVtaXRJbm5lcignZGVzdHJveScpO1xuICB9XG59Il19