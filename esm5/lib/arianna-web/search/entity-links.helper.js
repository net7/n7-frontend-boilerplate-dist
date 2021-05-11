import { __assign, __read, __spread } from "tslib";
import { Subject, merge, fromEvent } from 'rxjs';
import { debounceTime, switchMap, mapTo } from 'rxjs/operators';
// import { isEmpty } from 'lodash';
var ENTITY_LINKS_CLASS = 'entity-links';
var ENTITY_LINKS_PARENT_SELECTOR = '.n7-facets-wrapper__group:last-child .n7-facet__section-input-links';
var loaderItem = {
    counter: null,
    label: 'Loading...',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxpbmtzLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvZW50aXR5LWxpbmtzLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFDL0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixvQ0FBb0M7QUFFcEMsSUFBTSxrQkFBa0IsR0FBRyxjQUFjLENBQUM7QUFDMUMsSUFBTSw0QkFBNEIsR0FBRyxxRUFBcUUsQ0FBQztBQUUzRyxJQUFNLFVBQVUsR0FBRztJQUNqQixPQUFPLEVBQUUsSUFBSTtJQUNiLEtBQUssRUFBRSxZQUFZO0lBQ25CLFVBQVUsRUFBRSxFQUFFO0lBQ2QsS0FBSyxFQUFFLGFBQWE7Q0FDckIsQ0FBQztBQUVGLGVBQWU7SUFDYixlQUFlLEVBQUUsRUFBUztJQUMxQixTQUFTLEVBQUUsSUFBSSxPQUFPLEVBQUU7SUFDeEIsZUFBZSxZQUFDLFVBQVU7UUFBMUIsaUJBOEJDO1FBN0JDLElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sS0FBSyxDQUNWLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3ZELElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQyxJQUFJLENBQ0osWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ25CLElBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNoRSxJQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDcEUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2QyxJQUFNLE9BQU8sWUFBTyxhQUFhLENBQUMsT0FBTyxFQUFLLGVBQWUsQ0FBQyxDQUFDO1lBQy9ELElBQU0sTUFBTSxHQUFHO2dCQUNiLGdCQUFnQixzQkFDZCxVQUFVLEVBQUUsR0FBRyxFQUNmLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLG1CQUFtQixDQUFDLElBQ2hFLGFBQWEsS0FDaEIsT0FBTyxTQUFBLEdBQ1I7YUFDRixDQUFDO1lBRUYsaUJBQWlCO1lBQ2pCLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbkM7WUFFRCxPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDRCxnQkFBZ0IsWUFBQyxXQUFXLEVBQUUsTUFBTTtRQUNsQyxxQkFBcUI7UUFDckIsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBTTtnQkFBSixVQUFFO1lBQU8sT0FBQSxFQUFFLEtBQUssa0JBQWtCO1FBQXpCLENBQXlCLENBQUMsQ0FBQztRQUNwRSxJQUFBLHdDQUFVLENBQXNCO1FBQ3BDLElBQUEseUJBQXdDLEVBQXRDLGdCQUFLLEVBQUUsa0JBQStCLENBQUM7UUFDN0MsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDaEMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNaO1FBQ0QsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDakMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNaO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNkLElBQU0sa0JBQWdCLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDM0UsSUFBTSxPQUFPLEdBQUcsa0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2pELDhCQUE4QjtZQUM5QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNmO1lBQ0QsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRTtZQUN0RCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsY0FBYztRQUNkLElBQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDM0UsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekMsYUFBYTtRQUNiLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDdEUsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDeEI7U0FDRjtRQUVELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUNELGNBQWMsRUFBZCxVQUFlLFdBQVc7UUFBMUIsaUJBZ0NDO1FBL0JDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxDQUMxQyxNQUFNLENBQUMsVUFBVSxDQUNsQixFQUYyQyxDQUUzQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBYztnQkFBWiwwQkFBVTtZQUN0QixLQUFJLENBQUMsZUFBZSxrQ0FDZixVQUFVLEdBQ1YsS0FBSSxDQUFDLGVBQWUsS0FDdkIsT0FBTyxFQUFFLEtBQUssR0FDZixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUM7WUFDVCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDdEUsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsSUFBSSxDQUNWLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEIsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFVO29CQUFSLGtCQUFNO2dCQUNiLElBQUEsV0FBaUUsRUFBL0Qsd0JBQVMsRUFBRSw4QkFBWSxFQUFFLDhCQUFzQyxDQUFDO2dCQUNsRSxJQUFBLDBCQUVrQixFQUR0QixrQkFBTSxFQUFFLGdCQUFLLEVBQUUsMEJBQVUsRUFBRSxvQkFDTCxDQUFDO2dCQUN6QixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ25CLElBQ0UsQ0FBQyxTQUFTLEdBQUcsWUFBWSxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUM7dUJBQ2hELENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUM7dUJBQzdCLE9BQU8sS0FBSyxLQUFLLEVBQ3BCO29CQUNBLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDN0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUMzQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Q7Ozs7Ozs7O1NBUUs7SUFDTCxrQkFBa0IsWUFBQyxNQUFNO1FBQ3ZCLElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLE9BQU87YUFDckMsSUFBSSxDQUFDLFVBQUMsRUFBVztnQkFBVCxvQkFBTztZQUFPLE9BQUEsT0FBTyxLQUFLLGtCQUFrQjtRQUE5QixDQUE4QixDQUFDLENBQUM7UUFFekQsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELGdCQUFnQixZQUFDLFVBQVU7UUFDekIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pFLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIGRlYm91bmNlVGltZSwgc3dpdGNoTWFwLCBtYXBUb1xyXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBFTlRJVFlfTElOS1NfQ0xBU1MgPSAnZW50aXR5LWxpbmtzJztcclxuY29uc3QgRU5USVRZX0xJTktTX1BBUkVOVF9TRUxFQ1RPUiA9ICcubjctZmFjZXRzLXdyYXBwZXJfX2dyb3VwOmxhc3QtY2hpbGQgLm43LWZhY2V0X19zZWN0aW9uLWlucHV0LWxpbmtzJztcclxuXHJcbmNvbnN0IGxvYWRlckl0ZW0gPSB7XHJcbiAgY291bnRlcjogbnVsbCxcclxuICBsYWJlbDogJ0xvYWRpbmcuLi4nLFxyXG4gIHNlYXJjaERhdGE6IFtdLFxyXG4gIHZhbHVlOiAnX19sb2FkaW5nX18nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHBhZ2luYXRpb25TdGF0ZToge30gYXMgYW55LFxyXG4gIHBhZ2luYXRlJDogbmV3IFN1YmplY3QoKSxcclxuICBsaXN0ZW5Ub0NoYW5nZXMoZGF0YVNvdXJjZSkge1xyXG4gICAgY29uc3QgZmFjZXRzV3JhcHBlckVIID0gZGF0YVNvdXJjZS5nZXRXaWRnZXRFdmVudEhhbmRsZXIoJ2ZhY2V0cy13cmFwcGVyJyk7XHJcbiAgICByZXR1cm4gbWVyZ2UoXHJcbiAgICAgIGZhY2V0c1dyYXBwZXJFSC5pbnRlcm5hbEZhY2V0c0NoYW5nZSQucGlwZShtYXBUbyhudWxsKSksXHJcbiAgICAgIHRoaXMucGFnaW5hdGUkLFxyXG4gICAgKS5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICAgc3dpdGNoTWFwKChwYWdpbmF0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IGRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xyXG4gICAgICAgIGNvbnN0IGludGVybmFsRmlsdGVycyA9IGRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0SW50ZXJuYWxGaWx0ZXJzKCk7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0ID0gcGFnaW5hdGlvbiA/IHRoaXMucGFnaW5hdGlvblN0YXRlLm9mZnNldCA6IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbXNPZmZzZXQocmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IFsuLi5yZXF1ZXN0UGFyYW1zLmZpbHRlcnMsIC4uLmludGVybmFsRmlsdGVyc107XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgc2VhcmNoUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICB0b3RhbENvdW50OiAxMDAsXHJcbiAgICAgICAgICAgIGdhbGxlcnk6ICEhKGRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0SWQoKSA9PT0gJ2F3LWdhbGxlcnktbGF5b3V0JyksXHJcbiAgICAgICAgICAgIC4uLnJlcXVlc3RQYXJhbXMsXHJcbiAgICAgICAgICAgIGZpbHRlcnNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbCBsb2FkZXJcclxuICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEluaXRpYWxMb2FkZXIoZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YVNvdXJjZS5nZXRGYWNldHNSZXEkKHBhcmFtcyk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgb25GYWNldHNSZXNwb25zZShzZWFyY2hNb2RlbCwgZmFjZXRzKSB7XHJcbiAgICAvLyBwYWdpbmF0aW9uIGNvbnRyb2xcclxuICAgIGNvbnN0IGVudGl0eUxpbmtzRmFjZXQgPSBmYWNldHMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gRU5USVRZX0xJTktTX0NMQVNTKTtcclxuICAgIGNvbnN0IHsgdG90YWxDb3VudCB9ID0gZW50aXR5TGlua3NGYWNldDtcclxuICAgIGxldCB7IGxpbWl0LCBvZmZzZXQgfSA9IHRoaXMucGFnaW5hdGlvblN0YXRlO1xyXG4gICAgaWYgKHR5cGVvZiBsaW1pdCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbGltaXQgPSAxMDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBvZmZzZXQgPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdpbmF0aW9uU3RhdGUudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgICBpZiAob2Zmc2V0ID4gMCkge1xyXG4gICAgICBjb25zdCBlbnRpdHlMaW5rc0lucHV0ID0gc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoRU5USVRZX0xJTktTX0NMQVNTKTtcclxuICAgICAgY29uc3Qgb2xkRGF0YSA9IGVudGl0eUxpbmtzSW5wdXQuZ2V0RGF0YSgpIHx8IFtdO1xyXG4gICAgICAvLyByZW1vdmUgZmFrZSBsb2FkaW5nIGVsZW1lbnRcclxuICAgICAgaWYgKG9sZERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgb2xkRGF0YS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXdEYXRhID0gb2xkRGF0YS5jb25jYXQoZW50aXR5TGlua3NGYWNldC5kYXRhKTtcclxuICAgICAgZW50aXR5TGlua3NGYWNldC5kYXRhID0gbmV3RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3RhdGUudG90YWxDb3VudCA+IChsaW1pdCArIG9mZnNldCkpIHtcclxuICAgICAgZW50aXR5TGlua3NGYWNldC5kYXRhLnB1c2gobG9hZGVySXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZW1wdHkgc3RhdGVcclxuICAgIGNvbnN0IGVudGl0eUxpbmtzSW5wdXQgPSBzZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChFTlRJVFlfTElOS1NfQ0xBU1MpO1xyXG4gICAgZW50aXR5TGlua3NJbnB1dC5zZXRJc0VtcHR5KCF0b3RhbENvdW50KTtcclxuXHJcbiAgICAvLyBmaXggc2Nyb2xsXHJcbiAgICBpZiAob2Zmc2V0ID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihFTlRJVFlfTElOS1NfUEFSRU5UX1NFTEVDVE9SKTtcclxuICAgICAgaWYgKHNjcm9sbEVsKSB7XHJcbiAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSBsb2FkaW5nIHN0YXRlXHJcbiAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgfSxcclxuICBpbml0UGFnaW5hdGlvbihzZWFyY2hNb2RlbCkge1xyXG4gICAgc2VhcmNoTW9kZWwuZ2V0RmlsdGVycygpLmZpbHRlcigoZmlsdGVyKSA9PiAoXHJcbiAgICAgIGZpbHRlci5wYWdpbmF0aW9uXHJcbiAgICApKS5mb3JFYWNoKCh7IHBhZ2luYXRpb24gfSkgPT4ge1xyXG4gICAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZSA9IHtcclxuICAgICAgICAuLi5wYWdpbmF0aW9uLFxyXG4gICAgICAgIC4uLnRoaXMucGFnaW5hdGlvblN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzY3JvbGxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRU5USVRZX0xJTktTX1BBUkVOVF9TRUxFQ1RPUik7XHJcbiAgICAgIGNvbnN0IHNjcm9sbCQgPSBmcm9tRXZlbnQoc2Nyb2xsRWwsICdzY3JvbGwnKTtcclxuICAgICAgc2Nyb2xsJC5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgzMDApXHJcbiAgICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0IH0gPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgb2Zmc2V0LCBsaW1pdCwgdG90YWxDb3VudCwgbG9hZGluZ1xyXG4gICAgICAgIH0gPSB0aGlzLnBhZ2luYXRpb25TdGF0ZTtcclxuICAgICAgICBjb25zdCBtYXJnaW4gPSAxNTA7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCA+PSBzY3JvbGxIZWlnaHQgLSBtYXJnaW4pXHJcbiAgICAgICAgICAmJiAob2Zmc2V0ICsgbGltaXQgPCB0b3RhbENvdW50KVxyXG4gICAgICAgICAgJiYgbG9hZGluZyA9PT0gZmFsc2VcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGlvblN0YXRlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0ID0gb2Zmc2V0ICsgbGltaXQ7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlJC5uZXh0KHRoaXMucGFnaW5hdGlvblN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvKiBjbGVhckludGVybmFsRmlsdGVycyhzZWFyY2hNb2RlbCkge1xyXG4gICAgY29uc3Qgc2VhcmNoRmlsdGVyID0gc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgnZW50aXR5LXNlYXJjaCcpWzBdO1xyXG4gICAgY29uc3QgdHlwZXNGaWx0ZXIgPSBzZWFyY2hNb2RlbC5nZXRGaWx0ZXJzQnlGYWNldElkKCdlbnRpdHktdHlwZXMnKVswXTtcclxuICAgIGlmICghaXNFbXB0eShzZWFyY2hGaWx0ZXIudmFsdWUpIHx8ICFpc0VtcHR5KHR5cGVzRmlsdGVyLnZhbHVlKSkge1xyXG4gICAgICBzZWFyY2hGaWx0ZXIudmFsdWUgPSAnJztcclxuICAgICAgdHlwZXNGaWx0ZXIudmFsdWUgPSBbXTtcclxuICAgICAgc2VhcmNoTW9kZWwudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcclxuICAgIH1cclxuICB9LCAqL1xyXG4gIHVwZGF0ZVBhcmFtc09mZnNldChwYXJhbXMpIHtcclxuICAgIGNvbnN0IGVudGl0eUxpbmtzRmlsdGVyID0gcGFyYW1zLmZpbHRlcnNcclxuICAgICAgLmZpbmQoKHsgZmFjZXRJZCB9KSA9PiBmYWNldElkID09PSBFTlRJVFlfTElOS1NfQ0xBU1MpO1xyXG5cclxuICAgIGlmIChlbnRpdHlMaW5rc0ZpbHRlcikge1xyXG4gICAgICBlbnRpdHlMaW5rc0ZpbHRlci5wYWdpbmF0aW9uLm9mZnNldCA9IHRoaXMucGFnaW5hdGlvblN0YXRlLm9mZnNldDtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlc2V0T2Zmc2V0KCkge1xyXG4gICAgdGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0ID0gMDtcclxuICB9LFxyXG4gIGFkZEluaXRpYWxMb2FkZXIoZGF0YVNvdXJjZSkge1xyXG4gICAgZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5zZXRJbnB1dERhdGEoRU5USVRZX0xJTktTX0NMQVNTLCBbbG9hZGVySXRlbV0pO1xyXG4gICAgY29uc3QgZmFjZXRzV3JhcHBlckRTID0gZGF0YVNvdXJjZS5nZXRXaWRnZXREYXRhU291cmNlKCdmYWNldHMtd3JhcHBlcicpO1xyXG4gICAgZmFjZXRzV3JhcHBlckRTLnVwZGF0ZUlucHV0TGlua3MoKTtcclxuICB9XHJcbn07XHJcbiJdfQ==