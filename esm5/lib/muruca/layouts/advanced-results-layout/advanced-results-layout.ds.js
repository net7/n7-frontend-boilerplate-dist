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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU16RDtJQUErQyw2Q0FBZ0I7SUFBL0Q7O0lBeUdBLENBQUM7SUE5RkMsMENBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsU0FBUztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFdEQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDRDQUFRLEdB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Q2IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsdURBQW1CLEdBQTdCLFVBQThCLFFBQVE7UUFDNUIsSUFBQSxpQ0FBdUIsRUFBRSx3QkFBTSxFQUFFLHNCQUFLLENBQWM7UUFDcEQsSUFBQSw2Q0FBNEIsQ0FBcUI7UUFFekQsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDekMsV0FBVyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUs7WUFDckMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUs7WUFDakMsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDN0UsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE9BQU87Z0JBQzlCLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQXpHRCxDQUErQyxnQkFBZ0IsR0F5RzlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRSZXN1bHRzTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByb3RlY3RlZCBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcm90ZWN0ZWQgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xuXG4gIHByb3RlY3RlZCBjb25maWdJZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBwYWdlQ29uZmlnO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCk7XG5cbiAgICAvLyBjb25maWdcbiAgICB0aGlzLmFsbCgpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMucGFnZUNvbmZpZyB9KTtcblxuICAgIC8vIG1hbnVhbCB1cGRhdGVzXG4gICAgdGhpcy5vbmUoJ21yLXNlYXJjaC1wYWdlLXRpdGxlJykudXBkYXRlKHt9KTtcblxuICAgIC8vIHVwZGF0ZSBoZWFkIHRpdGxlXG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUoKTtcblxuICAgIC8vIHVwZGF0ZSB0cmFuc2xhdGlvbnNcbiAgICB0aGlzLmFkZFRyYW5zbGF0aW9ucyh0aGlzLnBhZ2VDb25maWcpO1xuICB9XG5cbiAgcmVxdWVzdCQocGFyYW1zLCBvbkVycm9yKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB7IHNlYXJjaElkIH0gPSB0aGlzLnBhZ2VDb25maWc7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgLmZpbHRlcigoa2V5KSA9PiBbJ3BhZ2UnLCAnbGltaXQnLCAnc29ydCddLmluY2x1ZGVzKGtleSkpXG4gICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHBhcmFtcy5yZXN1bHRzID0gcGFyYW1zLnJlc3VsdHMgfHwge307XG4gICAgICAgIHBhcmFtcy5yZXN1bHRzW2tleV0gPSBwYXJhbXNba2V5XTtcbiAgICAgICAgZGVsZXRlIHBhcmFtc1trZXldO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnYWR2YW5jZWRTZWFyY2gnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgIHNlYXJjaElkLFxuICAgICAgICByZXN1bHRzOiB7XG4gICAgICAgICAgc29ydDogJ3NvcnRfQVNDJyxcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgbGltaXQ6IDEyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVycm9yXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIHRoaXMuc29tZShbXG4gICAgICAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUnLFxuICAgICAgJ21yLXNlYXJjaC1yZXN1bHRzJyxcbiAgICBdKS51cGRhdGUocmVzcG9uc2UpO1xuXG4gICAgLy8gcGFnaW5hdGlvblxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7IG1vZGU6ICdwYXlsb2FkJyB9KTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh0aGlzLmdldFBhZ2luYXRpb25QYXJhbXMocmVzcG9uc2UpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVIZWFkVGl0bGUoKSB7XG4gICAgY29uc3QgYXBwTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ25hbWUnKTtcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBbYXBwTmFtZSwgX3QocGFnZVRpdGxlKV0uam9pbignID4gJykpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRUcmFuc2xhdGlvbnMoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZz8uc29ydD8ubGFiZWwpIHtcbiAgICAgIGNvbmZpZy5zb3J0LmxhYmVsID0gX3QoY29uZmlnLnNvcnQubGFiZWwpO1xuICAgICAgY29uZmlnLnNvcnQub3B0aW9ucyA9IGNvbmZpZy5zb3J0Lm9wdGlvbnMubWFwKChvcHRpb24pID0+ICh7XG4gICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgbGFiZWw6IF90KG9wdGlvbi5sYWJlbClcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgWyd0ZXh0JywgJ2J1dHRvbiddLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGNvbmZpZy5mYWxsYmFjaykge1xuICAgICAgICBjb25maWcuZmFsbGJhY2tba2V5XSA9IF90KGNvbmZpZy5mYWxsYmFja1trZXldKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcua28pIHtcbiAgICAgICAgY29uZmlnLmtvW2tleV0gPSBfdChjb25maWcua29ba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgdG90YWxfY291bnQ6IHRvdGFsQ291bnQsIG9mZnNldCwgbGltaXQgfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogcGFnaW5hdGlvbkNvbmZpZyB9ID0gdGhpcy5wYWdlQ29uZmlnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbENvdW50IC8gbGltaXQpLFxuICAgICAgY3VycmVudFBhZ2U6IChvZmZzZXQgKyBsaW1pdCkgLyBsaW1pdCxcbiAgICAgIHBhZ2VMaW1pdDogcGFnaW5hdGlvbkNvbmZpZy5saW1pdCxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIGxhYmVsOiBwYWdpbmF0aW9uQ29uZmlnLnNlbGVjdExhYmVsID8gX3QocGFnaW5hdGlvbkNvbmZpZy5zZWxlY3RMYWJlbCkgOiBudWxsLFxuICAgICAgICBsaXN0OiBwYWdpbmF0aW9uQ29uZmlnLm9wdGlvbnMsXG4gICAgICAgIGFjdGl2ZTogbGltaXQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==