import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
const MARKER_ICON = L.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon'
});
const MARKER_ICON_SELECTED = L.icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon-selected'
});
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
            // center of europe (only for initial load)
            center: [54.5260, 15.2551],
            zoom: 5,
        };
        // if the map and the markers already exist
        // update the already existing layers.
        if (this.mapInstance && this.markerLayer) {
            this.buildMarkers(markers);
            this.fitMapToBounds(markers.map((m) => m.coords));
        }
        return {
            // only called once, on component init!
            _setInstance: (instance) => {
                this.mapInstance = instance;
                // center the map on the markers
                this.fitMapToBounds(markers.map((m) => m.coords));
                // load custom markers
                this.buildMarkers(markers);
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
    /**
     * Builds markers with a custom icon and adds them to the map.
     * @param markers an array of markers
     */
    buildMarkers(markers) {
        if (!markers)
            return;
        // remove all existing markers
        if (this.markerLayer) {
            this.markerLayer.clearLayers();
            this.mapInstance.removeLayer(this.markerLayer);
        }
        const markerGroup = L.markerClusterGroup();
        markers.forEach(({ coords, template }) => {
            // create custom icon marker
            const newMarker = L.marker(coords, { icon: MARKER_ICON })
                // add the marker to the group
                .addTo(markerGroup)
                // add the on-click tooltip
                .bindPopup(template);
            newMarker.getPopup().on('remove', ({ target }) => {
                target._source.setIcon(MARKER_ICON);
            });
            newMarker.getPopup().on('add', ({ target }) => {
                target._source.setIcon(MARKER_ICON_SELECTED);
            });
        });
        // add the markers to the map instance
        this.mapInstance.addLayer(markerGroup);
        // update the marker layer instance
        this.markerLayer = markerGroup;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLHVCQUF1QixDQUFDO0FBb0IvQixNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsU0FBUyxFQUFFLGFBQWE7Q0FDekIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xDLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsU0FBUyxFQUFFLHNCQUFzQjtDQUNsQyxDQUFDLENBQUM7QUFFSCxNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7SUFTckMsNkNBQTZDO0lBQ25DLFNBQVMsQ0FBQyxJQUFzQjtRQUN4QyxJQUFJLE9BQXFCLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxHQUFHLElBQUk7aUJBQ1gsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO2lCQUN6QixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7Z0JBQUMsT0FBQSxDQUFDO29C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QkFBOEI7aUJBQzdCLEtBQUssQ0FBQyxXQUFXLENBQUM7Z0JBQ25CLDJCQUEyQjtpQkFDMUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXZCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO2dCQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztZQUVILFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO2dCQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcERhdGEsIE1hcmtlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcclxuLy8gbGVhZmxldCBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHdpbmRvdyxcclxuLy8gYSBkb3VibGUgaW1wb3J0IHJlc3VsdHMgaW4gZXJyb3JzIHdpdGggdG9vbHRpcHMuXHJcbmRlY2xhcmUgY29uc3QgTDtcclxuXHJcbmludGVyZmFjZSBDb29yZHMgeyBsYXQ6IG51bWJlcjsgbG5nOiBudW1iZXIgfVxyXG5cclxuaW50ZXJmYWNlIE1hcmtlciBleHRlbmRzIENvb3JkcyB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBkZWZhdWx0X2xhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgVGltZWxpbmVSZXNwb25zZSA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHNsdWc6IHN0cmluZztcclxuICB6b29tOiBudW1iZXI7XHJcbiAgbWFwX2NlbnRlcjogQ29vcmRzO1xyXG4gIG1hcmtlcnM6IE1hcmtlcltdO1xyXG59W11cclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OID0gTC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4ucG5nJyxcclxuICBpY29uU2l6ZTogWzMwLCA0NS41XSxcclxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXHJcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24nXHJcbn0pO1xyXG5cclxuY29uc3QgTUFSS0VSX0lDT05fU0VMRUNURUQgPSBMLmljb24oe1xyXG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi1zZWxlY3RlZC5wbmcnLFxyXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbi1zZWxlY3RlZCdcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJNYXBEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBJbnN0YW5jZSBvZiB0aGUgbGVhZmxldCBtYXAgKi9cclxuICBtYXBJbnN0YW5jZTtcclxuXHJcbiAgLyoqIEluc3RhbmNlIG9mIHRoZSBtYXJrZXIgbGF5ZXJHcm91cCAqL1xyXG4gIG1hcmtlckxheWVyO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IFRpbWVsaW5lUmVzcG9uc2UpOiBNYXBEYXRhIHtcclxuICAgIGxldCBtYXJrZXJzOiBNYXJrZXJEYXRhW107XHJcblxyXG4gICAgaWYgKGRhdGEuZmluZCgoZCkgPT4gZC5tYXJrZXJzKSkge1xyXG4gICAgICBtYXJrZXJzID0gZGF0YVxyXG4gICAgICAgIC5tYXAoKGFyZWEpID0+IChhcmVhLm1hcmtlcnNcclxuICAgICAgICAgIC5tYXAoKG0pID0+ICh7XHJcbiAgICAgICAgICAvLyBjb252ZXJ0IHRvIGxlYWZsZXQgbWFya2VyIGZvcm1hdFxyXG4gICAgICAgICAgICBjb29yZHM6IFsrbS5sYXQsICttLmxuZ10gYXMgW251bWJlciwgbnVtYmVyXSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IG0uZGVmYXVsdF9sYWJlbCA/PyBtLmxhYmVsLFxyXG4gICAgICAgICAgICB0aXRsZTogbS5sYWJlbCA/PyBtLmRlZmF1bHRfbGFiZWwsXHJcbiAgICAgICAgICB9KSkpKVxyXG4gICAgICAgIC8vIGZsYXR0ZW4gdGhlIGxpc3Qgb2YgbWFya2Vyc1xyXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsVmlldzogeyBjZW50ZXI6IFtudW1iZXIsIG51bWJlcl07IHpvb206IG51bWJlciB9ID0ge1xyXG4gICAgICAvLyBjZW50ZXIgb2YgZXVyb3BlIChvbmx5IGZvciBpbml0aWFsIGxvYWQpXHJcbiAgICAgIGNlbnRlcjogWzU0LjUyNjAsIDE1LjI1NTFdLFxyXG4gICAgICB6b29tOiA1LFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpZiB0aGUgbWFwIGFuZCB0aGUgbWFya2VycyBhbHJlYWR5IGV4aXN0XHJcbiAgICAvLyB1cGRhdGUgdGhlIGFscmVhZHkgZXhpc3RpbmcgbGF5ZXJzLlxyXG4gICAgaWYgKHRoaXMubWFwSW5zdGFuY2UgJiYgdGhpcy5tYXJrZXJMYXllcikge1xyXG4gICAgICB0aGlzLmJ1aWxkTWFya2VycyhtYXJrZXJzKTtcclxuICAgICAgdGhpcy5maXRNYXBUb0JvdW5kcyhtYXJrZXJzLm1hcCgobSkgPT4gbS5jb29yZHMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvLyBvbmx5IGNhbGxlZCBvbmNlLCBvbiBjb21wb25lbnQgaW5pdCFcclxuICAgICAgX3NldEluc3RhbmNlOiAoaW5zdGFuY2UpID0+IHtcclxuICAgICAgICB0aGlzLm1hcEluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICAgICAgLy8gY2VudGVyIHRoZSBtYXAgb24gdGhlIG1hcmtlcnNcclxuICAgICAgICB0aGlzLmZpdE1hcFRvQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBtLmNvb3JkcykpO1xyXG4gICAgICAgIC8vIGxvYWQgY3VzdG9tIG1hcmtlcnNcclxuICAgICAgICB0aGlzLmJ1aWxkTWFya2VycyhtYXJrZXJzKTtcclxuICAgICAgfSxcclxuICAgICAgY29udGFpbmVySWQ6ICdtYXAtY2FudmFzJyxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbGVMYXllcnM6IFt7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jYXJ0b2RiLWJhc2VtYXBzLXtzfS5nbG9iYWwuc3NsLmZhc3RseS5uZXQvbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsXHJcbiAgICAgICAgb3B0aW9uczoge31cclxuICAgICAgfV0sXHJcbiAgICAgIGluaXRpYWxWaWV3LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZml0TWFwVG9Cb3VuZHMoYm91bmRzKSB7XHJcbiAgICBpZiAodGhpcy5tYXBJbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLm1hcEluc3RhbmNlLmZpdEJvdW5kcyhib3VuZHMsIHtcclxuICAgICAgICBtYXhab29tOiAxNSxcclxuICAgICAgICBwYWRkaW5nOiBbMjAsIDIwXSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ21hcCBpbnN0YW5jZSBpcyBtaXNzaW5nJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZHMgbWFya2VycyB3aXRoIGEgY3VzdG9tIGljb24gYW5kIGFkZHMgdGhlbSB0byB0aGUgbWFwLlxyXG4gICAqIEBwYXJhbSBtYXJrZXJzIGFuIGFycmF5IG9mIG1hcmtlcnNcclxuICAgKi9cclxuICBwcml2YXRlIGJ1aWxkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJEYXRhW10pIHtcclxuICAgIGlmICghbWFya2VycykgcmV0dXJuO1xyXG4gICAgLy8gcmVtb3ZlIGFsbCBleGlzdGluZyBtYXJrZXJzXHJcbiAgICBpZiAodGhpcy5tYXJrZXJMYXllcikge1xyXG4gICAgICB0aGlzLm1hcmtlckxheWVyLmNsZWFyTGF5ZXJzKCk7XHJcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXJrZXJHcm91cCA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKCk7XHJcbiAgICBtYXJrZXJzLmZvckVhY2goKHsgY29vcmRzLCB0ZW1wbGF0ZSB9KSA9PiB7XHJcbiAgICAgIC8vIGNyZWF0ZSBjdXN0b20gaWNvbiBtYXJrZXJcclxuICAgICAgY29uc3QgbmV3TWFya2VyID0gTC5tYXJrZXIoY29vcmRzLCB7IGljb246IE1BUktFUl9JQ09OIH0pXHJcbiAgICAgICAgLy8gYWRkIHRoZSBtYXJrZXIgdG8gdGhlIGdyb3VwXHJcbiAgICAgICAgLmFkZFRvKG1hcmtlckdyb3VwKVxyXG4gICAgICAgIC8vIGFkZCB0aGUgb24tY2xpY2sgdG9vbHRpcFxyXG4gICAgICAgIC5iaW5kUG9wdXAodGVtcGxhdGUpO1xyXG5cclxuICAgICAgbmV3TWFya2VyLmdldFBvcHVwKCkub24oJ3JlbW92ZScsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0Ll9zb3VyY2Uuc2V0SWNvbihNQVJLRVJfSUNPTik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbmV3TWFya2VyLmdldFBvcHVwKCkub24oJ2FkZCcsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0Ll9zb3VyY2Uuc2V0SWNvbihNQVJLRVJfSUNPTl9TRUxFQ1RFRCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBhZGQgdGhlIG1hcmtlcnMgdG8gdGhlIG1hcCBpbnN0YW5jZVxyXG4gICAgdGhpcy5tYXBJbnN0YW5jZS5hZGRMYXllcihtYXJrZXJHcm91cCk7XHJcbiAgICAvLyB1cGRhdGUgdGhlIG1hcmtlciBsYXllciBpbnN0YW5jZVxyXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IG1hcmtlckdyb3VwO1xyXG4gIH1cclxufVxyXG4iXX0=