import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import helpers from '../../../common/helpers';
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
                        // scroll top
                        window.scrollTo(0, 0);
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
            _this.facetsChange$.next(); // scroll to ref element
            if (!_this.scrollRefElement) {
                _this.scrollRefElement = document.querySelector('.scroll-ref');
            }
            else if (!helpers.isElementInViewport(_this.scrollRefElement)) {
                _this.scrollRefElement.scrollIntoView();
            }
        });
    };
    return AwSearchLayoutEH;
}(EventHandler));
export { AwSearchLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUNMLFlBQVksRUFBRSxTQUFTLEVBQ3hCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxpQkFBaUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUVqRTtJQUFzQyxvQ0FBWTtJQUFsRDtRQUFBLHFFQTRMQztRQTNMUSxjQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFFN0IsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUlqRCxzREFBc0Q7UUFDOUMsbUJBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVwRDtvREFDNEM7UUFDcEMsNkJBQXVCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFOUQsK0RBQStEO1FBQ3ZELGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRTFCLGtFQUFrRTtRQUMxRCxvQkFBYyxHQUFHLEtBQUssQ0FBQzs7SUEwS2pDLENBQUM7SUF0S1EsaUNBQU0sR0FBYjtRQUFBLGlCQTRFQztRQTNFQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFRLEtBQUksQ0FBQyxRQUFRLFVBQU87b0JBQUU7d0JBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDM0IsS0FB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QUU7Z0JBQ2hCLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLHdCQUF3QjtZQUNsRCxJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUMvRDtpQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUM5RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUE1TEQsQ0FBc0MsWUFBWSxHQTRMakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5pbXBvcnQgZW50aXR5TGlua3NIZWxwZXIgZnJvbSAnLi4vLi4vc2VhcmNoL2VudGl0eS1saW5rcy5oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBsYXlvdXRJZCA9ICdhdy1zZWFyY2gtbGF5b3V0JztcblxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIC8qKiBFbWl0cyB3aGVuIGFueSBvZiB0aGUgc2VhcmNoLWZhY2V0cyBhcmUgY2hhbmdlZCAqL1xuICBwcml2YXRlIGZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHBhZ2luYXRpb24gZWxlbWVudFxuICAgKiBvciB0aGUgc2VsZWN0LXNvcnQgZWxlbWVudCBhcmUgY2hhbmdlZCAqL1xuICBwcml2YXRlIGFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBMYXN0IHF1ZXJpZWQgdGV4dCwgdXNlZCB0byBjaGVjayBpZiB0aGUgdGV4dCBoYXMgY2hhbmdlZCAqL1xuICBwcml2YXRlIHByZXZpb3VzVGV4dCA9ICcnO1xuXG4gIC8qKiBJcyB0cnVlIHdoZW4gdGhlIHNlYXJjaCBpcyB0cmlnZ2VyZWQgd2l0aCBhIG5ldyB0ZXh0LXN0cmluZyAqL1xuICBwcml2YXRlIHRleHRIYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzY3JvbGxSZWZFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGAke3RoaXMubGF5b3V0SWR9LmluaXRgOiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvQWRkaXRpb25hbFBhcmFtc0NoYW5nZSgpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpO1xuICAgICAgICAgIHRoaXMuX2xpc3RlblRvSW50ZXJuYWxGaWx0ZXJzKCk7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZTogdGV4dElucHV0IH0gPSB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0RmlsdGVyc0J5RmFjZXRJZCgncXVlcnknKVswXTtcbiAgICAgICAgICBpZiAoKHRleHRJbnB1dCB8fCAnJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmlzU2VhcmNoaW5nVGV4dC5uZXh0KHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoJ19zY29yZV9ERVNDJyk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpOyAvLyBlbWl0IGZyb20gb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgY2FzZSBgJHt0aGlzLmxheW91dElkfS5kZXN0cm95YDpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGAke3RoaXMubGF5b3V0SWR9Lm9yZGVyYnljaGFuZ2VgOlxuICAgICAgICAgIC8vIGhhbmRsZSB0aGUgY2hhbmdlIG9mIHJlc3VsdC1vcmRlclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7IC8vIGVtaXQgZnJvbSBvYnNlcnZhYmxlIHN0cmVhbVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgYCR7dGhpcy5sYXlvdXRJZH0uc2VhcmNocmVzZXRgOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXNldEJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKHNlYXJjaCkgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldHNjaGFuZ2UnOiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHRleHRJbnB1dCB9ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEZpbHRlcnNCeUZhY2V0SWQoJ3F1ZXJ5JylbMF07XG4gICAgICAgICAgLy8gQ2hlY2tzIGlmIDxpbnB1dCB0eXBlPXRleHQ+J3MgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICB0aGlzLnRleHRIYXNDaGFuZ2VkID0gISEodGV4dElucHV0ICYmICh0ZXh0SW5wdXQgIT09IHRoaXMucHJldmlvdXNUZXh0KSk7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c1RleHQgPSB0ZXh0SW5wdXQ7XG4gICAgICAgICAgY29uc3QgYWN0aXZlT3JkZXIgPSB0aGlzLmRhdGFTb3VyY2Uub3JkZXJCeU9wdGlvbnMuZmlsdGVyKChkKSA9PiBkLnNlbGVjdGVkKVswXS52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCAmJiAodGV4dElucHV0IHx8ICcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgc29ydCBieSBzY29yZSBvcHRpb25cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pc1NlYXJjaGluZ1RleHQubmV4dCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCh0ZXh0SW5wdXQgfHwgJycpLmxlbmd0aCA9PT0gMCAmJiAvc2NvcmUvaS50ZXN0KGFjdGl2ZU9yZGVyKSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHNvcnQgYnkgc2NvcmUgb3B0aW9uXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaXNTZWFyY2hpbmdUZXh0Lm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoJ2xhYmVsX3NvcnRfQVNDJyk7XG4gICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtc0NoYW5nZSQubmV4dCgpOyAvLyBlbWl0IGZyb20gb2JzZXJ2YWJsZSBzdHJlYW1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25SZXN1bHRzTGltaXRDaGFuZ2UocGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1zQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgdG8gYW55IG9mIHRoZSBzZWFyY2gtZmFjZXRzXG4gICAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub0ZhY2V0c0NoYW5nZSgpIHtcbiAgICB0aGlzLmZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTG9hZGluZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy50ZXh0SGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLm5leHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kb1NlYXJjaFJlcXVlc3QkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25TZWFyY2hSZXNwb25zZSgpO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnc2VhcmNocmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0U2VhcmNoTW9kZWxJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBlbnRpdHkgbGlua3MgcGFnaW5hdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9JbnRlcm5hbEZpbHRlcnMoKSB7XG4gICAgZW50aXR5TGlua3NIZWxwZXIubGlzdGVuVG9DaGFuZ2VzKHRoaXMuZGF0YVNvdXJjZSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ3NlYXJjaHJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldFNlYXJjaE1vZGVsSWQoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgaGFwcGVuaW5nIG9uIHBhZ2luYXRpb24gYW5kIHNlbGVjdCBlbGVtZW50cy5cbiAgICovXG4gIHByaXZhdGUgX2xpc3RlblRvQWRkaXRpb25hbFBhcmFtc0NoYW5nZSgpIHtcbiAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbXNDaGFuZ2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IHNlYXJjaE1vZGVsIH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gc2VhcmNoTW9kZWwuZ2V0UmVxdWVzdFBhcmFtcygpO1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hNb2RlbC5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xuXG4gICAgICAvLyBhZGl0aW9uYWwgcGFyYW1zXG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmJ5ID0gdGhpcy5kYXRhU291cmNlLm9yZGVyQnk7XG4gICAgICBxdWVyeVBhcmFtcy5vcmRlcmRpcmVjdGlvbiA9IHRoaXMuZGF0YVNvdXJjZS5vcmRlckRpcmVjdGlvbjtcbiAgICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2U7XG4gICAgICBxdWVyeVBhcmFtcy5saW1pdCA9IHRoaXMuZGF0YVNvdXJjZS5wYWdlU2l6ZTtcblxuICAgICAgLy8gSWYgdGhlIHNlYXJjaGVkIHRleHQgd2FzIHVwZGF0ZWQsIG92ZXJ3cml0ZSB0aGUgcXVlcnkgcGFyYW1zIGFuZCBmb3JjZSBzb3J0aW5nIGJ5IFwic2NvcmVcIi5cbiAgICAgIGlmICh0aGlzLnRleHRIYXNDaGFuZ2VkKSB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLm9yZGVyYnkgPSAnX3Njb3JlJztcbiAgICAgICAgcXVlcnlQYXJhbXMub3JkZXJkaXJlY3Rpb24gPSAnREVTQyc7XG4gICAgICAgIHRoaXMudGV4dEhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgIHBhdGg6IFtdLFxuICAgICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFVSTCBjaGFuZ2VzICovXG4gIHByaXZhdGUgX2xpc3RlblRvUm91dGVyQ2hhbmdlcygpIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICApLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLmVtaXRPdXRlcigncXVlcnlwYXJhbXNjaGFuZ2UnLCBwYXJhbXMpO1xuICAgICAgLy8gYWRpdGlvbmFsIHBhcmFtcyBjb250cm9sXG4gICAgICBpZiAocGFyYW1zLm9yZGVyYnkgJiYgcGFyYW1zLm9yZGVyZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbk9yZGVyQnlDaGFuZ2UoYCR7cGFyYW1zLm9yZGVyYnl9XyR7cGFyYW1zLm9yZGVyZGlyZWN0aW9ufWApO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5wYWdlKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblBhZ2luYXRpb25DaGFuZ2UoYHBhZ2UtJHtwYXJhbXMucGFnZX1gKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMubGltaXQpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldExpbWl0KCtwYXJhbXMubGltaXQpO1xuICAgICAgfVxuICAgICAgdGhpcy5mYWNldHNDaGFuZ2UkLm5leHQoKTsvLyBzY3JvbGwgdG8gcmVmIGVsZW1lbnRcbiAgICAgIGlmICghdGhpcy5zY3JvbGxSZWZFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsUmVmRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtcmVmJyk7XG4gICAgICB9IGVsc2UgaWYgKCFoZWxwZXJzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5zY3JvbGxSZWZFbGVtZW50KSkge1xuICAgICAgICB0aGlzLnNjcm9sbFJlZkVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19