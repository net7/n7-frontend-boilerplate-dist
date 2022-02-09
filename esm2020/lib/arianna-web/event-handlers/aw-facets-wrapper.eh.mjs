import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class AwFacetsWrapperEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.internalFacetsChange$ = new Subject();
        this.externalFacetsChange$ = new Subject();
    }
    listen() {
        // listen to inner (widget) events
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'facets-wrapper.facet':
                    {
                        // empty payload control
                        if (!payload.eventPayload.inputPayload) {
                            return;
                        }
                        const { facetId, value } = payload.eventPayload.inputPayload;
                        if (value === '__loading__') {
                            return;
                        }
                        const input = this.dataSource.getInputByFacetId(facetId);
                        const context = input.getContext();
                        // update
                        this.dataSource.onFacetChange(payload);
                        // internal
                        if (context === 'internal') {
                            this.internalFacetsChange$.next(input.getTarget());
                            // external
                        }
                        else {
                            this.externalFacetsChange$.next(facetId);
                        }
                    }
                    break;
                case 'facets-wrapper.facetheader':
                    this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            if (type.indexOf('queryparamschange') !== -1 && this.dataSource.searchModel) {
                this.dataSource.updateFiltersFromQueryParams(payload);
                this.dataSource.updateInputsFromFilters();
            }
        });
        // listen to global events
        EventHandler.globalEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'global.searchresponse':
                    if (this.dataSource.searchModel && this.dataSource.searchModel.getId() === payload) {
                        this.dataSource.updateInputLinks();
                        const internalFilters = this.dataSource.searchModel.getInternalFilters();
                        internalFilters.forEach((filter) => {
                            const input = this.dataSource.searchModel.getInputByFacetId(filter.facetId);
                            const target = input.getTarget();
                            // this.dataSource.filterTarget(target);
                            this.dataSource.updateFilteredTarget(target);
                        });
                    }
                    break;
                default:
                    break;
            }
        });
        // internal facets change
        this.externalFacetsChange$.pipe(debounceTime(500)).subscribe((facetId) => {
            const requestParams = this.dataSource.getRequestParams();
            const queryParams = this.dataSource.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((key) => { queryParams[key] = queryParams[key] || null; });
            // signal
            this.emitOuter('facetschange', { facetId });
            // reset page
            queryParams.page = 1;
            // router signal
            this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams,
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9hdy1mYWNldHMtd3JhcHBlci5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFlBQVk7SUFBbkQ7O1FBQ1MsMEJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFcEQsMEJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUEyRjdELENBQUM7SUF6RlEsTUFBTTtRQUNYLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxzQkFBc0I7b0JBQUU7d0JBQzNCLHdCQUF3Qjt3QkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFOzRCQUN0QyxPQUFPO3lCQUNSO3dCQUNELE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7d0JBQzdELElBQUksS0FBSyxLQUFLLGFBQWEsRUFBRTs0QkFDM0IsT0FBTzt5QkFDUjt3QkFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6RCxNQUFNLE9BQU8sR0FBRyxLQUFLLENB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QUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFFNUMsYUFBYTtZQUNiLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLGdCQUFnQjtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLElBQUksRUFBRSxFQUFFO2dCQUNSLFdBQVc7YUFDWixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdGYWNldHNXcmFwcGVyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBpbnRlcm5hbEZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBleHRlcm5hbEZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICAvLyBsaXN0ZW4gdG8gaW5uZXIgKHdpZGdldCkgZXZlbnRzXHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2ZhY2V0cy13cmFwcGVyLmZhY2V0Jzoge1xyXG4gICAgICAgICAgLy8gZW1wdHkgcGF5bG9hZCBjb250cm9sXHJcbiAgICAgICAgICBpZiAoIXBheWxvYWQuZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCB7IGZhY2V0SWQsIHZhbHVlIH0gPSBwYXlsb2FkLmV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQ7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPT09ICdfX2xvYWRpbmdfXycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCk7XHJcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gaW5wdXQuZ2V0Q29udGV4dCgpO1xyXG5cclxuICAgICAgICAgIC8vIHVwZGF0ZVxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRmFjZXRDaGFuZ2UocGF5bG9hZCk7XHJcblxyXG4gICAgICAgICAgLy8gaW50ZXJuYWxcclxuICAgICAgICAgIGlmIChjb250ZXh0ID09PSAnaW50ZXJuYWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGYWNldHNDaGFuZ2UkLm5leHQoaW5wdXQuZ2V0VGFyZ2V0KCkpO1xyXG4gICAgICAgICAgICAvLyBleHRlcm5hbFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5leHRlcm5hbEZhY2V0c0NoYW5nZSQubmV4dChmYWNldElkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRoZWFkZXInOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZUdyb3VwKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdxdWVyeXBhcmFtc2NoYW5nZScpICE9PSAtMSAmJiB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhwYXlsb2FkKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGlzdGVuIHRvIGdsb2JhbCBldmVudHNcclxuICAgIEV2ZW50SGFuZGxlci5nbG9iYWxFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnZ2xvYmFsLnNlYXJjaHJlc3BvbnNlJzpcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwgJiYgdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElkKCkgPT09IHBheWxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0TGlua3MoKTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxGaWx0ZXJzID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEludGVybmFsRmlsdGVycygpO1xyXG5cclxuICAgICAgICAgICAgaW50ZXJuYWxGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKGZpbHRlci5mYWNldElkKTtcclxuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBpbnB1dC5nZXRUYXJnZXQoKTtcclxuICAgICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW50ZXJuYWwgZmFjZXRzIGNoYW5nZVxyXG4gICAgdGhpcy5leHRlcm5hbEZhY2V0c0NoYW5nZSQucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICApLnN1YnNjcmliZSgoZmFjZXRJZCkgPT4ge1xyXG4gICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5kYXRhU291cmNlLmdldFJlcXVlc3RQYXJhbXMoKTtcclxuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyc0FzUXVlcnlQYXJhbXMocmVxdWVzdFBhcmFtcy5maWx0ZXJzKTtcclxuXHJcbiAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHsgcXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV0gfHwgbnVsbDsgfSk7XHJcbiAgICAgIC8vIHNpZ25hbFxyXG4gICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzY2hhbmdlJywgeyBmYWNldElkIH0pO1xyXG5cclxuICAgICAgLy8gcmVzZXQgcGFnZVxyXG4gICAgICBxdWVyeVBhcmFtcy5wYWdlID0gMTtcclxuXHJcbiAgICAgIC8vIHJvdXRlciBzaWduYWxcclxuICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcclxuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICBwYXRoOiBbXSxcclxuICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19