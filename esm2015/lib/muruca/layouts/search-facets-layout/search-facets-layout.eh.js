import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, filter } from 'rxjs/operators';
import { INPUT_STATE_CONTEXT, FACET_STATE_CONTEXT, FACETS_REQUEST_STATE_CONTEXT, } from '../../services/search.service';
export class SearchFacetsLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.changed$ = {};
        this.destroyed$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-search-facets-layout.init':
                    this.searchService = payload.searchService;
                    // listeners
                    this.initChangedListener(this.searchService.getConfig());
                    this.initStateListener();
                    // init
                    this.dataSource.onInit(payload);
                    this.emitOuter('facetloaded');
                    break;
                case 'mr-search-facets-layout.destroy':
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            if (type.indexOf('change')) {
                this.changed$[payload.id].next(payload);
            }
        });
    }
    initChangedListener({ facets }) {
        facets.sections.forEach((section) => {
            const sources = [];
            if (section.header) {
                const { id, delay } = section.header;
                sources.push({ id, delay });
            }
            section.inputs.forEach(({ id, delay }) => {
                sources.push({ id, delay });
            });
            sources.forEach((source) => {
                this.changed$[source.id] = new Subject();
                this.changed$[source.id].pipe(debounceTime(source.delay || 1)).subscribe(({ id, value }) => {
                    this.searchService.setState(INPUT_STATE_CONTEXT, id, value);
                });
            });
        });
    }
    initStateListener() {
        // listener for input updates
        this.searchService.getState$(INPUT_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$), filter(({ lastUpdated }) => this.dataSource.inputsDS[lastUpdated])).subscribe(({ lastUpdated, state }) => {
            const newValue = state[lastUpdated];
            if (newValue === null) {
                this.dataSource.clearInput(lastUpdated);
            }
            else {
                this.dataSource.updateInputValue(lastUpdated, newValue);
            }
        });
        // listener for facet updates
        this.searchService.getState$(FACET_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$), filter(({ lastUpdated }) => this.dataSource.inputsDS[lastUpdated])).subscribe(({ lastUpdated, state }) => {
            const newData = state[lastUpdated];
            this.dataSource.updateInputData(lastUpdated, newData);
        });
        // listener for facet header updates
        this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success')
            .pipe(takeUntil(this.destroyed$)).subscribe((response) => {
            const { facets } = response;
            Object.keys(facets).forEach((id) => {
                const { total_count: totalCount } = facets[id];
                this.dataSource.updateInputValue(`header-${id}`, totalCount);
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUVMLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsNEJBQTRCLEdBQzdCLE1BQU0sK0JBQStCLENBQUM7QUFNdkMsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFlBQVk7SUFBdEQ7O1FBQ0UsYUFBUSxHQUFvQixFQUFFLENBQUM7UUFFdkIsZUFBVSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBK0Z2RCxDQUFDO0lBM0ZRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw4QkFBOEI7b0JBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsWUFBWTtvQkFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsT0FBTztvQkFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFNB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bUJBQW1CLENBQUM7YUFDOUMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQzFCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ25FLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNyQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO1FBRUwsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQzthQUNsRSxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN2QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQ2pDLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBNclNlYXJjaFNlcnZpY2UsXG4gIElOUFVUX1NUQVRFX0NPTlRFWFQsXG4gIEZBQ0VUX1NUQVRFX0NPTlRFWFQsXG4gIEZBQ0VUU19SRVFVRVNUX1NUQVRFX0NPTlRFWFQsXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuaW50ZXJmYWNlIENoYW5nZWRTdWJqZWN0cyB7XG4gIFtrZXk6IHN0cmluZ106IFN1YmplY3Q8YW55Pjtcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgY2hhbmdlZCQ6IENoYW5nZWRTdWJqZWN0cyA9IHt9O1xuXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gcGF5bG9hZC5zZWFyY2hTZXJ2aWNlO1xuICAgICAgICAgIC8vIGxpc3RlbmVyc1xuICAgICAgICAgIHRoaXMuaW5pdENoYW5nZWRMaXN0ZW5lcih0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCkpO1xuICAgICAgICAgIHRoaXMuaW5pdFN0YXRlTGlzdGVuZXIoKTtcbiAgICAgICAgICAvLyBpbml0XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRsb2FkZWQnKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtZmFjZXRzLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdjaGFuZ2UnKSkge1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3BheWxvYWQuaWRdLm5leHQocGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0Q2hhbmdlZExpc3RlbmVyKHsgZmFjZXRzIH0pIHtcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc291cmNlczoge1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICBkZWxheTogbnVtYmVyO1xuICAgICAgfVtdID0gW107XG5cbiAgICAgIGlmIChzZWN0aW9uLmhlYWRlcikge1xuICAgICAgICBjb25zdCB7IGlkLCBkZWxheSB9ID0gc2VjdGlvbi5oZWFkZXI7XG4gICAgICAgIHNvdXJjZXMucHVzaCh7IGlkLCBkZWxheSB9KTtcbiAgICAgIH1cbiAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKHsgaWQsIGRlbGF5IH0pID0+IHtcbiAgICAgICAgc291cmNlcy5wdXNoKHsgaWQsIGRlbGF5IH0pO1xuICAgICAgfSk7XG4gICAgICBzb3VyY2VzLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3NvdXJjZS5pZF0gPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3NvdXJjZS5pZF0ucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoc291cmNlLmRlbGF5IHx8IDEpXG4gICAgICAgICkuc3Vic2NyaWJlKCh7IGlkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKElOUFVUX1NUQVRFX0NPTlRFWFQsIGlkLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0U3RhdGVMaXN0ZW5lcigpIHtcbiAgICAvLyBsaXN0ZW5lciBmb3IgaW5wdXQgdXBkYXRlc1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMuZGF0YVNvdXJjZS5pbnB1dHNEU1tsYXN0VXBkYXRlZF0pXG4gICAgICApLnN1YnNjcmliZSgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHN0YXRlW2xhc3RVcGRhdGVkXTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsZWFySW5wdXQobGFzdFVwZGF0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVJbnB1dFZhbHVlKGxhc3RVcGRhdGVkLCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuZXIgZm9yIGZhY2V0IHVwZGF0ZXNcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKEZBQ0VUX1NUQVRFX0NPTlRFWFQpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLmRhdGFTb3VyY2UuaW5wdXRzRFNbbGFzdFVwZGF0ZWRdKVxuICAgICAgKS5zdWJzY3JpYmUoKHsgbGFzdFVwZGF0ZWQsIHN0YXRlIH0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHN0YXRlW2xhc3RVcGRhdGVkXTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0RGF0YShsYXN0VXBkYXRlZCwgbmV3RGF0YSk7XG4gICAgICB9KTtcblxuICAgIC8vIGxpc3RlbmVyIGZvciBmYWNldCBoZWFkZXIgdXBkYXRlc1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXG4gICAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgeyBmYWNldHMgfSA9IHJlc3BvbnNlO1xuICAgICAgICBPYmplY3Qua2V5cyhmYWNldHMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB0b3RhbF9jb3VudDogdG90YWxDb3VudCB9ID0gZmFjZXRzW2lkXTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRWYWx1ZShgaGVhZGVyLSR7aWR9YCwgdG90YWxDb3VudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==