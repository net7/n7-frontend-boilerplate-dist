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
            libOptions: Object.assign({}, this.options.libOptions),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUEyQi9CLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxNQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVILE1BQU0sT0FBTyxPQUFRLFNBQVEsVUFBVTtJQUF2Qzs7UUFTRSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUE7SUEyRzFDLENBQUM7SUF6R0MsNkNBQTZDO0lBQ25DLFNBQVMsQ0FBQyxJQUFzQjtRQUN4QyxJQUFJLE9BQXVCLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxHQUFHLElBQUk7aUJBQ1gsR0FBRyxDQUFDLENBQUMs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SUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwRGF0YSwgTWFya2VyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2xlYWZsZXQnO1xyXG4vLyBsZWFmbGV0IGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgd2luZG93LFxyXG4vLyBhIGRvdWJsZSBpbXBvcnQgcmVzdWx0cyBpbiBlcnJvcnMgd2l0aCB0b29sdGlwcy5cclxuZGVjbGFyZSBjb25zdCBMO1xyXG5cclxuaW50ZXJmYWNlIENvb3JkcyB7IGxhdDogbnVtYmVyOyBsbmc6IG51bWJlciB9XHJcblxyXG5pbnRlcmZhY2UgTWFya2VyIGV4dGVuZHMgQ29vcmRzIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGRlZmF1bHRfbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBUaW1lbGluZVJlc3BvbnNlID0ge1xyXG4gIGlkPzogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG4gIHpvb206IG51bWJlcjtcclxuICBtYXBfY2VudGVyOiBDb29yZHM7XHJcbiAgbWFya2VyczogTWFya2VyW107XHJcbn1bXVxyXG5cclxuaW50ZXJmYWNlIE1hcmtlcldpdGhJRCBleHRlbmRzIE1hcmtlckRhdGEge1xyXG4gIGlkPzogbnVtYmVyO1xyXG4gIHNsdWc6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTUFSS0VSX0lDT04gPSBMLmljb24oe1xyXG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi5wbmcnLFxyXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbidcclxufSk7XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTl9TRUxFQ1RFRCA9IEwuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXNlbGVjdGVkLnBuZycsXHJcbiAgaWNvblNpemU6IFszMCwgNDUuNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMjVdLFxyXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uLXNlbGVjdGVkJ1xyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNck1hcERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgLyoqIEluc3RhbmNlIG9mIHRoZSBsZWFmbGV0IG1hcCAqL1xyXG4gIG1hcEluc3RhbmNlO1xyXG5cclxuICAvKiogSW5zdGFuY2Ugb2YgdGhlIG1hcmtlciBsYXllckdyb3VwICovXHJcbiAgbWFya2VyTGF5ZXI7XHJcblxyXG4gIG1hcExvYWRlZCQ6IFN1YmplY3Q8TWFwPiA9IG5ldyBTdWJqZWN0KClcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBUaW1lbGluZVJlc3BvbnNlKTogTWFwRGF0YSB7XHJcbiAgICBsZXQgbWFya2VyczogTWFya2VyV2l0aElEW107XHJcblxyXG4gICAgaWYgKGRhdGEuZmluZCgoZCkgPT4gZC5tYXJrZXJzKSkge1xyXG4gICAgICBtYXJrZXJzID0gZGF0YVxyXG4gICAgICAgIC5tYXAoKGFyZWEpID0+IChhcmVhLm1hcmtlcnNcclxuICAgICAgICAgIC5tYXAoKG0pID0+ICh7XHJcbiAgICAgICAgICAvLyBjb252ZXJ0IHRvIGxlYWZsZXQgbWFya2VyIGZvcm1hdFxyXG4gICAgICAgICAgICBjb29yZHM6IFsrbS5sYXQsICttLmxuZ10gYXMgW251bWJlciwgbnVtYmVyXSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IG0uZGVmYXVsdF9sYWJlbCA/PyBtLmxhYmVsLFxyXG4gICAgICAgICAgICB0aXRsZTogbS5sYWJlbCA/PyBtLmRlZmF1bHRfbGFiZWwsXHJcbiAgICAgICAgICAgIGlkOiBhcmVhLmlkLFxyXG4gICAgICAgICAgICBzbHVnOiBhcmVhLnNsdWcsXHJcbiAgICAgICAgICB9KSkpKVxyXG4gICAgICAgIC8vIGZsYXR0ZW4gdGhlIGxpc3Qgb2YgbWFya2Vyc1xyXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsVmlldzogeyBjZW50ZXI6IFtudW1iZXIsIG51bWJlcl07IHpvb206IG51bWJlciB9ID0ge1xyXG4gICAgICAvLyBjZW50ZXIgb2YgZXVyb3BlIChvbmx5IGZvciBpbml0aWFsIGxvYWQpXHJcbiAgICAgIGNlbnRlcjogWzU0LjUyNjAsIDE1LjI1NTFdLFxyXG4gICAgICB6b29tOiA1LFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpZiB0aGUgbWFwIGFuZCB0aGUgbWFya2VycyBhbHJlYWR5IGV4aXN0XHJcbiAgICAvLyB1cGRhdGUgdGhlIGFscmVhZHkgZXhpc3RpbmcgbGF5ZXJzLlxyXG4gICAgaWYgKHRoaXMubWFwSW5zdGFuY2UgJiYgdGhpcy5tYXJrZXJMYXllcikge1xyXG4gICAgICB0aGlzLmJ1aWxkTWFya2VycyhtYXJrZXJzKTtcclxuICAgICAgdGhpcy5maXRNYXBUb0JvdW5kcyhtYXJrZXJzLm1hcCgobSkgPT4gbS5jb29yZHMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvLyBvbmx5IGNhbGxlZCBvbmNlLCBvbiBjb21wb25lbnQgaW5pdCFcclxuICAgICAgX3NldEluc3RhbmNlOiAoaW5zdGFuY2UpID0+IHtcclxuICAgICAgICB0aGlzLm1hcEluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICAgICAgLy8gY2VudGVyIHRoZSBtYXAgb24gdGhlIG1hcmtlcnNcclxuICAgICAgICB0aGlzLmZpdE1hcFRvQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBtLmNvb3JkcykpO1xyXG4gICAgICAgIC8vIGxvYWQgY3VzdG9tIG1hcmtlcnNcclxuICAgICAgICB0aGlzLmJ1aWxkTWFya2VycyhtYXJrZXJzKTtcclxuICAgICAgICB0aGlzLm1hcExvYWRlZCQubmV4dCh7IG1hcDogaW5zdGFuY2UsIG1hcmtlcnM6IHRoaXMubWFya2VyTGF5ZXIgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5lcklkOiAnbWFwLWNhbnZhcycsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICAuLi50aGlzLm9wdGlvbnMubGliT3B0aW9ucyxcclxuICAgICAgfSxcclxuICAgICAgdGlsZUxheWVyczogW3tcclxuICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcclxuICAgICAgICBvcHRpb25zOiB7fVxyXG4gICAgICB9XSxcclxuICAgICAgaW5pdGlhbFZpZXcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXRNYXBUb0JvdW5kcyhib3VuZHMpIHtcclxuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuZml0Qm91bmRzKGJvdW5kcywge1xyXG4gICAgICAgIG1heFpvb206IDE1LFxyXG4gICAgICAgIHBhZGRpbmc6IFsyMCwgMjBdLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignbWFwIGluc3RhbmNlIGlzIG1pc3NpbmcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBtYXJrZXJzIHdpdGggYSBjdXN0b20gaWNvbiBhbmQgYWRkcyB0aGVtIHRvIHRoZSBtYXAuXHJcbiAgICogQHBhcmFtIG1hcmtlcnMgYW4gYXJyYXkgb2YgbWFya2Vyc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgYnVpbGRNYXJrZXJzKG1hcmtlcnM6IE1hcmtlcldpdGhJRFtdKSB7XHJcbiAgICBpZiAoIW1hcmtlcnMpIHJldHVybjtcclxuICAgIC8vIHJlbW92ZSBhbGwgZXhpc3RpbmcgbWFya2Vyc1xyXG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcclxuICAgICAgdGhpcy5tYXJrZXJMYXllci5jbGVhckxheWVycygpO1xyXG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWFya2VyR3JvdXAgPSBMLm1hcmtlckNsdXN0ZXJHcm91cCgpO1xyXG4gICAgbWFya2Vycy5mb3JFYWNoKCh7XHJcbiAgICAgIGNvb3JkcywgdGVtcGxhdGUsIGlkLCBzbHVnXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgIC8vIGNyZWF0ZSBjdXN0b20gaWNvbiBtYXJrZXJcclxuICAgICAgY29uc3QgbmV3TWFya2VyID0gTC5tYXJrZXIoY29vcmRzLCB7IGljb246IE1BUktFUl9JQ09OIH0pO1xyXG4gICAgICBpZiAoaWQgJiYgc2x1Zykge1xyXG4gICAgICAgIG5ld01hcmtlci5pZCA9IGlkO1xyXG4gICAgICAgIG5ld01hcmtlci5zbHVnID0gc2x1ZztcclxuICAgICAgfVxyXG4gICAgICBuZXdNYXJrZXJcclxuICAgICAgICAvLyBhZGQgdGhlIG1hcmtlciB0byB0aGUgZ3JvdXBcclxuICAgICAgICAuYWRkVG8obWFya2VyR3JvdXApXHJcbiAgICAgICAgLy8gYWRkIHRoZSBvbi1jbGljayB0b29sdGlwXHJcbiAgICAgICAgLmJpbmRQb3B1cCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbigncmVtb3ZlJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbignYWRkJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OX1NFTEVDVEVEKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGFkZCB0aGUgbWFya2VycyB0byB0aGUgbWFwIGluc3RhbmNlXHJcbiAgICB0aGlzLm1hcEluc3RhbmNlLmFkZExheWVyKG1hcmtlckdyb3VwKTtcclxuICAgIC8vIHVwZGF0ZSB0aGUgbWFya2VyIGxheWVyIGluc3RhbmNlXHJcbiAgICB0aGlzLm1hcmtlckxheWVyID0gbWFya2VyR3JvdXA7XHJcbiAgfVxyXG59XHJcbiJdfQ==