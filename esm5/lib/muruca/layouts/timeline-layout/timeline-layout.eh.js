import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
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
                    _this.listenRoute();
                    _this.dataSource.timelineListener$.subscribe(function (timeline) {
                        timeline.on('click', function (props) {
                            if (!props.item)
                                return;
                            _this.emitGlobal('navigate', {
                                handler: 'router',
                                path: ["/timeline/" + props.item + "/evento"]
                            });
                        });
                    });
                    // (this.dataSource.timelineInstance as vis.Timeline).on('click', (properties) => {
                    //   console.log(properties);
                    // });
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
                if (paramId) {
                    _this.dataSource.currentId = paramId;
                    _this.emitOuter('routechanged', paramId);
                    _this.dataSource.updatePageDetails(paramId);
                }
            }
        });
    };
    return MrTimelineLayoutEH;
}(EventHandler));
export { MrTimelineLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRDtJQUF3QyxzQ0FBWTtJQUFwRDs7SUFtREEsQ0FBQztJQWhEUSxtQ0FBTSxHQUFiO1FBQUEsaUJBa0NDO1FBakNDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRW5CLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBc0I7d0JBQ2pFLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSzs0QkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dDQUFFLE9BQU87NEJBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dDQUMxQixPQUFPLEVBQUUsUUFBUTtnQ0FDakIsSUFBSSxFQUFFLENBQUMsZUFBYSxLQUFLLENBQUMsSUFBSSxZQUFTLENBQUM7NkJBQ3pDLENBQUMsQ0FBQzt3QkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDSCxtRkFBbUY7b0JBQ25GLDZCQUE2QjtvQkFDN0IsTUFBTTtvQkFDTixNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFRO2dCQUFOLGNBQUk7WUFDakMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1o7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sd0NBQVcsR0FBbkI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDbkMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN4QyxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM1QzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBbkRELENBQXdDLFlBQVksR0FtRG5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCAqIGFzIHZpcyBmcm9tICd2aXMtdGltZWxpbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yVGltZWxpbmVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGU7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLXRpbWVsaW5lLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIHRoaXMubGlzdGVuUm91dGUoKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudGltZWxpbmVMaXN0ZW5lciQuc3Vic2NyaWJlKCh0aW1lbGluZTogdmlzLlRpbWVsaW5lKSA9PiB7XHJcbiAgICAgICAgICAgIHRpbWVsaW5lLm9uKCdjbGljaycsIChwcm9wcykgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghcHJvcHMuaXRlbSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICAgICAgICAgIHBhdGg6IFtgL3RpbWVsaW5lLyR7cHJvcHMuaXRlbX0vZXZlbnRvYF1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vICh0aGlzLmRhdGFTb3VyY2UudGltZWxpbmVJbnN0YW5jZSBhcyB2aXMuVGltZWxpbmUpLm9uKCdjbGljaycsIChwcm9wZXJ0aWVzKSA9PiB7XHJcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtci10aW1lbGluZS1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Sb3V0ZSgpIHtcclxuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgY29uc3QgcGFyYW1JZCA9IHBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICAgIGlmIChwYXJhbUlkKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtSWQpIHtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SWQgPSBwYXJhbUlkO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3JvdXRlY2hhbmdlZCcsIHBhcmFtSWQpO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVBhZ2VEZXRhaWxzKHBhcmFtSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==