import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { isEmpty } from 'lodash';
import { LayoutState } from '../../services/layout-state.service';
export class MrAdvancedResultsLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-advanced-results-layout.init':
                    this.activatedRoute = payload.activatedRoute;
                    this.router = payload.router;
                    this.layoutState = payload.layoutState;
                    this.dataSource.onInit(payload);
                    // listen route changes
                    this.listenToRouterChanges();
                    break;
                case 'mr-advanced-results-layout.destroy':
                    this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'n7-smart-pagination.click':
                    this.updateRouter({ page: payload.page });
                    break;
                case 'n7-smart-pagination.change':
                    this.updateRouter({ limit: payload.value });
                    break;
                case 'mr-search-results-title.change':
                    this.updateRouter({ sort: payload.value });
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
    /** URL changes */
    listenToRouterChanges() {
        this.activatedRoute.queryParams.pipe(takeUntil(this.destroy$), tap(() => {
            this.layoutState.set('results', LayoutState.LOADING);
        }), switchMap((params) => this.dataSource.request$(params, (error) => {
            console.warn('Advanced search error', error);
            this.layoutState.set('results', LayoutState.ERROR);
        }))).subscribe((response) => {
            this.dataSource.handleResponse(response);
            this.layoutState.set('results', isEmpty(response.results) ? LayoutState.EMPTY : LayoutState.SUCCESS);
        });
    }
    updateRouter(queryParams) {
        this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge'
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQvYWR2YW5jZWQtcmVzdWx0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQXdCLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXhGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxZQUFZO0lBQTNEOztRQU9ZLGFBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXVFcEQsQ0FBQztJQW5FUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssaUNBQWlDO29CQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7b0JBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO29CQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFaEMsdUJBQXVCO29CQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDN0IsTUFBTTtnQkFFUixLQUFLLG9DQUFvQztvQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFFUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDJCQUEyQjtvQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFFUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFFUixLQUFLLGdDQUFnQztvQkFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDM0MsTUFBTTtnQkFFUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0I7SUFDUixxQkFBcUI7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNsQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQy9ELE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUNKLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxZQUFZLENBQUMsV0FBVztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDdkIsV0FBVztZQUNYLG1CQUFtQixFQUFFLE9BQU87U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTIH0gZnJvbSAnLi9hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5kcyc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSwgTGF5b3V0U3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkUmVzdWx0c0xheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcblxuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBkYXRhU291cmNlOiBNckFkdmFuY2VkUmVzdWx0c0xheW91dERTO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLWFkdmFuY2VkLXJlc3VsdHMtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUgPSBwYXlsb2FkLmFjdGl2YXRlZFJvdXRlO1xuICAgICAgICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XG4gICAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZSA9IHBheWxvYWQubGF5b3V0U3RhdGU7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcblxuICAgICAgICAgIC8vIGxpc3RlbiByb3V0ZSBjaGFuZ2VzXG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub1JvdXRlckNoYW5nZXMoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1hZHZhbmNlZC1yZXN1bHRzLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlcih7IHBhZ2U6IHBheWxvYWQucGFnZSB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICduNy1zbWFydC1wYWdpbmF0aW9uLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy51cGRhdGVSb3V0ZXIoeyBsaW1pdDogcGF5bG9hZC52YWx1ZSB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtcmVzdWx0cy10aXRsZS5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyKHsgc29ydDogcGF5bG9hZC52YWx1ZSB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBVUkwgY2hhbmdlcyAqL1xuICBwcm90ZWN0ZWQgbGlzdGVuVG9Sb3V0ZXJDaGFuZ2VzKCkge1xuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdyZXN1bHRzJywgTGF5b3V0U3RhdGUuTE9BRElORyk7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgocGFyYW1zKSA9PiB0aGlzLmRhdGFTb3VyY2UucmVxdWVzdCQocGFyYW1zLCAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBZHZhbmNlZCBzZWFyY2ggZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdyZXN1bHRzJywgTGF5b3V0U3RhdGUuRVJST1IpO1xuICAgICAgfSkpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5zZXQoJ3Jlc3VsdHMnLCBpc0VtcHR5KHJlc3BvbnNlLnJlc3VsdHMpID8gTGF5b3V0U3RhdGUuRU1QVFkgOiBMYXlvdXRTdGF0ZS5TVUNDRVNTKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVSb3V0ZXIocXVlcnlQYXJhbXMpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==