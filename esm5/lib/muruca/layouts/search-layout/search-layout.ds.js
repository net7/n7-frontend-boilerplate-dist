import { __assign, __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
var MrSearchLayoutDS = /** @class */ (function (_super) {
    __extends(MrSearchLayoutDS, _super);
    function MrSearchLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalResultsText = null;
        return _this;
    }
    MrSearchLayoutDS.prototype.onInit = function (payload) {
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
        this.searchService = payload.searchService;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // config
        this.all().updateOptions({ config: this.pageConfig });
        // manual updates
        this.one('mr-search-page-title').update({});
        // update head title
        this.updateHeadTitle();
        // update translations
        this.addTranslations(this.pageConfig);
    };
    MrSearchLayoutDS.prototype.handleResponse = function (response) {
        this.some([
            'mr-search-results-title',
            'mr-search-results',
        ]).update(response);
        // pagination
        this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
        this.one('n7-smart-pagination').update(this.getPaginationParams(response));
    };
    MrSearchLayoutDS.prototype.updateActiveFilters = function (state, linksResponse) {
        // active "tags" filters
        this.one('mr-search-tags').update({
            state: state,
            linksResponse: linksResponse,
            facetsConfig: this.searchService.getConfig().facets
        });
    };
    MrSearchLayoutDS.prototype.getPaginationParams = function (response) {
        var totalCount = response.total_count, offset = response.offset, limit = response.limit;
        var paginationConfig = this.pageConfig.pagination;
        return {
            totalPages: Math.ceil(totalCount / limit),
            currentPage: (offset + limit) / limit,
            pageLimit: paginationConfig.limit,
            sizes: {
                label: paginationConfig.selectLabel ? _t(paginationConfig.selectLabel) : null,
                list: paginationConfig.options,
                active: limit,
            },
        };
    };
    MrSearchLayoutDS.prototype.updateHeadTitle = function () {
        var appName = this.configuration.get('name');
        var pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    };
    MrSearchLayoutDS.prototype.addTranslations = function (config) {
        var _a;
        if (config.facetsTitle) {
            config.facetsTitle = _t(config.facetsTitle);
        }
        if (config.filtersTitle) {
            config.filtersTitle = _t(config.filtersTitle);
        }
        if ((_a = config === null || config === void 0 ? void 0 : config.sort) === null || _a === void 0 ? void 0 : _a.label) {
            config.sort.label = _t(config.sort.label);
            config.sort.options = config.sort.options.map(function (option) { return (__assign(__assign({}, option), { label: _t(option.label) })); });
        }
        ['text', 'button'].forEach(function (key) {
            if (config.fallback) {
                config.fallback[key] = _t(config.fallback[key]);
            }
            if (config.ko) {
                config.ko[key] = _t(config.ko[key]);
            }
        });
    };
    return MrSearchLayoutDS;
}(LayoutDataSource));
export { MrSearchLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUt6RDtJQUFzQyxvQ0FBZ0I7SUFBdEQ7UUFBQSxxRUFvR0M7UUF2RlEsc0JBQWdCLEdBQWtCLElBQUksQ0FBQzs7SUF1RmhELENBQUM7SUFyRkMsaUNBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsU0FBUztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFdEQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxRQUFRO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUix5QkFBeUI7WUFDekIsbUJBQW1CO1NBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEIsYUFBYTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCw4Q0FBbUIsR0FBbkIsVUFBb0IsS0FBSyxFQUFFLGFBQWE7UUFDdEMsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEMsS0FBSyxPQUFBO1lBQ0wsYUFBYSxlQUFBO1lBQ2IsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTTtTQUNwRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sOENBQW1CLEdBQTNCLFVBQTRCLFFBQVE7UUFDMUIsSUFBQSxpQ0FBdUIsRUFBRSx3QkFBTSxFQUFFLHNCQUFLLENBQWM7UUFDcEQsSUFBQSw2Q0FBNEIsQ0FBcUI7UUFFekQsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDekMsV0FBVyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUs7WUFDckMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUs7WUFDakMsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDN0UsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE9BQU87Z0JBQzlCLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVPLDBDQUFlLEdBQXZCO1FBQ0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTywwQ0FBZSxHQUF2QixVQUF3QixNQUFNOztRQUM1QixJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDdEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQztRQUNELFVBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLElBQUksMENBQUUsS0FBSyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLHVCQUNyRCxNQUFNLEtBQ1QsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQ3ZCLEVBSHdELENBR3hELENBQUMsQ0FBQztTQUNMO1FBQ0QsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUM3QixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ25CLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNqRDtZQUNELElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDYixNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFwR0QsQ0FBc0MsZ0JBQWdCLEdBb0dyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yU2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcblxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgcHVibGljIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcblxuICBwdWJsaWMgZmFjZXRzQ29uZmlnO1xuXG4gIHB1YmxpYyBwYWdlQ29uZmlnO1xuXG4gIHB1YmxpYyB0b3RhbFJlc3VsdHNUZXh0OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xuICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IHBheWxvYWQuc2VhcmNoU2VydmljZTtcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuXG4gICAgLy8gY29uZmlnXG4gICAgdGhpcy5hbGwoKS51cGRhdGVPcHRpb25zKHsgY29uZmlnOiB0aGlzLnBhZ2VDb25maWcgfSk7XG5cbiAgICAvLyBtYW51YWwgdXBkYXRlc1xuICAgIHRoaXMub25lKCdtci1zZWFyY2gtcGFnZS10aXRsZScpLnVwZGF0ZSh7fSk7XG5cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKCk7XG5cbiAgICAvLyB1cGRhdGUgdHJhbnNsYXRpb25zXG4gICAgdGhpcy5hZGRUcmFuc2xhdGlvbnModGhpcy5wYWdlQ29uZmlnKTtcbiAgfVxuXG4gIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgdGhpcy5zb21lKFtcbiAgICAgICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZScsXG4gICAgICAnbXItc2VhcmNoLXJlc3VsdHMnLFxuICAgIF0pLnVwZGF0ZShyZXNwb25zZSk7XG5cbiAgICAvLyBwYWdpbmF0aW9uXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHsgbW9kZTogJ3BheWxvYWQnIH0pO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHRoaXMuZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXNwb25zZSkpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlRmlsdGVycyhzdGF0ZSwgbGlua3NSZXNwb25zZSkge1xuICAgIC8vIGFjdGl2ZSBcInRhZ3NcIiBmaWx0ZXJzXG4gICAgdGhpcy5vbmUoJ21yLXNlYXJjaC10YWdzJykudXBkYXRlKHtcbiAgICAgIHN0YXRlLFxuICAgICAgbGlua3NSZXNwb25zZSxcbiAgICAgIGZhY2V0c0NvbmZpZzogdGhpcy5zZWFyY2hTZXJ2aWNlLmdldENvbmZpZygpLmZhY2V0c1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdpbmF0aW9uUGFyYW1zKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyB0b3RhbF9jb3VudDogdG90YWxDb3VudCwgb2Zmc2V0LCBsaW1pdCB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgeyBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uQ29uZmlnIH0gPSB0aGlzLnBhZ2VDb25maWc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRvdGFsQ291bnQgLyBsaW1pdCksXG4gICAgICBjdXJyZW50UGFnZTogKG9mZnNldCArIGxpbWl0KSAvIGxpbWl0LFxuICAgICAgcGFnZUxpbWl0OiBwYWdpbmF0aW9uQ29uZmlnLmxpbWl0LFxuICAgICAgc2l6ZXM6IHtcbiAgICAgICAgbGFiZWw6IHBhZ2luYXRpb25Db25maWcuc2VsZWN0TGFiZWwgPyBfdChwYWdpbmF0aW9uQ29uZmlnLnNlbGVjdExhYmVsKSA6IG51bGwsXG4gICAgICAgIGxpc3Q6IHBhZ2luYXRpb25Db25maWcub3B0aW9ucyxcbiAgICAgICAgYWN0aXZlOiBsaW1pdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSGVhZFRpdGxlKCkge1xuICAgIGNvbnN0IGFwcE5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCduYW1lJyk7XG4gICAgY29uc3QgcGFnZVRpdGxlID0gdGhpcy5wYWdlQ29uZmlnLnRpdGxlO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgW2FwcE5hbWUsIF90KHBhZ2VUaXRsZSldLmpvaW4oJyA+ICcpKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkVHJhbnNsYXRpb25zKGNvbmZpZykge1xuICAgIGlmIChjb25maWcuZmFjZXRzVGl0bGUpIHtcbiAgICAgIGNvbmZpZy5mYWNldHNUaXRsZSA9IF90KGNvbmZpZy5mYWNldHNUaXRsZSk7XG4gICAgfVxuICAgIGlmIChjb25maWcuZmlsdGVyc1RpdGxlKSB7XG4gICAgICBjb25maWcuZmlsdGVyc1RpdGxlID0gX3QoY29uZmlnLmZpbHRlcnNUaXRsZSk7XG4gICAgfVxuICAgIGlmIChjb25maWc/LnNvcnQ/LmxhYmVsKSB7XG4gICAgICBjb25maWcuc29ydC5sYWJlbCA9IF90KGNvbmZpZy5zb3J0LmxhYmVsKTtcbiAgICAgIGNvbmZpZy5zb3J0Lm9wdGlvbnMgPSBjb25maWcuc29ydC5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoe1xuICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgIGxhYmVsOiBfdChvcHRpb24ubGFiZWwpXG4gICAgICB9KSk7XG4gICAgfVxuICAgIFsndGV4dCcsICdidXR0b24nXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChjb25maWcuZmFsbGJhY2spIHtcbiAgICAgICAgY29uZmlnLmZhbGxiYWNrW2tleV0gPSBfdChjb25maWcuZmFsbGJhY2tba2V5XSk7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmtvKSB7XG4gICAgICAgIGNvbmZpZy5rb1trZXldID0gX3QoY29uZmlnLmtvW2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=