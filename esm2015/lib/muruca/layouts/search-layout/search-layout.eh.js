/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { isEmpty } from 'lodash';
import { RESULTS_STATE_CONTEXT, INPUT_STATE_CONTEXT, LINKS_STATE_CONTEXT } from '../../services/search.service';
import resultsMock from './search-results.mock';
import linksMock from './search-links.mock';
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
        // request listener
        this.searchService.getState$(RESULTS_STATE_CONTEXT)
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ lastUpdated, state }) => {
            console.warn('request', lastUpdated, state);
        }));
        // inputs listener
        this.searchService.getState$(INPUT_STATE_CONTEXT).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ lastUpdated, state }) => {
            this.searchState = state;
            this.dataSource.updateActiveFilters(state);
            console.warn('input', lastUpdated, state);
        }));
        this.searchService.getState$(RESULTS_STATE_CONTEXT, 'loading').subscribe((/**
         * @return {?}
         */
        () => {
            this.dataSource.setSectionState('results', 'LOADING');
        }));
        // hook (test)
        this.searchService.setBeforeHook(RESULTS_STATE_CONTEXT, 'success', (/**
         * @return {?}
         */
        () => {
            const { page, sort } = this.searchState;
            return resultsMock(page || 1, sort || '_score_DESC');
        }));
        this.searchService.setBeforeHook(LINKS_STATE_CONTEXT, 'success', (/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            console.warn('links', response);
            return linksMock();
        }));
        this.searchService.getState$(RESULTS_STATE_CONTEXT, 'success')
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUVMLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ3BCLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxXQUFXLE1BQU0sdUJBQXVCLENBQUM7QUFDaEQsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFFNUMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7SUFBbEQ7O1FBR1UsZUFBVSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBSTdDLGdCQUFXLEdBRWYsRUFBRSxDQUFDO0lBMkZULENBQUM7Ozs7SUF6RlEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsWUFBWTtvQkFDWixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsTUFBTTtnQkFFUixLQUFLLDBCQUEwQjtvQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMs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RSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVztZQUN2QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLFNBQVM7Ozs7UUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzVFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUM7YUFDM0QsU0FBUzs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsc0JBQXNCO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pGLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztDQUNGOzs7SUFuR0Msc0NBQW9DOzs7OztJQUVwQyxzQ0FBcUQ7Ozs7O0lBRXJELHlDQUF1Qzs7Ozs7SUFFdkMsdUNBRU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE1yU2VhcmNoTGF5b3V0RFMgfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuZHMnO1xuaW1wb3J0IHtcbiAgTXJTZWFyY2hTZXJ2aWNlLFxuICBSRVNVTFRTX1NUQVRFX0NPTlRFWFQsXG4gIElOUFVUX1NUQVRFX0NPTlRFWFQsXG4gIExJTktTX1NUQVRFX0NPTlRFWFRcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHJlc3VsdHNNb2NrIGZyb20gJy4vc2VhcmNoLXJlc3VsdHMubW9jayc7XG5pbXBvcnQgbGlua3NNb2NrIGZyb20gJy4vc2VhcmNoLWxpbmtzLm1vY2snO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBkYXRhU291cmNlOiBNclNlYXJjaExheW91dERTO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBzZWFyY2hTdGF0ZToge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSA9IHt9O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gcGF5bG9hZC5zZWFyY2hTZXJ2aWNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgLy8gbGlzdGVuZXJzXG4gICAgICAgICAgdGhpcy5pbml0U3RhdGVMaXN0ZW5lcigpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5zZWFyY2hyZXNldCc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc2V0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbjctc21hcnQtcGFnaW5hdGlvbi5jbGljayc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsICdwYWdlJywgcGF5bG9hZC5wYWdlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsICdsaW1pdCcsIHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsICdzb3J0JywgcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLXRhZ3MuY2xpY2snOiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZSA9IHRoaXMuc2VhcmNoU3RhdGVbcGF5bG9hZC5pZF07XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZVZhbHVlKSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBzdGF0ZVZhbHVlLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSBwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsIHBheWxvYWQuaWQsIG5ld1ZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0U3RhdGVMaXN0ZW5lcigpIHtcbiAgICAvLyByZXF1ZXN0IGxpc3RlbmVyXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChSRVNVTFRTX1NUQVRFX0NPTlRFWFQpXG4gICAgICAuc3Vic2NyaWJlKCh7IGxhc3RVcGRhdGVkLCBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybigncmVxdWVzdCcsIGxhc3RVcGRhdGVkLCBzdGF0ZSk7XG4gICAgICB9KTtcbiAgICAvLyBpbnB1dHMgbGlzdGVuZXJcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKElOUFVUX1NUQVRFX0NPTlRFWFQpLnN1YnNjcmliZSgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hTdGF0ZSA9IHN0YXRlO1xuICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUFjdGl2ZUZpbHRlcnMoc3RhdGUpO1xuICAgICAgY29uc29sZS53YXJuKCdpbnB1dCcsIGxhc3RVcGRhdGVkLCBzdGF0ZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKFJFU1VMVFNfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnNldFNlY3Rpb25TdGF0ZSgncmVzdWx0cycsICdMT0FESU5HJyk7XG4gICAgfSk7XG5cbiAgICAvLyBob29rICh0ZXN0KVxuICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZXRCZWZvcmVIb29rKFJFU1VMVFNfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IHBhZ2UsIHNvcnQgfSA9IHRoaXMuc2VhcmNoU3RhdGU7XG4gICAgICByZXR1cm4gcmVzdWx0c01vY2socGFnZSB8fCAxLCBzb3J0IHx8ICdfc2NvcmVfREVTQycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldEJlZm9yZUhvb2soTElOS1NfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnLCAocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignbGlua3MnLCByZXNwb25zZSk7XG4gICAgICByZXR1cm4gbGlua3NNb2NrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKFJFU1VMVFNfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnKVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgLy8gdXBkYXRlIGxheW91dCBzdGF0ZVxuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0U2VjdGlvblN0YXRlKCdyZXN1bHRzJywgaXNFbXB0eShyZXNwb25zZS5yZXN1bHRzKSA/ICdFTVBUWScgOiAnT0snKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=