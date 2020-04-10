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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFDTyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sR0FDbkMsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsYUFBYSxHQUVkLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7O01BRXhDLGVBQWUsR0FBRyxrQkFBa0I7QUFFMUMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFrQnpDLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQVEzQixnQkFBVyxHQUFRLENBQUMsQ0FBQyxDQUFDLCtCQUErQjs7UUFFckQsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjs7UUFFMUMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIsWUFBTyxHQUFHLFFBQVEsQ0FBQztRQUVuQixtQkFBYyxHQUFHLE1BQU0sQ0FBQztRQUl4QixpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUU1QixtQkFBYyxHQUFRO1lBQzNCO2dCQUNFLEtBQUss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OztJQUVsQyxxQ0FBeUI7O0lBRXpCLHdDQUE0Qjs7SUFFNUIsc0NBQTBCOztJQUUxQix1Q0FBNEI7O0lBRTVCLG9DQUFxQjs7SUFFckIsMkNBQStCOztJQUUvQiwwQ0FBNkI7O0lBRTdCLDBDQUE4Qjs7SUFFOUIsbUNBQTBCOztJQUUxQiwwQ0FBK0I7O0lBRS9CLG1DQUFvQjs7SUFFcEIsd0NBQW1DOztJQUVuQywwQ0FvQkU7O0lBeUZGLDBDQWdCQzs7SUFvQkQsNENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyB0YXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE9ic2VydmFibGUsIG9mLCBmcm9tRXZlbnQsIFN1YmplY3QsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgU2VhcmNoU2VydmljZSxcbiAgU2VhcmNoTW9kZWwsXG59IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcyc7XG5pbXBvcnQgZmFjZXRzQ29uZmlnIGZyb20gJy4vc2VhcmNoLWZhY2V0cy5jb25maWcnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5jb25zdCBTRUFSQ0hfTU9ERUxfSUQgPSAnYXctc2VhcmNoLWxheW91dCc7XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuXG4gIHByaXZhdGUgc2VhcmNoOiBTZWFyY2hTZXJ2aWNlO1xuXG4gIHByaXZhdGUgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsO1xuXG4gIHByaXZhdGUgcHJldHRpZnlMYWJlbHM6IGFueTtcblxuICBwcml2YXRlIGNvbmZpZ0tleXM6IGFueTtcblxuICBwcml2YXRlIGZhbGxiYWNrOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZXNldEJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgcmVzdWx0c1RpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIHRvdGFsQ291bnQ6IG51bWJlcjtcblxuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueSA9IDE7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcblxuICBwdWJsaWMgcGFnZVNpemUgPSAxMDsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG5cbiAgcHVibGljIHNpZGViYXJJc1N0aWNreSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBpc0ZpcnN0TG9hZGluZyA9IHRydWU7XG5cbiAgcHVibGljIHJlc3VsdHNMb2FkaW5nID0gZmFsc2U7XG5cbiAgcHVibGljIG9yZGVyQnkgPSAnX3Njb3JlJztcblxuICBwdWJsaWMgb3JkZXJEaXJlY3Rpb24gPSAnREVTQyc7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgb3JkZXJCeUxhYmVsID0gJ09yZGluYSBwZXInO1xuXG4gIHB1YmxpYyBvcmRlckJ5T3B0aW9uczogYW55ID0gW1xuICAgIHtcbiAgICAgIHZhbHVlOiAnX3Njb3JlX0RFU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgcGVyIHBlcnRpbmVuemEnLFxuICAgICAgdHlwZTogJ3Njb3JlJyxcbiAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2xhYmVsX3NvcnRfQVNDJyxcbiAgICAgIGxhYmVsOiAnT3JkaW5lIGFsZmFiZXRpY28gKEHihpJaKScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBzZWxlY3RlZDogZmFsc2VcblxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6ICdsYWJlbF9zb3J0X0RFU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoWuKGkkEpJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgIH1cbiAgXTtcblxuICBvbkluaXQoe1xuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgY29tbXVuaWNhdGlvbiwgc2VhcmNoLFxuICB9KSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5wcmV0dGlmeUxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xuICAgIHRoaXMuY29uZmlnS2V5cyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyk7XG4gICAgdGhpcy5mYWxsYmFjayA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NlYXJjaC1sYXlvdXQnKS5mYWxsYmFjaztcblxuICAgIHRoaXMucGFnZVRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2VhcmNoLWxheW91dCcpLnRpdGxlO1xuXG4gICAgLy8gcmVtb3ZlIGZpcnN0XG4gICAgLy8gc3RhdGVsZXNzIHNlYXJjaFxuICAgIGlmICh0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfTU9ERUxfSUQpKSB7XG4gICAgICB0aGlzLnNlYXJjaC5yZW1vdmUoU0VBUkNIX01PREVMX0lEKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaC5hZGQoU0VBUkNIX01PREVMX0lELCBjbG9uZURlZXAoZmFjZXRzQ29uZmlnKSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9IHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCk7XG5cbiAgICAvLyBxdWVyeSBwYXJhbXMgY29udHJvbFxuICAgIGlmIChTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyk7XG4gICAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzaWRlYmFyIHN0aWNreSBjb250cm9sXG4gICAgdGhpcy5fc2lkZWJhclN0aWNreUNvbnRyb2woKTtcblxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdyaWNlcmNhJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBSaWNlcmNhJyk7XG4gIH1cblxuICBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgfVxuXG4gIG9uU2VhcmNoUmVzcG9uc2UoKSB7XG4gICAgdGhpcy5yZXNldEJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmlzRmlyc3RMb2FkaW5nKSB7XG4gICAgICB0aGlzLmlzRmlyc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLm9uZSgnZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoeyBzZWFyY2hNb2RlbDogdGhpcy5zZWFyY2hNb2RlbCB9KTtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgICB9XG4gIH1cblxuICBvbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCkge1xuICAgIGNvbnN0IG9yZGVyQnkgPSBwYXlsb2FkLnN1YnN0cmluZygwLCBwYXlsb2FkLmxhc3RJbmRleE9mKCdfJykpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBheWxvYWQuc3Vic3RyaW5nKHBheWxvYWQubGFzdEluZGV4T2YoJ18nKSArIDEpO1xuICAgIGxldCB0eXBlID0gJyc7XG4gICAgLy8gc2V0IHNlbGVjdGVkXG4gICAgdGhpcy5vcmRlckJ5T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHBheWxvYWQpIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdHlwZSA9IG9wdGlvbi50eXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9yZGVyQnkgPSBvcmRlckJ5O1xuICAgIHRoaXMub3JkZXJEaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFNlYXJjaENvbmZpZ09yZGVyQnkob3JkZXJCeSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRTZWFyY2hDb25maWdEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFNlYXJjaENvbmZpZ1R5cGUodHlwZSk7XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlKHNpemUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICB0aGlzLnBhZ2VTaXplID0gc2l6ZTtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZSh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkNoYW5nZShwYXlsb2FkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgncGFnZS0nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSk7XG4gIH1cblxuICBvblBhZ2luYXRpb25Hb1RvQ2hhbmdlKHBheWxvYWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBwYWdlID0gcGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKTtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZShwYWdlKTtcbiAgfVxuXG4gIGRyYXdQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaHJlZiwgcXVlcnlQYXJhbXMgfSA9IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgbW9kZTogJ2hyZWYnLFxuICAgICAgaHJlZixcbiAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgIH0pO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHtcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0aGlzLnRvdGFsQ291bnQgLyB0aGlzLnBhZ2VTaXplKSxcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnZUxpbWl0OiA1LFxuICAgICAgc2l6ZXM6IHtcbiAgICAgICAgbGlzdDogWzEwLCAyNSwgNTBdLFxuICAgICAgICBhY3RpdmU6IHRoaXMucGFnZVNpemUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRQYWdpbmF0aW9uKCkge1xuICAgIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UoMSk7XG4gIH1cblxuICBvblJlc3VsdHNMaW1pdENoYW5nZShwYXlsb2FkKSB7XG4gICAgdGhpcy5zZXRMaW1pdChwYXlsb2FkKTtcblxuICAgIC8vIHJlc2V0IHBhZ2UgJiBvZmZzZXRcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQoMCk7XG4gIH1cblxuICBzZXRMaW1pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHBheWxvYWQ7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnTGltaXQocGF5bG9hZCk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KCh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWFyY2hNb2RlbElkID0gKCkgPT4gU0VBUkNIX01PREVMX0lEO1xuXG4gIHB1YmxpYyBkb1NlYXJjaFJlcXVlc3QkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgIGNvbnN0IHJlcXVlc3RQYXlsb2FkID0ge1xuICAgICAgc2VhcmNoUGFyYW1ldGVyczoge1xuICAgICAgICAvLyBGSVhNRTogdG9nbGllcmUgdG90YWxDb3VudFxuICAgICAgICB0b3RhbENvdW50OiAxMDAsXG4gICAgICAgIC4uLnJlcXVlc3RQYXJhbXMsXG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnc2VhcmNoJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogcmVxdWVzdFBheWxvYWQsXG4gICAgfSkucGlwZShcbiAgICAgIHRhcCgoeyB0b3RhbENvdW50LCByZXN1bHRzLCBmYWNldHMgfSkgPT4ge1xuICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICAgICAgICBsZXQgcmVzdWx0c1RpdGxlSW5kZXggPSAwO1xuICAgICAgICAvLyByZXN1bHRzIHRpdGxlXG4gICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnQgPiAxKSB7XG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXggPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG90YWxDb3VudCA9PT0gMSkge1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4ID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHNUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NlYXJjaC1sYXlvdXQnKS5yZXN1bHRzW1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4XG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gZmFjZXRzIGxhYmVsc1xuICAgICAgICB0aGlzLl9hZGRGYWNldHNMYWJlbHMoZmFjZXRzKTtcbiAgICAgICAgLy8gZmFjZXRzIG9wdGlvbnNcbiAgICAgICAgdGhpcy5fYWRkRmFjZXRzT3B0aW9ucyhmYWNldHMpO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmFjZXRzKGZhY2V0cyk7XG4gICAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlVG90YWxDb3VudCh0b3RhbENvdW50KTtcblxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICBjb250ZXh0OiAnc2VhcmNoJyxcbiAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgICAgcGFnaW5hdGlvblBhcmFtczogdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpLFxuICAgICAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICB0b3RhbDogdG90YWxDb3VudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKCk7XG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLl9ub3JtYWxpemVJdGVtcyhyZXN1bHRzLml0ZW1zKSB9KTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpIHtcbiAgICBpZiAoK3BhZ2UgPT09IHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICtwYWdlO1xuXG4gICAgY29uc3Qgc2VhcmNoQ29uZmlnID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRDb25maWcoKTtcbiAgICBjb25zdCBwYWdlQ29uZmlnID0gc2VhcmNoQ29uZmlnLnBhZ2U7XG4gICAgY29uc3QgeyBsaW1pdCB9ID0gcGFnZUNvbmZpZztcbiAgICBjb25zdCBuZXdPZmZzZXQgPSAodGhpcy5jdXJyZW50UGFnZSAtIDEpICogbGltaXQ7XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQobmV3T2Zmc2V0KTtcblxuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEZhY2V0c0xhYmVscyhmYWNldHMpIHtcbiAgICBmYWNldHNcbiAgICAgIC5maWx0ZXIoKGYpID0+IEFycmF5LmlzQXJyYXkoZi5kYXRhKSlcbiAgICAgIC5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGRhdGFJdGVtLmxhYmVsO1xuICAgICAgICAgIGRhdGFJdGVtLmxhYmVsID0gaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIHRoaXMucHJldHRpZnlMYWJlbHNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRGYWNldHNPcHRpb25zKGZhY2V0cykge1xuICAgIGZhY2V0c1xuICAgICAgLmZpbHRlcigoZikgPT4gZi5pZCA9PT0gJ3F1ZXJ5LWxpbmtzJylcbiAgICAgIC5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnS2V5c1tkYXRhSXRlbS52YWx1ZV07XG4gICAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgZGF0YUl0ZW0ub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgaWNvbjogY29uZmlnLmljb24sXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2NvbmZpZ1snY2xhc3MtbmFtZSddfWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZUl0ZW1zKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoc2luZ2xlSXRlbSkgPT4gKHsgaXRlbTogeyAuLi5zaW5nbGVJdGVtIH0gfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2lkZWJhclN0aWNreUNvbnRyb2woKSB7XG4gICAgLy8gbm8gc3RpY2t5IGZvciBJbnRlcm5ldCBFeHBsb3JlclxuICAgIGlmIChoZWxwZXJzLmJyb3dzZXJJc0lFKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcblxuICAgIHNvdXJjZSQucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd09mZnNldFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIGNvbnN0IHN0aWNreVBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1wYXJlbnQnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHdyYXBwZXJPZmZzZXRUb3AgPSBzdGlja3lQYXJlbnQgPyBzdGlja3lQYXJlbnQub2Zmc2V0VG9wIDogMDtcbiAgICAgIHRoaXMuc2lkZWJhcklzU3RpY2t5ID0gd3JhcHBlck9mZnNldFRvcCA8PSB3aW5kb3dPZmZzZXRUb3A7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uUGFyYW1zKCkge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcblxuICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHsgcXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV0gfHwgbnVsbDsgfSk7XG5cbiAgICAvLyBhZGl0aW9uYWwgcGFyYW1zXG4gICAgcXVlcnlQYXJhbXMub3JkZXJieSA9IHRoaXMub3JkZXJCeTtcbiAgICBxdWVyeVBhcmFtcy5vcmRlcmRpcmVjdGlvbiA9IHRoaXMub3JkZXJEaXJlY3Rpb247XG4gICAgcXVlcnlQYXJhbXMucGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgcXVlcnlQYXJhbXMubGltaXQgPSB0aGlzLnBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgaHJlZjogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aCxcbiAgICB9O1xuICB9XG59XG4iXX0=