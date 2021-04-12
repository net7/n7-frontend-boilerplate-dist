import { __assign, __extends } from "tslib";
import { cloneDeep } from 'lodash';
import { LayoutDataSource } from '@n7-frontend/core';
import { tap, takeUntil } from 'rxjs/operators';
import { of, fromEvent, Subject, BehaviorSubject, forkJoin } from 'rxjs';
import facetsConfig from './search-facets.config';
import helpers from '../../../common/helpers';
import { AwSearchModel } from '../../search/aw-search.model';
import entityLinksHelper from '../../search/entity-links.helper';
var AwSearchLayoutDS = /** @class */ (function (_super) {
    __extends(AwSearchLayoutDS, _super);
    function AwSearchLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layoutId = 'aw-search-layout';
        _this.configId = 'search-layout';
        _this.currentNav = 'ricerca';
        _this.headTitle = 'Arianna4View - Ricerca';
        _this.facetsConfig = facetsConfig;
        _this.paginationList = [10, 25, 50];
        _this.destroyed$ = new Subject();
        _this.resetButtonEnabled = true;
        /** Pagination value (url parameter) */
        _this.currentPage = 1;
        /** Linked objects page size */
        _this.pageSize = 10;
        _this.sidebarIsSticky = false;
        _this.isFirstLoading = true;
        _this.resultsLoading = false;
        /** True when the user has input a text string */
        _this.isSearchingText = new BehaviorSubject(false);
        /** Current order method */
        _this.orderBy = 'label_sort';
        /** Current order direction */
        _this.orderDirection = 'ASC';
        _this.orderByLabel = 'Ordina per';
        /** Options used to render the HTMLSelect */
        _this.orderByOptions = [
            {
                value: '_score_DESC',
                label: 'Ordine per pertinenza',
                type: 'score',
                selected: false
            }, {
                value: 'label_sort_ASC',
                label: 'Ordine alfabetico (A→Z)',
                type: 'text',
                selected: true // Mirrors the default sorting method in `search-facets.config.ts`
            }, {
                value: 'label_sort_DESC',
                label: 'Ordine alfabetico (Z→A)',
                type: 'text',
                selected: false
            }
        ];
        _this.drawPagination = function () {
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
                    list: _this.paginationList,
                    active: _this.pageSize,
                },
            });
        };
        _this.getSearchModelId = function () { return _this.layoutId; };
        return _this;
    }
    AwSearchLayoutDS.prototype.onInit = function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, communication = _a.communication, search = _a.search;
        this.configuration = configuration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.options = options;
        this.prettifyLabels = this.configuration.get('labels');
        this.configKeys = this.configuration.get('config-keys');
        this.fallback = this.configuration.get(this.configId).fallback;
        this.pageTitle = this.configuration.get(this.configId).title;
        // remove first
        // stateless search
        if (this.search.model(this.layoutId)) {
            this.search.remove(this.layoutId);
        }
        this.search.add(this.layoutId, cloneDeep(this.facetsConfig));
        this.searchModel = this.search.model(this.layoutId);
        // query params control
        if (AwSearchModel.queryParams) {
            this.searchModel.updateFiltersFromQueryParams(AwSearchModel.queryParams);
            AwSearchModel.queryParams = null;
        }
        this._sidebarStickyControl();
        this.mainState.updateCustom('currentNav', this.currentNav);
        this.mainState.update('headTitle', this.headTitle);
    };
    AwSearchLayoutDS.prototype.onDestroy = function () {
        this.destroyed$.next();
        AwSearchModel.queryParams = null;
    };
    AwSearchLayoutDS.prototype.onSearchResponse = function () {
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
    AwSearchLayoutDS.prototype.onOrderByChange = function (payload) {
        var orderBy = payload.substring(0, payload.lastIndexOf('_'));
        var direction = payload.substring(payload.lastIndexOf('_') + 1);
        var type = '';
        // set selected
        this.orderByOptions.forEach(function (option) {
            if (option.value === payload) {
                option.selected = true;
                type = option.type;
            }
            else {
                option.selected = false;
            }
        });
        this.orderBy = orderBy;
        this.orderDirection = direction;
        this.searchModel.setSearchConfigOrderBy(orderBy);
        this.searchModel.setSearchConfigDirection(direction);
        this.searchModel.setSearchConfigType(type);
    };
    AwSearchLayoutDS.prototype.onPageSizeChange = function (size) {
        this.pageSize = size;
        return this._updateSearchPage(this.currentPage);
    };
    AwSearchLayoutDS.prototype.onPaginationChange = function (payload) {
        var page = payload.replace('page-', '');
        return this._updateSearchPage(page);
    };
    AwSearchLayoutDS.prototype.onPaginationGoToChange = function (payload) {
        var page = payload.replace('goto-', '');
        return this._updateSearchPage(page);
    };
    AwSearchLayoutDS.prototype.resetPagination = function () {
        this._updateSearchPage(1);
    };
    AwSearchLayoutDS.prototype.onResultsLimitChange = function (payload) {
        this.setLimit(payload);
        // reset page & offset
        this.currentPage = 1;
        this.searchModel.setPageConfigOffset(0);
    };
    AwSearchLayoutDS.prototype.setLimit = function (payload) {
        this.pageSize = payload;
        this.searchModel.setPageConfigLimit(payload);
        this.searchModel.setPageConfigOffset((this.currentPage - 1) * this.pageSize);
    };
    AwSearchLayoutDS.prototype.getResultsReq$ = function (params) {
        var _this = this;
        return this.communication.request$('search', {
            params: params,
            onError: function (error) { return console.error(error); },
        }).pipe(tap(function (_a) {
            var totalCount = _a.totalCount, results = _a.results;
            _this.totalCount = totalCount;
            var resultsTitleIndex = 0;
            // results title
            if (_this.totalCount > 1) {
                resultsTitleIndex = 2;
            }
            else if (_this.totalCount === 1) {
                resultsTitleIndex = 1;
            }
            _this.resultsTitle = _this.configuration.get(_this.configId).results[resultsTitleIndex];
            _this.searchModel.updateTotalCount(totalCount);
            _this.one('aw-linked-objects').updateOptions({
                context: _this.configId === 'gallery-layout' ? 'gallery' : 'search',
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
        }));
    };
    AwSearchLayoutDS.prototype.getFacetsReq$ = function (params) {
        var _this = this;
        return this.communication.request$('facets', {
            params: params,
            onError: function (error) { return console.error(error); },
        }).pipe(tap(function (_a) {
            var facets = _a.facets;
            // entity links pagination control
            entityLinksHelper.onFacetsResponse(_this.searchModel, facets);
            // facets labels
            _this._addFacetsLabels(facets);
            // facets options
            _this._addFacetsOptions(facets);
            _this.searchModel.updateFacets(facets);
        }));
    };
    AwSearchLayoutDS.prototype.doSearchRequest$ = function () {
        var requestParams = this.searchModel.getRequestParams();
        var params = {
            searchParameters: __assign({ totalCount: 0, gallery: !!(this.configId === 'gallery-layout') }, requestParams),
        };
        // update offset
        entityLinksHelper.resetOffset();
        entityLinksHelper.updateParamsOffset(params.searchParameters);
        // initial loader
        entityLinksHelper.addInitialLoader(this);
        var resultsReq$ = this.getResultsReq$(params);
        var facetsReq$ = this.getFacetsReq$(params);
        return forkJoin(resultsReq$, facetsReq$);
    };
    AwSearchLayoutDS.prototype._updateSearchPage = function (page) {
        if (+page === this.currentPage) {
            return of(false);
        }
        this.currentPage = +page;
        var searchConfig = this.searchModel.getConfig();
        var pageConfig = searchConfig.page;
        var limit = pageConfig.limit;
        var newOffset = (this.currentPage - 1) * limit;
        this.searchModel.setPageConfigOffset(newOffset);
        return of(true);
    };
    AwSearchLayoutDS.prototype._addFacetsLabels = function (facets) {
        var _this = this;
        facets
            .filter(function (f) { return Array.isArray(f.data); })
            .forEach(function (f) {
            f.data.forEach(function (dataItem) {
                var key = dataItem.label;
                dataItem.label = helpers.prettifySnakeCase(key, _this.prettifyLabels[key]);
            });
        });
    };
    AwSearchLayoutDS.prototype._addFacetsOptions = function (facets) {
        var _this = this;
        facets
            .filter(function (f) { return f.id === 'query-links'; })
            .forEach(function (f) {
            f.data.forEach(function (dataItem) {
                var config = _this.configKeys[dataItem.value];
                if (config) {
                    dataItem.options = {
                        icon: config.icon,
                        classes: "color-" + config['class-name'],
                    };
                }
            });
        });
    };
    AwSearchLayoutDS.prototype._normalizeItems = function (items) {
        return items.map(function (singleItem) { return ({ item: __assign({}, singleItem) }); });
    };
    AwSearchLayoutDS.prototype._sidebarStickyControl = function () {
        var _this = this;
        // no sticky for Internet Explorer
        if (helpers.browserIsIE()) {
            return;
        }
        var source$ = fromEvent(window, 'scroll');
        source$.pipe(takeUntil(this.destroyed$)).subscribe(function () {
            var windowOffsetTop = window.pageYOffset;
            var stickyParent = document.getElementsByClassName('sticky-parent')[0];
            var wrapperOffsetTop = stickyParent ? stickyParent.offsetTop : 0;
            _this.sidebarIsSticky = wrapperOffsetTop <= windowOffsetTop;
        });
    };
    AwSearchLayoutDS.prototype._getPaginationParams = function () {
        var requestParams = this.searchModel.getRequestParams();
        var queryParams = this.searchModel.filtersAsQueryParams(requestParams.filters);
        Object.keys(queryParams).forEach(function (key) { queryParams[key] = queryParams[key] || null; });
        // aditional params
        queryParams.orderby = this.orderBy;
        queryParams.orderdirection = this.orderDirection;
        queryParams.page = this.currentPage;
        queryParams.limit = this.pageSize;
        var href = this.configuration.get('paths').searchBasePath;
        if (this.configId === 'gallery-layout') {
            href = this.configuration.get('paths').galleryBasePath;
        }
        return {
            href: href,
            queryParams: queryParams,
        };
    };
    return AwSearchLayoutDS;
}(LayoutDataSource));
export { AwSearchLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsR0FBRyxFQUFFLFNBQVMsRUFDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFDTyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUM5RCxNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLGlCQUFpQixNQUFNLGtDQUFrQyxDQUFDO0FBRWpFO0lBQXNDLG9DQUFnQjtJQUF0RDtRQUFBLHFFQTRXQztRQTNXUSxjQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFFOUIsY0FBUSxHQUFHLGVBQWUsQ0FBQztRQUUzQixnQkFBVSxHQUFHLFNBQVMsQ0FBQztRQUV2QixlQUFTLEdBQUcsd0JBQXdCLENBQUM7UUFFckMsa0JBQVksR0FBUSxZQUFZLENBQUM7UUFFakMsb0JBQWMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFN0IsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWtCMUMsd0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBUWpDLHVDQUF1QztRQUNoQyxpQkFBVyxHQUFRLENBQUMsQ0FBQztRQUU1QiwrQkFBK0I7UUFD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LG1CQUFtQjtRQUNuQixXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkMsV0FBVyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2pELFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxnQkFBZ0IsRUFBRTtZQUN0QyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDO1NBQ3hEO1FBRUQsT0FBTztZQUNMLElBQUksTUFBQTtZQUNKLFdBQVcsYUFBQTtTQUNaLENBQUM7SUFDSixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBNVdELENBQXNDLGdCQUFnQixHQTRXckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIHRhcCwgdGFrZVVudGlsXHJcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIE9ic2VydmFibGUsIG9mLCBmcm9tRXZlbnQsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgZm9ya0pvaW5cclxufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IGZhY2V0c0NvbmZpZyBmcm9tICcuL3NlYXJjaC1mYWNldHMuY29uZmlnJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBBd1NlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZWFyY2gvYXctc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBd1NlYXJjaE1vZGVsIH0gZnJvbSAnLi4vLi4vc2VhcmNoL2F3LXNlYXJjaC5tb2RlbCc7XHJcbmltcG9ydCBlbnRpdHlMaW5rc0hlbHBlciBmcm9tICcuLi8uLi9zZWFyY2gvZW50aXR5LWxpbmtzLmhlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyBsYXlvdXRJZCA9ICdhdy1zZWFyY2gtbGF5b3V0JztcclxuXHJcbiAgcHVibGljIGNvbmZpZ0lkID0gJ3NlYXJjaC1sYXlvdXQnO1xyXG5cclxuICBwdWJsaWMgY3VycmVudE5hdiA9ICdyaWNlcmNhJztcclxuXHJcbiAgcHVibGljIGhlYWRUaXRsZSA9ICdBcmlhbm5hNFZpZXcgLSBSaWNlcmNhJztcclxuXHJcbiAgcHVibGljIGZhY2V0c0NvbmZpZzogYW55ID0gZmFjZXRzQ29uZmlnO1xyXG5cclxuICBwdWJsaWMgcGFnaW5hdGlvbkxpc3QgPSBbMTAsIDI1LCA1MF07XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xyXG5cclxuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xyXG5cclxuICBwcml2YXRlIHNlYXJjaDogQXdTZWFyY2hTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIHNlYXJjaE1vZGVsOiBBd1NlYXJjaE1vZGVsO1xyXG5cclxuICBwcml2YXRlIHByZXR0aWZ5TGFiZWxzOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgY29uZmlnS2V5czogYW55O1xyXG5cclxuICBwdWJsaWMgZmFsbGJhY2s6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHJlc2V0QnV0dG9uRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHJlc3VsdHNUaXRsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgdG90YWxDb3VudDogbnVtYmVyO1xyXG5cclxuICAvKiogUGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtZXRlcikgKi9cclxuICBwdWJsaWMgY3VycmVudFBhZ2U6IGFueSA9IDE7XHJcblxyXG4gIC8qKiBMaW5rZWQgb2JqZWN0cyBwYWdlIHNpemUgKi9cclxuICBwdWJsaWMgcGFnZVNpemUgPSAxMDtcclxuXHJcbiAgcHVibGljIHNpZGViYXJJc1N0aWNreSA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgaXNGaXJzdExvYWRpbmcgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgcmVzdWx0c0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFRydWUgd2hlbiB0aGUgdXNlciBoYXMgaW5wdXQgYSB0ZXh0IHN0cmluZyAqL1xyXG4gIHB1YmxpYyBpc1NlYXJjaGluZ1RleHQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgLyoqIEN1cnJlbnQgb3JkZXIgbWV0aG9kICovXHJcbiAgcHVibGljIG9yZGVyQnkgPSAnbGFiZWxfc29ydCc7XHJcblxyXG4gIC8qKiBDdXJyZW50IG9yZGVyIGRpcmVjdGlvbiAqL1xyXG4gIHB1YmxpYyBvcmRlckRpcmVjdGlvbiA9ICdBU0MnO1xyXG5cclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG5cclxuICBwdWJsaWMgb3JkZXJCeUxhYmVsID0gJ09yZGluYSBwZXInO1xyXG5cclxuICAvKiogT3B0aW9ucyB1c2VkIHRvIHJlbmRlciB0aGUgSFRNTFNlbGVjdCAqL1xyXG4gIHB1YmxpYyBvcmRlckJ5T3B0aW9uczogYW55ID0gW1xyXG4gICAge1xyXG4gICAgICB2YWx1ZTogJ19zY29yZV9ERVNDJyxcclxuICAgICAgbGFiZWw6ICdPcmRpbmUgcGVyIHBlcnRpbmVuemEnLFxyXG4gICAgICB0eXBlOiAnc2NvcmUnLFxyXG4gICAgICBzZWxlY3RlZDogZmFsc2VcclxuICAgIH0sIHtcclxuICAgICAgdmFsdWU6ICdsYWJlbF9zb3J0X0FTQycsXHJcbiAgICAgIGxhYmVsOiAnT3JkaW5lIGFsZmFiZXRpY28gKEHihpJaKScsXHJcbiAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgc2VsZWN0ZWQ6IHRydWUgLy8gTWlycm9ycyB0aGUgZGVmYXVsdCBzb3J0aW5nIG1ldGhvZCBpbiBgc2VhcmNoLWZhY2V0cy5jb25maWcudHNgXHJcbiAgICB9LCB7XHJcbiAgICAgIHZhbHVlOiAnbGFiZWxfc29ydF9ERVNDJyxcclxuICAgICAgbGFiZWw6ICdPcmRpbmUgYWxmYWJldGljbyAoWuKGkkEpJyxcclxuICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICBzZWxlY3RlZDogZmFsc2VcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCBjb21tdW5pY2F0aW9uLCBzZWFyY2gsXHJcbiAgfSkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMucHJldHRpZnlMYWJlbHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKTtcclxuICAgIHRoaXMuY29uZmlnS2V5cyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyk7XHJcbiAgICB0aGlzLmZhbGxiYWNrID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKS5mYWxsYmFjaztcclxuICAgIHRoaXMucGFnZVRpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKS50aXRsZTtcclxuICAgIC8vIHJlbW92ZSBmaXJzdFxyXG4gICAgLy8gc3RhdGVsZXNzIHNlYXJjaFxyXG4gICAgaWYgKHRoaXMuc2VhcmNoLm1vZGVsKHRoaXMubGF5b3V0SWQpKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoLnJlbW92ZSh0aGlzLmxheW91dElkKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VhcmNoLmFkZCh0aGlzLmxheW91dElkLCBjbG9uZURlZXAodGhpcy5mYWNldHNDb25maWcpKTtcclxuICAgIHRoaXMuc2VhcmNoTW9kZWwgPSB0aGlzLnNlYXJjaC5tb2RlbCh0aGlzLmxheW91dElkKTtcclxuICAgIC8vIHF1ZXJ5IHBhcmFtcyBjb250cm9sXHJcbiAgICBpZiAoQXdTZWFyY2hNb2RlbC5xdWVyeVBhcmFtcykge1xyXG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMoQXdTZWFyY2hNb2RlbC5xdWVyeVBhcmFtcyk7XHJcbiAgICAgIEF3U2VhcmNoTW9kZWwucXVlcnlQYXJhbXMgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2lkZWJhclN0aWNreUNvbnRyb2woKTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsIHRoaXMuY3VycmVudE5hdik7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIHRoaXMuaGVhZFRpdGxlKTtcclxuICB9XHJcblxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICBBd1NlYXJjaE1vZGVsLnF1ZXJ5UGFyYW1zID0gbnVsbDtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoUmVzcG9uc2UoKSB7XHJcbiAgICB0aGlzLnJlc2V0QnV0dG9uRW5hYmxlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5pc0ZpcnN0TG9hZGluZykge1xyXG4gICAgICB0aGlzLmlzRmlyc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMub25lKCdmYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh7IHNlYXJjaE1vZGVsOiB0aGlzLnNlYXJjaE1vZGVsIH0pO1xyXG4gICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGNoYW5nZXMgb2YgdGhlIEhUTUxTZWxlY3Qgb3JkZXIgY29udHJvbFxyXG4gICAqIEBwYXJhbSBwYXlsb2FkIF9zY29yZV9ERVNDLCBsYWJlbF9zb3J0X0FTQywgbGFiZWxfc29ydF9ERVNDXHJcbiAgICovXHJcbiAgb25PcmRlckJ5Q2hhbmdlKHBheWxvYWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgb3JkZXJCeSA9IHBheWxvYWQuc3Vic3RyaW5nKDAsIHBheWxvYWQubGFzdEluZGV4T2YoJ18nKSk7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBwYXlsb2FkLnN1YnN0cmluZyhwYXlsb2FkLmxhc3RJbmRleE9mKCdfJykgKyAxKTtcclxuICAgIGxldCB0eXBlID0gJyc7XHJcbiAgICAvLyBzZXQgc2VsZWN0ZWRcclxuICAgIHRoaXMub3JkZXJCeU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IHBheWxvYWQpIHtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHR5cGUgPSBvcHRpb24udHlwZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9yZGVyQnkgPSBvcmRlckJ5O1xyXG4gICAgdGhpcy5vcmRlckRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnT3JkZXJCeShvcmRlckJ5KTtcclxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnRGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFNlYXJjaENvbmZpZ1R5cGUodHlwZSk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2VTaXplQ2hhbmdlKHNpemUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHRoaXMucGFnZVNpemUgPSBzaXplO1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UodGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2luYXRpb25DaGFuZ2UocGF5bG9hZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgncGFnZS0nLCAnJyk7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZShwYWdlKTtcclxuICB9XHJcblxyXG4gIG9uUGFnaW5hdGlvbkdvVG9DaGFuZ2UocGF5bG9hZCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJyk7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZShwYWdlKTtcclxuICB9XHJcblxyXG4gIGRyYXdQYWdpbmF0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBocmVmLCBxdWVyeVBhcmFtcyB9ID0gdGhpcy5fZ2V0UGFnaW5hdGlvblBhcmFtcygpO1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgbW9kZTogJ2hyZWYnLFxyXG4gICAgICBocmVmLFxyXG4gICAgICBxdWVyeVBhcmFtcyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUoe1xyXG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodGhpcy50b3RhbENvdW50IC8gdGhpcy5wYWdlU2l6ZSksXHJcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICBwYWdlTGltaXQ6IDUsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgbGlzdDogdGhpcy5wYWdpbmF0aW9uTGlzdCxcclxuICAgICAgICBhY3RpdmU6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0UGFnaW5hdGlvbigpIHtcclxuICAgIHRoaXMuX3VwZGF0ZVNlYXJjaFBhZ2UoMSk7XHJcbiAgfVxyXG5cclxuICBvblJlc3VsdHNMaW1pdENoYW5nZShwYXlsb2FkKSB7XHJcbiAgICB0aGlzLnNldExpbWl0KHBheWxvYWQpO1xyXG5cclxuICAgIC8vIHJlc2V0IHBhZ2UgJiBvZmZzZXRcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgdGhpcy5zZWFyY2hNb2RlbC5zZXRQYWdlQ29uZmlnT2Zmc2V0KDApO1xyXG4gIH1cclxuXHJcbiAgc2V0TGltaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5wYWdlU2l6ZSA9IHBheWxvYWQ7XHJcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdMaW1pdChwYXlsb2FkKTtcclxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldCgodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U2VhcmNoTW9kZWxJZCA9ICgpID0+IHRoaXMubGF5b3V0SWQ7XHJcblxyXG4gIHByaXZhdGUgZ2V0UmVzdWx0c1JlcSQocGFyYW1zKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3NlYXJjaCcsIHtcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgfSkucGlwZShcclxuICAgICAgdGFwKCh7IHRvdGFsQ291bnQsIHJlc3VsdHMgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgICAgICAgbGV0IHJlc3VsdHNUaXRsZUluZGV4ID0gMDtcclxuICAgICAgICAvLyByZXN1bHRzIHRpdGxlXHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCA+IDEpIHtcclxuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4ID0gMjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG90YWxDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgcmVzdWx0c1RpdGxlSW5kZXggPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3VsdHNUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkucmVzdWx0c1tcclxuICAgICAgICAgIHJlc3VsdHNUaXRsZUluZGV4XHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZVRvdGFsQ291bnQodG90YWxDb3VudCk7XHJcblxyXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICAgICAgY29udGV4dDogdGhpcy5jb25maWdJZCA9PT0gJ2dhbGxlcnktbGF5b3V0JyA/ICdnYWxsZXJ5JyA6ICdzZWFyY2gnLFxyXG4gICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgICBwYWdlOiB0aGlzLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIHBhZ2luYXRpb25QYXJhbXM6IHRoaXMuX2dldFBhZ2luYXRpb25QYXJhbXMoKSxcclxuICAgICAgICAgIGR5bmFtaWNQYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHRvdGFsOiB0b3RhbENvdW50LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kcmF3UGFnaW5hdGlvbigpO1xyXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiB0aGlzLl9ub3JtYWxpemVJdGVtcyhyZXN1bHRzLml0ZW1zKSB9KTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGYWNldHNSZXEkKHBhcmFtcykge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZmFjZXRzJywge1xyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICB9KS5waXBlKFxyXG4gICAgICB0YXAoKHsgZmFjZXRzIH0pID0+IHtcclxuICAgICAgICAvLyBlbnRpdHkgbGlua3MgcGFnaW5hdGlvbiBjb250cm9sXHJcbiAgICAgICAgZW50aXR5TGlua3NIZWxwZXIub25GYWNldHNSZXNwb25zZSh0aGlzLnNlYXJjaE1vZGVsLCBmYWNldHMpO1xyXG4gICAgICAgIC8vIGZhY2V0cyBsYWJlbHNcclxuICAgICAgICB0aGlzLl9hZGRGYWNldHNMYWJlbHMoZmFjZXRzKTtcclxuICAgICAgICAvLyBmYWNldHMgb3B0aW9uc1xyXG4gICAgICAgIHRoaXMuX2FkZEZhY2V0c09wdGlvbnMoZmFjZXRzKTtcclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZhY2V0cyhmYWNldHMpO1xyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZG9TZWFyY2hSZXF1ZXN0JCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xyXG4gICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICBzZWFyY2hQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgdG90YWxDb3VudDogMCwgLy8gZmFrZSBwYXJhbSBmb3IgYXBvbGxvXHJcbiAgICAgICAgZ2FsbGVyeTogISEodGhpcy5jb25maWdJZCA9PT0gJ2dhbGxlcnktbGF5b3V0JyksXHJcbiAgICAgICAgLi4ucmVxdWVzdFBhcmFtcyxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICAvLyB1cGRhdGUgb2Zmc2V0XHJcbiAgICBlbnRpdHlMaW5rc0hlbHBlci5yZXNldE9mZnNldCgpO1xyXG4gICAgZW50aXR5TGlua3NIZWxwZXIudXBkYXRlUGFyYW1zT2Zmc2V0KHBhcmFtcy5zZWFyY2hQYXJhbWV0ZXJzKTtcclxuICAgIC8vIGluaXRpYWwgbG9hZGVyXHJcbiAgICBlbnRpdHlMaW5rc0hlbHBlci5hZGRJbml0aWFsTG9hZGVyKHRoaXMpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdHNSZXEkID0gdGhpcy5nZXRSZXN1bHRzUmVxJChwYXJhbXMpO1xyXG4gICAgY29uc3QgZmFjZXRzUmVxJCA9IHRoaXMuZ2V0RmFjZXRzUmVxJChwYXJhbXMpO1xyXG4gICAgcmV0dXJuIGZvcmtKb2luKHJlc3VsdHNSZXEkLCBmYWNldHNSZXEkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZVNlYXJjaFBhZ2UocGFnZSkge1xyXG4gICAgaWYgKCtwYWdlID09PSB0aGlzLmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgIHJldHVybiBvZihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICtwYWdlO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0Q29uZmlnKCk7XHJcbiAgICBjb25zdCBwYWdlQ29uZmlnID0gc2VhcmNoQ29uZmlnLnBhZ2U7XHJcbiAgICBjb25zdCB7IGxpbWl0IH0gPSBwYWdlQ29uZmlnO1xyXG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIGxpbWl0O1xyXG5cclxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ09mZnNldChuZXdPZmZzZXQpO1xyXG5cclxuICAgIHJldHVybiBvZih0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2FkZEZhY2V0c0xhYmVscyhmYWNldHMpIHtcclxuICAgIGZhY2V0c1xyXG4gICAgICAuZmlsdGVyKChmKSA9PiBBcnJheS5pc0FycmF5KGYuZGF0YSkpXHJcbiAgICAgIC5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgZi5kYXRhLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBrZXkgPSBkYXRhSXRlbS5sYWJlbDtcclxuICAgICAgICAgIGRhdGFJdGVtLmxhYmVsID0gaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIHRoaXMucHJldHRpZnlMYWJlbHNba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYWRkRmFjZXRzT3B0aW9ucyhmYWNldHMpIHtcclxuICAgIGZhY2V0c1xyXG4gICAgICAuZmlsdGVyKChmKSA9PiBmLmlkID09PSAncXVlcnktbGlua3MnKVxyXG4gICAgICAuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgIGYuZGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWdLZXlzW2RhdGFJdGVtLnZhbHVlXTtcclxuICAgICAgICAgIGlmIChjb25maWcpIHtcclxuICAgICAgICAgICAgZGF0YUl0ZW0ub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICBpY29uOiBjb25maWcuaWNvbixcclxuICAgICAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtjb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX25vcm1hbGl6ZUl0ZW1zKGl0ZW1zKSB7XHJcbiAgICByZXR1cm4gaXRlbXMubWFwKChzaW5nbGVJdGVtKSA9PiAoeyBpdGVtOiB7IC4uLnNpbmdsZUl0ZW0gfSB9KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zaWRlYmFyU3RpY2t5Q29udHJvbCgpIHtcclxuICAgIC8vIG5vIHN0aWNreSBmb3IgSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgIGlmIChoZWxwZXJzLmJyb3dzZXJJc0lFKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKTtcclxuXHJcbiAgICBzb3VyY2UkLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zdCB3aW5kb3dPZmZzZXRUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgIGNvbnN0IHN0aWNreVBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreS1wYXJlbnQnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgY29uc3Qgd3JhcHBlck9mZnNldFRvcCA9IHN0aWNreVBhcmVudCA/IHN0aWNreVBhcmVudC5vZmZzZXRUb3AgOiAwO1xyXG4gICAgICB0aGlzLnNpZGViYXJJc1N0aWNreSA9IHdyYXBwZXJPZmZzZXRUb3AgPD0gd2luZG93T2Zmc2V0VG9wO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQYWdpbmF0aW9uUGFyYW1zKCkge1xyXG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xyXG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKHJlcXVlc3RQYXJhbXMuZmlsdGVycyk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4geyBxdWVyeVBhcmFtc1trZXldID0gcXVlcnlQYXJhbXNba2V5XSB8fCBudWxsOyB9KTtcclxuXHJcbiAgICAvLyBhZGl0aW9uYWwgcGFyYW1zXHJcbiAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gdGhpcy5vcmRlckJ5O1xyXG4gICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSB0aGlzLm9yZGVyRGlyZWN0aW9uO1xyXG4gICAgcXVlcnlQYXJhbXMucGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7XHJcbiAgICBxdWVyeVBhcmFtcy5saW1pdCA9IHRoaXMucGFnZVNpemU7XHJcblxyXG4gICAgbGV0IGhyZWYgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNlYXJjaEJhc2VQYXRoO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnSWQgPT09ICdnYWxsZXJ5LWxheW91dCcpIHtcclxuICAgICAgaHJlZiA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZ2FsbGVyeUJhc2VQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhyZWYsXHJcbiAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19