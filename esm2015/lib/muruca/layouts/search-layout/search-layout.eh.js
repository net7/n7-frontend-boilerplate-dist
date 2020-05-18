/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isEmpty } from 'lodash';
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, tap, switchMap } from 'rxjs/operators';
import searchHelper from '../../helpers/search-helper';
export class MrSearchLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.facetsReady$ = new Subject();
        this.doSearch$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'mr-search-layout.init':
                    this.hostEmit$ = payload.hostEmit$;
                    this.guestEmit$ = payload.guestEmit$;
                    this.router = payload.router;
                    this.activatedRoute = payload.activatedRoute;
                    // listeners
                    this.listenToGuest();
                    this.listenToRouterChanges();
                    // init
                    this.dataSource.onInit(payload);
                    break;
                case 'mr-search-layout.destroy':
                    this.destroyed$.next(true);
                    break;
                case 'mr-search-layout.searchreset':
                    this.clearSearchState();
                    this.updateRoute();
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
        ({ type, payload }) => {
            switch (type) {
                case 'n7-smart-pagination.click':
                    this.dataSource.setState('page', payload.page);
                    this.updateRoute();
                    break;
                case 'n7-smart-pagination.change':
                    this.dataSource.setState('limit', payload.value);
                    this.updateRoute();
                    break;
                case 'mr-search-results-title.change':
                    this.dataSource.setState('sort', payload.value);
                    this.updateRoute();
                    break;
                case 'mr-search-tags.click': {
                    /** @type {?} */
                    const stateValue = this.dataSource.getState(payload.id);
                    /** @type {?} */
                    let newValue = null;
                    if (Array.isArray(stateValue)) {
                        stateValue.splice(stateValue.indexOf(payload.value), 1);
                        newValue = stateValue;
                    }
                    this.dataSource.setState(payload.id, newValue);
                    this.hostEmit$.next({
                        type: 'updateinputvalue',
                        payload: {
                            id: payload.id,
                            value: newValue
                        }
                    });
                    this.updateRoute();
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
        () => {
            this.dataSource.updateActiveFilters();
            this.dataSource.setSectionState('results', 'LOADING');
        })), switchMap((/**
         * @param {?} params
         * @return {?}
         */
        (params) => this.dataSource.doRequest$(params)))).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.dataSource.handleResponse(response);
            this.updateFacetHeaders(response.headers);
        }));
    }
    /**
     * @return {?}
     */
    listenToGuest() {
        this.guestEmit$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'facetsready': {
                    this.facetsReady$.next();
                    break;
                }
                case 'change': {
                    this.dataSource.setState(payload.id, payload.value);
                    this.updateRoute();
                    break;
                }
                default:
                    break;
            }
        }));
    }
    /**
     * @return {?}
     */
    listenToRouterChanges() {
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            /** @type {?} */
            const searchState = searchHelper.queryParamsToState(params);
            // params state control
            if (isEmpty(params) && !isEmpty(this.dataSource.getState())) {
                this.clearSearchState();
            }
            else if (isEmpty(this.dataSource.getState()) && !isEmpty(params)) {
                this.setSearchState(params);
            }
            this.doSearch$.next(searchState);
        }));
    }
    /**
     * @return {?}
     */
    updateRoute() {
        /** @type {?} */
        const queryParams = searchHelper.stateToQueryParams(this.dataSource.getState());
        this.router.navigate([], {
            queryParams
        });
    }
    /**
     * @private
     * @param {?} headers
     * @return {?}
     */
    updateFacetHeaders(headers) {
        Object.keys(headers).forEach((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            this.hostEmit$.next({
                type: 'updateinputvalue',
                payload: {
                    id,
                    value: headers[id]
                }
            });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    clearSearchState() {
        this.dataSource.clearState();
        this.hostEmit$.next({ type: 'clearinputs' });
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    setSearchState(params) {
        this.facetsReady$.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const stateParams = searchHelper.queryParamsToState(params);
            Object.keys(stateParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                this.dataSource.setState(key, stateParams[key]);
                this.hostEmit$.next({
                    type: 'updateinputvalue',
                    payload: {
                        id: key,
                        value: stateParams[key]
                    }
                });
            }));
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osR0FBRyxFQUNILFNBQVMsRUFDVixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sWUFBWSxNQUFNLDZCQUE2QixDQUFDO0FBR3ZELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBQWxEOztRQUdVLGVBQVUsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU03QyxpQkFBWSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTVDLGNBQVMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXdLbEQsQ0FBQzs7OztJQWxLUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7b0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztvQkFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7b0JBQzdDLFlBQVk7b0JBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDN0IsT0FBTztvQkFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtnQkFFUixLQUFLLDBCQUEwQjtvQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNCLE1BQU07Z0JBRVIsS0FBSyw4QkFBOEI7b0JBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywyQkFBMkI7b0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsTUFBTTtnQkFFUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixNQUFNO2dCQUVSLEtBQUssZ0NBQWdDO29CQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLE1BQU07Z0JBRVIsS0FBSyxzQkFBc0IsQ0FBQyxDQUFDOzswQkFDckIsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7O3dCQUNuRCxRQUFRLEdBQUcsSUFBSTtvQkFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUM3QixVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxRQUFRLEdBQUcsVUFBVSxDQUFDO3FCQUN2QjtvQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDbEIsSUFBSSxFQUFFLGtCQUFrQjt3QkFDeEIsT0FBTyxFQUFFOzRCQUNQLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTs0QkFDZCxLQUFLLEVBQUUsUUFBUTt5QkFDaEI7cUJBQ0YsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsTUFBTTtpQkFDUDtnQkFFRDtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILHdCQUF3QjtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDakIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsRUFBQyxFQUNGLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FDL0QsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssYUFBYSxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3pCLE1BQU07aUJBQ1A7Z0JBRUQsS0FBSyxRQUFRLENBQUMsQ0FBQztvQkFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixNQUFNO2lCQUNQO2dCQUVEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7O2tCQUNmLFdBQVcsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1lBQzNELHVCQUF1QjtZQUN2QixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7O2NBQ0gsV0FBVyxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9FLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QixXQUFXO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsT0FBTztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixPQUFPLEVBQUU7b0JBQ1AsRUFBRTtvQkFDRixLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztpQkFDbkI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsTUFBTTtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ3pCLFdBQVcsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1lBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2xCLElBQUksRUFBRSxrQkFBa0I7b0JBQ3hCLE9BQU8sRUFBRTt3QkFDUCxFQUFFLEVBQUUsR0FBRzt3QkFDUCxLQUFLLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQztxQkFDeEI7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7O0lBbExDLHNDQUFvQzs7Ozs7SUFFcEMsc0NBQXFEOzs7OztJQUVyRCxxQ0FBZ0M7Ozs7O0lBRWhDLHNDQUFpQzs7Ozs7SUFFakMsd0NBQW9EOzs7OztJQUVwRCxxQ0FBZ0Q7Ozs7O0lBRWhELGtDQUF1Qjs7Ozs7SUFFdkIsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIHRha2VVbnRpbCxcbiAgZGVib3VuY2VUaW1lLFxuICB0YXAsXG4gIHN3aXRjaE1hcFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgc2VhcmNoSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvc2VhcmNoLWhlbHBlcic7XG5pbXBvcnQgeyBNclNlYXJjaExheW91dERTIH0gZnJvbSAnLi9zZWFyY2gtbGF5b3V0LmRzJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgZGF0YVNvdXJjZTogTXJTZWFyY2hMYXlvdXREUztcblxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgaG9zdEVtaXQkOiBTdWJqZWN0PGFueT47XG5cbiAgcHJpdmF0ZSBndWVzdEVtaXQkOiBTdWJqZWN0PGFueT47XG5cbiAgcHJpdmF0ZSBmYWNldHNSZWFkeSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgZG9TZWFyY2gkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmhvc3RFbWl0JCA9IHBheWxvYWQuaG9zdEVtaXQkO1xuICAgICAgICAgIHRoaXMuZ3Vlc3RFbWl0JCA9IHBheWxvYWQuZ3Vlc3RFbWl0JDtcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUgPSBwYXlsb2FkLmFjdGl2YXRlZFJvdXRlO1xuICAgICAgICAgIC8vIGxpc3RlbmVyc1xuICAgICAgICAgIHRoaXMubGlzdGVuVG9HdWVzdCgpO1xuICAgICAgICAgIHRoaXMubGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCk7XG4gICAgICAgICAgLy8gaW5pdFxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtbGF5b3V0LnNlYXJjaHJlc2V0JzpcbiAgICAgICAgICB0aGlzLmNsZWFyU2VhcmNoU3RhdGUoKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0U3RhdGUoJ3BhZ2UnLCBwYXlsb2FkLnBhZ2UpO1xuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFN0YXRlKCdsaW1pdCcsIHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZS5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRTdGF0ZSgnc29ydCcsIHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGUoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtdGFncy5jbGljayc6IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gdGhpcy5kYXRhU291cmNlLmdldFN0YXRlKHBheWxvYWQuaWQpO1xuICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGVWYWx1ZSkpIHtcbiAgICAgICAgICAgIHN0YXRlVmFsdWUuc3BsaWNlKHN0YXRlVmFsdWUuaW5kZXhPZihwYXlsb2FkLnZhbHVlKSwgMSk7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHN0YXRlVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRTdGF0ZShwYXlsb2FkLmlkLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5ob3N0RW1pdCQubmV4dCh7XG4gICAgICAgICAgICB0eXBlOiAndXBkYXRlaW5wdXR2YWx1ZScsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIGlkOiBwYXlsb2FkLmlkLFxuICAgICAgICAgICAgICB2YWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gc2VhcmNoIHJlcXVlc3Qgc3RyZWFtXG4gICAgdGhpcy5kb1NlYXJjaCQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUFjdGl2ZUZpbHRlcnMoKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFNlY3Rpb25TdGF0ZSgncmVzdWx0cycsICdMT0FESU5HJyk7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgocGFyYW1zOiBhbnkpID0+IHRoaXMuZGF0YVNvdXJjZS5kb1JlcXVlc3QkKHBhcmFtcykpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgdGhpcy51cGRhdGVGYWNldEhlYWRlcnMocmVzcG9uc2UuaGVhZGVycyk7XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW5Ub0d1ZXN0KCkge1xuICAgIHRoaXMuZ3Vlc3RFbWl0JC5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICApLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmYWNldHNyZWFkeSc6IHtcbiAgICAgICAgICB0aGlzLmZhY2V0c1JlYWR5JC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdjaGFuZ2UnOiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFN0YXRlKHBheWxvYWQuaWQsIHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW5Ub1JvdXRlckNoYW5nZXMoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcbiAgICApLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IHNlYXJjaEhlbHBlci5xdWVyeVBhcmFtc1RvU3RhdGUocGFyYW1zKTtcbiAgICAgIC8vIHBhcmFtcyBzdGF0ZSBjb250cm9sXG4gICAgICBpZiAoaXNFbXB0eShwYXJhbXMpICYmICFpc0VtcHR5KHRoaXMuZGF0YVNvdXJjZS5nZXRTdGF0ZSgpKSkge1xuICAgICAgICB0aGlzLmNsZWFyU2VhcmNoU3RhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNFbXB0eSh0aGlzLmRhdGFTb3VyY2UuZ2V0U3RhdGUoKSkgJiYgIWlzRW1wdHkocGFyYW1zKSkge1xuICAgICAgICB0aGlzLnNldFNlYXJjaFN0YXRlKHBhcmFtcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmRvU2VhcmNoJC5uZXh0KHNlYXJjaFN0YXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVJvdXRlKCkge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VhcmNoSGVscGVyLnN0YXRlVG9RdWVyeVBhcmFtcyh0aGlzLmRhdGFTb3VyY2UuZ2V0U3RhdGUoKSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUZhY2V0SGVhZGVycyhoZWFkZXJzKSB7XG4gICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMuaG9zdEVtaXQkLm5leHQoe1xuICAgICAgICB0eXBlOiAndXBkYXRlaW5wdXR2YWx1ZScsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB2YWx1ZTogaGVhZGVyc1tpZF1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyU2VhcmNoU3RhdGUoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmNsZWFyU3RhdGUoKTtcbiAgICB0aGlzLmhvc3RFbWl0JC5uZXh0KHsgdHlwZTogJ2NsZWFyaW5wdXRzJyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2VhcmNoU3RhdGUocGFyYW1zKSB7XG4gICAgdGhpcy5mYWNldHNSZWFkeSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlUGFyYW1zID0gc2VhcmNoSGVscGVyLnF1ZXJ5UGFyYW1zVG9TdGF0ZShwYXJhbXMpO1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGVQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0U3RhdGUoa2V5LCBzdGF0ZVBhcmFtc1trZXldKTtcbiAgICAgICAgdGhpcy5ob3N0RW1pdCQubmV4dCh7XG4gICAgICAgICAgdHlwZTogJ3VwZGF0ZWlucHV0dmFsdWUnLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogc3RhdGVQYXJhbXNba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19