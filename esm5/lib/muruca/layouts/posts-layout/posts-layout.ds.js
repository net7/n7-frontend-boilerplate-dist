import { __assign, __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
var MrPostsLayoutDS = /** @class */ (function (_super) {
    __extends(MrPostsLayoutDS, _super);
    function MrPostsLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrPostsLayoutDS.prototype.onInit = function (payload) {
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
    MrPostsLayoutDS.prototype.updateSearchTags = function (params) {
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
    MrPostsLayoutDS.prototype.request$ = function (params, onError) {
        var searchId = this.pageConfig.searchId;
        var searchParams = __assign({}, params);
        Object.keys(searchParams)
            .filter(function (key) { return ['page', 'limit', 'sort'].includes(key); })
            .forEach(function (key) {
            searchParams.results = searchParams.results || {};
            searchParams.results[key] = searchParams[key];
            delete searchParams[key];
        });
        // normalize results filters
        var resultsParams = {};
        var results = searchParams.results || {};
        var page = results.page ? +results.page : 1;
        resultsParams.limit = results.limit ? +results.limit : 12;
        resultsParams.offset = page === 1 ? 0 : resultsParams.limit * (page - 1);
        resultsParams.sort = results.sort || 'sort_ASC';
        return this.communication.request$('posts', {
            method: 'POST',
            params: __assign(__assign({}, searchParams), { searchId: searchId, results: __assign({}, resultsParams) }),
            onError: onError
        });
    };
    MrPostsLayoutDS.prototype.handleResponse = function (response) {
        this.some([
            'mr-search-results-title',
            'mr-search-results',
        ]).update(response);
        // pagination
        this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
        this.one('n7-smart-pagination').update(this.getPaginationParams(response));
    };
    MrPostsLayoutDS.prototype.updateHeadTitle = function () {
        var appName = this.configuration.get('name');
        var pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    };
    MrPostsLayoutDS.prototype.addTranslations = function (config) {
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
    MrPostsLayoutDS.prototype.getPaginationParams = function (response) {
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
    return MrPostsLayoutDS;
}(LayoutDataSource));
export { MrPostsLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Bvc3RzLWxheW91dC9wb3N0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU16RDtJQUFxQyxtQ0FBZ0I7SUFBckQ7O0lBK0lBLENBQUM7SUFwSUMsZ0NBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsU0FBUztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFdEQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDBDQUFnQixHQUFoQixVQUFpQixNQUFNO1FBQ3JCLElBQUksQ0FBQyxJ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LENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUEvSUQsQ0FBcUMsZ0JBQWdCLEdBK0lwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclBvc3RzTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByb3RlY3RlZCBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcclxuXHJcbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBwYWdlQ29uZmlnO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcclxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcclxuXHJcbiAgICAvLyBjb25maWdcclxuICAgIHRoaXMuYWxsKCkudXBkYXRlT3B0aW9ucyh7IGNvbmZpZzogdGhpcy5wYWdlQ29uZmlnIH0pO1xyXG5cclxuICAgIC8vIG1hbnVhbCB1cGRhdGVzXHJcbiAgICB0aGlzLm9uZSgnbXItc2VhcmNoLXBhZ2UtdGl0bGUnKS51cGRhdGUoe30pO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXHJcbiAgICB0aGlzLnVwZGF0ZUhlYWRUaXRsZSgpO1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0cmFuc2xhdGlvbnNcclxuICAgIHRoaXMuYWRkVHJhbnNsYXRpb25zKHRoaXMucGFnZUNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWFyY2hUYWdzKHBhcmFtcykge1xyXG4gICAgaWYgKCF0aGlzLnBhZ2VDb25maWcuZmlsdGVycykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBsYWJlbHMgfSA9IHRoaXMucGFnZUNvbmZpZy5maWx0ZXJzO1xyXG4gICAgY29uc3QgdGFncyA9IFtdO1xyXG4gICAgT2JqZWN0LmtleXMobGFiZWxzKVxyXG4gICAgICAuZmlsdGVyKChrZXkpID0+ICEhcGFyYW1zW2tleV0pXHJcbiAgICAgIC5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICB0YWdzW2tleV0gPSBwYXJhbXNba2V5XTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5vbmUoJ21yLWFkdmFuY2VkLXNlYXJjaC10YWdzJykudXBkYXRlT3B0aW9ucyh7IGxhYmVscyB9KTtcclxuICAgIHRoaXMub25lKCdtci1hZHZhbmNlZC1zZWFyY2gtdGFncycpLnVwZGF0ZSh0YWdzKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3QkKHBhcmFtcywgb25FcnJvcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB7IHNlYXJjaElkIH0gPSB0aGlzLnBhZ2VDb25maWc7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB7XHJcbiAgICAgIC4uLnBhcmFtc1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKHNlYXJjaFBhcmFtcylcclxuICAgICAgLmZpbHRlcigoa2V5KSA9PiBbJ3BhZ2UnLCAnbGltaXQnLCAnc29ydCddLmluY2x1ZGVzKGtleSkpXHJcbiAgICAgIC5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBzZWFyY2hQYXJhbXMucmVzdWx0cyA9IHNlYXJjaFBhcmFtcy5yZXN1bHRzIHx8IHt9O1xyXG4gICAgICAgIHNlYXJjaFBhcmFtcy5yZXN1bHRzW2tleV0gPSBzZWFyY2hQYXJhbXNba2V5XTtcclxuICAgICAgICBkZWxldGUgc2VhcmNoUGFyYW1zW2tleV07XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gbm9ybWFsaXplIHJlc3VsdHMgZmlsdGVyc1xyXG4gICAgY29uc3QgcmVzdWx0c1BhcmFtcyA9IHt9IGFzIHtcclxuICAgICAgbGltaXQ6IG51bWJlcjtcclxuICAgICAgb2Zmc2V0OiBudW1iZXI7XHJcbiAgICAgIHNvcnQ6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBjb25zdCByZXN1bHRzID0gc2VhcmNoUGFyYW1zLnJlc3VsdHMgfHwge307XHJcbiAgICBjb25zdCBwYWdlID0gcmVzdWx0cy5wYWdlID8gK3Jlc3VsdHMucGFnZSA6IDE7XHJcbiAgICByZXN1bHRzUGFyYW1zLmxpbWl0ID0gcmVzdWx0cy5saW1pdCA/ICtyZXN1bHRzLmxpbWl0IDogMTI7XHJcbiAgICByZXN1bHRzUGFyYW1zLm9mZnNldCA9IHBhZ2UgPT09IDEgPyAwIDogcmVzdWx0c1BhcmFtcy5saW1pdCAqIChwYWdlIC0gMSk7XHJcbiAgICByZXN1bHRzUGFyYW1zLnNvcnQgPSByZXN1bHRzLnNvcnQgfHwgJ3NvcnRfQVNDJztcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3Bvc3RzJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgLi4uc2VhcmNoUGFyYW1zLFxyXG4gICAgICAgIHNlYXJjaElkLFxyXG4gICAgICAgIHJlc3VsdHM6IHtcclxuICAgICAgICAgIC4uLnJlc3VsdHNQYXJhbXNcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRXJyb3JcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIHRoaXMuc29tZShbXHJcbiAgICAgICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZScsXHJcbiAgICAgICdtci1zZWFyY2gtcmVzdWx0cycsXHJcbiAgICBdKS51cGRhdGUocmVzcG9uc2UpO1xyXG5cclxuICAgIC8vIHBhZ2luYXRpb25cclxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7IG1vZGU6ICdwYXlsb2FkJyB9KTtcclxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHRoaXMuZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXNwb25zZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUhlYWRUaXRsZSgpIHtcclxuICAgIGNvbnN0IGFwcE5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCduYW1lJyk7XHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpXS5qb2luKCcgPiAnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRyYW5zbGF0aW9ucyhjb25maWcpIHtcclxuICAgIGlmIChjb25maWc/LnNvcnQ/LmxhYmVsKSB7XHJcbiAgICAgIGNvbmZpZy5zb3J0LmxhYmVsID0gX3QoY29uZmlnLnNvcnQubGFiZWwpO1xyXG4gICAgICBjb25maWcuc29ydC5vcHRpb25zID0gY29uZmlnLnNvcnQub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHtcclxuICAgICAgICAuLi5vcHRpb24sXHJcbiAgICAgICAgbGFiZWw6IF90KG9wdGlvbi5sYWJlbClcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgWyd0ZXh0JywgJ2J1dHRvbiddLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBpZiAoY29uZmlnLmZhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uZmlnLmZhbGxiYWNrW2tleV0gPSBfdChjb25maWcuZmFsbGJhY2tba2V5XSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbmZpZy5rbykge1xyXG4gICAgICAgIGNvbmZpZy5rb1trZXldID0gX3QoY29uZmlnLmtvW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmaWx0ZXJzXHJcbiAgICBjb25zdCB7IGZpbHRlcnMgfSA9IHRoaXMucGFnZUNvbmZpZztcclxuICAgIGlmIChmaWx0ZXJzKSB7XHJcbiAgICAgIGZpbHRlcnMudGl0bGUgPSBfdChmaWx0ZXJzLnRpdGxlKTtcclxuICAgICAgT2JqZWN0LmtleXMoZmlsdGVycy5sYWJlbHMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcnMubGFiZWxzW2tleV0gPSBfdChmaWx0ZXJzLmxhYmVsc1trZXldKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXNwb25zZSkge1xyXG4gICAgY29uc3QgeyB0b3RhbF9jb3VudDogdG90YWxDb3VudCwgb2Zmc2V0LCBsaW1pdCB9ID0gcmVzcG9uc2U7XHJcbiAgICBjb25zdCB7IHBhZ2luYXRpb246IHBhZ2luYXRpb25Db25maWcgfSA9IHRoaXMucGFnZUNvbmZpZztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodG90YWxDb3VudCAvIGxpbWl0KSxcclxuICAgICAgY3VycmVudFBhZ2U6IChvZmZzZXQgKyBsaW1pdCkgLyBsaW1pdCxcclxuICAgICAgcGFnZUxpbWl0OiBwYWdpbmF0aW9uQ29uZmlnLmxpbWl0LFxyXG4gICAgICBzaXplczoge1xyXG4gICAgICAgIGxhYmVsOiBwYWdpbmF0aW9uQ29uZmlnLnNlbGVjdExhYmVsID8gX3QocGFnaW5hdGlvbkNvbmZpZy5zZWxlY3RMYWJlbCkgOiBudWxsLFxyXG4gICAgICAgIGxpc3Q6IHBhZ2luYXRpb25Db25maWcub3B0aW9ucyxcclxuICAgICAgICBhY3RpdmU6IGxpbWl0LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19