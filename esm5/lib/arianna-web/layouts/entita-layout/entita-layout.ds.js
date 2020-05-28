/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { get as _get } from 'lodash';
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
        // DEPRECATED
        /* getNavigation(id) {
            // Requests data from communication provider
            return this.communication.request$('getEntityDetails', {
              onError: (error) => console.error(error),
              params: { entityId: id, entitiesListSize: this.bubblesSize },
            });
          } */
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
                    active: _this.pageSize,
                },
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
            else if (tab === 'overview') {
                _this.one('aw-linked-objects').updateOptions({
                    size: 3,
                    config: _this.configuration,
                    context: 'entita',
                });
                _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
            }
            if (tab === 'overview' || tab === 'entita-collegate') {
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
        this.currentId = '';
        this.currentPage = +this.route.snapshot.queryParams.page;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled').bubblechart : false;
        this.bubblesSize = this.configuration.get('entita-layout') ? this.configuration.get('entita-layout').entitiesQuerySize : this.bubblesSize;
        this.one('aw-bubble-chart').updateOptions({
            selectable: false,
            simple: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit,
            smallChartSize: this.configuration.get('entita-layout').overview.smallChartSize,
        });
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths').entitaBasePath,
        });
        // navigation update
        this.mainState.updateCustom('currentNav', 'entita');
        // update head title
        this.mainState.update('headTitle', 'Arianna4View - Entità');
        // one tab control
        this.oneTabControl();
    };
    /**
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.oneTabControl = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var navDS = this.getWidgetDataSource('aw-entita-nav');
        navDS.out$
            .pipe(filter((/**
         * @param {?} output
         * @return {?}
         */
        function (output) { return !!output; })))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var items = _a.items;
            if (items.length === 1) {
                _this.router.navigate([items[0].anchor.href], { replaceUrl: true });
            }
        }));
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
            if (Array.isArray(data[k]) && data[k].length === 0) {
                data[k] = null;
            }
        }));
        this.one('aw-entita-nav').update({
            data: data,
            selected: selected,
            basePath: this.getNavBasePath(),
        });
        this.updateComponent('aw-entita-metadata-viewer', this.myResponse.fields, {
            typeOfEntity: this.myResponse.typeOfEntity,
            context: this.selectedTab,
            config: this.configuration,
            labels: this.configuration.get('labels'),
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
                params: { entityId: id, entitiesListSize: this.bubblesSize },
            });
        }
        this.pageTitle = 'Entità Test';
        return of(null);
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
        /** @type {?} */
        var config = this.configuration.get('config-keys')[res.typeOfEntity];
        // console.log('(entita) Apollo responded with: ', { res })
        this.myResponse = res;
        /** @type {?} */
        var allowedOverviewMetadata = _get(this.configuration.get('entita-layout'), 'overview.campi', []);
        if ((res.fields || [])
            .filter((/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return allowedOverviewMetadata.includes(field.key); })).length > 0) {
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
            color: config['class-name'],
        };
        this.one('aw-entita-nav').updateOptions({ bubblesEnabled: this.bubblesEnabled, config: this.configuration.get('entita-layout') });
        this.one('aw-entita-metadata-viewer').updateOptions({ context: this.selectedTab, labels: this.configuration.get('labels'), config: this.configuration });
        this.one('aw-entita-metadata-viewer').update(res.fields);
        if (this.selectedTab === 'oggetti-collegati') {
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
                context: 'entita',
            });
        }
        res.relatedItems.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            el.relationName = res.label.length > 30
                ? res.label.substr(0, 30) + "... "
                : res.label;
        }));
        this.one('aw-linked-objects').update({ items: res.relatedItems });
        this.drawPagination();
        // update head title
        this.mainState.update('headTitle', "Arianna4View - Entit\u00E0 - " + this.myResponse.label);
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
                this.currentId + "/",
                this.currentSlug,
                '/oggetti-collegati/',
            ].join(''),
            queryParams: {
                page: this.currentPage,
            },
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
            this.currentId + "/",
            this.currentSlug,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXJDO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQW1TQztRQWxSUSxnQkFBVSxHQUFHLEtBQUssQ0FBQzs7UUFNbkIsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFRaEQsY0FBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7O1FBRzFDLGlCQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsdUNBQXVDO1FBd0R6RCxxQkFBZTs7Ozs7O1FBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDMUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckM7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUE7Ozs7Ozs7OztRQVdELG9CQUFjOzs7UUFBRztZQUNULElBQUEsaUNBQW1ELEVBQWpELGNBQUksRUFBRSw0QkFBMkM7WUFDekQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFD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dUNBQXdCOztJQUV4QiwwQ0FBK0I7Ozs7O0lBRy9CLHlDQUEyQjs7SUFtRDNCLDJDQUtDOztJQVdELDBDQWdCQzs7SUFFRCxnREFrQkM7O0lBRUQsMkNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvbGF5b3V0LWRhdGEtc291cmNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBBd0VudGl0YUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogYW55O1xuXG4gIHByb3RlY3RlZCByb3V0ZXI6IGFueTtcblxuICBwcm90ZWN0ZWQgbG9jYXRpb246IGFueTtcblxuICBwcm90ZWN0ZWQgdGl0bGVTZXJ2aWNlOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHJvdXRlOiBhbnk7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIHNob3dGaWVsZHMgPSBmYWxzZTtcblxuICBwdWJsaWMgbXlSZXNwb25zZTogYW55OyAvLyBiYWNrZW5kIHJlc3BvbnNlIG9iamVjdFxuXG4gIHB1YmxpYyBzZWxlY3RlZFRhYjogc3RyaW5nOyAvLyBzZWxlY3RlZCBuYXYgaXRlbVxuXG4gIHB1YmxpYyBuYXZIZWFkZXI6IGFueSA9IHt9OyAvLyBuYXYtaGVhZGVyIChjdXN0b20pIGRhdGFcblxuICBwdWJsaWMgY3VycmVudElkOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxuXG4gIHB1YmxpYyBjdXJyZW50U2x1Zzogc3RyaW5nOyAvLyBzZWxlY3RlZCBlbnRpdHkgKHVybCBwYXJhbSlcblxuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuXG4gIHB1YmxpYyBwYWdlU2l6ZSA9IDEwOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcblxuICAvLyA9PT09PSBCVUJCTEUgQ0hBUlQgPT09PT1cbiAgcHVibGljIGJ1YmJsZXNTaXplID0gMTA7IC8vIHJlbGF0ZWQgZW50aXRpZXMgKGJ1YmJsZXMpIHBhZ2Ugc2l6ZVxuXG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZDogYm9vbGVhbjtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgb25Jbml0KHtcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIHJvdXRlciwgcm91dGUsIGxvY2F0aW9uLCBvcHRpb25zLCB0aXRsZVNlcnZpY2UsIGNvbW11bmljYXRpb24sXG4gIH0pIHtcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgIHRoaXMuY3VycmVudElkID0gJyc7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zLnBhZ2U7XG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKS5idWJibGVjaGFydCA6IGZhbHNlO1xuICAgIHRoaXMuYnViYmxlc1NpemUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JykuZW50aXRpZXNRdWVyeVNpemUgOiB0aGlzLmJ1YmJsZXNTaXplO1xuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgc2ltcGxlOiB0cnVlLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXQsXG4gICAgICBzbWFsbENoYXJ0U2l6ZTogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLm92ZXJ2aWV3LnNtYWxsQ2hhcnRTaXplLFxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgYmFzZVBhdGg6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXG4gICAgfSk7XG5cbiAgICAvLyBuYXZpZ2F0aW9uIHVwZGF0ZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdlbnRpdGEnKTtcblxuICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gRW50aXTDoCcpO1xuXG4gICAgLy8gb25lIHRhYiBjb250cm9sXG4gICAgdGhpcy5vbmVUYWJDb250cm9sKCk7XG4gIH1cblxuICBvbmVUYWJDb250cm9sKCkge1xuICAgIGNvbnN0IG5hdkRTID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdhdy1lbnRpdGEtbmF2Jyk7XG4gICAgbmF2RFMub3V0JFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigob3V0cHV0KSA9PiAhIW91dHB1dClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHsgaXRlbXMgfSkgPT4ge1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2l0ZW1zWzBdLmFuY2hvci5ocmVmXSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLm9uZShpZCkudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgLy8gREVQUkVDQVRFRFxuICAvKiBnZXROYXZpZ2F0aW9uKGlkKSB7XG4gICAgLy8gUmVxdWVzdHMgZGF0YSBmcm9tIGNvbW11bmljYXRpb24gcHJvdmlkZXJcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyBlbnRpdHlJZDogaWQsIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuYnViYmxlc1NpemUgfSxcbiAgICB9KTtcbiAgfSAqL1xuXG4gIGRyYXdQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgbW9kZTogJ2hyZWYnLFxuICAgICAgaHJlZixcbiAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgIH0pO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHtcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpLFxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBwYWdlTGltaXQ6IDUsXG4gICAgICBzaXplczoge1xuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXG4gICAgICAgIGFjdGl2ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVQYWdlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICAvKlxuICAgICAgVXBkYXRlcyBzZWxlY3RlZCB0YWIgb24gdGFiIGNoYW5nZVxuICAgICovXG4gICAgaWYgKCF0aGlzLm15UmVzcG9uc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpO1xuICAgIHRoaXMuZHJhd1BhZ2luYXRpb24oKTtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSxcbiAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9KTtcbiAgfVxuXG4gIGhhbmRsZU5hdlVwZGF0ZSA9ICh0YWIpID0+IHtcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gdGFiO1xuICAgIHRoaXMudXBkYXRlV2lkZ2V0cyh0aGlzLm15UmVzcG9uc2UpO1xuICAgIGlmICh0YWIgPT09ICdvZ2dldHRpLWNvbGxlZ2F0aScpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgcGFnaW5hdGlvblBhcmFtczogdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpLFxuICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRJdGVtcyB9KTtcbiAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ292ZXJ2aWV3Jykge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBjb250ZXh0OiAnZW50aXRhJyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMgfSk7XG4gICAgfVxuICAgIGlmICh0YWIgPT09ICdvdmVydmlldycgfHwgdGFiID09PSAnZW50aXRhLWNvbGxlZ2F0ZScpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnVwZGF0ZUJ1YmJlcyh0aGlzLm15UmVzcG9uc2UucmVsYXRlZEVudGl0aWVzKTsgfSwgODAwKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVXaWRnZXRzKGRhdGEpIHtcbiAgICAvKlxuICAgICAgVXBkYXRlcyB0aGUgd2lkZ2V0cyBvbiB0aGlzIGxheW91dCwgYmFzZWQgb24gcm91dGVcbiAgICAqL1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFRhYjtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2tdKSAmJiBkYXRhW2tdLmxlbmd0aCA9PT0gMCkgeyBkYXRhW2tdID0gbnVsbDsgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbmF2JykudXBkYXRlKHtcbiAgICAgIGRhdGEsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmdldE5hdkJhc2VQYXRoKCksXG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnQoXG4gICAgICAnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicsXG4gICAgICB0aGlzLm15UmVzcG9uc2UuZmllbGRzLFxuICAgICAge1xuICAgICAgICB0eXBlT2ZFbnRpdHk6IHRoaXMubXlSZXNwb25zZS50eXBlT2ZFbnRpdHksXG4gICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuZHJhd1BhZ2luYXRpb24oKTtcbiAgfVxuXG4gIHVwZGF0ZUJ1YmJlcyhkYXRhKSB7XG4gICAgLypcbiAgICAgIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdyYXBoXG4gICAgKi9cbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgbG9hZEl0ZW0oaWQsIHNsdWcsIHRhYik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLypcbiAgICAgIExvYWRzIHRoZSBkYXRhIGZvciB0aGUgc2VsZWN0ZWQgbmF2IGl0ZW0sIGludG8gdGhlIGFkamFjZW50IHRleHQgYmxvY2suXG4gICAgKi9cbiAgICBpZiAoaWQgJiYgdGFiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkOyAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXG4gICAgICB0aGlzLmN1cnJlbnRTbHVnID0gc2x1ZzsgLy8gc3RvcmUgc2VsZWN0ZWQgaXRlbSBmcm9tIHVybFxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjsgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICBwYXJhbXM6IHsgZW50aXR5SWQ6IGlkLCBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmJ1YmJsZXNTaXplIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnRW50aXTDoCBUZXN0JztcbiAgICByZXR1cm4gb2YobnVsbCk7XG4gIH1cblxuICBsb2FkQ29udGVudChyZXMpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3Jlcy50eXBlT2ZFbnRpdHldO1xuICAgIC8vIGNvbnNvbGUubG9nKCcoZW50aXRhKSBBcG9sbG8gcmVzcG9uZGVkIHdpdGg6ICcsIHsgcmVzIH0pXG4gICAgdGhpcy5teVJlc3BvbnNlID0gcmVzO1xuICAgIGNvbnN0IGFsbG93ZWRPdmVydmlld01ldGFkYXRhID0gX2dldCh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksICdvdmVydmlldy5jYW1waScsIFtdKTtcbiAgICBpZiAoXG4gICAgICAocmVzLmZpZWxkcyB8fCBbXSlcbiAgICAgICAgLmZpbHRlcigoZmllbGQpID0+IGFsbG93ZWRPdmVydmlld01ldGFkYXRhLmluY2x1ZGVzKGZpZWxkLmtleSkpLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIC8vIGxvb2sgYXQgdGhlIHJlc3BvbnNlIGFycmF5LCBmaWx0ZXJlZCBieSBjb25maWd1cmF0aW9uIHZhbHVlcy5cbiAgICAgIC8vIGlmIHRoZSBmaWx0ZXJlZCByZXNwb25zZSBoYXMgc29tZSB2YWx1ZXMsIHNob3cgdGhlIGZpZWxkcyBzZWN0aW9uLlxuICAgICAgdGhpcy5zaG93RmllbGRzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93RmllbGRzID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubmF2SGVhZGVyID0geyAvLyBhbHdheXMgcmVuZGVyIG5hdiBoZWFkZXJcbiAgICAgIGljb246IGNvbmZpZyA/IGNvbmZpZy5pY29uIDogJycsXG4gICAgICB0ZXh0OiB0aGlzLm15UmVzcG9uc2UubGFiZWwsXG4gICAgICBjb2xvcjogY29uZmlnWydjbGFzcy1uYW1lJ10sXG4gICAgfTtcbiAgICB0aGlzLm9uZSgnYXctZW50aXRhLW5hdicpLnVwZGF0ZU9wdGlvbnMoeyBidWJibGVzRW5hYmxlZDogdGhpcy5idWJibGVzRW5hYmxlZCwgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JykgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGVPcHRpb25zKHsgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYiwgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSwgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1tZXRhZGF0YS12aWV3ZXInKS51cGRhdGUocmVzLmZpZWxkcyk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09ICdvZ2dldHRpLWNvbGxlZ2F0aScpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBjb250ZXh0OiB0aGlzLnNlbGVjdGVkVGFiLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgcGFnaW5hdGlvblBhcmFtczogdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpLFxuICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgY29udGV4dDogJ2VudGl0YScsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVzLnJlbGF0ZWRJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwucmVsYXRpb25OYW1lID0gcmVzLmxhYmVsLmxlbmd0aCA+IDMwXG4gICAgICAgID8gYCR7cmVzLmxhYmVsLnN1YnN0cigwLCAzMCl9Li4uIGBcbiAgICAgICAgOiByZXMubGFiZWw7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHJlcy5yZWxhdGVkSXRlbXMgfSk7XG4gICAgdGhpcy5kcmF3UGFnaW5hdGlvbigpO1xuICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBgQXJpYW5uYTRWaWV3IC0gRW50aXTDoCAtICR7dGhpcy5teVJlc3BvbnNlLmxhYmVsfWApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvblBhcmFtcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogW1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgICAgICBgJHt0aGlzLmN1cnJlbnRJZH0vYCxcbiAgICAgICAgdGhpcy5jdXJyZW50U2x1ZyxcbiAgICAgICAgJy9vZ2dldHRpLWNvbGxlZ2F0aS8nLFxuICAgICAgXS5qb2luKCcnKSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0TmF2QmFzZVBhdGgoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXG4gICAgICBgJHt0aGlzLmN1cnJlbnRJZH0vYCxcbiAgICAgIHRoaXMuY3VycmVudFNsdWcsXG4gICAgXS5qb2luKCcnKTtcbiAgfVxufVxuIl19