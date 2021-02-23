import { __assign, __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
var MrAdvancedResultsLayoutDS = /** @class */ (function (_super) {
    __extends(MrAdvancedResultsLayoutDS, _super);
    function MrAdvancedResultsLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrAdvancedResultsLayoutDS.prototype.onInit = function (payload) {
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.communication = payload.communication;
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
    MrAdvancedResultsLayoutDS.prototype.updateSearchTags = function (params) {
        if (!this.pageConfig.filters) {
            return;
        }
        var labels = this.pageConfig.filters.labels;
        var tags = [];
        Object.keys(labels)
            .filter(function (key) { return !!params[key]; })
            .forEach(function (key) {
            tags[key] = params[key];
        });
        this.one('mr-advanced-search-tags').updateOptions({ labels: labels });
        this.one('mr-advanced-search-tags').update(tags);
    };
    MrAdvancedResultsLayoutDS.prototype.request$ = function (params, onError) {
        var searchId = this.pageConfig.searchId;
        Object.keys(params)
            .filter(function (key) { return ['page', 'limit', 'sort'].includes(key); })
            .forEach(function (key) {
            params.results = params.results || {};
            params.results[key] = params[key];
            delete params[key];
        });
        return this.communication.request$('advancedSearch', {
            method: 'POST',
            params: __assign(__assign({}, params), { searchId: searchId, results: {
                    sort: 'sort_ASC',
                    offset: 0,
                    limit: 12
                } }),
            onError: onError
        });
    };
    MrAdvancedResultsLayoutDS.prototype.handleResponse = function (response) {
        this.some([
            'mr-search-results-title',
            'mr-search-results',
        ]).update(response);
        // pagination
        this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
        this.one('n7-smart-pagination').update(this.getPaginationParams(response));
    };
    MrAdvancedResultsLayoutDS.prototype.updateHeadTitle = function () {
        var appName = this.configuration.get('name');
        var pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    };
    MrAdvancedResultsLayoutDS.prototype.addTranslations = function (config) {
        var _a;
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
        // filters
        var filters = this.pageConfig.filters;
        if (filters) {
            filters.title = _t(filters.title);
            Object.keys(filters.labels).forEach(function (key) {
                filters.labels[key] = _t(filters.labels[key]);
            });
        }
    };
    MrAdvancedResultsLayoutDS.prototype.getPaginationParams = function (response) {
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
    return MrAdvancedResultsLayoutDS;
}(LayoutDataSource));
export { MrAdvancedResultsLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU16RDtJQUErQyw2Q0FBZ0I7SUFBL0Q7O0lBbUlBLENBQUM7SUF4SEMsMENBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsU0FBUztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFdEQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELG9EQUFnQixH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QUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVTLHVEQUFtQixHQUE3QixVQUE4QixRQUFRO1FBQzVCLElBQUEsaUNBQXVCLEVBQUUsd0JBQU0sRUFBRSxzQkFBSyxDQUFjO1FBQ3BELElBQUEsNkNBQTRCLENBQXFCO1FBRXpELE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLFdBQVcsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLO1lBQ3JDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLO1lBQ2pDLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQzdFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO2dCQUM5QixNQUFNLEVBQUUsS0FBSzthQUNkO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFuSUQsQ0FBK0MsZ0JBQWdCLEdBbUk5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcm90ZWN0ZWQgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcblxuICBwcm90ZWN0ZWQgY29uZmlnSWQ6IHN0cmluZztcblxuICBwdWJsaWMgcGFnZUNvbmZpZztcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuXG4gICAgLy8gY29uZmlnXG4gICAgdGhpcy5hbGwoKS51cGRhdGVPcHRpb25zKHsgY29uZmlnOiB0aGlzLnBhZ2VDb25maWcgfSk7XG5cbiAgICAvLyBtYW51YWwgdXBkYXRlc1xuICAgIHRoaXMub25lKCdtci1zZWFyY2gtcGFnZS10aXRsZScpLnVwZGF0ZSh7fSk7XG5cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKCk7XG5cbiAgICAvLyB1cGRhdGUgdHJhbnNsYXRpb25zXG4gICAgdGhpcy5hZGRUcmFuc2xhdGlvbnModGhpcy5wYWdlQ29uZmlnKTtcbiAgfVxuXG4gIHVwZGF0ZVNlYXJjaFRhZ3MocGFyYW1zKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2VDb25maWcuZmlsdGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbGFiZWxzIH0gPSB0aGlzLnBhZ2VDb25maWcuZmlsdGVycztcbiAgICBjb25zdCB0YWdzID0gW107XG4gICAgT2JqZWN0LmtleXMobGFiZWxzKVxuICAgICAgLmZpbHRlcigoa2V5KSA9PiAhIXBhcmFtc1trZXldKVxuICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB0YWdzW2tleV0gPSBwYXJhbXNba2V5XTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5vbmUoJ21yLWFkdmFuY2VkLXNlYXJjaC10YWdzJykudXBkYXRlT3B0aW9ucyh7IGxhYmVscyB9KTtcbiAgICB0aGlzLm9uZSgnbXItYWR2YW5jZWQtc2VhcmNoLXRhZ3MnKS51cGRhdGUodGFncyk7XG4gIH1cblxuICByZXF1ZXN0JChwYXJhbXMsIG9uRXJyb3IpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHsgc2VhcmNoSWQgfSA9IHRoaXMucGFnZUNvbmZpZztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAuZmlsdGVyKChrZXkpID0+IFsncGFnZScsICdsaW1pdCcsICdzb3J0J10uaW5jbHVkZXMoa2V5KSlcbiAgICAgIC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcGFyYW1zLnJlc3VsdHMgPSBwYXJhbXMucmVzdWx0cyB8fCB7fTtcbiAgICAgICAgcGFyYW1zLnJlc3VsdHNba2V5XSA9IHBhcmFtc1trZXldO1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdhZHZhbmNlZFNlYXJjaCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgc2VhcmNoSWQsXG4gICAgICAgIHJlc3VsdHM6IHtcbiAgICAgICAgICBzb3J0OiAnc29ydF9BU0MnLFxuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBsaW1pdDogMTJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRXJyb3JcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgdGhpcy5zb21lKFtcbiAgICAgICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZScsXG4gICAgICAnbXItc2VhcmNoLXJlc3VsdHMnLFxuICAgIF0pLnVwZGF0ZShyZXNwb25zZSk7XG5cbiAgICAvLyBwYWdpbmF0aW9uXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHsgbW9kZTogJ3BheWxvYWQnIH0pO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHRoaXMuZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXNwb25zZSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUhlYWRUaXRsZSgpIHtcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IHRoaXMucGFnZUNvbmZpZy50aXRsZTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpXS5qb2luKCcgPiAnKSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFRyYW5zbGF0aW9ucyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnPy5zb3J0Py5sYWJlbCkge1xuICAgICAgY29uZmlnLnNvcnQubGFiZWwgPSBfdChjb25maWcuc29ydC5sYWJlbCk7XG4gICAgICBjb25maWcuc29ydC5vcHRpb25zID0gY29uZmlnLnNvcnQub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHtcbiAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICBsYWJlbDogX3Qob3B0aW9uLmxhYmVsKVxuICAgICAgfSkpO1xuICAgIH1cbiAgICBbJ3RleHQnLCAnYnV0dG9uJ10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoY29uZmlnLmZhbGxiYWNrKSB7XG4gICAgICAgIGNvbmZpZy5mYWxsYmFja1trZXldID0gX3QoY29uZmlnLmZhbGxiYWNrW2tleV0pO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5rbykge1xuICAgICAgICBjb25maWcua29ba2V5XSA9IF90KGNvbmZpZy5rb1trZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZpbHRlcnNcbiAgICBjb25zdCB7IGZpbHRlcnMgfSA9IHRoaXMucGFnZUNvbmZpZztcbiAgICBpZiAoZmlsdGVycykge1xuICAgICAgZmlsdGVycy50aXRsZSA9IF90KGZpbHRlcnMudGl0bGUpO1xuICAgICAgT2JqZWN0LmtleXMoZmlsdGVycy5sYWJlbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBmaWx0ZXJzLmxhYmVsc1trZXldID0gX3QoZmlsdGVycy5sYWJlbHNba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgdG90YWxfY291bnQ6IHRvdGFsQ291bnQsIG9mZnNldCwgbGltaXQgfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogcGFnaW5hdGlvbkNvbmZpZyB9ID0gdGhpcy5wYWdlQ29uZmlnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbENvdW50IC8gbGltaXQpLFxuICAgICAgY3VycmVudFBhZ2U6IChvZmZzZXQgKyBsaW1pdCkgLyBsaW1pdCxcbiAgICAgIHBhZ2VMaW1pdDogcGFnaW5hdGlvbkNvbmZpZy5saW1pdCxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIGxhYmVsOiBwYWdpbmF0aW9uQ29uZmlnLnNlbGVjdExhYmVsID8gX3QocGFnaW5hdGlvbkNvbmZpZy5zZWxlY3RMYWJlbCkgOiBudWxsLFxuICAgICAgICBsaXN0OiBwYWdpbmF0aW9uQ29uZmlnLm9wdGlvbnMsXG4gICAgICAgIGFjdGl2ZTogbGltaXQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==