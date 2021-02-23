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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU16RDtJQUErQyw2Q0FBZ0I7SUFBL0Q7O0lBbUlBLENBQUM7SUF4SEMsMENBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsU0FBUztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFdEQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELG9EQUFnQixH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QUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVTLHVEQUFtQixHQUE3QixVQUE4QixRQUFRO1FBQzVCLElBQUEsaUNBQXVCLEVBQUUsd0JBQU0sRUFBRSxzQkFBSyxDQUFjO1FBQ3BELElBQUEsNkNBQTRCLENBQXFCO1FBRXpELE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLFdBQVcsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLO1lBQ3JDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLO1lBQ2pDLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQzdFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO2dCQUM5QixNQUFNLEVBQUUsS0FBSzthQUNkO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFuSUQsQ0FBK0MsZ0JBQWdCLEdBbUk5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcm90ZWN0ZWQgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByb3RlY3RlZCBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2U7XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgcGFnZUNvbmZpZztcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XHJcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCk7XHJcblxyXG4gICAgLy8gY29uZmlnXHJcbiAgICB0aGlzLmFsbCgpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMucGFnZUNvbmZpZyB9KTtcclxuXHJcbiAgICAvLyBtYW51YWwgdXBkYXRlc1xyXG4gICAgdGhpcy5vbmUoJ21yLXNlYXJjaC1wYWdlLXRpdGxlJykudXBkYXRlKHt9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxyXG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUoKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdHJhbnNsYXRpb25zXHJcbiAgICB0aGlzLmFkZFRyYW5zbGF0aW9ucyh0aGlzLnBhZ2VDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VhcmNoVGFncyhwYXJhbXMpIHtcclxuICAgIGlmICghdGhpcy5wYWdlQ29uZmlnLmZpbHRlcnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgbGFiZWxzIH0gPSB0aGlzLnBhZ2VDb25maWcuZmlsdGVycztcclxuICAgIGNvbnN0IHRhZ3MgPSBbXTtcclxuICAgIE9iamVjdC5rZXlzKGxhYmVscylcclxuICAgICAgLmZpbHRlcigoa2V5KSA9PiAhIXBhcmFtc1trZXldKVxyXG4gICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgdGFnc1trZXldID0gcGFyYW1zW2tleV07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMub25lKCdtci1hZHZhbmNlZC1zZWFyY2gtdGFncycpLnVwZGF0ZU9wdGlvbnMoeyBsYWJlbHMgfSk7XHJcbiAgICB0aGlzLm9uZSgnbXItYWR2YW5jZWQtc2VhcmNoLXRhZ3MnKS51cGRhdGUodGFncyk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0JChwYXJhbXMsIG9uRXJyb3IpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgeyBzZWFyY2hJZCB9ID0gdGhpcy5wYWdlQ29uZmlnO1xyXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKVxyXG4gICAgICAuZmlsdGVyKChrZXkpID0+IFsncGFnZScsICdsaW1pdCcsICdzb3J0J10uaW5jbHVkZXMoa2V5KSlcclxuICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIHBhcmFtcy5yZXN1bHRzID0gcGFyYW1zLnJlc3VsdHMgfHwge307XHJcbiAgICAgICAgcGFyYW1zLnJlc3VsdHNba2V5XSA9IHBhcmFtc1trZXldO1xyXG4gICAgICAgIGRlbGV0ZSBwYXJhbXNba2V5XTtcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdhZHZhbmNlZFNlYXJjaCcsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBzZWFyY2hJZCxcclxuICAgICAgICByZXN1bHRzOiB7XHJcbiAgICAgICAgICBzb3J0OiAnc29ydF9BU0MnLFxyXG4gICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgbGltaXQ6IDEyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvbkVycm9yXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLnNvbWUoW1xyXG4gICAgICAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUnLFxyXG4gICAgICAnbXItc2VhcmNoLXJlc3VsdHMnLFxyXG4gICAgXSkudXBkYXRlKHJlc3BvbnNlKTtcclxuXHJcbiAgICAvLyBwYWdpbmF0aW9uXHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoeyBtb2RlOiAncGF5bG9hZCcgfSk7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh0aGlzLmdldFBhZ2luYXRpb25QYXJhbXMocmVzcG9uc2UpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGVIZWFkVGl0bGUoKSB7XHJcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xyXG4gICAgY29uc3QgcGFnZVRpdGxlID0gdGhpcy5wYWdlQ29uZmlnLnRpdGxlO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBbYXBwTmFtZSwgX3QocGFnZVRpdGxlKV0uam9pbignID4gJykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUcmFuc2xhdGlvbnMoY29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnPy5zb3J0Py5sYWJlbCkge1xyXG4gICAgICBjb25maWcuc29ydC5sYWJlbCA9IF90KGNvbmZpZy5zb3J0LmxhYmVsKTtcclxuICAgICAgY29uZmlnLnNvcnQub3B0aW9ucyA9IGNvbmZpZy5zb3J0Lm9wdGlvbnMubWFwKChvcHRpb24pID0+ICh7XHJcbiAgICAgICAgLi4ub3B0aW9uLFxyXG4gICAgICAgIGxhYmVsOiBfdChvcHRpb24ubGFiZWwpXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIFsndGV4dCcsICdidXR0b24nXS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgaWYgKGNvbmZpZy5mYWxsYmFjaykge1xyXG4gICAgICAgIGNvbmZpZy5mYWxsYmFja1trZXldID0gX3QoY29uZmlnLmZhbGxiYWNrW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb25maWcua28pIHtcclxuICAgICAgICBjb25maWcua29ba2V5XSA9IF90KGNvbmZpZy5rb1trZXldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZmlsdGVyc1xyXG4gICAgY29uc3QgeyBmaWx0ZXJzIH0gPSB0aGlzLnBhZ2VDb25maWc7XHJcbiAgICBpZiAoZmlsdGVycykge1xyXG4gICAgICBmaWx0ZXJzLnRpdGxlID0gX3QoZmlsdGVycy50aXRsZSk7XHJcbiAgICAgIE9iamVjdC5rZXlzKGZpbHRlcnMubGFiZWxzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBmaWx0ZXJzLmxhYmVsc1trZXldID0gX3QoZmlsdGVycy5sYWJlbHNba2V5XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldFBhZ2luYXRpb25QYXJhbXMocmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgdG90YWxfY291bnQ6IHRvdGFsQ291bnQsIG9mZnNldCwgbGltaXQgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgeyBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uQ29uZmlnIH0gPSB0aGlzLnBhZ2VDb25maWc7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRvdGFsQ291bnQgLyBsaW1pdCksXHJcbiAgICAgIGN1cnJlbnRQYWdlOiAob2Zmc2V0ICsgbGltaXQpIC8gbGltaXQsXHJcbiAgICAgIHBhZ2VMaW1pdDogcGFnaW5hdGlvbkNvbmZpZy5saW1pdCxcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBsYWJlbDogcGFnaW5hdGlvbkNvbmZpZy5zZWxlY3RMYWJlbCA/IF90KHBhZ2luYXRpb25Db25maWcuc2VsZWN0TGFiZWwpIDogbnVsbCxcclxuICAgICAgICBsaXN0OiBwYWdpbmF0aW9uQ29uZmlnLm9wdGlvbnMsXHJcbiAgICAgICAgYWN0aXZlOiBsaW1pdCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==