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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9tYXAuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDeEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQTZCLDJCQUFVO0lBQXZDO1FBQUEscUVBdURDO1FBcERRLGlCQUFXLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFFN0Msa0JBQVksR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxlQUFTLEdBQUcsVUFBQyxJQUFJLElBQWMsT0FBQSxDQUFDO1lBQ3hDLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRSxDQUFDO29CQUNYLEdBQUcsRUFBRSw4RUFBOEU7b0JBQ25GLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUM7WUFDRixXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDZCxJQUFJLEVBQUUsRUFBRTthQUNUO1lBQ0QsWUFBWSxFQUFFLFVBQUMsR0FBRztnQkFDaEIsS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2YsSUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFZO3dCQUFWLFlBQUcsRUFBRSxZQUFHO29CQUFPLE9BQUEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUFWLENBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUzQixpQkFBaUI7Z0JBQ2pCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztvQkFDekMsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0IsQ0FBQyxDQUFDO2dCQUNILElBQUk7b0JBQ0Ysc0JBQXNCO3FCQUNyQixNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDO29CQUNoQywwQkFBMEI7cUJBQ3pCLE9BQU8sQ0FBQyxVQUFDLEVBQWtCO3dCQUFoQixZQUFHLEVBQUUsWUFBRyxFQUFFLGNBQUk7b0JBQ2hCLElBQUEsa0JBQUssQ0FBVTtvQkFDdkIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQzt5QkFDN0QsS0FBSyxDQUFDLE9BQU8sQ0FBQzt5QkFDZCxTQUFTLENBQUMsS0FBSyxDQUFDO3lCQUNoQixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsRUFBVTs0QkFBUixrQkFBTTt3QkFDWixJQUFBLDBCQUFJLENBQW9CO3dCQUN4QixJQUFBLGtDQUFTLENBQWtCO3dCQUNuQyxJQUFJLFNBQVMsS0FBSyxzQkFBc0IsRUFBRTs0QkFDeEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQzdCO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVMLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsRUFBVTs0QkFBUixrQkFBTTt3QkFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO29CQUVILE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsRUFBVTs0QkFBUixrQkFBTTt3QkFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDL0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsQ0FBQztTQUNGLENBQUMsRUEvQ3VDLENBK0N2QyxDQUFDOztJQUNMLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQXZERCxDQUE2QixVQUFVLEdBdUR0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCAqIGFzIExlYWZsZXQgZnJvbSAnbGVhZmxldCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OID0gTGVhZmxldC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4ucG5nJyxcclxuICBpY29uU2l6ZTogWzMwLCA0NS41XSxcclxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXHJcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24nXHJcbn0pO1xyXG5cclxuY29uc3QgTUFSS0VSX0lDT05fU0VMRUNURUQgPSBMZWFmbGV0Lmljb24oe1xyXG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi1zZWxlY3RlZC5wbmcnLFxyXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbi1zZWxlY3RlZCdcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdNYXBEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyBtYXA7XHJcblxyXG4gIHB1YmxpYyBtYXJrZXJPcGVuJDogU3ViamVjdDxvYmplY3Q+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHVibGljIG1hcmtlckNsb3NlJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSk6IE1hcERhdGEgPT4gKHtcclxuICAgIGNvbnRhaW5lcklkOiAnbWFwLWNhbnZhcycsXHJcbiAgICB0aWxlTGF5ZXJzOiBbe1xyXG4gICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcclxuICAgICAgb3B0aW9uczoge31cclxuICAgIH1dLFxyXG4gICAgaW5pdGlhbFZpZXc6IHtcclxuICAgICAgY2VudGVyOiBbMCwgMF0sXHJcbiAgICAgIHpvb206IDEzXHJcbiAgICB9LFxyXG4gICAgX3NldEluc3RhbmNlOiAobWFwKSA9PiB7XHJcbiAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICBjb25zdCBib3VuZHMgPSBuZXcgTGVhZmxldC5MYXRMbmdCb3VuZHMoZGF0YS5tYXAoKHsgbGF0LCBsb24gfSkgPT4gW2xhdCwgbG9uXSkpO1xyXG4gICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcclxuXHJcbiAgICAgIC8vIGFkZGluZyBtYXJrZXJzXHJcbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBMZWFmbGV0Lm1hcmtlckNsdXN0ZXJHcm91cCh7XHJcbiAgICAgICAgc2hvd0NvdmVyYWdlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBkYXRhXHJcbiAgICAgICAgLy8gc2tpcCBicm9rZW4gbWFya2Vyc1xyXG4gICAgICAgIC5maWx0ZXIoKGQpID0+IChkLmxhdCAmJiBkLmxvbikpXHJcbiAgICAgICAgLy8gZHJhdyBtYXJrZXJzIG9uIHRoZSBtYXBcclxuICAgICAgICAuZm9yRWFjaCgoeyBsYXQsIGxvbiwgaXRlbSB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGxhYmVsIH0gPSBpdGVtO1xyXG4gICAgICAgICAgY29uc3QgbWFya2VyID0gTGVhZmxldC5tYXJrZXIoW2xhdCwgbG9uXSwgeyBpY29uOiBNQVJLRVJfSUNPTiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8obWFya2VycylcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChsYWJlbClcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgeyBpY29uIH0gPSB0YXJnZXQub3B0aW9ucztcclxuICAgICAgICAgICAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gaWNvbi5vcHRpb25zO1xyXG4gICAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT09ICdtYXJrZXItaWNvbi1zZWxlY3RlZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2VyT3BlbiQubmV4dChpdGVtKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIG1hcmtlci5nZXRQb3B1cCgpLm9uKCdyZW1vdmUnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OKTtcclxuICAgICAgICAgICAgdGhpcy5tYXJrZXJDbG9zZSQubmV4dCgpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgbWFya2VyLmdldFBvcHVwKCkub24oJ2FkZCcsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHRhcmdldC5fc291cmNlLnNldEljb24oTUFSS0VSX0lDT05fU0VMRUNURUQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKG1hcmtlcnMpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==