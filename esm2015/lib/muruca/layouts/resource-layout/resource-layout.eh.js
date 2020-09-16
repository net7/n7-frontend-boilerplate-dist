import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil, switchMap, map, tap } from 'rxjs/operators';
import { LayoutState } from '../../services/layout-state.service';
export class MrResourceLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroy$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'mr-resource-layout.init':
                    {
                        this.route = payload.route;
                        const { slug, id } = this.route.snapshot.params;
                        const { url } = this.route.snapshot;
                        this.dataSource.tab = url[url.length - 1].path;
                        this.dataSource.slug = slug;
                        this.dataSource.id = id;
                        this.layoutState = payload.layoutState;
                        this.dataSource.onInit(payload);
                        this.listenRoute();
                    }
                    break;
                case 'mr-resource-layout.destroy':
                    this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    }
    listenRoute() {
        this.route.paramMap.pipe(takeUntil(this.destroy$), tap(() => {
            this.layoutState.set('content', LayoutState.LOADING);
        }), map((params) => params.get('id')), switchMap((id) => this.dataSource.pageRequest$(id, (err) => {
            console.warn(`Error loading resource layout for ${id}`, err.message);
            this.dataSource.id = id;
            this.layoutState.set('content', LayoutState.ERROR);
        }))).subscribe((response) => {
            this.layoutState.set('content', LayoutState.SUCCESS);
            this.dataSource.handleResponse(response);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUNMLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDL0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQXdCLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXhGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBQXBEOztRQUtVLGFBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQTJDbEQsQ0FBQztJQXpDUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUFFO3dCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQzNCLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUNoRCxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3dCQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztxQkFDcEI7b0JBQUMsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsTUFBZ0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUMzQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxJQUFJLENBQUMscUNBQXFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUNKLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbU1hcCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICB0YWtlVW50aWwsIHN3aXRjaE1hcCwgbWFwLCB0YXBcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UsIExheW91dFN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XG5cbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LmluaXQnOiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgY29uc3QgeyBzbHVnLCBpZCB9ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXM7XG4gICAgICAgICAgY29uc3QgeyB1cmwgfSA9IHRoaXMucm91dGUuc25hcHNob3Q7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRhYiA9IHVybFt1cmwubGVuZ3RoIC0gMV0ucGF0aDtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2x1ZyA9IHNsdWc7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmlkID0gaWQ7XG4gICAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZSA9IHBheWxvYWQubGF5b3V0U3RhdGU7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlblJvdXRlKCkge1xuICAgIHRoaXMucm91dGUucGFyYW1NYXAucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuTE9BRElORyk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocGFyYW1zOiBQYXJhbU1hcCkgPT4gcGFyYW1zLmdldCgnaWQnKSksXG4gICAgICBzd2l0Y2hNYXAoKGlkKSA9PiB0aGlzLmRhdGFTb3VyY2UucGFnZVJlcXVlc3QkKGlkLCAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgbG9hZGluZyByZXNvdXJjZSBsYXlvdXQgZm9yICR7aWR9YCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5zZXQoJ2NvbnRlbnQnLCBMYXlvdXRTdGF0ZS5FUlJPUik7XG4gICAgICB9KSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuU1VDQ0VTUyk7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=