/**
 * @fileoverview added by tsickle
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
        // BUBBLE CHART DATA ↓
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
            _this.location.go("" + _this.configuration.get('paths').entitaBasePath + _this.currentId + "/oggetti-collegati/" + _this.currentPage);
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
            _this.location.go("" + _this.configuration.get('paths').entitaBasePath + _this.currentId + "/" + tab + page);
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
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.bubblesSize = this.configuration.get('entita-layout') ? this.configuration.get('entita-layout')['max-bubble-num'] : this.bubblesSize;
        this.one('aw-bubble-chart').updateOptions({ simple: true, config: this.configuration });
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
    /*
      Helper function to update the graph
    */
    /*
        Helper function to update the graph
      */
    /**
     * @param {?} data
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.updateBubbes = /*
        Helper function to update the graph
      */
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.one('aw-bubble-chart').update(data.relatedEntities);
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
        // console.log('(entita) Apollo responded with: ', { res })
        this.myResponse = res;
        this.navHeader = {
            // always render nav header
            icon: this.configuration.get("config-keys")[this.myResponse.typeOfEntity] ? this.configuration.get("config-keys")[this.myResponse.typeOfEntity].icon : "",
            text: this.myResponse.label,
            color: this.myResponse.typeOfEntity.replace(/ /g, '-')
        };
        this.one('aw-entita-nav').updateOptions({ bubblesEnabled: this.bubblesEnabled });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQTJKQztRQWpKUSxnQkFBVSxHQUFRLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjs7UUFFaEQsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFHaEQsY0FBUSxHQUFXLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7O1FBRWxELGlCQUFXLEdBQVcsRUFBRSxDQUFDLENBQUMsdUNBQXVDO1FBb0JqRSxxQkFBZTs7Ozs7O1FBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDMUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDcEM7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQixDQUFDLEVBQUE7Ozs7UUFlRCwwQkFBb0I7OztRQUFHO1lBQ3JCLEtBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVztnQkFDekIsTUFBTSxFQUFFLEtBQUksQ0FBQyxhQUFhO2dCQUMxQixJQUFJLEVBQUUsS0FBSSxDQUFDLFdBQVc7Z0JBQ3RCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUUsS0FBSSxDQUFDLFFBQVE7YUFDcEIsQ0FBQyxDQUFBO1lBQ0Ys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QW1CLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDMUIsT0FBTyxFQUFFLFFBQVE7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUEzSkQsQ0FBc0MsZ0JBQWdCLEdBMkpyRDs7Ozs7OztJQTFKQyx5Q0FBNkI7Ozs7O0lBQzdCLHFDQUF5Qjs7Ozs7SUFDekIsa0NBQXNCOzs7OztJQUN0QixvQ0FBd0I7Ozs7O0lBQ3hCLHdDQUE0Qjs7SUFFNUIsbUNBQW9COztJQUNwQixxQ0FBeUI7O0lBRXpCLHNDQUE0Qjs7SUFDNUIsdUNBQTJCOztJQUMzQixxQ0FBMkI7O0lBQzNCLHFDQUF5Qjs7SUFDekIsdUNBQXdCOztJQUN4QixvQ0FBNkI7O0lBRTdCLHVDQUFnQzs7SUFDaEMsMENBQStCOzs7OztJQUUvQix5Q0FBMkI7O0lBaUIzQiwyQ0FLQzs7SUFlRCxnREFVRTs7SUFFRiwyQ0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBhbnk7XG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcbiAgcHJvdGVjdGVkIGxvY2F0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCB0aXRsZVNlcnZpY2U6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIG15UmVzcG9uc2U6IGFueSA9IHt9OyAvLyBiYWNrZW5kIHJlc3BvbnNlIG9iamVjdFxuICBwdWJsaWMgc2VsZWN0ZWRUYWI6IHN0cmluZzsgLy8gc2VsZWN0ZWQgbmF2IGl0ZW1cbiAgcHVibGljIG5hdkhlYWRlcjogYW55ID0ge307IC8vIG5hdi1oZWFkZXIgKGN1c3RvbSkgZGF0YVxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDEwOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcbiAgLy8gQlVCQkxFIENIQVJUIERBVEEg4oaTXG4gIHB1YmxpYyBidWJibGVzU2l6ZTogbnVtYmVyID0gMTA7IC8vIHJlbGF0ZWQgZW50aXRpZXMgKGJ1YmJsZXMpIHBhZ2Ugc2l6ZVxuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCByb3V0ZXIsIGxvY2F0aW9uLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLmN1cnJlbnRJZCA9IFwiXCI7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKVsnYnViYmxlY2hhcnQnXSA6IGZhbHNlO1xuICAgIHRoaXMuYnViYmxlc1NpemUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JylbJ21heC1idWJibGUtbnVtJ10gOiB0aGlzLmJ1YmJsZXNTaXplO1xuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHsgc2ltcGxlOiB0cnVlLCBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9KVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICB9XG4gICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShkYXRhKVxuICB9XG5cbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xuICAgIC8qXG4gICAgICBSZXF1ZXN0cyBkYXRhIGZyb20gY29tbXVuaWNhdGlvbiBwcm92aWRlclxuICAgICAqL1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IGVudGl0eUlkOiBpZCwgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5idWJibGVzU2l6ZSB9XG4gICAgfSlcbiAgfVxuXG4gIC8qXG4gICAgVXBkYXRlcyBzZWxlY3RlZCB0YWIgb24gdGFiIGNoYW5nZVxuICAqL1xuICBoYW5kbGVQYWdlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICB9KVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0pO1xuICAgIHRoaXMubG9jYXRpb24uZ28oYCR7dGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aH0ke3RoaXMuY3VycmVudElkfS9vZ2dldHRpLWNvbGxlZ2F0aS8ke3RoaXMuY3VycmVudFBhZ2V9YClcbiAgfTtcblxuICBoYW5kbGVOYXZVcGRhdGUgPSB0YWIgPT4ge1xuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWJcbiAgICB0aGlzLnVwZGF0ZVdpZGdldHModGhpcy5teVJlc3BvbnNlKVxuICAgIGNvbnN0IHBhZ2UgPSB0YWIgPT0gJ29nZ2V0dGktY29sbGVnYXRpJyA/IFwiLzFcIiA6IFwiXCI7XG4gICAgaWYgKHRhYiA9PSAnb2dnZXR0aS1jb2xsZWdhdGknKSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICB9KVxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSk7XG4gICAgfSBlbHNlIGlmICh0YWIgPT0gXCJvdmVydmlld1wiKSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGNvbnRleHQ6ICdlbnRpdGEnXG4gICAgICB9KVxuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSk7XG4gICAgfVxuICAgIGlmICh0YWIgPT0gXCJvdmVydmlld1wiIHx8IHRhYiA9PSBcImVudGl0YS1jb2xsZWdhdGVcIikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMudXBkYXRlQnViYmVzKHRoaXMubXlSZXNwb25zZSkgfSwgODAwKTtcbiAgICB9XG4gICAgdGhpcy5sb2NhdGlvbi5nbyhgJHt0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRofSR7dGhpcy5jdXJyZW50SWR9LyR7dGFifSR7cGFnZX1gKVxuICB9XG5cbiAgLypcbiAgICBVcGRhdGVzIHRoZSB3aWRnZXRzIG9uIHRoaXMgbGF5b3V0LCBiYXNlZCBvbiByb3V0ZVxuICAqL1xuICB1cGRhdGVXaWRnZXRzKGRhdGEpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRUYWJcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZSh7IGRhdGEsIHNlbGVjdGVkIH0pXG4gIH1cbiAgLypcbiAgICBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBncmFwaFxuICAqL1xuICB1cGRhdGVCdWJiZXMoZGF0YSkge1xuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGUoZGF0YS5yZWxhdGVkRW50aXRpZXMpO1xuICB9XG5cbiAgLypcbiAgICBMb2FkcyB0aGUgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIG5hdiBpdGVtLCBpbnRvIHRoZSBhZGphY2VudCB0ZXh0IGJsb2NrLlxuICAqL1xuICBsb2FkSXRlbShpZCwgdGFiKSB7XG4gICAgaWYgKGlkICYmIHRhYikge1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBpZCAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiIC8vIHN0b3JlIHNlbGVjdGVkIHRhYiBmcm9tIHVybFxuICAgICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0RW50aXR5RGV0YWlscycsIHtcbiAgICAgICAgb25FcnJvcjogZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczogeyBlbnRpdHlJZDogaWQsIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuYnViYmxlc1NpemUgfVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdFbnRpdMOgIFRlc3QnXG4gICAgfVxuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzKSB7XG4gICAgLy8gY29uc29sZS5sb2coJyhlbnRpdGEpIEFwb2xsbyByZXNwb25kZWQgd2l0aDogJywgeyByZXMgfSlcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXNcbiAgICB0aGlzLm5hdkhlYWRlciA9IHsgLy8gYWx3YXlzIHJlbmRlciBuYXYgaGVhZGVyXG4gICAgICBpY29uOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbdGhpcy5teVJlc3BvbnNlLnR5cGVPZkVudGl0eV0gPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbdGhpcy5teVJlc3BvbnNlLnR5cGVPZkVudGl0eV0uaWNvbiA6IFwiXCIsXG4gICAgICB0ZXh0OiB0aGlzLm15UmVzcG9uc2UubGFiZWwsXG4gICAgICBjb2xvcjogdGhpcy5teVJlc3BvbnNlLnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJylcbiAgICB9XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGVPcHRpb25zKHsgYnViYmxlc0VuYWJsZWQ6IHRoaXMuYnViYmxlc0VuYWJsZWQgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYiwgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwibGFiZWxzXCIpIH0pO1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlKHJlcy5maWVsZHMpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiID09ICdvZ2dldHRpLWNvbGxlZ2F0aScpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgY29udGV4dDogJ2VudGl0YSdcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiByZXMucmVsYXRlZEl0ZW1zIH0pO1xuICB9XG59Il19