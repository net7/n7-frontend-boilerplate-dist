/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { cloneDeep } from 'lodash';
import { LayoutDataSource } from '@n7-frontend/core';
import { SearchService } from '../../../common/services';
import facetsConfig from './search-facets.config';
import { tap, takeUntil } from 'rxjs/operators';
import { of, fromEvent, Subject } from 'rxjs';
import helpers from '../../../common/helpers';
/** @type {?} */
const SEARCH_MODEL_ID = 'aw-search-layout';
export class AwSearchLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.resetButtonEnabled = true;
        this.currentPage = 1; // pagination value (url param)
        // pagination value (url param)
        this.pageSize = 10; // linked objects page size
        // linked objects page size
        this.sidebarIsSticky = false;
        this.isFirstLoading = true;
        this.resultsLoading = false;
        this.orderBy = 'label_sort';
        this.orderDirection = 'ASC';
        this.orderByLabel = 'Ordina per';
        this.orderByOptions = [
            {
                value: 'label_sort_ASC',
                label: 'Ordine alfabetico (A→Z)',
                selected: true
            },
            {
                value: 'label_sort_DESC',
                label: 'Ordine alfabetico (Z→A)',
                selected: false
            }
        ];
        this.drawPagination = (/**
         * @return {?}
         */
        () => {
            const { href, queryParams } = this._getPaginationParams();
            this.one('n7-smart-pagination').updateOptions({
                mode: 'href',
                href,
                queryParams,
            });
            this.one('n7-smart-pagination').update({
                totalPages: Math.ceil(this.totalCount / this.pageSize),
                currentPage: this.currentPage,
                pageLimit: 5,
                sizes: {
                    list: [10, 25, 50],
                    active: this.pageSize
                }
            });
        });
        this.getSearchModelId = (/**
         * @return {?}
         */
        () => SEARCH_MODEL_ID);
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, options, communication, search }) {
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
    }
    /**
     * @return {?}
     */
    onDestroy() {
        this.destroyed$.next();
        SearchService.queryParams = null;
    }
    /**
     * @return {?}
     */
    onSearchResponse() {
        this.resetButtonEnabled = true;
        if (this.isFirstLoading) {
            this.isFirstLoading = false;
            this.one('facets-wrapper').update({ searchModel: this.searchModel });
            this.searchModel.updateInputsFromFilters();
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onOrderByChange(payload) {
        /** @type {?} */
        const orderBy = payload.substring(0, payload.lastIndexOf("_"));
        /** @type {?} */
        const direction = payload.substring(payload.lastIndexOf("_") + 1);
        // set selected
        this.orderByOptions.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            if (option.value === payload) {
                option.selected = true;
            }
            else {
                option.selected = false;
            }
        }));
        this.orderBy = orderBy;
        this.orderDirection = direction;
        this.searchModel.setSearchConfigOrderBy(orderBy);
        this.searchModel.setSearchConfigDirection(direction);
    }
    /**
     * @param {?} size
     * @return {?}
     */
    onPageSizeChange(size) {
        console.log('on page size change');
        this.pageSize = size;
        return this._updateSearchPage(this.currentPage);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onPaginationChange(payload) {
        /** @type {?} */
        const page = payload.replace('page-', '');
        return this._updateSearchPage(page);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onPaginationGoToChange(payload) {
        /** @type {?} */
        const page = payload.replace('goto-', '');
        return this._updateSearchPage(page);
    }
    /**
     * @return {?}
     */
    resetPagination() {
        this._updateSearchPage(1);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onResultsLimitChange(payload) {
        this.setLimit(payload);
        // reset page & offset
        this.currentPage = 1;
        this.searchModel.setPageConfigOffset(0);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    setLimit(payload) {
        this.pageSize = payload;
        this.searchModel.setPageConfigLimit(payload);
        this.searchModel.setPageConfigOffset((this.currentPage - 1) * this.pageSize);
    }
    /**
     * @return {?}
     */
    doSearchRequest$() {
        /** @type {?} */
        const requestParams = this.searchModel.getRequestParams();
        /** @type {?} */
        const requestPayload = {
            searchParameters: Object.assign({ totalCount: 100 }, requestParams)
        };
        return this.communication.request$('search', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            error => console.error(error)),
            params: requestPayload
        }).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ totalCount, results, facets }) => {
            this.totalCount = totalCount;
            /** @type {?} */
            let resultsTitleIndex = 0;
            // results title
            if (this.totalCount > 1) {
                resultsTitleIndex = 2;
            }
            else if (this.totalCount === 1) {
                resultsTitleIndex = 1;
            }
            this.resultsTitle = this.configuration.get('search-layout').results[resultsTitleIndex];
            // facets labels
            this._addFacetsLabels(facets);
            // facets options
            this._addFacetsOptions(facets);
            this.searchModel.updateFacets(facets);
            this.searchModel.updateTotalCount(totalCount);
            this.one('aw-linked-objects').updateOptions({
                context: 'search',
                config: this.configuration,
                page: this.currentPage,
                pagination: true,
                paginationParams: this._getPaginationParams(),
                dynamicPagination: {
                    total: totalCount
                },
                size: this.pageSize
            });
            this.drawPagination();
            this.one('aw-linked-objects').update({ items: this._normalizeItems(results.items) });
        })));
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    _updateSearchPage(page) {
        if (+page === this.currentPage) {
            return of(false);
        }
        this.currentPage = +page;
        /** @type {?} */
        const searchConfig = this.searchModel.getConfig();
        /** @type {?} */
        const pageConfig = searchConfig.page;
        const { limit } = pageConfig;
        /** @type {?} */
        const newOffset = (this.currentPage - 1) * limit;
        this.searchModel.setPageConfigOffset(newOffset);
        return of(true);
    }
    /**
     * @private
     * @param {?} facets
     * @return {?}
     */
    _addFacetsLabels(facets) {
        facets
            .filter((/**
         * @param {?} f
         * @return {?}
         */
        f => Array.isArray(f.data)))
            .forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            f.data.forEach((/**
             * @param {?} dataItem
             * @return {?}
             */
            dataItem => {
                /** @type {?} */
                const key = dataItem.label;
                dataItem.label = helpers.prettifySnakeCase(key, this.prettifyLabels[key]);
            }));
        }));
    }
    /**
     * @private
     * @param {?} facets
     * @return {?}
     */
    _addFacetsOptions(facets) {
        facets
            .filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f.id === 'query-links'))
            .forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            f.data.forEach((/**
             * @param {?} dataItem
             * @return {?}
             */
            dataItem => {
                /** @type {?} */
                const config = this.configKeys[dataItem.value];
                if (config) {
                    dataItem.options = {
                        icon: config.icon,
                        classes: `color-${config['class-name']}`
                    };
                }
            }));
        }));
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    _normalizeItems(items) {
        return items.map((/**
         * @param {?} singleItem
         * @return {?}
         */
        singleItem => ({ item: Object.assign({}, singleItem) })));
    }
    /**
     * @private
     * @return {?}
     */
    _sidebarStickyControl() {
        // no sticky for Internet Explorer
        if (helpers.browserIsIE()) {
            return;
        }
        /** @type {?} */
        const source$ = fromEvent(window, 'scroll');
        source$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const windowOffsetTop = window.pageYOffset;
            /** @type {?} */
            const wrapperOffsetTop = document.getElementsByClassName('sticky-parent')[0]['offsetTop'];
            this.sidebarIsSticky = wrapperOffsetTop <= windowOffsetTop;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _getPaginationParams() {
        /** @type {?} */
        const requestParams = this.searchModel.getRequestParams();
        /** @type {?} */
        const queryParams = this.searchModel.filtersAsQueryParams(requestParams.filters);
        Object.keys(queryParams).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => queryParams[key] = queryParams[key] || null));
        // aditional params
        queryParams.orderby = this.orderBy;
        queryParams.orderdirection = this.orderDirection;
        queryParams.page = this.currentPage;
        queryParams.limit = this.pageSize;
        return {
            queryParams,
            href: this.configuration.get('paths').searchBasePath
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUNMLGFBQWEsRUFFZCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDOztNQUV4QyxlQUFlLEdBQUcsa0JBQWtCO0FBRTFDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7SUFBdEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBU3pDLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUszQixnQkFBVyxHQUFRLENBQUMsQ0FBQyxDQUFDLCtCQUErQjs7UUFDckQsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFDMUMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsWUFBTyxHQUFHLFlBQVksQ0FBQztRQUN2QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUl2QixpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QixtQkFBYyxHQUFRO1lBQzNCO2dCQUNFLEtBQUss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QUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFDLENBQUM7UUFFckYsbUJBQW1CO1FBQ25CLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxXQUFXLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDakQsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVsQyxPQUFPO1lBQ0wsV0FBVztZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjO1NBQ3JELENBQUM7SUFDSixDQUFDO0NBQ0Y7Ozs7OztJQXBTQyxzQ0FBaUQ7Ozs7O0lBQ2pELHlDQUEyQjs7Ozs7SUFDM0IseUNBQTJCOzs7OztJQUMzQixxQ0FBdUI7Ozs7O0lBQ3ZCLGtDQUE4Qjs7Ozs7SUFDOUIsdUNBQWlDOzs7OztJQUNqQywwQ0FBNEI7Ozs7O0lBQzVCLHNDQUF3Qjs7Ozs7SUFDeEIsb0NBQXlCOzs7OztJQUN6Qiw4Q0FBa0M7O0lBRWxDLHFDQUF5Qjs7SUFDekIsd0NBQTRCOztJQUM1QixzQ0FBMEI7O0lBQzFCLHVDQUE0Qjs7SUFDNUIsb0NBQXFCOztJQUNyQiwyQ0FBK0I7O0lBQy9CLDBDQUE2Qjs7SUFDN0IsMENBQThCOztJQUM5QixtQ0FBOEI7O0lBQzlCLDBDQUE4Qjs7SUFFOUIsbUNBQW9COztJQUVwQix3Q0FBbUM7O0lBQ25DLDBDQVdFOztJQXNGRiwwQ0FnQkM7O0lBb0JELDRDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHtcbiAgU2VhcmNoU2VydmljZSxcbiAgU2VhcmNoTW9kZWxcbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzJztcbmltcG9ydCBmYWNldHNDb25maWcgZnJvbSAnLi9zZWFyY2gtZmFjZXRzLmNvbmZpZyc7XG5pbXBvcnQgeyB0YXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuY29uc3QgU0VBUkNIX01PREVMX0lEID0gJ2F3LXNlYXJjaC1sYXlvdXQnO1xuXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2U7XG4gIHByaXZhdGUgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsO1xuICBwcml2YXRlIHByZXR0aWZ5TGFiZWxzOiBhbnk7XG4gIHByaXZhdGUgY29uZmlnS2V5czogYW55O1xuICBwcml2YXRlIGZhbGxiYWNrOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVzZXRCdXR0b25FbmFibGVkID0gdHJ1ZTtcblxuICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyByZXN1bHRzVGl0bGU6IHN0cmluZztcbiAgcHVibGljIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgcHVibGljIGN1cnJlbnRQYWdlOiBhbnkgPSAxOyAvLyBwYWdpbmF0aW9uIHZhbHVlICh1cmwgcGFyYW0pXG4gIHB1YmxpYyBwYWdlU2l6ZSA9IDEwOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcbiAgcHVibGljIHNpZGViYXJJc1N0aWNreSA9IGZhbHNlO1xuICBwdWJsaWMgaXNGaXJzdExvYWRpbmcgPSB0cnVlO1xuICBwdWJsaWMgcmVzdWx0c0xvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIG9yZGVyQnkgPSAnbGFiZWxfc29ydCc7XG4gIHB1YmxpYyBvcmRlckRpcmVjdGlvbiA9ICdBU0MnO1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnk7XG5cbiAgcHVibGljIG9yZGVyQnlMYWJlbCA9ICdPcmRpbmEgcGVyJztcbiAgcHVibGljIG9yZGVyQnlPcHRpb25zOiBhbnkgPSBbXG4gICAge1xuICAgICAgdmFsdWU6ICdsYWJlbF9zb3J0X0FTQycsXG4gICAgICBsYWJlbDogJ09yZGluZSBhbGZhYmV0aWNvIChB4oaSWiknLFxuICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnbGFiZWxfc29ydF9ERVNDJyxcbiAgICAgIGxhYmVsOiAnT3JkaW5lIGFsZmFiZXRpY28gKFrihpJBKScsXG4gICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICB9XG4gIF07XG5cbiAgb25Jbml0KHsgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCBjb21tdW5pY2F0aW9uLCBzZWFyY2ggfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucHJldHRpZnlMYWJlbHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKTtcbiAgICB0aGlzLmNvbmZpZ0tleXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpO1xuICAgIHRoaXMuZmFsbGJhY2sgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykuZmFsbGJhY2s7XG5cbiAgICB0aGlzLnBhZ2VUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NlYXJjaC1sYXlvdXQnKS50aXRsZTtcblxuICAgIC8vIHJlbW92ZSBmaXJzdFxuICAgIC8vIHN0YXRlbGVzcyBzZWFyY2hcbiAgICBpZiAodGhpcy5zZWFyY2gubW9kZWwoU0VBUkNIX01PREVMX0lEKSkge1xuICAgICAgdGhpcy5zZWFyY2gucmVtb3ZlKFNFQVJDSF9NT0RFTF9JRCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWFyY2guYWRkKFNFQVJDSF9NT0RFTF9JRCwgY2xvbmVEZWVwKGZhY2V0c0NvbmZpZykpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwgPSB0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfTU9ERUxfSUQpO1xuXG4gICAgLy8gcXVlcnkgcGFyYW1zIGNvbnRyb2xcbiAgICBpZiAoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcykge1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpO1xuICAgICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gc2lkZWJhciBzdGlja3kgY29udHJvbFxuICAgIHRoaXMuX3NpZGViYXJTdGlja3lDb250cm9sKCk7XG5cbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAncmljZXJjYScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gUmljZXJjYScpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XG4gIH1cblxuICBvblNlYXJjaFJlc3BvbnNlKCkge1xuICAgIHRoaXMucmVzZXRCdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0ZpcnN0TG9hZGluZykge1xuICAgICAgdGhpcy5pc0ZpcnN0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5vbmUoJ2ZhY2V0cy13cmFwcGVyJykudXBkYXRlKHsgc2VhcmNoTW9kZWw6IHRoaXMuc2VhcmNoTW9kZWwgfSk7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgb25PcmRlckJ5Q2hhbmdlKHBheWxvYWQpIHtcbiAgICBjb25zdCBvcmRlckJ5ID0gcGF5bG9hZC5zdWJzdHJpbmcoIDAsIHBheWxvYWQubGFzdEluZGV4T2YoXCJfXCIpICksXG4gICAgZGlyZWN0aW9uID0gcGF5bG9hZC5zdWJzdHJpbmcoIHBheWxvYWQubGFzdEluZGV4T2YoXCJfXCIpICsgMSApO1xuXG4gICAgLy8gc2V0IHNlbGVjdGVkXG4gICAgdGhpcy5vcmRlckJ5T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBwYXlsb2FkKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5vcmRlckJ5ID0gb3JkZXJCeTtcbiAgICB0aGlzLm9yZGVyRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlKHNpemUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zb2xlLmxvZygnb24gcGFnZSBzaXplIGNoYW5nZScpXG4gICAgdGhpcy5wYWdlU2l6ZSA9IHNpemVcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZSh0aGlzLmN1cnJlbnRQYWdlKVxuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2hhbmdlKHBheWxvYWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBwYWdlID0gcGF5bG9hZC5yZXBsYWNlKCdwYWdlLScsICcnKTtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZShwYWdlKTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkdvVG9DaGFuZ2UocGF5bG9hZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHBhZ2UgPSBwYXlsb2FkLnJlcGxhY2UoJ2dvdG8tJywgJycpO1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpO1xuICB9XG5cbiAgZHJhd1BhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBtb2RlOiAnaHJlZicsXG4gICAgICBocmVmLFxuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgfSlcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy50b3RhbENvdW50IC8gdGhpcy5wYWdlU2l6ZSksXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2VMaW1pdDogNSxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIGxpc3Q6IFsxMCwgMjUsIDUwXSxcbiAgICAgICAgYWN0aXZlOiB0aGlzLnBhZ2VTaXplXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlc2V0UGFnaW5hdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKDEpO1xuICB9XG5cbiAgb25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZCkge1xuICAgIHRoaXMuc2V0TGltaXQocGF5bG9hZCk7XG5cbiAgICAvLyByZXNldCBwYWdlICYgb2Zmc2V0XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KDApO1xuICB9XG5cbiAgc2V0TGltaXQocGF5bG9hZCkge1xuICAgIHRoaXMucGFnZVNpemUgPSBwYXlsb2FkO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ0xpbWl0KHBheWxvYWQpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldCgodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VhcmNoTW9kZWxJZCA9ICgpID0+IFNFQVJDSF9NT0RFTF9JRDtcblxuICBwdWJsaWMgZG9TZWFyY2hSZXF1ZXN0JCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgICBjb25zdCByZXF1ZXN0UGF5bG9hZCA9IHtcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHtcbiAgICAgICAgLy8gRklYTUU6IHRvZ2xpZXJlIHRvdGFsQ291bnRcbiAgICAgICAgdG90YWxDb3VudDogMTAwLFxuICAgICAgICAuLi5yZXF1ZXN0UGFyYW1zXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdzZWFyY2gnLCB7XG4gICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogcmVxdWVzdFBheWxvYWRcbiAgICB9KS5waXBlKFxuICAgICAgdGFwKCh7IHRvdGFsQ291bnQsIHJlc3VsdHMsIGZhY2V0cyB9KSA9PiB7XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gICAgICAgIGxldCByZXN1bHRzVGl0bGVJbmRleCA9IDA7XG4gICAgICAgIC8vIHJlc3VsdHMgdGl0bGVcbiAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCA+IDEpIHtcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbENvdW50ID09PSAxKSB7XG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXggPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0c1RpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2VhcmNoLWxheW91dCcpLnJlc3VsdHNbXG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXhcbiAgICAgICAgXTtcblxuICAgICAgICAvLyBmYWNldHMgbGFiZWxzXG4gICAgICAgIHRoaXMuX2FkZEZhY2V0c0xhYmVscyhmYWNldHMpO1xuICAgICAgICAvLyBmYWNldHMgb3B0aW9uc1xuICAgICAgICB0aGlzLl9hZGRGYWNldHNPcHRpb25zKGZhY2V0cyk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGYWNldHMoZmFjZXRzKTtcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVUb3RhbENvdW50KHRvdGFsQ291bnQpO1xuXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIGNvbnRleHQ6ICdzZWFyY2gnLFxuICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgICBwYWdpbmF0aW9uUGFyYW1zOiB0aGlzLl9nZXRQYWdpbmF0aW9uUGFyYW1zKCksXG4gICAgICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgIHRvdGFsOiB0b3RhbENvdW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKClcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuX25vcm1hbGl6ZUl0ZW1zKHJlc3VsdHMuaXRlbXMpIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU2VhcmNoUGFnZShwYWdlKSB7XG4gICAgaWYgKCtwYWdlID09PSB0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSArcGFnZTtcblxuICAgIGNvbnN0IHNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0Q29uZmlnKCksXG4gICAgICBwYWdlQ29uZmlnID0gc2VhcmNoQ29uZmlnLnBhZ2UsXG4gICAgICB7IGxpbWl0IH0gPSBwYWdlQ29uZmlnLFxuICAgICAgbmV3T2Zmc2V0ID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIGxpbWl0O1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KG5ld09mZnNldCk7XG5cbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRGYWNldHNMYWJlbHMoZmFjZXRzKSB7XG4gICAgZmFjZXRzXG4gICAgICAuZmlsdGVyKGYgPT4gQXJyYXkuaXNBcnJheShmLmRhdGEpKVxuICAgICAgLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKGRhdGFJdGVtID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBkYXRhSXRlbS5sYWJlbDtcbiAgICAgICAgICBkYXRhSXRlbS5sYWJlbCA9IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCB0aGlzLnByZXR0aWZ5TGFiZWxzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRmFjZXRzT3B0aW9ucyhmYWNldHMpIHtcbiAgICBmYWNldHNcbiAgICAgIC5maWx0ZXIoZiA9PiBmLmlkID09PSAncXVlcnktbGlua3MnKVxuICAgICAgLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKGRhdGFJdGVtID0+IHtcbiAgICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ0tleXNbZGF0YUl0ZW0udmFsdWVdO1xuICAgICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgIGRhdGFJdGVtLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGljb246IGNvbmZpZy5pY29uLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtjb25maWdbJ2NsYXNzLW5hbWUnXX1gXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZUl0ZW1zKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChzaW5nbGVJdGVtID0+ICh7IGl0ZW06IHsgLi4uc2luZ2xlSXRlbSB9IH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NpZGViYXJTdGlja3lDb250cm9sKCkge1xuICAgIC8vIG5vIHN0aWNreSBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgICBpZiAoaGVscGVycy5icm93c2VySXNJRSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZSQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJyk7XG5cbiAgICBzb3VyY2UkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd09mZnNldFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgd3JhcHBlck9mZnNldFRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1wYXJlbnQnKVswXVsnb2Zmc2V0VG9wJ107XG4gICAgICB0aGlzLnNpZGViYXJJc1N0aWNreSA9IHdyYXBwZXJPZmZzZXRUb3AgPD0gd2luZG93T2Zmc2V0VG9wO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFnaW5hdGlvblBhcmFtcygpIHtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCksXG4gICAgICBxdWVyeVBhcmFtcyA9IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcblxuICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKGtleSA9PiBxdWVyeVBhcmFtc1trZXldID0gcXVlcnlQYXJhbXNba2V5XSB8fCBudWxsKTtcblxuICAgIC8vIGFkaXRpb25hbCBwYXJhbXNcbiAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gdGhpcy5vcmRlckJ5O1xuICAgIHF1ZXJ5UGFyYW1zLm9yZGVyZGlyZWN0aW9uID0gdGhpcy5vcmRlckRpcmVjdGlvbjtcbiAgICBxdWVyeVBhcmFtcy5wYWdlID0gdGhpcy5jdXJyZW50UGFnZTtcbiAgICBxdWVyeVBhcmFtcy5saW1pdCA9IHRoaXMucGFnZVNpemU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICBocmVmOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNlYXJjaEJhc2VQYXRoXG4gICAgfTtcbiAgfVxufVxuIl19