/**
 * @fileoverview added by tsickle
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
        this.orderByLabel = 'Ordina per';
        this.orderByOptions = [
            {
                value: 'label_ASC',
                label: 'Ordine alfabetico (A→Z)'
            },
            {
                value: 'label_DESC',
                label: 'Ordine alfabetico (Z→A)'
            }
        ];
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
        const [orderBy, direction] = payload.split('_');
        this.searchModel.setSearchConfigOrderBy(orderBy);
        this.searchModel.setSearchConfigDirection(direction);
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
        this.pageSize = payload;
        this.searchModel.setPageConfigLimit(payload);
        // reset page & offset
        this.currentPage = 1;
        this.searchModel.setPageConfigOffset(0);
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
                dynamicPagination: {
                    total: totalCount
                },
                size: this.pageSize
            });
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
                const key = dataItem.value.replace(' ', '-');
                /** @type {?} */
                const config = this.configKeys[key];
                if (config) {
                    dataItem.options = {
                        icon: config.icon,
                        classes: `color-${key}`
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
    AwSearchLayoutDS.prototype.options;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByLabel;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByOptions;
    /** @type {?} */
    AwSearchLayoutDS.prototype.getSearchModelId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsYUFBYSxFQUVkLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQWMsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7O01BRXhDLGVBQWUsR0FBRyxrQkFBa0I7QUFFMUMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFTekMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBSzNCLGdCQUFXLEdBQVEsQ0FBQyxDQUFDLENBQUMsK0JBQStCOztRQUNyRCxhQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCOztRQUMxQyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUl0QixpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QixtQkFBYyxHQUFRO1lBQzNCO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUseUJBQXlCO2FBQ2pDO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLEtBQUssRUFB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QXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLElBQUksZUFBZSxDQUFDO1FBQzdELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUEvTkMsc0NBQWlEOzs7OztJQUNqRCx5Q0FBMkI7Ozs7O0lBQzNCLHlDQUEyQjs7Ozs7SUFDM0IscUNBQXVCOzs7OztJQUN2QixrQ0FBOEI7Ozs7O0lBQzlCLHVDQUFpQzs7Ozs7SUFDakMsMENBQTRCOzs7OztJQUM1QixzQ0FBd0I7Ozs7O0lBQ3hCLG9DQUF5Qjs7Ozs7SUFDekIsOENBQWtDOztJQUVsQyxxQ0FBeUI7O0lBQ3pCLHdDQUE0Qjs7SUFDNUIsc0NBQTBCOztJQUMxQix1Q0FBNEI7O0lBQzVCLG9DQUFxQjs7SUFDckIsMkNBQStCOztJQUMvQiwwQ0FBNkI7O0lBRTdCLG1DQUFvQjs7SUFFcEIsd0NBQW1DOztJQUNuQywwQ0FTRTs7SUFnRkYsNENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQge1xuICBTZWFyY2hTZXJ2aWNlLFxuICBTZWFyY2hNb2RlbFxufSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMnO1xuaW1wb3J0IGZhY2V0c0NvbmZpZyBmcm9tICcuL3NlYXJjaC1mYWNldHMuY29uZmlnJztcbmltcG9ydCB7IHRhcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5jb25zdCBTRUFSQ0hfTU9ERUxfSUQgPSAnYXctc2VhcmNoLWxheW91dCc7XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuICBwcml2YXRlIHNlYXJjaDogU2VhcmNoU2VydmljZTtcbiAgcHJpdmF0ZSBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG4gIHByaXZhdGUgcHJldHRpZnlMYWJlbHM6IGFueTtcbiAgcHJpdmF0ZSBjb25maWdLZXlzOiBhbnk7XG4gIHByaXZhdGUgZmFsbGJhY2s6IHN0cmluZztcbiAgcHJpdmF0ZSByZXNldEJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcbiAgcHVibGljIHJlc3VsdHNUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgdG90YWxDb3VudDogbnVtYmVyO1xuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueSA9IDE7IC8vIHBhZ2luYXRpb24gdmFsdWUgKHVybCBwYXJhbSlcbiAgcHVibGljIHBhZ2VTaXplID0gMTA7IC8vIGxpbmtlZCBvYmplY3RzIHBhZ2Ugc2l6ZVxuICBwdWJsaWMgc2lkZWJhcklzU3RpY2t5ID0gZmFsc2U7XG4gIHB1YmxpYyBpc0ZpcnN0TG9hZGluZyA9IHRydWU7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBwdWJsaWMgb3JkZXJCeUxhYmVsID0gJ09yZGluYSBwZXInO1xuICBwdWJsaWMgb3JkZXJCeU9wdGlvbnM6IGFueSA9IFtcbiAgICB7XG4gICAgICB2YWx1ZTogJ2xhYmVsX0FTQycsXG4gICAgICBsYWJlbDogJ09yZGluZSBhbGZhYmV0aWNvIChB4oaSWiknXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2xhYmVsX0RFU0MnLFxuICAgICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoWuKGkkEpJ1xuICAgIH1cbiAgXTtcblxuICBvbkluaXQoeyBjb25maWd1cmF0aW9uLCBtYWluU3RhdGUsIG9wdGlvbnMsIGNvbW11bmljYXRpb24sIHNlYXJjaCB9KSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5wcmV0dGlmeUxhYmVscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2xhYmVscycpO1xuICAgIHRoaXMuY29uZmlnS2V5cyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyk7XG4gICAgdGhpcy5mYWxsYmFjayA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3NlYXJjaC1sYXlvdXQnKS5mYWxsYmFjaztcblxuICAgIHRoaXMucGFnZVRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnc2VhcmNoLWxheW91dCcpLnRpdGxlO1xuXG4gICAgLy8gcmVtb3ZlIGZpcnN0XG4gICAgLy8gc3RhdGVsZXNzIHNlYXJjaFxuICAgIGlmICh0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfTU9ERUxfSUQpKSB7XG4gICAgICB0aGlzLnNlYXJjaC5yZW1vdmUoU0VBUkNIX01PREVMX0lEKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaC5hZGQoU0VBUkNIX01PREVMX0lELCBjbG9uZURlZXAoZmFjZXRzQ29uZmlnKSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9IHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9NT0RFTF9JRCk7XG5cbiAgICAvLyBxdWVyeSBwYXJhbXMgY29udHJvbFxuICAgIGlmIChTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoU2VhcmNoU2VydmljZS5xdWVyeVBhcmFtcyk7XG4gICAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzaWRlYmFyIHN0aWNreSBjb250cm9sXG4gICAgdGhpcy5fc2lkZWJhclN0aWNreUNvbnRyb2woKTtcblxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdyaWNlcmNhJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBSaWNlcmNhJyk7XG4gIH1cblxuICBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICBTZWFyY2hTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gbnVsbDtcbiAgfVxuXG4gIG9uU2VhcmNoUmVzcG9uc2UoKXtcbiAgICB0aGlzLnJlc2V0QnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuaXNGaXJzdExvYWRpbmcpIHtcbiAgICAgIHRoaXMuaXNGaXJzdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMub25lKCdmYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh7IHNlYXJjaE1vZGVsOiB0aGlzLnNlYXJjaE1vZGVsIH0pO1xuICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3JkZXJCeUNoYW5nZShwYXlsb2FkKSB7XG4gICAgY29uc3QgW29yZGVyQnksIGRpcmVjdGlvbl0gPSBwYXlsb2FkLnNwbGl0KCdfJyk7XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFNlYXJjaENvbmZpZ09yZGVyQnkob3JkZXJCeSk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRTZWFyY2hDb25maWdEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkNoYW5nZShwYXlsb2FkKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgncGFnZS0nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSk7XG4gIH1cblxuICBvblBhZ2luYXRpb25Hb1RvQ2hhbmdlKHBheWxvYWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBwYWdlID0gcGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKTtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZShwYWdlKTtcbiAgfVxuXG4gIHJlc2V0UGFnaW5hdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVTZWFyY2hQYWdlKDEpO1xuICB9XG5cbiAgb25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZCkge1xuICAgIHRoaXMucGFnZVNpemUgPSBwYXlsb2FkO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ0xpbWl0KHBheWxvYWQpO1xuXG4gICAgLy8gcmVzZXQgcGFnZSAmIG9mZnNldFxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldCgwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWFyY2hNb2RlbElkID0gKCkgPT4gU0VBUkNIX01PREVMX0lEO1xuXG4gIHB1YmxpYyBkb1NlYXJjaFJlcXVlc3QkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgIGNvbnN0IHJlcXVlc3RQYXlsb2FkID0ge1xuICAgICAgc2VhcmNoUGFyYW1ldGVyczoge1xuICAgICAgICAvLyBGSVhNRTogdG9nbGllcmUgdG90YWxDb3VudFxuICAgICAgICB0b3RhbENvdW50OiAxMDAsXG4gICAgICAgIC4uLnJlcXVlc3RQYXJhbXNcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3NlYXJjaCcsIHtcbiAgICAgIG9uRXJyb3I6IGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiByZXF1ZXN0UGF5bG9hZFxuICAgIH0pLnBpcGUoXG4gICAgICB0YXAoKHsgdG90YWxDb3VudCwgcmVzdWx0cywgZmFjZXRzIH0pID0+IHtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgICAgICAgbGV0IHJlc3VsdHNUaXRsZUluZGV4ID0gMDtcbiAgICAgICAgLy8gcmVzdWx0cyB0aXRsZVxuICAgICAgICBpZiAodGhpcy50b3RhbENvdW50ID4gMSkge1xuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvdGFsQ291bnQgPT09IDEpIHtcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykucmVzdWx0c1tcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIGZhY2V0cyBsYWJlbHNcbiAgICAgICAgdGhpcy5fYWRkRmFjZXRzTGFiZWxzKGZhY2V0cyk7XG4gICAgICAgIC8vIGZhY2V0cyBvcHRpb25zXG4gICAgICAgIHRoaXMuX2FkZEZhY2V0c09wdGlvbnMoZmFjZXRzKTtcblxuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZhY2V0cyhmYWNldHMpO1xuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZVRvdGFsQ291bnQodG90YWxDb3VudCk7XG5cbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgY29udGV4dDogJ3NlYXJjaCcsXG4gICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICB0b3RhbDogdG90YWxDb3VudFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2l6ZTogdGhpcy5wYWdlU2l6ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUoeyBpdGVtczogdGhpcy5fbm9ybWFsaXplSXRlbXMocmVzdWx0cy5pdGVtcykgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTZWFyY2hQYWdlKHBhZ2UpIHtcbiAgICBpZiAoK3BhZ2UgPT09IHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICtwYWdlO1xuXG4gICAgY29uc3Qgc2VhcmNoQ29uZmlnID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRDb25maWcoKSxcbiAgICAgIHBhZ2VDb25maWcgPSBzZWFyY2hDb25maWcucGFnZSxcbiAgICAgIHsgbGltaXQgfSA9IHBhZ2VDb25maWcsXG4gICAgICBuZXdPZmZzZXQgPSAodGhpcy5jdXJyZW50UGFnZSAtIDEpICogbGltaXQ7XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQobmV3T2Zmc2V0KTtcblxuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEZhY2V0c0xhYmVscyhmYWNldHMpIHtcbiAgICBmYWNldHNcbiAgICAgIC5maWx0ZXIoZiA9PiBBcnJheS5pc0FycmF5KGYuZGF0YSkpXG4gICAgICAuZm9yRWFjaChmID0+IHtcbiAgICAgICAgZi5kYXRhLmZvckVhY2goZGF0YUl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGRhdGFJdGVtLmxhYmVsO1xuICAgICAgICAgIGRhdGFJdGVtLmxhYmVsID0gaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIHRoaXMucHJldHRpZnlMYWJlbHNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRGYWNldHNPcHRpb25zKGZhY2V0cykge1xuICAgIGZhY2V0c1xuICAgICAgLmZpbHRlcihmID0+IGYuaWQgPT09ICdxdWVyeS1saW5rcycpXG4gICAgICAuZm9yRWFjaChmID0+IHtcbiAgICAgICAgZi5kYXRhLmZvckVhY2goZGF0YUl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGRhdGFJdGVtLnZhbHVlLnJlcGxhY2UoJyAnLCAnLScpLFxuICAgICAgICAgICAgY29uZmlnID0gdGhpcy5jb25maWdLZXlzW2tleV07XG4gICAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgZGF0YUl0ZW0ub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgaWNvbjogY29uZmlnLmljb24sXG4gICAgICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2tleX1gXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZUl0ZW1zKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChzaW5nbGVJdGVtID0+ICh7IGl0ZW06IHsgLi4uc2luZ2xlSXRlbSB9IH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NpZGViYXJTdGlja3lDb250cm9sKCkge1xuICAgIGNvbnN0IHNvdXJjZSQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJyk7XG5cbiAgICBzb3VyY2UkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd09mZnNldFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgd3JhcHBlck9mZnNldFRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1wYXJlbnQnKVswXVsnb2Zmc2V0VG9wJ107XG4gICAgICB0aGlzLnNpZGViYXJJc1N0aWNreSA9IHdyYXBwZXJPZmZzZXRUb3AgPD0gd2luZG93T2Zmc2V0VG9wO1xuICAgIH0pO1xuICB9XG59XG4iXX0=