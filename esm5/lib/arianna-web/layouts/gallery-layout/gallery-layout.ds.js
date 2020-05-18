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
import facetsConfig from './gallery-facets.config';
import helpers from '../../../common/helpers';
/** @type {?} */
var SEARCH_MODEL_ID = 'aw-gallery-layout';
var AwGalleryLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwGalleryLayoutDS, _super);
    function AwGalleryLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.resetButtonEnabled = true;
        _this.currentPage = 1; // pagination value (url param)
        // pagination value (url param)
        _this.pageSize = 12; // linked objects page size
        // linked objects page size
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
        _this.orderByOptions = [
            {
                value: '_score_DESC',
                label: 'Ordine per pertinenza',
                type: 'score',
                selected: false
            },
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
                    list: [12, 24, 48],
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
    AwGalleryLayoutDS.prototype.onInit = /**
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
        this.fallback = this.configuration.get('gallery-layout').fallback;
        this.pageTitle = this.configuration.get('gallery-layout').title;
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
        this.mainState.updateCustom('currentNav', 'galleria');
        this.mainState.update('headTitle', 'Arianna4View - Galleria');
    };
    /**
     * @return {?}
     */
    AwGalleryLayoutDS.prototype.onDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
        SearchService.queryParams = null;
    };
    /**
     * @return {?}
     */
    AwGalleryLayoutDS.prototype.onSearchResponse = /**
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
    AwGalleryLayoutDS.prototype.onOrderByChange = /**
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
    AwGalleryLayoutDS.prototype.onPageSizeChange = /**
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
    AwGalleryLayoutDS.prototype.onPaginationChange = /**
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
    AwGalleryLayoutDS.prototype.onPaginationGoToChange = /**
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
    AwGalleryLayoutDS.prototype.resetPagination = /**
     * @return {?}
     */
    function () {
        this._updateSearchPage(1);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwGalleryLayoutDS.prototype.onResultsLimitChange = /**
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
    AwGalleryLayoutDS.prototype.setLimit = /**
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
    AwGalleryLayoutDS.prototype.doSearchRequest$ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var requestParams = this.searchModel.getRequestParams();
        /** @type {?} */
        var requestPayload = {
            searchParameters: tslib_1.__assign({ totalCount: 100, gallery: true }, requestParams),
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
            _this.resultsTitle = _this.configuration.get('gallery-layout').results[resultsTitleIndex];
            // facets labels
            _this._addFacetsLabels(facets);
            // facets options
            _this._addFacetsOptions(facets);
            _this.searchModel.updateFacets(facets);
            _this.searchModel.updateTotalCount(totalCount);
            _this.one('aw-linked-objects').updateOptions({
                context: 'gallery',
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
    AwGalleryLayoutDS.prototype._updateSearchPage = /**
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
    AwGalleryLayoutDS.prototype._addFacetsLabels = /**
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
    AwGalleryLayoutDS.prototype._addFacetsOptions = /**
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
    AwGalleryLayoutDS.prototype._normalizeItems = /**
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
    AwGalleryLayoutDS.prototype._sidebarStickyControl = /**
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
    AwGalleryLayoutDS.prototype._getPaginationParams = /**
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
            href: this.configuration.get('paths').galleryBasePath,
        };
    };
    return AwGalleryLayoutDS;
}(LayoutDataSource));
export { AwGalleryLayoutDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.search;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.searchModel;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.prettifyLabels;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.configKeys;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.fallback;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.resetButtonEnabled;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.resultsTitle;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.totalCount;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.currentPage;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.pageSize;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.sidebarIsSticky;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.isFirstLoading;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.resultsLoading;
    /**
     * True when the user has input a text string
     * @type {?}
     */
    AwGalleryLayoutDS.prototype.isSearchingText;
    /**
     * Current order method
     * @type {?}
     */
    AwGalleryLayoutDS.prototype.orderBy;
    /**
     * Current order direction
     * @type {?}
     */
    AwGalleryLayoutDS.prototype.orderDirection;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.options;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.orderByLabel;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.orderByOptions;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.drawPagination;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.getSearchModelId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQ08sRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsZUFBZSxHQUNwRCxNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxhQUFhLEdBRWQsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLFlBQVksTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQzs7SUFFeEMsZUFBZSxHQUFHLG1CQUFtQjtBQUUzQztJQUF1Qyw2Q0FBZ0I7SUFBdkQ7UUFBQSxxRUErVUM7UUE5VVMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWtCekMsd0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBUTNCLGlCQUFXLEdBQVEsQ0FBQyxDQUFDLENBQUMsK0JBQStCOztRQUVyRCxjQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCOztRQUUxQyxxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUV4QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUV0QixvQkFBYyxHQUFHLEtBQUssQ0FBQzs7OztRQUd2QixxQkFBZSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1FBRzdDLGFBQU8sR0FBRyxZQUFZLENBQUM7Ozs7UUFHdkIsb0JBQWMsR0FBRyxLQUFL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SUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZTtTQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQS9VRCxDQUF1QyxnQkFBZ0IsR0ErVXREOzs7Ozs7O0lBOVVDLHVDQUFpRDs7Ozs7SUFFakQsMENBQTJCOzs7OztJQUUzQiwwQ0FBMkI7Ozs7O0lBRTNCLHNDQUF1Qjs7Ozs7SUFFdkIsbUNBQThCOzs7OztJQUU5Qix3Q0FBaUM7Ozs7O0lBRWpDLDJDQUE0Qjs7Ozs7SUFFNUIsdUNBQXdCOzs7OztJQUV4QixxQ0FBeUI7Ozs7O0lBRXpCLCtDQUFrQzs7SUFFbEMsc0NBQXlCOztJQUV6Qix5Q0FBNEI7O0lBRTVCLHVDQUEwQjs7SUFFMUIsd0NBQTRCOztJQUU1QixxQ0FBcUI7O0lBRXJCLDRDQUErQjs7SUFFL0IsMkNBQTZCOztJQUU3QiwyQ0FBOEI7Ozs7O0lBRzlCLDRDQUFvRDs7Ozs7SUFHcEQsb0NBQThCOzs7OztJQUc5QiwyQ0FBOEI7O0lBRTlCLG9DQUFvQjs7SUFFcEIseUNBQW1DOztJQUVuQywyQ0FvQkU7O0lBNkZGLDJDQWdCQzs7SUFvQkQsNkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyB0YXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE9ic2VydmFibGUsIG9mLCBmcm9tRXZlbnQsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBTZWFyY2hTZXJ2aWNlLFxuICBTZWFyY2hNb2RlbCxcbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzJztcbmltcG9ydCBmYWNldHNDb25maWcgZnJvbSAnLi9nYWxsZXJ5LWZhY2V0cy5jb25maWcnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5jb25zdCBTRUFSQ0hfTU9ERUxfSUQgPSAnYXctZ2FsbGVyeS1sYXlvdXQnO1xuXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5TGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG5cbiAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG5cbiAgcHJpdmF0ZSBwcmV0dGlmeUxhYmVsczogYW55O1xuXG4gIHByaXZhdGUgY29uZmlnS2V5czogYW55O1xuXG4gIHByaXZhdGUgZmFsbGJhY2s6IHN0cmluZztcblxuICBwcml2YXRlIHJlc2V0QnV0dG9uRW5hYmxlZCA9IHRydWU7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyByZXN1bHRzVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgdG90YWxDb3VudDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55ID0gMTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuXG4gIHB1YmxpYyBwYWdlU2l6ZSA9IDEyOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcblxuICBwdWJsaWMgc2lkZWJhcklzU3RpY2t5ID0gZmFsc2U7XG5cbiAgcHVibGljIGlzRmlyc3RMb2FkaW5nID0gdHJ1ZTtcblxuICBwdWJsaWMgcmVzdWx0c0xvYWRpbmcgPSBmYWxzZTtcblxuICAvKiogVHJ1ZSB3aGVuIHRoZSB1c2VyIGhhcyBpbnB1dCBhIHRleHQgc3RyaW5nICovXG4gIHB1YmxpYyBpc1NlYXJjaGluZ1RleHQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICAvKiogQ3VycmVudCBvcmRlciBtZXRob2QgKi9cbiAgcHVibGljIG9yZGVyQnkgPSAnbGFiZWxfc29ydCc7XG5cbiAgLyoqIEN1cnJlbnQgb3JkZXIgZGlyZWN0aW9uICovXG4gIHB1YmxpYyBvcmRlckRpcmVjdGlvbiA9ICdBU0MnO1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG5cbiAgcHVibGljIG9yZGVyQnlMYWJlbCA9ICdPcmRpbmEgcGVyJztcblxuICBwdWJsaWMgb3JkZXJCeU9wdGlvbnM6IGFueSA9IFtcbiAgICB7XG4gICAgICB2YWx1ZTogJ19zY29yZV9ERVNDJyxcbiAgICAgIGxhYmVsOiAnT3JkaW5lIHBlciBwZXJ0aW5lbnphJyxcbiAgICAgIHR5cGU6ICdzY29yZScsXG4gICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnbGFiZWxfc29ydF9BU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoQeKGklopJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdGVkOiB0cnVlXG5cbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnbGFiZWxfc29ydF9ERVNDJyxcbiAgICAgIGxhYmVsOiAnT3JkaW5lIGFsZmFiZXRpY28gKFrihpJBKScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICB9XG4gIF07XG5cbiAgb25Jbml0KHtcbiAgICBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIG9wdGlvbnMsIGNvbW11bmljYXRpb24sIHNlYXJjaCxcbiAgfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucHJldHRpZnlMYWJlbHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKTtcbiAgICB0aGlzLmNvbmZpZ0tleXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpO1xuICAgIHRoaXMuZmFsbGJhY2sgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdnYWxsZXJ5LWxheW91dCcpLmZhbGxiYWNrO1xuXG4gICAgdGhpcy5wYWdlVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdnYWxsZXJ5LWxheW91dCcpLnRpdGxlO1xuXG4gICAgLy8gcmVtb3ZlIGZpcnN0XG4gICAgLy8gc3RhdGVsZXNzIHNlYXJjaFxuICAgIGlmICh0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfTU9ERUxfSUQpKSB7XG4gICAgICB0aGlzLnNlYXJjaC5yZW1vdmUoU0VBUkNIX01PREVMX0lEKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaC5hZGQoU0VBUkNIX01PREVMX0lELCBjbG9uZURlZXAoZmFjZXRzQ29uZmlnKSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9IHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCk7XG5cbiAgICAvLyBxdWVyeSBwYXJhbXMgY29udHJvbFxuICAgIGlmIChTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyk7XG4gICAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzaWRlYmFyIHN0aWNreSBjb250cm9sXG4gICAgdGhpcy5fc2lkZWJhclN0aWNreUNvbnRyb2woKTtcblxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdnYWxsZXJpYScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmE0VmlldyAtIEdhbGxlcmlhJyk7XG4gIH1cblxuICBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgfVxuXG4gIG9uU2VhcmNoUmVzcG9uc2UoKSB7XG4gICAgdGhpcy5yZXNldEJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmlzRmlyc3RMb2FkaW5nKSB7XG4gICAgICB0aGlzLmlzRmlyc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLm9uZSgnZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoeyBzZWFyY2hNb2RlbDogdGhpcy5zZWFyY2hNb2RlbCB9KTtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgKiBIYW5kbGVzIGNoYW5nZXMgb2YgdGhlIEhUTUxTZWxlY3Qgb3JkZXIgY29udHJvbFxuICAqIEBwYXJhbSBwYXlsb2FkIF9zY29yZV9ERVNDLCBsYWJlbF9zb3J0X0FTQywgbGFiZWxfc29ydF9ERVNDXG4gICovXG4gIG9uT3JkZXJCeUNoYW5nZShwYXlsb2FkKSB7XG4gICAgY29uc3Qgb3JkZXJCeSA9IHBheWxvYWQuc3Vic3RyaW5nKDAsIHBheWxvYWQubGFzdEluZGV4T2YoJ18nKSk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gcGF5bG9hZC5zdWJzdHJpbmcocGF5bG9hZC5sYXN0SW5kZXhPZignXycpICsgMSk7XG4gICAgbGV0IHR5cGUgPSAnJztcbiAgICAvLyBzZXQgc2VsZWN0ZWRcbiAgICB0aGlzLm9yZGVyQnlPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gcGF5bG9hZCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0eXBlID0gb3B0aW9uLnR5cGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3JkZXJCeSA9IG9yZGVyQnk7XG4gICAgdGhpcy5vcmRlckRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnT3JkZXJCeShvcmRlckJ5KTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnVHlwZSh0eXBlKTtcbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2Uoc2l6ZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHRoaXMucGFnZVNpemUgPSBzaXplO1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHRoaXMuY3VycmVudFBhZ2UpO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2hhbmdlKHBheWxvYWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBwYWdlID0gcGF5bG9hZC5yZXBsYWNlKCdwYWdlLScsICcnKTtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZShwYWdlKTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkdvVG9DaGFuZ2UocGF5bG9hZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHBhZ2UgPSBwYXlsb2FkLnJlcGxhY2UoJ2dvdG8tJywgJycpO1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpO1xuICB9XG5cbiAgZHJhd1BhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBtb2RlOiAnaHJlZicsXG4gICAgICBocmVmLFxuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRoaXMudG90YWxDb3VudCAvIHRoaXMucGFnZVNpemUpLFxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBwYWdlTGltaXQ6IDUsXG4gICAgICBzaXplczoge1xuICAgICAgICBsaXN0OiBbMTIsIDI0LCA0OF0sXG4gICAgICAgIGFjdGl2ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXNldFBhZ2luYXRpb24oKSB7XG4gICAgdGhpcy5fdXBkYXRlU2VhcmNoUGFnZSgxKTtcbiAgfVxuXG4gIG9uUmVzdWx0c0xpbWl0Q2hhbmdlKHBheWxvYWQpIHtcbiAgICB0aGlzLnNldExpbWl0KHBheWxvYWQpO1xuXG4gICAgLy8gcmVzZXQgcGFnZSAmIG9mZnNldFxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldCgwKTtcbiAgfVxuXG4gIHNldExpbWl0KHBheWxvYWQpIHtcbiAgICB0aGlzLnBhZ2VTaXplID0gcGF5bG9hZDtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdMaW1pdChwYXlsb2FkKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQoKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgcHVibGljIGdldFNlYXJjaE1vZGVsSWQgPSAoKSA9PiBTRUFSQ0hfTU9ERUxfSUQ7XG5cbiAgcHVibGljIGRvU2VhcmNoUmVxdWVzdCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG4gICAgY29uc3QgcmVxdWVzdFBheWxvYWQgPSB7XG4gICAgICBzZWFyY2hQYXJhbWV0ZXJzOiB7XG4gICAgICAgIC8vIEZJWE1FOiB0b2dsaWVyZSB0b3RhbENvdW50XG4gICAgICAgIHRvdGFsQ291bnQ6IDEwMCxcbiAgICAgICAgZ2FsbGVyeTogdHJ1ZSxcbiAgICAgICAgLi4ucmVxdWVzdFBhcmFtcyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdzZWFyY2gnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiByZXF1ZXN0UGF5bG9hZCxcbiAgICB9KS5waXBlKFxuICAgICAgdGFwKCh7IHRvdGFsQ291bnQsIHJlc3VsdHMsIGZhY2V0cyB9KSA9PiB7XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gICAgICAgIGxldCByZXN1bHRzVGl0bGVJbmRleCA9IDA7XG4gICAgICAgIC8vIHJlc3VsdHMgdGl0bGVcbiAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCA+IDEpIHtcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbENvdW50ID09PSAxKSB7XG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXggPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0c1RpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZ2FsbGVyeS1sYXlvdXQnKS5yZXN1bHRzW1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4XG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gZmFjZXRzIGxhYmVsc1xuICAgICAgICB0aGlzLl9hZGRGYWNldHNMYWJlbHMoZmFjZXRzKTtcbiAgICAgICAgLy8gZmFjZXRzIG9wdGlvbnNcbiAgICAgICAgdGhpcy5fYWRkRmFjZXRzT3B0aW9ucyhmYWNldHMpO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmFjZXRzKGZhY2V0cyk7XG4gICAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlVG90YWxDb3VudCh0b3RhbENvdW50KTtcblxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICBjb250ZXh0OiAnZ2FsbGVyeScsXG4gICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKSxcbiAgICAgICAgICBkeW5hbWljUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgdG90YWw6IHRvdGFsQ291bnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kcmF3UGFnaW5hdGlvbigpO1xuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5fbm9ybWFsaXplSXRlbXMocmVzdWx0cy5pdGVtcykgfSk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU2VhcmNoUGFnZShwYWdlKSB7XG4gICAgaWYgKCtwYWdlID09PSB0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArcGFnZTtcblxuICAgIGNvbnN0IHNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3QgcGFnZUNvbmZpZyA9IHNlYXJjaENvbmZpZy5wYWdlO1xuICAgIGNvbnN0IHsgbGltaXQgfSA9IHBhZ2VDb25maWc7XG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIGxpbWl0O1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KG5ld09mZnNldCk7XG5cbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRGYWNldHNMYWJlbHMoZmFjZXRzKSB7XG4gICAgZmFjZXRzXG4gICAgICAuZmlsdGVyKChmKSA9PiBBcnJheS5pc0FycmF5KGYuZGF0YSkpXG4gICAgICAuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBmLmRhdGEuZm9yRWFjaCgoZGF0YUl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBkYXRhSXRlbS5sYWJlbDtcbiAgICAgICAgICBkYXRhSXRlbS5sYWJlbCA9IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCB0aGlzLnByZXR0aWZ5TGFiZWxzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRmFjZXRzT3B0aW9ucyhmYWNldHMpIHtcbiAgICBmYWNldHNcbiAgICAgIC5maWx0ZXIoKGYpID0+IGYuaWQgPT09ICdxdWVyeS1saW5rcycpXG4gICAgICAuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICBmLmRhdGEuZm9yRWFjaCgoZGF0YUl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ0tleXNbZGF0YUl0ZW0udmFsdWVdO1xuICAgICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIGRhdGFJdGVtLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGljb246IGNvbmZpZy5pY29uLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtjb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9ub3JtYWxpemVJdGVtcyhpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKHNpbmdsZUl0ZW0pID0+ICh7IGl0ZW06IHsgLi4uc2luZ2xlSXRlbSB9IH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NpZGViYXJTdGlja3lDb250cm9sKCkge1xuICAgIC8vIG5vIHN0aWNreSBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgICBpZiAoaGVscGVycy5icm93c2VySXNJRSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZSQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJyk7XG5cbiAgICBzb3VyY2UkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dPZmZzZXRUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBjb25zdCBzdGlja3lQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB3cmFwcGVyT2Zmc2V0VG9wID0gc3RpY2t5UGFyZW50ID8gc3RpY2t5UGFyZW50Lm9mZnNldFRvcCA6IDA7XG4gICAgICB0aGlzLnNpZGViYXJJc1N0aWNreSA9IHdyYXBwZXJPZmZzZXRUb3AgPD0gd2luZG93T2Zmc2V0VG9wO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvblBhcmFtcygpIHtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKHJlcXVlc3RQYXJhbXMuZmlsdGVycyk7XG5cbiAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xuXG4gICAgLy8gYWRpdGlvbmFsIHBhcmFtc1xuICAgIHF1ZXJ5UGFyYW1zLm9yZGVyYnkgPSB0aGlzLm9yZGVyQnk7XG4gICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSB0aGlzLm9yZGVyRGlyZWN0aW9uO1xuICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlO1xuICAgIHF1ZXJ5UGFyYW1zLmxpbWl0ID0gdGhpcy5wYWdlU2l6ZTtcblxuICAgIHJldHVybiB7XG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIGhyZWY6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZ2FsbGVyeUJhc2VQYXRoLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==