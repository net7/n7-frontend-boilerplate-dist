/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isEmpty } from 'lodash';
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, tap, switchMap } from 'rxjs/operators';
import searchHelper from '../../helpers/search-helper';
var MrSearchLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchLayoutEH, _super);
    function MrSearchLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.facetsReady$ = new Subject();
        _this.doSearch$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    MrSearchLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-search-layout.init':
                    _this.hostEmit$ = payload.hostEmit$;
                    _this.guestEmit$ = payload.guestEmit$;
                    _this.router = payload.router;
                    _this.activatedRoute = payload.activatedRoute;
                    // listeners
                    _this.listenToGuest();
                    _this.listenToRouterChanges();
                    // init
                    _this.dataSource.onInit(payload);
                    break;
                case 'mr-search-layout.destroy':
                    _this.destroyed$.next(true);
                    break;
                case 'mr-search-layout.searchreset':
                    _this.clearSearchState();
                    _this.updateRoute();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'n7-smart-pagination.click':
                    _this.dataSource.setState('page', payload.page);
                    _this.updateRoute();
                    break;
                case 'n7-smart-pagination.change':
                    _this.dataSource.setState('limit', payload.value);
                    _this.updateRoute();
                    break;
                case 'mr-search-results-title.change':
                    _this.dataSource.setState('sort', payload.value);
                    _this.updateRoute();
                    break;
                case 'mr-search-tags.click': {
                    /** @type {?} */
                    var stateValue = _this.dataSource.getState(payload.id);
                    /** @type {?} */
                    var newValue = null;
                    if (Array.isArray(stateValue)) {
                        stateValue.splice(stateValue.indexOf(payload.value), 1);
                        newValue = stateValue;
                    }
                    _this.dataSource.setState(payload.id, newValue);
                    _this.hostEmit$.next({
                        type: 'updateinputvalue',
                        payload: {
                            id: payload.id,
                            value: newValue
                        }
                    });
                    _this.updateRoute();
                    break;
                }
                default:
                    break;
            }
        }));
        // search request stream
        this.doSearch$.pipe(debounceTime(500), tap((/**
         * @return {?}
         */
        function () {
            _this.dataSource.updateActiveFilters();
            _this.dataSource.setSectionState('results', 'LOADING');
        })), switchMap((/**
         * @param {?} params
         * @return {?}
         */
        function (params) { return _this.dataSource.doRequest$(params); }))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.dataSource.handleResponse(response);
            _this.updateFacetHeaders(response.headers);
        }));
    };
    /**
     * @return {?}
     */
    MrSearchLayoutEH.prototype.listenToGuest = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.guestEmit$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'facetsready': {
                    _this.facetsReady$.next();
                    break;
                }
                case 'change': {
                    _this.dataSource.setState(payload.id, payload.value);
                    _this.updateRoute();
                    break;
                }
                default:
                    break;
            }
        }));
    };
    /**
     * @return {?}
     */
    MrSearchLayoutEH.prototype.listenToRouterChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            /** @type {?} */
            var searchState = searchHelper.queryParamsToState(params);
            // params state control
            if (isEmpty(params) && !isEmpty(_this.dataSource.getState())) {
                _this.clearSearchState();
            }
            else if (isEmpty(_this.dataSource.getState()) && !isEmpty(params)) {
                _this.setSearchState(params);
            }
            _this.doSearch$.next(searchState);
        }));
    };
    /**
     * @return {?}
     */
    MrSearchLayoutEH.prototype.updateRoute = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var queryParams = searchHelper.stateToQueryParams(this.dataSource.getState());
        this.router.navigate([], {
            queryParams: queryParams
        });
    };
    /**
     * @private
     * @param {?} headers
     * @return {?}
     */
    MrSearchLayoutEH.prototype.updateFacetHeaders = /**
     * @private
     * @param {?} headers
     * @return {?}
     */
    function (headers) {
        var _this = this;
        Object.keys(headers).forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            _this.hostEmit$.next({
                type: 'updateinputvalue',
                payload: {
                    id: id,
                    value: headers[id]
                }
            });
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MrSearchLayoutEH.prototype.clearSearchState = /**
     * @private
     * @return {?}
     */
    function () {
        this.dataSource.clearState();
        this.hostEmit$.next({ type: 'clearinputs' });
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    MrSearchLayoutEH.prototype.setSearchState = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        this.facetsReady$.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var stateParams = searchHelper.queryParamsToState(params);
            Object.keys(stateParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.dataSource.setState(key, stateParams[key]);
                _this.hostEmit$.next({
                    type: 'updateinputvalue',
                    payload: {
                        id: key,
                        value: stateParams[key]
                    }
                });
            }));
        }));
    };
    return MrSearchLayoutEH;
}(EventHandler));
export { MrSearchLayoutEH };
if (false) {
    /** @type {?} */
    MrSearchLayoutEH.prototype.dataSource;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.hostEmit$;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.guestEmit$;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.facetsReady$;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.doSearch$;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.router;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.activatedRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEdBQUcsRUFDSCxTQUFTLEVBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLFlBQVksTUFBTSw2QkFBNkIsQ0FBQztBQUd2RDtJQUFzQyw0Q0FBWTtJQUFsRDtRQUFBLHFFQW1MQztRQWhMUyxnQkFBVSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBTTdDLGtCQUFZLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFNUMsZUFBUyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQXdLbEQsQ0FBQzs7OztJQWxLUSxpQ0FBTTs7O0lBQWI7UUFBQSxpQkFvRkM7UUFuRkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO29CQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNB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LENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFFTyx5Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsTUFBTTtRQUE3QixpQkFjQztRQWJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7O1FBQUM7O2dCQUNwQixXQUFXLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztZQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEdBQUc7Z0JBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2xCLElBQUksRUFBRSxrQkFBa0I7b0JBQ3hCLE9BQU8sRUFBRTt3QkFDUCxFQUFFLEVBQUUsR0FBRzt3QkFDUCxLQUFLLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQztxQkFDeEI7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFuTEQsQ0FBc0MsWUFBWSxHQW1MakQ7Ozs7SUFsTEMsc0NBQW9DOzs7OztJQUVwQyxzQ0FBcUQ7Ozs7O0lBRXJELHFDQUFnQzs7Ozs7SUFFaEMsc0NBQWlDOzs7OztJQUVqQyx3Q0FBb0Q7Ozs7O0lBRXBELHFDQUFnRDs7Ozs7SUFFaEQsa0NBQXVCOzs7OztJQUV2QiwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgdGFrZVVudGlsLFxuICBkZWJvdW5jZVRpbWUsXG4gIHRhcCxcbiAgc3dpdGNoTWFwXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBzZWFyY2hIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9zZWFyY2gtaGVscGVyJztcbmltcG9ydCB7IE1yU2VhcmNoTGF5b3V0RFMgfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuZHMnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBkYXRhU291cmNlOiBNclNlYXJjaExheW91dERTO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBob3N0RW1pdCQ6IFN1YmplY3Q8YW55PjtcblxuICBwcml2YXRlIGd1ZXN0RW1pdCQ6IFN1YmplY3Q8YW55PjtcblxuICBwcml2YXRlIGZhY2V0c1JlYWR5JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBkb1NlYXJjaCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zZWFyY2gtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuaG9zdEVtaXQkID0gcGF5bG9hZC5ob3N0RW1pdCQ7XG4gICAgICAgICAgdGhpcy5ndWVzdEVtaXQkID0gcGF5bG9hZC5ndWVzdEVtaXQkO1xuICAgICAgICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZSA9IHBheWxvYWQuYWN0aXZhdGVkUm91dGU7XG4gICAgICAgICAgLy8gbGlzdGVuZXJzXG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub0d1ZXN0KCk7XG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKTtcbiAgICAgICAgICAvLyBpbml0XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1sYXlvdXQuc2VhcmNocmVzZXQnOlxuICAgICAgICAgIHRoaXMuY2xlYXJTZWFyY2hTdGF0ZSgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRTdGF0ZSgncGFnZScsIHBheWxvYWQucGFnZSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVSb3V0ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0U3RhdGUoJ2xpbWl0JywgcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVSb3V0ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFN0YXRlKCdzb3J0JywgcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVSb3V0ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC10YWdzLmNsaWNrJzoge1xuICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0U3RhdGUocGF5bG9hZC5pZCk7XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZVZhbHVlKSkge1xuICAgICAgICAgICAgc3RhdGVWYWx1ZS5zcGxpY2Uoc3RhdGVWYWx1ZS5pbmRleE9mKHBheWxvYWQudmFsdWUpLCAxKTtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gc3RhdGVWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFN0YXRlKHBheWxvYWQuaWQsIG5ld1ZhbHVlKTtcbiAgICAgICAgICB0aGlzLmhvc3RFbWl0JC5uZXh0KHtcbiAgICAgICAgICAgIHR5cGU6ICd1cGRhdGVpbnB1dHZhbHVlJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgaWQ6IHBheWxvYWQuaWQsXG4gICAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBzZWFyY2ggcmVxdWVzdCBzdHJlYW1cbiAgICB0aGlzLmRvU2VhcmNoJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQWN0aXZlRmlsdGVycygpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0U2VjdGlvblN0YXRlKCdyZXN1bHRzJywgJ0xPQURJTkcnKTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKChwYXJhbXM6IGFueSkgPT4gdGhpcy5kYXRhU291cmNlLmRvUmVxdWVzdCQocGFyYW1zKSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICB0aGlzLnVwZGF0ZUZhY2V0SGVhZGVycyhyZXNwb25zZS5oZWFkZXJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxpc3RlblRvR3Vlc3QoKSB7XG4gICAgdGhpcy5ndWVzdEVtaXQkLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ZhY2V0c3JlYWR5Jzoge1xuICAgICAgICAgIHRoaXMuZmFjZXRzUmVhZHkkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2NoYW5nZSc6IHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0U3RhdGUocGF5bG9hZC5pZCwgcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVSb3V0ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxpc3RlblRvUm91dGVyQ2hhbmdlcygpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICkuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaFN0YXRlID0gc2VhcmNoSGVscGVyLnF1ZXJ5UGFyYW1zVG9TdGF0ZShwYXJhbXMpO1xuICAgICAgLy8gcGFyYW1zIHN0YXRlIGNvbnRyb2xcbiAgICAgIGlmIChpc0VtcHR5KHBhcmFtcykgJiYgIWlzRW1wdHkodGhpcy5kYXRhU291cmNlLmdldFN0YXRlKCkpKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWFyY2hTdGF0ZSgpO1xuICAgICAgfSBlbHNlIGlmIChpc0VtcHR5KHRoaXMuZGF0YVNvdXJjZS5nZXRTdGF0ZSgpKSAmJiAhaXNFbXB0eShwYXJhbXMpKSB7XG4gICAgICAgIHRoaXMuc2V0U2VhcmNoU3RhdGUocGFyYW1zKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9TZWFyY2gkLm5leHQoc2VhcmNoU3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUm91dGUoKSB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWFyY2hIZWxwZXIuc3RhdGVUb1F1ZXJ5UGFyYW1zKHRoaXMuZGF0YVNvdXJjZS5nZXRTdGF0ZSgpKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXNcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRmFjZXRIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICBPYmplY3Qua2V5cyhoZWFkZXJzKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5ob3N0RW1pdCQubmV4dCh7XG4gICAgICAgIHR5cGU6ICd1cGRhdGVpbnB1dHZhbHVlJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHZhbHVlOiBoZWFkZXJzW2lkXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJTZWFyY2hTdGF0ZSgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuY2xlYXJTdGF0ZSgpO1xuICAgIHRoaXMuaG9zdEVtaXQkLm5leHQoeyB0eXBlOiAnY2xlYXJpbnB1dHMnIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTZWFyY2hTdGF0ZShwYXJhbXMpIHtcbiAgICB0aGlzLmZhY2V0c1JlYWR5JC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVQYXJhbXMgPSBzZWFyY2hIZWxwZXIucXVlcnlQYXJhbXNUb1N0YXRlKHBhcmFtcyk7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRTdGF0ZShrZXksIHN0YXRlUGFyYW1zW2tleV0pO1xuICAgICAgICB0aGlzLmhvc3RFbWl0JC5uZXh0KHtcbiAgICAgICAgICB0eXBlOiAndXBkYXRlaW5wdXR2YWx1ZScsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiBzdGF0ZVBhcmFtc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=