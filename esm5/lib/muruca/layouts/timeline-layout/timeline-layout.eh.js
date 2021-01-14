import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import helpers from 'n7-boilerplate-lib/lib/common/helpers';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLE9BQU8sTUFBTSx1Q0FBdUMsQ0FBQztBQUU1RDtJQUF3QyxzQ0FBWTtJQUFwRDs7SUE0REEsQ0FBQztJQXJEUSxtQ0FBTSxHQUFiO1FBQUEsaUJBdUNDO1FBdENDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDakMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUVuQixLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQXNCO3dCQUNqRSxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7NEJBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQ0FBRSxPQUFPOzRCQUN4QixpQkFBaUI7NEJBQ1QsSUFBQTsyRkFBTyxDQUNzRDs0QkFDckUsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEMsd0NBQXdDOzRCQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFhLEtBQUssQ0FBQyxJQUFJLFNBQUksSUFBTSxDQUFDLENBQUM7NEJBQ3BELEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoRCxDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFRO2dCQUFOLGNBQUk7WUFDakMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywyQkFBMkI7b0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHdDQUFXLEdBQW5CO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ25DLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTVERCxDQUF3QyxZQUFZLEdBNERuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0ICogYXMgdmlzIGZyb20gJ3Zpcy10aW1lbGluZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJ243LWJvaWxlcnBsYXRlLWxpYi9saWIvY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XHJcblxyXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci10aW1lbGluZS1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHBheWxvYWQucm91dGVyO1xyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHBheWxvYWQubG9jYXRpb247XHJcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpbWVsaW5lTGlzdGVuZXIkLnN1YnNjcmliZSgodGltZWxpbmU6IHZpcy5UaW1lbGluZSkgPT4ge1xyXG4gICAgICAgICAgICB0aW1lbGluZS5vbignY2xpY2snLCAocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXByb3BzLml0ZW0pIHJldHVybjtcclxuICAgICAgICAgICAgICAvLyBidWlsZCBVUkwgc2x1Z1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5kYXRhU291cmNlLnRpbWVsaW5lRGF0YS5kYXRhU2V0XHJcbiAgICAgICAgICAgICAgICAuZmluZCgoZDogeyBpZDogbnVtYmVyOyBjb250ZW50OiBzdHJpbmcgfSkgPT4gZC5pZCA9PT0gcHJvcHMuaXRlbSk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2x1ZyA9IGhlbHBlcnMuc2x1Z2lmeShjb250ZW50KTtcclxuICAgICAgICAgICAgICAvLyBuYXZpZ2F0ZSB3aXRob3V0IHJlbG9hZGluZyB0aGUgbGF5b3V0XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5nbyhgL3RpbWVsaW5lLyR7cHJvcHMuaXRlbX0vJHtzbHVnfWApO1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVQYWdlRGV0YWlscyhwcm9wcy5pdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21yLXRpbWVsaW5lLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLXllYXItaGVhZGVyLmNsb3NlZXZlbnQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWREZWZhdWx0cyh0cnVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxpc3RlblJvdXRlKCkge1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICBjb25zdCBwYXJhbUlkID0gcGFyYW1zLmdldCgnaWQnKTtcclxuICAgICAgaWYgKHBhcmFtSWQpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID0gcGFyYW1JZDtcclxuICAgICAgICB0aGlzLmVtaXRPdXRlcigncm91dGVjaGFuZ2VkJywgcGFyYW1JZCk7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVBhZ2VEZXRhaWxzKHBhcmFtSWQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkRGVmYXVsdHModHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=