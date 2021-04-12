import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
var MrMapDS = /** @class */ (function (_super) {
    __extends(MrMapDS, _super);
    function MrMapDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line consistent-return
    MrMapDS.prototype.transform = function (data) {
        var _this = this;
        var markers;
        if (data.find(function (d) { return d.markers; })) {
            markers = data
                .map(function (area) { return (area.markers
                .map(function (m) {
                var _a, _b;
                return ({
                    // convert to leaflet marker format
                    coords: [+m.lat, +m.lng],
                    template: (_a = m.default_label) !== null && _a !== void 0 ? _a : m.label,
                    title: (_b = m.label) !== null && _b !== void 0 ? _b : m.default_label,
                });
            })); })
                // flatten the list of markers
                .reduce(function (acc, val) { return acc.concat(val); }, []);
        }
        var initialView = {
            center: [54.5260, 15.2551],
            zoom: 5,
        };
        if (this.mapInstance && this.markerLayer) {
            this.markerLayer.clearLayers();
            this.mapInstance.removeLayer(this.markerLayer);
            this.markerLayer = L.markerClusterGroup();
            if (markers) {
                markers.forEach(function (mrk) {
                    L.marker(mrk.coords)
                        .addTo(_this.markerLayer)
                        .bindPopup("" + mrk.template);
                });
                this.mapInstance.addLayer(this.markerLayer);
                this.fitMapToBounds(markers.map(function (m) { return m.coords; }));
            }
        }
        return {
            _setInstance: function (instance) {
                _this.mapInstance = instance;
                _this.fitMapToBounds(markers.map(function (m) { return m.coords; }));
            },
            _setMarkerLayer: function (m) {
                _this.markerLayer = m;
            },
            containerId: 'map-canvas',
            libOptions: {
                scrollWheelZoom: false,
            },
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {}
                }],
            initialView: initialView,
            markers: this.markerLayer ? undefined : markers
        };
    };
    MrMapDS.prototype.fitMapToBounds = function (bounds) {
        if (this.mapInstance) {
            this.mapInstance.fitBounds(bounds, {
                maxZoom: 15,
                padding: [20, 20],
            });
        }
        else {
            console.warn('map instance is missing');
        }
    };
    return MrMapDS;
}(DataSource));
export { MrMapDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyx1QkFBdUIsQ0FBQztBQW9CL0I7SUFBNkIsMkJBQVU7SUFBdkM7O0lBMEVBLENBQUM7SUFuRUMsNkNBQTZDO0lBQ25DLDJCQUFTLEdBQW5CLFVBQW9CLElBQXNCO1FBQTFDLGlCQXNEQztRQXJEQyxJQUFJLE9BQU8sQ0FBQztRQUVaLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxHQUFHLElBQUk7aUJBQ1gsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsT0FBTztpQkFDekIsR0FBRyxDQUFDLFVBQUMsQ0FBQzs7Z0JBQUssT0FBQSxDQUFDO29CQUNiLG1DQUFtQztvQkFDakMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDeEIsUUFBUSxRQUFFLENBQUMsQ0FBQyxhQUFhLG1DQUFJLENBQUMsQ0FBQyxLQUFLO29CQUNwQyxLQUFLLFFBQUUsQ0FBQyxDQUFDLEtBQUssbUNBQUksQ0FBQyxDQUFDLGFBQWE7aUJBQ2xDLENBQUMsQ0FBQTthQUFBLENBQUMsQ0FBQyxFQU5TLENBTVQsQ0FBQztnQkFDUCw4QkFBOEI7aUJBQzdCLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFmLENBQWUsRUFBRSxFQUFFLENBQWlCLENBQUM7U0FDOUQ7UUFFRCxJQUFNLFdBQVcsR0FBK0M7WUFDOUQsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztZQUMxQixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFDLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO29CQUNsQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7eUJBQ2pCLEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO3lCQUN2QixTQUFTLENBQUMsS0FBRyxHQUFHLENBQUMsUUFBVSxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1NBQ0Y7UUFDRCxPQUFPO1lBQ0wsWUFBWSxFQUFFLFVBQUMsUUFBUTtnQkFDckIsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxDQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBQ0QsZUFBZSxFQUFFLFVBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDdkIsQ0FBQztZQUNELFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRTtnQkFDVixlQUFlLEVBQUUsS0FBSzthQUN2QjtZQUNELFVBQVUsRUFBRSxDQUFDO29CQUNYLEdBQUcsRUFBRSw4RUFBOEU7b0JBQ25GLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUM7WUFDRixXQUFXLGFBQUE7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPO1NBQ2hELENBQUM7SUFDSixDQUFDO0lBRU8sZ0NBQWMsR0FBdEIsVUFBdUIsTUFBTTtRQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ2xCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUExRUQsQ0FBNkIsVUFBVSxHQTBFdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBEYXRhLCBNYXJrZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgJ2xlYWZsZXQubWFya2VyY2x1c3Rlcic7XHJcbi8vIGxlYWZsZXQgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSB3aW5kb3csXHJcbi8vIGEgZG91YmxlIGltcG9ydCByZXN1bHRzIGluIGVycm9ycyB3aXRoIHRvb2x0aXBzLlxyXG5kZWNsYXJlIGNvbnN0IEw7XHJcblxyXG5pbnRlcmZhY2UgQ29vcmRzIHsgbGF0OiBudW1iZXI7IGxuZzogbnVtYmVyIH1cclxuXHJcbmludGVyZmFjZSBNYXJrZXIgZXh0ZW5kcyBDb29yZHMge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVmYXVsdF9sYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFRpbWVsaW5lUmVzcG9uc2UgPSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzbHVnOiBzdHJpbmc7XHJcbiAgem9vbTogbnVtYmVyO1xyXG4gIG1hcF9jZW50ZXI6IENvb3JkcztcclxuICBtYXJrZXJzOiBNYXJrZXJbXTtcclxufVtdXHJcblxyXG5leHBvcnQgY2xhc3MgTXJNYXBEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIG1hcEluc3RhbmNlO1xyXG5cclxuICBtYXJrZXJMYXllcjtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBUaW1lbGluZVJlc3BvbnNlKTogTWFwRGF0YSB7XHJcbiAgICBsZXQgbWFya2VycztcclxuXHJcbiAgICBpZiAoZGF0YS5maW5kKChkKSA9PiBkLm1hcmtlcnMpKSB7XHJcbiAgICAgIG1hcmtlcnMgPSBkYXRhXHJcbiAgICAgICAgLm1hcCgoYXJlYSkgPT4gKGFyZWEubWFya2Vyc1xyXG4gICAgICAgICAgLm1hcCgobSkgPT4gKHtcclxuICAgICAgICAgIC8vIGNvbnZlcnQgdG8gbGVhZmxldCBtYXJrZXIgZm9ybWF0XHJcbiAgICAgICAgICAgIGNvb3JkczogWyttLmxhdCwgK20ubG5nXSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IG0uZGVmYXVsdF9sYWJlbCA/PyBtLmxhYmVsLFxyXG4gICAgICAgICAgICB0aXRsZTogbS5sYWJlbCA/PyBtLmRlZmF1bHRfbGFiZWwsXHJcbiAgICAgICAgICB9KSkpKVxyXG4gICAgICAgIC8vIGZsYXR0ZW4gdGhlIGxpc3Qgb2YgbWFya2Vyc1xyXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKSBhcyBNYXJrZXJEYXRhW107XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFZpZXc6IHsgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdOyB6b29tOiBudW1iZXIgfSA9IHtcclxuICAgICAgY2VudGVyOiBbNTQuNTI2MCwgMTUuMjU1MV0sXHJcbiAgICAgIHpvb206IDUsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlICYmIHRoaXMubWFya2VyTGF5ZXIpIHtcclxuICAgICAgdGhpcy5tYXJrZXJMYXllci5jbGVhckxheWVycygpO1xyXG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xyXG4gICAgICB0aGlzLm1hcmtlckxheWVyID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoKTtcclxuICAgICAgaWYgKG1hcmtlcnMpIHtcclxuICAgICAgICBtYXJrZXJzLmZvckVhY2goKG1yaykgPT4ge1xyXG4gICAgICAgICAgTC5tYXJrZXIobXJrLmNvb3JkcylcclxuICAgICAgICAgICAgLmFkZFRvKHRoaXMubWFya2VyTGF5ZXIpXHJcbiAgICAgICAgICAgIC5iaW5kUG9wdXAoYCR7bXJrLnRlbXBsYXRlfWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2UuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XHJcbiAgICAgICAgdGhpcy5maXRNYXBUb0JvdW5kcyhtYXJrZXJzLm1hcCgobSkgPT4gbS5jb29yZHMpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgX3NldEluc3RhbmNlOiAoaW5zdGFuY2UpID0+IHtcclxuICAgICAgICB0aGlzLm1hcEluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICAgICAgdGhpcy5maXRNYXBUb0JvdW5kcyhtYXJrZXJzLm1hcCgobSkgPT4gbS5jb29yZHMpKTtcclxuICAgICAgfSxcclxuICAgICAgX3NldE1hcmtlckxheWVyOiAobSkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFya2VyTGF5ZXIgPSBtO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgdGlsZUxheWVyczogW3tcclxuICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcclxuICAgICAgICBvcHRpb25zOiB7fVxyXG4gICAgICB9XSxcclxuICAgICAgaW5pdGlhbFZpZXcsXHJcbiAgICAgIG1hcmtlcnM6IHRoaXMubWFya2VyTGF5ZXIgPyB1bmRlZmluZWQgOiBtYXJrZXJzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXRNYXBUb0JvdW5kcyhib3VuZHMpIHtcclxuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuZml0Qm91bmRzKGJvdW5kcywge1xyXG4gICAgICAgIG1heFpvb206IDE1LFxyXG4gICAgICAgIHBhZGRpbmc6IFsyMCwgMjBdLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignbWFwIGluc3RhbmNlIGlzIG1pc3NpbmcnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19