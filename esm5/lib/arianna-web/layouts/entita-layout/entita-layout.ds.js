/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/entita-layout/entita-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var AwEntitaLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaLayoutDS, _super);
    function AwEntitaLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myResponse = {}; // backend response object
        // selected nav item
        _this.navHeader = {}; // nav-header (custom) data
        // pagination value (url param)
        _this.pageSize = 10; // linked objects page size
        // linked objects page size
        _this.bubblesSize = 10; // related entities (bubbles) page size
        _this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        function (id, data, options) {
            if (options) {
                _this.one(id).updateOptions(options);
            }
            _this.one(id).update(data);
        });
        /*
            Updates selected tab on tab change
          */
        _this.handlePageNavigation = (/**
         * @return {?}
         */
        function () {
            _this.one('aw-linked-objects').updateOptions({
                context: _this.selectedTab,
                config: _this.configuration,
                page: _this.currentPage,
                pagination: true,
                size: _this.pageSize,
            });
            _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
            _this.location.go(_this.configuration.get("paths").entitaBasePath
                +
                    _this.currentId
                + '/oggetti-collegati/'
                + _this.currentPage);
        });
        _this.handleNavUpdate = (/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            _this.selectedTab = tab;
            _this.updateWidgets(_this.myResponse);
            /** @type {?} */
            var page = tab == 'oggetti-collegati' ? "/1" : "";
            if (tab == 'oggetti-collegati') {
                _this.one('aw-linked-objects').updateOptions({
                    context: _this.selectedTab,
                    config: _this.configuration,
                    page: _this.currentPage,
                    pagination: true,
                    size: _this.pageSize,
                });
                _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
            }
            else if (tab == "overview") {
                _this.one('aw-linked-objects').updateOptions({
                    size: 3,
                    config: _this.configuration,
                    context: 'entita'
                });
                _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
            }
            if (tab == "overview" || tab == "entita-collegate") {
                setTimeout((/**
                 * @return {?}
                 */
                function () { _this.updateBubbes(_this.myResponse); }), 800);
            }
            _this.location.go(_this.configuration.get("paths").entitaBasePath
                +
                    _this.currentId
                + '/'
                + tab
                + page);
        });
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, location = _a.location, options = _a.options, titleService = _a.titleService, communication = _a.communication;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.location = location;
        this.titleService = titleService;
        this.currentId = "";
        this.currentPage = 1;
        this.bubbleLoaded = false;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.bubblesSize = this.configuration.get('entita-layout') ? this.configuration.get('entita-layout')['max-bubble-num'] : this.bubblesSize;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.getNavigation = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /*
          Requests data from communication provider
         */
        return this.communication.request$('getEntityDetails', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: { entityId: id, entitiesListSize: this.bubblesSize }
        });
    };
    /*
      Updates the widgets on this layout, based on route
    */
    /*
        Updates the widgets on this layout, based on route
      */
    /**
     * @param {?} data
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.updateWidgets = /*
        Updates the widgets on this layout, based on route
      */
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var selected = this.selectedTab;
        this.one('aw-entita-nav').update({ data: data, selected: selected });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.updateBubbes = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (!this.bubbleLoaded) {
            this.one('aw-bubble-chart').update(data);
            this.bubbleLoaded = true;
        }
    };
    /*
      Loads the data for the selected nav item, into the adjacent text block.
    */
    /*
        Loads the data for the selected nav item, into the adjacent text block.
      */
    /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.loadItem = /*
        Loads the data for the selected nav item, into the adjacent text block.
      */
    /**
     * @param {?} id
     * @param {?} tab
     * @return {?}
     */
    function (id, tab) {
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.selectedTab = tab; // store selected tab from url
            return this.communication.request$('getEntityDetails', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: { entityId: id, entitiesListSize: this.bubblesSize }
            });
        }
        else {
            this.pageTitle = 'Entità Test';
        }
    };
    /**
     * @param {?} res
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.loadContent = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        console.log('(entita) Apollo responded with: ', { res: res });
        this.myResponse = res;
        this.navHeader = {
            // always render nav header
            icon: this.configuration.get("config-keys")[this.myResponse.typeOfEntity] ? this.configuration.get("config-keys")[this.myResponse.typeOfEntity].icon : "",
            text: this.myResponse.label,
            color: this.myResponse.typeOfEntity
        };
        this.one('aw-entita-nav').updateOptions({ bubblesEnabled: this.bubblesEnabled });
        this.one('aw-bubble-chart').updateOptions({
            context: 'scheda',
            configKeys: this.configuration.get('config-keys'),
            bubbleContainerId: 'overviewBubbleChartContainer',
            containerId: 'bubble-chart-container-overview',
        });
        this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab, labels: this.configuration.get("labels") });
        this.one('aw-entita-metadata-viewer').update(res.fields);
        if (this.selectedTab == 'oggetti-collegati') {
            this.one('aw-linked-objects').updateOptions({
                context: this.selectedTab,
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                size: this.pageSize,
            });
        }
        else {
            this.one('aw-linked-objects').updateOptions({
                size: 3,
                config: this.configuration,
                context: 'entita'
            });
        }
        this.one('aw-linked-objects').update({ items: res.relatedItems });
    };
    return AwEntitaLayoutDS;
}(LayoutDataSource));
export { AwEntitaLayoutDS };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.location;
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.titleService;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.options;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.myResponse;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.selectedTab;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.navHeader;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.currentId;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.currentPage;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.pageSize;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.bubblesSize;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.bubbleLoaded;
    /**
     * @type {?}
     * @private
     */
    AwEntitaLayoutDS.prototype.communication;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.updateComponent;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handlePageNavigation;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handleNavUpdate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRDtJQUFzQyw0Q0FBZ0I7SUFBdEQ7UUFBQSxxRUFtTEM7UUF6S1EsZ0JBQVUsR0FBUSxFQUFFLENBQUMsQ0FBQywwQkFBMEI7O1FBRWhELGVBQVMsR0FBUSxFQUFFLENBQUMsQ0FBQywyQkFBMkI7O1FBR2hELGNBQVEsR0FBVyxFQUFFLENBQUMsQ0FBQywyQkFBMkI7O1FBQ2xELGlCQUFXLEdBQVcsRUFBRSxDQUFDLENBQUMsdUNBQXVDO1FBcUJqRSxxQkFBZTs7Ozs7O1FBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDMUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDcEM7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQixDQUFDLEVBQUE7Ozs7UUFlRCwwQkFBb0I7OztRQUFHO1lBQ3JCLEtBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVztnQkFDekIsTUFBTSxFQUFFLEtBQUksQ0FBQyxhQUFhO2dCQUMxQixJQUFJLEVBQUUsS0FBSSxDQUFDLFdBQVc7Z0JBQ3RCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUUsS0FBSSxDQUFDLFFBQVE7YUFDcEIsQ0FBQyxDQUFBO1lBQ0Ys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QUMxQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN0QixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3BCLENBQUMsQ0FBQTtTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsYUFBYSxDQUFDO2dCQUMxQyxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQzFCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBbkxELENBQXNDLGdCQUFnQixHQW1MckQ7Ozs7Ozs7SUFsTEMseUNBQTZCOzs7OztJQUM3QixxQ0FBeUI7Ozs7O0lBQ3pCLGtDQUFzQjs7Ozs7SUFDdEIsb0NBQXdCOzs7OztJQUN4Qix3Q0FBNEI7O0lBRTVCLG1DQUFvQjs7SUFDcEIscUNBQXlCOztJQUV6QixzQ0FBNEI7O0lBQzVCLHVDQUEyQjs7SUFDM0IscUNBQTJCOztJQUMzQixxQ0FBeUI7O0lBQ3pCLHVDQUF3Qjs7SUFDeEIsb0NBQTZCOztJQUM3Qix1Q0FBZ0M7O0lBQ2hDLDBDQUErQjs7SUFDL0Isd0NBQTZCOzs7OztJQUU3Qix5Q0FBMkI7O0lBaUIzQiwyQ0FLQzs7SUFlRCxnREFnQkU7O0lBRUYsMkNBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCBsb2NhdGlvbjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBteVJlc3BvbnNlOiBhbnkgPSB7fTsgLy8gYmFja2VuZCByZXNwb25zZSBvYmplY3RcbiAgcHVibGljIHNlbGVjdGVkVGFiOiBzdHJpbmc7IC8vIHNlbGVjdGVkIG5hdiBpdGVtXG4gIHB1YmxpYyBuYXZIZWFkZXI6IGFueSA9IHt9OyAvLyBuYXYtaGVhZGVyIChjdXN0b20pIGRhdGFcbiAgcHVibGljIGN1cnJlbnRJZDogc3RyaW5nOyAvLyBzZWxlY3RlZCBlbnRpdHkgKHVybCBwYXJhbSlcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBhbnk7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG4gIHB1YmxpYyBidWJibGVzU2l6ZTogbnVtYmVyID0gMTA7IC8vIHJlbGF0ZWQgZW50aXRpZXMgKGJ1YmJsZXMpIHBhZ2Ugc2l6ZVxuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVMb2FkZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIGxvY2F0aW9uLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLmN1cnJlbnRJZCA9IFwiXCI7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5idWJibGVMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJ1YmJsZXNFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpWydidWJibGVjaGFydCddIDogZmFsc2U7XG4gICAgdGhpcy5idWJibGVzU2l6ZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKVsnbWF4LWJ1YmJsZS1udW0nXSA6IHRoaXMuYnViYmxlc1NpemU7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50ID0gKGlkLCBkYXRhLCBvcHRpb25zPykgPT4ge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgIH1cbiAgICB0aGlzLm9uZShpZCkudXBkYXRlKGRhdGEpXG4gIH1cblxuICBnZXROYXZpZ2F0aW9uKGlkKSB7XG4gICAgLypcbiAgICAgIFJlcXVlc3RzIGRhdGEgZnJvbSBjb21tdW5pY2F0aW9uIHByb3ZpZGVyXG4gICAgICovXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgZW50aXR5SWQ6IGlkLCBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmJ1YmJsZXNTaXplIH1cbiAgICB9KVxuICB9XG5cbiAgLypcbiAgICBVcGRhdGVzIHNlbGVjdGVkIHRhYiBvbiB0YWIgY2hhbmdlXG4gICovXG4gIGhhbmRsZVBhZ2VOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgIH0pXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHtpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtc30pO1xuICAgIHRoaXMubG9jYXRpb24uZ28oXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwicGF0aHNcIikuZW50aXRhQmFzZVBhdGhcbiAgICAgICAgK1xuICAgICAgICB0aGlzLmN1cnJlbnRJZFxuICAgICAgICArICcvb2dnZXR0aS1jb2xsZWdhdGkvJ1xuICAgICAgICArIHRoaXMuY3VycmVudFBhZ2VcbiAgICApXG4gIH07XG5cbiAgaGFuZGxlTmF2VXBkYXRlID0gdGFiID0+IHtcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiXG4gICAgdGhpcy51cGRhdGVXaWRnZXRzKHRoaXMubXlSZXNwb25zZSlcbiAgICBjb25zdCBwYWdlID0gdGFiID09ICdvZ2dldHRpLWNvbGxlZ2F0aScgPyBcIi8xXCIgOiBcIlwiO1xuXG4gICAgaWYodGFiID09ICdvZ2dldHRpLWNvbGxlZ2F0aScgKXtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0pXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoe2l0ZW1zOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zfSk7XG4gICAgfSBlbHNlIGlmICh0YWIgPT0gXCJvdmVydmlld1wiKSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGNvbnRleHQ6ICdlbnRpdGEnXG4gICAgICB9KVxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHtpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtc30pO1xuICAgIH1cblxuICAgIGlmKHRhYiA9PSBcIm92ZXJ2aWV3XCIgfHwgdGFiID09IFwiZW50aXRhLWNvbGxlZ2F0ZVwiKXtcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHsgdGhpcy51cGRhdGVCdWJiZXModGhpcy5teVJlc3BvbnNlKSB9ICwgODAwICk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2NhdGlvbi5nbyhcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5lbnRpdGFCYXNlUGF0aFxuICAgICAgICArXG4gICAgICAgIHRoaXMuY3VycmVudElkXG4gICAgICAgICsgJy8nXG4gICAgICAgICsgdGFiXG4gICAgICAgICsgcGFnZVxuICAgIClcbiAgfVxuXG4gIC8qXG4gICAgVXBkYXRlcyB0aGUgd2lkZ2V0cyBvbiB0aGlzIGxheW91dCwgYmFzZWQgb24gcm91dGVcbiAgKi9cbiAgdXBkYXRlV2lkZ2V0cyhkYXRhKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkVGFiXG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGUoeyBkYXRhLCBzZWxlY3RlZCB9KVxuICB9XG4gIHVwZGF0ZUJ1YmJlcyhkYXRhKSB7XG4gICAgaWYoIXRoaXMuYnViYmxlTG9hZGVkKXtcbiAgICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGUoZGF0YSk7XG4gICAgICB0aGlzLmJ1YmJsZUxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAqL1xuICBsb2FkSXRlbShpZCwgdGFiKSB7XG4gICAgaWYgKGlkICYmIHRhYikge1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBpZCAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiIC8vIHN0b3JlIHNlbGVjdGVkIHRhYiBmcm9tIHVybFxuICAgICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAgICAgb25FcnJvcjogZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczoge2VudGl0eUlkOiBpZCwgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5idWJibGVzU2l6ZX1cbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5wYWdlVGl0bGUgPSAnRW50aXTDoCBUZXN0J1xuICAgIH1cbiAgfVxuXG4gIGxvYWRDb250ZW50KHJlcykge1xuICAgIGNvbnNvbGUubG9nKCcoZW50aXRhKSBBcG9sbG8gcmVzcG9uZGVkIHdpdGg6ICcsIHsgcmVzIH0pXG4gICAgdGhpcy5teVJlc3BvbnNlID0gcmVzXG4gICAgdGhpcy5uYXZIZWFkZXIgPSB7IC8vIGFsd2F5cyByZW5kZXIgbmF2IGhlYWRlclxuICAgICAgaWNvbjogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpW3RoaXMubXlSZXNwb25zZS50eXBlT2ZFbnRpdHldID8gdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpW3RoaXMubXlSZXNwb25zZS50eXBlT2ZFbnRpdHldLmljb24gOiBcIlwiLFxuICAgICAgdGV4dDogdGhpcy5teVJlc3BvbnNlLmxhYmVsLFxuICAgICAgY29sb3I6IHRoaXMubXlSZXNwb25zZS50eXBlT2ZFbnRpdHlcbiAgICB9XG5cbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZU9wdGlvbnMoe2J1YmJsZXNFbmFibGVkOiB0aGlzLmJ1YmJsZXNFbmFibGVkfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgY29udGV4dDogJ3NjaGVkYScsXG4gICAgICBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpLFxuICAgICAgYnViYmxlQ29udGFpbmVySWQ6ICdvdmVydmlld0J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlLWNoYXJ0LWNvbnRhaW5lci1vdmVydmlldycsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYiwgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwibGFiZWxzXCIpIH0pO1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlKHJlcy5maWVsZHMpO1xuXG4gICAgaWYoIHRoaXMuc2VsZWN0ZWRUYWIgPT0gJ29nZ2V0dGktY29sbGVnYXRpJyApIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgY29udGV4dDogJ2VudGl0YSdcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7aXRlbXM6IHJlcy5yZWxhdGVkSXRlbXN9KTtcbiAgfVxufSJdfQ==