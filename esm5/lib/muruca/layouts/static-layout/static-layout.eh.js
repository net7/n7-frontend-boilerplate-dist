import { __extends } from "tslib";
import { Subject } from 'rxjs';
import { EventHandler } from '@n7-frontend/core';
import { takeUntil, switchMap, tap } from 'rxjs/operators';
import { LayoutState } from '../../services/layout-state.service';
var MrStaticLayoutEH = /** @class */ (function (_super) {
    __extends(MrStaticLayoutEH, _super);
    function MrStaticLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroy$ = new Subject();
        return _this;
    }
    MrStaticLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-static-layout.init':
                    _this.route = payload.route;
                    _this.router = payload.router;
                    _this.layoutState = payload.layoutState;
                    _this.dataSource.onInit(payload);
                    // listen route
                    _this.listenRoute();
                    break;
                case 'mr-static-layout.destroy':
                    _this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    };
    MrStaticLayoutEH.prototype.listenRoute = function () {
        var _this = this;
        this.route.url.pipe(takeUntil(this.destroy$), tap(function () {
            _this.layoutState.set('content', LayoutState.LOADING);
        }), switchMap(function (urlSegments) { return _this.dataSource.pageRequest$(urlSegments, function (err) {
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
            console.warn("Error loading static layout for " + urlSegments, err.message);
            _this.layoutState.set('content', LayoutState.ERROR);
        }); })).subscribe(function (response) {
            _this.layoutState.set('content', LayoutState.SUCCESS);
            _this.dataSource.handleResponse(response);
        });
    };
    return MrStaticLayoutEH;
}(EventHandler));
export { MrStaticLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBd0IsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHeEY7SUFBc0Msb0NBQVk7SUFBbEQ7UUFBQSxxRUE0REM7UUFuRFMsY0FBUSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQW1EbEQsQ0FBQztJQWpEUSxpQ0FBTSxHQUFiO1FBQUEsaUJBc0JDO1FBckJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO29CQUN2QyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFaEMsZUFBZTtvQkFDZixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLE1BQU07Z0JBRVIsS0FBSywwQkFBMEI7b0JBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sc0NBQVcsR0FBbkI7UUFBQSxpQkF3QkM7UUF2QkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUNqQixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixHQUFHLENBQUM7WUFDRixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxVQUFDLFdBQXlCLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FDbkUsV0FBVyxFQUNYLFVBQUMsR0FBc0I7WUFDckIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIseUJBQXlCO2dCQUNqQixJQUFBLDRCQUFNLENBQWlCO2dCQUMvQixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBUTt3QkFBTixjQUFJO29CQUFPLE9BQUEsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsRUFBRSxNQUFLLFVBQVU7Z0JBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDcEUsSUFBTSxPQUFPLEdBQUcsQ0FBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsSUFBSSxLQUFJLFVBQVUsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxxQ0FBbUMsV0FBYSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1RSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FDRixFQWJ3QyxDQWF4QyxDQUFDLENBQ0gsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO1lBQ25CLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBNURELENBQXNDLFlBQVksR0E0RGpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSwgTGF5b3V0U3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNclN0YXRpY0xheW91dERTIH0gZnJvbSAnLi9zdGF0aWMtbGF5b3V0LmRzJztcblxuZXhwb3J0IGNsYXNzIE1yU3RhdGljTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcblxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xuXG4gIHB1YmxpYyBkYXRhU291cmNlOiBNclN0YXRpY0xheW91dERTO1xuXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xuXG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLXN0YXRpYy1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcbiAgICAgICAgICB0aGlzLmxheW91dFN0YXRlID0gcGF5bG9hZC5sYXlvdXRTdGF0ZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuXG4gICAgICAgICAgLy8gbGlzdGVuIHJvdXRlXG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXN0YXRpYy1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlblJvdXRlKCkge1xuICAgIHRoaXMucm91dGUudXJsLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLkxPQURJTkcpO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHVybFNlZ21lbnRzOiBVcmxTZWdtZW50W10pID0+IHRoaXMuZGF0YVNvdXJjZS5wYWdlUmVxdWVzdCQoXG4gICAgICAgIHVybFNlZ21lbnRzLFxuICAgICAgICAoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgIC8vIGdldHRpbmcgbm90IGZvdW5kIHBhdGhcbiAgICAgICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnJvdXRlcjtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlNDA0ID0gY29uZmlnLmZpbmQoKHsgZGF0YSB9KSA9PiBkYXRhPy5pZCA9PT0gJ3BhZ2UtNDA0Jyk7XG4gICAgICAgICAgICBjb25zdCBwYXRoNDA0ID0gcm91dGU0MDQ/LnBhdGggfHwgJ3BhZ2UtNDA0JztcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwYXRoNDA0XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgbG9hZGluZyBzdGF0aWMgbGF5b3V0IGZvciAke3VybFNlZ21lbnRzfWAsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB0aGlzLmxheW91dFN0YXRlLnNldCgnY29udGVudCcsIExheW91dFN0YXRlLkVSUk9SKTtcbiAgICAgICAgfVxuICAgICAgKSlcbiAgICApLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0U3RhdGUuc2V0KCdjb250ZW50JywgTGF5b3V0U3RhdGUuU1VDQ0VTUyk7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=