/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import facetsConfig from './search-facets.config';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import helpers from '../../../common/helpers';
/** @type {?} */
var SEARCH_MODEL_ID = 'aw-search-layout';
var AwSearchLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSearchLayoutDS, _super);
    function AwSearchLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentPage = 1; // pagination value (url param)
        // pagination value (url param)
        _this.pageSize = 10; // linked objects page size
        _this.orderByLabel = 'Ordina per';
        _this.orderByOptions = [
            {
                value: 'text_DESC',
                label: 'Ordine alfabetico (DESC)'
            },
            {
                value: 'text_ASC',
                label: 'Ordine alfabetico (ASC)'
            } /* {
            value: 'score_DESC',
            label: 'Ordine per rilevanza (DESC)'
          }, {
            value: 'score_ASC',
            label: 'Ordine per rilevanza (ASC)'
          }, {
            value: 'date_DESC',
            label: 'Ordina per data (DESC)'
          }, {
            value: 'date_ASC',
            label: 'Ordina per data (ASC)'
          } */
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
        var _this = this;
        var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, communication = _a.communication, search = _a.search;
        this.configuration = configuration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.options = options;
        this.prettifyLabels = this.configuration.get('labels');
        this.configKeys = this.configuration.get('config-keys');
        this.pageTitle = this.configuration.get('search-layout').title;
        if (!this.search.model(SEARCH_MODEL_ID)) {
            this.search.add(SEARCH_MODEL_ID, facetsConfig);
        }
        this.searchModel = this.search.model(SEARCH_MODEL_ID);
        this.doSearchRequest$().subscribe((/**
         * @return {?}
         */
        function () {
            _this.one('facets-wrapper').update({ searchModel: _this.searchModel });
        }));
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
    return AwSearchLayoutDS;
}(LayoutDataSource));
export { AwSearchLayoutDS };
if (false) {
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
    AwSearchLayoutDS.prototype.options;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByLabel;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByOptions;
    /** @type {?} */
    AwSearchLayoutDS.prototype.getSearchModelId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtyRCxPQUFPLFlBQVksTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQzs7SUFFeEMsZUFBZSxHQUFHLGtCQUFrQjtBQUUxQztJQUFzQyw0Q0FBZ0I7SUFBdEQ7UUFBQSxxRUE0TEM7UUFoTFEsaUJBQVcsR0FBUSxDQUFDLENBQUMsQ0FBQywrQkFBK0I7O1FBQ3JELGNBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQywyQkFBMkI7UUFJMUMsa0JBQVksR0FBRyxZQUFZLENBQUM7UUFDNUIsb0JBQWMsR0FBUTtZQUMzQjtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLDBCQUEwQjthQUNsQztZQUNEO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixLQUFLLEVBQUUseUJBQXlCO2FBQ2pDLENBQUM7Ozs7Ozs7Ozs7OztjQVlBO1NBQ0gsQ0FBQztRQWlESyxzQkFBZ0I7OztRQUFHLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxFQUFDOztJQW9HbEQsQ0FBQzs7Ozs7SUFuSkMsaUNBQU07Ozs7SUFBTixVQUFPLEVBQTREO1FBQW5FLGlCQW1CQztZQW5CUSxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsb0JBQU8sRUFBRSxnQ0FBYSxFQUFFLGtCQUFNO1FBQy9ELElBQUksQ0FBQyxhQUFhLEdB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O0lBQzVCLHNDQUF3Qjs7SUFFeEIscUNBQXlCOztJQUN6Qix3Q0FBNEI7O0lBQzVCLHNDQUEwQjs7SUFDMUIsdUNBQTRCOztJQUM1QixvQ0FBcUI7O0lBRXJCLG1DQUFvQjs7SUFFcEIsd0NBQW1DOztJQUNuQywwQ0FxQkU7O0lBaURGLDRDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQge1xuICBTZWFyY2hTZXJ2aWNlLFxuICBTZWFyY2hNb2RlbFxufSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMnO1xuaW1wb3J0IGZhY2V0c0NvbmZpZyBmcm9tICcuL3NlYXJjaC1mYWNldHMuY29uZmlnJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmNvbnN0IFNFQVJDSF9NT0RFTF9JRCA9ICdhdy1zZWFyY2gtbGF5b3V0JztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuICBwcml2YXRlIHNlYXJjaDogU2VhcmNoU2VydmljZTtcbiAgcHJpdmF0ZSBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG4gIHByaXZhdGUgcHJldHRpZnlMYWJlbHM6IGFueTtcbiAgcHJpdmF0ZSBjb25maWdLZXlzOiBhbnk7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgcmVzdWx0c1RpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyB0b3RhbENvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55ID0gMTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuICBwdWJsaWMgcGFnZVNpemUgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgb3JkZXJCeUxhYmVsID0gJ09yZGluYSBwZXInO1xuICBwdWJsaWMgb3JkZXJCeU9wdGlvbnM6IGFueSA9IFtcbiAgICB7XG4gICAgICB2YWx1ZTogJ3RleHRfREVTQycsXG4gICAgICBsYWJlbDogJ09yZGluZSBhbGZhYmV0aWNvIChERVNDKSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAndGV4dF9BU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoQVNDKSdcbiAgICB9IC8qIHtcbiAgICB2YWx1ZTogJ3Njb3JlX0RFU0MnLFxuICAgIGxhYmVsOiAnT3JkaW5lIHBlciByaWxldmFuemEgKERFU0MpJ1xuICB9LCB7XG4gICAgdmFsdWU6ICdzY29yZV9BU0MnLFxuICAgIGxhYmVsOiAnT3JkaW5lIHBlciByaWxldmFuemEgKEFTQyknXG4gIH0sIHtcbiAgICB2YWx1ZTogJ2RhdGVfREVTQycsXG4gICAgbGFiZWw6ICdPcmRpbmEgcGVyIGRhdGEgKERFU0MpJ1xuICB9LCB7XG4gICAgdmFsdWU6ICdkYXRlX0FTQycsXG4gICAgbGFiZWw6ICdPcmRpbmEgcGVyIGRhdGEgKEFTQyknXG4gIH0gKi9cbiAgXTtcblxuICBvbkluaXQoeyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIG9wdGlvbnMsIGNvbW11bmljYXRpb24sIHNlYXJjaCB9KSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5wcmV0dGlmeUxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xuICAgIHRoaXMuY29uZmlnS2V5cyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyk7XG5cbiAgICB0aGlzLnBhZ2VUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NlYXJjaC1sYXlvdXQnKS50aXRsZTtcblxuICAgIGlmICghdGhpcy5zZWFyY2gubW9kZWwoU0VBUkNIX01PREVMX0lEKSkge1xuICAgICAgdGhpcy5zZWFyY2guYWRkKFNFQVJDSF9NT0RFTF9JRCwgZmFjZXRzQ29uZmlnKTtcbiAgICB9XG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9IHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCk7XG5cbiAgICB0aGlzLmRvU2VhcmNoUmVxdWVzdCQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5vbmUoJ2ZhY2V0cy13cmFwcGVyJykudXBkYXRlKHsgc2VhcmNoTW9kZWw6IHRoaXMuc2VhcmNoTW9kZWwgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCkge1xuICAgIGNvbnN0IFtvcmRlckJ5LCBkaXJlY3Rpb25dID0gcGF5bG9hZC5zcGxpdCgnXycpO1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gIH1cblxuICBvblBhZ2luYXRpb25DaGFuZ2UocGF5bG9hZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHBhZ2UgPSBwYXlsb2FkLnJlcGxhY2UoJ3BhZ2UtJywgJycpO1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uR29Ub0NoYW5nZShwYXlsb2FkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSk7XG4gIH1cblxuICBvblJlc3VsdHNMaW1pdENoYW5nZShwYXlsb2FkKSB7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHBheWxvYWQ7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnTGltaXQocGF5bG9hZCk7XG5cbiAgICAvLyByZXNldCBwYWdlICYgb2Zmc2V0XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KDApO1xuICB9XG5cbiAgcHVibGljIGdldFNlYXJjaE1vZGVsSWQgPSAoKSA9PiBTRUFSQ0hfTU9ERUxfSUQ7XG5cbiAgcHVibGljIGRvU2VhcmNoUmVxdWVzdCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG4gICAgY29uc3QgcmVxdWVzdFBheWxvYWQgPSB7XG4gICAgICBzZWFyY2hQYXJhbWV0ZXJzOiB7XG4gICAgICAgIC8vIEZJWE1FOiB0b2dsaWVyZSB0b3RhbENvdW50XG4gICAgICAgIHRvdGFsQ291bnQ6IDEwMCxcbiAgICAgICAgLi4ucmVxdWVzdFBhcmFtc1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnc2VhcmNoJywge1xuICAgICAgb25FcnJvcjogZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHJlcXVlc3RQYXlsb2FkXG4gICAgfSkucGlwZShcbiAgICAgIHRhcCgoeyB0b3RhbENvdW50LCByZXN1bHRzLCBmYWNldHMgfSkgPT4ge1xuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICAgICAgICBsZXQgcmVzdWx0c1RpdGxlSW5kZXggPSAwO1xuICAgICAgICAvLyByZXN1bHRzIHRpdGxlXG4gICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnQgPiAxKSB7XG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXggPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG90YWxDb3VudCA9PT0gMSkge1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4ID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHNUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NlYXJjaC1sYXlvdXQnKS5yZXN1bHRzW1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4XG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gZmFjZXRzIGxhYmVsc1xuICAgICAgICB0aGlzLl9hZGRGYWNldHNMYWJlbHMoZmFjZXRzKTtcbiAgICAgICAgLy8gZmFjZXRzIG9wdGlvbnNcbiAgICAgICAgdGhpcy5fYWRkRmFjZXRzT3B0aW9ucyhmYWNldHMpO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmFjZXRzKGZhY2V0cyk7XG4gICAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlVG90YWxDb3VudCh0b3RhbENvdW50KTtcblxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICBjb250ZXh0OiAnc2VhcmNoJyxcbiAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgIHRvdGFsOiB0b3RhbENvdW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLl9ub3JtYWxpemVJdGVtcyhyZXN1bHRzLml0ZW1zKSB9KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSkge1xuICAgIGlmICgrcGFnZSA9PT0gdGhpcy5jdXJyZW50UGFnZSkge1xuICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gK3BhZ2U7XG5cbiAgICBjb25zdCBzZWFyY2hDb25maWcgPSB0aGlzLnNlYXJjaE1vZGVsLmdldENvbmZpZygpLFxuICAgICAgcGFnZUNvbmZpZyA9IHNlYXJjaENvbmZpZy5wYWdlLFxuICAgICAgeyBsaW1pdCB9ID0gcGFnZUNvbmZpZyxcbiAgICAgIG5ld09mZnNldCA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiBsaW1pdDtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldChuZXdPZmZzZXQpO1xuXG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRmFjZXRzTGFiZWxzKGZhY2V0cykge1xuICAgIGZhY2V0c1xuICAgICAgLmZpbHRlcihmID0+IEFycmF5LmlzQXJyYXkoZi5kYXRhKSlcbiAgICAgIC5mb3JFYWNoKGYgPT4ge1xuICAgICAgICBmLmRhdGEuZm9yRWFjaChkYXRhSXRlbSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gZGF0YUl0ZW0ubGFiZWw7XG4gICAgICAgICAgZGF0YUl0ZW0ubGFiZWwgPSBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgdGhpcy5wcmV0dGlmeUxhYmVsc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEZhY2V0c09wdGlvbnMoZmFjZXRzKSB7XG4gICAgZmFjZXRzXG4gICAgICAuZmlsdGVyKGYgPT4gZi5pZCA9PT0gJ3F1ZXJ5LWxpbmtzJylcbiAgICAgIC5mb3JFYWNoKGYgPT4ge1xuICAgICAgICBmLmRhdGEuZm9yRWFjaChkYXRhSXRlbSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gZGF0YUl0ZW0udmFsdWUucmVwbGFjZSgnICcsICctJyksXG4gICAgICAgICAgICBjb25maWcgPSB0aGlzLmNvbmZpZ0tleXNba2V5XTtcbiAgICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICBkYXRhSXRlbS5vcHRpb25zID0ge1xuICAgICAgICAgICAgICBpY29uOiBjb25maWcuaWNvbixcbiAgICAgICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7a2V5fWBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbm9ybWFsaXplSXRlbXMoaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXMubWFwKHNpbmdsZUl0ZW0gPT4gKHsgaXRlbTogeyAuLi5zaW5nbGVJdGVtIH0gfSkpO1xuICB9XG59XG4iXX0=