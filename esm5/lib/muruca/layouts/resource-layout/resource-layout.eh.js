import { __extends, __read } from "tslib";
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
                        // emit signal
                        _this.emitOuter('init');
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
            if (type.indexOf('thumbclick') !== -1) {
                var _b = __read(type.split('.'), 1), sourceId = _b[0];
                var targetId = sourceId.replace('-tools', '');
                _this.emitOuter('thumbclick', {
                    targetId: targetId,
                    thumbindex: payload
                });
            }
            if (type.indexOf('pagechange') !== -1) {
                var _c = __read(type.split('.'), 1), sourceId = _c[0];
                var targetId = sourceId + "-tools";
                _this.emitOuter('pagechange', {
                    targetId: targetId,
                    eventData: payload
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFDTCxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQy9CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUF3QixXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd4RjtJQUF3QyxzQ0FBWTtJQUFwRDtRQUFBLHFFQTJGQztRQWxGUyxjQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBa0ZsRCxDQUFDO0lBaEZRLG1DQUFNLEdBQWI7UUFBQSxpQkFvREM7UUFuREMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQUU7d0JBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUM3QixLQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7d0JBQ25DLElBQUEsZ0NBQXlDLEVBQXZDLGNBQUksRUFBRSxVQUFpQyxDQUFDO3dCQUN4QyxJQUFBLDhCQUFHLENBQXlCO3dCQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENB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QUMsRUFBUTt3QkFBTixjQUFJO29CQUFPLE9BQUEsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsRUFBRSxNQUFLLFVBQVU7Z0JBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDcEUsSUFBTSxPQUFPLEdBQUcsQ0FBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsSUFBSSxLQUFJLFVBQVUsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBcUMsRUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsRUFYZ0IsQ0FXaEIsQ0FBQyxDQUNKLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNuQixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLGFBQWE7WUFDYixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUEzRkQsQ0FBd0MsWUFBWSxHQTJGbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbU1hcCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIHRha2VVbnRpbCwgc3dpdGNoTWFwLCBtYXAsIHRhcFxyXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UsIExheW91dFN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNclJlc291cmNlTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVzb3VyY2UtbW9kYWwuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNclJlc291cmNlTW9kYWxTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LmluaXQnOiB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XHJcbiAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZSA9IHBheWxvYWQubW9kYWxTZXJ2aWNlO1xyXG4gICAgICAgICAgY29uc3QgeyBzbHVnLCBpZCB9ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXM7XHJcbiAgICAgICAgICBjb25zdCB7IHVybCB9ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdDtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50YWIgPSB1cmxbdXJsLmxlbmd0aCAtIDFdLnBhdGg7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2x1ZyA9IHNsdWc7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaWQgPSBpZDtcclxuICAgICAgICAgIHRoaXMubGF5b3V0U3RhdGUgPSBwYXlsb2FkLmxheW91dFN0YXRlO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcclxuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcbiAgICAgICAgICAvLyBlbWl0IHNpZ25hbFxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2luaXQnKTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlLmluZGV4T2YoJ29wZW5yZXNvdXJjZW1vZGFsJykgIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCwgdHlwZTogcmVzb3VyY2VUeXBlIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oaWQsIHJlc291cmNlVHlwZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGUuaW5kZXhPZigndGh1bWJjbGljaycpICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IFtzb3VyY2VJZF0gPSB0eXBlLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBzb3VyY2VJZC5yZXBsYWNlKCctdG9vbHMnLCAnJyk7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3RodW1iY2xpY2snLCB7XHJcbiAgICAgICAgICB0YXJnZXRJZCxcclxuICAgICAgICAgIHRodW1iaW5kZXg6IHBheWxvYWRcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdwYWdlY2hhbmdlJykgIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgW3NvdXJjZUlkXSA9IHR5cGUuc3BsaXQoJy4nKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGAke3NvdXJjZUlkfS10b29sc2A7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2VjaGFuZ2UnLCB7XHJcbiAgICAgICAgICB0YXJnZXRJZCxcclxuICAgICAgICAgIGV2ZW50RGF0YTogcGF5bG9hZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLkxPQURJTkcpO1xyXG4gICAgICB9KSxcclxuICAgICAgbWFwKChwYXJhbXM6IFBhcmFtTWFwKSA9PiBwYXJhbXMuZ2V0KCdpZCcpKSxcclxuICAgICAgc3dpdGNoTWFwKChpZCkgPT4gdGhpcy5kYXRhU291cmNlLnBhZ2VSZXF1ZXN0JChpZCwgKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgIC8vIGdldHRpbmcgbm90IGZvdW5kIHBhdGhcclxuICAgICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnJvdXRlcjtcclxuICAgICAgICAgIGNvbnN0IHJvdXRlNDA0ID0gY29uZmlnLmZpbmQoKHsgZGF0YSB9KSA9PiBkYXRhPy5pZCA9PT0gJ3BhZ2UtNDA0Jyk7XHJcbiAgICAgICAgICBjb25zdCBwYXRoNDA0ID0gcm91dGU0MDQ/LnBhdGggfHwgJ3BhZ2UtNDA0JztcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwYXRoNDA0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgbG9hZGluZyByZXNvdXJjZSBsYXlvdXQgZm9yICR7aWR9YCwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuRVJST1IpO1xyXG4gICAgICB9KSlcclxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICAvLyBzY3JvbGwgdG9wXHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=