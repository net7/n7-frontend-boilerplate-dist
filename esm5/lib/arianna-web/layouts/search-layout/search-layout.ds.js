/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import facetsConfig from './search-facets.config';
import fakeSearchRequest$ from './search-mock-request';
import { withLatestFrom, tap } from 'rxjs/operators';
import { of } from 'rxjs';
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
        _this.orderByOptions = [{
                value: 'text_DESC',
                label: 'Ordine alfabetico (DESC)'
            }, {
                value: 'text_ASC',
                label: 'Ordine alfabetico (ASC)'
            },
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
        this.pageTitle = this.configuration.get('search-layout').title;
        if (!this.search.model(SEARCH_MODEL_ID))
            this.search.add(SEARCH_MODEL_ID, facetsConfig);
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
        this._updateSearchPage(page);
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
        var enabledEntities = this.configuration.get('search-layout').enabledEntities;
        // FIXME: togliere configKeys
        // dovrebbe venire dall'API
        /** @type {?} */
        var configKeys = this.configuration.get('config-keys');
        // FIXME: mettere logica definitiva 
        // per la chiamata search
        /*
            this.communication.request$('search', {
              onError: error => console.error(error),
              params: requestParams
            })
            */
        /** @type {?} */
        var requestParams = this.searchModel.getRequestParams();
        /** @type {?} */
        var fakeResultsRequest$ = this.communication.request$('getEntityDetails', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: { entityId: '0263a407-d0dd-4647-98e2-109b0b0c05f3' }
        });
        return fakeResultsRequest$.pipe(withLatestFrom(fakeSearchRequest$(requestParams, configKeys, enabledEntities)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), resultsResponse = _b[0], searchResponse = _b[1];
            _this.totalCount = searchResponse.totalCount;
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
            _this.searchModel.updateFacets(searchResponse.facets);
            _this.searchModel.updateTotalCount(searchResponse.totalCount);
            _this.one('aw-linked-objects').updateOptions({
                context: 'search',
                config: _this.configuration,
                // todo: swap to next line after merge
                // config: this.configuration
                page: _this.currentPage,
                size: _this.pageSize,
            });
            _this.one('aw-linked-objects').update({ items: resultsResponse.items });
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
        if (+page === this.currentPage)
            return of(false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRCxPQUFPLFlBQVksTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLGtCQUFrQixNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFFaEMsZUFBZSxHQUFHLGtCQUFrQjtBQUUxQztJQUFzQyw0Q0FBZ0I7SUFBdEQ7UUFBQSxxRUFtSkM7UUF6SVEsaUJBQVcsR0FBUSxDQUFDLENBQUMsQ0FBQywrQkFBK0I7O1FBQ3JELGNBQVEsR0FBVyxFQUFFLENBQUMsQ0FBQywyQkFBMkI7UUFJbEQsa0JBQVksR0FBVyxZQUFZLENBQUM7UUFDcEMsb0JBQWMsR0FBUSxDQUFDO2dCQUM1QixLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLDBCQUEwQjthQUNsQyxFQUFFO2dCQUNELEtBQUssRUFBRSxVQUFVO2dCQUNqQixLQUFLLEVBQUUseUJBQXlCO2FBQ2pDO1NBWUksQ0FBQztRQTZDQyxzQkFBZ0I7OztRQUFHLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxFQUFDOztJQW9FbEQsQ0FBQzs7Ozs7SUEvR0MsaUNBQU07Ozs7SUFBTixVQUFPLEVBQTJEO1FBQWxFLGlCQWVDO1lBZk8sZ0NBQWEsRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsZ0NBQWEsRUFBRSxrQkFBTTtRQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUUvRCxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsU0FBUzs7O1FBQUM7WUFDaEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsMENBQWU7Ozs7SUFBZixVQUFnQixPQUFPO1FBQ2YsSUFBQSwwQ0FBeUMsRUFBeEMsZUFBTyxFQUFFLGlCQUErQjtRQUUvQyxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCw2Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsT0FBTzs7WUFDbEIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELGlEQUFzQjs7OztJQUF0QixVQUF1QixPQUFPOztZQUN0QixJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELCtDQUFvQjs7OztJQUFwQixVQUFxQixPQUFPO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0Msc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUlNLDJDQUFnQjs7O0lBQXZCO1FBQUEsaUJBa0RDOztZQWpETyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsZUFBZTs7OztZQUd6RSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDOzs7Ozs7Ozs7O1lBV2xELGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFOztZQUVuRCxtQkFBbUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtZQUMxRSxPQUFPOzs7O1lBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFBO1lBQ3RDLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxzQ0FBc0MsRUFBRTtTQUM3RCxDQUFDO1FBRUYsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQzdCLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDLEVBQzlFLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQWlDO2dCQUFqQywwQkFBaUMsRUFBaEMsdUJBQWUsRUFBRSxzQkFBYztZQUNuQyxLQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7O2dCQUN4QyxpQkFBaUIsR0FBRyxDQUFDO1lBQ3pCLGdCQUFnQjtZQUNoQixJQUFHLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFDO2dCQUNyQixpQkFBaUIsR0FBRyxDQUFDLENBQUM7YUFDdkI7aUJBQU0sSUFBRyxLQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtnQkFDL0IsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUV2RixLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFN0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLE1BQU0sRUFBRSxLQUFJLENBQUMsYUFBYTs7O2dCQUcxQixJQUFJLEVBQUUsS0FBSSxDQUFDLFdBQVc7Z0JBQ3RCLElBQUksRUFBRSxLQUFJLENBQUMsUUFBUTthQUNwQixDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyw0Q0FBaUI7Ozs7O0lBQXpCLFVBQTBCLElBQUk7UUFDNUIsSUFBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUM7O1lBRW5CLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTs7WUFDL0MsVUFBVSxHQUFHLFlBQVksQ0FBQyxJQUFJO1FBQzVCLElBQUEsd0JBQUs7O1lBQ1AsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLO1FBRTVDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQW5KRCxDQUFzQyxnQkFBZ0IsR0FtSnJEOzs7Ozs7O0lBbEpDLHlDQUEyQjs7Ozs7SUFDM0IseUNBQTJCOzs7OztJQUMzQixxQ0FBdUI7Ozs7O0lBQ3ZCLGtDQUE4Qjs7Ozs7SUFDOUIsdUNBQWlDOztJQUVqQyxxQ0FBeUI7O0lBQ3pCLHdDQUE0Qjs7SUFDNUIsc0NBQTBCOztJQUMxQix1Q0FBNEI7O0lBQzVCLG9DQUE2Qjs7SUFFN0IsbUNBQW9COztJQUVwQix3Q0FBMkM7O0lBQzNDLDBDQWtCTTs7SUE2Q04sNENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UsIFNlYXJjaE1vZGVsIH0gZnJvbSAnbjctYm9pbGVycGxhdGUtbGliL2xpYi9jb21tb24vc2VydmljZXMnO1xuaW1wb3J0IGZhY2V0c0NvbmZpZyBmcm9tICcuL3NlYXJjaC1mYWNldHMuY29uZmlnJztcbmltcG9ydCBmYWtlU2VhcmNoUmVxdWVzdCQgZnJvbSAnLi9zZWFyY2gtbW9jay1yZXF1ZXN0JztcbmltcG9ydCB7IHdpdGhMYXRlc3RGcm9tLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBTRUFSQ0hfTU9ERUxfSUQgPSAnYXctc2VhcmNoLWxheW91dCc7XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2U7XG4gIHByaXZhdGUgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsO1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIHJlc3VsdHNUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgdG90YWxDb3VudDogbnVtYmVyO1xuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueSA9IDE7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgb3JkZXJCeUxhYmVsOiBzdHJpbmcgPSAnT3JkaW5hIHBlcic7XG4gIHB1YmxpYyBvcmRlckJ5T3B0aW9uczogYW55ID0gW3tcbiAgICB2YWx1ZTogJ3RleHRfREVTQycsXG4gICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoREVTQyknXG4gIH0sIHtcbiAgICB2YWx1ZTogJ3RleHRfQVNDJyxcbiAgICBsYWJlbDogJ09yZGluZSBhbGZhYmV0aWNvIChBU0MpJ1xuICB9LCAvKiB7XG4gICAgdmFsdWU6ICdzY29yZV9ERVNDJyxcbiAgICBsYWJlbDogJ09yZGluZSBwZXIgcmlsZXZhbnphIChERVNDKSdcbiAgfSwge1xuICAgIHZhbHVlOiAnc2NvcmVfQVNDJyxcbiAgICBsYWJlbDogJ09yZGluZSBwZXIgcmlsZXZhbnphIChBU0MpJ1xuICB9LCB7XG4gICAgdmFsdWU6ICdkYXRlX0RFU0MnLFxuICAgIGxhYmVsOiAnT3JkaW5hIHBlciBkYXRhIChERVNDKSdcbiAgfSwge1xuICAgIHZhbHVlOiAnZGF0ZV9BU0MnLFxuICAgIGxhYmVsOiAnT3JkaW5hIHBlciBkYXRhIChBU0MpJ1xuICB9ICovXTtcblxuICBvbkluaXQoe2NvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgY29tbXVuaWNhdGlvbiwgc2VhcmNoIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIHRoaXMucGFnZVRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2VhcmNoLWxheW91dCcpLnRpdGxlO1xuXG4gICAgaWYoIXRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCkpIHRoaXMuc2VhcmNoLmFkZChTRUFSQ0hfTU9ERUxfSUQsIGZhY2V0c0NvbmZpZyk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9IHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCk7XG5cbiAgICB0aGlzLmRvU2VhcmNoUmVxdWVzdCQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5vbmUoJ2ZhY2V0cy13cmFwcGVyJykudXBkYXRlKHsgc2VhcmNoTW9kZWw6IHRoaXMuc2VhcmNoTW9kZWwgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCl7XG4gICAgY29uc3QgW29yZGVyQnksIGRpcmVjdGlvbl0gPSBwYXlsb2FkLnNwbGl0KCdfJyk7XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFNlYXJjaENvbmZpZ09yZGVyQnkob3JkZXJCeSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRTZWFyY2hDb25maWdEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkNoYW5nZShwYXlsb2FkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgncGFnZS0nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSk7XG4gIH1cblxuICBvblBhZ2luYXRpb25Hb1RvQ2hhbmdlKHBheWxvYWQpe1xuICAgIGNvbnN0IHBhZ2UgPSBwYXlsb2FkLnJlcGxhY2UoJ2dvdG8tJywgJycpO1xuICAgIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSk7XG4gIH1cblxuICBvblJlc3VsdHNMaW1pdENoYW5nZShwYXlsb2FkKXtcbiAgICB0aGlzLnBhZ2VTaXplID0gcGF5bG9hZDtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdMaW1pdChwYXlsb2FkKTtcbiAgICBcbiAgICAvLyByZXNldCBwYWdlICYgb2Zmc2V0XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KDApO1xuICB9XG5cbiAgcHVibGljIGdldFNlYXJjaE1vZGVsSWQgPSAoKSA9PiBTRUFSQ0hfTU9ERUxfSUQ7XG5cbiAgcHVibGljIGRvU2VhcmNoUmVxdWVzdCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBlbmFibGVkRW50aXRpZXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykuZW5hYmxlZEVudGl0aWVzO1xuICAgIC8vIEZJWE1FOiB0b2dsaWVyZSBjb25maWdLZXlzXG4gICAgLy8gZG92cmViYmUgdmVuaXJlIGRhbGwnQVBJXG4gICAgY29uc3QgY29uZmlnS2V5cyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyk7XG5cbiAgICAvLyBGSVhNRTogbWV0dGVyZSBsb2dpY2EgZGVmaW5pdGl2YSBcbiAgICAvLyBwZXIgbGEgY2hpYW1hdGEgc2VhcmNoXG4gICAgLyogXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdzZWFyY2gnLCB7XG4gICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogcmVxdWVzdFBhcmFtc1xuICAgIH0pXG4gICAgKi9cblxuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcblxuICAgIGNvbnN0IGZha2VSZXN1bHRzUmVxdWVzdCQgPSB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyBlbnRpdHlJZDogJzAyNjNhNDA3LWQwZGQtNDY0Ny05OGUyLTEwOWIwYjBjMDVmMycgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZha2VSZXN1bHRzUmVxdWVzdCQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKGZha2VTZWFyY2hSZXF1ZXN0JChyZXF1ZXN0UGFyYW1zLCBjb25maWdLZXlzLCBlbmFibGVkRW50aXRpZXMpKSxcbiAgICAgIHRhcCgoW3Jlc3VsdHNSZXNwb25zZSwgc2VhcmNoUmVzcG9uc2VdKSA9PiB7XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IHNlYXJjaFJlc3BvbnNlLnRvdGFsQ291bnQ7XG4gICAgICAgIGxldCByZXN1bHRzVGl0bGVJbmRleCA9IDA7XG4gICAgICAgIC8vIHJlc3VsdHMgdGl0bGVcbiAgICAgICAgaWYodGhpcy50b3RhbENvdW50ID4gMSl7XG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXggPSAyO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy50b3RhbENvdW50ID09PSAxKSB7XG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXggPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0c1RpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2VhcmNoLWxheW91dCcpLnJlc3VsdHNbcmVzdWx0c1RpdGxlSW5kZXhdO1xuICBcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGYWNldHMoc2VhcmNoUmVzcG9uc2UuZmFjZXRzKTtcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVUb3RhbENvdW50KHNlYXJjaFJlc3BvbnNlLnRvdGFsQ291bnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgY29udGV4dDogJ3NlYXJjaCcsXG4gICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgLy8gdG9kbzogc3dhcCB0byBuZXh0IGxpbmUgYWZ0ZXIgbWVyZ2VcbiAgICAgICAgICAvLyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvblxuICAgICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgICAgfSk7XG4gIFxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogcmVzdWx0c1Jlc3BvbnNlLml0ZW1zIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU2VhcmNoUGFnZShwYWdlKXtcbiAgICBpZigrcGFnZSA9PT0gdGhpcy5jdXJyZW50UGFnZSkgcmV0dXJuIG9mKGZhbHNlKTtcblxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArcGFnZTtcblxuICAgIGNvbnN0IHNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0Q29uZmlnKCksXG4gICAgICBwYWdlQ29uZmlnID0gc2VhcmNoQ29uZmlnLnBhZ2UsXG4gICAgICB7IGxpbWl0IH0gPSBwYWdlQ29uZmlnLFxuICAgICAgbmV3T2Zmc2V0ID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIGxpbWl0O1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KG5ld09mZnNldCk7XG5cbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==