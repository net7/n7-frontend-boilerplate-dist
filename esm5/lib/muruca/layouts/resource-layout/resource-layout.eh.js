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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3Jlc291cmNlLWxheW91dC9yZXNvdXJjZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFDTCxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQy9CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUF3QixXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd4RjtJQUF3QyxzQ0FBWTtJQUFwRDtRQUFBLHFFQTJGQztRQWxGUyxjQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBa0ZsRCxDQUFDO0lBaEZRLG1DQUFNLEdBQWI7UUFBQSxpQkFvREM7UUFuREMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQUU7d0JBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUM3QixLQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7d0JBQ25DLElBQUEsZ0NBQXlDLEVBQXZDLGNBQUksRUFBRSxVQUFpQyxDQUFDO3dCQUN4QyxJQUFBLDhCQUFHLENBQXlCO3dCQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENB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QUMsRUFBUTt3QkFBTixjQUFJO29CQUFPLE9BQUEsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsRUFBRSxNQUFLLFVBQVU7Z0JBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDcEUsSUFBTSxPQUFPLEdBQUcsQ0FBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsSUFBSSxLQUFJLFVBQVUsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBcUMsRUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsRUFYZ0IsQ0FXaEIsQ0FBQyxDQUNKLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNuQixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLGFBQWE7WUFDYixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUEzRkQsQ0FBd0MsWUFBWSxHQTJGbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1NYXAsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICB0YWtlVW50aWwsIHN3aXRjaE1hcCwgbWFwLCB0YXBcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UsIExheW91dFN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJSZXNvdXJjZU1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Jlc291cmNlLW1vZGFsLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJSZXNvdXJjZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XG5cbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcblxuICBwcml2YXRlIG1vZGFsU2VydmljZTogTXJSZXNvdXJjZU1vZGFsU2VydmljZTtcblxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQuaW5pdCc6IHtcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xuICAgICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlID0gcGF5bG9hZC5tb2RhbFNlcnZpY2U7XG4gICAgICAgICAgY29uc3QgeyBzbHVnLCBpZCB9ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXM7XG4gICAgICAgICAgY29uc3QgeyB1cmwgfSA9IHRoaXMucm91dGUuc25hcHNob3Q7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRhYiA9IHVybFt1cmwubGVuZ3RoIC0gMV0ucGF0aDtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2x1ZyA9IHNsdWc7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmlkID0gaWQ7XG4gICAgICAgICAgdGhpcy5sYXlvdXRTdGF0ZSA9IHBheWxvYWQubGF5b3V0U3RhdGU7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XG4gICAgICAgICAgLy8gc2Nyb2xsIHRvcFxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcblxuICAgICAgICAgIC8vIGVtaXQgc2lnbmFsXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2luaXQnKTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGlmICh0eXBlLmluZGV4T2YoJ29wZW5yZXNvdXJjZW1vZGFsJykgIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIHR5cGU6IHJlc291cmNlVHlwZSB9ID0gcGF5bG9hZDtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihpZCwgcmVzb3VyY2VUeXBlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlLmluZGV4T2YoJ3RodW1iY2xpY2snKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgW3NvdXJjZUlkXSA9IHR5cGUuc3BsaXQoJy4nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBzb3VyY2VJZC5yZXBsYWNlKCctdG9vbHMnLCAnJyk7XG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCd0aHVtYmNsaWNrJywge1xuICAgICAgICAgIHRhcmdldElkLFxuICAgICAgICAgIHRodW1iaW5kZXg6IHBheWxvYWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdwYWdlY2hhbmdlJykgIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IFtzb3VyY2VJZF0gPSB0eXBlLnNwbGl0KCcuJyk7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gYCR7c291cmNlSWR9LXRvb2xzYDtcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2VjaGFuZ2UnLCB7XG4gICAgICAgICAgdGFyZ2V0SWQsXG4gICAgICAgICAgZXZlbnREYXRhOiBwYXlsb2FkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLkxPQURJTkcpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHBhcmFtczogUGFyYW1NYXApID0+IHBhcmFtcy5nZXQoJ2lkJykpLFxuICAgICAgc3dpdGNoTWFwKChpZCkgPT4gdGhpcy5kYXRhU291cmNlLnBhZ2VSZXF1ZXN0JChpZCwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgLy8gZ2V0dGluZyBub3QgZm91bmQgcGF0aFxuICAgICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnJvdXRlcjtcbiAgICAgICAgICBjb25zdCByb3V0ZTQwNCA9IGNvbmZpZy5maW5kKCh7IGRhdGEgfSkgPT4gZGF0YT8uaWQgPT09ICdwYWdlLTQwNCcpO1xuICAgICAgICAgIGNvbnN0IHBhdGg0MDQgPSByb3V0ZTQwND8ucGF0aCB8fCAncGFnZS00MDQnO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwYXRoNDA0XSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS53YXJuKGBFcnJvciBsb2FkaW5nIHJlc291cmNlIGxheW91dCBmb3IgJHtpZH1gLCBlcnIubWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5pZCA9IGlkO1xuICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLkVSUk9SKTtcbiAgICAgIH0pKVxuICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRTdGF0ZS5zZXQoJ2NvbnRlbnQnLCBMYXlvdXRTdGF0ZS5TVUNDRVNTKTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAvLyBzY3JvbGwgdG9wXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==