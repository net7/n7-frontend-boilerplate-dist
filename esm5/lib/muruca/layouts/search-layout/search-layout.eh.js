/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { isEmpty } from 'lodash';
import { RESULTS_STATE_CONTEXT, INPUT_STATE_CONTEXT } from '../../services/search.service';
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
        // default params hook
        this.searchService.setBeforeHook(RESULTS_STATE_CONTEXT, 'loading', (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFFTCxxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ3BCLE1BQU0sK0JBQStCLENBQUM7QUFFdkM7SUFBc0MsNENBQVk7SUFBbEQ7UUFBQSxxRUF1R0M7UUFwR1MsZ0JBQVUsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUk3QyxpQkFBVyxHQUVmLEVBQUUsQ0FBQzs7SUE4RlQsQ0FBQzs7OztJQTVGUSxpQ0FBTTs7O0lBQWI7UUFBQSxpQkFvREM7UUFuREMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLFlBQVk7b0JBQ1osS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLE1BQU07Z0JBRVIsS0FBSywwQkFBMEI7b0JBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixNQUFNO2dCQUVSLEtBQUssOEJBQThCO29CQUNqQyxLQUFJLENBQUMsYUFB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UCxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsR0FBRztnQkFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLE9BQU87Ozs7UUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLENBQUMsS0FBSyxFQUFOLENBQU0sRUFBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQzthQUMzRCxTQUFTOzs7O1FBQUMsVUFBQyxRQUFRO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLHNCQUFzQjtZQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUF2R0QsQ0FBc0MsWUFBWSxHQXVHakQ7Ozs7SUF0R0Msc0NBQW9DOzs7OztJQUVwQyxzQ0FBcUQ7Ozs7O0lBRXJELHlDQUF1Qzs7Ozs7SUFFdkMsdUNBRU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE1yU2VhcmNoTGF5b3V0RFMgfSBmcm9tICcuL3NlYXJjaC1sYXlvdXQuZHMnO1xuaW1wb3J0IHtcbiAgTXJTZWFyY2hTZXJ2aWNlLFxuICBSRVNVTFRTX1NUQVRFX0NPTlRFWFQsXG4gIElOUFVUX1NUQVRFX0NPTlRFWFRcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBkYXRhU291cmNlOiBNclNlYXJjaExheW91dERTO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBzZWFyY2hTdGF0ZToge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSA9IHt9O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gcGF5bG9hZC5zZWFyY2hTZXJ2aWNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgLy8gbGlzdGVuZXJzXG4gICAgICAgICAgdGhpcy5pbml0U3RhdGVMaXN0ZW5lcigpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5zZWFyY2hyZXNldCc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc2V0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbjctc21hcnQtcGFnaW5hdGlvbi5jbGljayc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsICdwYWdlJywgcGF5bG9hZC5wYWdlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsICdsaW1pdCcsIHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsICdzb3J0JywgcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLXRhZ3MuY2xpY2snOiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZSA9IHRoaXMuc2VhcmNoU3RhdGVbcGF5bG9hZC5pZF07XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZVZhbHVlKSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBzdGF0ZVZhbHVlLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSBwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsIHBheWxvYWQuaWQsIG5ld1ZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0U3RhdGVMaXN0ZW5lcigpIHtcbiAgICAvLyByZXF1ZXN0IGxpc3RlbmVyXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChSRVNVTFRTX1NUQVRFX0NPTlRFWFQpXG4gICAgICAuc3Vic2NyaWJlKCh7IGxhc3RVcGRhdGVkLCBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybigncmVxdWVzdCcsIGxhc3RVcGRhdGVkLCBzdGF0ZSk7XG4gICAgICB9KTtcbiAgICAvLyBpbnB1dHMgbGlzdGVuZXJcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKElOUFVUX1NUQVRFX0NPTlRFWFQpLnN1YnNjcmliZSgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hTdGF0ZSA9IHN0YXRlO1xuICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUFjdGl2ZUZpbHRlcnMoc3RhdGUpO1xuICAgICAgY29uc29sZS53YXJuKCdpbnB1dCcsIGxhc3RVcGRhdGVkLCBzdGF0ZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKFJFU1VMVFNfU1RBVEVfQ09OVEVYVCwgJ2xvYWRpbmcnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnNldFNlY3Rpb25TdGF0ZSgncmVzdWx0cycsICdMT0FESU5HJyk7XG4gICAgfSk7XG5cbiAgICAvLyBkZWZhdWx0IHBhcmFtcyBob29rXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldEJlZm9yZUhvb2soUkVTVUxUU19TVEFURV9DT05URVhULCAnbG9hZGluZycsIChwYXJhbXMgPSB7fSkgPT4ge1xuICAgICAgY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgc29ydDogJ19zY29yZV9ERVNDJyxcbiAgICAgICAgbGltaXQ6IDEwXG4gICAgICB9O1xuICAgICAgT2JqZWN0LmtleXMoZGVmYXVsdFBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHBhcmFtc1trZXldID0gcGFyYW1zW2tleV0gfHwgZGVmYXVsdFBhcmFtc1trZXldO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZXRCZWZvcmVIb29rKElOUFVUX1NUQVRFX0NPTlRFWFQsICdsaW1pdCcsICh2YWx1ZSkgPT4gK3ZhbHVlKTtcblxuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoUkVTVUxUU19TVEFURV9DT05URVhULCAnc3VjY2VzcycpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAvLyB1cGRhdGUgbGF5b3V0IHN0YXRlXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRTZWN0aW9uU3RhdGUoJ3Jlc3VsdHMnLCBpc0VtcHR5KHJlc3BvbnNlLnJlc3VsdHMpID8gJ0VNUFRZJyA6ICdPSycpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==