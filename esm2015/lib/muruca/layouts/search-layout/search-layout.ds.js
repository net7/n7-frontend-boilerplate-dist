import { LayoutDataSource, _t } from '@n7-frontend/core';
import localStorageHelper from '../../helpers/local-storage-helper';
export class MrSearchLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.totalResultsText = null;
        this.descriptionLoaded = false;
        this.showDescription = false;
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.mainState = payload.mainState;
        this.searchService = payload.searchService;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        this.hideDescriptionKey = `hide-description-${this.configId}`;
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
    }
    handleResponse(response) {
        this.some([
            'mr-search-results-title',
            'mr-search-results',
        ]).update(response);
        // pagination
        this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
        this.one('n7-smart-pagination').update(this.getPaginationParams(response));
    }
    updateActiveFilters(state, linksResponse) {
        // active "tags" filters
        this.one('mr-search-tags').update({
            state,
            linksResponse,
            facetsConfig: this.searchService.getConfig().facets
        });
    }
    toggleDescription() {
        localStorageHelper.toggle(this.hideDescriptionKey, true);
        this.showDescription = !(localStorageHelper.get(this.hideDescriptionKey));
        if (this.showDescription && !this.descriptionLoaded) {
            this.getPageDescription();
        }
    }
    getPaginationParams(response) {
        const { total_count: totalCount, offset, limit } = response;
        const { pagination: paginationConfig } = this.pageConfig;
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
    }
    updateHeadTitle() {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    }
    addTranslations(config) {
        var _a;
        if (config.facetsTitle) {
            config.facetsTitle = _t(config.facetsTitle);
        }
        if (config.filtersTitle) {
            config.filtersTitle = _t(config.filtersTitle);
        }
        if ((_a = config === null || config === void 0 ? void 0 : config.sort) === null || _a === void 0 ? void 0 : _a.label) {
            config.sort.label = _t(config.sort.label);
            config.sort.options = config.sort.options.map((option) => (Object.assign(Object.assign({}, option), { label: _t(option.label) })));
        }
        ['text', 'button'].forEach((key) => {
            if (config.fallback) {
                config.fallback[key] = _t(config.fallback[key]);
            }
            if (config.ko) {
                config.ko[key] = _t(config.ko[key]);
            }
        });
    }
    getPageDescription() {
        if (this.pageConfig.description && !localStorageHelper.get(this.hideDescriptionKey)) {
            const { description } = this.pageConfig;
            this.communication.request$('searchDescription', {
                urlParams: description.id,
            }).subscribe((response) => {
                this.one('mr-search-page-description').update(response);
                this.descriptionLoaded = true;
                this.showDescription = true;
            });
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXpELE9BQU8sa0JBQWtCLE1BQU0sb0NBQW9DLENBQUM7QUFHcEUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFlUyxxQkFBZ0IsR0FBa0IsSUFBSSxDQUFDO1FBSXRDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUUzQixvQkFBZSxHQUFHLEtBQUssQ0FBQztJQWtIakMsQ0FBQztJQWhIQyxNQUFNLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLG9CQUFvQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFOUQsU0FBUztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFdEQsaUJB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SSxDQUFDLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDbkYsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7Z0JBQy9DLFNBQVMsRUFBRSxXQUFXLENBQUMsRUFBRTthQUMxQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgbG9jYWxTdG9yYWdlSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbG9jYWwtc3RvcmFnZS1oZWxwZXInO1xyXG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XHJcblxyXG4gIHB1YmxpYyBmYWNldHNDb25maWc7XHJcblxyXG4gIHB1YmxpYyBwYWdlQ29uZmlnO1xyXG5cclxuICBwdWJsaWMgdG90YWxSZXN1bHRzVGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgaGlkZURlc2NyaXB0aW9uS2V5OiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgZGVzY3JpcHRpb25Mb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHNob3dEZXNjcmlwdGlvbiA9IGZhbHNlO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcclxuICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IHBheWxvYWQuc2VhcmNoU2VydmljZTtcclxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xyXG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcclxuICAgIHRoaXMuaGlkZURlc2NyaXB0aW9uS2V5ID0gYGhpZGUtZGVzY3JpcHRpb24tJHt0aGlzLmNvbmZpZ0lkfWA7XHJcblxyXG4gICAgLy8gY29uZmlnXHJcbiAgICB0aGlzLmFsbCgpLnVwZGF0ZU9wdGlvbnMoeyBjb25maWc6IHRoaXMucGFnZUNvbmZpZyB9KTtcclxuXHJcbiAgICAvLyBtYW51YWwgdXBkYXRlc1xyXG4gICAgdGhpcy5vbmUoJ21yLXNlYXJjaC1wYWdlLXRpdGxlJykudXBkYXRlKHt9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxyXG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUoKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdHJhbnNsYXRpb25zXHJcbiAgICB0aGlzLmFkZFRyYW5zbGF0aW9ucyh0aGlzLnBhZ2VDb25maWcpO1xyXG5cclxuICAgIC8vIGRlc2NyaXB0aW9uXHJcbiAgICB0aGlzLmdldFBhZ2VEZXNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIHRoaXMuc29tZShbXHJcbiAgICAgICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZScsXHJcbiAgICAgICdtci1zZWFyY2gtcmVzdWx0cycsXHJcbiAgICBdKS51cGRhdGUocmVzcG9uc2UpO1xyXG5cclxuICAgIC8vIHBhZ2luYXRpb25cclxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7IG1vZGU6ICdwYXlsb2FkJyB9KTtcclxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHRoaXMuZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXNwb25zZSkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWN0aXZlRmlsdGVycyhzdGF0ZSwgbGlua3NSZXNwb25zZSkge1xyXG4gICAgLy8gYWN0aXZlIFwidGFnc1wiIGZpbHRlcnNcclxuICAgIHRoaXMub25lKCdtci1zZWFyY2gtdGFncycpLnVwZGF0ZSh7XHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBsaW5rc1Jlc3BvbnNlLFxyXG4gICAgICBmYWNldHNDb25maWc6IHRoaXMuc2VhcmNoU2VydmljZS5nZXRDb25maWcoKS5mYWNldHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRGVzY3JpcHRpb24oKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2VIZWxwZXIudG9nZ2xlKHRoaXMuaGlkZURlc2NyaXB0aW9uS2V5LCB0cnVlKTtcclxuICAgIHRoaXMuc2hvd0Rlc2NyaXB0aW9uID0gIShsb2NhbFN0b3JhZ2VIZWxwZXIuZ2V0KHRoaXMuaGlkZURlc2NyaXB0aW9uS2V5KSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd0Rlc2NyaXB0aW9uICYmICF0aGlzLmRlc2NyaXB0aW9uTG9hZGVkKSB7XHJcbiAgICAgIHRoaXMuZ2V0UGFnZURlc2NyaXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhZ2luYXRpb25QYXJhbXMocmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgdG90YWxfY291bnQ6IHRvdGFsQ291bnQsIG9mZnNldCwgbGltaXQgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgeyBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uQ29uZmlnIH0gPSB0aGlzLnBhZ2VDb25maWc7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRvdGFsQ291bnQgLyBsaW1pdCksXHJcbiAgICAgIGN1cnJlbnRQYWdlOiAob2Zmc2V0ICsgbGltaXQpIC8gbGltaXQsXHJcbiAgICAgIHBhZ2VMaW1pdDogcGFnaW5hdGlvbkNvbmZpZy5saW1pdCxcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBsYWJlbDogcGFnaW5hdGlvbkNvbmZpZy5zZWxlY3RMYWJlbCA/IF90KHBhZ2luYXRpb25Db25maWcuc2VsZWN0TGFiZWwpIDogbnVsbCxcclxuICAgICAgICBsaXN0OiBwYWdpbmF0aW9uQ29uZmlnLm9wdGlvbnMsXHJcbiAgICAgICAgYWN0aXZlOiBsaW1pdCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUhlYWRUaXRsZSgpIHtcclxuICAgIGNvbnN0IGFwcE5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCduYW1lJyk7XHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpXS5qb2luKCcgPiAnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRyYW5zbGF0aW9ucyhjb25maWcpIHtcclxuICAgIGlmIChjb25maWcuZmFjZXRzVGl0bGUpIHtcclxuICAgICAgY29uZmlnLmZhY2V0c1RpdGxlID0gX3QoY29uZmlnLmZhY2V0c1RpdGxlKTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuZmlsdGVyc1RpdGxlKSB7XHJcbiAgICAgIGNvbmZpZy5maWx0ZXJzVGl0bGUgPSBfdChjb25maWcuZmlsdGVyc1RpdGxlKTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWc/LnNvcnQ/LmxhYmVsKSB7XHJcbiAgICAgIGNvbmZpZy5zb3J0LmxhYmVsID0gX3QoY29uZmlnLnNvcnQubGFiZWwpO1xyXG4gICAgICBjb25maWcuc29ydC5vcHRpb25zID0gY29uZmlnLnNvcnQub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHtcclxuICAgICAgICAuLi5vcHRpb24sXHJcbiAgICAgICAgbGFiZWw6IF90KG9wdGlvbi5sYWJlbClcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgWyd0ZXh0JywgJ2J1dHRvbiddLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBpZiAoY29uZmlnLmZhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uZmlnLmZhbGxiYWNrW2tleV0gPSBfdChjb25maWcuZmFsbGJhY2tba2V5XSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbmZpZy5rbykge1xyXG4gICAgICAgIGNvbmZpZy5rb1trZXldID0gX3QoY29uZmlnLmtvW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFBhZ2VEZXNjcmlwdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnBhZ2VDb25maWcuZGVzY3JpcHRpb24gJiYgIWxvY2FsU3RvcmFnZUhlbHBlci5nZXQodGhpcy5oaWRlRGVzY3JpcHRpb25LZXkpKSB7XHJcbiAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IHRoaXMucGFnZUNvbmZpZztcclxuICAgICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdzZWFyY2hEZXNjcmlwdGlvbicsIHtcclxuICAgICAgICB1cmxQYXJhbXM6IGRlc2NyaXB0aW9uLmlkLFxyXG4gICAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbmUoJ21yLXNlYXJjaC1wYWdlLWRlc2NyaXB0aW9uJykudXBkYXRlKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dEZXNjcmlwdGlvbiA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=