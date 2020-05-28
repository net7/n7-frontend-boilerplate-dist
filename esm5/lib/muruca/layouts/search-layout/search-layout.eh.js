/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { isEmpty } from 'lodash';
import { RESULTS_STATE_CONTEXT, INPUT_STATE_CONTEXT, LINKS_STATE_CONTEXT } from '../../services/search.service';
import resultsMock from './search-results.mock';
import linksMock from './search-links.mock';
var MrSearchLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchLayoutEH, _super);
    function MrSearchLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.searchState = {};
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
                    _this.searchService = payload.searchService;
                    _this.dataSource.onInit(payload);
                    // listeners
                    _this.initStateListener();
                    break;
                case 'mr-search-layout.destroy':
                    _this.destroyed$.next(true);
                    break;
                case 'mr-search-layout.searchreset':
                    _this.searchService.reset();
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
                    _this.searchService.setState('input', 'page', payload.page);
                    break;
                case 'n7-smart-pagination.change':
                    _this.searchService.setState('input', 'limit', payload.value);
                    break;
                case 'mr-search-results-title.change':
                    _this.searchService.setState('input', 'sort', payload.value);
                    break;
                case 'mr-search-tags.click': {
                    /** @type {?} */
                    var stateValue = _this.searchState[payload.id];
                    /** @type {?} */
                    var newValue = null;
                    if (Array.isArray(stateValue)) {
                        newValue = stateValue.filter((/**
                         * @param {?} value
                         * @return {?}
                         */
                        function (value) { return value !== payload.value; }));
                    }
                    _this.searchService.setState('input', payload.id, newValue);
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
    MrSearchLayoutEH.prototype.initStateListener = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // request listener
        this.searchService.getState$(RESULTS_STATE_CONTEXT)
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var lastUpdated = _a.lastUpdated, state = _a.state;
            console.warn('request', lastUpdated, state);
        }));
        // inputs listener
        this.searchService.getState$(INPUT_STATE_CONTEXT).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var lastUpdated = _a.lastUpdated, state = _a.state;
            _this.searchState = state;
            _this.dataSource.updateActiveFilters(state);
            console.warn('input', lastUpdated, state);
        }));
        this.searchService.getState$(RESULTS_STATE_CONTEXT, 'loading').subscribe((/**
         * @return {?}
         */
        function () {
            _this.dataSource.setSectionState('results', 'LOADING');
        }));
        // hook (test)
        this.searchService.setBeforeHook(RESULTS_STATE_CONTEXT, 'success', (/**
         * @return {?}
         */
        function () {
            var _a = _this.searchState, page = _a.page, sort = _a.sort;
            return resultsMock(page || 1, sort || '_score_DESC');
        }));
        this.searchService.setBeforeHook(LINKS_STATE_CONTEXT, 'success', (/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            console.warn('links', response);
            return linksMock();
        }));
        this.searchService.getState$(RESULTS_STATE_CONTEXT, 'success')
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.dataSource.handleResponse(response);
            // update layout state
            _this.dataSource.setSectionState('results', isEmpty(response.results) ? 'EMPTY' : 'OK');
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
    MrSearchLayoutEH.prototype.searchService;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.searchState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFFTCxxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNwQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sV0FBVyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sU0FBUyxNQUFNLHFCQUFxQixDQUFDO0FBRTVDO0lBQXNDLDRDQUFZO0lBQWxEO1FBQUEscUVBb0dDO1FBakdTLGdCQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7UUFJN0MsaUJBQVcsR0FFZixFQUFFLENBQUM7O0lBMkZULENBQUM7Ozs7SUF6RlEsaUNBQU07OztJQUFiO1FBQUEsaUJBb0RDO1FBbkRDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxZQUFZO29CQUNaLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QixNQUFNO2dCQUVSLEtBQUssMEJBQTBCO29CQUM3QixLQUFJLENBQUMsVUFBVSxD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WUFDM0QsSUFBQSxzQkFBaUMsRUFBL0IsY0FBSSxFQUFFLGNBQXlCO1lBQ3ZDLE9BQU8sV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsU0FBUzs7OztRQUFFLFVBQUMsUUFBUTtZQUN4RSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNoQyxPQUFPLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDO2FBQzNELFNBQVM7Ozs7UUFBQyxVQUFDLFFBQVE7WUFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsc0JBQXNCO1lBQ3RCLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pGLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXBHRCxDQUFzQyxZQUFZLEdBb0dqRDs7OztJQW5HQyxzQ0FBb0M7Ozs7O0lBRXBDLHNDQUFxRDs7Ozs7SUFFckQseUNBQXVDOzs7OztJQUV2Qyx1Q0FFTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXREUyB9IGZyb20gJy4vc2VhcmNoLWxheW91dC5kcyc7XG5pbXBvcnQge1xuICBNclNlYXJjaFNlcnZpY2UsXG4gIFJFU1VMVFNfU1RBVEVfQ09OVEVYVCxcbiAgSU5QVVRfU1RBVEVfQ09OVEVYVCxcbiAgTElOS1NfU1RBVEVfQ09OVEVYVFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgcmVzdWx0c01vY2sgZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy5tb2NrJztcbmltcG9ydCBsaW5rc01vY2sgZnJvbSAnLi9zZWFyY2gtbGlua3MubW9jayc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGRhdGFTb3VyY2U6IE1yU2VhcmNoTGF5b3V0RFM7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcblxuICBwcml2YXRlIHNlYXJjaFN0YXRlOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge307XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICAvLyBsaXN0ZW5lcnNcbiAgICAgICAgICB0aGlzLmluaXRTdGF0ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtbGF5b3V0LnNlYXJjaHJlc2V0JzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UucmVzZXQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0U3RhdGUoJ2lucHV0JywgJ3BhZ2UnLCBwYXlsb2FkLnBhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0U3RhdGUoJ2lucHV0JywgJ2xpbWl0JywgcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUuY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0U3RhdGUoJ2lucHV0JywgJ3NvcnQnLCBwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtdGFncy5jbGljayc6IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gdGhpcy5zZWFyY2hTdGF0ZVtwYXlsb2FkLmlkXTtcbiAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBudWxsO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlVmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHN0YXRlVmFsdWUuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0U3RhdGUoJ2lucHV0JywgcGF5bG9hZC5pZCwgbmV3VmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTdGF0ZUxpc3RlbmVyKCkge1xuICAgIC8vIHJlcXVlc3QgbGlzdGVuZXJcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKFJFU1VMVFNfU1RBVEVfQ09OVEVYVClcbiAgICAgIC5zdWJzY3JpYmUoKHsgbGFzdFVwZGF0ZWQsIHN0YXRlIH0pID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdyZXF1ZXN0JywgbGFzdFVwZGF0ZWQsIHN0YXRlKTtcbiAgICAgIH0pO1xuICAgIC8vIGlucHV0cyBsaXN0ZW5lclxuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVCkuc3Vic2NyaWJlKCh7IGxhc3RVcGRhdGVkLCBzdGF0ZSB9KSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFN0YXRlID0gc3RhdGU7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQWN0aXZlRmlsdGVycyhzdGF0ZSk7XG4gICAgICBjb25zb2xlLndhcm4oJ2lucHV0JywgbGFzdFVwZGF0ZWQsIHN0YXRlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoUkVTVUxUU19TVEFURV9DT05URVhULCAnbG9hZGluZycpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0U2VjdGlvblN0YXRlKCdyZXN1bHRzJywgJ0xPQURJTkcnKTtcbiAgICB9KTtcblxuICAgIC8vIGhvb2sgKHRlc3QpXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldEJlZm9yZUhvb2soUkVTVUxUU19TVEFURV9DT05URVhULCAnc3VjY2VzcycsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcGFnZSwgc29ydCB9ID0gdGhpcy5zZWFyY2hTdGF0ZTtcbiAgICAgIHJldHVybiByZXN1bHRzTW9jayhwYWdlIHx8IDEsIHNvcnQgfHwgJ19zY29yZV9ERVNDJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0QmVmb3JlSG9vayhMSU5LU19TVEFURV9DT05URVhULCAnc3VjY2VzcycsIChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdsaW5rcycsIHJlc3BvbnNlKTtcbiAgICAgIHJldHVybiBsaW5rc01vY2soKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoUkVTVUxUU19TVEFURV9DT05URVhULCAnc3VjY2VzcycpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAvLyB1cGRhdGUgbGF5b3V0IHN0YXRlXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRTZWN0aW9uU3RhdGUoJ3Jlc3VsdHMnLCBpc0VtcHR5KHJlc3BvbnNlLnJlc3VsdHMpID8gJ0VNUFRZJyA6ICdPSycpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==