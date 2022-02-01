import { LayoutDataSource, _t } from '@n7-frontend/core';
export class MrAdvancedResultsLayoutDS extends LayoutDataSource {
    onInit(payload) {
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
    }
    updateSearchTags(params) {
        if (!this.pageConfig.filters) {
            return;
        }
        const { labels } = this.pageConfig.filters;
        const tags = [];
        Object.keys(labels)
            .filter((key) => !!params[key])
            .forEach((key) => {
            tags[key] = params[key];
        });
        this.one('mr-advanced-search-tags').updateOptions({ labels });
        this.one('mr-advanced-search-tags').update(tags);
    }
    request$(params, onError) {
        const { searchId } = this.pageConfig;
        const searchParams = {
            ...params
        };
        Object.keys(searchParams)
            .filter((key) => ['page', 'limit', 'sort'].includes(key))
            .forEach((key) => {
            searchParams.results = searchParams.results || {};
            searchParams.results[key] = searchParams[key];
            delete searchParams[key];
        });
        // normalize results filters
        const resultsParams = {};
        const results = searchParams.results || {};
        const page = results.page ? +results.page : 1;
        resultsParams.limit = results.limit ? +results.limit : 12;
        resultsParams.offset = page === 1 ? 0 : resultsParams.limit * (page - 1);
        resultsParams.sort = results.sort || 'sort_ASC';
        return this.communication.request$('advancedSearch', {
            method: 'POST',
            params: {
                ...searchParams,
                searchId,
                results: {
                    ...resultsParams
                }
            },
            onError
        });
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
    updateHeadTitle() {
        const appName = this.configuration.get('name');
        const pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    }
    addTranslations(config) {
        if (config?.sort?.label) {
            config.sort.label = _t(config.sort.label);
            config.sort.options = config.sort.options.map((option) => ({
                ...option,
                label: _t(option.label)
            }));
        }
        ['text', 'button'].forEach((key) => {
            if (config.fallback) {
                config.fallback[key] = _t(config.fallback[key]);
            }
            if (config.ko) {
                config.ko[key] = _t(config.ko[key]);
            }
        });
        // filters
        const { filters } = this.pageConfig;
        if (filters) {
            filters.title = _t(filters.title);
            Object.keys(filters.labels).forEach((key) => {
                filters.labels[key] = _t(filters.labels[key]);
            });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNekQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjtJQVc3RCxNQUFNLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxTQUFTO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUV0RCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU1QyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFD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QkFBZ0IsQ0FBQyxLQUFLO1lBQ2pDLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQzdFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO2dCQUM5QixNQUFNLEVBQUUsS0FBSzthQUNkO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcm90ZWN0ZWQgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJvdGVjdGVkIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcblxuICBwcm90ZWN0ZWQgY29uZmlnSWQ6IHN0cmluZztcblxuICBwdWJsaWMgcGFnZUNvbmZpZztcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuXG4gICAgLy8gY29uZmlnXG4gICAgdGhpcy5hbGwoKS51cGRhdGVPcHRpb25zKHsgY29uZmlnOiB0aGlzLnBhZ2VDb25maWcgfSk7XG5cbiAgICAvLyBtYW51YWwgdXBkYXRlc1xuICAgIHRoaXMub25lKCdtci1zZWFyY2gtcGFnZS10aXRsZScpLnVwZGF0ZSh7fSk7XG5cbiAgICAvLyB1cGRhdGUgaGVhZCB0aXRsZVxuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKCk7XG5cbiAgICAvLyB1cGRhdGUgdHJhbnNsYXRpb25zXG4gICAgdGhpcy5hZGRUcmFuc2xhdGlvbnModGhpcy5wYWdlQ29uZmlnKTtcbiAgfVxuXG4gIHVwZGF0ZVNlYXJjaFRhZ3MocGFyYW1zKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2VDb25maWcuZmlsdGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbGFiZWxzIH0gPSB0aGlzLnBhZ2VDb25maWcuZmlsdGVycztcbiAgICBjb25zdCB0YWdzID0gW107XG4gICAgT2JqZWN0LmtleXMobGFiZWxzKVxuICAgICAgLmZpbHRlcigoa2V5KSA9PiAhIXBhcmFtc1trZXldKVxuICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB0YWdzW2tleV0gPSBwYXJhbXNba2V5XTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5vbmUoJ21yLWFkdmFuY2VkLXNlYXJjaC10YWdzJykudXBkYXRlT3B0aW9ucyh7IGxhYmVscyB9KTtcbiAgICB0aGlzLm9uZSgnbXItYWR2YW5jZWQtc2VhcmNoLXRhZ3MnKS51cGRhdGUodGFncyk7XG4gIH1cblxuICByZXF1ZXN0JChwYXJhbXMsIG9uRXJyb3IpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHsgc2VhcmNoSWQgfSA9IHRoaXMucGFnZUNvbmZpZztcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB7XG4gICAgICAuLi5wYXJhbXNcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHNlYXJjaFBhcmFtcylcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4gWydwYWdlJywgJ2xpbWl0JywgJ3NvcnQnXS5pbmNsdWRlcyhrZXkpKVxuICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzZWFyY2hQYXJhbXMucmVzdWx0cyA9IHNlYXJjaFBhcmFtcy5yZXN1bHRzIHx8IHt9O1xuICAgICAgICBzZWFyY2hQYXJhbXMucmVzdWx0c1trZXldID0gc2VhcmNoUGFyYW1zW2tleV07XG4gICAgICAgIGRlbGV0ZSBzZWFyY2hQYXJhbXNba2V5XTtcbiAgICAgIH0pO1xuICAgIC8vIG5vcm1hbGl6ZSByZXN1bHRzIGZpbHRlcnNcbiAgICBjb25zdCByZXN1bHRzUGFyYW1zID0ge30gYXMge1xuICAgICAgbGltaXQ6IG51bWJlcjtcbiAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgc29ydDogc3RyaW5nO1xuICAgIH07XG4gICAgY29uc3QgcmVzdWx0cyA9IHNlYXJjaFBhcmFtcy5yZXN1bHRzIHx8IHt9O1xuICAgIGNvbnN0IHBhZ2UgPSByZXN1bHRzLnBhZ2UgPyArcmVzdWx0cy5wYWdlIDogMTtcbiAgICByZXN1bHRzUGFyYW1zLmxpbWl0ID0gcmVzdWx0cy5saW1pdCA/ICtyZXN1bHRzLmxpbWl0IDogMTI7XG4gICAgcmVzdWx0c1BhcmFtcy5vZmZzZXQgPSBwYWdlID09PSAxID8gMCA6IHJlc3VsdHNQYXJhbXMubGltaXQgKiAocGFnZSAtIDEpO1xuICAgIHJlc3VsdHNQYXJhbXMuc29ydCA9IHJlc3VsdHMuc29ydCB8fCAnc29ydF9BU0MnO1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2FkdmFuY2VkU2VhcmNoJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4uc2VhcmNoUGFyYW1zLFxuICAgICAgICBzZWFyY2hJZCxcbiAgICAgICAgcmVzdWx0czoge1xuICAgICAgICAgIC4uLnJlc3VsdHNQYXJhbXNcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRXJyb3JcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgdGhpcy5zb21lKFtcbiAgICAgICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZScsXG4gICAgICAnbXItc2VhcmNoLXJlc3VsdHMnLFxuICAgIF0pLnVwZGF0ZShyZXNwb25zZSk7XG5cbiAgICAvLyBwYWdpbmF0aW9uXG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGVPcHRpb25zKHsgbW9kZTogJ3BheWxvYWQnIH0pO1xuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlKHRoaXMuZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXNwb25zZSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUhlYWRUaXRsZSgpIHtcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IHRoaXMucGFnZUNvbmZpZy50aXRsZTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpXS5qb2luKCcgPiAnKSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFRyYW5zbGF0aW9ucyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnPy5zb3J0Py5sYWJlbCkge1xuICAgICAgY29uZmlnLnNvcnQubGFiZWwgPSBfdChjb25maWcuc29ydC5sYWJlbCk7XG4gICAgICBjb25maWcuc29ydC5vcHRpb25zID0gY29uZmlnLnNvcnQub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHtcbiAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICBsYWJlbDogX3Qob3B0aW9uLmxhYmVsKVxuICAgICAgfSkpO1xuICAgIH1cbiAgICBbJ3RleHQnLCAnYnV0dG9uJ10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoY29uZmlnLmZhbGxiYWNrKSB7XG4gICAgICAgIGNvbmZpZy5mYWxsYmFja1trZXldID0gX3QoY29uZmlnLmZhbGxiYWNrW2tleV0pO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5rbykge1xuICAgICAgICBjb25maWcua29ba2V5XSA9IF90KGNvbmZpZy5rb1trZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZpbHRlcnNcbiAgICBjb25zdCB7IGZpbHRlcnMgfSA9IHRoaXMucGFnZUNvbmZpZztcbiAgICBpZiAoZmlsdGVycykge1xuICAgICAgZmlsdGVycy50aXRsZSA9IF90KGZpbHRlcnMudGl0bGUpO1xuICAgICAgT2JqZWN0LmtleXMoZmlsdGVycy5sYWJlbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBmaWx0ZXJzLmxhYmVsc1trZXldID0gX3QoZmlsdGVycy5sYWJlbHNba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgdG90YWxfY291bnQ6IHRvdGFsQ291bnQsIG9mZnNldCwgbGltaXQgfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogcGFnaW5hdGlvbkNvbmZpZyB9ID0gdGhpcy5wYWdlQ29uZmlnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbENvdW50IC8gbGltaXQpLFxuICAgICAgY3VycmVudFBhZ2U6IChvZmZzZXQgKyBsaW1pdCkgLyBsaW1pdCxcbiAgICAgIHBhZ2VMaW1pdDogcGFnaW5hdGlvbkNvbmZpZy5saW1pdCxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIGxhYmVsOiBwYWdpbmF0aW9uQ29uZmlnLnNlbGVjdExhYmVsID8gX3QocGFnaW5hdGlvbkNvbmZpZy5zZWxlY3RMYWJlbCkgOiBudWxsLFxuICAgICAgICBsaXN0OiBwYWdpbmF0aW9uQ29uZmlnLm9wdGlvbnMsXG4gICAgICAgIGFjdGl2ZTogbGltaXQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==