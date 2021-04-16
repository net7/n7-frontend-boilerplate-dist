import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
export class MrMapDS extends DataSource {
    // eslint-disable-next-line consistent-return
    transform(data) {
        let markers;
        if (data.find((d) => d.markers)) {
            markers = data
                .map((area) => (area.markers
                .map((m) => {
                var _a, _b;
                return ({
                    // convert to leaflet marker format
                    coords: [+m.lat, +m.lng],
                    template: (_a = m.default_label) !== null && _a !== void 0 ? _a : m.label,
                    title: (_b = m.label) !== null && _b !== void 0 ? _b : m.default_label,
                });
            })))
                // flatten the list of markers
                .reduce((acc, val) => acc.concat(val), []);
        }
        const initialView = {
            center: [54.5260, 15.2551],
            zoom: 5,
        };
        if (this.mapInstance && this.markerLayer) {
            this.markerLayer.clearLayers();
            this.mapInstance.removeLayer(this.markerLayer);
            this.markerLayer = L.markerClusterGroup();
            if (markers) {
                markers.forEach((mrk) => {
                    L.marker(mrk.coords)
                        .addTo(this.markerLayer)
                        .bindPopup(`${mrk.template}`);
                });
                this.mapInstance.addLayer(this.markerLayer);
                this.fitMapToBounds(markers.map((m) => m.coords));
            }
        }
        return {
            _setInstance: (instance) => {
                this.mapInstance = instance;
                this.fitMapToBounds(markers.map((m) => m.coords));
            },
            _setMarkerLayer: (m) => {
                this.markerLayer = m;
            },
            containerId: 'map-canvas',
            libOptions: {
                scrollWheelZoom: false,
            },
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {}
                }],
            initialView,
            markers: this.markerLayer ? undefined : markers
        };
    }
    fitMapToBounds(bounds) {
        if (this.mapInstance) {
            this.mapInstance.fitBounds(bounds, {
                maxZoom: 15,
                padding: [20, 20],
            });
        }
        else {
            console.warn('map instance is missing');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLHVCQUF1QixDQUFDO0FBb0IvQixNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7SUFPckMsNkNBQTZDO0lBQ25DLFNBQVMsQ0FBQyxJQUFzQjtRQUN4QyxJQUFJLE9BQU8sQ0FBQztRQUVaLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9CLE9BQU8sR0FBRyxJQUFJO2lCQUNYLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztpQkFDekIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7O2dCQUFDLE9BQUEsQ0FBQztvQkFDYixtQ0FBbUM7b0JBQ2pDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQ3hCLFFBQVEsUUFBRSxDQUFDLENBQUMsYUFBYSxtQ0FBSSxDQUFDLENBQUMsS0FBSztvQkFDcEMsS0FBSyxRQUFFLENBQUMsQ0FBQyxLQUFLLG1DQUFJLENBQUMsQ0FBQyxhQUFhO2lCQUNsQyxDQUFDLENBQUE7YUFBQSxDQUFDLENBQUMsQ0FBQztnQkFDUCw4QkFBOEI7aUJBQzdCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFpQixDQUFDO1NBQzlEO1FBRUQsTUFBTSxXQUFXLEdBQStDO1lBQzlELE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7WUFDMUIsSUFBSSxFQUFFLENBQUM7U0FDUixDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ3RCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzt5QkFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7eUJBQ3ZCLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbkQ7U0FDRjtRQUNELE9BQU87WUFDTCxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUNELGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUN2QixDQUFDO1lBQ0QsV0FBVyxFQUFFLFlBQVk7WUFDekIsVUFBVSxFQUFFO2dCQUNWLGVBQWUsRUFBRSxLQUFLO2FBQ3ZCO1lBQ0QsVUFBVSxFQUFFLENBQUM7b0JBQ1gsR0FBRyxFQUFFLDhFQUE4RTtvQkFDbkYsT0FBTyxFQUFFLEVBQUU7aUJBQ1osQ0FBQztZQUNGLFdBQVc7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPO1NBQ2hELENBQUM7SUFDSixDQUFDO0lBRU8sY0FBYyxDQUFDLE1BQU07UUFDM0IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDakMsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUNsQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwRGF0YSwgTWFya2VyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xyXG4vLyBsZWFmbGV0IGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgd2luZG93LFxyXG4vLyBhIGRvdWJsZSBpbXBvcnQgcmVzdWx0cyBpbiBlcnJvcnMgd2l0aCB0b29sdGlwcy5cclxuZGVjbGFyZSBjb25zdCBMO1xyXG5cclxuaW50ZXJmYWNlIENvb3JkcyB7IGxhdDogbnVtYmVyOyBsbmc6IG51bWJlciB9XHJcblxyXG5pbnRlcmZhY2UgTWFya2VyIGV4dGVuZHMgQ29vcmRzIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGRlZmF1bHRfbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBUaW1lbGluZVJlc3BvbnNlID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG4gIHpvb206IG51bWJlcjtcclxuICBtYXBfY2VudGVyOiBDb29yZHM7XHJcbiAgbWFya2VyczogTWFya2VyW107XHJcbn1bXVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yTWFwRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBtYXBJbnN0YW5jZTtcclxuXHJcbiAgbWFya2VyTGF5ZXI7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogVGltZWxpbmVSZXNwb25zZSk6IE1hcERhdGEge1xyXG4gICAgbGV0IG1hcmtlcnM7XHJcblxyXG4gICAgaWYgKGRhdGEuZmluZCgoZCkgPT4gZC5tYXJrZXJzKSkge1xyXG4gICAgICBtYXJrZXJzID0gZGF0YVxyXG4gICAgICAgIC5tYXAoKGFyZWEpID0+IChhcmVhLm1hcmtlcnNcclxuICAgICAgICAgIC5tYXAoKG0pID0+ICh7XHJcbiAgICAgICAgICAvLyBjb252ZXJ0IHRvIGxlYWZsZXQgbWFya2VyIGZvcm1hdFxyXG4gICAgICAgICAgICBjb29yZHM6IFsrbS5sYXQsICttLmxuZ10sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBtLmRlZmF1bHRfbGFiZWwgPz8gbS5sYWJlbCxcclxuICAgICAgICAgICAgdGl0bGU6IG0ubGFiZWwgPz8gbS5kZWZhdWx0X2xhYmVsLFxyXG4gICAgICAgICAgfSkpKSlcclxuICAgICAgICAvLyBmbGF0dGVuIHRoZSBsaXN0IG9mIG1hcmtlcnNcclxuICAgICAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSkgYXMgTWFya2VyRGF0YVtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxWaWV3OiB7IGNlbnRlcjogW251bWJlciwgbnVtYmVyXTsgem9vbTogbnVtYmVyIH0gPSB7XHJcbiAgICAgIGNlbnRlcjogWzU0LjUyNjAsIDE1LjI1NTFdLFxyXG4gICAgICB6b29tOiA1LFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5tYXBJbnN0YW5jZSAmJiB0aGlzLm1hcmtlckxheWVyKSB7XHJcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIuY2xlYXJMYXllcnMoKTtcclxuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcclxuICAgICAgdGhpcy5tYXJrZXJMYXllciA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKCk7XHJcbiAgICAgIGlmIChtYXJrZXJzKSB7XHJcbiAgICAgICAgbWFya2Vycy5mb3JFYWNoKChtcmspID0+IHtcclxuICAgICAgICAgIEwubWFya2VyKG1yay5jb29yZHMpXHJcbiAgICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcmtlckxheWVyKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGAke21yay50ZW1wbGF0ZX1gKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1hcEluc3RhbmNlLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuZml0TWFwVG9Cb3VuZHMobWFya2Vycy5tYXAoKG0pID0+IG0uY29vcmRzKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9zZXRJbnN0YW5jZTogKGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuZml0TWFwVG9Cb3VuZHMobWFya2Vycy5tYXAoKG0pID0+IG0uY29vcmRzKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zZXRNYXJrZXJMYXllcjogKG0pID0+IHtcclxuICAgICAgICB0aGlzLm1hcmtlckxheWVyID0gbTtcclxuICAgICAgfSxcclxuICAgICAgY29udGFpbmVySWQ6ICdtYXAtY2FudmFzJyxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbGVMYXllcnM6IFt7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jYXJ0b2RiLWJhc2VtYXBzLXtzfS5nbG9iYWwuc3NsLmZhc3RseS5uZXQvbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsXHJcbiAgICAgICAgb3B0aW9uczoge31cclxuICAgICAgfV0sXHJcbiAgICAgIGluaXRpYWxWaWV3LFxyXG4gICAgICBtYXJrZXJzOiB0aGlzLm1hcmtlckxheWVyID8gdW5kZWZpbmVkIDogbWFya2Vyc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZml0TWFwVG9Cb3VuZHMoYm91bmRzKSB7XHJcbiAgICBpZiAodGhpcy5tYXBJbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLm1hcEluc3RhbmNlLmZpdEJvdW5kcyhib3VuZHMsIHtcclxuICAgICAgICBtYXhab29tOiAxNSxcclxuICAgICAgICBwYWRkaW5nOiBbMjAsIDIwXSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ21hcCBpbnN0YW5jZSBpcyBtaXNzaW5nJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==