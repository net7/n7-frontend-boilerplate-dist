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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9tYXAuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDeEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQTZCLDJCQUFVO0lBQXZDO1FBQUEscUVBb0RDO1FBakRRLGlCQUFXLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0Msa0JBQVksR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxlQUFTLEdBQUcsVUFBQyxJQUFJLElBQWMsT0FBQSxDQUFDO1lBQ3hDLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRSxDQUFDO29CQUNYLEdBQUcsRUFBRSw4RUFBOEU7b0JBQ25GLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUM7WUFDRixXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDZCxJQUFJLEVBQUUsRUFBRTthQUNUO1lBQ0QsWUFBWSxFQUFFLFVBQUMsR0FBRztnQkFDaEIsS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2YsSUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFZO3dCQUFWLFlBQUcsRUFBRSxZQUFHO29CQUFPLE9BQUEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUFWLENBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUzQixpQkFBaUI7Z0JBQ2pCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztvQkFDekMsbUJBQW1CLEVBQUUsS0FBSztpQkFDN0IsQ0FBQyxDQUFDO2dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFrQjt3QkFBaEIsWUFBRyxFQUFFLFlBQUcsRUFBRSxjQUFJO29CQUNwQixJQUFBLGtCQUFLLENBQVU7b0JBQ3ZCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7eUJBQzdELEtBQUssQ0FBQyxPQUFPLENBQUM7eUJBQ2QsU0FBUyxDQUFDLEtBQUssQ0FBQzt5QkFDaEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEVBQVU7NEJBQVIsa0JBQU07d0JBQ1osSUFBQSwwQkFBSSxDQUFvQjt3QkFDeEIsSUFBQSxrQ0FBUyxDQUFrQjt3QkFFbkMsSUFBSSxTQUFTLEtBQUssc0JBQXNCLEVBQUU7NEJBQ3hDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUM3QjtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFFTCxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLEVBQVU7NEJBQVIsa0JBQU07d0JBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNwQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQztvQkFFSCxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLEVBQVU7NEJBQVIsa0JBQU07d0JBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQy9DLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLENBQUM7U0FDRixDQUFDLEVBNUN1QyxDQTRDdkMsQ0FBQzs7SUFDTCxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFwREQsQ0FBNkIsVUFBVSxHQW9EdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCAqIGFzIExlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IE1BUktFUl9JQ09OID0gTGVhZmxldC5pY29uKHtcbiAgaWNvblVybDogJy9hc3NldHMvcGluLnBuZycsXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xufSk7XG5cbmNvbnN0IE1BUktFUl9JQ09OX1NFTEVDVEVEID0gTGVhZmxldC5pY29uKHtcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXNlbGVjdGVkLnBuZycsXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uLXNlbGVjdGVkJ1xufSk7XG5cbmV4cG9ydCBjbGFzcyBBd01hcERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBtYXA7XG5cbiAgcHVibGljIG1hcmtlck9wZW4kOiBTdWJqZWN0PG9iamVjdD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBtYXJrZXJDbG9zZSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSk6IE1hcERhdGEgPT4gKHtcbiAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxuICAgIHRpbGVMYXllcnM6IFt7XG4gICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgIG9wdGlvbnM6IHt9XG4gICAgfV0sXG4gICAgaW5pdGlhbFZpZXc6IHtcbiAgICAgIGNlbnRlcjogWzAsIDBdLFxuICAgICAgem9vbTogMTNcbiAgICB9LFxuICAgIF9zZXRJbnN0YW5jZTogKG1hcCkgPT4ge1xuICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICBjb25zdCBib3VuZHMgPSBuZXcgTGVhZmxldC5MYXRMbmdCb3VuZHMoZGF0YS5tYXAoKHsgbGF0LCBsb24gfSkgPT4gW2xhdCwgbG9uXSkpO1xuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG5cbiAgICAgIC8vIGFkZGluZyBtYXJrZXJzXG4gICAgICBjb25zdCBtYXJrZXJzID0gTGVhZmxldC5tYXJrZXJDbHVzdGVyR3JvdXAoe1xuICAgICAgICBzaG93Q292ZXJhZ2VPbkhvdmVyOiBmYWxzZSwgXG4gICAgfSk7XG4gICAgICBkYXRhLmZvckVhY2goKHsgbGF0LCBsb24sIGl0ZW0gfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGxhYmVsIH0gPSBpdGVtO1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBMZWFmbGV0Lm1hcmtlcihbbGF0LCBsb25dLCB7IGljb246IE1BUktFUl9JQ09OIH0pXG4gICAgICAgICAgLmFkZFRvKG1hcmtlcnMpXG4gICAgICAgICAgLmJpbmRQb3B1cChsYWJlbClcbiAgICAgICAgICAub24oJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWNvbiB9ID0gdGFyZ2V0Lm9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gaWNvbi5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnbWFya2VyLWljb24tc2VsZWN0ZWQnKSB7XG4gICAgICAgICAgICAgIHRoaXMubWFya2VyT3BlbiQubmV4dChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICBtYXJrZXIuZ2V0UG9wdXAoKS5vbigncmVtb3ZlJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OKTtcbiAgICAgICAgICB0aGlzLm1hcmtlckNsb3NlJC5uZXh0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hcmtlci5nZXRQb3B1cCgpLm9uKCdhZGQnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgIHRhcmdldC5fc291cmNlLnNldEljb24oTUFSS0VSX0lDT05fU0VMRUNURUQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIobWFya2Vycyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==