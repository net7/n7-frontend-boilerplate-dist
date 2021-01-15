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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUF3QyxzQ0FBWTtJQUFwRDs7SUE0REEsQ0FBQztJQXJEUSxtQ0FBTSxHQUFiO1FBQUEsaUJBdUNDO1FBdENDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDakMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUVuQixLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQXNCO3dCQUNqRSxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7NEJBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQ0FBRSxPQUFPOzRCQUN4QixpQkFBaUI7NEJBQ1QsSUFBQTsyRkFBTyxDQUNzRDs0QkFDckUsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEMsd0NBQXdDOzRCQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFhLEtBQUssQ0FBQyxJQUFJLFNBQUksSUFBTSxDQUFDLENBQUM7NEJBQ3BELEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoRCxDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFRO2dCQUFOLGNBQUk7WUFDakMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywyQkFBMkI7b0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHdDQUFXLEdBQW5CO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ25DLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTVERCxDQUF3QyxZQUFZLEdBNERuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0ICogYXMgdmlzIGZyb20gJ3Zpcy10aW1lbGluZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG5cclxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xyXG5cclxuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItdGltZWxpbmUtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIgPSBwYXlsb2FkLnJvdXRlcjtcclxuICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBwYXlsb2FkLmxvY2F0aW9uO1xyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpO1xyXG5cclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aW1lbGluZUxpc3RlbmVyJC5zdWJzY3JpYmUoKHRpbWVsaW5lOiB2aXMuVGltZWxpbmUpID0+IHtcclxuICAgICAgICAgICAgdGltZWxpbmUub24oJ2NsaWNrJywgKHByb3BzKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcm9wcy5pdGVtKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgLy8gYnVpbGQgVVJMIHNsdWdcclxuICAgICAgICAgICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMuZGF0YVNvdXJjZS50aW1lbGluZURhdGEuZGF0YVNldFxyXG4gICAgICAgICAgICAgICAgLmZpbmQoKGQ6IHsgaWQ6IG51bWJlcjsgY29udGVudDogc3RyaW5nIH0pID0+IGQuaWQgPT09IHByb3BzLml0ZW0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNsdWcgPSBoZWxwZXJzLnNsdWdpZnkoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgLy8gbmF2aWdhdGUgd2l0aG91dCByZWxvYWRpbmcgdGhlIGxheW91dFxyXG4gICAgICAgICAgICAgIHRoaXMubG9jYXRpb24uZ28oYC90aW1lbGluZS8ke3Byb3BzLml0ZW19LyR7c2x1Z31gKTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlUGFnZURldGFpbHMocHJvcHMuaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtci10aW1lbGluZS1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci15ZWFyLWhlYWRlci5jbG9zZWV2ZW50JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkRGVmYXVsdHModHJ1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcclxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgY29uc3QgcGFyYW1JZCA9IHBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICAgIGlmIChwYXJhbUlkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9IHBhcmFtSWQ7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3JvdXRlY2hhbmdlZCcsIHBhcmFtSWQpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVQYWdlRGV0YWlscyhwYXJhbUlkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZERlZmF1bHRzKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19