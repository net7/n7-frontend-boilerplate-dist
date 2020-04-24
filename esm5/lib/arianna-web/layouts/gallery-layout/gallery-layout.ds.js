/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { SearchService } from '../../../common/services';
import { tap, takeUntil } from 'rxjs/operators';
import { of, fromEvent, Subject } from 'rxjs';
import { cloneDeep } from 'lodash';
import facetsConfig from './gallery-facets.config';
import helpers from '../../../common/helpers';
/** @type {?} */
var SEARCH_MODEL_ID = 'aw-gallery-layout';
var AwGalleryLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwGalleryLayoutDS, _super);
    function AwGalleryLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.pageTitle = 'Galleria';
        _this.sidebarIsSticky = true;
        _this.currentPage = 1; // pagination value (url param)
        // pagination value (url param)
        _this.pageSize = 12; // linked objects page size
        // linked objects page size
        _this.isFirstLoading = true; // initial URL check
        // initial URL check
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
        _this.totalCount = 12;
        _this.resultsTitle = 'Risultati';
        _this.resetButtonEnabled = true;
        _this.getGalleryModelId = (/**
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
        this.fallback = this.configuration.get('search-layout').fallback;
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
        this.one('aw-gallery-results').updateOptions({
            currentPage: this.currentPage,
            pageSize: this.pageSize,
        });
        this.one('aw-gallery-results').update(null);
        this.mainState.updateCustom('currentNav', 'galleria');
        this.mainState.update('headTitle', 'Arianna Web > Galleria');
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
    AwGalleryLayoutDS.prototype.onGalleryResponse = /**
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
    AwGalleryLayoutDS.prototype.onOrderByChange = /**
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
    AwGalleryLayoutDS.prototype.onPaginationChange = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var page = payload.replace('page-', '').replace('goto-', '');
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
        this.pageSize = payload;
        this.searchModel.setPageConfigLimit(payload);
        // reset page & offset
        this.currentPage = 1;
        this.searchModel.setPageConfigOffset(0);
    };
    /**
     * @return {?}
     */
    AwGalleryLayoutDS.prototype.doGalleryRequest$ = /**
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
            // this.one('aw-linked-objects').update({ items: this._normalizeItems(results.items) });
            _this.one('aw-gallery-results').updateOptions({
                currentPage: _this.currentPage,
                pageSize: _this.pageSize,
            });
            _this.one('aw-gallery-results').update(null);
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
    AwGalleryLayoutDS.prototype.pageTitle;
    /**
     * @type {?}
     * @private
     */
    AwGalleryLayoutDS.prototype.sidebarIsSticky;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.currentPage;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.pageSize;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.isFirstLoading;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.orderByLabel;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.orderByOptions;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.totalCount;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.resultsTitle;
    /** @type {?} */
    AwGalleryLayoutDS.prototype.options;
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
    AwGalleryLayoutDS.prototype.getGalleryModelId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFDTCxhQUFhLEVBRWQsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBYyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ25DLE9BQU8sWUFBWSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDOztJQUV4QyxlQUFlLEdBQUcsbUJBQW1CO0FBRzNDO0lBQXVDLDZDQUFnQjtJQUF2RDtRQUFBLHFFQTROQztRQTNOUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTXpDLGVBQVMsR0FBVyxVQUFVLENBQUE7UUFDOUIscUJBQWUsR0FBWSxJQUFJLENBQUE7UUFDaEMsaUJBQVcsR0FBUSxDQUFDLENBQUMsQ0FBQywrQkFBK0I7O1FBQ3JELGNBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQywyQkFBMkI7O1FBQzFDLG9CQUFjLEdBQUcsSUFBSSxDQUFDLENBQUMsb0JBQW9COztRQUMzQyxrQkFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QixvQkFBYyxHQUFRO1lBQzNCO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUseUJBQXlCO2FBQ2pDO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFlBQVk7Z0JB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QUMsRUFBRSxJQUFJLHVCQUFPLFVBQVUsQ0FBRSxFQUFFLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRU8saURBQXFCOzs7O0lBQTdCO1FBQUEsaUJBVUM7O1lBVE8sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1FBRTNDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7UUFBQzs7Z0JBQ0osZUFBZSxHQUFHLE1BQU0sQ0FBQyxXQUFXOztnQkFDeEMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNyRixLQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixJQUFJLGVBQWUsQ0FBQztRQUM3RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUE1TkQsQ0FBdUMsZ0JBQWdCLEdBNE50RDs7Ozs7OztJQTNOQyx1Q0FBaUQ7Ozs7O0lBQ2pELDBDQUEyQjs7Ozs7SUFDM0IsMENBQTJCOzs7OztJQUMzQixzQ0FBdUI7Ozs7O0lBQ3ZCLG1DQUE4Qjs7Ozs7SUFDOUIsd0NBQWlDOzs7OztJQUNqQyxzQ0FBc0M7Ozs7O0lBQ3RDLDRDQUF1Qzs7SUFDdkMsd0NBQTRCOztJQUM1QixxQ0FBcUI7O0lBQ3JCLDJDQUE2Qjs7SUFDN0IseUNBQW1DOztJQUNuQywyQ0FTRTs7SUFDRix1Q0FBOEI7O0lBQzlCLHlDQUF5Qzs7SUFDekMsb0NBQW1COzs7OztJQUNuQiwyQ0FBNEI7Ozs7O0lBQzVCLHVDQUF3Qjs7Ozs7SUFDeEIscUNBQXlCOzs7OztJQUN6QiwrQ0FBa0M7O0lBMEVsQyw4Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHtcbiAgU2VhcmNoU2VydmljZSxcbiAgU2VhcmNoTW9kZWxcbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzJztcbmltcG9ydCB7IHRhcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBmYWNldHNDb25maWcgZnJvbSAnLi9nYWxsZXJ5LWZhY2V0cy5jb25maWcnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5jb25zdCBTRUFSQ0hfTU9ERUxfSUQgPSAnYXctZ2FsbGVyeS1sYXlvdXQnO1xuXG5cbmV4cG9ydCBjbGFzcyBBd0dhbGxlcnlMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2U7XG4gIHByaXZhdGUgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsO1xuICBwcml2YXRlIHBhZ2VUaXRsZTogc3RyaW5nID0gJ0dhbGxlcmlhJ1xuICBwcml2YXRlIHNpZGViYXJJc1N0aWNreTogYm9vbGVhbiA9IHRydWVcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBhbnkgPSAxOyAvLyBwYWdpbmF0aW9uIHZhbHVlICh1cmwgcGFyYW0pXG4gIHB1YmxpYyBwYWdlU2l6ZSA9IDEyOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcbiAgcHVibGljIGlzRmlyc3RMb2FkaW5nID0gdHJ1ZTsgLy8gaW5pdGlhbCBVUkwgY2hlY2tcbiAgcHVibGljIG9yZGVyQnlMYWJlbCA9ICdPcmRpbmEgcGVyJztcbiAgcHVibGljIG9yZGVyQnlPcHRpb25zOiBhbnkgPSBbXG4gICAge1xuICAgICAgdmFsdWU6ICdsYWJlbF9BU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoQeKGklopJ1xuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6ICdsYWJlbF9ERVNDJyxcbiAgICAgIGxhYmVsOiAnT3JkaW5lIGFsZmFiZXRpY28gKFrihpJBKSdcbiAgICB9XG4gIF07XG4gIHB1YmxpYyB0b3RhbENvdW50OiBudW1iZXIgPSAxMlxuICBwdWJsaWMgcmVzdWx0c1RpdGxlOiBzdHJpbmcgPSAnUmlzdWx0YXRpJ1xuICBwdWJsaWMgb3B0aW9uczogYW55XG4gIHByaXZhdGUgcHJldHRpZnlMYWJlbHM6IGFueTtcbiAgcHJpdmF0ZSBjb25maWdLZXlzOiBhbnk7XG4gIHByaXZhdGUgZmFsbGJhY2s6IHN0cmluZztcbiAgcHJpdmF0ZSByZXNldEJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuXG4gIG9uSW5pdCh7IGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgY29tbXVuaWNhdGlvbiwgc2VhcmNoIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnByZXR0aWZ5TGFiZWxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyk7XG4gICAgdGhpcy5jb25maWdLZXlzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKTtcbiAgICB0aGlzLmZhbGxiYWNrID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2VhcmNoLWxheW91dCcpLmZhbGxiYWNrO1xuXG4gICAgLy8gcmVtb3ZlIGZpcnN0XG4gICAgLy8gc3RhdGVsZXNzIHNlYXJjaFxuICAgIGlmICh0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfTU9ERUxfSUQpKSB7XG4gICAgICB0aGlzLnNlYXJjaC5yZW1vdmUoU0VBUkNIX01PREVMX0lEKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaC5hZGQoU0VBUkNIX01PREVMX0lELCBjbG9uZURlZXAoZmFjZXRzQ29uZmlnKSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9IHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCk7XG5cbiAgICAvLyBxdWVyeSBwYXJhbXMgY29udHJvbFxuICAgIGlmIChTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyk7XG4gICAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm9uZSgnYXctZ2FsbGVyeS1yZXN1bHRzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgIH0pXG4gICAgdGhpcy5vbmUoJ2F3LWdhbGxlcnktcmVzdWx0cycpLnVwZGF0ZShudWxsKVxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdnYWxsZXJpYScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gR2FsbGVyaWEnKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgfVxuXG4gIG9uR2FsbGVyeVJlc3BvbnNlKCkge1xuICAgIHRoaXMucmVzZXRCdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0ZpcnN0TG9hZGluZykge1xuICAgICAgdGhpcy5pc0ZpcnN0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5vbmUoJ2ZhY2V0cy13cmFwcGVyJykudXBkYXRlKHsgc2VhcmNoTW9kZWw6IHRoaXMuc2VhcmNoTW9kZWwgfSk7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgb25PcmRlckJ5Q2hhbmdlKHBheWxvYWQpIHtcbiAgICBjb25zdCBbb3JkZXJCeSwgZGlyZWN0aW9uXSA9IHBheWxvYWQuc3BsaXQoJ18nKTtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnT3JkZXJCeShvcmRlckJ5KTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2hhbmdlKHBheWxvYWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBwYWdlID0gcGF5bG9hZC5yZXBsYWNlKCdwYWdlLScsICcnKS5yZXBsYWNlKCdnb3RvLScsICcnKTtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZShwYWdlKTtcbiAgfVxuXG4gIHJlc2V0UGFnaW5hdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKDEpO1xuICB9XG5cbiAgb25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZCkge1xuICAgIHRoaXMucGFnZVNpemUgPSBwYXlsb2FkO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ0xpbWl0KHBheWxvYWQpO1xuXG4gICAgLy8gcmVzZXQgcGFnZSAmIG9mZnNldFxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldCgwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRHYWxsZXJ5TW9kZWxJZCA9ICgpID0+IFNFQVJDSF9NT0RFTF9JRDtcblxuICBwdWJsaWMgZG9HYWxsZXJ5UmVxdWVzdCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG4gICAgY29uc3QgcmVxdWVzdFBheWxvYWQgPSB7XG4gICAgICBzZWFyY2hQYXJhbWV0ZXJzOiB7XG4gICAgICAgIC8vIEZJWE1FOiB0b2dsaWVyZSB0b3RhbENvdW50XG4gICAgICAgIHRvdGFsQ291bnQ6IDEwMCxcbiAgICAgICAgLi4ucmVxdWVzdFBhcmFtc1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnc2VhcmNoJywge1xuICAgICAgb25FcnJvcjogZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHJlcXVlc3RQYXlsb2FkXG4gICAgfSkucGlwZShcbiAgICAgIHRhcCgoeyB0b3RhbENvdW50LCByZXN1bHRzLCBmYWNldHMgfSkgPT4ge1xuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICAgICAgICBsZXQgcmVzdWx0c1RpdGxlSW5kZXggPSAwO1xuICAgICAgICAvLyByZXN1bHRzIHRpdGxlXG4gICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnQgPiAxKSB7XG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXggPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG90YWxDb3VudCA9PT0gMSkge1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4ID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHNUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NlYXJjaC1sYXlvdXQnKS5yZXN1bHRzW1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4XG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gZmFjZXRzIGxhYmVsc1xuICAgICAgICB0aGlzLl9hZGRGYWNldHNMYWJlbHMoZmFjZXRzKTtcbiAgICAgICAgLy8gZmFjZXRzIG9wdGlvbnNcbiAgICAgICAgdGhpcy5fYWRkRmFjZXRzT3B0aW9ucyhmYWNldHMpO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmFjZXRzKGZhY2V0cyk7XG4gICAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlVG90YWxDb3VudCh0b3RhbENvdW50KTtcblxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICBjb250ZXh0OiAnc2VhcmNoJyxcbiAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgIHRvdGFsOiB0b3RhbENvdW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLl9ub3JtYWxpemVJdGVtcyhyZXN1bHRzLml0ZW1zKSB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWdhbGxlcnktcmVzdWx0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWdhbGxlcnktcmVzdWx0cycpLnVwZGF0ZShudWxsKVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU2VhcmNoUGFnZShwYWdlKSB7XG4gICAgaWYgKCtwYWdlID09PSB0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArcGFnZTtcblxuICAgIGNvbnN0IHNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0Q29uZmlnKCksXG4gICAgICBwYWdlQ29uZmlnID0gc2VhcmNoQ29uZmlnLnBhZ2UsXG4gICAgICB7IGxpbWl0IH0gPSBwYWdlQ29uZmlnLFxuICAgICAgbmV3T2Zmc2V0ID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIGxpbWl0O1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KG5ld09mZnNldCk7XG5cbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRGYWNldHNMYWJlbHMoZmFjZXRzKSB7XG4gICAgZmFjZXRzXG4gICAgICAuZmlsdGVyKGYgPT4gQXJyYXkuaXNBcnJheShmLmRhdGEpKVxuICAgICAgLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKGRhdGFJdGVtID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBkYXRhSXRlbS5sYWJlbDtcbiAgICAgICAgICBkYXRhSXRlbS5sYWJlbCA9IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCB0aGlzLnByZXR0aWZ5TGFiZWxzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRmFjZXRzT3B0aW9ucyhmYWNldHMpIHtcbiAgICBmYWNldHNcbiAgICAgIC5maWx0ZXIoZiA9PiBmLmlkID09PSAncXVlcnktbGlua3MnKVxuICAgICAgLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKGRhdGFJdGVtID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBkYXRhSXRlbS52YWx1ZS5yZXBsYWNlKCcgJywgJy0nKSxcbiAgICAgICAgICAgIGNvbmZpZyA9IHRoaXMuY29uZmlnS2V5c1trZXldO1xuICAgICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIGRhdGFJdGVtLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGljb246IGNvbmZpZy5pY29uLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtrZXl9YFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9ub3JtYWxpemVJdGVtcyhpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5tYXAoc2luZ2xlSXRlbSA9PiAoeyBpdGVtOiB7IC4uLnNpbmdsZUl0ZW0gfSB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9zaWRlYmFyU3RpY2t5Q29udHJvbCgpIHtcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xuXG4gICAgc291cmNlJC5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dPZmZzZXRUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIHdyYXBwZXJPZmZzZXRUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGlja3ktcGFyZW50JylbMF1bJ29mZnNldFRvcCddO1xuICAgICAgdGhpcy5zaWRlYmFySXNTdGlja3kgPSB3cmFwcGVyT2Zmc2V0VG9wIDw9IHdpbmRvd09mZnNldFRvcDtcbiAgICB9KTtcbiAgfVxufVxuIl19