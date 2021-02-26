import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { takeUntil, switchMap, map, tap } from 'rxjs/operators';
import { LayoutState } from '../../services/layout-state.service';
var MrResourceLayoutEH = /** @class */ (function (_super) {
    __extends(MrResourceLayoutEH, _super);
    function MrResourceLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroy$ = new Subject();
        return _this;
    }
    MrResourceLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-resource-layout.init':
                    {
                        _this.route = payload.route;
                        _this.router = payload.router;
                        _this.modalService = payload.modalService;
                        var _b = _this.route.snapshot.params, slug = _b.slug, id = _b.id;
                        var url = _this.route.snapshot.url;
                        _this.dataSource.tab = url[url.length - 1].path;
                        _this.dataSource.slug = slug;
                        _this.dataSource.id = id;
                        _this.layoutState = payload.layoutState;
                        _this.dataSource.onInit(payload);
                        _this.listenRoute();
                    }
                    break;
                case 'mr-resource-layout.destroy':
                    _this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type.indexOf('openresourcemodal') !== -1) {
                var id = payload.id, resourceType = payload.type;
                _this.modalService.open(id, resourceType);
            }
        });
    };
    MrResourceLayoutEH.prototype.listenRoute = function () {
        var _this = this;
        this.route.paramMap.pipe(takeUntil(this.destroy$), tap(function () {
            _this.layoutState.set('content', LayoutState.LOADING);
        }), map(function (params) { return params.get('id'); }), switchMap(function (id) { return _this.dataSource.pageRequest$(id, function (err) {
            if (err.status === 404) {
                // getting not found path
                var config = _this.router.config;
                var route404 = config.find(function (_a) {
                    var data = _a.data;
                    return (data === null || data === void 0 ? void 0 : data.id) === 'page-404';
                });
                var path404 = (route404 === null || route404 === void 0 ? void 0 : route404.path) || 'page-404';
                _this.router.navigate([path404]);
            }
            console.warn("Error loading resource layout for " + id, err.message);
            _this.dataSource.id = id;
            _this.layoutState.set('content', LayoutState.ERROR);
        }); })).subscribe(function (response) {
            _this.layoutState.set('content', LayoutState.SUCCESS);
            _this.dataSource.handleResponse(response);
        });
    };
    return MrResourceLayoutEH;
}(EventHandler));
export { MrResourceLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFDTCxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQy9CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUF3QixXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd4RjtJQUF3QyxzQ0FBWTtJQUFwRDtRQUFBLHFFQW9FQztRQTNEUyxjQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBMkRsRCxDQUFDO0lBekRRLG1DQUFNLEdBQWI7UUFBQSxpQkErQkM7UUE5QkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQUU7d0JBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUM3QixLQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7d0JBQ25DLElBQUEsZ0NBQXlDLEVBQXZDLGNBQUksRUFBRSxVQUFpQyxDQUFDO3dCQUN4QyxJQUFBLDhCQUFHLENBQXlCO3dCQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENB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LENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFwRUQsQ0FBd0MsWUFBWSxHQW9FbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbU1hcCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIHRha2VVbnRpbCwgc3dpdGNoTWFwLCBtYXAsIHRhcFxyXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UsIExheW91dFN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNclJlc291cmNlTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzb3VyY2UtbW9kYWwuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNclJlc291cmNlTW9kYWxTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LmluaXQnOiB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XHJcbiAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZSA9IHBheWxvYWQubW9kYWxTZXJ2aWNlO1xyXG4gICAgICAgICAgY29uc3QgeyBzbHVnLCBpZCB9ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXM7XHJcbiAgICAgICAgICBjb25zdCB7IHVybCB9ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdDtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50YWIgPSB1cmxbdXJsLmxlbmd0aCAtIDFdLnBhdGg7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2x1ZyA9IHNsdWc7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaWQgPSBpZDtcclxuICAgICAgICAgIHRoaXMubGF5b3V0U3RhdGUgPSBwYXlsb2FkLmxheW91dFN0YXRlO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlLmluZGV4T2YoJ29wZW5yZXNvdXJjZW1vZGFsJykgIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCwgdHlwZTogcmVzb3VyY2VUeXBlIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oaWQsIHJlc291cmNlVHlwZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcclxuICAgIHRoaXMucm91dGUucGFyYW1NYXAucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuTE9BRElORyk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBtYXAoKHBhcmFtczogUGFyYW1NYXApID0+IHBhcmFtcy5nZXQoJ2lkJykpLFxyXG4gICAgICBzd2l0Y2hNYXAoKGlkKSA9PiB0aGlzLmRhdGFTb3VyY2UucGFnZVJlcXVlc3QkKGlkLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgLy8gZ2V0dGluZyBub3QgZm91bmQgcGF0aFxyXG4gICAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucm91dGVyO1xyXG4gICAgICAgICAgY29uc3Qgcm91dGU0MDQgPSBjb25maWcuZmluZCgoeyBkYXRhIH0pID0+IGRhdGE/LmlkID09PSAncGFnZS00MDQnKTtcclxuICAgICAgICAgIGNvbnN0IHBhdGg0MDQgPSByb3V0ZTQwND8ucGF0aCB8fCAncGFnZS00MDQnO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3BhdGg0MDRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBFcnJvciBsb2FkaW5nIHJlc291cmNlIGxheW91dCBmb3IgJHtpZH1gLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5zZXQoJ2NvbnRlbnQnLCBMYXlvdXRTdGF0ZS5FUlJPUik7XHJcbiAgICAgIH0pKVxyXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuU1VDQ0VTUyk7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19