/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { cloneDeep } from 'lodash';
import { LayoutDataSource } from '@n7-frontend/core';
import { SearchService } from '../../../common/services';
import facetsConfig from './search-facets.config';
import { tap, takeUntil } from 'rxjs/operators';
import { of, fromEvent, Subject } from 'rxjs';
import helpers from '../../../common/helpers';
/** @type {?} */
var SEARCH_MODEL_ID = 'aw-search-layout';
var AwSearchLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSearchLayoutDS, _super);
    function AwSearchLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.resetButtonEnabled = true;
        _this.currentPage = 1; // pagination value (url param)
        // pagination value (url param)
        _this.pageSize = 10; // linked objects page size
        // linked objects page size
        _this.sidebarIsSticky = false;
        _this.isFirstLoading = true;
        _this.resultsLoading = false;
        _this.orderBy = 'label_sort';
        _this.orderDirection = 'ASC';
        _this.orderByLabel = 'Ordina per';
        _this.orderByOptions = [
            {
                value: 'label_sort_ASC',
                label: 'Ordine alfabetico (A→Z)',
                type: 'text',
                selected: true
            },
            {
                value: 'label_sort_DESC',
                label: 'Ordine alfabetico (Z→A)',
                type: 'text',
                selected: false
            },
            {
                value: '_score_DESC',
                label: 'Ordine per pertinenza',
                type: 'score',
                selected: false
            }
        ];
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
                totalPages: Math.ceil(_this.totalCount / _this.pageSize),
                currentPage: _this.currentPage,
                pageLimit: 5,
                sizes: {
                    list: [10, 25, 50],
                    active: _this.pageSize
                }
            });
        });
        _this.getSearchModelId = (/**
         * @return {?}
         */
        function () { return SEARCH_MODEL_ID; });
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, communication = _a.communication, search = _a.search;
        this.configuration = configuration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.options = options;
        this.prettifyLabels = this.configuration.get('labels');
        this.configKeys = this.configuration.get('config-keys');
        this.fallback = this.configuration.get('search-layout').fallback;
        this.pageTitle = this.configuration.get('search-layout').title;
        // remove first
        // stateless search
        if (this.search.model(SEARCH_MODEL_ID)) {
            this.search.remove(SEARCH_MODEL_ID);
        }
        this.search.add(SEARCH_MODEL_ID, cloneDeep(facetsConfig));
        this.searchModel = this.search.model(SEARCH_MODEL_ID);
        // query params control
        if (SearchService.queryParams) {
            this.searchModel.updateFiltersFromQueryParams(SearchService.queryParams);
            SearchService.queryParams = null;
        }
        // sidebar sticky control
        this._sidebarStickyControl();
        this.mainState.updateCustom('currentNav', 'ricerca');
        this.mainState.update('headTitle', 'Arianna Web > Ricerca');
    };
    /**
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
        SearchService.queryParams = null;
    };
    /**
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onSearchResponse = /**
     * @return {?}
     */
    function () {
        this.resetButtonEnabled = true;
        if (this.isFirstLoading) {
            this.isFirstLoading = false;
            this.one('facets-wrapper').update({ searchModel: this.searchModel });
            this.searchModel.updateInputsFromFilters();
        }
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onOrderByChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var orderBy = payload.substring(0, payload.lastIndexOf("_"));
        /** @type {?} */
        var direction = payload.substring(payload.lastIndexOf("_") + 1);
        /** @type {?} */
        var type = "";
        // set selected
        this.orderByOptions.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option.value === payload) {
                option.selected = true;
                type = option.type;
            }
            else {
                option.selected = false;
            }
        }));
        this.orderBy = orderBy;
        this.orderDirection = direction;
        this.searchModel.setSearchConfigOrderBy(orderBy);
        this.searchModel.setSearchConfigDirection(direction);
        this.searchModel.setSearchConfigType(type);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onPageSizeChange = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        console.log('on page size change');
        this.pageSize = size;
        return this._updateSearchPage(this.currentPage);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onPaginationChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var page = payload.replace('page-', '');
        return this._updateSearchPage(page);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onPaginationGoToChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var page = payload.replace('goto-', '');
        return this._updateSearchPage(page);
    };
    /**
     * @return {?}
     */
    AwSearchLayoutDS.prototype.resetPagination = /**
     * @return {?}
     */
    function () {
        this._updateSearchPage(1);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onResultsLimitChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.setLimit(payload);
        // reset page & offset
        this.currentPage = 1;
        this.searchModel.setPageConfigOffset(0);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwSearchLayoutDS.prototype.setLimit = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.pageSize = payload;
        this.searchModel.setPageConfigLimit(payload);
        this.searchModel.setPageConfigOffset((this.currentPage - 1) * this.pageSize);
    };
    /**
     * @return {?}
     */
    AwSearchLayoutDS.prototype.doSearchRequest$ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var requestParams = this.searchModel.getRequestParams();
        /** @type {?} */
        var requestPayload = {
            searchParameters: tslib_1.__assign({ totalCount: 100 }, requestParams)
        };
        return this.communication.request$('search', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: requestPayload
        }).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var totalCount = _a.totalCount, results = _a.results, facets = _a.facets;
            _this.totalCount = totalCount;
            /** @type {?} */
            var resultsTitleIndex = 0;
            // results title
            if (_this.totalCount > 1) {
                resultsTitleIndex = 2;
            }
            else if (_this.totalCount === 1) {
                resultsTitleIndex = 1;
            }
            _this.resultsTitle = _this.configuration.get('search-layout').results[resultsTitleIndex];
            // facets labels
            _this._addFacetsLabels(facets);
            // facets options
            _this._addFacetsOptions(facets);
            _this.searchModel.updateFacets(facets);
            _this.searchModel.updateTotalCount(totalCount);
            _this.one('aw-linked-objects').updateOptions({
                context: 'search',
                config: _this.configuration,
                page: _this.currentPage,
                pagination: true,
                paginationParams: _this._getPaginationParams(),
                dynamicPagination: {
                    total: totalCount
                },
                size: _this.pageSize
            });
            _this.drawPagination();
            _this.one('aw-linked-objects').update({ items: _this._normalizeItems(results.items) });
        })));
    };
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    AwSearchLayoutDS.prototype._updateSearchPage = /**
     * @private
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (+page === this.currentPage) {
            return of(false);
        }
        this.currentPage = +page;
        /** @type {?} */
        var searchConfig = this.searchModel.getConfig();
        /** @type {?} */
        var pageConfig = searchConfig.page;
        var limit = pageConfig.limit;
        /** @type {?} */
        var newOffset = (this.currentPage - 1) * limit;
        this.searchModel.setPageConfigOffset(newOffset);
        return of(true);
    };
    /**
     * @private
     * @param {?} facets
     * @return {?}
     */
    AwSearchLayoutDS.prototype._addFacetsLabels = /**
     * @private
     * @param {?} facets
     * @return {?}
     */
    function (facets) {
        var _this = this;
        facets
            .filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return Array.isArray(f.data); }))
            .forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            f.data.forEach((/**
             * @param {?} dataItem
             * @return {?}
             */
            function (dataItem) {
                /** @type {?} */
                var key = dataItem.label;
                dataItem.label = helpers.prettifySnakeCase(key, _this.prettifyLabels[key]);
            }));
        }));
    };
    /**
     * @private
     * @param {?} facets
     * @return {?}
     */
    AwSearchLayoutDS.prototype._addFacetsOptions = /**
     * @private
     * @param {?} facets
     * @return {?}
     */
    function (facets) {
        var _this = this;
        facets
            .filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.id === 'query-links'; }))
            .forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            f.data.forEach((/**
             * @param {?} dataItem
             * @return {?}
             */
            function (dataItem) {
                /** @type {?} */
                var config = _this.configKeys[dataItem.value];
                if (config) {
                    dataItem.options = {
                        icon: config.icon,
                        classes: "color-" + config['class-name']
                    };
                }
            }));
        }));
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    AwSearchLayoutDS.prototype._normalizeItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        return items.map((/**
         * @param {?} singleItem
         * @return {?}
         */
        function (singleItem) { return ({ item: tslib_1.__assign({}, singleItem) }); }));
    };
    /**
     * @private
     * @return {?}
     */
    AwSearchLayoutDS.prototype._sidebarStickyControl = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // no sticky for Internet Explorer
        if (helpers.browserIsIE()) {
            return;
        }
        /** @type {?} */
        var source$ = fromEvent(window, 'scroll');
        source$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var windowOffsetTop = window.pageYOffset;
            /** @type {?} */
            var wrapperOffsetTop = document.getElementsByClassName('sticky-parent')[0]['offsetTop'];
            _this.sidebarIsSticky = wrapperOffsetTop <= windowOffsetTop;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwSearchLayoutDS.prototype._getPaginationParams = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requestParams = this.searchModel.getRequestParams();
        /** @type {?} */
        var queryParams = this.searchModel.filtersAsQueryParams(requestParams.filters);
        Object.keys(queryParams).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return queryParams[key] = queryParams[key] || null; }));
        // aditional params
        queryParams.orderby = this.orderBy;
        queryParams.orderdirection = this.orderDirection;
        queryParams.page = this.currentPage;
        queryParams.limit = this.pageSize;
        return {
            queryParams: queryParams,
            href: this.configuration.get('paths').searchBasePath
        };
    };
    return AwSearchLayoutDS;
}(LayoutDataSource));
export { AwSearchLayoutDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.search;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.searchModel;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.prettifyLabels;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.configKeys;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.fallback;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.resetButtonEnabled;
    /** @type {?} */
    AwSearchLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwSearchLayoutDS.prototype.resultsTitle;
    /** @type {?} */
    AwSearchLayoutDS.prototype.totalCount;
    /** @type {?} */
    AwSearchLayoutDS.prototype.currentPage;
    /** @type {?} */
    AwSearchLayoutDS.prototype.pageSize;
    /** @type {?} */
    AwSearchLayoutDS.prototype.sidebarIsSticky;
    /** @type {?} */
    AwSearchLayoutDS.prototype.isFirstLoading;
    /** @type {?} */
    AwSearchLayoutDS.prototype.resultsLoading;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderBy;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderDirection;
    /** @type {?} */
    AwSearchLayoutDS.prototype.options;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByLabel;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByOptions;
    /** @type {?} */
    AwSearchLayoutDS.prototype.drawPagination;
    /** @type {?} */
    AwSearchLayoutDS.prototype.getSearchModelId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUNMLGFBQWEsRUFFZCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDOztJQUV4QyxlQUFlLEdBQUcsa0JBQWtCO0FBRTFDO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQStTQztRQTlTUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBU3pDLHdCQUFrQixHQUFHLElBQUksQ0FBQztRQUszQixpQkFBVyxHQUFRLENBQUMsQ0FBQyxDQUFDLCtCQUErQjs7UUFDckQsY0FBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFDMUMscUJBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsYUFBTyxHQUFHLFlBQVksQ0FBQztRQUN2QixvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUl2QixrQkFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QixvQkFBYyxHQUFRO1lBQzNCO2dCQUNFLEtBQUssRUFB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aUQ7Ozs7O0lBQ2pELHlDQUEyQjs7Ozs7SUFDM0IseUNBQTJCOzs7OztJQUMzQixxQ0FBdUI7Ozs7O0lBQ3ZCLGtDQUE4Qjs7Ozs7SUFDOUIsdUNBQWlDOzs7OztJQUNqQywwQ0FBNEI7Ozs7O0lBQzVCLHNDQUF3Qjs7Ozs7SUFDeEIsb0NBQXlCOzs7OztJQUN6Qiw4Q0FBa0M7O0lBRWxDLHFDQUF5Qjs7SUFDekIsd0NBQTRCOztJQUM1QixzQ0FBMEI7O0lBQzFCLHVDQUE0Qjs7SUFDNUIsb0NBQXFCOztJQUNyQiwyQ0FBK0I7O0lBQy9CLDBDQUE2Qjs7SUFDN0IsMENBQThCOztJQUM5QixtQ0FBOEI7O0lBQzlCLDBDQUE4Qjs7SUFFOUIsbUNBQW9COztJQUVwQix3Q0FBbUM7O0lBQ25DLDBDQW1CRTs7SUF3RkYsMENBZ0JDOztJQW9CRCw0Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7XG4gIFNlYXJjaFNlcnZpY2UsXG4gIFNlYXJjaE1vZGVsXG59IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcyc7XG5pbXBvcnQgZmFjZXRzQ29uZmlnIGZyb20gJy4vc2VhcmNoLWZhY2V0cy5jb25maWcnO1xuaW1wb3J0IHsgdGFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmNvbnN0IFNFQVJDSF9NT0RFTF9JRCA9ICdhdy1zZWFyY2gtbGF5b3V0JztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG4gIHByaXZhdGUgc2VhcmNoOiBTZWFyY2hTZXJ2aWNlO1xuICBwcml2YXRlIHNlYXJjaE1vZGVsOiBTZWFyY2hNb2RlbDtcbiAgcHJpdmF0ZSBwcmV0dGlmeUxhYmVsczogYW55O1xuICBwcml2YXRlIGNvbmZpZ0tleXM6IGFueTtcbiAgcHJpdmF0ZSBmYWxsYmFjazogc3RyaW5nO1xuICBwcml2YXRlIHJlc2V0QnV0dG9uRW5hYmxlZCA9IHRydWU7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgcmVzdWx0c1RpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyB0b3RhbENvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55ID0gMTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuICBwdWJsaWMgcGFnZVNpemUgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG4gIHB1YmxpYyBzaWRlYmFySXNTdGlja3kgPSBmYWxzZTtcbiAgcHVibGljIGlzRmlyc3RMb2FkaW5nID0gdHJ1ZTtcbiAgcHVibGljIHJlc3VsdHNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBvcmRlckJ5ID0gJ2xhYmVsX3NvcnQnO1xuICBwdWJsaWMgb3JkZXJEaXJlY3Rpb24gPSAnQVNDJztcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHB1YmxpYyBvcmRlckJ5TGFiZWwgPSAnT3JkaW5hIHBlcic7XG4gIHB1YmxpYyBvcmRlckJ5T3B0aW9uczogYW55ID0gW1xuICAgIHtcbiAgICAgIHZhbHVlOiAnbGFiZWxfc29ydF9BU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoQeKGklopJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2xhYmVsX3NvcnRfREVTQycsXG4gICAgICBsYWJlbDogJ09yZGluZSBhbGZhYmV0aWNvICha4oaSQSknLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ19zY29yZV9ERVNDJyxcbiAgICAgIGxhYmVsOiAnT3JkaW5lIHBlciBwZXJ0aW5lbnphJyxcbiAgICAgIHR5cGU6ICdzY29yZScsXG4gICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICB9XG4gIF07XG5cbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCBjb21tdW5pY2F0aW9uLCBzZWFyY2ggfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucHJldHRpZnlMYWJlbHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKTtcbiAgICB0aGlzLmNvbmZpZ0tleXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpO1xuICAgIHRoaXMuZmFsbGJhY2sgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykuZmFsbGJhY2s7XG5cbiAgICB0aGlzLnBhZ2VUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NlYXJjaC1sYXlvdXQnKS50aXRsZTtcblxuICAgIC8vIHJlbW92ZSBmaXJzdFxuICAgIC8vIHN0YXRlbGVzcyBzZWFyY2hcbiAgICBpZiAodGhpcy5zZWFyY2gubW9kZWwoU0VBUkNIX01PREVMX0lEKSkge1xuICAgICAgdGhpcy5zZWFyY2gucmVtb3ZlKFNFQVJDSF9NT0RFTF9JRCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWFyY2guYWRkKFNFQVJDSF9NT0RFTF9JRCwgY2xvbmVEZWVwKGZhY2V0c0NvbmZpZykpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwgPSB0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfTU9ERUxfSUQpO1xuXG4gICAgLy8gcXVlcnkgcGFyYW1zIGNvbnRyb2xcbiAgICBpZiAoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcykge1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpO1xuICAgICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gc2lkZWJhciBzdGlja3kgY29udHJvbFxuICAgIHRoaXMuX3NpZGViYXJTdGlja3lDb250cm9sKCk7XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAncmljZXJjYScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gUmljZXJjYScpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XG4gIH1cblxuICBvblNlYXJjaFJlc3BvbnNlKCkge1xuICAgIHRoaXMucmVzZXRCdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0ZpcnN0TG9hZGluZykge1xuICAgICAgdGhpcy5pc0ZpcnN0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5vbmUoJ2ZhY2V0cy13cmFwcGVyJykudXBkYXRlKHsgc2VhcmNoTW9kZWw6IHRoaXMuc2VhcmNoTW9kZWwgfSk7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgb25PcmRlckJ5Q2hhbmdlKHBheWxvYWQpIHtcbiAgICBjb25zdCBvcmRlckJ5ID0gcGF5bG9hZC5zdWJzdHJpbmcoIDAsIHBheWxvYWQubGFzdEluZGV4T2YoXCJfXCIpICksXG4gICAgZGlyZWN0aW9uID0gcGF5bG9hZC5zdWJzdHJpbmcoIHBheWxvYWQubGFzdEluZGV4T2YoXCJfXCIpICsgMSApO1xuICAgIGxldCB0eXBlID0gXCJcIjtcbiAgICAvLyBzZXQgc2VsZWN0ZWRcbiAgICB0aGlzLm9yZGVyQnlPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHBheWxvYWQpIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdHlwZSA9IG9wdGlvbi50eXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMub3JkZXJCeSA9IG9yZGVyQnk7XG4gICAgdGhpcy5vcmRlckRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnT3JkZXJCeShvcmRlckJ5KTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnVHlwZSh0eXBlKTtcbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2Uoc2l6ZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnNvbGUubG9nKCdvbiBwYWdlIHNpemUgY2hhbmdlJylcbiAgICB0aGlzLnBhZ2VTaXplID0gc2l6ZVxuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHRoaXMuY3VycmVudFBhZ2UpXG4gIH1cblxuICBvblBhZ2luYXRpb25DaGFuZ2UocGF5bG9hZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHBhZ2UgPSBwYXlsb2FkLnJlcGxhY2UoJ3BhZ2UtJywgJycpO1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uR29Ub0NoYW5nZShwYXlsb2FkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSk7XG4gIH1cblxuICBkcmF3UGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uUGFyYW1zKCk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIG1vZGU6ICdocmVmJyxcbiAgICAgIGhyZWYsXG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICB9KVxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHtcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0aGlzLnRvdGFsQ291bnQgLyB0aGlzLnBhZ2VTaXplKSxcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnZUxpbWl0OiA1LFxuICAgICAgc2l6ZXM6IHtcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxuICAgICAgICBhY3RpdmU6IHRoaXMucGFnZVNpemVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVzZXRQYWdpbmF0aW9uKCkge1xuICAgIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UoMSk7XG4gIH1cblxuICBvblJlc3VsdHNMaW1pdENoYW5nZShwYXlsb2FkKSB7XG4gICAgdGhpcy5zZXRMaW1pdChwYXlsb2FkKTtcblxuICAgIC8vIHJlc2V0IHBhZ2UgJiBvZmZzZXRcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQoMCk7XG4gIH1cblxuICBzZXRMaW1pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHBheWxvYWQ7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnTGltaXQocGF5bG9hZCk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KCh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWFyY2hNb2RlbElkID0gKCkgPT4gU0VBUkNIX01PREVMX0lEO1xuXG4gIHB1YmxpYyBkb1NlYXJjaFJlcXVlc3QkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgIGNvbnN0IHJlcXVlc3RQYXlsb2FkID0ge1xuICAgICAgc2VhcmNoUGFyYW1ldGVyczoge1xuICAgICAgICAvLyBGSVhNRTogdG9nbGllcmUgdG90YWxDb3VudFxuICAgICAgICB0b3RhbENvdW50OiAxMDAsXG4gICAgICAgIC4uLnJlcXVlc3RQYXJhbXNcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3NlYXJjaCcsIHtcbiAgICAgIG9uRXJyb3I6IGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiByZXF1ZXN0UGF5bG9hZFxuICAgIH0pLnBpcGUoXG4gICAgICB0YXAoKHsgdG90YWxDb3VudCwgcmVzdWx0cywgZmFjZXRzIH0pID0+IHtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgICAgICAgbGV0IHJlc3VsdHNUaXRsZUluZGV4ID0gMDtcbiAgICAgICAgLy8gcmVzdWx0cyB0aXRsZVxuICAgICAgICBpZiAodGhpcy50b3RhbENvdW50ID4gMSkge1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvdGFsQ291bnQgPT09IDEpIHtcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykucmVzdWx0c1tcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIGZhY2V0cyBsYWJlbHNcbiAgICAgICAgdGhpcy5fYWRkRmFjZXRzTGFiZWxzKGZhY2V0cyk7XG4gICAgICAgIC8vIGZhY2V0cyBvcHRpb25zXG4gICAgICAgIHRoaXMuX2FkZEZhY2V0c09wdGlvbnMoZmFjZXRzKTtcblxuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZhY2V0cyhmYWNldHMpO1xuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZVRvdGFsQ291bnQodG90YWxDb3VudCk7XG5cbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgY29udGV4dDogJ3NlYXJjaCcsXG4gICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKSxcbiAgICAgICAgICBkeW5hbWljUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgdG90YWw6IHRvdGFsQ291bnRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemU6IHRoaXMucGFnZVNpemVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZHJhd1BhZ2luYXRpb24oKVxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5fbm9ybWFsaXplSXRlbXMocmVzdWx0cy5pdGVtcykgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpIHtcbiAgICBpZiAoK3BhZ2UgPT09IHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICtwYWdlO1xuXG4gICAgY29uc3Qgc2VhcmNoQ29uZmlnID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRDb25maWcoKSxcbiAgICAgIHBhZ2VDb25maWcgPSBzZWFyY2hDb25maWcucGFnZSxcbiAgICAgIHsgbGltaXQgfSA9IHBhZ2VDb25maWcsXG4gICAgICBuZXdPZmZzZXQgPSAodGhpcy5jdXJyZW50UGFnZSAtIDEpICogbGltaXQ7XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQobmV3T2Zmc2V0KTtcblxuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEZhY2V0c0xhYmVscyhmYWNldHMpIHtcbiAgICBmYWNldHNcbiAgICAgIC5maWx0ZXIoZiA9PiBBcnJheS5pc0FycmF5KGYuZGF0YSkpXG4gICAgICAuZm9yRWFjaChmID0+IHtcbiAgICAgICAgZi5kYXRhLmZvckVhY2goZGF0YUl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGRhdGFJdGVtLmxhYmVsO1xuICAgICAgICAgIGRhdGFJdGVtLmxhYmVsID0gaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIHRoaXMucHJldHRpZnlMYWJlbHNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRGYWNldHNPcHRpb25zKGZhY2V0cykge1xuICAgIGZhY2V0c1xuICAgICAgLmZpbHRlcihmID0+IGYuaWQgPT09ICdxdWVyeS1saW5rcycpXG4gICAgICAuZm9yRWFjaChmID0+IHtcbiAgICAgICAgZi5kYXRhLmZvckVhY2goZGF0YUl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnS2V5c1tkYXRhSXRlbS52YWx1ZV07XG4gICAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgZGF0YUl0ZW0ub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgaWNvbjogY29uZmlnLmljb24sXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2NvbmZpZ1snY2xhc3MtbmFtZSddfWBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbm9ybWFsaXplSXRlbXMoaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXMubWFwKHNpbmdsZUl0ZW0gPT4gKHsgaXRlbTogeyAuLi5zaW5nbGVJdGVtIH0gfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2lkZWJhclN0aWNreUNvbnRyb2woKSB7XG4gICAgLy8gbm8gc3RpY2t5IGZvciBJbnRlcm5ldCBFeHBsb3JlclxuICAgIGlmIChoZWxwZXJzLmJyb3dzZXJJc0lFKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcblxuICAgIHNvdXJjZSQucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3Qgd2luZG93T2Zmc2V0VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICB3cmFwcGVyT2Zmc2V0VG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5LXBhcmVudCcpWzBdWydvZmZzZXRUb3AnXTtcbiAgICAgIHRoaXMuc2lkZWJhcklzU3RpY2t5ID0gd3JhcHBlck9mZnNldFRvcCA8PSB3aW5kb3dPZmZzZXRUb3A7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uUGFyYW1zKCkge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKSxcbiAgICAgIHF1ZXJ5UGFyYW1zID0gdGhpcy5zZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goa2V5ID0+IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGwpO1xuXG4gICAgLy8gYWRpdGlvbmFsIHBhcmFtc1xuICAgIHF1ZXJ5UGFyYW1zLm9yZGVyYnkgPSB0aGlzLm9yZGVyQnk7XG4gICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSB0aGlzLm9yZGVyRGlyZWN0aW9uO1xuICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlO1xuICAgIHF1ZXJ5UGFyYW1zLmxpbWl0ID0gdGhpcy5wYWdlU2l6ZTtcblxuICAgIHJldHVybiB7XG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIGhyZWY6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGhcbiAgICB9O1xuICB9XG59XG4iXX0=