import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import * as Leaflet from 'leaflet';
import { Subject } from 'rxjs';
var MARKER_ICON = Leaflet.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon'
});
var MARKER_ICON_SELECTED = Leaflet.icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon-selected'
});
var AwMapDS = /** @class */ (function (_super) {
    __extends(AwMapDS, _super);
    function AwMapDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.markerOpen$ = new Subject();
        _this.markerClose$ = new Subject();
        _this.transform = function (data) { return ({
            containerId: 'map-canvas',
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {}
                }],
            initialView: {
                center: [0, 0],
                zoom: 13
            },
            _setInstance: function (map) {
                _this.map = map;
                var bounds = new Leaflet.LatLngBounds(data.map(function (_a) {
                    var lat = _a.lat, lon = _a.lon;
                    return [lat, lon];
                }));
                _this.map.fitBounds(bounds);
                // adding markers
                var markers = Leaflet.markerClusterGroup({
                    showCoverageOnHover: false,
                });
                data
                    // skip broken markers
                    .filter(function (d) { return (d.lat && d.lon); })
                    // draw markers on the map
                    .forEach(function (_a) {
                    var lat = _a.lat, lon = _a.lon, item = _a.item;
                    var label = item.label;
                    var marker = Leaflet.marker([lat, lon], { icon: MARKER_ICON })
                        .addTo(markers)
                        .bindPopup(label)
                        .on('click', function (_a) {
                        var target = _a.target;
                        var icon = target.options.icon;
                        var className = icon.options.className;
                        if (className === 'marker-icon-selected') {
                            _this.markerOpen$.next(item);
                        }
                    });
                    marker.getPopup().on('remove', function (_a) {
                        var target = _a.target;
                        target._source.setIcon(MARKER_ICON);
                        _this.markerClose$.next();
                    });
                    marker.getPopup().on('add', function (_a) {
                        var target = _a.target;
                        target._source.setIcon(MARKER_ICON_SELECTED);
                    });
                });
                _this.map.addLayer(markers);
            }
        }); };
        return _this;
    }
    return AwMapDS;
}(DataSource));
export { AwMapDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9tYXAuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDeEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQTZCLDJCQUFVO0lBQXZDO1FBQUEscUVBdURDO1FBcERRLGlCQUFXLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0Msa0JBQVksR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxlQUFTLEdBQUcsVUFBQyxJQUFJLElBQWMsT0FBQSxDQUFDO1lBQ3hDLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRSxDQUFDO29CQUNYLEdBQUcsRUFBRSw4RUFBOEU7b0JBQ25GLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUM7WUFDRixXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDZCxJQUFJLEVBQUUsRUFBRTthQUNUO1lBQ0QsWUFBWSxFQUFFLFVBQUMsR0FBRztnQkFDaEIsS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2YsSUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFZO3dCQUFWLFlBQUcsRUFBRSxZQUFHO29CQUFPLE9BQUEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUFWLENBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUzQixpQkFBaUI7Z0JBQ2pCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztvQkFDekMsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0IsQ0FBQyxDQUFDO2dCQUNILElBQUk7b0JBQ0Ysc0JBQXNCO3FCQUNyQixNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDO29CQUNoQywwQkFBMEI7cUJBQ3pCLE9BQU8sQ0FBQyxVQUFDLEVBQWtCO3dCQUFoQixZQUFHLEVBQUUsWUFBRyxFQUFFLGNBQUk7b0JBQ2hCLElBQUEsa0JBQUssQ0FBVTtvQkFDdkIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQzt5QkFDN0QsS0FBSyxDQUFDLE9BQU8sQ0FBQzt5QkFDZCxTQUFTLENBQUMsS0FBSyxDQUFDO3lCQUNoQixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsRUFBVTs0QkFBUixrQkFBTTt3QkFDWixJQUFBLDBCQUFJLENBQW9CO3dCQUN4QixJQUFBLGtDQUFTLENBQWtCO3dCQUNuQyxJQUFJLFNBQVMsS0FBSyxzQkFBc0IsRUFBRTs0QkFDeEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQzdCO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVMLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsRUFBVTs0QkFBUixrQkFBTTt3QkFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO29CQUVILE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsRUFBVTs0QkFBUixrQkFBTTt3QkFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDL0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsQ0FBQztTQUNGLENBQUMsRUEvQ3VDLENBK0N2QyxDQUFDOztJQUNMLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQXZERCxDQUE2QixVQUFVLEdBdUR0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0ICogYXMgTGVhZmxldCBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuY29uc3QgTUFSS0VSX0lDT04gPSBMZWFmbGV0Lmljb24oe1xuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4ucG5nJyxcbiAgaWNvblNpemU6IFszMCwgNDUuNV0sXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24nXG59KTtcblxuY29uc3QgTUFSS0VSX0lDT05fU0VMRUNURUQgPSBMZWFmbGV0Lmljb24oe1xuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4tc2VsZWN0ZWQucG5nJyxcbiAgaWNvblNpemU6IFszMCwgNDUuNV0sXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24tc2VsZWN0ZWQnXG59KTtcblxuZXhwb3J0IGNsYXNzIEF3TWFwRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIG1hcDtcblxuICBwdWJsaWMgbWFya2VyT3BlbiQ6IFN1YmplY3Q8b2JqZWN0PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHVibGljIG1hcmtlckNsb3NlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKTogTWFwRGF0YSA9PiAoe1xuICAgIGNvbnRhaW5lcklkOiAnbWFwLWNhbnZhcycsXG4gICAgdGlsZUxheWVyczogW3tcbiAgICAgIHVybDogJ2h0dHBzOi8vY2FydG9kYi1iYXNlbWFwcy17c30uZ2xvYmFsLnNzbC5mYXN0bHkubmV0L2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLFxuICAgICAgb3B0aW9uczoge31cbiAgICB9XSxcbiAgICBpbml0aWFsVmlldzoge1xuICAgICAgY2VudGVyOiBbMCwgMF0sXG4gICAgICB6b29tOiAxM1xuICAgIH0sXG4gICAgX3NldEluc3RhbmNlOiAobWFwKSA9PiB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBMZWFmbGV0LkxhdExuZ0JvdW5kcyhkYXRhLm1hcCgoeyBsYXQsIGxvbiB9KSA9PiBbbGF0LCBsb25dKSk7XG4gICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcblxuICAgICAgLy8gYWRkaW5nIG1hcmtlcnNcbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBMZWFmbGV0Lm1hcmtlckNsdXN0ZXJHcm91cCh7XG4gICAgICAgIHNob3dDb3ZlcmFnZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBkYXRhXG4gICAgICAgIC8vIHNraXAgYnJva2VuIG1hcmtlcnNcbiAgICAgICAgLmZpbHRlcigoZCkgPT4gKGQubGF0ICYmIGQubG9uKSlcbiAgICAgICAgLy8gZHJhdyBtYXJrZXJzIG9uIHRoZSBtYXBcbiAgICAgICAgLmZvckVhY2goKHsgbGF0LCBsb24sIGl0ZW0gfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgbGFiZWwgfSA9IGl0ZW07XG4gICAgICAgICAgY29uc3QgbWFya2VyID0gTGVhZmxldC5tYXJrZXIoW2xhdCwgbG9uXSwgeyBpY29uOiBNQVJLRVJfSUNPTiB9KVxuICAgICAgICAgICAgLmFkZFRvKG1hcmtlcnMpXG4gICAgICAgICAgICAuYmluZFBvcHVwKGxhYmVsKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgaWNvbiB9ID0gdGFyZ2V0Lm9wdGlvbnM7XG4gICAgICAgICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBpY29uLm9wdGlvbnM7XG4gICAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT09ICdtYXJrZXItaWNvbi1zZWxlY3RlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtlck9wZW4kLm5leHQoaXRlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbWFya2VyLmdldFBvcHVwKCkub24oJ3JlbW92ZScsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OKTtcbiAgICAgICAgICAgIHRoaXMubWFya2VyQ2xvc2UkLm5leHQoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcmtlci5nZXRQb3B1cCgpLm9uKCdhZGQnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0Ll9zb3VyY2Uuc2V0SWNvbihNQVJLRVJfSUNPTl9TRUxFQ1RFRCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIobWFya2Vycyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==