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
        _this.orderByLabel = 'Ordina per';
        _this.orderByOptions = [
            {
                value: 'label_ASC',
                label: 'Ordine alfabetico (A→Z)'
            },
            {
                value: 'label_DESC',
                label: 'Ordine alfabetico (Z→A)'
            }
        ];
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
        var _a = tslib_1.__read(payload.split('_'), 2), orderBy = _a[0], direction = _a[1];
        this.searchModel.setSearchConfigOrderBy(orderBy);
        this.searchModel.setSearchConfigDirection(direction);
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
        this.pageSize = payload;
        this.searchModel.setPageConfigLimit(payload);
        // reset page & offset
        this.currentPage = 1;
        this.searchModel.setPageConfigOffset(0);
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
                dynamicPagination: {
                    total: totalCount
                },
                size: _this.pageSize
            });
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
                var key = dataItem.value.replace(' ', '-');
                /** @type {?} */
                var config = _this.configKeys[key];
                if (config) {
                    dataItem.options = {
                        icon: config.icon,
                        classes: "color-" + key
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
    AwSearchLayoutDS.prototype.options;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByLabel;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByOptions;
    /** @type {?} */
    AwSearchLayoutDS.prototype.getSearchModelId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUNMLGFBQWEsRUFFZCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDOztJQUV4QyxlQUFlLEdBQUcsa0JBQWtCO0FBRTFDO0lBQXNDLDRDQUFnQjtJQUF0RDtRQUFBLHFFQTZOQztRQTVOUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBU3pDLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUtwQyxpQkFBVyxHQUFRLENBQUMsQ0FBQyxDQUFDLCtCQUErQjs7UUFDckQsY0FBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFDMUMscUJBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFJdEIsa0JBQVksR0FBRyxZQUFZLENBQUM7UUFDNUIsb0JBQWMsR0FBUTtZQUMzQjtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLHlCQUF5QjthQUNqQztZQUNEO2dCQUNFLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUUs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OztnQkFDeEMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNyRixLQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixJQUFJLGVBQWUsQ0FBQztRQUM3RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUE3TkQsQ0FBc0MsZ0JBQWdCLEdBNk5yRDs7Ozs7OztJQTVOQyxzQ0FBaUQ7Ozs7O0lBQ2pELHlDQUEyQjs7Ozs7SUFDM0IseUNBQTJCOzs7OztJQUMzQixxQ0FBdUI7Ozs7O0lBQ3ZCLGtDQUE4Qjs7Ozs7SUFDOUIsdUNBQWlDOzs7OztJQUNqQywwQ0FBNEI7Ozs7O0lBQzVCLHNDQUF3Qjs7Ozs7SUFDeEIsb0NBQXlCOzs7OztJQUN6Qiw4Q0FBMkM7O0lBRTNDLHFDQUF5Qjs7SUFDekIsd0NBQTRCOztJQUM1QixzQ0FBMEI7O0lBQzFCLHVDQUE0Qjs7SUFDNUIsb0NBQXFCOztJQUNyQiwyQ0FBK0I7O0lBQy9CLDBDQUE2Qjs7SUFFN0IsbUNBQW9COztJQUVwQix3Q0FBbUM7O0lBQ25DLDBDQVNFOztJQTZFRiw0Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7XG4gIFNlYXJjaFNlcnZpY2UsXG4gIFNlYXJjaE1vZGVsXG59IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcyc7XG5pbXBvcnQgZmFjZXRzQ29uZmlnIGZyb20gJy4vc2VhcmNoLWZhY2V0cy5jb25maWcnO1xuaW1wb3J0IHsgdGFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmNvbnN0IFNFQVJDSF9NT0RFTF9JRCA9ICdhdy1zZWFyY2gtbGF5b3V0JztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG4gIHByaXZhdGUgc2VhcmNoOiBTZWFyY2hTZXJ2aWNlO1xuICBwcml2YXRlIHNlYXJjaE1vZGVsOiBTZWFyY2hNb2RlbDtcbiAgcHJpdmF0ZSBwcmV0dGlmeUxhYmVsczogYW55O1xuICBwcml2YXRlIGNvbmZpZ0tleXM6IGFueTtcbiAgcHJpdmF0ZSBmYWxsYmFjazogc3RyaW5nO1xuICBwcml2YXRlIHJlc2V0QnV0dG9uRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgcmVzdWx0c1RpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyB0b3RhbENvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55ID0gMTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuICBwdWJsaWMgcGFnZVNpemUgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG4gIHB1YmxpYyBzaWRlYmFySXNTdGlja3kgPSBmYWxzZTtcbiAgcHVibGljIGlzRmlyc3RMb2FkaW5nID0gdHJ1ZTtcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHB1YmxpYyBvcmRlckJ5TGFiZWwgPSAnT3JkaW5hIHBlcic7XG4gIHB1YmxpYyBvcmRlckJ5T3B0aW9uczogYW55ID0gW1xuICAgIHtcbiAgICAgIHZhbHVlOiAnbGFiZWxfQVNDJyxcbiAgICAgIGxhYmVsOiAnT3JkaW5lIGFsZmFiZXRpY28gKEHihpJaKSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnbGFiZWxfREVTQycsXG4gICAgICBsYWJlbDogJ09yZGluZSBhbGZhYmV0aWNvICha4oaSQSknXG4gICAgfVxuICBdO1xuXG4gIG9uSW5pdCh7IGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgY29tbXVuaWNhdGlvbiwgc2VhcmNoIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnByZXR0aWZ5TGFiZWxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyk7XG4gICAgdGhpcy5jb25maWdLZXlzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKTtcbiAgICB0aGlzLmZhbGxiYWNrID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2VhcmNoLWxheW91dCcpLmZhbGxiYWNrO1xuXG4gICAgdGhpcy5wYWdlVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykudGl0bGU7XG5cbiAgICAvLyByZW1vdmUgZmlyc3RcbiAgICAvLyBzdGF0ZWxlc3Mgc2VhcmNoXG4gICAgaWYgKHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCkpIHtcbiAgICAgIHRoaXMuc2VhcmNoLnJlbW92ZShTRUFSQ0hfTU9ERUxfSUQpO1xuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoLmFkZChTRUFSQ0hfTU9ERUxfSUQsIGNsb25lRGVlcChmYWNldHNDb25maWcpKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsID0gdGhpcy5zZWFyY2gubW9kZWwoU0VBUkNIX01PREVMX0lEKTtcblxuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXG4gICAgaWYgKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpIHtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKTtcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIHNpZGViYXIgc3RpY2t5IGNvbnRyb2xcbiAgICB0aGlzLl9zaWRlYmFyU3RpY2t5Q29udHJvbCgpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XG4gIH1cblxuICBvblNlYXJjaFJlc3BvbnNlKCl7XG4gICAgdGhpcy5yZXNldEJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmlzRmlyc3RMb2FkaW5nKSB7XG4gICAgICB0aGlzLmlzRmlyc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLm9uZSgnZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoeyBzZWFyY2hNb2RlbDogdGhpcy5zZWFyY2hNb2RlbCB9KTtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgICB9XG4gIH1cblxuICBvbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCkge1xuICAgIGNvbnN0IFtvcmRlckJ5LCBkaXJlY3Rpb25dID0gcGF5bG9hZC5zcGxpdCgnXycpO1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gIH1cblxuICBvblBhZ2luYXRpb25DaGFuZ2UocGF5bG9hZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHBhZ2UgPSBwYXlsb2FkLnJlcGxhY2UoJ3BhZ2UtJywgJycpO1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uR29Ub0NoYW5nZShwYXlsb2FkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSk7XG4gIH1cblxuICByZXNldFBhZ2luYXRpb24oKSB7XG4gICAgdGhpcy5fdXBkYXRlU2VhcmNoUGFnZSgxKTtcbiAgfVxuXG4gIG9uUmVzdWx0c0xpbWl0Q2hhbmdlKHBheWxvYWQpIHtcbiAgICB0aGlzLnBhZ2VTaXplID0gcGF5bG9hZDtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdMaW1pdChwYXlsb2FkKTtcblxuICAgIC8vIHJlc2V0IHBhZ2UgJiBvZmZzZXRcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQoMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VhcmNoTW9kZWxJZCA9ICgpID0+IFNFQVJDSF9NT0RFTF9JRDtcblxuICBwdWJsaWMgZG9TZWFyY2hSZXF1ZXN0JCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgICBjb25zdCByZXF1ZXN0UGF5bG9hZCA9IHtcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHtcbiAgICAgICAgLy8gRklYTUU6IHRvZ2xpZXJlIHRvdGFsQ291bnRcbiAgICAgICAgdG90YWxDb3VudDogMTAwLFxuICAgICAgICAuLi5yZXF1ZXN0UGFyYW1zXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdzZWFyY2gnLCB7XG4gICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogcmVxdWVzdFBheWxvYWRcbiAgICB9KS5waXBlKFxuICAgICAgdGFwKCh7IHRvdGFsQ291bnQsIHJlc3VsdHMsIGZhY2V0cyB9KSA9PiB7XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gICAgICAgIGxldCByZXN1bHRzVGl0bGVJbmRleCA9IDA7XG4gICAgICAgIC8vIHJlc3VsdHMgdGl0bGVcbiAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCA+IDEpIHtcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbENvdW50ID09PSAxKSB7XG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXggPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0c1RpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2VhcmNoLWxheW91dCcpLnJlc3VsdHNbXG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXhcbiAgICAgICAgXTtcblxuICAgICAgICAvLyBmYWNldHMgbGFiZWxzXG4gICAgICAgIHRoaXMuX2FkZEZhY2V0c0xhYmVscyhmYWNldHMpO1xuICAgICAgICAvLyBmYWNldHMgb3B0aW9uc1xuICAgICAgICB0aGlzLl9hZGRGYWNldHNPcHRpb25zKGZhY2V0cyk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGYWNldHMoZmFjZXRzKTtcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVUb3RhbENvdW50KHRvdGFsQ291bnQpO1xuXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIGNvbnRleHQ6ICdzZWFyY2gnLFxuICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgICBkeW5hbWljUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgdG90YWw6IHRvdGFsQ291bnRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemU6IHRoaXMucGFnZVNpemVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuX25vcm1hbGl6ZUl0ZW1zKHJlc3VsdHMuaXRlbXMpIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU2VhcmNoUGFnZShwYWdlKSB7XG4gICAgaWYgKCtwYWdlID09PSB0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArcGFnZTtcblxuICAgIGNvbnN0IHNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0Q29uZmlnKCksXG4gICAgICBwYWdlQ29uZmlnID0gc2VhcmNoQ29uZmlnLnBhZ2UsXG4gICAgICB7IGxpbWl0IH0gPSBwYWdlQ29uZmlnLFxuICAgICAgbmV3T2Zmc2V0ID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIGxpbWl0O1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KG5ld09mZnNldCk7XG5cbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRGYWNldHNMYWJlbHMoZmFjZXRzKSB7XG4gICAgZmFjZXRzXG4gICAgICAuZmlsdGVyKGYgPT4gQXJyYXkuaXNBcnJheShmLmRhdGEpKVxuICAgICAgLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKGRhdGFJdGVtID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBkYXRhSXRlbS5sYWJlbDtcbiAgICAgICAgICBkYXRhSXRlbS5sYWJlbCA9IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCB0aGlzLnByZXR0aWZ5TGFiZWxzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRmFjZXRzT3B0aW9ucyhmYWNldHMpIHtcbiAgICBmYWNldHNcbiAgICAgIC5maWx0ZXIoZiA9PiBmLmlkID09PSAncXVlcnktbGlua3MnKVxuICAgICAgLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKGRhdGFJdGVtID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBkYXRhSXRlbS52YWx1ZS5yZXBsYWNlKCcgJywgJy0nKSxcbiAgICAgICAgICAgIGNvbmZpZyA9IHRoaXMuY29uZmlnS2V5c1trZXldO1xuICAgICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIGRhdGFJdGVtLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGljb246IGNvbmZpZy5pY29uLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtrZXl9YFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9ub3JtYWxpemVJdGVtcyhpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5tYXAoc2luZ2xlSXRlbSA9PiAoeyBpdGVtOiB7IC4uLnNpbmdsZUl0ZW0gfSB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9zaWRlYmFyU3RpY2t5Q29udHJvbCgpIHtcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xuXG4gICAgc291cmNlJC5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dPZmZzZXRUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIHdyYXBwZXJPZmZzZXRUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF1bJ29mZnNldFRvcCddO1xuICAgICAgdGhpcy5zaWRlYmFySXNTdGlja3kgPSB3cmFwcGVyT2Zmc2V0VG9wIDw9IHdpbmRvd09mZnNldFRvcDtcbiAgICB9KTtcbiAgfVxufVxuIl19