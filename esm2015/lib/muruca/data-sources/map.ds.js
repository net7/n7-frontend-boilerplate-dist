import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
import { Subject } from 'rxjs';
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
    constructor() {
        super(...arguments);
        this.mapLoaded$ = new Subject();
    }
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
                    id: area.id,
                    slug: area.slug,
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
                this.mapLoaded$.next({ map: instance, markers: this.markerLayer });
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
        markers.forEach(({ coords, template, id, slug }) => {
            // create custom icon marker
            const newMarker = L.marker(coords, { icon: MARKER_ICON });
            if (id && slug) {
                newMarker.id = id;
                newMarker.slug = slug;
            }
            newMarker
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUEyQi9CLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxNQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVILE1BQU0sT0FBTyxPQUFRLFNBQVEsVUFBVTtJQUF2Qzs7UUFTRSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUE7SUEyRzFDLENBQUM7SUF6R0MsNkNBQTZDO0lBQ25DLFNBQVMsQ0FBQyxJQUFzQjtRQUN4QyxJQUFJLE9BQXVCLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxHQUFHLElBQUk7aUJBQ1gsR0FBRyxDQUFDLENBQUMs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Q0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcERhdGEsIE1hcmtlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNYXAgfSBmcm9tICdsZWFmbGV0JztcclxuLy8gbGVhZmxldCBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHdpbmRvdyxcclxuLy8gYSBkb3VibGUgaW1wb3J0IHJlc3VsdHMgaW4gZXJyb3JzIHdpdGggdG9vbHRpcHMuXHJcbmRlY2xhcmUgY29uc3QgTDtcclxuXHJcbmludGVyZmFjZSBDb29yZHMgeyBsYXQ6IG51bWJlcjsgbG5nOiBudW1iZXIgfVxyXG5cclxuaW50ZXJmYWNlIE1hcmtlciBleHRlbmRzIENvb3JkcyB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBkZWZhdWx0X2xhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgVGltZWxpbmVSZXNwb25zZSA9IHtcclxuICBpZD86IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHNsdWc6IHN0cmluZztcclxuICB6b29tOiBudW1iZXI7XHJcbiAgbWFwX2NlbnRlcjogQ29vcmRzO1xyXG4gIG1hcmtlcnM6IE1hcmtlcltdO1xyXG59W11cclxuXHJcbmludGVyZmFjZSBNYXJrZXJXaXRoSUQgZXh0ZW5kcyBNYXJrZXJEYXRhIHtcclxuICBpZD86IG51bWJlcjtcclxuICBzbHVnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OID0gTC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4ucG5nJyxcclxuICBpY29uU2l6ZTogWzMwLCA0NS41XSxcclxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXHJcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24nXHJcbn0pO1xyXG5cclxuY29uc3QgTUFSS0VSX0lDT05fU0VMRUNURUQgPSBMLmljb24oe1xyXG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi1zZWxlY3RlZC5wbmcnLFxyXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbi1zZWxlY3RlZCdcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJNYXBEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBJbnN0YW5jZSBvZiB0aGUgbGVhZmxldCBtYXAgKi9cclxuICBtYXBJbnN0YW5jZTtcclxuXHJcbiAgLyoqIEluc3RhbmNlIG9mIHRoZSBtYXJrZXIgbGF5ZXJHcm91cCAqL1xyXG4gIG1hcmtlckxheWVyO1xyXG5cclxuICBtYXBMb2FkZWQkOiBTdWJqZWN0PE1hcD4gPSBuZXcgU3ViamVjdCgpXHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogVGltZWxpbmVSZXNwb25zZSk6IE1hcERhdGEge1xyXG4gICAgbGV0IG1hcmtlcnM6IE1hcmtlcldpdGhJRFtdO1xyXG5cclxuICAgIGlmIChkYXRhLmZpbmQoKGQpID0+IGQubWFya2VycykpIHtcclxuICAgICAgbWFya2VycyA9IGRhdGFcclxuICAgICAgICAubWFwKChhcmVhKSA9PiAoYXJlYS5tYXJrZXJzXHJcbiAgICAgICAgICAubWFwKChtKSA9PiAoe1xyXG4gICAgICAgICAgLy8gY29udmVydCB0byBsZWFmbGV0IG1hcmtlciBmb3JtYXRcclxuICAgICAgICAgICAgY29vcmRzOiBbK20ubGF0LCArbS5sbmddIGFzIFtudW1iZXIsIG51bWJlcl0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBtLmRlZmF1bHRfbGFiZWwgPz8gbS5sYWJlbCxcclxuICAgICAgICAgICAgdGl0bGU6IG0ubGFiZWwgPz8gbS5kZWZhdWx0X2xhYmVsLFxyXG4gICAgICAgICAgICBpZDogYXJlYS5pZCxcclxuICAgICAgICAgICAgc2x1ZzogYXJlYS5zbHVnLFxyXG4gICAgICAgICAgfSkpKSlcclxuICAgICAgICAvLyBmbGF0dGVuIHRoZSBsaXN0IG9mIG1hcmtlcnNcclxuICAgICAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFZpZXc6IHsgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdOyB6b29tOiBudW1iZXIgfSA9IHtcclxuICAgICAgLy8gY2VudGVyIG9mIGV1cm9wZSAob25seSBmb3IgaW5pdGlhbCBsb2FkKVxyXG4gICAgICBjZW50ZXI6IFs1NC41MjYwLCAxNS4yNTUxXSxcclxuICAgICAgem9vbTogNSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gaWYgdGhlIG1hcCBhbmQgdGhlIG1hcmtlcnMgYWxyZWFkeSBleGlzdFxyXG4gICAgLy8gdXBkYXRlIHRoZSBhbHJlYWR5IGV4aXN0aW5nIGxheWVycy5cclxuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlICYmIHRoaXMubWFya2VyTGF5ZXIpIHtcclxuICAgICAgdGhpcy5idWlsZE1hcmtlcnMobWFya2Vycyk7XHJcbiAgICAgIHRoaXMuZml0TWFwVG9Cb3VuZHMobWFya2Vycy5tYXAoKG0pID0+IG0uY29vcmRzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLy8gb25seSBjYWxsZWQgb25jZSwgb24gY29tcG9uZW50IGluaXQhXHJcbiAgICAgIF9zZXRJbnN0YW5jZTogKGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICAgIC8vIGNlbnRlciB0aGUgbWFwIG9uIHRoZSBtYXJrZXJzXHJcbiAgICAgICAgdGhpcy5maXRNYXBUb0JvdW5kcyhtYXJrZXJzLm1hcCgobSkgPT4gbS5jb29yZHMpKTtcclxuICAgICAgICAvLyBsb2FkIGN1c3RvbSBtYXJrZXJzXHJcbiAgICAgICAgdGhpcy5idWlsZE1hcmtlcnMobWFya2Vycyk7XHJcbiAgICAgICAgdGhpcy5tYXBMb2FkZWQkLm5leHQoeyBtYXA6IGluc3RhbmNlLCBtYXJrZXJzOiB0aGlzLm1hcmtlckxheWVyIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgdGlsZUxheWVyczogW3tcclxuICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcclxuICAgICAgICBvcHRpb25zOiB7fVxyXG4gICAgICB9XSxcclxuICAgICAgaW5pdGlhbFZpZXcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXRNYXBUb0JvdW5kcyhib3VuZHMpIHtcclxuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuZml0Qm91bmRzKGJvdW5kcywge1xyXG4gICAgICAgIG1heFpvb206IDE1LFxyXG4gICAgICAgIHBhZGRpbmc6IFsyMCwgMjBdLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignbWFwIGluc3RhbmNlIGlzIG1pc3NpbmcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBtYXJrZXJzIHdpdGggYSBjdXN0b20gaWNvbiBhbmQgYWRkcyB0aGVtIHRvIHRoZSBtYXAuXHJcbiAgICogQHBhcmFtIG1hcmtlcnMgYW4gYXJyYXkgb2YgbWFya2Vyc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgYnVpbGRNYXJrZXJzKG1hcmtlcnM6IE1hcmtlcldpdGhJRFtdKSB7XHJcbiAgICBpZiAoIW1hcmtlcnMpIHJldHVybjtcclxuICAgIC8vIHJlbW92ZSBhbGwgZXhpc3RpbmcgbWFya2Vyc1xyXG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcclxuICAgICAgdGhpcy5tYXJrZXJMYXllci5jbGVhckxheWVycygpO1xyXG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWFya2VyR3JvdXAgPSBMLm1hcmtlckNsdXN0ZXJHcm91cCgpO1xyXG4gICAgbWFya2Vycy5mb3JFYWNoKCh7XHJcbiAgICAgIGNvb3JkcywgdGVtcGxhdGUsIGlkLCBzbHVnXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgIC8vIGNyZWF0ZSBjdXN0b20gaWNvbiBtYXJrZXJcclxuICAgICAgY29uc3QgbmV3TWFya2VyID0gTC5tYXJrZXIoY29vcmRzLCB7IGljb246IE1BUktFUl9JQ09OIH0pO1xyXG4gICAgICBpZiAoaWQgJiYgc2x1Zykge1xyXG4gICAgICAgIG5ld01hcmtlci5pZCA9IGlkO1xyXG4gICAgICAgIG5ld01hcmtlci5zbHVnID0gc2x1ZztcclxuICAgICAgfVxyXG4gICAgICBuZXdNYXJrZXJcclxuICAgICAgICAvLyBhZGQgdGhlIG1hcmtlciB0byB0aGUgZ3JvdXBcclxuICAgICAgICAuYWRkVG8obWFya2VyR3JvdXApXHJcbiAgICAgICAgLy8gYWRkIHRoZSBvbi1jbGljayB0b29sdGlwXHJcbiAgICAgICAgLmJpbmRQb3B1cCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbigncmVtb3ZlJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbignYWRkJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OX1NFTEVDVEVEKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGFkZCB0aGUgbWFya2VycyB0byB0aGUgbWFwIGluc3RhbmNlXHJcbiAgICB0aGlzLm1hcEluc3RhbmNlLmFkZExheWVyKG1hcmtlckdyb3VwKTtcclxuICAgIC8vIHVwZGF0ZSB0aGUgbWFya2VyIGxheWVyIGluc3RhbmNlXHJcbiAgICB0aGlzLm1hcmtlckxheWVyID0gbWFya2VyR3JvdXA7XHJcbiAgfVxyXG59XHJcbiJdfQ==