import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { isEmpty } from 'lodash';
import { RESULTS_REQUEST_STATE_CONTEXT, INPUT_STATE_CONTEXT, FACETS_REQUEST_STATE_CONTEXT, SECTION_STATE_CONTEXT } from '../../services/search.service';
import { LayoutState } from '../../services/layout-state.service';
var MrSearchLayoutEH = /** @class */ (function (_super) {
    __extends(MrSearchLayoutEH, _super);
    function MrSearchLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.searchState = {};
        return _this;
    }
    MrSearchLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-search-layout.init':
                    _this.searchService = payload.searchService;
                    _this.layoutState = payload.layoutState;
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
        });
        this.outerEvents$.subscribe(function (_a) {
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
                    var stateValue = _this.searchState[payload.id];
                    var newValue = null;
                    if (Array.isArray(stateValue)) {
                        newValue = stateValue.filter(function (value) { return value !== payload.value; });
                    }
                    _this.searchService.setState('input', payload.id, newValue);
                    break;
                }
                default:
                    break;
            }
        });
    };
    MrSearchLayoutEH.prototype.initStateListener = function () {
        var _this = this;
        // inputs listener
        this.searchService.getState$(INPUT_STATE_CONTEXT).subscribe(function (_a) {
            var state = _a.state;
            _this.searchState = state;
        });
        this.searchService.getState$(INPUT_STATE_CONTEXT, 'query').subscribe(function (val) {
            _this.emitOuter('inputquerychange', val);
            _this.searchService.setState(INPUT_STATE_CONTEXT, 'sort', val ? '_score' : 'sort_ASC');
        });
        this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success').subscribe(function (response) {
            _this.linksResponse = response;
            _this.dataSource.updateActiveFilters(_this.searchState, _this.linksResponse);
            // update sections
            if (response.inputs) {
                var inputs_1 = response.inputs;
                Object.keys(inputs_1).forEach(function (inputKey) {
                    var currentInput = inputs_1[inputKey];
                    _this.searchService.setState(SECTION_STATE_CONTEXT, "section-" + inputKey, Array.isArray(currentInput) && currentInput.length ? 'is-not-empty' : 'is-empty');
                });
            }
        });
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'loading').subscribe(function () {
            _this.layoutState.set('results', LayoutState.LOADING);
        });
        // default params hook
        this.searchService.setBeforeHook(RESULTS_REQUEST_STATE_CONTEXT, 'loading', function (params) {
            if (params === void 0) { params = {}; }
            // FIXME: prendere da configurazione
            var defaultParams = {
                page: 1,
                sort: 'sort_ASC',
                limit: 12
            };
            Object.keys(defaultParams).forEach(function (key) {
                params[key] = params[key] || defaultParams[key];
            });
            return params;
        });
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'success')
            .subscribe(function (response) {
            _this.dataSource.handleResponse(response);
            // update layout state
            _this.layoutState.set('results', isEmpty(response.results) ? LayoutState.EMPTY : LayoutState.SUCCESS);
        });
        this.searchService.getState$(RESULTS_REQUEST_STATE_CONTEXT, 'error')
            .subscribe(function (error) {
            console.warn(RESULTS_REQUEST_STATE_CONTEXT, error);
            _this.layoutState.set('results', LayoutState.ERROR);
        });
    };
    return MrSearchLayoutEH;
}(EventHandler));
export { MrSearchLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUVMLDZCQUE2QixFQUM3QixtQkFBbUIsRUFDbkIsNEJBQTRCLEVBQzVCLHFCQUFxQixFQUN0QixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBd0IsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFeEY7SUFBc0Msb0NBQVk7SUFBbEQ7UUFBQSxxRUFpSUM7UUE5SFMsZ0JBQVUsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU03QyxpQkFBVyxHQUVmLEVBQUUsQ0FBQzs7SUFzSFQsQ0FBQztJQWxIUSxpQ0FBTSxHQUFiO1FBQUEsaUJBcURDO1FBcERDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztvQkFDdkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLFlBQVk7b0JBQ1osS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLE1BQU07Z0JBRVIsS0FBSywwQkFBMEI7b0JBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixNQUFNO2dCQUVSLEtBQUssOEJBQThCO29CQUNqQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMzQixNQUFNO2dCQUVSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywyQkFBMkI7b0JBQzlCLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzRCxNQUFNO2dCQUVSLEtBQUssNEJBQTRCO29CQUMvQixLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDN0QsTUFBTTtnQkFFUixLQUFLLGdDQUFnQztvQkFDbkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVELE1BQU07Z0JBRVIsS0FBSyxzQkFBc0IsQ0FBQyxDQUFDO29CQUMzQixJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQzdCLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQXZCLENBQXVCLENBQUMsQ0FBQztxQkFDbEU7b0JBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzNELE1BQU07aUJBQ1A7Z0JBRUQ7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQUEsaUJBMERDO1FBekRDLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQVM7Z0JBQVAsZ0JBQUs7WUFDbEUsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ3ZFLEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFeEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDdkYsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7WUFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUUxRSxrQkFBa0I7WUFDbEIsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNYLElBQUEsMEJBQU0sQ0FBYztnQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO29CQUNuQyxJQUFNLFlBQVksR0FBRyxRQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RDLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixxQkFBcUIsRUFDckIsYUFBVyxRQUFVLEVBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQ2pGLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQy9FLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7UUFFSCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxFQUFFLFVBQUMsTUFBVztZQUFYLHVCQUFBLEVBQUEsV0FBVztZQUNyRixvQ0FBb0M7WUFDcEMsSUFBTSxhQUFhLEdBQUc7Z0JBQ3BCLElBQUksRUFBRSxDQUFDO2dCQUNQLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsRUFBRTthQUNWLENBQUM7WUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLENBQUM7YUFDbkUsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNsQixLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxzQkFBc0I7WUFDdEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLDZCQUE2QixFQUFFLE9BQU8sQ0FBQzthQUNqRSxTQUFTLENBQUMsVUFBQyxLQUFLO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWpJRCxDQUFzQyxZQUFZLEdBaUlqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTXJTZWFyY2hMYXlvdXREUyB9IGZyb20gJy4vc2VhcmNoLWxheW91dC5kcyc7XG5pbXBvcnQge1xuICBNclNlYXJjaFNlcnZpY2UsXG4gIFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULFxuICBJTlBVVF9TVEFURV9DT05URVhULFxuICBGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhULFxuICBTRUNUSU9OX1NUQVRFX0NPTlRFWFRcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UsIExheW91dFN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBkYXRhU291cmNlOiBNclNlYXJjaExheW91dERTO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBzZWFyY2hTdGF0ZToge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgbGlua3NSZXNwb25zZTogYW55O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gcGF5bG9hZC5zZWFyY2hTZXJ2aWNlO1xuICAgICAgICAgIHRoaXMubGF5b3V0U3RhdGUgPSBwYXlsb2FkLmxheW91dFN0YXRlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgLy8gbGlzdGVuZXJzXG4gICAgICAgICAgdGhpcy5pbml0U3RhdGVMaXN0ZW5lcigpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWxheW91dC5zZWFyY2hyZXNldCc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc2V0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbjctc21hcnQtcGFnaW5hdGlvbi5jbGljayc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsICdwYWdlJywgcGF5bG9hZC5wYWdlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsICdsaW1pdCcsIHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsICdzb3J0JywgcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLXRhZ3MuY2xpY2snOiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZSA9IHRoaXMuc2VhcmNoU3RhdGVbcGF5bG9hZC5pZF07XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZVZhbHVlKSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBzdGF0ZVZhbHVlLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSBwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsIHBheWxvYWQuaWQsIG5ld1ZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0U3RhdGVMaXN0ZW5lcigpIHtcbiAgICAvLyBpbnB1dHMgbGlzdGVuZXJcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKElOUFVUX1NUQVRFX0NPTlRFWFQpLnN1YnNjcmliZSgoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFN0YXRlID0gc3RhdGU7XG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhULCAncXVlcnknKS5zdWJzY3JpYmUoKHZhbCkgPT4ge1xuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2lucHV0cXVlcnljaGFuZ2UnLCB2YWwpO1xuXG4gICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0U3RhdGUoSU5QVVRfU1RBVEVfQ09OVEVYVCwgJ3NvcnQnLCB2YWwgPyAnX3Njb3JlJyA6ICdzb3J0X0FTQycpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmxpbmtzUmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVBY3RpdmVGaWx0ZXJzKHRoaXMuc2VhcmNoU3RhdGUsIHRoaXMubGlua3NSZXNwb25zZSk7XG5cbiAgICAgIC8vIHVwZGF0ZSBzZWN0aW9uc1xuICAgICAgaWYgKHJlc3BvbnNlLmlucHV0cykge1xuICAgICAgICBjb25zdCB7IGlucHV0cyB9ID0gcmVzcG9uc2U7XG4gICAgICAgIE9iamVjdC5rZXlzKGlucHV0cykuZm9yRWFjaCgoaW5wdXRLZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50SW5wdXQgPSBpbnB1dHNbaW5wdXRLZXldO1xuICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZXRTdGF0ZShcbiAgICAgICAgICAgIFNFQ1RJT05fU1RBVEVfQ09OVEVYVCxcbiAgICAgICAgICAgIGBzZWN0aW9uLSR7aW5wdXRLZXl9YCxcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoY3VycmVudElucHV0KSAmJiBjdXJyZW50SW5wdXQubGVuZ3RoID8gJ2lzLW5vdC1lbXB0eScgOiAnaXMtZW1wdHknXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgncmVzdWx0cycsIExheW91dFN0YXRlLkxPQURJTkcpO1xuICAgIH0pO1xuXG4gICAgLy8gZGVmYXVsdCBwYXJhbXMgaG9va1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5zZXRCZWZvcmVIb29rKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnbG9hZGluZycsIChwYXJhbXMgPSB7fSkgPT4ge1xuICAgICAgLy8gRklYTUU6IHByZW5kZXJlIGRhIGNvbmZpZ3VyYXppb25lXG4gICAgICBjb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBzb3J0OiAnc29ydF9BU0MnLFxuICAgICAgICBsaW1pdDogMTJcbiAgICAgIH07XG4gICAgICBPYmplY3Qua2V5cyhkZWZhdWx0UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcGFyYW1zW2tleV0gPSBwYXJhbXNba2V5XSB8fCBkZWZhdWx0UGFyYW1zW2tleV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKFJFU1VMVFNfUkVRVUVTVF9TVEFURV9DT05URVhULCAnc3VjY2VzcycpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAvLyB1cGRhdGUgbGF5b3V0IHN0YXRlXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdyZXN1bHRzJywgaXNFbXB0eShyZXNwb25zZS5yZXN1bHRzKSA/IExheW91dFN0YXRlLkVNUFRZIDogTGF5b3V0U3RhdGUuU1VDQ0VTUyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsICdlcnJvcicpXG4gICAgICAuc3Vic2NyaWJlKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oUkVTVUxUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsIGVycm9yKTtcbiAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5zZXQoJ3Jlc3VsdHMnLCBMYXlvdXRTdGF0ZS5FUlJPUik7XG4gICAgICB9KTtcbiAgfVxufVxuIl19