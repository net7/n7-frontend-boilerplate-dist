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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUF3QyxzQ0FBWTtJQUFwRDs7SUE4REEsQ0FBQztJQXZEUSxtQ0FBTSxHQUFiO1FBQUEsaUJBeUNDO1FBeENDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDakMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixhQUFhO29CQUNiLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUV0QixLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQXNCO3dCQUNqRSxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7NEJBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQ0FBRSxPQUFPOzRCQUN4QixpQkFBaUI7NEJBQ1QsSUFBQTsyRkFBTyxDQUNzRDs0QkFDckUsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdEMsd0NBQXdDOzRCQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFhLEtBQUssQ0FBQyxJQUFJLFNBQUksSUFBTSxDQUFDLENBQUM7NEJBQ3BELEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoRCxDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFRO2dCQUFOLGNBQUk7WUFDakMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywyQkFBMkI7b0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHdDQUFXLEdBQW5CO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ25DLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTlERCxDQUF3QyxZQUFZLEdBOERuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0ICogYXMgdmlzIGZyb20gJ3Zpcy10aW1lbGluZS9kZWNsYXJhdGlvbnMnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLXRpbWVsaW5lLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIHRoaXMucm91dGVyID0gcGF5bG9hZC5yb3V0ZXI7XHJcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcclxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcclxuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGltZWxpbmVMaXN0ZW5lciQuc3Vic2NyaWJlKCh0aW1lbGluZTogdmlzLlRpbWVsaW5lKSA9PiB7XHJcbiAgICAgICAgICAgIHRpbWVsaW5lLm9uKCdjbGljaycsIChwcm9wcykgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghcHJvcHMuaXRlbSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIC8vIGJ1aWxkIFVSTCBzbHVnXHJcbiAgICAgICAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLmRhdGFTb3VyY2UudGltZWxpbmVEYXRhLmRhdGFTZXRcclxuICAgICAgICAgICAgICAgIC5maW5kKChkOiB7IGlkOiBudW1iZXI7IGNvbnRlbnQ6IHN0cmluZyB9KSA9PiBkLmlkID09PSBwcm9wcy5pdGVtKTtcclxuICAgICAgICAgICAgICBjb25zdCBzbHVnID0gaGVscGVycy5zbHVnaWZ5KGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgIC8vIG5hdmlnYXRlIHdpdGhvdXQgcmVsb2FkaW5nIHRoZSBsYXlvdXRcclxuICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmdvKGAvdGltZWxpbmUvJHtwcm9wcy5pdGVtfS8ke3NsdWd9YCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVBhZ2VEZXRhaWxzKHByb3BzLml0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbXItdGltZWxpbmUtbGF5b3V0LmRlc3Ryb3knOlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXIteWVhci1oZWFkZXIuY2xvc2VldmVudCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZERlZmF1bHRzKHRydWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmFtSWQgPSBwYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgICBpZiAocGFyYW1JZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SWQgPSBwYXJhbUlkO1xyXG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdyb3V0ZWNoYW5nZWQnLCBwYXJhbUlkKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlUGFnZURldGFpbHMocGFyYW1JZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWREZWZhdWx0cyh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==