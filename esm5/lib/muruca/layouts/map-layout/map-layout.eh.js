import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrMapLayoutEH = /** @class */ (function (_super) {
    __extends(MrMapLayoutEH, _super);
    function MrMapLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrMapLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-map-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.route = payload.route;
                    _this.router = payload.router;
                    _this.location = payload.location;
                    _this.listenRoute();
                    // scroll top
                    window.scrollTo(0, 0);
                    // listen for clicks on the map markers
                    _this.dataSource.mapListener$
                        .subscribe(function (_a) {
                        var markers = _a.markers;
                        markers.on('click', function (_a) {
                            var marker = _a.layer;
                            if (!marker.id)
                                return;
                            var isSelected = marker.getIcon().options.className.includes('selected');
                            if (isSelected) {
                                // navigate to the clicked resource / marker
                                _this.location.go("/map/" + marker.id + "/" + marker.slug);
                                _this.dataSource.updatePageDetails(marker.id);
                            }
                            else {
                                _this.location.go('/map/');
                                _this.dataSource.loadDefaults();
                            }
                        });
                    });
                    break;
                case 'mr-timeline-layout.destroy':
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type;
            switch (type) {
                case 'mr-year-header.closeevent':
                    _this.dataSource.loadDefaults(true);
                    break;
                default:
                    break;
            }
        });
    };
    MrMapLayoutEH.prototype.listenRoute = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var paramId = params.get('id');
            if (paramId) {
                _this.dataSource.currentId = paramId;
                _this.emitOuter('routechanged', paramId);
                _this.dataSource.updatePageDetails(paramId);
            }
            else {
                _this.dataSource.loadDefaults(true);
            }
        });
    };
    return MrMapLayoutEH;
}(EventHandler));
export { MrMapLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9tYXAtbGF5b3V0L21hcC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUFtQyxpQ0FBWTtJQUEvQzs7SUFrRUEsQ0FBQztJQTNEUSw4QkFBTSxHQUFiO1FBQUEsaUJBNkNDO1FBNUNDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssb0JBQW9CO29CQUN2QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDakMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixhQUFhO29CQUNiLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUV0Qix1Q0FBdUM7b0JBQ3ZDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTt5QkFDekIsU0FBUyxDQUFDLFVBQUMsRUFBVzs0QkFBVCxvQkFBTzt3QkFDbkIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxFQUFpQjtnQ0FBZixpQkFBYTs0QkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dDQUFFLE9BQU87NEJBQ3ZCLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDM0UsSUFBSSxVQUFVLEVBQUU7Z0NBQ2QsNENBQTRDO2dDQUM1QyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFRLE1BQU0sQ0FBQyxFQUFFLFNBQUksTUFBTSxDQUFDLElBQU0sQ0FBQyxDQUFDO2dDQUNyRCxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDOUM7aUNBQU07Z0NBQ0wsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7Z0NBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7NkJBQ2hDO3dCQUNILENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNMLE1BQU07Z0JBQ1IsS0FBSyw0QkFBNEI7b0JBQy9CLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUNqQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDJCQUEyQjtvQkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25DLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sbUNBQVcsR0FBbkI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDbkMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBbEVELENBQW1DLFlBQVksR0FrRTlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNck1hcExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XG5cbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1tYXAtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XG4gICAgICAgICAgLy8gc2Nyb2xsIHRvcFxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcblxuICAgICAgICAgIC8vIGxpc3RlbiBmb3IgY2xpY2tzIG9uIHRoZSBtYXAgbWFya2Vyc1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYXBMaXN0ZW5lciRcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHsgbWFya2VycyB9KSA9PiB7XG4gICAgICAgICAgICAgIG1hcmtlcnMub24oJ2NsaWNrJywgKHsgbGF5ZXI6IG1hcmtlciB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtYXJrZXIuaWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gbWFya2VyLmdldEljb24oKS5vcHRpb25zLmNsYXNzTmFtZS5pbmNsdWRlcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgLy8gbmF2aWdhdGUgdG8gdGhlIGNsaWNrZWQgcmVzb3VyY2UgLyBtYXJrZXJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb24uZ28oYC9tYXAvJHttYXJrZXIuaWR9LyR7bWFya2VyLnNsdWd9YCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlUGFnZURldGFpbHMobWFya2VyLmlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5nbygnL21hcC8nKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkRGVmYXVsdHMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21yLXRpbWVsaW5lLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLXllYXItaGVhZGVyLmNsb3NlZXZlbnQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkRGVmYXVsdHModHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlblJvdXRlKCkge1xuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtSWQgPSBwYXJhbXMuZ2V0KCdpZCcpO1xuICAgICAgaWYgKHBhcmFtSWQpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9IHBhcmFtSWQ7XG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdyb3V0ZWNoYW5nZWQnLCBwYXJhbUlkKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVBhZ2VEZXRhaWxzKHBhcmFtSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWREZWZhdWx0cyh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19