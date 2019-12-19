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
        _this.showFields = false;
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
        var configuration = _a.configuration, mainState = _a.mainState, router = _a.router, route = _a.route, location = _a.location, options = _a.options, titleService = _a.titleService, communication = _a.communication;
        this.route = route;
        this.communication = communication;
        this.configuration = configuration;
        this.mainState = mainState;
        this.options = options;
        this.router = router;
        this.location = location;
        this.titleService = titleService;
        this.currentId = "";
        this.currentPage = +this.route.snapshot.params.page;
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
        this.updateComponent('aw-entita-metadata-viewer', this.myResponse.fields, {
            context: this.selectedTab,
            config: this.configuration,
            labels: this.configuration.get("labels")
        });
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
        var _this = this;
        // console.log('(entita) Apollo responded with: ', { res })
        this.myResponse = res;
        if ((res.fields || []).filter((/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return ((_this.configuration.get('entita-layout') || {}).overview || {}).campi.includes(field.key); })).length > 0) {
            // look at the response array, filtered by configuration values.
            // if the filtered response has some values, show the fields section.
            this.showFields = true;
        }
        else {
            this.showFields = false;
        }
        this.navHeader = {
            // always render nav header
            icon: this.configuration.get("config-keys")[this.myResponse.typeOfEntity] ? this.configuration.get("config-keys")[this.myResponse.typeOfEntity].icon : "",
            text: this.myResponse.label,
            color: this.myResponse.typeOfEntity.replace(/ /g, '-')
        };
        this.one('aw-entita-nav').updateOptions({ bubblesEnabled: this.bubblesEnabled });
        this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab, labels: this.configuration.get("labels"), config: this.configuration });
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
    /**
     * @type {?}
     * @protected
     */
    AwEntitaLayoutDS.prototype.route;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.options;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.showFields;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQTZLQztRQW5LUSxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixnQkFBVSxHQUFRLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjs7UUFFaEQsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFHaEQsY0FBUSxHQUFXLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7O1FBRWxELGlCQUFXLEdBQVcsRUFBRSxDQUFDLENBQUMsdUNBQXVDO1FBcUJqRSxxQkFBZTs7Ozs7O1FBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDMUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDcEM7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQixDQUFDLEVBQUE7Ozs7UUFlRCwwQkFBb0I7OztRQUFHO1lBQ3JCLEtBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVztnQkFDekIsTUFBTSxFQUFFLEtBQUksQ0FBQyxhQUFhO2dCQUMxQixJQUFJLEVBQUUsS0FBSSxDQUFDLFdBQVc7Z0JBQ3RCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUUsS0FBSSxDQUFD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LE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBN0tELENBQXNDLGdCQUFnQixHQTZLckQ7Ozs7Ozs7SUE1S0MseUNBQTZCOzs7OztJQUM3QixxQ0FBeUI7Ozs7O0lBQ3pCLGtDQUFzQjs7Ozs7SUFDdEIsb0NBQXdCOzs7OztJQUN4Qix3Q0FBNEI7Ozs7O0lBQzVCLGlDQUFxQjs7SUFFckIsbUNBQW9COztJQUNwQixxQ0FBeUI7O0lBQ3pCLHNDQUFtQzs7SUFDbkMsc0NBQTRCOztJQUM1Qix1Q0FBMkI7O0lBQzNCLHFDQUEyQjs7SUFDM0IscUNBQXlCOztJQUN6Qix1Q0FBd0I7O0lBQ3hCLG9DQUE2Qjs7SUFFN0IsdUNBQWdDOztJQUNoQywwQ0FBK0I7Ozs7O0lBRS9CLHlDQUEyQjs7SUFrQjNCLDJDQUtDOztJQWVELGdEQVVFOztJQUVGLDJDQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcbiAgcHJvdGVjdGVkIHJvdXRlcjogYW55O1xuICBwcm90ZWN0ZWQgbG9jYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGU6IGFueTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93RmllbGRzOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBteVJlc3BvbnNlOiBhbnkgPSB7fTsgLy8gYmFja2VuZCByZXNwb25zZSBvYmplY3RcbiAgcHVibGljIHNlbGVjdGVkVGFiOiBzdHJpbmc7IC8vIHNlbGVjdGVkIG5hdiBpdGVtXG4gIHB1YmxpYyBuYXZIZWFkZXI6IGFueSA9IHt9OyAvLyBuYXYtaGVhZGVyIChjdXN0b20pIGRhdGFcbiAgcHVibGljIGN1cnJlbnRJZDogc3RyaW5nOyAvLyBzZWxlY3RlZCBlbnRpdHkgKHVybCBwYXJhbSlcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBhbnk7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG4gIC8vIEJVQkJMRSBDSEFSVCBEQVRBIOKGk1xuICBwdWJsaWMgYnViYmxlc1NpemU6IG51bWJlciA9IDEwOyAvLyByZWxhdGVkIGVudGl0aWVzIChidWJibGVzKSBwYWdlIHNpemVcbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIG9uSW5pdCh7IGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCByb3V0ZSwgbG9jYXRpb24sIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbiB9KSB7XG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICB0aGlzLmN1cnJlbnRJZCA9IFwiXCI7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5wYWdlO1xuICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJylbJ2J1YmJsZWNoYXJ0J10gOiBmYWxzZTtcbiAgICB0aGlzLmJ1YmJsZXNTaXplID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpWydtYXgtYnViYmxlLW51bSddIDogdGhpcy5idWJibGVzU2l6ZTtcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7IHNpbXBsZTogdHJ1ZSwgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSlcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgfVxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSlcbiAgfVxuXG4gIGdldE5hdmlnYXRpb24oaWQpIHtcbiAgICAvKlxuICAgICAgUmVxdWVzdHMgZGF0YSBmcm9tIGNvbW11bmljYXRpb24gcHJvdmlkZXJcbiAgICAgKi9cbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyBlbnRpdHlJZDogaWQsIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuYnViYmxlc1NpemUgfVxuICAgIH0pXG4gIH1cblxuICAvKlxuICAgIFVwZGF0ZXMgc2VsZWN0ZWQgdGFiIG9uIHRhYiBjaGFuZ2VcbiAgKi9cbiAgaGFuZGxlUGFnZU5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgfSlcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9KTtcbiAgICB0aGlzLmxvY2F0aW9uLmdvKGAke3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGh9JHt0aGlzLmN1cnJlbnRJZH0vb2dnZXR0aS1jb2xsZWdhdGkvJHt0aGlzLmN1cnJlbnRQYWdlfWApXG4gIH07XG5cbiAgaGFuZGxlTmF2VXBkYXRlID0gdGFiID0+IHtcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiXG4gICAgdGhpcy51cGRhdGVXaWRnZXRzKHRoaXMubXlSZXNwb25zZSlcbiAgICBjb25zdCBwYWdlID0gdGFiID09ICdvZ2dldHRpLWNvbGxlZ2F0aScgPyBcIi8xXCIgOiBcIlwiO1xuICAgIGlmICh0YWIgPT0gJ29nZ2V0dGktY29sbGVnYXRpJykge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgfSlcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0pO1xuICAgIH0gZWxzZSBpZiAodGFiID09IFwib3ZlcnZpZXdcIikge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBjb250ZXh0OiAnZW50aXRhJ1xuICAgICAgfSlcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0pO1xuICAgIH1cbiAgICBpZiAodGFiID09IFwib3ZlcnZpZXdcIiB8fCB0YWIgPT0gXCJlbnRpdGEtY29sbGVnYXRlXCIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnVwZGF0ZUJ1YmJlcyh0aGlzLm15UmVzcG9uc2UpIH0sIDgwMCk7XG4gICAgfVxuICAgIHRoaXMubG9jYXRpb24uZ28oYCR7dGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aH0ke3RoaXMuY3VycmVudElkfS8ke3RhYn0ke3BhZ2V9YClcbiAgfVxuXG4gIC8qXG4gICAgVXBkYXRlcyB0aGUgd2lkZ2V0cyBvbiB0aGlzIGxheW91dCwgYmFzZWQgb24gcm91dGVcbiAgKi9cbiAgdXBkYXRlV2lkZ2V0cyhkYXRhKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkVGFiXG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGUoeyBkYXRhLCBzZWxlY3RlZCB9KVxuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KFxuICAgICAgJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInLFxuICAgICAgdGhpcy5teVJlc3BvbnNlLmZpZWxkcyxcbiAgICAgIHtcbiAgICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImxhYmVsc1wiKVxuICAgICAgfVxuICAgIClcbiAgfVxuICAvKlxuICAgIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdyYXBoXG4gICovXG4gIHVwZGF0ZUJ1YmJlcyhkYXRhKSB7XG4gICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZShkYXRhLnJlbGF0ZWRFbnRpdGllcyk7XG4gIH1cblxuICAvKlxuICAgIExvYWRzIHRoZSBkYXRhIGZvciB0aGUgc2VsZWN0ZWQgbmF2IGl0ZW0sIGludG8gdGhlIGFkamFjZW50IHRleHQgYmxvY2suXG4gICovXG4gIGxvYWRJdGVtKGlkLCB0YWIpIHtcbiAgICBpZiAoaWQgJiYgdGFiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkIC8vIHN0b3JlIHNlbGVjdGVkIGl0ZW0gZnJvbSB1cmxcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWIgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgcGFyYW1zOiB7IGVudGl0eUlkOiBpZCwgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5idWJibGVzU2l6ZSB9XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucGFnZVRpdGxlID0gJ0VudGl0w6AgVGVzdCdcbiAgICB9XG4gIH1cblxuICBsb2FkQ29udGVudChyZXMpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnKGVudGl0YSkgQXBvbGxvIHJlc3BvbmRlZCB3aXRoOiAnLCB7IHJlcyB9KVxuICAgIHRoaXMubXlSZXNwb25zZSA9IHJlc1xuICAgIGlmICgocmVzLmZpZWxkcyB8fCBbXSkuZmlsdGVyKGZpZWxkID0+ICgodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpIHx8IHt9KS5vdmVydmlldyB8fCB7fSkuY2FtcGkuaW5jbHVkZXMoZmllbGQua2V5KSkubGVuZ3RoID4gMCkge1xuICAgICAgLy8gbG9vayBhdCB0aGUgcmVzcG9uc2UgYXJyYXksIGZpbHRlcmVkIGJ5IGNvbmZpZ3VyYXRpb24gdmFsdWVzLlxuICAgICAgLy8gaWYgdGhlIGZpbHRlcmVkIHJlc3BvbnNlIGhhcyBzb21lIHZhbHVlcywgc2hvdyB0aGUgZmllbGRzIHNlY3Rpb24uXG4gICAgICB0aGlzLnNob3dGaWVsZHMgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0ZpZWxkcyA9IGZhbHNlXG4gICAgfVxuICAgIHRoaXMubmF2SGVhZGVyID0geyAvLyBhbHdheXMgcmVuZGVyIG5hdiBoZWFkZXJcbiAgICAgIGljb246IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVt0aGlzLm15UmVzcG9uc2UudHlwZU9mRW50aXR5XSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVt0aGlzLm15UmVzcG9uc2UudHlwZU9mRW50aXR5XS5pY29uIDogXCJcIixcbiAgICAgIHRleHQ6IHRoaXMubXlSZXNwb25zZS5sYWJlbCxcbiAgICAgIGNvbG9yOiB0aGlzLm15UmVzcG9uc2UudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKVxuICAgIH1cbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZU9wdGlvbnMoeyBidWJibGVzRW5hYmxlZDogdGhpcy5idWJibGVzRW5hYmxlZCB9KTtcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicpLnVwZGF0ZU9wdGlvbnMoeyBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLCBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJsYWJlbHNcIiksIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0pO1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlKHJlcy5maWVsZHMpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiID09ICdvZ2dldHRpLWNvbGxlZ2F0aScpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgY29udGV4dDogJ2VudGl0YSdcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiByZXMucmVsYXRlZEl0ZW1zIH0pO1xuICB9XG59Il19