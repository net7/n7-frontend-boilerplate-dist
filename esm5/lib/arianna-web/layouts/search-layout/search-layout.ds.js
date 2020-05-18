/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { cloneDeep } from 'lodash';
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { tap, takeUntil } from 'rxjs/operators';
import { of, fromEvent, Subject, BehaviorSubject, } from 'rxjs';
import { SearchService, } from '../../../common/services';
import facetsConfig from './search-facets.config';
import helpers from '../../../common/helpers';
/** @type {?} */
var SEARCH_MODEL_ID = 'aw-search-layout';
var AwSearchLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSearchLayoutDS, _super);
    function AwSearchLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.resetButtonEnabled = true;
        /**
         * Pagination value (url parameter)
         */
        _this.currentPage = 1;
        /**
         * Linked objects page size
         */
        _this.pageSize = 10;
        _this.sidebarIsSticky = false;
        _this.isFirstLoading = true;
        _this.resultsLoading = false;
        /**
         * True when the user has input a text string
         */
        _this.isSearchingText = new BehaviorSubject(false);
        /**
         * Current order method
         */
        _this.orderBy = 'label_sort';
        /**
         * Current order direction
         */
        _this.orderDirection = 'ASC';
        _this.orderByLabel = 'Ordina per';
        /**
         * Options used to render the HTMLSelect
         */
        _this.orderByOptions = [
            {
                value: '_score_DESC',
                label: 'Ordine per pertinenza',
                type: 'score',
                selected: false
            }, {
                value: 'label_sort_ASC',
                label: 'Ordine alfabetico (A→Z)',
                type: 'text',
                selected: true // Mirrors the default sorting method in `search-facets.config.ts`
            }, {
                value: 'label_sort_DESC',
                label: 'Ordine alfabetico (Z→A)',
                type: 'text',
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
                    active: _this.pageSize,
                },
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
        this._sidebarStickyControl();
        this.mainState.updateCustom('currentNav', 'ricerca');
        this.mainState.update('headTitle', 'Arianna4View - Ricerca');
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
     * Handles changes of the HTMLSelect order control
     * @param payload _score_DESC, label_sort_ASC, label_sort_DESC
     */
    /**
     * Handles changes of the HTMLSelect order control
     * @param {?} payload _score_DESC, label_sort_ASC, label_sort_DESC
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onOrderByChange = /**
     * Handles changes of the HTMLSelect order control
     * @param {?} payload _score_DESC, label_sort_ASC, label_sort_DESC
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var orderBy = payload.substring(0, payload.lastIndexOf('_'));
        /** @type {?} */
        var direction = payload.substring(payload.lastIndexOf('_') + 1);
        /** @type {?} */
        var type = '';
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
            searchParameters: tslib_1.__assign({ totalCount: 100 }, requestParams),
        };
        return this.communication.request$('search', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: requestPayload,
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
                    total: totalCount,
                },
                size: _this.pageSize,
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
                        classes: "color-" + config['class-name'],
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
            var stickyParent = (/** @type {?} */ (document.getElementsByClassName('sticky-parent')[0]));
            /** @type {?} */
            var wrapperOffsetTop = stickyParent ? stickyParent.offsetTop : 0;
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
        function (key) { queryParams[key] = queryParams[key] || null; }));
        // aditional params
        queryParams.orderby = this.orderBy;
        queryParams.orderdirection = this.orderDirection;
        queryParams.page = this.currentPage;
        queryParams.limit = this.pageSize;
        return {
            queryParams: queryParams,
            href: this.configuration.get('paths').searchBasePath,
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
    /**
     * Pagination value (url parameter)
     * @type {?}
     */
    AwSearchLayoutDS.prototype.currentPage;
    /**
     * Linked objects page size
     * @type {?}
     */
    AwSearchLayoutDS.prototype.pageSize;
    /** @type {?} */
    AwSearchLayoutDS.prototype.sidebarIsSticky;
    /** @type {?} */
    AwSearchLayoutDS.prototype.isFirstLoading;
    /** @type {?} */
    AwSearchLayoutDS.prototype.resultsLoading;
    /**
     * True when the user has input a text string
     * @type {?}
     */
    AwSearchLayoutDS.prototype.isSearchingText;
    /**
     * Current order method
     * @type {?}
     */
    AwSearchLayoutDS.prototype.orderBy;
    /**
     * Current order direction
     * @type {?}
     */
    AwSearchLayoutDS.prototype.orderDirection;
    /** @type {?} */
    AwSearchLayoutDS.prototype.options;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByLabel;
    /**
     * Options used to render the HTMLSelect
     * @type {?}
     */
    AwSearchLayoutDS.prototype.orderByOptions;
    /** @type {?} */
    AwSearchLayoutDS.prototype.drawPagination;
    /** @type {?} */
    AwSearchLayoutDS.prototype.getSearchModelId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQ08sRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsZUFBZSxHQUNwRCxNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxhQUFhLEdBRWQsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLFlBQVksTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQzs7SUFFeEMsZUFBZSxHQUFHLGtCQUFrQjtBQUUxQztJQUFzQyw0Q0FBZ0I7SUFBdEQ7UUFBQSxxRUFxVUM7UUFwVVMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWtCekMsd0JBQWtCLEdBQUcsSUFBSSxDQUFDOzs7O1FBUzNCLGlCQUFXLEdBQVEsQ0FBQyxDQUFDOzs7O1FBR3JCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUV0QixvQkFBYyxHQUFHLEtBQUssQ0FBQzs7OztRQUd2QixxQkFBZSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1FBRzdDLGFBQU8sR0FBRyxZQUFZLENBQUM7Ozs7UUFHdkIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFJdkIsa0JBQVksR0FBRyxZ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QUFjO1NBQ3JELENBQUM7SUFDSixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBclVELENBQXNDLGdCQUFnQixHQXFVckQ7Ozs7Ozs7SUFwVUMsc0NBQWlEOzs7OztJQUVqRCx5Q0FBMkI7Ozs7O0lBRTNCLHlDQUEyQjs7Ozs7SUFFM0IscUNBQXVCOzs7OztJQUV2QixrQ0FBOEI7Ozs7O0lBRTlCLHVDQUFpQzs7Ozs7SUFFakMsMENBQTRCOzs7OztJQUU1QixzQ0FBd0I7Ozs7O0lBRXhCLG9DQUF5Qjs7Ozs7SUFFekIsOENBQWtDOztJQUVsQyxxQ0FBeUI7O0lBRXpCLHdDQUE0Qjs7SUFFNUIsc0NBQTBCOzs7OztJQUcxQix1Q0FBNEI7Ozs7O0lBRzVCLG9DQUFxQjs7SUFFckIsMkNBQStCOztJQUUvQiwwQ0FBNkI7O0lBRTdCLDBDQUE4Qjs7Ozs7SUFHOUIsMkNBQW9EOzs7OztJQUdwRCxtQ0FBOEI7Ozs7O0lBRzlCLDBDQUE4Qjs7SUFFOUIsbUNBQW9COztJQUVwQix3Q0FBbUM7Ozs7O0lBR25DLDBDQWlCRTs7SUFvRkYsMENBZ0JDOztJQW9CRCw0Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvbGF5b3V0LWRhdGEtc291cmNlJztcbmltcG9ydCB7IHRhcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSwgb2YsIGZyb21FdmVudCwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIFNlYXJjaFNlcnZpY2UsXG4gIFNlYXJjaE1vZGVsLFxufSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMnO1xuaW1wb3J0IGZhY2V0c0NvbmZpZyBmcm9tICcuL3NlYXJjaC1mYWNldHMuY29uZmlnJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuY29uc3QgU0VBUkNIX01PREVMX0lEID0gJ2F3LXNlYXJjaC1sYXlvdXQnO1xuXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG5cbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcblxuICBwcml2YXRlIHNlYXJjaDogU2VhcmNoU2VydmljZTtcblxuICBwcml2YXRlIHNlYXJjaE1vZGVsOiBTZWFyY2hNb2RlbDtcblxuICBwcml2YXRlIHByZXR0aWZ5TGFiZWxzOiBhbnk7XG5cbiAgcHJpdmF0ZSBjb25maWdLZXlzOiBhbnk7XG5cbiAgcHJpdmF0ZSBmYWxsYmFjazogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVzZXRCdXR0b25FbmFibGVkID0gdHJ1ZTtcblxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIHJlc3VsdHNUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyB0b3RhbENvdW50OiBudW1iZXI7XG5cbiAgLyoqIFBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbWV0ZXIpICovXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55ID0gMTtcblxuICAvKiogTGlua2VkIG9iamVjdHMgcGFnZSBzaXplICovXG4gIHB1YmxpYyBwYWdlU2l6ZSA9IDEwO1xuXG4gIHB1YmxpYyBzaWRlYmFySXNTdGlja3kgPSBmYWxzZTtcblxuICBwdWJsaWMgaXNGaXJzdExvYWRpbmcgPSB0cnVlO1xuXG4gIHB1YmxpYyByZXN1bHRzTG9hZGluZyA9IGZhbHNlO1xuXG4gIC8qKiBUcnVlIHdoZW4gdGhlIHVzZXIgaGFzIGlucHV0IGEgdGV4dCBzdHJpbmcgKi9cbiAgcHVibGljIGlzU2VhcmNoaW5nVGV4dCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIC8qKiBDdXJyZW50IG9yZGVyIG1ldGhvZCAqL1xuICBwdWJsaWMgb3JkZXJCeSA9ICdsYWJlbF9zb3J0JztcblxuICAvKiogQ3VycmVudCBvcmRlciBkaXJlY3Rpb24gKi9cbiAgcHVibGljIG9yZGVyRGlyZWN0aW9uID0gJ0FTQyc7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgb3JkZXJCeUxhYmVsID0gJ09yZGluYSBwZXInO1xuXG4gIC8qKiBPcHRpb25zIHVzZWQgdG8gcmVuZGVyIHRoZSBIVE1MU2VsZWN0ICovXG4gIHB1YmxpYyBvcmRlckJ5T3B0aW9uczogYW55ID0gW1xuICAgIHtcbiAgICAgIHZhbHVlOiAnX3Njb3JlX0RFU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgcGVyIHBlcnRpbmVuemEnLFxuICAgICAgdHlwZTogJ3Njb3JlJyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIHZhbHVlOiAnbGFiZWxfc29ydF9BU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoQeKGklopJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdGVkOiB0cnVlIC8vIE1pcnJvcnMgdGhlIGRlZmF1bHQgc29ydGluZyBtZXRob2QgaW4gYHNlYXJjaC1mYWNldHMuY29uZmlnLnRzYFxuICAgIH0sIHtcbiAgICAgIHZhbHVlOiAnbGFiZWxfc29ydF9ERVNDJyxcbiAgICAgIGxhYmVsOiAnT3JkaW5lIGFsZmFiZXRpY28gKFrihpJBKScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICB9XG4gIF07XG5cbiAgb25Jbml0KHtcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIG9wdGlvbnMsIGNvbW11bmljYXRpb24sIHNlYXJjaCxcbiAgfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucHJldHRpZnlMYWJlbHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKTtcbiAgICB0aGlzLmNvbmZpZ0tleXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpO1xuICAgIHRoaXMuZmFsbGJhY2sgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykuZmFsbGJhY2s7XG4gICAgdGhpcy5wYWdlVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykudGl0bGU7XG4gICAgLy8gcmVtb3ZlIGZpcnN0XG4gICAgLy8gc3RhdGVsZXNzIHNlYXJjaFxuICAgIGlmICh0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfTU9ERUxfSUQpKSB7XG4gICAgICB0aGlzLnNlYXJjaC5yZW1vdmUoU0VBUkNIX01PREVMX0lEKTtcbiAgICB9XG4gICAgdGhpcy5zZWFyY2guYWRkKFNFQVJDSF9NT0RFTF9JRCwgY2xvbmVEZWVwKGZhY2V0c0NvbmZpZykpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwgPSB0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfTU9ERUxfSUQpO1xuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXG4gICAgaWYgKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpIHtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKTtcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9zaWRlYmFyU3RpY2t5Q29udHJvbCgpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdyaWNlcmNhJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gUmljZXJjYScpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XG4gIH1cblxuICBvblNlYXJjaFJlc3BvbnNlKCkge1xuICAgIHRoaXMucmVzZXRCdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0ZpcnN0TG9hZGluZykge1xuICAgICAgdGhpcy5pc0ZpcnN0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5vbmUoJ2ZhY2V0cy13cmFwcGVyJykudXBkYXRlKHsgc2VhcmNoTW9kZWw6IHRoaXMuc2VhcmNoTW9kZWwgfSk7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgY2hhbmdlcyBvZiB0aGUgSFRNTFNlbGVjdCBvcmRlciBjb250cm9sXG4gICAqIEBwYXJhbSBwYXlsb2FkIF9zY29yZV9ERVNDLCBsYWJlbF9zb3J0X0FTQywgbGFiZWxfc29ydF9ERVNDXG4gICAqL1xuICBvbk9yZGVyQnlDaGFuZ2UocGF5bG9hZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgb3JkZXJCeSA9IHBheWxvYWQuc3Vic3RyaW5nKDAsIHBheWxvYWQubGFzdEluZGV4T2YoJ18nKSk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gcGF5bG9hZC5zdWJzdHJpbmcocGF5bG9hZC5sYXN0SW5kZXhPZignXycpICsgMSk7XG4gICAgbGV0IHR5cGUgPSAnJztcbiAgICAvLyBzZXQgc2VsZWN0ZWRcbiAgICB0aGlzLm9yZGVyQnlPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gcGF5bG9hZCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0eXBlID0gb3B0aW9uLnR5cGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9yZGVyQnkgPSBvcmRlckJ5O1xuICAgIHRoaXMub3JkZXJEaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRTZWFyY2hDb25maWdUeXBlKHR5cGUpO1xuICB9XG5cbiAgb25QYWdlU2l6ZUNoYW5nZShzaXplKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHNpemU7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBvblBhZ2luYXRpb25DaGFuZ2UocGF5bG9hZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHBhZ2UgPSBwYXlsb2FkLnJlcGxhY2UoJ3BhZ2UtJywgJycpO1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uR29Ub0NoYW5nZShwYXlsb2FkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSk7XG4gIH1cblxuICBkcmF3UGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uUGFyYW1zKCk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIG1vZGU6ICdocmVmJyxcbiAgICAgIGhyZWYsXG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy50b3RhbENvdW50IC8gdGhpcy5wYWdlU2l6ZSksXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2VMaW1pdDogNSxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIGxpc3Q6IFsxMCwgMjUsIDUwXSxcbiAgICAgICAgYWN0aXZlOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0UGFnaW5hdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKDEpO1xuICB9XG5cbiAgb25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZCkge1xuICAgIHRoaXMuc2V0TGltaXQocGF5bG9hZCk7XG5cbiAgICAvLyByZXNldCBwYWdlICYgb2Zmc2V0XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KDApO1xuICB9XG5cbiAgc2V0TGltaXQocGF5bG9hZCkge1xuICAgIHRoaXMucGFnZVNpemUgPSBwYXlsb2FkO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ0xpbWl0KHBheWxvYWQpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldCgodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VhcmNoTW9kZWxJZCA9ICgpID0+IFNFQVJDSF9NT0RFTF9JRDtcblxuICBwdWJsaWMgZG9TZWFyY2hSZXF1ZXN0JCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgICBjb25zdCByZXF1ZXN0UGF5bG9hZCA9IHtcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHtcbiAgICAgICAgLy8gRklYTUU6IHRvZ2xpZXJlIHRvdGFsQ291bnRcbiAgICAgICAgdG90YWxDb3VudDogMTAwLFxuICAgICAgICAuLi5yZXF1ZXN0UGFyYW1zLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3NlYXJjaCcsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHJlcXVlc3RQYXlsb2FkLFxuICAgIH0pLnBpcGUoXG4gICAgICB0YXAoKHsgdG90YWxDb3VudCwgcmVzdWx0cywgZmFjZXRzIH0pID0+IHtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgICAgICAgbGV0IHJlc3VsdHNUaXRsZUluZGV4ID0gMDtcbiAgICAgICAgLy8gcmVzdWx0cyB0aXRsZVxuICAgICAgICBpZiAodGhpcy50b3RhbENvdW50ID4gMSkge1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvdGFsQ291bnQgPT09IDEpIHtcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykucmVzdWx0c1tcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIGZhY2V0cyBsYWJlbHNcbiAgICAgICAgdGhpcy5fYWRkRmFjZXRzTGFiZWxzKGZhY2V0cyk7XG4gICAgICAgIC8vIGZhY2V0cyBvcHRpb25zXG4gICAgICAgIHRoaXMuX2FkZEZhY2V0c09wdGlvbnMoZmFjZXRzKTtcblxuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZhY2V0cyhmYWNldHMpO1xuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZVRvdGFsQ291bnQodG90YWxDb3VudCk7XG5cbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgY29udGV4dDogJ3NlYXJjaCcsXG4gICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKSxcbiAgICAgICAgICBkeW5hbWljUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgdG90YWw6IHRvdGFsQ291bnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kcmF3UGFnaW5hdGlvbigpO1xuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5fbm9ybWFsaXplSXRlbXMocmVzdWx0cy5pdGVtcykgfSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU2VhcmNoUGFnZShwYWdlKSB7XG4gICAgaWYgKCtwYWdlID09PSB0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArcGFnZTtcblxuICAgIGNvbnN0IHNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3QgcGFnZUNvbmZpZyA9IHNlYXJjaENvbmZpZy5wYWdlO1xuICAgIGNvbnN0IHsgbGltaXQgfSA9IHBhZ2VDb25maWc7XG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIGxpbWl0O1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KG5ld09mZnNldCk7XG5cbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRGYWNldHNMYWJlbHMoZmFjZXRzKSB7XG4gICAgZmFjZXRzXG4gICAgICAuZmlsdGVyKChmKSA9PiBBcnJheS5pc0FycmF5KGYuZGF0YSkpXG4gICAgICAuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBmLmRhdGEuZm9yRWFjaCgoZGF0YUl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBkYXRhSXRlbS5sYWJlbDtcbiAgICAgICAgICBkYXRhSXRlbS5sYWJlbCA9IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCB0aGlzLnByZXR0aWZ5TGFiZWxzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRmFjZXRzT3B0aW9ucyhmYWNldHMpIHtcbiAgICBmYWNldHNcbiAgICAgIC5maWx0ZXIoKGYpID0+IGYuaWQgPT09ICdxdWVyeS1saW5rcycpXG4gICAgICAuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBmLmRhdGEuZm9yRWFjaCgoZGF0YUl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ0tleXNbZGF0YUl0ZW0udmFsdWVdO1xuICAgICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIGRhdGFJdGVtLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGljb246IGNvbmZpZy5pY29uLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtjb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9ub3JtYWxpemVJdGVtcyhpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKHNpbmdsZUl0ZW0pID0+ICh7IGl0ZW06IHsgLi4uc2luZ2xlSXRlbSB9IH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NpZGViYXJTdGlja3lDb250cm9sKCkge1xuICAgIC8vIG5vIHN0aWNreSBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgICBpZiAoaGVscGVycy5icm93c2VySXNJRSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZSQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJyk7XG5cbiAgICBzb3VyY2UkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dPZmZzZXRUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBjb25zdCBzdGlja3lQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB3cmFwcGVyT2Zmc2V0VG9wID0gc3RpY2t5UGFyZW50ID8gc3RpY2t5UGFyZW50Lm9mZnNldFRvcCA6IDA7XG4gICAgICB0aGlzLnNpZGViYXJJc1N0aWNreSA9IHdyYXBwZXJPZmZzZXRUb3AgPD0gd2luZG93T2Zmc2V0VG9wO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvblBhcmFtcygpIHtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKHJlcXVlc3RQYXJhbXMuZmlsdGVycyk7XG5cbiAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xuXG4gICAgLy8gYWRpdGlvbmFsIHBhcmFtc1xuICAgIHF1ZXJ5UGFyYW1zLm9yZGVyYnkgPSB0aGlzLm9yZGVyQnk7XG4gICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSB0aGlzLm9yZGVyRGlyZWN0aW9uO1xuICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlO1xuICAgIHF1ZXJ5UGFyYW1zLmxpbWl0ID0gdGhpcy5wYWdlU2l6ZTtcblxuICAgIHJldHVybiB7XG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIGhyZWY6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGgsXG4gICAgfTtcbiAgfVxufVxuIl19