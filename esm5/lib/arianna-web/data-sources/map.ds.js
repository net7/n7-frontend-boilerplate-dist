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
                data.forEach(function (_a) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9tYXAuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDeEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQTZCLDJCQUFVO0lBQXZDO1FBQUEscUVBb0RDO1FBakRRLGlCQUFXLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0Msa0JBQVksR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxlQUFTLEdBQUcsVUFBQyxJQUFJLElBQWMsT0FBQSxDQUFDO1lBQ3hDLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRSxDQUFDO29CQUNYLEdBQUcsRUFBRSw4RUFBOEU7b0JBQ25GLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUM7WUFDRixXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDZCxJQUFJLEVBQUUsRUFBRTthQUNUO1lBQ0QsWUFBWSxFQUFFLFVBQUMsR0FBRztnQkFDaEIsS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2YsSUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFZO3dCQUFWLFlBQUcsRUFBRSxZQUFHO29CQUFPLE9BQUEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUFWLENBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUzQixpQkFBaUI7Z0JBQ2pCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztvQkFDekMsbUJBQW1CLEVBQUUsS0FBSztpQkFDN0IsQ0FBQyxDQUFDO2dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFrQjt3QkFBaEIsWUFBRyxFQUFFLFlBQUcsRUFBRSxjQUFJO29CQUNwQixJQUFBLGtCQUFLLENBQVU7b0JBQ3ZCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7eUJBQzdELEtBQUssQ0FBQyxPQUFPLENBQUM7eUJBQ2QsU0FBUyxDQUFDLEtBQUssQ0FBQzt5QkFDaEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEVBQVU7NEJBQVIsa0JBQU07d0JBQ1osSUFBQSwwQkFBSSxDQUFvQjt3QkFDeEIsSUFBQSxrQ0FBUyxDQUFrQjt3QkFFbkMsSUFBSSxTQUFTLEtBQUssc0JBQXNCLEVBQUU7NEJBQ3hDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUM3QjtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFFTCxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLEVBQVU7NEJBQVIsa0JBQU07d0JBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNwQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQztvQkFFSCxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLEVBQVU7NEJBQVIsa0JBQU07d0JBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQy9DLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLENBQUM7U0FDRixDQUFDLEVBNUN1QyxDQTRDdkMsQ0FBQzs7SUFDTCxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFwREQsQ0FBNkIsVUFBVSxHQW9EdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBMZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTiA9IExlYWZsZXQuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLnBuZycsXHJcbiAgaWNvblNpemU6IFszMCwgNDUuNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMjVdLFxyXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xyXG59KTtcclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OX1NFTEVDVEVEID0gTGVhZmxldC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4tc2VsZWN0ZWQucG5nJyxcclxuICBpY29uU2l6ZTogWzMwLCA0NS41XSxcclxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXHJcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24tc2VsZWN0ZWQnXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3TWFwRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwdWJsaWMgbWFwO1xyXG5cclxuICBwdWJsaWMgbWFya2VyT3BlbiQ6IFN1YmplY3Q8b2JqZWN0PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBtYXJrZXJDbG9zZSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpOiBNYXBEYXRhID0+ICh7XHJcbiAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxyXG4gICAgdGlsZUxheWVyczogW3tcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9jYXJ0b2RiLWJhc2VtYXBzLXtzfS5nbG9iYWwuc3NsLmZhc3RseS5uZXQvbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsXHJcbiAgICAgIG9wdGlvbnM6IHt9XHJcbiAgICB9XSxcclxuICAgIGluaXRpYWxWaWV3OiB7XHJcbiAgICAgIGNlbnRlcjogWzAsIDBdLFxyXG4gICAgICB6b29tOiAxM1xyXG4gICAgfSxcclxuICAgIF9zZXRJbnN0YW5jZTogKG1hcCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgICAgY29uc3QgYm91bmRzID0gbmV3IExlYWZsZXQuTGF0TG5nQm91bmRzKGRhdGEubWFwKCh7IGxhdCwgbG9uIH0pID0+IFtsYXQsIGxvbl0pKTtcclxuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XHJcblxyXG4gICAgICAvLyBhZGRpbmcgbWFya2Vyc1xyXG4gICAgICBjb25zdCBtYXJrZXJzID0gTGVhZmxldC5tYXJrZXJDbHVzdGVyR3JvdXAoe1xyXG4gICAgICAgIHNob3dDb3ZlcmFnZU9uSG92ZXI6IGZhbHNlLCBcclxuICAgIH0pO1xyXG4gICAgICBkYXRhLmZvckVhY2goKHsgbGF0LCBsb24sIGl0ZW0gfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwgfSA9IGl0ZW07XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gTGVhZmxldC5tYXJrZXIoW2xhdCwgbG9uXSwgeyBpY29uOiBNQVJLRVJfSUNPTiB9KVxyXG4gICAgICAgICAgLmFkZFRvKG1hcmtlcnMpXHJcbiAgICAgICAgICAuYmluZFBvcHVwKGxhYmVsKVxyXG4gICAgICAgICAgLm9uKCdjbGljaycsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWNvbiB9ID0gdGFyZ2V0Lm9wdGlvbnM7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBpY29uLm9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnbWFya2VyLWljb24tc2VsZWN0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tYXJrZXJPcGVuJC5uZXh0KGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWFya2VyLmdldFBvcHVwKCkub24oJ3JlbW92ZScsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OKTtcclxuICAgICAgICAgIHRoaXMubWFya2VyQ2xvc2UkLm5leHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWFya2VyLmdldFBvcHVwKCkub24oJ2FkZCcsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OX1NFTEVDVEVEKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKG1hcmtlcnMpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==