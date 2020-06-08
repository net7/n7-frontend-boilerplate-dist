/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { isEmpty } from 'lodash';
import { RESULTS_REQUEST_STATE_CONTEXT, INPUT_STATE_CONTEXT, FACETS_REQUEST_STATE_CONTEXT } from '../../services/search.service';
export class MrSearchLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.searchState = {};
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
                    this.searchService = payload.searchService;
                    this.dataSource.onInit(payload);
                    // listeners
                    this.initStateListener();
                    break;
                case 'mr-search-layout.destroy':
                    this.destroyed$.next(true);
                    break;
                case 'mr-search-layout.searchreset':
                    this.searchService.reset();
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
                    this.searchService.setState('input', 'page', payload.page);
                    break;
                case 'n7-smart-pagination.change':
                    this.searchService.setState('input', 'limit', payload.value);
                    break;
                case 'mr-search-results-title.change':
                    this.searchService.setState('input', 'sort', payload.value);
                    break;
                case 'mr-search-tags.click': {
                    /** @type {?} */
                    const stateValue = this.searchState[payload.id];
                    /** @type {?} */
                    let newValue = null;
                    if (Array.isArray(stateValue)) {
                        newValue = stateValue.filter((/**
                         * @param {?} value
                         * @return {?}
                         */
                        (value) => value !== payload.value));
                    }
                    this.searchService.setState('input', payload.id, newValue);
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
    initStateListener() {
        // inputs listener
        this.searchService.getState$(INPUT_STATE_CONTEXT).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ state }) => {
            this.searchState = state;
        }));
        this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.linksResponse = response;
            this.dataSource.updateActiveFilters(this.searchState, this.linksResponse);
        }));
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').subscribe((/**
         * @return {?}
         */
        () => {
            this.dataSource.setSectionState('results', 'LOADING');
        }));
        // default params hook
        this.searchService.setBeforeHook(RESULTS_REQUEST_STATE_CONTEXT, 'loading', (/**
         * @param {?=} params
         * @return {?}
         */
        (params = {}) => {
            /** @type {?} */
            const defaultParams = {
                page: 1,
                sort: '_score_DESC',
                limit: 10
            };
            Object.keys(defaultParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                params[key] = params[key] || defaultParams[key];
            }));
            return params;
        }));
        this.searchService.setBeforeHook(INPUT_STATE_CONTEXT, 'limit', (/**
         * @param {?} value
         * @return {?}
         */
        (value) => +value));
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'success')
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.dataSource.handleResponse(response);
            // update layout state
            this.dataSource.setSectionState('results', isEmpty(response.results) ? 'EMPTY' : 'OK');
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
    MrSearchLayoutEH.prototype.searchService;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.searchState;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.linksResponse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUVMLDZCQUE2QixFQUM3QixtQkFBbUIsRUFDbkIsNEJBQTRCLEVBQzdCLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFBbEQ7O1FBR1UsZUFBVSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBSTdDLGdCQUFXLEdBRWYsRUFBRSxDQUFDO0lBNkZULENBQUM7Ozs7SUF6RlEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsWUFBWTtvQkFDWixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsTUFBTTtnQkFFUixLQUFLLDBCQUEwQjtvQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNCLE1BQU07Z0JBRVIsS0FBSyw4QkFBOEI7b0JBQ2pDLElBQUksQ0FBQyxhQUFh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QUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxDQUFDO2FBQ25FLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLHNCQUFzQjtZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRjs7O0lBckdDLHNDQUFvQzs7Ozs7SUFFcEMsc0NBQXFEOzs7OztJQUVyRCx5Q0FBdUM7Ozs7O0lBRXZDLHVDQUVPOzs7OztJQUVQLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXREUyB9IGZyb20gJy4vc2VhcmNoLWxheW91dC5kcyc7XG5pbXBvcnQge1xuICBNclNlYXJjaFNlcnZpY2UsXG4gIFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULFxuICBJTlBVVF9TVEFURV9DT05URVhULFxuICBGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhUXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgZGF0YVNvdXJjZTogTXJTZWFyY2hMYXlvdXREUztcblxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgc2VhcmNoU2VydmljZTogTXJTZWFyY2hTZXJ2aWNlO1xuXG4gIHByaXZhdGUgc2VhcmNoU3RhdGU6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIGxpbmtzUmVzcG9uc2U6IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zZWFyY2gtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IHBheWxvYWQuc2VhcmNoU2VydmljZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIC8vIGxpc3RlbmVyc1xuICAgICAgICAgIHRoaXMuaW5pdFN0YXRlTGlzdGVuZXIoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1sYXlvdXQuc2VhcmNocmVzZXQnOlxuICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5yZXNldCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2xpY2snOlxuICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZXRTdGF0ZSgnaW5wdXQnLCAncGFnZScsIHBheWxvYWQucGFnZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbjctc21hcnQtcGFnaW5hdGlvbi5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZXRTdGF0ZSgnaW5wdXQnLCAnbGltaXQnLCBwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZS5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZXRTdGF0ZSgnaW5wdXQnLCAnc29ydCcsIHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC10YWdzLmNsaWNrJzoge1xuICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSB0aGlzLnNlYXJjaFN0YXRlW3BheWxvYWQuaWRdO1xuICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGVWYWx1ZSkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gc3RhdGVWYWx1ZS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZXRTdGF0ZSgnaW5wdXQnLCBwYXlsb2FkLmlkLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdFN0YXRlTGlzdGVuZXIoKSB7XG4gICAgLy8gaW5wdXRzIGxpc3RlbmVyXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKS5zdWJzY3JpYmUoKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hTdGF0ZSA9IHN0YXRlO1xuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmxpbmtzUmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVBY3RpdmVGaWx0ZXJzKHRoaXMuc2VhcmNoU3RhdGUsIHRoaXMubGlua3NSZXNwb25zZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0U2VjdGlvblN0YXRlKCdyZXN1bHRzJywgJ0xPQURJTkcnKTtcbiAgICB9KTtcblxuICAgIC8vIGRlZmF1bHQgcGFyYW1zIGhvb2tcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0QmVmb3JlSG9vayhSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnLCAocGFyYW1zID0ge30pID0+IHtcbiAgICAgIGNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHNvcnQ6ICdfc2NvcmVfREVTQycsXG4gICAgICAgIGxpbWl0OiAxMFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBwYXJhbXNba2V5XSA9IHBhcmFtc1trZXldIHx8IGRlZmF1bHRQYXJhbXNba2V5XTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0QmVmb3JlSG9vayhJTlBVVF9TVEFURV9DT05URVhULCAnbGltaXQnLCAodmFsdWUpID0+ICt2YWx1ZSk7XG5cbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAvLyB1cGRhdGUgbGF5b3V0IHN0YXRlXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRTZWN0aW9uU3RhdGUoJ3Jlc3VsdHMnLCBpc0VtcHR5KHJlc3BvbnNlLnJlc3VsdHMpID8gJ0VNUFRZJyA6ICdPSycpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==