import { __assign, __read, __spread } from "tslib";
import { Subject, merge, fromEvent } from 'rxjs';
import { debounceTime, switchMap, mapTo } from 'rxjs/operators';
// import { isEmpty } from 'lodash';
var ENTITY_LINKS_CLASS = 'entity-links';
var ENTITY_LINKS_PARENT_SELECTOR = '.n7-facets-wrapper__group:last-child .n7-facet__section-input-links';
var loaderItem = {
    counter: null,
    label: 'Caricamento in corso...',
    searchData: [],
    value: '__loading__',
};
export default {
    paginationState: {},
    paginate$: new Subject(),
    listenToChanges: function (dataSource) {
        var _this = this;
        var facetsWrapperEH = dataSource.getWidgetEventHandler('facets-wrapper');
        return merge(facetsWrapperEH.internalFacetsChange$.pipe(mapTo(null)), this.paginate$).pipe(debounceTime(500), switchMap(function (pagination) {
            var requestParams = dataSource.searchModel.getRequestParams();
            var internalFilters = dataSource.searchModel.getInternalFilters();
            _this.paginationState.offset = pagination ? _this.paginationState.offset : 0;
            _this.updateParamsOffset(requestParams);
            var filters = __spread(requestParams.filters, internalFilters);
            var params = {
                searchParameters: __assign(__assign({ totalCount: 100, gallery: !!(dataSource.searchModel.getId() === 'aw-gallery-layout') }, requestParams), { filters: filters }),
            };
            // initial loader
            if (_this.paginationState.offset === 0) {
                _this.addInitialLoader(dataSource);
            }
            return dataSource.getFacetsReq$(params);
        }));
    },
    onFacetsResponse: function (searchModel, facets) {
        // pagination control
        var entityLinksFacet = facets.find(function (_a) {
            var id = _a.id;
            return id === ENTITY_LINKS_CLASS;
        });
        var totalCount = entityLinksFacet.totalCount;
        var _a = this.paginationState, limit = _a.limit, offset = _a.offset;
        if (typeof limit === 'undefined') {
            limit = 10;
        }
        if (typeof offset === 'undefined') {
            offset = 0;
        }
        this.paginationState.totalCount = totalCount;
        if (offset > 0) {
            var entityLinksInput_1 = searchModel.getInputByFacetId(ENTITY_LINKS_CLASS);
            var oldData = entityLinksInput_1.getData() || [];
            // remove fake loading element
            if (oldData.length) {
                oldData.pop();
            }
            var newData = oldData.concat(entityLinksFacet.data);
            entityLinksFacet.data = newData;
        }
        if (this.paginationState.totalCount > (limit + offset)) {
            entityLinksFacet.data.push(loaderItem);
        }
        // empty state
        var entityLinksInput = searchModel.getInputByFacetId(ENTITY_LINKS_CLASS);
        entityLinksInput.setIsEmpty(!totalCount);
        // fix scroll
        if (offset === 0) {
            var scrollEl = document.querySelector(ENTITY_LINKS_PARENT_SELECTOR);
            if (scrollEl) {
                scrollEl.scrollTop = 0;
            }
        }
        // update loading state
        this.paginationState.loading = false;
    },
    initPagination: function (searchModel) {
        var _this = this;
        searchModel.getFilters().filter(function (filter) { return (filter.pagination); }).forEach(function (_a) {
            var pagination = _a.pagination;
            _this.paginationState = __assign(__assign(__assign({}, pagination), _this.paginationState), { loading: false });
        });
        setTimeout(function () {
            var scrollEl = document.querySelector(ENTITY_LINKS_PARENT_SELECTOR);
            var scroll$ = fromEvent(scrollEl, 'scroll');
            scroll$.pipe(debounceTime(300)).subscribe(function (_a) {
                var target = _a.target;
                var _b = target, scrollTop = _b.scrollTop, clientHeight = _b.clientHeight, scrollHeight = _b.scrollHeight;
                var _c = _this.paginationState, offset = _c.offset, limit = _c.limit, totalCount = _c.totalCount, loading = _c.loading;
                var margin = 150;
                if ((scrollTop + clientHeight >= scrollHeight - margin)
                    && (offset + limit < totalCount)
                    && loading === false) {
                    _this.paginationState.loading = true;
                    _this.paginationState.offset = offset + limit;
                    _this.paginate$.next(_this.paginationState);
                }
            });
        });
    },
    /* clearInternalFilters(searchModel) {
      const searchFilter = searchModel.getFiltersByFacetId('entity-search')[0];
      const typesFilter = searchModel.getFiltersByFacetId('entity-types')[0];
      if (!isEmpty(searchFilter.value) || !isEmpty(typesFilter.value)) {
        searchFilter.value = '';
        typesFilter.value = [];
        searchModel.updateInputsFromFilters();
      }
    }, */
    updateParamsOffset: function (params) {
        var entityLinksFilter = params.filters
            .find(function (_a) {
            var facetId = _a.facetId;
            return facetId === ENTITY_LINKS_CLASS;
        });
        if (entityLinksFilter) {
            entityLinksFilter.pagination.offset = this.paginationState.offset;
        }
    },
    resetOffset: function () {
        this.paginationState.offset = 0;
    },
    addInitialLoader: function (dataSource) {
        dataSource.searchModel.setInputData(ENTITY_LINKS_CLASS, [loaderItem]);
        var facetsWrapperDS = dataSource.getWidgetDataSource('facets-wrapper');
        facetsWrapperDS.updateInputLinks();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxpbmtzLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvZW50aXR5LWxpbmtzLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFDL0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixvQ0FBb0M7QUFFcEMsSUFBTSxrQkFBa0IsR0FBRyxjQUFjLENBQUM7QUFDMUMsSUFBTSw0QkFBNEIsR0FBRyxxRUFBcUUsQ0FBQztBQUUzRyxJQUFNLFVBQVUsR0FBRztJQUNqQixPQUFPLEVBQUUsSUFBSTtJQUNiLEtBQUssRUFBRSx5QkFBeUI7SUFDaEMsVUFBVSxFQUFFLEVBQUU7SUFDZCxLQUFLLEVBQUUsYUFBYTtDQUNyQixDQUFDO0FBRUYsZUFBZTtJQUNiLGVBQWUsRUFBRSxFQUFTO0lBQzFCLFNBQVMsRUFBRSxJQUFJLE9BQU8sRUFBRTtJQUN4QixlQUFlLFlBQUMsVUFBVTtRQUExQixpQkE4QkM7UUE3QkMsSUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0UsT0FBTyxLQUFLLENBQ1YsZUFBZSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDLElBQUksQ0FDSixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxVQUFDLFVBQVU7WUFDbkIsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2hFLElBQU0sZUFBZSxHQUFHLFVBQVUs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R0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUM3QyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQzNDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRDs7Ozs7Ozs7U0FRSztJQUNMLGtCQUFrQixZQUFDLE1BQU07UUFDdkIsSUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsT0FBTzthQUNyQyxJQUFJLENBQUMsVUFBQyxFQUFXO2dCQUFULG9CQUFPO1lBQU8sT0FBQSxPQUFPLEtBQUssa0JBQWtCO1FBQTlCLENBQThCLENBQUMsQ0FBQztRQUV6RCxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7U0FDbkU7SUFDSCxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsZ0JBQWdCLFlBQUMsVUFBVTtRQUN6QixVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekUsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckMsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0LCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAsIG1hcFRvXHJcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG4vLyBpbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IEVOVElUWV9MSU5LU19DTEFTUyA9ICdlbnRpdHktbGlua3MnO1xyXG5jb25zdCBFTlRJVFlfTElOS1NfUEFSRU5UX1NFTEVDVE9SID0gJy5uNy1mYWNldHMtd3JhcHBlcl9fZ3JvdXA6bGFzdC1jaGlsZCAubjctZmFjZXRfX3NlY3Rpb24taW5wdXQtbGlua3MnO1xyXG5cclxuY29uc3QgbG9hZGVySXRlbSA9IHtcclxuICBjb3VudGVyOiBudWxsLFxyXG4gIGxhYmVsOiAnQ2FyaWNhbWVudG8gaW4gY29yc28uLi4nLFxyXG4gIHNlYXJjaERhdGE6IFtdLFxyXG4gIHZhbHVlOiAnX19sb2FkaW5nX18nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHBhZ2luYXRpb25TdGF0ZToge30gYXMgYW55LFxyXG4gIHBhZ2luYXRlJDogbmV3IFN1YmplY3QoKSxcclxuICBsaXN0ZW5Ub0NoYW5nZXMoZGF0YVNvdXJjZSkge1xyXG4gICAgY29uc3QgZmFjZXRzV3JhcHBlckVIID0gZGF0YVNvdXJjZS5nZXRXaWRnZXRFdmVudEhhbmRsZXIoJ2ZhY2V0cy13cmFwcGVyJyk7XHJcbiAgICByZXR1cm4gbWVyZ2UoXHJcbiAgICAgIGZhY2V0c1dyYXBwZXJFSC5pbnRlcm5hbEZhY2V0c0NoYW5nZSQucGlwZShtYXBUbyhudWxsKSksXHJcbiAgICAgIHRoaXMucGFnaW5hdGUkLFxyXG4gICAgKS5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICAgc3dpdGNoTWFwKChwYWdpbmF0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IGRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xyXG4gICAgICAgIGNvbnN0IGludGVybmFsRmlsdGVycyA9IGRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0SW50ZXJuYWxGaWx0ZXJzKCk7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0ID0gcGFnaW5hdGlvbiA/IHRoaXMucGFnaW5hdGlvblN0YXRlLm9mZnNldCA6IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbXNPZmZzZXQocmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IFsuLi5yZXF1ZXN0UGFyYW1zLmZpbHRlcnMsIC4uLmludGVybmFsRmlsdGVyc107XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgc2VhcmNoUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICB0b3RhbENvdW50OiAxMDAsXHJcbiAgICAgICAgICAgIGdhbGxlcnk6ICEhKGRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0SWQoKSA9PT0gJ2F3LWdhbGxlcnktbGF5b3V0JyksXHJcbiAgICAgICAgICAgIC4uLnJlcXVlc3RQYXJhbXMsXHJcbiAgICAgICAgICAgIGZpbHRlcnNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbCBsb2FkZXJcclxuICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEluaXRpYWxMb2FkZXIoZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YVNvdXJjZS5nZXRGYWNldHNSZXEkKHBhcmFtcyk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgb25GYWNldHNSZXNwb25zZShzZWFyY2hNb2RlbCwgZmFjZXRzKSB7XHJcbiAgICAvLyBwYWdpbmF0aW9uIGNvbnRyb2xcclxuICAgIGNvbnN0IGVudGl0eUxpbmtzRmFjZXQgPSBmYWNldHMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gRU5USVRZX0xJTktTX0NMQVNTKTtcclxuICAgIGNvbnN0IHsgdG90YWxDb3VudCB9ID0gZW50aXR5TGlua3NGYWNldDtcclxuICAgIGxldCB7IGxpbWl0LCBvZmZzZXQgfSA9IHRoaXMucGFnaW5hdGlvblN0YXRlO1xyXG4gICAgaWYgKHR5cGVvZiBsaW1pdCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbGltaXQgPSAxMDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBvZmZzZXQgPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdpbmF0aW9uU3RhdGUudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgICBpZiAob2Zmc2V0ID4gMCkge1xyXG4gICAgICBjb25zdCBlbnRpdHlMaW5rc0lucHV0ID0gc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoRU5USVRZX0xJTktTX0NMQVNTKTtcclxuICAgICAgY29uc3Qgb2xkRGF0YSA9IGVudGl0eUxpbmtzSW5wdXQuZ2V0RGF0YSgpIHx8IFtdO1xyXG4gICAgICAvLyByZW1vdmUgZmFrZSBsb2FkaW5nIGVsZW1lbnRcclxuICAgICAgaWYgKG9sZERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgb2xkRGF0YS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXdEYXRhID0gb2xkRGF0YS5jb25jYXQoZW50aXR5TGlua3NGYWNldC5kYXRhKTtcclxuICAgICAgZW50aXR5TGlua3NGYWNldC5kYXRhID0gbmV3RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3RhdGUudG90YWxDb3VudCA+IChsaW1pdCArIG9mZnNldCkpIHtcclxuICAgICAgZW50aXR5TGlua3NGYWNldC5kYXRhLnB1c2gobG9hZGVySXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZW1wdHkgc3RhdGVcclxuICAgIGNvbnN0IGVudGl0eUxpbmtzSW5wdXQgPSBzZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChFTlRJVFlfTElOS1NfQ0xBU1MpO1xyXG4gICAgZW50aXR5TGlua3NJbnB1dC5zZXRJc0VtcHR5KCF0b3RhbENvdW50KTtcclxuXHJcbiAgICAvLyBmaXggc2Nyb2xsXHJcbiAgICBpZiAob2Zmc2V0ID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihFTlRJVFlfTElOS1NfUEFSRU5UX1NFTEVDVE9SKTtcclxuICAgICAgaWYgKHNjcm9sbEVsKSB7XHJcbiAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSBsb2FkaW5nIHN0YXRlXHJcbiAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgfSxcclxuICBpbml0UGFnaW5hdGlvbihzZWFyY2hNb2RlbCkge1xyXG4gICAgc2VhcmNoTW9kZWwuZ2V0RmlsdGVycygpLmZpbHRlcigoZmlsdGVyKSA9PiAoXHJcbiAgICAgIGZpbHRlci5wYWdpbmF0aW9uXHJcbiAgICApKS5mb3JFYWNoKCh7IHBhZ2luYXRpb24gfSkgPT4ge1xyXG4gICAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZSA9IHtcclxuICAgICAgICAuLi5wYWdpbmF0aW9uLFxyXG4gICAgICAgIC4uLnRoaXMucGFnaW5hdGlvblN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzY3JvbGxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRU5USVRZX0xJTktTX1BBUkVOVF9TRUxFQ1RPUik7XHJcbiAgICAgIGNvbnN0IHNjcm9sbCQgPSBmcm9tRXZlbnQoc2Nyb2xsRWwsICdzY3JvbGwnKTtcclxuICAgICAgc2Nyb2xsJC5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgzMDApXHJcbiAgICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0IH0gPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgb2Zmc2V0LCBsaW1pdCwgdG90YWxDb3VudCwgbG9hZGluZ1xyXG4gICAgICAgIH0gPSB0aGlzLnBhZ2luYXRpb25TdGF0ZTtcclxuICAgICAgICBjb25zdCBtYXJnaW4gPSAxNTA7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCA+PSBzY3JvbGxIZWlnaHQgLSBtYXJnaW4pXHJcbiAgICAgICAgICAmJiAob2Zmc2V0ICsgbGltaXQgPCB0b3RhbENvdW50KVxyXG4gICAgICAgICAgJiYgbG9hZGluZyA9PT0gZmFsc2VcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGlvblN0YXRlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0ID0gb2Zmc2V0ICsgbGltaXQ7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlJC5uZXh0KHRoaXMucGFnaW5hdGlvblN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKiBjbGVhckludGVybmFsRmlsdGVycyhzZWFyY2hNb2RlbCkge1xyXG4gICAgY29uc3Qgc2VhcmNoRmlsdGVyID0gc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgnZW50aXR5LXNlYXJjaCcpWzBdO1xyXG4gICAgY29uc3QgdHlwZXNGaWx0ZXIgPSBzZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKCdlbnRpdHktdHlwZXMnKVswXTtcclxuICAgIGlmICghaXNFbXB0eShzZWFyY2hGaWx0ZXIudmFsdWUpIHx8ICFpc0VtcHR5KHR5cGVzRmlsdGVyLnZhbHVlKSkge1xyXG4gICAgICBzZWFyY2hGaWx0ZXIudmFsdWUgPSAnJztcclxuICAgICAgdHlwZXNGaWx0ZXIudmFsdWUgPSBbXTtcclxuICAgICAgc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcclxuICAgIH1cclxuICB9LCAqL1xyXG4gIHVwZGF0ZVBhcmFtc09mZnNldChwYXJhbXMpIHtcclxuICAgIGNvbnN0IGVudGl0eUxpbmtzRmlsdGVyID0gcGFyYW1zLmZpbHRlcnNcclxuICAgICAgLmZpbmQoKHsgZmFjZXRJZCB9KSA9PiBmYWNldElkID09PSBFTlRJVFlfTElOS1NfQ0xBU1MpO1xyXG5cclxuICAgIGlmIChlbnRpdHlMaW5rc0ZpbHRlcikge1xyXG4gICAgICBlbnRpdHlMaW5rc0ZpbHRlci5wYWdpbmF0aW9uLm9mZnNldCA9IHRoaXMucGFnaW5hdGlvblN0YXRlLm9mZnNldDtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlc2V0T2Zmc2V0KCkge1xyXG4gICAgdGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0ID0gMDtcclxuICB9LFxyXG4gIGFkZEluaXRpYWxMb2FkZXIoZGF0YVNvdXJjZSkge1xyXG4gICAgZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5zZXRJbnB1dERhdGEoRU5USVRZX0xJTktTX0NMQVNTLCBbbG9hZGVySXRlbV0pO1xyXG4gICAgY29uc3QgZmFjZXRzV3JhcHBlckRTID0gZGF0YVNvdXJjZS5nZXRXaWRnZXREYXRhU291cmNlKCdmYWNldHMtd3JhcHBlcicpO1xyXG4gICAgZmFjZXRzV3JhcHBlckRTLnVwZGF0ZUlucHV0TGlua3MoKTtcclxuICB9XHJcbn07XHJcbiJdfQ==