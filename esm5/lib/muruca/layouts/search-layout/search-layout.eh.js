/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { isEmpty } from 'lodash';
import { RESULTS_REQUEST_STATE_CONTEXT, INPUT_STATE_CONTEXT, FACETS_REQUEST_STATE_CONTEXT } from '../../services/search.service';
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
        // inputs listener
        this.searchService.getState$(INPUT_STATE_CONTEXT).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var state = _a.state;
            _this.searchState = state;
        }));
        this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.linksResponse = response;
            _this.dataSource.updateActiveFilters(_this.searchState, _this.linksResponse);
        }));
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').subscribe((/**
         * @return {?}
         */
        function () {
            _this.dataSource.setSectionState('results', 'LOADING');
        }));
        // default params hook
        this.searchService.setBeforeHook(RESULTS_REQUEST_STATE_CONTEXT, 'loading', (/**
         * @param {?=} params
         * @return {?}
         */
        function (params) {
            if (params === void 0) { params = {}; }
            /** @type {?} */
            var defaultParams = {
                page: 1,
                sort: '_score_DESC',
                limit: 10
            };
            Object.keys(defaultParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                params[key] = params[key] || defaultParams[key];
            }));
            return params;
        }));
        this.searchService.setBeforeHook(INPUT_STATE_CONTEXT, 'limit', (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return +value; }));
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'success')
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
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutEH.prototype.linksResponse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFFTCw2QkFBNkIsRUFDN0IsbUJBQW1CLEVBQ25CLDRCQUE0QixFQUM3QixNQUFNLCtCQUErQixDQUFDO0FBRXZDO0lBQXNDLDRDQUFZO0lBQWxEO1FBQUEscUVBc0dDO1FBbkdTLGdCQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7UUFJN0MsaUJBQVcsR0FFZixFQUFFLENBQUM7O0lBNkZULENBQUM7Ozs7SUF6RlEsaUNBQU07OztJQUFiO1FBQUEsaUJBb0RDO1FBbkRDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxZQUFZO29CQUNaLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QixNQUFNO2dCQUVSLEtBQUssMEJBQTBCO29CQUM3QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0IsTUFBTTtnQkFFUixLQUFLLDhCQUE4QjtvQkFDakMs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QUFPOzs7O1lBQUMsVUFBQyxHQUFHO2dCQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsRCxDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsT0FBTzs7OztRQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxLQUFLLEVBQU4sQ0FBTSxFQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxDQUFDO2FBQ25FLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQVE7WUFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsc0JBQXNCO1lBQ3RCLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pGLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXRHRCxDQUFzQyxZQUFZLEdBc0dqRDs7OztJQXJHQyxzQ0FBb0M7Ozs7O0lBRXBDLHNDQUFxRDs7Ozs7SUFFckQseUNBQXVDOzs7OztJQUV2Qyx1Q0FFTzs7Ozs7SUFFUCx5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE1yU2VhcmNoTGF5b3V0RFMgfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuZHMnO1xuaW1wb3J0IHtcbiAgTXJTZWFyY2hTZXJ2aWNlLFxuICBSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCxcbiAgSU5QVVRfU1RBVEVfQ09OVEVYVCxcbiAgRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVFxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGRhdGFTb3VyY2U6IE1yU2VhcmNoTGF5b3V0RFM7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcblxuICBwcml2YXRlIHNlYXJjaFN0YXRlOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBsaW5rc1Jlc3BvbnNlOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICAvLyBsaXN0ZW5lcnNcbiAgICAgICAgICB0aGlzLmluaXRTdGF0ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtbGF5b3V0LnNlYXJjaHJlc2V0JzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UucmVzZXQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0U3RhdGUoJ2lucHV0JywgJ3BhZ2UnLCBwYXlsb2FkLnBhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ243LXNtYXJ0LXBhZ2luYXRpb24uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0U3RhdGUoJ2lucHV0JywgJ2xpbWl0JywgcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUuY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0U3RhdGUoJ2lucHV0JywgJ3NvcnQnLCBwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtdGFncy5jbGljayc6IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gdGhpcy5zZWFyY2hTdGF0ZVtwYXlsb2FkLmlkXTtcbiAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBudWxsO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlVmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHN0YXRlVmFsdWUuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0U3RhdGUoJ2lucHV0JywgcGF5bG9hZC5pZCwgbmV3VmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTdGF0ZUxpc3RlbmVyKCkge1xuICAgIC8vIGlucHV0cyBsaXN0ZW5lclxuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVCkuc3Vic2NyaWJlKCh7IHN0YXRlIH0pID0+IHtcbiAgICAgIHRoaXMuc2VhcmNoU3RhdGUgPSBzdGF0ZTtcbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5saW5rc1Jlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQWN0aXZlRmlsdGVycyh0aGlzLnNlYXJjaFN0YXRlLCB0aGlzLmxpbmtzUmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnNldFNlY3Rpb25TdGF0ZSgncmVzdWx0cycsICdMT0FESU5HJyk7XG4gICAgfSk7XG5cbiAgICAvLyBkZWZhdWx0IHBhcmFtcyBob29rXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldEJlZm9yZUhvb2soUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdsb2FkaW5nJywgKHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgICBjb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBzb3J0OiAnX3Njb3JlX0RFU0MnLFxuICAgICAgICBsaW1pdDogMTBcbiAgICAgIH07XG4gICAgICBPYmplY3Qua2V5cyhkZWZhdWx0UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcGFyYW1zW2tleV0gPSBwYXJhbXNba2V5XSB8fCBkZWZhdWx0UGFyYW1zW2tleV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldEJlZm9yZUhvb2soSU5QVVRfU1RBVEVfQ09OVEVYVCwgJ2xpbWl0JywgKHZhbHVlKSA9PiArdmFsdWUpO1xuXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChSRVNVTFRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnKVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgLy8gdXBkYXRlIGxheW91dCBzdGF0ZVxuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0U2VjdGlvblN0YXRlKCdyZXN1bHRzJywgaXNFbXB0eShyZXNwb25zZS5yZXN1bHRzKSA/ICdFTVBUWScgOiAnT0snKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=