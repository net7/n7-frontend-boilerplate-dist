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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxpbmtzLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9zZWFyY2gvZW50aXR5LWxpbmtzLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFDL0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixvQ0FBb0M7QUFFcEMsSUFBTSxrQkFBa0IsR0FBRyxjQUFjLENBQUM7QUFDMUMsSUFBTSw0QkFBNEIsR0FBRyxxRUFBcUUsQ0FBQztBQUUzRyxJQUFNLFVBQVUsR0FBRztJQUNqQixPQUFPLEVBQUUsSUFBSTtJQUNiLEtBQUssRUFBRSx5QkFBeUI7SUFDaEMsVUFBVSxFQUFFLEVBQUU7SUFDZCxLQUFLLEVBQUUsYUFBYTtDQUNyQixDQUFDO0FBRUYsZUFBZTtJQUNiLGVBQWUsRUFBRSxFQUFTO0lBQzFCLFNBQVMsRUFBRSxJQUFJLE9BQU8sRUFBRTtJQUN4QixlQUFlLFlBQUMsVUFBVTtRQUExQixpQkE4QkM7UUE3QkMsSUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0UsT0FBTyxLQUFLLENBQ1YsZUFBZSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDLElBQUksQ0FDSixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxVQUFDLFVBQVU7WUFDbkIsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2hFLElBQU0sZUFBZSxHQUFHLFVBQVUs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R0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUM3QyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQzNDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRDs7Ozs7Ozs7U0FRSztJQUNMLGtCQUFrQixZQUFDLE1BQU07UUFDdkIsSUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsT0FBTzthQUNyQyxJQUFJLENBQUMsVUFBQyxFQUFXO2dCQUFULG9CQUFPO1lBQU8sT0FBQSxPQUFPLEtBQUssa0JBQWtCO1FBQTlCLENBQThCLENBQUMsQ0FBQztRQUV6RCxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7U0FDbkU7SUFDSCxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsZ0JBQWdCLFlBQUMsVUFBVTtRQUN6QixVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekUsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckMsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0LCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsIHN3aXRjaE1hcCwgbWFwVG9cbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IEVOVElUWV9MSU5LU19DTEFTUyA9ICdlbnRpdHktbGlua3MnO1xuY29uc3QgRU5USVRZX0xJTktTX1BBUkVOVF9TRUxFQ1RPUiA9ICcubjctZmFjZXRzLXdyYXBwZXJfX2dyb3VwOmxhc3QtY2hpbGQgLm43LWZhY2V0X19zZWN0aW9uLWlucHV0LWxpbmtzJztcblxuY29uc3QgbG9hZGVySXRlbSA9IHtcbiAgY291bnRlcjogbnVsbCxcbiAgbGFiZWw6ICdDYXJpY2FtZW50byBpbiBjb3Jzby4uLicsXG4gIHNlYXJjaERhdGE6IFtdLFxuICB2YWx1ZTogJ19fbG9hZGluZ19fJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGFnaW5hdGlvblN0YXRlOiB7fSBhcyBhbnksXG4gIHBhZ2luYXRlJDogbmV3IFN1YmplY3QoKSxcbiAgbGlzdGVuVG9DaGFuZ2VzKGRhdGFTb3VyY2UpIHtcbiAgICBjb25zdCBmYWNldHNXcmFwcGVyRUggPSBkYXRhU291cmNlLmdldFdpZGdldEV2ZW50SGFuZGxlcignZmFjZXRzLXdyYXBwZXInKTtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICBmYWNldHNXcmFwcGVyRUguaW50ZXJuYWxGYWNldHNDaGFuZ2UkLnBpcGUobWFwVG8obnVsbCkpLFxuICAgICAgdGhpcy5wYWdpbmF0ZSQsXG4gICAgKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2luYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IGRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgICAgICBjb25zdCBpbnRlcm5hbEZpbHRlcnMgPSBkYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEludGVybmFsRmlsdGVycygpO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5vZmZzZXQgPSBwYWdpbmF0aW9uID8gdGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0IDogMDtcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbXNPZmZzZXQocmVxdWVzdFBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBbLi4ucmVxdWVzdFBhcmFtcy5maWx0ZXJzLCAuLi5pbnRlcm5hbEZpbHRlcnNdO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgc2VhcmNoUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgdG90YWxDb3VudDogMTAwLFxuICAgICAgICAgICAgZ2FsbGVyeTogISEoZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRJZCgpID09PSAnYXctZ2FsbGVyeS1sYXlvdXQnKSxcbiAgICAgICAgICAgIC4uLnJlcXVlc3RQYXJhbXMsXG4gICAgICAgICAgICBmaWx0ZXJzXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0aWFsIGxvYWRlclxuICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3RhdGUub2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5hZGRJbml0aWFsTG9hZGVyKGRhdGFTb3VyY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuZ2V0RmFjZXRzUmVxJChwYXJhbXMpO1xuICAgICAgfSlcbiAgICApO1xuICB9LFxuICBvbkZhY2V0c1Jlc3BvbnNlKHNlYXJjaE1vZGVsLCBmYWNldHMpIHtcbiAgICAvLyBwYWdpbmF0aW9uIGNvbnRyb2xcbiAgICBjb25zdCBlbnRpdHlMaW5rc0ZhY2V0ID0gZmFjZXRzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IEVOVElUWV9MSU5LU19DTEFTUyk7XG4gICAgY29uc3QgeyB0b3RhbENvdW50IH0gPSBlbnRpdHlMaW5rc0ZhY2V0O1xuICAgIGxldCB7IGxpbWl0LCBvZmZzZXQgfSA9IHRoaXMucGFnaW5hdGlvblN0YXRlO1xuICAgIGlmICh0eXBlb2YgbGltaXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsaW1pdCA9IDEwO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIHRoaXMucGFnaW5hdGlvblN0YXRlLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICAgIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICBjb25zdCBlbnRpdHlMaW5rc0lucHV0ID0gc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoRU5USVRZX0xJTktTX0NMQVNTKTtcbiAgICAgIGNvbnN0IG9sZERhdGEgPSBlbnRpdHlMaW5rc0lucHV0LmdldERhdGEoKSB8fCBbXTtcbiAgICAgIC8vIHJlbW92ZSBmYWtlIGxvYWRpbmcgZWxlbWVudFxuICAgICAgaWYgKG9sZERhdGEubGVuZ3RoKSB7XG4gICAgICAgIG9sZERhdGEucG9wKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdEYXRhID0gb2xkRGF0YS5jb25jYXQoZW50aXR5TGlua3NGYWNldC5kYXRhKTtcbiAgICAgIGVudGl0eUxpbmtzRmFjZXQuZGF0YSA9IG5ld0RhdGE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFnaW5hdGlvblN0YXRlLnRvdGFsQ291bnQgPiAobGltaXQgKyBvZmZzZXQpKSB7XG4gICAgICBlbnRpdHlMaW5rc0ZhY2V0LmRhdGEucHVzaChsb2FkZXJJdGVtKTtcbiAgICB9XG5cbiAgICAvLyBlbXB0eSBzdGF0ZVxuICAgIGNvbnN0IGVudGl0eUxpbmtzSW5wdXQgPSBzZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChFTlRJVFlfTElOS1NfQ0xBU1MpO1xuICAgIGVudGl0eUxpbmtzSW5wdXQuc2V0SXNFbXB0eSghdG90YWxDb3VudCk7XG5cbiAgICAvLyBmaXggc2Nyb2xsXG4gICAgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEVOVElUWV9MSU5LU19QQVJFTlRfU0VMRUNUT1IpO1xuICAgICAgaWYgKHNjcm9sbEVsKSB7XG4gICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGxvYWRpbmcgc3RhdGVcbiAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gIH0sXG4gIGluaXRQYWdpbmF0aW9uKHNlYXJjaE1vZGVsKSB7XG4gICAgc2VhcmNoTW9kZWwuZ2V0RmlsdGVycygpLmZpbHRlcigoZmlsdGVyKSA9PiAoXG4gICAgICBmaWx0ZXIucGFnaW5hdGlvblxuICAgICkpLmZvckVhY2goKHsgcGFnaW5hdGlvbiB9KSA9PiB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZSA9IHtcbiAgICAgICAgLi4ucGFnaW5hdGlvbixcbiAgICAgICAgLi4udGhpcy5wYWdpbmF0aW9uU3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEVOVElUWV9MSU5LU19QQVJFTlRfU0VMRUNUT1IpO1xuICAgICAgY29uc3Qgc2Nyb2xsJCA9IGZyb21FdmVudChzY3JvbGxFbCwgJ3Njcm9sbCcpO1xuICAgICAgc2Nyb2xsJC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKVxuICAgICAgKS5zdWJzY3JpYmUoKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0IH0gPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBvZmZzZXQsIGxpbWl0LCB0b3RhbENvdW50LCBsb2FkaW5nXG4gICAgICAgIH0gPSB0aGlzLnBhZ2luYXRpb25TdGF0ZTtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gMTUwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCA+PSBzY3JvbGxIZWlnaHQgLSBtYXJnaW4pXG4gICAgICAgICAgJiYgKG9mZnNldCArIGxpbWl0IDwgdG90YWxDb3VudClcbiAgICAgICAgICAmJiBsb2FkaW5nID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5vZmZzZXQgPSBvZmZzZXQgKyBsaW1pdDtcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlJC5uZXh0KHRoaXMucGFnaW5hdGlvblN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIC8qIGNsZWFySW50ZXJuYWxGaWx0ZXJzKHNlYXJjaE1vZGVsKSB7XG4gICAgY29uc3Qgc2VhcmNoRmlsdGVyID0gc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgnZW50aXR5LXNlYXJjaCcpWzBdO1xuICAgIGNvbnN0IHR5cGVzRmlsdGVyID0gc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgnZW50aXR5LXR5cGVzJylbMF07XG4gICAgaWYgKCFpc0VtcHR5KHNlYXJjaEZpbHRlci52YWx1ZSkgfHwgIWlzRW1wdHkodHlwZXNGaWx0ZXIudmFsdWUpKSB7XG4gICAgICBzZWFyY2hGaWx0ZXIudmFsdWUgPSAnJztcbiAgICAgIHR5cGVzRmlsdGVyLnZhbHVlID0gW107XG4gICAgICBzZWFyY2hNb2RlbC51cGRhdGVJbnB1dHNGcm9tRmlsdGVycygpO1xuICAgIH1cbiAgfSwgKi9cbiAgdXBkYXRlUGFyYW1zT2Zmc2V0KHBhcmFtcykge1xuICAgIGNvbnN0IGVudGl0eUxpbmtzRmlsdGVyID0gcGFyYW1zLmZpbHRlcnNcbiAgICAgIC5maW5kKCh7IGZhY2V0SWQgfSkgPT4gZmFjZXRJZCA9PT0gRU5USVRZX0xJTktTX0NMQVNTKTtcblxuICAgIGlmIChlbnRpdHlMaW5rc0ZpbHRlcikge1xuICAgICAgZW50aXR5TGlua3NGaWx0ZXIucGFnaW5hdGlvbi5vZmZzZXQgPSB0aGlzLnBhZ2luYXRpb25TdGF0ZS5vZmZzZXQ7XG4gICAgfVxuICB9LFxuICByZXNldE9mZnNldCgpIHtcbiAgICB0aGlzLnBhZ2luYXRpb25TdGF0ZS5vZmZzZXQgPSAwO1xuICB9LFxuICBhZGRJbml0aWFsTG9hZGVyKGRhdGFTb3VyY2UpIHtcbiAgICBkYXRhU291cmNlLnNlYXJjaE1vZGVsLnNldElucHV0RGF0YShFTlRJVFlfTElOS1NfQ0xBU1MsIFtsb2FkZXJJdGVtXSk7XG4gICAgY29uc3QgZmFjZXRzV3JhcHBlckRTID0gZGF0YVNvdXJjZS5nZXRXaWRnZXREYXRhU291cmNlKCdmYWNldHMtd3JhcHBlcicpO1xuICAgIGZhY2V0c1dyYXBwZXJEUy51cGRhdGVJbnB1dExpbmtzKCk7XG4gIH1cbn07XG4iXX0=