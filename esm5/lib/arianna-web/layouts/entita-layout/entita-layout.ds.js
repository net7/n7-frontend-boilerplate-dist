/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { get as _get } from 'lodash';
import metadataHelper from '../../helpers/metadata.helper';
var AwEntitaLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwEntitaLayoutDS, _super);
    function AwEntitaLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasMetadataFields = false;
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
            if (!_this.myResponse.relatedItems)
                return;
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
            else if (tab === 'overview' && _this.myResponse.relatedItems) {
                _this.one('aw-linked-objects').updateOptions({
                    size: 3,
                    config: _this.configuration,
                    context: 'entita',
                });
                _this.one('aw-linked-objects').update({ items: _this.myResponse.relatedItems });
            }
            if ((tab === 'overview' || tab === 'entita-collegate') && _this.myResponse.relatedEntities) {
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
        this.updateComponent('aw-entita-metadata-viewer', this.getFields(this.myResponse));
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
        var _this = this;
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
            }).pipe(
            // global metadata tab control
            tap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var fields = _a.fields, typeOfEntity = _a.typeOfEntity;
                _this.hasMetadataFields = !!metadataHelper.normalize({
                    fields: fields,
                    paths: _this.configuration.get('paths'),
                    labels: _this.configuration.get('labels'),
                    metadataToShow: _get(_this.configuration.get('entita-layout'), 'metadata-to-show', []),
                    type: typeOfEntity
                }).length;
            })));
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
        this.navHeader = {
            // always render nav header
            icon: config ? config.icon : '',
            text: this.myResponse.label,
            color: config['class-name'],
        };
        this.one('aw-entita-nav').updateOptions({
            bubblesEnabled: this.bubblesEnabled,
            config: this.configuration.get('entita-layout'),
            hasMetadataFields: this.hasMetadataFields
        });
        this.one('aw-entita-metadata-viewer').update(this.getFields(res));
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
    /**
     * @param {?} response
     * @return {?}
     */
    AwEntitaLayoutDS.prototype.getFields = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var fields = response.fields, typeOfEntity = response.typeOfEntity;
        /** @type {?} */
        var paths = this.configuration.get('paths');
        /** @type {?} */
        var labels = this.configuration.get('labels');
        /** @type {?} */
        var metadataToShow = _get(this.configuration.get('entita-layout'), 'metadata-to-show', []);
        if (this.selectedTab === 'overview') {
            metadataToShow = _get(this.configuration.get('entita-layout'), 'overview.campi', []);
        }
        return metadataHelper.normalize({
            fields: fields,
            paths: paths,
            labels: labels,
            metadataToShow: metadataToShow,
            type: typeOfEntity
        });
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
    AwEntitaLayoutDS.prototype.hasMetadataFields;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2VudGl0YS1sYXlvdXQvZW50aXRhLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNyQyxPQUFPLGNBQWMsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRDtJQUFzQyw0Q0FBZ0I7SUFBdEQ7UUFBQSxxRUFnVEM7UUEvUlEsdUJBQWlCLEdBQUcsS0FBSyxDQUFDOztRQU0xQixlQUFTLEdBQVEsRUFBRSxDQUFDLENBQUMsMkJBQTJCOztRQVFoRCxjQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCOzs7UUFHMUMsaUJBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyx1Q0FBdUM7UUF3RHpELHFCQUFlOzs7Ozs7UUFBRyxVQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBUTtZQUMxQyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQztZQUNELEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQTs7Ozs7Ozs7O1FBV0Qsb0JBQWM7OztRQUFHO1lBQ2YsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTtnQkFBRSxPQUFPO1lB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QyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdEY7UUFFRCxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDOUIsTUFBTSxRQUFBO1lBQ04sS0FBSyxPQUFBO1lBQ0wsTUFBTSxRQUFBO1lBQ04sY0FBYyxnQkFBQTtZQUNkLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFoVEQsQ0FBc0MsZ0JBQWdCLEdBZ1RyRDs7Ozs7OztJQS9TQyx5Q0FBNkI7Ozs7O0lBRTdCLHFDQUF5Qjs7Ozs7SUFFekIsa0NBQXNCOzs7OztJQUV0QixvQ0FBd0I7Ozs7O0lBRXhCLHdDQUE0Qjs7Ozs7SUFFNUIsaUNBQXFCOztJQUVyQixtQ0FBb0I7O0lBRXBCLHFDQUF5Qjs7SUFFekIsNkNBQWlDOztJQUVqQyxzQ0FBdUI7O0lBRXZCLHVDQUEyQjs7SUFFM0IscUNBQTJCOztJQUUzQixxQ0FBeUI7O0lBRXpCLHVDQUEyQjs7SUFFM0IsdUNBQXdCOztJQUV4QixvQ0FBcUI7O0lBR3JCLHVDQUF3Qjs7SUFFeEIsMENBQStCOzs7OztJQUcvQix5Q0FBMkI7O0lBbUQzQiwyQ0FLQzs7SUFXRCwwQ0FpQkM7O0lBRUQsZ0RBa0JDOztJQUVELDJDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbWV0YWRhdGFIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9tZXRhZGF0YS5oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgQXdFbnRpdGFMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IGFueTtcblxuICBwcm90ZWN0ZWQgcm91dGVyOiBhbnk7XG5cbiAgcHJvdGVjdGVkIGxvY2F0aW9uOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHRpdGxlU2VydmljZTogYW55O1xuXG4gIHByb3RlY3RlZCByb3V0ZTogYW55O1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBoYXNNZXRhZGF0YUZpZWxkcyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBteVJlc3BvbnNlOiBhbnk7IC8vIGJhY2tlbmQgcmVzcG9uc2Ugb2JqZWN0XG5cbiAgcHVibGljIHNlbGVjdGVkVGFiOiBzdHJpbmc7IC8vIHNlbGVjdGVkIG5hdiBpdGVtXG5cbiAgcHVibGljIG5hdkhlYWRlcjogYW55ID0ge307IC8vIG5hdi1oZWFkZXIgKGN1c3RvbSkgZGF0YVxuXG4gIHB1YmxpYyBjdXJyZW50SWQ6IHN0cmluZzsgLy8gc2VsZWN0ZWQgZW50aXR5ICh1cmwgcGFyYW0pXG5cbiAgcHVibGljIGN1cnJlbnRTbHVnOiBzdHJpbmc7IC8vIHNlbGVjdGVkIGVudGl0eSAodXJsIHBhcmFtKVxuXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55OyAvLyBwYWdpbmF0aW9uIHZhbHVlICh1cmwgcGFyYW0pXG5cbiAgcHVibGljIHBhZ2VTaXplID0gMTA7IC8vIGxpbmtlZCBvYmplY3RzIHBhZ2Ugc2l6ZVxuXG4gIC8vID09PT09IEJVQkJMRSBDSEFSVCA9PT09PVxuICBwdWJsaWMgYnViYmxlc1NpemUgPSAxMDsgLy8gcmVsYXRlZCBlbnRpdGllcyAoYnViYmxlcykgcGFnZSBzaXplXG5cbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkOiBib29sZWFuO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBvbkluaXQoe1xuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgcm91dGVyLCByb3V0ZSwgbG9jYXRpb24sIG9wdGlvbnMsIHRpdGxlU2VydmljZSwgY29tbXVuaWNhdGlvbixcbiAgfSkge1xuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy50aXRsZVNlcnZpY2UgPSB0aXRsZVNlcnZpY2U7XG4gICAgdGhpcy5jdXJyZW50SWQgPSAnJztcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gK3RoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXMucGFnZTtcbiAgICB0aGlzLmJ1YmJsZXNFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpLmJ1YmJsZWNoYXJ0IDogZmFsc2U7XG4gICAgdGhpcy5idWJibGVzU2l6ZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKS5lbnRpdGllc1F1ZXJ5U2l6ZSA6IHRoaXMuYnViYmxlc1NpemU7XG4gICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICBzaW1wbGU6IHRydWUsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdCxcbiAgICAgIHNtYWxsQ2hhcnRTaXplOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0Jykub3ZlcnZpZXcuc21hbGxDaGFydFNpemUsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWNoYXJ0LXRpcHB5JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBiYXNlUGF0aDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcbiAgICB9KTtcblxuICAgIC8vIG5hdmlnYXRpb24gdXBkYXRlXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ2VudGl0YScpO1xuXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBFbnRpdMOgJyk7XG5cbiAgICAvLyBvbmUgdGFiIGNvbnRyb2xcbiAgICB0aGlzLm9uZVRhYkNvbnRyb2woKTtcbiAgfVxuXG4gIG9uZVRhYkNvbnRyb2woKSB7XG4gICAgY29uc3QgbmF2RFMgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoJ2F3LWVudGl0YS1uYXYnKTtcbiAgICBuYXZEUy5vdXQkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChvdXRwdXQpID0+ICEhb3V0cHV0KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyBpdGVtcyB9KSA9PiB7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbaXRlbXNbMF0uYW5jaG9yLmhyZWZdLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSk7XG4gIH1cblxuICAvLyBERVBSRUNBVEVEXG4gIC8qIGdldE5hdmlnYXRpb24oaWQpIHtcbiAgICAvLyBSZXF1ZXN0cyBkYXRhIGZyb20gY29tbXVuaWNhdGlvbiBwcm92aWRlclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IGVudGl0eUlkOiBpZCwgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5idWJibGVzU2l6ZSB9LFxuICAgIH0pO1xuICB9ICovXG5cbiAgZHJhd1BhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zKSByZXR1cm47XG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBtb2RlOiAnaHJlZicsXG4gICAgICBocmVmLFxuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSksXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2VMaW1pdDogNSxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIGxpc3Q6IFsxMCwgMjUsIDUwXSxcbiAgICAgICAgYWN0aXZlOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVBhZ2VOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIC8qXG4gICAgICBVcGRhdGVzIHNlbGVjdGVkIHRhYiBvbiB0YWIgY2hhbmdlXG4gICAgKi9cbiAgICBpZiAoIXRoaXMubXlSZXNwb25zZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uUGFyYW1zKCk7XG4gICAgdGhpcy5kcmF3UGFnaW5hdGlvbigpO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgcGFnaW5hdGlvblBhcmFtczogeyBocmVmLCBxdWVyeVBhcmFtcyB9LFxuICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0pO1xuICB9XG5cbiAgaGFuZGxlTmF2VXBkYXRlID0gKHRhYikgPT4ge1xuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgdGhpcy51cGRhdGVXaWRnZXRzKHRoaXMubXlSZXNwb25zZSk7XG4gICAgaWYgKHRhYiA9PT0gJ29nZ2V0dGktY29sbGVnYXRpJykge1xuICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgIGNvbnRleHQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICBwYWdpbmF0aW9uUGFyYW1zOiB0aGlzLl9nZXRQYWdpbmF0aW9uUGFyYW1zKCksXG4gICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0pO1xuICAgIH0gZWxzZSBpZiAodGFiID09PSAnb3ZlcnZpZXcnICYmIHRoaXMubXlSZXNwb25zZS5yZWxhdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgY29udGV4dDogJ2VudGl0YScsXG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLm15UmVzcG9uc2UucmVsYXRlZEl0ZW1zIH0pO1xuICAgIH1cbiAgICBpZiAoKHRhYiA9PT0gJ292ZXJ2aWV3JyB8fCB0YWIgPT09ICdlbnRpdGEtY29sbGVnYXRlJykgJiYgdGhpcy5teVJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMudXBkYXRlQnViYmVzKHRoaXMubXlSZXNwb25zZS5yZWxhdGVkRW50aXRpZXMpOyB9LCA4MDApO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVdpZGdldHMoZGF0YSkge1xuICAgIC8qXG4gICAgICBVcGRhdGVzIHRoZSB3aWRnZXRzIG9uIHRoaXMgbGF5b3V0LCBiYXNlZCBvbiByb3V0ZVxuICAgICovXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkVGFiO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFba10pICYmIGRhdGFba10ubGVuZ3RoID09PSAwKSB7IGRhdGFba10gPSBudWxsOyB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGUoe1xuICAgICAgZGF0YSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgYmFzZVBhdGg6IHRoaXMuZ2V0TmF2QmFzZVBhdGgoKSxcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudCgnYXctZW50aXRhLW1ldGFkYXRhLXZpZXdlcicsIHRoaXMuZ2V0RmllbGRzKHRoaXMubXlSZXNwb25zZSkpO1xuICAgIHRoaXMuZHJhd1BhZ2luYXRpb24oKTtcbiAgfVxuXG4gIHVwZGF0ZUJ1YmJlcyhkYXRhKSB7XG4gICAgLypcbiAgICAgIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGdyYXBoXG4gICAgKi9cbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgbG9hZEl0ZW0oaWQsIHNsdWcsIHRhYik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLypcbiAgICAgIExvYWRzIHRoZSBkYXRhIGZvciB0aGUgc2VsZWN0ZWQgbmF2IGl0ZW0sIGludG8gdGhlIGFkamFjZW50IHRleHQgYmxvY2suXG4gICAgKi9cbiAgICBpZiAoaWQgJiYgdGFiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IGlkOyAvLyBzdG9yZSBzZWxlY3RlZCBpdGVtIGZyb20gdXJsXG4gICAgICB0aGlzLmN1cnJlbnRTbHVnID0gc2x1ZzsgLy8gc3RvcmUgc2VsZWN0ZWQgaXRlbSBmcm9tIHVybFxuICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHRhYjsgLy8gc3RvcmUgc2VsZWN0ZWQgdGFiIGZyb20gdXJsXG4gICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRFbnRpdHlEZXRhaWxzJywge1xuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICBwYXJhbXM6IHsgZW50aXR5SWQ6IGlkLCBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmJ1YmJsZXNTaXplIH0sXG4gICAgICB9KS5waXBlKFxuICAgICAgICAvLyBnbG9iYWwgbWV0YWRhdGEgdGFiIGNvbnRyb2xcbiAgICAgICAgdGFwKCh7IGZpZWxkcywgdHlwZU9mRW50aXR5IH0pID0+IHtcbiAgICAgICAgICB0aGlzLmhhc01ldGFkYXRhRmllbGRzID0gISFtZXRhZGF0YUhlbHBlci5ub3JtYWxpemUoe1xuICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgcGF0aHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyksXG4gICAgICAgICAgICBsYWJlbHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpLFxuICAgICAgICAgICAgbWV0YWRhdGFUb1Nob3c6IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIFtdKSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGVPZkVudGl0eVxuICAgICAgICAgIH0pLmxlbmd0aDtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucGFnZVRpdGxlID0gJ0VudGl0w6AgVGVzdCc7XG4gICAgcmV0dXJuIG9mKG51bGwpO1xuICB9XG5cbiAgbG9hZENvbnRlbnQocmVzKSB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVtyZXMudHlwZU9mRW50aXR5XTtcbiAgICAvLyBjb25zb2xlLmxvZygnKGVudGl0YSkgQXBvbGxvIHJlc3BvbmRlZCB3aXRoOiAnLCB7IHJlcyB9KVxuICAgIHRoaXMubXlSZXNwb25zZSA9IHJlcztcbiAgICB0aGlzLm5hdkhlYWRlciA9IHsgLy8gYWx3YXlzIHJlbmRlciBuYXYgaGVhZGVyXG4gICAgICBpY29uOiBjb25maWcgPyBjb25maWcuaWNvbiA6ICcnLFxuICAgICAgdGV4dDogdGhpcy5teVJlc3BvbnNlLmxhYmVsLFxuICAgICAgY29sb3I6IGNvbmZpZ1snY2xhc3MtbmFtZSddLFxuICAgIH07XG4gICAgdGhpcy5vbmUoJ2F3LWVudGl0YS1uYXYnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGJ1YmJsZXNFbmFibGVkOiB0aGlzLmJ1YmJsZXNFbmFibGVkLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdlbnRpdGEtbGF5b3V0JyksXG4gICAgICBoYXNNZXRhZGF0YUZpZWxkczogdGhpcy5oYXNNZXRhZGF0YUZpZWxkc1xuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1lbnRpdGEtbWV0YWRhdGEtdmlld2VyJykudXBkYXRlKHRoaXMuZ2V0RmllbGRzKHJlcykpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSAnb2dnZXR0aS1jb2xsZWdhdGknKSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgY29udGV4dDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKSxcbiAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGNvbnRleHQ6ICdlbnRpdGEnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJlcy5yZWxhdGVkSXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLnJlbGF0aW9uTmFtZSA9IHJlcy5sYWJlbC5sZW5ndGggPiAzMFxuICAgICAgICA/IGAke3Jlcy5sYWJlbC5zdWJzdHIoMCwgMzApfS4uLiBgXG4gICAgICAgIDogcmVzLmxhYmVsO1xuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiByZXMucmVsYXRlZEl0ZW1zIH0pO1xuICAgIHRoaXMuZHJhd1BhZ2luYXRpb24oKTtcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgYEFyaWFubmE0VmlldyAtIEVudGl0w6AgLSAke3RoaXMubXlSZXNwb25zZS5sYWJlbH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25QYXJhbXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IFtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcbiAgICAgICAgYCR7dGhpcy5jdXJyZW50SWR9L2AsXG4gICAgICAgIHRoaXMuY3VycmVudFNsdWcsXG4gICAgICAgICcvb2dnZXR0aS1jb2xsZWdhdGkvJyxcbiAgICAgIF0uam9pbignJyksXG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldE5hdkJhc2VQYXRoKCkge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgICAgYCR7dGhpcy5jdXJyZW50SWR9L2AsXG4gICAgICB0aGlzLmN1cnJlbnRTbHVnLFxuICAgIF0uam9pbignJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RmllbGRzKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBmaWVsZHMsIHR5cGVPZkVudGl0eSB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xuICAgIGxldCBtZXRhZGF0YVRvU2hvdyA9IF9nZXQodGhpcy5jb25maWd1cmF0aW9uLmdldCgnZW50aXRhLWxheW91dCcpLCAnbWV0YWRhdGEtdG8tc2hvdycsIFtdKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gJ292ZXJ2aWV3Jykge1xuICAgICAgbWV0YWRhdGFUb1Nob3cgPSBfZ2V0KHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2VudGl0YS1sYXlvdXQnKSwgJ292ZXJ2aWV3LmNhbXBpJywgW10pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhZGF0YUhlbHBlci5ub3JtYWxpemUoe1xuICAgICAgZmllbGRzLFxuICAgICAgcGF0aHMsXG4gICAgICBsYWJlbHMsXG4gICAgICBtZXRhZGF0YVRvU2hvdyxcbiAgICAgIHR5cGU6IHR5cGVPZkVudGl0eVxuICAgIH0pO1xuICB9XG59XG4iXX0=