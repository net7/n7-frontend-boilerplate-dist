import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import helpers from '../../../common/helpers';
var MrTimelineLayoutEH = /** @class */ (function (_super) {
    __extends(MrTimelineLayoutEH, _super);
    function MrTimelineLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrTimelineLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-timeline-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.route = payload.route;
                    _this.router = payload.router;
                    _this.location = payload.location;
                    _this.listenRoute();
                    // scroll top
                    window.scrollTo(0, 0);
                    _this.dataSource.timelineListener$.subscribe(function (timeline) {
                        timeline.on('click', function (props) {
                            if (!props.item)
                                return;
                            // build URL slug
                            var content = _this.dataSource.timelineData.dataSet
                                .find(function (d) { return d.id === props.item; }).content;
                            var slug = helpers.slugify(content);
                            // navigate without reloading the layout
                            _this.location.go("/timeline/" + props.item + "/" + slug);
                            _this.dataSource.updatePageDetails(props.item);
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
    MrTimelineLayoutEH.prototype.listenRoute = function () {
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
    return MrTimelineLayoutEH;
}(EventHandler));
export { MrTimelineLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUF3QyxzQ0FBWTtJQUFwRDs7SUE4REEsQ0FBQztJQXZEUSxtQ0FBTSxHQUFiO1FBQUEsaUJBeUNDO1FBeENDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDakMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixhQUFhO29CQUNiLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUV0QixLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQWtCO3dCQUM3RCxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7NEJBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQ0FBRSxPQUFPOzRCQUN4QixpQkFBaUI7NEJBQ1QsSUFBQTsyRkFBTyxDQUNzRDs0QkFDckUsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEMsd0NBQXdDOzRCQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFhLEtBQUssQ0FBQyxJQUFJLFNBQUksSUFBTSxDQUFDLENBQUM7NEJBQ3BELEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoRCxDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFRO2dCQUFOLGNBQUk7WUFDakMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywyQkFBMkI7b0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHdDQUFXLEdBQW5CO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ25DLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTlERCxDQUF3QyxZQUFZLEdBOERuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgVGltZWxpbmUgfSBmcm9tICd2aXMtdGltZWxpbmUnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLXRpbWVsaW5lLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XHJcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcclxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcclxuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGltZWxpbmVMaXN0ZW5lciQuc3Vic2NyaWJlKCh0aW1lbGluZTogVGltZWxpbmUpID0+IHtcclxuICAgICAgICAgICAgdGltZWxpbmUub24oJ2NsaWNrJywgKHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcm9wcy5pdGVtKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgLy8gYnVpbGQgVVJMIHNsdWdcclxuICAgICAgICAgICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMuZGF0YVNvdXJjZS50aW1lbGluZURhdGEuZGF0YVNldFxyXG4gICAgICAgICAgICAgICAgLmZpbmQoKGQ6IHsgaWQ6IG51bWJlcjsgY29udGVudDogc3RyaW5nIH0pID0+IGQuaWQgPT09IHByb3BzLml0ZW0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNsdWcgPSBoZWxwZXJzLnNsdWdpZnkoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgLy8gbmF2aWdhdGUgd2l0aG91dCByZWxvYWRpbmcgdGhlIGxheW91dFxyXG4gICAgICAgICAgICAgIHRoaXMubG9jYXRpb24uZ28oYC90aW1lbGluZS8ke3Byb3BzLml0ZW19LyR7c2x1Z31gKTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlUGFnZURldGFpbHMocHJvcHMuaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtci10aW1lbGluZS1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci15ZWFyLWhlYWRlci5jbG9zZWV2ZW50JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkRGVmYXVsdHModHJ1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcclxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgY29uc3QgcGFyYW1JZCA9IHBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICAgIGlmIChwYXJhbUlkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9IHBhcmFtSWQ7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3JvdXRlY2hhbmdlZCcsIHBhcmFtSWQpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVQYWdlRGV0YWlscyhwYXJhbUlkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZERlZmF1bHRzKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19