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
                        this.router = payload.router;
                        this.modalService = payload.modalService;
                        const { slug, id } = this.route.snapshot.params;
                        const { url } = this.route.snapshot;
                        this.dataSource.tab = url[url.length - 1].path;
                        this.dataSource.slug = slug;
                        this.dataSource.id = id;
                        this.layoutState = payload.layoutState;
                        this.dataSource.onInit(payload);
                        this.listenRoute();
                        // scroll top
                        window.scrollTo(0, 0);
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
        this.outerEvents$.subscribe(({ type, payload }) => {
            if (type.indexOf('openresourcemodal') !== -1) {
                const { id, type: resourceType } = payload;
                this.modalService.open(id, resourceType);
            }
        });
    }
    listenRoute() {
        this.route.paramMap.pipe(takeUntil(this.destroy$), tap(() => {
            this.layoutState.set('content', LayoutState.LOADING);
        }), map((params) => params.get('id')), switchMap((id) => this.dataSource.pageRequest$(id, (err) => {
            if (err.status === 404) {
                // getting not found path
                const { config } = this.router;
                const route404 = config.find(({ data }) => (data === null || data === void 0 ? void 0 : data.id) === 'page-404');
                const path404 = (route404 === null || route404 === void 0 ? void 0 : route404.path) || 'page-404';
                this.router.navigate([path404]);
            }
            console.warn(`Error loading resource layout for ${id}`, err.message);
            this.dataSource.id = id;
            this.layoutState.set('content', LayoutState.ERROR);
        }))).subscribe((response) => {
            this.layoutState.set('content', LayoutState.SUCCESS);
            this.dataSource.handleResponse(response);
            // scroll top
            window.scrollTo(0, 0);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUNMLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDL0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQXdCLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR3hGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBQXBEOztRQVNVLGFBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQStEbEQsQ0FBQztJQTdEUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUFFO3dCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO3dCQUN6QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDaEQsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO3dCQUNwQyxJQUFJ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QUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUMsQ0FDSixDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsYUFBYTtZQUNiLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1NYXAsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICB0YWtlVW50aWwsIHN3aXRjaE1hcCwgbWFwLCB0YXBcclxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLCBMYXlvdXRTdGF0ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc291cmNlLW1vZGFsLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yUmVzb3VyY2VMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XHJcblxyXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIG1vZGFsU2VydmljZTogTXJSZXNvdXJjZU1vZGFsU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC5pbml0Jzoge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xyXG4gICAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2UgPSBwYXlsb2FkLm1vZGFsU2VydmljZTtcclxuICAgICAgICAgIGNvbnN0IHsgc2x1ZywgaWQgfSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zO1xyXG4gICAgICAgICAgY29uc3QgeyB1cmwgfSA9IHRoaXMucm91dGUuc25hcHNob3Q7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGFiID0gdXJsW3VybC5sZW5ndGggLSAxXS5wYXRoO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNsdWcgPSBzbHVnO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmlkID0gaWQ7XHJcbiAgICAgICAgICB0aGlzLmxheW91dFN0YXRlID0gcGF5bG9hZC5sYXlvdXRTdGF0ZTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XHJcbiAgICAgICAgICAvLyBzY3JvbGwgdG9wXHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdvcGVucmVzb3VyY2Vtb2RhbCcpICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIHR5cGU6IHJlc291cmNlVHlwZSB9ID0gcGF5bG9hZDtcclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGlkLCByZXNvdXJjZVR5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLkxPQURJTkcpO1xyXG4gICAgICB9KSxcclxuICAgICAgbWFwKChwYXJhbXM6IFBhcmFtTWFwKSA9PiBwYXJhbXMuZ2V0KCdpZCcpKSxcclxuICAgICAgc3dpdGNoTWFwKChpZCkgPT4gdGhpcy5kYXRhU291cmNlLnBhZ2VSZXF1ZXN0JChpZCwgKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgIC8vIGdldHRpbmcgbm90IGZvdW5kIHBhdGhcclxuICAgICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnJvdXRlcjtcclxuICAgICAgICAgIGNvbnN0IHJvdXRlNDA0ID0gY29uZmlnLmZpbmQoKHsgZGF0YSB9KSA9PiBkYXRhPy5pZCA9PT0gJ3BhZ2UtNDA0Jyk7XHJcbiAgICAgICAgICBjb25zdCBwYXRoNDA0ID0gcm91dGU0MDQ/LnBhdGggfHwgJ3BhZ2UtNDA0JztcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwYXRoNDA0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgbG9hZGluZyByZXNvdXJjZSBsYXlvdXQgZm9yICR7aWR9YCwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuRVJST1IpO1xyXG4gICAgICB9KSlcclxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICAvLyBzY3JvbGwgdG9wXHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=