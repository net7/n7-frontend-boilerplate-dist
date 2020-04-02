/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { cloneDeep } from 'lodash';
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { tap, takeUntil } from 'rxjs/operators';
import { of, fromEvent, Subject, } from 'rxjs';
import { SearchService, } from '../../../common/services';
import facetsConfig from './search-facets.config';
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
        this.orderBy = '_score';
        this.orderDirection = 'DESC';
        this.orderByLabel = 'Ordina per';
        this.orderByOptions = [
            {
                value: '_score_DESC',
                label: 'Ordine per pertinenza',
                type: 'score',
                selected: true
            },
            {
                value: 'label_sort_ASC',
                label: 'Ordine alfabetico (A→Z)',
                type: 'text',
                selected: false
            },
            {
                value: 'label_sort_DESC',
                label: 'Ordine alfabetico (Z→A)',
                type: 'text',
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
                    active: this.pageSize,
                },
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
    onInit({ configuration, mainState, options, communication, search, }) {
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
        const orderBy = payload.substring(0, payload.lastIndexOf('_'));
        /** @type {?} */
        const direction = payload.substring(payload.lastIndexOf('_') + 1);
        /** @type {?} */
        let type = '';
        // set selected
        this.orderByOptions.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
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
    }
    /**
     * @param {?} size
     * @return {?}
     */
    onPageSizeChange(size) {
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
            searchParameters: Object.assign({ totalCount: 100 }, requestParams),
        };
        return this.communication.request$('search', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: requestPayload,
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
                    total: totalCount,
                },
                size: this.pageSize,
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
        (f) => Array.isArray(f.data)))
            .forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            f.data.forEach((/**
             * @param {?} dataItem
             * @return {?}
             */
            (dataItem) => {
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
        (f) => f.id === 'query-links'))
            .forEach((/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            f.data.forEach((/**
             * @param {?} dataItem
             * @return {?}
             */
            (dataItem) => {
                /** @type {?} */
                const config = this.configKeys[dataItem.value];
                if (config) {
                    dataItem.options = {
                        icon: config.icon,
                        classes: `color-${config['class-name']}`,
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
        (singleItem) => ({ item: Object.assign({}, singleItem) })));
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
            const stickyParent = (/** @type {?} */ (document.getElementsByClassName('sticky-parent')[0]));
            /** @type {?} */
            const wrapperOffsetTop = stickyParent ? stickyParent.offsetTop : 0;
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
        (key) => { queryParams[key] = queryParams[key] || null; }));
        // aditional params
        queryParams.orderby = this.orderBy;
        queryParams.orderdirection = this.orderDirection;
        queryParams.page = this.currentPage;
        queryParams.limit = this.pageSize;
        return {
            queryParams,
            href: this.configuration.get('paths').searchBasePath,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFDTyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sR0FDbkMsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsYUFBYSxHQUVkLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7O01BRXhDLGVBQWUsR0FBRyxrQkFBa0I7QUFFMUMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQnpDLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQVEzQixnQkFBVyxHQUFRLENBQUMsQ0FBQyxDQUFDLCtCQUErQjs7UUFFckQsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFFMUMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsWUFBTyxHQUFHLFFBQVEsQ0FBQztRQUNuQixtQkFBYyxHQUFHLE1BQU0sQ0FBQztRQUl4QixpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUU1QixtQkFBYyxHQUFRO1lBQzNCO2dCQUNFLEtBQUss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OztJQUVsQyxxQ0FBeUI7O0lBRXpCLHdDQUE0Qjs7SUFFNUIsc0NBQTBCOztJQUUxQix1Q0FBNEI7O0lBRTVCLG9DQUFxQjs7SUFFckIsMkNBQStCOztJQUUvQiwwQ0FBNkI7O0lBRTdCLDBDQUE4Qjs7SUFDOUIsbUNBQTBCOztJQUMxQiwwQ0FBK0I7O0lBRS9CLG1DQUFvQjs7SUFFcEIsd0NBQW1DOztJQUVuQywwQ0FvQkU7O0lBeUZGLDBDQWdCQzs7SUFvQkQsNENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyB0YXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE9ic2VydmFibGUsIG9mLCBmcm9tRXZlbnQsIFN1YmplY3QsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgU2VhcmNoU2VydmljZSxcbiAgU2VhcmNoTW9kZWwsXG59IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcyc7XG5pbXBvcnQgZmFjZXRzQ29uZmlnIGZyb20gJy4vc2VhcmNoLWZhY2V0cy5jb25maWcnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5jb25zdCBTRUFSQ0hfTU9ERUxfSUQgPSAnYXctc2VhcmNoLWxheW91dCc7XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuXG4gIHByaXZhdGUgc2VhcmNoOiBTZWFyY2hTZXJ2aWNlO1xuXG4gIHByaXZhdGUgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsO1xuXG4gIHByaXZhdGUgcHJldHRpZnlMYWJlbHM6IGFueTtcblxuICBwcml2YXRlIGNvbmZpZ0tleXM6IGFueTtcblxuICBwcml2YXRlIGZhbGxiYWNrOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZXNldEJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgcmVzdWx0c1RpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIHRvdGFsQ291bnQ6IG51bWJlcjtcblxuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueSA9IDE7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcblxuICBwdWJsaWMgcGFnZVNpemUgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG5cbiAgcHVibGljIHNpZGViYXJJc1N0aWNreSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBpc0ZpcnN0TG9hZGluZyA9IHRydWU7XG5cbiAgcHVibGljIHJlc3VsdHNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBvcmRlckJ5ID0gJ19zY29yZSc7XG4gIHB1YmxpYyBvcmRlckRpcmVjdGlvbiA9ICdERVNDJztcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHB1YmxpYyBvcmRlckJ5TGFiZWwgPSAnT3JkaW5hIHBlcic7XG5cbiAgcHVibGljIG9yZGVyQnlPcHRpb25zOiBhbnkgPSBbXG4gICAge1xuICAgICAgdmFsdWU6ICdfc2NvcmVfREVTQycsXG4gICAgICBsYWJlbDogJ09yZGluZSBwZXIgcGVydGluZW56YScsXG4gICAgICB0eXBlOiAnc2NvcmUnLFxuICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnbGFiZWxfc29ydF9BU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoQeKGklopJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZVxuXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2xhYmVsX3NvcnRfREVTQycsXG4gICAgICBsYWJlbDogJ09yZGluZSBhbGZhYmV0aWNvICha4oaSQSknLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgfVxuICBdO1xuXG4gIG9uSW5pdCh7XG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCBjb21tdW5pY2F0aW9uLCBzZWFyY2gsXG4gIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnByZXR0aWZ5TGFiZWxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyk7XG4gICAgdGhpcy5jb25maWdLZXlzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKTtcbiAgICB0aGlzLmZhbGxiYWNrID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2VhcmNoLWxheW91dCcpLmZhbGxiYWNrO1xuXG4gICAgdGhpcy5wYWdlVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykudGl0bGU7XG5cbiAgICAvLyByZW1vdmUgZmlyc3RcbiAgICAvLyBzdGF0ZWxlc3Mgc2VhcmNoXG4gICAgaWYgKHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCkpIHtcbiAgICAgIHRoaXMuc2VhcmNoLnJlbW92ZShTRUFSQ0hfTU9ERUxfSUQpO1xuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoLmFkZChTRUFSQ0hfTU9ERUxfSUQsIGNsb25lRGVlcChmYWNldHNDb25maWcpKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsID0gdGhpcy5zZWFyY2gubW9kZWwoU0VBUkNIX01PREVMX0lEKTtcblxuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXG4gICAgaWYgKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpIHtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKTtcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIHNpZGViYXIgc3RpY2t5IGNvbnRyb2xcbiAgICB0aGlzLl9zaWRlYmFyU3RpY2t5Q29udHJvbCgpO1xuXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ3JpY2VyY2EnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IFJpY2VyY2EnKTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBudWxsO1xuICB9XG5cbiAgb25TZWFyY2hSZXNwb25zZSgpIHtcbiAgICB0aGlzLnJlc2V0QnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuaXNGaXJzdExvYWRpbmcpIHtcbiAgICAgIHRoaXMuaXNGaXJzdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMub25lKCdmYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh7IHNlYXJjaE1vZGVsOiB0aGlzLnNlYXJjaE1vZGVsIH0pO1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3JkZXJCeUNoYW5nZShwYXlsb2FkKSB7XG4gICAgY29uc3Qgb3JkZXJCeSA9IHBheWxvYWQuc3Vic3RyaW5nKDAsIHBheWxvYWQubGFzdEluZGV4T2YoJ18nKSk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gcGF5bG9hZC5zdWJzdHJpbmcocGF5bG9hZC5sYXN0SW5kZXhPZignXycpICsgMSk7XG4gICAgbGV0IHR5cGUgPSAnJztcbiAgICAvLyBzZXQgc2VsZWN0ZWRcbiAgICB0aGlzLm9yZGVyQnlPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gcGF5bG9hZCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0eXBlID0gb3B0aW9uLnR5cGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3JkZXJCeSA9IG9yZGVyQnk7XG4gICAgdGhpcy5vcmRlckRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnT3JkZXJCeShvcmRlckJ5KTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnVHlwZSh0eXBlKTtcbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2Uoc2l6ZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHRoaXMucGFnZVNpemUgPSBzaXplO1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHRoaXMuY3VycmVudFBhZ2UpO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2hhbmdlKHBheWxvYWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBwYWdlID0gcGF5bG9hZC5yZXBsYWNlKCdwYWdlLScsICcnKTtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZShwYWdlKTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkdvVG9DaGFuZ2UocGF5bG9hZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHBhZ2UgPSBwYXlsb2FkLnJlcGxhY2UoJ2dvdG8tJywgJycpO1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpO1xuICB9XG5cbiAgZHJhd1BhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBtb2RlOiAnaHJlZicsXG4gICAgICBocmVmLFxuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRoaXMudG90YWxDb3VudCAvIHRoaXMucGFnZVNpemUpLFxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICBwYWdlTGltaXQ6IDUsXG4gICAgICBzaXplczoge1xuICAgICAgICBsaXN0OiBbMTAsIDI1LCA1MF0sXG4gICAgICAgIGFjdGl2ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXNldFBhZ2luYXRpb24oKSB7XG4gICAgdGhpcy5fdXBkYXRlU2VhcmNoUGFnZSgxKTtcbiAgfVxuXG4gIG9uUmVzdWx0c0xpbWl0Q2hhbmdlKHBheWxvYWQpIHtcbiAgICB0aGlzLnNldExpbWl0KHBheWxvYWQpO1xuXG4gICAgLy8gcmVzZXQgcGFnZSAmIG9mZnNldFxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldCgwKTtcbiAgfVxuXG4gIHNldExpbWl0KHBheWxvYWQpIHtcbiAgICB0aGlzLnBhZ2VTaXplID0gcGF5bG9hZDtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdMaW1pdChwYXlsb2FkKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQoKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgcHVibGljIGdldFNlYXJjaE1vZGVsSWQgPSAoKSA9PiBTRUFSQ0hfTU9ERUxfSUQ7XG5cbiAgcHVibGljIGRvU2VhcmNoUmVxdWVzdCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG4gICAgY29uc3QgcmVxdWVzdFBheWxvYWQgPSB7XG4gICAgICBzZWFyY2hQYXJhbWV0ZXJzOiB7XG4gICAgICAgIC8vIEZJWE1FOiB0b2dsaWVyZSB0b3RhbENvdW50XG4gICAgICAgIHRvdGFsQ291bnQ6IDEwMCxcbiAgICAgICAgLi4ucmVxdWVzdFBhcmFtcyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdzZWFyY2gnLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiByZXF1ZXN0UGF5bG9hZCxcbiAgICB9KS5waXBlKFxuICAgICAgdGFwKCh7IHRvdGFsQ291bnQsIHJlc3VsdHMsIGZhY2V0cyB9KSA9PiB7XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gICAgICAgIGxldCByZXN1bHRzVGl0bGVJbmRleCA9IDA7XG4gICAgICAgIC8vIHJlc3VsdHMgdGl0bGVcbiAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCA+IDEpIHtcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbENvdW50ID09PSAxKSB7XG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXggPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0c1RpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2VhcmNoLWxheW91dCcpLnJlc3VsdHNbXG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXhcbiAgICAgICAgXTtcblxuICAgICAgICAvLyBmYWNldHMgbGFiZWxzXG4gICAgICAgIHRoaXMuX2FkZEZhY2V0c0xhYmVscyhmYWNldHMpO1xuICAgICAgICAvLyBmYWNldHMgb3B0aW9uc1xuICAgICAgICB0aGlzLl9hZGRGYWNldHNPcHRpb25zKGZhY2V0cyk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGYWNldHMoZmFjZXRzKTtcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVUb3RhbENvdW50KHRvdGFsQ291bnQpO1xuXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIGNvbnRleHQ6ICdzZWFyY2gnLFxuICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudFBhZ2UsXG4gICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgICBwYWdpbmF0aW9uUGFyYW1zOiB0aGlzLl9nZXRQYWdpbmF0aW9uUGFyYW1zKCksXG4gICAgICAgICAgZHluYW1pY1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgIHRvdGFsOiB0b3RhbENvdW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZHJhd1BhZ2luYXRpb24oKTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHsgaXRlbXM6IHRoaXMuX25vcm1hbGl6ZUl0ZW1zKHJlc3VsdHMuaXRlbXMpIH0pO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSkge1xuICAgIGlmICgrcGFnZSA9PT0gdGhpcy5jdXJyZW50UGFnZSkge1xuICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gK3BhZ2U7XG5cbiAgICBjb25zdCBzZWFyY2hDb25maWcgPSB0aGlzLnNlYXJjaE1vZGVsLmdldENvbmZpZygpO1xuICAgIGNvbnN0IHBhZ2VDb25maWcgPSBzZWFyY2hDb25maWcucGFnZTtcbiAgICBjb25zdCB7IGxpbWl0IH0gPSBwYWdlQ29uZmlnO1xuICAgIGNvbnN0IG5ld09mZnNldCA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiBsaW1pdDtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldChuZXdPZmZzZXQpO1xuXG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRmFjZXRzTGFiZWxzKGZhY2V0cykge1xuICAgIGZhY2V0c1xuICAgICAgLmZpbHRlcigoZikgPT4gQXJyYXkuaXNBcnJheShmLmRhdGEpKVxuICAgICAgLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgZi5kYXRhLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gZGF0YUl0ZW0ubGFiZWw7XG4gICAgICAgICAgZGF0YUl0ZW0ubGFiZWwgPSBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgdGhpcy5wcmV0dGlmeUxhYmVsc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEZhY2V0c09wdGlvbnMoZmFjZXRzKSB7XG4gICAgZmFjZXRzXG4gICAgICAuZmlsdGVyKChmKSA9PiBmLmlkID09PSAncXVlcnktbGlua3MnKVxuICAgICAgLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgZi5kYXRhLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWdLZXlzW2RhdGFJdGVtLnZhbHVlXTtcbiAgICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICBkYXRhSXRlbS5vcHRpb25zID0ge1xuICAgICAgICAgICAgICBpY29uOiBjb25maWcuaWNvbixcbiAgICAgICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7Y29uZmlnWydjbGFzcy1uYW1lJ119YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbm9ybWFsaXplSXRlbXMoaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXMubWFwKChzaW5nbGVJdGVtKSA9PiAoeyBpdGVtOiB7IC4uLnNpbmdsZUl0ZW0gfSB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9zaWRlYmFyU3RpY2t5Q29udHJvbCgpIHtcbiAgICAvLyBubyBzdGlja3kgZm9yIEludGVybmV0IEV4cGxvcmVyXG4gICAgaWYgKGhlbHBlcnMuYnJvd3NlcklzSUUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xuXG4gICAgc291cmNlJC5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3Qgd2luZG93T2Zmc2V0VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgY29uc3Qgc3RpY2t5UGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RpY2t5LXBhcmVudCcpWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3Qgd3JhcHBlck9mZnNldFRvcCA9IHN0aWNreVBhcmVudCA/IHN0aWNreVBhcmVudC5vZmZzZXRUb3AgOiAwO1xuICAgICAgdGhpcy5zaWRlYmFySXNTdGlja3kgPSB3cmFwcGVyT2Zmc2V0VG9wIDw9IHdpbmRvd09mZnNldFRvcDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhZ2luYXRpb25QYXJhbXMoKSB7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gdGhpcy5zZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4geyBxdWVyeVBhcmFtc1trZXldID0gcXVlcnlQYXJhbXNba2V5XSB8fCBudWxsOyB9KTtcblxuICAgIC8vIGFkaXRpb25hbCBwYXJhbXNcbiAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gdGhpcy5vcmRlckJ5O1xuICAgIHF1ZXJ5UGFyYW1zLm9yZGVyZGlyZWN0aW9uID0gdGhpcy5vcmRlckRpcmVjdGlvbjtcbiAgICBxdWVyeVBhcmFtcy5wYWdlID0gdGhpcy5jdXJyZW50UGFnZTtcbiAgICBxdWVyeVBhcmFtcy5saW1pdCA9IHRoaXMucGFnZVNpemU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICBocmVmOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNlYXJjaEJhc2VQYXRoLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==