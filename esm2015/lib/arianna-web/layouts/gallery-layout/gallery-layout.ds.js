/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/gallery-layout/gallery-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { cloneDeep } from 'lodash';
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { tap, takeUntil } from 'rxjs/operators';
import { of, fromEvent, Subject, } from 'rxjs';
import { SearchService, } from '../../../common/services';
import facetsConfig from './gallery-facets.config';
import helpers from '../../../common/helpers';
/** @type {?} */
const SEARCH_MODEL_ID = 'aw-gallery-layout';
export class AwGalleryLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.resetButtonEnabled = true;
        this.currentPage = 1; // pagination value (url param)
        // pagination value (url param)
        this.pageSize = 12; // linked objects page size
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
                    list: [12, 24, 48],
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
        this.mainState.update('headTitle', 'Arianna Web > Galleria');
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
            searchParameters: Object.assign({ totalCount: 100, gallery: true }, requestParams),
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
            this.resultsTitle = this.configuration.get('gallery-layout').results[resultsTitleIndex];
            // facets labels
            this._addFacetsLabels(facets);
            // facets options
            this._addFacetsOptions(facets);
            this.searchModel.updateFacets(facets);
            this.searchModel.updateTotalCount(totalCount);
            this.one('aw-linked-objects').updateOptions({
                context: 'gallery',
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
            href: this.configuration.get('paths').galleryBasePath,
        };
    }
}
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
    /** @type {?} */
    AwGalleryLayoutDS.prototype.orderBy;
    /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQ08sRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEdBQ25DLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLGFBQWEsR0FFZCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sWUFBWSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDOztNQUV4QyxlQUFlLEdBQUcsbUJBQW1CO0FBRTNDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7SUFBdkQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBa0J6Qyx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFRM0IsZ0JBQVcsR0FBUSxDQUFDLENBQUMsQ0FBQywrQkFBK0I7O1FBRXJELGFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQywyQkFBMkI7O1FBRTFDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXRCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLFlBQU8sR0FBRyxRQUFRLENBQUM7UUFFbkIsbUJBQWMsR0FBRyxNQUFNLENBQUM7UUFJeEIsaUJBQVksR0FBRyxZQUFZLENBQUM7UUFFNUIsbUJBQWMsR0FBUTtZQUMzQjtnQkFDRSxL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O0lBRXhCLHFDQUF5Qjs7Ozs7SUFFekIsK0NBQWtDOztJQUVsQyxzQ0FBeUI7O0lBRXpCLHlDQUE0Qjs7SUFFNUIsdUNBQTBCOztJQUUxQix3Q0FBNEI7O0lBRTVCLHFDQUFxQjs7SUFFckIsNENBQStCOztJQUUvQiwyQ0FBNkI7O0lBRTdCLDJDQUE4Qjs7SUFFOUIsb0NBQTBCOztJQUUxQiwyQ0FBK0I7O0lBRS9CLG9DQUFvQjs7SUFFcEIseUNBQW1DOztJQUVuQywyQ0FvQkU7O0lBeUZGLDJDQWdCQzs7SUFvQkQsNkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyB0YXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE9ic2VydmFibGUsIG9mLCBmcm9tRXZlbnQsIFN1YmplY3QsXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgU2VhcmNoU2VydmljZSxcbiAgU2VhcmNoTW9kZWwsXG59IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcyc7XG5pbXBvcnQgZmFjZXRzQ29uZmlnIGZyb20gJy4vZ2FsbGVyeS1mYWNldHMuY29uZmlnJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuY29uc3QgU0VBUkNIX01PREVMX0lEID0gJ2F3LWdhbGxlcnktbGF5b3V0JztcblxuZXhwb3J0IGNsYXNzIEF3R2FsbGVyeUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuXG4gIHByaXZhdGUgc2VhcmNoOiBTZWFyY2hTZXJ2aWNlO1xuXG4gIHByaXZhdGUgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsO1xuXG4gIHByaXZhdGUgcHJldHRpZnlMYWJlbHM6IGFueTtcblxuICBwcml2YXRlIGNvbmZpZ0tleXM6IGFueTtcblxuICBwcml2YXRlIGZhbGxiYWNrOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZXNldEJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgcmVzdWx0c1RpdGxlOiBzdHJpbmc7XG5cbiAgcHVibGljIHRvdGFsQ291bnQ6IG51bWJlcjtcblxuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueSA9IDE7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcblxuICBwdWJsaWMgcGFnZVNpemUgPSAxMjsgLy8gbGlua2VkIG9iamVjdHMgcGFnZSBzaXplXG5cbiAgcHVibGljIHNpZGViYXJJc1N0aWNreSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBpc0ZpcnN0TG9hZGluZyA9IHRydWU7XG5cbiAgcHVibGljIHJlc3VsdHNMb2FkaW5nID0gZmFsc2U7XG5cbiAgcHVibGljIG9yZGVyQnkgPSAnX3Njb3JlJztcblxuICBwdWJsaWMgb3JkZXJEaXJlY3Rpb24gPSAnREVTQyc7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgb3JkZXJCeUxhYmVsID0gJ09yZGluYSBwZXInO1xuXG4gIHB1YmxpYyBvcmRlckJ5T3B0aW9uczogYW55ID0gW1xuICAgIHtcbiAgICAgIHZhbHVlOiAnX3Njb3JlX0RFU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgcGVyIHBlcnRpbmVuemEnLFxuICAgICAgdHlwZTogJ3Njb3JlJyxcbiAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2xhYmVsX3NvcnRfQVNDJyxcbiAgICAgIGxhYmVsOiAnT3JkaW5lIGFsZmFiZXRpY28gKEHihpJaKScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBzZWxlY3RlZDogZmFsc2VcblxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6ICdsYWJlbF9zb3J0X0RFU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoWuKGkkEpJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgIH1cbiAgXTtcblxuICBvbkluaXQoe1xuICAgIGNvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgY29tbXVuaWNhdGlvbiwgc2VhcmNoLFxuICB9KSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5wcmV0dGlmeUxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xuICAgIHRoaXMuY29uZmlnS2V5cyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyk7XG4gICAgdGhpcy5mYWxsYmFjayA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2dhbGxlcnktbGF5b3V0JykuZmFsbGJhY2s7XG5cbiAgICB0aGlzLnBhZ2VUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2dhbGxlcnktbGF5b3V0JykudGl0bGU7XG5cbiAgICAvLyByZW1vdmUgZmlyc3RcbiAgICAvLyBzdGF0ZWxlc3Mgc2VhcmNoXG4gICAgaWYgKHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCkpIHtcbiAgICAgIHRoaXMuc2VhcmNoLnJlbW92ZShTRUFSQ0hfTU9ERUxfSUQpO1xuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoLmFkZChTRUFSQ0hfTU9ERUxfSUQsIGNsb25lRGVlcChmYWNldHNDb25maWcpKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsID0gdGhpcy5zZWFyY2gubW9kZWwoU0VBUkNIX01PREVMX0lEKTtcblxuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXG4gICAgaWYgKFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMpIHtcbiAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKTtcbiAgICAgIFNlYXJjaFNlcnZpY2UucXVlcnlQYXJhbXMgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIHNpZGViYXIgc3RpY2t5IGNvbnRyb2xcbiAgICB0aGlzLl9zaWRlYmFyU3RpY2t5Q29udHJvbCgpO1xuXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ2dhbGxlcmlhJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBHYWxsZXJpYScpO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyA9IG51bGw7XG4gIH1cblxuICBvblNlYXJjaFJlc3BvbnNlKCkge1xuICAgIHRoaXMucmVzZXRCdXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0ZpcnN0TG9hZGluZykge1xuICAgICAgdGhpcy5pc0ZpcnN0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5vbmUoJ2ZhY2V0cy13cmFwcGVyJykudXBkYXRlKHsgc2VhcmNoTW9kZWw6IHRoaXMuc2VhcmNoTW9kZWwgfSk7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgb25PcmRlckJ5Q2hhbmdlKHBheWxvYWQpIHtcbiAgICBjb25zdCBvcmRlckJ5ID0gcGF5bG9hZC5zdWJzdHJpbmcoMCwgcGF5bG9hZC5sYXN0SW5kZXhPZignXycpKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBwYXlsb2FkLnN1YnN0cmluZyhwYXlsb2FkLmxhc3RJbmRleE9mKCdfJykgKyAxKTtcbiAgICBsZXQgdHlwZSA9ICcnO1xuICAgIC8vIHNldCBzZWxlY3RlZFxuICAgIHRoaXMub3JkZXJCeU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBwYXlsb2FkKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHR5cGUgPSBvcHRpb24udHlwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vcmRlckJ5ID0gb3JkZXJCeTtcbiAgICB0aGlzLm9yZGVyRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRTZWFyY2hDb25maWdPcmRlckJ5KG9yZGVyQnkpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRTZWFyY2hDb25maWdUeXBlKHR5cGUpO1xuICB9XG5cbiAgb25QYWdlU2l6ZUNoYW5nZShzaXplKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHNpemU7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBvblBhZ2luYXRpb25DaGFuZ2UocGF5bG9hZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHBhZ2UgPSBwYXlsb2FkLnJlcGxhY2UoJ3BhZ2UtJywgJycpO1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uR29Ub0NoYW5nZShwYXlsb2FkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSk7XG4gIH1cblxuICBkcmF3UGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhyZWYsIHF1ZXJ5UGFyYW1zIH0gPSB0aGlzLl9nZXRQYWdpbmF0aW9uUGFyYW1zKCk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIG1vZGU6ICdocmVmJyxcbiAgICAgIGhyZWYsXG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy50b3RhbENvdW50IC8gdGhpcy5wYWdlU2l6ZSksXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgIHBhZ2VMaW1pdDogNSxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIGxpc3Q6IFsxMiwgMjQsIDQ4XSxcbiAgICAgICAgYWN0aXZlOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0UGFnaW5hdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKDEpO1xuICB9XG5cbiAgb25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZCkge1xuICAgIHRoaXMuc2V0TGltaXQocGF5bG9hZCk7XG5cbiAgICAvLyByZXNldCBwYWdlICYgb2Zmc2V0XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KDApO1xuICB9XG5cbiAgc2V0TGltaXQocGF5bG9hZCkge1xuICAgIHRoaXMucGFnZVNpemUgPSBwYXlsb2FkO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ0xpbWl0KHBheWxvYWQpO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldCgodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VhcmNoTW9kZWxJZCA9ICgpID0+IFNFQVJDSF9NT0RFTF9JRDtcblxuICBwdWJsaWMgZG9TZWFyY2hSZXF1ZXN0JCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgICBjb25zdCByZXF1ZXN0UGF5bG9hZCA9IHtcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHtcbiAgICAgICAgLy8gRklYTUU6IHRvZ2xpZXJlIHRvdGFsQ291bnRcbiAgICAgICAgdG90YWxDb3VudDogMTAwLFxuICAgICAgICBnYWxsZXJ5OiB0cnVlLFxuICAgICAgICAuLi5yZXF1ZXN0UGFyYW1zLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3NlYXJjaCcsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHJlcXVlc3RQYXlsb2FkLFxuICAgIH0pLnBpcGUoXG4gICAgICB0YXAoKHsgdG90YWxDb3VudCwgcmVzdWx0cywgZmFjZXRzIH0pID0+IHtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgICAgICAgbGV0IHJlc3VsdHNUaXRsZUluZGV4ID0gMDtcbiAgICAgICAgLy8gcmVzdWx0cyB0aXRsZVxuICAgICAgICBpZiAodGhpcy50b3RhbENvdW50ID4gMSkge1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvdGFsQ291bnQgPT09IDEpIHtcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdnYWxsZXJ5LWxheW91dCcpLnJlc3VsdHNbXG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXhcbiAgICAgICAgXTtcblxuICAgICAgICAvLyBmYWNldHMgbGFiZWxzXG4gICAgICAgIHRoaXMuX2FkZEZhY2V0c0xhYmVscyhmYWNldHMpO1xuICAgICAgICAvLyBmYWNldHMgb3B0aW9uc1xuICAgICAgICB0aGlzLl9hZGRGYWNldHNPcHRpb25zKGZhY2V0cyk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVGYWNldHMoZmFjZXRzKTtcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVUb3RhbENvdW50KHRvdGFsQ291bnQpO1xuXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIGNvbnRleHQ6ICdnYWxsZXJ5JyxcbiAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgICAgcGFnaW5hdGlvblBhcmFtczogdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpLFxuICAgICAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICB0b3RhbDogdG90YWxDb3VudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRyYXdQYWdpbmF0aW9uKCk7XG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLl9ub3JtYWxpemVJdGVtcyhyZXN1bHRzLml0ZW1zKSB9KTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpIHtcbiAgICBpZiAoK3BhZ2UgPT09IHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICtwYWdlO1xuXG4gICAgY29uc3Qgc2VhcmNoQ29uZmlnID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRDb25maWcoKTtcbiAgICBjb25zdCBwYWdlQ29uZmlnID0gc2VhcmNoQ29uZmlnLnBhZ2U7XG4gICAgY29uc3QgeyBsaW1pdCB9ID0gcGFnZUNvbmZpZztcbiAgICBjb25zdCBuZXdPZmZzZXQgPSAodGhpcy5jdXJyZW50UGFnZSAtIDEpICogbGltaXQ7XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQobmV3T2Zmc2V0KTtcblxuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEZhY2V0c0xhYmVscyhmYWNldHMpIHtcbiAgICBmYWNldHNcbiAgICAgIC5maWx0ZXIoKGYpID0+IEFycmF5LmlzQXJyYXkoZi5kYXRhKSlcbiAgICAgIC5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGRhdGFJdGVtLmxhYmVsO1xuICAgICAgICAgIGRhdGFJdGVtLmxhYmVsID0gaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIHRoaXMucHJldHRpZnlMYWJlbHNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRGYWNldHNPcHRpb25zKGZhY2V0cykge1xuICAgIGZhY2V0c1xuICAgICAgLmZpbHRlcigoZikgPT4gZi5pZCA9PT0gJ3F1ZXJ5LWxpbmtzJylcbiAgICAgIC5mb3JFYWNoKChmKSA9PiB7XG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnS2V5c1tkYXRhSXRlbS52YWx1ZV07XG4gICAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgZGF0YUl0ZW0ub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgaWNvbjogY29uZmlnLmljb24sXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2NvbmZpZ1snY2xhc3MtbmFtZSddfWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZUl0ZW1zKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoc2luZ2xlSXRlbSkgPT4gKHsgaXRlbTogeyAuLi5zaW5nbGVJdGVtIH0gfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2lkZWJhclN0aWNreUNvbnRyb2woKSB7XG4gICAgLy8gbm8gc3RpY2t5IGZvciBJbnRlcm5ldCBFeHBsb3JlclxuICAgIGlmIChoZWxwZXJzLmJyb3dzZXJJc0lFKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcblxuICAgIHNvdXJjZSQucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd09mZnNldFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIGNvbnN0IHN0aWNreVBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1wYXJlbnQnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHdyYXBwZXJPZmZzZXRUb3AgPSBzdGlja3lQYXJlbnQgPyBzdGlja3lQYXJlbnQub2Zmc2V0VG9wIDogMDtcbiAgICAgIHRoaXMuc2lkZWJhcklzU3RpY2t5ID0gd3JhcHBlck9mZnNldFRvcCA8PSB3aW5kb3dPZmZzZXRUb3A7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uUGFyYW1zKCkge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHRoaXMuc2VhcmNoTW9kZWwuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcblxuICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHsgcXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV0gfHwgbnVsbDsgfSk7XG5cbiAgICAvLyBhZGl0aW9uYWwgcGFyYW1zXG4gICAgcXVlcnlQYXJhbXMub3JkZXJieSA9IHRoaXMub3JkZXJCeTtcbiAgICBxdWVyeVBhcmFtcy5vcmRlcmRpcmVjdGlvbiA9IHRoaXMub3JkZXJEaXJlY3Rpb247XG4gICAgcXVlcnlQYXJhbXMucGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgcXVlcnlQYXJhbXMubGltaXQgPSB0aGlzLnBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgaHJlZjogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5nYWxsZXJ5QmFzZVBhdGgsXG4gICAgfTtcbiAgfVxufVxuIl19