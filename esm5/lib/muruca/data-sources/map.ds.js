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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyx1QkFBdUIsQ0FBQztBQW9CL0I7SUFBNkIsMkJBQVU7SUFBdkM7O0lBMEVBLENBQUM7SUFuRUMsNkNBQTZDO0lBQ25DLDJCQUFTLEdBQW5CLFVBQW9CLElBQXNCO1FBQTFDLGlCQXNEQztRQXJEQyxJQUFJLE9BQU8sQ0FBQztRQUVaLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxHQUFHLElBQUk7aUJBQ1gsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsT0FBTztpQkFDekIsR0FBRyxDQUFDLFVBQUMsQ0FBQzs7Z0JBQUssT0FBQSxDQUFDO29CQUNiLG1DQUFtQztvQkFDakMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDeEIsUUFBUSxRQUFFLENBQUMsQ0FBQyxhQUFhLG1DQUFJLENBQUMsQ0FBQyxLQUFLO29CQUNwQyxLQUFLLFFBQUUsQ0FBQyxDQUFDLEtBQUssbUNBQUksQ0FBQyxDQUFDLGFBQWE7aUJBQ2xDLENBQUMsQ0FBQTthQUFBLENBQUMsQ0FBQyxFQU5TLENBTVQsQ0FBQztnQkFDUCw4QkFBOEI7aUJBQzdCLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFmLENBQWUsRUFBRSxFQUFFLENBQWlCLENBQUM7U0FDOUQ7UUFFRCxJQUFNLFdBQVcsR0FBK0M7WUFDOUQsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztZQUMxQixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFDLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO29CQUNsQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7eUJBQ2pCLEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO3lCQUN2QixTQUFTLENBQUMsS0FBRyxHQUFHLENBQUMsUUFBVSxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1NBQ0Y7UUFDRCxPQUFPO1lBQ0wsWUFBWSxFQUFFLFVBQUMsUUFBUTtnQkFDckIsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxDQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBQ0QsZUFBZSxFQUFFLFVBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDdkIsQ0FBQztZQUNELFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRTtnQkFDVixlQUFlLEVBQUUsS0FBSzthQUN2QjtZQUNELFVBQVUsRUFBRSxDQUFDO29CQUNYLEdBQUcsRUFBRSw4RUFBOEU7b0JBQ25GLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUM7WUFDRixXQUFXLGFBQUE7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPO1NBQ2hELENBQUM7SUFDSixDQUFDO0lBRU8sZ0NBQWMsR0FBdEIsVUFBdUIsTUFBTTtRQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ2xCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUExRUQsQ0FBNkIsVUFBVSxHQTBFdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBEYXRhLCBNYXJrZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcbi8vIGxlYWZsZXQgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSB3aW5kb3csXG4vLyBhIGRvdWJsZSBpbXBvcnQgcmVzdWx0cyBpbiBlcnJvcnMgd2l0aCB0b29sdGlwcy5cbmRlY2xhcmUgY29uc3QgTDtcblxuaW50ZXJmYWNlIENvb3JkcyB7IGxhdDogbnVtYmVyOyBsbmc6IG51bWJlciB9XG5cbmludGVyZmFjZSBNYXJrZXIgZXh0ZW5kcyBDb29yZHMge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZWZhdWx0X2xhYmVsOiBzdHJpbmc7XG59XG5cbnR5cGUgVGltZWxpbmVSZXNwb25zZSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xuICB6b29tOiBudW1iZXI7XG4gIG1hcF9jZW50ZXI6IENvb3JkcztcbiAgbWFya2VyczogTWFya2VyW107XG59W11cblxuZXhwb3J0IGNsYXNzIE1yTWFwRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICBtYXBJbnN0YW5jZTtcblxuICBtYXJrZXJMYXllcjtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBUaW1lbGluZVJlc3BvbnNlKTogTWFwRGF0YSB7XG4gICAgbGV0IG1hcmtlcnM7XG5cbiAgICBpZiAoZGF0YS5maW5kKChkKSA9PiBkLm1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gZGF0YVxuICAgICAgICAubWFwKChhcmVhKSA9PiAoYXJlYS5tYXJrZXJzXG4gICAgICAgICAgLm1hcCgobSkgPT4gKHtcbiAgICAgICAgICAvLyBjb252ZXJ0IHRvIGxlYWZsZXQgbWFya2VyIGZvcm1hdFxuICAgICAgICAgICAgY29vcmRzOiBbK20ubGF0LCArbS5sbmddLFxuICAgICAgICAgICAgdGVtcGxhdGU6IG0uZGVmYXVsdF9sYWJlbCA/PyBtLmxhYmVsLFxuICAgICAgICAgICAgdGl0bGU6IG0ubGFiZWwgPz8gbS5kZWZhdWx0X2xhYmVsLFxuICAgICAgICAgIH0pKSkpXG4gICAgICAgIC8vIGZsYXR0ZW4gdGhlIGxpc3Qgb2YgbWFya2Vyc1xuICAgICAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSkgYXMgTWFya2VyRGF0YVtdO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxWaWV3OiB7IGNlbnRlcjogW251bWJlciwgbnVtYmVyXTsgem9vbTogbnVtYmVyIH0gPSB7XG4gICAgICBjZW50ZXI6IFs1NC41MjYwLCAxNS4yNTUxXSxcbiAgICAgIHpvb206IDUsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlICYmIHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIuY2xlYXJMYXllcnMoKTtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICB0aGlzLm1hcmtlckxheWVyID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoKTtcbiAgICAgIGlmIChtYXJrZXJzKSB7XG4gICAgICAgIG1hcmtlcnMuZm9yRWFjaCgobXJrKSA9PiB7XG4gICAgICAgICAgTC5tYXJrZXIobXJrLmNvb3JkcylcbiAgICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcmtlckxheWVyKVxuICAgICAgICAgICAgLmJpbmRQb3B1cChgJHttcmsudGVtcGxhdGV9YCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hcEluc3RhbmNlLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICB0aGlzLmZpdE1hcFRvQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBtLmNvb3JkcykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgX3NldEluc3RhbmNlOiAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLmZpdE1hcFRvQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBtLmNvb3JkcykpO1xuICAgICAgfSxcbiAgICAgIF9zZXRNYXJrZXJMYXllcjogKG0pID0+IHtcbiAgICAgICAgdGhpcy5tYXJrZXJMYXllciA9IG07XG4gICAgICB9LFxuICAgICAgY29udGFpbmVySWQ6ICdtYXAtY2FudmFzJyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB0aWxlTGF5ZXJzOiBbe1xuICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgICAgb3B0aW9uczoge31cbiAgICAgIH1dLFxuICAgICAgaW5pdGlhbFZpZXcsXG4gICAgICBtYXJrZXJzOiB0aGlzLm1hcmtlckxheWVyID8gdW5kZWZpbmVkIDogbWFya2Vyc1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGZpdE1hcFRvQm91bmRzKGJvdW5kcykge1xuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlKSB7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLmZpdEJvdW5kcyhib3VuZHMsIHtcbiAgICAgICAgbWF4Wm9vbTogMTUsXG4gICAgICAgIHBhZGRpbmc6IFsyMCwgMjBdLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignbWFwIGluc3RhbmNlIGlzIG1pc3NpbmcnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==