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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxpbmtzLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvZW50aXR5LWxpbmtzLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFDL0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixvQ0FBb0M7QUFFcEMsSUFBTSxrQkFBa0IsR0FBRyxjQUFjLENBQUM7QUFDMUMsSUFBTSw0QkFBNEIsR0FBRyxxRUFBcUUsQ0FBQztBQUUzRyxJQUFNLFVBQVUsR0FBRztJQUNqQixPQUFPLEVBQUUsSUFBSTtJQUNiLEtBQUssRUFBRSxZQUFZO0lBQ25CLFVBQVUsRUFBRSxFQUFFO0lBQ2QsS0FBSyxFQUFFLGFBQWE7Q0FDckIsQ0FBQztBQUVGLGVBQWU7SUFDYixlQUFlLEVBQUUsRUFBUztJQUMxQixTQUFTLEVBQUUsSUFBSSxPQUFPLEVBQUU7SUFDeEIsZUFBZSxZQUFDLFVBQVU7UUFBMUIsaUJBOEJDO1FBN0JDLElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sS0FBSyxDQUNWLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3ZELElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQyxJQUFJLENBQ0osWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ25CLElBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNoRSxJQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDcEUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2QyxJQUFNLE9BQU8sWUFBTyxhQUFhLENBQUMsT0FBTyxFQUFLLGVBQWUsQ0FBQyxDQUFDO1lBQy9ELElBQU0sTUFBTSxHQUFHO2dCQUNiLGdCQUFnQixzQkFDZCxVQUFVLEVBQUUsR0FBRyxFQUNmLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLG1CQUFtQixDQUFDLElBQ2hFLGFBQWEsS0FDaEIsT0FBTyxTQUFBLEdBQ1I7YUFDRixDQUFDO1lBRUYsaUJBQWlCO1lBQ2pCLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbkM7WUFFRCxPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFDRCxnQkFBZ0IsWUFBQyxXQUFXLEVBQUUsTUFBTTtRQUNsQyxxQkFBcUI7UUFDckIsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBTTtnQkFBSixVQUFFO1lBQU8sT0FBQSxFQUFFLEtBQUssa0JBQWtCO1FBQXpCLENBQXlCLENBQUMsQ0FBQztRQUNwRSxJQUFBLHdDQUFVLENBQXNCO1FBQ3BDLElBQUEseUJBQXdDLEVBQXRDLGdCQUFLLEVBQUUsa0JBQStCLENBQUM7UUFDN0MsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDaEMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNaO1FBQ0QsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDakMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNaO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNkLElBQU0sa0JBQWdCLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDM0UsSUFBTSxPQUFPLEdBQUcsa0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2pELDhCQUE4QjtZQUM5QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNmO1lBQ0QsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRTtZQUN0RCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsY0FBYztRQUNkLElBQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDM0UsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekMsYUFBYTtRQUNiLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDdEUsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDeEI7U0FDRjtRQUVELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUNELGNBQWMsRUFBZCxVQUFlLFdBQVc7UUFBMUIsaUJBZ0NDO1FBL0JDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxDQUMxQyxNQUFNLENBQUMsVUFBVSxDQUNsQixFQUYyQyxDQUUzQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBYztnQkFBWiwwQkFBVTtZQUN0QixLQUFJLENBQUMsZUFBZSxrQ0FDZixVQUFVLEdBQ1YsS0FBSSxDQUFDLGVBQWUsS0FDdkIsT0FBTyxFQUFFLEtBQUssR0FDZixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUM7WUFDVCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDdEUsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsSUFBSSxDQUNWLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEIsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFVO29CQUFSLGtCQUFNO2dCQUNiLElBQUEsV0FBaUUsRUFBL0Qsd0JBQVMsRUFBRSw4QkFBWSxFQUFFLDhCQUFzQyxDQUFDO2dCQUNsRSxJQUFBLDBCQUVrQixFQUR0QixrQkFBTSxFQUFFLGdCQUFLLEVBQUUsMEJBQVUsRUFBRSxvQkFDTCxDQUFDO2dCQUN6QixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ25CLElBQ0UsQ0FBQyxTQUFTLEdBQUcsWUFBWSxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUM7dUJBQ2hELENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUM7dUJBQzdCLE9BQU8sS0FBSyxLQUFLLEVBQ3BCO29CQUNBLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDN0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUMzQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Q7Ozs7Ozs7O1NBUUs7SUFDTCxrQkFBa0IsWUFBQyxNQUFNO1FBQ3ZCLElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLE9BQU87YUFDckMsSUFBSSxDQUFDLFVBQUMsRUFBVztnQkFBVCxvQkFBTztZQUFPLE9BQUEsT0FBTyxLQUFLLGtCQUFrQjtRQUE5QixDQUE4QixDQUFDLENBQUM7UUFFekQsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELGdCQUFnQixZQUFDLFVBQVU7UUFDekIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pFLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAsIG1hcFRvXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIGltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBFTlRJVFlfTElOS1NfQ0xBU1MgPSAnZW50aXR5LWxpbmtzJztcbmNvbnN0IEVOVElUWV9MSU5LU19QQVJFTlRfU0VMRUNUT1IgPSAnLm43LWZhY2V0cy13cmFwcGVyX19ncm91cDpsYXN0LWNoaWxkIC5uNy1mYWNldF9fc2VjdGlvbi1pbnB1dC1saW5rcyc7XG5cbmNvbnN0IGxvYWRlckl0ZW0gPSB7XG4gIGNvdW50ZXI6IG51bGwsXG4gIGxhYmVsOiAnTG9hZGluZy4uLicsXG4gIHNlYXJjaERhdGE6IFtdLFxuICB2YWx1ZTogJ19fbG9hZGluZ19fJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGFnaW5hdGlvblN0YXRlOiB7fSBhcyBhbnksXG4gIHBhZ2luYXRlJDogbmV3IFN1YmplY3QoKSxcbiAgbGlzdGVuVG9DaGFuZ2VzKGRhdGFTb3VyY2UpIHtcbiAgICBjb25zdCBmYWNldHNXcmFwcGVyRUggPSBkYXRhU291cmNlLmdldFdpZGdldEV2ZW50SGFuZGxlcignZmFjZXRzLXdyYXBwZXInKTtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICBmYWNldHNXcmFwcGVyRUguaW50ZXJuYWxGYWNldHNDaGFuZ2UkLnBpcGUobWFwVG8obnVsbCkpLFxuICAgICAgdGhpcy5wYWdpbmF0ZSQsXG4gICAgKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2luYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IGRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgICAgICBjb25zdCBpbnRlcm5hbEZpbHRlcnMgPSBkYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEludGVybmFsRmlsdGVycygpO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5vZmZzZXQgPSBwYWdpbmF0aW9uID8gdGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0IDogMDtcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbXNPZmZzZXQocmVxdWVzdFBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBbLi4ucmVxdWVzdFBhcmFtcy5maWx0ZXJzLCAuLi5pbnRlcm5hbEZpbHRlcnNdO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgc2VhcmNoUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgdG90YWxDb3VudDogMTAwLFxuICAgICAgICAgICAgZ2FsbGVyeTogISEoZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRJZCgpID09PSAnYXctZ2FsbGVyeS1sYXlvdXQnKSxcbiAgICAgICAgICAgIC4uLnJlcXVlc3RQYXJhbXMsXG4gICAgICAgICAgICBmaWx0ZXJzXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0aWFsIGxvYWRlclxuICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5hZGRJbml0aWFsTG9hZGVyKGRhdGFTb3VyY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuZ2V0RmFjZXRzUmVxJChwYXJhbXMpO1xuICAgICAgfSlcbiAgICApO1xuICB9LFxuICBvbkZhY2V0c1Jlc3BvbnNlKHNlYXJjaE1vZGVsLCBmYWNldHMpIHtcbiAgICAvLyBwYWdpbmF0aW9uIGNvbnRyb2xcbiAgICBjb25zdCBlbnRpdHlMaW5rc0ZhY2V0ID0gZmFjZXRzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IEVOVElUWV9MSU5LU19DTEFTUyk7XG4gICAgY29uc3QgeyB0b3RhbENvdW50IH0gPSBlbnRpdHlMaW5rc0ZhY2V0O1xuICAgIGxldCB7IGxpbWl0LCBvZmZzZXQgfSA9IHRoaXMucGFnaW5hdGlvblN0YXRlO1xuICAgIGlmICh0eXBlb2YgbGltaXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsaW1pdCA9IDEwO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIHRoaXMucGFnaW5hdGlvblN0YXRlLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICAgIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICBjb25zdCBlbnRpdHlMaW5rc0lucHV0ID0gc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoRU5USVRZX0xJTktTX0NMQVNTKTtcbiAgICAgIGNvbnN0IG9sZERhdGEgPSBlbnRpdHlMaW5rc0lucHV0LmdldERhdGEoKSB8fCBbXTtcbiAgICAgIC8vIHJlbW92ZSBmYWtlIGxvYWRpbmcgZWxlbWVudFxuICAgICAgaWYgKG9sZERhdGEubGVuZ3RoKSB7XG4gICAgICAgIG9sZERhdGEucG9wKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdEYXRhID0gb2xkRGF0YS5jb25jYXQoZW50aXR5TGlua3NGYWNldC5kYXRhKTtcbiAgICAgIGVudGl0eUxpbmtzRmFjZXQuZGF0YSA9IG5ld0RhdGE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFnaW5hdGlvblN0YXRlLnRvdGFsQ291bnQgPiAobGltaXQgKyBvZmZzZXQpKSB7XG4gICAgICBlbnRpdHlMaW5rc0ZhY2V0LmRhdGEucHVzaChsb2FkZXJJdGVtKTtcbiAgICB9XG5cbiAgICAvLyBlbXB0eSBzdGF0ZVxuICAgIGNvbnN0IGVudGl0eUxpbmtzSW5wdXQgPSBzZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChFTlRJVFlfTElOS1NfQ0xBU1MpO1xuICAgIGVudGl0eUxpbmtzSW5wdXQuc2V0SXNFbXB0eSghdG90YWxDb3VudCk7XG5cbiAgICAvLyBmaXggc2Nyb2xsXG4gICAgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEVOVElUWV9MSU5LU19QQVJFTlRfU0VMRUNUT1IpO1xuICAgICAgaWYgKHNjcm9sbEVsKSB7XG4gICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGxvYWRpbmcgc3RhdGVcbiAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gIH0sXG4gIGluaXRQYWdpbmF0aW9uKHNlYXJjaE1vZGVsKSB7XG4gICAgc2VhcmNoTW9kZWwuZ2V0RmlsdGVycygpLmZpbHRlcigoZmlsdGVyKSA9PiAoXG4gICAgICBmaWx0ZXIucGFnaW5hdGlvblxuICAgICkpLmZvckVhY2goKHsgcGFnaW5hdGlvbiB9KSA9PiB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZSA9IHtcbiAgICAgICAgLi4ucGFnaW5hdGlvbixcbiAgICAgICAgLi4udGhpcy5wYWdpbmF0aW9uU3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEVOVElUWV9MSU5LU19QQVJFTlRfU0VMRUNUT1IpO1xuICAgICAgY29uc3Qgc2Nyb2xsJCA9IGZyb21FdmVudChzY3JvbGxFbCwgJ3Njcm9sbCcpO1xuICAgICAgc2Nyb2xsJC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKVxuICAgICAgKS5zdWJzY3JpYmUoKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0IH0gPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBvZmZzZXQsIGxpbWl0LCB0b3RhbENvdW50LCBsb2FkaW5nXG4gICAgICAgIH0gPSB0aGlzLnBhZ2luYXRpb25TdGF0ZTtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gMTUwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCA+PSBzY3JvbGxIZWlnaHQgLSBtYXJnaW4pXG4gICAgICAgICAgJiYgKG9mZnNldCArIGxpbWl0IDwgdG90YWxDb3VudClcbiAgICAgICAgICAmJiBsb2FkaW5nID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5vZmZzZXQgPSBvZmZzZXQgKyBsaW1pdDtcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlJC5uZXh0KHRoaXMucGFnaW5hdGlvblN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIC8qIGNsZWFySW50ZXJuYWxGaWx0ZXJzKHNlYXJjaE1vZGVsKSB7XG4gICAgY29uc3Qgc2VhcmNoRmlsdGVyID0gc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgnZW50aXR5LXNlYXJjaCcpWzBdO1xuICAgIGNvbnN0IHR5cGVzRmlsdGVyID0gc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgnZW50aXR5LXR5cGVzJylbMF07XG4gICAgaWYgKCFpc0VtcHR5KHNlYXJjaEZpbHRlci52YWx1ZSkgfHwgIWlzRW1wdHkodHlwZXNGaWx0ZXIudmFsdWUpKSB7XG4gICAgICBzZWFyY2hGaWx0ZXIudmFsdWUgPSAnJztcbiAgICAgIHR5cGVzRmlsdGVyLnZhbHVlID0gW107XG4gICAgICBzZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICAgIH1cbiAgfSwgKi9cbiAgdXBkYXRlUGFyYW1zT2Zmc2V0KHBhcmFtcykge1xuICAgIGNvbnN0IGVudGl0eUxpbmtzRmlsdGVyID0gcGFyYW1zLmZpbHRlcnNcbiAgICAgIC5maW5kKCh7IGZhY2V0SWQgfSkgPT4gZmFjZXRJZCA9PT0gRU5USVRZX0xJTktTX0NMQVNTKTtcblxuICAgIGlmIChlbnRpdHlMaW5rc0ZpbHRlcikge1xuICAgICAgZW50aXR5TGlua3NGaWx0ZXIucGFnaW5hdGlvbi5vZmZzZXQgPSB0aGlzLnBhZ2luYXRpb25TdGF0ZS5vZmZzZXQ7XG4gICAgfVxuICB9LFxuICByZXNldE9mZnNldCgpIHtcbiAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5vZmZzZXQgPSAwO1xuICB9LFxuICBhZGRJbml0aWFsTG9hZGVyKGRhdGFTb3VyY2UpIHtcbiAgICBkYXRhU291cmNlLnNlYXJjaE1vZGVsLnNldElucHV0RGF0YShFTlRJVFlfTElOS1NfQ0xBU1MsIFtsb2FkZXJJdGVtXSk7XG4gICAgY29uc3QgZmFjZXRzV3JhcHBlckRTID0gZGF0YVNvdXJjZS5nZXRXaWRnZXREYXRhU291cmNlKCdmYWNldHMtd3JhcHBlcicpO1xuICAgIGZhY2V0c1dyYXBwZXJEUy51cGRhdGVJbnB1dExpbmtzKCk7XG4gIH1cbn07XG4iXX0=