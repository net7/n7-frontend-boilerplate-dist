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
                        // scroll top
                        window.scrollTo(0, 0);
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
            // scroll top
            window.scrollTo(0, 0);
        });
    };
    return MrResourceLayoutEH;
}(EventHandler));
export { MrResourceLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFDTCxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQy9CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUF3QixXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd4RjtJQUF3QyxzQ0FBWTtJQUFwRDtRQUFBLHFFQXdFQztRQS9EUyxjQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBK0RsRCxDQUFDO0lBN0RRLG1DQUFNLEdBQWI7UUFBQSxpQkFpQ0M7UUFoQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQUU7d0JBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUM3QixLQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7d0JBQ25DLElBQUEsZ0NBQXlDLEVBQXZDLGNBQUksRUFBRSxVQUFpQyxDQUFDO3dCQUN4QyxJQUFBLDhCQUFHLENBQXlCO3dCQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENB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QVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxhQUFhO1lBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBeEVELENBQXdDLFlBQVksR0F3RW5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtTWFwLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgdGFrZVVudGlsLCBzd2l0Y2hNYXAsIG1hcCwgdGFwXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlLCBMYXlvdXRTdGF0ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yUmVzb3VyY2VNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXNvdXJjZS1tb2RhbC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE1yUmVzb3VyY2VMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xuXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1yUmVzb3VyY2VNb2RhbFNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LmluaXQnOiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcbiAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZSA9IHBheWxvYWQubW9kYWxTZXJ2aWNlO1xuICAgICAgICAgIGNvbnN0IHsgc2x1ZywgaWQgfSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zO1xuICAgICAgICAgIGNvbnN0IHsgdXJsIH0gPSB0aGlzLnJvdXRlLnNuYXBzaG90O1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50YWIgPSB1cmxbdXJsLmxlbmd0aCAtIDFdLnBhdGg7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNsdWcgPSBzbHVnO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pZCA9IGlkO1xuICAgICAgICAgIHRoaXMubGF5b3V0U3RhdGUgPSBwYXlsb2FkLmxheW91dFN0YXRlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpO1xuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdvcGVucmVzb3VyY2Vtb2RhbCcpICE9PSAtMSkge1xuICAgICAgICBjb25zdCB7IGlkLCB0eXBlOiByZXNvdXJjZVR5cGUgfSA9IHBheWxvYWQ7XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oaWQsIHJlc291cmNlVHlwZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlblJvdXRlKCkge1xuICAgIHRoaXMucm91dGUucGFyYW1NYXAucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuTE9BRElORyk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocGFyYW1zOiBQYXJhbU1hcCkgPT4gcGFyYW1zLmdldCgnaWQnKSksXG4gICAgICBzd2l0Y2hNYXAoKGlkKSA9PiB0aGlzLmRhdGFTb3VyY2UucGFnZVJlcXVlc3QkKGlkLCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAvLyBnZXR0aW5nIG5vdCBmb3VuZCBwYXRoXG4gICAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucm91dGVyO1xuICAgICAgICAgIGNvbnN0IHJvdXRlNDA0ID0gY29uZmlnLmZpbmQoKHsgZGF0YSB9KSA9PiBkYXRhPy5pZCA9PT0gJ3BhZ2UtNDA0Jyk7XG4gICAgICAgICAgY29uc3QgcGF0aDQwNCA9IHJvdXRlNDA0Py5wYXRoIHx8ICdwYWdlLTQwNCc7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3BhdGg0MDRdKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4oYEVycm9yIGxvYWRpbmcgcmVzb3VyY2UgbGF5b3V0IGZvciAke2lkfWAsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuRVJST1IpO1xuICAgICAgfSkpXG4gICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLlNVQ0NFU1MpO1xuICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIC8vIHNjcm9sbCB0b3BcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9KTtcbiAgfVxufVxuIl19