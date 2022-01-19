import { __assign, __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
import localStorageHelper from '../../helpers/local-storage-helper';
var MrSearchLayoutDS = /** @class */ (function (_super) {
    __extends(MrSearchLayoutDS, _super);
    function MrSearchLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalResultsText = null;
        _this.descriptionLoaded = false;
        _this.showDescription = false;
        return _this;
    }
    MrSearchLayoutDS.prototype.onInit = function (payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.searchService = payload.searchService;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        this.hideDescriptionKey = "hide-description-" + this.configId;
        // config
        this.all().updateOptions({ config: this.pageConfig });
        // manual updates
        this.one('mr-search-page-title').update({});
        // update head title
        this.updateHeadTitle();
        // update translations
        this.addTranslations(this.pageConfig);
        // description
        this.getPageDescription();
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
    MrSearchLayoutDS.prototype.toggleDescription = function () {
        localStorageHelper.toggle(this.hideDescriptionKey, true);
        this.showDescription = !(localStorageHelper.get(this.hideDescriptionKey));
        if (this.showDescription && !this.descriptionLoaded) {
            this.getPageDescription();
        }
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
    MrSearchLayoutDS.prototype.getPageDescription = function () {
        var _this = this;
        if (this.pageConfig.description && !localStorageHelper.get(this.hideDescriptionKey)) {
            var description = this.pageConfig.description;
            this.communication.request$('searchDescription', {
                urlParams: description.id,
            }).subscribe(function (response) {
                _this.one('mr-search-page-description').update(response);
                _this.descriptionLoaded = true;
                _this.showDescription = true;
            });
        }
    };
    return MrSearchLayoutDS;
}(LayoutDataSource));
export { MrSearchLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUl6RCxPQUFPLGtCQUFrQixNQUFNLG9DQUFvQyxDQUFDO0FBR3BFO0lBQXNDLG9DQUFnQjtJQUF0RDtRQUFBLHFFQXVJQztRQXhIUSxzQkFBZ0IsR0FBa0IsSUFBSSxDQUFDO1FBSXRDLHVCQUFpQixHQUFHLEtBQUssQ0FBQztRQUUzQixxQkFBZSxHQUFHLEtBQUssQ0FBQzs7SUFrSGpDLENBQUM7SUFoSEMsaUNBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxzQkFBb0IsSUFBSSxDQUFDLFFBQVUsQ0FBQztRQUU5RCxTQUFTO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUV0RCxpQkFB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QUFDLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDM0UsSUFBQSx5Q0FBVyxDQUFxQjtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtnQkFDL0MsU0FBUyxFQUFFLFdBQVcsQ0FBQyxFQUFFO2FBQzFCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO2dCQUNwQixLQUFJLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4RCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXZJRCxDQUFzQyxnQkFBZ0IsR0F1SXJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IGxvY2FsU3RvcmFnZUhlbHBlciBmcm9tICcuLi8uLi9oZWxwZXJzL2xvY2FsLXN0b3JhZ2UtaGVscGVyJztcclxuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc2VhcmNoU2VydmljZTogTXJTZWFyY2hTZXJ2aWNlO1xyXG5cclxuICBwdWJsaWMgZmFjZXRzQ29uZmlnO1xyXG5cclxuICBwdWJsaWMgcGFnZUNvbmZpZztcclxuXHJcbiAgcHVibGljIHRvdGFsUmVzdWx0c1RleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGhpZGVEZXNjcmlwdGlvbktleTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGRlc2NyaXB0aW9uTG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzaG93RGVzY3JpcHRpb24gPSBmYWxzZTtcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XHJcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XHJcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcclxuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCk7XHJcbiAgICB0aGlzLmhpZGVEZXNjcmlwdGlvbktleSA9IGBoaWRlLWRlc2NyaXB0aW9uLSR7dGhpcy5jb25maWdJZH1gO1xyXG5cclxuICAgIC8vIGNvbmZpZ1xyXG4gICAgdGhpcy5hbGwoKS51cGRhdGVPcHRpb25zKHsgY29uZmlnOiB0aGlzLnBhZ2VDb25maWcgfSk7XHJcblxyXG4gICAgLy8gbWFudWFsIHVwZGF0ZXNcclxuICAgIHRoaXMub25lKCdtci1zZWFyY2gtcGFnZS10aXRsZScpLnVwZGF0ZSh7fSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKCk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHRyYW5zbGF0aW9uc1xyXG4gICAgdGhpcy5hZGRUcmFuc2xhdGlvbnModGhpcy5wYWdlQ29uZmlnKTtcclxuXHJcbiAgICAvLyBkZXNjcmlwdGlvblxyXG4gICAgdGhpcy5nZXRQYWdlRGVzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLnNvbWUoW1xyXG4gICAgICAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUnLFxyXG4gICAgICAnbXItc2VhcmNoLXJlc3VsdHMnLFxyXG4gICAgXSkudXBkYXRlKHJlc3BvbnNlKTtcclxuXHJcbiAgICAvLyBwYWdpbmF0aW9uXHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoeyBtb2RlOiAncGF5bG9hZCcgfSk7XHJcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh0aGlzLmdldFBhZ2luYXRpb25QYXJhbXMocmVzcG9uc2UpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFjdGl2ZUZpbHRlcnMoc3RhdGUsIGxpbmtzUmVzcG9uc2UpIHtcclxuICAgIC8vIGFjdGl2ZSBcInRhZ3NcIiBmaWx0ZXJzXHJcbiAgICB0aGlzLm9uZSgnbXItc2VhcmNoLXRhZ3MnKS51cGRhdGUoe1xyXG4gICAgICBzdGF0ZSxcclxuICAgICAgbGlua3NSZXNwb25zZSxcclxuICAgICAgZmFjZXRzQ29uZmlnOiB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCkuZmFjZXRzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURlc2NyaXB0aW9uKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlSGVscGVyLnRvZ2dsZSh0aGlzLmhpZGVEZXNjcmlwdGlvbktleSwgdHJ1ZSk7XHJcbiAgICB0aGlzLnNob3dEZXNjcmlwdGlvbiA9ICEobG9jYWxTdG9yYWdlSGVscGVyLmdldCh0aGlzLmhpZGVEZXNjcmlwdGlvbktleSkpO1xyXG5cclxuICAgIGlmICh0aGlzLnNob3dEZXNjcmlwdGlvbiAmJiAhdGhpcy5kZXNjcmlwdGlvbkxvYWRlZCkge1xyXG4gICAgICB0aGlzLmdldFBhZ2VEZXNjcmlwdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYWdpbmF0aW9uUGFyYW1zKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IHRvdGFsX2NvdW50OiB0b3RhbENvdW50LCBvZmZzZXQsIGxpbWl0IH0gPSByZXNwb25zZTtcclxuICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogcGFnaW5hdGlvbkNvbmZpZyB9ID0gdGhpcy5wYWdlQ29uZmlnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbENvdW50IC8gbGltaXQpLFxyXG4gICAgICBjdXJyZW50UGFnZTogKG9mZnNldCArIGxpbWl0KSAvIGxpbWl0LFxyXG4gICAgICBwYWdlTGltaXQ6IHBhZ2luYXRpb25Db25maWcubGltaXQsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgbGFiZWw6IHBhZ2luYXRpb25Db25maWcuc2VsZWN0TGFiZWwgPyBfdChwYWdpbmF0aW9uQ29uZmlnLnNlbGVjdExhYmVsKSA6IG51bGwsXHJcbiAgICAgICAgbGlzdDogcGFnaW5hdGlvbkNvbmZpZy5vcHRpb25zLFxyXG4gICAgICAgIGFjdGl2ZTogbGltaXQsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVIZWFkVGl0bGUoKSB7XHJcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xyXG4gICAgY29uc3QgcGFnZVRpdGxlID0gdGhpcy5wYWdlQ29uZmlnLnRpdGxlO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCBbYXBwTmFtZSwgX3QocGFnZVRpdGxlKV0uam9pbignID4gJykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUcmFuc2xhdGlvbnMoY29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnLmZhY2V0c1RpdGxlKSB7XHJcbiAgICAgIGNvbmZpZy5mYWNldHNUaXRsZSA9IF90KGNvbmZpZy5mYWNldHNUaXRsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmZpbHRlcnNUaXRsZSkge1xyXG4gICAgICBjb25maWcuZmlsdGVyc1RpdGxlID0gX3QoY29uZmlnLmZpbHRlcnNUaXRsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnPy5zb3J0Py5sYWJlbCkge1xyXG4gICAgICBjb25maWcuc29ydC5sYWJlbCA9IF90KGNvbmZpZy5zb3J0LmxhYmVsKTtcclxuICAgICAgY29uZmlnLnNvcnQub3B0aW9ucyA9IGNvbmZpZy5zb3J0Lm9wdGlvbnMubWFwKChvcHRpb24pID0+ICh7XHJcbiAgICAgICAgLi4ub3B0aW9uLFxyXG4gICAgICAgIGxhYmVsOiBfdChvcHRpb24ubGFiZWwpXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIFsndGV4dCcsICdidXR0b24nXS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgaWYgKGNvbmZpZy5mYWxsYmFjaykge1xyXG4gICAgICAgIGNvbmZpZy5mYWxsYmFja1trZXldID0gX3QoY29uZmlnLmZhbGxiYWNrW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb25maWcua28pIHtcclxuICAgICAgICBjb25maWcua29ba2V5XSA9IF90KGNvbmZpZy5rb1trZXldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlRGVzY3JpcHRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlQ29uZmlnLmRlc2NyaXB0aW9uICYmICFsb2NhbFN0b3JhZ2VIZWxwZXIuZ2V0KHRoaXMuaGlkZURlc2NyaXB0aW9uS2V5KSkge1xyXG4gICAgICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSB0aGlzLnBhZ2VDb25maWc7XHJcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnc2VhcmNoRGVzY3JpcHRpb24nLCB7XHJcbiAgICAgICAgdXJsUGFyYW1zOiBkZXNjcmlwdGlvbi5pZCxcclxuICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMub25lKCdtci1zZWFyY2gtcGFnZS1kZXNjcmlwdGlvbicpLnVwZGF0ZShyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbkxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93RGVzY3JpcHRpb24gPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19