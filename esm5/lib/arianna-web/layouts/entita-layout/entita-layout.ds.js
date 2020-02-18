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
        // selected nav item
        _this.navHeader = {}; // nav-header (custom) data
        // pagination value (url param)
        _this.pageSize = 10; // linked objects page size
        // linked objects page size
        // ===== BUBBLE CHART =====
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
        _this.drawPagination = (/**
         * @return {?}
         */
        function () {
            var _a = _this._getPaginationParams(), href = _a.href, queryParams = _a.queryParams;
            _this.one('n7-smart-pagination').updateOptions({
                mode: 'href',
                href: href,
                queryParams: queryParams,
            });
            _this.one('n7-smart-pagination').update({
                totalPages: Math.ceil(_this.myResponse.relatedItems.length / _this.pageSize),
                currentPage: _this.currentPage,
                pageLimit: 5,
                sizes: {
                    list: [10, 25, 50],
                    active: _this.pageSize
                }
            });
        });
        _this.handlePageNavigation = (/**
         * @return {?}
         */
        function () {
            /*
              Updates selected tab on tab change
            */
            if (!_this.myResponse) {
                return;
            }
            var _a = _this._getPaginationParams(), href = _a.href, queryParams = _a.queryParams;
            _this.drawPagination();
            _this.one('aw-linked-objects').updateOptions({
                paginationParams: { href: href, queryParams: queryParams },
                context: _this.selectedTab,
                config: _this.configuration,
                page: _this.currentPage,
                pagination: true,
                size: _this.pageSize,
            });
            _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
        });
        _this.handleNavUpdate = (/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            _this.selectedTab = tab;
            _this.updateWidgets(_this.myResponse);
            /** @type {?} */
            var page = tab === 'oggetti-collegati' ? '/1' : '';
            if (tab === 'oggetti-collegati') {
                _this.one('aw-linked-objects').updateOptions({
                    context: _this.selectedTab,
                    config: _this.configuration,
                    page: _this.currentPage,
                    pagination: true,
                    paginationParams: _this._getPaginationParams(),
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
                function () { _this.updateBubbes(_this.myResponse.relatedEntities); }), 800);
            }
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
        this.currentPage = +this.route.snapshot.queryParams.page;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.bubblesSize = this.configuration.get('entita-layout') ? this.configuration.get('entita-layout')['entitiesQuerySize'] : this.bubblesSize;
        this.one('aw-bubble-chart').updateOptions({
            selectable: false,
            simple: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit,
            smallChartSize: this.configuration.get('entita-layout').overview.smallChartSize
        });
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths')['entitaBasePath']
        });
        // navigation update
        this.mainState.updateCustom('currentNav', 'entita');
        // update head title
        this.mainState.update('headTitle', 'Arianna Web > Entità');
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
    /**
     * @param {?} data
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.updateWidgets = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /*
              Updates the widgets on this layout, based on route
            */
        /** @type {?} */
        var selected = this.selectedTab;
        Object.keys(data).forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            if (Array.isArray(data[k]) && data[k].length == 0) {
                data[k] = null;
            }
        }));
        this.one('aw-entita-nav').update({
            data: data,
            selected: selected,
            basePath: this.getNavBasePath()
        });
        this.updateComponent('aw-entita-metadata-viewer', this.myResponse.fields, {
            context: this.selectedTab,
            config: this.configuration,
            labels: this.configuration.get("labels")
        });
        this.drawPagination();
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
        /*
          Helper function to update the graph
        */
        this.one('aw-bubble-chart').update(data);
    };
    /**
     * @param {?} id
     * @param {?} slug
     * @param {?} tab
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.loadItem = /**
     * @param {?} id
     * @param {?} slug
     * @param {?} tab
     * @return {?}
     */
    function (id, slug, tab) {
        /*
          Loads the data for the selected nav item, into the adjacent text block.
        */
        if (id && tab) {
            this.currentId = id; // store selected item from url
            this.currentSlug = slug; // store selected item from url
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
        /** @type {?} */
        var config = this.configuration.get("config-keys")[res.typeOfEntity];
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
            icon: config ? config.icon : '',
            text: this.myResponse.label,
            color: config['class-name']
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
                paginationParams: this._getPaginationParams(),
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
        this.drawPagination();
        // update head title
        this.mainState.update('headTitle', "Arianna Web > Entit\u00E0 > " + this.myResponse.label);
    };
    /**
     * @private
     * @return {?}
     */
    AwEntitaLayoutDS.prototype._getPaginationParams = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            href: [
                this.configuration.get('paths').entitaBasePath,
                this.currentId + '/',
                this.currentSlug,
                '/oggetti-collegati/'
            ].join(''),
            queryParams: {
                page: this.currentPage
            }
        };
    };
    /**
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.getNavBasePath = /**
     * @return {?}
     */
    function () {
        return [
            this.configuration.get('paths').entitaBasePath,
            this.currentId + '/',
            this.currentSlug
        ].join('');
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
    AwEntitaLayoutDS.prototype.currentSlug;
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
    AwEntitaLayoutDS.prototype.drawPagination;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handlePageNavigation;
    /** @type {?} */
    AwEntitaLayoutDS.prototype.handleNavUpdate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQXlQQztRQS9PUSxnQkFBVSxHQUFZLEtBQUssQ0FBQzs7UUFHNUIsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFJaEQsY0FBUSxHQUFXLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7O1FBRWxELGlCQUFXLEdBQVcsRUFBRSxDQUFDLENBQUMsdUNBQXVDO1FBb0NqRSxxQkFBZTs7Ozs7O1FBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDMUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDcEM7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQixDQUFDLEVBQUE7UUFZRCxvQkFBYzs7O1FBQUc7WUFDVCxJQUFBLGlDQUFtRCxFQUFqRCxjQUFJLEVBQUUsNEJBQTJDO1lBQ3pELEtBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQzVDLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksTUFBQTtnQkFDSixXQUFXLGFBQUE7YUFDWixDQUFDLENBQUE7WUFDRixLQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFD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Q0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXpQRCxDQUFzQyxnQkFBZ0IsR0F5UHJEOzs7Ozs7O0lBeFBDLHlDQUE2Qjs7Ozs7SUFDN0IscUNBQXlCOzs7OztJQUN6QixrQ0FBc0I7Ozs7O0lBQ3RCLG9DQUF3Qjs7Ozs7SUFDeEIsd0NBQTRCOzs7OztJQUM1QixpQ0FBcUI7O0lBRXJCLG1DQUFvQjs7SUFDcEIscUNBQXlCOztJQUN6QixzQ0FBbUM7O0lBQ25DLHNDQUF1Qjs7SUFDdkIsdUNBQTJCOztJQUMzQixxQ0FBMkI7O0lBQzNCLHFDQUF5Qjs7SUFDekIsdUNBQTJCOztJQUMzQix1Q0FBd0I7O0lBQ3hCLG9DQUE2Qjs7SUFFN0IsdUNBQWdDOztJQUNoQywwQ0FBK0I7Ozs7O0lBRS9CLHlDQUEyQjs7SUFpQzNCLDJDQUtDOztJQVlELDBDQWdCQzs7SUFFRCxnREFrQkM7O0lBRUQsMkNBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG4gIHByb3RlY3RlZCBsb2NhdGlvbjogYW55O1xuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG4gIHByb3RlY3RlZCByb3V0ZTogYW55O1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIHNob3dGaWVsZHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG15UmVzcG9uc2U6IGFueTsgLy8gYmFja2VuZCByZXNwb25zZSBvYmplY3RcbiAgcHVibGljIHNlbGVjdGVkVGFiOiBzdHJpbmc7IC8vIHNlbGVjdGVkIG5hdiBpdGVtXG4gIHB1YmxpYyBuYXZIZWFkZXI6IGFueSA9IHt9OyAvLyBuYXYtaGVhZGVyIChjdXN0b20pIGRhdGFcbiAgcHVibGljIGN1cnJlbnRJZDogc3RyaW5nOyAvLyBzZWxlY3RlZCBlbnRpdHkgKHVybCBwYXJhbSlcbiAgcHVibGljIGN1cnJlbnRTbHVnOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDEwOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcbiAgLy8gPT09PT0gQlVCQkxFIENIQVJUID09PT09XG4gIHB1YmxpYyBidWJibGVzU2l6ZTogbnVtYmVyID0gMTA7IC8vIHJlbGF0ZWQgZW50aXRpZXMgKGJ1YmJsZXMpIHBhZ2Ugc2l6ZVxuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW47XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBvbkluaXQoeyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgcm91dGUsIGxvY2F0aW9uLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24gfSkge1xuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5jdXJyZW50SWQgPSBcIlwiO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcy5wYWdlO1xuICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJylbJ2J1YmJsZWNoYXJ0J10gOiBmYWxzZTtcbiAgICB0aGlzLmJ1YmJsZXNTaXplID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpWydlbnRpdGllc1F1ZXJ5U2l6ZSddIDogdGhpcy5idWJibGVzU2l6ZTtcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgIHNpbXBsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpLmJ1YmJsZUxpbWl0LFxuICAgICAgc21hbGxDaGFydFNpemU6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKS5vdmVydmlldy5zbWFsbENoYXJ0U2l6ZVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgYmFzZVBhdGg6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJylbJ2VudGl0YUJhc2VQYXRoJ11cbiAgICB9KVxuXG4gICAgLy8gbmF2aWdhdGlvbiB1cGRhdGVcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnZW50aXRhJyk7XG5cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gRW50aXTDoCcpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICB9XG4gICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShkYXRhKVxuICB9XG5cbiAgZ2V0TmF2aWdhdGlvbihpZCkge1xuICAgIC8qXG4gICAgICBSZXF1ZXN0cyBkYXRhIGZyb20gY29tbXVuaWNhdGlvbiBwcm92aWRlclxuICAgICAqL1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IGVudGl0eUlkOiBpZCwgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5idWJibGVzU2l6ZSB9XG4gICAgfSk7XG4gIH1cblxuICBkcmF3UGFnaW5hdGlvbiA9ICgpID0+ICB7XG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBtb2RlOiAnaHJlZicsXG4gICAgICBocmVmLFxuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgfSlcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKSxcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnZUxpbWl0OiA1LFxuICAgICAgc2l6ZXM6IHtcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxuICAgICAgICBhY3RpdmU6IHRoaXMucGFnZVNpemVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUGFnZU5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgLypcbiAgICAgIFVwZGF0ZXMgc2VsZWN0ZWQgdGFiIG9uIHRhYiBjaGFuZ2VcbiAgICAqL1xuICAgIGlmICghdGhpcy5teVJlc3BvbnNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKTtcbiAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKClcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSxcbiAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9KTtcbiAgfVxuXG4gIGhhbmRsZU5hdlVwZGF0ZSA9IHRhYiA9PiB7XG4gICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICB0aGlzLnVwZGF0ZVdpZGdldHModGhpcy5teVJlc3BvbnNlKTtcbiAgICBjb25zdCBwYWdlID0gdGFiID09PSAnb2dnZXR0aS1jb2xsZWdhdGknID8gJy8xJyA6ICcnO1xuICAgIGlmICh0YWIgPT09ICdvZ2dldHRpLWNvbGxlZ2F0aScpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgcGFnaW5hdGlvblBhcmFtczogdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpLFxuICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9KTtcbiAgICB9IGVsc2UgaWYgKHRhYiA9PSBcIm92ZXJ2aWV3XCIpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgY29udGV4dDogJ2VudGl0YSdcbiAgICAgIH0pXG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9KTtcbiAgICB9XG4gICAgaWYgKHRhYiA9PSBcIm92ZXJ2aWV3XCIgfHwgdGFiID09IFwiZW50aXRhLWNvbGxlZ2F0ZVwiKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy51cGRhdGVCdWJiZXModGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcykgfSwgODAwKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVXaWRnZXRzKGRhdGEpIHtcbiAgICAvKlxuICAgICAgVXBkYXRlcyB0aGUgd2lkZ2V0cyBvbiB0aGlzIGxheW91dCwgYmFzZWQgb24gcm91dGVcbiAgICAqL1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFRhYjtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtrXSkgJiYgZGF0YVtrXS5sZW5ndGggPT0gMCkgeyBkYXRhW2tdID0gbnVsbCB9XG4gICAgfSlcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZSh7XG4gICAgICBkYXRhLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBiYXNlUGF0aDogdGhpcy5nZXROYXZCYXNlUGF0aCgpXG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnQoXG4gICAgICAnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicsXG4gICAgICB0aGlzLm15UmVzcG9uc2UuZmllbGRzLFxuICAgICAge1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwibGFiZWxzXCIpXG4gICAgICB9XG4gICAgKVxuICAgIHRoaXMuZHJhd1BhZ2luYXRpb24oKVxuICB9XG5cbiAgdXBkYXRlQnViYmVzKGRhdGEpIHtcbiAgICAvKlxuICAgICAgSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZ3JhcGhcbiAgICAqL1xuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGUoZGF0YSk7XG4gIH1cblxuICBsb2FkSXRlbShpZCwgc2x1ZywgdGFiKSB7XG4gICAgLypcbiAgICAgIExvYWRzIHRoZSBkYXRhIGZvciB0aGUgc2VsZWN0ZWQgbmF2IGl0ZW0sIGludG8gdGhlIGFkamFjZW50IHRleHQgYmxvY2suXG4gICAgKi9cbiAgICBpZiAoaWQgJiYgdGFiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkIC8vIHN0b3JlIHNlbGVjdGVkIGl0ZW0gZnJvbSB1cmxcbiAgICAgIHRoaXMuY3VycmVudFNsdWcgPSBzbHVnIC8vIHN0b3JlIHNlbGVjdGVkIGl0ZW0gZnJvbSB1cmxcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWIgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgcGFyYW1zOiB7IGVudGl0eUlkOiBpZCwgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5idWJibGVzU2l6ZSB9XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucGFnZVRpdGxlID0gJ0VudGl0w6AgVGVzdCdcbiAgICB9XG4gIH1cblxuICBsb2FkQ29udGVudChyZXMpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbcmVzLnR5cGVPZkVudGl0eV07XG4gICAgLy8gY29uc29sZS5sb2coJyhlbnRpdGEpIEFwb2xsbyByZXNwb25kZWQgd2l0aDogJywgeyByZXMgfSlcbiAgICB0aGlzLm15UmVzcG9uc2UgPSByZXNcbiAgICBpZiAoKHJlcy5maWVsZHMgfHwgW10pLmZpbHRlcihmaWVsZCA9PiAoKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSB8fCB7fSkub3ZlcnZpZXcgfHwge30pLmNhbXBpLmluY2x1ZGVzKGZpZWxkLmtleSkpLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIGxvb2sgYXQgdGhlIHJlc3BvbnNlIGFycmF5LCBmaWx0ZXJlZCBieSBjb25maWd1cmF0aW9uIHZhbHVlcy5cbiAgICAgIC8vIGlmIHRoZSBmaWx0ZXJlZCByZXNwb25zZSBoYXMgc29tZSB2YWx1ZXMsIHNob3cgdGhlIGZpZWxkcyBzZWN0aW9uLlxuICAgICAgdGhpcy5zaG93RmllbGRzID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dGaWVsZHMgPSBmYWxzZVxuICAgIH1cbiAgICB0aGlzLm5hdkhlYWRlciA9IHsgLy8gYWx3YXlzIHJlbmRlciBuYXYgaGVhZGVyXG4gICAgICBpY29uOiBjb25maWcgPyBjb25maWcuaWNvbiA6ICcnLFxuICAgICAgdGV4dDogdGhpcy5teVJlc3BvbnNlLmxhYmVsLFxuICAgICAgY29sb3I6IGNvbmZpZ1snY2xhc3MtbmFtZSddXG4gICAgfVxuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlT3B0aW9ucyh7IGJ1YmJsZXNFbmFibGVkOiB0aGlzLmJ1YmJsZXNFbmFibGVkIH0pO1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlT3B0aW9ucyh7IGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImxhYmVsc1wiKSwgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUocmVzLmZpZWxkcyk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT0gJ29nZ2V0dGktY29sbGVnYXRpJykge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICBwYWdpbmF0aW9uUGFyYW1zOiB0aGlzLl9nZXRQYWdpbmF0aW9uUGFyYW1zKCksXG4gICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGNvbnRleHQ6ICdlbnRpdGEnXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogcmVzLnJlbGF0ZWRJdGVtcyB9KTtcbiAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKClcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmEgV2ViID4gRW50aXTDoCA+ICR7dGhpcy5teVJlc3BvbnNlLmxhYmVsfWApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvblBhcmFtcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogW1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgICAgICB0aGlzLmN1cnJlbnRJZCArICcvJyxcbiAgICAgICAgdGhpcy5jdXJyZW50U2x1ZyxcbiAgICAgICAgJy9vZ2dldHRpLWNvbGxlZ2F0aS8nXG4gICAgICBdLmpvaW4oJycpLFxuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0TmF2QmFzZVBhdGgoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXG4gICAgICB0aGlzLmN1cnJlbnRJZCArICcvJyxcbiAgICAgIHRoaXMuY3VycmVudFNsdWdcbiAgICBdLmpvaW4oJycpO1xuICB9XG59XG4iXX0=