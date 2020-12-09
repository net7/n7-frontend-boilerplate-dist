import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import entityLinksHelper from '../../search/entity-links.helper';
var AwSearchLayoutEH = /** @class */ (function (_super) {
    __extends(AwSearchLayoutEH, _super);
    function AwSearchLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layoutId = 'aw-search-layout';
        _this.destroyed$ = new Subject();
        /** Emits when any of the search-facets are changed */
        _this.facetsChange$ = new Subject();
        /** Emits when the pagination element
         * or the select-sort element are changed */
        _this.additionalParamsChange$ = new Subject();
        /** Last queried text, used to check if the text has changed */
        _this.previousText = '';
        /** Is true when the search is triggered with a new text-string */
        _this.textHasChanged = false;
        return _this;
    }
    AwSearchLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case _this.layoutId + ".init":
                    {
                        _this.route = payload.route;
                        _this.dataSource.onInit(payload);
                        _this._listenToFacetsChange();
                        _this._listenToAdditionalParamsChange();
                        _this._listenToRouterChanges();
                        _this._listenToInternalFilters();
                        var textInput = _this.dataSource.searchModel.getFiltersByFacetId('query')[0].value;
                        if ((textInput || '').length > 0) {
                            _this.dataSource.isSearchingText.next(true);
                            setTimeout(function () {
                                _this.dataSource.onOrderByChange('_score_DESC');
                                _this.additionalParamsChange$.next(); // emit from observable stream
                            }, 100);
                        }
                    }
                    break;
                case _this.layoutId + ".destroy":
                    _this.dataSource.onDestroy();
                    _this.destroyed$.next();
                    break;
                case _this.layoutId + ".orderbychange":
                    // handle the change of result-order
                    _this.dataSource.onOrderByChange(payload);
                    _this.additionalParamsChange$.next(); // emit from observable stream
                    break;
                case _this.layoutId + ".searchreset":
                    _this.dataSource.resetButtonEnabled = false;
                    _this.dataSource.searchModel.clear();
                    _this.additionalParamsChange$.next();
                    break;
                default:
                    console.warn('(search) unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'facets-wrapper.facetschange':
                    {
                        _this.dataSource.resetPagination();
                        var textInput = _this.dataSource.searchModel.getFiltersByFacetId('query')[0].value;
                        // Checks if <input type=text>'s value has changed
                        _this.textHasChanged = !!(textInput && (textInput !== _this.previousText));
                        _this.previousText = textInput;
                        var activeOrder = _this.dataSource.orderByOptions.filter(function (d) { return d.selected; })[0].value;
                        if (_this.textHasChanged && (textInput || '').length > 0) {
                            // Add sort by score option
                            _this.dataSource.isSearchingText.next(true);
                        }
                        else if ((textInput || '').length === 0 && /score/i.test(activeOrder)) {
                            // Remove sort by score option
                            _this.dataSource.isSearchingText.next(false);
                            setTimeout(function () {
                                _this.dataSource.onOrderByChange('label_sort_ASC');
                                _this.additionalParamsChange$.next(); // emit from observable stream
                            }, 100);
                        }
                    }
                    break;
                case 'n7-smart-pagination.change':
                    _this.dataSource.onResultsLimitChange(payload.value);
                    _this.additionalParamsChange$.next();
                    break;
                default:
                    break;
            }
        });
    };
    /**
     * Handles changes to any of the search-facets
     */
    AwSearchLayoutEH.prototype._listenToFacetsChange = function () {
        var _this = this;
        this.facetsChange$.pipe(debounceTime(500)).subscribe(function () {
            _this.dataSource.resultsLoading = true;
            if (_this.textHasChanged) {
                _this.additionalParamsChange$.next();
            }
            else {
                _this.dataSource.doSearchRequest$().subscribe(function () {
                    _this.dataSource.resultsLoading = false;
                    _this.dataSource.onSearchResponse();
                    _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
                });
            }
        });
    };
    /**
     * Handles entity links pagination
     */
    AwSearchLayoutEH.prototype._listenToInternalFilters = function () {
        var _this = this;
        entityLinksHelper.listenToChanges(this.dataSource)
            .subscribe(function () {
            _this.emitGlobal('searchresponse', _this.dataSource.getSearchModelId());
        });
    };
    /**
     * Handles changes happening on pagination and select elements.
     */
    AwSearchLayoutEH.prototype._listenToAdditionalParamsChange = function () {
        var _this = this;
        this.additionalParamsChange$.subscribe(function () {
            var searchModel = _this.dataSource.searchModel;
            var requestParams = searchModel.getRequestParams();
            var queryParams = searchModel.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach(function (key) { queryParams[key] = queryParams[key] || null; });
            // aditional params
            queryParams.orderby = _this.dataSource.orderBy;
            queryParams.orderdirection = _this.dataSource.orderDirection;
            queryParams.page = _this.dataSource.currentPage;
            queryParams.limit = _this.dataSource.pageSize;
            // If the searched text was updated, overwrite the query params and force sorting by "score".
            if (_this.textHasChanged) {
                queryParams.orderby = '_score';
                queryParams.orderdirection = 'DESC';
                _this.textHasChanged = false;
            }
            _this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams: queryParams,
            });
            _this.facetsChange$.next();
        });
    };
    /** URL changes */
    AwSearchLayoutEH.prototype._listenToRouterChanges = function () {
        var _this = this;
        this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe(function (params) {
            _this.emitOuter('queryparamschange', params);
            // aditional params control
            if (params.orderby && params.orderdirection) {
                _this.dataSource.onOrderByChange(params.orderby + "_" + params.orderdirection);
            }
            if (params.page) {
                _this.dataSource.onPaginationChange("page-" + params.page);
            }
            if (params.limit) {
                _this.dataSource.setLimit(+params.limit);
            }
            _this.facetsChange$.next();
        });
    };
    return AwSearchLayoutEH;
}(EventHandler));
export { AwSearchLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUNMLFlBQVksRUFBRSxTQUFTLEVBQ3hCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxpQkFBaUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUVqRTtJQUFzQyxvQ0FBWTtJQUFsRDtRQUFBLHFFQW1MQztRQWxMUSxjQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFFN0IsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUlqRCxzREFBc0Q7UUFDOUMsbUJBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVwRDtvREFDNEM7UUFDcEMsNkJBQXVCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFOUQsK0RBQStEO1FBQ3ZELGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRTFCLGtFQUFrRTtRQUMxRCxvQkFBYyxHQUFHLEtBQUssQ0FBQzs7SUFpS2pDLENBQUM7SUEvSlEsaUNBQU0sR0FBYjtRQUFBLGlCQTBFQztRQXpFQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFRLEtBQUksQ0FBQyxRQUFRLFVBQU87b0JBQUU7d0JBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUM3QixLQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQzt3QkFDdkMsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7d0JBQzlCLEtBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO3dCQUN4QixJQUFBLDhFQUFnQixDQUFpRTt3QkFDekYsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQzNDLFVBQVUsQ0FBQztnQ0FDVCxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQ0FDL0MsS0FBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsOEJBQThCOzRCQUNyRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7eUJBQ1Q7cUJBQ0Y7b0JBQUMsTUFBTTtnQkFFUixLQUFRLEtBQUksQ0FBQyxRQUFRLGFBQVU7b0JBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBRVIsS0FBUSxLQUFJLENBQUMsUUFBUSxtQkFBZ0I7b0JBQ25DLG9DQUFvQztvQkFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pDLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLDhCQUE4QjtvQkFDbkUsTUFBTTtnQkFFUixLQUFRLEtBQUksQ0FBQyxRQUFRLGlCQUFjO29CQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztvQkFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDcEMsTUFBTTtnQkFFUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM3RCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssNkJBQTZCO29CQUFFO3dCQUNsQyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO3dCQUMxQixJQUFBLDhFQUFnQixDQUFpRTt3QkFDekYsa0RBQWtEO3dCQUNsRCxLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDekUsS0FBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7d0JBQzlCLElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUN0RixJQUFJLEtBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDdkQsMkJBQTJCOzRCQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQzVDOzZCQUFNLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFOzRCQUN2RSw4QkFBOEI7NEJBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDNUMsVUFBVSxDQUFDO2dDQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0NBQ2xELEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLDhCQUE4Qjs0QkFDckUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3lCQUNUO3FCQUNGO29CQUFDLE1BQU07Z0JBRVIsS0FBSyw0QkFBNEI7b0JBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwRCxLQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3BDLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxnREFBcUIsR0FBN0I7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUMsU0FBUyxDQUFDO1lBQ1YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQ3RDLElBQUksS0FBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkIsS0FBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDdkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUNuQyxLQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RSxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxtREFBd0IsR0FBaEM7UUFBQSxpQkFLQztRQUpDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQy9DLFNBQVMsQ0FBQztZQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSywwREFBK0IsR0FBdkM7UUFBQSxpQkE2QkM7UUE1QkMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztZQUM3QixJQUFBLDBDQUFXLENBQXFCO1lBQ3hDLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JELElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFNUUsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLElBQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1RixtQkFBbUI7WUFDbkIsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUM5QyxXQUFXLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1lBQzVELFdBQVcsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDL0MsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUU3Qyw2RkFBNkY7WUFDN0YsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN2QixXQUFXLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztnQkFDL0IsV0FBVyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1lBRUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixJQUFJLEVBQUUsRUFBRTtnQkFDUixXQUFXLGFBQUE7YUFDWixDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtCQUFrQjtJQUNWLGlEQUFzQixHQUE5QjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQixLQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLDJCQUEyQjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUksTUFBTSxDQUFDLE9BQU8sU0FBSSxNQUFNLENBQUMsY0FBZ0IsQ0FBQyxDQUFDO2FBQy9FO1lBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNmLEtBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsVUFBUSxNQUFNLENBQUMsSUFBTSxDQUFDLENBQUM7YUFDM0Q7WUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFuTEQsQ0FBc0MsWUFBWSxHQW1MakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgZW50aXR5TGlua3NIZWxwZXIgZnJvbSAnLi4vLi4vc2VhcmNoL2VudGl0eS1saW5rcy5oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBsYXlvdXRJZCA9ICdhdy1zZWFyY2gtbGF5b3V0JztcblxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIC8qKiBFbWl0cyB3aGVuIGFueSBvZiB0aGUgc2VhcmNoLWZhY2V0cyBhcmUgY2hhbmdlZCAqL1xuICBwcml2YXRlIGZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHBhZ2luYXRpb24gZWxlbWVudFxuICAgKiBvciB0aGUgc2VsZWN0LXNvcnQgZWxlbWVudCBhcmUgY2hhbmdlZCAqL1xuICBwcml2YXRlIGFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBMYXN0IHF1ZXJpZWQgdGV4dCwgdXNlZCB0byBjaGVjayBpZiB0aGUgdGV4dCBoYXMgY2hhbmdlZCAqL1xuICBwcml2YXRlIHByZXZpb3VzVGV4dCA9ICcnO1xuXG4gIC8qKiBJcyB0cnVlIHdoZW4gdGhlIHNlYXJjaCBpcyB0cmlnZ2VyZWQgd2l0aCBhIG5ldyB0ZXh0LXN0cmluZyAqL1xuICBwcml2YXRlIHRleHRIYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBgJHt0aGlzLmxheW91dElkfS5pbml0YDoge1xuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuVG9GYWNldHNDaGFuZ2UoKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0FkZGl0aW9uYWxQYXJhbXNDaGFuZ2UoKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0ludGVybmFsRmlsdGVycygpO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHRleHRJbnB1dCB9ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoJ3F1ZXJ5JylbMF07XG4gICAgICAgICAgaWYgKCh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pc1NlYXJjaGluZ1RleHQubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25PcmRlckJ5Q2hhbmdlKCdfc2NvcmVfREVTQycpO1xuICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTsgLy8gZW1pdCBmcm9tIG9ic2VydmFibGUgc3RyZWFtXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBicmVhaztcblxuICAgICAgICBjYXNlIGAke3RoaXMubGF5b3V0SWR9LmRlc3Ryb3lgOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgYCR7dGhpcy5sYXlvdXRJZH0ub3JkZXJieWNoYW5nZWA6XG4gICAgICAgICAgLy8gaGFuZGxlIHRoZSBjaGFuZ2Ugb2YgcmVzdWx0LW9yZGVyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZShwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTsgLy8gZW1pdCBmcm9tIG9ic2VydmFibGUgc3RyZWFtXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBgJHt0aGlzLmxheW91dElkfS5zZWFyY2hyZXNldGA6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0QnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCcoc2VhcmNoKSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ZhY2V0cy13cmFwcGVyLmZhY2V0c2NoYW5nZSc6IHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZTogdGV4dElucHV0IH0gPSB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgncXVlcnknKVswXTtcbiAgICAgICAgICAvLyBDaGVja3MgaWYgPGlucHV0IHR5cGU9dGV4dD4ncyB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgIHRoaXMudGV4dEhhc0NoYW5nZWQgPSAhISh0ZXh0SW5wdXQgJiYgKHRleHRJbnB1dCAhPT0gdGhpcy5wcmV2aW91c1RleHQpKTtcbiAgICAgICAgICB0aGlzLnByZXZpb3VzVGV4dCA9IHRleHRJbnB1dDtcbiAgICAgICAgICBjb25zdCBhY3RpdmVPcmRlciA9IHRoaXMuZGF0YVNvdXJjZS5vcmRlckJ5T3B0aW9ucy5maWx0ZXIoKGQpID0+IGQuc2VsZWN0ZWQpWzBdLnZhbHVlO1xuICAgICAgICAgIGlmICh0aGlzLnRleHRIYXNDaGFuZ2VkICYmICh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEFkZCBzb3J0IGJ5IHNjb3JlIG9wdGlvblxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmlzU2VhcmNoaW5nVGV4dC5uZXh0KHRydWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoKHRleHRJbnB1dCB8fCAnJykubGVuZ3RoID09PSAwICYmIC9zY29yZS9pLnRlc3QoYWN0aXZlT3JkZXIpKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgc29ydCBieSBzY29yZSBvcHRpb25cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pc1NlYXJjaGluZ1RleHQubmV4dChmYWxzZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZSgnbGFiZWxfc29ydF9BU0MnKTtcbiAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7IC8vIGVtaXQgZnJvbSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbjctc21hcnQtcGFnaW5hdGlvbi5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblJlc3VsdHNMaW1pdENoYW5nZShwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgY2hhbmdlcyB0byBhbnkgb2YgdGhlIHNlYXJjaC1mYWNldHNcbiAgICovXG4gIHByaXZhdGUgX2xpc3RlblRvRmFjZXRzQ2hhbmdlKCkge1xuICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnRleHRIYXNDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRvU2VhcmNoUmVxdWVzdCQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblNlYXJjaFJlc3BvbnNlKCk7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCdzZWFyY2hyZXNwb25zZScsIHRoaXMuZGF0YVNvdXJjZS5nZXRTZWFyY2hNb2RlbElkKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGVudGl0eSBsaW5rcyBwYWdpbmF0aW9uXG4gICAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub0ludGVybmFsRmlsdGVycygpIHtcbiAgICBlbnRpdHlMaW5rc0hlbHBlci5saXN0ZW5Ub0NoYW5nZXModGhpcy5kYXRhU291cmNlKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnc2VhcmNocmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0U2VhcmNoTW9kZWxJZCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgY2hhbmdlcyBoYXBwZW5pbmcgb24gcGFnaW5hdGlvbiBhbmQgc2VsZWN0IGVsZW1lbnRzLlxuICAgKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9BZGRpdGlvbmFsUGFyYW1zQ2hhbmdlKCkge1xuICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHsgc2VhcmNoTW9kZWwgfSA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSBzZWFyY2hNb2RlbC5nZXRSZXF1ZXN0UGFyYW1zKCk7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlYXJjaE1vZGVsLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKHJlcXVlc3RQYXJhbXMuZmlsdGVycyk7XG5cbiAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHsgcXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV0gfHwgbnVsbDsgfSk7XG5cbiAgICAgIC8vIGFkaXRpb25hbCBwYXJhbXNcbiAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyYnkgPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJCeTtcbiAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyZGlyZWN0aW9uID0gdGhpcy5kYXRhU291cmNlLm9yZGVyRGlyZWN0aW9uO1xuICAgICAgcXVlcnlQYXJhbXMucGFnZSA9IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZTtcbiAgICAgIHF1ZXJ5UGFyYW1zLmxpbWl0ID0gdGhpcy5kYXRhU291cmNlLnBhZ2VTaXplO1xuXG4gICAgICAvLyBJZiB0aGUgc2VhcmNoZWQgdGV4dCB3YXMgdXBkYXRlZCwgb3ZlcndyaXRlIHRoZSBxdWVyeSBwYXJhbXMgYW5kIGZvcmNlIHNvcnRpbmcgYnkgXCJzY29yZVwiLlxuICAgICAgaWYgKHRoaXMudGV4dEhhc0NoYW5nZWQpIHtcbiAgICAgICAgcXVlcnlQYXJhbXMub3JkZXJieSA9ICdfc2NvcmUnO1xuICAgICAgICBxdWVyeVBhcmFtcy5vcmRlcmRpcmVjdGlvbiA9ICdERVNDJztcbiAgICAgICAgdGhpcy50ZXh0SGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgcGF0aDogW10sXG4gICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogVVJMIGNoYW5nZXMgKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdxdWVyeXBhcmFtc2NoYW5nZScsIHBhcmFtcyk7XG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zIGNvbnRyb2xcbiAgICAgIGlmIChwYXJhbXMub3JkZXJieSAmJiBwYXJhbXMub3JkZXJkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uT3JkZXJCeUNoYW5nZShgJHtwYXJhbXMub3JkZXJieX1fJHtwYXJhbXMub3JkZXJkaXJlY3Rpb259YCk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnBhZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uUGFnaW5hdGlvbkNoYW5nZShgcGFnZS0ke3BhcmFtcy5wYWdlfWApO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5saW1pdCkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0TGltaXQoK3BhcmFtcy5saW1pdCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=